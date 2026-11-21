# Biometrisch Verbeteringspercentage

Het biometrisch verbeteringspercentage is het aandeel patiënten dat is ingeschreven in een digitaal gezondheidsprogramma en een klinisch betekenisvolle verbetering bereikt in een gevolgde biometrische waarde — meestal geglyceerd hemoglobine (HbA1c) bij diabetes- en cardiometabole programma's, of body mass index (BMI) bij gewichtsbeheersingsprogramma's — binnen een vastgestelde inschrijvingsperiode. Het is de uitkomstmaat die uiteindelijk de klinische claims van een digitaal gezondheidsproduct rechtvaardigt: betrokkenheids- en adoptiecijfers beschrijven hoe een product wordt gebruikt, maar biometrische verbetering komt dichter bij bewijs dat het daadwerkelijk werkt.

## Waarom het belangrijk is

Digitale gezondheidsprogramma's worden vaak verkocht en aanbesteed op basis van de belofte van verbeterde gezondheidsuitkomsten, en het biometrisch verbeteringspercentage is de meest directe, kwantificeerbare manier om die belofte te toetsen aan een specifieke, klinisch erkende drempel in plaats van een vage claim van "betere gezondheid". Zorgverzekeraars, werkgevers en zorgsystemen koppelen vergoeding of contractverlenging in toenemende mate aan aangetoonde biometrische verandering, dus een programma dat dit percentage niet geloofwaardig kan rapporteren, bevindt zich zowel commercieel als klinisch in het nadeel. De maatstaf is ook een disciplinecontrole op programmaontwerp: het is veel eenvoudiger om betrokkenheid te rapporteren (inloggen, verzonden berichten) dan uitkomsten, en een team zou achterdochtig moeten zijn jegens elk programma dat het eerste enthousiast rapporteert terwijl het vaag blijft over het laatste.

## Hoe het wordt berekend

```
Biometrisch verbeteringspercentage = patiënten die een vastgestelde
                                     klinisch betekenisvolle
                                     verbetering bereiken / patiënten
                                     met een geldige
                                     uitgangsmeting en
                                     vervolgmeting × 100

Veelvoorkomende klinisch betekenisvolle drempels:
  HbA1c  — een afname van ≥ 0,5 procentpunt, of het bereiken van
           een vastgesteld doel (bijv. < 7,0%) vanaf een
           uitgangswaarde buiten het bereik
  BMI    — een afname van ≥ 5% van het uitgangsgewicht, gehandhaafd
           tot het vervolgmeetmoment

Rapporteer afzonderlijk voor elke gevolgde biometrische waarde; meng
nooit HbA1c- en BMI-verbetering tot één gecombineerd
"verbeteringspercentage".
```

## Uitgewerkt voorbeeld

Een cardiometabool digitaal gezondheidsprogramma schrijft 800 patiënten in met een uitgangs-HbA1c buiten het bereik. Hiervan hebben 620 zowel een geldige uitgangsmeting als een vervolgmeting na 6 maanden (180 gaan verloren voor follow-up en worden uitgesloten van de noemer, niet geteld als mislukkingen). Van de 620 met gepaarde metingen bereiken 340 een afname van ten minste 0,5 procentpunt. Het biometrisch verbeteringspercentage is 340 / 620 × 100 = 55%. Dit rapporteren ten opzichte van het volledige aantal van 800 ingeschrevenen (340 / 800 = 42,5%) zou verlies aan follow-up verwarren met behandelfalen, waardoor het percentage voor patiënten die de meting daadwerkelijk voltooiden wordt onderschat.

## Databronnen en voorbehouden

Uitgangs- en vervolgwaarden van biometrische gegevens komen doorgaans van een verbonden apparaat (een Bluetooth-glucosemeter of slimme weegschaal), een laboratoriumresultaat geïmporteerd uit het elektronisch patiëntendossier, of een door de patiënt zelf gerapporteerde waarde — en deze drie bronnen hebben zeer verschillende betrouwbaarheid, dus de bron moet samen met het percentage worden gerapporteerd. Verlies aan follow-up is zelden willekeurig: patiënten die afhaken van een programma zijn vaak ook degenen die het minst waarschijnlijk zijn verbeterd, dus een hoog verbeteringspercentage berekend alleen bij patiënten die de follow-up hebben voltooid, kan het werkelijke effect van het programma op populatieniveau overschatten. Seizoensgebonden effecten en regressie naar het gemiddelde zijn reëel voor zowel HbA1c als gewicht, dus een programma moet waar mogelijk vergelijken met een gelijktijdige of historische controlegroep in plaats van elke verbetering te behandelen als bewijs van het programma-effect.

## Valkuilen

- **Uitsluiten, in plaats van rapporteren, van verlies aan follow-up**: patiënten zonder vervolgmeting stilletjes uit de noemer verwijderen kan het schijnbare verbeteringspercentage aanzienlijk opblazen; rapporteer altijd het voltooiingspercentage voor vervolgmeting samen met het verbeteringspercentage zelf.
- **Zelfgerapporteerde en apparaatgebaseerde metingen mengen zonder labeling**: een zelfgerapporteerd gewicht is systematisch minder betrouwbaar dan een aflezing van een verbonden slimme weegschaal, en het mengen van de twee bronnen verhult hoeveel van een schijnbare verbetering meetruis is.
- **Geen controle of contrafeitelijke vergelijking**: veel chronische biometrische waarden fluctueren of regresseren vanzelf naar het gemiddelde; een eenarmig verbeteringspercentage zonder vergelijkingsgroep is suggestief, geen doorslaggevend bewijs van programma-effect.
- **Een bescheiden gemiddelde verschuiving behandelen als bewijs van brede verbetering**: een kleine gemiddelde verbetering op populatieniveau kan worden veroorzaakt door een paar sterke reagerende patiënten terwijl de meeste patiënten geen verandering zien; rapporteer de verdeling (bijv. het aandeel dat de klinisch betekenisvolle drempel overschrijdt), niet alleen de gemiddelde verschuiving.

## Bronnen

- American Diabetes Association (ADA), Standards of Care in Diabetes, richtlijnen over HbA1c-doelen en klinisch betekenisvolle verandering
- Centers for Disease Control and Prevention (CDC), Division of Diabetes Translation, richtlijnen voor programma-evaluatie
- Collegiaal getoetste literatuur over uitkomsten van digitale diabetes- en gewichtsbeheersingsprogramma's, bijvoorbeeld studies gepubliceerd in npj Digital Medicine en Diabetes Care

Zie ook: [medicatietrouwpercentage](../medicatietrouwpercentage/), een veelvoorkomende stroomopwaartse drijfveer van biometrische verbetering in programma's voor chronische aandoeningen.
