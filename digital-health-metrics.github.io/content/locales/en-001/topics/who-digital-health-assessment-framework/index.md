# WHO Digital Health Assessment Framework

The World Health Organization (WHO) publishes a body of guidance for assessing digital health interventions before, during, and after national-scale deployment, spanning monitoring-and-evaluation methodology, a standard classification of intervention types, and toolkits for judging whether a digital health programme is ready to scale — with particular and consistent emphasis on equity, feasibility, and safety, reflecting WHO's mandate to protect population health across countries with very different digital and health-system infrastructure. Unlike a single named checklist, this is better understood as a coherent family of WHO publications that organizations assessing a national or regional digital health deployment typically draw on together.

## Why it matters

A digital health intervention that performs well in a well-resourced pilot setting can fail, or actively cause harm, when deployed nationally across populations with markedly different levels of connectivity, digital literacy, language, and health system capacity — which is exactly the gap WHO's guidance exists to close, since WHO's core mandate is population health equity across very unevenly resourced member states, not the interests of any single health system or vendor. WHO's framing also treats safety and feasibility as gating considerations, not afterthoughts to be assessed once an intervention already works: a digital health tool must be shown not to worsen inequity or introduce new safety risk before scale is considered, not merely shown to be effective in aggregate. For any organization planning a national or multi-country digital health deployment, aligning evaluation to WHO's guidance is often also a practical necessity, since it is the framework most likely to be referenced or required by ministries of health and multilateral funders.

## How it's applied

```
WHO guidance is applied across several linked evaluation activities,
not one single scored checklist:

Classification    — categorizing the intervention against WHO's
                     Classification of Digital Health Interventions,
                     to ensure like-for-like comparison with similar
                     interventions elsewhere

Monitoring and
evaluation design — following WHO's monitoring and evaluation guidance
                     for digital health interventions, covering study
                     design, outcome selection, and data quality

Scale-readiness
assessment        — assessing groundwork, partnerships, financial
                     sustainability, technical architecture, and
                     operational capacity against WHO/ITU-aligned
                     scale-up assessment toolkits

Equity and safety
review            — an explicit, gating assessment of whether the
                     intervention could worsen access or outcome
                     inequities, or introduce clinical or data-privacy
                     safety risk, before scale-up proceeds
```

## Worked example

A ministry of health plans to scale a maternal health SMS reminder service from a single-region pilot to national deployment. Applying WHO's classification guidance, the intervention is categorized clearly as a client-facing, targeted-communication digital health intervention, allowing comparison against similar interventions evaluated elsewhere rather than being assessed as if it were entirely novel. A monitoring and evaluation plan is built following WHO guidance to track both reach and clinical outcome, not outcome alone. A scale-readiness assessment identifies that the pilot region's cellular network reliability is significantly above the national average, meaning the equity and safety review flags a material risk: scaling nationally without first assessing rural network coverage could concentrate benefit in already better-connected, wealthier regions, widening rather than closing an existing maternal health equity gap. This finding — surfaced specifically because equity was treated as a gating criterion rather than an afterthought — leads the ministry to phase the rollout by network-coverage tier rather than scaling uniformly.

## Data sources and caveats

WHO's guidance documents are publicly published and freely available, but applying them requires local data that WHO itself does not supply — connectivity and digital literacy data specific to the deployment country or region, local health system capacity data, and local outcome data — meaning the framework provides the structure for assessment, not the data itself. Because WHO's guidance is deliberately general enough to apply across very different national contexts, applying it well requires genuine local expertise and data to avoid a generic, checkbox-style assessment that misses country-specific risk; a WHO-aligned assessment carried out without local health system and equity data is unlikely to surface the risks it is actually designed to catch.

## Pitfalls

- **Treating classification alone as evaluation**: correctly classifying an intervention type is a starting point for comparison, not itself an assessment of the intervention's safety, effectiveness, or readiness to scale.
- **Treating equity assessment as a final add-on rather than a gate**: WHO's framing treats equity risk as a reason to slow or redesign a rollout, not a footnote to report after scale-up has already happened; assessing it only retrospectively defeats its purpose.
- **Applying the framework without local context data**: WHO's guidance is intentionally general; without local connectivity, literacy, and health-system-capacity data, an assessment against it becomes a generic checklist exercise rather than a genuine risk assessment.
- **Assuming WHO alignment substitutes for a national regulatory or ethics review**: WHO guidance informs and structures an assessment but does not replace a country's own required regulatory, data-protection, or ethics approval processes.

## Sources

- World Health Organization, Classification of Digital Health Interventions v1.0
- World Health Organization, "Monitoring and Evaluating Digital Health Interventions: A practical guide to conducting research and assessment"
- World Health Organization, ITU, and partners, mHealth Assessment and Planning for Scale (MAPS) Toolkit
- World Health Organization, "WHO guideline: recommendations on digital interventions for health system strengthening"

See also: [digital access rate](../digital-access-rate/) and [digital literacy rate](../digital-literacy-rate/), the two metrics in this book most directly aligned with the equity dimension WHO's guidance treats as a gating concern.
