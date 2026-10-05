# Noggrannhet i triageledning

Noggrannhet i triageledning är andelen patientkontakter där ett automatiserat eller AI-assisterat triageverktyg korrekt leder en patient till lämplig vårdnivå och vårdinrättning – till exempel egenvård, primärvård, akutmottagning för icke-livshotande tillstånd eller akutsjukvård – bedömt mot en kliniskt validerad referensstandard. Det är säkerhets- och effektivitetsmåttet för varje digital ingångsdörr, symtomkontrollant eller AI-triagesystem: hela verktygets värdeerbjudande vilar på att leda patienter korrekt, snabbt och konsekvent.

## Varför det är viktigt

Ett felaktigt triageverktyg orsakar skada i båda riktningarna: undertriage (att leda en patient till en lägre vårdnivå än vad som behövs) kan fördröja behandling för ett verkligt nödfall, medan övertriage (att leda en patient till en högre vårdnivå än vad som behövs) slösar knapp akut- och brådskande vårdkapacitet och ökar kostnad och patientoro utan klinisk vinning. Eftersom dessa två felmoder har så olika konsekvenser bör noggrannhet i triageledning alltid rapporteras tillsammans med riktningen på felen, inte som en enda sammanlagd noggrannhetssiffra som döljer om verktyget felar säkert eller farligt. Tillsynsmyndigheter och vårdsystem som utvärderar ett AI-triageverktyg för driftsättning kräver i allt högre grad denna typ av skiktad noggrannhetsrapportering som ett villkor för klinisk godkännande, särskilt för verktyg som fungerar med en viss grad av autonomi från en kliniker.

## Hur den beräknas

```
Noggrannhet i triageledning = korrekt ledda kontakter / totalt
                              triagerade kontakter × 100

Rapportera undertriage och övertriage separat:
  Andel undertriage = kontakter lett till en lägre
                      skärpenivå än referensstandarden /
                      totalt triagerade kontakter × 100
  Andel övertriage  = kontakter lett till en högre
                      skärpenivå än referensstandarden /
                      totalt triagerade kontakter × 100

Referensstandarden är vanligtvis en retrospektiv klinisk
granskning av samma fall, blindad för verktygets utdata där
möjligt.
```

## Genomräknat exempel

Ett AI-symtomkontrollverktyg triagerar 5 000 patientkontakter under en månad. En blindad klinisk granskning av ett slumpmässigt urval av 500 av dessa kontakter finner att 430 ledes till rätt skärpenivå (noggrannhet 86 %), 45 undertriagerades (9 %) och 25 övertriagerades (5 %). Andelen undertriage på 9 % är den siffra som mest akut behöver undersökas, eftersom den representerar kontakter där en patient kan ha hänvisats till mindre brådskande vård än vad hen faktiskt behövde; andelen övertriage på 5 % är ett kapacitets- och kostnadsproblem men inte ett direkt säkerhetsproblem.

## Datakällor och förbehåll

Referensstandarden mot vilken triagenoggrannhet mäts är oerhört viktig: en granskning av en enda kliniker introducerar den klinikerns egna bedömningsvariabilitet, så en trovärdig noggrannhetssiffra kräver vanligtvis antingen flera oberoende granskare med dokumenterad interbedömarövereinsstämmelse, eller jämförelse mot ett efterföljande, bekräftat kliniskt utfall (vilken vård patienten faktiskt behövde, fastställt i efterhand). Urvalet spelar också roll: att endast granska ett bekvämlighetsurval av kontakter, eller endast de som flaggats som ovanliga, kommer inte att ge en siffra som generaliserar till verktygets övergripande prestanda. Noggrannhetssiffror bör rapporteras separat efter presenterad symtom- eller besvärskategori där den underliggande fallvolymen tillåter det, eftersom triageverktyg sällan presterar enhetligt över alla tillstånd.

## Fallgropar

- **Att rapportera en enda sammanslagen noggrannhetssiffra**: att slå ihop undertriage och övertriage till en siffra döljer om verktygets fel lutar mot den farligare felmoden; rapportera alltid separat.
- **Att använda en enda, oblindad granskare som referensstandard**: detta kan i tysthet snedvrida noggrannhetssiffran mot vad den granskaren själv skulle ha gjort, snarare än en oberoende klinisk standard.
- **Att endast validera på retrospektiv, bekväm data**: ett verktygs verkliga ledningsnoggrannhet under levande, tvetydig patientinmatning skiljer sig ofta väsentligt från dess noggrannhet på en kurerad valideringsuppsättning som sammanställts under utvecklingen.
- **Att ignorera prestandadrift efter driftsättning**: en AI-triagemodells noggrannhet kan försämras över tid när patientpopulationer, presenterade symtom eller tillgänglighet till vårdvägar förändras; noggrannheten bör mätas om regelbundet, inte valideras en gång och antas vara stabil.

## Källor

- ONC / HealthIT.gov, vägledning om säkerhet och kvalitetssäkring av kliniskt beslutsstöd och AI-aktiverade verktyg
- Kollegialt granskad litteratur om noggrannhet hos symtomkontrollanter och AI-triageverktyg, exempelvis studier publicerade i JAMIA, npj Digital Medicine och BMJ Health & Care Informatics
- NHS England, vägledning om klinisk säkerhet för digitala triage- och fjärrkonsultationsverktyg (DCB0129/DCB0160 kliniska riskhanteringsstandarder)

Se även: [handläggningstid för digital remiss](../handläggningstid-för-digital-remiss/), processmåttet mest direkt nedströms en triagebeslut.
