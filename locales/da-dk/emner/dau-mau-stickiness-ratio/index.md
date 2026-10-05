# DAU/MAU-Stickiness-ratio

DAU/MAU-stickiness-ratio er den standard produktanalysemetrik for engagementsintensitet på tværs af en hel brugerbase, beregnet som forholdet mellem daglige aktive brugere og månedlige aktive brugere. Den besvarer et andet spørgsmål end fastholdelse: i stedet for at spørge, om brugere forbliver tilmeldt over tid, spørger den, hvor ofte de brugere, der er tilmeldt, rent faktisk bruger produktet inden for en given måned.

## Hvorfor det betyder noget

En høj DAU/MAU-ratio indikerer, at et produkt er blevet en del af en brugers daglige rutine, mens en lav ratio indikerer, at brugere, selvom de teknisk set er "aktive" i løbet af en måned, kun bruger produktet lejlighedsvist. For digitale sundhedsprodukter, der er afhængige af hyppig interaktion for at levere værdi — daglig medicinsporing, kontinuerlig symptomovervågning, daglige adfærdsmæssige sundhedsprompter — er denne ratio en direkte indikator for, om produktet rent faktisk opnår den brugsfrekvens, som dets kliniske model antager. Et produkt designet til daglig brug, men som kun opnår en DAU/MAU-ratio svarende til brug et par gange om måneden, leverer sandsynligvis ikke den kliniske værdi, dets design antager, uanset hvor mange brugere der teknisk set forbliver "tilmeldt".

## Hvordan det beregnes

```
DAU/MAU-stickiness-ratio = gennemsnitligt daglige aktive brugere
                           i en måned / månedlige aktive brugere
                           i samme måned

Udtrykt som en procentdel: en ratio på 50% indikerer, at den
gennemsnitlige månedlige aktive bruger bruger produktet omkring
halvdelen af dagene i måneden; en ratio på 10% indikerer brug
omkring 3 dage om måneden.
```

## Et gennemarbejdet eksempel

En digital diabetesstyringsapp designet til daglig glukoselogning har 5.000 månedlige aktive brugere i en given måned, og det gennemsnitlige daglige aktive brugertal i løbet af den måned er 1.500, hvilket giver en DAU/MAU-stickiness-ratio på 30%. Da appen er designet ud fra en klinisk model, der antager daglig logning for at give rettidige indsigter, rejser en stickiness-ratio på 30% (svarende til omkring 9 dages brug om måneden) et spørgsmål om, hvorvidt produktet rent faktisk leverer sin tilsigtede kliniske værdi for de fleste brugere, selvom dets samlede månedlige aktive brugertal ser sundt ud. Dette fik produktteamet til at undersøge, hvilke specifikke friktionspunkter der forhindrer daglig brug.

## Datakilder og forbehold

DAU/MAU-ratioen er let at beregne fra standard produktanalysedata, men dens passende benchmark varierer enormt efter produkttype — en daglig vanedannende app bør sigte efter en meget højere ratio end et produkt designet til lejlighedsvis brug, såsom et til at booke sjældne specialistaftaler. At sammenligne en DAU/MAU-ratio på tværs af produkter med fundamentalt forskellige tilsigtede brugsfrekvenser er derfor meningsløst uden at tage højde for denne kontekst.

## Faldgruber

- **Sammenligning af DAU/MAU på tværs af produkter med forskellige tilsigtede brugsfrekvenser**: et produkt designet til sjælden brug vil naturligt have en lavere ratio end et designet til daglig brug, uden at dette indikerer dårligere ydeevne.
- **Behandling af en højere ratio som altid bedre**: for nogle produkttyper kan en meget høj brugsfrekvens indikere et problem (f.eks. overdreven afhængighed) snarere end sund engagement.
- **Ignorering af den underliggende MAU-tendens**: en stabil eller forbedrende stickiness-ratio med et faldende samlet MAU-tal kan stadig indikere et skrumpende produkt.
- **Brug af denne metrik isoleret fra fastholdelse**: stickiness måler engagementsintensitet blandt nuværende brugere, ikke om nye brugere fortsætter med at blive tilmeldt; begge metrikker er nødvendige for et fuldstændigt billede.

## Kilder

- Mobile app- og produktanalyseindustristandarder for engagementsmålinger
- Collegialt bedømt og industrilitteratur om digital sundhedsengagement, f.eks. analyser offentliggjort af Rock Health og lignende digitale sundhedsforskningsorganisationer

Se også: [brugerfastholdelsesrate](../brugerfastholdelsesrate/), den nært beslægtede metrik for, om en patient overhovedet forbliver tilmeldt, til forskel fra hvor konsekvent de er engagerede, mens de er tilmeldt.
