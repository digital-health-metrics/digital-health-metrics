import { book, index } from '#lib/server/book.js';
import { routableLocales } from '#lib/server/content.js';

export function entries() {
	return routableLocales().map((locale) => ({ locale }));
}

// The whole index is embedded in this prerendered page: title, part, blurb,
// summary, and section headings per topic is small enough to ship at once,
// which keeps search working with no server and no network round trip.
export function load({ params }) {
	const locale = params.locale;
	return { bookTitle: book(locale).title, topics: index(locale) };
}
