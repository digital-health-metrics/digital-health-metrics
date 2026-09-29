# RE-AIM Framework

RE-AIM is a public health evaluation framework that assesses a digital health intervention across five distinct dimensions — Reach, Effectiveness, Adoption, Implementation, and Maintenance — rather than through any single metric. It exists to correct a specific, common failure mode in digital health evaluation: a programme that reports impressive effectiveness data from a small, motivated pilot population while never being adopted at scale, or never sustained past its funded pilot period, has not actually demonstrated public health value, however good its headline outcome numbers look in isolation.

## Why it matters

Digital health pilots are frequently evaluated on effectiveness alone — did the outcome measure improve for the people who used it — while leaving the other four dimensions unmeasured or unreported, which systematically biases the evidence base toward interventions that work well in ideal, small-scale conditions but say nothing about whether they work at scale, reach the population that most needs them, or survive beyond their initial funding and enthusiasm. RE-AIM was developed specifically to force evaluators to report on external validity (would this work elsewhere, for whom) alongside internal validity (did this work here), which matters enormously for anyone deciding whether to fund, commission, or scale a digital health intervention based on a single study or pilot's results. Because each of the five dimensions can be measured at both the individual and organizational or setting level, RE-AIM also surfaces trade-offs — for example, a highly effective intervention delivered by highly selected, highly trained staff (strong effectiveness, weak adoption representativeness) — that a single combined metric would hide entirely.

## How it's applied

```
Reach          = proportion of the eligible target population who
                  participate, and how representative participants are
                  of that eligible population (not just raw
                  participant count)

Effectiveness  = impact on primary outcomes, including quality-of-life
                  and unintended negative consequences, not only the
                  single headline outcome measure

Adoption       = proportion and representativeness of settings and
                  staff/delivery agents who adopt the intervention,
                  relative to all eligible settings and staff

Implementation = consistency and fidelity of delivery as intended,
                  time and cost required to deliver it, and adaptations
                  made along the way

Maintenance    = extent to which the intervention becomes part of
                  routine practice long-term, at both the individual
                  (sustained individual-level effects) and
                  setting/organizational (institutionalization) level
```

## Worked example

A digital diabetes prevention programme is piloted across 20 primary care clinics in a region with 200 eligible clinics total. Reach is assessed as 1,200 of an estimated 15,000 eligible patients across the 20 pilot clinics (8%), with participants found to be somewhat younger and more digitally literate than the full eligible population — a representativeness gap worth noting rather than ignoring. Effectiveness shows a clinically meaningful reduction in mean HbA1c among completers, but a high dropout rate means this effect is diluted when assessed on an intention-to-treat basis across all enrolled patients, not just completers. Adoption is 20 of 200 eligible clinics (10%), concentrated in clinics with above-average existing digital infrastructure — again, a representativeness concern. Implementation fidelity assessment finds most clinics delivered the programme largely as designed, though two clinics substantially shortened the onboarding process under time pressure. Maintenance assessment one year after pilot funding ended finds only 6 of the original 20 clinics still actively running the programme — a result that, reported alongside the initially promising effectiveness figure, gives a much more complete and honest picture of the programme's real-world prospects than effectiveness data alone would have.

## Data sources and caveats

Each RE-AIM dimension typically draws on a different data source: Reach and Adoption from enrolment and eligibility records, Effectiveness from clinical or outcome data (often the same data already used to calculate a specific metric elsewhere in this book, such as biometric improvement rate), Implementation from fidelity checklists, delivery logs, or direct observation, and Maintenance from a follow-up assessment conducted well after the initial evaluation period — meaning a full RE-AIM assessment cannot be completed at a single point in time and requires evaluation to be planned for from the outset, not added retrospectively. Because reporting all five dimensions honestly (including weak results on some) is more work and less flattering than reporting only effectiveness, published digital health evaluations disproportionately under-report Reach, Adoption, and Maintenance compared with Effectiveness — a known publication-bias pattern that anyone using RE-AIM-labelled evidence to inform a decision should watch for.

## Pitfalls

- **Reporting effectiveness only and calling it a RE-AIM evaluation**: using the RE-AIM name while reporting only one of its five dimensions defeats the framework's purpose and should not be described as a RE-AIM assessment.
- **Measuring Reach and Adoption as raw counts rather than proportions of the eligible population**: a large raw participant count can still represent a small, unrepresentative fraction of who the intervention should ideally reach; always calculate against the full eligible denominator.
- **Assessing Maintenance too early**: institutionalization and sustained effect can only be judged well after initial funding or novelty effects fade; an assessment taken immediately after a pilot ends cannot speak to Maintenance regardless of how the other four dimensions look.
- **Treating the five dimensions as equally weighted or combinable into one score**: RE-AIM is deliberately a multi-dimensional profile, not a single number; combining the dimensions into one composite score discards exactly the trade-off visibility the framework is designed to preserve.

## Sources

- Glasgow, Vogt, and Boles, "Evaluating the public health impact of health promotion interventions: the RE-AIM framework", American Journal of Public Health, the original published framework
- RE-AIM.org, the framework's maintained public resource for measures, planning tools, and published applications
- Peer-reviewed literature applying RE-AIM to digital health interventions specifically, for example studies published in the Journal of Medical Internet Research (JMIR) and Translational Behavioral Medicine

See also: [digital access rate](../digital-access-rate/) and [user retention rate](../user-retention-rate/), two of this book's metrics that map closely onto RE-AIM's Reach and Maintenance dimensions respectively.
