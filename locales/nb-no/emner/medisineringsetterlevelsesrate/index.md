# Medisineringsetterlevelsesrate

Medisineringsetterlevelsesrate måler i hvilken grad en pasient tar en foreskrevet medisin som forordnet, oftest uttrykt som andelen dager i en definert periode der pasienten hadde tilgang til medisinen som foreskrevet. Det er en av de mest konsekvensrike metrikkene i digital helse fordi manglende etterlevelse er vanlig, i stor grad kan forebygges med riktig støtte, og er direkte knyttet til dårligere kliniske utfall og høyere nedstrøms kostnader, og det er nettopp dette gapet påminnelsesapper for medisiner, smarte pilleflasker og dytt fra apotek om å hente ut resepter er bygget for å tette.

## Hvorfor dette er viktig

Manglende etterlevelse av medisinering ved kroniske sykdommer anslås av folkehelseorganer å ligge så høyt som 50 % for enkelte tilstander, og det er en ledende forebyggbar årsak til unngåelige sykehusinnleggelser, sykdomsprogresjon og behandlingssvikt som feilaktig tilskrives selve medisinen i stedet for inkonsekvent bruk. Digitale verktøy for etterlevelse finnes spesifikt for å tette dette gapet, så for ethvert program som inkluderer en medisineringskomponent er etterlevelsesrate vanligvis den mest beslutningsrelevante enkeltmetrikken: den ligger kausalt oppstrøms for biometrisk forbedring, reinnleggelse og de fleste andre kliniske utfallsmetrikker et program ellers kunne rapportert. Et program som forbedrer engasjement eller tilfredshet uten å flytte etterlevelsen har sannsynligvis ennå ikke vist en plausibel mekanisme for klinisk nytte.

## Hvordan det beregnes

```
Andel dekkede dager (PDC) = dager i perioden med medisin tilgjengelig
                            (basert på antall dagers forsyning fra
                            uthentinger) / dager i måleperioden × 100

Medication Possession Ratio (MPR) = total dagers forsyning oppnådd i
                            perioden / dager i perioden × 100 (kan
                            overstige 100 % ved tidlige uthentinger;
                            PDC foretrekkes generelt av denne grunn)

En pasient klassifiseres vanligvis som "etterlevende" ved en
PDC-terskel på ≥ 80 %, etter en mye brukt konvensjon for
kvalitetsmål.
```

## Gjennomarbeidet eksempel

En pasient er foreskrevet en daglig kronisk medisin over en måleperiode på 90 dager. Apotekets uthentingsregistre viser at pasienten fikk nok medisin til å dekke 76 av de 90 dagene, med to gap: et gap på 9 dager etter at medisinen tok slutt før en ny uthenting, og et gap på 5 dager rundt en sykehusinnleggelse. PDC er 76 / 90 × 100 = 84 %, som krysser den konvensjonelle etterlevelsesterskelen på 80 %. Hvis de samme gapene ble målt med MPR basert på dagers forsyning utlevert i stedet for dager faktisk dekket, kunne en tidlig uthenting andre steder i perioden skyve forholdet over 100 %, noe som illustrerer hvorfor PDC er det mer konservative og generelt foretrukne målet.

## Datakilder og forbehold

Refusjons- eller uthentingsdata fra apotek (enten fra en apotekfordelsforvalter eller et tilkoblet apoteksystem) er standardkilden, siden de gjenspeiler hva en pasient faktisk fikk i stedet for hva vedkommende ble foreskrevet; reseptdata alene overdriver etterlevelsen fordi de ikke bekrefter at pasienten noensinne hentet medisinen. Digitale verktøy for etterlevelse, som smarte pilleflasker, svelgbare sensorer, tilkoblede smarte inhalatorer som logger hver aktivering ved luftveissykdommer som astma og KOLS, og appbaserte innsjekkinger, gir data med høyere oppløsning om hvorvidt en dose faktisk ble tatt, ikke bare hentet, men brukes av en liten, potensielt urepresentativ minoritet av pasientene, så blanding av enhetsbekreftet etterlevelse med refusjonsbasert PDC på tvers av en populasjon krever forsiktighet i tolkningen. Etterlevelse bør måles over en periode som er lang nok til å jevne ut enkeltstående glemte doser, men kort nok til å oppdage en meningsfull nedgang før den forårsaker klinisk skade; rullerende 90-dagersvinduer er vanlige for kroniske medisiner.

## Fallgruver

- **Bruke MPR uten å opplyse om at den kan overstige 100 %**: uforklarte forhold over 100 % fra tidlige uthentinger eller hamstring gjør sammenligning på tvers av pasienter og perioder upålitelig med mindre PDC brukes eller forholdet eksplisitt kappes.
- **Behandle resept- eller ordredata som bevis på etterlevelse**: en resept som er skrevet eller sendt til et apotek sier ingenting om hvorvidt pasienten hentet eller tok medisinen; bare uthentings- eller enhetsdata tetter det gapet.
- **Bruke én etterlevelsesterskel uten forskjell på tvers av alle tilstander**: den kliniske konsekvensen av å gå glipp av 20 % av dosene varierer enormt etter legemiddelgruppe (f.eks. antikoagulantia mot statiner), så en enkelt terskel på 80 % brukt universelt kan under- eller overdrive klinisk risiko for enkelte legemidler.
- **Ignorere bytte og seponering av medisiner**: en pasient som klinisk og hensiktsmessig byttes til en annen medisin kan fremstå som et stort fall i etterlevelse for den opprinnelige medisinen hvis byttet ikke tas hensyn til i beregningen.

## Kilder

- Pharmacy Quality Alliance (PQA), spesifikasjoner for målet Proportion of Days Covered
- Centers for Medicare & Medicaid Services (CMS), Star Ratings-mål for medisineringsetterlevelse
- Fagfellevurdert litteratur om måling av medisineringsetterlevelse og digitale tiltak for etterlevelse, for eksempel studier publisert i Journal of Managed Care & Specialty Pharmacy

Se også: [biometrisk forbedringsrate](../biometrisk-forbedringsrate/), som etterlevelse av medisinering ved kroniske sykdommer er en primær drivkraft for.
