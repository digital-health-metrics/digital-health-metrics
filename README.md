# Digital Health Metrics

A reference book of digital health metric definitions, examples, and reasoning, written for teams building, evaluating, and commissioning digital health products. Each topic covers one metric or concept: definition, why it matters, how it's calculated, a worked example, data sources and caveats, pitfalls, and sources.

New here? Start with [patient portal adoption rate](locales/en-gb-oxendict/topics/patient-portal-adoption-rate/) and [appointment no-show rate](locales/en-gb-oxendict/topics/appointment-no-show-rate/) — two metrics that show up in almost every digital health business case.

## Patient engagement and access

- [Patient portal adoption rate](locales/en-gb-oxendict/topics/patient-portal-adoption-rate/) — registration, activation, and active use; three different rates too often conflated as one
- [Telehealth visit rate](locales/en-gb-oxendict/topics/telehealth-visit-rate/) — the share of care delivered remotely, and why video and telephone should never be reported as one number
- [Appointment no-show rate](locales/en-gb-oxendict/topics/appointment-no-show-rate/) — the oldest operational metric in healthcare, and one of the best-evidenced targets for digital reminders
- [Patient engagement consistency rate](locales/en-gb-oxendict/topics/patient-engagement-consistency-rate/) — how regularly a patient interacts with a digital tool over time, as distinct from whether they have used it at all
- [User retention rate](locales/en-gb-oxendict/topics/user-retention-rate/) — the cohort retention curve that separates a product with a sustainable use pattern from one riding a wave of novelty
- [DAU/MAU stickiness ratio](locales/en-gb-oxendict/topics/dau-mau-stickiness-ratio/) — the standard product-analytics measure of engagement intensity across a whole user base
- [Patient Net Promoter Score](locales/en-gb-oxendict/topics/patient-net-promoter-score/) — the widely used, and widely criticized, single-question satisfaction metric
- [System Usability Scale score](locales/en-gb-oxendict/topics/system-usability-scale-score/) — a standardized 10-item questionnaire quantifying how usable a piece of software actually is

## Digital care operations and safety

- [Clinical alert override rate](locales/en-gb-oxendict/topics/clinical-alert-override-rate/) — the standard signal for alert fatigue in clinical decision support
- [Digital referral turnaround time](locales/en-gb-oxendict/topics/digital-referral-turnaround-time/) — the process metric that shows whether an e-referral system is actually saving time
- [Time to intervention](locales/en-gb-oxendict/topics/time-to-intervention-rate/) — how quickly a clinical team responds to an automated health alert
- [Bed-day reduction](locales/en-gb-oxendict/topics/bed-day-reduction/) — inpatient bed days saved by shifting recovery to a virtual ward, always reported alongside a safety metric

## Clinical outcomes and quality

- [Biometric improvement rate](locales/en-gb-oxendict/topics/biometric-improvement-rate/) — the share of patients achieving a clinically meaningful change in a tracked biometric such as HbA1c or BMI
- [Biometric stabilization rate](locales/en-gb-oxendict/topics/biometric-stabilization-rate/) — sustained control within a target range, as distinct from a one-off improvement
- [Triage routing accuracy](locales/en-gb-oxendict/topics/triage-routing-accuracy/) — whether an AI or digital triage tool correctly routes a patient to the right level of care
- [Medication adherence rate](locales/en-gb-oxendict/topics/medication-adherence-rate/) — the proportion of days a patient had access to their medication as prescribed
- [Hospital readmission rate](locales/en-gb-oxendict/topics/hospital-readmission-rate/) — the metric most directly tied to payer economics and value-based care contracts
- [ePROM completion rate](locales/en-gb-oxendict/topics/epro-completion-rate/) — the completion rate for electronic patient-reported outcome measures, and why a declining rate can itself be a clinical signal

## Marketing and growth economics

- [True customer acquisition cost](locales/en-gb-oxendict/topics/true-customer-acquisition-cost/) — the fully loaded cost of acquiring one new patient, commonly undercounted by 30-50%
- [LTV to CAC ratio](locales/en-gb-oxendict/topics/ltv-to-cac-ratio/) — lifetime value against true acquisition cost; 3:1 is the widely cited sustainable baseline
- [Marketing efficiency ratio](locales/en-gb-oxendict/topics/marketing-efficiency-ratio/) — total revenue over total marketing spend, an independent check against platform-reported ROAS

