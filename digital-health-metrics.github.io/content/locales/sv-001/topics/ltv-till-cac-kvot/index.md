# LTV-till-CAC-kvot

LTV-till-CAC-kvot jämför en kunds livstidsvärde (LTV) – den totala intäkten eller marginalen som en organisation förväntar sig tjäna från en patient eller kund under hela deras relation med produkten – mot den verkliga kostnaden för att anskaffa den kunden (se verklig kundanskaffningskostnad). Det är det enskilt viktigaste enhetsekonomiska måttet för att bedöma om en digital hälsoorganisations tillväxt är finansiellt hållbar, eftersom en växande kundbas anskaffad med förlust inte är ett tecken på hälsa, oavsett hur positiv tillväxtkurvan ser ut.

## Varför det är viktigt

En digital hälsoorganisation kan stadigt växa sin användarbas samtidigt som den tyst förstör värde på varje ny kund, om anskaffningskostnaden överstiger livstidsvärdet; LTV-till-CAC-kvot är måttet som gör detta synligt på ett sätt som tillväxttakt eller rått kundantal ensamt inte kan. En kvot på 3:1 (livstidsvärde minst tre gånger anskaffningskostnaden) är det allmänt citerade baslinjeriktmärket för en hållbar prenumerations- eller återkommande intäktsverksamhet, vilket tillåter tillräcklig marginal för att täcka driftskostnader utöver anskaffning och ändå generera avkastning; en kvot under 1:1 betyder att organisationen förlorar pengar på varje anskaffad kund, och en kvot långt över 3:1 (till exempel 10:1 eller högre) kan faktiskt indikera underinvestering i tillväxt, eftersom det antyder att organisationen lönsamt skulle kunna anskaffa fler kunder än den för närvarande gör. Investerare, styrelser och betalare som utvärderar ett digitalt hälsoföretags finansiella hållbarhet behandlar denna kvot som en av de första siffrorna de efterfrågar.

## Hur den beräknas

```
LTV = genomsnittlig intäkt (eller marginal) per kund per period ×
      genomsnittlig kundlivstid i samma periodenhet

LTV-till-CAC-kvot = LTV / verklig CAC

En kvot på 3:1 är den allmänt citerade hållbara baslinjen; under
1:1 indikerar att organisationen förlorar pengar på anskaffning;
långt över 3:1 (t.ex. 10:1+) kan indikera underinvestering i
tillväxt.
```

## Genomräknat exempel

En digital hälsoprenumerationstjänst genererar en genomsnittlig månadsintäkt på 40 USD per patient, och den genomsnittliga patienten förblir prenumerant i 18 månader, vilket ger en LTV på 40 USD × 18 = 720 USD. Verklig CAC för denna tjänst (se det ämnets genomräknade exempelsätt) beräknas till 180 USD per anskaffad patient. LTV-till-CAC-kvoten är 720 USD / 180 USD = 4:1, bekvämt över 3:1-hållbarhetsbaslinjen. Om verklig CAC beräknades med endast den annonsplattformsrapporterade kostnaden (120 USD, innan byråavgifter och intagsarbete inkluderats), skulle kvoten framstå som 6:1 – en materiellt mer gynnsam, och vilseledande, bild av enhetsekonomin än den verkliga 4:1-siffran.

## Datakällor och förbehåll

LTV beror på ett antagande om genomsnittlig kundlivstid, som i sig härleds från organisationens egen retentions- eller avhoppsdata (se användarretentionsgrad) – en verksamhet med hög avhoppsgrad har en kortare effektiv genomsnittlig livstid och därför en lägre LTV, även om dess intäkt per period per kund ser sund ut. Eftersom LTV är en framåtblickande uppskattning snarare än ett observerat historiskt faktum, bör den beräknas om regelbundet allt eftersom retentionsdata ackumuleras och revideras om avhoppsantaganden visar sig vara felaktiga, snarare än fixeras en gång och lämnas föråldrad. Att använda plattformsrapporterad CAC istället för verklig CAC i denna kvot är ett av de vanligaste sätten en organisation kan övertyga sig själv om att dess enhetsekonomi är friskare än den faktiskt är, eftersom en underskattad CAC mekaniskt blåser upp kvoten.

## Fallgropar

- **Att använda plattformsrapporterad CAC istället för verklig CAC**: detta blåser mekaniskt upp kvoten och kan få en ohållbar anskaffningsstrategi att se hållbar ut; använd alltid den fullt belastade verkliga CAC-siffran.
- **Att använda ett föråldrat eller optimistiskt antagande om genomsnittlig kundlivstid**: LTV beräknad från en föråldrad retentionskurva kommer inte att återspegla aktuellt avhoppsbeteende, särskilt efter en produkt-, pris- eller marknadsförändring som förskjuter retentionen.
- **Att behandla en mycket hög kvot som otvetydigt bra**: en kvot långt över 3:1 kan signalera underinvestering i tillväxt snarare än exceptionell effektivitet, eftersom det antyder att organisationen sannolikt skulle kunna anskaffa fler kunder lönsamt än den för närvarande gör.
- **Att beräkna en enda sammanslagen kvot över mycket olika kundsegment**: ett segment med hög intäkt och låg avhoppsgrad kan dölja ett annat segment med dålig enhetsekonomi; beräkna kvoten per meningsfullt segment (t.ex. efter anskaffningskanal eller produktlinje) där volymen tillåter det.

## Källor

- Kollegialt granskad och branschlitteratur om enhetsekonomi för prenumeration och återkommande intäkter, allmänt använda riktmärkningsramverk från riskkapital- och SaaS-mätningsforskningsorganisationer
- Healthcare Financial Management Association (HFMA), vägledning om finansiella hållbarhetsmått för digitala hälsoorganisationer
- Rock Health och liknande organisationer för marknadsundersökning inom digital hälsa, branschriktmärkning för enhetsekonomi inom digital hälsa

Se även: [verklig kundanskaffningskostnad](../verklig-kundanskaffningskostnad/) och [marknadsföringseffektivitetskvot](../marknadsföringseffektivitetskvot/), de andra två kärnmåtten för tillväxtekonomi som denna kvot vanligtvis rapporteras tillsammans med.
