# True Customer Acquisition Cost

True customer acquisition cost (true CAC) is the fully loaded cost of acquiring one new paying customer or enrolled patient, including not only paid advertising spend but every other cost that materially contributed to that acquisition: agency and creative fees, marketing technology and analytics infrastructure, and — specific to digital health — the clinical or operational labour cost of intake, eligibility verification, and onboarding. It exists as a distinct metric because ad-platform-reported acquisition cost figures routinely and substantially understate the organization's true cost per acquired customer.

## Why it matters

Digital health organizations that manage growth using only ad-platform-reported cost-per-acquisition figures are routinely making resource-allocation decisions on numbers that omit 30-50% of the real cost of acquisition, because those platform figures capture only media spend and exclude agency fees, marketing technology licensing, and — critically for healthcare — the labour-intensive intake and eligibility-verification work that a clinical or operational team performs for every new patient before they can be counted as acquired. This gap matters more in digital health than in most other sectors precisely because clinical intake labour is expensive and mandatory, unlike in e-commerce, where a "sale" requires essentially no comparable back-office labour. A team optimizing marketing spend against an artificially low CAC figure will systematically over-invest in channels that look cheap on a platform dashboard but are expensive once true CAC is calculated.

## How it's calculated

```
True CAC = (paid media spend + agency and creative fees + marketing
            technology and analytics costs + clinical/operational intake
            labour cost) / new customers or patients acquired in period

Clinical/operational intake labour cost should be estimated from
loaded labour cost (salary, benefits, overhead) × average hours spent
per acquired patient on intake, eligibility verification, and onboarding.
```

## Worked example

A digital health company acquires 500 new patients in a month. Ad-platform dashboards report a blended cost-per-acquisition of $120, based on $60,000 of paid media spend. Adding agency fees of $9,000, marketing technology costs of $6,000, and an estimated intake labour cost of 45 minutes per patient at a fully loaded staff cost of $40/hour (500 × 0.75 × $40 = $15,000) brings total acquisition cost to $60,000 + $9,000 + $6,000 + $15,000 = $90,000. True CAC is $90,000 / 500 = $180 — 50% higher than the $120 figure the ad platform alone reported, and the figure that should actually inform channel budget allocation and unit-economics decisions.

## Data sources and caveats

Paid media spend and platform-reported cost-per-acquisition come directly from the advertising platforms themselves (search, social, programmatic); agency fees and marketing technology costs come from finance or accounts payable records; intake labour cost is the hardest component to source accurately and usually requires either a time-and-motion study or a reasonable estimate agreed with operational leadership, since most organizations do not track staff time per acquisition natively. True CAC should be calculated per acquisition channel where volume allows, since intake labour cost per patient is often similar across channels while media cost varies enormously, meaning the gap between platform-reported and true CAC is proportionally largest for the cheapest-looking channels.

## Pitfalls

- **Relying solely on ad-platform dashboards**: platform-reported cost-per-acquisition structurally excludes agency fees, marketing technology costs, and intake labour, and is not a substitute for a true CAC calculation.
- **Omitting clinical or operational intake labour**: this is consistently the most commonly missed cost component in digital health specifically, and is often the single largest contributor to the gap between platform-reported cost and true CAC.
- **Averaging true CAC across all channels**: a blended true CAC figure can hide that one channel is dramatically more expensive once loaded costs are included, even though it appeared cheapest on the ad platform alone.
- **Not updating labour cost estimates as intake processes change**: an intake process redesign (for example, automating eligibility verification) can materially change true CAC, and a stale labour estimate will misstate the current figure.

## Sources

- Association of National Advertisers (ANA), guidance on marketing cost measurement and media transparency
- Peer-reviewed and industry literature on digital health unit economics and go-to-market cost structures, for example analyses published by Rock Health and similar digital health research organizations
- Healthcare Financial Management Association (HFMA), guidance on fully loaded cost accounting in healthcare operations

See also: [LTV to CAC ratio](../ltv-to-cac-ratio/), which true CAC is one of the two inputs to.
