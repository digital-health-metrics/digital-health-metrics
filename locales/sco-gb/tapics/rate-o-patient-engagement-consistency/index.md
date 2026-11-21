# Rate o Patient Engagement Consistency

The rate o patient engagement consistency measures hoo regularly an enrolled patient interacts wi a digital health product ower time — for example loggin food or symptoms, recordin physical activity, or viewin health data — raither than juist whether they've uised it ava. It's a longitudinal metric, no the same as a pynt-in-time active-uise coont: twa patients can hae identical "uised the app this month" status while ane logs consistently ilka day an the ither logs ance an disappears for three weeks, an only the consistency metric tells them apairt.

## Why it maitters

Sustainit, regular interaction wi a digital health tool is ane o the mair reliable leadin indicators o clinical benefit, especially for behaviour-dependent conditions like diabetes, weicht management, an mental health, whaur the tool's value comes frae the habit it supports raither than ony single session. A product can report a healthy monthly active user coont while actually servin a population that logs in ance an drifts awa, because monthly active uise is a low bar that says naething aboot the pattern o uise inside the month; consistency metrics catch this in a wey that simple activity coonts canna. Because consistency is an aa ane o the herder things tae sustain ower months raither than weeks, it's a mair honest signal o product quality an clinical fit than short-window engagement figures, which are prone tae novelty effects richt efter onboardin.

## Hoo it's caulculatit

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

## Warked example

A nutrition-coachin app enrols a patient for 12 weeks. The patient logs at least ane qualifyin food entry in 9 o thae 12 weeks, giein an individual engagement consistency rate o 9 / 12 × 100 = 75%. Athort the app's full cohort o 2,000 patients enrolled for at least 12 weeks, 600 patients (30%) haud ≥ 80% weekly consistency, 900 (45%) fa in the 50-79% band, an 500 (25%) fa unner 50%. Reportin only the cohort average (which micht land aroond 65%) wid hide that a full quarter o patients are hardly engagin ava — a segment worth lookin intae separately raither than waterin doun intae an owerall mean.

## Data sources an caveats

Consistency data comes frae the product's ain event logs (food entries, activity syncs, check-ins), an the definition o a "qualifyin interaction" haes an enormous effect on the resultin rate — a lenient definition (ony app open) 'll aye look better than a strict ane (a completit, meaningfu log entry), sae the definition uised maun be stated plainly alangside ony reportit figure. Automatically syncit data (for example a connectit fitness tracker syncin activity in the backgrund) shuid be reportit separately frae manually loggit data, sin automatic syncin can inflate apparent consistency wioot reflectin ony active patient effort or engagement wi the product's guidance.

## Pitfalls

- **Mixin app opens up wi meaningfu engagement**: a passive app open (for example triggert bi a push notification) isnae the same as a loggit food entry or completit check-in; define an report on qualifyin interactions only.
- **Reportin only the population average**: a healthy-lookin average consistency rate can hide a bimodal population o highly engaged an near-enough fully disengaged patients; report the distribution athort consistency bands, no juist the mean.
- **Ignorin the enrolment-length denominator**: comparin consistency rates atween patients enrolled for verra different lengths o time wioot accountin for enrolment duration'll bias taewards whichever group haed a shorter, easier-tae-sustain measurement window.
- **Automatic backgrund syncin inflatin the rate**: a passively syncit wearable data stream can mak a disengaged patient appear consistently active wioot ony real behaviour chynge or product engagement on their pairt.

## Sources

- Peer-reviewed literature on digital health engagement patterns and their relationship to clinical outcomes, for example studies published in the Journal of Medical Internet Research (JMIR)
- American Medical Informatics Association (AMIA), guidance on patient-generated health data quality and engagement measurement
- Digital Therapeutics Alliance, best-practice guidance on engagement and outcome measurement for digital therapeutics

See also: [rate o user retention](../rate-o-user-retention/), the closely relatit metric o whether a patient bides enrolled ava, as distinct frae hoo consistently they engage while enrolled.
