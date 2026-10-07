# Medicinefterlevelsesrate

Medicinefterlevelsesraten måler, i hvilket omfang en patient tager en ordineret medicin som foreskrevet, oftest udtrykt som andelen af dage i en defineret periode, hvor patienten havde adgang til sin medicin som ordineret. Det er en af de mest betydningsfulde metrikker for digital sundhed, fordi manglende efterlevelse er almindeligt, i vid udstrækning kan forebygges med den rette støtte og er direkte forbundet med dårligere kliniske udfald og højere nedstrøms omkostninger, og det er netop det hul, som påmindelsesapps til medicin, smarte pilleflasker og fornyelsesanmodninger fra apoteker er bygget til at lukke.

## Hvorfor dette er vigtigt

Folkesundhedsorganer anslår, at manglende efterlevelse af medicin til kroniske sygdomme for nogle tilstande kan ligge så højt som 50 %, og det er en førende forebyggelig årsag til undgåelige indlæggelser, sygdomsprogression og behandlingssvigt, der fejlagtigt tilskrives selve medicinen i stedet for uregelmæssig brug. Digitale redskaber til efterlevelse findes netop for at lukke dette hul, så for ethvert program med en medicinkomponent er efterlevelsesraten normalt den metrik, der har størst betydning for beslutninger: den ligger kausalt opstrøms for biometrisk forbedring, genindlæggelse og de fleste andre kliniske udfaldsmetrikker, et program ellers kunne rapportere. Et program, der forbedrer engagement eller tilfredshed uden at flytte efterlevelsen, har sandsynligvis endnu ikke påvist en plausibel mekanisme for klinisk gavn.

## Hvordan det beregnes

```
Proportion of Days Covered (PDC) = dage i perioden med medicin ved
                                   hånden (ud fra dagsforsyningen ved
                                   udleveringerne) / dage i måleperioden
                                   × 100

Medication Possession Ratio (MPR) = samlet dagsforsyning modtaget i
                                    perioden / dage i perioden × 100
                                    (kan overstige 100 % ved tidlige
                                    fornyelser; PDC foretrækkes
                                    generelt af den grund)

En patient klassificeres typisk som "efterlevende" ved en PDC-tærskel
på ≥ 80 %, efter en udbredt konvention for kvalitetsmål.
```

## Gennemarbejdet eksempel

En patient er ordineret en daglig kronisk medicin over en måleperiode på 90 dage. Apotekets udleveringsregistre viser, at patienten har fået nok medicin til at dække 76 af de 90 dage, med to huller: et hul på 9 dage efter at have løbet tør, før medicinen blev fornyet, og et hul på 5 dage omkring en hospitalsindlæggelse. PDC er 76 / 90 × 100 = 84 %, hvilket er over den konventionelle efterlevelsestærskel på 80 %. Hvis de samme huller blev målt med MPR baseret på udleveret dagsforsyning i stedet for dage, der faktisk var dækket, kunne en tidlig fornyelse andetsteds i perioden skubbe forholdet over 100 %, hvilket illustrerer, hvorfor PDC er det mere konservative og generelt foretrukne mål.

## Datakilder og forbehold

Hævedata eller udleveringsdata fra apoteket (enten fra en pharmacy benefit manager eller et tilsluttet apotekssystem) er standardkilden, da den afspejler, hvad patienten faktisk har fået, og ikke hvad patienten er ordineret; ordinationsdata alene overvurderer efterlevelsen, fordi de ikke bekræfter, at patienten nogensinde har hentet medicinen. Digitale redskaber til efterlevelse, såsom smarte pilleflasker, indtagelige sensorer, tilsluttede smarte inhalatorer, der registrerer hver aktivering ved lungesygdomme som astma og KOL, og appbaserede tjek, giver data med højere opløsning om, hvorvidt en dosis rent faktisk blev taget og ikke blot erhvervet, men bruges af et lille, potentielt ikke-repræsentativt mindretal af patienterne, så en sammenblanding af enhedsbekræftet efterlevelse og hævebaseret PDC på tværs af en population kræver omhu i fortolkningen. Efterlevelsen bør måles over en periode, der er lang nok til at udjævne enkelte glemte doser, men kort nok til at opdage et meningsfuldt fald, før det forårsager klinisk skade; rullende vinduer på 90 dage er almindelige for kroniske lægemidler.

## Faldgruber

- **At bruge MPR uden at oplyse, at den kan overstige 100 %**: uforklarede forhold over 100 % som følge af tidlige fornyelser eller hamstring gør sammenligning på tværs af patienter og perioder upålidelig, medmindre PDC bruges, eller forholdet udtrykkeligt begrænses til 100 %.
- **At behandle ordinations- eller bestillingsdata som bevis for efterlevelse**: en ordination, der er skrevet eller sendt til et apotek, siger intet om, hvorvidt patienten hentede eller tog medicinen; kun hævedata eller enhedsdata lukker det hul.
- **At bruge én efterlevelsestærskel på tværs af alle tilstande uden skelnen**: den kliniske konsekvens af at gå glip af 20 % af doserne varierer enormt efter lægemiddelklasse (fx antikoagulantia mod statiner), så en enkelt tærskel på 80 % brugt universelt kan under- eller overvurdere den kliniske risiko for nogle lægemidler.
- **At ignorere medicinskift og ophør**: en patient, der klinisk set og med rette skifter til en anden medicin, kan fremstå som et stort fald i efterlevelsen af den oprindelige medicin, hvis skiftet ikke tages i betragtning i beregningen.

## Kilder

- Pharmacy Quality Alliance (PQA), specifikationer for målet Proportion of Days Covered
- Centers for Medicare & Medicaid Services (CMS), mål for medicinefterlevelse i Star Ratings
- Peer reviewet litteratur om måling af medicinefterlevelse og digitale indsatser for efterlevelse, for eksempel undersøgelser offentliggjort i Journal of Managed Care & Specialty Pharmacy

Se også: [biometrisk forbedringsrate](../biometrisk-forbedringsrate/), som efterlevelse af medicin til kroniske sygdomme er en primær drivkraft for.
