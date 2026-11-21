# LTV til CAC Ratio

The LTV til CAC ratio compares a customer's lifetime value (LTV) — the total revenue or margin an organization expects tae earn frae a patient or customer ower their hale relationship wi the product — again the true cost o gettin that customer (see true cost o gettin customers). It's the single maist important unit-economics metric for judgin whether a digital health organization's growth is financially sustainable, because a growin customer base gotten at a loss isnae a sign o health, hooever positive the growth curve looks.

## Why it maitters

A digital health organization can grow its user base steadily while quietly destroyin value on ilka new customer, if acquisition cost exceeds lifetime value; the LTV til CAC ratio is the metric that maks this veesible in a wey that growth rate or raw customer coont alane canna. A 3:1 ratio (lifetime value at least three times acquisition cost) is the widely citit baseline benchmark for a sustainable subscription or recurrin-revenue business, allowin enough margin tae cover operatin costs ayont acquisition an still gie a return; a ratio unner 1:1 means the organization loses siller on ilka customer gotten, an a ratio faur abune 3:1 (for example 10:1 or higher) can actually point tae under-investment in growth, sin it suggests the organization could profitably get mair customers than it currently dis. Investors, boards, an payers weighin up a digital health company's financial sustainability treat this ratio as ane o the first nummers they ask for.

## Hoo it's caulculatit

```
LTV = average revenue (or margin) per customer per period × average
      customer lifetime in that same period unit

LTV to CAC ratio = LTV / true CAC

A ratio of 3:1 is the commonly cited sustainable baseline; below 1:1
indicates the organization loses money on acquisition; well above 3:1
(e.g. 10:1+) can indicate under-investment in growth.
```

## Warked example

A digital health subscription service generates average monthly revenue o $40 per patient, an the average patient bides subscribit for 18 months, giein an LTV o $40 × 18 = $720. True CAC for this service (see that tapic's warked example approach) is caulculatit at $180 per patient gotten. The LTV til CAC ratio is $720 / $180 = 4:1, comfortably abune the 3:1 sustainability baseline. If true CAC wur caulculatit uisin only ad-platform-reportit cost ($120, afore loadin in agency fees an intake labour), the ratio wid appear as 6:1 — a muckle mair favourable, an misleadin, picture o unit economics than the true 4:1 figure.

## Data sources an caveats

LTV depends on an assumption aboot average customer lifetime, which is itsel derived frae the organization's ain retention or churn data (see rate o user retention) — a business wi high churn haes a shorter effective average lifetime an sae a lawer LTV, even if its per-period revenue per customer looks healthy. Because LTV is a forrit-lookin estimate raither than an observed historical fact, it shuid be recaulculatit regularly as retention data builds up an revised if churn assumptions prove wrang, raither than fixed ance an left stale. Uisin platform-reportit CAC insteid o true CAC in this ratio is ane o the maist common weys an organization can convince itsel its unit economics are healthier than they actually are, sin an unnerstatit CAC mechanically inflates the ratio.

## Pitfalls

- **Uisin platform-reportit CAC insteid o true CAC**: this mechanically inflates the ratio an can mak an unsustainable acquisition strategy look sustainable; aye uise the fully loadit true CAC figure.
- **Uisin a stale or optimistic average customer lifetime assumption**: LTV caulculatit frae an oot-o-date retention curve winna reflect current churn behaviour, especially efter a product, pricin, or merket chynge that shifts retention.
- **Takkin a gey high ratio as clearly guid**: a ratio faur abune 3:1 can signal under-investment in growth raither than exceptional efficiency, sin it implies the organization could likely get mair customers profitably than it dis the noo.
- **Caulculatin ae blendit ratio athort gey different customer segments**: a segment wi high revenue an low churn can hide anither segment wi puir unit economics; caulculate the ratio per meaningfu segment (e.g. bi acquisition channel or product line) whaur volume allous.

## Sources

- Peer-reviewed and industry literature on subscription and recurring-revenue unit economics, widely used benchmarking frameworks from venture capital and SaaS metrics research organizations
- Healthcare Financial Management Association (HFMA), guidance on financial sustainability metrics for digital health organizations
- Rock Health and similar digital health market research organizations, industry benchmarking on digital health unit economics

See also: [true cost o gettin customers](../true-cost-o-gettin-customers/) an [ratio o merketin efficiency](../ratio-o-merketin-efficiency/), the ither twa core growth-economics metrics this ratio is typically reportit alangside.
