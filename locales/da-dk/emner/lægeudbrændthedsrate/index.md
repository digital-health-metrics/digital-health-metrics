# Lægeudbrændthedsrate

Lægeudbrændthedsraten måler andelen af klinikere, der rapporterer betydelige symptomer på udbrændthed, almindeligvis vurderet som følelsesmæssig udmattelse, depersonalisering eller en lav følelse af personlig præstation ved hjælp af et valideret spørgeskemainstrument, og for digital sundhed i særdeleshed følges den sammen med mål for den byrde, som digitale værktøjer lægger på klinikerne, såsom tid brugt på papirarbejde eller dokumentation i den elektroniske patientjournal (EPJ). Den hører hjemme i en ramme for metrikker for digital sundhed, fordi dårligt designet klinisk software er en veldokumenteret, målbar medvirkende faktor til udbrændthed, og et digitalt sundhedsværktøjs succes aldrig bør vurderes alene ud fra patientvendte metrikker, mens man ser bort fra dets virkning på de klinikere, der skal betjene det.

## Hvorfor dette er vigtigt

Digitale sundhedsværktøjer indføres ofte med det udtrykkelige mål at mindske klinikernes administrative byrde, men en dårligt designet arbejdsgang i den elektroniske patientjournal, et overdrevent antal kliniske alarmer af ringe værdi (se tilsidesættelsesraten for kliniske alarmer) eller en klodset telehealth-grænseflade kan lige så let øge udbrændtheden, som de kan mindske den, og et værktøj, der forbedrer en patientvendt engagementsmetrik, mens det i det stille øger klinikernes dokumentationsbyrde, har ikke leveret et nettopositivt resultat for plejesystemet som helhed. Udbrændthed er i den kliniske litteratur stærkt forbundet med medicinske fejl, personaleomsætning og lavere plejekvalitet, så den fungerer som en ledende indikator for nedstrøms problemer med sikkerhed og bæredygtighed i arbejdsstyrken og er ikke blot en trivselsdetalje. Ethvert digitalt sundhedsprogram, der hævder at mindske den kliniske byrde, bør kunne vise dette over for en målt baseline i stedet for at fremsætte det som en designintention.

## Hvordan det beregnes

```
Lægeudbrændthedsrate = klinikere, der scorer over det validerede
                       instruments tærskel for udbrændthed / samlede
                       adspurgte klinikere × 100

Almindelige validerede instrumenter: Maslach Burnout Inventory (MBI),
Professional Fulfillment Index eller et enkelt screeningsspørgsmål om
udbrændthed valideret mod et mere fyldestgørende instrument.

Rapportér sammen med en proxy for digital byrde, hvor den findes:
  EPJ-tid i systemet pr. patientkontakt
  Dokumentationstid uden for planlagte kliniske timer
  ("pyjamastid")
```

## Gennemarbejdet eksempel

Et hospitalsvæsen adspørger 300 læger med Maslach Burnout Inventory, før det indfører et omgivende klinisk dokumentationsværktøj, der skal nedbringe tiden til at skrive notater. Ved baseline scorer 135 læger (45 %) over tærsklen for udbrændthed, og data fra EPJ'ens auditlog viser i gennemsnit 58 minutters dokumentationstid pr. læge og dag uden for planlagte kliniske timer. Seks måneder efter værktøjets udrulning viser en gentagen undersøgelse blandt de samme læger, at 108 (36 %) ligger over tærsklen for udbrændthed, sammen med et fald i dokumentationstiden uden for arbejdstid til 34 minutter om dagen. Den samtidige bevægelse i både udbrændthedsraten og den objektive EPJ-baserede proxy styrker argumentet for, at værktøjet bidrager til forbedringen, men en formel sammenligning før/efter bør stadig tage højde for andre samtidige ændringer i arbejdsbyrden i samme periode.

## Datakilder og forbehold

Data fra udbrændthedsundersøgelser kommer fra et valideret instrument, der administreres jævnligt (årligt eller hyppigere), og svarprocenten har betydning: en lav svarprocent risikerer en skævhed på grund af manglende besvarelser, hvor de mest udbrændte klinikere (med mindst overskud til at udfylde en ekstra undersøgelse) systematisk er underrepræsenteret og dermed får raten til at se lavere ud, end den er. EPJ-baserede proxyer for digital byrde (tid i systemet, dokumentationstid uden for arbejdstid, antal klik pr. kontakt) er nyttige som objektive, løbende tilgængelige supplementer til periodiske undersøgelsesdata, men de bør valideres mod undersøgelsesrapporteret udbrændthed i den enkelte organisation, før de behandles som en pålidelig selvstændig indikator for udbrændthed, da sammenhængen mellem tid i systemet og faktisk udbrændthed kan variere efter speciale og individuel arbejdsstil.

## Faldgruber

- **Kun at støtte sig til EPJ-baserede proxyer**: tid i systemet og antal klik hænger samlet set sammen med udbrændthed, men er ikke det samme som udbrændthed selv og kan være vildledende for enkelte klinikere eller specialer med reelt forskellige dokumentationsbehov.
- **En lav svarprocent i undersøgelsen, der skjuler den reelle rate**: de klinikere, der er mest ramt af udbrændthed, har ofte mindst overskud til at svare på en frivillig undersøgelse, hvilket forvrider et resultat med lav svarprocent mod et kunstigt sundere udseende tal.
- **At tilskrive en ændring i udbrændthed ét enkelt værktøj uden at tage højde for konfunderende faktorer**: udbrændthed påvirkes af mange samtidige forhold (bemanding, patientvolumen, organisatoriske forandringer); en sammenligning før/efter omkring udrulningen af ét værktøj bør, hvor det er muligt, kontrollere for disse i stedet for at antage én enkelt årsag.
- **At behandle udbrændthed udelukkende som et spørgsmål om individuel modstandskraft**: forskning i udbrændthed finder konsekvent, at arbejdsbyrde, systemdesign og organisatoriske forhold er de primære drivkræfter; at fremstille det som alene et problem for den enkelte kliniker leder indsatsen væk fra de digitale værktøjer og arbejdsgange, der ofte er den egentlige grundårsag.

## Kilder

- Maslach Burnout Inventory (MBI), valideret spørgeskemainstrument og vejledning i scoring
- American Medical Association (AMA), forskning i lægers udbrændthed og praksisforbedringsprogrammet STEPS Forward
- Peer reviewet litteratur om EPJ-brugervenlighed, dokumentationsbyrde og klinikeres udbrændthed, for eksempel undersøgelser offentliggjort i JAMIA og Annals of Internal Medicine

Se også: [tilsidesættelsesrate for kliniske alarmer](../tilsidesættelsesrate-for-kliniske-alarmer/), da alarmtræthed er en af de mere specifikke, målbare medvirkende faktorer til klinikeres udbrændthed, som digitale værktøjer direkte kan afhjælpe.
