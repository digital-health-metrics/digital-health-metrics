# Gebruikersretentiepercentage

Gebruikersretentiepercentage is het aandeel gebruikers dat actief was in een beginperiode en actief blijft in een latere periode, en het tegenovergestelde ervan, het churn- (of uitvalpercentage), is het aandeel dat volledig stopt met het gebruik van het product. Waar het adoptiepercentage van het patiëntportaal (zie dat onderwerp) meet of een patiënt ooit een digitaal gezondheidsproduct betekenisvol activeert, meet retentie of ze het blijven gebruiken — en voor elk digitaal gezondheidsproduct van het abonnementstype of met doorlopende zorg, is retentie meestal de enige maatstaf die het nauwst verbonden is met zowel klinische impact als commerciële duurzaamheid.

## Waarom het belangrijk is

Een digitaal gezondheidsproduct dat gebruikers niet kan behouden, kan geen aanhoudend klinisch voordeel leveren, hoe sterk de initiële adoptie- of activeringscijfers ook zijn: een instrument voor het beheer van chronische aandoeningen dat twee weken wordt gebruikt en vervolgens wordt opgegeven, zal waarschijnlijk geen biometrische uitkomst beïnvloeden die afhangt van maanden van aanhoudende gedragsverandering. Retentie is ook een van de commercieel meest ingrijpende maatstaven die een digitaal gezondheidsbedrijf rapporteert aan investeerders en zorgverzekeraars, omdat retentiecurves (de vorm van de afname in de loop van de tijd, niet alleen een enkel retentiepercentage) onthullen of het product een werkelijk duurzaam gebruikspatroon heeft gevonden of eenvoudigweg nieuwigheidsgedreven initiële interesse vastlegt die voorspelbaar vervaagt. Een retentiecurve die afvlakt na een initiële daling (patiënten die de eerste maand doorkomen, hebben de neiging te blijven) is een zeer ander, en veel gezonder, signaal dan een die gestaag blijft dalen zonder bodem.

## Hoe het wordt berekend

```
Retentiepercentage (periode N) = actieve gebruikers in periode N
                                 die ook actief waren in de
                                 beginperiode van het cohort /
                                 gebruikers in de beginperiode van
                                 het cohort × 100

Churnpercentage = 1 − retentiepercentage (voor dezelfde periode)

Rapporteer als een cohortretentiecurve (retentie op dag/week/maand
1, 2, 3…), niet een enkel cijfer op een tijdstip, aangezien een
enkele momentopname recent toegetreden gebruikers (die nog geen
kans hebben gehad om af te haken) vermengt met langdurig
ingeschreven gebruikers.
```

## Uitgewerkt voorbeeld

Een digitale gezondheidsapp schrijft in januari een cohort van 1.000 nieuwe gebruikers in. Aan het einde van maand 1 zijn 640 van die oorspronkelijke 1.000 nog steeds actief (retentie maand 1 64%). Aan het einde van maand 3 blijven 410 actief (retentie maand 3 41%). Tegen maand 6 blijven 380 actief (retentie maand 6 38%). De vorm van deze curve — een steile initiële daling gevolgd door een afvlakking tussen maand 3 en 6 — suggereert dat het product een stabiele kern van gebruikers behoudt zodra ze een initiële adoptiedrempel passeren, wat een wezenlijk ander en bemoedigender signaal is dan wanneer de afname van maand 3 naar maand 6 zou zijn doorgegaan met hetzelfde tempo als maand 1 tot 3.

## Databronnen en voorbehouden

Retentie wordt berekend uit de eigen aanmeldings- of activiteitsgebeurtenislogs van het product, waarbij "actief" consistent wordt gedefinieerd (bijvoorbeeld ten minste één kwalificerende sessie in de periode) over elk vergeleken cohort. Cohorten moeten op gelijkwaardige basis worden vergeleken — dezelfde beginomschrijving van "actief", dezelfde lengte van het observatievenster — aangezien zelfs kleine definitieverschillen (30-daagse versus 28-daagse maanden, of een strengere versus losere "actief"-drempel) een gerapporteerd retentiepercentage met meerdere punten kunnen verschuiven zonder enig werkelijk verschil in gebruikersgedrag. Seizoenseffecten zijn gebruikelijk in gezondheidsapps die gekoppeld zijn aan nieuwjaarsvoornemens of specifieke gezondheidsbewustzijnsperioden, dus een jaar-op-jaar cohortvergelijking is doorgaans informatiever dan het vergelijken van aangrenzende cohorten uit verschillende tijden van het jaar.

## Valkuilen

- **Een enkele retentiemomentopname rapporteren in plaats van een curve**: een enkel cijfer "X% van de gebruikers is nog steeds actief" zonder de vorm van de afname in de loop van de tijd kan geen onderscheid maken tussen een product dat afvlakt (gezond) en een dat voortdurend daalt (ongezond).
- **De "actief"-definitie wijzigen tussen rapportageperioden**: het versoepelen van de definitie van een actieve gebruiker (bijvoorbeeld het tellen van een passieve app-opening in plaats van een voltooide actie) kan retentie beter doen lijken terwijl het werkelijke gebruik helemaal niet is veranderd.
- **Cohortseizoensgebondenheid negeren**: het vergelijken van de retentie van een januaricohort (vaak opgeblazen door inschrijving op basis van nieuwjaarsvoornemens, wat gemiddeld een minder gemotiveerd cohort aantrekt) met een cohort verworven op een ander moment van het jaar kan misleidende trendconclusies opleveren.
- **Organische en betaalde acquisitiecohorten mengen**: gebruikers verworven via verschillende kanalen behouden vaak zeer verschillend; het mengen ervan tot één geaggregeerd retentiecijfer kan een kanaalspecifiek retentieprobleem verhullen.

## Bronnen

- Collegiaal getoetste literatuur over betrokkenheid en uitval bij digitale gezondheidsapps, bijvoorbeeld studies gepubliceerd in het Journal of Medical Internet Research (JMIR mHealth and uHealth)
- Digital Therapeutics Alliance, best-practice richtlijnen voor het meten van betrokkenheid en retentie voor digitale therapeutica
- Industriebenchmarkingrapporten over retentie van mobiele gezondheidsapps, van analyseplatforms en organisaties voor marktonderzoek in digitale gezondheid

Zie ook: [consistentiepercentage van patiëntbetrokkenheid](../patient-engagement-consistency-rate/), dat de kwaliteit van betrokkenheid meet onder behouden gebruikers, in tegenstelling tot of ze überhaupt ingeschreven blijven.
