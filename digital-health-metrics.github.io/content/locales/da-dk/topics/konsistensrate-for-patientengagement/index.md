# Konsistensrate for Patientengagement

Konsistensraten for patientengagement måler, hvor regelmæssigt en indskrevet patient interagerer med et digitalt sundhedsprodukt over tid, for eksempel ved at registrere kost eller symptomer, registrere fysisk aktivitet eller se sundhedsdata, og ikke blot om patienten overhovedet har brugt det. Det er en longitudinel metrik, der adskiller sig fra et optælling af aktiv brug på et enkelt tidspunkt: to patienter kan have identisk status som "brugte appen denne måned", mens den ene registrerer konsekvent hver dag, og den anden registrerer én gang og forsvinder i tre uger, og kun konsistensmetrikken skelner mellem dem.

## Hvorfor dette er vigtigt

Vedvarende, regelmæssig interaktion med et digitalt sundhedsværktøj er en af de mere pålidelige ledende indikatorer for klinisk gavn, især ved adfærdsafhængige tilstande som diabetes, vægtstyring og mental sundhed, hvor værktøjets værdi kommer fra den vane, det understøtter, og ikke fra en enkelt session. Et produkt kan rapportere et sundt antal månedlige aktive brugere og samtidig betjene en population, der logger ind én gang og driver væk, fordi månedlig aktiv brug er en lav standard, som intet siger om brugsmønsteret inden for måneden. Konsistensmetrikker fanger det på en måde, som simple aktivitetsoptællinger ikke kan. Fordi konsistens også er en af de ting, der er sværere at opretholde over måneder end over uger, er den et mere ærligt signal om produktets kvalitet og kliniske egnethed end engagementstal for korte vinduer, som er tilbøjelige til nyhedseffekter lige efter introduktionen.

## Hvordan det beregnes

```
Engagementskonsistensrate = uger med mindst én kvalificerende interaktion
                            / samlede uger, patienten er indskrevet × 100

En "kvalificerende interaktion" bør defineres eksplicit og konsekvent
(fx en kostregistrering, en symptomtjekning eller en gennemført
aktivitetssynkronisering), aldrig en passiv hændelse som en åbning af
appen uden nogen registreret handling.

Rapportér som en fordeling og ikke kun som et populationsgennemsnit:
  fx andelen af patienter med ≥ 80 % ugentlig konsistens,
     andelen med 50-79 %, andelen med < 50 %
```

## Gennemarbejdet eksempel

En app til ernæringsvejledning indskriver en patient i 12 uger. Patienten registrerer mindst én kvalificerende kostregistrering i 9 af de 12 uger, hvilket giver en individuel engagementskonsistensrate på 9 / 12 × 100 = 75 %. På tværs af appens fulde kohorte på 2.000 patienter, der har været indskrevet i mindst 12 uger, opretholder 600 patienter (30 %) ≥ 80 % ugentlig konsistens, 900 (45 %) ligger i intervallet 50-79 %, og 500 (25 %) ligger under 50 %. Hvis man kun rapporterede kohortens gennemsnit (som måske ville lande omkring 65 %), ville det skjule, at hele en fjerdedel af patienterne næsten ikke engagerer sig overhovedet, et segment, der er værd at undersøge for sig i stedet for at blive fortyndet i et samlet gennemsnit.

## Datakilder og forbehold

Konsistensdata kommer fra produktets egne hændelseslogge (kostregistreringer, aktivitetssynkroniseringer, tjek), og definitionen af en "kvalificerende interaktion" har enorm indflydelse på den resulterende rate: en lempelig definition (enhver åbning af appen) vil altid se bedre ud end en streng (en gennemført, meningsfuld registrering), så den anvendte definition skal angives tydeligt sammen med ethvert rapporteret tal. Automatisk synkroniserede data (for eksempel en tilsluttet fitnesstracker, der synkroniserer aktivitet i baggrunden) bør rapporteres separat fra manuelt registrerede data, da automatisk synkronisering kan blæse den tilsyneladende konsistens op uden at afspejle nogen aktiv indsats fra patientens side eller engagement i produktets vejledning.

## Faldgruber

- **At forveksle åbninger af appen med meningsfuldt engagement**: en passiv åbning af appen (for eksempel udløst af en push-notifikation) er ikke det samme som en registreret kostregistrering eller et gennemført tjek; definér og rapportér kun kvalificerende interaktioner.
- **Kun at rapportere populationsgennemsnittet**: en sundt udseende gennemsnitlig konsistensrate kan skjule en tvedelt population af stærkt engagerede og næsten helt uengagerede patienter; rapportér fordelingen på tværs af konsistensintervaller og ikke kun gennemsnittet.
- **At ignorere nævneren for indskrivningens længde**: at sammenligne konsistensrater mellem patienter, der har været indskrevet i meget forskellige perioder, uden at tage højde for indskrivningens varighed, vil skævvride resultatet til fordel for den gruppe, der havde et kortere og lettere at opretholde målevindue.
- **Automatisk synkronisering i baggrunden, der blæser raten op**: en passivt synkroniseret datastrøm fra en bærbar enhed kan få en uengageret patient til at fremstå konsekvent aktiv uden nogen reel adfærdsændring eller engagement i produktet fra patientens side.

## Kilder

- Peer reviewet litteratur om mønstre for engagement i digital sundhed og deres sammenhæng med kliniske udfald, for eksempel undersøgelser offentliggjort i Journal of Medical Internet Research (JMIR)
- American Medical Informatics Association (AMIA), vejledning om kvaliteten af patientgenererede sundhedsdata og måling af engagement
- Digital Therapeutics Alliance, vejledning i bedste praksis for måling af engagement og udfald for digitale terapeutiske produkter

Se også: [brugerfastholdelsesrate](../brugerfastholdelsesrate/), den nært beslægtede metrik for, om en patient overhovedet forbliver indskrevet, i modsætning til hvor konsekvent vedkommende engagerer sig, mens vedkommende er indskrevet.
