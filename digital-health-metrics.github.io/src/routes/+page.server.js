import { render } from '#lib/markdown.js';
import { read, locales } from '#lib/server/content.js';
import { book } from '#lib/server/book.js';
import { DEFAULT_LOCALE, localeLabel } from '#lib/locales.js';

export function load() {
	const source = read('README.md') ?? '';
	const { title, summary } = render(source, 'README.md');

	// Groups variants of the same language together (by the label's text
	// before its " - " country/region suffix, e.g. "English"), with the
	// default locale sorted first, then the rest alphabetically by label.
	const localeList = locales()
		.map((code) => ({ code, label: localeLabel(code), isDefault: code === DEFAULT_LOCALE }))
		.sort((a, b) => {
			if (a.isDefault || b.isDefault) return a.isDefault ? -1 : 1;
			const languageA = a.label.replace(/\s*-.*$/, '');
			const languageB = b.label.replace(/\s*-.*$/, '');
			if (languageA !== languageB) return languageA.localeCompare(languageB);
			return a.label.localeCompare(b.label);
		});

	return {
		title,
		summary,
		locales: localeList,
		topicCount: book(DEFAULT_LOCALE).order.length
	};
}
