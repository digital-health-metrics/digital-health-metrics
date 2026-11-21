# Rate of Telehealth Visit

Telehealth visit rate na di share of one service total encounters wey dem deliver remotely, by video or telephone, instead of in person. Na mix-of-delivery-channel metric, no be activity metric: e dey tell you how dem dey deliver care, wey matter for capacity planning, access, and clinical appropriateness, quite separate from how much care dem dey deliver in total.

## Why e matter

Di proportion of care wey dem deliver remotely change di operating model of many services after di rapid expansion of virtual consultations during di COVID-19 pandemic, and organizations need stable way to monitor whether dat shift dey continue, dey drift back towards pre-pandemic norms, or policy dey actively steer am. Telehealth no be uniform substitute for in-person visit: appropriateness dey different by specialty, by di type of consultation (medication review dey behave very different from physical examination), and by patient preference, so di "right" rate na clinical and operational judgement, no be target wey dem suppose maximize. Funders and regulators also dey use dis rate, together with outcome and safety measures, to decide reimbursement policy and to check say dem no just dey substitute remote care for cases wey need to dem see in person.

## How dem dey calculate am

```
Telehealth visit rate = telehealth encounters / (telehealth encounters + in-person encounters) × 100

Report separately by modality where possible:
  Video rate     = video encounters / total encounters × 100
  Telephone rate = telephone-only encounters / total encounters × 100

Denominator should count completed encounters only (see pitfalls), for a
defined service, specialty, and time period.
```

## Worked example

One community mental health service record 4,000 completed outpatient contacts inside one quarter: 1,200 in person, 1,600 by video, and 1,200 by telephone. Di telehealth visit rate na (1,600 + 1,200) / 4,000 × 100 = 70%, with video rate of 40% and telephone-only rate of 30%. If dem report only di combined 70% figure, e go hide say big share of "telehealth" here na audio-only, wey typically get different clinical risk profile and patient experience from video.

## Data sources and caveats

Dem dey usually record encounter type as structured field for di electronic health record (visit type or location) or dem dey infer am from billing codes, like place-of-service code or telehealth modifier for claim. Coding practice dey differ well well between organizations and even between clinicians inside di same organization, so any rate comparison across sites suppose first confirm say dem dey code "telehealth" di same way for each place. Visit wey start as video but drop to telephone because of technical problem suppose dem code am consistently (commonly as di modality wey carry most of di clinical content), and dem suppose document dat rule instead of leave am for individual judgement.

## Pitfalls

- **To count attempted visits instead of completed visits**: telehealth appointment wey fail to connect and dem rebook no suppose inflate di telehealth denominator two times.
- **To treat video and telephone as di same thing**: dem get different clinical and equity implications (telephone no dey allow visual assessment but e dey more accessible to patients wey no get smartphone, reliable data, or private space for video); always report dem separate when e possible.
- **To ignore di no-show relationship**: no-show behaviour dey often differ by modality; see [appointment no-show rate](../rate-wey-patient-no-show-for-appointment/) before you draw conclusions about "improved access" from rising telehealth rate alone.
- **To treat high rate as good by itself**: for some conditions and consultation types, appropriate telehealth rate dey low by clinical design, no be because digital maturity fail.

## Sources

- Centers for Medicare & Medicaid Services (CMS), Medicare telehealth utilization data and policy publications
- NHS England, outpatient and community services activity statistics, including virtual/remote attendance breakdowns
- Peer-reviewed literature on telehealth utilization trends and modality-specific outcomes
