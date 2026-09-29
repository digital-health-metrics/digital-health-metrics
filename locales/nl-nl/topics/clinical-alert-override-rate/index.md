# Overrulepercentage van Klinische Meldingen

Het overrulepercentage van klinische meldingen meet het aandeel meldingen van klinische besluitvormingsondersteuning (CDS) — zoals waarschuwingen voor geneesmiddeleninteracties, allergiemeldingen en dosisbereikcontroles die worden gegenereerd door een geautomatiseerd voorschrijfsysteem (CPOE) — die een clinicus afwijst of overrulet in plaats van erop te reageren. Het is het standaard kwantitatieve signaal dat wordt gebruikt om "meldingsmoeheid" op te sporen en te beheersen: de goed gedocumenteerde neiging van clinici om ongevoelig te worden voor meldingen wanneer het volume aan laagwaardige waarschuwingen overweldigend wordt.

## Waarom dit belangrijk is

Gepubliceerde overrulepercentages voor waarschuwingen over geneesmiddeleninteracties variëren doorgaans van ongeveer de helft tot ruim boven de negentig procent, en een hoog percentage is niet automatisch een veiligheidsfalen: veel onderbrekende meldingen worden geactiveerd voor interacties die in hun context klinisch onbeduidend zijn, of herhalen een melding waarop de clinicus al eerder in dezelfde voorschriftenset heeft gereageerd, dus een goed afgesteld systeem activeert bewust minder, waardevollere meldingen in plaats van te proberen het overrulepercentage naar nul te brengen. Wat werkelijk telt voor de veiligheid, is de trend in de tijd, de verdeling over ernstniveaus, en of clinici een reden documenteren wanneer ze een melding met hoge ernst overrulen; een stijgend overrulepercentage bij goed onderbouwde interacties met hoge ernst is een reëel governancevraagstuk, zelfs wanneer het gemiddelde over alle meldingen stabiel lijkt.

## Hoe het wordt berekend

```
Overrulepercentage = overrulede meldingen / totaal aantal geactiveerde meldingen × 100

Segmenteer naar:
  - ernstniveau (bijv. gecontra-indiceerd, ernstig, matig)
  - type melding (geneesmiddel-geneesmiddelinteractie, allergie,
    dubbele therapie, dosisbereik)
  - of een reden voor overrulen is gedocumenteerd

Een "gedocumenteerd overrulepercentage" volgt het aandeel overrules dat
gepaard gaat met een geregistreerde motivering, wat op zichzelf al een
governancemaatstaf is.
```

## Uitgewerkt voorbeeld

Het CPOE-systeem van een ziekenhuis activeert in een maand 10.000 meldingen over geneesmiddeleninteracties, waarvan er 8.700 worden overruled, wat een totaal overrulepercentage van 87% oplevert. Bij segmentatie naar ernst blijkt dat van de 500 "gecontra-indiceerde" meldingen er 60 worden overruled (12%), terwijl van de 6.000 "matige" meldingen er 5.700 worden overruled (95%). Het cijfer voor het matige niveau komt grotendeels overeen met gepubliceerde benchmarks en is op zichzelf geen reden tot zorg; het cijfer voor het gecontra-indiceerde niveau rechtvaardigt individuele gevalsbeoordeling, en de meest bruikbare governancebevinding is dat slechts 340 van de 500 overrules op dat niveau een gedocumenteerde reden hebben.

## Gegevensbronnen en aandachtspunten

Het auditlog van het elektronisch patiëntendossier, of de eigen meldingsmodule van de CDS-leverancier, registreert elke gebeurtenis van geactiveerde melding en reactie daarop, inclusief of de clinicus een vrije tekst of gestructureerde motivering heeft ingevoerd. Het vergelijken van overrulepercentages tussen organisaties, of zelfs tussen afdelingen binnen dezelfde organisatie, vereist te controleren of de onderliggende meldingsregelsets en ernststratificatie identiek zijn; een ziekenhuis met een agressief afgestelde regelset zal een lager overrulepercentage laten zien om redenen die niets te maken hebben met het gedrag van clinici.

## Veelgemaakte fouten

- **Het ruwe overrulepercentage behandelen als één enkele veiligheidsscore**: dit vermengt goed gemotiveerde overrules van laagwaardige meldingen met onveilige overrules van werkelijk gevaarlijke interacties; segmenteer altijd naar ernst.
- **Geen vastlegging van de reden voor overrulen**: zonder een gedocumenteerde reden is het onmogelijk om onderscheid te maken tussen "deze melding was onjuist" en "deze melding was juist, en de clinicus nam een onveilige beslissing", wat het daadwerkelijke onderscheid is dat telt voor patiëntveiligheid.
- **Inflatie van meldingsregels in de loop van de tijd**: steeds meer meldingen toevoegen "voor de zekerheid" zonder laagwaardige regels te schrappen, is de directe oorzaak van stijgende overrulepercentages en meldingsmoeheid; governance van meldingen moet regelmatige beoordeling en afschaffing van slecht presterende regels omvatten, niet alleen monitoring.
- **Percentages vergelijken tussen systemen met een verschillend onderbrekingsontwerp**: een onderbrekende, hard-stop-melding leidt tot ander overrulegedrag dan een passieve, niet-blokkerende melding, dus de twee zijn geen direct vergelijkbare metrieken.

## Bronnen

- Collegiaal getoetste literatuur over meldingsmoeheid bij klinische besluitvormingsondersteuning, breed gepubliceerd in tijdschriften zoals JAMIA en npj Digital Medicine
- ONC / HealthIT.gov, richtlijnen voor gezondheids-IT-veiligheid met betrekking tot klinische besluitvormingsondersteuning
- Institute for Safe Medication Practices (ISMP), richtlijnen voor het ontwerp en de governance van CDS-meldingen
