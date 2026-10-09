# Tilsidesættelsesrate for Kliniske Alarmer

Tilsidesættelsesrate for kliniske alarmer måler andelen af klinisk beslutningsstøttealarmer (CDS), såsom advarsler om lægemiddelinteraktioner, allergialarmer og dosisinterval-kontroller genereret af et computerstøttet ordinationssystem (CPOE), som en kliniker afviser eller tilsidesætter i stedet for at handle på. Det er det standardmæssige kvantitative signal, der bruges til at opdage og håndtere "alarmtræthed": den velunderbyggede tendens, hvor klinikere bliver desensibiliseret over for alarmer, når mængden af lavværdi-advarsler bliver overvældende.

## Hvorfor dette er vigtigt

Offentliggjorte tilsidesættelsesrater for lægemiddelinteraktionsalarmer varierer typisk fra omkring halvdelen til over halvfems procent, og en høj rate er ikke automatisk en sikkerhedssvigt: mange forstyrrende alarmer udløses for interaktioner, der er klinisk ubetydelige i konteksten, eller gentager en alarm, klinikeren allerede har handlet på tidligere i samme ordinationssæt, så et velkalibreret system udløser bevidst færre, mere værdifulde alarmer i stedet for at forsøge at drive tilsidesættelsesraten til nul. Det, der virkelig betyder noget for sikkerheden, er tendensen over tid, fordelingen på tværs af alvorlighedsniveauer, og om klinikere dokumenterer en grund, når de tilsidesætter en alarm med høj alvorlighed; en stigende tilsidesættelsesrate for højalvorlige, velunderbyggede interaktioner er en reel styringsbekymring, selv når gennemsnittet på tværs af alle alarmer ser stabilt ud.

## Hvordan det beregnes

```
Tilsidesættelsesrate = tilsidesatte alarmer / samlede udløste alarmer × 100

Segmenter efter:
  - alvorlighedsniveau (f.eks. kontraindiceret, alvorlig, moderat)
  - alarmtype (lægemiddelinteraktion, allergi, dublet-terapi, dosisinterval)
  - om en tilsidesættelsesgrund blev dokumenteret

En "dokumenteret tilsidesættelsesrate" sporer andelen af tilsidesættelser,
der bærer en registreret begrundelse, hvilket er et styringsmål i sig selv.
```

## Gennemarbejdet eksempel

Et hospitals CPOE-system udløser 10.000 lægemiddelinteraktionsalarmer på en måned, hvoraf 8.700 tilsidesættes, hvilket giver en samlet tilsidesættelsesrate på 87%. Segmentering efter alvorlighed viser, at af 500 "kontraindicerede" alarmer bliver 60 tilsidesat (12%), mens af 6.000 "moderate" alarmer bliver 5.700 tilsidesat (95%). Tallet for det moderate niveau er stort set i overensstemmelse med offentliggjorte benchmarks og er ikke i sig selv grund til bekymring; tallet for det kontraindicerede niveau kræver individuel sagsgennemgang, og det faktum, at kun 340 af de 500 tilsidesættelser på det niveau bærer en dokumenteret grund, er det mere handlingsorienterede styringsfund.

## Datakilder og forbehold

Den elektroniske patientjournals revisionslog, eller CDS-leverandørens eget alarmmodul, registrerer hver alarm-udløst- og alarm-respons-hændelse, herunder om klinikeren indtastede fritekst eller struktureret begrundelse. At sammenligne tilsidesættelsesrater mellem organisationer, eller endda mellem afdelinger i samme organisation, kræver at kontrollere, at de underliggende alarmregelsæt og alvorlighedsstratificering er de samme; et hospital med et aggressivt kalibreret regelsæt vil vise en lavere tilsidesættelsesrate af grunde, der ikke har noget med klinikeradfærd at gøre.

## Faldgruber

- **At behandle den rå tilsidesættelsesrate som en enkelt sikkerhedsscore**: den sammenblander velbegrundede tilsidesættelser af lavværdi-alarmer med usikre tilsidesættelser af reelt farlige interaktioner; segmenter altid efter alvorlighed.
- **Ingen indfangning af tilsidesættelsesgrund**: uden en dokumenteret grund er det umuligt at skelne mellem "denne alarm var forkert" og "denne alarm var korrekt, og klinikeren traf en usikker beslutning", hvilket er den egentlige forskel, der betyder noget for patientsikkerheden.
- **Inflation af alarmregler over tid**: at tilføje flere alarmer "for en sikkerheds skyld" uden at beskære lavværdi-alarmer er den direkte årsag til stigende tilsidesættelsesrater og alarmtræthed; alarmstyring bør omfatte regelmæssig gennemgang og udfasning af dårligt præsterende regler, ikke kun overvågning.
- **At sammenligne rater på tværs af systemer med forskellig afbrydelsesdesign**: en forstyrrende, hård-stop-alarm producerer anden tilsidesættelsesadfærd end en passiv, ikke-blokerende alarm, så de to er ikke direkte sammenlignelige metrikker.

## Kilder

- Fagfællebedømt litteratur om alarmtræthed i klinisk beslutningsstøtte, bredt offentliggjort i tidsskrifter, herunder JAMIA og npj Digital Medicine
- ONC / HealthIT.gov, vejledning om sundheds-IT-sikkerhed vedrørende klinisk beslutningsstøtte
- Institute for Safe Medication Practices (ISMP), vejledning om design og styring af CDS-alarmer
