# Rate o Emergency Department Diversion

The rate o emergency department (ED) diversion measures the share o patient contacts handlit bi a digital triage or virtual care tool that wid likely hae endit up as an ED visit wioot that intervention, but wur insteid safely managit throu a lawer-acuity pathway — self-care advice, a primary care appointment, or a bookit urgent care visit. It's a specific, high-value subset o triage routing accuracy (see that tapic) focussed entirely on avoidit emergency department uptak, which is the outcome maist straucht tied tae baith healthcare cost an ED capacity relief.

## Why it maitters

Emergency departments are amang the maist expensive care settings per encounter an are aften uised for problems that could be safely managit elsewhaur, sae a digital triage tool's ability tae safely redirect appropriate cases awa frae the ED is ane o its maist commercially an operationally valuable capabilities — an ane o the easiest tae pit across tae a payer or health system weighin up the tool's return on investment. But diversion is only worth onything if it's safe: a tool that aggressively diverts patients awa frae the ED at the cost o missin genuine emergencies haes optimised the wrang side o the trade-aff athegither, which is why the rate o ED diversion maun aye be reportit alangside a safety metric trackin missed or delayed emergency presentations amang diverted patients, no reportit on its ain as a pure efficiency win.

## Hoo it's caulculatit

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

## Warked example

A digital triage service assesses 3,000 patient contacts in a month that its clinical algorithm judges as potentially ED-bound absent intervention. O thae, 1,800 are redirectit tae a lawer-acuity pathway (a diversion rate o 60%). Follaein up the diverted cohort at 72 hours uisin linked health record data finds that 45 o the 1,800 diverted patients did efter that present tae an ED inside that window (a missed-emergency rate o 45 / 1,800 × 100 = 2.5%). Reportin the 60% diversion figure wioot the 2.5% missed-emergency rate wid gie only hauf o the safety-efficiency trade-aff that actually decides whether the tool's diversion behaviour is appropriately calibratit.

## Data sources an caveats

Confirmin that a diverted patient didnae efter need emergency care depends on linked data — either the same health system's ain ED records, a regional health information exchange, or a structurit patient follow-up caa or survey — an a diversion programme wirkin wioot ony o thae data sources canna actually validate its ain safety, only assume it based on naebody complainin. The appropriate diversion rate an acceptable missed-emergency rate are clinical policy decisions, no purely statistical anes, an shuid be set deliberately bi clinical leadership raither than left tae turn up as a side effect o whitever threshold a triage algorithm happens tae uise bi default. The rate o diversion shuid be reportit bi presentin symptom or complaint category, sin appropriate diversion rates vary enormously bi condition (a minor laceration versus chest pain need verra different diversion thresholds).

## Pitfalls

- **Reportin diversion rate wioot a linked missed-emergency safety metric**: a high diversion rate gotten bi under-triagin genuine emergencies isnae a success; the twa metrics maun aye be reportit thegither.
- **Assumin nae ED visit means the diversion wis safe**: a patient may present tae the ED o a different, unlinked hospital system, or may come tae genuine hairm wioot ever presentin tae ony ED; validate safety throu linked data or structurit follow-up, no the absence o a same-system ED visit alane.
- **Settin the diversion threshold purely tae maximise the diversion rate**: an algorithm or policy tunit tae maximise diversion wioot a matched safety constraint'll trade patient safety for a better-lookin efficiency nummer.
- **Blendin diversion rate athort aa complaint types**: appropriate diversion rates differ hugely bi presentin complaint; a single blendit rate canna shaw whether the tool is performin safely an effectively for the specific conditions that maitter maist clinically.

## Sources

- Agency for Healthcare Research and Quality (AHRQ), research on emergency department utilization and appropriate care-setting redirection
- NHS England, guidance on NHS 111 and digital urgent care triage safety and effectiveness standards
- Peer-reviewed literature on digital triage and virtual care ED diversion outcomes, for example studies published in Annals of Emergency Medicine and npj Digital Medicine

See also: [triage routing accuracy](../triage-routin-accuracy/), the braider accuracy metric this ane is a specific, safety-critical subset o.
