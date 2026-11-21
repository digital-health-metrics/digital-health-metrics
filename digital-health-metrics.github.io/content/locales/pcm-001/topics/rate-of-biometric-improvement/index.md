# Rate of Biometric Improvement

Biometric improvement rate na di share of enrolled patients inside digital health programme wey achieve clinically meaningful improvement for one tracked biometric — most commonly glycated haemoglobin (HbA1c) for diabetes and cardiometabolic programmes, or body mass index (BMI) for weight-management programmes — over defined enrolment period. Na di outcome metric wey finally justify digital health product clinical claims: engagement and adoption numbers dey describe how dem dey use product, but biometric improvement dey closer to evidence say e dey work.

## Why e matter

Dem dey often sell and commission digital health programmes on di promise of improved health outcomes, and biometric improvement rate na di most direct, quantifiable way to test dat promise against specific, clinically recognized threshold instead of vague claim of "better health". Payers, employers, and health systems dey increasingly tie reimbursement or contract renewal to demonstrated biometric change, so programme wey no fit report dis rate credibly dey for commercial as well as clinical disadvantage. Di metric also be discipline check on programme design: e easy pass to report engagement (logins, messages wey dem send) than outcomes, and team suppose dey suspicious of any programme wey dey report di first one with enthusiasm while e dey vague about di second.

## How dem dey calculate am

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

One cardiometabolic digital health programme enrol 800 patients wey get out-of-range baseline HbA1c. Out of dem, 620 get both valid baseline and follow-up measurement at 6 months (180 dem lose to follow-up and dem exclude dem from di denominator, dem no count dem as failures). Out of di 620 wey get paired measurements, 340 achieve reduction of at least 0.5 percentage points. Di biometric improvement rate na 340 / 620 × 100 = 55%. If dem report dis against di full 800 wey enrol (340 / 800 = 42.5%), e go mix loss to follow-up with treatment failure, and e go understate di rate for patients wey actually complete measurement.

## Data sources and caveats

Baseline and follow-up biometric values dey typically come from connected device (Bluetooth glucometer or smart scale), laboratory result wey dem import from di electronic health record, or self-reported value wey patient enter — and dis three sources get very different reliability, so dem suppose report di source together with di rate. Loss to follow-up no dey rarely random: patients wey disengage from programme dey often also be di ones wey least likely improve, so high improvement rate wey dem calculate only on patients wey complete follow-up fit overstate di programme true population-level effect. Seasonal and regression-to-the-mean effects dey real for both HbA1c and weight, so programme suppose compare against concurrent or historical control group where e possible instead of to treat any improvement as proof of di programme effect.

## Pitfalls

- **To exclude loss to follow-up instead of to report am**: to quietly drop patients wey no get follow-up measurement from di denominator fit substantially inflate di apparent improvement rate; always report di completion rate for follow-up measurement together with di improvement rate itself.
- **To mix self-reported and device-sourced measurements without to label dem**: self-reported weight dey systematically less reliable than connected smart scale reading, and to blend di two sources dey hide how much of apparent improvement na measurement noise.
- **No control or counterfactual**: many chronic biometric measures dey fluctuate or regress toward di mean by demself; single-arm improvement rate without any comparison group na suggestive evidence of programme effect, no be conclusive one.
- **To treat modest average shift as evidence of broad improvement**: small population-level average improvement fit come from few large responders while most patients no see any change; report di distribution (e.g. di share wey cross di clinically meaningful threshold), no be only di mean shift.

## Sources

- American Diabetes Association (ADA), Standards of Care in Diabetes, HbA1c target and clinically meaningful change guidance
- Centers for Disease Control and Prevention (CDC), Division of Diabetes Translation, programme evaluation guidance
- Peer-reviewed literature on digital diabetes and weight-management programme outcomes, for example studies published in npj Digital Medicine and Diabetes Care

See also: [medication adherence rate](../rate-of-medication-adherence/), wey dey frequently drive biometric improvement upstream for chronic condition programmes.
