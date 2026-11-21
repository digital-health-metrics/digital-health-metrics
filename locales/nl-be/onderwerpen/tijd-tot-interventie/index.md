# Tijd tot Interventie

Tijd tot interventie is de verstreken tijd vanaf het genereren van een geautomatiseerd gezondheidsalarm — bijvoorbeeld een telemonitoringapparaat detecteert een vitale waarde buiten het bereik, of een digitaal triage-instrument markeert een verslechterende patiënt — tot een lid van het klinisch team daadwerkelijk een reactie initieert. Het is de procesmaatstaf die bepaalt of een geautomatiseerd alarmsysteem zijn kernbelofte waarmaakt: een probleem eerder opvangen dan een traditioneel model van geplande check-ins of door de patiënt geïnitieerde telefoontjes zou hebben gedaan.

## Waarom het belangrijk is

Een alarmsysteem dat een klinisch correct alarm genereert maar niet wordt gevolgd door een tijdige reactie, heeft de patiëntveiligheid niet daadwerkelijk verbeterd; de volledige waardepropositie van telemonitoring en geautomatiseerde alarmering berust op het sneller sluiten van de lus dan het alternatieve, niet-gemonitorde pad zou hebben gedaan. Omdat verschillende alarmernst verschillende reactie-urgentie rechtvaardigt, moet tijd tot interventie altijd per ernstniveau worden gerapporteerd in plaats van als een enkel gemiddelde, aangezien een snel gemiddelde over alle alarmen heen een gevaarlijk trage reactie op het kleine aantal meest ernstige kan verbergen. Deze maatstaf is ook een van de duidelijkste, meest overtuigende manieren om de waarde van een geautomatiseerd monitoringprogramma aan klinisch leiderschap en zorgverzekeraars te demonstreren, omdat het direct kan worden vergeleken met de eerdere, niet-geautomatiseerde reactietijd van dezelfde organisatie voor een vergelijkbaar klinisch scenario.

## Hoe het wordt berekend

```
Tijd tot interventie = tijdstempel(klinische reactie geïnitieerd)
                       − tijdstempel(alarm gegenereerd)

Rapporteer mediaan en een hoog percentiel (meestal het 90e), niet
alleen het gemiddelde, gesegmenteerd per alarmernstniveau, niet
als een enkel gemengd gemiddelde.

"Klinische reactie geïnitieerd" moet precies en consistent worden
gedefinieerd — bijv. een clinicus die het dossier van de patiënt
opent en handelt, of een gedocumenteerde uitgaande contactpoging —
niet simpelweg een alarm dat wordt bekeken of erkend zonder
actie ondernomen.
```

## Uitgewerkt voorbeeld

Het alarmsysteem van een telemonitoringprogramma voor hartpatiënten markeert 200 hoogernstige aritmiealarmen in een maand. De mediaantijd van alarmgeneratie tot het initiëren van uitgaand contact door een clinicus is 12 minuten, met een 90e-percentieltijd van 38 minuten. Historische gegevens van het eerdere, niet-gemonitorde pad van dezelfde populatie (waar een vergelijkbare gebeurtenis meestal pas zou verschijnen bij het volgende geplande kliniekbezoek of ziekenhuisbezoek) tonen een mediaantijd tot enige klinische reactie gemeten in dagen, niet minuten. Deze vergelijking — niet het geïsoleerde cijfer van 12 minuten — is wat de klinische waarde van het monitoringprogramma demonstreert; het 90e-percentielcijfer is even belangrijk, aangezien het de staart van alarmen identificeert die meer dan een half uur duurden om op te reageren en een eigen oorzaakanalyse rechtvaardigt.

## Databronnen en voorbehouden

Tijdstempels voor alarmgeneratie komen van het eigen gebeurtenislog van het monitoringplatform; tijdstempels voor klinische reactie komen meestal van het auditspoor van het elektronisch patiëntendossier of het eigen workflow- of taakbeheersysteem van het zorgteam, en deze twee systemen moeten precies tijdgesynchroniseerd zijn om het berekende interval betrouwbaar te maken. "Reactie geïnitieerd" heeft een strikte, gedocumenteerde definitie nodig, aangezien een clinicus die simpelweg een alarm bekijkt of afwijst zonder verdere actie een fundamenteel andere, en veel minder geruststellende, gebeurtenis is dan één die daadwerkelijk uitgaand contact of interventie activeert — het vermengen van de twee zal de reactietijd beter doen lijken dan de klinische realiteit. Nacht- en weekendbezettingsniveaus beïnvloeden tijd tot interventie vaak aanzienlijk, dus deze maatstaf moet worden gerapporteerd per tijdstip-van-de-dag- en dag-van-de-week-segment waar het alarmvolume dit toelaat, in plaats van alleen als een 24/7 gemengd gemiddelde dat een ernstige kloof in reactie buiten kantooruren kan verbergen.

## Valkuilen

- **Alarmerkenning tellen als reactie**: een clinicus die een alarm bekijkt of afwijst is niet hetzelfde als het initiëren van een klinische reactie; definieer reactie strikt als een gedocumenteerde actie, geen passieve erkenning.
- **Een enkele gemengde tijd rapporteren over alle ernstniveaus**: een snel gemiddelde over gecombineerde laag- en hoogernstige alarmen kan een gevaarlijk trage reactietijd specifiek voor de hoogernstige alarmen verbergen, die het meest belangrijk zijn.
- **Effecten van bezettingspatronen negeren**: reactietijd varieert vaak aanzienlijk per tijdstip van de dag en dag van de week vanwege bezettingsniveaus; een enkel algeheel gemiddelde kan een systematische kloof in reactie buiten kantooruren of in het weekend verbergen.
- **Tijd tot interventie vergelijken tussen organisaties met verschillende alarmdrempels**: een organisatie met een conservatievere (gevoeligere) alarmdrempel zal meer laagacute alarmen genereren, wat de gemiddelde reactietijd kan verdunnen vergeleken met een organisatie die een strengere drempel gebruikt, onafhankelijk van de werkelijke klinische responsiviteit.

## Bronnen

- NHS England, richtlijnen over standaarden voor klinische reactie bij telemonitoring en virtuele afdelingen
- ONC / HealthIT.gov, richtlijnen over het ontwerp en de veiligheid van klinische alarmsystemen
- Collegiaal getoetste literatuur over reactietijden van alarmen bij telemonitoring van patiënten en klinische uitkomsten, bijvoorbeeld studies gepubliceerd in npj Digital Medicine

Zie ook: [beschikbaarheidspercentage van apparaten](../beschikbaarheidspercentage-van-apparaten/), aangezien een betrouwbaar cijfer voor tijd tot interventie afhangt van het feit dat het onderliggende monitoringapparaat daadwerkelijk online is om het alarm überhaupt te genereren.
