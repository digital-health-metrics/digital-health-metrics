# Läkarutbrändhetsgrad

Läkarutbrändhetsgrad mäter andelen kliniker som rapporterar betydande utbrändhetssymtom – vanligtvis bedömt som emotionell utmattning, depersonalisation, eller en låg känsla av personlig prestation via ett validerat enkätinstrument – och, specifikt för digital hälsa, spåras tillsammans med mått på klinikerinriktad digital verktygsbörda som tid spenderad på pappersarbete eller dokumentation i elektroniska patientjournaler (EHR). Det existerar i ett ramverk för digitala hälsomått eftersom dåligt designad klinisk mjukvara är en väldokumenterad, mätbar bidragande faktor till utbrändhet, och en digital hälsoprodukts framgång bör aldrig bedömas enbart utifrån patientinriktade mått medan dess effekt på klinikerna som måste använda den ignoreras.

## Varför det är viktigt

Digitala hälsoverktyg introduceras ofta med det uttryckliga målet att minska klinikers administrativa börda, men ett dåligt designat arbetsflöde i den elektroniska patientjournalen, en överdriven volym kliniska larm med lågt värde (se åsidosättandegrad för kliniska varningar) eller ett klumpigt telemedicingränssnitt kan lika lätt öka utbrändhet som minska den – och ett verktyg som förbättrar ett patientinriktat engagemangsmått samtidigt som det tyst ökar klinikers dokumentationsbörda har inte levererat ett positivt nettoresultat för vårdsystemet som helhet. Utbrändhet är starkt kopplad i den kliniska litteraturen till medicinska fel, klinikeromsättning och minskad vårdkvalitet, så det fungerar som en ledande indikator på nedströms säkerhets- och arbetskraftshållbarhetsproblem, inte bara en trevlighet för arbetsplatstillfredsställelse. Varje digitalt hälsoprogram som påstår sig minska klinisk börda bör kunna visa detta påstående mot en uppmätt baslinje, snarare än att hävda det som en designintention.

## Hur den beräknas

```
Läkarutbrändhetsgrad = kliniker som poängsätter över det
                       validerade instrumentets
                       utbrändhetströskel / totalt antal
                       undersökta kliniker × 100

Vanliga validerade instrument: Maslach Burnout Inventory (MBI),
Professional Fulfillment Index, eller en enda
utbrändhetsscreeningfråga validerad mot ett fullständigare
instrument.

Rapportera tillsammans med en proxy för digital börda där
tillgängligt:
  EHR-systemtid per patientkontakt
  Dokumentationstid som sker utanför schemalagda kliniska timmar
  ("pyjamastid")
```

## Genomräknat exempel

Ett sjukhussystem undersöker 300 läkare med Maslach Burnout Inventory innan ett ambient kliniskt dokumentationsverktyg som är avsett att minska anteckningsskrivningstiden introduceras. Vid baslinjen poängsätter 135 läkare (45 %) över utbrändhetströskeln, och EHR-granskningsloggdata visar i genomsnitt 58 minuters dokumentationstid per läkare som sker utanför schemalagda kliniska timmar per dag. Sex månader efter verktygets utrullning finner en upprepad undersökning av samma läkare att 108 (36 %) ligger över utbrändhetströskeln, tillsammans med en minskning av dokumentationstid efter arbetstid till 34 minuter per dag. Den korrelerade rörelsen i både utbrändhetsgraden och den objektiva EHR-härledda proxyn stärker argumentet att verktyget bidrar till förbättringen, även om en formell före/efter-jämförelse fortfarande bör ta hänsyn till andra samtidiga arbetsbelastningsförändringar under samma period.

## Datakällor och förbehåll

Data från utbrändhetsenkäter kommer från ett validerat instrument som administreras på återkommande basis (årligen eller oftare), och svarsfrekvens spelar roll: en låg svarsfrekvens riskerar en icke-svarsbias, där de mest utbrända klinikerna (med minst kapacitet att slutföra en ytterligare enkät) systematiskt är underrepresenterade, vilket underskattar den faktiska graden. EHR-härledda proxyer för digital börda – systemtid, dokumentationstid efter arbetstid, antal klick per kontakt – är användbara som objektiva, kontinuerligt tillgängliga komplement till periodisk enkätdata, men bör valideras mot enkätrapporterad utbrändhet för en given organisation innan de behandlas som en tillförlitlig fristående utbrändhetsindikator, eftersom relationen mellan systemtid och faktisk utbrändhet kan variera beroende på specialitet och individuell arbetsstil.

## Fallgropar

- **Att enbart förlita sig på EHR-härledda proxyer**: systemtid och klickantal korrelerar med utbrändhet i aggregat men är inte samma sak som utbrändhet i sig, och kan vara missvisande för enskilda kliniker eller specialiteter med genuint olika dokumentationsbehov.
- **Låg enkätsvarsfrekvens som döljer den faktiska graden**: de kliniker som mest påverkas av utbrändhet är ofta minst sannolika att ha kapacitet att svara på en frivillig enkät, vilket snedvrider ett resultat med låg svarsfrekvens mot en artificiellt friskare framstående siffra.
- **Att tillskriva en utbrändhetsförändring till ett enda verktyg utan att beakta förvirrande faktorer**: utbrändhet påverkas av många samtidiga faktorer (bemanningsnivåer, patientvolym, organisationsförändring); en före/efter-jämförelse kring utrullningen av ett verktyg bör kontrollera för dessa där möjligt snarare än att anta en enda orsak.
- **Att behandla utbrändhet som enbart ett individuellt motståndskraftsproblem**: utbrändhetsforskning finner konsekvent att arbetsbelastning, systemdesign och organisatoriska faktorer är primära drivkrafter; att rama in det som enbart ett problem för den enskilda klinikern leder bort interventionen från de digitala verktyg och arbetsflöden som ofta är den faktiska grundorsaken.

## Källor

- Maslach Burnout Inventory (MBI), validerat enkätinstrument och poängsättningsvägledning
- American Medical Association (AMA), forskning om läkarutbrändhet och STEPS Forward-programmet för praxisförbättring
- Kollegialt granskad litteratur om EHR-användbarhet, dokumentationsbörda och klinikerutbrändhet, exempelvis studier publicerade i JAMIA och Annals of Internal Medicine

Se även: [åsidosättandegrad för kliniska varningar](../clinical-alert-override-rate/), där larmtrötthet är en av de mer specifika, mätbara bidragsgivarna till klinikerutbrändhet som digitala verktyg kan åtgärda direkt.
