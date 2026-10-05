# System Usability Scale-score

System Usability Scale (SUS) er et standardiseret 10-spørgsmåls spørgeskema, der kvantificerer, hvor brugbart et stykke software rent faktisk er, med svar givet på en 5-punkts enighedsskala, der kombineres til en enkelt score fra 0 til 100. I modsætning til Net Promoter Score, som måler generel tilfredshed og anbefalingssandsynlighed, er SUS specifikt designet til at måle brugbarhed — hvor let og effektivt en bruger rent faktisk kan udføre opgaver med et stykke software.

## Hvorfor det betyder noget

Brugbarhedsproblemer er en af de mest almindelige og rettelige årsager til, at digitale sundhedsprodukter mislykkes med at opnå den tilsigtede kliniske effekt: en teknisk fejlfri app, der er forvirrende at navigere, vil ikke opnå den brugsadfærd, dens kliniske model antager, uanset hvor god den underliggende sundhedsintervention er. SUS giver et valideret, standardiseret, let administreret værktøj til at kvantificere brugbarhed, hvilket gør det muligt for produktteams at spore brugbarhedsforbedringer over tid og benchmarke mod bredt publicerede industristandarder snarere end at stole på subjektive interne vurderinger. Fordi SUS er blevet brugt på tværs af tusindvis af softwareprodukter over flere årtier, har det en af de rigeste tilgængelige benchmark-datasæt af enhver brugbarhedsmetrik, hvilket gør scoren meningsfuld i en bredere kontekst snarere end kun sammenlignelig med sig selv over tid.

## Hvordan det beregnes

```
SUS-score beregnes fra 10 standardiserede spørgsmål, der skiftevis
er positivt og negativt formulerede, hver besvaret på en 5-punkts
enighedsskala (stærkt uenig til stærkt enig):

For ulige nummererede spørgsmål (positivt formulerede):
  score-bidrag = (brugersvar − 1)
For lige nummererede spørgsmål (negativt formulerede):
  score-bidrag = (5 − brugersvar)

Summen af alle 10 score-bidrag ganges med 2,5 for at producere en
score fra 0 til 100.

En SUS-score over 68 anses bredt for at være over gennemsnittet
baseret på det akkumulerede industribenchmark-datasæt, selvom det
passende mål kan variere efter produkttype.
```

## Et gennemarbejdet eksempel

Et sundhedssystem tester en ny patientportal-grænseflade med 50 patienter, der hver udfylder SUS-spørgeskemaet efter at have udført en standardiseret sæt opgaver (booking af en aftale, visning af laboratorieresultater, afsendelse af en besked til deres kliniker). Den gennemsnitlige SUS-score på tværs af de 50 patienter er 72, som ligger over det bredt citerede gennemsnit på 68, hvilket giver teamet tillid til, at grænsefladen er rimeligt brugbar. Men opdeling af scoren efter opgavetype afslører, at patienter, der kæmpede specifikt med beskedfunktionen, gav betydeligt lavere individuelle scorer, hvilket peger teamet mod en specifik del af grænsefladen, der skal forbedres, snarere end blot at rapportere det samlede gennemsnitstal.

## Datakilder og forbehold

SUS-data indsamles via det standardiserede 10-spørgsmåls spørgeskema administreret straks efter, at en bruger har udført en repræsentativ opgave eller sæt opgaver med softwaren, og scoringsmetodologien er fast og veletableret, hvilket gør den sammenlignelig på tværs af undersøgelser og organisationer, forudsat at det samme standardiserede spørgeskema anvendes. Fordi SUS giver en enkelt samlet score, kan den skjule, hvilke specifikke opgaver eller grænsefladeelementer der driver en lav score; en kvalitativ opfølgning eller opgavespecifik analyse er ofte nødvendig for at gøre resultatet handlingsorienteret.

## Faldgruber

- **Ændring af spørgeskemaets ordlyd**: SUS's validitet og sammenlignelighed med branchebenchmarks afhænger af brugen af den standardiserede spørgeformulering; tilpasning af spørgsmålene underminerer sammenlignelighed.
- **Behandling af en enkelt samlet score som fuldt diagnostisk**: en SUS-score fortæller dig, om der er et brugbarhedsproblem, men ikke hvor; opgavespecifik eller kvalitativ opfølgning er nødvendig for at identificere den specifikke årsag.
- **Sammenligning af SUS-score på tværs af meget forskellige brugeropgaver**: en score opnået fra en kompleks multi-trins opgave er ikke direkte sammenlignelig med en opnået fra en enkel enkelt-trins opgave.
- **Ignorering af stikprøvestørrelse og -sammensætning**: en SUS-score baseret på en lille eller ikke-repræsentativ brugerstikprøve kan ikke generaliseres pålideligt til hele brugerpopulationen.

## Kilder

- Brooke, J., "SUS: A quick and dirty usability scale", den oprindelige udvikling af metoden
- Sauro, J., "A Practical Guide to the System Usability Scale", akkumulerede industribenchmark-data
- Collegialt bedømt litteratur om SUS-anvendelse i sundhedsvæsenets softwareevaluering, f.eks. undersøgelser offentliggjort i Journal of Medical Internet Research (JMIR) og JMIR Human Factors

Se også: [patient Net Promoter Score](../patient-net-promoter-score/), en relateret men adskilt patientrapporteret metrik, der måler tilfredshed og loyalitet snarere end specifik softwarebrugbarhed.
