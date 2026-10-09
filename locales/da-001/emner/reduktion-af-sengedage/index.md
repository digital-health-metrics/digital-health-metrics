# Reduktion af Sengedage

Reduktion af sengedage måler det samlede antal sengedage på hospitalet, der er undgået ved at flytte et defineret plejeforløb, oftest rekonvalescens efter operation eller behandling af en akut tilstand, fra en traditionel indlæggelse til et digitalt understøttet alternativ som en virtuel afdeling eller et program for hospital i hjemmet. Det er den primære kapacitetsmetrik for initiativer med virtuelle afdelinger og hospital i hjemmet, fordi den omsætter en ændring af den kliniske plejemodel direkte til den valuta (sengekapacitet), som hospitalsdriften og systemplanlæggerne rent faktisk styrer efter.

## Hvorfor dette er vigtigt

Sengekapacitet til indlagte patienter er en af de mest begrænsede og dyreste ressourcer i ethvert hospitalsvæsen, og det centrale værdiløfte i et program med en virtuel afdeling eller hospital i hjemmet er, at det kan levere et defineret niveau af klinisk pleje sikkert uden at optage en fysisk seng og dermed frigøre kapaciteten til patienter, der ikke kan håndteres på nogen anden måde. Reduktion af sengedage omsætter en ofte abstrakt påstand ("dette program forbedrer plejen") til et konkret driftstal, som hospitalets kapacitetsplanlæggere, økonomiteams og bestillere kan handle direkte på: det kan bruges til at modellere, om en investering i et overvågningsprogram betaler sig selv hjem i undgåede sengeomkostninger, og i så fald hvor meget. Fordi reduktion af sengedage kun har værdi, hvis patientsikkerheden opretholdes, bør den altid rapporteres sammen med, og aldrig i stedet for, en sikkerhedsmetrik (såsom genindlæggelsesrate eller andelen, der eskaleres til indlagt pleje) for den samme population.

## Hvordan det beregnes

```
Reduktion af sengedage = forventede sengedage under almindelig indlagt
                          pleje (baseret på historiske data om indlæggelses-
                          varighed for en matchet patientkohorte) − faktiske
                          sengedage brugt af patienter på det virtuelle/
                          digitale forløb

Rapportér pr. klinisk forløb (fx rekonvalescens efter operation,
akut forværring af lungesygdom), da den forventede indlæggelsesvarighed
varierer enormt efter tilstand, og et blandet tal på tværs af indbyrdes
urelaterede forløb ikke er meningsfuldt.
```

## Gennemarbejdet eksempel

Et hospitals historiske data viser, at patienter, der kommer sig efter en bestemt planlagt operation, har en gennemsnitlig indlæggelsesvarighed på 4 dage. Et program med en virtuel afdeling indskriver 150 patienter, der kommer sig efter samme operation, og udskriver dem efter gennemsnitligt 1,5 indlæggelsesdage, mens resten af rekonvalescensen overvåges på afstand. Reduktionen af sengedage er (4 − 1,5) × 150 = 375 sengedage i måleperioden. Dette tal bør rapporteres sammen med den virtuelle afdelingskohortes andel, der eskaleres til indlagt pleje inden for 30 dage, og genindlæggelsesraten for de samme 150 patienter, da en besparelse i sengedage, der kommer på bekostning af en væsentligt højere eskalerings- eller genindlæggelsesrate, ikke er den kliniske gevinst, som hovedtallet ellers ville antyde.

## Datakilder og forbehold

De forventede sengedage kræver en troværdig historisk baseline, helst fra en matchet patientkohorte behandlet med almindelig indlagt pleje og med lignende kliniske karakteristika (alder, komorbiditet, operationstype, sværhedsgrad) som populationen på den virtuelle afdeling, da en sammenligning med et umatchet historisk gennemsnit risikerer at over- eller undervurdere den reelle reduktion, hvis den digitalt styrede kohorte systematisk er sundere eller sygere end den historiske sammenligningsgruppe. De faktiske sengedage på det digitale forløb stammer fra hospitalets eget system for indlæggelse, udskrivning og overflytning (ADT). Enhver eskalering tilbage til indlagt pleje i den overvågede rekonvalescensperiode bør tælles ærligt imod programmet (som brugte sengedage, ikke udeladt), da udeladelse af eskaleringer fra beregningen ville blæse den tilsyneladende reduktion kunstigt op.

## Faldgruber

- **At rapportere reduktion af sengedage uden en matchet sikkerhedssammenligning**: en virtuel afdeling, der sparer sengedage, men har en væsentligt dårligere eskalerings- eller genindlæggelsesrate end almindelig pleje, har ikke vist en egentlig forbedring; rapportér altid begge dele sammen.
- **At bruge en umatchet eller forældet historisk baseline**: en sammenligning med en historisk kohorte med en anden case mix, komorbiditetsbyrde eller klinisk praksis fra en anden tid kan overvurdere eller undervurdere den reelle besparelse i sengedage betydeligt.
- **At udelade eskaleringer tilbage til indlagt pleje fra beregningen**: en patient, der overvåges virtuelt, men derefter eskaleres til en seng midt i rekonvalescensen, bør have de sengedage talt med imod programmet og ikke i det stille droppet fra analysen.
- **At blande forløb med meget forskellig forventet indlæggelsesvarighed**: at samle reduktionen af sengedage på tværs af klinisk urelaterede forløb (for eksempel rekonvalescens efter operation og behandling af kronisk lungesygdom) i ét tal skjuler, hvilket konkret forløb der egentlig driver besparelsen.

## Kilder

- NHS England, vejledning om programmer med virtuelle afdelinger og hospital i hjemmet samt standarder for rapportering af effekten på sengedage
- Peer reviewet litteratur om modeller for hospital i hjemmet og virtuelle afdelinger, for eksempel undersøgelser offentliggjort i JAMA Internal Medicine og npj Digital Medicine
- Institute for Healthcare Improvement (IHI), vejledning om kapacitetsstyring og alternative plejemodeller

Se også: [hospitalsgenindlæggelsesrate](../hospitalsgenindlæggelsesrate/), den sikkerhedsmetrik, der altid bør rapporteres sammen med enhver påstand om reduktion af sengedage for den samme patientpopulation.
