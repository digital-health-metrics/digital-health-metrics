# LTV til CAC-forhold

LTV til CAC-forholdet sammenligner en kundes livstidsverdi (LTV), den totale inntekten eller marginen en organisasjon forventer å tjene på en pasient eller kunde gjennom hele forholdet til produktet, med de reelle kostnadene ved å anskaffe den kunden (se reell kostnad for kundeanskaffelse). Det er den viktigste enkeltmetrikken for enhetsøkonomi for å bedømme om en digital helseorganisasjons vekst er økonomisk bærekraftig, fordi en voksende kundebase anskaffet med tap ikke er et tegn på sunnhet, uansett hvor positiv vekstkurven ser ut.

## Hvorfor dette er viktig

En digital helseorganisasjon kan vokse brukerbasen jevnt mens den stille ødelegger verdi på hver nye kunde, hvis anskaffelseskostnaden overstiger livstidsverdien; LTV til CAC-forholdet er metrikken som gjør dette synlig på en måte vekstrate eller rått kundeantall alene ikke kan. Et forhold på 3:1 (livstidsverdi minst tre ganger anskaffelseskostnaden) er det mye siterte referansenivået for en bærekraftig virksomhet med abonnement eller gjentakende inntekter, og gir nok margin til å dekke driftskostnader utover anskaffelse og likevel gi avkastning; et forhold under 1:1 betyr at organisasjonen taper penger på hver anskaffet kunde, og et forhold langt over 3:1 (for eksempel 10:1 eller høyere) kan faktisk tyde på underinvestering i vekst, siden det antyder at organisasjonen lønnsomt kunne anskaffet flere kunder enn den gjør i dag. Investorer, styrer og betalere som vurderer et digitalt helseselskaps økonomiske bærekraft behandler dette forholdet som et av de første tallene de ber om.

## Hvordan det beregnes

```
LTV = gjennomsnittlig inntekt (eller margin) per kunde per periode ×
      gjennomsnittlig kundelevetid i samme periodeenhet

LTV til CAC-forhold = LTV / reell CAC

Et forhold på 3:1 er det ofte siterte bærekraftige referansenivået;
under 1:1 viser at organisasjonen taper penger på anskaffelse; godt
over 3:1 (f.eks. 10:1+) kan tyde på underinvestering i vekst.
```

## Gjennomarbeidet eksempel

En digital helsetjeneste med abonnement genererer gjennomsnittlig månedlig inntekt på 40 USD per pasient, og gjennomsnittspasienten forblir abonnent i 18 måneder, noe som gir en LTV på 40 × 18 = 720 USD. Reell CAC for denne tjenesten (se tilnærmingen i det gjennomarbeidede eksempelet for det emnet) beregnes til 180 USD per anskaffet pasient. LTV til CAC-forholdet er 720 / 180 = 4:1, komfortabelt over bærekraftsgrensen på 3:1. Hvis reell CAC kun var beregnet ut fra annonseplattformens rapporterte kostnad (120 USD, før byråhonorarer og arbeid med innledende kontakt legges inn), ville forholdet fremstått som 6:1, et vesentlig gunstigere og misvisende bilde av enhetsøkonomien enn det reelle tallet på 4:1.

## Datakilder og forbehold

LTV avhenger av en antakelse om gjennomsnittlig kundelevetid, som i seg selv utledes fra organisasjonens egne data om retensjon eller frafall (se brukerretensjonsrate); en virksomhet med høyt frafall har en kortere effektiv gjennomsnittlig levetid og dermed lavere LTV, selv om inntekten per kunde per periode ser sunn ut. Fordi LTV er et fremoverskuende estimat snarere enn et observert historisk faktum, bør den beregnes på nytt jevnlig etter hvert som retensjonsdata akkumuleres, og revideres hvis antakelsene om frafall viser seg å være feil, i stedet for å fastsettes én gang og bli utdatert. Å bruke plattformrapportert CAC i stedet for reell CAC i dette forholdet er en av de vanligste måtene en organisasjon kan overbevise seg selv om at enhetsøkonomien er sunnere enn den faktisk er, siden en undervurdert CAC mekanisk blåser opp forholdet.

## Fallgruver

- **Bruke plattformrapportert CAC i stedet for reell CAC**: dette blåser mekanisk opp forholdet og kan få en uholdbar anskaffelsesstrategi til å se bærekraftig ut; bruk alltid den fullt belastede reelle CAC.
- **Bruke en utdatert eller optimistisk antakelse om gjennomsnittlig kundelevetid**: LTV beregnet fra en foreldet retensjonskurve vil ikke gjenspeile dagens frafallsatferd, særlig etter en endring i produkt, prissetting eller marked som forskyver retensjonen.
- **Behandle et svært høyt forhold som utvetydig bra**: et forhold langt over 3:1 kan signalisere underinvestering i vekst snarere enn eksepsjonell effektivitet, siden det innebærer at organisasjonen sannsynligvis lønnsomt kunne anskaffet flere kunder enn den gjør i dag.
- **Beregne ett blandet forhold på tvers av svært ulike kundesegmenter**: et segment med høy inntekt og lavt frafall kan skjule et annet segment med dårlig enhetsøkonomi; beregn forholdet per meningsfylt segment (f.eks. etter anskaffelseskanal eller produktlinje) der volumet tillater det.

## Kilder

- Fagfellevurdert litteratur og bransjelitteratur om enhetsøkonomi for abonnement og gjentakende inntekter, mye brukte rammeverk for referansemåling fra venturekapital og forskningsorganisasjoner for SaaS-metrikker
- Healthcare Financial Management Association (HFMA), veiledning om metrikker for økonomisk bærekraft for digitale helseorganisasjoner
- Rock Health og lignende markedsforskningsorganisasjoner for digital helse, bransjens referansemåling av enhetsøkonomi i digital helse

Se også: [reell kostnad for kundeanskaffelse](../reell-kostnad-for-kundeanskaffelse/) og [markedsføringseffektivitetsforhold](../markedsføringseffektivitetsforhold/), de to andre kjernemetrikkene for vekstøkonomi dette forholdet vanligvis rapporteres sammen med.
