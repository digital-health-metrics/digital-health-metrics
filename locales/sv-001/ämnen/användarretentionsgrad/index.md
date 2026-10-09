# Användarretentionsgrad

Användarretentionsgrad är andelen användare aktiva under en startperiod som förblir aktiva under en senare period, och dess motsats, avhoppsgrad (churn), är andelen som helt slutar använda produkten. Medan adoptionsgrad för patientportal (se det ämnet) mäter om en patient någonsin meningsfullt aktiverar en digital hälsoprodukt, mäter retention om de fortsätter använda den – och för alla digitala hälsoprodukter av prenumerationstyp eller med pågående vård är retention vanligtvis det enskilda mått som är mest tätt kopplat till både klinisk effekt och kommersiell hållbarhet.

## Varför det är viktigt

En digital hälsoprodukt som inte kan behålla användare kan inte leverera varaktig klinisk nytta, oavsett hur starka dess initiala adoptions- eller aktiveringssiffror är: ett verktyg för hantering av kroniska tillstånd som används i två veckor och sedan övergivs kommer sannolikt inte att flytta ett biometriskt utfall som beror på månader av varaktig beteendeförändring. Retention är också ett av de mest kommersiellt betydelsefulla måtten som ett digitalt hälsoföretag rapporterar till investerare och betalare, eftersom retentionskurvor (formen på avtagandet över tid, inte bara en enda retentionsprocent) avslöjar om produkten har hittat ett genuint hållbart användningsmönster eller helt enkelt fångar nyhetsdrivet initialt intresse som avtar på ett förutsägbart sätt. En retentionskurva som planar ut efter en initial nedgång (patienter som tar sig förbi den första månaden tenderar att stanna) är en mycket annorlunda, och mycket friskare, signal än en som fortsätter att minska stadigt utan botten.

## Hur den beräknas

```
Retentionsgrad (period N) = användare aktiva under period N som
                            också var aktiva under startkohortens
                            period / användare under
                            startkohortens period × 100

Avhoppsgrad = 1 − retentionsgrad (för samma period)

Rapportera som en kohortretentionskurva (retention vid dag/vecka/
månad 1, 2, 3…), inte en enda tidpunktssiffra, eftersom en enda
ögonblicksbild sammanblandar nyligen anslutna användare (som ännu
inte haft en chans att hoppa av) med långvariga sådana.
```

## Genomräknat exempel

En digital hälsoapp skriver in en kohort av 1 000 nya användare i januari. Vid slutet av månad 1 är 640 av de ursprungliga 1 000 fortfarande aktiva (månad 1-retention 64 %). Vid slutet av månad 3 förblir 410 aktiva (månad 3-retention 41 %). Vid månad 6 förblir 380 aktiva (månad 6-retention 38 %). Formen på denna kurva – en brant initial nedgång följd av en utplaning mellan månad 3 och 6 – antyder att produkten behåller en stabil kärna av användare när de väl passerat en initial adoptionströskel, vilket är en materiellt annorlunda och mer uppmuntrande signal än om nedgången från månad 3 till månad 6 hade fortsatt i samma takt som månad 1 till 3.

## Datakällor och förbehåll

Retention beräknas från produktens egna inloggnings- eller aktivitetshändelseloggar, med en konsekvent definition av "aktiv" (till exempel minst en kvalificerande session under perioden) för varje kohort som jämförs. Kohorter bör jämföras på likvärdig grund – samma startdefinition av "aktiv", samma längd på observationsfönstret – eftersom även små definitionsskillnader (30-dagars kontra 28-dagars månader, eller en striktare kontra lösare "aktiv"-tröskel) kan skifta en rapporterad retentionsprocent med flera punkter utan någon verklig skillnad i användarbeteende. Säsongseffekter är vanliga i hälsoappar kopplade till nyårslöften eller specifika hälsomedvetandeperioder, så en kohortjämförelse år för år är vanligtvis mer informativ än att jämföra angränsande kohorter från olika tider på året.

## Fallgropar

- **Att rapportera en enda retentionsögonblicksbild istället för en kurva**: en enda siffra "X % av användarna är fortfarande aktiva" utan formen på avtagandet över tid kan inte skilja en produkt som planar ut (frisk) från en i kontinuerlig nedgång (ohälsosam).
- **Att ändra "aktiv"-definitionen mellan rapporteringsperioder**: att luckra upp definitionen av en aktiv användare (till exempel genom att räkna en passiv appöppning istället för en genomförd åtgärd) kan få retention att framstå som förbättrad när den faktiska användningen inte alls har förändrats.
- **Att ignorera kohortsäsongsvariation**: att jämföra en januarikohorts retention (ofta uppblåst av inskrivning på grund av nyårslöften, vilket i genomsnitt lockar en mindre motiverad kohort) mot en kohort som förvärvats vid en annan tid på året kan ge vilseledande trendslutsatser.
- **Att blanda organiska och betalda förvärvskohorter**: användare förvärvade genom olika kanaler behåller ofta mycket olika; att blanda dem till en aggregerad retentionssiffra kan dölja ett kanalspecifikt retentionsproblem.

## Källor

- Kollegialt granskad litteratur om engagemang och avhopp i digitala hälsoappar, exempelvis studier publicerade i Journal of Medical Internet Research (JMIR mHealth and uHealth)
- Digital Therapeutics Alliance, bästa praxis-vägledning om mätning av engagemang och retention för digitala terapeutika
- Branschbenchmarkingrapporter om retention för mobila hälsoappar, från analysplattformar och organisationer för marknadsundersökning inom digital hälsa

Se även: [konsistensgrad för patientengagemang](../konsistensgrad-för-patientengagemang/), som mäter kvaliteten på engagemang bland behållna användare, till skillnad från om de förblir inskrivna alls.
