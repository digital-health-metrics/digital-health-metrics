# Burn-outpercentage van Artsen

Burn-outpercentage van artsen meet het aandeel clinici dat significante burn-outsymptomen rapporteert — meestal beoordeeld als emotionele uitputting, depersonalisatie, of een laag gevoel van persoonlijke verwezenlijking via een gevalideerd enquête-instrument — en wordt, specifiek voor digitale gezondheid, gevolgd samen met maatstaven voor digitale instrumentbelasting gericht op clinici, zoals tijd besteed aan papierwerk of documentatie in het elektronisch patiëntendossier (EPD). Het bestaat in een kader van digitale gezondheidsmaatstaven omdat slecht ontworpen klinische software een goed gedocumenteerde, meetbare bijdragende factor is aan burn-out, en het succes van een digitaal gezondheidsinstrument mag nooit puur worden beoordeeld op basis van patiëntgerichte maatstaven terwijl het effect ervan op de clinici die het moeten bedienen wordt genegeerd.

## Waarom het belangrijk is

Digitale gezondheidsinstrumenten worden vaak geïntroduceerd met het expliciete doel om de administratieve last van clinici te verminderen, maar een slecht ontworpen workflow van het elektronisch patiëntendossier, een overmatig volume van klinische waarschuwingen met lage waarde (zie overschrijvingspercentage van klinische waarschuwingen), of een omslachtige telezorginterface kan burn-out net zo gemakkelijk verhogen als verlagen — en een instrument dat een patiëntgerichte betrokkenheidsmaatstaf verbetert terwijl het stilletjes de documentatielast van clinici verhoogt, heeft geen netto positief resultaat geleverd voor het zorgsysteem als geheel. Burn-out is in de klinische literatuur sterk verbonden met medische fouten, personeelsverloop van clinici, en verminderde zorgkwaliteit, dus het functioneert als een leidende indicator van stroomafwaartse veiligheids- en personeelsduurzaamheidsproblemen, niet slechts een werkplaatstevredenheidsgemak. Elk digitaal gezondheidsprogramma dat beweert klinische belasting te verminderen, zou deze claim moeten kunnen aantonen tegen een gemeten basislijn, in plaats van het te beweren als een ontwerpintentie.

## Hoe het wordt berekend

```
Burn-outpercentage van artsen = clinici die scoren boven de
                                burn-outdrempel van het gevalideerde
                                instrument / totaal aantal
                                ondervraagde clinici × 100

Veelvoorkomende gevalideerde instrumenten: Maslach Burnout
Inventory (MBI), de Professional Fulfillment Index, of een
enkelvoudige burn-outscreeningvraag gevalideerd tegen een
volledigere instrument.

Rapporteer samen met een digitale-belastingproxy waar beschikbaar:
  EPD-systeemtijd per patiëntencontact
  Documentatietijd die plaatsvindt buiten geplande klinische uren
  ("pyjama-tijd")
```

## Uitgewerkt voorbeeld

Een ziekenhuissysteem ondervraagt 300 artsen met de Maslach Burnout Inventory voordat een ambiant klinisch documentatie-instrument wordt geïntroduceerd dat bedoeld is om notitietijd te verminderen. Bij de basislijn scoren 135 artsen (45%) boven de burn-outdrempel, en EPD-auditloggegevens tonen een gemiddelde van 58 minuten documentatietijd per arts per dag die buiten geplande klinische uren plaatsvindt. Zes maanden na de uitrol van het instrument vindt een herhaalde enquête van dezelfde artsen 108 (36%) boven de burn-outdrempel, samen met een daling van documentatietijd buiten kantooruren naar 34 minuten per dag. De gecorreleerde beweging in zowel het burn-outpercentage als de objectieve EPD-afgeleide proxy versterkt het argument dat het instrument bijdraagt aan de verbetering, hoewel een formele voor/na-vergelijking nog steeds rekening zou moeten houden met andere gelijktijdige werklastveranderingen gedurende dezelfde periode.

## Databronnen en voorbehouden

Burn-outenquêtegegevens komen van een gevalideerd instrument dat terugkerend wordt toegediend (jaarlijks of vaker), en responspercentage is belangrijk: een laag responspercentage loopt het risico op non-responsvertekening, waarbij de meest uitgebrande clinici (met de minste capaciteit om een extra enquête te voltooien) systematisch ondervertegenwoordigd zijn, wat het werkelijke percentage onderschat. EPD-afgeleide proxies voor digitale belasting — systeemtijd, documentatietijd buiten kantooruren, aantal klikken per contact — zijn nuttig als objectieve, continu beschikbare aanvullingen op periodieke enquêtegegevens, maar moeten worden gevalideerd tegen enquêtegerapporteerde burn-out voor een bepaalde organisatie voordat ze worden behandeld als een betrouwbare op zichzelf staande burn-outindicator, aangezien de relatie tussen systeemtijd en werkelijke burn-out kan variëren per specialisme en individuele werkstijl.

## Valkuilen

- **Uitsluitend vertrouwen op EPD-afgeleide proxies**: systeemtijd en klikaantal correleren in aggregaat met burn-out maar zijn niet hetzelfde als burn-out zelf, en kunnen misleidend zijn voor individuele clinici of specialismen met werkelijk verschillende documentatiebehoeften.
- **Laag enquêteresponspercentage verbergt het werkelijke percentage**: de clinici die het meest door burn-out worden getroffen, hebben vaak de minste capaciteit om te reageren op een vrijwillige enquête, wat een resultaat met laag responspercentage vertekent naar een kunstmatig gezonder ogend cijfer.
- **Een burn-outverandering toeschrijven aan één instrument zonder rekening te houden met verstorende factoren**: burn-out wordt beïnvloed door vele gelijktijdige factoren (personeelsbezetting, patiëntvolume, organisatieverandering); een voor/na-vergelijking rond de uitrol van één instrument zou hiervoor moeten controleren waar mogelijk in plaats van een enkele oorzaak aan te nemen.
- **Burn-out puur behandelen als een individueel veerkrachtprobleem**: burn-outonderzoek vindt consistent dat werklast, systeemontwerp, en organisatorische factoren primaire drijfveren zijn; het puur framen als een probleem van de individuele clinicus leidt interventie weg van de digitale instrumenten en workflows die vaak de werkelijke hoofdoorzaak zijn.

## Bronnen

- Maslach Burnout Inventory (MBI), gevalideerd enquête-instrument en scoringsrichtlijnen
- American Medical Association (AMA), onderzoek naar burn-out van artsen en het STEPS Forward praktijkverbeteringsprogramma
- Collegiaal getoetste literatuur over EPD-bruikbaarheid, documentatielast, en burn-out van clinici, bijvoorbeeld studies gepubliceerd in JAMIA en de Annals of Internal Medicine

Zie ook: [overrulepercentage van klinische meldingen](../clinical-alert-override-rate/), waarbij meldingsmoeheid een van de meer specifieke, meetbare bijdragers is aan burn-out van clinici die digitale instrumenten direct kunnen aanpakken.
