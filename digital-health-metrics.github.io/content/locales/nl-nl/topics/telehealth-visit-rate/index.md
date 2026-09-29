# Percentage Telezorgconsulten

Het percentage telezorgconsulten is het aandeel van het totale aantal contacten van een dienst dat op afstand wordt geleverd, via video of telefoon, in plaats van persoonlijk. Het is een metriek voor de verdeling van leveringskanalen, geen activiteitsmetriek: het laat zien hoe zorg wordt geleverd, wat van belang is voor capaciteitsplanning, toegankelijkheid en klinische geschiktheid, volledig los van hoeveel zorg er in totaal wordt geleverd.

## Waarom dit belangrijk is

Het aandeel zorg dat op afstand wordt geleverd, heeft het operationele model van veel diensten veranderd na de snelle uitbreiding van virtuele consulten tijdens de covid-19-pandemie, en organisaties hebben een stabiele manier nodig om te monitoren of deze verschuiving standhoudt, geleidelijk terugkeert naar de normen van vóór de pandemie, of actief wordt gestuurd door beleid. Telezorg is geen uniforme vervanging voor een persoonlijk bezoek: de geschiktheid varieert per specialisme, per type consult (een medicatiebeoordeling verloopt heel anders dan een lichamelijk onderzoek) en per voorkeur van de patiënt, dus het "juiste" percentage is een klinisch en organisatorisch oordeel, geen doel om te maximaliseren. Financiers en toezichthouders gebruiken dit percentage ook, samen met uitkomst- en veiligheidsmaatstaven, om terugbetalingsbeleid te bepalen en om te controleren dat zorg op afstand niet simpelweg wordt ingezet voor gevallen die persoonlijk gezien moeten worden.

## Hoe het wordt berekend

```
Telezorgpercentage = telezorgcontacten / (telezorgcontacten + persoonlijke contacten) × 100

Rapporteer waar mogelijk apart per modaliteit:
  Videopercentage   = videocontacten / totale contacten × 100
  Telefoonpercentage = alleen-telefonische contacten / totale contacten × 100

De noemer moet alleen voltooide contacten tellen (zie veelgemaakte
fouten), voor een gedefinieerde dienst, specialisme en periode.
```

## Uitgewerkt voorbeeld

Een ambulante geestelijke gezondheidsdienst registreert in een kwartaal 4.000 voltooide poliklinische contacten: 1.200 persoonlijk, 1.600 via video en 1.200 via telefoon. Het telezorgpercentage is (1.600 + 1.200) / 4.000 × 100 = 70%, met een videopercentage van 40% en een alleen-telefonisch percentage van 30%. Alleen het gecombineerde cijfer van 70% rapporteren zou verhullen dat een groot deel van de "telezorg" hier louter audio is, wat doorgaans een ander klinisch risicoprofiel en patiëntervaring met zich meebrengt.

## Gegevensbronnen en aandachtspunten

Het type contact wordt doorgaans ofwel vastgelegd als een gestructureerd veld in het elektronisch patiëntendossier (type bezoek of locatie), ofwel afgeleid uit factureringscodes, zoals een code voor de locatie van de dienstverlening of een telezorgmodifier op een declaratie. De coderingspraktijk verschilt aanzienlijk tussen organisaties, en zelfs tussen individuele clinici binnen dezelfde organisatie, dus een vergelijking van percentages tussen locaties moet eerst bevestigen dat "telezorg" overal op dezelfde manier wordt gecodeerd. Een consult dat begint via video maar overgaat op telefoon vanwege een technisch probleem, moet consistent worden gecodeerd (meestal naar de modaliteit die het grootste deel van de klinische inhoud droeg), en die regel moet worden gedocumenteerd in plaats van overgelaten aan individueel oordeel.

## Veelgemaakte fouten

- **Geprobeerde in plaats van voltooide bezoeken tellen**: een telezorgafspraak die geen verbinding tot stand brengt en opnieuw wordt gepland, mag de telezorgnoemer niet twee keer opblazen.
- **Video en telefoon als onderling verwisselbaar behandelen**: ze hebben verschillende klinische en gelijkheidsimplicaties (telefoon sluit visuele beoordeling uit, maar is toegankelijker voor patiënten zonder smartphone, betrouwbare data, of een privéruimte voor video); rapporteer ze waar mogelijk altijd afzonderlijk.
- **De relatie met no-shows negeren**: no-show-gedrag verschilt vaak per modaliteit; raadpleeg [no-show-percentage voor afspraken](../appointment-no-show-rate/) voordat u conclusies trekt over "verbeterde toegang" op basis van alleen een stijgend telezorgpercentage.
- **Een hoog percentage als inherent goed behandelen**: voor sommige aandoeningen en consulttypen is een passend telezorgpercentage laag door klinisch ontwerp, niet door een gebrek aan digitale volwassenheid.

## Bronnen

- Centers for Medicare & Medicaid Services (CMS), gegevens over telezorggebruik binnen Medicare en beleidspublicaties
- NHS England, activiteitsstatistieken van poliklinische en ambulante diensten, inclusief de uitsplitsing van virtuele/afstandsaanwezigheid
- Collegiaal getoetste literatuur over trends in telezorggebruik en modaliteitspecifieke uitkomsten
