# digital-health-metrics.github.io

The SvelteKit site that publishes the [Digital Health Metrics](../README.md) book to GitHub Pages.
It is fully prerendered (`@sveltejs/adapter-static`), uses the Lily Design System (`svelte-picker-bar`
for the theme, language, text-size and share pickers), and ships a client-side search over a static
index. The source of truth for content and architecture is [`../spec/`](../spec/index.md).

## Commands

Run inside this directory (pnpm).

| Command | What it does |
|---|---|
| `pnpm install` | Install dependencies. |
| `pnpm run sync` | `sync:content`, `sync:llms`, then `sync:lily`. Run after the book or Lily changes. |
| `pnpm run sync:llms` | Regenerate `static/llms.txt` and `static/llms.json` from the vendored content (`scripts/generate-llms.mjs`). Generated; never hand-edit. |
| `pnpm run sync:content` | Vendor `../locales/` into `content/` (`scripts/sync-content.mjs`). |
| `pnpm run sync:lily` | Re-vendor Lily theme CSS into `static/assets/themes/` (`scripts/vendor-lily.mjs`). |
| `pnpm run dev` | Dev server. |
| `pnpm run check` | `svelte-kit sync` and `svelte-check`; expect 0 errors. |
| `pnpm run build` | `vite build`, then write `build/search-index.json` (`scripts/build-search-index.mjs`) and `build/sitemap.xml` (`scripts/build-sitemap.mjs`). |
| `pnpm run preview` | Serve the production build. |

## How content reaches the site

- `content/` is a vendored copy of the book: `README.md`, `CITATION.cff`, and `locales/<code>/`.
  Never edit it by hand; edit `../locales/` and run `pnpm run sync:content`.
- Only the public locales in `PUBLIC_LOCALES` are copied. The internal `en-gb-oxendict` authoring
  locale is never published.
- The book translates each non-English locale's `topics` directory and topic slugs
  (`../locales/es-es/temas/tasa-de-inasistencia-a-citas/`). The sync maps each translated topics
  directory back to `topics/` (and rewrites the links in each locale's `index.md`), so routes are
  always `/<locale>/topics/<slug>/`. Topics are matched across locales by `.locale-peer-id`
  (vendored as `peer-id.txt`), never by slug.
- Locale labels, right-to-left locales, and the `-001` browser-language mapping live in
  `src/lib/locales.js`; the interface strings for each locale live in `src/lib/i18n.js`.

## Adding a locale

See [`../spec/index.md`](../spec/index.md) §4 "Adding a locale" for the checklist
(`bin/test`, `PUBLIC_LOCALES`, `LOCALE_LABELS`, `RTL_LOCALES`, `i18n.js`).

## Dependency notes

- `svelte-picker-bar` 0.3.0 includes the link and search pickers; the old sub-picker overrides are gone. See [`../spec/lily-design-system-svelte-with-picker-bar/`](../spec/lily-design-system-svelte-with-picker-bar/index.md).
- `typescript` stays on 6.x: 7.x breaks the build and is outside the peer range of
  `@sveltejs/kit` and `svelte-check`.

## Deployment

The site is published from its own repository, `digital-health-metrics/digital-health-metrics.github.io`,
whose workflow (`.github/workflows/pages.yml`) builds and deploys GitHub Pages on every push to `main`.
This folder is that repository's content: the monorepo publishes it with `bin/publish` (a `git subtree
split` of this folder pushed to the site repo; deterministic, so always a fast-forward). On every push to
the monorepo's `main` that touches this folder, `.github/workflows/publish-site.yml` runs `bin/publish`
using the `SITE_DEPLOY_KEY` secret (a write-enabled deploy key on the site repo; one-time setup is
described at the top of that workflow). To publish by hand: `bin/publish --dry-run`, then `bin/publish`.

The repository is named `<org>.github.io`, so the site is served from the domain root (`BASE_PATH` is empty); set
`BASE_PATH` only for subpath previews. See [`../spec/search/`](../spec/search/index.md) for the
post-publish search verification.
