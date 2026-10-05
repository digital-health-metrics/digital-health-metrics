# Pasientens Net Promoter Score

Pasientens Net Promoter Score (NPS) måler pasientens vilje til å anbefale et digitalt helseprodukt eller en telehelsetjeneste til andre, basert på ett enkelt undersøkelsesspørsmål, "Hvor sannsynlig er det at du vil anbefale denne tjenesten til en venn eller kollega?", skåret fra 0 til 10. Respondenter som skårer 9–10 er "tilhengere" (promoters), 7–8 er "passive" og 0–6 er "kritikere" (detractors); NPS er prosentandelen tilhengere minus prosentandelen kritikere. Det er den mest brukte, og mest kritiserte, tilfredshetsmetrikken for pasienter i digital helse, verdsatt for sin enkelhet, men begrenset i hva den kan diagnostisere alene.

## Hvorfor dette er viktig

NPS gir digitale helseteam et enkelt, standardisert og på tvers sammenlignbart tilfredshetssignal som er billig å samle inn og lett for ikke-spesialiserte interessenter (ledere, styrer, bestillere) å tolke ved første øyekast, og det er derfor det fortsatt er populært til tross for veldokumenterte metodiske begrensninger. For telehelse og digitale førstelinjeprodukter spesielt er NPS ofte den ledende indikatoren på om pasienter vil fortsette å velge den digitale kanalen fremfor et alternativ ved personlig oppmøte når begge er tilgjengelige, noe som har direkte implikasjoner for planlegging av kanalmiks og kapasitet. NPS er imidlertid ett enkelt, overordnet sammendragstall: en fallende NPS forteller et team at noe er galt, men ikke hva, så den bør alltid kombineres med verbatim tilbakemeldinger i fritekst eller et mer granulært instrument for brukervennlighet for å være handlingsrettet i stedet for bare et tall på et resultatkort.

## Hvordan det beregnes

```
NPS = % tilhengere (skår 9–10) − % kritikere (skår 0–6)

Resultatet er et tall fra −100 til +100, ikke en prosentandel, selv om
det er utledet fra prosentandeler. Legg aldri til et "%"-tegn på et
NPS-tall.

Rapporter sammen med:
  svarprosent (% av undersøkte pasienter som svarte)
  utvalgsstørrelse
  den eksakte spørsmålsformuleringen som ble brukt
```

## Gjennomarbeidet eksempel

En telehelseplattform undersøker 1 000 pasienter etter en videokonsultasjon og får 400 svar (svarprosent 40 %). Av disse 400 respondentene skårer 220 9–10 (tilhengere, 55 %), 100 skårer 7–8 (passive, 25 %) og 80 skårer 0–6 (kritikere, 20 %). NPS er 55 − 20 = 35. Dette tallet betyr bare noe i kontekst: en NPS på 35 kan være et sterkt resultat sammenlignet med telehelsebransjen for øvrig, eller en bekymringsfull nedgang sammenlignet med denne plattformens egen skår på 48 i forrige kvartal. NPS er langt mer nyttig som en trend over tid for ett produkt enn som et absolutt, enkeltstående referansenivå mot et annet.

## Datakilder og forbehold

NPS samles inn gjennom en undersøkelse etter interaksjonen, vanligvis utløst umiddelbart etter en videokonsultasjon, en appøkt eller en behandlingsepisode, og svarprosenten er av enorm betydning: en lav svarprosent (godt under de omtrent 40 % i det gjennomarbeidede eksempelet) risikerer skjevhet fra manglende svar, der bare sterkt fornøyde eller sterkt misfornøyde pasienter gidder å svare, noe som trekker skåren mot ytterpunktene og bort fra den reelle populasjonens oppfatning. Å sammenligne NPS på tvers av organisasjoner, eller til og med på tvers av en enkelt organisasjons ulike kanaler (for eksempel telehelse mot personlig oppmøte), er bare gyldig hvis spørsmålsformulering, tidspunkt og undersøkt populasjon er reelt sammenlignbare; små endringer i formuleringen er kjent for å forskyve skårene målbart. NPS bør behandles som et utfall som skal forklares, ikke som et mål i seg selv: kommentarene i fritekst som vanligvis følger med en NPS-undersøkelse er som regel mer handlingsrettede enn selve skåren.

## Fallgruver

- **Sammenligne NPS-tall samlet inn med ulik spørsmålsformulering eller tidspunkt**: selv mindre forskjeller i undersøkelsesdesign kan forskyve skårene med flere poeng, noe som gjør referansemåling av NPS på tvers av organisasjoner langt mindre pålitelig enn den fremstår.
- **Ignorere svarprosenten**: en NPS i overskriften beregnet fra en svarprosent på 10 % er langt mindre troverdig enn en beregnet fra en svarprosent på 60 %, siden lave svarprosenter er utsatt for skjevhet fra manglende svar mot de mest ekstreme meningene.
- **Behandle NPS som et diagnostisk verktøy i stedet for en sammendragsmetrikk**: en fallende NPS sier at noe er galt, men aldri hva; den bør alltid kombineres med kvalitative tilbakemeldinger eller et mer granulært instrument for tilfredshet eller brukervennlighet for å identifisere årsaken.
- **Jage NPS som et mål i seg selv**: å optimalisere snevert for NPS-tallet (for eksempel ved bare å undersøke pasienter etter uvanlig positive interaksjoner) kan forbedre den rapporterte skåren uten at den underliggende pasientopplevelsen blir bedre, eller den kan til og med bli aktivt verre.

## Kilder

- Bain & Company, den opprinnelige metodikken for Net Promoter System og veiledning for referansemåling
- Agency for Healthcare Research and Quality (AHRQ), CAHPS-programmet (Consumer Assessment of Healthcare Providers and Systems) for undersøkelser av pasientopplevelser, som et utfyllende, mer granulært alternativ
- Fagfellevurdert litteratur om bruk og begrensninger ved Net Promoter Score i helsetjenester, for eksempel studier publisert i Journal of Medical Internet Research (JMIR)

Se også: [brukerretensjonsrate](../brukerretensjonsrate/), siden pasientrapportert tilfredshet og faktisk fortsatt bruk av et produkt ofte avviker og er verdt å følge som separate signaler.
