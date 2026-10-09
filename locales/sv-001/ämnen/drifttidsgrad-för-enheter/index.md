# Drifttidsgrad för enheter

Drifttidsgrad för enheter mäter andelen schemalagd övervakningstid som en uppkopplad hälsoenhet – en sensor för fjärrövervakning av patienter, ett bärbart föremål, eller en telemedicinenhet i hemmet – faktiskt är online, överför data och fungerar korrekt, snarare än offline, frånkopplad eller felfungerande. Det är det grundläggande infrastrukturmåttet bakom varje program för fjärrövervakning eller uppkopplad enhet: ett kliniskt larm, en biometrisk trend, eller en engagemangssiffra beräknad från en enhet som ofta var offline är bara så tillförlitlig som anslutningen bakom den.

## Varför det är viktigt

Ett helt kliniskt värdeerbjudande för ett program för fjärrövervakning av patienter beror på kontinuerlig eller nästan kontinuerlig datafångst; en enhet med dålig drifttid skapar tysta luckor i en patients kliniska bild som kan misstas för stabilitet (inget larm eftersom ingen data, inte för att inget förändrats) snarare än korrekt identifieras som ett övervakningsfel. Drifttid för enheter är också en ledande indikator på programkostnad och patientupplevelse: en enhet som ofta tappar anslutning genererar supportsamtal, patientfrustration, och potentiellt onödig klinisk uppsökande verksamhet för att kontrollera om en datalucka återspeglar en verklig klinisk händelse eller helt enkelt ett tekniskt fel. Eftersom fel i enhetsdrifttid ofta kan tillskrivas infrastruktur som organisationen kontrollerar (en dåligt konfigurerad mobilgateway, svag WiFi-täckning i en patients hem, en underhållen enhetsflotta) snarare än patienten, hör detta mått helt till leverantörs- och tekniska driftteamet, inte urskillningslöst invikt i patientengagemangsmått.

## Hur den beräknas

```
Drifttidsgrad för enheter = tid enheten var online och överförde
                            giltig data / total schemalagd
                            övervakningstid × 100

Segmentera grundorsaker till nedtid där data tillåter det:
  Enhetssidans fel          (batteri, hårdvarufel, firmware-krasch)
  Anslutningsfel            (mobil-/WiFi-/VPN-avbrott)
  Patientsidans faktorer    (enhet avstängd, flyttad utanför
                            räckvidd)

Stödjande tekniska parametrar att spåra tillsammans med drifttid:
  Genomsnittlig CPU-användning, minnesanvändning och batterinivå
  per enhet
  Medeltid mellan anslutningsfel
  Medeltid till återanslutning efter ett avbrott
```

## Genomräknat exempel

Ett fjärrövervakningsprogram för hjärtpatienter driftsätter 1 000 uppkopplade enheter, var och en förväntad att överföra kontinuerligt. Under en 30-dagars månad (720 schemalagda övervakningstimmar per enhet) loggar flottan kombinerat 705 600 faktiska onlinetimmar mot schemalagda 720 000 timmar, vilket ger en flottomfattande drifttidsgrad för enheter på 705 600 / 720 000 × 100 = 98 %. Grundorsaksanalys av de 14 400 nedtidstimmarna visar att 60 % kan tillskrivas mobilanslutningsavbrott koncentrerade till en specifik landsbygdsregion, 25 % till enheter med åldrande batterier markerade för utbyte, och 15 % till patienter som tillfälligt stängde av sin enhet. Denna uppdelning pekar på två tydliga, olika interventioner – en anslutningsfix för den berörda regionen och ett proaktivt batteriutbytesprogram – som en enda aggregerad drifttidssiffra inte skulle ha särskilt.

## Datakällor och förbehåll

Drifttidsdata kommer från enhetstillverkarens eller plattformsleverantörens egna system för enhetshantering och telemetri, som loggar anslutnings- och hjärtslagshändelser per enhet; organisationen bör bekräfta exakt vad leverantören räknar som "online" (en enhet kan rapportera sig själv som ansluten till ett nätverk samtidigt som den misslyckas med att överföra giltig klinisk data, vilket bör räknas som nedtid för kliniska ändamål även om leverantörens egen panel rapporterar den som ansluten). Drifttid bör rapporteras per enhetskohort eller geografi där volymen tillåter det, eftersom anslutningskvalitet ofta är geografiskt klustrad (landsbygds mobiltäckning, äldre byggnads-WiFi) snarare än jämnt fördelad över en patientpopulation, och en aggregerad flottomfattande siffra kan dölja ett allvarligt, åtgärdbart regionalt problem.

## Fallgropar

- **Att sammanblanda nätverksanslutning med giltig dataöverföring**: en enhet kan framstå som "ansluten" på en leverantörspanel samtidigt som den misslyckas med att överföra användbar klinisk data; definiera och mät drifttid mot faktisk giltig datamottagning, inte enbart rå nätverksanslutning.
- **Att endast rapportera ett flottomfattande genomsnitt**: detta kan dölja ett allvarligt, geografiskt eller enhetskohort-specifikt nedtidsproblem som ett riktat genomsnitt skulle avslöja och som har en specifik, åtgärdbar lösning.
- **Att inte särskilja grundorsak för nedtid**: enhetssidans, anslutnings- och patientsidans nedtid kräver var och en en helt annan intervention; en enda nedtidsprocentsats utan grundorsakssegmentering kan inte agerats på.
- **Att behandla en datalucka som klinisk stabilitet som standard**: en saknad dataström från en offline-enhet bör utlösa en teknisk anslutningskontroll, inte tyst tolkas som "inga nyheter är goda nyheter" för patientens kliniska status.

## Källor

- Continua Design Guidelines / Personal Connected Health Alliance, tekniska interoperabilitetsstandarder för uppkopplade hälsoenheter
- ONC / HealthIT.gov, vägledning om implementering av program för fjärrövervakning av patienter och tekniska krav
- Kollegialt granskad litteratur om tillförlitlighet hos enheter för fjärrövervakning av patienter och datafullständighet, exempelvis studier publicerade i npj Digital Medicine

Se även: [noggrannhet i triageledning](../noggrannhet-i-triageledning/), eftersom den beror på att ta emot fullständig, tillförlitlig enhetsdata för att kunna fatta ett korrekt triagebeslut över huvud taget.
