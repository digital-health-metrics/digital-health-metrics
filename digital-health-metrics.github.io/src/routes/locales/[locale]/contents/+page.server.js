import { book } from '$lib/server/book.js';

export function load({ params }) {
	const { title, parts, order } = book(params.locale);
	return { bookTitle: title, parts, topicCount: order.length };
}
