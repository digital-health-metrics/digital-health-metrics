# Consistentiepercentage van Patiëntbetrokkenheid

Het consistentiepercentage van patiëntbetrokkenheid meet hoe regelmatig een ingeschreven patiënt in de loop der tijd interageert met een digitaal gezondheidsproduct — bijvoorbeeld voedsel of symptomen bijhouden, fysieke activiteit registreren, of gezondheidsgegevens bekijken — in plaats van simpelweg of ze het ooit hebben gebruikt. Het is een longitudinale maatstaf, te onderscheiden van een actief-gebruikaantal op een enkel moment: twee patiënten kunnen een identieke status "app deze maand gebruikt" hebben terwijl de ene consistent elke dag registreert en de andere eenmaal registreert en drie weken verdwijnt, en alleen de consistentiemaatstaf onderscheidt hen.

## Waarom het belangrijk is

Aanhoudende, regelmatige interactie met een digitaal gezondheidsinstrument is een van de betrouwbaardere leidende indicatoren van klinisch voordeel, met name voor gedragsafhankelijke aandoeningen zoals diabetes, gewichtsbeheersing en geestelijke gezondheid, waar de waarde van het instrument voortkomt uit de gewoonte die het ondersteunt in plaats van uit een enkele sessie. Een product kan een gezond aantal maandelijks actieve gebruikers rapporteren terwijl het eigenlijk een populatie bedient die eenmaal inlogt en wegdrijft, omdat maandelijks actief gebruik een lage lat is die niets zegt over het gebruikspatroon binnen de maand; consistentiemaatstaven vangen dit op een manier die eenvoudige activiteitentellingen niet kunnen. Omdat consistentie ook een van de moeilijker vol te houden dingen is over maanden in plaats van weken, is het een eerlijker signaal van productkwaliteit en klinische geschiktheid dan kortetermijnbetrokkenheidscijfers, die vatbaar zijn voor nieuwigheidseffecten direct na onboarding.

## Hoe het wordt berekend

```
Betrokkenheidsconsistentiepercentage = weken met ten minste één
                                       kwalificerende interactie /
                                       totaal aantal ingeschreven
                                       weken × 100

Een "kwalificerende interactie" moet expliciet en consistent worden
gedefinieerd (bijv. een voedingsloginvoer, een symptoom-check-in,
of een voltooide activiteitssynchronisatie) — nooit een passieve
gebeurtenis zoals het openen van een app zonder geregistreerde
actie.

Rapporteer als een verdeling, niet alleen een populatiegemiddelde:
  bijv. aandeel patiënten met ≥ 80% wekelijkse consistentie,
       aandeel met 50-79%, aandeel met < 50%
```

## Uitgewerkt voorbeeld

Een voedingscoachingapp schrijft een patiënt in voor 12 weken. De patiënt registreert ten minste één kwalificerende voedingsinvoer in 9 van die 12 weken, wat een individueel betrokkenheidsconsistentiepercentage geeft van 9 / 12 × 100 = 75%. Over het volledige cohort van 2.000 patiënten van de app, ingeschreven voor ten minste 12 weken, handhaven 600 patiënten (30%) ≥ 80% wekelijkse consistentie, vallen 900 (45%) in de band 50-79%, en vallen 500 (25%) onder 50%. Alleen het cohortgemiddelde rapporteren (dat mogelijk rond 65% uitkomt) zou verhullen dat een volledig kwart van de patiënten nauwelijks betrokken is — een segment dat de moeite waard is om afzonderlijk te onderzoeken in plaats van te verdunnen in een algemeen gemiddelde.

## Databronnen en voorbehouden

Consistentiegegevens komen van de eigen gebeurtenislogs van het product (voedingsinvoer, activiteitssynchronisaties, check-ins), en de definitie van een "kwalificerende interactie" heeft een enorm effect op het resulterende percentage — een soepele definitie (elke app-opening) zal er altijd beter uitzien dan een strikte (een voltooide, betekenisvolle loginvoer), dus de gebruikte definitie moet duidelijk worden vermeld samen met elk gerapporteerd cijfer. Automatisch gesynchroniseerde gegevens (bijvoorbeeld een verbonden fitnesstracker die activiteit op de achtergrond synchroniseert) moeten afzonderlijk worden gerapporteerd van handmatig geregistreerde gegevens, aangezien automatische synchronisatie schijnbare consistentie kan opblazen zonder enige actieve inspanning van de patiënt of betrokkenheid bij de begeleiding van het product weer te geven.

## Valkuilen

- **App-openingen verwarren met betekenisvolle betrokkenheid**: een passieve app-opening (bijvoorbeeld geactiveerd door een pushmelding) is niet hetzelfde als een geregistreerde voedingsinvoer of voltooide check-in; definieer en rapporteer alleen over kwalificerende interacties.
- **Alleen het populatiegemiddelde rapporteren**: een gezond ogend gemiddeld consistentiepercentage kan een bimodale populatie van zeer betrokken en bijna volledig onbetrokken patiënten verhullen; rapporteer de verdeling over consistentiebanden, niet alleen het gemiddelde.
- **De noemer van de inschrijvingsduur negeren**: het vergelijken van consistentiepercentages tussen patiënten die zijn ingeschreven voor zeer verschillende lengtes van tijd zonder rekening te houden met de inschrijvingsduur, zal vertekenen ten gunste van welke groep dan ook met een korter, gemakkelijker vol te houden meetvenster.
- **Automatische achtergrondsynchronisatie die het percentage opblaast**: een passief gesynchroniseerde wearable-gegevensstroom kan een onbetrokken patiënt consistent actief laten lijken zonder enige echte gedragsverandering of productbetrokkenheid van hun kant.

## Bronnen

- Collegiaal getoetste literatuur over patronen van digitale gezondheidsbetrokkenheid en hun relatie tot klinische uitkomsten, bijvoorbeeld studies gepubliceerd in het Journal of Medical Internet Research (JMIR)
- American Medical Informatics Association (AMIA), richtlijnen over de kwaliteit van door patiënten gegenereerde gezondheidsgegevens en het meten van betrokkenheid
- Digital Therapeutics Alliance, best-practice richtlijnen voor het meten van betrokkenheid en uitkomsten voor digitale therapeutica

Zie ook: [gebruikersretentiepercentage](../gebruikersretentiepercentage/), de nauw verwante maatstaf of een patiënt überhaupt ingeschreven blijft, in tegenstelling tot hoe consistent ze betrokken zijn terwijl ze ingeschreven zijn.
