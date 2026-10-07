# Agents: testing and validation

## `bin/test` (repository root)

Checks, for every locale and topic: `.locale-peer-id`, `index.md` and a `README.md -> index.md`
symlink exist; each non-English locale has exactly one translated topics directory; every peer id
belongs to a canonical topic; and `en-001`, `en-gb` and `en-us` match what `tools/localize.py`
would produce. Success prints `All checks passed.` Topics are found by peer id, not path. The
script runs with `set -euf`, so globbing is disabled; use `find` for directory loops.

When adding a topic or locale, update the lists at the top of `bin/test`.

## `python3 tools/verify_locales.py` (repository root)

The full locale audit, about a second. Errors are structural (a missing file or topic, an English slug, a home
page that does not list every topic, a broken link, a variant that differs from its base). Warnings flag
translations that drifted from the English source: a different number of headings, code fences, bullets or
paragraphs (a dropped sentence), or more than 30% of the English figures missing (a rewritten worked example).
`--strict` fails on warnings too; `--quiet` prints only problems. Run it after any translation change; the rules
are in `spec/index.md`, "Locale completeness".

## Site (`digital-health-metrics.github.io/`)

- `pnpm run check`: `svelte-kit sync` and `svelte-check`; expect 0 errors, 0 warnings.
- `pnpm run build`: prerenders every route (`prerender.handleHttpError: 'fail'`, so a broken internal
  link fails the build) and writes the search index.

## Before declaring done

Run `bin/test`, `pnpm run sync`, `pnpm run check` and `pnpm run build`, and say which you ran. Do
not claim a result you did not observe.
