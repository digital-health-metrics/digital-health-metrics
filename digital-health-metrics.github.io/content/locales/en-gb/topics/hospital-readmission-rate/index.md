# Hospital Readmission Rate

Hospital readmission rate is the share of discharged patients who are readmitted to hospital, unplanned, within a defined window after discharge — most commonly 30 days. For digital health, it is the metric most directly tied to payer economics and value-based care contracts: a remote monitoring, post-discharge follow-up, or digital care-transition programme that cannot show a credible effect on readmissions is unlikely to earn continued reimbursement support, however good its engagement numbers look.

## Why it matters

An unplanned readmission is expensive, disruptive to the patient, and in many health systems now directly penalized: schemes such as the US Hospital Readmissions Reduction Program reduce payment to hospitals with higher-than-expected readmission rates for specific conditions, which is why hospitals actively commission digital post-discharge and remote monitoring programmes aimed at reducing them. A meaningful share of readmissions are considered potentially preventable — driven by inadequate discharge instructions, missed follow-up appointments, medication misunderstanding, or unaddressed symptom deterioration that a well-designed digital touchpoint can catch earlier — which is precisely the gap digital transitional-care tools target. Readmission rate should always be read alongside case mix: a programme serving a sicker, more complex population will have a structurally higher baseline rate than one serving a healthier population, independent of programme quality.

## How it's calculated

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

A hospital discharges 1,200 patients with heart failure in a quarter. Of these, 210 are readmitted within 30 days, of which 15 are planned readmissions for a scheduled procedure and are excluded. The unplanned 30-day readmission rate is (210 − 15) / 1,200 × 100 = 16.25%. A remote monitoring programme is introduced for a subset of 400 of these patients (selected by clinical risk, not randomly), and their unplanned readmission rate is 14%, compared with 18% for the 800 patients not enrolled. Because enrolment was based on clinical risk rather than random assignment, this difference is suggestive rather than conclusive evidence of the programme's effect, and should be interpreted alongside a risk-adjustment analysis rather than taken at face value.

## Data sources and caveats

Readmission data is typically drawn from the hospital's own admission-discharge-transfer (ADT) feed for readmissions to the same facility, but a patient readmitted to a different hospital will not appear in that feed at all, so single-hospital readmission tracking systematically undercounts true readmission rates unless supplemented with regional health information exchange data, payer claims data, or state-level all-payer databases. Attribution to a digital programme requires care: patients who opt in to a voluntary remote monitoring programme are rarely a random sample of the discharged population, so a naive comparison of enrolled versus non-enrolled readmission rates will tend to be confounded by exactly the selection effects that made some patients more likely to enrol in the first place.

## Pitfalls

- **Comparing raw, non-risk-adjusted rates across populations**: a programme serving a sicker population will show a higher raw readmission rate than one serving a healthier population even if the programme itself is more effective; always risk-adjust before comparing.
- **Undercounting readmissions to other facilities**: relying only on a single hospital's own ADT data will miss readmissions elsewhere, understating the true rate, particularly in areas with multiple competing hospital systems.
- **Selection bias in voluntary programme enrolment**: patients who choose to enrol in a digital follow-up programme often differ systematically (in health literacy, social support, or motivation) from those who do not, confounding any naive before/after or enrolled/non-enrolled comparison.
- **Counting every same-facility return as a readmission**: a scheduled, planned readmission (for example a planned second-stage procedure) is not a signal of a failed discharge and should be excluded from the numerator, not blended in with genuinely unplanned returns.

## Sources

- Centers for Medicare & Medicaid Services (CMS), Hospital Readmissions Reduction Program and Hospital-Wide Readmission measure specifications
- Institute for Healthcare Improvement (IHI), guidance on reducing avoidable readmissions
- Peer-reviewed literature on digital remote monitoring and transitional-care interventions for readmission reduction, for example studies published in JAMA Network Open and npj Digital Medicine

See also: [triage routing accuracy](../triage-routing-accuracy/), since inappropriate initial routing can itself be a downstream driver of avoidable admissions.
