# Biometrisk Forbedringsrate

Biometrisk forbedringsrate er andelen af patienter, der opnår en klinisk meningsfuld ændring i en sporet biometrisk værdi — såsom HbA1c, blodtryk eller BMI — mellem baseline og et defineret opfølgningstidspunkt, efter at have brugt et digitalt sundhedsprogram. Den eksisterer for at adskille et program, der rent faktisk flytter kliniske resultater, fra et, der blot genererer engagement eller tilfredshedsdata, hvilket gør den til en af de mest direkte linjer mellem digital sundhedsaktivitet og klinisk værdi.

## Hvorfor det betyder noget

Mange digitale sundhedsprogrammer rapporterer engagementsmetrikker — logins, beskeder sendt, dage aktive — som proxyer for effektivitet, men engagement i sig selv beviser ikke, at en patients helbred er forbedret; en patient kan logge ind dagligt uden nogen ændring i deres underliggende tilstand. Biometrisk forbedringsrate tvinger evalueringen tilbage til det resultat, der rent faktisk betyder noget for patienten og for betaleren, og den er særligt vigtig i værdibaserede plejekontrakter, hvor betaling i stigende grad er knyttet til demonstrerede kliniske resultater snarere end blot leveret service. Fordi den kræver en konsistent baseline-måling og et defineret opfølgningsvindue for hver patient, afslører den også, hvor meget af et programs tilsyneladende effekt faktisk skyldes selektiv rapportering af kun de patienter, der blev i programmet og blev målt igen.

## Hvordan det beregnes

```
Biometrisk forbedringsrate = patienter med klinisk meningsfuld
                             forbedring i den sporede biometriske
                             værdi / samlet antal patienter med
                             gyldig baseline- og opfølgningsmåling
                             × 100

"Klinisk meningsfuld" skal defineres på forhånd ud fra etablerede
kliniske tærskler for den specifikke biometriske værdi (f.eks. et
fald på ≥0,5 procentpoint i HbA1c), ikke valgt efter at have set
dataene.

Rapporter altid sammen med:
  Målevalueringsrate = patienter med gyldig opfølgningsmåling /
                       samlet antal tilmeldte patienter × 100
```

## Et gennemarbejdet eksempel

Et digitalt diabetesstyringsprogram tilmelder 500 patienter med en baseline HbA1c-måling. Ved seks måneder har 350 af disse patienter en gyldig opfølgningsmåling (en målevalueringsrate på 70%), og af disse 350 opnår 210 et fald på mindst 0,5 procentpoint i HbA1c, hvilket giver en biometrisk forbedringsrate på 60%. Men hvis programmet kun rapporterer "60% af patienterne forbedrede deres HbA1c" uden at nævne, at 30% af de oprindeligt tilmeldte patienter aldrig fik en opfølgningsmåling, skjuler dette muligheden for, at de patienter, der faldt fra uden måling, klarede sig dårligere end dem, der blev — hvilket er grunden til, at målevalueringsraten altid skal rapporteres sammen med forbedringsraten.

## Datakilder og forbehold

Biometriske data kommer typisk fra tilsluttede enheder (kontinuerlige glukosemonitorer, blodtryksmanchetter), laboratorieresultater integreret fra den elektroniske patientjournal, eller patientrapporterede målinger indtastet manuelt — og hver kilde har en anden pålidelighedsprofil, hvor manuelt indtastede data er mest modtagelige for fejl eller selektiv rapportering. Opfølgningsvinduet skal være konsistent på tværs af den rapporterede population, da det at tillade et variabelt vindue (nogle patienter målt ved 3 måneder, andre ved 12) gør det muligt at skjule svag langsigtet effektivitet bag stærke kortsigtede resultater.

## Faldgruber

- **Rapportering af forbedringsrate uden målevalueringsrate**: en høj forbedringsrate blandt kun de patienter, der blev målt igen, kan skjule et betydeligt frafald, der sandsynligvis skævvrider resultatet positivt.
- **Definition af "klinisk meningsfuld" efter at have set dataene**: at vælge en tærskel, der tilfældigvis matcher, hvad dataene viser, i stedet for en etableret klinisk standard, underminerer hele formålet med maskinen.
- **Sammenligning af forbedringsrater på tværs af programmer med forskellige opfølgningsvinduer**: et program, der måler ved 3 måneder, vil typisk vise en højere forbedringsrate end et, der måler ved 12 måneder, uanset underliggende effektivitet.
- **Ignorering af regression til middelværdien**: patienter tilmeldt på grund af en dårligt kontrolleret baseline-værdi vil ofte vise en vis forbedring blot af statistiske årsager, uanset interventionens effektivitet; sammenligning med en kontrolgruppe eller historisk baseline hjælper med at korrigere for dette.

## Kilder

- American Diabetes Association, standarder for klinisk meningsfulde tærskler i glykæmisk kontrol
- Collegialt bedømt litteratur om digitale sundhedsinterventioner for kroniske sygdomme, f.eks. undersøgelser offentliggjort i Diabetes Care og Journal of Medical Internet Research (JMIR)
- Centers for Medicare & Medicaid Services (CMS), retningslinjer for kvalitetsmålinger i værdibaserede plejekontrakter

Se også: [biometrisk stabiliseringsrate](../biometrisk-stabiliseringsrate/), den relaterede metrik for vedvarende kontrol efter opnåelse af et mål, i modsætning til den indledende ændring fra baseline.
