# Cost per Episode o Care

Cost per episode o care is the total cost incurred in treatin a defined clinical episode — for example a hip replacement an its associatit recovery, or a diabetes management period — compared again a historical baseline cohort treatit wioot the digital intervention that's bein evaluatit. It's the standard unit o financial comparison in value-based care, because it captures the full economic picture o an episode raither than ony single cost line item on its ain, an it's the metric payers an health systems maist aften require afore agreein tae fund a digital health programme at scale.

## Why it maitters

Value-based care contracts mair an mair pey for outcomes an episodes raither than individual services, which means a digital health programme's financial case maun be made in the same currency: total cost per episode, compared again whit the same kind o episode cost afore the intervention existit. A programme that cuts ae cost category (for example, fewer in-person follow-up visits) while raisin anither (mair device costs, mair clinical monitorin staff time) hasnae necessarily cut the total cost per episode, an only a full episode-level costin captures this trade-aff; lookin at ony single cost line on its ain risks a misleadin conclusion in either direction. Because episode definitions an baseline periods can be pit thegither in weys that favour a particular conclusion, this metric needs mair methodological transparency than maist ithers in this beuk tae be trustit bi a sceptical payer or finance team.

## Hoo it's caulculatit

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

## Warked example

A health system's historical baseline cost for a total hip replacement episode (surgery richt throu tae 90-day recovery) is $28,000 per episode, based on 200 historical episodes. A new digital post-surgical monitorin programme is brocht in, an 150 new episodes uisin the programme shaw an average cost o $24,500 per episode — a $3,500 cut per episode, driven mainly bi fewer emergency department visits durin recovery an a shorter average inpatient stay. Efter risk-adjustin for a wee bit younger, lawer-comorbidity case mix in the digitally monitored cohort compared wi the historical baseline, the adjustit savin narrows tae $2,100 per episode — still a genuine improvement, but a muckle smawer ane than the raw, unadjustit comparison suggestit.

## Data sources an caveats

Total episode cost is typically pit thegither frae the health system's ain cost-accountin or finance system, combinin claims data, internal cost allocation, an, whaur a digital platform is involved, its licensin an hardware costs — gettin this figure accurate is usually the hardest an maist resource-heavy pairt o ony digital health value analysis, sin costs are aften recordit in separate systems that were niver designit tae be combined at the episode level. Case-mix adjustment is essential whenever the digitally managed cohort an the historical baseline cohort werenae assignit bi true randomization, sin digital programmes are aften offered first tae mair engaged, generally healthier, or mair motivatit patients, which can gie an apparent cost savin that's really a selection effect raither than a true programme effect.

## Pitfalls

- **Comparin unadjustit costs athort cohorts wi different case mix**: a digitally managed cohort that happens tae be healthier or lawer-risk than the historical baseline'll shaw a lawer cost per episode for reasons that hae naething tae dae wi the digital intervention itsel; aye risk-adjust afore comparin.
- **Leavin technology an staffin costs oot o the "digital" side o the comparison**: a cost analysis that only tracks reducit clinical uptak while ignorin the platform, device, an staffin costs o rinnin the digital programme'll owerstate net savins.
- **Definin the episode window inconsistently atween cohorts**: comparin a 90-day episode window for ae cohort again a 60-day window for anither'll gie a cost comparison that isnae actually measurin the same thing.
- **Takkin a cost shift as a cost cut**: cost shifted frae ae care setting tae anither (for example frae inpatient tae a monitored hame setting) is a genuine an valuable finding, but is analytically different frae cost that's awa athegither, an the twa shuid be reportit separately.

## Sources

- Centers for Medicare & Medicaid Services (CMS), Bundled Payments for Care Improvement (BPCI) and episode-based payment model guidance
- Healthcare Financial Management Association (HFMA), guidance on episode-of-care costing methodology
- Peer-reviewed literature on digital health value-based care cost analysis, for example studies published in Health Affairs and the American Journal of Managed Care

See also: [ROI an VOI](../roi-an-voi/), which uises cost per episode o care as ane o its main inputs.
