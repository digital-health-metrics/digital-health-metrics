# Digital Referral Turnaround Time

Digital referral turnaround time is the time that passes frae an electronic referral bein submittit bi a referrin clinician tae it bein triaged an either acceptit, rejectit, or bookit bi the receivin service. It's a process (flow) metric, no the same as total patient waitin time, an it's ane o the clearest places whaur a digital system chynge (structurit e-referral, image-based triage, standardised referral forms) can be shawn tae shift an operational nummer raither than juist a satisfaction score.

## Why it maitters

A slaw or gey variable triage step adds delay afore a patient even joins a clinical waitin list, an because that delay happens afore ony clinical care stairts, it's pure process waste that digital tools are weel placed tae tak awa. Referral systems that force a "return tae referrer" cycle for missin information mak rework loops that are easy tae miss if turnaround time is only measured on referrals that gang throu clean the first time. Whaur a service haes brocht in structurit digital referral forms, mandatory fields, or image-based triage (for example in teledermatology), turnaround time is usually the single maist persuasive metric for shawin the benefit, because it can be measured afore an efter the chynge wi the same instrumentation.

## Hoo it's caulculatit

```
Turnaround time = timestamp(triage decision) − timestamp(referral submission)

Report median and a high percentile (commonly the 90th), not only the mean,
because the distribution is heavily right-skewed by returned or complex
referrals.

Consider sub-stage timings where the system captures them:
  Submission → received by service
  Received → triage decision
  Triage decision → booked appointment (where relevant)
```

## Warked example

An e-referral system's audit trail shaws a median time frae submission tae triage decision o 1.8 days athort aa specialties, wi a 90th-percentile time o 6 days, driven mainly bi referrals that are returnit tae the referrer for missin clinical information. A teledermatology pathway uisin image-based triage on the same platform gets a median turnaround o 4 hours an a 90th percentile o 1 day, because a photograph an structurit history are near aye enough for the triage decision wioot needin ony mair correspondence.

## Data sources an caveats

The e-referral or referral management system's ain audit trail is the main source, uisin submission an decision timestamps; organizations shuid confirm whether the "clock" pauses while a referral is returnit for mair information or rins on throu, sin the twa definitions gie muckle different figures for the same underlyin process. Turnaround time shuid be reportit in calendar time or business-hours time consistently, sin weekend an holiday effects can itherwise skew comparisons atween services wi different warkin patterns.

## Pitfalls

- **Measurin only "clean" referrals**: leavin rejectit or returnit referrals oot o the caulculation hides the rework burden that digital tools are aften meant specifically tae cut.
- **Reportin the mean insteid o the median an percentiles**: a wheen o lang-rinnin, returnit referrals'll pu the mean faur abune the typical patient's actual experience.
- **Mixin turnaround time up wi total wait time**: turnaround time covers only the triage step; the patient's total experience an aa includes the doonstream clinical waitin list, which is a separate metric governed bi separate capacity constraints.
- **No tellin sub-stages apairt**: a service that only measures end-tae-end time canna tell whether a slaw figure is caused bi referrers submittin incomplete information, bi the receivin service's triage capacity, or bi baith.

## Sources

- NHS England, e-Referral Service (e-RS) statistics and service specifications
- Peer-reviewed literature on electronic referral management systems and digital triage pathways, including teledermatology
- ONC / HealthIT.gov, interoperability and referral coordination guidance
