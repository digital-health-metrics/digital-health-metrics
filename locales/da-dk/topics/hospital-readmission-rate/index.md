# Hospitalsgenindlæggelsesrate

Hospitalsgenindlæggelsesraten måler andelen af patienter, der genindlægges på et hospital inden for et defineret tidsvindue — oftest 30 dage — efter udskrivelse fra en indledende indlæggelse. For digitale sundhedsprogrammer, der sigter mod at understøtte overgangen fra hospital til hjem (virtuelle afdelinger, fjernovervågning efter udskrivelse, digitale opfølgningsprogrammer), er det metrikken, der er mest direkte knyttet til betalerøkonomi og værdibaserede plejekontrakter.

## Hvorfor det betyder noget

Genindlæggelser inden for 30 dage anses bredt for at være delvist forebyggelige, og mange betalere pålægger finansielle sanktioner for hospitaler med højere end forventede genindlæggelsesrater, hvilket gør denne metrik til en direkte linje til ægte økonomisk værdi for enhver digital intervention, der sigter mod at reducere den. Et digitalt program, der kan demonstrere en statistisk signifikant reduktion i genindlæggelser sammenlignet med en passende kontrolgruppe, har en af de stærkeste mulige forretningscases i hele digital sundhed, fordi omkostningsbesparelsen ved at undgå en enkelt genindlæggelse ofte er stor nok til at retfærdiggøre betydelig programinvestering. Men fordi genindlæggelsesrater er stærkt påvirket af patientens underliggende sygdomsbyrde, skal enhver rapporteret reduktion sammenlignes med en passende matchet eller risikojusteret kontrolgruppe for at være troværdig.

## Hvordan det beregnes

```
Hospitalsgenindlæggelsesrate = patienter genindlagt inden for
                               tidsvinduet (typisk 30 dage) /
                               samlet antal udskrevne patienter
                               × 100

For at vurdere en digital interventions effekt:
  Reduktion i genindlæggelsesrate = (kontrolgruppens rate −
                                     interventionsgruppens rate) /
                                     kontrolgruppens rate × 100

Risikojustering (ved brug af etablerede værktøjer som LACE-indekset
eller HOSPITAL-score) bør anvendes, når interventions- og
kontrolgrupper ikke er tilfældigt tildelt, for at tage højde for
forskelle i underliggende patientrisiko.
```

## Et gennemarbejdet eksempel

Et hospital implementerer et digitalt fjernovervågningsprogram for patienter udskrevet efter hjertesvigtsbehandling. Blandt 400 patienter tilmeldt programmet er 30-dages genindlæggelsesraten 12%, sammenlignet med 18% for en matchet historisk kontrolgruppe af lignende patienter, der ikke modtog programmet — en relativ reduktion på 33%. Fordi grupperne ikke blev tilfældigt tildelt, anvender evalueringsteamet en risikojusteringsscore for at bekræfte, at de tilmeldte patienter ikke i forvejen var lavere risiko end kontrolgruppen, hvilket ville have forklaret forskellen uden nogen reel programeffekt. Efter justering forbliver en statistisk signifikant reduktion på cirka 25%, hvilket giver programmet en troværdig, forsvarlig forretningscase over for hospitalets ledelse.

## Datakilder og forbehold

Genindlæggelsesdata kræver typisk adgang til data fra flere hospitaler eller en regional sundhedsinformationsudveksling, da en patient genindlagt på et andet hospital end det, der oprindeligt udskrev dem, ikke vil blive registreret, hvis dataene kun kommer fra et enkelt systems egne journaler — hvilket betyder, at en genindlæggelsesrate beregnet udelukkende fra et systems interne data sandsynligvis undervurderer den sande rate. Valget af kontrolgruppe er den enkeltfaktor, der er mest afgørende for troværdigheden af enhver rapporteret reduktion; en dårligt matchet eller ikke-risikojusteret sammenligning kan producere et dramatisk, men meningsløst resultat.

## Faldgruber

- **Rapportering af en reduktion uden en passende kontrolgruppe**: genindlæggelsesrater varierer enormt efter patientpopulation; en reduktion uden en matchet eller risikojusteret sammenligning beviser intet om programmets effektivitet.
- **Afhængighed udelukkende af interne data fra ét system**: en patient genindlagt på et andet hospital vil ikke blive opdaget, hvilket fører til en kunstigt lav målt genindlæggelsesrate.
- **Ignorering af forskellige tidsvinduer ved sammenligning af programmer**: 30-dages, 60-dages og 90-dages genindlæggelsesrater er ikke direkte sammenlignelige metrikker.
- **Behandling af alle genindlæggelser som forebyggelige**: ikke alle genindlæggelser skyldes fejl i overgangspleje; nogle er uundgåelige progressioner af den underliggende tilstand, og det at sigte mod nul genindlæggelser kan utilsigtet afskrække passende, nødvendig pleje.

## Kilder

- Centers for Medicare & Medicaid Services (CMS), Hospital Readmissions Reduction Program (HRRP)
- Agency for Healthcare Research and Quality (AHRQ), retningslinjer for risikojusteringsmetodologi
- Collegialt bedømt litteratur om digitale interventioner efter udskrivelse, f.eks. undersøgelser offentliggjort i Journal of the American Medical Association (JAMA) og Circulation: Heart Failure

Se også: [reduktion af sengedage](../bed-day-reduction/), sikkerhedsmetrikken, der altid bør rapporteres sammen med enhver påstand om reduktion af sengedage for den samme patientpopulation.
