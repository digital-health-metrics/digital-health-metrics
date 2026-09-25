# Appointment No-Show Rate

Appointment no-show rate (also called "did not attend", or DNA, rate) is the share of scheduled appointments where the patient neither attended nor cancelled with reasonable notice. It is one of the oldest operational metrics in healthcare, and digital tools, particularly reminders, self-service rescheduling, and portal-based booking, are now among the most effective and best-evidenced levers for reducing it.

## Why it matters

Every no-show is a unit of clinical capacity that cannot usually be recovered, since most services cannot fill a same-day gap on short notice, so the rate directly drives waiting-list length, cost per completed appointment, and clinician time lost. No-show behaviour is not evenly distributed: it correlates with deprivation, transport access, caring responsibilities, and the burden of managing multiple long-term conditions, so treating a high rate purely as a patient behaviour problem, rather than partly as a signal about access barriers, tends to produce interventions (such as blanket penalties) that entrench inequity rather than reduce it. Digital reminders and easy digital rescheduling are consistently among the most effective, low-cost interventions available, which is why this metric belongs squarely in a digital health measurement programme rather than only in operational reporting.

## How it's calculated

```
No-show rate = appointments marked "did not attend" / total scheduled appointments × 100
```

A scheduled appointment is typically excluded from the denominator, or moved to a separate category, if it was cancelled by either party with more than a defined notice period (commonly 24 hours). Late cancellations (below that notice period) are usually reported separately from true no-shows, since the operational and behavioural implications differ.

## Worked example

A community clinic schedules 2,000 appointments in a month. Of these, 140 are cancelled with more than 24 hours' notice (rebooked and excluded from the denominator), 60 are cancelled late (under 24 hours), and 180 are recorded as a true no-show with no contact at all. The no-show rate is 180 / 2,000 × 100 = 9%. If the 60 late cancellations were folded into the same category as true no-shows, the reported rate would rise to 12%, which is why the definition used must always be stated alongside the figure.

## Data sources and caveats

The scheduling or practice management system is the primary source, using its appointment status codes; the quality of the metric depends entirely on staff consistently using the correct status rather than a generic "cancelled" bucket for everything. Organisations that introduce digital reminders (SMS, app push notification, or portal alerts) should measure the no-show rate before and after the change for a comparable patient and service mix, since reminder effectiveness is well documented in randomised and observational studies but varies by population and channel.

## Pitfalls

- **Comparing raw rates across clinics with different overbooking practices**: a clinic that deliberately overbooks to compensate for an expected no-show rate will show a different apparent rate than one that does not, independent of true patient behaviour.
- **Conflating late cancellations with true no-shows**: the two have different causes and different digital fixes (a late-cancellation problem is often solved by easier self-service rescheduling; a true no-show problem is often solved by better reminders and contact accuracy).
- **Survivorship bias from discharge policies**: services that discharge patients after repeated no-shows will see their own rate improve mechanically, while simply displacing the same patients elsewhere in the system.
- **Blaming digital exclusion on the patient**: a patient without a smartphone or reliable text service will not benefit from a digital-only reminder strategy, so a multi-channel approach (letter, call, text, app) is usually needed to avoid widening access gaps.

## Sources

- NHS England, missed appointments in general practice and outpatient care, published statistics and guidance
- Cochrane systematic reviews on interventions to reduce missed healthcare appointments, including reminder systems
- Peer-reviewed literature on socioeconomic and demographic correlates of appointment non-attendance

See also: [telehealth visit rate](../telehealth-visit-rate/), since no-show behaviour commonly differs by consultation modality, and [patient portal adoption rate](../patient-portal-adoption-rate/), since portal-based self-scheduling and reminders are a primary digital intervention.
