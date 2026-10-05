# Reduksjon i Sengedøgn

Reduksjon i sengedøgn måler det totale antallet sengedøgn på sykehus som unngås ved å flytte en definert behandlingsepisode, oftest postoperativ rekonvalesens eller håndtering av akutte tilstander, fra et tradisjonelt innleggelsesopphold til et digitalt støttet alternativ, for eksempel en virtuell avdeling eller et hjemmesykehusprogram. Det er den primære kapasitetsmetrikken for initiativer med virtuelle avdelinger og hjemmesykehus, og den oversetter en klinisk endring i omsorgsmodell direkte til den valutaen (sengekapasitet) som sykehusdriften og systemplanleggerne faktisk styrer etter.

## Hvorfor dette er viktig

Sengekapasitet for innlagte pasienter er en av de mest begrensede og dyreste ressursene i ethvert sykehussystem, og kjernen i verdiforslaget til en virtuell avdeling eller et hjemmesykehusprogram er at det trygt kan levere et definert nivå av klinisk behandling uten å oppta en fysisk seng, slik at kapasiteten frigjøres til pasienter som ikke kan behandles på noen annen måte. Reduksjon i sengedøgn gjør en ofte abstrakt påstand ("dette programmet forbedrer omsorgen") om til et konkret operasjonelt tall som kapasitetsplanleggere, økonomiavdelinger og bestillere kan handle direkte på: det kan brukes til å modellere om en investering i et overvåkingsprogram lønner seg gjennom unngåtte sengekostnader, og i så fall hvor mye. Fordi reduksjon i sengedøgn bare har verdi dersom pasientsikkerheten opprettholdes, bør den alltid rapporteres sammen med, aldri i stedet for, en sikkerhetsmetrikk (for eksempel reinnleggelsesrate eller rate for opptrapping til innleggelse) for samme populasjon.

## Hvordan det beregnes

```
Reduksjon i sengedøgn = forventede sengedøgn under standard innleggelsesbehandling
                        (basert på historiske data om liggetid for en
                        matchet pasientkohort) − faktiske sengedøgn brukt av
                        pasienter på den virtuelle/digitale pasientforløpet

Rapporter per klinisk forløp (f.eks. postoperativ rekonvalesens, akutt
forverring av luftveissykdom), siden forventet liggetid varierer enormt
mellom tilstander, og et blandet tall på tvers av urelaterte forløp
er ikke meningsfullt.
```

## Gjennomarbeidet eksempel

Et sykehus' historiske data viser at pasienter som kommer seg etter et bestemt elektivt kirurgisk inngrep har en gjennomsnittlig liggetid på 4 dager. Et program med virtuell avdeling inkluderer 150 pasienter som kommer seg etter samme inngrep, og skriver dem ut etter i gjennomsnitt 1,5 liggedøgn, mens resten av rekonvalesensen overvåkes eksternt. Reduksjonen i sengedøgn er (4 − 1,5) × 150 = 375 sengedøgn i måleperioden. Dette tallet bør rapporteres sammen med den virtuelle avdelingskohortens 30-dagers rate for opptrapping til innleggelse og reinnleggelsesrate for de samme 150 pasientene, siden en besparelse i sengedøgn som kommer på bekostning av en vesentlig høyere rate for opptrapping eller reinnleggelse ikke er den kliniske gevinsten hovedtallet ellers antyder.

## Datakilder og forbehold

Forventede sengedøgn krever et troverdig historisk utgangspunkt, ideelt sett fra en matchet pasientkohort behandlet med standard innleggelsesbehandling og med lignende kliniske kjennetegn (alder, komorbiditet, type inngrep, alvorlighetsgrad) som den virtuelle avdelingens populasjon, siden sammenligning mot et umatchet historisk gjennomsnitt risikerer å over- eller undervurdere den reelle reduksjonen dersom den digitalt håndterte kohorten systematisk er friskere eller sykere enn den historiske sammenligningsgruppen. Faktiske sengedøgn brukt på det digitale forløpet hentes fra sykehusets eget system for innleggelse, utskrivning og overføring (ADT); enhver opptrapping tilbake til innleggelse i den overvåkede rekonvalesensperioden bør telles ærlig mot programmet (som brukte sengedøgn, ikke ekskludert), siden utelatelse av opptrappinger fra beregningen kunstig ville blåse opp den tilsynelatende reduksjonen.

## Fallgruver

- **Rapportere reduksjon i sengedøgn uten en matchet sikkerhetssammenligning**: en virtuell avdeling som sparer sengedøgn, men har en vesentlig dårligere rate for opptrapping eller reinnleggelse enn standard behandling, har ikke vist noen reell forbedring; rapporter alltid begge sammen.
- **Bruke et umatchet eller utdatert historisk utgangspunkt**: sammenligning mot en historisk kohort med annen pasientsammensetning, komorbiditetsbyrde eller klinisk praksis fra en annen tid kan i betydelig grad overvurdere eller undervurdere den reelle besparelsen i sengedøgn.
- **Utelate opptrappinger tilbake til innleggelse fra beregningen**: en pasient som overvåkes virtuelt, men deretter trappes opp til en sengeplass underveis i rekonvalesensen, bør ha disse sengedøgnene regnet mot programmet, ikke stille fjernet fra analysen.
- **Blande forløp med svært ulik forventet liggetid**: å aggregere reduksjon i sengedøgn på tvers av klinisk urelaterte forløp (for eksempel å kombinere postoperativ rekonvalesens og kronisk luftveisbehandling) i ett enkelt tall skjuler hvilket spesifikt forløp som faktisk driver besparelsen.

## Kilder

- NHS England, veiledning for virtuelle avdelinger og hjemmesykehusprogrammer og standarder for rapportering av effekt på sengedøgn
- Fagfellevurdert litteratur om hjemmesykehus og modeller med virtuelle avdelinger, for eksempel studier publisert i JAMA Internal Medicine og npj Digital Medicine
- Institute for Healthcare Improvement (IHI), veiledning om kapasitetsstyring og alternative omsorgsmodeller

Se også: [reinnleggelsesrate på sykehus](../reinnleggelsesrate-på-sykehus/), sikkerhetsmetrikken som alltid bør rapporteres sammen med enhver påstand om reduksjon i sengedøgn for samme pasientpopulasjon.
