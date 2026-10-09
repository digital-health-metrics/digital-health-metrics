# Patientnöjdhetsindex (Net Promoter Score)

Patientnöjdhetsindex (Net Promoter Score, NPS) mäter patienters vilja att rekommendera en digital hälsoprodukt eller telemedicintjänst till andra, baserat på en enda enkätfråga – "Hur sannolikt är det att du skulle rekommendera denna tjänst till en vän eller kollega?" – bedömd från 0 till 10. Svarspersoner som ger 9-10 är "promotorer", 7-8 är "passiva", och 0-6 är "kritiker"; NPS är procentandelen promotorer minus procentandelen kritiker. Det är det mest använda, och mest kritiserade, patientnöjdhetsmåttet inom digital hälsa, värdesatt för sin enkelhet men begränsat i vad det ensamt kan diagnostisera.

## Varför det är viktigt

NPS ger digitala hälsoteam en enkel, standardiserad, jämförbar nöjdhetssignal som är billig att samla in och lätt för icke-specialistintressenter (chefer, styrelser, upphandlare) att tolka med en blick, vilket är varför det förblir populärt trots väldokumenterade metodologiska begränsningar. Specifikt för telemedicin- och digitala ingångsdörrsprodukter är NPS ofta den ledande indikatorn på om patienter kommer att fortsätta välja den digitala kanalen framför ett personligt alternativ när båda är tillgängliga, vilket har direkta konsekvenser för kanalmix-planering och kapacitet. NPS är dock en enda, övergripande sammanfattningssiffra: ett sjunkande NPS berättar för ett team att något är fel men inte vad, så det bör alltid parkopplas med fritextfeedback eller ett mer detaljerat användbarhetsinstrument för att vara handlingsbart snarare än bara en poängsiffra.

## Hur det beräknas

```
NPS = % promotorer (poäng 9-10) − % kritiker (poäng 0-6)

Resultatet är en siffra från −100 till +100, inte en procentsats,
trots att den härleds från procentsatser — lägg aldrig till ett
"%"-tecken till en NPS-siffra.

Rapportera tillsammans med:
  svarsfrekvens (% av tillfrågade patienter som svarade)
  urvalsstorlek
  den exakta frågeformuleringen som användes
```

## Genomräknat exempel

En telemedicinplattform tillfrågar 1 000 patienter efter en videokonsultation och får 400 svar (svarsfrekvens 40 %). Av dessa 400 svarspersoner ger 220 poäng 9-10 (promotorer, 55 %), 100 ger poäng 7-8 (passiva, 25 %), och 80 ger poäng 0-6 (kritiker, 20 %). NPS är 55 − 20 = 35. Denna siffra betyder bara något i sammanhang: ett NPS på 35 kan vara ett starkt resultat jämfört med den bredare telemedicinbranschen, eller en oroande nedgång jämfört med samma plattforms egen poäng på 48 föregående kvartal – NPS är mycket mer användbart som en trend över tid för en produkt än som ett absolut engångsriktmärke mot en annan.

## Datakällor och förbehåll

NPS samlas in genom en enkät efter interaktion, vanligtvis utlöst omedelbart efter ett videobesök, en appsession eller en vårdepisod, och svarsfrekvensen är enormt viktig: en låg svarsfrekvens (långt under de ~40 % som ses i det genomräknade exemplet) riskerar en icke-svarsbias, där endast starkt nöjda eller starkt missnöjda patienter besvärar sig med att svara, vilket drar poängen mot extremerna och bort från den sanna populationskänslan. Att jämföra NPS mellan organisationer eller till och med mellan en enskild organisations olika kanaler (till exempel telemedicin kontra personligt) är endast giltigt om frågeformulering, tidpunkt och enkätpopulation verkligen är jämförbara; små formuleringsändringar är kända för att mätbart skifta poäng. NPS bör behandlas som ett utfall att förklara, inte ett självändamål – fritextkommentarerna som vanligtvis åtföljer en NPS-enkät är vanligtvis mer handlingsbara än poängen.

## Fallgropar

- **Att jämföra NPS-siffror insamlade med olika frågeformulering eller tidpunkt**: även mindre skillnader i enkätdesign kan skifta poäng med flera punkter, vilket gör NPS-riktmärkning mellan organisationer mycket mindre tillförlitlig än den framstår.
- **Att ignorera svarsfrekvens**: ett rubrik-NPS beräknat från en svarsfrekvens på 10 % är mycket mindre pålitligt än ett beräknat från en svarsfrekvens på 60 %, eftersom låga svarsfrekvenser är benägna till icke-svarsbias mot de mest extrema åsikterna.
- **Att behandla NPS som ett diagnostiskt verktyg snarare än ett sammanfattningsmått**: ett fallande NPS säger att något är fel men säger aldrig vad; det bör alltid parkopplas med kvalitativ feedback eller ett mer detaljerat tillfredsställelse- eller användbarhetsinstrument för att identifiera orsaken.
- **Att jaga NPS som ett självändamål**: att snävt optimera för NPS-siffran (till exempel genom att endast tillfråga patienter efter ovanligt positiva interaktioner) kan förbättra den rapporterade poängen samtidigt som den underliggande patientupplevelsen inte blir bättre, eller till och med aktivt sämre.

## Källor

- Bain & Company, ursprunglig Net Promoter System-metodik och riktmärkningsvägledning
- Agency for Healthcare Research and Quality (AHRQ), CAHPS (Consumer Assessment of Healthcare Providers and Systems) patientupplevelseenkätprogram, som ett kompletterande, mer detaljerat alternativ
- Kollegialt granskad litteratur om användning och begränsningar av Net Promoter Score i vårdmiljöer, exempelvis studier publicerade i Journal of Medical Internet Research (JMIR)

Se även: [användarretentionsgrad](../användarretentionsgrad/), eftersom patientrapporterad tillfredsställelse och faktisk fortsatt användning av en produkt ofta divergerar och är värda att spåra som separata signaler.
