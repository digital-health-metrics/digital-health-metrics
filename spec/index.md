# Specification — Digital Health Metrics

**Status:** Authoritative source of truth. Where a topic, the README, or the website disagrees with this spec, this spec wins — fix the artifact, or change the spec deliberately and then bring the artifacts into line.

**Purpose:** Enough here for any author or agent to understand what this book is, add or edit a topic to a consistent standard, and verify the result — without first reading every existing topic.

---

## 1. Product definition

A reference book of digital health metric definitions: what each metric means, how to calculate it, a worked example, data sources and caveats, and common pitfalls.

- **Title:** Digital Health Metrics
- **Format:** One Markdown file per topic (a metric or concept), organised into categories, stitched by the root `README.md` (the table of contents).
- **Premise:** A team cannot manage what it defines inconsistently. Ambiguous or inconsistently-calculated digital health metrics produce business cases, dashboards, and regulatory submissions that cannot be compared or trusted. Every topic exists to remove that ambiguity for one metric.
- **Centre of gravity:** Digital health products and services generally (patient-facing apps and portals, telehealth, clinical decision support, referral and scheduling systems), with UK NHS and US examples used most often because they publish the most usable public benchmarks — the definitions themselves are not jurisdiction-specific.

### Audience

Product managers, delivery leads, and analysts building, running, or evaluating digital health products; people writing or reviewing a business case that cites a digital health metric; and engineers instrumenting a system to produce one of these numbers correctly the first time.

---

## 2. Repository layout

| Path | Role |
|---|---|
| `README.md` | Reader-facing front door and table of contents. Must list every topic under a category heading, matching what is actually on disk. |
| `locales/<code>/index.md` | That locale's own translated home page (title, intro, "New here?" picks, category headings, blurbs). `README.md` is a symlink to `index.md`. |
| `locales/<code>/topics/<slug>/index.md` | One topic: a metric or concept, in the canonical template (§3). `README.md` is a symlink to `index.md`. |
| `locales/<code>/topics/<slug>/.locale-peer-id` | A byte-identical 32-character lowercase hex id, shared by every locale's version of "the same" topic, regardless of slug. See `spec/locales-for-global-sharing-with-svelte/`. |
| `tools/localize.py` | Derives `en-001`, `en-gb`, and `en-us` from `en-gb-oxendict` by mechanical spelling substitution. Never hand-edit those three locales; edit `en-gb-oxendict` and rerun the script. |
| `bin/test` | Validates locale/topic structure, peer-id parity, and that the derived English locales are up to date. Run before every commit that touches `locales/`. |
| `spec/index.md` | This file — the source of truth. |
| `spec/locales-for-global-sharing-with-svelte/` | The locale architecture: content structure, slug rules, the locale picker, and a regression watch-list of bugs already fixed once in a sibling project. |
| `spec/lily-design-system-svelte-with-picker-bar/` | The design-system integration instruction for the website. |
| `digital-health-metrics.github.io/` | The SvelteKit site that publishes this book to GitHub Pages. Has its own README for build and sync commands. |

---

## 3. Topic template (canonical structure)

Every topic uses these headings, in this order:

1. `# Title` — the metric or concept's name, in title case.
2. An intro paragraph (no heading) — one or two sentences stating what the metric is and why it exists as a distinct thing to measure.
3. `## Why it matters` — the stakes: what decision this metric should inform, and what goes wrong if it is ignored or miscalculated.
4. `## How it's calculated` — the actual formula(e), in a fenced plain-text block, including numerator, denominator, and any segmentation that materially changes the number's meaning.
5. `## Worked example` — one concrete, realistic scenario with real numbers that exercises the formula from §4.
6. `## Data sources and caveats` — where the number actually comes from in a real system, and what commonly goes wrong in getting it (coding practice, denominator choice, vendor dashboard limitations).
7. `## Pitfalls` — bulleted; each a **bold lead-in** naming a specific mistake, then one to two sentences on why it's wrong and what to do instead.
8. `## Sources` — bulleted, real and verifiable; organisations and publication types, not fabricated specific papers.

A topic may end with an optional "See also" line cross-linking related topics via `../<slug>/` (never `.md`, never absolute).

A small number of topics document a multi-dimensional evaluation framework (e.g. RE-AIM, the WHO Digital Health Assessment Framework, ISO/TS 82304-2) rather than a single metric with one formula. These keep every other heading and constraint above, but retitle §4 `## How it's applied` and describe the framework's dimensions or assessment domains (still in a fenced block) in place of a formula, and §5's worked example walks through applying the framework to a scenario rather than exercising a calculation.

---

## 4. Locales

Thirty-five locale directories under `locales/`:

