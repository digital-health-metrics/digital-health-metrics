# Omdirigeringsgrad från akutmottagning

Omdirigeringsgrad från akutmottagning (ED-omdirigeringsgrad) mäter andelen patientkontakter hanterade av ett digitalt triage- eller virtuellt vårdverktyg som utan den interventionen rimligen skulle ha resulterat i ett akutmottagningsbesök, men istället hanterades säkert genom en lägre skärpevåg – egenvårdsråd, en primärvårdstid, eller ett schemalagt akut vårdbesök. Det är en specifik, högvärdig delmängd av noggrannhet i triageledning (se det ämnet) helt fokuserad på undviken användning av akutmottagning, utfallet mest direkt kopplat till både sjukvårdskostnad och lättnad av akutmottagningskapacitet.

## Varför det är viktigt

Akutmottagningar hör till de dyraste vårdmiljöerna per kontakt och används ofta för problem som säkert kan hanteras någon annanstans, så ett digitalt triageverktygs förmåga att säkert omdirigera lämpliga fall bort från akutmottagningen är en av dess mest kommersiellt och operativt värdefulla förmågor – och en av de lättaste att kommunicera till en betalare eller ett vårdsystem som utvärderar verktygets avkastning på investeringen. Men omdirigering har endast värde om den är säker: ett verktyg som aggressivt omdirigerar patienter bort från akutmottagningen till priset av att missa genuina nödsituationer har optimerat helt fel sida av avvägningen, vilket är varför ED-omdirigeringsgrad alltid bör rapporteras tillsammans med ett säkerhetsmått som spårar missade eller fördröjda akutpresentationer bland omdirigerade patienter, inte rapporteras isolerat som en ren effektivitetsvinst.

## Hur den beräknas

```
ED-omdirigeringsgrad = patientkontakter säkert omdirigerade bort
                       från akutmottagningen till en lämplig lägre
                       skärpevåg / totalt patientkontakter
                       bedömda som potentiellt akutmottagningsbundna
                       × 100

"Säkert omdirigerad" kräver bekräftelse, via uppföljning eller
länkad hälsojournaldata, att patientens tillstånd faktiskt inte
krävde akutvård inom ett definierat uppföljningsfönster (t.ex. 72
timmar) — ett omdirigeringsbeslut valideras inte som säkert enbart
för att patienten inte omedelbart gick till akutmottagningen
efteråt.

Rapportera tillsammans med:
  Missad akutgrad = omdirigerade patienter som faktiskt krävde
                   akutvård inom uppföljningsfönstret / totalt
                   omdirigerade patienter × 100
```

## Genomräknat exempel

En digital triagetjänst bedömer 3 000 patientkontakter under en månad som dess kliniska algoritm bedömer som potentiellt akutmottagningsbundna utan intervention. Av dessa omdirigeras 1 800 till en lägre skärpevåg (en omdirigeringsgrad på 60 %). Uppföljning av den omdirigerade kohorten vid 72 timmar med hjälp av länkad hälsojournaldata finner att 45 av de 1 800 omdirigerade patienterna faktiskt presenterade sig på en akutmottagning inom det fönstret (en missad akutgrad på 45 / 1 800 × 100 = 2,5 %). Att rapportera 60 %-omdirigeringssiffran utan 2,5 %-missad akutgraden skulle endast presentera hälften av säkerhets-effektivitetsavvägningen som faktiskt avgör om verktygets omdirigeringsbeteende är lämpligt kalibrerat.

## Datakällor och förbehåll

Att bekräfta att en omdirigerad patient inte efterföljande krävde akutvård beror på länkad data – antingen samma vårdsystems egna akutmottagningsregister, ett regionalt utbyte av hälsoinformation, eller ett strukturerat uppföljningssamtal eller enkät med patienten – och ett omdirigeringsprogram som drivs utan någon av dessa datakällor kan faktiskt inte validera sin egen säkerhet, bara anta den baserat på frånvaron av ett klagomål. Lämplig omdirigeringsgrad och acceptabel missad akutgrad är kliniska policybeslut, inte rent statistiska, och bör fastställas avsiktligt av klinisk ledning snarare än tillåtas uppstå som en bieffekt av vilken tröskel ett triagealgoritm råkar använda som standard. Omdirigeringsgrad bör rapporteras efter presenterad symtom- eller besvärskategori, eftersom lämpliga omdirigeringsgrader varierar enormt beroende på tillstånd (en mindre skärsår kontra bröstsmärta motiverar mycket olika omdirigeringströsklar).

## Fallgropar

- **Att rapportera omdirigeringsgrad utan en länkad missad akut-säkerhetsmått**: en hög omdirigeringsgrad uppnådd genom undertriage av genuina nödsituationer är inte en framgång; de två måtten måste alltid rapporteras tillsammans.
- **Att anta att inget akutmottagningsbesök betyder att omdirigeringen var säker**: en patient kan presentera sig på ett annat, icke-länkat sjukhussystems akutmottagning, eller kan ha ett genuint skadligt utfall utan att någonsin presentera sig på någon akutmottagning; validera säkerhet genom länkad data eller strukturerad uppföljning, inte enbart frånvaron av ett akutmottagningsbesök i samma system.
- **Att ställa in omdirigeringströskeln rent för att maximera omdirigeringsgraden**: ett algoritm eller en policy inställd för att maximera omdirigering utan en matchande säkerhetsbegränsning kommer att byta patientsäkerhet mot en bättre framstående effektivitetssiffra.
- **Att blanda omdirigeringsgrad över alla besvärstyper**: lämpliga omdirigeringsgrader skiljer sig enormt beroende på presenterat besvär; en enda sammanslagen grad kan inte visa om verktyget presterar säkert och effektivt för de specifika kliniskt viktigaste tillstånden.

## Källor

- Agency for Healthcare Research and Quality (AHRQ), forskning om akutmottagningsanvändning och lämplig omdirigering av vårdmiljö
- NHS England, vägledning om NHS 111 och säkerhets- och effektivitetsstandarder för digital triage inom akut vård
- Kollegialt granskad litteratur om digital triage och virtuell vårds ED-omdirigeringsutfall, exempelvis studier publicerade i Annals of Emergency Medicine och npj Digital Medicine

Se även: [noggrannhet i triageledning](../triage-routing-accuracy/), det bredare noggrannhetsmåttet vars specifika, säkerhetskritiska delmängd detta är.
