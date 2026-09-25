import { book, index } from '$lib/server/book.js';

export function load({ params }) {
	const topics = index(params.locale).sort((a, b) => a.title.localeCompare(b.title, params.locale));

	// Group under the initial letter, so the page reads as an A-Z index.
	const groups = [];
	for (const topic of topics) {
		const letter = topic.title[0].toUpperCase();
		const last = groups.at(-1);
		if (last && last.letter === letter) last.topics.push(topic);
		else groups.push({ letter, topics: [topic] });
	}

	return { bookTitle: book(params.locale).title, groups, topicCount: topics.length };
}
