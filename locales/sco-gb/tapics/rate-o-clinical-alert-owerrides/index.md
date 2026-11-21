# Rate o Clinical Alert Owerrides

The rate o clinical alert owerrides measures the share o clinical decision support (CDS) alerts — sic as drug-drug interaction warnins, allergy alerts, an dose-range checks generatit bi a computerized provider order entry (CPOE) system — that a clinician dismisses or owerrides raither than actin on. It's the standard quantitative signal uised tae spot an manage "alert fatigue": the weel-documentit tendency for clinicians tae get hardent tae alerts ance the volume o low-value warnins turns overwhelmin.

## Why it maitters

Publisht owerride rates for drug interaction alerts commonly rin frae aboot hauf tae mair than ninety percent, an a high rate isnae automatically a safety failure: mony interruptive alerts fire for interactions that are clinically o nae significance in context, or repeat an alert the clinician haes aareadies acted on earlier in the same order set, sae a weel-tuned system deliberately fires fewer, higher-value alerts raither than tryin tae drive the owerride rate doun tae nocht. Whit really maitters for safety is the trend ower time, the distribution athort severity tiers, an whether clinicians document a reason when they owerride a high-severity alert; a risin owerride rate on high-severity, weel-evidenced interactions is a real governance concern even when the average athort aa alerts looks steady.

## Hoo it's caulculatit

```
Override rate = alerts overridden / total alerts fired × 100

Segment by:
  - severity tier (e.g. contraindicated, major, moderate)
  - alert type (drug-drug interaction, allergy, duplicate therapy, dose range)
  - whether an override reason was documented

A "documented override rate" tracks the share of overrides that carry a
recorded justification, which is a governance measure in its own right.
```

## Warked example

A hospital's CPOE system fires 10,000 drug-drug interaction alerts in a month, o which 8,700 are owerridden, giein an owerall owerride rate o 87%. Segmentin bi severity shaws that o 500 "contraindicated" alerts, 60 are owerridden (12%), while o 6,000 "moderate" alerts, 5,700 are owerridden (95%). The moderate-tier figure is broadly in line wi publisht benchmarks an isnae, bi itsel, a cause for concern; the contraindicated-tier figure needs individual case review, an the fact that only 340 o the 500 owerrides at that tier cairry a documentit reason is the mair actionable governance finding.

## Data sources an caveats

The electronic health record's audit log, or the CDS vendor's ain alertin module, records ilka alert-fired an alert-response event, includin whether the clinician pit in free-text or structurit justification. Comparin owerride rates atween organizations, or even atween departments in the same organization, means checkin that the underlyin alert rule sets an severity tierin are the same; a hospital wi an aggressively tunit rule set'll shaw a lawer owerride rate for reasons that hae naething tae dae wi clinician behaviour.

## Pitfalls

- **Takkin the raw owerride rate as a single safety score**: it mixes weel-justifiet owerrides o low-value alerts wi unsafe owerrides o genuinely dangerous interactions; aye segment bi severity.
- **Nae owerride-reason capture**: wioot a documentit reason, it's impossible tae tell "this alert wis wrang" frae "this alert wis richt an the clinician made an unsafe judgement caa", which is the actual distinction that maitters for patient safety.
- **Alert-rule inflation ower time**: addin mair alerts tae "be safe" wioot prunin the low-value anes is the direct cause o risin owerride rates an alert fatigue; alert governance shuid include regular review an retirement o rules that dinnae pey their wey, no juist monitorin.
- **Comparin rates athort systems wi different interruption design**: an interruptive, hard-stop alert gies different owerride behaviour frae a passive, non-blockin ane, sae the twa arenae directly comparable metrics.

## Sources

- Peer-reviewed literature on clinical decision support alert fatigue, widely published in journals including JAMIA and npj Digital Medicine
- ONC / HealthIT.gov, health IT safety guidance on clinical decision support
- Institute for Safe Medication Practices (ISMP), guidance on CDS alert design and governance
