# DAU/MAU Klebrighetsforhold

DAU/MAU-klebrighetsforholdet sammenligner daglige aktive brukere (DAU) med månedlige aktive brukere (MAU), samme underliggende mål som brukes for ukentlige aktive brukere (WAU) mot MAU, for å uttrykke hvor stor andel av et produkts bredere brukerbase som bruker det på en gitt dag. Det er det standard produktanalytiske målet for engasjementsintensitet, forskjellig fra om en bruker i det hele tatt beholdes (se brukerretensjonsrate) eller hvor konsekvent én bestemt innrullert pasient engasjerer seg over tid (se konsistensrate for pasientengasjement): klebrighet beskriver bruksrytmen på populasjonsnivå, ikke en enkeltpersons mønster.

## Hvorfor dette er viktig

To digitale helseprodukter kan rapportere et identisk antall månedlige aktive brukere mens de har svært ulik underliggende engasjementsintensitet: ett der de fleste av disse brukerne åpner appen nesten daglig, og et annet der de fleste åpner den én gang i måneden rett før de ellers ville regnes som inaktive. DAU/MAU-klebrighetsforholdet skiller mellom disse to svært ulike situasjonene med ett enkelt, godt forstått referansetall som produkt- og klinikkteam kan følge over tid og sammenligne mot kjente bransjeområder. Et forhold rundt 20 % er et ofte sitert rimelig referansenivå for mange forbrukerapper, mens produkter med daglig vane (en mat- eller symptomdagbok en pasient forventes å bruke hver dag) bør vurderes mot en merkbart høyere standard. Fordi klebrighet er følsom for hvordan "aktiv" er definert, er den mest nyttig som en trend for ett produkt over tid, og som en sammenligning mot produkter bygget for et lignende bruksmønster, snarere enn som et absolutt referansetall på tvers av bransjer.

## Hvordan det beregnes

```
DAU/MAU-klebrighetsforhold = gjennomsnittlig daglige aktive brukere i perioden /
                             månedlige aktive brukere i samme periode × 100

WAU/MAU-forholdet (ukentlig, samme prinsipp) er en mykere variant, mer
egnet for produkter som forventes brukt noen ganger i uken
i stedet for daglig.

"Aktiv" må defineres presist og konsekvent (f.eks. en fullført
kvalifiserende handling, ikke en passiv åpning av appen) i både
telleren og nevneren.
```

## Gjennomarbeidet eksempel

En digital app for diabeteshåndtering har 10 000 månedlige aktive brukere i en gitt måned, definert som enhver bruker som fullfører minst én kvalifiserende handling (en glukoselogg, en måltidslogg eller en avkrysning av medisin) i den måneden. Gjennomsnittet av daglige aktive brukere over månedens 30 dager gir en gjennomsnittlig DAU på 2 200. DAU/MAU-klebrighetsforholdet er 2 200 / 10 000 × 100 = 22 %, noe som viser at på en typisk dag bruker omtrent 22 % av appens månedlige brukerbase den, et rimelig tall for et verktøy for kroniske tilstander med daglig vane, men et tall produktteamet vil ønske å se utvikle seg oppover over tid etter hvert som den ideelle atferden (daglig logging) blir mer vanemessig for innrullerte pasienter.

## Datakilder og forbehold

DAU, WAU og MAU beregnes alle fra de samme underliggende hendelsesloggene, med én konsekvent definisjon av en "kvalifiserende aktiv" hendelse på tvers av alle vinduer; å endre denne definisjonen mellom beregningene av teller og nevner (for eksempel å telle enhver åpning av appen for DAU, men bare en fullført handling for MAU) vil gi et skjevt forhold som ikke gjenspeiler reell engasjementsintensitet. Det riktige referansenivået for klebrighet avhenger sterkt av produktets tiltenkte bruksmønster: et verktøy ment brukt én gang i uken (en ukentlig symptominnsjekking) vil og bør ha et lavere DAU/MAU-forhold enn et verktøy ment brukt daglig (en følgeapp til en kontinuerlig glukosemåler), så klebrighet bør alltid tolkes mot produktets egen tiltenkte bruksfrekvens, ikke et enkelt universelt mål.

## Fallgruver

- **Sammenligne klebrighetsforhold på tvers av produkter med ulik tiltenkt bruksfrekvens**: et verktøy for ukentlig bruk vil strukturelt vise et lavere DAU/MAU-forhold enn et verktøy for daglig bruk, selv om begge presterer nøyaktig som tiltenkt for sine respektive bruksområder; sammenlign mot produktets egen tiltenkte frekvens, ikke et enkelt universelt mål.
- **Bruke inkonsekvente aktivitetsdefinisjoner i teller og nevner**: dette kan gi et klebrighetsforhold som ikke gjenspeiler reell engasjementsintensitet og som ikke kan sammenlignes meningsfullt over tid eller mot andre produkter.
- **Behandle et stigende klebrighetsforhold som utvetydig positivt uten å sjekke den samlede MAU-trenden**: et stigende forhold drevet av en krympende, mer vanemessig kjernebrukerbase mens samlet MAU faller, er en helt annen, og mer bekymringsfull, situasjon enn et forhold drevet av reelt økende daglig engasjement i en stabil eller voksende brukerbase.
- **Ignorere ukedags- og sesongeffekter på DAU**: DAU kan variere betydelig etter ukedag (hverdag mot helg) eller sesong for mange helseprodukter; bruk gjennomsnittlig DAU over en periode som fanger en full naturlig syklus, i stedet for et kort vindu som kan være skjevt.

## Kilder

- Fagfellevurdert litteratur og bransjelitteratur om engasjementsmetrikker for mobile og digitale produkter, mye brukte rammeverk for referansemåling fra plattformer for mobilanalyse
- Digital Therapeutics Alliance, veiledning om beste praksis for måling av engasjement i digital terapi
- Fagfellevurdert litteratur om måling av engasjement i digital helse, for eksempel studier publisert i Journal of Medical Internet Research (JMIR mHealth and uHealth)

Se også: [brukerretensjonsrate](../brukerretensjonsrate/) og [konsistensrate for pasientengasjement](../konsistensrate-for-pasientengasjement/), de to beslektede engasjementsmetrikkene dette forholdet oftest forveksles med.
