# Hospitalsgenindlæggelsesrate

Hospitalsgenindlæggelsesraten er andelen af udskrevne patienter, der uplanlagt genindlægges på hospitalet inden for et defineret vindue efter udskrivelsen, oftest 30 dage. For digital sundhed er det den metrik, der er mest direkte knyttet til betalernes økonomi og kontrakter om værdibaseret pleje: et program for fjernovervågning, opfølgning efter udskrivelse eller digital overgang mellem plejeniveauer, der ikke kan vise en troværdig effekt på genindlæggelser, vil næppe opnå fortsat støtte i form af refusion, uanset hvor gode dets engagementstal ser ud.

## Hvorfor dette er vigtigt

En uplanlagt genindlæggelse er dyr, forstyrrende for patienten og i mange sundhedssystemer nu direkte sanktioneret: ordninger som det amerikanske Hospital Readmissions Reduction Program nedsætter betalingen til hospitaler med højere end forventede genindlæggelsesrater for bestemte tilstande, og derfor bestiller hospitaler aktivt digitale programmer til opfølgning efter udskrivelse og fjernovervågning, der skal reducere dem. En betydelig andel af genindlæggelserne anses for potentielt forebyggelige, drevet af utilstrækkelig udskrivningsvejledning, aflyste opfølgningsaftaler, misforståelser om medicin eller uopdaget forværring af symptomer, som et veldesignet digitalt kontaktpunkt kan opfange tidligere, og det er netop det hul, digitale værktøjer til overgang mellem plejeniveauer retter sig mod. Genindlæggelsesraten bør altid læses sammen med case mix: et program, der betjener en sygere og mere kompleks population, vil have en strukturelt højere baselinerate end et, der betjener en sundere population, uafhængigt af programmets kvalitet.

## Hvordan det beregnes

```
30-dages genindlæggelsesrate = uplanlagte genindlæggelser inden for 30
                               dage efter udskrivelsen / samlede
                               indeksudskrivelser × 100

Udeluk fra tælleren: planlagte genindlæggelser (fx en planlagt
opfølgende procedure) og overflytninger, der er en fortsættelse af
det samme plejeforløb og ikke en ny indlæggelse.

Risikojustér, hvor det er muligt, med et anerkendt case mix- eller
komorbiditetsindeks, før raterne sammenlignes på tværs af forskellige
patientpopulationer eller tidsperioder.
```

## Gennemarbejdet eksempel

Et hospital udskriver 1.200 patienter med hjertesvigt i et kvartal. Af disse genindlægges 210 inden for 30 dage, hvoraf 15 er planlagte genindlæggelser til en planlagt procedure og udelades. Den uplanlagte 30-dages genindlæggelsesrate er (210 − 15) / 1.200 × 100 = 16,25 %. Der indføres et program for fjernovervågning for en delmængde på 400 af disse patienter (udvalgt efter klinisk risiko og ikke tilfældigt), og deres uplanlagte genindlæggelsesrate er 14 % sammenlignet med 18 % for de 800 patienter, der ikke er indskrevet. Fordi indskrivningen byggede på klinisk risiko og ikke på tilfældig fordeling, er denne forskel et fingerpeg og ikke et endeligt bevis på programmets effekt og bør fortolkes sammen med en risikojusteringsanalyse i stedet for at tages for pålydende.

## Datakilder og forbehold

Genindlæggelsesdata hentes typisk fra hospitalets eget ADT-feed (indlæggelse, udskrivning og overflytning) for genindlæggelser på samme institution, men en patient, der genindlægges på et andet hospital, vil slet ikke fremgå af dette feed, så sporing af genindlæggelser på ét hospital undervurderer systematisk de reelle genindlæggelsesrater, medmindre den suppleres med data fra en regional sundhedsinformationsudveksling, betalernes hævedata eller delstatsdækkende databaser over alle betalere. Tilskrivning til et digitalt program kræver omhu: patienter, der vælger at deltage i et frivilligt program for fjernovervågning, er sjældent en tilfældig stikprøve af de udskrevne patienter, så en naiv sammenligning af genindlæggelsesrater mellem indskrevne og ikke-indskrevne vil have tendens til at blive forvansket af netop de udvælgelseseffekter, der fik nogle patienter til at have større sandsynlighed for at melde sig til i første omgang.

## Faldgruber

- **At sammenligne rå, ikke-risikojusterede rater på tværs af populationer**: et program, der betjener en sygere population, vil vise en højere rå genindlæggelsesrate end et, der betjener en sundere population, selv om programmet i sig selv er mere effektivt; risikojustér altid, før der sammenlignes.
- **At undertælle genindlæggelser på andre institutioner**: hvis man kun støtter sig til ét hospitals egne ADT-data, går genindlæggelser andre steder tabt, og den reelle rate undervurderes, især i områder med flere konkurrerende hospitalssystemer.
- **Selektionsbias ved frivillig indskrivning i programmet**: patienter, der vælger at melde sig til et digitalt opfølgningsprogram, adskiller sig ofte systematisk (i sundhedskompetence, social støtte eller motivation) fra dem, der ikke gør, og det forvansker enhver naiv sammenligning før/efter eller mellem indskrevne og ikke-indskrevne.
- **At tælle enhver tilbagevenden til samme institution som en genindlæggelse**: en planlagt genindlæggelse (for eksempel en planlagt anden fase af en procedure) er ikke et tegn på en mislykket udskrivelse og bør udelades fra tælleren og ikke blandes sammen med reelt uplanlagte tilbagevendinger.

## Kilder

- Centers for Medicare & Medicaid Services (CMS), specifikationer for Hospital Readmissions Reduction Program og målet for genindlæggelser på hospitalet generelt
- Institute for Healthcare Improvement (IHI), vejledning om at reducere undgåelige genindlæggelser
- Peer reviewet litteratur om digital fjernovervågning og interventioner til overgang mellem plejeniveauer for at reducere genindlæggelser, for eksempel undersøgelser offentliggjort i JAMA Network Open og npj Digital Medicine

Se også: [nøjagtighed af triage-henvisning](../nøjagtighed-af-triage-henvisning/), da en uhensigtsmæssig første henvisning i sig selv kan være en nedstrøms drivkraft for undgåelige indlæggelser.
