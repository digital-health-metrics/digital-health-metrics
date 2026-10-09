# Score på systemets brugervenlighedsskala

Scoren på systemets brugervenlighedsskala (System Usability Scale, SUS) er et standardiseret spørgeskema med 10 punkter, der bruges til at kvantificere, hvor brugervenligt et stykke software er, og som giver én enkelt score fra 0 til 100, der kan benchmarkes mod veletablerede branchenormer. I modsætning til Net Promoter Score, som måler villigheden til at anbefale, eller patientrapporterede udfaldsmål, som måler klinisk eller funktionel status, måler SUS én specifik ting: hvor let selve softwaren er at lære og bruge, for enten patienter eller klinisk personale.

## Hvorfor dette er vigtigt

Et digitalt sundhedsværktøj kan have stærk klinisk evidens og et overbevisende business case og alligevel svigte i praksis, fordi patienter eller klinikere finder grænsefladen forvirrende, langsom eller frustrerende at bruge. Og fordi SUS er et valideret, udbredt instrument med årtiers offentliggjorte benchmarkingdata på tværs af brancher, giver det et digitalt sundhedsteam mulighed for at sammenligne deres eget produkts brugervenlighed med en kendt fordeling i stedet for at støtte sig til uformelle indtryk eller anekdotiske klager. SUS er bevidst teknologiuafhængig og hurtig at administrere (typisk under fem minutter), hvilket gør den praktisk at gentage gennem designiterationer, i modsætning til en fuld brugervenlighedsundersøgelse eller et formelt klinisk forsøg. Fordi brugervenlighedssvigt, der vender mod klinikere, er en dokumenteret medvirkende faktor til udbrændthed (se lægeudbrændthedsraten), og brugervenlighedssvigt, der vender mod patienter, er en dokumenteret medvirkende faktor til frafald og dårlige udfald for digital kompetence (se den digitale kompetencerate), fungerer SUS som et tidligt og billigt advarselssignal om brugervenlighed, der kan fange et designproblem, før det viser sig i de mere vidtrækkende nedstrøms metrikker.

## Hvordan det beregnes

```
SUS-score = ((sum af scorerne for de ulige nummererede punkter − 5) +
             (25 − sum af scorerne for de lige nummererede punkter)) × 2,5

Resultatet er én score fra 0 til 100 (ikke en procentdel, trods
skalaen, da den ikke repræsenterer "procent rigtige" eller lignende).

Offentliggjort fortolkning af benchmark (Bangor et al.):
  Over 80  — fremragende brugervenlighed
  68       — gennemsnitlig, ud fra den brede branchenorm
  Under 51 — dårlig brugervenlighed, der kræver undersøgelse
```

## Gennemarbejdet eksempel

En telehealth-platform administrerer det standardiserede SUS-spørgeskema med 10 punkter til 150 patienter efter deres første videobesøg. Den beregnede gennemsnitlige SUS-score på tværs af alle respondenter er 74. Sammenlignet med det udbredt citerede branchegennemsnit på 68 tyder det på en brugervenlighed over gennemsnittet for denne specifikke patientpopulation og brug, selv om den stadig ligger væsentligt under tærsklen "fremragende" på 80, som ville antyde, at der kun er få brugervenlighedsbarrierer tilbage. En opdeling af de samme 150 svar efter alder viser en gennemsnitlig score på 81 for patienter under 50 og 62 for patienter på 65 år og derover, en forskel, der peger mod et specifikt brugervenlighedsproblem, man kan gøre noget ved, for ældre patienter og ikke mod et generelt problem med produktets brugervenlighed, og som et enkelt blandet gennemsnit ville have skjult.

## Datakilder og forbehold

SUS-data kommer direkte fra patienter eller klinikere, der udfylder det standardiserede spørgeskema med 10 punkter, og instrumentet skal administreres præcis som valideret (de samme 10 punkter, den samme 5-punkts enighedsskala, den samme scoringsformel), for at den resulterende score kan sammenlignes med offentliggjorte benchmarks; en ændret eller forkortet version af spørgeskemaet, uanset hvor velment, giver en score, der ikke pålideligt kan fortolkes mod den standardiserede benchmarkfordeling. SUS måler opfattet brugervenlighed, som hænger sammen med, men ikke er identisk med, objektiv succes med at gennemføre opgaver (se den digitale kompetencerate for et mål baseret på opgavegennemførelse); et produkt kan få en god SUS-score fra patienter, der ikke har prøvet de mere komplekse funktioner, så en kombination af SUS med objektive data om opgavegennemførelse giver et mere fuldstændigt billede end nogen af dem alene. Tidspunktet for besvarelsen har betydning: hvis SUS administreres umiddelbart efter en frustrerende enkelt hændelse (en mislykket forbindelse, et forvirrende trin) mod efter en smidig session, kan det flytte scorerne uafhængigt af produktets samlede brugervenlighed.

## Faldgruber

- **At ændre det standardiserede spørgeskemas punkter eller scoring**: selv små ændringer i formulering eller skala ugyldiggør sammenligningen med den veletablerede, offentliggjorte benchmarkfordeling; brug det standardiserede instrument med 10 punkter præcis som valideret.
- **Kun at rapportere gennemsnitsscoren uden opdeling**: brugervenligheden varierer ofte betydeligt efter brugerens alder, digitale kompetence eller rolle (patient mod kliniker); opdel rapporteringen for at finde specifikke brugervenlighedsgab, som et enkelt gennemsnit skjuler.
- **At behandle SUS som et mål for klinisk effektivitet**: SUS måler specifikt brugervenlighed og ikke klinisk udfald eller tilfredshed med plejen; et meget brugervenligt værktøj kan stadig undlade at forbedre kliniske udfald, og de to bør aldrig forveksles eller erstatte hinanden.
- **Kun at administrere undersøgelsen efter usædvanligt smidige eller usædvanligt frustrerende sessioner**: tidspunktet og konteksten for administrationen kan skævvride scoren; administrér den konsekvent på tværs af en repræsentativ stikprøve af virkelige sessioner og ikke kun bekvemme eller selektivt udvalgte.

## Kilder

- Brooke, J., "SUS: A Quick and Dirty Usability Scale", det oprindelige offentliggjorte instrument
- Bangor, Kortum og Miller, offentliggjort benchmarkingforskning i SUS, der fastlagde de udbredt citerede bånd for fortolkning af scoren
- Peer reviewet litteratur om brugen af SUS i digital sundhed og evaluering af telehealths brugervenlighed, for eksempel undersøgelser offentliggjort i JMIR Human Factors

Se også: [patientens nettoanbefalingsscore](../patientens-nettoanbefalingsscore/), en beslægtet, men særskilt patientrapporteret metrik, der måler tilfredshed og loyalitet og ikke specifikt softwarens brugervenlighed.
