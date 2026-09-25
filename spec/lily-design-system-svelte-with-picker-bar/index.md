# Lily Design System Svelte with PickerBar

For the `digital-health-metrics.github.io` Svelte app...

Use PNPM and Lily dependencies (not vendored):
- https://www.npmjs.com/package/@lilydesignsystem/svelte-headless
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

In Lily TextSizePicker use:
- all Lily default text sizes (not any application-specific custom text sizes)

In Lily LocalePicker use:
- the site's five public locales (`en-us`, `en-gb`, `en-001`, `cy-001`, `zh-cn`) — never the content monorepo's internal `en-gb-oxendict` authoring locale
- labels from `$lib/locales.js`'s `LOCALE_LABELS`, in each language

Retire:
  - If any Lily Design System components are vendored, such as in `./src/lib`, and are unneeded, then delete them.
  - If any Lily custom CSS themes exist (not Lily theme defaults), then delete them.

After Lily updates:
1. Run `pnpm run sync:lily` to re-vendor theme CSS from the local Lily Design System checkout.
2. Commit, merge into main, delete old branches.
3. Publish to GitHub Pages.
4. Verify the public GitHub Pages site uses PickerBar, and has all Lily themes.
