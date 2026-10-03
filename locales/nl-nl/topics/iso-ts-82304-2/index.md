# ISO/TS 82304-2

ISO/TS 82304-2 is een internationale technische specificatie, gepubliceerd onder ISO Technisch Comité 215 (Gezondheidsinformatica), die een gestructureerde methode definieert voor het beoordelen van de kwaliteit van gezondheids- en wellnessapplicaties — variërend van bruikbaarheid, technische robuustheid en betrouwbaarheid, interoperabiliteit, inhoudskwaliteit, en gegevensbeveiliging en privacy — voor producten die buiten het bereik van volledige medische hulpmiddelenregulering vallen maar nog steeds wezenlijk de gezondheidsbeslissingen of het gedrag van een gebruiker beïnvloeden. Het bestaat om een specifiek gat te vullen: de grote meerderheid van consumentgerichte gezondheids- en wellnessapps (fitnesstrackers, symptoomdagboeken, wellness-coachingapps) wordt niet gereguleerd als medisch hulpmiddel, maar er bestond voorheen geen gemeenschappelijke, gestructureerde manier om hun basiskwaliteit en veiligheid te beoordelen of te vergelijken.

## Waarom het belangrijk is

Appstores herbergen honderdduizenden gezondheids- en wellnessapps met enorm variërende kwaliteit, en voordat een gemeenschappelijke technische specificatie bestond, had een patiënt, clinicus, of zorgsysteem geen gestructureerde, vergelijkbare manier om de basiskwaliteit en veiligheid van de ene app tegen de andere te beoordelen voorbij sterbeoordelingen en marketingclaims — een gat dat belangrijk is omdat een slecht ontworpen gezondheidsapp nog steeds echte schade kan veroorzaken (onnauwkeurige inhoud, slechte gegevensbeveiliging, misleidende claims) zelfs zonder de regelgevende drempel van een medisch hulpmiddel te bereiken. ISO/TS 82304-2 is opzettelijk gestructureerd rond domeinen die een niet-gespecialiseerde beoordelaar consistent kan beoordelen, wat het de technische basis heeft gemaakt voor verschillende nationale en commerciële kwaliteitslabelering- en curatiediensten voor gezondheidsapps, en zorgsystemen en app-bibliotheken een verdedigbare, gestandaardiseerde manier geeft om apps op te nemen in of uit te sluiten van een aanbevolen lijst in plaats van te vertrouwen op ad-hoc beoordeling.

## Hoe het wordt toegepast

```
Beoordeling is georganiseerd rond vastgestelde kwaliteitsdomeinen,
geëvalueerd via gestructureerde beoordeling in plaats van een
enkele numerieke formule:

Bruikbaarheid                        — duidelijkheid,
                                      toegankelijkheid, en
                                      gebruiksgemak voor de
                                      beoogde gebruikersgroep
Technische robuustheid/betrouwbaarheid — stabiliteit, prestatie,
                                      en afwezigheid van
                                      technische defecten
Interoperabiliteit                    — vermogen om gegevens uit
                                      te wisselen met andere
                                      systemen waar relevant voor
                                      de functie van de app
Inhoudskwaliteit en -veiligheid       — nauwkeurigheid, actualiteit,
                                      en afwezigheid van schadelijke
                                      of misleidende
                                      gezondheidsclaims
Beveiliging en privacy                — gegevensbeschermingspraktijk
                                      en transparantie over
                                      gegevensgebruik

Elk domein wordt gescoord via gestructureerde beoordelingscriteria
en gecombineerd tot een algehele kwaliteitsbeoordeling, die
verschillende kwaliteitslabelingsschema's voor gezondheidsapps
gebruiken als technische basis voor een openbaar kwaliteitslabel of
beslissing over opname in een gecureerde bibliotheek.
```

## Uitgewerkt voorbeeld

