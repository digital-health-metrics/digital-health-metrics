# Adoptionsgrad för Patientportal

Adoptionsgraden för patientportal mäter andelen kvalificerade patienter som har registrerat sig för och aktivt använder en digital patientportal (till exempel NHS App, Patient Access, eller en portal kopplad till en elektronisk patientjournal som MyChart) för att se sina journaler, boka tider eller skicka meddelanden till sitt vårdteam. Det är indikatorn på grundläggande nivå för digitalt engagemang: en patient som aldrig har aktiverat ett konto kan inte dra nytta av någon efterföljande digital tjänst som byggs ovanpå portalen.

## Varför det spelar roll

En portal skapar bara värde när patienten faktiskt använder den, så organisationer bör följa upp adoption som en tratt snarare än en enda siffra: registrering, aktivering (första meningsfulla handling) och aktiv användning (användning inom ett definierat tidsfönster) är tre olika mått som alltför ofta slås ihop till ett. Digitala team pressas ofta att rapportera en enda, fördelaktig totalsiffra, och det krävs disciplin för att insistera på den svårare, mer ärliga uppdelningen. Låg eller ojämnt fördelad adoption är också en signal om jämlikhet: patienter som är äldre, har lägre digital kompetens, inte talar majoritetsspråket, eller saknar tillförlitligt bredband eller smartphone, har systematiskt mindre sannolikhet att räknas i täljaren, så en stigande genomsnittlig adoptionsgrad kan dölja en växande klyfta för de patienter som ofta har störst behov av kontakt med vården.

## Hur det beräknas

```
Registreringsgrad = patienter som skapat portalkonto / kvalificerad patientpopulation × 100
Aktiveringsgrad   = patienter som fullföljt en första meningsfull handling
                    (sett ett resultat, bokat en tid, skickat ett meddelande) / patienter med
                    konto × 100
Aktiv användningsgrad = patienter som loggat in minst en gång under de senaste
                    12 månaderna / kvalificerad patientpopulation × 100
```

Kvalificerad patientpopulation definieras vanligtvis som patienter som haft minst en kontakt med organisationen under en definierad retrospektiv period (vanligtvis 24 månader), och vars ålder och samtyckesstatus tillåter dem att inneha ett eget konto.

## Löst exempel

Ett primärvårdsnätverk betjänar 50 000 patienter som uppfyller kvalificeringsdefinitionen. Av dessa har 32 000 registrerat sig för portalen (registreringsgrad 64 %). Av dessa 32 000 registrerade har 27 000 fullföljt minst en meningsfull handling, till exempel att se ett provsvar (aktiveringsgrad 84 % av de registrerade). Under de senaste 12 månaderna har 21 000 av de ursprungliga 50 000 kvalificerade patienterna loggat in minst en gång (aktiv användningsgrad 42 %). Att bara rapportera registreringssiffran på 64 % skulle avsevärt överskatta det faktiska engagemanget; det är siffran för aktiv användning på 42 % som bör styra resursbeslut för portalprogrammet.

## Datakällor och förbehåll

Analysdata för portalen kommer vanligtvis antingen direkt från leverantörens plattform (inloggningshändelser, funktionsanvändning) eller från revisionsloggen i den underliggande elektroniska patientjournalen, och organisationer bör vara skeptiska till leverantörspaneler som bara visar registreringssiffror. Fullmaktsåtkomst (en förälder eller anhörigvårdare som hanterar ett konto för en patients räkning) bör märkas och rapporteras separat, eftersom det förändrar vem som faktiskt är "användaren". Valet av nämnare spelar enormt stor roll: att räkna mot hela listan över registrerade patienter i stället för en verkligt kvalificerad, kontaktbar population kommer alltid att underskatta adoption, medan att räkna endast mot aktivt inbjudna patienter alltid kommer att överskatta den, så kvalificeringsdefinitionen bör fastställas och publiceras tillsammans med varje rapporterad siffra.

## Vanliga misstag

- **Att likställa registrering med adoption**: ett konto som skapats men aldrig använts har ett värde nära noll; rapportera aktivering och aktiv användning utöver registrering, inte i stället för den.
- **Att ignorera digital exkludering**: de sammanlagda adoptionssiffrorna kan stiga samtidigt som klyftan mellan de mest och minst digitalt inkluderade grupperna växer; segmentera alltid efter ålder, socioekonomisk utsatthet, språk och funktionsnedsättning där datastyrningen tillåter det.
- **Att jämföra organisationer med olika kvalificeringsdefinitioner**: ett portalprogram som bara bjuder in patienter med registrerad e-postadress kommer att rapportera en högre andel än ett som mäter mot hela den registrerade listan, utan någon verklig skillnad i prestanda.
- **Att behandla en enstaka inloggning som pågående engagemang**: en retrospektiv period på 12 månader är vanlig, men ett kortare fönster (till exempel 90 dagar) ger en tidigare varning om minskande användning.

## Källor

- NHS England, statistik över användning och registrering av NHS App (publikationer från nhs.uk / digital.nhs.uk)
- ONC / HealthIT.gov, mått inom programmet för att främja interoperabilitet, inklusive patientåtkomstmåtten Visa, Ladda ner, Överföra (VDT)
- Kollegialt granskad litteratur om adoption av patientportaler och ojämlikheter inom digital hälsa, till exempel studier publicerade i Journal of the American Medical Informatics Association (JAMIA)

Se även: [uteblivandegrad för besök](../appointment-no-show-rate/), som direkt påverkas av portalbaserad självbokning och påminnelser.
