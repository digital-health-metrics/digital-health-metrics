# Digital Kompetencerate

Den digitale kompetencerate måler andelen af en patientpopulation, der selvstændigt og med succes kan gennemføre almindelige opgaver på en digital sundhedsplatform, såsom at logge ind, bestille en tid, deltage i et videobesøg eller læse et prøvesvar, uden hjælp fra en anden person. Den adskiller sig fra den digitale adgangsrate, og den bør altid måles separat fra den: en patient kan have en smartphone og en bredbåndsforbindelse og alligevel ikke kunne navigere på en telehealth-platform uden hjælp, og en sammenblanding af de to metrikker skjuler netop den population, som denne metrik findes for at afsløre.

## Hvorfor dette er vigtigt

Digital adgang alene garanterer ikke, at en patient kan bruge en digital sundhedstjeneste effektivt: patienter med lavere sundhedskompetence, begrænset erfaring med teknologi generelt, kognitiv eller visuel funktionsnedsættelse eller sproglige barrierer over for platformens grænseflade kan have fuld teknisk adgang og alligevel ikke kunne gennemføre en opgave selvstændigt, og denne forskel hænger systematisk sammen med de samme demografiske grupper, der allerede står over for andre sundhedsforskelle. HIMSS' Digital Health Equity Measurement Framework behandler digital kompetence som en søjle adskilt fra adgang netop af denne grund: at lukke et adgangsgab uden også at tage fat på et kompetencegab kan efterlade en population teknisk forbundet, men i praksis ude af stand til at få gavn. Organisationer, der måler opgavegennemførelse og tid til gennemførelse for almindelige handlinger på platformen, opdelt efter sprog og socioøkonomiske indikatorer, kan identificere kompetencebarrierer og målrette støtten (forenklede grænseflader, assisteret introduktion, indhold på andre sprog) langt mere præcist end organisationer, der kun støtter sig til adgangsmetrikker eller samlede tilfredshedsscorer.

## Hvordan det beregnes

```
Digital kompetencerate = patienter, der selvstændigt gennemfører en
                         defineret opgave uden hjælp / patienter, der
                         forsøger den opgave × 100

Almindeligt målte opgaver: login til konto, tidsbestilling, deltagelse
i et videobesøg, visning af et prøvesvar, udfyldelse af en
indskrivningsformular.

Rapportér pr. opgave og ikke som én samlet score, da kompetencen til
enkle opgaver (login) og komplekse opgaver (udfyldelse af en
indskrivningsformular i flere trin) er væsentligt forskellig, og en
sammenblanding skjuler, hvor den konkrete barriere ligger.
```

## Gennemarbejdet eksempel

Et sundhedssystem følger deltagelse i et videobesøg som en defineret opgave på tværs af 5.000 planlagte telehealth-aftaler i en måned. Af disse deltager 4.100 patienter med succes uden et supportopkald eller teknisk hjælp under besøget (digital kompetencerate for denne opgave: 82 %). En opdeling efter primært sprog viser en rate på 89 % for engelsktalende patienter mod 61 % for patienter, hvis primære sprog afviger fra platformens standardsprog for grænsefladen, en forskel på 28 point, der ville være usynlig, hvis kun det samlede tal på 82 % blev rapporteret, og som peger direkte mod en konkret indsats, man kan gøre noget ved (oversat grænseflade og vejledning), i stedet for et vagt generelt kompetenceproblem.

## Datakilder og forbehold

Data om opgavegennemførelse hentes typisk fra platformens egne hændelseslogge (nåede patienten frem til videobesøget, blev tidsbestillingsforløbet gennemført uden afbrydelse), suppleret med data fra supportopkald eller henvendelser til helpdesken for at identificere opgaver, der kun teknisk set blev "gennemført", fordi patienten fik hjælp undervejs. En opgave, der tælles som "gennemført" udelukkende ud fra systemlogge, kan skjule, at en patient havde brug for et opkald fra et familiemedlem eller supportpersonale for at komme så langt. En gennemførelse, der reelt er uafhængig af kompetence, bør defineres og følges separat fra en assisteret, hvor platformen kan skelne mellem de to. Digital kompetence hænger sammen med, men er analytisk adskilt fra, sundhedskompetence og generel læsefærdighed. Der bør bruges et valideret instrument (og ikke en uformel antagelse baseret på alder eller demografi alene), hvor der kræves en formel vurdering.

## Faldgruber

- **At forveksle digital kompetence med digital adgang**: en patient med fuld teknisk adgang kan stadig mangle kompetencen til at bruge den effektivt; det er separate metrikker, der kræver separate indsatser, og de bør aldrig rapporteres som ét samlet tal.
- **At tælle assisterede gennemførelser som succeser uden hjælp**: hvis en patient kun gennemfører en opgave med et supportopkald eller et familiemedlems hjælp, er det et kompetencegab, som platformen har dækket over og ikke løst; skel mellem assisteret og uassisteret gennemførelse, hvor data tillader det.
- **At rapportere én samlet score for opgavegennemførelse**: kompetencen til en enkel opgave (login) og en kompleks (udfyldelse af en detaljeret indskrivningsformular) er væsentligt forskellig; rapportér pr. opgave for at finde ud af, præcis hvor barrieren ligger.
- **At antage, at alder alene forudsiger digital kompetence**: selv om alder samlet set hænger sammen med lavere digital kompetence, er sprogfærdighed i platformens grænsefladesprog og generel fortrolighed med teknologi ofte stærkere individuelle forudsigere og bør måles direkte i stedet for at udledes af alder.

## Kilder

- HIMSS, Digital Health Equity Measurement Framework (DHEMF)
- Office of the National Coordinator for Health Information Technology (ONC), forskning i brugervenlighed af sundheds-it og digital sundhedskompetence
- Peer reviewet litteratur om måling af og indsatser for digital sundhedskompetence, for eksempel undersøgelser offentliggjort i Journal of Medical Internet Research (JMIR)

Se også: [digital adgangsrate](../digital-adgangsrate/), den forudsætningsmetrik, som denne oftest, og oftest fejlagtigt, forveksles med.