## Digital health equity

- [Digital access rate](locales/en-gb-oxendict/topics/digital-access-rate/) — the precondition metric for every other digital health measure in this book
- [Digital literacy rate](locales/en-gb-oxendict/topics/digital-literacy-rate/) — whether patients who do have access can actually use it unaided

## Technical and operational infrastructure

- [Physician burnout rate](locales/en-gb-oxendict/topics/physician-burnout-rate/) — tracked alongside clinician-facing digital tool burden, since badly designed software is a documented contributor
- [Device uptime rate](locales/en-gb-oxendict/topics/device-uptime-rate/) — the foundational infrastructure metric underneath every remote monitoring programme

## Financial and economic value

- [Cost per episode of care](locales/en-gb-oxendict/topics/cost-per-episode-of-care/) — the standard unit of financial comparison in value-based care contracts
- [Emergency department diversion rate](locales/en-gb-oxendict/topics/ed-diversion-rate/) — patient contacts safely redirected away from the ED, always reported alongside a missed-emergency safety metric
- [Return on investment (ROI) and value on investment (VOI)](locales/en-gb-oxendict/topics/roi-and-voi/) — whether a digital investment paid for itself financially, and whether it was worth doing accounting for everything that matters

## Evaluation frameworks

- [RE-AIM framework](locales/en-gb-oxendict/topics/re-aim-framework/) — Reach, Effectiveness, Adoption, Implementation, and Maintenance; five dimensions rather than one metric
- [WHO Digital Health Assessment Framework](locales/en-gb-oxendict/topics/who-digital-health-assessment-framework/) — WHO's guidance for assessing feasibility, safety, and equity across national-scale deployments
- [ISO/TS 82304-2](locales/en-gb-oxendict/topics/iso-ts-82304-2/) — the international technical specification behind most health and wellness app quality labels

## Locales

`en-gb-oxendict` is this book's hand-authored canonical source. Three English spelling variants — `en-001`, `en-gb`, `en-us` — are derived mechanically from it by [`tools/localize.py`](tools/localize.py); never edit those three directly, edit `en-gb-oxendict` and rerun the script. `cy-001` (Welsh), `zh-cn` (Simplified Chinese), `es-001` (Spanish), `hi-001` (Hindi), `ar-001` (Arabic), `fr-001` (French), `pt-001` (Portuguese), `de-de` (German), `ru-001` (Russian), `bn-bd` (Bengali — Bangladesh), `ko-kr` (Korean — Korea), `ja-jp` (Japanese — Japan), `sv-se` (Swedish — Sweden), `nl-nl` (Dutch — Netherlands), `ur-pk` (Urdu — Pakistan), `id-id` (Indonesian — Indonesia), `it-it` (Italian — Italy), `uk-ua` (Ukrainian — Ukraine), `fi-fi` (Finnish — Finland), `no-no` (Norwegian — Norway), `da-dk` (Danish — Denmark), and `pl-pl` (Polish — Poland) are hand-translated and are AI-assisted, pending review by a fluent speaker of each language. The country-specific variants of a language already published as an international `-001` locale (`ar-eg`, `hi-in`, `es-es`, `pt-pt`, `ru-ru`, `fr-fr`, `cy-gb`) intentionally reuse that locale's translated text rather than being retranslated from scratch — for this book's formal, technical register, regional differences within a language aren't expected to change the wording. `ar-001`, `ar-eg`, and `ur-pk` read right-to-left; the site's `src/hooks.server.js` sets `dir="rtl"` on `<html>` for RTL locales listed in `$lib/locales.js`'s `RTL_LOCALES`, and the site's CSS is written entirely with logical properties so it flips correctly with no other changes needed. See [spec/locales-for-global-sharing-with-svelte](spec/locales-for-global-sharing-with-svelte/) for the full locale architecture, including the spelling-derivation rules and a regression watch-list of bugs to avoid reintroducing.

## Benchmark freshness

Many quoted figures refresh regularly — app store benchmarks, clinical evidence thresholds, reimbursement rates, and engagement statistics chief among them. Each topic dates its benchmarks in-line; re-verify before using any number in a live business case.

## Website

[digital-health-metrics.github.io](digital-health-metrics.github.io/) is a SvelteKit site that publishes this book to GitHub Pages, with a [Lily Design System](https://github.com/LilyDesignSystem) header (theme, language, text size, and share pickers). See its own README for build and sync commands.
