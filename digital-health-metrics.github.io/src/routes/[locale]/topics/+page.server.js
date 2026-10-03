import { book, index } from '#lib/server/book.js';
import { routableLocales } from '#lib/server/content.js';
import { canonicalLocale } from '#lib/locales.js';

// Seeded explicitly (not left to prerender-crawl discovery) because the
// parent [locale] page's own nav links always point at the real locale code,
// never an alias — see [locale]/+page.server.js.
export function entries() {
	return routableLocales().map((locale) => ({ locale }));
}

export function load({ params }) {
	const locale = canonicalLocale(params.locale);
	const topics = index(locale).sort((a, b) => a.title.localeCompare(b.title, locale));

	// Group under the initial letter, so the page reads as an A-Z index.
	const groups = [];
	for (const topic of topics) {
		const letter = topic.title[0].toUpperCase();
		const last = groups.at(-1);
		if (last && last.letter === letter) last.topics.push(topic);
		else groups.push({ letter, topics: [topic] });
	}

	return { bookTitle: book(locale).title, groups, topicCount: topics.length };
}
