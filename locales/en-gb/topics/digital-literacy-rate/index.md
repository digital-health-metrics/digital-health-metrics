# Digital Literacy Rate

Digital literacy rate measures the share of a patient population able to independently and successfully complete common tasks on a digital health platform — logging in, scheduling an appointment, joining a video visit, or reading a test result — without requiring assistance from another person. It is distinct from, and should always be measured separately from, digital access rate: a patient can have a smartphone and broadband connection and still be unable to navigate a telehealth platform unaided, and conflating the two metrics hides exactly the population this metric exists to surface.

## Why it matters

Digital access alone does not guarantee a patient can use a digital health service effectively: patients with lower health literacy, limited experience with technology generally, cognitive or visual impairment, or language barriers with the platform's interface can have full technical access and still fail to complete a task independently, and this gap is systematically correlated with the same demographic groups that already face other health disparities. The HIMSS Digital Health Equity Measurement Framework treats digital literacy as a distinct pillar from access for exactly this reason: closing an access gap without also addressing a literacy gap can leave a population technically connected but functionally unable to benefit. Organisations that measure task completion and time-to-completion for common platform actions, segmented by language and socioeconomic indicators, are able to identify literacy barriers and target support (simplified interfaces, assisted onboarding, alternative-language content) far more precisely than organisations relying on access metrics or overall satisfaction scores alone.

## How it's calculated

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

A health system tracks video-visit joining as a defined task across 5,000 scheduled telehealth appointments in a month. Of these, 4,100 patients join successfully without any support call or in-visit technical assistance (digital literacy rate for this task: 82%). Segmenting by primary language shows a rate of 89% for English-speaking patients versus 61% for patients whose primary language differs from the platform's default interface language — a 28-point gap that would be invisible if only the blended 82% figure were reported, and one that points directly toward a specific, addressable intervention (translated interface and instructions) rather than a vague general literacy problem.

## Data sources and caveats

Task completion data is typically captured from the platform's own event logs (did the patient reach the video visit, did the appointment-scheduling flow complete without abandonment), supplemented by support-call or help-desk contact data to identify tasks that technically "completed" only because the patient received live assistance partway through. A task counted as "completed" purely from system logs can mask that a patient needed a phone call from a family member or support staff to get there — a genuinely literacy-independent completion should be defined and tracked separately from an assisted one wherever the platform can distinguish the two. Digital literacy correlates with, but is analytically distinct from, health literacy and general literacy; a validated instrument (rather than an informal assumption based on age or demographics alone) should be used wherever a formal assessment is required.

## Pitfalls

- **Conflating digital literacy with digital access**: a patient with full technical access can still lack the literacy to use it effectively; these are separate metrics requiring separate interventions, and should never be reported as a single combined figure.
- **Counting assisted completions as unaided successes**: if a patient only completes a task with a support call or a family member's help, that is a literacy gap the platform has papered over, not solved; distinguish assisted from unaided completion wherever data allows.
- **Reporting a single blended task-completion score**: literacy for a simple task (logging in) and a complex one (completing a detailed intake form) differ substantially; report per task to identify exactly where the barrier lies.
- **Assuming age alone predicts digital literacy**: while age correlates with lower digital literacy in aggregate, language proficiency in the platform's interface language and general technology familiarity are often stronger individual predictors and should be measured directly rather than inferred from age.

## Sources

- HIMSS, Digital Health Equity Measurement Framework (DHEMF)
- Office of the National Coordinator for Health Information Technology (ONC), research on health information technology usability and digital health literacy
- Peer-reviewed literature on digital health literacy measurement and intervention, for example studies published in the Journal of Medical Internet Research (JMIR)

See also: [digital access rate](../digital-access-rate/), the precondition metric this one is most commonly, and most commonly wrongly, conflated with.
