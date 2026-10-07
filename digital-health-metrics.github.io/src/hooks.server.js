// app.html hardcodes <html lang="en"> because SvelteKit's template can't see
// the route's locale param. This hook rewrites that tag per request — which,
// under adapter-static, means per prerendered page at build time, so every
// static HTML file ships with its own correct lang/dir with no client-side
// correction needed.
//
// Locale-scoped routes (/<code>/...) get lang="<code>" and, for the
// RTL_LOCALES in $lib/locales.js, dir="rtl". Every other route (home, about)
// keeps the template's own lang="en" dir="ltr", since it has no locale to
// report — the root locale picker itself is presented in English.
//
// Detection goes through event.route.id (the matched route's file-system
// path, e.g. "/[locale]" or "/[locale]/topics/[slug]") rather than regexing
// event.url.pathname, because a single leading path segment is no longer a
// reliable signal on its own once the "locales/" prefix is gone — a plain
// pathname regex would also match static routes like /about/.
//
// event.params.locale is always a real locale code (two-letter aliases such as "en" 404).
import { RTL_LOCALES } from '#lib/locales.js';

/** @type {import('@sveltejs/kit/hooks').Handle} */
export async function handle({ event, resolve }) {
	const isLocaleRoute = event.route.id === '/[locale]' || event.route.id?.startsWith('/[locale]/');
	const locale = isLocaleRoute ? event.params.locale : undefined;
	if (!locale) return resolve(event);

	const dir = RTL_LOCALES.has(locale) ? 'rtl' : 'ltr';
	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace('<html lang="en">', `<html lang="${locale}" dir="${dir}">`)
	});
}
