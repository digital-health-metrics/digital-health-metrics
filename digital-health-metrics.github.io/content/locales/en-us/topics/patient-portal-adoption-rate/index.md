# Patient Portal Adoption Rate

Patient portal adoption rate measures the share of eligible patients who have registered for, and actively use, an online patient portal (for example NHS App, Patient Access, or an EHR-tethered portal such as MyChart) to view records, book appointments, or message their care team. It is the entry-level indicator of digital engagement: a patient who has never activated an account cannot benefit from any downstream digital service built on the portal.

## Why it matters

A portal only creates value once a patient uses it, so organizations should track adoption as a funnel rather than a single number: registration, activation (first meaningful action), and active use (use within a trailing window) are three different rates that get conflated far too often. Digital services teams are frequently under pressure to report a single, favorable headline figure, and it takes discipline to insist on the harder, more honest breakdown. Low or unevenly distributed adoption is also an equity signal: patients who are older, have lower digital literacy, do not speak the majority language, or lack reliable broadband or a smartphone are systematically less likely to be counted in the numerator, so a rising average adoption rate can mask a widening gap for the patients who often need contact with services the most.

## How it's calculated

Report all three stages, not just registration, and always state the denominator explicitly:

```
Registration rate = patients with a portal account created / eligible patient population × 100
Activation rate   = patients who completed a first meaningful action (viewed a result,
                     booked a slot, sent a message) / patients with an account × 100
Active-use rate   = patients who logged in at least once in the trailing 12 months /
                     eligible patient population × 100
```

Eligible patient population is usually defined as patients with at least one encounter with the organization in a defined look-back period (commonly 24 months), who are of an age and consent status permitted to hold their own account.

## Worked example

A primary care network serves 50,000 patients who meet the eligibility definition. Of these, 32,000 have registered for the portal (registration rate 64%). Of the 32,000 registrations, 27,000 have completed at least one meaningful action such as viewing a test result (activation rate 84% of registrants). Over the last 12 months, 21,000 of the original 50,000 eligible patients logged in at least once (active-use rate 42%). Reporting only the 64% registration figure would considerably overstate real engagement; the 42% active-use figure is the number that should drive resourcing decisions for the portal program.

## Data sources and caveats

Portal analytics typically come from the vendor platform itself (login events, feature usage) or from the underlying electronic health record's audit log, and organizations should be skeptical of vendor dashboards that only surface registration counts. Proxy access (a parent or carer managing an account on a patient's behalf) should be tagged and reported separately, since it changes who the "user" actually is. Denominator choice matters enormously: counting against the total registered patient list rather than a genuinely eligible, contactable population will always understate adoption, while counting against only patients who were actively invited will always overstate it, so the eligibility definition should be fixed and published alongside every reported rate.

## Pitfalls

- **Registration counted as adoption**: a created-but-never-used account has close to zero value; report activation and active use alongside registration, not instead of them.
- **Ignoring digital exclusion**: aggregate adoption figures can rise while the gap between the most- and least-digitally-included groups widens; always segment by age, deprivation, language, and disability where data governance allows it.
- **Comparing organizations with different eligibility definitions**: a portal program that only invites patients with a recorded email address will report a higher rate than one that measures against the whole registered list, with no real difference in performance.
- **Treating a one-off login as ongoing engagement**: a 12-month look-back is common, but a shorter window (for example 90 days) gives an earlier warning of declining use.

## Sources

- NHS England, NHS App usage and registration statistics (nhs.uk / digital.nhs.uk publications)
- ONC / HealthIT.gov, Promoting Interoperability Program measures, including View, Download, Transmit (VDT) patient access measures
- Peer-reviewed literature on patient portal adoption and digital health disparities, for example studies published in the Journal of the American Medical Informatics Association (JAMIA)

See also: [appointment no-show rate](../appointment-no-show-rate/), which portal-based self-scheduling and reminders directly influence.
