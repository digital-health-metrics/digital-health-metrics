# Rate o Medication Adherence

The rate o medication adherence measures hoo faur a patient taks a prescribit medication as directit, maist commonly expressit as the proportion o days in a defined period that a patient hid access tae their medication as prescribit. It's ane o the maist consequential digital health metrics because non-adherence is common, near aa preventable wi the richt support, an straucht linked tae waur clinical outcomes an higher doonstream costs — which is exactly the gap that medication reminder apps, smart pill bottles, an pharmacy refill nudges are biggit tae close.

## Why it maitters

Non-adherence tae chronic disease medication is estimatit bi public health bodies tae rin as high as 50% for some conditions, an it's a leadin preventable cause o avoidable hospitalizations, disease progression, an treatment failure that gets pit doun tae the medication itsel raither than tae inconsistent uise. Digital adherence tools are there specifically tae close this gap, sae for ony programme that includes a medication component, adherence rate is usually the single maist decision-relevant metric: it sits causally upstream o biometric betterment, readmission, an maist ither clinical outcome metrics a programme micht itherwise report. A programme that improves engagement or satisfaction wioot movin adherence haes probably no yet shawn a plausible mechanism for clinical benefit.

## Hoo it's caulculatit

```
Proportion of Days Covered (PDC) = days in period with medication on hand
                                    (based on days' supply from fills) / days
                                    in the measurement period × 100

Medication Possession Ratio (MPR) = total days' supply obtained during period
                                    / days in period × 100 (can exceed 100%
                                    with early refills; PDC is generally
                                    preferred for this reason)

A patient is typically classed "adherent" at a PDC threshold of ≥ 80%,
following widely used quality-measure convention.
```

## Warked example

A patient is prescribit a daily chronic medication ower a 90-day measurement period. Pharmacy fill records shaw the patient gat enough medication tae cover 76 o thae 90 days, wi twa gaps: a 9-day gap efter rinnin oot afore a refill, an a 5-day gap roond a hospital admission. The PDC is 76 / 90 × 100 = 84%, which crosses the conventional 80% adherence threshold. If the same gaps wur measured uisin MPR based on days' supply dispensit raither than days actually coverit, an early refill elsewhaur in the period could push the ratio abune 100%, shawin why PDC is the mair conservative an generally preferrit measure.

## Data sources an caveats

Pharmacy claims or fill data (either frae a pharmacy benefit manager or a connectit pharmacy system) is the standard source, sin it reflects whit a patient actually gat raither than whit they wur prescribit; prescription data alane owerstates adherence because it disnae confirm the patient ever collectit the medication. Digital adherence tools — smart pill bottles, ingestible sensors, connectit smart inhalers that log ilka actuation for respiratory conditions like asthma an COPD, an app-based check-ins — offer higher-resolution data on whether a dose wis actually taen, no juist gotten, but are uised bi a sma, potentially unrepresentative minority o patients, sae blendin device-confirmit adherence wi claims-based PDC athort a population needs care in interpretation. Adherence shuid be measured ower a period lang enough tae smooth oot single missit doses but short enough tae spot a meaningfu decline afore it causes clinical hairm — 90-day rollin windows are common for chronic medications.

## Pitfalls

- **Uisin MPR wioot disclosin that it can exceed 100%**: unexplainit ratios abune 100% frae early refills or stockpilin mak cross-patient an cross-period comparison unreliable unless PDC is uised or the ratio is explicitly cappit.
- **Takkin prescription or order data as proof o adherence**: a prescription scrievit or sent tae a pharmacy says naething aboot whether the patient collectit or took the medication; only fill or device data closes that gap.
- **Applyin ae adherence threshold athort aa conditions indiscriminately**: the clinical consequence o missin 20% o doses varies enormously bi drug class (e.g. anticoagulants versus statins), sae a single 80% threshold uised universally can under- or owerstate clinical risk for some medications.
- **Ignorin medication switches an discontinuations**: a patient wha is clinically an appropriately switchit tae a different medication can appear as a muckle adherence drap on the original medication if the switch isnae accountit for in the caulculation.

## Sources

- Pharmacy Quality Alliance (PQA), Proportion of Days Covered measure specifications
- Centers for Medicare & Medicaid Services (CMS), Star Ratings medication adherence measures
- Peer-reviewed literature on medication adherence measurement and digital adherence interventions, for example studies published in the Journal of Managed Care & Specialty Pharmacy

See also: [rate o biometric betterment](../rate-o-biometric-betterment/), o which adherence tae chronic disease medication is a main driver.
