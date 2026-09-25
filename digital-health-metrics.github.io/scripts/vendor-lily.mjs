#!/usr/bin/env node
// Vendor the Lily Design System themes this site offers, so the site builds
// standalone with no dependency on a local Lily checkout.
//
// The Svelte components themselves (headless components, and the theme,
// locale, text-size, share, and picker-bar helpers) are NOT vendored — they
// are ordinary npm dependencies (see package.json) and come from
// node_modules like any other package. Only the theme stylesheets are
// vendored here, because Lily does not publish them as an npm package: they
// live only in the `themes/` directory of the lily-design-system monorepo.
//
// Every default theme ships — not a curated subset — matching PickerBar's
// own DEFAULT_THEMES catalog, so the theme picker never offers a theme this
// site can't actually load.
//
// Source: $LILY if set, else ../../../lilydesignsystem/lily-design-system
// (this site lives at .../digital-health-metrics/digital-health-metrics/
// digital-health-metrics.github.io/, three levels below the ~/git-equivalent
// workspace root that also holds lilydesignsystem/lily-design-system as a
// sibling checkout — verified by resolving the path, not assumed).
// Run after Lily's themes change:  pnpm run sync:lily

import { copyFile, mkdir, readdir, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const siteRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const lily = resolve(
	process.env.LILY ?? join(siteRoot, '..', '..', '..', 'lilydesignsystem', 'lily-design-system')
);

if (!existsSync(join(lily, 'themes'))) {
	console.error(`No Lily checkout found at ${lily}. Set LILY=/path/to/lily-design-system.`);
	process.exit(1);
}

const themesSrc = join(lily, 'themes');
const themesOut = join(siteRoot, 'static', 'assets', 'themes');

const themeFiles = (await readdir(themesSrc)).filter((name) => name.endsWith('.css')).sort();

await rm(themesOut, { recursive: true, force: true });
await mkdir(themesOut, { recursive: true });

for (const file of themeFiles) {
	await copyFile(join(themesSrc, file), join(themesOut, file));
}

console.log(`Vendored ${themeFiles.length} Lily theme(s) from ${lily}.`);
