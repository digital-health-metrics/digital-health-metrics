# User Retention Rate

User retention rate is the share of users active in a starting period who remain active in a later period, and its inverse, churn (or dropout) rate, is the share who stop using the product altogether. Where patient portal adoption rate (see that topic) measures whether a patient ever meaningfully activates a digital health product, retention measures whether they keep using it — and for any subscription-style or ongoing-care digital health product, retention is usually the single metric most tightly linked to both clinical impact and commercial sustainability.

## Why it matters

A digital health product that cannot retain users cannot deliver sustained clinical benefit, however strong its initial adoption or activation numbers: a chronic-condition management tool used for two weeks and then abandoned is unlikely to move a biometric outcome that depends on months of sustained behaviour change. Retention is also one of the most commercially consequential metrics a digital health company reports to investors and payers, because retention curves (the shape of the drop-off over time, not just a single retention percentage) reveal whether the product has found a genuinely sustainable use pattern or is simply capturing novelty-driven initial interest that fades predictably. A retention curve that flattens out after an initial drop (patients who make it past the first month tend to stay) is a very different, and much healthier, signal than one that continues declining steadily with no floor.

## How it's calculated

```
Retention rate (period N) = users active in period N who were also active
                             in the starting cohort period / users in the
                             starting cohort period × 100

Churn rate = 1 − retention rate (for the same period)

Report as a cohort retention curve (retention at day/week/month 1, 2, 3…),
not a single point-in-time figure, since a single snapshot conflates
recently joined users (who haven't had a chance to churn yet) with
long-tenured ones.
```

## Worked example

A digital health app enrols a cohort of 1,000 new users in January. By the end of month 1, 640 of those original 1,000 are still active (month-1 retention 64%). By the end of month 3, 410 remain active (month-3 retention 41%). By month 6, 380 remain active (month-6 retention 38%). The shape of this curve — a steep initial drop followed by a flattening between months 3 and 6 — suggests the product retains a stable core of users once they pass an initial adoption hurdle, which is a materially different and more encouraging signal than if the decline from month 3 to month 6 had continued at the same rate as months 1 to 3.

## Data sources and caveats

Retention is calculated from the product's own login or activity event logs, defining "active" consistently (for example, at least one qualifying session in the period) across every cohort being compared. Cohorts should be compared on a like-for-like basis — same starting definition of "active", same length of observation window — since even small definitional differences (30-day versus 28-day months, or a stricter versus looser "active" threshold) can shift a reported retention percentage by several points without any real difference in user behaviour. Seasonal effects are common in health apps tied to New Year's resolutions or specific health awareness periods, so year-over-year cohort comparison is usually more informative than comparing adjacent cohorts from different times of year.

## Pitfalls

- **Reporting a single retention snapshot instead of a curve**: a single "X% of users are still active" figure without the shape of the drop-off over time cannot distinguish a product that plateaus (healthy) from one in continuous decline (unhealthy).
- **Changing the "active" definition between reporting periods**: loosening the definition of an active user (for example counting a passive app open instead of a completed action) can make retention appear to improve when actual usage has not changed at all.
- **Ignoring cohort seasonality**: comparing a January cohort's retention (often inflated by New Year's resolution enrolment, which brings in a less-motivated cohort on average) against a cohort acquired at a different time of year can produce misleading trend conclusions.
- **Blending organic and paid-acquisition cohorts**: users acquired through different channels often retain very differently; blending them into one aggregate retention figure can hide a channel-specific retention problem.

## Sources

- Peer-reviewed literature on digital health app engagement and attrition, for example studies published in the Journal of Medical Internet Research (JMIR mHealth and uHealth)
- Digital Therapeutics Alliance, best-practice guidance on engagement and retention measurement for digital therapeutics
- Industry benchmarking reports on mobile health app retention, from analytics platforms and digital health market research organisations

See also: [patient engagement consistency rate](../patient-engagement-consistency-rate/), which measures the quality of engagement among retained users, as distinct from whether they remain enrolled at all.
