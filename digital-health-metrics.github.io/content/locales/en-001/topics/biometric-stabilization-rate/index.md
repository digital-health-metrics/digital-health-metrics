# Biometric Stabilization Rate

Biometric stabilization rate is the share of enrolled patients who achieve and maintain a clinically defined target range for a biometric measure — most commonly blood pressure under a threshold such as 130/80 mmHg — using a connected monitoring device, over a sustained period rather than at a single point in time. It is distinct from biometric improvement rate (see that topic): improvement measures the size of a change from baseline, while stabilization measures whether a patient is being kept reliably within a safe range once treatment or monitoring has started, which is the outcome that matters most for patients who are already close to target or already on treatment.

## Why it matters

For a large share of patients in chronic-disease programmes — particularly hypertension, where guideline blood pressure targets are well established and directly linked to cardiovascular risk — the clinical goal is not a one-off improvement but sustained control, and a patient who oscillates in and out of target range poses a materially different risk than one who improves once and stays there. Connected devices (cellular blood pressure cuffs, continuous glucose monitors) make it possible to measure stabilization continuously rather than only at clinic visits, surfacing patients whose in-clinic readings look controlled but whose home readings are unstable — a pattern known as masked hypertension that periodic in-person measurement alone cannot detect. Reporting stabilization rate rather than only a single "at target" snapshot forces a programme to confront how consistently, not just how often, it keeps patients in range.

## How it's calculated

```
Biometric stabilization rate = patients with ≥ 80% of readings within
                                target range over the measurement period /
                                patients with a minimum number of valid
                                readings in that period × 100

Example thresholds:
  Blood pressure — target < 130/80 mmHg (or the applicable clinical
                   guideline threshold for the patient's risk profile)
  Glucose        — target range per continuous glucose monitoring
                   guidance, reported as "time in range"

A minimum reading-frequency threshold (e.g. at least 3 readings per
week) should be set before a patient is included in the denominator,
to avoid infrequent readers appearing artificially stable.
```

## Worked example

A hypertension remote-monitoring programme enrols 600 patients with cellular blood pressure cuffs, each expected to take at least 3 readings per week. Of these, 540 meet the minimum reading-frequency threshold over a 3-month measurement period and are included in the denominator. Of those 540, 350 have at least 80% of their readings below 130/80 mmHg, giving a biometric stabilization rate of 350 / 540 × 100 = 65%. The 60 patients excluded for insufficient readings are reported separately as a data-completeness gap, not folded into either the numerator or the "unstabilized" group, since their true control status is genuinely unknown rather than poor.

## Data sources and caveats

Readings come directly from the connected device's own data stream, which is more objective and far more frequent than in-clinic measurement, but device placement and technique errors (an incorrectly sized or positioned blood pressure cuff) can introduce systematic bias that a single in-clinic validation reading will not necessarily catch. The choice of target range should follow the current applicable clinical guideline for the patient's specific risk profile and comorbidities rather than a single universal threshold, since guideline targets differ by patient age, kidney function, and cardiovascular risk. A low reading-frequency patient should never be silently counted as "stable" by default; excluding them from the denominator with transparent reporting of the exclusion is more honest than either counting them as controlled or uncontrolled based on too little data.

## Pitfalls

- **Treating a single in-range reading as stabilization**: stabilization is about sustained control over a defined period, not a snapshot; always require a minimum proportion of in-range readings over that period, not a single qualifying measurement.
- **Silently excluding infrequent readers without reporting it**: patients who rarely take readings are not automatically stable or unstable; exclude them transparently from the denominator and report the exclusion rate as a separate data-completeness metric.
- **Ignoring device calibration and technique error**: a poorly fitted cuff or an uncalibrated device can systematically bias readings in one direction, which a stabilization rate calculated naively from raw device data will not catch without periodic validation.
- **Using a single universal target range for all patients**: clinical guideline targets vary by patient risk profile and comorbidity; applying one blanket threshold to a clinically heterogeneous population will misclassify some patients as stabilized or unstabilized relative to their actual individualized target.

## Sources

- American Heart Association (AHA) / American College of Cardiology (ACC), blood pressure guideline targets and home blood pressure monitoring guidance
- International Diabetes Federation and American Diabetes Association (ADA), continuous glucose monitoring "time in range" consensus guidance
- Peer-reviewed literature on remote biometric monitoring and sustained condition control, for example studies published in npj Digital Medicine

See also: [biometric improvement rate](../biometric-improvement-rate/), the related metric of the size of change from baseline, as distinct from sustained control once a target is reached.
