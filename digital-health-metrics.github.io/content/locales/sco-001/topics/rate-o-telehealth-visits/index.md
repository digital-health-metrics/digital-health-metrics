# Rate o Telehealth Visits

The rate o telehealth visits is the share o a service's total encounters that are delivert remotely, bi video or telephone, raither than in person. It's a mix-o-delivery-channel metric, no an activity metric: it tells ye hoo care is bein delivert, which maitters for capacity plannin, access, an clinical appropriateness, quite separately frae hoo muckle care is bein delivert in total.

## Why it maitters

The proportion o care delivert remotely chynged the operatin model o mony services efter the rapid growth o virtual consultations durin the COVID-19 pandemic, an organizations need a steady wey tae monitor whether that shift is bein sustainit, is driftin back taewards pre-pandemic norms, or is bein actively steert bi policy. Telehealth isnae a uniform substitute for an in-person visit: appropriateness varies bi specialty, bi the type o consultation (a medication review behaves verra different frae a physical examination), an bi patient preference, sae the "richt" rate is a clinical an operational judgement, no a target tae maximise. Funders an regulators an aa uise this rate, alangside outcome an safety measures, tae decide reimbursement policy an tae check that remote care isnae juist bein swappit in for cases that need seen in person.

## Hoo it's caulculatit

```
Telehealth visit rate = telehealth encounters / (telehealth encounters + in-person encounters) × 100

Report separately by modality where possible:
  Video rate     = video encounters / total encounters × 100
  Telephone rate = telephone-only encounters / total encounters × 100

Denominator should count completed encounters only (see pitfalls), for a
defined service, specialty, and time period.
```

## Warked example

A community mental health service records 4,000 completit outpatient contacts in a quarter: 1,200 in person, 1,600 bi video, an 1,200 bi telephone. The telehealth visit rate is (1,600 + 1,200) / 4,000 × 100 = 70%, wi a video rate o 40% an a telephone-only rate o 30%. Reportin the combined 70% figure alane wid hide that a lairge share o "telehealth" here is audio-only, which typically cairries a different clinical risk profile an patient experience frae video.

## Data sources an caveats

Encounter type is usually recordit either as a structurit field in the electronic health record (visit type or location) or workit oot frae billin codes, sic as a place-o-service code or a telehealth modifier on a claim. Codin practice varies a lot atween organizations an even atween clinicians in the same organization, sae a rate comparison athort sites shuid first confirm that "telehealth" is bein codit the same wey in ilka ane. A visit that stairts as video but drops tae telephone because o a technical problem shuid be codit consistently (commonly as the modality that cairriet maist o the clinical content), an that rule shuid be documentit raither than left tae individual judgement.

## Pitfalls

- **Coontin attemptit raither than completit visits**: a telehealth appointment that fails tae connect an is rebookit shuidnae inflate the telehealth denominator twice.
- **Takkin video an telephone as interchangeable**: they hae different clinical an equity implications (telephone excludes visual assessment but is mair accessible tae patients wioot a smartphone, reliable data, or private space for video); aye report them separately whaur ye can.
- **Ignorin the no-show relationship**: no-show behaviour aften differs bi modality; see [rate o missit appointments](../rate-o-missit-appointments/) afore drawin conclusions aboot "improved access" frae a risin telehealth rate alane.
- **Takkin a high rate as inherently guid**: for some conditions an consultation types, an appropriate telehealth rate is low bi clinical design, no bi digital maturity failure.

## Sources

- Centers for Medicare & Medicaid Services (CMS), Medicare telehealth utilization data and policy publications
- NHS England, outpatient and community services activity statistics, including virtual/remote attendance breakdowns
- Peer-reviewed literature on telehealth utilization trends and modality-specific outcomes
