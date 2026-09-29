# ePROM Completion Rate

ePROM completion rate measures the share of scheduled electronic Patient-Reported Outcome Measures (ePROMs) — standardized, validated questionnaires capturing a patient's own account of their symptoms, function, or quality of life, delivered digitally rather than on paper — that are actually completed. It is a data-quality metric as much as an engagement one: a PROM program's clinical and research value depends entirely on having a high enough completion rate that the responses collected are representative of the full enrolled population, not just the most engaged or least symptomatic subset.

## Why it matters

Patient-reported outcomes are the direct, patient-vouched complement to clinician-recorded or device-measured data, capturing dimensions of health — pain, function, quality of life — that a chart review or biometric reading cannot; digitizing PROM collection exists specifically to make this data cheaper and easier to collect at scale than paper-based administration ever allowed. But a PROM program with a low completion rate risks a specific and serious bias: patients who feel worse are often less likely to complete a lengthy questionnaire, so a declining completion rate can itself be an early warning sign of worsening population health, and a low overall completion rate can make the collected responses look better than the true population's experience simply because the most symptomatic patients are under-represented in what gets completed. This is why completion rate should always be reported alongside PROM scores themselves, not treated as a secondary operational detail.

## How it's calculated

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

## Worked example

An oncology clinic sends a validated symptom-burden ePROM to 400 patients ahead of each monthly follow-up visit. In the first month, 340 patients fully complete the questionnaire (completion rate 85%), 30 partially complete it, and 30 do not start it. By the sixth month of the same monitoring sequence, complete responses have fallen to 260 of the same 400-patient cohort (65%), a meaningful longitudinal decline that would be missed entirely if only the first month's 85% figure were reported as a static overall metric. Investigating which patients drop off (by symptom severity, disease stage, or age) can reveal whether the decline reflects survey fatigue, worsening symptoms making the questionnaire harder to complete, or a technical access barrier.

## Data sources and caveats

Completion data comes from the ePROM platform's own delivery and response logs, which can distinguish "not started", "partially completed", and "fully completed" states — a distinction that should always be preserved and reported rather than collapsed into a binary completed/not-completed figure, since partial completion often indicates a specific point in the questionnaire where patients struggle or disengage. Completion rate should be interpreted alongside how the questionnaire is delivered (a text message link, an app notification, or a delivery method requiring a portal login), since delivery friction itself affects completion independent of the questionnaire's content or the patient's underlying condition. A validated instrument (rather than an ad hoc set of questions) should always be used for the PROM itself, since completion rate for an unvalidated instrument says nothing reliable about the resulting data's clinical usefulness even if completion is high.

## Pitfalls

- **Treating a declining completion rate as a delivery problem only**: a longitudinal drop in completion can reflect genuinely worsening patient symptoms (patients too unwell to complete the survey) rather than survey fatigue or a technical issue, and this distinction matters enormously for clinical interpretation.
- **Collapsing partial and full completion into one category**: a partially completed questionnaire is meaningfully different data quality from a fully completed one; report them separately, and investigate where in the questionnaire flow patients tend to abandon it.
- **Reporting completion rate without reporting response bias risk**: a moderate completion rate should prompt investigation into whether responders differ systematically (in symptom severity, age, digital literacy) from non-responders, since PROM scores calculated only from responders can misrepresent the full population.
- **Using an unvalidated or home-grown questionnaire**: completion rate is meaningless as a data-quality signal if the instrument being completed has not itself been clinically validated for the condition and population being measured.

## Sources

- International Consortium for Health Outcomes Measurement (ICHOM), standard set development and PROM implementation guidance
- U.S. Food and Drug Administration (FDA), guidance on patient-reported outcome measures in clinical trials and regulatory submissions
- Peer-reviewed literature on electronic PROM implementation and completion rates, for example studies published in Quality of Life Research and the Journal of Medical Internet Research (JMIR)

See also: [patient net promoter score](../patient-net-promoter-score/), a related but distinct patient-reported metric measuring satisfaction rather than clinical outcome.
