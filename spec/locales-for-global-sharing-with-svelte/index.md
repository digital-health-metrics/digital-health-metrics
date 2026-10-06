# Locales for major projects with SvelteKit

Translate content into multiple locales.

How this site supports multiple locales end to end: content, web
routing, UI chrome, and bugs.

The published locales are enumerated explicitly in `src/lib/locales.js`
(`LOCALE_LABELS`) and `scripts/sync-content.mjs` (`PUBLIC_LOCALES`) — see
`spec/index.md` §4 "Adding a locale".

## .locale-peer.id file

`.locale-peer-id` file is a byte-identical 32-character hexadecimal lowercase
number then newline, across every locale's version of "the same" topic,
regardless of slug.

`.locale-peer-id` id is how the project resolves "this page, in locale X".

## Guidance

- en-us: consistent American spelling; fix any stray en-gb forms (organisation→organization, licence→license, programme→program, cancelled→canceled, analogue→analog).

- en-gb: the -ize/-ise family (optimise, realise, organise, prioritise, utilise, etc.), -or/-our (colour, behaviour, favour, labour, neighbours), -er/-re (centre, theatre for the metaphorical sense), -ense/-ce (defence, licence), doubled-L forms (modelled, labelled, cancelled, enrol/enrolment), analogue, programme, and math→maths.

- en-gb-oxendict: use en-gb then revert just the -ise family back to Oxford -ize spelling (optimize, realise→realize, organise→organize, etc.), while correctly keeping -yse forms (analyse/analysable) unchanged, since Oxford style never uses -yze, and keeping all other British forms (colour, centre, defence, licence, programme, maths, modelled) intact.

## Guard against corruption

Keep proper nouns unconverted. Example: "Hospital Readmissions Reduction Program" (a real United States federal program name).

## Verify

For each locale subdirectory:

- File exists: `index.md`
- Symlink exists: `README.md`
- Locale peer id tracking file exists: `.locale-peer-id`

Then:

- Fix any broken internal links
- Fix any residual wrong-dialect spellings
- Update `./spec/locale/index.md`

## Content structure (book side)

Each locale is `locales/<code>/` in the book repo, containing:

- `locales/<code>/topics/<slug>/index.md` + `.locale-peer-id` — one per topic.
  `README.md` is a symlink to `index.md`. The English locales (`en-*`) use
  exactly this path. Every other locale translates **both** the `topics`
  segment and each `<slug>` into its own language, e.g.
  `locales/es-es/temas/tasa-de-inasistencia-a-citas/index.md`. A locale has
  exactly one such directory. Country variants (`es-es`, `ar-eg`, ...) reuse
  their `-001` sibling's translated names. Internal links use the translated
  names (`temas/<slug>/` from the locale's `index.md`, `../<slug>/` between
  topics). `bin/test` finds topics by `.locale-peer-id`, never by path, and
  `scripts/sync-content.mjs` maps each locale's translated directory back to
  `topics/` in the site's `content/`, so site URLs are unchanged.
- `locales/<code>/index.md` + `.locale-peer-id` + `README.md` symlink — the
  locale's own translated README (site home/contents page source). Every
  locale gets this file scaffolded (matching the topic-file pattern) even
  before it has a translation; it starts empty.

## Slugs

Slugs are per-locale, not shared.** Translated locales rename topic directories
to native-script/accented slugs.

Example: `es-001` `año-de-vida-ajustado-por-calidad`, `ur-001` `صحت-ایڈجسٹڈ-متوقع-زندگی`.

Nothing in the site assumes slugs match across locales.

## Locale picker (labels + ordering)

- Labels live in `locales.js`'s `LOCALE_LABELS`, one entry per code, in that
  language (e.g. `'fr-001': 'Français (Monde)'`). Falls back to the raw code
  via `localeLabel()` if a code has no label yet.
- Header `PickerBar` order comes from `content.js`'s `locales()` (sorted by
  code) — the `-001` suffix happens to sort before any letter-starting
  regional suffix, so variants already come first there.
