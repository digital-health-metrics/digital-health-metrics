# DAU/MAU Stickiness Ratio

The DAU/MAU stickiness ratio compares daily active users (DAU) again monthly active users (MAU) — the same underlyin measure is uised for weekly active users (WAU) again MAU — tae shaw whit share o a product's wider user base engages wi it on ony gien day. It's the standard product-analytics measure o engagement intensity, no the same as whether a user is retained ava (see rate o user retention) or hoo consistently ae specific enrolled patient engages ower time (see rate o patient engagement consistency): stickiness describes the population-level rhythm o uise, no ony ae individual's pattern.

## Why it maitters

Twa digital health products can report an identical monthly active user coont while haein gey different underlyin engagement intensity: ane whaur maist o thae users open the app near enough ilka day, an anither whaur maist open it ance a month juist afore it wid itherwise coont as inactive. The DAU/MAU stickiness ratio tells thae twa verra different situations apairt wi a single, simple, weel-kent benchmark figure that product an clinical teams can track ower time an compare again kent industry ranges — a ratio aroond 20% is a commonly citit reasonable benchmark for mony consumer apps, while daily-habit products (a food or symptom diary a patient is expectit tae uise ilka day) shuid be judged again a muckle higher bar. Because stickiness is sensitive tae hoo "active" is defined, it's maist uisefu as a trend for ae product ower time, an as a comparison again products biggit for a similar uise pattern, raither than as an absolute cross-industry benchmark.

## Hoo it's caulculatit

```
DAU/MAU stickiness ratio = average daily active users in period /
                            monthly active users in same period × 100

WAU/MAU ratio (weekly, same principle) is a softer variant, more
appropriate for products expected to be used a few times per week
rather than daily.

"Active" must be defined precisely and consistently (e.g. a completed
qualifying action, not a passive app open) across both the numerator
and denominator.
```

## Warked example

A digital diabetes management app haes 10,000 monthly active users in a gien month, defined as ony user completin at least ane qualifyin action (a glucose log, a meal log, or a medication check-aff) in that month. Averagin daily active user coonts athort the 30 days o that month gies an average DAU o 2,200. The DAU/MAU stickiness ratio is 2,200 / 10,000 × 100 = 22%, shawin that on a typical day, aboot 22% o the app's monthly user base engages wi it — a reasonable figure for a daily-habit chronic-condition tool, though ane the product team wid want tae see trendin upwards ower time as the ideal behaviour (daily loggin) turns mair o a habit for enrolled patients.

## Data sources an caveats

DAU, WAU, an MAU are aa caulculatit frae the same underlyin event logs, uisin ae consistent definition o a "qualifyin active" event athort ilka window; chyngin that definition atween the numerator an denominator caulculations (for example, coontin ony app open for DAU but only a completit action for MAU) 'll gie a distortit ratio that disnae reflect real engagement intensity. The appropriate benchmark for stickiness depends gey muckle on the product's intendit uise pattern: a tool meant tae be uised ance a week (a weekly symptom check-in) will an shuid hae a lawer DAU/MAU ratio than a tool meant tae be uised daily (a continuous glucose monitor companion app), sae stickiness shuid aye be read again the product's ain intendit cadence o uise, no a single universal target.

## Pitfalls

- **Comparin stickiness ratios athort products wi different intendit uise frequency**: a weekly-uise tool'll structurally shaw a lawer DAU/MAU ratio than a daily-uise tool even if baith are daein exactly as intendit for their ain uise cases; benchmark again the product's ain intendit cadence, no a single universal target.
- **Uisin inconsistent activity definitions athort the numerator an denominator**: this can gie a stickiness ratio that disnae reflect genuine engagement intensity an canna be meaningfully compared ower time or again ither products.
- **Takkin a risin stickiness ratio as clearly guid wioot checkin the owerall MAU trend**: a risin ratio driven bi a shrinkin, mair habitual core user base while owerall MAU fa's is a verra different — an mair concernin — situation than ane driven bi genuinely increasin daily engagement athort a steady or growin user base.
- **Ignorin day-o-the-week an seasonal effects on DAU**: DAU can vary a lot bi day o the week (weekday versus weekend) or season for mony health products; average DAU ower a period that captures a full natural cycle raither than a short window that could be skewit.

## Sources

- Peer-reviewed and industry literature on mobile and digital product engagement metrics, widely used benchmarking frameworks from mobile analytics platforms
- Digital Therapeutics Alliance, best-practice guidance on engagement measurement for digital therapeutics
- Peer-reviewed literature on digital health engagement measurement, for example studies published in the Journal of Medical Internet Research (JMIR mHealth and uHealth)

See also: [rate o user retention](../rate-o-user-retention/) an [rate o patient engagement consistency](../rate-o-patient-engagement-consistency/), the twa related engagement metrics this ratio is maist aften mixed up wi.
