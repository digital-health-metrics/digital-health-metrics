#!/usr/bin/env node
// Vendor the book's Markdown into content/ so this site builds standalone.
//
// Source: $BOOK if set, else the monorepo root this site lives in (..).
// Run after the book changes:  pnpm run sync:content
//
// The book publishes topics per locale: locales/<locale>/topics/<slug>/index.md,
// plus a `.locale-peer-id` file per topic directory that is byte-identical across
// every locale's version of "the same" topic (slugs can differ by locale, e.g.
// one locale's hyphenated-english-slug vs another's differently-spelled one).
// That peer-id is how the site resolves "the same page in another locale" for
// the locale switcher, without needing a central manifest.
//
// Only the site's 12 PUBLIC locales are synced (see $lib/locales.js). The
// content monorepo also carries `en-gb-oxendict`, an internal, unpublished
// authoring locale used to draft content before it is translated out to the
// public locales below — it is deliberately never copied into content/, so it
// can never leak onto the public site. This list is enumerated explicitly
// (not auto-discovered from the book's locales/ directory) precisely so that
// adding a new authoring-only locale upstream can never silently publish it
// here.
const PUBLIC_LOCALES = [
	'en-us',
	'en-gb',
	'en-001',
	'cy-001',
	'zh-cn',
	'es-001',
	'hi-001',
	'ar-001',
	'fr-001',
	'pt-001',
	'de-de',
	'ru-001'
];

import { cp, mkdir, rm, readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const siteRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const book = resolve(process.env.BOOK ?? join(siteRoot, '..'));

if (!existsSync(book)) {
	console.error(`No book found at ${book}. Set BOOK=/path/to/digital-health-metrics.`);
	process.exit(1);
}

// Files copied verbatim into content/, when present. The book may not have
// published all of these yet (a sibling process may still be populating the
// monorepo), so each one is optional rather than fatal when missing.
const rootFiles = ['README.md', 'CITATION.cff', 'GLOSSARY.md'];

const contentDir = join(siteRoot, 'content');
await rm(contentDir, { recursive: true, force: true });
await mkdir(contentDir, { recursive: true });

let count = 0;

for (const file of rootFiles) {
	const from = join(book, file);
	if (!existsSync(from)) {
		console.warn(`skip (missing): ${file}`);
		continue;
	}
	await cp(from, join(contentDir, file));
	count += 1;
}

const localesDir = join(book, 'locales');
if (!existsSync(localesDir)) {
	console.warn(`No locales/ directory found at ${localesDir} yet — syncing 0 topics.`);
}

// Guard against the private authoring locale leaking in even if it were ever
// added to PUBLIC_LOCALES by mistake.
const localeNames = PUBLIC_LOCALES.filter((locale) => locale !== 'en-gb-oxendict');

for (const locale of localeNames) {
	const localeFrom = join(localesDir, locale);
	if (!existsSync(localeFrom)) {
		console.warn(`skip (missing): locales/${locale}/ (not published by the book yet)`);
		continue;
	}

	// This locale's own translated index.md (the book's per-locale README,
	// read by book.js's readmeSource/localizedIndex) — vendored even when
	// still an empty placeholder, so the site's fallback-to-canonical logic
	// sees "no content" rather than a missing file.
	const localeIndexFrom = join(localeFrom, 'index.md');
	if (existsSync(localeIndexFrom)) {
		const localeDirTo = join(contentDir, 'locales', locale);
		await mkdir(localeDirTo, { recursive: true });
		await cp(localeIndexFrom, join(localeDirTo, 'index.md'));
		count += 1;
	}

	const topicsFrom = join(localeFrom, 'topics');
	if (!existsSync(topicsFrom)) {
		console.warn(`skip (missing): locales/${locale}/topics/`);
		continue;
	}
	const topicsTo = join(contentDir, 'locales', locale, 'topics');
	await mkdir(topicsTo, { recursive: true });
	for (const entry of await readdir(topicsFrom, { withFileTypes: true })) {
		if (!entry.isDirectory()) continue; // topics are directories: <slug>/index.md + .locale-peer-id
		const slugFrom = join(topicsFrom, entry.name);
		const slugTo = join(topicsTo, entry.name);
		await mkdir(slugTo, { recursive: true });
		const indexFrom = join(slugFrom, 'index.md');
		const peerIdFrom = join(slugFrom, '.locale-peer-id');
		if (existsSync(indexFrom)) {
			await cp(indexFrom, join(slugTo, 'index.md'));
			count += 1;
		}
		if (existsSync(peerIdFrom)) {
			// Vendored under a non-dotfile name: Vite's import.meta.glob silently
			// excludes dotfiles from matching, even an explicit literal filename,
			// so a hidden file here would be invisible to content.js's glob.
			await cp(peerIdFrom, join(slugTo, 'peer-id.txt'));
			count += 1;
		}
		// README.md is a symlink to index.md in the book; the site reads index.md
		// directly and doesn't need the symlink vendored.
	}
}

console.log(
	`Synced ${count} file(s) from ${book} across ${localeNames.length} public locale(s) (${localeNames.join(', ')}).`
);
