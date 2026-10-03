# Kosten per Zorgepisode

Kosten per zorgepisode zijn de totale kosten die worden gemaakt bij het behandelen van een vastgestelde klinische episode — bijvoorbeeld een heupvervanging en het bijbehorende herstel, of een periode van diabetesbeheer — vergeleken met een historisch basislijncohort behandeld zonder de digitale interventie die wordt geëvalueerd. Het is de standaardeenheid van financiële vergelijking in waardegedreven zorg, omdat het het volledige economische beeld van een episode vastlegt in plaats van een enkele kostenpost geïsoleerd, en het is de maatstaf die zorgverzekeraars en zorgsystemen het vaakst vereisen voordat ze instemmen met het financieren van een digitaal gezondheidsprogramma op schaal.

## Waarom het belangrijk is

Waardegedreven zorgcontracten betalen in toenemende mate voor uitkomsten en episodes in plaats van individuele diensten, wat betekent dat de financiële case van een digitaal gezondheidsprogramma in dezelfde valuta moet worden gemaakt: totale kosten per episode, vergeleken met wat hetzelfde type episode kostte voordat de interventie bestond. Een programma dat de ene kostencategorie verlaagt (bijvoorbeeld minder persoonlijke vervolgbezoeken) terwijl het een andere verhoogt (meer apparaatkosten, meer klinische monitoringpersoneeltijd) heeft niet noodzakelijk de totale kosten per episode verlaagd, en alleen een volledige kostenberekening op episodeniveau vangt deze afweging; naar een enkele kostenpost geïsoleerd kijken riskeert een misleidende conclusie in beide richtingen. Omdat episodedefinities en basislijnperiodes kunnen worden geconstrueerd op manieren die een bepaalde conclusie bevoordelen, vereist deze maatstaf meer methodologische transparantie dan de meeste andere in dit boek om betrouwbaar te zijn voor een sceptische zorgverzekeraar of financieel team.

## Hoe het wordt berekend

```
Kosten per zorgepisode = totale kosten van alle zorg geleverd
                         binnen een vastgesteld episodevenster
                         (alle zorgomgevingen, alle
                         kostencategorieën) / aantal episodes

Vergelijk met de kosten per episode van een historisch
basislijncohort voor hetzelfde klinisch vastgestelde episodetype,
gecorrigeerd voor casemix (leeftijd, comorbiditeit, ernst) tussen
de twee cohorten.

Neem op, niet alleen directe klinische kosten: kosten van
technologieplatform en apparaten, extra klinische personeelstijd,
en alle zorg die van omgeving is veranderd (bijv. van intramuraal
naar thuis) in plaats van volledig te verdwijnen.
```

## Uitgewerkt voorbeeld

De historische basislijnkosten van een zorgsysteem voor een volledige heupvervangingsepisode (chirurgie tot 90-dagen herstel) zijn $28.000 per episode, gebaseerd op 200 historische episodes. Een nieuw digitaal postoperatief monitoringprogramma wordt geïntroduceerd, en 150 nieuwe episodes die het programma gebruiken, tonen een gemiddelde kost van $24.500 per episode — een verlaging van $3.500 per episode, voornamelijk gedreven door minder bezoeken aan de spoedeisende hulp tijdens het herstel en een kortere gemiddelde intramurale verblijfsduur. Na risicocorrectie voor een iets jongere, lagere-comorbiditeit casemix in het digitaal gemonitorde cohort vergeleken met de historische basislijn, versmalt de gecorrigeerde besparing tot $2.100 per episode — nog steeds een echte verbetering, maar wezenlijk kleiner dan de ruwe, ongecorrigeerde vergelijking suggereerde.

## Databronnen en voorbehouden

Totale episodekosten worden meestal samengesteld uit het eigen kostenboekhoudings- of financiële systeem van het zorgsysteem, waarbij declaratiegegevens, interne kostentoewijzing, en, waar een digitaal platform betrokken is, de licentie- en hardwarekosten ervan worden gecombineerd — het nauwkeurig samenstellen van dit cijfer is meestal het moeilijkste en meest resource-intensieve onderdeel van elke digitale gezondheidswaardeanalyse, aangezien kosten vaak worden vastgelegd in afzonderlijke systemen die nooit waren ontworpen om op episodeniveau te worden gecombineerd. Casemixcorrectie is essentieel wanneer het digitaal beheerde cohort en het historische basislijncohort niet werden toegewezen door echte randomisering, aangezien digitale programma's vaak eerst worden aangeboden aan meer betrokken, over het algemeen gezondere, of meer gemotiveerde patiënten, wat een schijnbare kostenbesparing kan produceren die eigenlijk een selectie-effect is in plaats van een echt programma-effect.

## Valkuilen

- **Ongecorrigeerde kosten vergelijken tussen cohorten met verschillende casemix**: een digitaal beheerd cohort dat toevallig gezonder of lager risico is dan de historische basislijn, zal lagere kosten per episode vertonen om redenen die niet gerelateerd zijn aan de digitale interventie zelf; corrigeer altijd voor risico voordat u vergelijkt.
- **Technologie- en personeelskosten weglaten van de "digitale" kant van de vergelijking**: een kostenanalyse die alleen verminderd klinisch gebruik volgt terwijl de platform-, apparaat-, en personeelskosten van het runnen van het digitale programma worden genegeerd, zal netto besparingen overschatten.
- **Het episodevenster inconsistent definiëren tussen cohorten**: het vergelijken van een episodevenster van 90 dagen voor het ene cohort met een venster van 60 dagen voor een ander zal een kostenvergelijking produceren die eigenlijk niet hetzelfde meet.
- **Een kostenverschuiving behandelen als een kostenverlaging**: kosten die van de ene zorgomgeving naar een andere zijn verschoven (bijvoorbeeld van intramuraal naar een gemonitorde thuisomgeving) is een echte en waardevolle bevinding, maar verschilt analytisch van volledig geëlimineerde kosten, en beide moeten afzonderlijk worden gerapporteerd.

## Bronnen

- Centers for Medicare & Medicaid Services (CMS), richtlijnen over Bundled Payments for Care Improvement (BPCI) en episodegebaseerde betalingsmodellen
- Healthcare Financial Management Association (HFMA), richtlijnen over methodologie voor kostenberekening van zorgepisodes
- Collegiaal getoetste literatuur over kostenanalyse van waardegedreven digitale zorg, bijvoorbeeld studies gepubliceerd in Health Affairs en het American Journal of Managed Care

Zie ook: [rendement op investering (ROI) en waarde op investering (VOI)](../roi-and-voi/), dat kosten per zorgepisode gebruikt als een van de belangrijkste invoerwaarden.
