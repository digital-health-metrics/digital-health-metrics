# ISO/TS 82304-2

ISO/TS 82304-2 er en internasjonal teknisk spesifikasjon, utgitt av ISO Technical Committee 215 (Health Informatics), som definerer en strukturert metode for å vurdere kvaliteten på helse- og velværeapper, med vekt på brukervennlighet, teknisk robusthet og pålitelighet, interoperabilitet, innholdskvalitet og datasikkerhet og personvern, for produkter som faller utenfor omfanget av full regulering av medisinsk utstyr, men likevel i vesentlig grad påvirker en brukers helsebeslutninger eller atferd. Den finnes for å fylle et spesifikt gap: det store flertallet av helse- og velværeapper rettet mot forbrukere (treningssporere, symptomdagbøker, apper for velværecoaching) er ikke regulert som medisinsk utstyr, men det fantes tidligere ingen felles, strukturert måte å vurdere eller sammenligne deres grunnleggende kvalitet og sikkerhet på.

## Hvorfor dette er viktig

Appbutikker huser hundretusenvis av helse- og velværeapper med enormt varierende kvalitet, og før en felles teknisk spesifikasjon fantes, hadde verken pasienter, klinikere eller helsesystemer noen strukturert, sammenlignbar måte å bedømme en apps grunnleggende kvalitet og sikkerhet mot en annen utover stjernevurderinger og markedsføringspåstander, et gap som er viktig fordi en dårlig utformet helseapp fortsatt kan forårsake reell skade (unøyaktig innhold, dårlig datasikkerhet, villedende påstander) selv uten å nå den regulatoriske terskelen for medisinsk utstyr. ISO/TS 82304-2 er bevisst strukturert rundt domener som en ikke-spesialisert vurderer kan vurdere konsekvent, noe som har gjort den til det tekniske grunnlaget for flere nasjonale og kommersielle tjenester for kvalitetsmerking og kuratering av helseapper, og gir helsesystemer og appbiblioteker en forsvarlig, standardisert måte å inkludere eller ekskludere apper fra en anbefalt liste på, i stedet for å stole på ad hoc-skjønn.

## Hvordan den brukes

```
Vurderingen er organisert rundt definerte kvalitetsdomener, evaluert
ved strukturert gjennomgang i stedet for en enkelt numerisk formel:

Brukervennlighet                 — tydelighet, tilgjengelighet og
                                   brukervennlighet for den tiltenkte
                                   brukergruppen
Teknisk robusthet/pålitelighet   — stabilitet, ytelse og fravær av
                                   tekniske feil
Interoperabilitet                — evne til å utveksle data med andre
                                   systemer der det er relevant for
                                   appens funksjon
Innholdskvalitet og sikkerhet    — nøyaktighet, aktualitet og fravær av
                                   skadelige eller villedende
                                   helsepåstander
Sikkerhet og personvern          — praksis for databeskyttelse og
                                   åpenhet om databruk

Hvert domene skåres via strukturerte gjennomgangskriterier og
kombineres til en samlet kvalitetsvurdering, som flere ordninger
for kvalitetsmerking av helseapper bruker som teknisk grunnlag
for en offentlig kvalitetsmerking eller en beslutning om
inkludering i et kuratert bibliotek.
```

## Gjennomarbeidet eksempel

Et helsesystems program for et digitalt appbibliotek vil kuratere en anbefalt liste med velværeapper til pasienter i stedet for å overlate valg av app helt til søk i appbutikken. Hver kandidatapp vurderes mot domenene i ISO/TS 82304-2: en app for søvnsporing skårer godt på brukervennlighet og teknisk robusthet, tilfredsstillende på innholdskvalitet, men flagges under gjennomgangen av sikkerhet og personvern for å dele brukerdata med tredjepartsannonsører uten tydelig opplysning, et funn som er alvorlig nok til å utelukke appen fra den anbefalte listen til tross for den ellers sterke skåren på brukervennlighet. Dette resultatet domene for domene er mer handlingsrettet både for kuratorteamet og, om det deles, for appens egen utvikler enn en enkelt blandet kvalitetsskår ville vært, siden det identifiserer nøyaktig hvilket aspekt som må utbedres før appen kan vurderes på nytt.

## Datakilder og forbehold

Vurdering mot ISO/TS 82304-2 utføres vanligvis av en opplært vurderer eller en akkreditert vurderingstjeneste, etter spesifikasjonens strukturerte gjennomgangskriterier for hvert domene, og flere nasjonale og kommersielle initiativer (organisasjoner for kvalitetsmerking og kuratering av helseapper, noen med formell nasjonal godkjenning fra helsevesenet) bruker standarden som teknisk grunnlag for sine egne offentlige kvalitetsmerker for apper. Det betyr at en apps "sertifiserte" eller "merkede" status i praksis ofte gjenspeiler en bestemt merkeordnings implementering av standarden, ikke nødvendigvis en identisk prosess på tvers av alle ordninger, så den spesifikke vurderende organisasjonen og dens metodikk bør kontrolleres og oppgis sammen med ethvert kvalitetsmerke som siteres. Spesifikasjonen vurderer kvalitets- og grunnleggende sikkerhetsegenskaper ved en app som programvare; den er ikke en erstatning for regulatorisk godkjenning som medisinsk utstyr der en apps påstander eller funksjoner faktisk møter terskelen for medisinsk utstyr, og å bruke den som en slik erstatning ville være en kategorifeil.

## Fallgruver

- **Behandle et kvalitetsmerke som regulatorisk godkjenning**: en app som er vurdert og merket under ISO/TS 82304-2 har ikke dermed mottatt regulatorisk godkjenning som medisinsk utstyr; de to tjener ulike formål og bør aldri blandes sammen i hvordan en app beskrives eller markedsføres.
- **Anta at alle merkeordninger basert på standarden er likeverdige**: ulike organisasjoner implementerer vurdering basert på ISO/TS 82304-2 med egne spesifikke gjennomgangsprosesser og strenghetsnivå; sjekk hvilken organisasjon som utførte en vurdering og hvordan, i stedet for å behandle ethvert "ISO/TS 82304-2-basert" merke som utbyttbart med ethvert annet.
- **Vurdere bare brukervennlighet mens sikkerhet og personvern forsømmes**: brukervennlighetsproblemer er mest synlige for en sluttbruker og enklest å vurdere uformelt, noe som kan føre til at vurderere underveier det mindre synlige, men potensielt mer konsekvensrike domenet sikkerhet og personvern.
- **Behandle vurderingen som en engangs, permanent sertifisering**: en apps innhold, sikkerhetspraksis og avtaler om deling av data med tredjeparter kan alle endre seg etter en innledende vurdering; et troverdig program for kvalitetsmerking revurderer jevnlig i stedet for å behandle en innledende bestått vurdering som permanent.

## Kilder

- International Organization for Standardization, ISO/TS 82304-2:2021, "Health software — Part 2: Health and wellness apps — Quality and reliability"
- ISO Technical Committee 215 (Health Informatics), informasjon om publikasjoner og arbeidsgrupper
- Nasjonale og kommersielle organisasjoner for kvalitetsmerking og kuratering av helseapper som publiserer sin vurderingsmetodikk basert på denne standarden

Se også: [system usability scale-skår](../system-usability-scale-skår/), et utfyllende, snevrere instrument spesifikt for brukervennlighet som ofte brukes sammen med en bredere kvalitetsvurdering etter ISO/TS 82304-2.
