# Rate o Missit Appointments

The rate o missit appointments (an aa cried the "did not attend", or DNA, rate) is the share o bookit appointments whaur the patient neither turned up nor cancelled wi reasonable notice. It's ane o the auldest operational metrics in healthcare, an digital tools — reminders, sel-service rebookin an portal-based bookin in particular — are noo amang the maist effective an best-evidenced weys o cuttin it doun.

## Why it maitters

Ilka no-show is a unit o clinical capacity that canna usually be gotten back, sin maist services canna fill a same-day gap at short notice, sae the rate directly drives the length o waitin lists, the cost per completed appointment, an the clinician time lost. No-show behaviour isnae spread evenly: it follaes deprivation, transport access, carin responsibilities, an the weicht o managin sindry lang-term conditions, sae treatin a high rate juist as a problem wi patient behaviour, raither than pairtly as a sign o access barriers, tends tae gie interventions (sic as blanket penalties) that dig inequity deeper raither than cut it doun. Digital reminders an easy digital rebookin are consistently amang the maist effective, law-cost interventions tae haund, which is why this metric belangs fair an square in a digital health measurement programme raither than juist in operational reportin.

## Hoo it's caulculatit

```
No-show rate = appointments marked "did not attend" / total scheduled appointments × 100
```

A bookit appointment is typically left oot o the denominator, or pit intae a separate category, if it wis cancelled by either pairty wi mair than a defined notice period (commonly 24 hours). Late cancellations (inside that notice period) are usually reportit separately frae true no-shows, sin the operational an behavioural implications differ.

## Warked example

A community clinic books 2,000 appointments in a month. O thae, 140 are cancelled wi mair than 24 hours' notice (rebookit an left oot o the denominator), 60 are cancelled late (unner 24 hours), an 180 are recordit as a true no-show wi nae contact at aa. The no-show rate is 180 / 2,000 × 100 = 9%. If the 60 late cancellations wur lumped intae the same category as true no-shows, the reportit rate wid rise tae 12%, which is why the definition uised maun aye be stated alangside the figure.

## Data sources an caveats

The bookin or practice management system is the main source, uisin its appointment status codes; the quality o the metric depends entirely on staff consistently uisin the richt status raither than a generic "cancelled" bucket for the lot. Organizations that bring in digital reminders (SMS, app push notification, or portal alerts) shuid measure the no-show rate afore an efter the chynge for a comparable mix o patients an services, sin hoo weel reminders wirk is weel documentit in randomized an observational studies but varies bi population an channel.

## Pitfalls

- **Comparin raw rates athort clinics wi different overbookin practices**: a clinic that deliberately overbooks tae mak up for an expectit no-show rate'll shaw a different apparent rate frae yin that disnae, nae maiter whit the patients really dae.
- **Mixin late cancellations up wi true no-shows**: the twa hae different causes an different digital fixes (a late-cancellation problem is aften solvit bi easier sel-service rebookin; a true no-show problem is aften solvit bi better reminders an mair accurate contact details).
- **Survivorship bias frae discharge policies**: services that discharge patients efter repeatit no-shows'll see their ain rate improve mechanically, while juist shiftin the same patients elsewhaur in the system.
- **Blamin the patient for digital exclusion**: a patient wioot a smartphone or a reliable text service willnae benefit frae a digital-only reminder strategy, sae a multi-channel approach (letter, phone caa, text, app) is usually needit tae avoid wideninin access gaps.

## Sources

- NHS England, missed appointments in general practice and outpatient care, published statistics and guidance
- Cochrane systematic reviews on interventions to reduce missed healthcare appointments, including reminder systems
- Peer-reviewed literature on socioeconomic and demographic correlates of appointment non-attendance

See also: [rate o telehealth visits](../rate-o-telehealth-visits/), sin no-show behaviour commonly differs bi consultation modality, an [rate o patient portal adoption](../rate-o-patient-portal-adoption/), sin portal-based sel-bookin an reminders are a main digital intervention.
