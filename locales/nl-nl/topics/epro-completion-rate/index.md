# ePROM-Voltooiingspercentage

Het ePROM-voltooiingspercentage meet het aandeel geplande elektronische Patiënt-Gerapporteerde Uitkomstmaten (ePROM) — gestandaardiseerde, gevalideerde vragenlijsten die het eigen verslag van een patiënt over symptomen, functioneren of levenskwaliteit vastleggen, digitaal geleverd in plaats van op papier — dat daadwerkelijk wordt voltooid. Het is net zo zeer een datakwaliteitsmaatstaf als een betrokkenheidsmaatstaf: de klinische en onderzoekswaarde van een PROM-programma hangt volledig af van een voldoende hoog voltooiingspercentage zodat de verzamelde reacties representatief zijn voor de volledige ingeschreven populatie, niet alleen de meest betrokken of minst symptomatische subgroep.

## Waarom het belangrijk is

Patiëntgerapporteerde uitkomsten zijn de directe, door de patiënt gewaarborgde aanvulling op door clinici vastgelegde of met apparaten gemeten gegevens, die dimensies van gezondheid vastleggen — pijn, functioneren, levenskwaliteit — die een dossieronderzoek of biometrische meting niet kan; digitalisering van PROM-verzameling bestaat specifiek om deze gegevens goedkoper en gemakkelijker op schaal te verzamelen dan papieren administratie ooit mogelijk maakte. Maar een PROM-programma met een laag voltooiingspercentage loopt een specifiek en ernstig risico op vertekening: patiënten die zich slechter voelen, zijn vaak minder geneigd een lange vragenlijst in te vullen, dus een dalend voltooiingspercentage kan zelf een vroeg waarschuwingssignaal zijn voor verslechterende populatiegezondheid, en een laag algemeen voltooiingspercentage kan de verzamelde reacties beter doen lijken dan de werkelijke ervaring van de populatie, simpelweg omdat de meest symptomatische patiënten ondervertegenwoordigd zijn in wat wordt voltooid. Dit is waarom voltooiingspercentage altijd moet worden gerapporteerd samen met de PROM-scores zelf, niet behandeld als een secundair operationeel detail.

## Hoe het wordt berekend

```
ePROM-voltooiingspercentage = volledig voltooide ePROM / verzonden
                              of geplande ePROM × 100

Rapporteer afzonderlijk voor:
  Initieel voltooiingspercentage  (eerste vragenlijst in een
                                   monitoringreeks)
  Longitudinaal                   (opeenvolgende vragenlijsten in
  voltooiingspercentage             een doorlopende monitoringreeks,
                                   die doorgaans afneemt na verloop
                                   van tijd en moet worden gevolgd
                                   als trend, niet als enkel cijfer)

Een "gedeeltelijk voltooide" vragenlijst moet afzonderlijk worden
gedefinieerd en gerapporteerd van zowel "volledig voltooid" als
"niet gestart".
```

## Uitgewerkt voorbeeld

Een oncologiekliniek stuurt een gevalideerde ePROM voor symptoomlast naar 400 patiënten voorafgaand aan elk maandelijks follow-upbezoek. In de eerste maand voltooien 340 patiënten de vragenlijst volledig (voltooiingspercentage 85%), 30 voltooien deze gedeeltelijk, en 30 starten er niet mee. Tegen de zesde maand van dezelfde monitoringreeks zijn volledige reacties gedaald naar 260 van dezelfde 400-patiëntencohort (65%), een betekenisvolle longitudinale afname die volledig gemist zou worden als alleen het cijfer van 85% van de eerste maand werd gerapporteerd als een statische algemene maatstaf. Het onderzoeken van welke patiënten afhaken (naar symptoomernst, ziektestadium, of leeftijd) kan onthullen of de afname duidt op enquêtemoeheid, verslechterende symptomen die de vragenlijst moeilijker maken te voltooien, of een technische toegangsbarrière.

## Databronnen en voorbehouden

Voltooiingsgegevens komen doorgaans uit de eigen leverings- en reactielogs van het ePROM-platform, die onderscheid kunnen maken tussen de statussen "niet gestart", "gedeeltelijk voltooid" en "volledig voltooid" — een onderscheid dat altijd behouden en gerapporteerd moet worden in plaats van samengevoegd te worden tot een binair voltooid/niet-voltooid-cijfer, aangezien gedeeltelijke voltooiing vaak een specifiek punt in de vragenlijst aangeeft waar patiënten moeite hebben of afhaken. Voltooiingspercentage moet worden geïnterpreteerd samen met hoe de vragenlijst wordt geleverd (een sms-link, een app-melding, of een leveringsmethode die portaalaanmelding vereist), aangezien leveringswrijving zelf het voltooien beïnvloedt onafhankelijk van de inhoud van de vragenlijst of de onderliggende aandoening van de patiënt. Een gevalideerd instrument (in plaats van een ad-hoc set vragen) moet altijd worden gebruikt voor de PROM zelf, aangezien het voltooiingspercentage voor een niet-gevalideerd instrument niets betrouwbaars zegt over de klinische bruikbaarheid van de resulterende gegevens, zelfs als het voltooiingspercentage hoog is.

## Valkuilen

- **Een dalend voltooiingspercentage alleen behandelen als een leveringsprobleem**: een longitudinale daling in voltooiing kan werkelijk verslechterende patiëntsymptomen weerspiegelen (patiënten te onwel om de enquête te voltooien) in plaats van enquêtemoeheid of een technisch probleem, en dit onderscheid is enorm belangrijk voor klinische interpretatie.
- **Gedeeltelijke en volledige voltooiing samenvoegen in één categorie**: een gedeeltelijk voltooide vragenlijst heeft een betekenisvol andere datakwaliteit dan een volledig voltooide; rapporteer afzonderlijk, en onderzoek waar in de vragenlijststroom patiënten de neiging hebben deze te verlaten.
- **Voltooiingspercentage rapporteren zonder het risico op reactievertekening te rapporteren**: een gematigd voltooiingspercentage zou onderzoek moeten aanmoedigen naar of reagerenden systematisch verschillen (in symptoomernst, leeftijd, digitale vaardigheid) van niet-reagerenden, aangezien PROM-scores die alleen berekend worden uit reagerenden de volledige populatie verkeerd kunnen weergeven.
- **Een niet-gevalideerde of zelfgemaakte vragenlijst gebruiken**: voltooiingspercentage is betekenisloos als datakwaliteitssignaal als het instrument dat wordt voltooid zelf niet klinisch is gevalideerd voor de aandoening en populatie die wordt gemeten.

## Bronnen

- International Consortium for Health Outcomes Measurement (ICHOM), richtlijnen voor de ontwikkeling van standaardsets en PROM-implementatie
- U.S. Food and Drug Administration (FDA), richtlijnen over patiëntgerapporteerde uitkomstmaten in klinische proeven en regelgevende indieningen
- Collegiaal getoetste literatuur over elektronische PROM-implementatie en voltooiingspercentages, bijvoorbeeld studies gepubliceerd in Quality of Life Research en het Journal of Medical Internet Research (JMIR)

Zie ook: [patiënt Net Promoter Score](../patient-net-promoter-score/), een verwante maar afzonderlijke patiëntgerapporteerde maatstaf die tevredenheid meet in plaats van klinische uitkomst.
