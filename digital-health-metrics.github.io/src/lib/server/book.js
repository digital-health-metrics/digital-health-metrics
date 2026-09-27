// The book's structure, derived from the book's own README, resolved per locale.
//
// README.md is the table of contents: each `## Heading` opens a part, and each
// `- [Title](locales/<canonical-locale>/topics/<slug>/) — blurb` under it is a
// topic in reading order, linked via the book's canonical authoring locale.
// That makes the site's ordering the book's ordering by construction —
// reorder the README upstream and the sidebar, the contents page, and
// previous/next all follow, in every published locale.
//
// A topic's slug can differ by locale (e.g. a translated locale may use a
// native-script slug for the same topic an English locale spells with Latin
// characters), so resolving "this topic, in locale X" goes through each
// topic's `.locale-peer-id` (see content.js `peers`) rather than assuming the
// slug is the same everywhere. When a locale has no peer-id entry for the
// canonical slug (for example, because the canonical locale itself isn't one
// of this site's published locales), resolution falls back to the canonical
// slug itself — see resolveEntry below.

import { read, readTopic, topicSlugs, peers } from './content.js';
import { firstParagraph, render, splitTitle } from '../markdown.js';

const PART = /^##\s+(.+?)\s*$/;
const ENTRY = /^-\s+\[([^\]]+)\]\(locales\/([\w-]+)\/topics\/([^/]+)\/\)\s*(?:[—–-]\s*(.*))?$/;
// A locale's own translated index.md links relatively (`topics/<slug>/`),
// correct for a file that already lives inside `locales/<that-locale>/` —
// unlike the canonical README.md, which needs the full `locales/<locale>/`
// prefix since it lives at the repo root. Same shape otherwise.
const RELATIVE_ENTRY = /^-\s+\[([^\]]+)\]\(topics\/([^/]+)\/\)\s*(?:[—–-]\s*(.*))?$/;
const SECTION_HEADING = /^##\s+(.+?)\s*$/;

/**
 * Parse one README-shaped source into `{ title, parts }`. Two shapes:
 *
 * - The canonical `/README.md` (`locale` omitted): entries link with the full
 *   `locales/<canonicalLocale>/topics/<slug>/` path, which *is* the
 *   canonical (locale, slug) pair — matched by `ENTRY`.
 * - A locale's own translated `locales/<locale>/index.md` (`locale` given):
 *   entries link relatively, `topics/<localSlug>/` — matched by
 *   `RELATIVE_ENTRY`. `localSlug` can differ from the canonical slug (a
 *   translated locale may use a native-script slug), so it's bridged back to
 *   the canonical one via this topic's peer-id, read off `en-us` — one of
 *   the three locales `tools/localize.py` mechanically derives from
 *   `en-gb-oxendict`, so it always mirrors `en-gb-oxendict`'s directory
 *   names exactly and is always published (unlike `en-gb-oxendict` itself,
 *   which is never vendored into `content/`, so it can't be read directly).
 */
function parseIndex(source, locale) {
	const { title, body } = splitTitle(source);
	const parts = [];
	let current = null;
	let inFence = false;

	for (const line of body.split('\n')) {
		if (line.startsWith('```')) inFence = !inFence;
		if (inFence) continue;

		const part = PART.exec(line);
		if (part) {
			current = { title: part[1], entries: [] };
			parts.push(current);
			continue;
		}

		const entry = ENTRY.exec(line);
		if (entry && current) {
			current.entries.push({
				title: entry[1],
				canonicalLocale: entry[2],
				canonicalSlug: entry[3],
				blurb: entry[4] ?? ''
			});
			continue;
		}

		const relative = locale && RELATIVE_ENTRY.exec(line);
		if (relative && current) {
			const localSlug = relative[2];
			const canonicalSlug = peers(locale, localSlug)['en-us'] ?? localSlug;
			current.entries.push({
				title: relative[1],
				canonicalLocale: 'en-us',
				canonicalSlug,
				blurb: relative[3] ?? ''
			});
		}
	}

	return { title, parts };
}

