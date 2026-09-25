import { render } from '$lib/markdown.js';
import { book, localizeHtml, readmeSource } from '$lib/server/book.js';
import { locales } from '$lib/server/content.js';

// This is the first page reached for each locale, so its entries() drives
// prerendering for the whole [locale] subtree: the crawler discovers
// contents/topics/search for each locale from the nav links this page (via
// the shared layout) renders. Only topics/[slug] needs its own entries(),
// since slugs vary by locale in a way a plain crawl still handles fine, but
// declaring it explicitly is more robust (see that file).
export function entries() {
	return locales().map((locale) => ({ locale }));
}

export function load({ params }) {
	const { locale } = params;
	// This locale's own translated locales/<locale>/index.md when it has one,
	// else the canonical (English) README — so an untranslated locale still
	// renders instead of crashing, rather than the page silently staying English.
	const source = readmeSource(locale);
	// Rendered against the literal 'README.md' regardless of which file the
	// source actually came from: every README-shaped file (canonical or
	// translated) writes its links as content-root-relative paths
	// ("locales/…"), which only resolve correctly when the base directory used
	// for relative-link resolution is the content root (dirname('README.md')),
	// not a translated file's own locales/<locale>/ directory.
	const { title, summary } = render(source, 'README.md');
	const { order } = book(locale);

	// The README opens with a summary and a "New here?" sentence, both of which
	// the hero and the Start here list already show. Render from the first part
	// heading onward so the page states each of them once. The README only ever
	// links into the canonical locale, so its topic links are re-targeted at
	// this locale's own slugs after rendering.
	const partsStart = source.indexOf('\n## ');
	const intro = partsStart === -1 ? source : source.slice(0, partsStart);
	const rendered = render(partsStart === -1 ? source : source.slice(partsStart + 1), 'README.md');
	const html = localizeHtml(rendered.html, locale);

	// The book's own intro sentence ("New here? Start with …", translated)
	// decides the starting points, so the site never disagrees with the book
	// about where to begin — resolved into this locale's own slugs via the
	// entries book() already worked out (which went through each topic's
	// .locale-peer-id). Every link in the intro is one of these picks, in any
	// language, so no literal-English phrase match is needed to find them.
	const startHere = [...intro.matchAll(/\[([^\]]+)\]\(locales\/[\w-]+\/topics\/([^/]+)\/\)/g)].map(
		([, label, canonicalSlug]) => {
			const entry = order.find((e) => e.canonicalSlug === canonicalSlug);
			return {
				title: entry?.title ?? label,
				blurb: entry?.blurb ?? '',
				href: entry?.href ?? `/locales/${locale}/topics/${canonicalSlug}/`
			};
		}
	);

	return {
		title,
		summary,
		html,
		startHere
	};
}
