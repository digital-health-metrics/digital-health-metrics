# Agents: testing and validation

## `bin/test` (repository root)

Checks, for every locale and topic: `.locale-peer-id`, `index.md` and a `README.md -> index.md`
symlink exist; each non-English locale has exactly one translated topics directory; every peer id
belongs to a canonical topic; and `en-001`, `en-gb` and `en-us` match what `tools/localize.py`
would produce. Success prints `All checks passed.` Topics are found by peer id, not path. The
script runs with `set -euf`, so globbing is disabled; use `find` for directory loops.

When adding a topic or locale, update the lists at the top of `bin/test`.

## Site (`digital-health-metrics.github.io/`)

- `pnpm run check`: `svelte-kit sync` and `svelte-check`; expect 0 errors, 0 warnings.
- `pnpm run build`: prerenders every route (`prerender.handleHttpError: 'fail'`, so a broken internal
  link fails the build) and writes the search index.

## Before declaring done

Run `bin/test`, `pnpm run sync`, `pnpm run check` and `pnpm run build`, and say which you ran. Do
not claim a result you did not observe.
