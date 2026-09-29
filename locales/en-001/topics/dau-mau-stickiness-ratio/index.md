# DAU/MAU Stickiness Ratio

DAU/MAU stickiness ratio compares daily active users (DAU) against monthly active users (MAU) — the same underlying measure used for weekly active users (WAU) against MAU — to express what share of a product's broader user base engages with it on any given day. It is the standard product-analytics measure of engagement intensity, distinct from whether a user is retained at all (see user retention rate) or how consistently one specific enrolled patient engages over time (see patient engagement consistency rate): stickiness describes the population-level rhythm of use, not any one individual's pattern.

## Why it matters

Two digital health products can report an identical monthly active user count while having very different underlying engagement intensity: one where most of those users open the app almost daily, and another where most open it once a month right before it would otherwise count as inactive. DAU/MAU stickiness ratio distinguishes these two very different situations with a single, simple, well-understood benchmark figure that product and clinical teams can track over time and compare against known industry ranges — a ratio around 20% is a commonly cited reasonable benchmark for many consumer apps, while daily-habit products (a food or symptom diary a patient is expected to use every day) should be judged against a meaningfully higher bar. Because stickiness is sensitive to how "active" is defined, it is most useful as a trend for one product over time, and as a comparison against products built for a similar use pattern, rather than as an absolute cross-industry benchmark.

## How it's calculated

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

A digital diabetes management app has 10,000 monthly active users in a given month, defined as any user completing at least one qualifying action (a glucose log, a meal log, or a medication check-off) in that month. Averaging daily active user counts across the 30 days of that month gives an average DAU of 2,200. The DAU/MAU stickiness ratio is 2,200 / 10,000 × 100 = 22%, indicating that on a typical day, about 22% of the app's monthly user base engages with it — a reasonable figure for a daily-habit chronic-condition tool, though one the product team would want to see trending upward over time as the ideal behaviour (daily logging) becomes more habitual for enrolled patients.

## Data sources and caveats

DAU, WAU, and MAU are all calculated from the same underlying event logs, using one consistent definition of a "qualifying active" event across every window; changing that definition between the numerator and denominator calculations (for example, counting any app open for DAU but only a completed action for MAU) will produce a distorted ratio that does not reflect real engagement intensity. The appropriate benchmark for stickiness depends heavily on the product's intended use pattern: a tool meant to be used once a week (a weekly symptom check-in) will and should have a lower DAU/MAU ratio than a tool meant to be used daily (a continuous glucose monitor companion app), so stickiness should always be interpreted against the product's own intended cadence of use, not a single universal target.

## Pitfalls

- **Comparing stickiness ratios across products with different intended use frequency**: a weekly-use tool will structurally show a lower DAU/MAU ratio than a daily-use tool even if both are performing exactly as intended for their respective use cases; benchmark against the product's own intended cadence, not a single universal target.
- **Using inconsistent activity definitions across the numerator and denominator**: this can produce a stickiness ratio that does not reflect genuine engagement intensity and cannot be meaningfully compared over time or against other products.
- **Treating a rising stickiness ratio as unambiguously positive without checking overall MAU trend**: a rising ratio driven by a shrinking, more habitual core user base while overall MAU declines is a very different — and more concerning — situation than one driven by genuinely increasing daily engagement across a stable or growing user base.
- **Ignoring day-of-week and seasonal effects on DAU**: DAU can vary substantially by day of week (weekday versus weekend) or season for many health products; average DAU over a period that captures a full natural cycle rather than a short window that could be skewed.

## Sources

- Peer-reviewed and industry literature on mobile and digital product engagement metrics, widely used benchmarking frameworks from mobile analytics platforms
- Digital Therapeutics Alliance, best-practice guidance on engagement measurement for digital therapeutics
- Peer-reviewed literature on digital health engagement measurement, for example studies published in the Journal of Medical Internet Research (JMIR mHealth and uHealth)

See also: [user retention rate](../user-retention-rate/) and [patient engagement consistency rate](../patient-engagement-consistency-rate/), the two related engagement metrics this ratio is most often confused with.
