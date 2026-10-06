# Search

Every `*.github.io` SvelteKit site in this family offers site search with no
server: a static index built at publish time and a small client-side search.

## Route

Search lives on the home page and is driven by the query string:

| URL | Meaning |
|---|---|
| `/?foo` | search for `foo` |
| `/?foo+bar` or `/?foo%20bar` | search for `foo bar` (every word must match) |
| `/?q=foo` | accepted as an alias of `/?foo` |
| `/` | no query: redirects to the default locale's home page |

The whole query string is the target, URL-decoded, with `+` read as a space.
The page stays prerendered: the query is read in the browser only, never during
prerendering. A search box on the home page navigates to `/?<target>`.

`/` with no query redirects client-side to the default locale (e.g. `/en-gb/`)
rather than showing the locale picker, since the picker page itself is where
search lives — a server-side redirect would drop the query string and break
search. The redirect only fires when there's no query to preserve; with one,
the page stays on `/` so SearchGate can read it. With JavaScript disabled the
redirect effect never runs (the page is prerendered, not hydrated), so a
`<noscript>` meta-refresh in `+page.svelte` does the same redirect
unconditionally — search itself requires JavaScript regardless, so there's
nothing to preserve in that case.

## Index

- `scripts/build-search-index.mjs` runs after `vite build` (part of
  `npm run build`) and writes `build/search-index.json` by reading the generated
  HTML, so it works the same for every site layout and needs no dependencies.
- One entry per page: `{ u: url, t: title, h: headings, x: text }`. Text is the
  `<main>` content with markup removed, capped at 20 000 characters.
- Locales: pages under a locale prefix (`/xx-yy/…` or `/locales/xx-yy/…`) are
  indexed only for the site's default locale (first present of `en-gb`,
  `en-001`, `en-us`, `en`), plus every page that has no locale prefix. The 404
  page and redirects are skipped.

## Sitemap

`scripts/build-sitemap.mjs` runs after the search index (part of `pnpm run build`) and writes
`build/sitemap.xml`, referenced from `static/robots.txt`. It lists each real locale's home,
contents, topics A-Z and topic pages, plus `/about/`; it skips the root redirect, the two-letter
alias routes, the per-locale search pages and the 404 page. Each locale page carries `hreflang`
alternates for its translations (international `-001` locales use the bare language code, e.g.
`es`; others use `es-ES`). Topic pages are matched across locales by `.locale-peer-id`, since slugs
differ per locale. The site URL defaults to `https://digital-health-metrics.github.io`;
`SITE_URL` overrides it.

## Matching and ranking

- Case-insensitive; every word of the query must appear in the page.
- Score = 10 × title hits + 4 × heading hits + body hits; ties by title.
- Results show title, URL and a snippet with matches highlighted; at most 50.
- An empty or unmatched search says so and links back to the home page.

## Verification

After each publish: `GET /search-index.json` returns 200 and contains known
text, and the same ranking function run against the live index finds results
for a known term. The query page itself (`/?foo`) returns 200.
