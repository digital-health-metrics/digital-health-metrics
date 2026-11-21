# DAU/MAU-Stickinessratio

De DAU/MAU-stickinessratio vergelijkt dagelijks actieve gebruikers (DAU) met maandelijks actieve gebruikers (MAU) — dezelfde onderliggende maatstaf wordt gebruikt voor wekelijks actieve gebruikers (WAU) versus MAU — om uit te drukken welk aandeel van de bredere gebruikersbasis van een product op een gegeven dag betrokken is. Het is de standaard product-analytische maatstaf voor betrokkenheidsintensiteit, te onderscheiden van of een gebruiker überhaupt wordt behouden (zie gebruikersretentiepercentage) of hoe consistent één specifieke ingeschreven patiënt in de loop van de tijd betrokken is (zie consistentiepercentage van patiëntbetrokkenheid): stickiness beschrijft het gebruiksritme op populatieniveau, niet het patroon van een individu.

## Waarom het belangrijk is

Twee digitale gezondheidsproducten kunnen een identiek aantal maandelijks actieve gebruikers rapporteren terwijl ze zeer verschillende onderliggende betrokkenheidsintensiteit hebben: één waarbij de meeste van die gebruikers de app bijna dagelijks openen, en een andere waarbij de meeste deze eenmaal per maand openen, net voordat deze anders als inactief zou worden geteld. De DAU/MAU-stickinessratio onderscheidt deze twee zeer verschillende situaties met een enkel, eenvoudig, goed begrepen benchmarkcijfer dat product- en klinische teams in de loop van de tijd kunnen volgen en vergelijken met bekende industriebereiken — een ratio rond 20% is een algemeen aangehaalde redelijke benchmark voor veel consumentenapps, terwijl producten met dagelijkse gewoonte (een voedings- of symptomendagboek dat een patiënt naar verwachting elke dag gebruikt) moeten worden beoordeeld tegen een betekenisvol hogere lat. Omdat stickiness gevoelig is voor hoe "actief" wordt gedefinieerd, is het het nuttigst als een trend voor één product in de loop van de tijd, en als een vergelijking met producten gebouwd voor een vergelijkbaar gebruikspatroon, in plaats van als een absolute industriebrede benchmark.

## Hoe het wordt berekend

```
DAU/MAU-stickinessratio = gemiddeld dagelijks actieve gebruikers
                          in periode / maandelijks actieve
                          gebruikers in dezelfde periode × 100

De WAU/MAU-ratio (wekelijks, zelfde principe) is een zachtere
variant, geschikter voor producten die naar verwachting enkele
keren per week worden gebruikt in plaats van dagelijks.

"Actief" moet precies en consistent worden gedefinieerd (bijv.
een voltooide kwalificerende actie, geen passieve app-opening)
in zowel de teller als de noemer.
```

## Uitgewerkt voorbeeld

Een digitale diabetesbeheerapp heeft 10.000 maandelijks actieve gebruikers in een gegeven maand, gedefinieerd als elke gebruiker die ten minste één kwalificerende actie voltooit (een glucoselog, een maaltijdlog, of een medicatieafvinking) in die maand. Het gemiddelde nemen van dagelijks actieve gebruikersaantallen over de 30 dagen van die maand geeft een gemiddelde DAU van 2.200. De DAU/MAU-stickinessratio is 2.200 / 10.000 × 100 = 22%, wat aangeeft dat op een typische dag ongeveer 22% van de maandelijkse gebruikersbasis van de app ermee betrokken is — een redelijk cijfer voor een instrument voor chronische aandoeningen met dagelijkse gewoonte, hoewel het productteam dit graag in de loop van de tijd zou zien stijgen naarmate het ideale gedrag (dagelijks loggen) gewoner wordt voor ingeschreven patiënten.

## Databronnen en voorbehouden

DAU, WAU en MAU worden allemaal berekend uit dezelfde onderliggende gebeurtenislogs, met behulp van één consistente definitie van een "kwalificerend actieve" gebeurtenis over alle vensters; het wijzigen van die definitie tussen de teller- en noemerberekeningen (bijvoorbeeld het tellen van elke app-opening voor DAU maar alleen een voltooide actie voor MAU) zal een vertekende ratio produceren die geen werkelijke betrokkenheidsintensiteit weerspiegelt. De geschikte benchmark voor stickiness hangt sterk af van het beoogde gebruikspatroon van het product: een instrument bedoeld om eenmaal per week te worden gebruikt (een wekelijkse symptoom-check-in) zal en moet een lagere DAU/MAU-ratio hebben dan een instrument bedoeld om dagelijks te worden gebruikt (een begeleidende app voor een continue glucosemonitor), dus stickiness moet altijd worden geïnterpreteerd tegen het eigen beoogde gebruiksritme van het product, geen enkel universeel doel.

## Valkuilen

- **Stickinessratio's vergelijken tussen producten met verschillende beoogde gebruiksfrequentie**: een instrument voor wekelijks gebruik zal structureel een lagere DAU/MAU-ratio vertonen dan een instrument voor dagelijks gebruik, zelfs als beide precies presteren zoals bedoeld voor hun respectievelijke gebruiksgevallen; benchmark tegen het eigen beoogde ritme van het product, geen enkel universeel doel.
- **Inconsistente activiteitsdefinities gebruiken tussen teller en noemer**: dit kan een stickinessratio produceren die geen werkelijke betrokkenheidsintensiteit weerspiegelt en niet zinvol kan worden vergeleken in de loop van de tijd of met andere producten.
- **Een stijgende stickinessratio behandelen als ondubbelzinnig positief zonder de algehele MAU-trend te controleren**: een stijgende ratio gedreven door een krimpende, meer gewoonte-gebaseerde kerngebruikersbasis terwijl de totale MAU daalt, is een zeer andere — en verontrustendere — situatie dan één gedreven door werkelijk toenemende dagelijkse betrokkenheid over een stabiele of groeiende gebruikersbasis.
- **Dag-van-de-week- en seizoenseffecten op DAU negeren**: DAU kan aanzienlijk variëren per dag van de week (weekdag versus weekend) of seizoen voor veel gezondheidsproducten; gemiddelde DAU over een periode die een volledige natuurlijke cyclus omvat in plaats van een kort venster dat scheef zou kunnen zijn.

## Bronnen

- Collegiaal getoetste en industrieliteratuur over mobiele en digitale productbetrokkenheidsmaatstaven, algemeen gebruikte benchmarkingkaders van mobiele analyseplatforms
- Digital Therapeutics Alliance, best-practice richtlijnen voor het meten van betrokkenheid voor digitale therapeutica
- Collegiaal getoetste literatuur over het meten van digitale gezondheidsbetrokkenheid, bijvoorbeeld studies gepubliceerd in het Journal of Medical Internet Research (JMIR mHealth and uHealth)

Zie ook: [gebruikersretentiepercentage](../gebruikersretentiepercentage/) en [consistentiepercentage van patiëntbetrokkenheid](../consistentiepercentage-van-patiëntbetrokkenheid/), de twee verwante betrokkenheidsmaatstaven waarmee deze ratio het meest wordt verward.
