import { error } from '@sveltejs/kit';
import { book } from '$lib/server/book.js';
import { locales } from '$lib/server/content.js';

// `entries()` for the [locale] segment lives in +page.server.js (this
// directory's own) and in topics/[slug]/+page.server.js — `entries()` is only
// a valid export from +page.js/+page.server.js/+server.js, not from a layout.

export function load({ params }) {
	if (!locales().includes(params.locale)) {
		error(404, `Unknown locale: ${params.locale}`);
	}
	// This locale's own book title (translated locales/<locale>/index.md when
	// it has one, else canonical English — see book.js). Set here, once, for
	// the whole /locales/[locale]/ subtree, rather than in every leaf page's
	// own load: the root +layout.svelte reads it off the merged page.data,
	// where it overrides the root layout's canonical-locale bookTitle used
	// for the locale-agnostic routes (the root picker, /about/).
	return { locale: params.locale, bookTitle: book(params.locale).title };
}