- `en-gb-oxendict` — the hand-authored canonical source. All new topics are drafted here first.
- `en-001`, `en-gb`, `en-us` — mechanically derived from `en-gb-oxendict` by `tools/localize.py`. Never hand-edited.
- `cy-001` (Welsh), `zh-cn` (Simplified Chinese), `es-001` (Spanish), `hi-001` (Hindi), `ar-001` (Arabic), `fr-001` (French), `pt-001` (Portuguese), `de-de` (German), `ru-001` (Russian), `bn-bd` (Bengali — Bangladesh), `ko-kr` (Korean — Korea), `ja-jp` (Japanese — Japan), `sv-se` (Swedish — Sweden), `nl-nl` (Dutch — Netherlands), `ur-pk` (Urdu — Pakistan), `id-id` (Indonesian — Indonesia), `it-it` (Italian — Italy), `uk-ua` (Ukrainian — Ukraine), `fi-fi` (Finnish — Finland), `no-no` (Norwegian — Norway), `da-dk` (Danish — Denmark), `pl-pl` (Polish — Poland), `vi-001` (Vietnamese), and `et-001` (Estonian) — hand-translated, AI-assisted, pending review by a fluent speaker of each language.
- `ar-eg`, `hi-in`, `es-es`, `pt-pt`, `ru-ru`, `fr-fr`, `cy-gb` — country-specific variants of a language already published as an international `-001` locale. These intentionally reuse that locale's translated text byte-for-byte rather than being retranslated: for this book's formal, technical register, regional differences within a language aren't expected to change the wording. If that assumption ever proves wrong for a specific topic, diverge that locale's file directly rather than trying to keep it mechanically in sync with its `-001` sibling.

`en-gb-oxendict` is an internal authoring locale: it is never published by the website (see `digital-health-metrics.github.io/src/lib/locales.js` and `scripts/sync-content.mjs`, both of which enumerate the thirty-four public locales explicitly rather than discovering them from `locales/`). Full detail, including the slug and locale-picker rules, lives in `spec/locales-for-global-sharing-with-svelte/`.

`ar-001`, `ar-eg`, and `ur-pk` are right-to-left. `digital-health-metrics.github.io/src/hooks.server.js` sets `dir="rtl"` on `<html>` for any locale listed in `$lib/locales.js`'s `RTL_LOCALES`, since `adapter-static` still runs the full hooks pipeline once per route at build time. The site's CSS uses logical properties throughout (`inset-inline-start/end`, `padding-inline-start`, etc.), so it needs no other change to support a new RTL locale beyond adding its code to `RTL_LOCALES`.

---

## 5. Voice, style & grounding rules

- **Voice:** direct, practical, no hype. State trade-offs and disagreements between organisations' definitions honestly rather than picking one silently.
- **Spelling (canonical locale):** Oxford spelling (`en-gb-oxendict`) — British English with `-ize`/`-ization` for the Greek-derived family (organize, standardize, randomize), all other British forms otherwise (colour, centre, defence, programme, sceptical, maths). See `tools/localize.py` for the exact word lists already in use.
- **Grounding:** real, checkable sources only. Never invent a citation, a statistic, or a specific study. Where a precise figure is not confidently known, name the organisation or publication type that would carry it (e.g. "NHS England published statistics") rather than fabricating an author, year, or number.
- **Cross-references:** link sibling topics by relative path (`../<slug>/`), never by title alone and never as a bare `.md` link.

---

## 6. Adding a new topic

1. Pick a slug: lower-case, hyphenated, in English, stable once published (other locales may translate the slug; see `spec/locales-for-global-sharing-with-svelte/`).
2. Generate a fresh 32-character lowercase hex peer id (e.g. `python3 -c "import uuid; print(uuid.uuid4().hex)"`).
3. Write `locales/en-gb-oxendict/topics/<slug>/index.md` to the template in §3, symlink `README.md` to `index.md`, and write `.locale-peer-id` with the id from step 2.
4. Run `python3 tools/localize.py` to derive `en-001`, `en-gb`, and `en-us`.
5. Hand-translate `cy-001`, `zh-cn`, `es-001`, `hi-001`, `ar-001`, `fr-001`, `pt-001`, `de-de`, `ru-001`, `bn-bd`, `ko-kr`, `ja-jp`, `sv-se`, `nl-nl`, `ur-pk`, `id-id`, `it-it`, `uk-ua`, `fi-fi`, `no-no`, `da-dk`, `pl-pl`, `vi-001`, and `et-001` (or leave the topic absent from those locales until translated — the site falls back gracefully, but prefer translating seed content promptly). Copy the same content verbatim into `ar-eg`, `hi-in`, `es-es`, `pt-pt`, `ru-ru`, `fr-fr`, and `cy-gb` from their respective `-001` sibling.
6. Add the topic to the root `README.md` table of contents, under the right category, and to each locale's own `locales/<code>/index.md`.
7. Run `bin/test` and fix anything it reports before committing.
8. If the website's content hasn't been re-synced, run `pnpm run sync` inside `digital-health-metrics.github.io/`.

---

## 7. Non-goals & scope boundaries

- **Not a business-case template.** Topics define and explain a metric; they do not tell a reader which metrics to include in a specific business case.
- **Not a coding or vendor-integration guide.** Topics describe what to measure and why, not how to configure a specific EHR or analytics vendor's product to produce it.
- **Not a clinical guideline.** Metrics here are operational and product metrics, not clinical outcome measures or diagnostic criteria.
