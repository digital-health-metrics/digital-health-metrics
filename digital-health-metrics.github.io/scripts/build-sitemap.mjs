// Builds build/sitemap.xml from the generated HTML. Run after `vite build`
// (part of `pnpm run build`). Usage: node scripts/build-sitemap.mjs [buildDir]
//
// Site URL: $SITE_URL if set, else https://digital-health-metrics.github.io
// (this repository is <org>.github.io, served from the domain root).
//
// Included: each real locale's home, contents, topics A-Z, every topic page,
// and /about/. Skipped: the 404 page, the root page (it redirects to the
// default locale), the per-locale search pages (a utility, not content).
//
// Every locale page lists its translations as hreflang alternates. Topic
// pages are matched across locales by `.locale-peer-id` (vendored as
// peer-id.txt), because slugs differ per locale; every other page type is
// matched by swapping the leading locale segment.

import { readdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, sep } from 'node:path';
import { LOCALE_LABELS } from '#lib/locales.js';

const BUILD = process.argv[2] ?? 'build';
const SITE = (process.env.SITE_URL ?? 'https://digital-health-metrics.github.io').replace(/\/$/, '');
const CONTENT = 'content/locales';
const LOCALES = new Set(Object.keys(LOCALE_LABELS));

/** `es-es` -> `es-ES`; an international `-001` locale -> its bare language (`es`). */
function hreflang(code) {
	const [lang, region] = code.split('-');
	return region === '001' ? lang : `${lang}-${region.toUpperCase()}`;
}

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const href = (path) => esc(SITE + path.split('/').map((s) => encodeURIComponent(s)).join('/'));

function walk(dir, out = []) {
	for (const e of readdirSync(dir, { withFileTypes: true })) {
		const p = join(dir, e.name);
		if (e.isDirectory()) walk(p, out);
		else if (e.name === 'index.html') out.push(p);
	}
	return out;
}

// peer id -> { locale: slug }
const peers = new Map();
for (const locale of existsSync(CONTENT) ? readdirSync(CONTENT) : []) {
	const topics = join(CONTENT, locale, 'topics');
	if (!existsSync(topics)) continue;
	for (const slug of readdirSync(topics)) {
		const f = join(topics, slug, 'peer-id.txt');
		if (!existsSync(f)) continue;
		const id = readFileSync(f, 'utf8').trim();
		if (!peers.has(id)) peers.set(id, {});
		peers.get(id)[locale] = slug;
	}
}
const peerOf = new Map(); // `${locale}/${slug}` -> peer id
for (const [id, byLocale] of peers) for (const [l, s] of Object.entries(byLocale)) peerOf.set(`${l}/${s}`, id);

const pages = [];
for (const file of walk(BUILD)) {
	const segs = file.slice(BUILD.length).split(sep).filter(Boolean).slice(0, -1);
	if (segs.length === 0) continue; // root: redirects to the default locale
	if (segs[0] === 'about') {
		pages.push({ path: '/about/', alts: [] });
		continue;
	}
	const [locale, kind, slug] = segs;
	if (!LOCALES.has(locale)) continue;
	if (kind === 'search') continue;
	const path = `/${segs.join('/')}/`;
	let alts = [];
	if (kind === 'topics' && slug) {
		const byLocale = peers.get(peerOf.get(`${locale}/${slug}`)) ?? {};
		alts = Object.entries(byLocale).map(([l, s]) => [l, `/${l}/topics/${s}/`]);
	} else if (kind === undefined || ['contents', 'topics'].includes(kind)) {
		alts = [...LOCALES].map((l) => [l, `/${[l, ...segs.slice(1)].join('/')}/`]);
	}
	pages.push({ path, alts });
}

pages.sort((a, b) => a.path.localeCompare(b.path));

const urls = pages.map(({ path, alts }) => {
	const links =
		alts.length > 1
			? alts
					.sort(([a], [b]) => a.localeCompare(b))
					.map(([l, p]) => `    <xhtml:link rel="alternate" hreflang="${hreflang(l)}" href="${href(p)}"/>`)
					.join('\n') + '\n'
			: '';
	return `  <url>\n    <loc>${href(path)}</loc>\n${links}  </url>`;
});

writeFileSync(
	join(BUILD, 'sitemap.xml'),
	`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join('\n')}\n</urlset>\n`
);
console.log(`sitemap: ${pages.length} URLs`);
