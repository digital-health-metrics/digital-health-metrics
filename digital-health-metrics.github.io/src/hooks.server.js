// app.html hardcodes <html lang="en"> because SvelteKit's template can't see
// the route's locale param. This hook rewrites that tag per request — which,
// under adapter-static, means per prerendered page at build time, so every
// static HTML file ships with its own correct lang/dir with no client-side
// correction needed.
//
// Locale-scoped routes (/locales/<code>/...) get lang="<code>" and, for the
// RTL_LOCALES in $lib/locales.js, dir="rtl". Every other route (home, about)
// keeps the template's own lang="en" dir="ltr", since it has no locale to
// report — the root locale picker itself is presented in English.
import { RTL_LOCALES } from '$lib/locales.js';

const LOCALE_ROUTE = /^\/locales\/([\w-]+)\//;

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	const locale = LOCALE_ROUTE.exec(event.url.pathname)?.[1];
	if (!locale) return resolve(event);

	const dir = RTL_LOCALES.has(locale) ? 'rtl' : 'ltr';
	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace('<html lang="en">', `<html lang="${locale}" dir="${dir}">`)
	});
}
