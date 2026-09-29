# Cost per Episode of Care

Cost per episode of care is the total cost incurred in treating a defined clinical episode — for example a hip replacement and its associated recovery, or a diabetes management period — compared against a historical baseline cohort treated without the digital intervention being evaluated. It is the standard unit of financial comparison in value-based care, because it captures the full economic picture of an episode rather than any single cost line item in isolation, and it is the metric payers and health systems most often require before agreeing to fund a digital health programme at scale.

## Why it matters

Value-based care contracts increasingly pay for outcomes and episodes rather than individual services, which means a digital health programme's financial case must be made in the same currency: total cost per episode, compared against what the same type of episode cost before the intervention existed. A programme that reduces one cost category (for example, fewer in-person follow-up visits) while increasing another (more device costs, more clinical monitoring staff time) has not necessarily reduced total cost per episode, and only a full episode-level costing captures this trade-off; looking at any single cost line in isolation risks a misleading conclusion in either direction. Because episode definitions and baseline periods can be constructed in ways that favour a particular conclusion, this metric requires more methodological transparency than most others in this book to be trustworthy to a sceptical payer or finance team.

## How it's calculated

```
Cost per episode of care = total cost of all care delivered within a
                            defined episode window (all care settings,
                            all cost categories) / number of episodes

Compare against a historical baseline cohort's cost per episode for
the same clinically defined episode type, adjusted for case mix
(age, comorbidity, severity) between the two cohorts.

Include, not just direct clinical costs: technology platform and
device costs, additional clinical staffing time, and any care that
shifted setting (e.g. from inpatient to home) rather than
disappearing entirely.
```

## Worked example

A health system's historical baseline cost for a total hip replacement episode (surgery through 90-day recovery) is $28,000 per episode, based on 200 historical episodes. A new digital post-surgical monitoring programme is introduced, and 150 new episodes using the programme show an average cost of $24,500 per episode — a $3,500 reduction per episode, driven mainly by fewer emergency department visits during recovery and a shorter average inpatient stay. After risk-adjusting for a slightly younger, lower-comorbidity case mix in the digitally monitored cohort compared with the historical baseline, the adjusted saving narrows to $2,100 per episode — still a genuine improvement, but a materially smaller one than the raw, unadjusted comparison suggested.

## Data sources and caveats

Total episode cost is typically assembled from the health system's own cost-accounting or finance system, combining claims data, internal cost allocation, and, where a digital platform is involved, its licensing and hardware costs — assembling this figure accurately is usually the hardest and most resource-intensive part of any digital health value analysis, since costs are frequently recorded in separate systems that were never designed to be combined at the episode level. Case-mix adjustment is essential whenever the digitally managed cohort and the historical baseline cohort were not assigned by true randomization, since digital programmes are frequently offered first to more engaged, generally healthier, or more motivated patients, which can produce an apparent cost saving that is really a selection effect rather than a true programme effect.

## Pitfalls

- **Comparing unadjusted costs across cohorts with different case mix**: a digitally managed cohort that happens to be healthier or lower-risk than the historical baseline will show a lower cost per episode for reasons unrelated to the digital intervention itself; always risk-adjust before comparing.
- **Omitting technology and staffing costs from the "digital" side of the comparison**: a cost analysis that only tracks reduced clinical utilisation while ignoring the platform, device, and staffing costs of running the digital programme will overstate net savings.
- **Defining the episode window inconsistently between cohorts**: comparing a 90-day episode window for one cohort against a 60-day window for another will produce a cost comparison that is not actually measuring the same thing.
- **Treating a cost shift as a cost reduction**: cost moved from one care setting to another (for example from inpatient to a monitored home setting) is a genuine and valuable finding, but is analytically different from cost eliminated entirely, and the two should be reported separately.

## Sources

- Centers for Medicare & Medicaid Services (CMS), Bundled Payments for Care Improvement (BPCI) and episode-based payment model guidance
- Healthcare Financial Management Association (HFMA), guidance on episode-of-care costing methodology
- Peer-reviewed literature on digital health value-based care cost analysis, for example studies published in Health Affairs and the American Journal of Managed Care

See also: [return on investment (ROI) and value on investment (VOI)](../roi-and-voi/), which uses cost per episode of care as one of its principal inputs.
