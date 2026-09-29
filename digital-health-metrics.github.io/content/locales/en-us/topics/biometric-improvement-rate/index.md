# Biometric Improvement Rate

Biometric improvement rate is the share of enrolled patients in a digital health program who achieve a clinically meaningful improvement in a tracked biometric — most commonly glycated haemoglobin (HbA1c) in diabetes and cardiometabolic programmes, or body mass index (BMI) in weight-management programmes — over a defined enrolment period. It is the outcome metric that ultimately justifies a digital health product's clinical claims: engagement and adoption numbers describe how a product is used, but biometric improvement is closer to evidence that it works.

## Why it matters

Digital health programmes are frequently sold and commissioned on the promise of improved health outcomes, and biometric improvement rate is the most direct, quantifiable way to test that promise against a specific, clinically recognized threshold rather than a vague claim of "better health". Payers, employers, and health systems increasingly tie reimbursement or contract renewal to demonstrated biometric change, so a program that cannot report this rate credibly is at a commercial as well as clinical disadvantage. The metric is also a discipline check on program design: it is far easier to report engagement (logins, messages sent) than outcomes, and a team should be suspicious of any program that reports the former enthusiastically while being vague about the latter.

## How it's calculated

```
Biometric improvement rate = patients achieving a defined clinically meaningful
                              improvement / patients with a valid baseline and
                              follow-up measurement × 100

Common clinically meaningful thresholds:
  HbA1c   — a reduction of ≥ 0.5 percentage points, or reaching a defined
            target (e.g. < 7.0%) from an out-of-range baseline
  BMI     — a reduction of ≥ 5% of baseline body weight, sustained to the
            follow-up measurement point

Report separately for each biometric tracked; never blend HbA1c and BMI
improvement into a single combined "improvement" percentage.
```

## Worked example

A cardiometabolic digital health program enrols 800 patients with an out-of-range baseline HbA1c. Of these, 620 have both a valid baseline and a follow-up measurement at 6 months (180 are lost to follow-up and excluded from the denominator, not counted as failures). Of the 620 with paired measurements, 340 achieve a reduction of at least 0.5 percentage points. The biometric improvement rate is 340 / 620 × 100 = 55%. Reporting this against the full 800 enrolled (340 / 800 = 42.5%) would conflate loss to follow-up with treatment failure, understating the rate for patients who actually completed measurement.

## Data sources and caveats

Baseline and follow-up biometric values typically come from a connected device (a Bluetooth glucometer or smart scale), a laboratory result imported from the electronic health record, or a self-reported value entered by the patient — and these three sources carry very different reliability, so the source should be reported alongside the rate. Loss to follow-up is rarely random: patients who disengage from a program are often also the ones least likely to have improved, so a high improvement rate calculated only on patients who completed follow-up can overstate the program's true population-level effect. Seasonal and regression-to-the-mean effects are real for both HbA1c and weight, so a program should compare against a concurrent or historical control group where possible rather than treating any improvement as proof of the program's effect.

## Pitfalls

- **Excluding, rather than reporting, loss to follow-up**: quietly dropping patients without a follow-up measurement from the denominator can substantially inflate the apparent improvement rate; always report the completion rate for follow-up measurement alongside the improvement rate itself.
- **Mixing self-reported and device-sourced measurements without labelling them**: a self-reported weight is systematically less reliable than a connected smart scale reading, and blending the two sources obscures how much of an apparent improvement is measurement noise.
- **No control or counterfactual**: many chronic biometric measures fluctuate or regress toward the mean on their own; a single-arm improvement rate without any comparison group is suggestive, not conclusive, evidence of program effect.
- **Treating a modest average shift as evidence of broad improvement**: a small population-level average improvement can be driven by a few large responders while most patients see no change; report the distribution (e.g. the share crossing the clinically meaningful threshold), not only the mean shift.

## Sources

- American Diabetes Association (ADA), Standards of Care in Diabetes, HbA1c target and clinically meaningful change guidance
- Centers for Disease Control and Prevention (CDC), Division of Diabetes Translation, program evaluation guidance
- Peer-reviewed literature on digital diabetes and weight-management program outcomes, for example studies published in npj Digital Medicine and Diabetes Care

See also: [medication adherence rate](../medication-adherence-rate/), a frequent upstream driver of biometric improvement in chronic condition programmes.
