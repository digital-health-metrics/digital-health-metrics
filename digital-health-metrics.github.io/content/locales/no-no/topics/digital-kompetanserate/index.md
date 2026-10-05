# Digital Kompetanserate

Digital kompetanserate måler andelen av en pasientpopulasjon som selvstendig og vellykket kan utføre vanlige oppgaver på en digital helseplattform, som å logge inn, bestille en avtale, delta i en videokonsultasjon eller lese et prøvesvar, uten hjelp fra en annen person. Den er forskjellig fra, og bør alltid måles separat fra, digital tilgangsrate: en pasient kan ha en smarttelefon og bredbåndsforbindelse og likevel ikke klare å navigere en telehelseplattform uten hjelp, og å blande sammen de to metrikkene skjuler nettopp den populasjonen denne metrikken finnes for å synliggjøre.

## Hvorfor dette er viktig

Digital tilgang alene garanterer ikke at en pasient kan bruke en digital helsetjeneste effektivt: pasienter med lavere helsekompetanse, begrenset erfaring med teknologi generelt, kognitiv eller visuell funksjonsnedsettelse, eller språkbarrierer mot plattformens grensesnitt kan ha full teknisk tilgang og likevel ikke klare å fullføre en oppgave selvstendig, og dette gapet henger systematisk sammen med de samme demografiske gruppene som allerede møter andre helseforskjeller. HIMSS Digital Health Equity Measurement Framework behandler digital kompetanse som en egen pilar atskilt fra tilgang nettopp av denne grunn: å tette et tilgangsgap uten også å håndtere et kompetansegap kan etterlate en populasjon som er teknisk tilkoblet, men funksjonelt ute av stand til å dra nytte av tjenesten. Organisasjoner som måler oppgavefullføring og tid til fullføring for vanlige plattformhandlinger, segmentert etter språk og sosioøkonomiske indikatorer, kan identifisere kompetansebarrierer og målrette støtte (forenklede grensesnitt, assistert introduksjon, innhold på andre språk) langt mer presist enn organisasjoner som baserer seg på tilgangsmetrikker eller samlede tilfredshetsskårer alene.

## Hvordan det beregnes

```
Digital kompetanserate = pasienter som selvstendig fullfører en definert
                         oppgave uten assistanse / pasienter som forsøker
                         den oppgaven × 100

Vanlige oppgaver som måles: innlogging, avtalebestilling, deltakelse i
en videokonsultasjon, visning av et prøvesvar, utfylling av et
innledende skjema.

Rapporter per oppgave, ikke som én blandet skår, siden kompetanse for
enkle oppgaver (innlogging) og komplekse oppgaver (utfylling av et
innledende skjema i flere trinn) er vesentlig forskjellig, og
sammenblanding skjuler hvor den spesifikke barrieren ligger.
```

## Gjennomarbeidet eksempel

Et helsesystem følger deltakelse i videokonsultasjon som en definert oppgave på tvers av 5 000 planlagte telehelseavtaler i en måned. Av disse deltar 4 100 pasienter vellykket uten supporthenvendelse eller teknisk assistanse under konsultasjonen (digital kompetanserate for denne oppgaven: 82 %). Segmentering etter primærspråk viser en rate på 89 % for pasienter som snakker norsk, mot 61 % for pasienter hvis primærspråk avviker fra plattformens standardspråk for grensesnittet, et gap på 28 prosentpoeng som ville vært usynlig om bare det blandede tallet på 82 % ble rapportert, og som peker direkte mot et spesifikt, håndterbart tiltak (oversatt grensesnitt og instruksjoner) i stedet for et vagt generelt kompetanseproblem.

## Datakilder og forbehold

Data om oppgavefullføring hentes vanligvis fra plattformens egne hendelseslogger (nådde pasienten videokonsultasjonen, ble avtalebestillingsflyten fullført uten at den ble avbrutt), supplert med data fra supporthenvendelser eller helpdesk for å identifisere oppgaver som teknisk sett bare ble "fullført" fordi pasienten fikk direkte hjelp underveis. En oppgave som telles som "fullført" utelukkende fra systemlogger kan skjule at pasienten trengte en telefonsamtale fra et familiemedlem eller supportpersonell for å komme dit; en fullføring som er reelt uavhengig av kompetanse bør defineres og følges separat fra en assistert fullføring der plattformen kan skille de to. Digital kompetanse korrelerer med, men er analytisk atskilt fra, helsekompetanse og generell leseferdighet; et validert instrument (i stedet for en uformell antakelse basert på alder eller demografi alene) bør brukes der en formell vurdering kreves.

## Fallgruver

- **Blande sammen digital kompetanse og digital tilgang**: en pasient med full teknisk tilgang kan fortsatt mangle kompetansen til å bruke den effektivt; dette er separate metrikker som krever separate tiltak, og de bør aldri rapporteres som ett samlet tall.
- **Telle assisterte fullføringer som selvstendige suksesser**: hvis en pasient bare fullfører en oppgave med en supporthenvendelse eller et familiemedlems hjelp, er det et kompetansegap plattformen har tildekket, ikke løst; skill mellom assistert og selvstendig fullføring der dataene tillater det.
- **Rapportere en enkelt blandet skår for oppgavefullføring**: kompetanse for en enkel oppgave (innlogging) og en kompleks (utfylling av et detaljert innledende skjema) er vesentlig forskjellig; rapporter per oppgave for å identifisere nøyaktig hvor barrieren ligger.
- **Anta at alder alene forutsier digital kompetanse**: selv om alder samlet sett korrelerer med lavere digital kompetanse, er språkferdighet i plattformens grensesnittspråk og generell fortrolighet med teknologi ofte sterkere individuelle prediktorer og bør måles direkte i stedet for å utledes fra alder.

## Kilder

- HIMSS, Digital Health Equity Measurement Framework (DHEMF)
- Office of the National Coordinator for Health Information Technology (ONC), forskning på brukervennlighet i helseinformasjonsteknologi og digital helsekompetanse
- Fagfellevurdert litteratur om måling av og tiltak for digital helsekompetanse, for eksempel studier publisert i Journal of Medical Internet Research (JMIR)

Se også: [digital tilgangsrate](../digital-tilgangsrate/), forutsetningsmetrikken denne oftest, og oftest feilaktig, blandes sammen med.
