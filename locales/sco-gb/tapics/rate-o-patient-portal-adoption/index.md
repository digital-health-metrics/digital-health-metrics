# Rate o Patient Portal Adoption

The rate o patient portal adoption measures the share o eligible patients that hae registered for, an actively uise, an online patient portal (for example NHS App, Patient Access, or an EHR-tethered portal like MyChart) tae view records, beuk appointments, or message their care team. It's the entry-level indicator o digital engagement: a patient wha's niver activatit an account canna benefit frae ony doonstream digital service biggit on the portal.

## Why it maitters

A portal only creates value ance a patient uises it, sae organizations shuid track adoption as a funnel raither than a single nummer: registration, activation (first meaningfu action), an active uise (uise inside a trailin window) are three different rates that get mixed up faur ower aften. Digital services teams are aften unner pressure tae report a single, favourable headline figure, an it taks discipline tae insist on the herder, mair honest breakdoun. Low or unevenly spread adoption is an aa an equity signal: patients that are aulder, hae lawer digital literacy, dinnae speak the majority language, or lack reliable broadband or a smartphone are systematically less likely tae be coontit in the numerator, sae a risin average adoption rate can hide a wideninin gap for the patients wha aften need contact wi services maist.

## Hoo it's caulculatit

Report aa three stages, no juist registration, an aye state the denominator explicitly:

```
Registration rate = patients with a portal account created / eligible patient population × 100
Activation rate   = patients who completed a first meaningful action (viewed a result,
                     booked a slot, sent a message) / patients with an account × 100
Active-use rate   = patients who logged in at least once in the trailing 12 months /
                     eligible patient population × 100
```

Eligible patient population is usually defined as patients wi at least ane encounter wi the organization in a defined look-back period (commonly 24 months), wha are o an age an consent status permittit tae haud their ain account.

## Warked example

A primary care network serves 50,000 patients wha meet the eligibility definition. O thae, 32,000 hae registered for the portal (registration rate 64%). O the 32,000 registrations, 27,000 hae completit at least ane meaningfu action sic as viewin a test result (activation rate 84% o registrants). Ower the last 12 months, 21,000 o the original 50,000 eligible patients loggit in at least ance (active-uise rate 42%). Reportin only the 64% registration figure wid considerably owerstate real engagement; the 42% active-uise figure is the nummer that shuid drive resourcin decisions for the portal programme.

## Data sources an caveats

Portal analytics typically come frae the vendor platform itsel (login events, feature uise) or frae the underlyin electronic health record's audit log, an organizations shuid be sceptical o vendor dashboards that only surface registration coonts. Proxy access (a pairent or carer managin an account on a patient's behalf) shuid be taggit an reportit separately, sin it chynges wha the "user" actually is. Choice o denominator maitters enormously: coontin again the total registert patient list raither than a genuinely eligible, contactable population'll aye unnerstate adoption, while coontin again only patients that wur actively invitit'll aye owerstate it, sae the eligibility definition shuid be fixed an publisht alangside ilka reportit rate.

## Pitfalls

- **Registration coontit as adoption**: an account that's creatit but niver uised haes near nae value; report activation an active uise alangside registration, no insteid o it.
- **Ignorin digital exclusion**: aggregate adoption figures can rise while the gap atween the maist- an least-digitally-includit groups widens; aye segment bi age, deprivation, language, an disability whaur data governance allous it.
- **Comparin organizations wi different eligibility definitions**: a portal programme that only invites patients wi a recordit email address'll report a higher rate than ane that measures again the hale registert list, wi nae real difference in performance.
- **Takkin a yin-aff login as ongaein engagement**: a 12-month look-back is common, but a shorter window (for example 90 days) gies an earlier warnin o declinin uise.

## Sources

- NHS England, NHS App usage and registration statistics (nhs.uk / digital.nhs.uk publications)
- ONC / HealthIT.gov, Promoting Interoperability Program measures, including View, Download, Transmit (VDT) patient access measures
- Peer-reviewed literature on patient portal adoption and digital health disparities, for example studies published in the Journal of the American Medical Informatics Association (JAMIA)

See also: [rate o missit appointments](../rate-o-missit-appointments/), which portal-based sel-bookin an reminders straucht influence.
