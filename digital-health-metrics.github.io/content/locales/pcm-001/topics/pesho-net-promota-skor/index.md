# Patient Net Promoter Score

Patient Net Promoter Score (NPS) dey measure how patients dey willing to recommend digital health product or telehealth service to others, based on one single survey question — "How likely are you to recommend this service to a friend or colleague?" — wey dem score from 0 to 10. Respondents wey score 9-10 na "promoters", 7-8 na "passives", and 0-6 na "detractors"; NPS na di percentage of promoters minus di percentage of detractors. Na di most widely used, and most widely criticized, patient satisfaction metric for digital health, wey dem value for im simplicity but e dey limited for wetin e fit diagnose on im own.

## Why e matter

NPS dey give digital health teams simple, standardized, cross-comparable satisfaction signal wey cheap to collect and easy for non-specialist stakeholders (executives, boards, commissioners) to interpret at a glance, and na why e still dey popular despite well-documented methodological limitations. For telehealth and digital front-door products specifically, NPS na often di leading indicator of whether patients go continue to choose di digital channel over in-person alternative when both dey available, wey get direct implications for channel-mix planning and capacity. However, NPS na single, high-level summary number: declining NPS dey tell team say something wrong but e no tell wetin, so dem suppose always pair am with open-text verbatim feedback or more granular usability instrument to make am actionable instead of just scorecard number.

## How dem dey calculate am

```
NPS = % promoters (score 9-10) − % detractors (score 0-6)

Result is a number from −100 to +100, not a percentage, despite being
derived from percentages — never append a "%" sign to an NPS figure.

Report alongside:
  response rate (% of patients surveyed who responded)
  sample size
  the exact question wording used
```

## Worked example

One telehealth platform survey 1,000 patients after video consultation and receive 400 responses (response rate 40%). Out of dese 400 respondents, 220 score 9-10 (promoters, 55%), 100 score 7-8 (passives, 25%), and 80 score 0-6 (detractors, 20%). Di NPS na 55 − 20 = 35. Dis figure only mean something inside context: NPS of 35 fit be strong result compared with di broader telehealth industry, or concerning decline compared with dis same platform own score of 48 di previous quarter — NPS far more useful as trend over time for one product than as absolute one-off benchmark against different one.

## Data sources and caveats

Dem dey collect NPS through post-interaction survey, typically trigger immediately after video visit, app session, or care episode, and response rate matter enormously: low response rate (well below di ~40% wey dem see for di worked example) dey risk non-response bias, where only strongly satisfied or strongly dissatisfied patients dey bother to respond, wey dey pull di score toward di extremes and away from di true population sentiment. To compare NPS across organizations or even across single organization different channels (for example telehealth versus in-person) only valid if di question wording, timing, and survey population genuinely comparable; small wording changes dey known to shift scores measurably. Dem suppose treat NPS as outcome to explain, no be end in itself — di open-text comments wey typically dey come with NPS survey dey usually more actionable than di score.

## Pitfalls

- **To compare NPS figures wey dem collect with different question wording or timing**: even minor survey design differences fit shift scores by several points, wey make cross-organization NPS benchmarking far less reliable than e appear.
- **To ignore response rate**: headline NPS wey dem calculate from 10% response rate far less trustworthy than one wey dem calculate from 60% response rate, because low response rates dey prone to non-response bias toward di most extreme opinions.
- **To treat NPS as diagnostic tool instead of summary metric**: falling NPS dey say something wrong but e never dey say wetin; dem suppose always pair am with qualitative feedback or more granular satisfaction or usability instrument to identify di cause.
- **To chase NPS as target in itself**: to optimize narrowly for di NPS number (for example by to survey patients only after unusually positive interactions) fit improve di reported score while di underlying patient experience no better, or even worse.

## Sources

- Bain & Company, original Net Promoter System methodology and benchmarking guidance
- Agency for Healthcare Research and Quality (AHRQ), CAHPS (Consumer Assessment of Healthcare Providers and Systems) patient experience survey programme, as a complementary, more granular alternative
- Peer-reviewed literature on the use and limitations of Net Promoter Score in healthcare settings, for example studies published in the Journal of Medical Internet Research (JMIR)

See also: [user retention rate](../rate-of-user-retention/), because patient-reported satisfaction and actual continued use of product often dey diverge and e worth to track dem as separate signals.
