# Lily Design System Svelte with PickerBar

For the `digital-health-metrics.github.io` Svelte app...

Use PNPM and Lily dependencies (not vendored):
- https://www.npmjs.com/package/@lilydesignsystem/svelte-headless
- https://www.npmjs.com/package/@lilydesignsystem/svelte-search-picker
- https://www.npmjs.com/package/@lilydesignsystem/svelte-theme-picker
- https://www.npmjs.com/package/@lilydesignsystem/svelte-text-size-picker
- https://www.npmjs.com/package/@lilydesignsystem/svelte-locale-picker
- https://www.npmjs.com/package/@lilydesignsystem/svelte-share-picker
- https://www.npmjs.com/package/@lilydesignsystem/svelte-picker-bar

In global top header navigation area use:
  - svelte-picker-bar

In Lily ThemePicker use:
- all Lily default themes (not any application-specific custom themes)
- sort themes alphabetically
- sort UK & US themes at the end, after all the non-national themes

In Lily SharePicker use:
  - Copy Link
  - Email Link
  - Share on LinkedIn
  - Share on Reddit
  - Share on Bluesky
  - Share on Mastodon (link to mastodonshare.com)

Dependency notes (see `digital-health-metrics.github.io/pnpm-workspace.yaml`):
- `svelte-picker-bar` 0.2.0 depends on the five sub-pickers (search, theme, locale, text-size, share) at their fixed versions, so the `overrides` that the 0.1.x releases needed are gone. Do not reintroduce overrides pinning sub-pickers below 0.2.0 (picker-bar 0.1.0's sub-pickers rendered unstyled).
- `typescript` stays on 6.x: 7.x breaks the SvelteKit build and is outside the peer range of `@sveltejs/kit` and `svelte-check`.

In Lily SearchPicker use:
- the picker-bar's built-in search picker, whose form does a GET to `/` so a search for `foo` goes to `/?foo` (the route in `spec/search/`)
- labels `search`, `searchInput`, `searchSubmit` from the site's i18n (`navSearch`, `searchInputLabel`)

In Lily TextSizePicker use:
- all Lily default text sizes (not any application-specific custom text sizes)

In Lily LocalePicker use:
- all of the site's public locales (every code in `$lib/locales.js`'s `LOCALE_LABELS`; see `spec/index.md` §4) — never the content monorepo's internal `en-gb-oxendict` authoring locale
- labels from `$lib/locales.js`'s `LOCALE_LABELS`, in each language

Retire:
  - If any Lily Design System components are vendored, such as in `./src/lib`, and are unneeded, then delete them.
  - If any Lily custom CSS themes exist (not Lily theme defaults), then delete them.

After Lily updates:
1. Run `pnpm run sync:lily` to re-vendor theme CSS from the local Lily Design System checkout.
2. Commit, merge into main, delete old branches.
3. Publish to GitHub Pages.
4. Verify the public GitHub Pages site uses PickerBar, and has all Lily themes.
