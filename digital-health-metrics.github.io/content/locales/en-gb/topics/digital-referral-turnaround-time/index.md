# Digital Referral Turnaround Time

Digital referral turnaround time is the elapsed time from an electronic referral being submitted by a referring clinician to it being triaged and either accepted, rejected, or booked by the receiving service. It is a process (flow) metric, distinct from total patient waiting time, and it is one of the clearest places where a digital system change (structured e-referral, image-based triage, standardised referral forms) can be shown to move an operational number rather than merely a satisfaction score.

## Why it matters

A slow or highly variable triage step adds delay before a patient even joins a clinical waiting list, and because that delay happens before any clinical care starts, it is pure process waste that digital tooling is well placed to remove. Referral systems that force a "return to referrer" cycle for missing information create rework loops that are easy to miss if turnaround time is only measured on referrals that pass through cleanly the first time. Where a service has introduced structured digital referral forms, mandatory fields, or image-based triage (for example in teledermatology), turnaround time is usually the single most persuasive metric for demonstrating the benefit, because it is measurable before and after the change with the same instrumentation.

## How it's calculated

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

An e-referral system's audit trail shows a median time from submission to triage decision of 1.8 days across all specialties, with a 90th-percentile time of 6 days, driven mainly by referrals that are returned to the referrer for missing clinical information. A teledermatology pathway using image-based triage on the same platform achieves a median turnaround of 4 hours and a 90th percentile of 1 day, because a photograph and structured history are almost always sufficient for the triage decision without needing further correspondence.

## Data sources and caveats

The e-referral or referral management system's own audit trail is the primary source, using submission and decision timestamps; organisations should confirm whether the "clock" pauses while a referral is returned for more information or runs continuously, since the two definitions produce materially different figures for the same underlying process. Turnaround time should be reported in calendar time or business-hours time consistently, since weekend and holiday effects can otherwise distort comparisons between services with different working patterns.

## Pitfalls

- **Measuring only "clean" referrals**: excluding rejected or returned referrals from the calculation hides the rework burden that digital tooling is often specifically meant to reduce.
- **Reporting the mean instead of the median and percentiles**: a small number of long-running, returned referrals will pull the mean far above the typical patient's actual experience.
- **Confusing turnaround time with total wait time**: turnaround time covers only the triage step; the patient's total experience also includes the downstream clinical waiting list, which is a separate metric governed by separate capacity constraints.
- **Not distinguishing sub-stages**: a service that only measures end-to-end time cannot tell whether a slow figure is caused by referrers submitting incomplete information, by the receiving service's triage capacity, or by both.

## Sources

- NHS England, e-Referral Service (e-RS) statistics and service specifications
- Peer-reviewed literature on electronic referral management systems and digital triage pathways, including teledermatology
- ONC / HealthIT.gov, interoperability and referral coordination guidance