Een digitaal app-bibliotheekprogramma van een zorgsysteem wil een aanbevolen lijst van wellnessapps voor patiënten cureren in plaats van app-selectie volledig over te laten aan app-store-zoekopdrachten. Elke kandidaat-app wordt beoordeeld tegen de ISO/TS 82304-2-domeinen: een slaaptrackingapp scoort goed op bruikbaarheid en technische robuustheid, adequaat op inhoudskwaliteit, maar wordt gemarkeerd tijdens de beveiligings- en privacybeoordeling voor het delen van gebruikersgegevens met derde-partij-adverteerders zonder duidelijke openbaarmaking — een bevinding significant genoeg om de app uit te sluiten van de aanbevolen lijst ondanks de anders sterke bruikbaarheidsscore. Dit domein-voor-domein-resultaat is bruikbaarder voor zowel het curatieteam als, indien gedeeld, de eigen ontwikkelaar van de app dan een enkele gemengde kwaliteitsscore zou zijn, aangezien het precies identificeert welk aspect moet worden aangepakt voordat de app opnieuw kan worden overwogen.

## Databronnen en voorbehouden

Beoordeling tegen ISO/TS 82304-2 wordt meestal uitgevoerd door een getrainde beoordelaar of een geaccrediteerde beoordelingsdienst, volgens de gestructureerde beoordelingscriteria van de specificatie voor elk domein, en verschillende nationale en commerciële initiatieven (organisaties voor kwaliteitslabelering en curatie van gezondheidsapps, sommige opererend onder formele nationale zorgsysteemgoedkeuring) gebruiken de standaard als technische basis voor hun eigen publiek gerichte app-kwaliteitslabels — wat betekent dat de "gecertificeerde" of "gelabelde" status van een app in de praktijk vaak de implementatie van de standaard door een specifiek labelingsschema weerspiegelt, niet noodzakelijk een identiek proces over alle schema's heen, dus de specifieke beoordelende organisatie en haar methodologie moeten worden gecontroleerd en bekendgemaakt samen met elk geciteerd kwaliteitslabel. De specificatie beoordeelt kwaliteits- en basisveiligheidskenmerken van een app als software; het is geen vervanging voor medische-hulpmiddelen-regelgevende goedkeuring waar de claims of functies van een app daadwerkelijk de drempel van een medisch hulpmiddel bereiken, en het als zodanig gebruiken zou een categoriefout zijn.

## Valkuilen

- **Een kwaliteitslabel behandelen als regelgevende goedkeuring**: een app beoordeeld en gelabeld onder ISO/TS 82304-2 heeft daardoor geen regelgevende medische-hulpmiddelen-goedkeuring ontvangen; de twee dienen verschillende doelen en mogen nooit worden samengevoegd in hoe een app wordt beschreven of gemarket.
- **Aannemen dat alle labelingsschema's gebaseerd op de standaard gelijkwaardig zijn**: verschillende organisaties implementeren op ISO/TS 82304-2 gebaseerde beoordeling met hun eigen specifieke beoordelingsprocessen en nauwkeurigheid; controleer welke organisatie een beoordeling uitvoerde en hoe, in plaats van elk "op ISO/TS 82304-2 gebaseerd" label uitwisselbaar te behandelen met een ander.
- **Alleen bruikbaarheid beoordelen terwijl beveiliging en privacy worden verwaarloosd**: bruikbaarheidsproblemen zijn het meest zichtbaar voor een eindgebruiker en het gemakkelijkst informeel te beoordelen, wat ertoe kan leiden dat beoordelaars het minder zichtbare maar mogelijk meer consequente domein van beveiliging en privacy onderwaarderen.
- **De beoordeling behandelen als een eenmalige, permanente certificering**: de inhoud, beveiligingspraktijken, en overeenkomsten voor het delen van gegevens met derden van een app kunnen allemaal veranderen na een initiële beoordeling; een geloofwaardig kwaliteitslabelingsprogramma beoordeelt periodiek opnieuw in plaats van een initiële slaging als permanent te behandelen.

## Bronnen

- International Organization for Standardization, ISO/TS 82304-2:2021, "Health software — Part 2: Health and wellness apps — Quality and reliability"
- ISO Technisch Comité 215 (Gezondheidsinformatica), publicatie- en werkgroepinformatie
- Nationale en commerciële organisaties voor kwaliteitslabelering en curatie van gezondheidsapps die hun beoordelingsmethodologie publiceren gebaseerd op deze standaard

Zie ook: [System Usability Scale-score](../system-usability-scale-score/), een aanvullend, nauwer instrument specifiek voor bruikbaarheid dat vaak wordt gebruikt samen met een bredere ISO/TS 82304-2-kwaliteitsbeoordeling.
