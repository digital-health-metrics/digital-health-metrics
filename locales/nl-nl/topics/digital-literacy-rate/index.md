# Digitaal Gezondheidsvaardigheidspercentage

Digitaal gezondheidsvaardigheidspercentage meet het aandeel van een patiëntenpopulatie dat in staat is om zelfstandig en succesvol veelvoorkomende taken te voltooien op een digitaal gezondheidsplatform — inloggen, een afspraak plannen, deelnemen aan een videobezoek, of een testresultaat lezen — zonder hulp van een andere persoon nodig te hebben. Het verschilt van, en moet altijd apart worden gemeten van, digitaal toegangspercentage: een patiënt kan een smartphone en breedbandverbinding hebben en toch niet in staat zijn om zelfstandig door een telezorgplatform te navigeren, en het samenvoegen van de twee maatstaven verbergt precies de populatie die deze maatstaf wil onthullen.

## Waarom het belangrijk is

Digitale toegang alleen garandeert niet dat een patiënt een digitale gezondheidsdienst effectief kan gebruiken: patiënten met lagere gezondheidsvaardigheden, beperkte ervaring met technologie in het algemeen, cognitieve of visuele beperkingen, of taalbarrières met de interface van het platform kunnen volledige technische toegang hebben en toch falen om een taak zelfstandig te voltooien, en deze kloof correleert systematisch met dezelfde demografische groepen die al andere gezondheidsverschillen tegenkomen. Het HIMSS Digital Health Equity Measurement Framework behandelt digitale vaardigheden precies om deze reden als een afzonderlijke pijler van toegang: het dichten van een toegangskloof zonder ook een vaardighedenkloof aan te pakken, kan een populatie achterlaten die technisch verbonden maar functioneel niet in staat is om te profiteren. Organisaties die taakvoltooiing en tijd-tot-voltooiing meten voor veelvoorkomende platformacties, gesegmenteerd naar taal en sociaaleconomische indicatoren, kunnen vaardighedenbarrières veel preciezer identificeren en ondersteuning gericht inzetten (vereenvoudigde interfaces, ondersteunde onboarding, inhoud in alternatieve taal) dan organisaties die vertrouwen op alleen toegangsmaatstaven of algehele tevredenheidsscores.

## Hoe het wordt berekend

```
Digitaal gezondheidsvaardigheidspercentage = patiënten die
                                             zelfstandig een
                                             vastgestelde taak
                                             voltooien zonder hulp
                                             / patiënten die die
                                             taak proberen × 100

Veelvoorkomende gemeten taken: accountaanmelding, afspraakplanning,
deelname aan een videobezoek, bekijken van een testresultaat,
invullen van een intakeformulier.

Rapporteer per taak, niet als een enkele gemengde score, aangezien
vaardigheden voor eenvoudige taken (inloggen) en complexe taken
(invullen van een meerstaps intakeformulier) aanzienlijk
verschillen en het mengen ervan verbergt waar de specifieke
barrière ligt.
```

## Uitgewerkt voorbeeld

Een zorgsysteem volgt deelname aan videobezoeken als een vastgestelde taak over 5.000 geplande telezorgafspraken in een maand. Hiervan nemen 4.100 patiënten succesvol deel zonder enige ondersteuningsoproep of technische hulp tijdens het bezoek (digitaal gezondheidsvaardigheidspercentage voor deze taak: 82%). Segmenteren naar primaire taal toont een percentage van 89% voor Engelstalige patiënten tegenover 61% voor patiënten wier primaire taal verschilt van de standaard interfacetaal van het platform — een kloof van 28 punten die onzichtbaar zou zijn als alleen het gemengde cijfer van 82% werd gerapporteerd, en een die direct wijst naar een specifieke, aanpakbare interventie (vertaalde interface en instructies) in plaats van een vaag algemeen vaardighedenprobleem.

## Databronnen en voorbehouden

Gegevens over taakvoltooiing worden meestal vastgelegd uit de eigen gebeurtenislogs van het platform (bereikte de patiënt het videobezoek, werd de afspraakplanningsstroom voltooid zonder afhaken), aangevuld met gegevens over ondersteuningsoproepen of helpdeskcontact om taken te identificeren die technisch "voltooid" werden alleen omdat de patiënt halverwege live hulp kreeg. Een taak die puur uit systeemlogs wordt geteld als "voltooid" kan verbergen dat een patiënt een telefoongesprek van een gezinslid of ondersteuningspersoneel nodig had om daar te komen — een werkelijk vaardigheid-onafhankelijke voltooiing moet apart worden gedefinieerd en gevolgd van een ondersteunde waar het platform de twee kan onderscheiden. Digitale vaardigheden correleren met, maar zijn analytisch verschillend van, gezondheidsvaardigheden en algemene geletterdheid; een gevalideerd instrument (in plaats van een informele aanname gebaseerd alleen op leeftijd of demografie) moet worden gebruikt waar een formele beoordeling vereist is.

## Valkuilen

- **Digitale vaardigheden verwarren met digitale toegang**: een patiënt met volledige technische toegang kan nog steeds de vaardigheden missen om deze effectief te gebruiken; dit zijn afzonderlijke maatstaven die afzonderlijke interventies vereisen, en mogen nooit worden gerapporteerd als één gecombineerd cijfer.
- **Ondersteunde voltooiingen tellen als niet-ondersteunde successen**: als een patiënt een taak alleen voltooit met een ondersteuningsoproep of de hulp van een gezinslid, is dat een vaardighedenkloof die het platform heeft overdekt, niet opgelost; onderscheid ondersteund van niet-ondersteund voltooien waar gegevens dit toelaten.
- **Een enkele gemengde taakvoltooiingsscore rapporteren**: vaardigheden voor een eenvoudige taak (inloggen) en een complexe (invullen van een gedetailleerd intakeformulier) verschillen aanzienlijk; rapporteer per taak om precies te identificeren waar de barrière ligt.
- **Aannemen dat leeftijd alleen digitale vaardigheden voorspelt**: hoewel leeftijd correleert met lagere digitale vaardigheden in aggregaat, zijn taalvaardigheid in de interfacetaal van het platform en algemene technologische vertrouwdheid vaak sterkere individuele voorspellers en moeten direct worden gemeten in plaats van afgeleid van leeftijd.

## Bronnen

- HIMSS, Digital Health Equity Measurement Framework (DHEMF)
- Office of the National Coordinator for Health Information Technology (ONC), onderzoek naar bruikbaarheid van gezondheidsinformatietechnologie en digitale gezondheidsvaardigheden
- Collegiaal getoetste literatuur over het meten en interveniëren van digitale gezondheidsvaardigheden, bijvoorbeeld studies gepubliceerd in het Journal of Medical Internet Research (JMIR)

Zie ook: [digitaal toegangspercentage](../digital-access-rate/), de voorwaardemaatstaf waarmee deze het vaakst, en het vaakst ten onrechte, wordt verward.
