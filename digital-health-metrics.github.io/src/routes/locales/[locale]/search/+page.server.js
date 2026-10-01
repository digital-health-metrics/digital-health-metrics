import { book, index } from '#lib/server/book.js';

// The whole index is embedded in this prerendered page: title, part, blurb,
// summary, and section headings per topic is small enough to ship at once,
// which keeps search working with no server and no network round trip.
export function load({ params }) {
	return { bookTitle: book(params.locale).title, topics: index(params.locale) };
}
