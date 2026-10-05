# Konsistensrate for Patientengagement

Konsistensraten for patientengagement måler, hvor regelmæssigt en patient interagerer med et digitalt værktøj over tid, til forskel fra om de nogensinde har brugt det overhovedet. En patient, der brugte en app intensivt i den første uge og derefter aldrig igen, og en patient, der bruger den samme app konsekvent hver uge i seks måneder, kan begge tælle som "aktive brugere" under en simpel brugsmetrik, men repræsenterer meget forskellige engagementsmønstre med meget forskellige implikationer for, om programmet rent faktisk leverer vedvarende værdi.

## Hvorfor det betyder noget

Mange digitale sundhedsprogrammer rapporterer et samlet "aktive brugere"-tal, der skjuler et kritisk skel: nyhedsdrevet indledende engagement falmer typisk hurtigt, mens vedvarende, konsistent engagement er en meget stærkere indikator for, at et værktøj er blevet integreret i en patients rutine på en måde, der sandsynligvis producerer varig klinisk eller adfærdsmæssig fordel. For programmer, der er afhængige af vedvarende brug for at fungere — medicinpåmindelser, kronisk sygdomsovervågning, adfærdsmæssige sundhedsinterventioner — er konsistensraten ofte en stærkere forudsigelse for klinisk resultat end nogen engangs-brugsmetrik, hvilket gør den til en vigtig tidlig advarselsindikator for produktteams, der ønsker at opdage falmende engagement, før det viser sig som et dårligt klinisk resultat måneder senere.

## Hvordan det beregnes

```
Konsistensrate for patientengagement = patienter, der opfylder
                                       den definerede
                                       engagementstærskel
                                       (f.eks. brug i mindst 3 af
                                       4 uger) over en vedvarende
                                       periode / samlet antal
                                       aktive brugere i samme
                                       periode × 100

Den specifikke tærskel (hvor ofte, over hvor lang en periode) bør
defineres ud fra den kliniske eller adfærdsmæssige begrundelse for
værktøjet, ikke sat vilkårligt.
```

## Et gennemarbejdet eksempel

En app til mental sundhed har 1.000 brugere, der downloadede og brugte appen mindst én gang i en given måned, hvilket tæller som "aktive brugere" under en simpel brugsmetrik. Men analyse af konsistens afslører, at kun 350 af disse brugere opfyldte tærsklen for at bruge appen mindst tre af de fire uger i den måned, hvilket giver en konsistensrate på 35%. Produktteamet undersøger de 650 inkonsistente brugere og opdager, at de fleste af dem brugte appen intensivt i deres første uge efter download og derefter stort set stoppede — et klassisk nyhedseffektmønster, der ville have været fuldstændig skjult af det samlede "aktive brugere"-tal på 1.000, men som dirigerer produktteamet mod at undersøge, hvad der sker i overgangen fra uge én til uge to.

## Datakilder og forbehold

Konsistensberegning kræver sporing af brugsmønstre over tid pr. individuel bruger, ikke blot aggregerede brugstællinger, hvilket betyder, at et produkt skal have tilstrækkelig brugssporingsinfrastruktur på plads fra starten for at kunne beregne denne metrik retrospektivt. Den valgte tærskel og periode former dramatisk det resulterende tal, så sammenligning af konsistensrater på tværs af produkter eller tidsperioder kræver bekræftelse af, at de samme definitioner er blevet anvendt konsekvent.

## Faldgruber

- **Rapportering af kun samlet aktiv brug uden konsistens**: dette skjuler nyhedsdrevet engagement, der falmer hurtigt, fra vedvarende, klinisk værdifuldt engagementsmønster.
- **Sætning af en vilkårlig konsistenstærskel**: en tærskel valgt uden klinisk eller adfærdsmæssig begrundelse kan producere et tal, der ikke rent faktisk forudsiger det resultat, man bryder sig om.
- **Sammenligning af konsistensrater på tværs af forskellige tærskeldefinitioner**: en "konsistensrate" beregnet med forskellige tærskler eller perioder er ikke direkte sammenlignelig mellem produkter eller undersøgelser.
- **Ignorering af, hvorfor engagement falder**: konsistensraten identificerer, at engagement falmer, men ikke hvorfor; yderligere kvalitativ undersøgelse er nødvendig for at adressere den underliggende årsag.

## Kilder

- Collegialt bedømt litteratur om digital sundhedsengagement og nyhedseffekter, f.eks. undersøgelser offentliggjort i Journal of Medical Internet Research (JMIR) mHealth and uHealth
- Mobile app-industristandarder for engagementsmålinger fra organisationer som Mobile Marketing Association

Se også: [brugerfastholdelsesrate](../brugerfastholdelsesrate/), den nært beslægtede metrik for, om en patient overhovedet forbliver tilmeldt, til forskel fra hvor konsekvent de er engagerede, mens de er tilmeldt.
