# Doorlooptijd van Digitale Verwijzingen

De doorlooptijd van digitale verwijzingen is de tijd die verstrijkt tussen het indienen van een elektronische verwijzing door een verwijzende clinicus en de triage ervan door de ontvangende dienst, resulterend in acceptatie, afwijzing of het inplannen van een afspraak. Het is een procesmetriek (doorstroom), te onderscheiden van de totale wachttijd van de patiënt, en een van de duidelijkste plekken waar kan worden aangetoond dat een digitale systeemverandering (gestructureerde e-verwijzing, beeldgebaseerde triage, gestandaardiseerde verwijsformulieren) daadwerkelijk een operationeel cijfer beweegt, en niet slechts een tevredenheidsscore.

## Waarom dit belangrijk is

Een trage of sterk variërende triagestap voegt vertraging toe nog voordat de patiënt zelfs maar op een klinische wachtlijst komt, en omdat deze vertraging optreedt voordat enige klinische zorg begint, is het pure procesverspilling die digitale hulpmiddelen goed kunnen wegnemen. Verwijssystemen die bij ontbrekende informatie een cyclus van "terugsturen naar de verwijzer" afdwingen, creëren herwerklussen die gemakkelijk over het hoofd worden gezien als de doorlooptijd alleen wordt gemeten bij verwijzingen die de eerste keer soepel doorlopen. Waar een dienst gestructureerde digitale verwijsformulieren, verplichte velden, of beeldgebaseerde triage heeft ingevoerd (bijvoorbeeld in teledermatologie), is de doorlooptijd doorgaans de meest overtuigende afzonderlijke metriek om het voordeel aan te tonen, omdat deze voor en na de verandering meetbaar is met dezelfde instrumentatie.

## Hoe het wordt berekend

```
Doorlooptijd = tijdstempel(triagebeslissing) − tijdstempel(indiening verwijzing)

Rapporteer de mediaan en een hoog percentiel (meestal het 90e), niet
alleen het gemiddelde, omdat de verdeling sterk rechts scheef is door
teruggestuurde of complexe verwijzingen.

Houd rekening met tijden per subfase waar het systeem deze vastlegt:
  Indiening → ontvangen door de dienst
  Ontvangen → triagebeslissing
  Triagebeslissing → afspraak ingepland (indien van toepassing)
```

## Uitgewerkt voorbeeld

Het auditlog van een elektronisch verwijssysteem laat over alle specialismen een mediane tijd van indiening tot triagebeslissing van 1,8 dagen zien, met een tijd bij het 90e percentiel van 6 dagen, voornamelijk veroorzaakt door verwijzingen die naar de verwijzer worden teruggestuurd wegens ontbrekende klinische informatie. Een teledermatologisch traject dat op hetzelfde platform beeldgebaseerde triage gebruikt, behaalt een mediane doorlooptijd van 4 uur en een 90e percentiel van 1 dag, omdat een foto en een gestructureerde voorgeschiedenis bijna altijd voldoende zijn voor de triagebeslissing, zonder dat verdere correspondentie nodig is.

## Gegevensbronnen en aandachtspunten

Het eigen auditlog van het elektronisch verwijs- of verwijsbeheersysteem is de primaire bron, met gebruikmaking van tijdstempels voor indiening en beslissing; organisaties moeten bevestigen of de "klok" stopt terwijl een verwijzing wordt teruggestuurd voor meer informatie, of dat deze continu doorloopt, aangezien beide definities substantieel verschillende cijfers opleveren voor hetzelfde onderliggende proces. De doorlooptijd moet consequent worden gerapporteerd, hetzij in kalendertijd, hetzij in werkuren, aangezien weekend- en feestdageffecten anders vergelijkingen tussen diensten met verschillende werkpatronen kunnen verstoren.

## Veelgemaakte fouten

- **Alleen "schone" verwijzingen meten**: het uitsluiten van afgewezen of teruggestuurde verwijzingen uit de berekening verhult precies de herwerklast die digitale hulpmiddelen vaak specifiek moeten verminderen.
- **Het gemiddelde rapporteren in plaats van mediaan en percentielen**: een klein aantal langdurige, teruggestuurde verwijzingen trekt het gemiddelde ver boven de werkelijke ervaring van de typische patiënt.
- **Doorlooptijd verwarren met totale wachttijd**: de doorlooptijd omvat alleen de triagestap; de totale ervaring van de patiënt omvat ook de stroomafwaartse klinische wachtlijst, wat een aparte metriek is die wordt bepaald door aparte capaciteitsbeperkingen.
- **Subfasen niet onderscheiden**: een dienst die alleen de end-to-end-tijd meet, kan niet vaststellen of een traag cijfer wordt veroorzaakt doordat verwijzers onvolledige informatie indienen, door de triagecapaciteit van de ontvangende dienst, of door beide.

## Bronnen

- NHS England, statistieken en dienstspecificaties van de e-verwijsdienst (e-RS)
- Collegiaal getoetste literatuur over elektronische verwijsbeheersystemen en digitale triagetrajecten, inclusief teledermatologie
- ONC / HealthIT.gov, richtlijnen voor interoperabiliteit en verwijscoördinatie
