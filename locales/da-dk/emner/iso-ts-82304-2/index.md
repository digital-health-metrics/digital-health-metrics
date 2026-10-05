# ISO/TS 82304-2

ISO/TS 82304-2 er en international teknisk specifikation, udgivet under ISO Technical Committee 215 (Sundhedsinformatik), der definerer en struktureret metode til at vurdere kvaliteten af sundheds- og wellnessapplikationer — der spænder fra brugbarhed, teknisk robusthed og pålidelighed, interoperabilitet, indholdskvalitet og datasikkerhed og privatliv — for produkter, der falder uden for anvendelsesområdet for fuld medicinsk udstyrsregulering, men som stadig væsentligt påvirker en brugers sundhedsbeslutninger eller adfærd. Den eksisterer for at udfylde et specifikt hul: størstedelen af forbrugervendte sundheds- og wellnessapps (fitnesstrackere, symptomdagbøger, wellness-coaching-apps) er ikke reguleret som medicinsk udstyr, men der var tidligere ingen fælles, struktureret måde at vurdere eller sammenligne deres grundlæggende kvalitet og sikkerhed på.

## Hvorfor det betyder noget

App stores er vært for hundredtusindvis af sundheds- og wellnessapps med enormt varierende kvalitet, og før en fælles teknisk specifikation eksisterede, havde en patient, kliniker eller sundhedssystem ingen struktureret, sammenlignelig måde at vurdere den grundlæggende kvalitet og sikkerhed af en app mod en anden ud over stjernebedømmelser og markedsføringspåstande — et hul, der betyder noget, fordi en dårligt designet sundhedsapp stadig kan forårsage reel skade (unøjagtigt indhold, dårlig datasikkerhed, vildledende påstande), selv uden at nå den regulatoriske tærskel for medicinsk udstyr. ISO/TS 82304-2 er bevidst struktureret omkring domæner, som en ikke-specialiseret vurderer konsekvent kan vurdere, hvilket har gjort den til den tekniske grundlag for flere nationale og kommercielle kvalitetsmærknings- og kuraterede tjenester for sundhedsapps, og giver sundhedssystemer og app-biblioteker en forsvarlig, standardiseret måde at inkludere eller ekskludere apps fra en anbefalet liste på i stedet for at stole på ad hoc-vurdering.

## Hvordan det anvendes

```
Vurdering er organiseret omkring etablerede kvalitetsdomæner,
evalueret via struktureret vurdering frem for en enkelt numerisk
formel:

Brugbarhed                          — klarhed, tilgængelighed og
                                     brugervenlighed for den
                                     tilsigtede brugergruppe
Teknisk robusthed/pålidelighed      — stabilitet, ydeevne og
                                     fravær af tekniske defekter
Interoperabilitet                   — evne til at udveksle data
                                     med andre systemer, hvor
                                     det er relevant for appens
                                     funktion
Indholdskvalitet og -sikkerhed      — nøjagtighed, aktualitet og
                                     fravær af skadelige eller
                                     vildledende sundhedspåstande
Sikkerhed og privatliv              — databeskyttelsespraksis og
                                     gennemsigtighed om databrug

Hvert domæne scores via strukturerede vurderingskriterier og
kombineres til en samlet kvalitetsvurdering, som flere
kvalitetsmærkningsordninger for sundhedsapps bruger som teknisk
grundlag for et offentligt kvalitetsmærke eller beslutning om
inklusion i et kurateret bibliotek.
```

## Et gennemarbejdet eksempel

Et sundhedssystems digitale app-biblioteksprogram ønsker at kuratere en anbefalet liste over wellnessapps til patienter frem for at overlade appvalg fuldstændig til app store-søgning. Hver kandidatapp vurderes mod ISO/TS 82304-2-domænerne: en søvnsporingsapp scorer godt på brugbarhed og teknisk robusthed, tilstrækkeligt på indholdskvalitet, men bliver markeret under sikkerheds- og privatlivsvurderingen for at dele brugerdata med tredjepartsannoncører uden klar oplysning — et fund, der er væsentligt nok til at ekskludere appen fra den anbefalede liste på trods af dens ellers stærke brugbarhedsscore. Dette domæne-for-domæne-resultat er mere brugbart for både kurateringsteamet og, hvis delt, appens egen udvikler, end en enkelt blandet kvalitetsscore ville have været, da det præcist identificerer, hvilket aspekt der skal adresseres, før appen kan genovervejes.

## Datakilder og forbehold

Vurdering mod ISO/TS 82304-2 udføres typisk af en trænet vurderer eller en akkrediteret vurderingstjeneste, efter specifikationens strukturerede vurderingskriterier for hvert domæne, og flere nationale og kommercielle initiativer (kvalitetsmærknings- og kurateringsorganisationer for sundhedsapps, hvoraf nogle opererer under formel national sundhedssystemgodkendelse) bruger standarden som teknisk grundlag for deres egne offentligt vendte appkvalitetsmærker — hvilket betyder, at en apps "certificerede" eller "mærkede" status i praksis ofte afspejler den specifikke mærkningsordnings implementering af standarden, ikke nødvendigvis en identisk proces på tværs af alle ordninger, så den specifikke vurderende organisation og dens metodologi bør kontrolleres og oplyses sammen med ethvert citeret kvalitetsmærke. Specifikationen vurderer kvalitets- og grundlæggende sikkerhedsegenskaber ved en app som software; den er ikke en erstatning for medicinsk udstyrs regulatorisk godkendelse, hvor en apps påstande eller funktioner faktisk når tærsklen for medicinsk udstyr, og at bruge den som sådan ville være en kategorifejl.

## Faldgruber

- **Behandling af et kvalitetsmærke som regulatorisk godkendelse**: en app vurderet og mærket under ISO/TS 82304-2 har dermed ikke modtaget regulatorisk medicinsk udstyrsgodkendelse; de to tjener forskellige formål og bør aldrig sammenblandes i, hvordan en app beskrives eller markedsføres.
- **Antagelse af, at alle mærkningsordninger baseret på standarden er ækvivalente**: forskellige organisationer implementerer ISO/TS 82304-2-baseret vurdering med deres egne specifikke vurderingsprocesser og stringens; kontroller, hvilken organisation der udførte en vurdering og hvordan, frem for at behandle hvert "ISO/TS 82304-2-baseret" mærke som ombytteligt med et andet.
- **Vurdering af kun brugbarhed, mens sikkerhed og privatliv negligeres**: brugbarhedsproblemer er mest synlige for en slutbruger og lettest at vurdere uformelt, hvilket kan få vurderere til at undervurdere det mindre synlige, men potentielt mere konsekvensfulde domæne sikkerhed og privatliv.
- **Behandling af vurdering som en engangs-, permanent certificering**: en apps indhold, sikkerhedspraksis og tredjeparts datadelingsaftaler kan alle ændre sig efter en indledende vurdering; et troværdigt kvalitetsmærkningsprogram genvurderer periodisk frem for at behandle en indledende beståelse som permanent.

## Kilder

- International Organization for Standardization, ISO/TS 82304-2:2021, "Health software — Part 2: Health and wellness apps — Quality and reliability"
- ISO Technical Committee 215 (Sundhedsinformatik), publikations- og arbejdsgruppeinformation
- Nationale og kommercielle kvalitetsmærknings- og kurateringsorganisationer for sundhedsapps, der publicerer deres vurderingsmetodologi baseret på denne standard

Se også: [System Usability Scale-score](../system-usability-scale-score/), et supplerende, snævrere instrument specifikt for brugbarhed, der ofte bruges sammen med en bredere ISO/TS 82304-2-kvalitetsvurdering.
