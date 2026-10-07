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

Run `python3 tools/verify_locales.py` (the rules are in `spec/index.md`, "Locale completeness"). For each
locale it checks that `index.md`, the `README.md` symlink and `.locale-peer-id` exist, that all topics and
their files exist, that slugs are translated, that the home page lists every topic, that internal links
resolve, that country variants are identical to their base locale, and, as warnings, that each translation
matches the English source's structure and figures.

Then, by hand:

- Fix any residual wrong-dialect spellings
- Check the pickers, the locale's home page and one topic page in a browser (see the regression notes below)

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
  locale's own translated README (site home/contents page source). It lists
  every topic under the same eight category headings as the English home
  page, with a translated blurb for each; the site builds the contents page
  and the "Start here" links from it, so a topic missing from this file is
  missing from the contents page.

## Slugs

Slugs are per-locale, not shared. Translated locales rename topic directories
to native-script/accented slugs, lower-case, words joined by hyphens, no spaces
or punctuation, Unicode NFC.

Example: `es-001` `tasa-de-inasistencia-a-citas`, `zh-cn` `预约爽约率`,
`ur-pk` `موضوعات/اپائنٹمنٹ-نو-شو-کی-شرح`. A slug equal to the English one is allowed only for a title
that is purely an acronym or proper name (`iso-ts-82304-2`, `re-aim-framework`).

Nothing in the site assumes slugs match across locales; topics are matched across
locales by `.locale-peer-id`.

**Renaming a slug changes its URL, and the old URL returns 404.** This is deliberate:
the site is static, keeps no redirect table, and does not add redirects when a
translation is retitled. Rename only when the title genuinely improves, and expect
external links to the old URL to break. The landing page, the `../<slug>/` links, the
sitemap and `llms.json` are regenerated or updated together with the rename.

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

## Two-letter URLs are not routes

Two-letter URLs such as `/en/`, `/de/` or `/ar/` do not exist and return 404 (an earlier version served them as
aliases of the `-001` locales; that was removed). Only real locale codes are routable: `content.js`'s
`routableLocales()` is exactly `locales()`, and every `[locale]` route seeds its `entries()` from it.

`LOCALE_ALIASES` in `locales.js` (derived from the `-001` entries of `LOCALE_LABELS`) survives only for
`matchLocale`, which maps a browser language such as `en-AU` to `/en-001/`; it never produces a URL.
There is no alias-resolution step in the route loaders: `params.locale` is always a real code.

## Browser-language redirect at `/`

`/` sends a visitor to the published locale that matches their browser's language.
`preferredLocale()` and `matchLocale()` in `src/lib/locales.js` decide, and
`src/routes/+page.svelte` navigates (client-side, with `replaceState`). Order:

1. **Browser language** — each tag in `navigator.languages` in turn (underscores accepted,
   case ignored); the first tag that matches wins:
   1. exact published locale: `cy_GB` / `cy-GB` → `/cy-gb/`, `de-DE` → `/de-de/`
   2. no exact locale, but the language's international (`-001`) locale — the canonical route,
      not the two-letter alias: `en-AU` → `/en-001/` (not `/en/`), `de-AT` → `/de-001/`,
      `pt-BR` → `/pt-001/`, bare `cy` → `/cy-001/`
   3. any published locale of that language that has no `-001` locale: `ja` → `/ja-jp/`,
      `nb` / `nn` → `/no-no/`
   Traditional Chinese (`zh-TW`, `zh-HK`, `zh-Hant`) matches nothing, because the only
   Chinese locale is Simplified (`zh-cn`).
2. **Saved locale** — the locale the picker last stored (`LOCALE_STORAGE_KEY`), if the browser
   language matched nothing.
3. **Default locale** (`DEFAULT_LOCALE`, `en-gb`).

A search query (`/?foo`) disables the redirect so search keeps working. The locale picker must
not also navigate at `/` (it would race this redirect), so `navigateToLocale` in
`src/routes/+layout.svelte` returns early when the path is `/`. The browser language takes
precedence over the saved locale on purpose: the picker saves the default locale on a first visit,
so a saved value cannot be told apart from an explicit choice, and letting it win would defeat the
redirect for every returning visitor. The cost is that a visitor who chose a locale that differs
from their browser language is shown the browser-language locale when they open `/` (links to
`/<locale>/…` are unaffected).

To verify: open `/` in a browser (or Playwright context) with `locale: 'en-AU'` and confirm
`/en-001/`; with `locale: 'cy-GB'` confirm `/cy-gb/`; with `locale: 'xx-YY'` confirm `/en-gb/`; with `/?foo` confirm it stays on `/`.

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

### Bug: an unknown locale in the URL was saved as the visitor's locale

Bug: the root layout trusted `page.params.locale` as a locale. A stale or mistyped
link such as `/de-001/` (German is `de-de` here; there is no `de-001`) rendered the
404 page, but the locale picker still wrote `de-001` into `<html lang>` and into the
saved locale (`localStorage`), so later visits tried to restore a locale that does
not exist. The picker also showed an empty value on that page.

Fix: `+layout.svelte` accepts a URL locale only if it is one of the published
locales (after alias resolution); otherwise there is no locale, the picker falls
back to the visitor's saved locale, and `navigateToLocale` does nothing on a 404.
Verify in a browser: save `cy-001`, open `/de-001/` — the saved locale must still
be `cy-001` — and open `/de-de/` — the picker, `lang` and saved locale must all
become `de-de`.
