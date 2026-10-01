import { splitTitle } from '#lib/markdown.js';
import { read, locales } from '#lib/server/content.js';

// The book's own title, from its README, shown in the header and the footer.
// Read directly rather than through book() so this locale-agnostic layout
// never has to pick a locale just to know the book's name.
//
// The locale list is also supplied from here — the one place server-only
// content.js can be read — so the header's language picker always matches
// the locales actually vendored, rather than a second hardcoded list.
export function load() {
	return {
		bookTitle: splitTitle(read('README.md') ?? '').title || 'Digital Health Metrics',
		locales: locales()
	};
}
