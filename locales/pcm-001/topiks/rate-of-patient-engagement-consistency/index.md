# Rate of Patient Engagement Consistency

Patient engagement consistency rate dey measure how regularly enrolled patient dey interact with digital health product over time — for example to log food or symptoms, record physical activity, or view health data — instead of just whether dem don use am at all. Na longitudinal metric, different from point-in-time active-use count: two patients fit get identical "used di app dis month" status while one dey log consistently every day and di other log once and disappear for three weeks, and only di consistency metric dey distinguish dem.

## Why e matter

Sustained, regular interaction with digital health tool na one of di more reliable leading indicators of clinical benefit, particularly for behaviour-dependent conditions like diabetes, weight management, and mental health, where di tool value dey come from di habit wey e dey support instead of any single session. Product fit report healthy monthly active user count while e dey actually serve population wey log in once and drift away, because monthly active use na low bar wey no tell anything about di pattern of use inside di month; consistency metrics dey catch dis in way wey simple activity counts no fit. Because consistency also be one of di harder things to sustain over months instead of weeks, e na more honest signal of product quality and clinical fit than short-window engagement figures, wey dey prone to novelty effects immediately after onboarding.

## How dem dey calculate am

```
Engagement consistency rate = weeks with at least one qualifying interaction
                               / total weeks enrolled × 100

A "qualifying interaction" should be defined explicitly and consistently
(e.g. a food log entry, a symptom check-in, or a completed activity sync) —
never a passive event like an app open with no logged action.

Report as a distribution, not only a population mean:
  e.g. share of patients with ≥ 80% weekly consistency,
       share with 50-79%, share with < 50%
```

## Worked example

One nutrition-coaching app enrol patient for 12 weeks. Di patient log at least one qualifying food entry for 9 of those 12 weeks, wey give individual engagement consistency rate of 9 / 12 × 100 = 75%. Across di app full cohort of 2,000 patients wey enrol for at least 12 weeks, 600 patients (30%) maintain ≥ 80% weekly consistency, 900 (45%) fall inside di 50-79% band, and 500 (25%) fall below 50%. To report only di cohort average (wey fit land around 65%) go hide say full quarter of patients dey barely engage at all — segment wey worth to investigate separately instead of to dilute am into overall mean.

## Data sources and caveats

Consistency data dey come from di product own event logs (food entries, activity syncs, check-ins), and di definition of "qualifying interaction" get enormous effect on di resulting rate — lenient definition (any app open) go always look better than strict one (completed, meaningful log entry), so dem must state plainly di definition wey dem use together with any figure wey dem report. Dem suppose report automatically synced data (for example connected fitness tracker wey dey sync activity for background) separate from manually logged data, because automatic syncing fit inflate apparent consistency without to reflect any active patient effort or engagement with di product guidance.

## Pitfalls

- **To mix app opens with meaningful engagement**: passive app open (for example wey push notification trigger) no be di same as logged food entry or completed check-in; define and report on qualifying interactions only.
- **To report only di population average**: healthy-looking average consistency rate fit hide bimodal population of highly engaged and almost entirely disengaged patients; report di distribution across consistency bands, no be only di mean.
- **To ignore di enrolment-length denominator**: to compare consistency rates between patients wey enrol for very different lengths of time without to account for enrolment duration go bias toward whichever group get shorter, easier-to-sustain measurement window.
- **Automatic background syncing wey dey inflate di rate**: wearable data stream wey dey sync passively fit make disengaged patient appear consistently active without any real behaviour change or product engagement from dia side.

## Sources

- Peer-reviewed literature on digital health engagement patterns and their relationship to clinical outcomes, for example studies published in the Journal of Medical Internet Research (JMIR)
- American Medical Informatics Association (AMIA), guidance on patient-generated health data quality and engagement measurement
- Digital Therapeutics Alliance, best-practice guidance on engagement and outcome measurement for digital therapeutics

See also: [user retention rate](../rate-of-user-retention/), di closely related metric of whether patient still dey enrolled at all, as different from how consistently dem dey engage while dem dey enrolled.
