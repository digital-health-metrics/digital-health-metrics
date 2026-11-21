# Triage Routing Accuracy

Triage routing accuracy is the share o patient encounters in which an automatit or AI-assistit triage tool correctly routes a patient tae the appropriate level an setting o care — for example self-care, primary care, urgent care, or emergency care — as judged again a clinically validatit reference standard. It's the safety-an-effectiveness metric for ony digital front door, symptom checker, or AI triage system: the tool's hale value rests on routin patients correctly, quickly, an consistently.

## Why it maitters

An inaccurate triage tool causes hairm in baith directions: under-triage (routin a patient tae a lawer level o care than they need) can delay treatment for a genuine emergency, while ower-triage (routin a patient tae a higher level o care than they need) wastes scarce emergency an urgent care capacity an increases cost an patient anxiety for nae clinical benefit. Because thae twa failure modes hae sic different consequences, triage routing accuracy shuid aye be reportit alangside the direction o the errors, no as a single aggregate accuracy figure that hides whether the tool is errin safely or dangerously. Regulators an health systems weighin up an AI triage tool for deployment mair an mair require this kind o stratifiet accuracy reportin as a condition o clinical sign-aff, especially for tools wirkin wi ony degree o autonomy frae a clinician.

## Hoo it's caulculatit

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

## Warked example

An AI symptom-checker tool triages 5,000 patient encounters in a month. A blindit clinician review o a random sample o 500 o thae encounters finds that 430 wur routit tae the correct acuity level (accuracy 86%), 45 wur under-triaged (9%), an 25 wur ower-triaged (5%). The 9% under-triage rate is the figure that maist urgently needs lookin intae, sin it represents encounters whaur a patient may hae been directit tae less urgent care than they actually needit; the 5% ower-triage rate is a capacity an cost concern but no a direct safety ane.

## Data sources an caveats

The reference standard again which triage accuracy is measured maitters enormously: a review bi a single clinician brings in that clinician's ain judgement variability, sae a credible accuracy figure usually needs either sindry independent reviewers wi a documentit inter-rater agreement, or comparison again a subsequent, confirmt clinical outcome (whit care the patient actually needit, establisht efter the fact). Samplin maitters an aa: reviewin only a convenience sample o encounters, or only anes flaggit as unusual, winna gie a figure that generalises tae the tool's owerall performance. Accuracy figures shuid be reportit separately bi presentin symptom or complaint category whaur the underlyin case volume allous it, sin triage tools seldom perform uniformly athort aa conditions.

## Pitfalls

- **Reportin a single blendit accuracy figure**: squashin under-triage an ower-triage intae ae nummer hides whether the tool's errors lean taewards the mair dangerous failure mode; aye report them separately.
- **Uisin a single, unblindit reviewer as the reference standard**: this can quietly bias the accuracy figure taewards whitever that reviewer wid hae duin themsels, raither than an independent clinical standard.
- **Validatin only on retrospective, convenient data**: a tool's real-warld routin accuracy unner live, ambiguous patient input aften differs materially frae its accuracy on a curatit validation set pit thegither durin development.
- **Ignorin performance drift efter deployment**: an AI triage model's accuracy can get waur ower time as patient populations, presentin symptoms, or care-pathway availability chynge; accuracy shuid be re-measured regularly, no validatit ance an assumed steady.

## Sources

- ONC / HealthIT.gov, guidance on the safety and quality assurance of clinical decision support and AI-enabled tools
- Peer-reviewed literature on symptom-checker and AI triage tool accuracy, for example studies published in JAMIA, npj Digital Medicine, and BMJ Health & Care Informatics
- NHS England, guidance on the clinical safety of digital triage and remote consultation tools (DCB0129/DCB0160 clinical risk management standards)

See also: [digital referral turnaround time](../digital-referral-turnaroond-time/), the process metric maist straucht doonstream o a triage decision.
