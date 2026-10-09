# Biometrisk Stabiliseringsrate

Den biometriske stabiliseringsrate er andelen af indskrevne patienter, der opnår og fastholder et klinisk defineret målområde for en biometrisk måling, oftest blodtryk under en tærskel som 130/80 mmHg, ved hjælp af en tilsluttet overvågningsenhed, over en vedvarende periode og ikke på ét enkelt tidspunkt. Den adskiller sig fra den biometriske forbedringsrate (se det emne): forbedring måler størrelsen af en ændring fra baseline, mens stabilisering måler, om en patient pålideligt holdes inden for et sikkert område, når behandlingen eller overvågningen først er begyndt, hvilket er det udfald, der betyder mest for patienter, der allerede er tæt på målet eller allerede er i behandling.

## Hvorfor dette er vigtigt

For en stor del af patienterne i programmer for kroniske sygdomme, især hypertension, hvor retningslinjernes blodtryksmål er veletablerede og direkte knyttet til kardiovaskulær risiko, er det kliniske mål ikke en engangsforbedring, men vedvarende kontrol, og en patient, der svinger ind og ud af målområdet, udgør en væsentligt anden risiko end en, der forbedres én gang og bliver der. Tilsluttede enheder (mobile blodtryksmanchetter, kontinuerlige glukosemonitorer) gør det muligt at måle stabiliseringen løbende i stedet for kun ved klinikbesøg og dermed at afsløre patienter, hvis målinger i klinikken ser kontrollerede ud, men hvis målinger derhjemme er ustabile, et mønster kendt som maskeret hypertension, som periodiske målinger ansigt til ansigt ikke alene kan opdage. Når man rapporterer stabiliseringsraten og ikke blot et enkelt øjebliksbillede af "på målet", tvinges et program til at se i øjnene, hvor konsekvent, og ikke blot hvor ofte, det holder patienterne inden for området.

## Hvordan det beregnes

```
Biometrisk stabiliseringsrate = patienter med ≥ 80 % af målingerne inden
                                for målområdet i måleperioden / patienter
                                med et minimum af gyldige målinger i den
                                periode × 100

Eksempler på tærskler:
  Blodtryk — mål < 130/80 mmHg (eller den relevante tærskel i de
             kliniske retningslinjer for patientens risikoprofil)
  Glukose  — målområde ifølge vejledningen om kontinuerlig
             glukosemonitorering, rapporteret som "tid i området"

Der bør fastsættes en tærskel for minimumsfrekvens af målinger (fx
mindst 3 målinger om ugen), før en patient medtages i nævneren, for
at undgå, at patienter, der sjældent måler, tilsyneladende virker
stabile.
```

## Gennemarbejdet eksempel

Et program for fjernovervågning af hypertension indskriver 600 patienter med mobile blodtryksmanchetter, som hver forventes at tage mindst 3 målinger om ugen. Af disse opfylder 540 tærsklen for minimumsfrekvens af målinger i en måleperiode på 3 måneder og medtages i nævneren. Af de 540 har 350 mindst 80 % af deres målinger under 130/80 mmHg, hvilket giver en biometrisk stabiliseringsrate på 350 / 540 × 100 = 65 %. De 60 patienter, der blev udeladt på grund af utilstrækkeligt antal målinger, rapporteres separat som et hul i datafuldstændigheden og indgår hverken i tælleren eller i gruppen "ikke stabiliseret", da deres reelle kontrolstatus er ukendt og ikke dårlig.

## Datakilder og forbehold

Målingerne kommer direkte fra den tilsluttede enheds egen datastrøm, som er mere objektiv og langt hyppigere end målinger i klinikken, men fejl i placering af enheden og teknik (en manchet i forkert størrelse eller placeret forkert) kan indføre en systematisk skævhed, som en enkelt valideringsmåling i klinikken ikke nødvendigvis fanger. Valget af målområde bør følge de gældende kliniske retningslinjer for patientens specifikke risikoprofil og komorbiditeter og ikke en enkelt universel tærskel, da retningslinjernes mål varierer efter patientens alder, nyrefunktion og kardiovaskulære risiko. En patient, der sjældent måler, bør aldrig stiltiende tælles som "stabil" som standard; at udelade vedkommende fra nævneren med gennemsigtig rapportering af udeladelsen er mere ærligt end enten at tælle vedkommende som kontrolleret eller ukontrolleret på et for spinkelt datagrundlag.

## Faldgruber

- **At behandle én enkelt måling inden for området som stabilisering**: stabilisering handler om vedvarende kontrol over en defineret periode og ikke om et øjebliksbillede; kræv altid en minimumsandel af målinger inden for området over perioden og ikke én enkelt kvalificerende måling.
- **I det stille at udelade patienter, der sjældent måler, uden at rapportere det**: patienter, der sjældent tager målinger, er ikke automatisk stabile eller ustabile; udelad dem gennemsigtigt fra nævneren, og rapportér udeladelsesraten som en separat metrik for datafuldstændighed.
- **At ignorere fejl i enhedens kalibrering og teknik**: en dårligt siddende manchet eller en ukalibreret enhed kan systematisk skubbe målingerne i én retning, hvilket en stabiliseringsrate, der er beregnet naivt ud fra rå enhedsdata, ikke fanger uden periodisk validering.
- **At bruge ét universelt målområde til alle patienter**: de kliniske retningslinjers mål varierer efter patientens risikoprofil og komorbiditet; at anvende én generel tærskel på en klinisk uensartet population vil fejlklassificere nogle patienter som stabiliserede eller ikke stabiliserede i forhold til deres faktiske individuelle mål.

## Kilder

- American Heart Association (AHA) / American College of Cardiology (ACC), retningslinjernes blodtryksmål og vejledning om blodtryksmåling i hjemmet
- International Diabetes Federation og American Diabetes Association (ADA), konsensusvejledning om "tid i området" ved kontinuerlig glukosemonitorering
- Peer reviewet litteratur om biometrisk fjernovervågning og vedvarende kontrol af tilstande, for eksempel undersøgelser offentliggjort i npj Digital Medicine

Se også: [biometrisk forbedringsrate](../biometrisk-forbedringsrate/), den beslægtede metrik for størrelsen af ændringen fra baseline i modsætning til vedvarende kontrol, når et mål er nået.
