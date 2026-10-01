// Render a vendored Markdown file into the HTML this site publishes.
//
// Two rewrites happen on the way through, both driven by paths.js:
//   - book links (`topics/dau.md`, `dau.md`) become site routes
//   - headings gain stable ids, so a page can link to its own sections
//
// Runs at build time only: every route that calls this is prerendered.

import { Marked } from 'marked';
import GithubSlugger from 'github-slugger';
import { resolve } from '$app/paths';
import { isExternal, rewriteHref } from './paths.js';

/** Split a leading `# Title` off the source. Every book file starts with one. */
export function splitTitle(source) {
	const match = (/^\s*#\s+(.+?)\s*$/m).exec(source);
	if (!match || source.slice(0, match.index).trim() !== '') {
		return { title: '', body: source };
	}
	return {
		title: match[1],
		body: source.slice(match.index + match[0].length).replace(/^\n+/, '')
	};
}

/** First paragraph of `body`, as plain text — the summary shown in listings. */
export function firstParagraph(body) {
	for (const block of body.split(/\n\s*\n/)) {
		const text = block.trim();
		if (!text || text.startsWith('#') || text.startsWith('-') || text.startsWith('```')) continue;

		return text.replace(/\[([^\]]+)\]\([^)]*\)/g, '$1').// links -> their text
		replace(/[*_`]/g, '').replace(/\s+/g, ' ').trim();
	}
	return '';
}

/**
 * Render one content file.
 *
 * @param {string} source Raw Markdown.
 * @param {string} file Content path, e.g. "topics/dau.md" — relative links resolve against it.
 * @returns {{title: string, summary: string, html: string, headings: {id: string, text: string, depth: number}[]}}
 */
export function render(source, file) {
	const { title, body } = splitTitle(source);
	const slugger = new GithubSlugger();
	const headings = [];
	const marked = new Marked({ gfm: true });

	marked.use({
		walkTokens(token) {
			if (token.type === 'link') token.href = rewriteHref(token.href, file, resolve(''));
		},
		renderer: {
			heading(token) {
				const text = this.parser.parseInline(token.tokens);
				// Slug from the plain text, so `## The math` is `#the-math`
				// whether or not the heading carries emphasis.
				const id = slugger.slug(token.text);
				// Only h2/h3 reach the on-this-page nav; deeper headings are
				// still linkable, just not listed.
				if (token.depth <= 3) headings.push({ id, text: token.text, depth: token.depth });
				return `<h${token.depth} id="${id}">${text}</h${token.depth}>\n`;
			},
			link(token) {
				const href = token.href ?? '';
				const text = this.parser.parseInline(token.tokens);
				const title = token.title ? ` title="${token.title}"` : '';
				// External links open in place but are marked, so the stylesheet
				// can flag them and so referrers stay off third-party servers.
				const extra = isExternal(href) ? ' class="external" rel="noopener noreferrer"' : '';
				return `<a href="${href}"${title}${extra}>${text}</a>`;
			}
		}
	});

	return {
		title,
		summary: firstParagraph(body),
		html: marked.parse(body),
		headings
	};
}
