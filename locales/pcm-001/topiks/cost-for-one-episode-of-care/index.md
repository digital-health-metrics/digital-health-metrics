# Cost for One Episode of Care

Cost per episode of care na di total cost wey dem spend to treat one defined clinical episode — for example hip replacement and di recovery wey follow am, or diabetes management period — wey dem compare against historical baseline cohort wey dem treat without di digital intervention wey dem dey evaluate. Na di standard unit of financial comparison for value-based care, because e capture di full economic picture of one episode instead of any single cost line item alone, and na di metric wey payers and health systems most often require before dem agree to fund digital health programme at scale.

## Why e matter

Value-based care contracts dey increasingly pay for outcomes and episodes instead of individual services, wey mean say digital health programme financial case must dem make am inside di same currency: total cost per episode, compared against wetin di same type of episode cost before di intervention exist. Programme wey reduce one cost category (for example, fewer in-person follow-up visits) while e increase another (more device costs, more clinical monitoring staff time) no necessarily reduce total cost per episode, and only full episode-level costing dey capture dis trade-off; to look at any single cost line alone fit give misleading conclusion for either direction. Because dem fit construct episode definitions and baseline periods in ways wey favour particular conclusion, dis metric need more methodological transparency pass most other metrics for dis book before sceptical payer or finance team go trust am.

## How dem dey calculate am

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

One health system historical baseline cost for total hip replacement episode (surgery go reach 90-day recovery) na $28,000 per episode, based on 200 historical episodes. Dem introduce new digital post-surgical monitoring programme, and 150 new episodes wey use di programme show average cost of $24,500 per episode — $3,500 reduction per episode, wey come mainly from fewer emergency department visits during recovery and shorter average inpatient stay. After dem risk-adjust for slightly younger, lower-comorbidity case mix for di digitally monitored cohort compared with di historical baseline, di adjusted saving narrow to $2,100 per episode — e still be genuine improvement, but e materially smaller than di raw, unadjusted comparison suggest.

## Data sources and caveats

Dem dey typically assemble total episode cost from di health system own cost-accounting or finance system, wey combine claims data, internal cost allocation, and, where digital platform dey involved, im licensing and hardware costs — to assemble dis figure accurately na usually di hardest and most resource-intensive part of any digital health value analysis, because dem dey frequently record costs for separate systems wey dem never design to combine for episode level. Case-mix adjustment dey essential whenever di digitally managed cohort and di historical baseline cohort no dey assigned by true randomization, because dem dey frequently offer digital programmes first to patients wey more engaged, generally healthier, or more motivated, wey fit produce apparent cost saving wey really be selection effect instead of true programme effect.

## Pitfalls

- **To compare unadjusted costs across cohorts wey get different case mix**: digitally managed cohort wey happen to healthier or lower-risk than di historical baseline go show lower cost per episode for reasons wey no connect to di digital intervention itself; always risk-adjust before you compare.
- **To omit technology and staffing costs from di "digital" side of di comparison**: cost analysis wey only track reduced clinical utilization while e ignore di platform, device, and staffing costs of running di digital programme go overstate net savings.
- **To define di episode window inconsistently between cohorts**: to compare 90-day episode window for one cohort against 60-day window for another go produce cost comparison wey no dey actually measure di same thing.
- **To treat cost shift as cost reduction**: cost wey dem move from one care setting to another (for example from inpatient to monitored home setting) na genuine and valuable finding, but e different analytically from cost wey dem eliminate completely, and dem suppose report di two separate.

## Sources

- Centers for Medicare & Medicaid Services (CMS), Bundled Payments for Care Improvement (BPCI) and episode-based payment model guidance
- Healthcare Financial Management Association (HFMA), guidance on episode-of-care costing methodology
- Peer-reviewed literature on digital health value-based care cost analysis, for example studies published in Health Affairs and the American Journal of Managed Care

See also: [return on investment (ROI) and value on investment (VOI)](../roi-an-voi/), wey dey use cost per episode of care as one of im principal inputs.
