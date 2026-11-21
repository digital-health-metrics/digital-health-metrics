# Rate of Hospital Readmission

Hospital readmission rate na di share of discharged patients wey dem readmit to hospital, unplanned, inside defined window after discharge — most commonly 30 days. For digital health, na di metric wey most directly tie to payer economics and value-based care contracts: remote monitoring, post-discharge follow-up, or digital care-transition programme wey no fit show credible effect on readmissions no likely to earn continued reimbursement support, no matter how good im engagement numbers look.

## Why e matter

Unplanned readmission dey expensive, e dey disrupt di patient, and for many health systems now dem dey directly penalize am: schemes like di US Hospital Readmissions Reduction Program dey reduce payment to hospitals wey get higher-than-expected readmission rates for specific conditions, and na why hospitals dey actively commission digital post-discharge and remote monitoring programmes wey aim to reduce dem. Meaningful share of readmissions dem consider as potentially preventable — wey inadequate discharge instructions, missed follow-up appointments, medication misunderstanding, or unaddressed symptom deterioration dey drive, wey well-designed digital touchpoint fit catch earlier — wey be exactly di gap wey digital transitional-care tools target. Dem suppose always read readmission rate together with case mix: programme wey dey serve sicker, more complex population go get structurally higher baseline rate than one wey dey serve healthier population, no matter di programme quality.

## How dem dey calculate am

```
30-day readmission rate = unplanned readmissions within 30 days of discharge
                           / total index discharges × 100

Exclude from the numerator: planned readmissions (e.g. a scheduled
follow-up procedure), and transfers that are a continuation of the same
episode of care rather than a new admission.

Risk-adjust where possible, using an accepted case-mix or comorbidity
index, before comparing rates across different patient populations or
time periods.
```

## Worked example

One hospital discharge 1,200 patients wey get heart failure inside one quarter. Out of dem, 210 dem readmit within 30 days, and 15 of dem na planned readmissions for scheduled procedure and dem exclude dem. Di unplanned 30-day readmission rate na (210 − 15) / 1,200 × 100 = 16.25%. Dem introduce remote monitoring programme for subset of 400 of dese patients (dem select dem by clinical risk, no be randomly), and dia unplanned readmission rate na 14%, compared with 18% for di 800 patients wey no enrol. Because enrolment base on clinical risk instead of random assignment, dis difference na suggestive evidence of di programme effect, no be conclusive one, and dem suppose interpret am together with risk-adjustment analysis instead of to take am at face value.

## Data sources and caveats

Dem dey typically draw readmission data from di hospital own admission-discharge-transfer (ADT) feed for readmissions to di same facility, but patient wey dem readmit to different hospital no go appear for dat feed at all, so single-hospital readmission tracking dey systematically undercount true readmission rates unless dem supplement am with regional health information exchange data, payer claims data, or state-level all-payer databases. To attribute effect to digital programme need care: patients wey opt in to voluntary remote monitoring programme rarely be random sample of di discharged population, so naive comparison of enrolled versus non-enrolled readmission rates go tend to confound by exactly di selection effects wey make some patients more likely to enrol for di first place.

## Pitfalls

- **To compare raw, non-risk-adjusted rates across populations**: programme wey dey serve sicker population go show higher raw readmission rate than one wey dey serve healthier population even if di programme itself more effective; always risk-adjust before you compare.
- **To undercount readmissions to other facilities**: to rely only on single hospital own ADT data go miss readmissions elsewhere, and e go understate di true rate, particularly for areas wey get many competing hospital systems.
- **Selection bias for voluntary programme enrolment**: patients wey choose to enrol for digital follow-up programme dey often differ systematically (for health literacy, social support, or motivation) from those wey no enrol, wey dey confound any naive before/after or enrolled/non-enrolled comparison.
- **To count every same-facility return as readmission**: scheduled, planned readmission (for example planned second-stage procedure) no be signal of failed discharge and dem suppose exclude am from di numerator, no be to blend am with genuinely unplanned returns.

## Sources

- Centers for Medicare & Medicaid Services (CMS), Hospital Readmissions Reduction Program and Hospital-Wide Readmission measure specifications
- Institute for Healthcare Improvement (IHI), guidance on reducing avoidable readmissions
- Peer-reviewed literature on digital remote monitoring and transitional-care interventions for readmission reduction, for example studies published in JAMA Network Open and npj Digital Medicine

See also: [triage routing accuracy](../triaj-routin-akyureshi/), because inappropriate initial routing fit itself be downstream driver of avoidable admissions.
