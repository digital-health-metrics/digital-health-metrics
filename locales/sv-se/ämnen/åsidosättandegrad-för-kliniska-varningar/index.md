# Åsidosättandegrad för Kliniska Varningar

Åsidosättandegraden för kliniska varningar mäter andelen larm från kliniskt beslutsstöd (CDS) — till exempel varningar om läkemedelsinteraktioner, allergivarningar och doskontroller som genereras av ett datoriserat ordinationssystem (CPOE) — som en kliniker avfärdar eller åsidosätter i stället för att agera på. Det är den standardiserade kvantitativa signal som används för att upptäcka och hantera "varningströtthet": den väldokumenterade tendensen hos kliniker att bli okänsliga för varningar när mängden lågvärdiga varningar blir överväldigande.

## Varför det spelar roll

Publicerade åsidosättandegrader för läkemedelsinteraktionsvarningar sträcker sig vanligtvis från ungefär hälften till över nittio procent, och en hög andel är inte automatiskt ett säkerhetsmisslyckande: många avbrytande varningar utlöses för interaktioner som är kliniskt obetydliga i sitt sammanhang, eller upprepar en varning som klinikern redan agerat på tidigare i samma ordinationsuppsättning, så ett väl inställt system utlöser medvetet färre, mer värdefulla varningar i stället för att försöka driva ner åsidosättandegraden till noll. Det som verkligen spelar roll för säkerheten är trenden över tid, fördelningen mellan allvarlighetsnivåer, och om kliniker dokumenterar ett skäl när de åsidosätter en varning med hög allvarlighetsgrad; en stigande åsidosättandegrad för väldokumenterade interaktioner med hög allvarlighetsgrad är ett verkligt styrningsproblem även när genomsnittet över alla varningar ser stabilt ut.

## Hur det beräknas

```
Åsidosättandegrad = åsidosatta varningar / totalt antal utlösta varningar × 100

Segmentera efter:
  - allvarlighetsnivå (t.ex. kontraindicerad, allvarlig, måttlig)
  - varningstyp (läkemedel-läkemedel-interaktion, allergi, dubblerad
    behandling, dosintervall)
  - om ett skäl för åsidosättande dokumenterades

En "dokumenterad åsidosättandegrad" följer andelen åsidosättanden som
åtföljs av en registrerad motivering, vilket i sig är ett styrningsmått.
```

## Löst exempel

Ett sjukhus CPOE-system utlöser 10 000 varningar om läkemedelsinteraktioner under en månad, varav 8 700 åsidosätts, vilket ger en total åsidosättandegrad på 87 %. Vid segmentering efter allvarlighetsgrad visar det sig att av 500 "kontraindicerade" varningar åsidosätts 60 (12 %), medan av 6 000 "måttliga" varningar åsidosätts 5 700 (95 %). Siffran för den måttliga nivån är i stort sett i linje med publicerade riktmärken och är inte i sig anledning till oro; siffran för den kontraindicerade nivån motiverar individuell fallgranskning, och det mest handlingsbara styrningsfyndet är att endast 340 av de 500 åsidosättandena på den nivån åtföljs av ett dokumenterat skäl.

## Datakällor och förbehåll

Den elektroniska patientjournalens revisionslogg, eller CDS-leverantörens egen varningsmodul, registrerar varje händelse av utlöst varning och respons, inklusive om klinikern angav en fritextmotivering eller en strukturerad sådan. Att jämföra åsidosättandegrader mellan organisationer, eller till och med mellan avdelningar inom samma organisation, kräver att man kontrollerar att de underliggande varningsregelverken och allvarlighetsstratifieringen är desamma; ett sjukhus med ett aggressivt inställt regelverk kommer att visa en lägre åsidosättandegrad av skäl som inte har något att göra med klinikers beteende.

## Vanliga misstag

- **Att behandla den råa åsidosättandegraden som en enda säkerhetspoäng**: detta blandar ihop väl motiverade åsidosättanden av lågvärdiga varningar med osäkra åsidosättanden av genuint farliga interaktioner; segmentera alltid efter allvarlighetsgrad.
- **Ingen fångst av skäl för åsidosättande**: utan ett dokumenterat skäl är det omöjligt att skilja mellan "denna varning var fel" och "denna varning var rätt, och klinikern fattade ett osäkert beslut", vilket är den faktiska distinktion som spelar roll för patientsäkerheten.
- **Inflation av varningsregler över tid**: att lägga till fler varningar "för säkerhets skull" utan att gallra bort lågvärdiga sådana är den direkta orsaken till stigande åsidosättandegrader och varningströtthet; styrning av varningar bör inkludera regelbunden översyn och avveckling av dåligt presterande regler, inte enbart övervakning.
- **Att jämföra andelar mellan system med olika avbrottsdesign**: en avbrytande varning med hårt stopp ger ett annat åsidosättandebeteende än en passiv, icke-blockerande varning, så de två är inte direkt jämförbara mått.

## Källor

- Kollegialt granskad litteratur om varningströtthet inom kliniskt beslutsstöd, brett publicerad i tidskrifter som JAMIA och npj Digital Medicine
- ONC / HealthIT.gov, vägledning om hälso-IT-säkerhet avseende kliniskt beslutsstöd
- Institute for Safe Medication Practices (ISMP), vägledning om design och styrning av CDS-varningar
