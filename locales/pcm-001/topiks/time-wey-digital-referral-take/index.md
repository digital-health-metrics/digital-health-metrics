# Time wey Digital Referral Take

Digital referral turnaround time na di elapsed time from di moment referring clinician submit electronic referral till di receiving service triage am and either accept, reject, or book am. Na process (flow) metric, different from total patient waiting time, and na one of di clearest places where digital system change (structured e-referral, image-based triage, standardized referral forms) fit show say e move operational number instead of just satisfaction score.

## Why e matter

Slow or highly variable triage step dey add delay before patient even join clinical waiting list, and because dat delay dey happen before any clinical care start, na pure process waste wey digital tooling dey well placed to remove. Referral systems wey force "return to referrer" cycle for missing information dey create rework loops wey easy to miss if dem measure turnaround time only on referrals wey pass through clean for di first time. Where service don introduce structured digital referral forms, mandatory fields, or image-based triage (for example for teledermatology), turnaround time na usually di single most persuasive metric to demonstrate di benefit, because dem fit measure am before and after di change with di same instrumentation.

## How dem dey calculate am

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

## Worked example

One e-referral system audit trail show median time from submission go triage decision of 1.8 days across all specialties, with 90th-percentile time of 6 days, wey come mainly from referrals wey dem return to di referrer for missing clinical information. One teledermatology pathway wey use image-based triage for di same platform achieve median turnaround of 4 hours and 90th percentile of 1 day, because photograph and structured history almost always dey enough for di triage decision without need for further correspondence.

## Data sources and caveats

Di e-referral or referral management system own audit trail na di primary source, using submission and decision timestamps; organizations suppose confirm whether di "clock" dey pause while dem return referral for more information or e dey run continuously, because di two definitions dey produce materially different figures for di same underlying process. Dem suppose report turnaround time consistently for calendar time or business-hours time, because weekend and holiday effects fit otherwise distort comparisons between services wey get different working patterns.

## Pitfalls

- **To measure only "clean" referrals**: to exclude rejected or returned referrals from di calculation dey hide di rework burden wey digital tooling often dey specifically mean to reduce.
- **To report di mean instead of di median and percentiles**: small number of long-running, returned referrals go pull di mean far above di typical patient actual experience.
- **To confuse turnaround time with total wait time**: turnaround time cover only di triage step; di patient total experience also include di downstream clinical waiting list, wey be separate metric wey separate capacity constraints dey govern.
- **To no distinguish sub-stages**: service wey only measure end-to-end time no fit tell whether slow figure come from referrers wey submit incomplete information, from di receiving service triage capacity, or from both.

## Sources

- NHS England, e-Referral Service (e-RS) statistics and service specifications
- Peer-reviewed literature on electronic referral management systems and digital triage pathways, including teledermatology
- ONC / HealthIT.gov, interoperability and referral coordination guidance
