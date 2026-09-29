# Triage Routing Accuracy

Triage routing accuracy is the share of patient encounters in which an automated or AI-assisted triage tool correctly routes a patient to the appropriate level and setting of care — for example self-care, primary care, urgent care, or emergency care — as judged against a clinically validated reference standard. It is the safety-and-effectiveness metric for any digital front door, symptom checker, or AI triage system: the tool's entire value proposition rests on routing patients correctly, quickly, and consistently.

## Why it matters

An inaccurate triage tool causes harm in both directions: under-triage (routing a patient to a lower level of care than they need) can delay treatment for a genuine emergency, while over-triage (routing a patient to a higher level of care than they need) wastes scarce emergency and urgent care capacity and increases cost and patient anxiety for no clinical benefit. Because these two failure modes have such different consequences, triage routing accuracy should always be reported alongside the direction of the errors, not as a single aggregate accuracy figure that hides whether the tool is erring safely or dangerously. Regulators and health systems evaluating an AI triage tool for deployment increasingly require this kind of stratified accuracy reporting as a condition of clinical sign-off, particularly for tools operating with any degree of autonomy from a clinician.

## How it's calculated

```
Triage routing accuracy = encounters correctly routed / total triaged encounters × 100

Report under-triage and over-triage separately:
  Under-triage rate = encounters routed to a lower acuity level than the
                       reference standard / total triaged encounters × 100
  Over-triage rate  = encounters routed to a higher acuity level than the
                       reference standard / total triaged encounters × 100

Reference standard is typically a retrospective clinician review of the
same case, blinded to the tool's output where possible.
```

## Worked example

An AI symptom-checker tool triages 5,000 patient encounters in a month. A blinded clinician review of a random sample of 500 of these encounters finds that 430 were routed to the correct acuity level (accuracy 86%), 45 were under-triaged (9%), and 25 were over-triaged (5%). The 9% under-triage rate is the figure that most urgently needs investigation, since it represents encounters where a patient may have been directed to less urgent care than they actually needed; the 5% over-triage rate is a capacity and cost concern but not a direct safety one.

## Data sources and caveats

The reference standard against which triage accuracy is measured matters enormously: a review by a single clinician introduces that clinician's own judgment variability, so a credible accuracy figure usually requires either multiple independent reviewers with a documented inter-rater agreement, or comparison against a subsequent, confirmed clinical outcome (what care the patient actually required, established after the fact). Sampling matters too: reviewing only a convenience sample of encounters, or only ones flagged as unusual, will not produce a figure that generalizes to the tool's overall performance. Accuracy figures should be reported separately by presenting symptom or complaint category where the underlying case volume allows it, since triage tools rarely perform uniformly across all conditions.

## Pitfalls

- **Reporting a single blended accuracy figure**: collapsing under-triage and over-triage into one number hides whether the tool's errors lean toward the more dangerous failure mode; always report them separately.
- **Using a single, unblinded reviewer as the reference standard**: this can quietly bias the accuracy figure toward whatever that reviewer would have done themselves, rather than an independent clinical standard.
- **Validating only on retrospective, convenient data**: a tool's real-world routing accuracy under live, ambiguous patient input often differs materially from its accuracy on a curated validation set assembled during development.
- **Ignoring performance drift after deployment**: an AI triage model's accuracy can degrade over time as patient populations, presenting symptoms, or care-pathway availability change; accuracy should be re-measured on a recurring basis, not validated once and assumed stable.

## Sources

- ONC / HealthIT.gov, guidance on the safety and quality assurance of clinical decision support and AI-enabled tools
- Peer-reviewed literature on symptom-checker and AI triage tool accuracy, for example studies published in JAMIA, npj Digital Medicine, and BMJ Health & Care Informatics
- NHS England, guidance on the clinical safety of digital triage and remote consultation tools (DCB0129/DCB0160 clinical risk management standards)

See also: [digital referral turnaround time](../digital-referral-turnaround-time/), the process metric most directly downstream of a triage decision.
