# True Customer Acquisition Cost

True customer acquisition cost (true CAC) na di fully loaded cost to acquire one new paying customer or enrolled patient, wey include no be only paid advertising spend but every other cost wey materially contribute to dat acquisition: agency and creative fees, marketing technology and analytics infrastructure, and — specific to digital health — di clinical or operational labour cost of intake, eligibility verification, and onboarding. E dey exist as distinct metric because ad-platform-reported acquisition cost figures routinely and substantially understate di organization true cost per acquired customer.

## Why e matter

Digital health organizations wey dey manage growth using only ad-platform-reported cost-per-acquisition figures dey routinely make resource-allocation decisions on numbers wey omit 30-50% of di real cost of acquisition, because those platform figures capture only media spend and dem exclude agency fees, marketing technology licensing, and — critically for healthcare — di labour-intensive intake and eligibility-verification work wey clinical or operational team dey perform for every new patient before dem fit count am as acquired. Dis gap matter more for digital health than for most other sectors precisely because clinical intake labour dey expensive and mandatory, unlike for e-commerce, where "sale" need essentially no comparable back-office labour. Team wey dey optimize marketing spend against artificially low CAC figure go systematically over-invest for channels wey look cheap for platform dashboard but dey expensive once dem calculate true CAC.

## How dem dey calculate am

```
True CAC = (paid media spend + agency and creative fees + marketing
            technology and analytics costs + clinical/operational intake
            labour cost) / new customers or patients acquired in period

Clinical/operational intake labour cost should be estimated from
loaded labour cost (salary, benefits, overhead) × average hours spent
per acquired patient on intake, eligibility verification, and onboarding.
```

## Worked example

One digital health company acquire 500 new patients for one month. Ad-platform dashboards report blended cost-per-acquisition of $120, based on $60,000 of paid media spend. To add agency fees of $9,000, marketing technology costs of $6,000, and estimated intake labour cost of 45 minutes per patient at fully loaded staff cost of $40/hour (500 × 0.75 × $40 = $15,000) bring total acquisition cost to $60,000 + $9,000 + $6,000 + $15,000 = $90,000. True CAC na $90,000 / 500 = $180 — 50% higher than di $120 figure wey di ad platform alone report, and na di figure wey suppose actually inform channel budget allocation and unit-economics decisions.

## Data sources and caveats

Paid media spend and platform-reported cost-per-acquisition dey come directly from di advertising platforms demself (search, social, programmatic); agency fees and marketing technology costs dey come from finance or accounts payable records; intake labour cost na di hardest component to source accurately and e usually need either time-and-motion study or reasonable estimate wey dem agree with operational leadership, because most organizations no dey natively track staff time per acquisition. Dem suppose calculate true CAC per acquisition channel where volume allow, because intake labour cost per patient dey often similar across channels while media cost dey vary enormously, wey mean say di gap between platform-reported and true CAC proportionally largest for di channels wey look cheapest.

## Pitfalls

- **To rely solely on ad-platform dashboards**: platform-reported cost-per-acquisition structurally dey exclude agency fees, marketing technology costs, and intake labour, and e no be substitute for true CAC calculation.
- **To omit clinical or operational intake labour**: dis na consistently di cost component wey people most commonly miss for digital health specifically, and e often be di single largest contributor to di gap between platform-reported cost and true CAC.
- **To average true CAC across all channels**: blended true CAC figure fit hide say one channel dey dramatically more expensive once dem include loaded costs, even though e appear cheapest for di ad platform alone.
- **To no update labour cost estimates as intake processes change**: intake process redesign (for example, to automate eligibility verification) fit materially change true CAC, and stale labour estimate go misstate di current figure.

## Sources

- Association of National Advertisers (ANA), guidance on marketing cost measurement and media transparency
- Peer-reviewed and industry literature on digital health unit economics and go-to-market cost structures, for example analyses published by Rock Health and similar digital health research organizations
- Healthcare Financial Management Association (HFMA), guidance on fully loaded cost accounting in healthcare operations

See also: [LTV to CAC ratio](../ltv-to-cac-reshio/), wey true CAC na one of di two inputs to.
