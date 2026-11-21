# Reinnleggelsesrate på Sykehus

Reinnleggelsesrate på sykehus er andelen utskrevne pasienter som reinnlegges på sykehus, uplanlagt, innenfor et definert vindu etter utskrivning, oftest 30 dager. For digital helse er det metrikken som er mest direkte knyttet til betalerøkonomi og kontrakter for verdibasert helsehjelp: et program for fjernovervåking, oppfølging etter utskrivning eller digital overgang mellom omsorgsnivåer som ikke kan vise en troverdig effekt på reinnleggelser, vil neppe få fortsatt refusjonsstøtte, uansett hvor gode engasjementstallene ser ut.

## Hvorfor dette er viktig

En uplanlagt reinnleggelse er kostbar, forstyrrende for pasienten og i mange helsesystemer nå direkte straffet: ordninger som det amerikanske Hospital Readmissions Reduction Program reduserer betalingen til sykehus med høyere enn forventet reinnleggelsesrate for bestemte tilstander, og derfor bestiller sykehus aktivt digitale programmer for oppfølging etter utskrivning og fjernovervåking som tar sikte på å redusere dem. En betydelig andel av reinnleggelsene regnes som potensielt forebyggbare, drevet av utilstrekkelige utskrivningsinstruksjoner, glemte oppfølgingsavtaler, misforståelser om medisiner eller uhåndtert symptomforverring som et godt utformet digitalt kontaktpunkt kan fange opp tidligere, og det er nettopp dette gapet digitale verktøy for omsorgsoverganger retter seg mot. Reinnleggelsesrate bør alltid leses sammen med pasientsammensetningen: et program som betjener en sykere, mer kompleks populasjon vil ha en strukturelt høyere baselinerate enn et som betjener en friskere populasjon, uavhengig av programmets kvalitet.

## Hvordan det beregnes

```
30-dagers reinnleggelsesrate = uplanlagte reinnleggelser innen 30 dager
                               etter utskrivning / totalt antall
                               indeksutskrivninger × 100

Ekskluder fra telleren: planlagte reinnleggelser (f.eks. et planlagt
oppfølgingsinngrep), og overføringer som er en fortsettelse av samme
behandlingsepisode i stedet for en ny innleggelse.

Risikojuster der det er mulig, ved hjelp av en akseptert indeks for
pasientsammensetning eller komorbiditet, før rater sammenlignes på
tvers av ulike pasientpopulasjoner eller tidsperioder.
```

## Gjennomarbeidet eksempel

Et sykehus skriver ut 1 200 pasienter med hjertesvikt i et kvartal. Av disse reinnlegges 210 innen 30 dager, hvorav 15 er planlagte reinnleggelser for et planlagt inngrep og ekskluderes. Den uplanlagte 30-dagers reinnleggelsesraten er (210 − 15) / 1 200 × 100 = 16,25 %. Et program for fjernovervåking innføres for en delmengde på 400 av disse pasientene (valgt etter klinisk risiko, ikke tilfeldig), og deres uplanlagte reinnleggelsesrate er 14 %, sammenlignet med 18 % for de 800 pasientene som ikke var innrullert. Fordi innrulleringen var basert på klinisk risiko i stedet for tilfeldig tildeling, er denne forskjellen veiledende snarere enn avgjørende bevis på programmets effekt, og bør tolkes sammen med en risikojusteringsanalyse i stedet for å tas for pålydende.

## Datakilder og forbehold

Reinnleggelsesdata hentes vanligvis fra sykehusets eget ADT-feed (innleggelse, utskrivning og overføring) for reinnleggelser til samme institusjon, men en pasient som reinnlegges på et annet sykehus vil ikke vises i dette feedet i det hele tatt, så sporing av reinnleggelser ved ett enkelt sykehus underteller systematisk de reelle reinnleggelsesratene med mindre den suppleres med data fra regional helseinformasjonsutveksling, betalernes refusjonsdata eller delstatlige databaser for alle betalere. Å tilskrive effekt til et digitalt program krever aktsomhet: pasienter som melder seg på et frivillig program for fjernovervåking er sjelden et tilfeldig utvalg av de utskrevne pasientene, så en naiv sammenligning av reinnleggelsesrater for innrullerte mot ikke-innrullerte vil ha en tendens til å bli forstyrret av nettopp de seleksjonseffektene som gjorde enkelte pasienter mer tilbøyelige til å melde seg på i utgangspunktet.

## Fallgruver

- **Sammenligne rå, ikke-risikojusterte rater på tvers av populasjoner**: et program som betjener en sykere populasjon vil vise en høyere rå reinnleggelsesrate enn et som betjener en friskere populasjon selv om programmet i seg selv er mer effektivt; risikojuster alltid før sammenligning.
- **Undertelle reinnleggelser til andre institusjoner**: å stole bare på et enkelt sykehus' egne ADT-data vil overse reinnleggelser andre steder og undervurdere den reelle raten, særlig i områder med flere konkurrerende sykehussystemer.
- **Seleksjonsskjevhet ved frivillig innrullering i programmet**: pasienter som velger å melde seg på et digitalt oppfølgingsprogram skiller seg ofte systematisk (i helsekompetanse, sosial støtte eller motivasjon) fra dem som ikke gjør det, noe som forstyrrer enhver naiv sammenligning før/etter eller innrullert/ikke-innrullert.
- **Telle enhver retur til samme institusjon som en reinnleggelse**: en planlagt reinnleggelse (for eksempel et planlagt inngrep i andre trinn) er ikke et signal om en mislykket utskrivning og bør ekskluderes fra telleren, ikke blandes sammen med reelt uplanlagte returer.

## Kilder

- Centers for Medicare & Medicaid Services (CMS), Hospital Readmissions Reduction Program og spesifikasjoner for målet Hospital-Wide Readmission
- Institute for Healthcare Improvement (IHI), veiledning om å redusere unngåelige reinnleggelser
- Fagfellevurdert litteratur om digital fjernovervåking og tiltak for omsorgsoverganger for å redusere reinnleggelser, for eksempel studier publisert i JAMA Network Open og npj Digital Medicine

Se også: [treffsikkerhet i triageruting](../treffsikkerhet-i-triageruting/), siden uhensiktsmessig innledende ruting i seg selv kan være en nedstrøms drivkraft for unngåelige innleggelser.
