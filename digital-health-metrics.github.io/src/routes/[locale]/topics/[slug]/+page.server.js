import { error } from '@sveltejs/kit';
import { topic } from '#lib/server/book.js';
import { routableLocales, topicSlugs } from '#lib/server/content.js';
import { canonicalLocale } from '#lib/locales.js';

// Slugs can differ by locale (see book.js), so the full (locale, slug) pair
// set is enumerated explicitly here rather than relying on a naive cross
// product with the parent [locale] entries — a per-locale slug list crossed
// blindly against every locale would try to prerender slugs that don't exist
// in some locales and miss the locale-specific ones that do. This also
// covers alias routes (see routableLocales()) with the same slug set as
// their real locale.
export function entries() {
	return routableLocales().flatMap((locale) =>
		topicSlugs(canonicalLocale(locale)).map((slug) => ({ locale, slug }))
	);
}

export function load({ params }) {
	const locale = canonicalLocale(params.locale);
	const page = topic(locale, params.slug);
	if (!page) error(404, `No topic named ${params.slug} in locale ${params.locale}`);
	return page;
}
