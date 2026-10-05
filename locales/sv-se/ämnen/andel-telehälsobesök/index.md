# Andel Telehälsobesök

Andelen telehälsobesök är den del av en verksamhets totala kontakter som levereras på distans, via video eller telefon, snarare än fysiskt. Det är ett mått på fördelningen av leveranskanaler, inte ett aktivitetsmått: det visar hur vård levereras, vilket spelar roll för kapacitetsplanering, tillgänglighet och klinisk lämplighet, helt oberoende av hur mycket vård som levereras totalt sett.

## Varför det spelar roll

Andelen vård som levereras på distans förändrade driftsmodellen för många verksamheter efter den snabba expansionen av virtuella konsultationer under covid-19-pandemin, och organisationer behöver ett stabilt sätt att övervaka om denna förändring håller i sig, gradvis återgår till förpandemiska normer, eller aktivt styrs av policy. Telehälsa är inte ett enhetligt substitut för ett fysiskt besök: lämpligheten varierar beroende på specialitet, typ av konsultation (en läkemedelsgenomgång fungerar mycket annorlunda än en fysisk undersökning) och patientens preferens, så den "rätta" andelen är en klinisk och organisatorisk bedömning, inte ett mål att maximera. Finansiärer och tillsynsmyndigheter använder också denna andel, tillsammans med resultat- och säkerhetsmått, för att besluta om ersättningspolicy och för att kontrollera att distansvård inte helt enkelt ersätter fall som behöver ses fysiskt.

## Hur det beräknas

```
Telehälsoandel = telehälsokontakter / (telehälsokontakter + fysiska kontakter) × 100

Rapportera separat per modalitet där det är möjligt:
  Videoandel    = videokontakter / totala kontakter × 100
  Telefonandel  = enbart telefonkontakter / totala kontakter × 100

Nämnaren bör endast räkna avslutade kontakter (se vanliga misstag),
för en definierad verksamhet, specialitet och tidsperiod.
```

## Löst exempel

En kommunal psykiatrisk verksamhet registrerar 4 000 avslutade öppenvårdskontakter under ett kvartal: 1 200 fysiska, 1 600 via video och 1 200 via telefon. Telehälsoandelen är (1 600 + 1 200) / 4 000 × 100 = 70 %, med en videoandel på 40 % och en andel enbart telefon på 30 %. Att bara rapportera den kombinerade siffran 70 % skulle dölja att en stor del av "telehälsan" här endast är ljud, vilket vanligtvis medför en annan klinisk riskprofil och patientupplevelse.

## Datakällor och förbehåll

Kontakttypen registreras vanligtvis antingen som ett strukturerat fält i den elektroniska patientjournalen (besökstyp eller plats) eller härleds från faktureringskoder, till exempel en kod för vårdplats eller en telehälsomodifierare på en fordran. Kodningspraxis varierar avsevärt mellan organisationer, och till och med mellan enskilda kliniker inom samma organisation, så en jämförelse av andelar mellan olika enheter bör först bekräfta att "telehälsa" kodas på samma sätt överallt. Ett besök som börjar via video men övergår till telefon på grund av ett tekniskt problem bör kodas konsekvent (vanligtvis enligt den modalitet som stod för större delen av det kliniska innehållet), och den regeln bör dokumenteras snarare än överlåtas till individuell bedömning.

## Vanliga misstag

- **Att räkna försökta i stället för avslutade besök**: ett telehälsobesök som misslyckas med att ansluta och bokas om bör inte blåsa upp telehälsonämnaren två gånger.
- **Att behandla video och telefon som utbytbara**: de har olika kliniska och jämlikhetsrelaterade implikationer (telefon utesluter visuell bedömning men är mer tillgängligt för patienter utan smartphone, tillförlitlig data eller ett privat utrymme för video); rapportera dem alltid separat när det är möjligt.
- **Att ignorera sambandet med uteblivande**: uteblivandebeteende skiljer sig ofta åt beroende på modalitet; se [uteblivandegrad för besök](../uteblivandegrad-för-besök/) innan du drar slutsatser om "förbättrad tillgänglighet" enbart utifrån en stigande telehälsoandel.
- **Att behandla en hög andel som i sig positiv**: för vissa tillstånd och konsultationstyper är en lämplig telehälsoandel låg av kliniska designskäl, inte på grund av bristande digital mognad.

## Källor

- Centers for Medicare & Medicaid Services (CMS), data om telehälsoanvändning inom Medicare och policypublikationer
- NHS England, aktivitetsstatistik för öppenvårds- och kommunala verksamheter, inklusive fördelning av virtuell/distans närvaro
- Kollegialt granskad litteratur om trender inom telehälsoanvändning och modalitetsspecifika resultat
