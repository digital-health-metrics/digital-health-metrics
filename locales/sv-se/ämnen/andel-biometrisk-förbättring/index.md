# Andel biometrisk förbättring

Andel biometrisk förbättring är andelen patienter inskrivna i ett digitalt hälsoprogram som uppnår en kliniskt meningsfull förbättring i ett spårat biometriskt mått – vanligast glykerat hemoglobin (HbA1c) vid diabetes- och kardiometabola program, eller kroppsmasseindex (BMI) vid vikthanteringsprogram – under en definierad inskrivningsperiod. Det är utfallsmåttet som i slutändan rättfärdigar en digital hälsoprodukts kliniska påståenden: engagemangs- och adoptionssiffror beskriver hur en produkt används, men biometrisk förbättring kommer närmare bevis för att den faktiskt fungerar.

## Varför det är viktigt

Digitala hälsoprogram säljs och upphandlas ofta med löftet om förbättrade hälsoutfall, och andel biometrisk förbättring är det mest direkta, kvantifierbara sättet att testa det löftet mot en specifik, kliniskt erkänd tröskel snarare än ett vagt påstående om "bättre hälsa". Betalare, arbetsgivare och vårdsystem knyter i allt högre grad ersättning eller kontraktsförnyelse till påvisad biometrisk förändring, så ett program som inte trovärdigt kan rapportera denna andel är i ett kommersiellt såväl som kliniskt underläge. Måttet är också en disciplinkontroll på programdesign: det är mycket lättare att rapportera engagemang (inloggningar, skickade meddelanden) än utfall, och ett team bör vara misstänksamt mot alla program som entusiastiskt rapporterar det förra samtidigt som det är vagt om det senare.

## Hur den beräknas

```
Andel biometrisk förbättring = patienter som uppnår en definierad
                               kliniskt meningsfull förbättring /
                               patienter med giltig
                               baslinjemätning och
                               uppföljningsmätning × 100

Vanliga kliniskt meningsfulla trösklar:
  HbA1c  — en minskning på ≥ 0,5 procentenheter, eller att nå ett
           definierat mål (t.ex. < 7,0 %) från en baslinje utanför
           intervallet
  BMI    — en minskning på ≥ 5 % av baslinjens kroppsvikt,
           vidmakthållen till uppföljningsmätningstillfället

Rapportera separat för varje spårat biometriskt mått; blanda
aldrig ihop förbättring av HbA1c och BMI till en enda kombinerad
"förbättrings"-procentsats.
```

## Genomräknat exempel

Ett kardiometabolt digitalt hälsoprogram skriver in 800 patienter med en baslinje-HbA1c utanför intervallet. Av dessa har 620 både en giltig baslinje- och uppföljningsmätning vid 6 månader (180 går förlorade vid uppföljning och exkluderas från nämnaren, räknas inte som misslyckanden). Av de 620 med parade mätningar uppnår 340 en minskning på minst 0,5 procentenheter. Andelen biometrisk förbättring är 340 / 620 × 100 = 55 %. Att rapportera detta mot de fullständiga 800 inskrivna (340 / 800 = 42,5 %) skulle sammanblanda bortfall vid uppföljning med behandlingsmisslyckande, vilket underskattar andelen för patienter som faktiskt slutförde mätningen.

## Datakällor och förbehåll

Baslinje- och uppföljningsvärden kommer vanligtvis från en uppkopplad enhet (en Bluetooth-blodsockermätare eller smart våg), ett laboratorieresultat importerat från elektroniska patientjournaler, eller ett värde som rapporterats av patienten själv – och dessa tre källor har mycket olika tillförlitlighet, så källan bör rapporteras tillsammans med andelen. Bortfall vid uppföljning är sällan slumpmässigt: patienter som avbryter ett program är ofta också de som minst sannolikt har förbättrats, så en hög förbättringsandel beräknad endast på patienter som slutförde uppföljningen kan överskatta programmets faktiska effekt på populationsnivå. Säsongseffekter och regression mot medelvärdet är verkliga för både HbA1c och vikt, så ett program bör jämföra med en samtidig eller historisk kontrollgrupp där det är möjligt, snarare än att behandla varje förbättring som bevis på programmets effekt.

## Fallgropar

- **Att exkludera, snarare än rapportera, bortfall vid uppföljning**: att i tysthet ta bort patienter utan uppföljningsmätning från nämnaren kan avsevärt öka den skenbara förbättringsandelen; rapportera alltid slutförandegraden för uppföljningsmätning tillsammans med själva förbättringsandelen.
- **Att blanda självrapporterade och enhetsbaserade mätningar utan att märka dem**: en självrapporterad vikt är systematiskt mindre tillförlitlig än en avläsning från en uppkopplad smart våg, och att blanda de två källorna döljer hur mycket av en skenbar förbättring som är mätbrus.
- **Ingen kontroll eller kontrafaktisk jämförelse**: många kroniska biometriska mått fluktuerar eller regredierar mot medelvärdet av sig själva; en förbättringsandel med endast en arm utan någon jämförelsegrupp är antydande, inte avgörande, bevis på programeffekt.
- **Att behandla en blygsam genomsnittlig förändring som bevis på bred förbättring**: en liten genomsnittlig förbättring på populationsnivå kan drivas av några få starka svarspersoner medan de flesta patienter inte ser någon förändring; rapportera fördelningen (t.ex. andelen som passerar den kliniskt meningsfulla tröskeln), inte bara den genomsnittliga förändringen.

## Källor

- American Diabetes Association (ADA), Standards of Care in Diabetes, vägledning om HbA1c-mål och kliniskt meningsfull förändring
- Centers for Disease Control and Prevention (CDC), Division of Diabetes Translation, vägledning för programutvärdering
- Kollegialt granskad litteratur om resultat från digitala diabetes- och viktminskningsprogram, exempelvis studier publicerade i npj Digital Medicine och Diabetes Care

Se även: [följsamhetsgrad för läkemedel](../följsamhetsgrad-för-läkemedel/), en vanlig uppströms drivkraft för biometrisk förbättring i program för kroniska tillstånd.
