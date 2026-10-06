# Agents: dependencies

Package manager: pnpm, inside `digital-health-metrics.github.io/`.

- Upgrade with `pnpm update --latest`, then run `pnpm run check` and `pnpm run build`.
- **`typescript` stays on 6.x.** 7.x crashes the SvelteKit build ("Cannot read properties of
  undefined (reading 'readFile')") and is outside the peer range of `@sveltejs/kit` 3.x and
  `svelte-check` 4.x. `pnpm outdated` will keep listing it; revisit when those packages declare
  support.
- `pnpm-workspace.yaml` overrides `svelte-picker-bar`'s sub-pickers to fixed versions
  (`svelte-headless ^0.2.0`, theme-picker `^0.1.2`, locale-picker `^0.1.3`, text-size-picker
  `^0.1.2`, share-picker `^0.1.2`) because their 0.1.1 releases render unstyled. Keep the overrides
  until `svelte-picker-bar` depends on the fixed versions.
- `minimumReleaseAgeExclude` in the same file lists releases allowed despite the release-age gate;
  add to it only deliberately.
- `@lilydesignsystem/svelte-search-picker` is not published. Do not add it; the theme CSS already
  carries `.search-picker*` styles for when it is.
