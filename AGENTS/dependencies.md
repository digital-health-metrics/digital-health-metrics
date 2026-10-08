# Agents: dependencies

Package manager: pnpm, inside `digital-health-metrics.github.io/`.

- Upgrade with `pnpm update --latest`, then run `pnpm run check` and `pnpm run build`.
- **`typescript` stays on 6.x.** 7.x crashes the SvelteKit build ("Cannot read properties of
  undefined (reading 'readFile')") and is outside the peer range of `@sveltejs/kit` 3.x and
  `svelte-check` 4.x. `pnpm outdated` will keep listing it; revisit when those packages declare
  support.
- `svelte-picker-bar` 0.3.0 brings the link, search, theme, locale, text-size and share pickers (link is
  rendered only when `links` and `labels.link` are passed). The old `overrides` for 0.1.x sub-pickers were
  removed; do not re-add pins below 0.2.0. 0.3.0 and `svelte-link-picker` 0.1.0 are in
  `minimumReleaseAgeExclude` because they were under a day old when adopted.
- The Lily theme CSS is vendored from the sibling Lily checkout: `pnpm run sync:lily` after Lily's themes change.
- `minimumReleaseAgeExclude` in `pnpm-workspace.yaml` lists releases allowed despite the release-age
  gate; add to it only deliberately.
