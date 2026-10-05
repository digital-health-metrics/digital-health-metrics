# Brugerfastholdelsesrate

Brugerfastholdelsesraten måler andelen af brugere, der forbliver aktivt tilmeldt eller fortsætter med at bruge et digitalt sundhedsprodukt over successive tidsperioder efter deres indledende tilmelding, typisk visualiseret som en kohortefastholdelseskurve. Den er den metrik, der adskiller et produkt med et bæredygtigt brugsmønster fra et, der rider på en bølge af nyhed og derefter mister brugere i et forudsigeligt faldende mønster.

## Hvorfor det betyder noget

Næsten ethvert digitalt sundhedsprodukt oplever et vist frafald efter den indledende tilmelding, men formen på fastholdelseskurven afslører, om det frafald stabiliserer sig til en bæredygtig kernebrugerbase, eller om det fortsætter med at falde mod nul. Et produkt med en fastholdelseskurve, der udjævnes efter de første par uger, har fundet en kernegruppe af brugere, for hvem produktet leverer vedvarende værdi, mens et produkt med en kurve, der aldrig udjævnes, sandsynligvis ikke leverer vedvarende værdi, uanset hvor stærk dets indledende tilmeldingstal er. Investorer, sundhedssystempartnere og produktteams er alle afhængige af fastholdelseskurver som et af de mest pålidelige tidlige signaler om langsigtet produktlevedygtighed, fordi den i modsætning til mange andre metrikker i denne bog kan beregnes relativt tidligt i et produkts liv og alligevel være stærkt forudsigende for langsigtet succes.

## Hvordan det beregnes

```
Brugerfastholdelsesrate (dag/uge/måned N) = brugere fra den
                                            oprindelige
                                            tilmeldingskohorte,
                                            der stadig er aktive
                                            ved tidspunkt N /
                                            samlet antal brugere i
                                            den oprindelige
                                            tilmeldingskohorte
                                            × 100

Dette beregnes typisk for flere tidspunkter (dag 1, dag 7, dag 30,
dag 90) for at konstruere en fuld fastholdelseskurve, snarere end
rapporteret som et enkelt tal.
```

## Et gennemarbejdet eksempel

En digital fysioterapiapp tilmelder en kohorte på 1.000 brugere i januar. Ved dag 7 er 600 stadig aktive (60% fastholdelse), ved dag 30 er 350 stadig aktive (35% fastholdelse), og ved dag 90 er 320 stadig aktive (32% fastholdelse). Det faktum, at kurven falder stejlt fra dag 7 til dag 30, men derefter stort set udjævnes fra dag 30 til dag 90, er et stærkt positivt signal — det antyder, at produktet har fundet en kernebrugerbase på omkring 32%, for hvem det leverer vedvarende værdi, snarere end at fortsætte med at miste brugere ubegrænset. At rapportere kun et enkelt "aktive brugere efter 90 dage"-tal uden hele kurven ville have skjult denne vigtige form-information.

## Datakilder og forbehold

Fastholdelsesberegning kræver sporing af individuelle brugere fra deres oprindelige tilmeldingsdato gennem alle efterfølgende tidspunkter, hvilket betyder, at definitionen af "aktiv" skal fastsættes konsekvent (f.eks. mindst én session i den foregående uge) og anvendes ensartet på tværs af hele kohorten. Sammenligning af fastholdelseskurver på tværs af forskellige kohorter (f.eks. brugere tilmeldt i forskellige måneder) kræver opmærksomhed på sæsonbestemte eller eksterne faktorer, der kan have påvirket en bestemt kohortes adfærd uafhængigt af selve produktet.

## Faldgruber

- **Rapportering af et enkelt fastholdelsestal i stedet for den fulde kurve**: formen på fastholdelseskurven (om den udjævnes eller fortsætter med at falde) er ofte mere informativ end noget enkelt tidspunkt.
- **Inkonsekvent definition af "aktiv"**: at ændre definitionen af aktiv brug mellem kohorter eller tidsperioder gør fastholdelsessammenligninger meningsløse.
- **Ignorering af kohorteffekter**: brugere tilmeldt gennem forskellige kanaler eller i forskellige perioder kan have systematisk forskellige fastholdelsesmønstre uafhængigt af produktændringer.
- **Forveksling af fastholdelse med engagementskvalitet**: en bruger kan forblive "aktiv" under en minimal brugstærskel uden at opnå nogen reel fordel; kombiner med konsistensrate for patientengagement for et fuldstændigt billede.

## Kilder

- Mobile app-industristandarder for kohortefastholdelsesanalyse
- Collegialt bedømt litteratur om digital sundhedsfastholdelse og frafald, f.eks. undersøgelser offentliggjort i Journal of Medical Internet Research (JMIR)
- Rock Health, industrianalyser af digitale sundhedsengagementmønstre

Se også: [DAU/MAU-stickiness-ratio](../dau-mau-stickiness-ratio/), den komplementære metrik for engagementsintensitet blandt brugere, der forbliver tilmeldt.
