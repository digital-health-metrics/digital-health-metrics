# Patient Net Promoter Score

Patient Net Promoter Score (NPS) measures hoo willin patients are tae recommend a digital health product or telehealth service tae ithers, based on a single survey question — "How likely are you to recommend this service to a friend or colleague?" — scorit 0 tae 10. Respondents scorin 9-10 are "promoters", 7-8 are "passives", an 0-6 are "detractors"; NPS is the percentage o promoters minus the percentage o detractors. It's the maist widely uised, an maist widely criticised, patient satisfaction metric in digital health, valued for its simplicity but limitit in whit it can diagnose bi itsel.

## Why it maitters

NPS gies digital health teams a simple, standardised, cross-comparable satisfaction signal that's cheap tae collect an easy for non-specialist stakeholders (executives, boards, commissioners) tae read at a glance, which is why it bides popular despite weel-documentit methodological limitations. For telehealth an digital front-door products specifically, NPS is aften the leadin indicator o whether patients'll keep choosin the digital channel ower an in-person alternative when baith are available, which haes direct implications for channel-mix plannin an capacity. But NPS is a single, high-level summary nummer: a faain NPS tells a team that somethin's wrang but no whit, sae it shuid aye be pairit wi open-text verbatim feedback or a mair granular usability instrument tae be actionable raither than juist a scorecard nummer.

## Hoo it's caulculatit

```
NPS = % promoters (score 9-10) − % detractors (score 0-6)

Result is a number from −100 to +100, not a percentage, despite being
derived from percentages — never append a "%" sign to an NPS figure.

Report alongside:
  response rate (% of patients surveyed who responded)
  sample size
  the exact question wording used
```

## Warked example

A telehealth platform surveys 1,000 patients efter a video consultation an gets 400 responses (response rate 40%). O thae 400 respondents, 220 score 9-10 (promoters, 55%), 100 score 7-8 (passives, 25%), an 80 score 0-6 (detractors, 20%). The NPS is 55 − 20 = 35. This figure only means somethin in context: an NPS o 35 micht be a strang result compared wi the braider telehealth industry, or a concernin decline compared wi this same platform's ain score o 48 the previous quarter — NPS is faur mair uisefu as a trend ower time for ae product than as an absolute yin-aff benchmark again a different ane.

## Data sources an caveats

NPS is collectit throu a post-interaction survey, typically triggert richt efter a video visit, app session, or care episode, an response rate maitters enormously: a low response rate (weel unner the ~40% seen in the warked example) risks non-response bias, whaur only strangly satisfiet or strangly dissatisfiet patients fash tae respond, pullin the score taewards the extremes an awa frae true population sentiment. Comparin NPS athort organizations or even athort a single organization's different channels (for example telehealth versus in-person) is only valid if the question wordin, timin, an survey population are genuinely comparable; sma wordin chynges are kent tae shift scores measurably. NPS shuid be treatit as an outcome tae explain, no an end in itsel — the open-text comments that typically come wi an NPS survey are usually mair actionable than the score.

## Pitfalls

- **Comparin NPS figures collectit wi different question wordin or timin**: even minor survey design differences can shift scores bi a wheen pynts, makkin cross-organization NPS benchmarkin faur less reliable than it appears.
- **Ignorin response rate**: a headline NPS caulculatit frae a 10% response rate is faur less trustworthy than ane caulculatit frae a 60% response rate, sin low response rates are prone tae non-response bias taewards the maist extreme opinions.
- **Takkin NPS as a diagnostic tool raither than a summary metric**: a faain NPS says somethin's wrang but niver says whit; it shuid aye be pairit wi qualitative feedback or a mair granular satisfaction or usability instrument tae find the cause.
- **Chasin NPS as a target in itsel**: optimisin narrowly for the NPS nummer (for example bi only surveyin patients efter unusually positive interactions) can improve the reportit score while makkin the underlyin patient experience nae better, or actively waur.

## Sources

- Bain & Company, original Net Promoter System methodology and benchmarking guidance
- Agency for Healthcare Research and Quality (AHRQ), CAHPS (Consumer Assessment of Healthcare Providers and Systems) patient experience survey programme, as a complementary, more granular alternative
- Peer-reviewed literature on the use and limitations of Net Promoter Score in healthcare settings, for example studies published in the Journal of Medical Internet Research (JMIR)

See also: [rate o user retention](../rate-o-user-retention/), sin patient-reportit satisfaction an actual continued uise o a product aften pairt company an are worth trackin as separate signals.
