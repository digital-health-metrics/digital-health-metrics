# Beschikbaarheidspercentage van Apparaten

Beschikbaarheidspercentage van apparaten meet het aandeel van de geplande monitoringtijd dat een verbonden gezondheidsapparaat — een sensor voor telemonitoring van patiënten, een wearable, of een thuistelezorgeenheid — daadwerkelijk online is, gegevens overdraagt, en correct functioneert, in plaats van offline, verbroken, of defect. Het is de fundamentele infrastructuurmaatstaf onder elk telemonitoring- of verbonden-apparaatprogramma: een klinische waarschuwing, een biometrische trend, of een betrokkenheidscijfer berekend uit een apparaat dat vaak offline was, is slechts zo betrouwbaar als de connectiviteit erachter.

## Waarom het belangrijk is

De volledige klinische waardepropositie van een telemonitoringprogramma voor patiënten hangt af van continue of bijna-continue gegevensverzameling; een apparaat met slechte beschikbaarheid creëert stille gaten in het klinische beeld van een patiënt die kunnen worden verward met stabiliteit (geen waarschuwing omdat er geen gegevens zijn, niet omdat er niets is veranderd) in plaats van correct te worden geïdentificeerd als een monitoringfout. Apparaatbeschikbaarheid is ook een leidende indicator van programmakosten en patiëntervaring: een apparaat dat vaak de verbinding verliest, genereert ondersteuningsoproepen, patiëntfrustratie, en mogelijk onnodige klinische outreach om te controleren of een gegevenslacune een echte klinische gebeurtenis weerspiegelt of simpelweg een technische storing. Omdat storingen in apparaatbeschikbaarheid vaak kunnen worden toegeschreven aan infrastructuur die de organisatie controleert (een slecht geconfigureerde mobiele gateway, zwakke wifi-dekking in het huis van een patiënt, een onderhouden apparaatvloot), in plaats van aan de patiënt, hoort deze maatstaf duidelijk bij het leveranciers- en technische operationele team, niet willekeurig gevouwen in patiëntbetrokkenheidsmaatstaven.

## Hoe het wordt berekend

```
Beschikbaarheidspercentage van apparaten = tijd dat het apparaat
                                           online was en geldige
                                           gegevens overdroeg /
                                           totale geplande
                                           monitoringtijd × 100

Segmenteer hoofdoorzaken van uitvaltijd waar gegevens dit toelaten:
  Apparaatzijdige storing     (batterij, hardwarefout, firmware-
                              crash)
  Connectiviteitsstoring      (mobiele/wifi-/VPN-onderbreking)
  Patiëntzijdige factoren     (apparaat uitgeschakeld, verplaatst
                              buiten bereik)

Ondersteunende technische parameters om bij te houden naast
beschikbaarheid:
  Gemiddelde CPU-gebruik, geheugengebruik, en batterijniveau per
  apparaat
  Gemiddelde tijd tussen connectiviteitsstoringen
  Gemiddelde tijd om opnieuw verbinding te maken na een
  onderbreking
```

## Uitgewerkt voorbeeld

Een telemonitoringprogramma voor hartpatiënten zet 1.000 verbonden apparaten in, elk naar verwachting continu overdragend. Over een maand van 30 dagen (720 geplande monitoringuren per apparaat) registreert de vloot gecombineerd 705.600 werkelijke online-uren tegen een geplande 720.000 uren, wat een vlootbreed beschikbaarheidspercentage van apparaten geeft van 705.600 / 720.000 × 100 = 98%. Hoofdoorzaakanalyse van de 14.400 uitvaluren toont aan dat 60% kan worden toegeschreven aan mobiele connectiviteitsonderbrekingen geconcentreerd in een specifieke landelijke servicenregio, 25% aan apparaten met verouderende batterijen gemarkeerd voor vervanging, en 15% aan patiënten die tijdelijk hun apparaat uitschakelden. Deze uitsplitsing wijst naar twee duidelijke, verschillende interventies — een connectiviteitsoplossing voor de getroffen regio en een proactief batterijvervangingsprogramma — die een enkel geaggregeerd beschikbaarheidscijfer niet zou hebben onderscheiden.

## Databronnen en voorbehouden

Beschikbaarheidsgegevens komen van het eigen apparaatbeheer- en telemetriesysteem van de apparaatfabrikant of platformleverancier, dat verbindings- en hartslag-gebeurtenissen per apparaat registreert; de organisatie moet precies bevestigen wat de leverancier telt als "online" (een apparaat kan zichzelf rapporteren als verbonden met een netwerk terwijl het geen geldige klinische gegevens overdraagt, wat voor klinische doeleinden als uitvaltijd zou moeten tellen, zelfs als het eigen dashboard van de leverancier het als verbonden rapporteert). Beschikbaarheid moet, waar het volume dit toelaat, per apparaatcohort of geografie worden gerapporteerd, aangezien connectiviteitskwaliteit vaak geografisch geclusterd is (landelijke mobiele dekking, wifi in oudere gebouwen) in plaats van gelijkmatig verdeeld over een patiëntenpopulatie, en een geaggregeerd vlootbreed cijfer een ernstig, aanpakbaar regionaal probleem kan verbergen.

## Valkuilen

- **Netwerkverbinding verwarren met geldige gegevensoverdracht**: een apparaat kan "verbonden" lijken op een leveranciersdashboard terwijl het geen bruikbare klinische gegevens overdraagt; definieer en meet beschikbaarheid tegen werkelijke geldige gegevensontvangst, niet alleen ruwe netwerkconnectiviteit.
- **Alleen een vlootbreed gemiddelde rapporteren**: dit kan een ernstig, geografisch of apparaatcohort-specifiek uitvaltijdprobleem verbergen dat een gericht gemiddelde zou onthullen en dat een specifieke, aanpakbare oplossing heeft.
- **Hoofdoorzaak van uitvaltijd niet onderscheiden**: apparaatzijdige, connectiviteits-, en patiëntzijdige uitvaltijd vereisen elk een volledig andere interventie; een enkel uitvaltijdpercentage zonder hoofdoorzaaksegmentatie kan niet worden gehandeld.
- **Een gegevenslacune standaard behandelen als klinische stabiliteit**: een ontbrekende gegevensstroom van een offline apparaat zou een technische connectiviteitscontrole moeten activeren, niet stilletjes worden geïnterpreteerd als "geen nieuws is goed nieuws" voor de klinische status van de patiënt.

## Bronnen

- Continua Design Guidelines / Personal Connected Health Alliance, technische interoperabiliteitsstandaarden voor verbonden gezondheidsapparaten
- ONC / HealthIT.gov, richtlijnen over de implementatie van telemonitoringprogramma's voor patiënten en technische vereisten
- Collegiaal getoetste literatuur over de betrouwbaarheid van telemonitoringapparaten voor patiënten en gegevensvolledigheid, bijvoorbeeld studies gepubliceerd in npj Digital Medicine

Zie ook: [nauwkeurigheid van triagedoorverwijzing](../nauwkeurigheid-van-triagedoorverwijzing/), aangezien dit afhangt van het ontvangen van volledige, betrouwbare apparaatgegevens om überhaupt een correcte triagebeslissing te nemen.
