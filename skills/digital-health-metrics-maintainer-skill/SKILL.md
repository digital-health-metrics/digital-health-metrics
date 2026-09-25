---
name: digital-health-metrics-maintainer-skill
description: Maintain this repository — add or edit a topic under locales/<locale>/topics/, keep README.md's categorized index and each locale's own index.md in sync, cross-link new topics into related existing ones, rerun tools/localize.py, and validate structure with bin/test. Use when the user asks to add a new metric/topic, edit an existing one, reorganize README.md, or check the repo for broken links or inconsistent locale structure.
---

# Maintaining digital-health-metrics

Topics live under `locales/<code>/topics/<slug>/`, one directory per topic, across six locales:
`en-gb-oxendict` (hand-authored canonical source), `en-001`/`en-gb`/`en-us` (mechanically derived
from it by `tools/localize.py` — never hand-edited), and `cy-001`/`zh-cn` (hand-translated).
Every topic directory contains:

- `index.md` — the actual content
- `README.md` — a real symlink to `index.md` (`ln -s index.md README.md`)
- `.locale-peer-id` — a bare 32-character lowercase hex id, byte-identical across every locale's
  version of "the same" topic. This is the cross-locale identity key. Never regenerate or
  hand-edit this file for an existing topic — copy it verbatim when creating another locale's
  version, and never let two different topics share one.

Full detail on the locale architecture — slug rules, the site's locale picker, and a regression
watch-list of bugs already fixed once in a sibling project — is in
[`spec/locales-for-global-sharing-with-svelte/`](../../spec/locales-for-global-sharing-with-svelte/).
The canonical topic template and repository layout are in [`spec/index.md`](../../spec/index.md).

`bin/test` is the validation gate: it checks every locale/topic has its required files, that
peer ids match across locales for the same topic, and that `en-001`/`en-gb`/`en-us` are still in
sync with `en-gb-oxendict`. Run it before treating any structural change as done.

## Adding a new topic

1. **Pick a slug**: kebab-case, in English, e.g. `locales/en-gb-oxendict/topics/net-promoter-score/`.
   This is also what every cross-link and the README link use — pick it once and don't rename
   later without grepping for every reference.
2. **Generate a peer id**: `python3 -c "import uuid; print(uuid.uuid4().hex)"`.
3. **Write the canonical content** at `locales/en-gb-oxendict/topics/<slug>/index.md`, following
   the template in `spec/index.md` §3 (intro paragraph, then `## Why it matters`,
   `## How it's calculated`, `## Worked example`, `## Data sources and caveats`, `## Pitfalls`,
   `## Sources`). Symlink `README.md` to `index.md` and write `.locale-peer-id` with the id from
   step 2.
4. **Derive the English variants**: `python3 tools/localize.py`. Never hand-edit `en-001`,
   `en-gb`, or `en-us` — edit `en-gb-oxendict` and rerun the script.
5. **Translate `cy-001` and `zh-cn`**, or say explicitly that a topic is not yet translated rather
   than leaving it silently missing.
6. **Cross-link** related topics using `../<slug>/` (never `.md`, never absolute). Add a
   reciprocal link from any existing topic this one clearly relates to.
7. **Update `README.md`**: add one bullet to the correct category section,
   `- [Title](locales/en-gb-oxendict/topics/<slug>/) — one-line hook`. Don't create a new category
   for a single topic unless it genuinely doesn't fit an existing one.
8. **Update each locale's own `locales/<code>/index.md`** (its translated home page) with the
   same new bullet, in that locale's language.
9. **Run `bin/test`** and fix anything it reports.
10. **Re-sync the website**: `cd digital-health-metrics.github.io && pnpm run sync:content`.

## Editing an existing topic

- Preserve section headings and order for a small fix — don't reorganize a file you're only
  correcting a number in.
- If you edit `locales/en-gb-oxendict/topics/<slug>/index.md`, the other locales now disagree
  with it until someone updates them — say so rather than leaving it silently unsynced. If the
  edit only touched `en-gb-oxendict`, immediately rerun `tools/localize.py` so the three derived
  English locales don't drift.
- If you rename a slug, grep the whole repo for the old slug (in every locale that uses it —
  slugs can legitimately differ by locale) and for the old title text in every `README.md` /
  `index.md` before finishing.
- Never touch `.locale-peer-id` when editing content — it identifies the topic across locales,
  not a particular translation's freshness.
- Any specific number quoted (a rate, a threshold) should be dated in-line (e.g. "as of 2025") so
  future maintainers know what to re-verify.

## Validation

Run `bin/test` from the repository root. It checks, for every locale and every topic:
`.locale-peer-id`, `index.md`, and a `README.md` symlink pointing at `index.md` all exist; that
the same topic's peer id matches byte-for-byte across all six locales; and that `en-001`,
`en-gb`, and `en-us` are exactly what `tools/localize.py` would currently produce from
`en-gb-oxendict`. A clean run prints `All checks passed.`
