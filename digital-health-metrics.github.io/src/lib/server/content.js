// Access to the vendored book, keyed by content path ("locales/en-gb/topics/dau/index.md").
//
// Server-only on purpose: the glob below inlines every Markdown file, and
// $lib/server guarantees none of it can reach a browser bundle. Pages read it
// from a `+page.server.js` load, which runs at build time under prerendering.

const markdownModules = import.meta.glob('/content/**/*.md', {
	query: '?raw',
	import: 'default',
	eager: true
});

// Vendored as peer-id.txt, not the book's own dotfile name: Vite's
// import.meta.glob silently excludes dotfiles, even one named literally
// (no wildcard involved), so a hidden filename here would match nothing.
const peerIdModules = import.meta.glob('/content/**/peer-id.txt', {
	query: '?raw',
	import: 'default',
	eager: true
});

/** @type {Record<string, string>} Content path -> raw Markdown. */
export const files = Object.fromEntries(
	Object.entries(markdownModules).map(([path, source]) => [path.replace(/^\/content\//, ''), source])
);

/** Raw Markdown for a content path, or undefined. */
export function read(path) {
	return files[path];
}

// The slug segment is `[^/]+`, not `[\w.-]+`: translated locales may rename
// topic directories to native-script slugs, which \w (ASCII word chars)
// doesn't match.
const TOPIC_PATH = /^locales\/([\w-]+)\/topics\/([^/]+)\/index\.md$/;

/** Every locale with a topics/ directory, sorted A-Z. */
export function locales() {
	const set = new Set();
	for (const path of Object.keys(files)) {
		const m = TOPIC_PATH.exec(path);
		if (m) set.add(m[1]);
	}
	return [...set].sort();
}

/** Every topic slug present in a locale's topics/, sorted A-Z. */
export function topicSlugs(locale) {
	const prefix = `locales/${locale}/topics/`;
	return Object.keys(files)
		.filter((path) => path.startsWith(prefix) && path.endsWith('/index.md'))
		.map((path) => path.slice(prefix.length, -'/index.md'.length))
		.sort();
}

/** Raw Markdown for one topic, or undefined. */
export function readTopic(locale, slug) {
	return read(`locales/${locale}/topics/${slug}/index.md`);
}

/**
 * The book's `.locale-peer-id` for one topic (vendored here as peer-id.txt)
 * — a hash shared by every locale's version of "the same" topic, even when
 * their slugs differ. This is how the site resolves "this page in another
 * locale" for the locale switcher, without a central manifest.
 */
const peerIds = Object.fromEntries(
	Object.entries(peerIdModules).map(([path, source]) => [
		path.replace(/^\/content\//, '').replace(/\/peer-id\.txt$/, '/index.md'),
		source.trim()
	])
);

export function peerId(locale, slug) {
	return peerIds[`locales/${locale}/topics/${slug}/index.md`];
}

let peerIndexCache = null;

/**
 * Map from peer-id -> { [locale]: slug }, built once. Lets the site answer
 * "what's this topic's slug in locale X?" starting from any locale's slug.
 */
function peerIndex() {
	if (peerIndexCache) return peerIndexCache;
	const index = {};
	for (const [path, id] of Object.entries(peerIds)) {
		const m = TOPIC_PATH.exec(path);
		if (!m) continue;
		const [, locale, slug] = m;
		(index[id] ??= {})[locale] = slug;
	}
	peerIndexCache = index;
	return index;
}

/** { [locale]: slug } for every locale that has this topic, keyed from one (locale, slug). */
export function peers(locale, slug) {
	const id = peerId(locale, slug);
	if (!id) return { [locale]: slug };
	return peerIndex()[id] ?? { [locale]: slug };
}
