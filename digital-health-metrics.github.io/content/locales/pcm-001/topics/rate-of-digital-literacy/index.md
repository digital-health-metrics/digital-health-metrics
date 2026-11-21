# Rate of Digital Literacy

Digital literacy rate dey measure di share of patient population wey fit independently and successfully complete common tasks for digital health platform — to log in, schedule appointment, join video visit, or read test result — without to need help from another person. E different from, and dem suppose always measure am separate from, digital access rate: patient fit get smartphone and broadband connection and still no fit navigate telehealth platform unaided, and to mix di two metrics dey hide exactly di population wey dis metric dey exist to surface.

## Why e matter

Digital access alone no guarantee say patient fit use digital health service effectively: patients wey get lower health literacy, limited experience with technology generally, cognitive or visual impairment, or language barriers with di platform interface fit get full technical access and still fail to complete task independently, and dis gap dey systematically correlate with di same demographic groups wey already face other health disparities. Di HIMSS Digital Health Equity Measurement Framework dey treat digital literacy as distinct pillar from access for exactly dis reason: to close access gap without to also address literacy gap fit leave population technically connected but functionally unable to benefit. Organizations wey measure task completion and time-to-completion for common platform actions, segmented by language and socioeconomic indicators, fit identify literacy barriers and target support (simplified interfaces, assisted onboarding, alternative-language content) far more precisely than organizations wey rely on access metrics or overall satisfaction scores alone.

## How dem dey calculate am

```
Digital literacy rate = patients who independently complete a defined
                         task without assistance / patients who attempt
                         that task × 100

Common tasks measured: account login, appointment scheduling, joining
a video visit, viewing a test result, completing an intake form.

Report per task, not as a single blended score, since literacy for
simple tasks (login) and complex tasks (completing a multi-step intake
form) differ substantially and blending them obscures where the
specific barrier lies.
```

## Worked example

One health system dey track video-visit joining as defined task across 5,000 scheduled telehealth appointments for one month. Out of dem, 4,100 patients join successfully without any support call or in-visit technical assistance (digital literacy rate for dis task: 82%). If dem segment by primary language, e show rate of 89% for English-speaking patients versus 61% for patients wey dia primary language different from di platform default interface language — 28-point gap wey for invisible if dem report only di blended 82% figure, and one wey point directly toward specific, addressable intervention (translated interface and instructions) instead of vague general literacy problem.

## Data sources and caveats

Dem dey typically capture task completion data from di platform own event logs (di patient reach di video visit, di appointment-scheduling flow complete without abandonment), and dem dey supplement am with support-call or help-desk contact data to identify tasks wey technically "complete" only because di patient receive live assistance for middle. Task wey dem count as "completed" purely from system logs fit hide say patient need phone call from family member or support staff to reach dia — dem suppose define and track genuinely literacy-independent completion separate from assisted one wherever di platform fit distinguish di two. Digital literacy dey correlate with, but e analytically distinct from, health literacy and general literacy; dem suppose use validated instrument (instead of informal assumption wey base on age or demographics alone) wherever formal assessment dey required.

## Pitfalls

- **To mix digital literacy with digital access**: patient wey get full technical access fit still lack di literacy to use am effectively; dis na separate metrics wey need separate interventions, and dem no suppose ever report dem as one single combined figure.
- **To count assisted completions as unaided successes**: if patient only complete task with support call or family member help, na literacy gap wey di platform don cover up, e no solve am; distinguish assisted from unaided completion wherever data allow.
- **To report one single blended task-completion score**: literacy for simple task (to log in) and complex one (to complete detailed intake form) dey differ substantially; report per task to identify exactly where di barrier dey.
- **To assume say age alone dey predict digital literacy**: even though age dey correlate with lower digital literacy for aggregate, language proficiency for di platform interface language and general technology familiarity dey often be stronger individual predictors and dem suppose measure dem directly instead of to infer from age.

## Sources

- HIMSS, Digital Health Equity Measurement Framework (DHEMF)
- Office of the National Coordinator for Health Information Technology (ONC), research on health information technology usability and digital health literacy
- Peer-reviewed literature on digital health literacy measurement and intervention, for example studies published in the Journal of Medical Internet Research (JMIR)

See also: [digital access rate](../rate-of-digital-access/), di precondition metric wey dem most commonly, and most commonly wrongly, mix with dis one.
