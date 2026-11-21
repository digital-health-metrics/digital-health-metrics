# Portaladopsjonsrate for Pasienter

Portaladopsjonsrate for pasienter måler andelen kvalifiserte pasienter som har registrert seg for, og aktivt bruker, en digital pasientportal (for eksempel NHS App, Patient Access, eller en EHR-tilknyttet portal som MyChart) for å se journaler, bestille timer eller sende meldinger til omsorgsteamet sitt. Det er den grunnleggende indikatoren for digitalt engasjement: en pasient som aldri har aktivert en konto, kan ikke dra nytte av noen påfølgende digital tjeneste bygget på portalen.

## Hvorfor dette er viktig

En portal skaper verdi først når en pasient bruker den, så organisasjoner bør spore adopsjon som en trakt fremfor ett enkelt tall: registrering, aktivering (første meningsfulle handling) og aktiv bruk (bruk innenfor et definert tidsvindu) er tre forskjellige rater som altfor ofte blandes sammen. Digitale tjenesteteam er ofte under press for å rapportere ett enkelt, gunstig hovedtall, og det krever disiplin å insistere på den vanskeligere, mer ærlige oppdelingen. Lav eller ujevnt fordelt adopsjon er også et likhetssignal: pasienter som er eldre, har lavere digital kompetanse, ikke snakker majoritetsspråket, eller mangler pålitelig bredbånd eller smarttelefon, blir systematisk mindre sannsynlig talt med i telleren, så en stigende gjennomsnittlig adopsjonsrate kan skjule et voksende gap for pasientene som ofte har mest behov for kontakt med tjenestene.

## Hvordan det beregnes

Rapporter alle tre trinnene, ikke bare registrering, og oppgi alltid nevneren eksplisitt:

```
Registreringsrate = pasienter med opprettet portalkonto / kvalifisert pasientpopulasjon × 100
Aktiveringsrate     = pasienter som fullførte en første meningsfull handling (så et
                      resultat, bestilte time, sendte melding) / pasienter med konto × 100
Aktiv brukrate       = pasienter som logget inn minst én gang de siste 12 månedene /
                      kvalifisert pasientpopulasjon × 100
```

Kvalifisert pasientpopulasjon defineres vanligvis som pasienter med minst én kontakt med organisasjonen i en definert tilbakeblikksperiode (vanligvis 24 måneder), som er i en alder og samtykkestatus som tillater dem å ha sin egen konto.

## Gjennomarbeidet eksempel

Et primærhelsenettverk betjener 50 000 pasienter som oppfyller kvalifikasjonsdefinisjonen. Av disse har 32 000 registrert seg for portalen (registreringsrate 64 %). Av de 32 000 registreringene har 27 000 fullført minst én meningsfull handling, som å se et prøveresultat (aktiveringsrate 84 % av de registrerte). I løpet av de siste 12 månedene har 21 000 av de opprinnelige 50 000 kvalifiserte pasientene logget inn minst én gang (aktiv brukrate 42 %). Å rapportere bare 64 %-tallet for registrering ville betydelig overdrive det reelle engasjementet; 42 %-tallet for aktiv bruk er det tallet som bør styre ressursbeslutninger for portalprogrammet.

## Datakilder og forbehold

Portalanalyser kommer vanligvis enten fra leverandørplattformen selv (innloggingshendelser, funksjonsbruk) eller fra den underliggende elektroniske pasientjournalens revisjonslogg, og organisasjoner bør være skeptiske til leverandørdashboard som bare viser registreringstall. Fullmaktstilgang (en forelder eller omsorgsperson som administrerer en konto på vegne av en pasient) bør merkes og rapporteres separat, siden det endrer hvem som faktisk er "brukeren". Valg av nevner er svært viktig: å telle mot den totale listen over registrerte pasienter i stedet for en genuint kvalifisert, kontaktbar populasjon vil alltid undervurdere adopsjon, mens å telle bare mot pasienter som ble aktivt invitert alltid vil overvurdere den, så kvalifikasjonsdefinisjonen bør fastsettes og publiseres sammen med hver rapporterte rate.

## Fallgruver

- **Registrering telt som adopsjon**: en opprettet, men aldri brukt konto har nær null verdi; rapporter aktivering og aktiv bruk sammen med registrering, ikke i stedet for den.
- **Ignorere digital eksklusjon**: samlede adopsjonstall kan stige mens gapet mellom de mest og minst digitalt inkluderte gruppene øker; segmenter alltid etter alder, deprivasjon, språk og funksjonshemming der datastyring tillater det.
- **Sammenligne organisasjoner med ulike kvalifikasjonsdefinisjoner**: et portalprogram som bare inviterer pasienter med registrert e-postadresse vil rapportere en høyere rate enn en som måler mot hele den registrerte listen, uten noen reell forskjell i ytelse.
- **Behandle en engangsinnlogging som pågående engasjement**: et 12-måneders tilbakeblikk er vanlig, men et kortere vindu (for eksempel 90 dager) gir en tidligere advarsel om avtagende bruk.

## Kilder

- NHS England, statistikk over bruk og registrering av NHS App (nhs.uk / digital.nhs.uk-publikasjoner)
- ONC / HealthIT.gov, tiltak fra Promoting Interoperability Program, inkludert View, Download, Transmit (VDT)-tiltak for pasienttilgang
- Fagfellevurdert litteratur om adopsjon av pasientportaler og digitale helseforskjeller, for eksempel studier publisert i Journal of the American Medical Informatics Association (JAMIA)

Se også: [uteblivelsesrate for avtaler](../uteblivelsesrate-for-avtaler/), som portalbasert selvbetjent timebestilling og påminnelser direkte påvirker.
