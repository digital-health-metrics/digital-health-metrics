# Minskning av vårddygn

Minskning av vårddygn mäter det totala antalet slutenvårdsdagar som undviks genom att flytta en definierad vårdepisod – vanligast postoperativ återhämtning eller hantering av akuta tillstånd – från en traditionell slutenvårdsvistelse till ett digitalt understött alternativ som en virtuell avdelning eller ett sjukhus-i-hemmet-program. Det är det primära kapacitetsmåttet för initiativ med virtuella avdelningar och sjukhus-i-hemmet, som översätter en klinisk vårdmodellsförändring direkt till den valuta (vårdplatskapacitet) som sjukhusledning och systemplanerare faktiskt styr mot.

## Varför det är viktigt

Slutenvårdens vårdplatskapacitet är en av de mest begränsade och kostsamma resurserna i alla sjukhussystem, och det centrala värdeerbjudandet för ett program med virtuell avdelning eller sjukhus-i-hemmet är att det säkert kan leverera en definierad nivå av klinisk vård utan att uppta en fysisk vårdplats, vilket frigör den kapaciteten för patienter som inte kan hanteras på något annat sätt. Minskning av vårddygn omvandlar ofta ett abstrakt påstående ("detta program förbättrar vården") till en konkret operativ siffra som sjukhusets kapacitetsplanerare, ekonomiteam och upphandlare kan agera direkt på: den kan användas för att modellera om en investering i ett övervakningsprogram betalar sig själv i undvikna vårdplatskostnader, och hur mycket. Eftersom minskning av vårddygn endast har värde om patientsäkerheten upprätthålls, bör den alltid rapporteras tillsammans med, aldrig istället för, ett säkerhetsutfallsmått (som återinläggningsgrad eller eskaleringsgrad till slutenvård) för samma population.

## Hur den beräknas

```
Minskning av vårddygn = förväntade vårddygn vid standard
                        slutenvård (baserat på historisk
                        vårdtidsdata för en matchad
                        patientkohort) − faktiska vårddygn
                        använda av patienter på den
                        virtuella/digitala vägen

Rapportera per klinisk väg (t.ex. postoperativ återhämtning, akut
andningsförsämring), eftersom förväntad vårdtid varierar enormt
beroende på tillstånd och en sammanslagen siffra över orelaterade
vägar är inte meningsfull.
```

## Genomräknat exempel

Ett sjukhus historiska data visar att patienter som återhämtar sig från ett specifikt elektivt kirurgiskt ingrepp har en genomsnittlig slutenvårdstid på 4 dagar. Ett virtuellt avdelningsprogram skriver in 150 patienter som återhämtar sig från samma ingrepp, och skriver ut dem efter i genomsnitt 1,5 vårddygn med resten av återhämtningen övervakad på distans. Minskningen av vårddygn är (4 − 1,5) × 150 = 375 vårddygn under mätperioden. Denna siffra bör rapporteras tillsammans med den virtuella avdelningskohortens 30-dagars eskaleringsgrad till slutenvård och återinläggningsgrad för samma 150 patienter, eftersom en besparing av vårddygn som kommer till priset av en materiellt högre eskalerings- eller återinläggningsgrad inte är den kliniska vinsten som rubriksiffran annars skulle antyda.

## Datakällor och förbehåll

Förväntade vårddygn kräver en trovärdig historisk baslinje, idealiskt från en matchad patientkohort som behandlats under standard slutenvård med liknande kliniska egenskaper (ålder, samsjuklighet, ingreppstyp, allvarlighetsgrad) som den virtuella avdelningspopulationen, eftersom jämförelse mot ett omatchat historiskt genomsnitt riskerar att över- eller underskatta den faktiska minskningen om den digitalt hanterade kohorten är systematiskt friskare eller sjukare än den historiska jämförelsegruppen. Faktiska vårddygn använda på den digitala vägen kommer från sjukhusets eget flöde för inläggning-utskrivning-överflyttning (ADT); varje eskalering tillbaka till slutenvård under den övervakade återhämtningsperioden bör räknas ärligt mot programmet (som använda vårddygn, inte exkluderade), eftersom att exkludera eskaleringar från beräkningen skulle artificiellt blåsa upp den skenbara minskningen.

## Fallgropar

- **Att rapportera minskning av vårddygn utan en matchad säkerhetsjämförelse**: en virtuell avdelning som sparar vårddygn men har en materiellt sämre eskalerings- eller återinläggningsgrad än standardvård har inte demonstrerat en genuin förbättring; rapportera alltid båda tillsammans.
- **Att använda en omatchad eller föråldrad historisk baslinje**: att jämföra mot en historisk kohort med olika fallmix, samsjuklighetsbörda eller era av klinisk praxis kan avsevärt över- eller underskatta den faktiska besparingen av vårddygn.
- **Att exkludera eskaleringar tillbaka till slutenvård från beräkningen**: en patient som övervakas virtuellt men sedan eskaleras till en slutenvårdsplats mitt under återhämtningen bör ha dessa vårddygn räknade mot programmet, inte tyst släppta från analysen.
- **Att slå samman vägar med mycket olika förväntade vårdtider**: att aggregera minskning av vårddygn över kliniskt orelaterade vägar (till exempel att kombinera postoperativ återhämtning och kronisk andningshantering) till en siffra döljer vilken specifik väg som faktiskt driver besparingen.

## Källor

- NHS England, vägledning om program för virtuella avdelningar och sjukhus-i-hemmet och rapporteringsstandarder för påverkan på vårddygn
- Kollegialt granskad litteratur om sjukhus-i-hemmet- och virtuella avdelningsmodeller, exempelvis studier publicerade i JAMA Internal Medicine och npj Digital Medicine
- Institute for Healthcare Improvement (IHI), vägledning om kapacitetshantering och alternativa vårdmodeller

Se även: [återinläggningsgrad](../hospital-readmission-rate/), säkerhetsmåttet som alltid bör rapporteras tillsammans med alla påståenden om minskning av vårddygn för samma patientpopulation.