function buildCanonical() {
	const { title, parts } = parseIndex(read('README.md') ?? '');

	// Parts that carry no topics (the closing note on benchmark freshness, say)
	// belong on the home page as prose, not in the navigation.
	const navParts = parts.filter((part) => part.entries.length > 0);

	return { title: title || 'Digital Health Metrics', navParts };
}

let canonicalCache = null;
function canonical() {
	return (canonicalCache ??= buildCanonical());
}

const localizedIndexCache = new Map();

/**
 * A locale's own translated `locales/<locale>/index.md`, parsed the same way
 * as the canonical README, or `null` when that locale has no translation yet
 * (empty/missing file) — callers fall back to canonical-locale text in that
 * case rather than crashing or showing a blank page.
 */
function localizedIndex(locale) {
	if (localizedIndexCache.has(locale)) return localizedIndexCache.get(locale);
	const source = read(`locales/${locale}/index.md`);
	const result = source && source.trim() ? parseIndex(source, locale) : null;
	localizedIndexCache.set(locale, result);
	return result;
}

/**
 * This locale's own README source (translated `index.md`) when it has one,
 * else the canonical `/README.md` — used for the home page's title, intro
 * prose and "New here?" links, which come from the whole document rather
 * than the structured parts/entries `localizedIndex` extracts.
 */
export function readmeSource(locale) {
	return read(`locales/${locale}/index.md`) || read('README.md') || '';
}

/** canonicalSlug -> this locale's own {title, blurb}, from its translated index.md. */
function localizedEntries(locale) {
	const localized = localizedIndex(locale);
	const map = new Map();
	if (!localized) return map;
	for (const part of localized.parts) {
		for (const entry of part.entries) map.set(entry.canonicalSlug, entry);
	}
	return map;
}

/** This locale's own part-heading text, in canonical order, or null if untranslated. */
function localizedPartTitles(locale) {
	const localized = localizedIndex(locale);
	if (!localized) return null;
	return localized.parts.filter((part) => part.entries.length > 0).map((part) => part.title);
}

/** Resolve one README entry (canonical locale + slug) into a locale's own page. */
function resolveEntry(entry, locale, translated) {
	const localePeers = peers(entry.canonicalLocale, entry.canonicalSlug);
	// Falls back to the canonical slug if this locale is somehow missing the
	// topic, so a page still renders (as a 404-prone but non-crashing link)
	// rather than the whole nav silently dropping an entry.
	const slug = localePeers[locale] ?? entry.canonicalSlug;
	const source = readTopic(locale, slug);
	// The topic's own (already-translated) H1 is the primary title source —
	// every topic is translated, so this is reliable even for a locale whose
	// index.md isn't translated yet. `translated` (this locale's own README
	// entry, when it has one) is consulted for blurb, which has no other
	// source, and as a title fallback.
	const localTitle = source ? splitTitle(source).title : '';
	return {
		slug,
		href: `/locales/${locale}/topics/${slug}/`,
		title: localTitle || translated?.title || entry.title,
		blurb: translated?.blurb || (locale === entry.canonicalLocale ? entry.blurb : ''),
		part: entry.part,
		// Kept so callers (e.g. the home page's "Start here" links, which quote
		// the README's own canonical-locale slugs) can match an entry without
		// re-deriving it from the README themselves.
		canonicalSlug: entry.canonicalSlug
	};
}

/** The book's `{ title, blurb, href, part }` for the title of a topic file. */
function titleOf(locale, slug) {
	const source = readTopic(locale, slug);
	if (!source) return slug;
	return splitTitle(source).title || slug;
}

const bookCache = new Map();

