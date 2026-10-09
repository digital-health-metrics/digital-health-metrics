# Konsistensgrad för patientengagemang

Konsistensgrad för patientengagemang mäter hur regelbundet en inskriven patient interagerar med en digital hälsoprodukt över tid – till exempel loggar mat eller symtom, registrerar fysisk aktivitet, eller visar hälsodata – snarare än helt enkelt om de någonsin har använt den. Det är ett longitudinellt mått, skilt från ett antal för aktiv användning vid en tidpunkt: två patienter kan ha identisk status "använde appen denna månad" medan den ena loggar konsekvent varje dag och den andra loggar en gång och försvinner i tre veckor, och endast konsistensmåttet skiljer dem åt.

## Varför det är viktigt

Varaktig, regelbunden interaktion med ett digitalt hälsoverktyg är en av de mer tillförlitliga ledande indikatorerna på klinisk nytta, särskilt för beteendeberoende tillstånd som diabetes, viktminskning och psykisk hälsa, där verktygets värde kommer från den vana det stödjer snarare än någon enskild session. En produkt kan rapportera ett sunt antal månatligt aktiva användare medan den i själva verket betjänar en population som loggar in en gång och driver iväg, eftersom månatlig aktiv användning är en låg tröskel som inte säger något om användningsmönstret inom månaden; konsistensmått fångar detta på ett sätt som enkla aktivitetsräkningar inte kan. Eftersom konsistens också är en av de svårare sakerna att upprätthålla under månader snarare än veckor, är det en ärligare signal om produktkvalitet och klinisk passform än korttidsengagemangssiffror, som är benägna att nyhetseffekter omedelbart efter onboarding.

## Hur den beräknas

```
Konsistensgrad för engagemang = veckor med minst en kvalificerande
                                interaktion / totalt antal
                                inskrivna veckor × 100

En "kvalificerande interaktion" bör definieras uttryckligen och
konsekvent (t.ex. en matloggpost, en symtomincheckning, eller en
genomförd aktivitetssynkronisering) — aldrig en passiv händelse
som en appöppning utan loggad åtgärd.

Rapportera som en fördelning, inte bara ett populationsgenomsnitt:
  t.ex. andel patienter med ≥ 80 % veckokonsistens,
       andel med 50-79 %, andel med < 50 %
```

## Genomräknat exempel

En nutritionscoachningsapp skriver in en patient under 12 veckor. Patienten loggar minst en kvalificerande matpost under 9 av dessa 12 veckor, vilket ger en individuell konsistensgrad för engagemang på 9 / 12 × 100 = 75 %. Över appens fullständiga kohort av 2 000 patienter inskrivna under minst 12 veckor upprätthåller 600 patienter (30 %) ≥ 80 % veckokonsistens, 900 (45 %) faller i bandet 50-79 %, och 500 (25 %) faller under 50 %. Att endast rapportera kohortgenomsnittet (som kan landa runt 65 %) skulle dölja att en hel fjärdedel av patienterna knappt engagerar sig alls – ett segment värt att undersöka separat snarare än att spädas ut i ett övergripande genomsnitt.

## Datakällor och förbehåll

Konsistensdata kommer från produktens egna händelseloggar (matposter, aktivitetssynkroniseringar, incheckningar), och definitionen av en "kvalificerande interaktion" har en enorm effekt på den resulterande graden – en tillåtande definition (vilken appöppning som helst) kommer alltid att se bättre ut än en strikt (en genomförd, meningsfull loggpost), så definitionen som används måste anges tydligt tillsammans med alla rapporterade siffror. Automatiskt synkroniserad data (till exempel en uppkopplad fitnesstracker som synkroniserar aktivitet i bakgrunden) bör rapporteras separat från manuellt loggad data, eftersom automatisk synkronisering kan blåsa upp skenbar konsistens utan att återspegla någon aktiv patientinsats eller engagemang med produktens vägledning.

## Fallgropar

- **Att sammanblanda appöppningar med meningsfullt engagemang**: en passiv appöppning (till exempel utlöst av en push-notifikation) är inte detsamma som en loggad matpost eller genomförd incheckning; definiera och rapportera endast om kvalificerande interaktioner.
- **Att endast rapportera populationsgenomsnittet**: en sund genomsnittlig konsistensgrad kan dölja en bimodal population av högt engagerade och nästan helt oengagerade patienter; rapportera fördelningen över konsistensband, inte bara genomsnittet.
- **Att ignorera inskrivningslängdsnämnaren**: att jämföra konsistensgrad mellan patienter inskrivna under mycket olika tidslängder utan att beakta inskrivningens varaktighet kommer att snedvrida mot vilken grupp som helst som hade ett kortare, lättare upprätthållet mätfönster.
- **Automatisk bakgrundssynkronisering som blåser upp graden**: en passivt synkroniserad bärbar dataström kan få en oengagerad patient att framstå som konsekvent aktiv utan någon verklig beteendeförändring eller produktengagemang från deras sida.

## Källor

- Kollegialt granskad litteratur om mönster för digitalt hälsoengagemang och deras relation till kliniska utfall, exempelvis studier publicerade i Journal of Medical Internet Research (JMIR)
- American Medical Informatics Association (AMIA), vägledning om kvalitet på patientgenererad hälsodata och mätning av engagemang
- Digital Therapeutics Alliance, bästa praxis-vägledning om mätning av engagemang och utfall för digitala terapeutika

Se även: [användarretentionsgrad](../användarretentionsgrad/), det nära besläktade måttet om huruvida en patient förblir inskriven alls, till skillnad från hur konsekvent de engagerar sig medan de är inskrivna.
