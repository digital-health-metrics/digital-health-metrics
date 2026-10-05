# Afbuigingspercentage van de Spoedeisende Hulp

Afbuigingspercentage van de spoedeisende hulp (SEH-afbuigingspercentage) meet het aandeel patiëntencontacten behandeld door een digitaal triage- of virtueel zorginstrument dat zonder die interventie plausibel zou hebben geleid tot een SEH-bezoek, maar in plaats daarvan veilig werd beheerd via een lager-urgentietraject — zelfzorgadvies, een eerstelijnszorgafspraak, of een geplande spoedeisende-maar-niet-levensbedreigende zorgbezoek. Het is een specifieke, hoogwaardige subset van nauwkeurigheid van triagedoorverwijzing (zie dat onderwerp) volledig gericht op vermeden spoedeisende-hulpgebruik, het resultaat dat het meest direct verbonden is met zowel zorgkosten als SEH-capaciteitsverlichting.

## Waarom het belangrijk is

Spoedeisende hulpafdelingen behoren tot de duurste zorgomgevingen per contact en worden vaak gebruikt voor problemen die veilig elders kunnen worden beheerd, dus het vermogen van een digitaal triage-instrument om geschikte gevallen veilig af te buigen van de SEH is een van de meest commercieel en operationeel waardevolle capaciteiten — en een van de gemakkelijkste om te communiceren aan een zorgverzekeraar of zorgsysteem dat het rendement op investering van het instrument evalueert. Maar afbuiging heeft alleen waarde als het veilig is: een instrument dat agressief patiënten afbuigt van de SEH ten koste van het missen van echte noodsituaties heeft de volledig verkeerde kant van de afweging geoptimaliseerd, wat de reden is waarom SEH-afbuigingspercentage altijd moet worden gerapporteerd samen met een veiligheidsmaatstaf die gemiste of vertraagde noodpresentaties bij afgebogen patiënten volgt, niet geïsoleerd gerapporteerd als een pure efficiëntiewinst.

## Hoe het wordt berekend

```
SEH-afbuigingspercentage = patiëntencontacten veilig afgebogen
                           van de SEH naar een geschikt
                           lager-urgentietraject / totaal
                           patiëntencontacten beoordeeld als
                           potentieel SEH-gebonden × 100

"Veilig afgebogen" vereist bevestiging, via follow-up of gekoppelde
gezondheidsdossiergegevens, dat de toestand van de patiënt
daadwerkelijk geen spoedeisende zorg vereiste binnen een
vastgesteld follow-upvenster (bijv. 72 uur) — een
afbuigingsbeslissing wordt niet gevalideerd als veilig puur omdat
de patiënt daarna niet onmiddellijk naar de SEH ging.

Rapporteer samen met:
  Gemiste-noodgeval-percentage = afgebogen patiënten die
                                 daadwerkelijk spoedeisende zorg
                                 nodig hadden binnen het
                                 follow-upvenster / totaal
                                 afgebogen patiënten × 100
```

## Uitgewerkt voorbeeld

Een digitale triagedienst beoordeelt 3.000 patiëntencontacten in een maand die het klinische algoritme beoordeelt als potentieel SEH-gebonden zonder interventie. Hiervan worden 1.800 afgebogen naar een lager-urgentietraject (een afbuigingspercentage van 60%). Follow-up van het afgebogen cohort na 72 uur met behulp van gekoppelde gezondheidsdossiergegevens vindt dat 45 van de 1.800 afgebogen patiënten inderdaad binnen dat venster naar een SEH gingen (een gemiste-noodgeval-percentage van 45 / 1.800 × 100 = 2,5%). Het rapporteren van het afbuigingscijfer van 60% zonder het gemiste-noodgeval-percentage van 2,5% zou slechts de helft van de veiligheid-efficiëntieafweging presenteren die daadwerkelijk bepaalt of het afbuigingsgedrag van het instrument goed gekalibreerd is.

## Databronnen en voorbehouden

Bevestigen dat een afgebogen patiënt daarna geen spoedeisende zorg nodig had, hangt af van gekoppelde gegevens — ofwel de eigen SEH-dossiers van hetzelfde zorgsysteem, een regionale uitwisseling van gezondheidsinformatie, of een gestructureerde follow-upoproep of enquête met de patiënt — en een afbuigingsprogramma dat werkt zonder een van deze gegevensbronnen kan zijn eigen veiligheid eigenlijk niet valideren, alleen aannemen op basis van de afwezigheid van een klacht. Het geschikte afbuigingspercentage en acceptabele gemiste-noodgeval-percentage zijn klinische beleidsbeslissingen, niet puur statistische, en moeten opzettelijk worden vastgesteld door klinisch leiderschap in plaats van te laten opkomen als een bijeffect van welke drempel een triagealgoritme toevallig standaard gebruikt. Afbuigingspercentage moet worden gerapporteerd per gepresenteerde symptoom- of klachtcategorie, aangezien geschikte afbuigingspercentages enorm variëren per aandoening (een kleine laceratie versus pijn op de borst rechtvaardigen zeer verschillende afbuigingsdrempels).

## Valkuilen

- **Afbuigingspercentage rapporteren zonder een gekoppelde gemiste-noodgeval-veiligheidsmaatstaf**: een hoog afbuigingspercentage bereikt door ondertriage van echte noodsituaties is geen succes; de twee maatstaven moeten altijd samen worden gerapporteerd.
- **Aannemen dat geen SEH-bezoek betekent dat de afbuiging veilig was**: een patiënt kan zich presenteren bij de SEH van een ander, niet-gekoppeld ziekenhuissysteem, of een werkelijk schadelijk resultaat ervaren zonder zich ooit bij een SEH te presenteren; valideer veiligheid via gekoppelde gegevens of gestructureerde follow-up, niet alleen de afwezigheid van een SEH-bezoek in hetzelfde systeem.
- **De afbuigingsdrempel puur instellen om het afbuigingspercentage te maximaliseren**: een algoritme of beleid afgestemd op het maximaliseren van afbuiging zonder een overeenkomende veiligheidsbeperking zal patiëntveiligheid inruilen voor een beter ogend efficiëntiecijfer.
- **Afbuigingspercentage mengen over alle klachttypes**: geschikte afbuigingspercentages verschillen enorm per gepresenteerde klacht; een enkel gemengd percentage kan niet aantonen of het instrument veilig en effectief presteert voor de specifieke klinisch belangrijkste aandoeningen.

## Bronnen

- Agency for Healthcare Research and Quality (AHRQ), onderzoek naar gebruik van de spoedeisende hulp en geschikte afbuiging van zorgomgeving
- NHS England, richtlijnen over NHS 111 en veiligheids- en effectiviteitsstandaarden voor digitale spoedeisende-maar-niet-levensbedreigende zorg triage
- Collegiaal getoetste literatuur over resultaten van digitale triage en virtuele zorg SEH-afbuiging, bijvoorbeeld studies gepubliceerd in de Annals of Emergency Medicine en npj Digital Medicine

Zie ook: [nauwkeurigheid van triagedoorverwijzing](../nauwkeurigheid-van-triagedoorverwijzing/), de bredere nauwkeurigheidsmaatstaf waarvan dit een specifieke, veiligheidskritische subset is.