- Home page's locale list (`+page.server.js`) sorts explicitly: default
  locale first, then grouped by language name (label text before the `(`),
  with the `-001`/World variant sorted before its regional siblings within
  each group, then alphabetically by label. This does NOT fall out of
  alphabetical-by-label sort on its own (e.g. "España" < "Mundo") — it needs
  the explicit `-001` check.

## Two-letter locale route aliases

`/<two-letter>/...` renders exactly the same content as `/<code>-001/...` for
every locale whose code ends in `-001` (e.g. `/en/` renders `/en-001/`,
`/ar/` renders `/ar-001/`, including `dir="rtl"`). `LOCALE_ALIASES` in
`locales.js` derives the mapping from `LOCALE_LABELS` automatically — any
future `-001` locale gets its alias for free, nothing to maintain by hand.

- `canonicalLocale(code)` resolves an alias to its real code. Every
  `+page.server.js`/`+layout.server.js` under `[locale]/` calls it on
  `params.locale` before passing it to `book()`/`content.js`, and uses the
  resolved value for everything thereafter, including what's returned as
  `data.locale` — so the site's own links, UI chrome, and `<html lang>`
  always come out identical to the real locale's own page, not the alias.
  `book.js`/`content.js` never see an alias at all.
- This is a one-way, non-sticky alias: landing on `/en/` renders `en-001`'s
  content, but every link on that page (nav, breadcrumbs, cross-references,
  locale switcher) points at `/en-001/...`, same as any other page. Clicking
  anything takes you off the alias and onto the real code — there's no
  attempt to keep a visitor under the alias as they navigate further.
- Each route under `[locale]/` must seed its own `entries()` over
  `content.js`'s `routableLocales()` (real codes + their aliases), not just
  `locales()`. Nothing the site generates ever links to an alias, so the
  prerender crawler cannot discover an alias route by following links from
  another page — each one has to be listed explicitly, the same reason
  `topics/[slug]/+page.server.js` already enumerates `(locale, slug)` pairs
  explicitly rather than relying on a crawl.
- `scripts/build-search-index.mjs`'s own locale detection regex requires a
  hyphenated subtag by design (so an unrelated two-letter route segment is
  never mistaken for a locale) and therefore doesn't match a bare alias like
  "en" — it checks `LOCALE_ALIASES` separately, so alias pages are correctly
  excluded from the index as duplicates of their real locale, not
  miscounted as locale-agnostic default-bucket pages.

## Bug fixes (regression watch-list)

### Bug: ASCII-only `\w` regexes broke every non-Latin/non-accented slug

Bug: matched topic slugs with `[\w.-]+` (ASCII word chars only). Any locale with
an accented or native-script slug (Spanish, French, Russian, Chinese, Arabic,
Welsh, Hindi, Bengali, Portuguese, Indonesian, Urdu) silently failed peer-id
resolution and cross-topic links.

Fix by widening the slug capture group to `[^/]+`.

### Bug: Every locale's home/contents page showed canonical English content

Bug: code and content always read a single top-level `/README.md` for title,
intro, "New here?" picks, part headings, and blurbs — only topic _links_ were
ever localized.

Fix: populate the previously-empty `locales/<code>/index.md` per locale.

## Bug: Link extraction was hardcoded to literal English phrase

Bug: link silently found nothing once the README was translated.

Fix: extract all links from the whole pre-`##` intro block instead of
regex-matching the English sentence.

### Bug: UI chrome was hardcoded English in the `.svelte` templates

Bug: nav labels, subtitles, page titles, intros, breadcrumbs, topic position,
pagination, picker/share labels.

Fix: add `i18n.js` and threading `ui(locale)` through every locale-scoped route
and `+layout.svelte`.

### Bug: header/footer brand wordmark stayed English

Bug: wordmark came only from the root (locale-agnostic) `+layout.server.js`,
which deliberately never picks a locale.

Fix: have `[locale]/+layout.server.js` supply this locale's own title, which
overrides the root layout's canonical one via SvelteKit's merged `page.data`
on any route under `/<locale>/` — the root picker and `/about/` (no locale in
the URL) correctly keep the canonical English title.
