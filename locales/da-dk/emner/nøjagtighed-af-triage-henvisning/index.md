# Nøjagtighed af Triage-henvisning

Nøjagtigheden af triage-henvisning er andelen af patientforløb, hvor et automatiseret eller AI-understøttet triageværktøj henviser patienten korrekt til det rette niveau og sted for pleje (for eksempel egenomsorg, primær sundhedspleje, akut pleje eller skadestue), vurderet i forhold til en klinisk valideret referencestandard. Det er sikkerheds- og effektivitetsmetrikken for enhver digital hoveddør, symptomtjekker eller AI-triagesystem: værktøjets hele værdiløfte hviler på at henvise patienter korrekt, hurtigt og konsekvent.

## Hvorfor dette er vigtigt

Et upræcist triageværktøj gør skade i begge retninger: undertriage (at henvise en patient til et lavere plejeniveau, end vedkommende har brug for) kan forsinke behandlingen af en ægte nødsituation, mens overtriage (at henvise en patient til et højere plejeniveau, end vedkommende har brug for) spilder knap kapacitet på skadestuer og akutte tilbud og øger omkostninger og patientens angst uden nogen klinisk gevinst. Fordi de to fejltyper har så forskellige konsekvenser, bør nøjagtigheden af triage-henvisning altid rapporteres sammen med fejlenes retning og ikke som ét samlet nøjagtighedstal, der skjuler, om værktøjet fejler på den sikre eller den farlige side. Tilsynsmyndigheder og sundhedssystemer, der vurderer et AI-triageværktøj til udrulning, kræver i stigende grad den slags opdelt nøjagtighedsrapportering som betingelse for klinisk godkendelse, især for værktøjer, der arbejder med en vis grad af uafhængighed fra en kliniker.

## Hvordan det beregnes

```
Nøjagtighed af triage-henvisning = korrekt henviste forløb / samlede
                                   triagerede forløb × 100

Rapportér undertriage og overtriage hver for sig:
  Undertriagerate = forløb henvist til et lavere akutniveau end
                    referencestandarden / samlede triagerede forløb × 100
  Overtriagerate  = forløb henvist til et højere akutniveau end
                    referencestandarden / samlede triagerede forløb × 100

Referencestandarden er typisk en retrospektiv klinikergennemgang af
den samme sag, hvor klinikeren om muligt ikke kender værktøjets output.
```

## Gennemarbejdet eksempel

Et AI-symptomtjekværktøj triagerer 5.000 patientforløb på en måned. En blindet klinikergennemgang af en tilfældig stikprøve på 500 af disse forløb finder, at 430 blev henvist til det korrekte akutniveau (nøjagtighed 86 %), 45 blev undertriageret (9 %), og 25 blev overtriageret (5 %). Undertriageraten på 9 % er det tal, der mest presserende skal undersøges, da den repræsenterer forløb, hvor en patient muligvis blev henvist til mindre akut pleje, end vedkommende faktisk havde brug for; overtriageraten på 5 % er et problem for kapacitet og omkostninger, men ikke et direkte sikkerhedsproblem.

## Datakilder og forbehold

Den referencestandard, som triagenøjagtigheden måles mod, har enorm betydning: en gennemgang foretaget af én enkelt kliniker bringer denne klinikers egen variation i skøn med ind, så et troværdigt nøjagtighedstal kræver normalt enten flere uafhængige bedømmere med dokumenteret enighed mellem bedømmerne eller en sammenligning med et efterfølgende, bekræftet klinisk udfald (hvilken pleje patienten faktisk havde brug for, fastslået bagefter). Stikprøven har også betydning: hvis man kun gennemgår en bekvemmelighedsstikprøve af forløb eller kun dem, der er markeret som usædvanlige, får man ikke et tal, der kan generaliseres til værktøjets samlede præstation. Nøjagtighedstal bør rapporteres separat for den præsenterede symptom- eller klagekategori, hvor det underliggende antal sager tillader det, da triageværktøjer sjældent præsterer ens på tværs af alle tilstande.

## Faldgruber

- **At rapportere ét blandet nøjagtighedstal**: at slå undertriage og overtriage sammen til ét tal skjuler, om værktøjets fejl hælder mod den farligste fejltype; rapportér dem altid hver for sig.
- **At bruge én enkelt bedømmer, der kender værktøjets output, som referencestandard**: det kan i det skjulte skubbe nøjagtighedstallet mod det, bedømmeren selv ville have gjort, i stedet for en uafhængig klinisk standard.
- **Kun at validere på retrospektive, bekvemme data**: et værktøjs nøjagtighed i den virkelige verden med levende, tvetydigt patientinput afviger ofte væsentligt fra dets nøjagtighed på et kurateret valideringssæt, der blev sammensat under udviklingen.
- **At ignorere præstationsdrift efter udrulning**: et AI-triagemodels nøjagtighed kan forringes over tid, efterhånden som patientpopulationer, præsenterede symptomer eller tilgængelighed af plejeforløb ændrer sig; nøjagtigheden bør måles igen løbende og ikke valideres én gang og antages at være stabil.

## Kilder

- ONC / HealthIT.gov, vejledning om sikkerhed og kvalitetssikring af klinisk beslutningsstøtte og AI-baserede værktøjer
- Peer reviewet litteratur om nøjagtigheden af symptomtjekkere og AI-triageværktøjer, for eksempel undersøgelser offentliggjort i JAMIA, npj Digital Medicine og BMJ Health & Care Informatics
- NHS England, vejledning om klinisk sikkerhed ved digitale triage- og fjernkonsultationsværktøjer (standarder for klinisk risikostyring DCB0129/DCB0160)

Se også: [behandlingstid for digital henvisning](../behandlingstid-for-digital-henvisning/), den procesmetrik, der kommer allernærmest efter en triagebeslutning.
