# Rate of Biometric Stabilization

Biometric stabilization rate na di share of enrolled patients wey achieve and maintain clinically defined target range for one biometric measure — most commonly blood pressure under threshold like 130/80 mmHg — using connected monitoring device, over sustained period instead of one single point in time. E different from biometric improvement rate (see dat topic): improvement dey measure di size of change from baseline, while stabilization dey measure whether dem dey keep patient reliably inside safe range once treatment or monitoring don start, wey be di outcome wey matter pass for patients wey don close to target or wey don dey on treatment.

## Why e matter

For large share of patients inside chronic-disease programmes — particularly hypertension, where guideline blood pressure targets dey well established and directly link to cardiovascular risk — di clinical goal no be one-off improvement but sustained control, and patient wey dey go in and out of target range dey pose materially different risk from one wey improve once and stay dia. Connected devices (cellular blood pressure cuffs, continuous glucose monitors) dey make am possible to measure stabilization continuously instead of only for clinic visits, and dem dey surface patients wey in-clinic readings look controlled but wey home readings dey unstable — pattern wey dem dey call masked hypertension wey periodic in-person measurement alone no fit detect. To report stabilization rate instead of only one "at target" snapshot dey force programme to face how consistently, no be just how often, e dey keep patients inside range.

## How dem dey calculate am

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

One hypertension remote-monitoring programme enrol 600 patients wey get cellular blood pressure cuffs, and dem expect each person to take at least 3 readings per week. Out of dem, 540 meet di minimum reading-frequency threshold over 3-month measurement period and dem include dem for di denominator. Out of those 540, 350 get at least 80% of dia readings below 130/80 mmHg, wey give biometric stabilization rate of 350 / 540 × 100 = 65%. Di 60 patients wey dem exclude because dem no get enough readings dem report separate as data-completeness gap, dem no fold dem into numerator or into di "unstabilized" group, because dia true control status na unknown, e no be poor.

## Data sources and caveats

Readings dey come directly from di connected device own data stream, wey more objective and far more frequent than in-clinic measurement, but device placement and technique errors (blood pressure cuff wey wrong size or wrong position) fit introduce systematic bias wey single in-clinic validation reading no go necessarily catch. Di choice of target range suppose follow di current applicable clinical guideline for di patient specific risk profile and comorbidities instead of one single universal threshold, because guideline targets dey differ by patient age, kidney function, and cardiovascular risk. Patient wey no dey take readings often no suppose dem silently count am as "stable" by default; to exclude dem from di denominator with transparent reporting of di exclusion more honest pass to count dem as controlled or uncontrolled based on too little data.

## Pitfalls

- **To treat one single in-range reading as stabilization**: stabilization na about sustained control over defined period, no be snapshot; always require minimum proportion of in-range readings over dat period, no be one single qualifying measurement.
- **To silently exclude infrequent readers without to report am**: patients wey rarely take readings no dey automatically stable or unstable; exclude dem transparently from di denominator and report di exclusion rate as separate data-completeness metric.
- **To ignore device calibration and technique error**: cuff wey no fit well or device wey dem no calibrate fit systematically bias readings for one direction, wey stabilization rate wey dem calculate naively from raw device data no go catch without periodic validation.
- **To use one single universal target range for all patients**: clinical guideline targets dey vary by patient risk profile and comorbidity; to apply one blanket threshold to clinically heterogeneous population go misclassify some patients as stabilized or unstabilized relative to dia actual individualized target.

## Sources

- American Heart Association (AHA) / American College of Cardiology (ACC), blood pressure guideline targets and home blood pressure monitoring guidance
- International Diabetes Federation and American Diabetes Association (ADA), continuous glucose monitoring "time in range" consensus guidance
- Peer-reviewed literature on remote biometric monitoring and sustained condition control, for example studies published in npj Digital Medicine

See also: [biometric improvement rate](../rate-of-biometric-improvement/), di related metric of di size of change from baseline, as different from sustained control once dem reach target.
