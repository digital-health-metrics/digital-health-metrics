# Verklig kundanskaffningskostnad

Verklig kundanskaffningskostnad (verklig CAC) är den fullt belastade kostnaden för att anskaffa en ny betalande kund eller inskriven patient, inklusive inte bara betald annonsering utan varje annan kostnad som materiellt bidrog till den anskaffningen: byrå- och kreativavgifter, marknadsföringsteknik- och analysinfrastruktur, och – specifikt för digital hälsa – den kliniska eller operativa arbetskostnaden för intag, behörighetsverifiering och onboarding. Det existerar som ett distinkt mått eftersom annonsplattformsrapporterade anskaffningskostnadssiffror rutinmässigt och avsevärt underskattar organisationens faktiska kostnad per anskaffad kund.

## Varför det är viktigt

Digitala hälsoorganisationer som hanterar tillväxt med endast plattformsrapporterade kostnad-per-anskaffning-siffror fattar rutinmässigt resursallokeringsbeslut baserade på siffror som utelämnar 30-50 % av den verkliga anskaffningskostnaden, eftersom dessa plattformssiffror endast fångar mediautgifter och exkluderar byråavgifter, marknadsföringsteknikslicensiering, och – avgörande för sjukvård – det arbetsintensiva intags- och behörighetsverifieringsarbete som ett kliniskt eller operativt team utför för varje ny patient innan de kan räknas som anskaffade. Detta gap betyder mer inom digital hälsa än inom de flesta andra sektorer just för att kliniskt intagsarbete är dyrt och obligatoriskt, till skillnad från e-handel, där en "försäljning" i princip inte kräver något jämförbart back office-arbete. Ett team som optimerar marknadsföringsutgifter mot en artificiellt låg CAC-siffra kommer systematiskt att överinvestera i kanaler som ser billiga ut på en plattformspanel men är dyra när den verkliga CAC väl beräknas.

## Hur den beräknas

```
Verklig CAC = (betald medieutgift + byrå- och kreativavgifter +
              marknadsföringsteknik- och analyskostnader +
              klinisk/operativ intagsarbetskostnad) / nya kunder
              eller patienter anskaffade under perioden

Klinisk/operativ intagsarbetskostnad bör uppskattas från belastad
arbetskostnad (lön, förmåner, overhead) × genomsnittliga timmar
spenderade per anskaffad patient på intag, behörighetsverifiering
och onboarding.
```

## Genomräknat exempel

Ett digitalt hälsoföretag anskaffar 500 nya patienter under en månad. Annonsplattformspaneler rapporterar en sammanslagen kostnad-per-anskaffning på 120 USD, baserat på 60 000 USD i betald medieutgift. Att lägga till byråavgifter på 9 000 USD, marknadsföringsteknikkostnader på 6 000 USD, och en uppskattad intagsarbetskostnad på 45 minuter per patient till en fullt belastad personalkostnad på 40 USD/timme (500 × 0,75 × 40 USD = 15 000 USD) bringar den totala anskaffningskostnaden till 60 000 USD + 9 000 USD + 6 000 USD + 15 000 USD = 90 000 USD. Verklig CAC är 90 000 USD / 500 = 180 USD – 50 % högre än de 120 USD som annonsplattformen ensam rapporterade, och siffran som faktiskt bör informera kanalbudgetallokering och enhetsekonomiska beslut.

## Datakällor och förbehåll

Betald medieutgift och plattformsrapporterad kostnad-per-anskaffning kommer direkt från annonsplattformarna själva (sök, sociala medier, programmatisk); byråavgifter och marknadsföringsteknikkostnader kommer från ekonomi- eller leverantörsreskontraposter; intagsarbetskostnad är den svåraste komponenten att källa exakt och kräver vanligtvis antingen en tid-och-rörelsestudie eller en rimlig uppskattning överenskommen med operativ ledning, eftersom de flesta organisationer inte spårar personaltid per anskaffning naturligt. Verklig CAC bör beräknas per anskaffningskanal där volymen tillåter det, eftersom intagsarbetskostnaden per patient ofta är liknande mellan kanaler medan mediakostnaden varierar enormt, vilket innebär att gapet mellan plattformsrapporterad och verklig CAC är proportionellt störst för de billigast framstående kanalerna.

## Fallgropar

- **Att enbart förlita sig på annonsplattformspaneler**: plattformsrapporterad kostnad-per-anskaffning utesluter strukturellt byråavgifter, marknadsföringsteknikkostnader och intagsarbete, och är inte en ersättning för en verklig CAC-beräkning.
- **Att utelämna klinisk eller operativ intagsarbete**: detta är konsekvent den vanligast missade kostnadskomponenten specifikt inom digital hälsa, och ofta den enskilt största bidragsgivaren till gapet mellan plattformsrapporterad kostnad och verklig CAC.
- **Att genomsnittsberäkna verklig CAC över alla kanaler**: en sammanslagen verklig CAC-siffra kan dölja att en kanal är dramatiskt dyrare när väl belastade kostnader inkluderas, även om den framstod som billigast på annonsplattformen ensam.
- **Att inte uppdatera arbetskostnadsuppskattningar när intagsprocesser förändras**: en omdesign av intagsprocessen (till exempel att automatisera behörighetsverifiering) kan materiellt förändra verklig CAC, och en föråldrad arbetsuppskattning kommer att felaktigt ange den aktuella siffran.

## Källor

- Association of National Advertisers (ANA), vägledning om mätning av marknadsföringskostnader och mediatransparens
- Kollegialt granskad och branschlitteratur om enhetsekonomi inom digital hälsa och go-to-market-kostnadsstrukturer, exempelvis analyser publicerade av Rock Health och liknande organisationer för forskning inom digital hälsa
- Healthcare Financial Management Association (HFMA), vägledning om fullt belastad kostnadsredovisning inom sjukvårdsverksamhet

Se även: [LTV-till-CAC-kvot](../ltv-till-cac-kvot/), för vilken verklig CAC är en av de två indata.
