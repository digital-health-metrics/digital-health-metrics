# Treffsikkerhet i Triageruting

Treffsikkerhet i triageruting er andelen pasientkontakter der et automatisert eller KI-assistert triageverktøy korrekt dirigerer en pasient til riktig nivå og sted for behandling, for eksempel egenomsorg, fastlege, legevakt eller akuttmottak, vurdert mot en klinisk validert referansestandard. Det er sikkerhets- og effektivitetsmetrikken for enhver digital førstelinje, symptomsjekker eller KI-triagesystem: verktøyets hele verdiforslag hviler på å dirigere pasienter riktig, raskt og konsekvent.

## Hvorfor dette er viktig

Et unøyaktig triageverktøy forårsaker skade i begge retninger: undertriagering (å dirigere en pasient til et lavere behandlingsnivå enn vedkommende trenger) kan forsinke behandling av en ekte nødssituasjon, mens overtriagering (å dirigere en pasient til et høyere behandlingsnivå enn vedkommende trenger) sløser med knapp akutt- og legevaktkapasitet og øker kostnader og pasientens angst uten klinisk nytte. Fordi disse to feiltypene har så ulike konsekvenser, bør treffsikkerhet i triageruting alltid rapporteres sammen med feilenes retning, ikke som ett enkelt samlet treffsikkerhetstall som skjuler om verktøyet feiler på en trygg eller farlig måte. Regulatorer og helsesystemer som vurderer et KI-triageverktøy for utrulling krever i økende grad denne typen stratifisert rapportering av treffsikkerhet som en betingelse for klinisk godkjenning, særlig for verktøy som opererer med en viss grad av autonomi fra en kliniker.

## Hvordan det beregnes

```
Treffsikkerhet i triageruting = korrekt dirigerte kontakter / totalt
                                antall triagerte kontakter × 100

Rapporter undertriagering og overtriagering separat:
  Rate for undertriagering = kontakter dirigert til et lavere
                             hastegradsnivå enn referansestandarden /
                             totalt antall triagerte kontakter × 100
  Rate for overtriagering  = kontakter dirigert til et høyere
                             hastegradsnivå enn referansestandarden /
                             totalt antall triagerte kontakter × 100

Referansestandarden er vanligvis en retrospektiv klinikergjennomgang
av samme sak, blindet for verktøyets utdata der det er mulig.
```

## Gjennomarbeidet eksempel

Et KI-basert symptomsjekkerverktøy triagerer 5 000 pasientkontakter i en måned. En blindet klinikergjennomgang av et tilfeldig utvalg på 500 av disse kontaktene finner at 430 ble dirigert til riktig hastegradsnivå (treffsikkerhet 86 %), 45 ble undertriagert (9 %) og 25 ble overtriagert (5 %). Raten for undertriagering på 9 % er tallet som mest akutt trenger undersøkelse, siden det representerer kontakter der en pasient kan ha blitt henvist til mindre akutt behandling enn vedkommende faktisk trengte; raten for overtriagering på 5 % er en kapasitets- og kostnadsbekymring, men ikke en direkte sikkerhetsbekymring.

## Datakilder og forbehold

Referansestandarden treffsikkerheten i triagen måles mot er av enorm betydning: en gjennomgang av én enkelt kliniker introduserer klinikerens egen variasjon i skjønn, så et troverdig treffsikkerhetstall krever vanligvis enten flere uavhengige vurderere med dokumentert interrater-enighet, eller sammenligning mot et påfølgende, bekreftet klinisk utfall (hvilken behandling pasienten faktisk trengte, fastslått i etterkant). Utvalget betyr også noe: å gjennomgå bare et bekvemmelighetsutvalg av kontakter, eller bare de som er flagget som uvanlige, vil ikke gi et tall som kan generaliseres til verktøyets samlede ytelse. Treffsikkerhetstall bør rapporteres separat etter presenterende symptom eller klagekategori der det underliggende sakstallet tillater det, siden triageverktøy sjelden presterer likt på tvers av alle tilstander.

## Fallgruver

- **Rapportere ett enkelt blandet treffsikkerhetstall**: å slå sammen undertriagering og overtriagering til ett tall skjuler om verktøyets feil heller mot den farligere feiltypen; rapporter dem alltid separat.
- **Bruke én enkelt, ublindet vurderer som referansestandard**: dette kan stille skjeve treffsikkerhetstallet mot det vurdereren selv ville ha gjort, i stedet for en uavhengig klinisk standard.
- **Validere bare på retrospektive, bekvemme data**: et verktøys reelle treffsikkerhet i ruting under levende, tvetydig pasientinput avviker ofte vesentlig fra treffsikkerheten på et kuratert valideringssett satt sammen under utviklingen.
- **Ignorere ytelsesdrift etter utrulling**: et KI-triagemodells treffsikkerhet kan forringes over tid etter hvert som pasientpopulasjoner, presenterende symptomer eller tilgjengeligheten av behandlingsforløp endrer seg; treffsikkerheten bør måles på nytt jevnlig, ikke valideres én gang og antas å være stabil.

## Kilder

- ONC / HealthIT.gov, veiledning om sikkerhet og kvalitetssikring av klinisk beslutningsstøtte og KI-baserte verktøy
- Fagfellevurdert litteratur om treffsikkerheten til symptomsjekkere og KI-triageverktøy, for eksempel studier publisert i JAMIA, npj Digital Medicine og BMJ Health & Care Informatics
- NHS England, veiledning om klinisk sikkerhet ved digitale triage- og fjernkonsultasjonsverktøy (standardene for klinisk risikostyring DCB0129/DCB0160)

Se også: [behandlingstid for digital henvisning](../behandlingstid-for-digital-henvisning/), prosessmetrikken som er mest direkte nedstrøms for en triagebeslutning.
