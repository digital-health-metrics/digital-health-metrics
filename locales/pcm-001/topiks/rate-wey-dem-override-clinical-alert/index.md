# Rate wey Dem Override Clinical Alert

Clinical alert override rate dey measure di share of clinical decision support (CDS) alerts, like drug-drug interaction warnings, allergy alerts, and dose-range checks wey computerized provider order entry (CPOE) system generate, wey clinician dismiss or override instead of to act on. Na di standard quantitative signal wey dem dey use to detect and manage "alert fatigue": di well-documented tendency of clinicians to become desensitized to alerts once di volume of low-value warnings don overwhelm dem.

## Why e matter

Published override rates for drug interaction alerts commonly range from roughly half to over ninety percent, and high rate no be automatic safety failure: many interruptive alerts dey fire for interactions wey no significant clinically for context, or dem dey repeat alert wey clinician don already act on earlier inside di same order set, so well-tuned system dey deliberately fire fewer, higher-value alerts instead of to try drive di override rate go zero. Wetin genuinely matter for safety na di trend over time, di distribution across severity tiers, and whether clinicians dey document reason when dem override high-severity alert; rising override rate on high-severity, well-evidenced interactions na real governance concern even when di average across all alerts look stable.

## How dem dey calculate am

```
Override rate = alerts overridden / total alerts fired × 100

Segment by:
  - severity tier (e.g. contraindicated, major, moderate)
  - alert type (drug-drug interaction, allergy, duplicate therapy, dose range)
  - whether an override reason was documented

A "documented override rate" tracks the share of overrides that carry a
recorded justification, which is a governance measure in its own right.
```

## Worked example

One hospital CPOE system fire 10,000 drug-drug interaction alerts inside one month, and dem override 8,700 of dem, wey give overall override rate of 87%. If dem segment by severity, dem go see say out of 500 "contraindicated" alerts, dem override 60 (12%), while out of 6,000 "moderate" alerts, dem override 5,700 (95%). Di moderate-tier figure dey broadly consistent with published benchmarks and e no be, by itself, cause for concern; di contraindicated-tier figure need individual case review, and di fact say only 340 of di 500 overrides for dat tier carry documented reason na di more actionable governance finding.

## Data sources and caveats

Di electronic health record audit log, or di CDS vendor own alerting module, dey record each alert-fired and alert-response event, including whether clinician enter free-text or structured justification. To compare override rates between organizations, or even between departments inside di same organization, require to check say di underlying alert rule sets and severity tiering na di same; hospital wey get aggressively tuned rule set go show lower override rate for reasons wey no get anything to do with clinician behaviour.

## Pitfalls

- **To treat di raw override rate as one single safety score**: e dey mix well-justified overrides of low-value alerts with unsafe overrides of genuinely dangerous interactions; always segment by severity.
- **No override-reason capture**: without documented reason, e impossible to know di difference between "dis alert wrong" and "dis alert correct and clinician make unsafe judgement call", wey be di actual distinction wey matter for patient safety.
- **Alert-rule inflation over time**: to add more alerts to "be safe" without to prune low-value ones na di direct cause of rising override rates and alert fatigue; alert governance suppose include regular review and retirement of poorly performing rules, no be only monitoring.
- **To compare rates across systems wey get different interruption design**: interruptive, hard-stop alert dey produce different override behaviour from passive, non-blocking one, so di two no be directly comparable metrics.

## Sources

- Peer-reviewed literature on clinical decision support alert fatigue, widely published in journals including JAMIA and npj Digital Medicine
- ONC / HealthIT.gov, health IT safety guidance on clinical decision support
- Institute for Safe Medication Practices (ISMP), guidance on CDS alert design and governance
