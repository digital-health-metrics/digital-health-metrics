# Ziekenhuisheropnamepercentage

Het ziekenhuisheropnamepercentage is het aandeel ontslagen patiënten dat ongepland wordt heropgenomen in het ziekenhuis binnen een vastgesteld venster na ontslag — meestal 30 dagen. Voor digitale gezondheid is dit de maatstaf die het meest direct is gekoppeld aan de economie van zorgverzekeraars en waardegedreven zorgcontracten: een programma voor telemonitoring, follow-up na ontslag, of digitale zorgovergang dat geen geloofwaardig effect op heropnames kan aantonen, zal waarschijnlijk geen voortgezette vergoedingssteun verdienen, hoe goed de betrokkenheidscijfers er ook uitzien.

## Waarom het belangrijk is

Een ongeplande heropname is duur, verstorend voor de patiënt, en in veel zorgsystemen nu direct bestraft: regelingen zoals het Amerikaanse Hospital Readmissions Reduction Program verlagen de betaling aan ziekenhuizen met hogere dan verwachte heropnamepercentages voor specifieke aandoeningen, wat de reden is waarom ziekenhuizen actief digitale programma's voor na ontslag en telemonitoring aanbesteden die gericht zijn op het verminderen ervan. Een betekenisvol aandeel van heropnames wordt beschouwd als mogelijk te voorkomen — veroorzaakt door onvoldoende ontslaginstructies, gemiste follow-up-afspraken, misverstanden over medicatie, of onbehandelde symptoomverslechtering die een goed ontworpen digitaal contactpunt eerder zou kunnen opvangen — precies het gat waar digitale overgangszorginstrumenten zich op richten. Het heropnamepercentage moet altijd samen met de case mix worden gelezen: een programma dat een zieker, complexer populatie bedient, zal structureel een hoger basispercentage hebben dan een programma dat een gezondere populatie bedient, ongeacht de programmakwaliteit.

## Hoe het wordt berekend

```
30-dagen heropnamepercentage = ongeplande heropnames binnen 30
                               dagen na ontslag / totaal aantal
                               index-ontslagen × 100

Sluit uit van de teller: geplande heropnames (bijv. een
schema-gestuurde vervolgprocedure), en overplaatsingen die een
voortzetting zijn van dezelfde zorgepisode in plaats van een
nieuwe opname.

Pas waar mogelijk risicocorrectie toe, met een geaccepteerde
case mix- of comorbiditeitsindex, voordat percentages worden
vergeleken tussen verschillende patiëntpopulaties of perioden.
```

## Uitgewerkt voorbeeld

Een ziekenhuis ontslaat in een kwartaal 1.200 patiënten met hartfalen. Hiervan worden er 210 heropgenomen binnen 30 dagen, waarvan 15 geplande heropnames zijn voor een schema-gestuurde procedure en worden uitgesloten. Het ongeplande 30-dagen heropnamepercentage is (210 − 15) / 1.200 × 100 = 16,25%. Een telemonitoringprogramma wordt geïntroduceerd voor een subset van 400 van deze patiënten (geselecteerd op klinisch risico, niet willekeurig), en hun ongeplande heropnamepercentage is 14%, vergeleken met 18% voor de 800 niet-ingeschreven patiënten. Omdat inschrijving was gebaseerd op klinisch risico in plaats van willekeurige toewijzing, is dit verschil suggestief in plaats van doorslaggevend bewijs van het programma-effect, en moet het worden geïnterpreteerd samen met een risicocorrectieanalyse in plaats van op zijn woord te worden aangenomen.

## Databronnen en voorbehouden

Heropnamegegevens worden doorgaans getrokken uit de eigen opname-ontslag-overplaatsingsfeed (ADT) van het ziekenhuis voor heropnames naar dezelfde instelling, maar een patiënt die wordt heropgenomen in een ander ziekenhuis zal helemaal niet in die feed verschijnen, dus het volgen van heropnames bij één ziekenhuis onderschat systematisch de werkelijke heropnamepercentages, tenzij aangevuld met regionale gegevens voor uitwisseling van gezondheidsinformatie, declaratiegegevens van zorgverzekeraars, of staatsbrede databases voor alle betalers. Toeschrijving aan een digitaal programma vereist zorgvuldigheid: patiënten die zich vrijwillig aanmelden voor een telemonitoringprogramma zijn zelden een willekeurige steekproef van de ontslagen populatie, dus een naïeve vergelijking van heropnamepercentages tussen ingeschrevenen en niet-ingeschrevenen zal de neiging hebben verward te worden door precies de selectie-effecten die sommige patiënten van meet af aan waarschijnlijker maakten om zich aan te melden.

## Valkuilen

- **Ruwe, niet-risicogecorrigeerde percentages vergelijken tussen populaties**: een programma dat een zieker populatie bedient, zal een hoger ruw heropnamepercentage vertonen dan een programma dat een gezondere populatie bedient, zelfs als het programma zelf effectiever is; pas altijd risicocorrectie toe voordat u vergelijkt.
- **Heropnames bij andere instellingen onderschatten**: alleen vertrouwen op de eigen ADT-gegevens van één ziekenhuis zal heropnames elders missen, waardoor het werkelijke percentage wordt onderschat, met name in gebieden met meerdere concurrerende ziekenhuissystemen.
- **Selectiebias bij vrijwillige programma-inschrijving**: patiënten die ervoor kiezen zich aan te melden voor een digitaal follow-upprogramma verschillen vaak systematisch (in gezondheidsvaardigheden, sociale steun, of motivatie) van degenen die dat niet doen, wat elke naïeve voor/na- of ingeschreven/niet-ingeschreven-vergelijking verstoort.
- **Elke terugkeer naar dezelfde instelling tellen als een heropname**: een geplande, schema-gestuurde heropname (bijvoorbeeld een geplande tweede-fase-procedure) is geen signaal van een mislukt ontslag en moet worden uitgesloten van de teller, niet vermengd met werkelijk ongeplande terugkeer.

## Bronnen

- Centers for Medicare & Medicaid Services (CMS), specificaties van het Hospital Readmissions Reduction Program en de Hospital-Wide Readmission-maatstaf
- Institute for Healthcare Improvement (IHI), richtlijnen over het verminderen van vermijdbare heropnames
- Collegiaal getoetste literatuur over digitale telemonitoring- en overgangszorginterventies voor het verminderen van heropnames, bijvoorbeeld studies gepubliceerd in JAMA Network Open en npj Digital Medicine

Zie ook: [nauwkeurigheid van triagedoorverwijzing](../triage-routing-accuracy/), aangezien ongepaste initiële doorverwijzing zelf een stroomafwaartse drijfveer kan zijn van vermijdbare opnames.
