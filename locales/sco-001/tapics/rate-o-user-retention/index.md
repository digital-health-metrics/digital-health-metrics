# Rate o User Retention

The rate o user retention is the share o users active in a stairtin period that bide active in a later period, an its inverse, the churn (or dropoot) rate, is the share that gie up uisin the product athegither. Whaur the rate o patient portal adoption (see that tapic) measures whether a patient ever meaningfully activates a digital health product, retention measures whether they keep uisin it — an for ony subscription-style or ongaein-care digital health product, retention is usually the single metric maist tichtly linked tae baith clinical impact an commercial sustainability.

## Why it maitters

A digital health product that canna haud on tae its users canna deliver sustainit clinical benefit, hooever strang its initial adoption or activation nummers: a chronic-condition management tool uised for twa weeks an syne abandoned is unlikely tae shift a biometric outcome that depends on months o sustainit behaviour chynge. Retention is an aa ane o the maist commercially consequential metrics a digital health company reports tae investors an payers, because retention curves (the shape o the drap-aff ower time, no juist a single retention percentage) shaw whether the product haes foond a genuinely sustainable uise pattern or is juist catchin novelty-driven initial interest that fades predictably. A retention curve that flattens oot efter an initial drap (patients that mak it past the first month tend tae bide) is a verra different, an muckle healthier, signal than ane that keeps faain steadily wi nae floor.

## Hoo it's caulculatit

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

## Warked example

A digital health app enrols a cohort o 1,000 new users in January. Bi the end o month 1, 640 o thae original 1,000 are still active (month-1 retention 64%). Bi the end o month 3, 410 bide active (month-3 retention 41%). Bi month 6, 380 bide active (month-6 retention 38%). The shape o this curve — a steep initial drap follaed bi a flattenin atween months 3 an 6 — suggests the product haulds a stable core o users ance they get ower an initial adoption hurdle, which is a muckle different an mair encouragin signal than if the decline frae month 3 tae month 6 hid gone on at the same rate as months 1 tae 3.

## Data sources an caveats

Retention is caulculatit frae the product's ain login or activity event logs, definin "active" consistently (for example, at least ane qualifyin session in the period) athort ilka cohort bein compared. Cohorts shuid be compared on a like-for-like basis — the same stairtin definition o "active", the same length o observation window — sin even sma definitional differences (30-day versus 28-day months, or a stricter versus looser "active" threshold) can shift a reportit retention percentage bi a wheen pynts wioot ony real difference in user behaviour. Seasonal effects are common in health apps tied tae New Year's resolutions or specific health awareness periods, sae year-ower-year cohort comparison is usually mair informative than comparin adjacent cohorts frae different times o year.

## Pitfalls

- **Reportin a single retention snapshot insteid o a curve**: a single "X% o users are still active" figure wioot the shape o the drap-aff ower time canna tell a product that plateaus (healthy) frae ane in continuous decline (unhealthy).
- **Chyngin the "active" definition atween reportin periods**: loosenin the definition o an active user (for example coontin a passive app open insteid o a completit action) can mak retention appear tae improve when actual uisage haesnae chynged ava.
- **Ignorin cohort seasonality**: comparin a January cohort's retention (aften inflatit bi New Year's resolution enrolment, which brings in a less-motivatit cohort on average) again a cohort gotten at a different time o year can gie misleadin trend conclusions.
- **Blendin organic an paid-acquisition cohorts**: users gotten throu different channels aften retain verra different; blendin them intae ae aggregate retention figure can hide a channel-specific retention problem.

## Sources

- Peer-reviewed literature on digital health app engagement and attrition, for example studies published in the Journal of Medical Internet Research (JMIR mHealth and uHealth)
- Digital Therapeutics Alliance, best-practice guidance on engagement and retention measurement for digital therapeutics
- Industry benchmarking reports on mobile health app retention, from analytics platforms and digital health market research organizations

See also: [rate o patient engagement consistency](../rate-o-patient-engagement-consistency/), which measures the quality o engagement amang retained users, as distinct frae whether they bide enrolled ava.
