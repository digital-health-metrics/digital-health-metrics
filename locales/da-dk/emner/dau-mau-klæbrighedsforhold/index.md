# DAU/MAU-klæbrighedsforhold

DAU/MAU-klæbrighedsforholdet sammenligner daglige aktive brugere (DAU) med månedlige aktive brugere (MAU), som er det samme grundlæggende mål, der bruges til ugentlige aktive brugere (WAU) i forhold til MAU, for at udtrykke, hvor stor en andel af et produkts bredere brugerbase der bruger det på en given dag. Det er det standardmål inden for produktanalyse, der bruges til at beskrive engagementets intensitet, og det adskiller sig fra spørgsmålet om, hvorvidt en bruger overhovedet fastholdes (se brugerfastholdelsesraten), og fra, hvor konsekvent en bestemt indskrevet patient engagerer sig over tid (se konsistensraten for patientengagement): klæbrighed beskriver brugsrytmen på populationsniveau og ikke et enkelt individs mønster.

## Hvorfor dette er vigtigt

To digitale sundhedsprodukter kan rapportere et identisk antal månedlige aktive brugere og alligevel have vidt forskellig underliggende engagementsintensitet: i det ene åbner de fleste brugere appen næsten hver dag, mens de fleste i det andet åbner den én gang om måneden, lige før de ellers ville tælle som inaktive. DAU/MAU-klæbrighedsforholdet skelner mellem disse to meget forskellige situationer med ét enkelt, enkelt og velforstået benchmarktal, som produkt- og klinikteams kan følge over tid og sammenligne med kendte intervaller i branchen. Et forhold på omkring 20 % er et ofte nævnt rimeligt benchmark for mange forbrugerapps, mens produkter, der bygger på en daglig vane (en kost- eller symptomdagbog, som en patient forventes at bruge hver dag), bør vurderes efter en væsentligt højere standard. Fordi klæbrighed er følsom over for, hvordan "aktiv" defineres, er den mest anvendelig som en tendens for ét produkt over tid og som en sammenligning med produkter, der er bygget til et lignende brugsmønster, og mindre som et absolut benchmark på tværs af brancher.

## Hvordan det beregnes

```
DAU/MAU-klæbrighedsforhold = gennemsnitligt antal daglige aktive brugere
                             i perioden / månedlige aktive brugere i den
                             samme periode × 100

WAU/MAU-forholdet (ugentligt, samme princip) er en blødere variant, der
er mere velegnet til produkter, som forventes brugt nogle gange om ugen
i stedet for dagligt.

"Aktiv" skal defineres præcist og konsekvent (fx en gennemført
kvalificerende handling og ikke en passiv åbning af appen) i både
tælleren og nævneren.
```

## Gennemarbejdet eksempel

En digital app til diabetesstyring har 10.000 månedlige aktive brugere i en given måned, defineret som enhver bruger, der gennemfører mindst én kvalificerende handling (en glukoseregistrering, en måltidsregistrering eller en afkrydsning af medicin) i den måned. Gennemsnittet af antallet af daglige aktive brugere over månedens 30 dage giver et gennemsnitligt DAU på 2.200. DAU/MAU-klæbrighedsforholdet er 2.200 / 10.000 × 100 = 22 %, hvilket viser, at omkring 22 % af appens månedlige brugerbase bruger den på en typisk dag. Det er et rimeligt tal for et værktøj til kroniske tilstande, der bygger på en daglig vane, selv om produktteamet gerne vil se det stige over tid, efterhånden som den ideelle adfærd (daglig registrering) bliver mere vanemæssig for de indskrevne patienter.

## Datakilder og forbehold

DAU, WAU og MAU beregnes alle ud fra de samme underliggende hændelseslogge med én ensartet definition af en "kvalificerende aktiv" hændelse på tværs af alle vinduer; hvis man ændrer definitionen mellem beregningen af tælleren og nævneren (for eksempel ved at tælle enhver åbning af appen for DAU, men kun en gennemført handling for MAU), får man et skævvredet forhold, der ikke afspejler den reelle engagementsintensitet. Det rette benchmark for klæbrighed afhænger i høj grad af produktets tilsigtede brugsmønster: et værktøj, der er beregnet til at blive brugt én gang om ugen (en ugentlig symptomtjek), vil og bør have et lavere DAU/MAU-forhold end et værktøj, der er beregnet til daglig brug (en ledsagerapp til en kontinuerlig glukosemonitor), så klæbrighed bør altid fortolkes i forhold til produktets egen tilsigtede brugsfrekvens og ikke et enkelt universelt mål.

## Faldgruber

- **At sammenligne klæbrighedsforhold på tværs af produkter med forskellig tilsigtet brugsfrekvens**: et værktøj til ugentlig brug vil strukturelt vise et lavere DAU/MAU-forhold end et til daglig brug, selv om begge præsterer præcis som tilsigtet til deres respektive formål; benchmark mod produktets egen tilsigtede frekvens og ikke et enkelt universelt mål.
- **At bruge inkonsekvente definitioner af aktivitet i tælleren og nævneren**: det kan give et klæbrighedsforhold, der ikke afspejler reel engagementsintensitet, og som ikke meningsfuldt kan sammenlignes over tid eller med andre produkter.
- **At behandle et stigende klæbrighedsforhold som entydigt positivt uden at tjekke den samlede MAU-udvikling**: et stigende forhold, der skyldes en skrumpende, mere vanemæssig kerne af brugere, mens den samlede MAU falder, er en helt anden og mere bekymrende situation end et, der skyldes et reelt stigende dagligt engagement i en stabil eller voksende brugerbase.
- **At ignorere ugedags- og sæsoneffekter på DAU**: DAU kan variere betydeligt efter ugedag (hverdag mod weekend) eller årstid for mange sundhedsprodukter; brug gennemsnitligt DAU over en periode, der omfatter en hel naturlig cyklus, i stedet for et kort vindue, der kan være skævvredet.

## Kilder

- Peer reviewet litteratur og brancheliteratur om metrikker for engagement i mobile og digitale produkter samt udbredte benchmarkingrammer fra mobilanalyseplatforme
- Digital Therapeutics Alliance, vejledning i bedste praksis for måling af engagement for digitale terapeutiske produkter
- Peer reviewet litteratur om måling af engagement i digital sundhed, for eksempel undersøgelser offentliggjort i Journal of Medical Internet Research (JMIR mHealth and uHealth)

Se også: [brugerfastholdelsesrate](../brugerfastholdelsesrate/) og [konsistensrate for patientengagement](../konsistensrate-for-patientengagement/), de to beslægtede engagementsmetrikker, som dette forhold oftest forveksles med.
