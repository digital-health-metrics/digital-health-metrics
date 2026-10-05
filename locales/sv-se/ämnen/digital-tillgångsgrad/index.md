# Digital tillgångsgrad

Digital tillgångsgrad mäter andelen av en berättigad patientpopulation som har de praktiska medlen att använda en digital hälsoprodukt överhuvudtaget: en bredbands- eller tillförlitlig mobildataanslutning, en internetkapabel enhet, och ett aktivt konto på den relevanta patientportalen eller appen. Det är förutsättningsmåttet för varje annat digitalt hälsomått i denna bok – en population kan inte registrera sig för, engagera sig med, eller dra nytta av någon digital hälsoprodukt som den strukturellt inte kan nå, hur väl designad den produkten än är.

## Varför det är viktigt

Mått på digital hälsoadoption och engagemang förutsätter implicit en population som redan har digital tillgång, och att rapportera adoptions- eller engagemangsgrader utan att först fastställa den underliggande tillgångsgraden riskerar att i tysthet exkludera de patienter som minst sannolikt har den tillgången – som ofta också är de patienter som har störst hälsobehov. HIMSS Digital Health Equity Measurement Framework (DHEMF) och liknande ramverk behandlar digital tillgång som ett grundläggande, förstklassigt jämlikhetsmått just eftersom interventioner byggda utan att ta hänsyn till tillgångsluckor tenderar att förstärka, snarare än minska, befintliga hälsodisparitet: en telemedicin-först-strategi kan oavsiktligt minska tillgången till vård för patienter utan tillförlitlig anslutning eller enhet, även medan den mätbart förbättrar upplevelsen för patienter som redan hade båda. Digital tillgångsgrad bör spåras och rapporteras efter demografiskt och geografiskt segment, eftersom nationella eller organisationsövergripande genomsnitt rutinmässigt döljer stora luckor för specifika populationer.

## Hur den beräknas

```
Digital tillgångsgrad = patienter med bredbands-/mobilanslutning
                        OCH en internetkapabel enhet OCH ett
                        aktivt patientportal- eller appkonto /
                        total berättigad patientpopulation × 100

Rapportera varje delkomponent separat tillsammans med den
kombinerade graden:
  Anslutningsgrad            = patienter med tillförlitlig
                              internetanslutning / berättigad
                              population × 100
  Grad av enhetsägande       = patienter med internetkapabel
                              enhet / berättigad population × 100
  Portalaktiveringsgrad      = patienter med aktivt portal-/
                              appkonto / berättigad population ×
                              100 (se adoptionsgrad för
                              patientportal för den fullständigare
                              adoptionstratten)
```

## Genomräknat exempel

Ett vårdsystem betjänar en berättigad population av 40 000 patienter. En patientundersökning och infrastrukturdata indikerar att 34 000 (85 %) har tillförlitlig bredbands- eller mobilanslutning, 33 000 (82,5 %) har en internetkapabel enhet, och av de patienter som uppfyller båda villkoren har 27 000 (67,5 % av hela den berättigade populationen) ett aktivt patientportalkonto. Att dela upp efter ålder visar att patienter 65 år och äldre har en kombinerad digital tillgångsgrad på endast 48 %, jämfört med 78 % för patienter under 65 – en klyfta som det organisationsövergripande genomsnittet på 67,5 % helt döljer, och en som direkt bör informera om en given tjänst säkert kan erbjudas endast digitalt för denna population.

## Datakällor och förbehåll

Data om anslutning och enhetsägande kommer vanligtvis från en kombination av patientens självrapportering (via enkät eller intagsformulär), Federal Communications Commission (FCC) eller motsvarande nationella kartläggningsdata för bredbandstillgänglighet för en patients geografiska område, och portalaktiveringsdata från organisationens egna system. Bredbandstillgänglighet på områdesnivå (huruvida en leverantör erbjuder tjänster i ett givet postnummer) är en svagare proxy än anslutning på hushållsnivå, eftersom data om tillgänglighet på områdesnivå inte säger något om huruvida en specifik patient faktiskt har råd med eller har valt att prenumerera på den tjänsten – tillgångsgrader på områdes- och hushållsnivå bör inte sammanblandas. Tillgång till enhet och anslutning kan också delas inom ett hushåll (till exempel en smartphone som används av flera familjemedlemmar), vilket data på hushållsnivå från undersökningar fångar bättre än enbart inloggningsdata på individnivå från portalen.

## Fallgropar

- **Att endast rapportera ett organisationsövergripande genomsnitt**: detta döljer tillförlitligt stora tillgångsluckor för äldre, lägre inkomst, landsbygds- eller på annat sätt digitalt marginaliserade patientsegment; dela alltid upp efter demografiskt och geografiskt segment.
- **Att sammanblanda bredbandstillgänglighet på områdesnivå med faktisk hushållstillgång**: att ett postnummer "betjänas" av en bredbandsleverantör betyder inte att alla hushåll i det prenumererar på eller har råd med den tjänsten.
- **Att behandla enhetsägande som ett engångs-, statiskt faktum**: enhetstillgång kan vara övergående (en åldrande enhet, en förlorad eller skadad telefon, en omfördelad delad familjeenhet), så tillgångsgrad bör mätas på återkommande basis, inte antas vara stabil när den väl bedömts.
- **Att designa en helt digital väg innan tillgångsgraden för den berörda populationen fastställts**: att flytta en tjänst till endast digital utan att först bekräfta målpopulationens faktiska digitala tillgångsgrad riskerar att i tysthet exkludera just de patienter som är minst kapabla att nå en alternativ kanal.

## Källor

- HIMSS, Digital Health Equity Measurement Framework (DHEMF)
- Federal Communications Commission (FCC), nationell data om bredbandstillgänglighet och digital jämlikhet
- Pew Research Center, forskning om internet-, bredbands- och enhetstillgång samt trender i den digitala klyftan över demografiska grupper

Se även: [digital hälsolitteracitetsgrad](../digital-hälsolitteracitetsgrad/), det nära besläktade måttet om huruvida patienter som har tillgång faktiskt kan använda den utan hjälp.
