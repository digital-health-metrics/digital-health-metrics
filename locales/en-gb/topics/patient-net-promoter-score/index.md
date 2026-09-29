# Patient Net Promoter Score

Patient Net Promoter Score (NPS) measures patient willingness to recommend a digital health product or telehealth service to others, based on a single survey question — "How likely are you to recommend this service to a friend or colleague?" — scored 0 to 10. Respondents scoring 9-10 are "promoters", 7-8 are "passives", and 0-6 are "detractors"; NPS is the percentage of promoters minus the percentage of detractors. It is the most widely used, and most widely criticized, patient satisfaction metric in digital health, valued for its simplicity but limited in what it can diagnose on its own.

## Why it matters

NPS gives digital health teams a simple, standardised, cross-comparable satisfaction signal that is cheap to collect and easy for non-specialist stakeholders (executives, boards, commissioners) to interpret at a glance, which is why it remains popular despite well-documented methodological limitations. For telehealth and digital front-door products specifically, NPS is often the leading indicator of whether patients will continue to choose the digital channel over an in-person alternative when both are available, which has direct implications for channel-mix planning and capacity. However, NPS is a single, high-level summary number: a declining NPS tells a team that something is wrong but not what, so it should always be paired with open-text verbatim feedback or a more granular usability instrument to be actionable rather than merely a scorecard number.

## How it's calculated

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

A telehealth platform surveys 1,000 patients after a video consultation and receives 400 responses (response rate 40%). Of these 400 respondents, 220 score 9-10 (promoters, 55%), 100 score 7-8 (passives, 25%), and 80 score 0-6 (detractors, 20%). The NPS is 55 − 20 = 35. This figure only means something in context: an NPS of 35 might be a strong result compared with the broader telehealth industry, or a concerning decline compared with this same platform's own score of 48 the previous quarter — NPS is far more useful as a trend over time for one product than as an absolute one-off benchmark against a different one.

## Data sources and caveats

NPS is collected through a post-interaction survey, typically triggered immediately after a video visit, app session, or care episode, and response rate matters enormously: a low response rate (well below the ~40% seen in the worked example) risks non-response bias, where only strongly satisfied or strongly dissatisfied patients bother to respond, pulling the score toward the extremes and away from the true population sentiment. Comparing NPS across organisations or even across a single organisation's different channels (for example telehealth versus in-person) is only valid if the question wording, timing, and survey population are genuinely comparable; small wording changes are known to shift scores measurably. NPS should be treated as an outcome to explain, not an end in itself — the open-text comments that typically accompany an NPS survey are usually more actionable than the score.

## Pitfalls

- **Comparing NPS figures collected with different question wording or timing**: even minor survey design differences can shift scores by several points, making cross-organisation NPS benchmarking far less reliable than it appears.
- **Ignoring response rate**: a headline NPS calculated from a 10% response rate is far less trustworthy than one calculated from a 60% response rate, since low response rates are prone to non-response bias toward the most extreme opinions.
- **Treating NPS as a diagnostic tool rather than a summary metric**: a falling NPS says something is wrong but never says what; it should always be paired with qualitative feedback or a more granular satisfaction or usability instrument to identify the cause.
- **Chasing NPS as a target in itself**: optimizing narrowly for the NPS number (for example by only surveying patients after unusually positive interactions) can improve the reported score while making the underlying patient experience no better, or actively worse.

## Sources

- Bain & Company, original Net Promoter System methodology and benchmarking guidance
- Agency for Healthcare Research and Quality (AHRQ), CAHPS (Consumer Assessment of Healthcare Providers and Systems) patient experience survey programme, as a complementary, more granular alternative
- Peer-reviewed literature on the use and limitations of Net Promoter Score in healthcare settings, for example studies published in the Journal of Medical Internet Research (JMIR)

See also: [user retention rate](../user-retention-rate/), since patient-reported satisfaction and actual continued use of a product often diverge and are worth tracking as separate signals.
