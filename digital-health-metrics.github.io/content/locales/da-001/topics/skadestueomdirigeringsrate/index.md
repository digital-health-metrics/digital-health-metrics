# Skadestueomdirigeringsrate

Skadestueomdirigeringsrate måler andelen af patientkontakter håndteret af et digitalt triage- eller virtuelt plejeværktøj, som uden den intervention plausibelt ville have resulteret i et skadestuebesøg, men i stedet blev sikkert håndteret via et lavere-hastende forløb — selvplejeråd, en almenpraksisaftale eller et planlagt akut-men-ikke-livstruende plejebesøg. Det er en specifik, højtvurderet delmængde af nøjagtighed af triage-henvisning (se det emne) fuldt fokuseret på undgået skadestuebrug, det resultat, der er mest direkte knyttet til både sundhedsomkostninger og lettelse af skadestuekapacitet.

## Hvorfor det betyder noget

Skadestuer er blandt de dyreste plejesteder pr. kontakt og bruges ofte til problemer, der sikkert kunne håndteres andre steder, så et digitalt triageværktøjs evne til sikkert at omdirigere passende tilfælde væk fra skadestuen er en af de mest kommercielt og operationelt værdifulde kapaciteter — og en af de letteste at kommunikere til en betaler eller et sundhedssystem, der evaluerer værktøjets afkast på investeringen. Men omdirigering har kun værdi, hvis det er sikkert: et værktøj, der aggressivt omdirigerer patienter væk fra skadestuen på bekostning af at overse reelle nødsituationer, har optimeret den fuldstændig forkerte side af afvejningen, hvilket er grunden til, at skadestueomdirigeringsrate altid skal rapporteres sammen med en sikkerhedsmetrik, der sporer overset eller forsinket nødpræsentation blandt omdirigerede patienter, ikke rapporteret isoleret som en ren effektivitetsgevinst.

## Hvordan det beregnes

```
Skadestueomdirigeringsrate = patientkontakter sikkert omdirigeret
                             væk fra skadestuen til et passende
                             lavere-hastende forløb / samlet antal
                             patientkontakter vurderet som
                             potentielt skadestuebundne × 100

"Sikkert omdirigeret" kræver bekræftelse, via opfølgning eller
sammenkædede journaldata, af at patientens tilstand faktisk ikke
krævede akut pleje inden for et defineret opfølgningsvindue (f.eks.
72 timer) — en omdirigeringsbeslutning valideres ikke som sikker
blot fordi patienten ikke straks derefter tog på skadestuen.

Rapporter altid sammen med:
  Overset-nødsituation-rate = omdirigerede patienter, der faktisk
                              krævede akut pleje inden for
                              opfølgningsvinduet / samlet antal
                              omdirigerede patienter × 100
```

## Et gennemarbejdet eksempel

En digital triagetjeneste vurderer 3.000 patientkontakter på en måned, som det kliniske algoritme vurderer som potentielt skadestuebundne uden intervention. Af disse omdirigeres 1.800 til et lavere-hastende forløb (en omdirigeringsrate på 60%). Opfølgning af den omdirigerede kohorte ved 72 timer ved hjælp af sammenkædede journaldata finder, at 45 ud af de 1.800 omdirigerede patienter faktisk tog på en skadestue inden for det vindue (en overset-nødsituation-rate på 45/1.800 × 100 = 2,5%). At rapportere omdirigeringstallet på 60% uden overset-nødsituation-raten på 2,5% ville kun præsentere halvdelen af den sikkerheds-effektivitets-afvejning, der faktisk bestemmer, om værktøjets omdirigeringsadfærd er godt kalibreret.

## Datakilder og forbehold

At bekræfte, at en omdirigeret patient derefter ikke havde brug for akut pleje, afhænger af sammenkædede data — enten det samme sundhedssystems egne skadestuejournaler, en regional sundhedsinformationsudveksling eller et struktureret opfølgningsopkald eller spørgeskema med patienten — og et omdirigeringsprogram, der opererer uden nogen af disse datakilder, kan faktisk ikke validere sin egen sikkerhed, kun antage den baseret på fravær af en klage. Den passende omdirigeringsrate og acceptable overset-nødsituation-rate er kliniske politikbeslutninger, ikke rent statistiske, og bør fastsættes bevidst af klinisk ledelse snarere end at opstå som en bivirkning af, hvilken tærskel et triagealgoritme tilfældigvis bruger som standard.

## Faldgruber

- **Rapportering af omdirigeringsrate uden en tilknyttet overset-nødsituation-sikkerhedsmetrik**: en høj omdirigeringsrate opnået ved undertriage af reelle nødsituationer er ikke en succes; de to metrikker bør altid rapporteres sammen.
- **Antagelse af, at intet skadestuebesøg betyder, at omdirigeringen var sikker**: en patient kan præsentere sig på et andet, ikke-sammenkædet hospitalssystems skadestue eller opleve et reelt skadeligt resultat uden nogensinde at præsentere sig på en skadestue; valider sikkerhed via sammenkædede data eller struktureret opfølgning, ikke blot fravær af et skadestuebesøg i det samme system.
- **Fastsættelse af omdirigeringstærsklen udelukkende for at maksimere omdirigeringsraten**: et algoritme eller en politik afstemt til at maksimere omdirigering uden en tilsvarende sikkerhedsbegrænsning vil handle patientsikkerhed for et bedre udseende effektivitetstal.
- **Blanding af omdirigeringsrate på tværs af alle klagetyper**: passende omdirigeringsrater varierer enormt efter den præsenterede klage; et enkelt blandet tal kan ikke demonstrere, om værktøjet præsterer sikkert og effektivt for de specifikke klinisk vigtigste tilstande.

## Kilder

- Agency for Healthcare Research and Quality (AHRQ), forskning i skadestuebrug og passende plejestedsomdirigering
- NHS England, retningslinjer for NHS 111 og sikkerheds- og effektivitetsstandarder for digital akut-men-ikke-livstruende plejetriage
- Collegialt bedømt litteratur om digital triage- og virtuel plejeresultater for skadestueomdirigering, f.eks. undersøgelser offentliggjort i Annals of Emergency Medicine og npj Digital Medicine

Se også: [nøjagtighed af triage-henvisning](../nøjagtighed-af-triage-henvisning/), den bredere nøjagtighedsmetrik, som denne er en specifik, sikkerhedskritisk delmængde af.
