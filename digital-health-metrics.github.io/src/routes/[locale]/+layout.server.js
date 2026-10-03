import { error } from '@sveltejs/kit';
import { book } from '#lib/server/book.js';
import { locales } from '#lib/server/content.js';
import { canonicalLocale } from '#lib/locales.js';

// `entries()` for the [locale] segment lives in +page.server.js (this
// directory's own) and in topics/[slug]/+page.server.js — `entries()` is only
// a valid export from +page.js/+page.server.js/+server.js, not from a layout.

export function load({ params }) {
	// params.locale may be a two-letter alias (e.g. "en" for "en-001" — see
	// $lib/locales.js); resolved once here so every leaf page under this
	// layout, and this layout's own book title below, always deal in real
	// codes. `data.locale` returned here is therefore always the real code,
	// never the alias the URL was actually requested under.
	const locale = canonicalLocale(params.locale);
	if (!locales().includes(locale)) {
		error(404, `Unknown locale: ${params.locale}`);
	}
	// This locale's own book title (translated locales/<locale>/index.md when
	// it has one, else canonical English — see book.js). Set here, once, for
	// the whole /[locale]/ subtree, rather than in every leaf page's
	// own load: the root +layout.svelte reads it off the merged page.data,
	// where it overrides the root layout's canonical-locale bookTitle used
	// for the locale-agnostic routes (the root picker, /about/).
	return { locale, bookTitle: book(locale).title };
}
