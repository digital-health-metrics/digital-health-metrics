# System Usability Scale-poäng

System Usability Scale-poäng (SUS) är ett standardiserat frågeformulär med 10 punkter som används för att kvantifiera hur användbar en mjukvara är, och producerar en enda poäng från 0 till 100 som kan riktmärkas mot väletablerade branschnormer. Till skillnad från Net Promoter Score, som mäter vilja att rekommendera, eller patientrapporterade utfallsmått, som mäter klinisk eller funktionell status, mäter SUS en specifik sak: hur lätt själva mjukvaran är att lära sig och använda, antingen för patienter eller klinisk personal.

## Varför det är viktigt

Ett digitalt hälsoverktyg kan ha starka kliniska bevis och ett övertygande affärsfall samtidigt som det misslyckas i praktiken eftersom patienter eller kliniker tycker att gränssnittet är förvirrande, långsamt eller frustrerande att använda – och eftersom SUS är ett validerat, allmänt använt instrument med decennier av publicerad riktmärkningsdata över branscher, låter det ett digitalt hälsoteam jämföra sin egen produkts användbarhet mot en känd fördelning snarare än att förlita sig på informella intryck eller anekdotiska klagomål. SUS är avsiktligt teknikagnostiskt och snabbt att administrera (vanligtvis under fem minuter), vilket gör det praktiskt att köra upprepade gånger över designiterationer, till skillnad från en fullständig användbarhetsstudie eller formell klinisk prövning. Eftersom klinikerinriktade användbarhetsproblem är en dokumenterad bidragande faktor till utbrändhet (se läkarutbrändhetsgrad) och patientinriktade användbarhetsproblem är en dokumenterad bidragande faktor till övergivande och dåliga resultat för digital hälsolitteracitet (se digital hälsolitteracitetsgrad), fungerar SUS som en tidig varningssignal för användbarhet med låg kostnad som kan fånga ett designproblem innan det visar sig i dessa mer konsekvensrika nedströmsmått.

## Hur det beräknas

```
SUS-poäng = ((summan av udda numrerade objektpoäng − 5) +
            (25 − summan av jämna numrerade objektpoäng)) × 2,5

Resultatet är en enda poäng från 0 till 100 (inte en procentsats,
trots skalan, eftersom den inte representerar "procent korrekt"
eller liknande).

Publicerad riktmärkestolkning (Bangor et al.):
  Över 80  — utmärkt användbarhet
  68       — genomsnittlig, baserad på den breda branschnormen
  Under 51 — dålig användbarhet, motiverar undersökning
```

## Genomräknat exempel

En telemedicinplattform administrerar det standardiserade 10-punktsfrågeformuläret SUS till 150 patienter efter deras första videobesök. Den beräknade genomsnittliga SUS-poängen över alla svarspersoner är 74. Riktmärkt mot det allmänt citerade branschgenomsnittet på 68 indikerar detta användbarhet över genomsnittet för denna specifika patientpopulation och användningsfall, även om det fortfarande är meningsfullt under den "utmärkta" tröskeln på 80 som skulle antyda få kvarvarande användbarhetshinder. Att segmentera samma 150 svar efter ålder visar en genomsnittlig poäng på 81 för patienter under 50 och 62 för patienter 65 och äldre – en klyfta som pekar mot ett specifikt, åtgärdbart användbarhetsproblem för äldre patienter snarare än ett allmänt produktanvändbarhetsproblem, och en som ett enda sammanslaget genomsnitt skulle ha dolt.

## Datakällor och förbehåll

SUS-data kommer direkt från patienter eller kliniker som slutför det standardiserade 10-punktsfrågeformuläret, och instrumentet måste administreras exakt som det validerades (samma 10 punkter, samma 5-punkts instämmandeskala, samma poängformel) för att den resulterande poängen ska vara jämförbar mot publicerade riktmärken; en modifierad eller förkortad version av frågeformuläret, hur välmenande den än är, producerar en poäng som inte tillförlitligt kan tolkas mot den standardiserade riktmärkesfördelningen. SUS mäter upplevd användbarhet, som korrelerar med men inte är identisk med objektiv uppgiftsfullgörelse (se digital hälsolitteracitetsgrad för ett uppgiftsfullgörandebaserat mått); en produkt kan ha en bra SUS-poäng från patienter som inte provat de mer komplexa funktionerna, så att parkoppla SUS med objektiv uppgiftsfullgörandedata ger en fylligare bild än endera ensamt. Tidpunkten för svaret spelar roll: att administrera SUS omedelbart efter en specifik frustrerande incident (en misslyckad anslutning, ett förvirrande steg) kontra efter en smidig session kan skifta poäng oberoende av produktens övergripande användbarhet.

## Fallgropar

- **Att modifiera de standardiserade frågeformulärsobjekten eller poängsättningen**: även små formulerings- eller skalförändringar ogiltigförklarar jämförelse mot den väletablerade publicerade riktmärkesfördelningen; använd det standardiserade 10-punktsinstrumentet exakt som det validerades.
- **Att endast rapportera genomsnittspoängen utan segmentering**: användbarhet varierar ofta avsevärt efter användarålder, digital litteracitet eller roll (patient kontra kliniker); segmentera rapporteringen för att hitta specifika, åtgärdbara användbarhetsluckor som ett enda genomsnitt döljer.
- **Att behandla SUS som ett mått på klinisk effektivitet**: SUS mäter specifikt användbarhet, inte kliniskt utfall eller tillfredsställelse med vården; ett mycket användbart verktyg kan ändå misslyckas med att förbättra kliniska utfall, och dessa bör aldrig sammanblandas eller ersätta varandra.
- **Att endast administrera enkäten efter ovanligt smidiga eller ovanligt frustrerande sessioner**: tidpunkt och sammanhang för administrering kan snedvrida poängen; administrera konsekvent över ett representativt urval av verkliga sessioner, inte bara bekväma eller selektivt utvalda.

## Källor

- Brooke, J., "SUS: A Quick and Dirty Usability Scale", det ursprungliga publicerade instrumentet
- Bangor, Kortum och Miller, publicerad SUS-riktmärkningsforskning som etablerar de allmänt citerade poängtolkningsbanden
- Kollegialt granskad litteratur om användning av SUS i utvärdering av användbarhet inom digital hälsa och telemedicin, exempelvis studier publicerade i JMIR Human Factors

Se även: [patientnöjdhetsindex (Net Promoter Score)](../patientnöjdhetsindex-net-promoter-score/), ett relaterat men distinkt patientrapporterat mått som mäter tillfredsställelse och lojalitet snarare än specifikt mjukvaruanvändbarhet.
