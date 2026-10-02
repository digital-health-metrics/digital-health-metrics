# Slutförandegrad för ePROM

Slutförandegrad för ePROM mäter andelen schemalagda elektroniska patientrapporterade utfallsmått (ePROM) – standardiserade, validerade frågeformulär som fångar en patients egen beskrivning av sina symtom, funktion eller livskvalitet, levererade digitalt snarare än på papper – som faktiskt slutförs. Det är lika mycket ett datakvalitetsmått som ett engagemangsmått: ett PROM-programs kliniska och forskningsmässiga värde beror helt på att ha en tillräckligt hög slutförandegrad så att de insamlade svaren är representativa för hela den inskrivna populationen, inte bara den mest engagerade eller minst symtomatiska delmängden.

## Varför det är viktigt

Patientrapporterade utfall är det direkta, patientbestyrkta komplementet till klinikerdokumenterade eller enhetsmätta data, som fångar dimensioner av hälsa – smärta, funktion, livskvalitet – som en journalgranskning eller biometrisk mätning inte kan; digitalisering av PROM-insamling finns specifikt för att göra denna data billigare och lättare att samla in i stor skala än vad pappersbaserad administration någonsin tillät. Men ett PROM-program med låg slutförandegrad riskerar en specifik och allvarlig snedvridning: patienter som mår sämre är ofta mindre benägna att slutföra ett långt frågeformulär, så en sjunkande slutförandegrad kan i sig vara en tidig varningssignal om försämrad populationshälsa, och en låg övergripande slutförandegrad kan få de insamlade svaren att se bättre ut än den verkliga populationens erfarenhet helt enkelt för att de mest symtomatiska patienterna är underrepresenterade i det som slutförs. Det är därför slutförandegrad alltid bör rapporteras tillsammans med själva PROM-poängen, inte behandlas som en sekundär operativ detalj.

## Hur den beräknas

```
Slutförandegrad för ePROM = fullständigt slutförda ePROM /
                            skickade eller schemalagda ePROM × 100

Rapportera separat för:
  Initial slutförandegrad     (första frågeformuläret i en
                              övervakningssekvens)
  Longitudinell               (efterföljande frågeformulär i en
  slutförandegrad               pågående övervakningssekvens, som
                              vanligtvis minskar över tid och bör
                              spåras som en trend, inte en enstaka
                              siffra)

Ett "delvis slutfört" frågeformulär bör definieras och rapporteras
separat från både "fullständigt slutfört" och "ej påbörjat".
```

## Genomräknat exempel

En onkologiklinik skickar ett validerat ePROM för symtombörda till 400 patienter inför varje månatligt uppföljningsbesök. Under den första månaden slutför 340 patienter frågeformuläret fullständigt (slutförandegrad 85 %), 30 slutför det delvis, och 30 påbörjar det inte. Vid den sjätte månaden av samma övervakningssekvens har fullständiga svar sjunkit till 260 av samma 400-patientkohort (65 %), en meningsfull longitudinell nedgång som helt skulle missas om endast den första månadens siffra på 85 % rapporterades som ett statiskt övergripande mått. Att undersöka vilka patienter som faller bort (efter symtomallvarlighet, sjukdomsstadium eller ålder) kan avslöja om nedgången återspeglar enkättrötthet, försämrade symtom som gör frågeformuläret svårare att slutföra, eller en teknisk åtkomstbarriär.

## Datakällor och förbehåll

Slutförandedata kommer vanligtvis från ePROM-plattformens egna leverans- och svarsloggar, som kan skilja mellan tillstånden "ej påbörjat", "delvis slutfört" och "fullständigt slutfört" – en distinktion som alltid bör bevaras och rapporteras snarare än slås samman till en binär slutförd/ej slutförd-siffra, eftersom delvis slutförande ofta indikerar en specifik punkt i frågeformuläret där patienter kämpar eller avbryter. Slutförandegrad bör tolkas tillsammans med hur frågeformuläret levereras (en textmeddelandelänk, en appaviseringsnotifikation, eller en leveransmetod som kräver portalinloggning), eftersom leveransfriktionen i sig påverkar slutförandet oberoende av frågeformulärets innehåll eller patientens underliggande tillstånd. Ett validerat instrument (snarare än en ad hoc-uppsättning frågor) bör alltid användas för själva PROM, eftersom slutförandegrad för ett icke-validerat instrument inte säger något tillförlitligt om den resulterande datans kliniska användbarhet även om slutförandet är högt.

## Fallgropar

- **Att behandla en sjunkande slutförandegrad endast som ett leveransproblem**: en longitudinell nedgång i slutförande kan återspegla genuint försämrade patientsymtom (patienter för sjuka för att slutföra enkäten) snarare än enkättrötthet eller ett tekniskt problem, och denna distinktion är oerhört viktig för klinisk tolkning.
- **Att slå samman delvis och fullständigt slutförande till en kategori**: ett delvis slutfört frågeformulär har meningsfullt annorlunda datakvalitet än ett fullständigt slutfört; rapportera separat, och undersök var i frågeformulärsflödet patienter tenderar att avbryta.
- **Att rapportera slutförandegrad utan att rapportera risken för svarsbias**: en måttlig slutförandegrad bör föranleda en undersökning av om svarspersoner skiljer sig systematiskt (i symtomallvarlighet, ålder, digital litteracitet) från icke-svarspersoner, eftersom PROM-poäng beräknade endast från svarspersoner kan felrepresentera hela populationen.
- **Att använda ett icke-validerat eller hemmagjort frågeformulär**: slutförandegrad är meningslös som en datakvalitetssignal om själva instrumentet som slutförs inte har klinisk validerats för det tillstånd och den population som mäts.

## Källor

- International Consortium for Health Outcomes Measurement (ICHOM), vägledning om utveckling av standarduppsättningar och PROM-implementering
- U.S. Food and Drug Administration (FDA), vägledning om patientrapporterade utfallsmått i kliniska prövningar och regulatoriska inlämningar
- Kollegialt granskad litteratur om elektronisk PROM-implementering och slutförandegrad, exempelvis studier publicerade i Quality of Life Research och Journal of Medical Internet Research (JMIR)

Se även: [patientnöjdhetsindex (Net Promoter Score)](../patient-net-promoter-score/), ett relaterat men distinkt patientrapporterat mått som mäter tillfredsställelse snarare än kliniskt utfall.
