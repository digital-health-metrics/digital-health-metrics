import { book } from '#lib/server/book.js';
import { routableLocales } from '#lib/server/content.js';
import { canonicalLocale } from '#lib/locales.js';

// Seeded explicitly (not left to prerender-crawl discovery) because the
// parent [locale] page's own nav links always point at the real locale code,
// never an alias — see [locale]/+page.server.js.
export function entries() {
	return routableLocales().map((locale) => ({ locale }));
}

export function load({ params }) {
	const { title, parts, order } = book(canonicalLocale(params.locale));
	return { bookTitle: title, parts, topicCount: order.length };
}
