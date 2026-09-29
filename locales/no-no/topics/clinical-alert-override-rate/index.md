# Overstyringsrate for Kliniske Varsler

Overstyringsrate for kliniske varsler måler andelen kliniske beslutningsstøttevarsler (CDS), som varsler om legemiddelinteraksjoner, allergivarsler, og dosegrense-kontroller generert av et datastyrt forskriversystem (CPOE), som en kliniker avviser eller overstyrer i stedet for å handle på. Det er standard kvantitativt signal brukt for å oppdage og håndtere "varseltretthet": den velvidokumenterte tendensen der klinikere blir desensibilisert for varsler når volumet av lavverdi-advarsler blir overveldende.

## Hvorfor dette er viktig

Publiserte overstyringsrater for legemiddelinteraksjonsvarsler varierer vanligvis fra omtrent halvparten til over nitti prosent, og en høy rate er ikke automatisk en sikkerhetssvikt: mange forstyrrende varsler utløses for interaksjoner som er klinisk ubetydelige i kontekst, eller gjentar et varsel klinikeren allerede har handlet på tidligere i samme ordresett, så et godt kalibrert system utløser bevisst færre, mer verdifulle varsler i stedet for å prøve å drive overstyringsraten til null. Det som virkelig betyr noe for sikkerhet, er trenden over tid, fordelingen på alvorlighetsnivåer, og om klinikere dokumenterer en grunn når de overstyrer et høyalvorlighetsvarsel; en stigende overstyringsrate på høyalvorlighets-, velbeviste interaksjoner er en reell styringsbekymring selv når gjennomsnittet på tvers av alle varsler ser stabilt ut.

## Hvordan det beregnes

```
Overstyringsrate = overstyrte varsler / totalt utløste varsler × 100

Segmenter etter:
  - alvorlighetsnivå (f.eks. kontraindisert, alvorlig, moderat)
  - varseltype (legemiddelinteraksjon, allergi, duplikatterapi, dosegrense)
  - om en overstyringsgrunn ble dokumentert

En "dokumentert overstyringsrate" sporer andelen overstyringer som har en
registrert begrunnelse, som er et styringsmål i seg selv.
```

## Gjennomarbeidet eksempel

Et sykehus' CPOE-system utløser 10 000 legemiddelinteraksjonsvarsler i en måned, hvorav 8 700 overstyres, noe som gir en samlet overstyringsrate på 87 %. Segmentering etter alvorlighet viser at av 500 "kontraindiserte" varsler blir 60 overstyrt (12 %), mens av 6 000 "moderate" varsler blir 5 700 overstyrt (95 %). Det moderate nivåets tall er stort sett i samsvar med publiserte referanseverdier og er ikke i seg selv grunn til bekymring; det kontraindiserte nivåets tall krever individuell sakgjennomgang, og det faktum at bare 340 av de 500 overstyringene på det nivået har en dokumentert grunn, er det mer handlingsrettede styringsfunnet.

## Datakilder og forbehold

Den elektroniske pasientjournalens revisjonslogg, eller CDS-leverandørens egen varslingsmodul, registrerer hver varsel-utløst og varsel-respons-hendelse, inkludert om klinikeren skrev inn fritekst eller strukturert begrunnelse. Å sammenligne overstyringsrater mellom organisasjoner, eller til og med mellom avdelinger i samme organisasjon, krever å sjekke at de underliggende varselregelsettene og alvorlighetsgraderingen er de samme; et sykehus med et aggressivt kalibrert regelsett vil vise en lavere overstyringsrate av grunner som ikke har noe med klinikeratferd å gjøre.

## Fallgruver

- **Behandle den rå overstyringsraten som en enkelt sikkerhetsscore**: den blander velbegrunnede overstyringer av lavverdi-varsler med usikre overstyringer av genuint farlige interaksjoner; segmenter alltid etter alvorlighet.
- **Ingen fangst av overstyringsgrunn**: uten en dokumentert grunn er det umulig å skille "dette varselet var feil" fra "dette varselet var riktig og klinikeren tok en usikker vurdering", som er den faktiske distinksjonen som betyr noe for pasientsikkerhet.
- **Inflasjon av varselregler over tid**: å legge til flere varsler "for sikkerhets skyld" uten å beskjære lavverdi-varsler, er den direkte årsaken til stigende overstyringsrater og varseltretthet; varselstyring bør inkludere regelmessig gjennomgang og pensjonering av dårlig presterende regler, ikke bare overvåking.
- **Sammenligne rater på tvers av systemer med ulik avbruddsdesign**: et forstyrrende, hard-stopp-varsel produserer annen overstyringsatferd enn et passivt, ikke-blokkerende varsel, så de to er ikke direkte sammenlignbare metrikker.

## Kilder

- Fagfellevurdert litteratur om varseltretthet i klinisk beslutningsstøtte, mye publisert i tidsskrifter inkludert JAMIA og npj Digital Medicine
- ONC / HealthIT.gov, veiledning om helse-IT-sikkerhet for klinisk beslutningsstøtte
- Institute for Safe Medication Practices (ISMP), veiledning om CDS-varseldesign og -styring
