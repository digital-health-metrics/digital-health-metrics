# Brukerretensjonsrate

Brukerretensjonsrate er andelen brukere som var aktive i en startperiode og som forblir aktive i en senere periode, og dens inverse, frafallsraten (churn), er andelen som slutter å bruke produktet helt. Der portaladopsjonsrate for pasienter (se det emnet) måler om en pasient noensinne meningsfullt aktiverer et digitalt helseprodukt, måler retensjon om vedkommende fortsetter å bruke det, og for ethvert digitalt helseprodukt med abonnement eller løpende behandling er retensjon vanligvis den enkeltmetrikken som er tettest knyttet til både klinisk effekt og kommersiell bærekraft.

## Hvorfor dette er viktig

Et digitalt helseprodukt som ikke kan beholde brukere kan ikke levere vedvarende klinisk nytte, uansett hvor sterke de innledende tallene for adopsjon eller aktivering er: et verktøy for håndtering av kroniske tilstander som brukes i to uker og så forlates, vil neppe flytte et biometrisk utfall som avhenger av måneder med vedvarende atferdsendring. Retensjon er også en av de kommersielt mest konsekvensrike metrikkene et digitalt helseselskap rapporterer til investorer og betalere, fordi retensjonskurver (formen på fallet over tid, ikke bare én enkelt retensjonsprosent) avslører om produktet har funnet et reelt bærekraftig bruksmønster eller bare fanger nyhetsdrevet innledende interesse som forutsigbart avtar. En retensjonskurve som flater ut etter et innledende fall (pasienter som kommer forbi den første måneden har en tendens til å bli) er et helt annet, og mye sunnere, signal enn en som fortsetter å falle jevnt uten bunn.

## Hvordan det beregnes

```
Retensjonsrate (periode N) = brukere aktive i periode N som også var
                             aktive i startkohortens periode / brukere
                             i startkohortens periode × 100

Frafallsrate = 1 − retensjonsrate (for samme periode)

Rapporter som en kohortretensjonskurve (retensjon ved dag/uke/måned
1, 2, 3 …), ikke som ett enkelt øyeblikkstall, siden et enkelt
øyeblikksbilde blander sammen nylig tilkomne brukere (som ikke har
hatt mulighet til å falle fra ennå) med brukere med lang fartstid.
```

## Gjennomarbeidet eksempel

En digital helseapp rullerer inn en kohort på 1 000 nye brukere i januar. Ved utgangen av måned 1 er 640 av de opprinnelige 1 000 fortsatt aktive (retensjon i måned 1: 64 %). Ved utgangen av måned 3 er 410 fortsatt aktive (retensjon i måned 3: 41 %). Ved måned 6 er 380 fortsatt aktive (retensjon i måned 6: 38 %). Formen på denne kurven, et bratt innledende fall etterfulgt av en utflating mellom måned 3 og 6, antyder at produktet beholder en stabil kjerne av brukere når de først er forbi en innledende adopsjonsterskel, noe som er et vesentlig annerledes og mer oppmuntrende signal enn om nedgangen fra måned 3 til måned 6 hadde fortsatt i samme takt som i måned 1 til 3.

## Datakilder og forbehold

Retensjon beregnes fra produktets egne innloggings- eller aktivitetshendelseslogger, med en konsekvent definisjon av "aktiv" (for eksempel minst én kvalifiserende økt i perioden) på tvers av alle kohorter som sammenlignes. Kohorter bør sammenlignes på like vilkår, med samme startdefinisjon av "aktiv" og samme lengde på observasjonsvinduet, siden selv små definisjonsforskjeller (måneder på 30 mot 28 dager, eller en strengere mot en løsere "aktiv"-terskel) kan forskyve en rapportert retensjonsprosent med flere poeng uten at det er noen reell forskjell i brukeratferd. Sesongeffekter er vanlige i helseapper knyttet til nyttårsforsetter eller bestemte perioder for helsebevissthet, så kohortsammenligning fra år til år er vanligvis mer informativ enn å sammenligne tilgrensende kohorter fra ulike tider av året.

## Fallgruver

- **Rapportere ett enkelt retensjonsøyeblikksbilde i stedet for en kurve**: et enkelt tall om at "X % av brukerne fortsatt er aktive" uten formen på fallet over tid kan ikke skille et produkt som flater ut (sunt) fra ett i kontinuerlig nedgang (usunt).
- **Endre definisjonen av "aktiv" mellom rapporteringsperioder**: å løsne definisjonen av en aktiv bruker (for eksempel ved å telle en passiv åpning av appen i stedet for en fullført handling) kan få retensjonen til å se ut til å forbedres mens den faktiske bruken ikke har endret seg i det hele tatt.
- **Ignorere sesongvariasjon i kohorter**: å sammenligne retensjonen til en januarkohort (ofte oppblåst av innrullering drevet av nyttårsforsetter, som i gjennomsnitt bringer inn en mindre motivert kohort) mot en kohort anskaffet til en annen tid av året kan gi misvisende konklusjoner om trender.
- **Blande organiske kohorter og kohorter anskaffet gjennom betalt annonsering**: brukere anskaffet gjennom ulike kanaler beholdes ofte svært forskjellig; å blande dem i ett samlet retensjonstall kan skjule et kanalspesifikt retensjonsproblem.

## Kilder

- Fagfellevurdert litteratur om engasjement og frafall i digitale helseapper, for eksempel studier publisert i Journal of Medical Internet Research (JMIR mHealth and uHealth)
- Digital Therapeutics Alliance, veiledning om beste praksis for måling av engasjement og retensjon i digital terapi
- Bransjerapporter med referansemåling av retensjon i mobile helseapper, fra analyseplattformer og markedsforskningsorganisasjoner for digital helse

Se også: [konsistensrate for pasientengasjement](../konsistensrate-for-pasientengasjement/), som måler kvaliteten på engasjementet blant beholdte brukere, i motsetning til om de i det hele tatt forblir innrullert.
