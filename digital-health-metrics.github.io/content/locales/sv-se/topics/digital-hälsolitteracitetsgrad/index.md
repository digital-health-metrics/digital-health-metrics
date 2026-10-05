# Digital hälsolitteracitetsgrad

Digital hälsolitteracitetsgrad mäter andelen av en patientpopulation som kan självständigt och framgångsrikt slutföra vanliga uppgifter på en digital hälsoplattform – logga in, boka en tid, ansluta till ett videobesök, eller läsa ett provresultat – utan att behöva hjälp från en annan person. Det skiljer sig från, och bör alltid mätas separat från, digital tillgångsgrad: en patient kan ha en smartphone och bredbandsanslutning och ändå inte kunna navigera en telemedicinplattform utan hjälp, och att sammanblanda de två måtten döljer just den population detta mått finns för att synliggöra.

## Varför det är viktigt

Digital tillgång ensamt garanterar inte att en patient kan använda en digital hälsotjänst effektivt: patienter med lägre hälsolitteracitet, begränsad erfarenhet av teknik generellt, kognitiv eller visuell nedsättning, eller språkbarriärer med plattformens gränssnitt kan ha full teknisk tillgång och ändå misslyckas med att slutföra en uppgift självständigt, och denna klyfta korrelerar systematiskt med samma demografiska grupper som redan möter andra hälsodisparitet. HIMSS Digital Health Equity Measurement Framework behandlar digital litteracitet som en distinkt pelare från tillgång just av denna anledning: att stänga en tillgångslucka utan att också åtgärda en litteracitetslucka kan lämna en population tekniskt uppkopplad men funktionellt oförmögen att dra nytta. Organisationer som mäter uppgiftsfullgörande och tid-till-fullgörande för vanliga plattformsåtgärder, segmenterade efter språk och socioekonomiska indikatorer, kan identifiera litteracitetshinder och rikta stöd (förenklade gränssnitt, understödd onboarding, innehåll på alternativt språk) mycket mer precist än organisationer som förlitar sig på enbart tillgångsmått eller övergripande nöjdhetspoäng.

## Hur den beräknas

```
Digital hälsolitteracitetsgrad = patienter som självständigt
                                 slutför en definierad uppgift
                                 utan hjälp / patienter som
                                 försöker den uppgiften × 100

Vanliga mätta uppgifter: kontoinloggning, bokning av tid,
anslutning till ett videobesök, visning av ett provresultat,
ifyllande av ett intagsformulär.

Rapportera per uppgift, inte som en enda sammanslagen poäng,
eftersom litteracitet för enkla uppgifter (inloggning) och
komplexa uppgifter (ifyllande av ett flerstegs intagsformulär)
skiljer sig avsevärt och att slå samman dem döljer var den
specifika barriären ligger.
```

## Genomräknat exempel

Ett vårdsystem spårar anslutning till videobesök som en definierad uppgift över 5 000 schemalagda telemedicintider under en månad. Av dessa ansluter 4 100 patienter framgångsrikt utan något supportsamtal eller teknisk hjälp under besöket (digital hälsolitteracitetsgrad för denna uppgift: 82 %). Att segmentera efter huvudspråk visar en grad på 89 % för engelsktalande patienter jämfört med 61 % för patienter vars huvudspråk skiljer sig från plattformens standardgränssnittsspråk – en klyfta på 28 punkter som skulle vara osynlig om endast den sammanslagna siffran på 82 % rapporterades, och en som pekar direkt mot en specifik, åtgärdbar intervention (översatt gränssnitt och instruktioner) snarare än ett vagt allmänt litteracitetsproblem.

## Datakällor och förbehåll

Data om uppgiftsfullgörande fångas vanligtvis från plattformens egna händelseloggar (nådde patienten videobesöket, slutfördes bokningsflödet utan avbrott), kompletterat med data om supportsamtal eller helpdeskkontakt för att identifiera uppgifter som tekniskt "slutfördes" endast för att patienten fick levande hjälp halvvägs igenom. En uppgift som räknas som "slutförd" rent från systemloggar kan dölja att en patient behövde ett telefonsamtal från en familjemedlem eller supportpersonal för att komma dit – ett genuint litteracitetsoberoende fullgörande bör definieras och spåras separat från ett understött sådant var som helst plattformen kan särskilja de två. Digital litteracitet korrelerar med, men är analytiskt distinkt från, hälsolitteracitet och allmän läskunnighet; ett validerat instrument (snarare än ett informellt antagande baserat enbart på ålder eller demografi) bör användas var som helst en formell bedömning krävs.

## Fallgropar

- **Att sammanblanda digital litteracitet med digital tillgång**: en patient med full teknisk tillgång kan ändå sakna litteraciteten att använda den effektivt; dessa är separata mått som kräver separata interventioner, och bör aldrig rapporteras som en enda kombinerad siffra.
- **Att räkna understödda fullgöranden som icke-understödda framgångar**: om en patient endast slutför en uppgift med ett supportsamtal eller en familjemedlems hjälp, är det en litteracitetslucka som plattformen har täckt över, inte löst; skilj understött från icke-understött fullgörande var som helst data tillåter det.
- **Att rapportera en enda sammanslagen poäng för uppgiftsfullgörande**: litteracitet för en enkel uppgift (inloggning) och en komplex (ifyllande av ett detaljerat intagsformulär) skiljer sig avsevärt; rapportera per uppgift för att identifiera exakt var barriären ligger.
- **Att anta att enbart ålder förutsäger digital litteracitet**: även om ålder korrelerar med lägre digital litteracitet i aggregat, är språkkunskaper i plattformens gränssnittsspråk och allmän teknikförtrogenhet ofta starkare individuella prediktorer och bör mätas direkt snarare än härledas från ålder.

## Källor

- HIMSS, Digital Health Equity Measurement Framework (DHEMF)
- Office of the National Coordinator for Health Information Technology (ONC), forskning om användbarhet hos hälsoinformationsteknik och digital hälsolitteracitet
- Kollegialt granskad litteratur om mätning och intervention av digital hälsolitteracitet, exempelvis studier publicerade i Journal of Medical Internet Research (JMIR)

Se även: [digital tillgångsgrad](../digital-tillgångsgrad/), förutsättningsmåttet som detta oftast, och oftast felaktigt, sammanblandas med.
