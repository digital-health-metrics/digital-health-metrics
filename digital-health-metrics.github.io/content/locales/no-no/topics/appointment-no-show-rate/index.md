# Uteblivelsesrate for Avtaler

Uteblivelsesrate for avtaler (også kalt "did not attend"-, eller DNA-rate) er andelen planlagte avtaler der pasienten verken møtte opp eller avbestilte med rimelig varsel. Det er en av de eldste operasjonelle metrikkene i helsevesenet, og digitale verktøy, spesielt påminnelser, selvbetjent ombooking og portalbasert booking, er nå blant de mest effektive og best dokumenterte virkemidlene for å redusere den.

## Hvorfor dette er viktig

Hver uteblivelse er en enhet klinisk kapasitet som vanligvis ikke kan gjenvinnes, siden de fleste tjenester ikke kan fylle et hull samme dag på kort varsel, så raten driver direkte lengden på ventelister, kostnad per fullført avtale, og tapt klinikertid. Uteblivelsesatferd er ikke jevnt fordelt: den korrelerer med deprivasjon, transporttilgang, omsorgsansvar, og belastningen ved å håndtere flere langvarige tilstander, så å behandle en høy rate rent som et pasientatferdsproblem, i stedet for delvis som et signal om tilgangsbarrierer, har en tendens til å produsere tiltak (som generelle sanksjoner) som befester ulikhet i stedet for å redusere den. Digitale påminnelser og enkel digital ombooking er konsekvent blant de mest effektive, lavkostnadstiltakene som er tilgjengelige, noe som er grunnen til at denne metrikken hører klart hjemme i et digitalt helsemålingsprogram, ikke bare i operasjonell rapportering.

## Hvordan det beregnes

```
Uteblivelsesrate = avtaler merket "did not attend" / totalt planlagte avtaler × 100
```

En planlagt avtale ekskluderes vanligvis fra nevneren, eller flyttes til en egen kategori, hvis den ble avbestilt av en av partene med mer enn en definert varselsperiode (vanligvis 24 timer). Sene avbestillinger (under denne varselsperioden) rapporteres vanligvis separat fra ekte uteblivelser, siden de operasjonelle og atferdsmessige implikasjonene er forskjellige.

## Gjennomarbeidet eksempel

En kommunal klinikk planlegger 2 000 avtaler i en måned. Av disse blir 140 avbestilt med mer enn 24 timers varsel (ombooket og ekskludert fra nevneren), 60 blir avbestilt sent (under 24 timer), og 180 registreres som en ekte uteblivelse uten noen kontakt i det hele tatt. Uteblivelsesraten er 180 / 2 000 × 100 = 9 %. Hvis de 60 sene avbestillingene ble slått sammen i samme kategori som ekte uteblivelser, ville den rapporterte raten stige til 12 %, noe som er grunnen til at definisjonen som brukes alltid bør oppgis sammen med tallet.

## Datakilder og forbehold

Timeplanleggings- eller praksisstyringssystemet er hovedkilden, ved bruk av dets avtalestatuskoder; kvaliteten på metrikken avhenger helt av at personalet konsekvent bruker riktig status i stedet for en generisk "avbestilt"-kategori for alt. Organisasjoner som innfører digitale påminnelser (SMS, app-varsling eller portalvarsler) bør måle uteblivelsesraten før og etter endringen for en sammenlignbar pasient- og tjenestesammensetning, siden påminnelseseffektivitet er godt dokumentert i randomiserte og observasjonelle studier, men varierer etter populasjon og kanal.

## Fallgruver

- **Sammenligne rå rater mellom klinikker med ulik overbookingspraksis**: en klinikk som bevisst overbooker for å kompensere for en forventet uteblivelsesrate, vil vise en annen tilsynelatende rate enn en som ikke gjør det, uavhengig av faktisk pasientatferd.
- **Blande sammen sene avbestillinger med ekte uteblivelser**: de to har forskjellige årsaker og forskjellige digitale løsninger (et problem med sen avbestilling løses ofte med enklere selvbetjent ombooking; et problem med ekte uteblivelse løses ofte med bedre påminnelser og kontaktnøyaktighet).
- **Overlevelsesskjevhet fra utskrivningspolitikk**: tjenester som skriver ut pasienter etter gjentatte uteblivelser vil se sin egen rate forbedres mekanisk, mens de bare flytter de samme pasientene et annet sted i systemet.
- **Å legge skylden for digital eksklusjon på pasienten**: en pasient uten smarttelefon eller pålitelig tekstmeldingstjeneste vil ikke ha nytte av en rent digital påminnelsesstrategi, så en flerkanalstilnærming (brev, samtale, tekst, app) er vanligvis nødvendig for å unngå å utvide tilgangsgapene.

## Kilder

- NHS England, tapte avtaler i allmennpraksis og poliklinisk omsorg, publisert statistikk og veiledning
- Cochrane systematiske oversikter over tiltak for å redusere tapte helseavtaler, inkludert påminnelsessystemer
- Fagfellevurdert litteratur om sosioøkonomiske og demografiske korrelater av avtaleuteblivelse

Se også: [telehelse-besøksrate](../telehealth-visit-rate/), siden uteblivelsesatferd vanligvis varierer etter konsultasjonsmodalitet, og [portaladopsjonsrate for pasienter](../patient-portal-adoption-rate/), siden portalbasert selvbetjent timebestilling og påminnelser er et primært digitalt tiltak.
