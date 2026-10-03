# System Usability Scale-Score

De System Usability Scale-score (SUS) is een gestandaardiseerde vragenlijst van 10 items die wordt gebruikt om te kwantificeren hoe bruikbaar een stuk software is, resulterend in een enkele score van 0 tot 100 die kan worden benchmarkt tegen goed gevestigde industrienormen. In tegenstelling tot Net Promoter Score, die aanbevelingsbereidheid meet, of door patiënten gerapporteerde uitkomstmaten, die klinische of functionele status meten, meet SUS één specifiek ding: hoe gemakkelijk de software zelf te leren en te gebruiken is, voor zowel patiënten als klinisch personeel.

## Waarom het belangrijk is

Een digitaal gezondheidsinstrument kan sterk klinisch bewijs en een overtuigende businesscase hebben terwijl het toch in de praktijk faalt omdat patiënten of clinici de interface verwarrend, langzaam, of frustrerend vinden om te gebruiken — en omdat SUS een gevalideerd, veelgebruikt instrument is met decennia aan gepubliceerde benchmarkgegevens over industrieën heen, stelt het een digitaal gezondheidsteam in staat om de bruikbaarheid van hun eigen product te vergelijken met een bekende verdeling in plaats van te vertrouwen op informele indrukken of anekdotische klachten. SUS is opzettelijk technologie-agnostisch en snel te administreren (meestal onder vijf minuten), wat het praktisch maakt om herhaaldelijk uit te voeren over ontwerpiteraties heen, in tegenstelling tot een volledig bruikbaarheidsonderzoek of formeel klinisch onderzoek. Omdat bruikbaarheidsproblemen gericht op clinici een gedocumenteerde bijdragende factor zijn aan burn-out (zie burn-outpercentage van artsen) en bruikbaarheidsproblemen gericht op patiënten een gedocumenteerde bijdragende factor zijn aan afhaken en slechte uitkomsten van digitale gezondheidsvaardigheden (zie digitale gezondheidsvaardigheidspercentage), functioneert SUS als een vroeg waarschuwingssignaal voor bruikbaarheid met lage kosten dat een ontwerpprobleem kan opvangen voordat het verschijnt in die meer ingrijpende stroomafwaartse maatstaven.

## Hoe het wordt berekend

```
SUS-score = ((som van scores van oneven genummerde items − 5) +
            (25 − som van scores van even genummerde items)) × 2,5

Het resultaat is een enkele score van 0 tot 100 (geen percentage,
ondanks de schaal, aangezien het geen "percentage correct" of
vergelijkbaars vertegenwoordigt).

Gepubliceerde benchmarkinterpretatie (Bangor et al.):
  Boven 80  — uitstekende bruikbaarheid
  68        — gemiddeld, gebaseerd op de brede industrienorm
  Onder 51  — slechte bruikbaarheid, rechtvaardigt onderzoek
```

## Uitgewerkt voorbeeld

Een telezorgplatform administreert de gestandaardiseerde vragenlijst van 10 items SUS aan 150 patiënten na hun eerste videobezoek. De berekende gemiddelde SUS-score over alle respondenten is 74. Benchmarkt tegen het algemeen aangehaalde industriegemiddelde van 68, duidt dit op bovengemiddelde bruikbaarheid voor deze specifieke patiëntpopulatie en gebruikscase, hoewel nog steeds betekenisvol onder de "uitstekende" drempel van 80 die zou suggereren dat er weinig resterende bruikbaarheidsbarrières zijn. Het segmenteren van dezelfde 150 reacties op leeftijd toont een gemiddelde score van 81 voor patiënten onder de 50 en 62 voor patiënten van 65 jaar en ouder — een kloof die wijst op een specifiek, aanpakbaar bruikbaarheidsprobleem voor oudere patiënten in plaats van een algemeen productbruikbaarheidsprobleem, en een die een enkel gemengd gemiddelde zou hebben verborgen.

## Databronnen en voorbehouden

SUS-gegevens komen direct van patiënten of clinici die de gestandaardiseerde vragenlijst van 10 items voltooien, en het instrument moet precies worden geadministreerd zoals het werd gevalideerd (dezelfde 10 items, dezelfde 5-punts instemmingsschaal, dezelfde scoreformule) om de resulterende score vergelijkbaar te maken met gepubliceerde benchmarks; een gewijzigde of verkorte versie van de vragenlijst, hoe goedbedoeld ook, produceert een score die niet betrouwbaar kan worden geïnterpreteerd tegen de gestandaardiseerde benchmarkverdeling. SUS meet waargenomen bruikbaarheid, die correleert met maar niet identiek is aan objectief taaksucces (zie digitale gezondheidsvaardigheidspercentage voor een op taakvoltooiing gebaseerde maatstaf); een product kan een goede SUS-score hebben van patiënten die de meer complexe functies niet hebben geprobeerd, dus het koppelen van SUS aan objectieve taakvoltooiingsgegevens geeft een vollediger beeld dan beide afzonderlijk. De timing van reactie is belangrijk: het administreren van SUS onmiddellijk na een specifiek frustrerend incident (een mislukte verbinding, een verwarrende stap) versus na een soepele sessie kan scores verschuiven onafhankelijk van de algehele bruikbaarheid van het product.

## Valkuilen

- **De gestandaardiseerde vragenlijstitems of scoring wijzigen**: zelfs kleine formulerings- of schaalwijzigingen maken vergelijking met de goed gevestigde gepubliceerde benchmarkverdeling ongeldig; gebruik het gestandaardiseerde instrument van 10 items precies zoals het werd gevalideerd.
- **Alleen de gemiddelde score rapporteren zonder segmentatie**: bruikbaarheid varieert vaak aanzienlijk per gebruikersleeftijd, digitale vaardigheid, of rol (patiënt versus clinicus); segmenteer rapportage om specifieke, aanpakbare bruikbaarheidskloven te vinden die een enkel gemiddelde verhult.
- **SUS behandelen als een maat voor klinische effectiviteit**: SUS meet specifiek bruikbaarheid, geen klinische uitkomst of tevredenheid met zorg; een zeer bruikbaar instrument kan nog steeds falen om klinische uitkomsten te verbeteren, en deze mogen nooit worden verward of voor elkaar worden ingewisseld.
- **De enquête alleen administreren na ongewoon soepele of ongewoon frustrerende sessies**: timing en context van administratie kunnen de score vertekenen; administreer consistent over een representatieve steekproef van real-world sessies, niet alleen gemakkelijke of selectief gekozen.

## Bronnen

- Brooke, J., "SUS: A Quick and Dirty Usability Scale", het oorspronkelijk gepubliceerde instrument
- Bangor, Kortum, en Miller, gepubliceerd SUS-benchmarkingonderzoek dat de algemeen aangehaalde scoreinterpretatiebanden vaststelt
- Collegiaal getoetste literatuur over het gebruik van SUS in bruikbaarheidsevaluatie van digitale gezondheid en telezorg, bijvoorbeeld studies gepubliceerd in JMIR Human Factors

Zie ook: [patiënt Net Promoter Score](../patient-net-promoter-score/), een verwante maar afzonderlijke patiëntgerapporteerde maatstaf die tevredenheid en loyaliteit meet in plaats van specifiek softwarebruikbaarheid.
