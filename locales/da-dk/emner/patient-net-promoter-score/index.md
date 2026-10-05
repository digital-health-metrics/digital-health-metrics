# Patient Net Promoter Score

Patient Net Promoter Score (NPS) er den bredt anvendte, og bredt kritiserede, enkeltspørgsmål-tilfredshedsmetrik, der spørger patienter, hvor sandsynligt det er, at de vil anbefale et digitalt sundhedsprodukt eller en service til en ven eller kollega, på en skala fra 0 til 10. Svar grupperes i detraktorer (0-6), passive (7-8) og promotorer (9-10), og scoren beregnes som procentdelen af promotorer minus procentdelen af detraktorer.

## Hvorfor det betyder noget

NPS er attraktiv, fordi den er enkel at administrere, hurtig for patienter at besvare og giver et enkelt sammenligneligt tal, der kan spores over tid og benchmarkes mod andre organisationer og brancher. Den giver en bred, letfattelig puls på den samlede patientsentiment, der er nyttig til at spotte store tendenser og kommunikere med ledelse, der ønsker et enkelt tal frem for et komplekst dashboard. Men dens enkelhed er også dens svaghed: fordi den er baseret på et enkelt hypotetisk spørgsmål om fremtidig adfærd (anbefaling) snarere end faktisk oplevet kvalitet, korrelerer den ikke altid pålideligt med kliniske resultater eller endda faktisk fortsat brug, hvilket betyder, at den bør behandles som ét signal blandt flere, ikke den eneste målestok for et produkts succes.

## Hvordan det beregnes

```
Patient NPS = (% promotorer [score 9-10] − % detraktorer
              [score 0-6]) × 100

Resultatet er et tal mellem -100 og +100, ikke en procentdel,
selvom det nogle gange fejlagtigt rapporteres som en.

Rapporter altid sammen med:
  Svarrate = besvarede NPS-undersøgelser / samlet antal
            udsendte NPS-undersøgelser × 100
```

## Et gennemarbejdet eksempel

Et telemedicinprogram udsender en NPS-undersøgelse til 1.000 patienter efter deres konsultation, og 400 svarer (en svarrate på 40%). Af disse 400 svar er 220 promotorer (55%), 120 er passive (30%), og 60 er detraktorer (15%), hvilket giver en NPS på 55 − 15 = 40. Dette ser ud til at være en stærk score, men programteamet bemærker, at svarraten på 40% betyder, at de ikke hører fra 60% af patienterne, og en opfølgende analyse af en prøve af ikke-respondenter via telefon afslører en noget mindre positiv sentiment blandt dem — en påmindelse om, at NPS kun måler sentimentet hos dem, der vælger at svare, ikke nødvendigvis hele patientpopulationen.

## Datakilder og forbehold

NPS-data indsamles typisk via en kort undersøgelse sendt elektronisk efter en interaktion, og svarraten er en kritisk, men ofte underrapporteret kontekstuel faktor — en NPS beregnet fra en svarrate på 10% er meget mindre pålidelig som en repræsentation af den samlede patientpopulations sentiment end en beregnet fra en svarrate på 60%. NPS bør aldrig anvendes som den eneste målestok for produktsucces, da den ikke direkte måler kliniske resultater, faktisk fortsat brug eller specifikke brugbarhedsproblemer, der kan drive utilfredshed.

## Faldgruber

- **Rapportering af NPS uden svarrate**: en score baseret på en lav svarrate kan være stærkt skævvredet og bør fortolkes med betydelig forsigtighed.
- **Behandling af NPS som en procentdel**: NPS er et tal mellem -100 og +100, ikke en procentdel, og bør ikke sammenlignes direkte med procentbaserede metrikker.
- **Brug af NPS som den eneste succesmetrik**: NPS måler hypotetisk anbefalingssandsynlighed, ikke kliniske resultater eller faktisk brugsadfærd; kombiner med andre metrikker for et fuldstændigt billede.
- **Sammenligning af NPS på tværs af brancher uden kontekst**: patientforventninger og benchmarks for sundhedsvæsenet adskiller sig fra forbrugerteknologi eller detailhandel; sammenlign kun med passende sundhedsvæsensbenchmarks.

## Kilder

- Bain & Company, oprindelig udvikling og metodologi for Net Promoter Score
- Press Ganey og lignende sundhedsvæsenspatientoplevelsesmålingsorganisationer, benchmarkdata specifikt for sundhedsvæsenet
- Collegialt bedømt litteratur, der kritiserer og kontekstualiserer NPS i sundhedsvæsensindstillinger, f.eks. undersøgelser offentliggjort i Journal of Medical Internet Research (JMIR)

Se også: [System Usability Scale-score](../system-usability-scale-score/), en relateret men adskilt patientrapporteret metrik, der måler specifik softwarebrugbarhed snarere end generel tilfredshed og loyalitet.
