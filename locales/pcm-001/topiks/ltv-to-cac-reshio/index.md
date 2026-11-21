# LTV to CAC Ratio

LTV to CAC ratio dey compare customer lifetime value (LTV) — di total revenue or margin wey organization expect to earn from patient or customer over im full relationship with di product — against di true cost of to acquire dat customer (see true customer acquisition cost). Na di single most important unit-economics metric to judge whether digital health organization growth dey financially sustainable, because growing customer base wey dem acquire for loss no be sign of health, no matter how positive di growth curve look.

## Why e matter

Digital health organization fit grow im user base steadily while e quietly dey destroy value on every new customer, if acquisition cost pass lifetime value; LTV to CAC ratio na di metric wey dey make dis visible in way wey growth rate or raw customer count alone no fit. 3:1 ratio (lifetime value at least three times acquisition cost) na di widely cited baseline benchmark for sustainable subscription or recurring-revenue business, wey allow enough margin to cover operating costs beyond acquisition and still generate return; ratio below 1:1 mean say di organization dey lose money on every customer wey e acquire, and ratio far above 3:1 (for example 10:1 or higher) fit actually indicate under-investment for growth, because e suggest say di organization fit profitably acquire more customers than wetin e dey acquire now. Investors, boards, and payers wey dey evaluate digital health company financial sustainability dey treat dis ratio as one of di first numbers wey dem dey ask for.

## How dem dey calculate am

```
LTV = average revenue (or margin) per customer per period × average
      customer lifetime in that same period unit

LTV to CAC ratio = LTV / true CAC

A ratio of 3:1 is the commonly cited sustainable baseline; below 1:1
indicates the organization loses money on acquisition; well above 3:1
(e.g. 10:1+) can indicate under-investment in growth.
```

## Worked example

One digital health subscription service generate average monthly revenue of $40 per patient, and di average patient remain subscribed for 18 months, wey give LTV of $40 × 18 = $720. Dem calculate true CAC for dis service (see dat topic worked example approach) at $180 per acquired patient. Di LTV to CAC ratio na $720 / $180 = 4:1, comfortably above di 3:1 sustainability baseline. If dem calculate true CAC using only ad-platform-reported cost ($120, before dem load in agency fees and intake labour), di ratio go appear as 6:1 — materially more favourable, and misleading, picture of unit economics than di true 4:1 figure.

## Data sources and caveats

LTV depend on assumption about average customer lifetime, wey itself come from di organization own retention or churn data (see user retention rate) — business wey get high churn get shorter effective average lifetime and so lower LTV, even if im per-period revenue per customer look healthy. Because LTV na forward-looking estimate instead of observed historical fact, dem suppose recalculate am regularly as retention data accumulate and revise am if churn assumptions turn out wrong, instead of to fix am once and leave am stale. To use platform-reported CAC instead of true CAC for dis ratio na one of di most common ways organization fit convince itself say im unit economics healthier than dem actually be, because understated CAC dey mechanically inflate di ratio.

## Pitfalls

- **To use platform-reported CAC instead of true CAC**: dis dey mechanically inflate di ratio and fit make unsustainable acquisition strategy look sustainable; always use di fully loaded true CAC figure.
- **To use stale or optimistic average customer lifetime assumption**: LTV wey dem calculate from outdated retention curve no go reflect current churn behaviour, especially after product, pricing, or market change wey shift retention.
- **To treat very high ratio as unambiguously good**: ratio far above 3:1 fit signal under-investment for growth instead of exceptional efficiency, because e imply say di organization fit likely acquire more customers profitably than wetin e dey do now.
- **To calculate one blended ratio across very different customer segments**: segment wey get high revenue and low churn fit hide different segment wey get poor unit economics; calculate di ratio per meaningful segment (e.g. by acquisition channel or product line) where volume allow.

## Sources

- Peer-reviewed and industry literature on subscription and recurring-revenue unit economics, widely used benchmarking frameworks from venture capital and SaaS metrics research organizations
- Healthcare Financial Management Association (HFMA), guidance on financial sustainability metrics for digital health organizations
- Rock Health and similar digital health market research organizations, industry benchmarking on digital health unit economics

See also: [true customer acquisition cost](../tru-kostoma-akwayshon-kos/) and [marketing efficiency ratio](../makertin-efishensi-reshio/), di other two core growth-economics metrics wey dem typically report together with dis ratio.
