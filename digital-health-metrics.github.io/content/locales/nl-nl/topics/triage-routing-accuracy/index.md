# Nauwkeurigheid van Triagedoorverwijzing

Nauwkeurigheid van triagedoorverwijzing is het aandeel patiëntcontacten waarbij een geautomatiseerd of AI-ondersteund triage-instrument een patiënt correct doorverwijst naar het juiste niveau en de juiste setting van zorg — bijvoorbeeld zelfzorg, eerstelijnszorg, spoedeisende hulp bij niet-levensbedreigende aandoeningen, of acute zorg — beoordeeld tegen een klinisch gevalideerde referentiestandaard. Het is de veiligheids- en effectiviteitsmaatstaf voor elke digitale toegangspoort, symptoomchecker of AI-triagesysteem: de volledige waardepropositie van het instrument berust op het correct, snel en consistent doorverwijzen van patiënten.

## Waarom het belangrijk is

Een onnauwkeurig triage-instrument veroorzaakt schade in beide richtingen: ondertriage (een patiënt doorverwijzen naar een lager zorgniveau dan nodig is) kan behandeling van een werkelijke noodsituatie vertragen, terwijl overtriage (een patiënt doorverwijzen naar een hoger zorgniveau dan nodig is) schaarse spoedeisende en acute zorgcapaciteit verspilt en kosten en patiëntangst verhoogt zonder klinisch voordeel. Omdat deze twee faalmodi zulke verschillende gevolgen hebben, moet de nauwkeurigheid van triagedoorverwijzing altijd worden gerapporteerd samen met de richting van de fouten, niet als een enkel geaggregeerd nauwkeurigheidscijfer dat verbergt of het instrument veilig of gevaarlijk faalt. Toezichthouders en zorgsystemen die een AI-triage-instrument evalueren voor inzet, eisen in toenemende mate dit soort gelaagde nauwkeurigheidsrapportage als voorwaarde voor klinische goedkeuring, met name voor instrumenten die met een zekere mate van autonomie van een clinicus werken.

## Hoe het wordt berekend

```
Nauwkeurigheid van triagedoorverwijzing = correct doorverwezen
                                          contacten / totaal
                                          getriageerde contacten
                                          × 100

Rapporteer ondertriage en overtriage afzonderlijk:
  Ondertriagepercentage = contacten doorverwezen naar een lager
                         urgentieniveau dan de
                         referentiestandaard / totaal
                         getriageerde contacten × 100
  Overtriagepercentage  = contacten doorverwezen naar een hoger
                         urgentieniveau dan de
                         referentiestandaard / totaal
                         getriageerde contacten × 100

De referentiestandaard is doorgaans een retrospectieve klinische
beoordeling van hetzelfde geval, waar mogelijk geblindeerd voor
de uitkomst van het instrument.
```

## Uitgewerkt voorbeeld

Een AI-symptoomcheckerinstrument triageert 5.000 patiëntcontacten in een maand. Een geblindeerde klinische beoordeling van een willekeurige steekproef van 500 van deze contacten vindt dat 430 werden doorverwezen naar het juiste urgentieniveau (nauwkeurigheid 86%), 45 werden ondertriageerd (9%), en 25 werden overtriageerd (5%). Het ondertriagepercentage van 9% is het cijfer dat het meest dringend onderzoek behoeft, aangezien het contacten vertegenwoordigt waarbij een patiënt mogelijk naar minder urgente zorg is doorverwezen dan daadwerkelijk nodig was; het overtriagepercentage van 5% is een capaciteits- en kostenkwestie, maar geen direct veiligheidsprobleem.

## Databronnen en voorbehouden

De referentiestandaard waartegen triagenauwkeurigheid wordt gemeten, is enorm belangrijk: een beoordeling door één clinicus introduceert de eigen beoordelingsvariabiliteit van die clinicus, dus een geloofwaardig nauwkeurigheidscijfer vereist doorgaans ofwel meerdere onafhankelijke beoordelaars met gedocumenteerde interbeoordelaarsovereenstemming, ofwel vergelijking met een later bevestigde klinische uitkomst (welke zorg de patiënt daadwerkelijk nodig had, achteraf vastgesteld). Steekproeftrekking is ook belangrijk: het beoordelen van alleen een gemaksteekproef van contacten, of alleen die gemarkeerd als ongebruikelijk, zal geen cijfer opleveren dat generaliseert naar de algehele prestatie van het instrument. Nauwkeurigheidscijfers moeten, waar het onderliggende casusvolume dit toelaat, afzonderlijk worden gerapporteerd per gepresenteerde symptoom- of klachtcategorie, aangezien triage-instrumenten zelden uniform presteren bij alle aandoeningen.

## Valkuilen

- **Een enkel gecombineerd nauwkeurigheidscijfer rapporteren**: het samenvoegen van ondertriage en overtriage tot één getal verbergt of de fouten van het instrument neigen naar de gevaarlijkere faalmodus; rapporteer altijd afzonderlijk.
- **Een enkele, niet-geblindeerde beoordelaar gebruiken als referentiestandaard**: dit kan het nauwkeurigheidscijfer stilletjes vertekenen in de richting van wat die beoordelaar zelf zou hebben gedaan, in plaats van een onafhankelijke klinische standaard.
- **Alleen valideren op retrospectieve, gemakkelijke gegevens**: de werkelijke doorverwijzingsnauwkeurigheid van een instrument bij live, dubbelzinnige patiëntinvoer verschilt vaak wezenlijk van de nauwkeurigheid op een samengestelde validatieset die tijdens de ontwikkeling is opgebouwd.
- **Prestatieverschuiving na inzet negeren**: de nauwkeurigheid van een AI-triagemodel kan na verloop van tijd afnemen naarmate patiëntpopulaties, gepresenteerde symptomen, of beschikbaarheid van zorgpaden veranderen; nauwkeurigheid moet periodiek opnieuw worden gemeten, niet eenmalig gevalideerd en daarna als stabiel beschouwd.

## Bronnen

- ONC / HealthIT.gov, richtlijnen over de veiligheid en kwaliteitsborging van klinische besluitvorming en AI-instrumenten
- Collegiaal getoetste literatuur over de nauwkeurigheid van symptoomcheckers en AI-triage-instrumenten, bijvoorbeeld studies gepubliceerd in JAMIA, npj Digital Medicine en BMJ Health & Care Informatics
- NHS England, richtlijnen over de klinische veiligheid van digitale triage- en telezorgconsultatie-instrumenten (DCB0129/DCB0160 klinische risicobeheerstandaarden)

Zie ook: [doorlooptijd van digitale verwijzingen](../digital-referral-turnaround-time/), de procesmaatstaf die het meest direct stroomafwaarts ligt van een triagebeslissing.
