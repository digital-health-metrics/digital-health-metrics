// Mapping between vendored content files and site routes.
// Content paths are always relative to content/, e.g.
// "locales/en-gb/topics/patient-reported-outcome-measure/index.md". Links
// inside topic files, and the ones in the book's own README.md, are written
// as bare directory references ("../retention-rate/" from a sibling topic, or
// "locales/en-gb/topics/retention-rate/" from the README) — never with a
// ".md" filename or an explicit "index.md" — so contentPath below never
// needs to strip an extension.

/** Resolve `href` (as written inside `fromFile`) to a content path. */
export function contentPath(href, fromFile) {
	const from = fromFile.includes('/') ? fromFile.slice(0, fromFile.lastIndexOf('/')) : '';
	const segments = href.startsWith('/')
		? href.slice(1).split('/')
		: [...from.split('/'), ...href.split('/')];
	const out = [];
	for (const segment of segments) {
		if (segment === '' || segment === '.') continue;
		if (segment === '..') out.pop();
		else out.push(segment);
	}
	return out.join('/');
}

/** Site route for a content path, or null when the file is not published. */
export function routeFor(path) {
	switch (path) {
		case 'README.md':
			return '/';
		case 'GLOSSARY.md':
			return '/glossary/';
		case 'INDEX.md':
			return '/subject-index/';
		case 'STYLE_GUIDE.md':
			return '/style-guide/';
	}
	// [^/]+, not [\w.-]+: translated locales use native-script/accented topic
	// slugs (e.g. a Chinese locale's own transliterated slug) that \w won't match.
	const topic = /^locales\/([\w-]+)\/topics\/([^/]+)(?:\/index\.md)?$/.exec(path);
	if (topic) return `/locales/${topic[1]}/topics/${topic[2]}/`;
	return null;
}

/**
 * Rewrite a Markdown link into a site link, leaving external links untouched.
 *
 * `base` is prepended to any link that resolves to a route, so the book's own
 * cross-references survive being served from a subpath — the same thing the
 * Svelte templates do with `{base}{href}`.
 */
export function rewriteHref(href, fromFile, base = '') {
	if (!href) return href;
	if (/^[a-z][a-z0-9+.-]*:/i.test(href) || href.startsWith('//') || href.startsWith('#')) return href;
	const hashAt = href.indexOf('#');
	const hash = hashAt === -1 ? '' : href.slice(hashAt);
	const target = hashAt === -1 ? href : href.slice(0, hashAt);
	if (!target) return href;
	const route = routeFor(contentPath(target, fromFile));
	return route ? base + route + hash : href;
}

/** True when a link leaves the site. */
export function isExternal(href) {
	return /^[a-z][a-z0-9+.-]*:/i.test(href ?? '') || (href ?? '').startsWith('//');
}
