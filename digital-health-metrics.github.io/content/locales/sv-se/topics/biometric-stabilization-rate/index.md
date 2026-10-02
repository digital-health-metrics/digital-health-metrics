# Andel biometrisk stabilisering

Andel biometrisk stabilisering är andelen inskrivna patienter som uppnår och upprätthåller ett kliniskt definierat målintervall för ett biometriskt mått – vanligast blodtryck under en tröskel som 130/80 mmHg – med hjälp av en uppkopplad övervakningsenhet, under en varaktig period snarare än vid en enstaka tidpunkt. Det skiljer sig från andel biometrisk förbättring (se det ämnet): förbättring mäter storleken på en förändring från baslinjen, medan stabilisering mäter om en patient hålls tillförlitligt inom ett säkert intervall när behandling eller övervakning väl har påbörjats, vilket är det utfall som betyder mest för patienter som redan är nära målet eller redan behandlas.

## Varför det är viktigt

För en stor andel patienter i program för kroniska sjukdomar – särskilt hypertoni, där riktlinjebaserade blodtrycksmål är väletablerade och direkt kopplade till kardiovaskulär risk – är det kliniska målet inte en engångsförbättring utan varaktig kontroll, och en patient som pendlar in och ut ur målintervallet utgör en materiellt annorlunda risk än en som förbättras en gång och stannar där. Uppkopplade enheter (mobila blodtrycksmanschetter, kontinuerliga glukosmätare) gör det möjligt att mäta stabilisering kontinuerligt snarare än endast vid klinikbesök, vilket lyfter fram patienter vars mottagningsvärden ser kontrollerade ut men vars hemvärden är instabila – ett mönster känt som maskerad hypertoni som enbart periodisk personlig mätning inte kan upptäcka. Att rapportera stabiliseringsgrad snarare än endast en enda "inom mål"-ögonblicksbild tvingar ett program att konfrontera hur konsekvent, inte bara hur ofta, det håller patienter inom intervallet.

## Hur den beräknas

```
Andel biometrisk stabilisering = patienter med ≥ 80 % av
                                 mätningarna inom målintervallet
                                 under mätperioden / patienter med
                                 ett minsta antal giltiga
                                 mätningar under den perioden × 100

Exempeltrösklar:
  Blodtryck — mål < 130/80 mmHg (eller den tillämpliga kliniska
             riktlinjetröskeln för patientens riskprofil)
  Glukos    — målintervall enligt riktlinjer för kontinuerlig
             glukosövervakning, rapporterat som "tid inom
             intervall"

En minsta tröskel för mätfrekvens (t.ex. minst 3 mätningar per
vecka) bör fastställas innan en patient inkluderas i nämnaren, för
att undvika att sällanmätare framstår som artificiellt stabila.
```

## Genomräknat exempel

Ett fjärrövervakningsprogram för hypertoni skriver in 600 patienter med mobila blodtrycksmanschetter, var och en förväntad att ta minst 3 mätningar per vecka. Av dessa uppfyller 540 den minsta tröskeln för mätfrekvens under en mätperiod på 3 månader och inkluderas i nämnaren. Av dessa 540 har 350 minst 80 % av sina mätningar under 130/80 mmHg, vilket ger en andel biometrisk stabilisering på 350 / 540 × 100 = 65 %. De 60 patienter som exkluderades på grund av otillräckliga mätningar rapporteras separat som ett dataluckeproblem, inte invikta i vare sig täljaren eller gruppen "ostabiliserad", eftersom deras verkliga kontrollstatus verkligen är okänd snarare än dålig.

## Datakällor och förbehåll

Mätningarna kommer direkt från den uppkopplade enhetens egen dataström, vilket är mer objektivt och betydligt mer frekvent än mottagningsmätning, men fel i enhetsplacering och teknik (en felaktigt storleksanpassad eller placerad blodtrycksmanschett) kan introducera en systematisk snedvridning som en enda valideringsmätning på mottagningen inte nödvändigtvis fångar upp. Valet av målintervall bör följa den aktuellt tillämpliga kliniska riktlinjen för patientens specifika riskprofil och samsjuklighet snarare än en enda universell tröskel, eftersom riktlinjemål skiljer sig åt beroende på patientens ålder, njurfunktion och kardiovaskulär risk. En patient med låg mätfrekvens bör aldrig i tysthet räknas som "stabil" som standard; att exkludera dem från nämnaren med transparent rapportering av exklusionen är mer ärligt än att räkna dem som kontrollerade eller okontrollerade baserat på alltför lite data.

## Fallgropar

- **Att behandla en enda mätning inom intervallet som stabilisering**: stabilisering handlar om varaktig kontroll under en definierad period, inte en ögonblicksbild; kräv alltid en minsta andel mätningar inom intervallet under den perioden, inte en enda kvalificerande mätning.
- **Att i tysthet exkludera sällanmätare utan att rapportera det**: patienter som sällan tar mätningar är inte automatiskt stabila eller instabila; exkludera dem transparent från nämnaren och rapportera exklusionsgraden som ett separat datafullständighetsmått.
- **Att ignorera enhetskalibrering och tekniska fel**: en dåligt sittande manschett eller en okalibrerad enhet kan systematiskt snedvrida mätningar i en riktning, vilket en stabiliseringsgrad som naivt beräknas från rådata från enheten inte kommer att fånga upp utan periodisk validering.
- **Att använda ett enda universellt målintervall för alla patienter**: kliniska riktlinjemål varierar beroende på patientens riskprofil och samsjuklighet; att tillämpa en enda generell tröskel på en kliniskt heterogen population kommer att felklassificera vissa patienter som stabiliserade eller ostabiliserade i förhållande till deras faktiska individualiserade mål.

## Källor

- American Heart Association (AHA) / American College of Cardiology (ACC), riktlinjemål för blodtryck och vägledning om hemblodtrycksövervakning
- International Diabetes Federation och American Diabetes Association (ADA), konsensusvägledning om "tid inom intervall" för kontinuerlig glukosövervakning
- Kollegialt granskad litteratur om fjärrövervakning av biometriska mått och varaktig tillståndskontroll, exempelvis studier publicerade i npj Digital Medicine

Se även: [andel biometrisk förbättring](../biometric-improvement-rate/), det relaterade måttet för storleken på förändring från baslinjen, till skillnad från varaktig kontroll efter att ett mål uppnåtts.
