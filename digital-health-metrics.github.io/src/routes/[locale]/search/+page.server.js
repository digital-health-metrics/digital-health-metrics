import { book, index } from '#lib/server/book.js';
import { routableLocales } from '#lib/server/content.js';
import { canonicalLocale } from '#lib/locales.js';

// Seeded explicitly (not left to prerender-crawl discovery) because the
// parent [locale] page's own nav links always point at the real locale code,
// never an alias — see [locale]/+page.server.js.
export function entries() {
	return routableLocales().map((locale) => ({ locale }));
}

// The whole index is embedded in this prerendered page: title, part, blurb,
// summary, and section headings per topic is small enough to ship at once,
// which keeps search working with no server and no network round trip.
export function load({ params }) {
	const locale = canonicalLocale(params.locale);
	return { bookTitle: book(locale).title, topics: index(locale) };
}
