# Nøjagtighed af Triage-henvisning

Nøjagtighed af triage-henvisning er andelen af patientkontakter, hvor et automatiseret eller AI-understøttet triageværktøj korrekt henviser en patient til det rette plejeniveau og -sted — f.eks. selvpleje, almen praksis, skadestue for ikke-livstruende tilstande eller akutbehandling — vurderet mod en klinisk valideret referencestandard. Det er sikkerheds- og effektivitetsmetrikken for enhver digital adgangsportal, symptomtjekker eller AI-triagesystem: hele værktøjets værdiforslag hviler på korrekt, hurtig og konsistent henvisning af patienter.

## Hvorfor det betyder noget

Et unøjagtigt triageværktøj forårsager skade i begge retninger: undertriage (henvisning af en patient til et lavere plejeniveau end nødvendigt) kan forsinke behandling af en reel nødsituation, mens overtriage (henvisning af en patient til et højere plejeniveau end nødvendigt) spilder knap akut- og behandlingskapacitet og øger omkostninger og patientangst uden klinisk fordel. Fordi disse to fejltilstande har så forskellige konsekvenser, skal nøjagtighed af triage-henvisning altid rapporteres sammen med retningen af fejlene, ikke som et enkelt samlet nøjagtighedstal, der skjuler, om værktøjet fejler sikkert eller farligt. Tilsynsmyndigheder og sundhedssystemer, der evaluerer et AI-triageværktøj til implementering, kræver i stigende grad denne form for lagdelt nøjagtighedsrapportering som en betingelse for klinisk godkendelse, især for værktøjer, der opererer med en vis grad af autonomi fra en kliniker.

## Hvordan det beregnes

```
Nøjagtighed af triage-henvisning = korrekt henviste patientkontakter
                                   / samlet antal patientkontakter
                                   vurderet mod referencestandard
                                   × 100

Rapporter altid fejlretning separat:
  Undertriage-rate = patientkontakter henvist til et lavere
                     plejeniveau end referencestandarden angiver /
                     samlet antal patientkontakter × 100
  Overtriage-rate  = patientkontakter henvist til et højere
                     plejeniveau end referencestandarden angiver /
                     samlet antal patientkontakter × 100
```

## Et gennemarbejdet eksempel

En AI-drevet symptomtjekker vurderer 2.000 patientkontakter i en valideringsundersøgelse mod en klinikerbedømt referencestandard. Af disse henviser værktøjet 1.800 korrekt (90% samlet nøjagtighed), men segmentering af de 200 fejl afslører, at 150 var undertriage (patienten burde være henvist til et højere plejeniveau, men blev sendt til et lavere) og kun 50 var overtriage. De 150 undertriage-tilfælde — 7,5% af den samlede population — repræsenterer den klinisk mere bekymrende fejltilstand, og en klinisk gennemgang afslører, at de uforholdsmæssigt rammer patienter med atypiske symptompræsentationer, en vigtig sikkerhedsbegrænsning, som det samlede nøjagtighedstal på 90% fuldstændig skjulte.

## Datakilder og forbehold

At bygge en pålidelig referencestandard kræver typisk klinikerbedømt gennemgang af en repræsentativ prøve af faktiske patientkontakter, enten prospektivt eller retrospektivt, og kvaliteten af denne referencestandard er den afgørende faktor for, hvor meningsfuld nøjagtighedsmetrikken overhovedet er. Et triageværktøj valideret udelukkende på et syntetisk eller kurateret testsæt vil ofte vise en højere nøjagtighed, end det opnår på reelle, tvetydige patientpræsentationer, så valideringsmetodologien skal rapporteres sammen med nøjagtighedstallet for at kunne vurderes korrekt.

## Faldgruber

- **Validering kun på retrospektive, nemme data**: et værktøjs reelle henvisningsnøjagtighed på levende, tvetydige patientinput adskiller sig ofte væsentligt fra nøjagtigheden på et kurateret valideringssæt opbygget under udviklingen.
- **Rapportering af et enkelt samlet nøjagtighedstal uden fejlretning**: dette skjuler, om værktøjet fejler mod sikkerhed (overtriage) eller mod fare (undertriage), hvilket er den vigtigste sondring for patientsikkerhed.
- **Brug af en referencestandard af lav kvalitet**: hvis referencestandarden selv er upålidelig eller inkonsistent, måler nøjagtighedsmetrikken i bedste fald enighed med en fejlbehæftet standard, ikke sand klinisk korrekthed.
- **Ignorering af undergruppeydeevne**: et værktøj kan opnå god samlet nøjagtighed, mens det systematisk fejler for bestemte patientpopulationer eller symptompræsentationer; segmentering efter demografi og præsentationstype afslører skjulte sikkerhedshuller.

## Kilder

- Agency for Healthcare Research and Quality (AHRQ), forskning i diagnostisk nøjagtighed og triagesikkerhed
- FDA's rammer for software som medicinsk udstyr (SaMD), retningslinjer for klinisk validering af AI-triageværktøjer
- Collegialt bedømt litteratur om AI-triagenøjagtighed, f.eks. undersøgelser offentliggjort i npj Digital Medicine og BMJ Health & Care Informatics

Se også: [behandlingstid for digital henvisning](../digital-referral-turnaround-time/), procesmetrikken, der ligger mest direkte nedstrøms for en triagebeslutning.
