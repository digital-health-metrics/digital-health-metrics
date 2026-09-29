# LTV to CAC Ratio

LTV to CAC ratio compares a customer's lifetime value (LTV) — the total revenue or margin an organization expects to earn from a patient or customer over their full relationship with the product — against the true cost of acquiring that customer (see true customer acquisition cost). It is the single most important unit-economics metric for judging whether a digital health organization's growth is financially sustainable, because a growing customer base acquired at a loss is not a sign of health, however positive the growth curve looks.

## Why it matters

A digital health organization can grow its user base steadily while quietly destroying value on every new customer, if acquisition cost exceeds lifetime value; LTV to CAC ratio is the metric that makes this visible in a way that growth rate or raw customer count alone cannot. A 3:1 ratio (lifetime value at least three times acquisition cost) is the widely cited baseline benchmark for a sustainable subscription or recurring-revenue business, allowing enough margin to cover operating costs beyond acquisition and still generate a return; a ratio below 1:1 means the organization loses money on every customer acquired, and a ratio far above 3:1 (for example 10:1 or higher) can actually indicate under-investment in growth, since it suggests the organization could profitably acquire more customers than it currently is. Investors, boards, and payers evaluating a digital health company's financial sustainability treat this ratio as one of the first numbers they ask for.

## How it's calculated

```
LTV = average revenue (or margin) per customer per period × average
      customer lifetime in that same period unit

LTV to CAC ratio = LTV / true CAC

A ratio of 3:1 is the commonly cited sustainable baseline; below 1:1
indicates the organization loses money on acquisition; well above 3:1
(e.g. 10:1+) can indicate under-investment in growth.
```

## Worked example

A digital health subscription service generates average monthly revenue of $40 per patient, and the average patient remains subscribed for 18 months, giving an LTV of $40 × 18 = $720. True CAC for this service (see that topic's worked example approach) is calculated at $180 per acquired patient. The LTV to CAC ratio is $720 / $180 = 4:1, comfortably above the 3:1 sustainability baseline. If true CAC were calculated using only ad-platform-reported cost ($120, before loading in agency fees and intake labour), the ratio would appear as 6:1 — a materially more favorable, and misleading, picture of unit economics than the true 4:1 figure.

## Data sources and caveats

LTV depends on an assumption about average customer lifetime, which is itself derived from the organization's own retention or churn data (see user retention rate) — a business with high churn has a shorter effective average lifetime and therefore a lower LTV, even if its per-period revenue per customer looks healthy. Because LTV is a forward-looking estimate rather than an observed historical fact, it should be recalculated regularly as retention data accumulates and revised if churn assumptions prove wrong, rather than fixed once and left stale. Using platform-reported CAC instead of true CAC in this ratio is one of the most common ways an organization can convince itself its unit economics are healthier than they actually are, since an understated CAC mechanically inflates the ratio.

## Pitfalls

- **Using platform-reported CAC instead of true CAC**: this mechanically inflates the ratio and can make an unsustainable acquisition strategy look sustainable; always use the fully loaded true CAC figure.
- **Using a stale or optimistic average customer lifetime assumption**: LTV calculated from an outdated retention curve will not reflect current churn behavior, especially after a product, pricing, or market change that shifts retention.
- **Treating a very high ratio as unambiguously good**: a ratio far above 3:1 can signal under-investment in growth rather than exceptional efficiency, since it implies the organization could likely acquire more customers profitably than it currently does.
- **Calculating one blended ratio across very different customer segments**: a segment with high revenue and low churn can mask a different segment with poor unit economics; calculate the ratio per meaningful segment (e.g. by acquisition channel or product line) where volume allows.

## Sources

- Peer-reviewed and industry literature on subscription and recurring-revenue unit economics, widely used benchmarking frameworks from venture capital and SaaS metrics research organizations
- Healthcare Financial Management Association (HFMA), guidance on financial sustainability metrics for digital health organizations
- Rock Health and similar digital health market research organizations, industry benchmarking on digital health unit economics

See also: [true customer acquisition cost](../true-customer-acquisition-cost/) and [marketing efficiency ratio](../marketing-efficiency-ratio/), the other two core growth-economics metrics this ratio is typically reported alongside.
