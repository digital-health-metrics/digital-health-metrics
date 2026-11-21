# Kostnad per Behandlingsepisode

Kostnad per behandlingsepisode er den totale kostnaden ved å behandle en definert klinisk episode, for eksempel en hofteprotesekirurgi med tilhørende rekonvalesens eller en periode med diabetesbehandling, sammenlignet med en historisk baselinekohort som ble behandlet uten det digitale tiltaket som evalueres. Det er standardenheten for økonomisk sammenligning i verdibasert helsehjelp, fordi den fanger det fulle økonomiske bildet av en episode i stedet for en enkelt kostnadspost isolert sett, og det er metrikken betalere og helsesystemer oftest krever før de går med på å finansiere et digitalt helseprogram i stor skala.

## Hvorfor dette er viktig

Kontrakter for verdibasert helsehjelp betaler i økende grad for utfall og episoder i stedet for enkeltstående tjenester, noe som betyr at et digitalt helseprograms økonomiske argument må føres i samme valuta: total kostnad per episode, sammenlignet med hva den samme typen episode kostet før tiltaket fantes. Et program som reduserer én kostnadskategori (for eksempel færre oppfølgingsbesøk ved personlig oppmøte) mens det øker en annen (mer utstyrskostnad, mer tid brukt av klinisk overvåkingspersonell) har ikke nødvendigvis redusert den totale kostnaden per episode, og bare en full kostnadsberegning på episodenivå fanger opp denne avveiningen; å se på en enkelt kostnadspost isolert risikerer en misvisende konklusjon i begge retninger. Fordi episodedefinisjoner og baselineperioder kan konstrueres på måter som favoriserer en bestemt konklusjon, krever denne metrikken mer metodisk åpenhet enn de fleste andre i denne boken for å være troverdig for en skeptisk betaler eller økonomiavdeling.

## Hvordan det beregnes

```
Kostnad per behandlingsepisode = total kostnad for all behandling levert
                                 innenfor et definert episodevindu (alle
                                 behandlingssteder, alle kostnadskategorier)
                                 / antall episoder

Sammenlign mot en historisk baselinekohorts kostnad per episode for
samme klinisk definerte episodetype, justert for pasientsammensetning
(alder, komorbiditet, alvorlighetsgrad) mellom de to kohortene.

Inkluder, ikke bare direkte kliniske kostnader: kostnader til
teknologiplattform og utstyr, ekstra klinisk bemanningstid, og all
behandling som har skiftet sted (f.eks. fra innleggelse til hjemmet)
i stedet for å forsvinne helt.
```

## Gjennomarbeidet eksempel

Et helsesystems historiske baselinekostnad for en episode med total hofteproteseoperasjon (kirurgi gjennom 90 dagers rekonvalesens) er 28 000 USD per episode, basert på 200 historiske episoder. Et nytt digitalt program for postoperativ overvåking innføres, og 150 nye episoder som bruker programmet viser en gjennomsnittlig kostnad på 24 500 USD per episode, en reduksjon på 3 500 USD per episode, hovedsakelig drevet av færre akuttmottaksbesøk under rekonvalesensen og en kortere gjennomsnittlig liggetid. Etter risikojustering for en noe yngre pasientsammensetning med lavere komorbiditet i den digitalt overvåkede kohorten sammenlignet med den historiske baselinen, reduseres den justerte besparelsen til 2 100 USD per episode, fortsatt en reell forbedring, men en vesentlig mindre enn den rå, ujusterte sammenligningen antydet.

## Datakilder og forbehold

Total episodekostnad settes vanligvis sammen fra helsesystemets eget kostnadsregnskap eller økonomisystem, ved å kombinere refusjonsdata, intern kostnadsfordeling og, der en digital plattform er involvert, kostnader til lisens og maskinvare. Å sette sammen dette tallet nøyaktig er vanligvis den vanskeligste og mest ressurskrevende delen av enhver verdianalyse av digital helse, siden kostnader ofte er registrert i separate systemer som aldri var designet for å kombineres på episodenivå. Justering for pasientsammensetning er avgjørende når den digitalt håndterte kohorten og den historiske baselinekohorten ikke er tildelt ved ekte randomisering, siden digitale programmer ofte tilbys først til mer engasjerte, generelt friskere eller mer motiverte pasienter, noe som kan gi en tilsynelatende kostnadsbesparelse som egentlig er en seleksjonseffekt snarere enn en reell programeffekt.

## Fallgruver

- **Sammenligne ujusterte kostnader på tvers av kohorter med ulik pasientsammensetning**: en digitalt håndtert kohort som tilfeldigvis er friskere eller har lavere risiko enn den historiske baselinen, vil vise en lavere kostnad per episode av grunner som ikke har noe med selve det digitale tiltaket å gjøre; risikojuster alltid før sammenligning.
- **Utelate teknologi- og bemanningskostnader fra den "digitale" siden av sammenligningen**: en kostnadsanalyse som bare sporer redusert klinisk bruk mens den ignorerer plattform-, utstyrs- og bemanningskostnadene ved å drive det digitale programmet, vil overdrive nettobesparelsene.
- **Definere episodevinduet inkonsekvent mellom kohorter**: å sammenligne et episodevindu på 90 dager for én kohort mot et vindu på 60 dager for en annen vil gi en kostnadssammenligning som faktisk ikke måler det samme.
- **Å behandle en kostnadsforskyvning som en kostnadsreduksjon**: kostnad flyttet fra ett behandlingssted til et annet (for eksempel fra innleggelse til et overvåket hjemmemiljø) er et reelt og verdifullt funn, men er analytisk forskjellig fra kostnad som er eliminert helt, og de to bør rapporteres separat.

## Kilder

- Centers for Medicare & Medicaid Services (CMS), Bundled Payments for Care Improvement (BPCI) og veiledning for episodebaserte betalingsmodeller
- Healthcare Financial Management Association (HFMA), veiledning om metodikk for kostnadsberegning per behandlingsepisode
- Fagfellevurdert litteratur om kostnadsanalyse av verdibasert digital helsehjelp, for eksempel studier publisert i Health Affairs og American Journal of Managed Care

Se også: [avkastning på investering (ROI) og verdi av investering (VOI)](../roi-og-voi/), som bruker kostnad per behandlingsepisode som en av sine viktigste inndata.