/** The book for one locale: `{ title, parts: [{title, entries}], order: [...] }`. */
export function book(locale) {
	if (bookCache.has(locale)) return bookCache.get(locale);

	const { title: canonicalTitle, navParts } = canonical();
	const byCanonicalSlug = localizedEntries(locale);
	const partTitles = localizedPartTitles(locale);
	const localized = localizedIndex(locale);
	const title = localized?.title || canonicalTitle;

	const parts = navParts.map((part, i) => ({
		title: partTitles?.[i] ?? part.title,
		entries: part.entries.map((entry) =>
			resolveEntry(entry, locale, byCanonicalSlug.get(entry.canonicalSlug))
		)
	}));
	let order = parts.flatMap((part) => part.entries.map((entry) => ({ ...entry, part: part.title })));

	// Anything in this locale's topics/ that the README never links to (via
	// its canonical-locale peer) would otherwise be unreachable. Publish it in
	// an overflow part rather than dropping it.
	const listed = new Set(order.map((entry) => entry.slug));
	const orphanSlugs = topicSlugs(locale).filter((slug) => !listed.has(slug));
	if (orphanSlugs.length) {
		const entries = orphanSlugs.map((slug) => ({
			slug,
			href: `/locales/${locale}/topics/${slug}/`,
			title: titleOf(locale, slug),
			blurb: ''
		}));
		const part = { title: 'Also in this book', entries };
		parts.push(part);
		order = order.concat(entries.map((entry) => ({ ...entry, part: part.title })));
	}

	const result = { title, parts, order };
	bookCache.set(locale, result);
	return result;
}

/** Navigation neighbours for a topic, either side possibly null. */
export function neighbours(locale, slug) {
	const { order } = book(locale);
	const at = order.findIndex((entry) => entry.slug === slug);
	if (at === -1) return { index: -1, total: order.length, previous: null, next: null, part: null };
	return {
		index: at,
		total: order.length,
		previous: at > 0 ? order[at - 1] : null,
		next: at < order.length - 1 ? order[at + 1] : null,
		part: order[at].part
	};
}

/** A rendered topic page, or null when the slug has no content file in this locale. */
export function topic(locale, slug) {
	const source = readTopic(locale, slug);
	if (!source) return null;
	const rendered = render(source, `locales/${locale}/topics/${slug}/index.md`);
	// Every other locale's URL for this exact topic, for the locale switcher —
	// resolved via .locale-peer-id, not by assuming the slug is unchanged.
	const localeLinks = Object.fromEntries(
		Object.entries(peers(locale, slug)).map(([loc, s]) => [loc, `/locales/${loc}/topics/${s}/`])
	);
	return {
		slug,
		locale,
		bookTitle: book(locale).title,
		...rendered,
		...neighbours(locale, slug),
		localeLinks
	};
}

const TOPIC_HREF = /href="\/locales\/([\w-]+)\/topics\/([^/]+)\/"/g;

/**
 * Rewrite rendered HTML's topic links from whichever locale they were written
 * for (normally the canonical one, since the README only ever links into it)
 * into `locale`'s own slugs. Used for the parts of the README's own HTML that
 * are reused as-is (prose, intro sections) but still contain a handful of
 * topic cross-references.
 */
export function localizeHtml(html, locale) {
	return html.replace(TOPIC_HREF, (match, fromLocale, slug) => {
		const mapped = peers(fromLocale, slug)[locale];
		return mapped ? `href="/locales/${locale}/topics/${mapped}/"` : match;
	});
}

/** Compact records for listing and searching, without the rendered bodies. */
export function index(locale) {
	return book(locale).order.map((entry) => {
		const source = readTopic(locale, entry.slug) ?? '';
		const { title, body } = splitTitle(source);
		return {
			slug: entry.slug,
			href: entry.href,
			title: title || entry.title,
			part: entry.part,
			blurb: entry.blurb,
			summary: firstParagraph(body),
			// Section headings make the search index cover "what's inside a topic"
			// without shipping bodies.
			sections: body
				.split('\n')
				.map((line) => SECTION_HEADING.exec(line)?.[1])
				.filter(Boolean)
		};
	});
}
