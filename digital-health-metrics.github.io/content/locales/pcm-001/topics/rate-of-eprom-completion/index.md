# Rate of ePROM Completion

ePROM completion rate dey measure di share of scheduled electronic Patient-Reported Outcome Measures (ePROMs) — standardized, validated questionnaires wey dey capture patient own account of im symptoms, function, or quality of life, wey dem deliver digitally instead of on paper — wey dem actually complete. Na data-quality metric as much as engagement one: PROM programme clinical and research value depend entirely on to get high enough completion rate so dat di responses wey dem collect go represent di full enrolled population, no be just di most engaged or least symptomatic subset.

## Why e matter

Patient-reported outcomes na di direct, patient-vouched complement to clinician-recorded or device-measured data, wey dey capture dimensions of health — pain, function, quality of life — wey chart review or biometric reading no fit capture; di reason why dem dey digitize PROM collection na specifically to make dis data cheaper and easier to collect at scale than paper-based administration ever allow. But PROM programme wey get low completion rate dey risk specific and serious bias: patients wey feel worse dey often less likely to complete lengthy questionnaire, so declining completion rate fit itself be early warning sign of worsening population health, and low overall completion rate fit make di responses wey dem collect look better than di true population experience simply because di most symptomatic patients no well represent for wetin dem complete. Na why dem suppose always report completion rate together with PROM scores demself, no be to treat am as secondary operational detail.

## How dem dey calculate am

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

One oncology clinic send validated symptom-burden ePROM to 400 patients before each monthly follow-up visit. For di first month, 340 patients fully complete di questionnaire (completion rate 85%), 30 partially complete am, and 30 no start am. By di sixth month of di same monitoring sequence, complete responses don fall to 260 out of di same 400-patient cohort (65%), meaningful longitudinal decline wey dem for miss completely if dem report only di first month 85% figure as static overall metric. To investigate which patients dey drop off (by symptom severity, disease stage, or age) fit reveal whether di decline reflect survey fatigue, worsening symptoms wey make di questionnaire harder to complete, or technical access barrier.

## Data sources and caveats

Completion data dey come from di ePROM platform own delivery and response logs, wey fit distinguish "not started", "partially completed", and "fully completed" states — distinction wey dem suppose always preserve and report instead of to collapse am into binary completed/not-completed figure, because partial completion often dey indicate specific point for di questionnaire where patients dey struggle or disengage. Dem suppose interpret completion rate together with how dem deliver di questionnaire (text message link, app notification, or delivery method wey require portal login), because delivery friction itself dey affect completion no matter di questionnaire content or di patient underlying condition. Dem suppose always use validated instrument (instead of ad hoc set of questions) for di PROM itself, because completion rate for unvalidated instrument no tell anything reliable about di clinical usefulness of di resulting data even if completion high.

## Pitfalls

- **To treat declining completion rate as delivery problem only**: longitudinal drop for completion fit reflect genuinely worsening patient symptoms (patients wey too sick to complete di survey) instead of survey fatigue or technical issue, and dis distinction matter enormously for clinical interpretation.
- **To collapse partial and full completion into one category**: partially completed questionnaire na meaningfully different data quality from fully completed one; report dem separate, and investigate where for di questionnaire flow patients dey tend to abandon am.
- **To report completion rate without to report response bias risk**: moderate completion rate suppose prompt investigation into whether responders dey differ systematically (for symptom severity, age, digital literacy) from non-responders, because PROM scores wey dem calculate only from responders fit misrepresent di full population.
- **To use unvalidated or home-grown questionnaire**: completion rate no mean anything as data-quality signal if di instrument wey dem dey complete no get clinical validation for di condition and population wey dem dey measure.

## Sources

- International Consortium for Health Outcomes Measurement (ICHOM), standard set development and PROM implementation guidance
- U.S. Food and Drug Administration (FDA), guidance on patient-reported outcome measures in clinical trials and regulatory submissions
- Peer-reviewed literature on electronic PROM implementation and completion rates, for example studies published in Quality of Life Research and the Journal of Medical Internet Research (JMIR)

See also: [patient net promoter score](../pesho-net-promota-skor/), related but distinct patient-reported metric wey dey measure satisfaction instead of clinical outcome.
