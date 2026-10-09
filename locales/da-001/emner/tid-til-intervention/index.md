# Tid til Intervention

Tid til intervention er den tid, der går fra en automatiseret sundhedsalarm genereres, for eksempel når en enhed til fjernovervågning registrerer et vitalt tegn uden for området, eller et digitalt triageværktøj markerer en forværret patient, til et medlem af det kliniske team faktisk igangsætter en reaktion. Det er den procesmetrik, der afgør, om et automatiseret alarmsystem leverer på sit kerneløfte: at fange et problem tidligere, end en traditionel model med planlagte kontroller eller patientinitierede telefonopkald ville have gjort.

## Hvorfor dette er vigtigt

Et alarmsystem, der genererer en klinisk korrekt alarm, men ikke efterfølges af en rettidig reaktion, har ikke i virkeligheden forbedret patientsikkerheden; hele værdiløftet ved fjernovervågning og automatiserede alarmer hviler på at lukke kredsløbet hurtigere, end det ikke-overvågede alternative forløb ville. Fordi forskellige alarmers sværhedsgrad kræver forskellig hast i reaktionen, bør tiden til intervention altid rapporteres pr. sværhedsgrad og ikke som ét gennemsnit, da et hurtigt gennemsnit på tværs af alle alarmer kan skjule en farligt langsom reaktion på det lille antal af de mest alvorlige. Metrikken er også en af de klareste og mest overbevisende måder at vise værdien af et automatiseret overvågningsprogram over for klinisk ledelse og betalere, fordi den direkte kan sammenlignes med den samme organisations tidligere, ikke-automatiserede reaktionstid i et tilsvarende klinisk scenarie.

## Hvordan det beregnes

```
Tid til intervention = tidsstempel(klinisk reaktion igangsat) −
                       tidsstempel(alarm genereret)

Rapportér median og en høj percentil (fx den 90.), opdelt efter
alarmens sværhedsgrad og ikke som ét samlet gennemsnit.

"Klinisk reaktion igangsat" bør defineres præcist og konsekvent, fx
en kliniker, der åbner patientens journal og handler, eller et
dokumenteret forsøg på udgående kontakt, og ikke blot en alarm, der
ses eller kvitteres for uden at der foretages noget.
```

## Gennemarbejdet eksempel

Alarmsystemet i et program for kardiologisk fjernovervågning markerer 200 alvorlige arytmialarmer på en måned. Medianen for tiden fra alarmen genereres, til en kliniker igangsætter udgående kontakt, er 12 minutter, med en 90. percentil på 38 minutter. Historiske data fra den samme populations tidligere, ikke-overvågede forløb (hvor en tilsvarende hændelse typisk først ville komme frem ved det næste planlagte klinikbesøg eller en hospitalsindlæggelse) viser en mediantid til enhver klinisk reaktion, der måles i dage og ikke i minutter. Det er denne sammenligning og ikke tallet på 12 minutter alene, der viser overvågningsprogrammets kliniske værdi; tallet for den 90. percentil er lige så vigtigt, da det identificerer halen af alarmer, der tog over en halv time at handle på, og som kræver sin egen gennemgang af grundårsagerne.

## Datakilder og forbehold

Tidsstempler for alarmgenerering kommer fra overvågningsplatformens egen hændelseslog; tidsstempler for den kliniske reaktion kommer typisk fra den elektroniske patientjournals auditspor eller plejeteamets eget arbejdsgangs- eller opgavestyringssystem, og de to systemer skal være præcist tidssynkroniserede, for at det beregnede interval kan være troværdigt. "Reaktion igangsat" kræver en streng, dokumenteret definition, da en kliniker, der blot ser eller afviser en alarm uden yderligere handling, er en grundlæggende anden og langt mindre betryggende hændelse end en, der udløser en egentlig udgående kontakt eller intervention; en sammenblanding af de to vil få reaktionstiden til at se bedre ud end den kliniske virkelighed. Bemandingsniveauet om natten og i weekenden påvirker ofte tiden til intervention betydeligt, så denne metrik bør rapporteres pr. tidspunkt på dagen og ugedag, hvor alarmvolumen tillader det, og ikke kun som et samlet gennemsnit døgnet rundt, der kan skjule et alvorligt hul i reaktionen uden for arbejdstid.

## Faldgruber

- **At tælle kvittering for en alarm som en reaktion**: at en kliniker ser eller afviser en alarm er ikke det samme som at igangsætte en klinisk reaktion; definér reaktion strengt som en dokumenteret handling og ikke som passiv kvittering.
- **At rapportere én samlet tid på tværs af alle sværhedsgrader**: et hurtigt gennemsnit på tværs af alarmer med lav og høj sværhedsgrad samlet kan skjule en farligt langsom reaktionstid netop for de alarmer med højeste sværhedsgrad, som betyder mest.
- **At ignorere effekter af bemandingsmønstre**: reaktionstiden varierer ofte betydeligt efter tidspunkt på dagen og ugedag på grund af bemandingsniveauer; ét samlet gennemsnit kan skjule et systematisk hul i reaktionen uden for arbejdstid eller i weekenden.
- **At sammenligne tid til intervention på tværs af organisationer med forskellige alarmtærskler**: en organisation med en mere konservativ (mere følsom) alarmtærskel vil generere flere alarmer med lav akuthed, hvilket kan fortynde dens gennemsnitlige reaktionstid sammenlignet med en organisation, der bruger en strengere tærskel, uafhængigt af den faktiske kliniske reaktionsevne.

## Kilder

- NHS England, vejledning om standarder for klinisk reaktion ved fjernovervågning og virtuelle afdelinger
- ONC / HealthIT.gov, vejledning om design og sikkerhed af kliniske alarmsystemer
- Peer reviewet litteratur om reaktionstider på alarmer ved fjernovervågning af patienter og kliniske udfald, for eksempel undersøgelser offentliggjort i npj Digital Medicine

Se også: [enhedsoppetidsrate](../enhedsoppetidsrate/), da et pålideligt tal for tid til intervention afhænger af, at den underliggende overvågningsenhed faktisk er online og kan generere alarmen i første omgang.
