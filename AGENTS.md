# AGENTS.md

Instructions for AI coding agents working in this repository. Keep this file short; the
specification is the source of truth.

## What this repo is

A reference book of digital health metric definitions (one Markdown file per topic), translated into
37 published locales, plus the SvelteKit site that publishes it to GitHub Pages.

## Source of truth

Read [`spec/index.md`](spec/index.md) first. Where a topic, the README, or the website disagrees with
the spec, the spec wins: fix the artifact, or change the spec deliberately and then bring the
artifacts into line. Related specs:

- [`spec/locales-for-global-sharing-with-svelte/`](spec/locales-for-global-sharing-with-svelte/index.md): locale architecture, peer ids, regression watch-list.
- [`spec/search/`](spec/search/index.md): site search.
- [`spec/lily-design-system-svelte-with-picker-bar/`](spec/lily-design-system-svelte-with-picker-bar/index.md): Lily Design System integration and dependency pins.
- [`spec/contents-for-global-sharing-with-svelte/`](spec/contents-for-global-sharing-with-svelte/index.md): contents page.

For adding or editing topics, use the skill in
[`skills/digital-health-metrics-maintainer-skill/`](skills/digital-health-metrics-maintainer-skill/SKILL.md).

## Layout

| Path | Role |
|---|---|
| `locales/en-gb-oxendict/` | Hand-authored canonical source. Internal; never published. |
| `locales/en-001`, `en-gb`, `en-us` | Derived by `python3 tools/localize.py`. Never hand-edit. |
| `locales/<other>/` | Hand-translated (AI-assisted, pending native review). Country variants (`es-es`, `ar-eg`, `hi-in`, `pt-pt`, `ru-ru`, `fr-fr`, `cy-gb`) copy their `-001` sibling; `de-001` is the reverse, a copy of `de-de`. |
| `bin/test` | Structure validation. Run before every commit that touches `locales/`. |
| `digital-health-metrics.github.io/` | The SvelteKit site. See its `README.md`. |

## Detailed guides

- [`AGENTS/topics.md`](AGENTS/topics.md): writing and editing topics.
- [`AGENTS/locales.md`](AGENTS/locales.md): locales, translated paths, adding a locale.
- [`AGENTS/site.md`](AGENTS/site.md): the SvelteKit site.
- [`AGENTS/dependencies.md`](AGENTS/dependencies.md): upgrades and pins.
- [`AGENTS/testing.md`](AGENTS/testing.md): validation and definition of done.

## Rules that are easy to get wrong

- **Translated paths.** Outside the English locales, the `topics` directory and every topic slug are
  translated (`locales/es-es/temas/tasa-de-inasistencia-a-citas/`). Find a topic in another locale by
  its `.locale-peer-id`, never by path. Internal links use the translated names.
- **`.locale-peer-id`** is identical across locales for the same topic. Never regenerate or edit it for
  an existing topic; copy it verbatim into new translations.
- **`README.md` in each locale and topic directory is a symlink to `index.md`.** Keep it a symlink.
- **Never edit `digital-health-metrics.github.io/content/`.** It is a vendored copy. Edit `locales/`,
  then run `pnpm run sync:content` in the site directory.
- **Grounding.** Never invent a citation, statistic or study. Date any quoted figure in-line.
- **Spelling.** Canonical locale is Oxford English (`en-gb-oxendict`); see `tools/localize.py`.
- **TypeScript stays on 6.x** (7.x breaks the SvelteKit build). Do not "upgrade" it.

## Commands

From the repository root:

```sh
bin/test                      # validate structure; expect "All checks passed."
python3 tools/localize.py     # regenerate en-001, en-gb, en-us after editing en-gb-oxendict
```

From `digital-health-metrics.github.io/` (pnpm):

```sh
pnpm run sync      # vendor locales/ into content/ and Lily theme CSS
pnpm run check     # svelte-check; expect 0 errors
pnpm run build     # prerender the site and write the search index
```

## Definition of done

1. `bin/test` passes.
2. If `locales/` changed: `pnpm run sync:content`, then `pnpm run check` and `pnpm run build` pass.
3. Specs and the README are updated if behaviour or structure changed.
4. Commit messages say what and why. Do not push or publish unless asked. Publishing the site is `bin/publish` (see `AGENTS/site.md`).
