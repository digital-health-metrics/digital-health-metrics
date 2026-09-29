# Medication Adherence Rate

Medication adherence rate measures the extent to which a patient takes a prescribed medication as directed, most commonly expressed as the proportion of days in a defined period that a patient had access to their medication as prescribed. It is one of the most consequential digital health metrics because non-adherence is common, largely preventable with the right support, and directly linked to worse clinical outcomes and higher downstream costs — which is exactly the gap that medication reminder apps, smart pill bottles, and pharmacy refill nudges are built to close.

## Why it matters

Non-adherence to chronic disease medication is estimated by public health bodies to run as high as 50% for some conditions, and it is a leading preventable cause of avoidable hospitalizations, disease progression, and treatment failure that gets misattributed to the medication itself rather than to inconsistent use. Digital adherence tools exist specifically to close this gap, so for any program that includes a medication component, adherence rate is usually the single most decision-relevant metric: it sits causally upstream of biometric improvement, readmission, and most other clinical outcome metrics a program might otherwise report. A program that improves engagement or satisfaction without moving adherence has probably not yet demonstrated a plausible mechanism for clinical benefit.

## How it's calculated

```
Proportion of Days Covered (PDC) = days in period with medication on hand
                                    (based on days' supply from fills) / days
                                    in the measurement period × 100

Medication Possession Ratio (MPR) = total days' supply obtained during period
                                    / days in period × 100 (can exceed 100%
                                    with early refills; PDC is generally
                                    preferred for this reason)

A patient is typically classed "adherent" at a PDC threshold of ≥ 80%,
following widely used quality-measure convention.
```

## Worked example

A patient is prescribed a daily chronic medication over a 90-day measurement period. Pharmacy fill records show the patient obtained enough medication to cover 76 of those 90 days, with two gaps: a 9-day gap after running out before a refill, and a 5-day gap around a hospital admission. The PDC is 76 / 90 × 100 = 84%, which crosses the conventional 80% adherence threshold. If the same gaps were measured using MPR based on days' supply dispensed rather than days actually covered, an early refill elsewhere in the period could push the ratio above 100%, illustrating why PDC is the more conservative and generally preferred measure.

## Data sources and caveats

Pharmacy claims or fill data (either from a pharmacy benefit manager or a connected pharmacy system) is the standard source, since it reflects what a patient actually obtained rather than what they were prescribed; prescription data alone overstates adherence because it does not confirm the patient ever collected the medication. Digital adherence tools — smart pill bottles, ingestible sensors, connected smart inhalers that log each actuation for respiratory conditions such as asthma and COPD, and app-based check-ins — offer higher-resolution data on whether a dose was actually taken, not merely obtained, but are used by a small, potentially unrepresentative minority of patients, so blending device-confirmed adherence with claims-based PDC across a population requires care in interpretation. Adherence should be measured over a period long enough to smooth out single missed doses but short enough to detect a meaningful decline before it causes clinical harm — 90-day rolling windows are common for chronic medications.

## Pitfalls

- **Using MPR without disclosing that it can exceed 100%**: unexplained ratios above 100% from early refills or stockpiling make cross-patient and cross-period comparison unreliable unless PDC is used or the ratio is explicitly capped.
- **Treating prescription or order data as proof of adherence**: a prescription written or sent to a pharmacy says nothing about whether the patient collected or took the medication; only fill or device data closes that gap.
- **Applying one adherence threshold across all conditions indiscriminately**: the clinical consequence of missing 20% of doses varies enormously by drug class (e.g. anticoagulants versus statins), so a single 80% threshold used universally can under- or overstate clinical risk for some medications.
- **Ignoring medication switches and discontinuations**: a patient who is clinically and appropriately switched to a different medication can appear as a large adherence drop on the original medication if the switch is not accounted for in the calculation.

## Sources

- Pharmacy Quality Alliance (PQA), Proportion of Days Covered measure specifications
- Centers for Medicare & Medicaid Services (CMS), Star Ratings medication adherence measures
- Peer-reviewed literature on medication adherence measurement and digital adherence interventions, for example studies published in the Journal of Managed Care & Specialty Pharmacy

See also: [biometric improvement rate](../biometric-improvement-rate/), which adherence to chronic disease medication is a primary driver of.
