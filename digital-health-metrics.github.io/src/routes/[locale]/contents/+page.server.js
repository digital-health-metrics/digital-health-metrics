import { book } from '#lib/server/book.js';
import { routableLocales } from '#lib/server/content.js';

export function entries() {
	return routableLocales().map((locale) => ({ locale }));
}

export function load({ params }) {
	const { title, parts, order } = book(params.locale);
	return { bookTitle: title, parts, topicCount: order.length };
}
