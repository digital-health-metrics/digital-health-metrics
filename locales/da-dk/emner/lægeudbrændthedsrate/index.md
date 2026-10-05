# Lægeudbrændthedsrate

Lægeudbrændthedsrate måler andelen af klinikere, der rapporterer symptomer på følelsesmæssig udmattelse, depersonalisering eller reduceret følelse af personlig præstation, typisk vurderet via et valideret spørgeskema som Maslach Burnout Inventory. Den spores i denne bog ved siden af den byrde, kliniker-vendte digitale værktøjer pålægger, fordi dårligt designet software er en dokumenteret og handlingsorienteret bidragyder til klinikerudbrændthed, til forskel fra de mange andre bidragydere (arbejdsbyrde, administrativ byrde, organisationskultur), der er sværere for et digitalt værktøjsteam at adressere direkte.

## Hvorfor det betyder noget

Klinikerudbrændthed er forbundet med højere medicinske fejlrater, dårligere patienttilfredshed og høj personaleomsætning, hvilket gør det til en afgørende kvalitets- og driftsmetrik i sig selv, ikke kun et spørgsmål om personalevelvære. Digitale sundhedsværktøjer, der er specifikt designet til at reducere klinikerbyrde — ambient dokumentation, strømlinet beskedbehandling, bedre optimerede kliniske arbejdsgange — kan demonstrere deres værdi delvist ved at vise en målbar forbedring i klinikerudbrændthedsscorer, hvilket giver et stærkt supplerende argument ud over rene effektivitetsmetrikker som dokumentationstid. Omvendt kan et digitalt værktøj, der teknisk forbedrer en proceseffektivitetsmetrik, mens det forværrer klinikerudbrændthed (f.eks. ved at tilføje endnu en skærm at overvåge eller endnu et system at logge ind på), repræsentere en nettonegativ effekt, som en snæver effektivitetsmålestok alene ikke ville fange.

## Hvordan det beregnes

```
Lægeudbrændthedsrate = klinikere, der scorer over den etablerede
                       tærskel for udbrændthed på et valideret
                       instrument (f.eks. Maslach Burnout
                       Inventory) / samlet antal klinikere
                       undersøgt × 100

Rapporter altid sammen med en specifik digital værktøjsbyrde-
undersøgelsesmetrik, f.eks.:
  Dokumentationstid uden for kontortid pr. kliniker pr. uge
  Antal elektronisk patientjournal-klik krævet for en standard
  klinisk arbejdsgang
```

## Et gennemarbejdet eksempel

Et sundhedssystem implementerer et ambient dokumentationsværktøj, der automatisk genererer kliniske noter fra tale-til-tekst under patientkonsultationer, med det formål at reducere klinikerens administrative byrde. Før implementering rapporterer 45% af klinikere i den berørte afdeling udbrændthedssymptomer over tærsklen på en Maslach Burnout Inventory-undersøgelse, og klinikere bruger i gennemsnit 6 timer om ugen på dokumentation uden for kontortid. Seks måneder efter implementering af det ambiente dokumentationsværktøj falder udbrændthedsraten til 32%, og dokumentationstiden uden for kontortid falder til 2,5 timer om ugen — en sammenhæng, der giver en overbevisende, om end ikke fuldstændig endelig (da andre faktorer også kan have ændret sig i samme periode), sag for værktøjets positive indvirkning på klinikervelvære.

## Datakilder og forbehold

Udbrændthedsmåling kræver et valideret spørgeskemainstrument administreret konsekvent over tid til en repræsentativ prøve af klinikere, og svarraten på sådanne undersøgelser er ofte lav, hvilket kan skævvride resultaterne, hvis klinikere, der oplever den mest alvorlige udbrændthed, også er mindst tilbøjelige til at have tid eller energi til at svare. Fordi udbrændthed har mange bidragydende årsager ud over digitale værktøjer (arbejdsbyrde, organisationskultur, personaleniveauer), kan en korrelation mellem indførelsen af et digitalt værktøj og en ændring i udbrændthedsraten ikke alene bevise årsagssammenhæng uden at kontrollere for disse andre faktorer.

## Faldgruber

- **Tilskrivning af hele udbrændthedsændringen til et enkelt digitalt værktøj**: udbrændthed har mange bidragydende årsager; en sammenhæng efter indførelse af et værktøj beviser ikke alene årsagssammenhæng.
- **Anvendelse af lav undersøgelsessvarrate uden justering**: klinikere med den mest alvorlige udbrændthed kan være mindst tilbøjelige til at svare, hvilket skævvrider den rapporterede rate kunstigt lavt.
- **Måling af udbrændthed uden en specifik digital værktøjsbyrdemetrik**: uden at knytte udbrændthed til en konkret værktøjsrelateret foranstaltning (dokumentationstid, klikantal) er det svært at identificere, hvilken specifik intervention der rent faktisk hjalp.
- **Ignorering af undergruppevariation**: udbrændthed kan variere betydeligt efter specialitet, ansættelsesår eller afdeling; en samlet organisationsrate kan skjule alvorlige problemer i specifikke undergrupper.

## Kilder

- Maslach, C., og Jackson, S.E., Maslach Burnout Inventory, det oprindeligt udviklede og mest udbredte vurderingsinstrument
- American Medical Association, forskning i klinikerudbrændthed og elektronisk patientjournalbyrde
- Collegialt bedømt litteratur om digitale værktøjers indvirkning på klinikerudbrændthed, f.eks. undersøgelser offentliggjort i Journal of the American Medical Informatics Association (JAMIA) og Mayo Clinic Proceedings

Se også: [tilsidesættelsesrate for kliniske alarmer](../tilsidesættelsesrate-for-kliniske-alarmer/), hvor alarmtræthed er en af de mere specifikke, målbare bidragydere til klinikerudbrændthed, som digitale værktøjer direkte kan adressere.
