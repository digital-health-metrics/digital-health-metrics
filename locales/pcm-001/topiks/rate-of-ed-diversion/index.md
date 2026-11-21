# Rate of Emergency Department Diversion

Emergency department (ED) diversion rate dey measure di share of patient contacts wey digital triage or virtual care tool handle wey plausibly for result in ED visit without dat intervention, but wey dem instead safely manage through lower-acuity pathway — self-care advice, primary care appointment, or scheduled urgent care visit. Na specific, high-value subset of triage routing accuracy (see dat topic) wey focus entirely on avoided emergency department utilization, wey be di outcome wey most directly tie to both healthcare cost and ED capacity relief.

## Why e matter

Emergency departments dey among di most expensive care settings per encounter and dem dey frequently use am for problems wey dem fit safely manage somewhere else, so digital triage tool ability to safely redirect appropriate cases away from di ED na one of im most commercially and operationally valuable capabilities — and one of di easiest to communicate to payer or health system wey dey evaluate di tool return on investment. But diversion only get value if e safe: tool wey aggressively divert patients away from di ED at di cost of to miss genuine emergencies don optimize di wrong side of di trade-off entirely, and na why dem must always report ED diversion rate together with safety metric wey dey track missed or delayed emergency presentations among diverted patients, no be to report am alone as pure efficiency win.

## How dem dey calculate am

```
ED diversion rate = patient contacts safely redirected away from ED to
                     an appropriate lower-acuity pathway / total patient
                     contacts assessed as potentially ED-bound × 100

"Safely redirected" requires confirmation, via follow-up or linked
health record data, that the patient's condition did not in fact
require emergency care within a defined follow-up window (e.g. 72
hours) — a diversion decision is not validated as safe merely because
the patient did not immediately go to the ED afterward.

Report alongside:
  Missed-emergency rate = diverted patients who did require emergency
                           care within the follow-up window / total
                           diverted patients × 100
```

## Worked example

One digital triage service assess 3,000 patient contacts for one month wey im clinical algorithm judge as potentially ED-bound if dem no intervene. Out of dem, 1,800 dem redirect to lower-acuity pathway (diversion rate of 60%). Follow-up on di diverted cohort at 72 hours using linked health record data find say 45 of di 1,800 diverted patients later present to ED inside dat window (missed-emergency rate of 45 / 1,800 × 100 = 2.5%). To report di 60% diversion figure without di 2.5% missed-emergency rate go present only half of di safety-efficiency trade-off wey actually determine whether di tool diversion behaviour dey appropriately calibrated.

## Data sources and caveats

To confirm say diverted patient no later need emergency care depend on linked data — either di same health system own ED records, regional health information exchange, or structured patient follow-up call or survey — and diversion programme wey dey operate without any of dis data sources no fit actually validate im own safety, e fit only assume am based on say nobody complain. Di appropriate diversion rate and acceptable missed-emergency rate na clinical policy decisions, no be purely statistical ones, and clinical leadership suppose set dem deliberately instead of to allow dem emerge as side effect of whatever threshold triage algorithm happen to use by default. Dem suppose report diversion rate by presenting symptom or complaint category, because appropriate diversion rates dey vary enormously by condition (minor laceration versus chest pain need very different diversion thresholds).

## Pitfalls

- **To report diversion rate without linked missed-emergency safety metric**: high diversion rate wey dem achieve by under-triaging genuine emergencies no be success; dem must always report di two metrics together.
- **To assume say no ED visit mean say di diversion safe**: patient fit present to ED of different, unlinked hospital system, or fit get genuinely harmful outcome without ever to present to any ED; validate safety through linked data or structured follow-up, no be through di absence of same-system ED visit alone.
- **To set di diversion threshold purely to maximize di diversion rate**: algorithm or policy wey dem tune to maximize diversion without matched safety constraint go trade patient safety for efficiency number wey look better.
- **To blend diversion rate across all complaint types**: appropriate diversion rates dey differ hugely by presenting complaint; one single blended rate no fit show whether di tool dey perform safely and effectively for di specific conditions wey matter most clinically.

## Sources

- Agency for Healthcare Research and Quality (AHRQ), research on emergency department utilization and appropriate care-setting redirection
- NHS England, guidance on NHS 111 and digital urgent care triage safety and effectiveness standards
- Peer-reviewed literature on digital triage and virtual care ED diversion outcomes, for example studies published in Annals of Emergency Medicine and npj Digital Medicine

See also: [triage routing accuracy](../triaj-routin-akyureshi/), di broader accuracy metric wey dis one na specific, safety-critical subset of.
