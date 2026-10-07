# Patientens nettoanbefalingsscore

Patientens nettoanbefalingsscore (Net Promoter Score, NPS) måler patienters villighed til at anbefale et digitalt sundhedsprodukt eller en telehealth-tjeneste til andre ud fra ét enkelt spørgsmål i en undersøgelse, "Hvor sandsynligt er det, at du vil anbefale denne tjeneste til en ven eller kollega?", scoret fra 0 til 10. Respondenter, der scorer 9-10, er "promotorer", 7-8 er "passive", og 0-6 er "detraktorer"; NPS er procentdelen af promotorer minus procentdelen af detraktorer. Det er den mest udbredte og mest kritiserede metrik for patienttilfredshed inden for digital sundhed, værdsat for sin enkelhed, men begrænset i, hvad den i sig selv kan diagnosticere.

## Hvorfor dette er vigtigt

NPS giver digitale sundhedsteams et enkelt, standardiseret og sammenligneligt tilfredshedssignal, som er billigt at indsamle og let for ikke-specialister (ledere, bestyrelser, bestillere) at fortolke ved et enkelt blik, og det er grunden til, at den forbliver populær trods veldokumenterede metodiske begrænsninger. For telehealth og digitale hoveddør-produkter i særdeleshed er NPS ofte den ledende indikator for, om patienterne fortsat vil vælge den digitale kanal frem for et alternativ ansigt til ansigt, når begge er til rådighed, hvilket har direkte konsekvenser for planlægningen af kanalmix og kapacitet. NPS er dog et enkelt, overordnet sammenfattende tal: en faldende NPS fortæller et team, at noget er galt, men ikke hvad, så den bør altid kombineres med fritekstkommentarer eller et mere detaljeret brugervenlighedsinstrument for at kunne handles på og ikke blot være et tal på et scorekort.

## Hvordan det beregnes

```
NPS = % promotorer (score 9-10) − % detraktorer (score 0-6)

Resultatet er et tal fra −100 til +100 og ikke en procentdel, selv om
det udledes af procenter: tilføj aldrig et "%"-tegn til et NPS-tal.

Rapportér sammen med:
  svarprocent (% af de adspurgte patienter, der svarede)
  stikprøvestørrelse
  den præcise formulering af det anvendte spørgsmål
```

## Gennemarbejdet eksempel

En telehealth-platform adspørger 1.000 patienter efter en videokonsultation og modtager 400 svar (svarprocent 40 %). Af disse 400 respondenter scorer 220 9-10 (promotorer, 55 %), 100 scorer 7-8 (passive, 25 %), og 80 scorer 0-6 (detraktorer, 20 %). NPS er 55 − 20 = 35. Tallet har kun betydning i en sammenhæng: en NPS på 35 kan være et stærkt resultat sammenlignet med den bredere telehealth-branche eller et bekymrende fald sammenlignet med den samme platforms egen score på 48 kvartalet før. NPS er langt mere anvendelig som en tendens over tid for ét produkt end som et absolut engangsbenchmark mod et andet.

## Datakilder og forbehold

NPS indsamles gennem en undersøgelse efter interaktionen, typisk udløst umiddelbart efter et videobesøg, en appsession eller et plejeforløb, og svarprocenten har enorm betydning: en lav svarprocent (langt under de ca. 40 %, der ses i det gennemarbejdede eksempel) risikerer en skævhed på grund af manglende svar, hvor kun stærkt tilfredse eller stærkt utilfredse patienter gider svare, hvilket trækker scoren mod ekstremerne og væk fra populationens reelle stemning. En sammenligning af NPS på tværs af organisationer eller selv på tværs af en enkelt organisations forskellige kanaler (for eksempel telehealth mod ansigt til ansigt) er kun gyldig, hvis spørgsmålets formulering, tidspunktet og undersøgelsespopulationen reelt er sammenlignelige; små ændringer i formuleringen er kendt for at flytte scorer målbart. NPS bør behandles som et udfald, der skal forklares, og ikke som et mål i sig selv: de fritekstkommentarer, der typisk følger med en NPS-undersøgelse, er normalt mere handlingsorienterede end selve scoren.

## Faldgruber

- **At sammenligne NPS-tal indsamlet med forskellig spørgsmålsformulering eller timing**: selv mindre forskelle i undersøgelsesdesignet kan flytte scorer med flere point, hvilket gør benchmarking af NPS på tværs af organisationer langt mindre pålidelig, end det ser ud til.
- **At ignorere svarprocenten**: en overskrifts-NPS beregnet ud fra en svarprocent på 10 % er langt mindre troværdig end en beregnet ud fra en svarprocent på 60 %, da lave svarprocenter har tendens til skævhed på grund af manglende svar mod de mest ekstreme meninger.
- **At behandle NPS som et diagnostisk værktøj i stedet for en sammenfattende metrik**: en faldende NPS siger, at noget er galt, men aldrig hvad; den bør altid kombineres med kvalitativ feedback eller et mere detaljeret instrument for tilfredshed eller brugervenlighed for at finde årsagen.
- **At jagte NPS som et mål i sig selv**: at optimere snævert for NPS-tallet (for eksempel ved kun at adspørge patienter efter usædvanligt positive interaktioner) kan forbedre den rapporterede score, mens den underliggende patientoplevelse ikke bliver bedre, eller endda bliver aktivt dårligere.

## Kilder

- Bain & Company, den oprindelige metodik for Net Promoter System og vejledning i benchmarking
- Agency for Healthcare Research and Quality (AHRQ), CAHPS-programmet (Consumer Assessment of Healthcare Providers and Systems) for undersøgelser af patientoplevelser, som et supplerende og mere detaljeret alternativ
- Peer reviewet litteratur om brugen og begrænsningerne af Net Promoter Score i sundhedsvæsenet, for eksempel undersøgelser offentliggjort i Journal of Medical Internet Research (JMIR)

Se også: [brugerfastholdelsesrate](../brugerfastholdelsesrate/), da patientrapporteret tilfredshed og faktisk fortsat brug af et produkt ofte afviger og er værd at følge som separate signaler.
