# Rate of Medication Adherence

Medication adherence rate dey measure how far patient dey take prescribed medication as dem direct am, most commonly express as di proportion of days inside defined period wey patient get access to dia medication as prescribed. Na one of di most consequential digital health metrics because non-adherence dey common, e largely preventable with di right support, and e directly link to worse clinical outcomes and higher downstream costs — wey be exactly di gap wey medication reminder apps, smart pill bottles, and pharmacy refill nudges dem build to close.

## Why e matter

Public health bodies estimate say non-adherence to chronic disease medication fit reach as high as 50% for some conditions, and na leading preventable cause of avoidable hospitalizations, disease progression, and treatment failure wey people dey misattribute to di medication itself instead of to inconsistent use. Digital adherence tools dey exist specifically to close dis gap, so for any programme wey include medication component, adherence rate na usually di single most decision-relevant metric: e dey causally upstream of biometric improvement, readmission, and most other clinical outcome metrics wey programme fit otherwise report. Programme wey improve engagement or satisfaction without to move adherence probably never yet demonstrate plausible mechanism for clinical benefit.

## How dem dey calculate am

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

Dem prescribe daily chronic medication for patient over 90-day measurement period. Pharmacy fill records show say di patient obtain enough medication to cover 76 of those 90 days, with two gaps: 9-day gap after e run out before refill, and 5-day gap around hospital admission. Di PDC na 76 / 90 × 100 = 84%, wey cross di conventional 80% adherence threshold. If dem measure di same gaps using MPR wey base on days' supply dispensed instead of days wey dem actually cover, early refill somewhere else inside di period fit push di ratio above 100%, wey show why PDC na di more conservative and generally preferred measure.

## Data sources and caveats

Pharmacy claims or fill data (either from pharmacy benefit manager or connected pharmacy system) na di standard source, because e reflect wetin patient actually obtain instead of wetin dem prescribe; prescription data alone dey overstate adherence because e no confirm say di patient ever collect di medication. Digital adherence tools — smart pill bottles, ingestible sensors, connected smart inhalers wey dey log each actuation for respiratory conditions like asthma and COPD, and app-based check-ins — dey offer higher-resolution data on whether dose dem actually take, no be only obtain, but small, potentially unrepresentative minority of patients dey use dem, so to blend device-confirmed adherence with claims-based PDC across population need care for interpretation. Dem suppose measure adherence over period wey long enough to smooth out single missed doses but short enough to detect meaningful decline before e cause clinical harm — 90-day rolling windows dey common for chronic medications.

## Pitfalls

- **To use MPR without to disclose say e fit exceed 100%**: unexplained ratios above 100% from early refills or stockpiling dey make cross-patient and cross-period comparison unreliable unless dem use PDC or dem explicitly cap di ratio.
- **To treat prescription or order data as proof of adherence**: prescription wey dem write or send to pharmacy no tell anything about whether di patient collect or take di medication; only fill or device data dey close dat gap.
- **To apply one adherence threshold across all conditions indiscriminately**: di clinical consequence of to miss 20% of doses dey vary enormously by drug class (e.g. anticoagulants versus statins), so single 80% threshold wey dem use universally fit under- or overstate clinical risk for some medications.
- **To ignore medication switches and discontinuations**: patient wey dem clinically and appropriately switch to different medication fit appear as large adherence drop on di original medication if dem no account for di switch for di calculation.

## Sources

- Pharmacy Quality Alliance (PQA), Proportion of Days Covered measure specifications
- Centers for Medicare & Medicaid Services (CMS), Star Ratings medication adherence measures
- Peer-reviewed literature on medication adherence measurement and digital adherence interventions, for example studies published in the Journal of Managed Care & Specialty Pharmacy

See also: [biometric improvement rate](../rate-of-biometric-improvement/), wey adherence to chronic disease medication na primary driver of.
