# Rate of User Retention

User retention rate na di share of users wey dey active for starting period wey still dey active for later period, and im inverse, churn (or dropout) rate, na di share wey stop to use di product altogether. Where patient portal adoption rate (see dat topic) dey measure whether patient ever meaningfully activate digital health product, retention dey measure whether dem keep to use am — and for any subscription-style or ongoing-care digital health product, retention na usually di single metric wey tie most tightly to both clinical impact and commercial sustainability.

## Why e matter

Digital health product wey no fit retain users no fit deliver sustained clinical benefit, no matter how strong im initial adoption or activation numbers be: chronic-condition management tool wey dem use for two weeks and then abandon no likely to move biometric outcome wey depend on months of sustained behaviour change. Retention also be one of di most commercially consequential metrics wey digital health company dey report to investors and payers, because retention curves (di shape of di drop-off over time, no be just single retention percentage) dey reveal whether di product don find genuinely sustainable use pattern or e just dey capture novelty-driven initial interest wey dey fade predictably. Retention curve wey flatten out after initial drop (patients wey pass di first month dey tend to stay) na very different, and much healthier, signal than one wey dey continue to decline steadily with no floor.

## How dem dey calculate am

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

One digital health app enrol cohort of 1,000 new users for January. By di end of month 1, 640 of those original 1,000 still dey active (month-1 retention 64%). By di end of month 3, 410 remain active (month-3 retention 41%). By month 6, 380 remain active (month-6 retention 38%). Di shape of dis curve — steep initial drop wey flattening follow between months 3 and 6 — suggest say di product dey retain stable core of users once dem pass initial adoption hurdle, wey be materially different and more encouraging signal than if di decline from month 3 to month 6 continue for di same rate as months 1 to 3.

## Data sources and caveats

Dem dey calculate retention from di product own login or activity event logs, and dem dey define "active" consistently (for example, at least one qualifying session inside di period) across every cohort wey dem dey compare. Dem suppose compare cohorts on like-for-like basis — di same starting definition of "active", di same length of observation window — because even small definitional differences (30-day versus 28-day months, or stricter versus looser "active" threshold) fit shift reported retention percentage by several points without any real difference for user behaviour. Seasonal effects dey common for health apps wey tie to New Year resolutions or specific health awareness periods, so year-over-year cohort comparison usually more informative than to compare adjacent cohorts from different times of year.

## Pitfalls

- **To report single retention snapshot instead of curve**: single "X% of users still dey active" figure without di shape of di drop-off over time no fit distinguish product wey plateau (healthy) from one wey dey continuous decline (unhealthy).
- **To change di "active" definition between reporting periods**: to loosen di definition of active user (for example to count passive app open instead of completed action) fit make retention appear to improve when actual usage no change at all.
- **To ignore cohort seasonality**: to compare January cohort retention (wey New Year resolution enrolment often inflate, wey bring in less-motivated cohort on average) against cohort wey dem acquire for different time of year fit produce misleading trend conclusions.
- **To blend organic and paid-acquisition cohorts**: users wey dem acquire through different channels often dey retain very differently; to blend dem into one aggregate retention figure fit hide channel-specific retention problem.

## Sources

- Peer-reviewed literature on digital health app engagement and attrition, for example studies published in the Journal of Medical Internet Research (JMIR mHealth and uHealth)
- Digital Therapeutics Alliance, best-practice guidance on engagement and retention measurement for digital therapeutics
- Industry benchmarking reports on mobile health app retention, from analytics platforms and digital health market research organizations

See also: [patient engagement consistency rate](../rate-of-patient-engagement-consistency/), wey dey measure di quality of engagement among retained users, as different from whether dem still dey enrolled at all.
