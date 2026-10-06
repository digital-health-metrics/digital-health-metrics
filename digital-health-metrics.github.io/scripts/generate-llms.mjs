#!/usr/bin/env node
// Generate static/llms.txt and static/llms.json — the site's machine-readable
// entry points for AI agents and LLMs — from the vendored content/.
//
// llms.txt follows https://llmstxt.org: an H1 title, a blockquote summary, then
// H2 sections of links. llms.json carries the same information as structured
// data, plus the full locale list. Both are generated, never hand-edited, so
// they cannot drift from the book. Run after the content changes:
//   pnpm run sync   (runs sync:content, then this, then sync:lily)
//
// Site URL: $SITE_URL if set, else https://digital-health-metrics.github.io
// (this repository is <org>.github.io, served from the domain root).

import { readFile, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { DEFAULT_LOCALE, LOCALE_LABELS, RTL_LOCALES } from '../src/lib/locales.js';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const site = (process.env.SITE_URL ?? 'https://digital-health-metrics.github.io').replace(/\/$/, '');
const repo = 'https://github.com/digital-health-metrics/digital-health-metrics';

const index = await readFile(join(root, 'content/locales', DEFAULT_LOCALE, 'index.md'), 'utf8');
const lines = index.split('\n');

const title = lines.find((l) => l.startsWith('# '))?.slice(2).trim();
const summary = lines.find((l) => l.trim() && !l.startsWith('#') && !l.startsWith('-'))?.trim();
if (!title || !summary) throw new Error(`Could not read title/summary from ${DEFAULT_LOCALE} index.md`);

// "## Part" headings followed by "- [Title](topics/<slug>/) — blurb" bullets.
const ENTRY = /^-\s+\[([^\]]+)\]\(topics\/([^/]+)\/\)\s*(?:[—–-]\s*(.*))?$/;
const parts = [];
for (const line of lines) {
	if (line.startsWith('## ')) parts.push({ name: line.slice(3).trim(), topics: [] });
	else if (parts.length && ENTRY.test(line)) {
		const [, t, slug, blurb] = ENTRY.exec(line);
		parts.at(-1).topics.push({
			title: t,
			slug,
			url: `${site}/${DEFAULT_LOCALE}/topics/${slug}/`,
			summary: (blurb ?? '').trim()
		});
	}
}
const populated = parts.filter((p) => p.topics.length);
const topicCount = populated.reduce((n, p) => n + p.topics.length, 0);
if (!topicCount) throw new Error('No topics found in index.md');

const locales = Object.entries(LOCALE_LABELS).map(([code, label]) => ({
	code,
	label,
	url: `${site}/${code}/`,
	direction: RTL_LOCALES.has(code) ? 'rtl' : 'ltr'
}));

const txt = [
	`# ${title}`,
	'',
	`> ${summary}`,
	'',
	`Every topic is one metric or concept: definition, why it matters, how it is calculated, a worked example, data sources and caveats, pitfalls, and sources. The book has ${topicCount} topics in ${locales.length} locales; the links below are the ${DEFAULT_LOCALE} edition. The same topic in another locale is at \`/<locale>/topics/<slug>/\` with that locale's own slug (see llms.json for the locale list). Machine translations are AI-assisted and pending review by a fluent speaker; ${DEFAULT_LOCALE} is the reference text.`,
	'',
	...populated.flatMap((p) => [
		`## ${p.name}`,
		'',
		...p.topics.map((t) => `- [${t.title}](${t.url})${t.summary ? `: ${t.summary}` : ''}`),
		''
	]),
	'## Optional',
	'',
	`- [All topics A to Z](${site}/${DEFAULT_LOCALE}/topics/)`,
	`- [Contents in reading order](${site}/${DEFAULT_LOCALE}/contents/)`,
	`- [About](${site}/about/)`,
	`- [Source repository](${repo})`,
	`- [Structured index (llms.json)](${site}/llms.json)`,
	''
].join('\n');

const json = {
	name: title,
	description: summary,
	url: `${site}/`,
	repository: repo,
	defaultLocale: DEFAULT_LOCALE,
	topicCount,
	topicUrlPattern: `${site}/{locale}/topics/{slug}/`,
	notes: [
		'Topic slugs are translated per locale; match the same topic across locales by content, not slug.',
		'Non-English locales are AI-assisted translations pending native review.'
	],
	locales,
	parts: populated.map((p) => ({ name: p.name, topics: p.topics }))
};

await writeFile(join(root, 'static/llms.txt'), txt);
await writeFile(join(root, 'static/llms.json'), JSON.stringify(json, null, 2) + '\n');
console.log(`Wrote static/llms.txt and static/llms.json (${topicCount} topics, ${locales.length} locales).`);
