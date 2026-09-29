# Marketing Efficiency Ratio

Marketing efficiency ratio (MER) is total revenue divided by total marketing spend across every channel, for a defined period. It exists as a deliberate independent reality check on platform-reported return on ad spend (ROAS), which measures each channel's own claimed contribution to revenue and is structurally prone to over-crediting itself — MER instead looks at total revenue against total spend, a figure no single ad platform can distort.

## Why it matters

Ad platforms each report ROAS using their own attribution model, and because most organizations run several channels simultaneously, the same converting customer is frequently credited by more than one platform, so the sum of each platform's self-reported ROAS routinely overstates total marketing contribution when compared against actual total revenue. MER sidesteps this problem entirely by comparing total revenue to total spend at the organization level, making it far harder to distort through attribution gaming or platform-favorable reporting, which is exactly why finance and executive teams increasingly treat it as the trustworthy top-line efficiency check against which individual platform-reported figures are calibrated. A marketing team that reports strong ROAS on every individual channel while overall MER is declining has a real efficiency or attribution-overlap problem that channel-level reporting alone will not surface.

## How it's calculated

```
MER = total revenue / total marketing spend (all channels, same period)

Unlike ROAS, MER is not calculated per channel — it is a single,
organization-wide figure precisely because its value comes from being
immune to any one platform's attribution claims.

A rising MER over time, at stable or growing spend, indicates improving
overall marketing efficiency; a stable MER at growing revenue can
indicate that growth is coming from non-marketing-driven sources
(e.g. referrals, organic search, word of mouth).
```

## Worked example

A digital health company generates $2,400,000 in revenue in a quarter, with total marketing spend across all paid channels of $480,000. MER is $2,400,000 / $480,000 = 5.0. Individually, the paid search platform reports a ROAS of 6.0, the paid social platform reports a ROAS of 5.5, and a programmatic display platform reports a ROAS of 4.0 — if these were simply summed as a claim on total revenue contribution, they would imply more total attributed revenue than the company actually generated, since a meaningful share of converting customers were exposed to more than one channel and are being double- or triple-counted. The organization-wide MER of 5.0 is the number that reconciles this: it cannot be inflated by attribution overlap in the way that platform-level ROAS figures structurally can.

## Data sources and caveats

Total revenue comes from the organization's own finance or billing system, and total marketing spend comes from actual invoiced and paid marketing costs across every channel — both should be sourced independently of any ad platform's own dashboard. MER should be tracked over time as a trend rather than judged against a single universal benchmark, since a "good" MER varies enormously by business model, margin structure, and growth stage: an early-stage company investing heavily in growth may deliberately accept a lower MER than a mature company optimizing for profitability. MER does not diagnose which channel is responsible for a change in efficiency — that diagnostic work still requires channel-level analysis, ideally supplemented by incrementality testing (holdout groups that receive no marketing exposure) rather than platform-reported attribution alone.

## Pitfalls

- **Treating platform-reported ROAS as additive across channels**: summing each platform's self-reported ROAS overstates total marketing contribution whenever a customer is exposed to and credited by more than one channel, which is common; MER avoids this by design.
- **Comparing MER against a fixed universal benchmark**: an appropriate MER varies by business model, margin, and growth stage; use it as a trend for one organization over time rather than a fixed pass/fail threshold.
- **Using MER as a channel-level diagnostic**: MER is deliberately an organization-wide figure and cannot by itself identify which channel is driving an efficiency change; pair it with channel-level analysis and incrementality testing for that purpose.
- **Ignoring non-marketing revenue drivers**: a stable or improving MER at growing revenue can reflect organic growth (referrals, word of mouth, earned media) rather than marketing efficiency; disaggregate revenue by acquisition source where possible to avoid over-crediting marketing.

## Sources

- Association of National Advertisers (ANA), guidance on marketing measurement, attribution, and media transparency
- Marketing Accountability Standards Board (MASB), guidance on marketing metric definitions and measurement standards
- Peer-reviewed and industry literature on marketing mix modelling and incrementality testing as complements to platform-reported attribution

See also: [true customer acquisition cost](../true-customer-acquisition-cost/) and [LTV to CAC ratio](../ltv-to-cac-ratio/), the other two core growth-economics metrics this ratio is typically reported alongside.
