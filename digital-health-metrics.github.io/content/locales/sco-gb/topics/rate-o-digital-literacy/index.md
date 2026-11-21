# Rate o Digital Literacy

The rate o digital literacy measures the share o a patient population that can independently an successfully complete common tasks on a digital health platform — loggin in, bookin an appointment, joinin a video visit, or readin a test result — wioot needin help frae anither person. It's no the same as, an shuid aye be measured separately frae, the rate o digital access: a patient can hae a smartphone an a broadband connection an still be unable tae find their wey roond a telehealth platform unaided, an mixin the twa metrics up hides exactly the population this metric is there tae bring tae licht.

## Why it maitters

Digital access alane disnae guarantee that a patient can uise a digital health service effectively: patients wi lawer health literacy, limitit experience o technology in general, cognitive or visual impairment, or language barriers wi the platform's interface can hae full technical access an still fail tae complete a task on their ain, an this gap is systematically linked tae the same demographic groups that aareadies face ither health disparities. The HIMSS Digital Health Equity Measurement Framework treats digital literacy as a pillar separate frae access for exactly this reason: closin an access gap wioot an aa tacklin a literacy gap can leave a population technically connectit but functionally unable tae benefit. Organizations that measure task completion an time-tae-completion for common platform actions, segmentit bi language an socioeconomic indicators, can spot literacy barriers an target support (simplifiet interfaces, assistit onboardin, content in ither languages) faur mair precisely than organizations relyin on access metrics or owerall satisfaction scores alane.

## Hoo it's caulculatit

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

## Warked example

A health system tracks video-visit joinin as a defined task athort 5,000 scheduled telehealth appointments in a month. O thae, 4,100 patients join successfully wioot ony support caa or in-visit technical help (digital literacy rate for this task: 82%). Segmentin bi main language shaws a rate o 89% for English-speakin patients versus 61% for patients whase main language differs frae the platform's default interface language — a 28-pynt gap that wid be invisible if only the blendit 82% figure wur reportit, an ane that pynts straucht tae a specific, fixable intervention (translatit interface an instructions) raither than a vague general literacy problem.

## Data sources an caveats

Task completion data is typically capturit frae the platform's ain event logs (did the patient reach the video visit, did the appointment-bookin flow finish wioot bein abandoned), supplementit wi support-caa or help-desk contact data tae spot tasks that technically "completit" only because the patient got live help pairt-wey throu. A task coontit as "completit" juist frae system logs can hide that a patient needit a phone caa frae a faimily member or support staff tae get there — a completion that's genuinely literacy-independent shuid be defined an trackit separately frae an assistit ane whaurever the platform can tell them apairt. Digital literacy links wi, but is analytically separate frae, health literacy an general literacy; a validatit instrument (raither than an informal assumption based on age or demographics alane) shuid be uised whaurever a formal assessment is required.

## Pitfalls

- **Mixin digital literacy up wi digital access**: a patient wi full technical access can still lack the literacy tae uise it effectively; thae are separate metrics needin separate interventions, an shuid niver be reportit as a single combined figure.
- **Coontin assistit completions as unaidit successes**: if a patient only completes a task wi a support caa or a faimily member's help, that's a literacy gap the platform haes papered ower, no solvit; tell assistit frae unaidit completion whaurever the data allous.
- **Reportin a single blendit task-completion score**: literacy for a simple task (loggin in) an a complex ane (completin a detailed intake form) differ a lot; report per task tae find exactly whaur the barrier lies.
- **Assumin age alane predicts digital literacy**: while age links wi lawer digital literacy in aggregate, language proficiency in the platform's interface language an general technology familiarity are aften stronger individual predictors an shuid be measured directly raither than workit oot frae age.

## Sources

- HIMSS, Digital Health Equity Measurement Framework (DHEMF)
- Office of the National Coordinator for Health Information Technology (ONC), research on health information technology usability and digital health literacy
- Peer-reviewed literature on digital health literacy measurement and intervention, for example studies published in the Journal of Medical Internet Research (JMIR)

See also: [rate o digital access](../rate-o-digital-access/), the precondition metric this ane is maist commonly, an maist commonly wrangly, mixed up wi.
