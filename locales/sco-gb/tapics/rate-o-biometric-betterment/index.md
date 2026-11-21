# Rate o Biometric Betterment

The rate o biometric betterment is the share o enrolled patients in a digital health programme that get a clinically meaningful improvement in a trackit biometric — maist commonly glycated haemoglobin (HbA1c) in diabetes an cardiometabolic programmes, or body mass index (BMI) in weicht-management programmes — ower a defined enrolment period. It's the outcome metric that in the hinner end justifies a digital health product's clinical claims: engagement an adoption nummers tell ye hou a product is uised, but biometric betterment is nearer tae evidence that it warks.

## Why it maitters

Digital health programmes are aften sellt an commissioned on the promise o better health outcomes, an the rate o biometric betterment is the maist direct, quantifiable wey tae test that promise again a specific, clinically recognised threshold raither than a vague claim o "better health". Payers, employers, an health systems mair an mair tie reimbursement or contract renewal tae shawn biometric chynge, sae a programme that canna report this rate credibly is at a commercial as weel as a clinical disadvantage. The metric is an aa a discipline check on programme design: it's faur easier tae report engagement (logins, messages sent) than outcomes, an a team shuid be suspicious o ony programme that reports the first wi enthusiasm while bein vague aboot the second.

## Hoo it's caulculatit

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

## Warked example

A cardiometabolic digital health programme enrols 800 patients wi an oot-o-range baseline HbA1c. O thae, 620 hae baith a valid baseline an a follow-up measurement at 6 months (180 are lost tae follow-up an left oot o the denominator, no coontit as failures). O the 620 wi paired measurements, 340 get a reduction o at least 0.5 percentage points. The rate o biometric betterment is 340 / 620 × 100 = 55%. Reportin this again aa 800 enrolled (340 / 800 = 42.5%) wid mix up loss tae follow-up wi treatment failure, unnerstatin the rate for patients that actually completit the measurement.

## Data sources an caveats

Baseline an follow-up biometric values typically come frae a connectit device (a Bluetooth glucometer or smart scale), a laboratory result importit frae the electronic health record, or a self-reportit value pit in bi the patient — an thae three sources cairry gey different reliability, sae the source shuid be reportit alangside the rate. Loss tae follow-up is seldom random: patients that gie up on a programme are aften an aa the anes least likely tae hae improved, sae a high improvement rate caulculatit juist on patients that completit follow-up can owerstate the programme's true population-level effect. Seasonal an regression-tae-the-mean effects are real for baith HbA1c an weicht, sae a programme shuid compare again a concurrent or historical control group whaur it can raither than takkin ony improvement as proof o the programme's effect.

## Pitfalls

- **Leavin oot, raither than reportin, loss tae follow-up**: quietly drappin patients wioot a follow-up measurement frae the denominator can muckle inflate the apparent improvement rate; aye report the completion rate for follow-up measurement alangside the improvement rate itsel.
- **Mixin self-reportit an device-sourced measurements wioot labellin them**: a self-reportit weicht is systematically less reliable than a connectit smart scale readin, an blendin the twa sources hides hou muckle o an apparent improvement is juist measurement noise.
- **Nae control or counterfactual**: mony chronic biometric measures wobble or drift back tae the mean on their ain; a single-arm improvement rate wioot ony comparison group is suggestive, no conclusive, evidence o programme effect.
- **Takkin a modest average shift as evidence o braid improvement**: a sma population-level average improvement can be driven bi a few big responders while maist patients see nae chynge; report the distribution (e.g. the share crossin the clinically meaningful threshold), no juist the mean shift.

## Sources

- American Diabetes Association (ADA), Standards of Care in Diabetes, HbA1c target and clinically meaningful change guidance
- Centers for Disease Control and Prevention (CDC), Division of Diabetes Translation, programme evaluation guidance
- Peer-reviewed literature on digital diabetes and weight-management programme outcomes, for example studies published in npj Digital Medicine and Diabetes Care

See also: [rate o medication adherence](../rate-o-medication-adherence/), a frequent upstream driver o biometric betterment in chronic condition programmes.
