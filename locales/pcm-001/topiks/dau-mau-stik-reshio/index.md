# DAU/MAU Stickiness Ratio

DAU/MAU stickiness ratio dey compare daily active users (DAU) against monthly active users (MAU) — di same underlying measure wey dem dey use for weekly active users (WAU) against MAU — to show wetin share of one product broader user base dey engage with am for any given day. Na di standard product-analytics measure of engagement intensity, wey different from whether dem retain user at all (see user retention rate) or how consistently one specific enrolled patient dey engage over time (see patient engagement consistency rate): stickiness dey describe di population-level rhythm of use, no be any one individual pattern.

## Why e matter

Two digital health products fit report identical monthly active user count while dem get very different underlying engagement intensity: one where most of those users dey open di app almost every day, and another where most dey open am once for month just before e for otherwise count as inactive. DAU/MAU stickiness ratio dey distinguish dis two very different situations with one single, simple, well-understood benchmark figure wey product and clinical teams fit track over time and compare against known industry ranges — ratio around 20% na commonly cited reasonable benchmark for many consumer apps, while daily-habit products (food or symptom diary wey dem expect patient to use every day) suppose dem judge am against meaningfully higher bar. Because stickiness dey sensitive to how dem define "active", e most useful as trend for one product over time, and as comparison against products wey dem build for similar use pattern, instead of as absolute cross-industry benchmark.

## How dem dey calculate am

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

## Worked example

One digital diabetes management app get 10,000 monthly active users for one given month, wey dem define as any user wey complete at least one qualifying action (glucose log, meal log, or medication check-off) for dat month. If dem average daily active user counts across di 30 days of dat month, e give average DAU of 2,200. Di DAU/MAU stickiness ratio na 2,200 / 10,000 × 100 = 22%, wey show say for typical day, about 22% of di app monthly user base dey engage with am — reasonable figure for daily-habit chronic-condition tool, though na one wey di product team go want to see dey trend upward over time as di ideal behaviour (daily logging) dey become more habitual for enrolled patients.

## Data sources and caveats

Dem dey calculate DAU, WAU, and MAU all from di same underlying event logs, using one consistent definition of "qualifying active" event across every window; to change dat definition between di numerator and denominator calculations (for example, to count any app open for DAU but only completed action for MAU) go produce distorted ratio wey no reflect real engagement intensity. Di appropriate benchmark for stickiness depend well well on di product intended use pattern: tool wey dem mean to use once for week (weekly symptom check-in) go and suppose get lower DAU/MAU ratio than tool wey dem mean to use every day (continuous glucose monitor companion app), so dem suppose always interpret stickiness against di product own intended cadence of use, no be one single universal target.

## Pitfalls

- **To compare stickiness ratios across products wey get different intended use frequency**: weekly-use tool go structurally show lower DAU/MAU ratio than daily-use tool even if both dey perform exactly as dem intend for dia own use cases; benchmark against di product own intended cadence, no be one single universal target.
- **To use inconsistent activity definitions across di numerator and denominator**: dis fit produce stickiness ratio wey no reflect genuine engagement intensity and wey no fit meaningfully compare over time or against other products.
- **To treat rising stickiness ratio as unambiguously positive without to check overall MAU trend**: rising ratio wey shrinking, more habitual core user base drive while overall MAU dey decline na very different — and more concerning — situation from one wey genuinely increasing daily engagement across stable or growing user base drive.
- **To ignore day-of-week and seasonal effects on DAU**: DAU fit vary substantially by day of week (weekday versus weekend) or season for many health products; use average DAU over period wey capture full natural cycle instead of short window wey fit skew.

## Sources

- Peer-reviewed and industry literature on mobile and digital product engagement metrics, widely used benchmarking frameworks from mobile analytics platforms
- Digital Therapeutics Alliance, best-practice guidance on engagement measurement for digital therapeutics
- Peer-reviewed literature on digital health engagement measurement, for example studies published in the Journal of Medical Internet Research (JMIR mHealth and uHealth)

See also: [user retention rate](../rate-of-user-retention/) and [patient engagement consistency rate](../rate-of-patient-engagement-consistency/), di two related engagement metrics wey dem most often confuse with dis ratio.
