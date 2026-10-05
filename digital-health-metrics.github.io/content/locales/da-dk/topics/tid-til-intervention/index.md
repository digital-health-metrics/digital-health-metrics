# Tid til Intervention

Tid til intervention måler, hvor hurtigt et klinisk team reagerer på en automatiseret sundhedsalarm genereret af et fjernovervågningssystem, fra det tidspunkt alarmen udløses, til det tidspunkt en kliniker rent faktisk handler på den. Den eksisterer, fordi en fjernovervågningsenheds værdi fuldstændig afhænger af, at nogen rent faktisk reagerer rettidigt på de alarmer, den genererer — en enhed, der perfekt opdager en forværrende tilstand, leverer ingen klinisk fordel, hvis alarmen sidder uadresseret i timer eller dage.

## Hvorfor det betyder noget

Fjernovervågningsprogrammer markedsføres ofte ud fra deres evne til at opdage forværrende patienttilstande tidligt, men opdagelse er kun halvdelen af værdiforslaget; den anden halvdel er rettidig klinisk respons. Et program med fremragende sensorpræcision, men dårlig alarmresponstid, leverer ikke bedre kliniske resultater end slet ingen overvågning, og kan endda skabe en falsk følelse af sikkerhed, der forsinker andre former for pleje. Tid til intervention er derfor en af de mest direkte mål for, om et fjernovervågningsprogram rent faktisk fungerer som et komplet klinisk system, ikke blot som et dataindsamlingsværktøj, og den er særlig vigtig at spore, efterhånden som overvågningsprogrammer skalerer op og det kliniske personale, der er ansvarligt for at reagere på alarmer, bliver ansvarligt for flere patienter.

## Hvordan det beregnes

```
Tid til intervention = tidsstempel for klinisk handling − tidsstempel
                       for alarmudløsning, aggregeret som median
                       og 90. percentil på tværs af alle alarmer i
                       en periode

Rapporter altid segmenteret efter alarmalvorlighed:
  Median tid til intervention for højalvorlighedsalarmer
  Median tid til intervention for lavalvorlighedsalarmer

Brug median og percentiler i stedet for gennemsnit, da
responstidsdata typisk er stærkt skæv af lejlighedsvise meget
lange forsinkelser.
```

## Et gennemarbejdet eksempel

Et virtuelt afdelingsprogram til fjernovervågning af hjertesvigtspatienter genererer alarmer, når en patients vægt eller iltmætning overskrider en defineret tærskel. Over en måned er den mediane tid til intervention for alle alarmer 45 minutter, hvilket lyder rimeligt, men segmentering efter alvorlighed afslører, at højalvorlighedsalarmer (som indikerer potentiel akut forværring) har en median responstid på 38 minutter, mens den 90. percentil for højalvorlighedsalarmer er 3 timer — hvilket betyder, at en betydelig delmængde af de mest kritiske alarmer sidder uadresseret i en urovækkende lang periode. Dette fik programmet til at omstrukturere sin personalebemanding for at sikre dedikeret dækning til højalvorlighedsalarmtriage i stedet for at stole på et enkelt delt responsteam.

## Datakilder og forbehold

Tid til intervention kræver nøjagtige tidsstempler for både alarmudløsning og den efterfølgende kliniske handling, hvilket betyder, at det kliniske arbejdsgangsystem skal registrere handlingstidsstemplet pålideligt, ikke blot hvornår alarmen blev genereret — hvis klinikere handler på en alarm, men glemmer at registrere den rettidigt i systemet, vil den målte tid til intervention kunstigt vise den som værende længere end den faktiske responstid. Den passende tærskel for "rettidig" respons bør fastsættes ud fra den kliniske alvorlighed af det, der overvåges, ikke anvendt generisk på tværs af alle alarmtyper.

## Faldgruber

- **Rapportering af kun median uden halealarmer**: et godt median tal kan skjule en betydelig delmængde af alarmer med farligt lange responstider; rapporter altid 90. eller 95. percentil sammen med medianen.
- **Brug af gennemsnit i stedet for median og percentiler**: responstidsdata er typisk stærkt skæv, hvilket gør gennemsnit vildledende som et sammenfattende tal.
- **Ignorering af alarmalvorlighedssegmentering**: en acceptabel responstid for en lavalvorlighedsalarm kan være farligt langsom for en højalvorlighedsalarm; de bør aldrig aggregeres sammen uden segmentering.
- **Afhængighed af upålidelige handlingstidsstempler**: hvis klinikere ikke konsekvent registrerer, hvornår de rent faktisk handlede på en alarm, vil den målte metrik ikke afspejle den sande responstid.

## Kilder

- American Heart Association, retningslinjer for fjernovervågning af hjertesvigtspatienter
- The Joint Commission, standarder for kliniske alarmhåndteringssystemer
- Collegialt bedømt litteratur om respons på fjernovervågningsalarmer, f.eks. undersøgelser offentliggjort i Journal of the American College of Cardiology og Circulation: Heart Failure

Se også: [enhedsoppetidsrate](../enhedsoppetidsrate/), da en pålidelig tid til intervention-figur afhænger af, at den underliggende overvågningsenhed rent faktisk er online for overhovedet at generere alarmen.
