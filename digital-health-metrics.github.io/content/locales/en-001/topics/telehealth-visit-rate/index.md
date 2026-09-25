# Telehealth Visit Rate

Telehealth visit rate is the share of a service's total encounters that are delivered remotely, by video or telephone, rather than in person. It is a mix-of-delivery-channel metric, not an activity metric: it tells you how care is being delivered, which matters for capacity planning, access, and clinical appropriateness, quite separately from how much care is being delivered in total.

## Why it matters

The proportion of care delivered remotely changed the operating model of many services after the rapid expansion of virtual consultations during the COVID-19 pandemic, and organizations need a stable way to monitor whether that shift is being sustained, is drifting back towards pre-pandemic norms, or is being actively steered by policy. Telehealth is not a uniform substitute for an in-person visit: appropriateness varies by specialty, by the type of consultation (a medication review behaves very differently from a physical examination), and by patient preference, so the "right" rate is a clinical and operational judgement, not a target to maximize. Funders and regulators also use this rate, alongside outcome and safety measures, to decide reimbursement policy and to check that remote care is not simply being substituted onto cases that need to be seen in person.

## How it's calculated

```
Telehealth visit rate = telehealth encounters / (telehealth encounters + in-person encounters) × 100

Report separately by modality where possible:
  Video rate     = video encounters / total encounters × 100
  Telephone rate = telephone-only encounters / total encounters × 100

Denominator should count completed encounters only (see pitfalls), for a
defined service, specialty, and time period.
```

## Worked example

A community mental health service records 4,000 completed outpatient contacts in a quarter: 1,200 in person, 1,600 by video, and 1,200 by telephone. The telehealth visit rate is (1,600 + 1,200) / 4,000 × 100 = 70%, with a video rate of 40% and a telephone-only rate of 30%. Reporting the combined 70% figure alone would obscure that a large share of "telehealth" here is audio-only, which typically carries a different clinical risk profile and patient experience from video.

## Data sources and caveats

Encounter type is usually recorded either as a structured field in the electronic health record (visit type or location) or inferred from billing codes, such as a place-of-service code or a telehealth modifier on a claim. Coding practice varies significantly between organizations and even between clinicians in the same organization, so a rate comparison across sites should first confirm that "telehealth" is being coded the same way in each. A visit that starts as video but drops to telephone because of a technical problem should be coded consistently (commonly as the modality that carried most of the clinical content), and that rule should be documented rather than left to individual judgement.

## Pitfalls

- **Counting attempted rather than completed visits**: a telehealth appointment that fails to connect and is rebooked should not inflate the telehealth denominator twice.
- **Treating video and telephone as interchangeable**: they have different clinical and equity implications (telephone excludes visual assessment but is more accessible to patients without a smartphone, reliable data, or private space for video); always report them separately when possible.
- **Ignoring the no-show relationship**: no-show behaviour often differs by modality; see [appointment no-show rate](../appointment-no-show-rate/) before drawing conclusions about "improved access" from a rising telehealth rate alone.
- **Treating a high rate as inherently good**: for some conditions and consultation types, an appropriate telehealth rate is low by clinical design, not by digital maturity failure.

## Sources

- Centers for Medicare & Medicaid Services (CMS), Medicare telehealth utilization data and policy publications
- NHS England, outpatient and community services activity statistics, including virtual/remote attendance breakdowns
- Peer-reviewed literature on telehealth utilization trends and modality-specific outcomes
