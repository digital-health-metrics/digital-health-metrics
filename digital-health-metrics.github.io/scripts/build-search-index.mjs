// Builds build/search-index.json from the generated HTML. See spec/search/index.md.
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, sep } from 'node:path';
import { LOCALE_ALIASES } from '#lib/locales.js';

const BUILD = process.argv[2] ?? 'build';
const MAX_TEXT = 20000;
const DEFAULTS = ['en-gb', 'en-001', 'en-us', 'en'];
// Real locale codes always have a hyphenated region/script subtag (e.g.
// "en-gb"), which this regex requires — deliberately excluding a bare
// two-letter segment, since otherwise some other, unrelated two-letter route
// could be misidentified as a locale. The site's own two-letter locale
// aliases (e.g. "/en/" for "en-001" — see $lib/locales.js) are therefore
// matched separately, by exact lookup against LOCALE_ALIASES, below.
const LOCALE = /^[a-z]{2,3}(-[a-z0-9]{2,8})+$/i;
const ALIASES = new Set(Object.keys(LOCALE_ALIASES));

function walk(dir, out = []) {
	for (const e of readdirSync(dir, { withFileTypes: true })) {
		const p = join(dir, e.name);
		if (e.isDirectory()) walk(p, out);
		else if (e.name.endsWith('.html')) out.push(p);
	}
	return out;
}

const ENTITIES = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', '#39': "'" };
const decode = (s) =>
	s.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (m, g) => {
		if (g[0] === '#') {
			const n = g[1].toLowerCase() === 'x' ? parseInt(g.slice(2), 16) : parseInt(g.slice(1), 10);
			return Number.isFinite(n) ? String.fromCodePoint(n) : m;
		}
		return ENTITIES[g.toLowerCase()] ?? m;
	});
const strip = (html) =>
	decode(
		html
			.replace(/<(script|style|svg|nav|template)\b[\s\S]*?<\/\1>/gi, ' ')
			.replace(/<!--[\s\S]*?-->/g, ' ')
			.replace(/<[^>]+>/g, ' ')
	)
		.replace(/\s+/g, ' ')
		.trim();

function urlFor(file) {
	const rel = file.slice(BUILD.length).split(sep).join('/');
	if (rel.endsWith('/index.html')) return rel.slice(0, -'index.html'.length);
	return rel.slice(0, -'.html'.length);
}

function localeOf(url) {
	const seg = url.split('/').filter(Boolean);
	const first = seg[0]?.toLowerCase();
	if (first && (LOCALE.test(first) || ALIASES.has(first))) return first;
	return null;
}

const pages = [];
for (const file of walk(BUILD)) {
	const url = urlFor(file);
	if (url === '/404' || url === '/search-index') continue;
	const html = readFileSync(file, 'utf8');
	if (/<meta[^>]+http-equiv=["']refresh/i.test(html)) continue;
	if (/<meta[^>]+name=["']robots["'][^>]+noindex/i.test(html)) continue;
	const title = strip((html.match(/<title[^>]*>([\s\S]*?)<\/title>/i) ?? [])[1] ?? '');
	const main = (html.match(/<main\b[\s\S]*?<\/main>/i) ?? html.match(/<body\b[\s\S]*<\/body>/i) ?? [''])[0];
	const headings = [...main.matchAll(/<h[1-4]\b[^>]*>([\s\S]*?)<\/h[1-4]>/gi)].map((m) => strip(m[1])).filter(Boolean);
	pages.push({ url, locale: localeOf(url), title, headings, text: strip(main).slice(0, MAX_TEXT) });
}

const locales = new Set(pages.map((p) => p.locale).filter(Boolean));
// argv[3]: a locale slug to index, or 'none' when the unprefixed pages are the default locale.
const defaultLocale =
	process.argv[3] === 'none' ? null : (process.argv[3] ?? DEFAULTS.find((l) => locales.has(l)) ?? null);
const entries = pages
	.filter((p) => !p.locale || p.locale === defaultLocale)
	.map((p) => ({ u: p.url, t: p.title, h: p.headings.join(' | '), x: p.text }))
	.filter((e) => e.t || e.x)
	.sort((a, b) => (a.u < b.u ? -1 : 1));

writeFileSync(join(BUILD, 'search-index.json'), JSON.stringify(entries));
console.log(`search index: ${entries.length} pages (default locale: ${defaultLocale ?? 'none'}), ${locales.size} locales skipped/merged`);
