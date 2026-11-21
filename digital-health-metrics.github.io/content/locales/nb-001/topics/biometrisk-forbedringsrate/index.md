# Biometrisk Forbedringsrate

Biometrisk forbedringsrate er andelen innrullerte pasienter i et digitalt helseprogram som oppnår en klinisk meningsfull forbedring i en overvåket biometrisk måling, oftest glykosylert hemoglobin (HbA1c) i diabetes- og kardiometabolske programmer, eller kroppsmasseindeks (KMI) i vektreduksjonsprogrammer, over en definert innrulleringsperiode. Det er utfallsmetrikken som til syvende og sist begrunner et digitalt helseprodukts kliniske påstander: engasjements- og adopsjonstall beskriver hvordan et produkt brukes, men biometrisk forbedring er nærmere et bevis på at det virker.

## Hvorfor dette er viktig

Digitale helseprogrammer selges og bestilles ofte på løftet om bedre helseutfall, og biometrisk forbedringsrate er den mest direkte og kvantifiserbare måten å teste dette løftet mot en spesifikk, klinisk anerkjent terskel i stedet for en vag påstand om "bedre helse". Betalere, arbeidsgivere og helsesystemer knytter i økende grad refusjon eller kontraktsfornyelse til dokumentert biometrisk endring, så et program som ikke kan rapportere denne raten på en troverdig måte, står svakere både kommersielt og klinisk. Metrikken er også en disiplinkontroll av programdesignet: det er langt enklere å rapportere engasjement (innlogginger, sendte meldinger) enn utfall, og et team bør være skeptisk til ethvert program som rapporterer det første entusiastisk, men er vagt om det siste.

## Hvordan det beregnes

```
Biometrisk forbedringsrate = pasienter som oppnår en definert klinisk
                             meningsfull forbedring / pasienter med gyldig
                             baseline- og oppfølgingsmåling × 100

Vanlige kliniske meningsfulle terskler:
  HbA1c   — en reduksjon på ≥ 0,5 prosentpoeng, eller å nå et definert
            mål (f.eks. < 7,0 %) fra en baseline utenfor målområdet
  KMI     — en reduksjon på ≥ 5 % av kroppsvekten ved baseline, opprettholdt
            frem til oppfølgingsmålingen

Rapporter separat for hver biometrisk måling som overvåkes; slå aldri
sammen forbedring i HbA1c og KMI til én samlet "forbedrings"-prosent.
```

## Gjennomarbeidet eksempel

Et kardiometabolsk digitalt helseprogram rullerer inn 800 pasienter med HbA1c utenfor målområdet ved baseline. Av disse har 620 både en gyldig baseline og en oppfølgingsmåling etter 6 måneder (180 er tapt til oppfølging og ekskluderes fra nevneren, ikke regnet som fiasko). Av de 620 med parede målinger oppnår 340 en reduksjon på minst 0,5 prosentpoeng. Den biometriske forbedringsraten er 340 / 620 × 100 = 55 %. Å rapportere dette mot alle 800 innrullerte (340 / 800 = 42,5 %) ville blande tap til oppfølging sammen med behandlingssvikt, og dermed undervurdere raten for pasienter som faktisk fullførte målingen.

## Datakilder og forbehold

Biometriske verdier ved baseline og oppfølging kommer vanligvis fra en tilkoblet enhet (et Bluetooth-glukometer eller en smartvekt), et laboratorieresultat importert fra den elektroniske pasientjournalen, eller en selvrapportert verdi lagt inn av pasienten, og disse tre kildene har svært ulik pålitelighet, så kilden bør rapporteres sammen med raten. Tap til oppfølging er sjelden tilfeldig: pasienter som slutter å engasjere seg i et program er ofte også de som er minst tilbøyelige til å ha forbedret seg, så en høy forbedringsrate beregnet bare på pasienter som fullførte oppfølgingen kan overvurdere programmets reelle effekt på populasjonsnivå. Sesongeffekter og regresjon mot gjennomsnittet er reelle for både HbA1c og vekt, så et program bør sammenligne mot en samtidig eller historisk kontrollgruppe der det er mulig, i stedet for å behandle enhver forbedring som bevis på programmets effekt.

## Fallgruver

- **Ekskludere, i stedet for å rapportere, tap til oppfølging**: å stille fjerne pasienter uten oppfølgingsmåling fra nevneren kan i betydelig grad blåse opp den tilsynelatende forbedringsraten; rapporter alltid fullføringsraten for oppfølgingsmåling sammen med selve forbedringsraten.
- **Blande selvrapporterte og enhetsbaserte målinger uten å merke dem**: en selvrapportert vekt er systematisk mindre pålitelig enn en avlesning fra en tilkoblet smartvekt, og sammenblanding av de to kildene skjuler hvor mye av en tilsynelatende forbedring som er målestøy.
- **Ingen kontroll eller kontrafaktisk sammenligning**: mange kroniske biometriske mål svinger eller beveger seg mot gjennomsnittet av seg selv; en forbedringsrate i én enkelt gruppe uten noen sammenligningsgruppe er veiledende, men ikke avgjørende, bevis på programeffekt.
- **Å behandle et beskjedent gjennomsnittlig skift som bevis på bred forbedring**: en liten gjennomsnittlig forbedring på populasjonsnivå kan drives av noen få store respondere mens de fleste pasienter ikke ser noen endring; rapporter fordelingen (f.eks. andelen som krysser den kliniske meningsfulle terskelen), ikke bare gjennomsnittsskiftet.

## Kilder

- American Diabetes Association (ADA), Standards of Care in Diabetes, veiledning om HbA1c-mål og klinisk meningsfull endring
- Centers for Disease Control and Prevention (CDC), Division of Diabetes Translation, veiledning for programevaluering
- Fagfellevurdert litteratur om utfall av digitale programmer for diabetes og vektreduksjon, for eksempel studier publisert i npj Digital Medicine og Diabetes Care

Se også: [medisineringsetterlevelsesrate](../medisineringsetterlevelsesrate/), en hyppig oppstrøms drivkraft for biometrisk forbedring i programmer for kroniske tilstander.
