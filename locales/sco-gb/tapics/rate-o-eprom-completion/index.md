# Rate o ePROM Completion

The rate o ePROM completion measures the share o scheduled electronic Patient-Reported Outcome Measures (ePROMs) — standardised, validatit questionnaires capturin a patient's ain account o their symptoms, function, or quality o life, delivert digitally raither than on paper — that are actually completit. It's a data-quality metric as muckle as an engagement ane: a PROM programme's clinical an research value depends entirely on haein a high enough completion rate that the responses collectit are representative o the full enrolled population, no juist the maist engaged or least symptomatic subset.

## Why it maitters

Patient-reportit outcomes are the direct, patient-vouched complement tae clinician-recordit or device-measured data, capturin dimensions o health — pain, function, quality o life — that a chart review or biometric readin canna; digitisin PROM collection is there specifically tae mak this data cheaper an easier tae collect at scale than paper-based administration ever allowed. But a PROM programme wi a low completion rate risks a specific an serious bias: patients that feel waur are aften less likely tae complete a lang questionnaire, sae a faain completion rate can itsel be an early warnin sign o worsenin population health, an a low owerall completion rate can mak the collectit responses look better than the true population's experience juist because the maist symptomatic patients are under-representit in whit gets completit. This is why completion rate shuid aye be reportit alangside the PROM scores themsels, no treatit as a secondary operational detail.

## Hoo it's caulculatit

```
ePROM completion rate = ePROMs fully completed / ePROMs sent or scheduled × 100

Report separately for:
  Initial completion rate     (first questionnaire in a monitoring
                               sequence)
  Longitudinal completion rate (subsequent questionnaires in an ongoing
                               monitoring sequence, which typically
                               declines over time and should be tracked
                               as a trend, not a single figure)

A "partially completed" questionnaire should be defined and reported
separately from both "fully completed" and "not started".
```

## Warked example

An oncology clinic sends a validatit symptom-burden ePROM tae 400 patients aheid o ilka monthly follow-up visit. In the first month, 340 patients fully complete the questionnaire (completion rate 85%), 30 partially complete it, an 30 dinnae stairt it. Bi the saxt month o the same monitorin sequence, complete responses hae fa'en tae 260 o the same 400-patient cohort (65%), a meaningfu longitudinal decline that wid be missed entirely if only the first month's 85% figure wur reportit as a static owerall metric. Lookin intae which patients drap aff (bi symptom severity, disease stage, or age) can shaw whether the decline reflects survey fatigue, worsenin symptoms makkin the questionnaire herder tae complete, or a technical access barrier.

## Data sources an caveats

Completion data comes frae the ePROM platform's ain delivery an response logs, which can tell "no stairtit", "pairtly completit", an "fully completit" states apairt — a distinction that shuid aye be keepit an reportit raither than squashed intae a binary completit/no-completit figure, sin pairtial completion aften pynts tae a specific place in the questionnaire whaur patients struggle or gie up. Completion rate shuid be read alangside hoo the questionnaire is delivert (a text message link, an app notification, or a delivery method needin a portal login), sin delivery friction itsel affects completion regairdless o the questionnaire's content or the patient's underlyin condition. A validatit instrument (raither than an ad hoc set o questions) shuid aye be uised for the PROM itsel, sin the completion rate for an unvalidatit instrument says naething reliable aboot the clinical uisefulness o the resultin data even if completion is high.

## Pitfalls

- **Takkin a faain completion rate as a delivery problem only**: a longitudinal drap in completion can reflect genuinely worsenin patient symptoms (patients ower unweel tae complete the survey) raither than survey fatigue or a technical issue, an this distinction maitters enormously for clinical interpretation.
- **Squashin pairtial an full completion intae ae category**: a pairtly completit questionnaire is data o a meaningfully different quality frae a fully completit ane; report them separately, an look intae whaur in the questionnaire flow patients tend tae gie up.
- **Reportin completion rate wioot reportin response bias risk**: a moderate completion rate shuid prompt a look at whether responders differ systematically (in symptom severity, age, digital literacy) frae non-responders, sin PROM scores caulculatit only frae responders can misrepresent the full population.
- **Uisin an unvalidatit or hame-growit questionnaire**: completion rate is meaningless as a data-quality signal if the instrument bein completit haesnae itsel been clinically validatit for the condition an population bein measured.

## Sources

- International Consortium for Health Outcomes Measurement (ICHOM), standard set development and PROM implementation guidance
- U.S. Food and Drug Administration (FDA), guidance on patient-reported outcome measures in clinical trials and regulatory submissions
- Peer-reviewed literature on electronic PROM implementation and completion rates, for example studies published in Quality of Life Research and the Journal of Medical Internet Research (JMIR)

See also: [patient net promoter score](../patient-net-promoter-scorrie/), a relatit but separate patient-reportit metric measurin satisfaction raither than clinical outcome.
