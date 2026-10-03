# Enhedsoppetidsrate

Enhedsoppetidsrate måler andelen af tid, en fjernovervågningsenhed er online og rent faktisk overfører data, som en andel af den samlede tid, den forventes at gøre det. Den er den grundlæggende infrastrukturmetrik under ethvert fjernovervågningsprogram: ingen anden klinisk eller operationel metrik i et sådant program kan være pålidelig, hvis de underliggende enheder, der genererer dataene, ikke er konsekvent online.

## Hvorfor det betyder noget

Et fjernovervågningsprogram kan rapportere imponerende kliniske resultater baseret udelukkende på de patienter, hvis enheder rent faktisk forbliver online og overfører data, mens det stiltiende udelukker eller overser den delmængde af patienter, hvis enheder oplever hyppige afbrydelser — og disse afbrydelser korrelerer ofte med specifikke tekniske eller miljømæssige faktorer (dårlig trådløs dækning, forældet enhedsfirmware, patientens tekniske forvirring om genopladning), der kan være uforholdsmæssigt koncentreret blandt bestemte patientpopulationer. En lav eller ujævnt fordelt enhedsoppetidsrate underminerer ikke kun datakvaliteten, men skaber også et reelt klinisk sikkerhedshul: en patient, hvis overvågningsenhed er offline, modtager ingen af de sikkerhedsfordele, programmet er designet til at levere, uanset hvor godt det underliggende kliniske algoritme ville have fungeret, hvis det havde modtaget data.

## Hvordan det beregnes

```
Enhedsoppetidsrate = tid enheden rent faktisk overfører gyldige
                     data / samlet forventet overvågningstid × 100

Rapporter altid segmenteret efter:
  Oppetidsrate efter enhedstype eller -model
  Oppetidsrate efter patientdemografi (for at afsløre, om
  nedetid er koncentreret blandt bestemte populationer)
```

## Et gennemarbejdet eksempel

Et program til fjernovervågning af hjertesvigt rapporterer en imponerende klinisk resultatforbedring baseret på data fra de 85% af dets 500 tilmeldte patienter, hvis enheder opretholdt mindst 90% oppetid i løbet af programmets første tre måneder. Men en gennemgang af den resterende 15% af patienter, hvis enheder havde betydeligt lavere oppetid, afslører, at denne gruppe uforholdsmæssigt omfattede patienter i landdistrikter med dårlig mobildækning og ældre patienter, der rapporterede forvirring om, hvornår og hvordan enheden skulle genoplades. Dette fund fik programmet til at undersøge forbedret enhedsdesign til svag forbindelse-miljøer og forenklet patientuddannelse om enhedsvedligeholdelse, i stedet for blot at rapportere sine resultater baseret på den delmængde af patienter, hvis enheder tilfældigvis forblev pålideligt online.

## Datakilder og forbehold

Oppetidsdata kommer typisk direkte fra enhedens egen telemetri eller fra overvågningsplatformens serverside logning af modtagne datatransmissioner, hvilket gør denne metrik relativt ligetil at beregne, men fortolkning kræver at skelne mellem enhedsfejl (et teknisk problem med selve enheden), forbindelsesfejl (dårlig trådløs eller cellulær dækning) og patientrelaterede faktorer (glemt genopladning, forkert brug), da hver kræver en anden intervention. Oppetiderater bør rapporteres pr. patient over tid, ikke blot som et aggregeret organisationstal, da en samlet gennemsnit kan skjule en delmængde af patienter med vedvarende, alvorlige oppetidsproblemer.

## Faldgruber

- **Rapportering af kliniske resultater kun fra patienter med høj enhedsoppetid**: dette ekskluderer stiltiende den delmængde af patienter, der muligvis har mest brug for pålidelig overvågning, og som kan have systematisk anderledes resultater.
- **Behandling af al nedetid som ens**: enhedsfejl, forbindelsesproblemer og patientrelaterede faktorer kræver meget forskellige løsninger; aggregering af dem skjuler, hvilken intervention der rent faktisk er nødvendig.
- **Ignorering af demografisk koncentration af nedetid**: hvis lav oppetid er koncentreret blandt bestemte patientpopulationer, kan det underliggende overvågningsprogram utilsigtet forværre sundhedsmæssige uligheder.
- **Måling af oppetid som et samlet organisationsgennemsnit**: dette skjuler individuelle patienter med vedvarende, alvorlige oppetidsproblemer, der kræver specifik opmærksomhed.

## Kilder

- U.S. Food and Drug Administration (FDA), retningslinjer for pålidelighed af fjernovervågningsenheder til medicinsk udstyr
- Collegialt bedømt litteratur om fjernpatientovervågningens pålidelighed, f.eks. undersøgelser offentliggjort i Journal of the American College of Cardiology og npj Digital Medicine

Se også: [tid til intervention](../time-to-intervention-rate/), da dette afhænger af at modtage fuldstændige, pålidelige enhedsdata for overhovedet at kunne træffe en korrekt triagebeslutning.
