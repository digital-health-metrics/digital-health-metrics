# Emergency Department Diversion Rate

Emergency department (ED) diversion rate measures the share of patient contacts handled by a digital triage or virtual care tool that would plausibly have resulted in an ED visit without that intervention, but were instead safely managed through a lower-acuity pathway — self-care advice, a primary care appointment, or a scheduled urgent care visit. It is a specific, high-value subset of triage routing accuracy (see that topic) focused entirely on avoided emergency department utilization, which is the outcome most directly tied to both healthcare cost and ED capacity relief.

## Why it matters

Emergency departments are among the most expensive care settings per encounter and are frequently used for problems that could be safely managed elsewhere, so a digital triage tool's ability to safely redirect appropriate cases away from the ED is one of its most commercially and operationally valuable capabilities — and one of the easiest to communicate to a payer or health system evaluating the tool's return on investment. But diversion only has value if it is safe: a tool that aggressively diverts patients away from the ED at the cost of missing genuine emergencies has optimized the wrong side of the trade-off entirely, which is why ED diversion rate must always be reported alongside a safety metric tracking missed or delayed emergency presentations among diverted patients, not reported in isolation as a pure efficiency win.

## How it's calculated

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

A digital triage service assesses 3,000 patient contacts in a month that its clinical algorithm judges as potentially ED-bound absent intervention. Of these, 1,800 are redirected to a lower-acuity pathway (a diversion rate of 60%). Following up on the diverted cohort at 72 hours using linked health record data finds that 45 of the 1,800 diverted patients did subsequently present to an ED within that window (a missed-emergency rate of 45 / 1,800 × 100 = 2.5%). Reporting the 60% diversion figure without the 2.5% missed-emergency rate would present only half of the safety-efficiency trade-off that actually determines whether the tool's diversion behaviour is appropriately calibrated.

## Data sources and caveats

Confirming that a diverted patient did not subsequently require emergency care depends on linked data — either the same health system's own ED records, a regional health information exchange, or a structured patient follow-up call or survey — and a diversion programme operating without any of these data sources cannot actually validate its own safety, only assume it based on the absence of a complaint. The appropriate diversion rate and acceptable missed-emergency rate are clinical policy decisions, not purely statistical ones, and should be set deliberately by clinical leadership rather than allowed to emerge as a side effect of whatever threshold a triage algorithm happens to use by default. Diversion rate should be reported by presenting symptom or complaint category, since appropriate diversion rates vary enormously by condition (a minor laceration versus chest pain warrant very different diversion thresholds).

## Pitfalls

- **Reporting diversion rate without a linked missed-emergency safety metric**: a high diversion rate achieved by under-triaging genuine emergencies is not a success; the two metrics must always be reported together.
- **Assuming no ED visit means the diversion was safe**: a patient may present to a different, unlinked hospital system's ED, or may have a genuinely harmful outcome without ever presenting to any ED; validate safety through linked data or structured follow-up, not the absence of a same-system ED visit alone.
- **Setting the diversion threshold purely to maximize the diversion rate**: an algorithm or policy tuned to maximize diversion without a matched safety constraint will trade patient safety for a better-looking efficiency number.
- **Blending diversion rate across all complaint types**: appropriate diversion rates differ hugely by presenting complaint; a single blended rate cannot show whether the tool is performing safely and effectively for the specific conditions that matter most clinically.

## Sources

- Agency for Healthcare Research and Quality (AHRQ), research on emergency department utilization and appropriate care-setting redirection
- NHS England, guidance on NHS 111 and digital urgent care triage safety and effectiveness standards
- Peer-reviewed literature on digital triage and virtual care ED diversion outcomes, for example studies published in Annals of Emergency Medicine and npj Digital Medicine

See also: [triage routing accuracy](../triage-routing-accuracy/), the broader accuracy metric this one is a specific, safety-critical subset of.
