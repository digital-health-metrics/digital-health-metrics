import { error } from '@sveltejs/kit';
import { topic } from '$lib/server/book.js';
import { locales, topicSlugs } from '$lib/server/content.js';

// Slugs can differ by locale (see book.js), so the full (locale, slug) pair
// set is enumerated explicitly here rather than relying on a naive cross
// product with the parent [locale] entries — a per-locale slug list crossed
// blindly against every locale would try to prerender slugs that don't exist
// in some locales and miss the locale-specific ones that do.
export function entries() {
	return locales().flatMap((locale) => topicSlugs(locale).map((slug) => ({ locale, slug })));
}

export function load({ params }) {
	const page = topic(params.locale, params.slug);
	if (!page) error(404, `No topic named ${params.slug} in locale ${params.locale}`);
	return page;
}
