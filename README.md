# Digital Health Metrics

A reference book of digital health metric definitions, examples, and reasoning, written for teams building, evaluating, and commissioning digital health products. Each topic covers one metric or concept: definition, why it matters, how it's calculated, a worked example, data sources and caveats, pitfalls, and sources.

New here? Start with [patient portal adoption rate](locales/en-gb-oxendict/topics/patient-portal-adoption-rate/) and [appointment no-show rate](locales/en-gb-oxendict/topics/appointment-no-show-rate/) — two metrics that show up in almost every digital health business case.

## Patient engagement and access

- [Patient portal adoption rate](locales/en-gb-oxendict/topics/patient-portal-adoption-rate/) — registration, activation, and active use; three different rates too often conflated as one
- [Telehealth visit rate](locales/en-gb-oxendict/topics/telehealth-visit-rate/) — the share of care delivered remotely, and why video and telephone should never be reported as one number
- [Appointment no-show rate](locales/en-gb-oxendict/topics/appointment-no-show-rate/) — the oldest operational metric in healthcare, and one of the best-evidenced targets for digital reminders

## Digital care operations and safety

- [Clinical alert override rate](locales/en-gb-oxendict/topics/clinical-alert-override-rate/) — the standard signal for alert fatigue in clinical decision support
- [Digital referral turnaround time](locales/en-gb-oxendict/topics/digital-referral-turnaround-time/) — the process metric that shows whether an e-referral system is actually saving time

## Locales

`en-gb-oxendict` is this book's hand-authored canonical source. Three English spelling variants — `en-001`, `en-gb`, `en-us` — are derived mechanically from it by [`tools/localize.py`](tools/localize.py); never edit those three directly, edit `en-gb-oxendict` and rerun the script. `cy-001` (Welsh) and `zh-cn` (Simplified Chinese) are hand-translated and are AI-assisted, pending review by a fluent speaker of each language. See [spec/locales-for-global-sharing-with-svelte](spec/locales-for-global-sharing-with-svelte/) for the full locale architecture, including the spelling-derivation rules and a regression watch-list of bugs to avoid reintroducing.

## Benchmark freshness

Many quoted figures refresh regularly — app store benchmarks, clinical evidence thresholds, reimbursement rates, and engagement statistics chief among them. Each topic dates its benchmarks in-line; re-verify before using any number in a live business case.

## Website

[digital-health-metrics.github.io](digital-health-metrics.github.io/) is a SvelteKit site that publishes this book to GitHub Pages, with a [Lily Design System](https://github.com/LilyDesignSystem) header (theme, language, text size, and share pickers). See its own README for build and sync commands.
