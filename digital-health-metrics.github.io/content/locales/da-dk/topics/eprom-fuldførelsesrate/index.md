# ePROM-Fuldførelsesrate

ePROM-fuldførelsesraten måler andelen af planlagte elektroniske patientrapporterede udfaldsmål (ePROM'er), altså standardiserede, validerede spørgeskemaer, der fanger patientens egen beskrivelse af sine symptomer, sin funktion eller sin livskvalitet og leveres digitalt i stedet for på papir, der rent faktisk bliver gennemført. Det er lige så meget en datakvalitetsmetrik som en engagementsmetrik: et PROM-programs kliniske og forskningsmæssige værdi afhænger helt af en fuldførelsesrate, der er høj nok til, at de indsamlede besvarelser er repræsentative for hele den indskrevne population og ikke kun for den mest engagerede eller mindst symptomtunge del.

## Hvorfor dette er vigtigt

Patientrapporterede udfald er det direkte, af patienten bekræftede supplement til data, som klinikere registrerer, eller som enheder måler. De fanger sundhedsdimensioner som smerte, funktion og livskvalitet, som en gennemgang af journalen eller en biometrisk måling ikke kan fange. Digitalisering af PROM-indsamlingen findes netop for at gøre disse data billigere og lettere at indsamle i stor skala, end papirbaseret administration nogensinde kunne. Men et PROM-program med lav fuldførelsesrate risikerer en bestemt og alvorlig skævhed: patienter, der har det dårligere, har ofte mindre tilbøjelighed til at gennemføre et langt spørgeskema, så en faldende fuldførelsesrate kan i sig selv være et tidligt varselstegn på en forværret sundhedstilstand i populationen, og en lav samlet fuldførelsesrate kan få de indsamlede besvarelser til at se bedre ud end populationens reelle oplevelse, blot fordi de mest symptomtunge patienter er underrepræsenteret i det, der bliver gennemført. Det er derfor, fuldførelsesraten altid bør rapporteres sammen med selve PROM-scorerne og ikke behandles som en sekundær driftsdetalje.

## Hvordan det beregnes

```
ePROM-fuldførelsesrate = fuldt gennemførte ePROM'er / sendte eller
                         planlagte ePROM'er × 100

Rapportér separat for:
  Indledende fuldførelsesrate  (det første spørgeskema i en
                                overvågningsserie)
  Longitudinel fuldførelsesrate (efterfølgende spørgeskemaer i en
                                løbende overvågningsserie, som typisk
                                falder over tid og bør følges som en
                                tendens og ikke som ét enkelt tal)

Et "delvist gennemført" spørgeskema bør defineres og rapporteres
separat fra både "fuldt gennemført" og "ikke påbegyndt".
```

## Gennemarbejdet eksempel

En onkologisk klinik sender et valideret ePROM om symptombyrde til 400 patienter før hvert månedlige opfølgningsbesøg. I den første måned gennemfører 340 patienter spørgeskemaet fuldt ud (fuldførelsesrate 85 %), 30 gennemfører det delvist, og 30 påbegynder det ikke. I den sjette måned af samme overvågningsserie er antallet af fuldstændige besvarelser faldet til 260 ud af den samme kohorte på 400 patienter (65 %), et betydeligt longitudinelt fald, som ville være gået helt upåagtet hen, hvis kun den første måneds tal på 85 % var blevet rapporteret som en statisk samlet metrik. En undersøgelse af, hvilke patienter der falder fra (efter symptomernes sværhedsgrad, sygdomsstadium eller alder), kan afsløre, om faldet afspejler undersøgelsestræthed, forværrede symptomer, der gør spørgeskemaet sværere at gennemføre, eller en teknisk adgangsbarriere.

## Datakilder og forbehold

Fuldførelsesdata stammer fra ePROM-platformens egne leverings- og svarlogge, som kan skelne mellem tilstandene "ikke påbegyndt", "delvist gennemført" og "fuldt gennemført". Det er et skel, der altid bør bevares og rapporteres og ikke slås sammen til et binært tal for gennemført/ikke gennemført, da delvis fuldførelse ofte peger på et bestemt sted i spørgeskemaet, hvor patienter har svært ved det eller mister interessen. Fuldførelsesraten bør fortolkes sammen med, hvordan spørgeskemaet leveres (et link i en sms, en appnotifikation eller en leveringsmetode, der kræver login til en portal), da friktion i leveringen i sig selv påvirker fuldførelsen uafhængigt af spørgeskemaets indhold eller patientens underliggende tilstand. Der bør altid bruges et valideret instrument (og ikke et ad hoc-sæt spørgsmål) til selve PROM'et, da fuldførelsesraten for et ikke-valideret instrument intet pålideligt siger om de resulterende datas kliniske anvendelighed, selv om fuldførelsen er høj.

## Faldgruber

- **At behandle en faldende fuldførelsesrate som udelukkende et leveringsproblem**: et longitudinelt fald i fuldførelsen kan afspejle, at patienternes symptomer reelt forværres (patienter, der er for syge til at besvare undersøgelsen), og ikke undersøgelsestræthed eller et teknisk problem, og den skelnen er afgørende for den kliniske fortolkning.
- **At slå delvis og fuld fuldførelse sammen i én kategori**: et delvist gennemført spørgeskema har en væsentligt anden datakvalitet end et fuldt gennemført; rapportér dem separat, og undersøg, hvor i spørgeskemaets forløb patienterne har tendens til at opgive det.
- **At rapportere fuldførelsesraten uden at rapportere risikoen for svarskævhed**: en moderat fuldførelsesrate bør give anledning til at undersøge, om de, der svarer, adskiller sig systematisk (i symptomernes sværhedsgrad, alder, digitale kompetencer) fra dem, der ikke svarer, da PROM-scorer, der kun er beregnet ud fra dem, der har svaret, kan give et skævt billede af hele populationen.
- **At bruge et ikke-valideret eller hjemmelavet spørgeskema**: fuldførelsesraten er meningsløs som signal om datakvalitet, hvis det instrument, der gennemføres, ikke selv er klinisk valideret til den tilstand og population, der måles.

## Kilder

- International Consortium for Health Outcomes Measurement (ICHOM), udvikling af standardsæt og vejledning i implementering af PROM'er
- U.S. Food and Drug Administration (FDA), vejledning om patientrapporterede udfaldsmål i kliniske forsøg og regulatoriske indsendelser
- Peer reviewet litteratur om implementering og fuldførelsesrater for elektroniske PROM'er, for eksempel undersøgelser offentliggjort i Quality of Life Research og Journal of Medical Internet Research (JMIR)

Se også: [patientens nettoanbefalingsscore](../patientens-nettoanbefalingsscore/), en beslægtet, men særskilt patientrapporteret metrik, der måler tilfredshed og ikke et klinisk udfald.
