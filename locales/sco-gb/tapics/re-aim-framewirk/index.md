# RE-AIM Framewirk

RE-AIM is a public health evaluation framewirk that assesses a digital health intervention athort five distinct dimensions — Reach, Effectiveness, Adoption, Implementation, an Maintenance — raither than throu ony single metric. It's there tae correct a specific, common failure mode in digital health evaluation: a programme that reports impressive effectiveness data frae a sma, motivatit pilot population while niver bein adoptit at scale, or niver sustainit past its fundit pilot period, haesnae actually shawn public health value, hooever guid its headline outcome nummers look on their ain.

## Why it maitters

Digital health pilots are aften evaluatit on effectiveness alane — did the outcome measure improve for the fowk that uised it — while leavin the ither fower dimensions unmeasured or unreportit, which systematically biases the evidence base taewards interventions that wirk weel in ideal, sma-scale conditions but say naething aboot whether they wirk at scale, reach the population that maist needs them, or survive ayont their initial fundin an enthusiasm. RE-AIM wis developit specifically tae force evaluators tae report on external validity (wid this wirk elsewhaur, for wha) alangside internal validity (did this wirk here), which maitters enormously for onybody decidin whether tae fund, commission, or scale a digital health intervention based on a single study or pilot's results. Because ilka ane o the five dimensions can be measured at baith the individual an the organizational or setting level, RE-AIM an aa brings oot trade-affs — for example, a highly effective intervention delivert bi highly selectit, highly trained staff (strang effectiveness, weak adoption representativeness) — that a single combined metric wid hide entirely.

## Hoo it's applied

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

## Warked example

A digital diabetes prevention programme is pilotit athort 20 primary care clinics in a region wi 200 eligible clinics in aa. Reach is assessit as 1,200 o an estimatit 15,000 eligible patients athort the 20 pilot clinics (8%), wi participants foond tae be a wee bit younger an mair digitally literate than the full eligible population — a representativeness gap worth notin raither than ignorin. Effectiveness shaws a clinically meaningfu reduction in mean HbA1c amang completers, but a high dropoot rate means this effect is dilutit when assessit on an intention-tae-treat basis athort aa enrolled patients, no juist completers. Adoption is 20 o 200 eligible clinics (10%), concentratit in clinics wi abune-average existin digital infrastructure — again, a representativeness concern. Implementation fidelity assessment finds maist clinics delivert the programme lairgely as designit, though twa clinics muckle shortened the onboardin process unner time pressure. Maintenance assessment a year efter pilot fundin endit finds only 6 o the original 20 clinics still actively rinnin the programme — a result that, reportit alangside the initially promisin effectiveness figure, gies a muckle mair complete an honest picture o the programme's real-warld prospects than effectiveness data alane wid hae duin.

## Data sources an caveats

Ilka RE-AIM dimension typically draws on a different data source: Reach an Adoption frae enrolment an eligibility records, Effectiveness frae clinical or outcome data (aften the same data aareadies uised tae caulculate a specific metric elsewhaur in this beuk, sic as rate o biometric betterment), Implementation frae fidelity checklists, delivery logs, or direct observation, an Maintenance frae a follow-up assessment cairriet oot weel efter the initial evaluation period — meanin a full RE-AIM assessment canna be completit at a single pynt in time an needs evaluation tae be plannit for frae the stairt, no addit retrospectively. Because reportin aa five dimensions honestly (includin weak results on some) is mair wark an less flatterin than reportin only effectiveness, publisht digital health evaluations disproportionately under-report Reach, Adoption, an Maintenance compared wi Effectiveness — a kent publication-bias pattern that onybody uisin RE-AIM-labelled evidence tae inform a decision shuid watch for.

## Pitfalls

- **Reportin effectiveness only an cryin it a RE-AIM evaluation**: uisin the RE-AIM name while reportin only ane o its five dimensions defeats the framewirk's purpose an shuidnae be described as a RE-AIM assessment.
- **Measurin Reach an Adoption as raw coonts raither than proportions o the eligible population**: a muckle raw participant coont can still represent a sma, unrepresentative fraction o wha the intervention shuid ideally reach; aye caulculate again the full eligible denominator.
- **Assessin Maintenance ower early**: institutionalization an sustainit effect can only be judged weel efter initial fundin or novelty effects fade; an assessment taen richt efter a pilot ends canna speak tae Maintenance nae maitter hoo the ither fower dimensions look.
- **Takkin the five dimensions as equally weichtit or combinable intae ae score**: RE-AIM is deliberately a multi-dimensional profile, no a single nummer; combinin the dimensions intae ae composite score throws awa exactly the trade-aff veesibility the framewirk is designit tae keep.

## Sources

- Glasgow, Vogt, and Boles, "Evaluating the public health impact of health promotion interventions: the RE-AIM framework", American Journal of Public Health, the original published framework
- RE-AIM.org, the framework's maintained public resource for measures, planning tools, and published applications
- Peer-reviewed literature applying RE-AIM to digital health interventions specifically, for example studies published in the Journal of Medical Internet Research (JMIR) and Translational Behavioral Medicine

See also: [rate o digital access](../rate-o-digital-access/) an [rate o user retention](../rate-o-user-retention/), twa o this beuk's metrics that map closely ontae RE-AIM's Reach an Maintenance dimensions respectively.
