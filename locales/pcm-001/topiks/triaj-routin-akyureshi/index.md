# Triage Routing Accuracy

Triage routing accuracy na di share of patient encounters wey automated or AI-assisted triage tool correctly route patient to di appropriate level and setting of care — for example self-care, primary care, urgent care, or emergency care — as dem judge am against clinically validated reference standard. Na di safety-and-effectiveness metric for any digital front door, symptom checker, or AI triage system: di tool whole value proposition dey rest on to route patients correctly, quickly, and consistently.

## Why e matter

Inaccurate triage tool dey cause harm for both directions: under-triage (to route patient to lower level of care than wetin dem need) fit delay treatment for genuine emergency, while over-triage (to route patient to higher level of care than wetin dem need) dey waste scarce emergency and urgent care capacity and e dey increase cost and patient anxiety for no clinical benefit. Because dese two failure modes get very different consequences, dem suppose always report triage routing accuracy together with di direction of di errors, no be as single aggregate accuracy figure wey dey hide whether di tool dey err safely or dangerously. Regulators and health systems wey dey evaluate AI triage tool for deployment dey increasingly require dis kind stratified accuracy reporting as condition of clinical sign-off, particularly for tools wey dey operate with any degree of autonomy from clinician.

## How dem dey calculate am

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

One AI symptom-checker tool triage 5,000 patient encounters for one month. Blinded clinician review of random sample of 500 of dese encounters find say 430 dem route to di correct acuity level (accuracy 86%), 45 dem under-triage (9%), and 25 dem over-triage (5%). Di 9% under-triage rate na di figure wey need investigation most urgently, because e represent encounters where patient fit don direct go less urgent care than wetin dem actually need; di 5% over-triage rate na capacity and cost concern but no be direct safety one.

## Data sources and caveats

Di reference standard wey dem use measure triage accuracy matter enormously: review by single clinician dey introduce dat clinician own judgement variability, so credible accuracy figure usually need either multiple independent reviewers with documented inter-rater agreement, or comparison against subsequent, confirmed clinical outcome (wetin care di patient actually need, wey dem establish after di fact). Sampling also matter: to review only convenience sample of encounters, or only ones wey dem flag as unusual, no go produce figure wey generalize to di tool overall performance. Dem suppose report accuracy figures separately by presenting symptom or complaint category where di underlying case volume allow am, because triage tools rarely perform uniformly across all conditions.

## Pitfalls

- **To report single blended accuracy figure**: to collapse under-triage and over-triage into one number dey hide whether di tool errors lean toward di more dangerous failure mode; always report dem separately.
- **To use single, unblinded reviewer as di reference standard**: dis fit quietly bias di accuracy figure toward whatever dat reviewer for do by imself, instead of independent clinical standard.
- **To validate only on retrospective, convenient data**: tool real-world routing accuracy under live, ambiguous patient input often dey differ materially from im accuracy on curated validation set wey dem assemble during development.
- **To ignore performance drift after deployment**: AI triage model accuracy fit degrade over time as patient populations, presenting symptoms, or care-pathway availability change; dem suppose re-measure accuracy on recurring basis, no be to validate once and assume say e stable.

## Sources

- ONC / HealthIT.gov, guidance on the safety and quality assurance of clinical decision support and AI-enabled tools
- Peer-reviewed literature on symptom-checker and AI triage tool accuracy, for example studies published in JAMIA, npj Digital Medicine, and BMJ Health & Care Informatics
- NHS England, guidance on the clinical safety of digital triage and remote consultation tools (DCB0129/DCB0160 clinical risk management standards)

See also: [digital referral turnaround time](../time-wey-digital-referral-take/), di process metric wey dey directly downstream of triage decision pass.
