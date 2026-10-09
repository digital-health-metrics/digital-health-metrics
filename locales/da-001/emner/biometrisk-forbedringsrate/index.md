# Biometrisk Forbedringsrate

Den biometriske forbedringsrate er andelen af indskrevne patienter i et digitalt sundhedsprogram, der opnår en klinisk meningsfuld forbedring i en fulgt biometrisk måling over en defineret indskrivningsperiode. Oftest er det glykeret hæmoglobin (HbA1c) i diabetes- og kardiometaboliske programmer eller kropsmasseindeks (BMI) i vægtstyringsprogrammer. Det er den udfaldsmetrik, der i sidste ende begrunder et digitalt sundhedsprodukts kliniske påstande: tal for engagement og adoption beskriver, hvordan et produkt bruges, men biometrisk forbedring er tættere på at være et bevis for, at det virker.

## Hvorfor dette er vigtigt

Digitale sundhedsprogrammer sælges og bestilles ofte på løftet om bedre sundhedsudfald, og den biometriske forbedringsrate er den mest direkte, kvantificerbare måde at prøve det løfte af over for en bestemt, klinisk anerkendt tærskel i stedet for en vag påstand om "bedre sundhed". Betalere, arbejdsgivere og sundhedssystemer knytter i stigende grad refusion eller fornyelse af kontrakter til påvist biometrisk forandring, så et program, der ikke troværdigt kan rapportere denne rate, står svagere både kommercielt og klinisk. Metrikken er også en disciplinerende kontrol af programdesignet: det er langt lettere at rapportere engagement (logins, sendte beskeder) end udfald, og et team bør være mistænksomt over for ethvert program, der rapporterer det første begejstret, men er vagt om det sidste.

## Hvordan det beregnes

```
Biometrisk forbedringsrate = patienter, der opnår en defineret klinisk
                             meningsfuld forbedring / patienter med en
                             gyldig baseline- og opfølgningsmåling × 100

Almindelige klinisk meningsfulde tærskler:
  HbA1c   — et fald på ≥ 0,5 procentpoint, eller at nå et defineret
            mål (fx < 7,0 %) fra en baseline uden for normalområdet
  BMI     — et fald på ≥ 5 % af kropsvægten ved baseline, opretholdt
            frem til opfølgningstidspunktet

Rapportér separat for hver fulgt biometrisk måling; slå aldrig
forbedring i HbA1c og BMI sammen til én samlet "forbedrings"-procent.
```

## Gennemarbejdet eksempel

Et kardiometabolisk digitalt sundhedsprogram indskriver 800 patienter med en HbA1c ved baseline uden for normalområdet. Af disse har 620 både en gyldig baseline- og en opfølgningsmåling efter 6 måneder (180 er faldet fra under opfølgningen og udelades af nævneren i stedet for at blive talt som fiaskoer). Af de 620 med parrede målinger opnår 340 et fald på mindst 0,5 procentpoint. Den biometriske forbedringsrate er 340 / 620 × 100 = 55 %. Hvis tallet blev rapporteret mod alle 800 indskrevne (340 / 800 = 42,5 %), ville det blande frafald under opfølgningen sammen med behandlingssvigt og undervurdere raten for de patienter, der faktisk fuldførte målingerne.

## Datakilder og forbehold

Biometriske værdier ved baseline og opfølgning stammer typisk fra en tilsluttet enhed (et Bluetooth-glukometer eller en smart vægt), et laboratorieresultat importeret fra den elektroniske patientjournal eller en værdi, patienten selv har indtastet, og disse tre kilder har meget forskellig pålidelighed, så kilden bør rapporteres sammen med raten. Frafald under opfølgningen er sjældent tilfældigt: patienter, der mister engagementet i et program, er ofte også dem, der har mindst tilbøjelighed til at være blevet bedre, så en høj forbedringsrate, der kun er beregnet ud fra patienter, der fuldførte opfølgningen, kan overvurdere programmets reelle effekt på populationsniveau. Sæsonudsving og regression mod gennemsnittet er reelle for både HbA1c og vægt, så et program bør om muligt sammenligne med en samtidig eller historisk kontrolgruppe i stedet for at betragte enhver forbedring som bevis på programmets effekt.

## Faldgruber

- **At udelade frafald under opfølgningen i stedet for at rapportere det**: i det stille at fjerne patienter uden en opfølgningsmåling fra nævneren kan blæse den tilsyneladende forbedringsrate betydeligt op; rapportér altid fuldførelsesraten for opfølgningsmålingen sammen med selve forbedringsraten.
- **At blande selvrapporterede målinger og enhedsmålinger uden at markere dem**: en selvrapporteret vægt er systematisk mindre pålidelig end en aflæsning fra en tilsluttet smart vægt, og en sammenblanding af de to kilder skjuler, hvor meget af en tilsyneladende forbedring der blot er målestøj.
- **Ingen kontrol eller kontrafaktisk sammenligning**: mange kroniske biometriske mål svinger eller regredierer mod gennemsnittet af sig selv; en forbedringsrate fra en enkelt arm uden nogen sammenligningsgruppe er et fingerpeg, men ikke et endeligt bevis på programmets effekt.
- **At behandle en beskeden gennemsnitlig forskydning som bevis på bred forbedring**: en lille gennemsnitlig forbedring på populationsniveau kan skyldes nogle få patienter med stor respons, mens de fleste patienter ikke ser nogen forandring; rapportér fordelingen (fx andelen, der krydser den klinisk meningsfulde tærskel) og ikke kun den gennemsnitlige forskydning.

## Kilder

- American Diabetes Association (ADA), Standards of Care in Diabetes, vejledning om HbA1c-mål og klinisk meningsfuld forandring
- Centers for Disease Control and Prevention (CDC), Division of Diabetes Translation, vejledning om programevaluering
- Peer reviewet litteratur om udfald af digitale programmer for diabetes og vægtstyring, for eksempel undersøgelser offentliggjort i npj Digital Medicine og Diabetes Care

Se også: [medicinefterlevelsesrate](../medicinefterlevelsesrate/), en hyppig forudgående drivkraft for biometrisk forbedring i programmer for kroniske tilstande.
