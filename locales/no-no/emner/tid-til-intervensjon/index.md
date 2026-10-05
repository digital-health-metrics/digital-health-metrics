# Tid til Intervensjon

Tid til intervensjon er tiden som går fra et automatisert helsevarsel genereres, for eksempel at en enhet for fjernovervåking oppdager et vitalt tegn utenfor normalområdet, eller at et digitalt triageverktøy flagger en pasient i forverring, til et medlem av det kliniske teamet faktisk setter i gang en respons. Det er prosessmetrikken som avgjør om et automatisert varslingssystem innfrir sitt kjerneløfte: å fange opp et problem tidligere enn en tradisjonell modell med planlagte kontroller eller pasientinitierte telefonsamtaler ville gjort.

## Hvorfor dette er viktig

Et varslingssystem som genererer et klinisk korrekt varsel som ikke etterfølges av en rettidig respons, har ikke faktisk forbedret pasientsikkerheten; hele verdiforslaget med fjernovervåking og automatisk varsling hviler på å lukke sløyfen raskere enn det alternative, uovervåkede pasientforløpet ville gjort. Fordi ulike alvorlighetsgrader av varsler krever ulik hastegrad i responsen, bør tid til intervensjon alltid rapporteres per alvorlighetsnivå i stedet for som ett enkelt gjennomsnitt, siden et raskt gjennomsnitt på tvers av alle varsler kan skjule farlig treg respons på det lille antallet av de mest alvorlige. Denne metrikken er også en av de klareste og mest overbevisende måtene å demonstrere verdien av et automatisert overvåkingsprogram overfor klinisk ledelse og betalere, fordi den direkte kan sammenlignes med den samme organisasjonens tidligere, ikke-automatiserte responstid for et lignende klinisk scenario.

## Hvordan det beregnes

```
Tid til intervensjon = tidsstempel(klinisk respons igangsatt) −
                       tidsstempel(varsel generert)

Rapporter median og en høy persentil (f.eks. 90.), segmentert etter
alvorlighetsnivå for varsel, ikke som ett enkelt blandet gjennomsnitt.

"Klinisk respons igangsatt" bør defineres presist og konsekvent,
f.eks. at en kliniker åpner pasientens journal og handler, eller et
dokumentert utgående kontaktforsøk, ikke bare at et varsel vises eller
kvitteres uten at noen handling utføres.
```

## Gjennomarbeidet eksempel

Varslingssystemet i et program for fjernovervåking av hjertet flagger 200 arytmivarsler med høy alvorlighetsgrad i en måned. Mediantiden fra varselet genereres til en kliniker setter i gang utgående kontakt er 12 minutter, med en tid på 90. persentil på 38 minutter. Historiske data fra den samme populasjonens tidligere, uovervåkede pasientforløp (der en lignende hendelse vanligvis bare ville dukket opp ved neste planlagte klinikkbesøk eller sykehuspresentasjon) viser en mediantid til enhver klinisk respons målt i dager, ikke minutter. Det er denne sammenligningen, ikke tallet på 12 minutter isolert sett, som viser overvåkingsprogrammets kliniske verdi; tallet på 90. persentil er like viktig, siden det identifiserer halen av varsler som tok over en halv time å handle på, og fortjener en egen rotårsaksgjennomgang.

## Datakilder og forbehold

Tidsstempler for varselgenerering kommer fra overvåkingsplattformens egen hendelseslogg; tidsstempler for klinisk respons kommer vanligvis fra revisjonssporet i den elektroniske pasientjournalen eller helseteamets eget arbeidsflyt- eller oppgavestyringssystem, og disse to systemene må være presist tidssynkronisert for at det beregnede intervallet skal være pålitelig. "Respons igangsatt" trenger en streng, dokumentert definisjon, siden en kliniker som bare ser på eller avviser et varsel uten videre handling er en fundamentalt annerledes, og langt mindre betryggende, hendelse enn en som utløser en faktisk utgående kontakt eller intervensjon; å blande de to sammen vil få responstiden til å se bedre ut enn den kliniske virkeligheten. Bemanningsnivået om natten og i helgene påvirker vanligvis tid til intervensjon betydelig, så denne metrikken bør rapporteres etter tid på døgnet og ukedag der varselvolumet tillater det, i stedet for bare som et blandet gjennomsnitt for hele døgnet, hele uken, som kan skjule et alvorlig gap i responsen utenom arbeidstid.

## Fallgruver

- **Telle kvittering av varsel som respons**: at en kliniker ser på eller avviser et varsel er ikke det samme som å sette i gang en klinisk respons; definer respons strengt som en dokumentert handling, ikke passiv kvittering.
- **Rapportere én enkelt blandet tid på tvers av alle alvorlighetsgrader**: et raskt gjennomsnitt på tvers av varsler med lav og høy alvorlighetsgrad kombinert kan skjule en farlig treg responstid spesifikt for varslene med høyest alvorlighetsgrad, som betyr mest.
- **Ignorere effekter av bemanningsmønstre**: responstiden varierer ofte betydelig etter tid på døgnet og ukedag på grunn av bemanningsnivå; et enkelt samlet gjennomsnitt kan skjule et systematisk gap i responsen utenom arbeidstid eller i helgene.
- **Sammenligne tid til intervensjon på tvers av organisasjoner med ulike varselterskler**: en organisasjon med en mer konservativ (mer sensitiv) varselterskel vil generere flere varsler med lav hastegrad, noe som kan fortynne gjennomsnittlig responstid sammenlignet med en organisasjon som bruker en strengere terskel, uavhengig av faktisk klinisk responsevne.

## Kilder

- NHS England, veiledning om fjernovervåking og standarder for klinisk respons ved virtuelle avdelinger
- ONC / HealthIT.gov, veiledning om utforming og sikkerhet av kliniske varslingssystemer
- Fagfellevurdert litteratur om responstider på varsler ved fjernovervåking av pasienter og kliniske utfall, for eksempel studier publisert i npj Digital Medicine

Se også: [oppetidsrate for enheter](../oppetidsrate-for-enheter/), siden et pålitelig tall for tid til intervensjon avhenger av at den underliggende overvåkingsenheten faktisk er pålogget for i det hele tatt å generere varselet.
