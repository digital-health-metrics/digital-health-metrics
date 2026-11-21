# Rate wey Patient Dey Use Portal

Patient portal adoption rate dey measure di share of eligible patients wey don register for, and dey actively use, online patient portal (for example NHS App, Patient Access, or EHR-tethered portal like MyChart) to see dia records, book appointments, or message dia care team. Na di entry-level indicator of digital engagement: patient wey never activate account no fit benefit from any downstream digital service wey dem build on top di portal.

## Why e matter

Portal only dey create value when patient use am, so organizations suppose track adoption as funnel instead of one single number: registration, activation (first meaningful action), and active use (use inside trailing window) na three different rates wey people dey mix up too much. Digital services teams dey often get pressure to report one single, favourable headline figure, and e take discipline to insist on di harder, more honest breakdown. Low or unevenly distributed adoption na also equity signal: patients wey old, get lower digital literacy, no speak di majority language, or no get reliable broadband or smartphone dey systematically less likely to enter di numerator, so rising average adoption rate fit hide wide-wide gap for di patients wey often need contact with services pass.

## How dem dey calculate am

Report all three stages, no be only registration, and always state di denominator clearly:

```
Registration rate = patients with a portal account created / eligible patient population × 100
Activation rate   = patients who completed a first meaningful action (viewed a result,
                     booked a slot, sent a message) / patients with an account × 100
Active-use rate   = patients who logged in at least once in the trailing 12 months /
                     eligible patient population × 100
```

Dem dey usually define eligible patient population as patients wey get at least one encounter with di organization inside defined look-back period (commonly 24 months), wey dey di age and consent status wey allow dem to hold dia own account.

## Worked example

One primary care network dey serve 50,000 patients wey meet di eligibility definition. Out of dem, 32,000 don register for di portal (registration rate 64%). Out of di 32,000 registrations, 27,000 don complete at least one meaningful action like to view test result (activation rate 84% of registrants). For di last 12 months, 21,000 of di original 50,000 eligible patients log in at least once (active-use rate 42%). If dem report only di 64% registration figure, e go overstate real engagement well well; di 42% active-use figure na di number wey suppose drive resourcing decisions for di portal programme.

## Data sources and caveats

Portal analytics dey usually come from di vendor platform itself (login events, feature usage) or from di audit log of di underlying electronic health record, and organizations suppose dey sceptical of vendor dashboards wey only show registration counts. Proxy access (parent or carer wey dey manage account for patient) suppose dem tag and report am separate, because e change who be di "user" for real. Di choice of denominator matter well well: to count against di total registered patient list instead of genuinely eligible, contactable population go always understate adoption, while to count against only patients wey dem actively invite go always overstate am, so dem suppose fix di eligibility definition and publish am together with every rate wey dem report.

## Pitfalls

- **To count registration as adoption**: account wey dem create but nobody ever use get close to zero value; report activation and active use together with registration, no be instead of am.
- **To ignore digital exclusion**: aggregate adoption figures fit rise while di gap between di most- and least-digitally-included groups dey wide; always segment by age, deprivation, language, and disability where data governance allow am.
- **To compare organizations wey get different eligibility definitions**: portal programme wey only invite patients wey get recorded email address go report higher rate than one wey measure against di whole registered list, even though no real difference dey for performance.
- **To treat one-off login as ongoing engagement**: 12-month look-back dey common, but shorter window (for example 90 days) dey give earlier warning when use dey decline.

## Sources

- NHS England, NHS App usage and registration statistics (nhs.uk / digital.nhs.uk publications)
- ONC / HealthIT.gov, Promoting Interoperability Program measures, including View, Download, Transmit (VDT) patient access measures
- Peer-reviewed literature on patient portal adoption and digital health disparities, for example studies published in the Journal of the American Medical Informatics Association (JAMIA)

See also: [appointment no-show rate](../rate-wey-patient-no-show-for-appointment/), wey portal-based self-scheduling and reminders dey directly influence.
