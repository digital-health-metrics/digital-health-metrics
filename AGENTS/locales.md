# Agents: locales and translation

Canonical rules: [`spec/index.md`](../spec/index.md) §4 and
[`spec/locales-for-global-sharing-with-svelte/`](../spec/locales-for-global-sharing-with-svelte/index.md).

## Which locales are hand-edited

| Locales | Rule |
|---|---|
| `en-gb-oxendict` | Hand-authored canonical source. Internal; never published. |
| `en-001`, `en-gb`, `en-us` | Derived by `tools/localize.py`. Never hand-edit; rerun the script. |
| Other `-001` and `xx-yy` codes | Hand-translated, AI-assisted, pending native review. |
| `ar-eg`, `hi-in`, `es-es`, `pt-pt`, `ru-ru`, `fr-fr`, `cy-gb` | Byte-identical copies of their `-001` sibling, including directory names. |
| `de-001` | Byte-identical copy of `de-de` (German has no separate `-001` source; edit `de-de`, then recopy). |

## Verifying locales

`python3 tools/verify_locales.py` before committing any `locales/` change. A translation is faithful only if
it follows the English source paragraph for paragraph and keeps its worked-example figures: translate the
example, never replace it. A new topic needs a translated bullet in every locale's home page `index.md`. See
`spec/index.md`, "Locale completeness".

## Locale directory names

Every directory under `locales/` is `<language>-<region>` (`en-gb`, `es-001`, `zh-cn`): never a bare language
such as `locales/en/`. The two-letter URLs (`/en/`) are generated route aliases for the `-001` locales. The
only exception is `en-gb-oxendict`. `bin/test` checks this; the rule is in `spec/index.md`.

## Translated paths

Non-English locales translate both the `topics` directory and every slug. Each has exactly one
translated topics directory. Directory names are lower-case, hyphen-joined, Unicode NFC, with no
spaces, dots, slashes or punctuation; accents and native scripts are kept. Always locate a topic in
another locale by its `.locale-peer-id`.

When translating a topic: create `<translated topics dir>/<translated slug>/`, copy the
`.locale-peer-id` verbatim, add `README.md -> index.md`, translate the text, keep headings, code
blocks, numbers and citations, translate link text only, and point link targets at the translated
slugs (`../<slug>/`). A locale's `index.md` links `<translated topics dir>/<slug>/`.

## Welsh terminology (cy-001, cy-gb)

Welsh text follows the Welsh Government's TermCymru term bank (2026-07-02 export). Use
[`tools/cy-glossary.tsv`](../tools/cy-glossary.tsv) for the book's recurring terms: it records the chosen
Welsh, its TermCymru status (A best, C weakest) and which bank entries are the wrong sense (for
example *burnout*, *reach*, *portal*, *retention*). For a term not in the glossary, search the bank
before inventing a rendering, prefer status A and the Iechyd (health) subject, and add the new term to
the glossary. `cy-gb` is a byte-identical copy of `cy-001`: edit `cy-001`, then recopy.

## Right-to-left

`ar-001`, `ar-eg` and `ur-pk` are RTL, listed in `RTL_LOCALES` in `src/lib/locales.js`. The CSS uses
logical properties throughout; do not add physical left/right rules.

## Adding a locale

Follow "Adding a locale" in `spec/index.md` §4. Registration points: `bin/test`,
`scripts/sync-content.mjs` (`PUBLIC_LOCALES`), `src/lib/locales.js` (`LOCALE_LABELS`),
`src/lib/i18n.js` (chrome strings), and the locale counts and lists in the docs.

## Pitfalls

- Matching slugs with ASCII-only regexes (`[\w-]+`) breaks every accented or native-script slug; use
  `[^/]+`.
- Never assume slugs are equal across locales; resolve through the peer id.
- Do not translate proper nouns that are real names (for example the "Hospital Readmissions Reduction
  Program").
