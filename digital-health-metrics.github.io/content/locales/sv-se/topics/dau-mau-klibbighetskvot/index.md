# DAU/MAU-klibbighetskvot

DAU/MAU-klibbighetskvot jämför dagligen aktiva användare (DAU) med månatligen aktiva användare (MAU) – samma underliggande mått används för veckovis aktiva användare (WAU) mot MAU – för att uttrycka hur stor andel av en produkts bredare användarbas som engagerar sig med den under en given dag. Det är det standardmässiga produktanalysmåttet för engagemangsintensitet, skilt från huruvida en användare behålls alls (se användarretentionsgrad) eller hur konsekvent en specifik inskriven patient engagerar sig över tid (se konsistensgrad för patientengagemang): klibbighet beskriver användningsrytmen på populationsnivå, inte någon individs mönster.

## Varför det är viktigt

Två digitala hälsoprodukter kan rapportera ett identiskt antal månatligt aktiva användare samtidigt som de har mycket olika underliggande engagemangsintensitet: en där de flesta av dessa användare öppnar appen nästan dagligen, och en annan där de flesta öppnar den en gång i månaden strax innan den annars skulle räknas som inaktiv. DAU/MAU-klibbighetskvot skiljer dessa två mycket olika situationer med en enda, enkel, välförstådd riktmärkessiffra som produkt- och kliniska team kan spåra över tid och jämföra mot kända branschintervall – en kvot runt 20 % är ett vanligt citerat rimligt riktmärke för många konsumentappar, medan produkter med daglig vana (en mat- eller symtomdagbok som en patient förväntas använda varje dag) bör bedömas mot en betydligt högre ribba. Eftersom klibbighet är känsligt för hur "aktiv" definieras, är det mest användbart som en trend för en produkt över tid, och som en jämförelse mot produkter byggda för ett liknande användningsmönster, snarare än som ett absolut branschövergripande riktmärke.

## Hur den beräknas

```
DAU/MAU-klibbighetskvot = genomsnittliga dagligen aktiva användare
                          under perioden / månatligen aktiva
                          användare under samma period × 100

WAU/MAU-kvoten (veckovis, samma princip) är en mjukare variant,
mer lämplig för produkter som förväntas användas några gånger i
veckan snarare än dagligen.

"Aktiv" måste definieras precist och konsekvent (t.ex. en genomförd
kvalificerande åtgärd, inte en passiv appöppning) i både täljare
och nämnare.
```

## Genomräknat exempel

En digital diabeteshanteringsapp har 10 000 månatligen aktiva användare under en given månad, definierat som vilken användare som helst som genomför minst en kvalificerande åtgärd (en glukoslogg, en måltidslogg, eller en läkemedelsavprickning) under den månaden. Att genomsnittsberäkna dagligen aktiva användarantal över de 30 dagarna i den månaden ger ett genomsnittligt DAU på 2 200. DAU/MAU-klibbighetskvoten är 2 200 / 10 000 × 100 = 22 %, vilket indikerar att på en typisk dag engagerar sig cirka 22 % av appens månatliga användarbas med den – en rimlig siffra för ett verktyg för kronisk sjukdom med daglig vana, även om produktteamet skulle vilja se den trenda uppåt över tid när det ideala beteendet (daglig loggning) blir mer vanemässigt för inskrivna patienter.

## Datakällor och förbehåll

DAU, WAU och MAU beräknas alla från samma underliggande händelseloggar, med en konsekvent definition av en "kvalificerande aktiv" händelse över alla fönster; att ändra den definitionen mellan täljar- och nämnareberäkningarna (till exempel att räkna vilken appöppning som helst för DAU men endast en genomförd åtgärd för MAU) kommer att producera en snedvriden kvot som inte återspeglar verklig engagemangsintensitet. Det lämpliga riktmärket för klibbighet beror starkt på produktens avsedda användningsmönster: ett verktyg avsett att användas en gång i veckan (en veckovis symtomincheckning) kommer och bör ha en lägre DAU/MAU-kvot än ett verktyg avsett att användas dagligen (en följeslagarapp för en kontinuerlig glukosmätare), så klibbighet bör alltid tolkas mot produktens egen avsedda användningsfrekvens, inte ett enda universellt mål.

## Fallgropar

- **Att jämföra klibbighetskvoter mellan produkter med olika avsedd användningsfrekvens**: ett verktyg för veckovis användning kommer strukturellt att visa en lägre DAU/MAU-kvot än ett verktyg för daglig användning även om båda presterar exakt som avsett för sina respektive användningsfall; riktmärk mot produktens egen avsedda rytm, inte ett enda universellt mål.
- **Att använda inkonsekventa aktivitetsdefinitioner mellan täljare och nämnare**: detta kan producera en klibbighetskvot som inte återspeglar genuin engagemangsintensitet och inte meningsfullt kan jämföras över tid eller mot andra produkter.
- **Att behandla en stigande klibbighetskvot som otvetydigt positiv utan att kontrollera den övergripande MAU-trenden**: en stigande kvot driven av en krympande, mer vanemässig kärnanvändarbas medan den totala MAU minskar är en mycket annorlunda – och mer oroande – situation än en driven av genuint ökande dagligt engagemang över en stabil eller växande användarbas.
- **Att ignorera veckodags- och säsongseffekter på DAU**: DAU kan variera avsevärt beroende på veckodag (vardag kontra helg) eller säsong för många hälsoprodukter; genomsnittsberäkna DAU över en period som fångar en fullständig naturlig cykel snarare än ett kort fönster som kan vara skevt.

## Källor

- Kollegialt granskad och branschlitteratur om mått för mobilt och digitalt produktengagemang, allmänt använda riktmärkningsramverk från mobila analysplattformar
- Digital Therapeutics Alliance, bästa praxis-vägledning om mätning av engagemang för digitala terapeutika
- Kollegialt granskad litteratur om mätning av digitalt hälsoengagemang, exempelvis studier publicerade i Journal of Medical Internet Research (JMIR mHealth and uHealth)

Se även: [användarretentionsgrad](../användarretentionsgrad/) och [konsistensgrad för patientengagemang](../konsistensgrad-för-patientengagemang/), de två relaterade engagemangsmått som denna kvot oftast förväxlas med.
