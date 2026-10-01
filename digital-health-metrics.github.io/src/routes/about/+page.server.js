import { book } from '#lib/server/book.js';
import { locales } from '#lib/server/content.js';
import { DEFAULT_THEMES } from '@lilydesignsystem/svelte-picker-bar';
import { DEFAULT_LOCALE } from '#lib/locales.js';

export function load() {
	const { order, parts } = book(DEFAULT_LOCALE);
	return {
		topicCount: order.length,
		partCount: parts.length,
		themeCount: DEFAULT_THEMES.length,
		localeCount: locales().length
	};
}
