# Reell Kostnad for Kundeanskaffelse

Reell kostnad for kundeanskaffelse (reell CAC) er den fullt belastede kostnaden ved å anskaffe én ny betalende kunde eller innrullert pasient, inkludert ikke bare utgifter til betalt annonsering, men enhver annen kostnad som i vesentlig grad bidro til anskaffelsen: honorarer til byrå og kreativt arbeid, markedsføringsteknologi og analyseinfrastruktur, og, spesifikt for digital helse, arbeidskostnaden for klinisk eller operasjonelt arbeid med innledende kontakt, verifisering av kvalifikasjon og introduksjon. Den finnes som en egen metrikk fordi anskaffelseskostnadstall rapportert av annonseplattformer rutinemessig og vesentlig undervurderer organisasjonens reelle kostnad per anskaffet kunde.

## Hvorfor dette er viktig

Digitale helseorganisasjoner som styrer vekst kun ved hjelp av annonseplattformenes rapporterte kostnad per anskaffelse tar rutinemessig ressursallokeringsbeslutninger på tall som utelater 30–50 % av den reelle anskaffelseskostnaden, fordi plattformenes tall bare fanger mediekostnader og utelater byråhonorarer, lisenser for markedsføringsteknologi og, avgjørende for helsetjenester, det arbeidskrevende arbeidet med innledende kontakt og verifisering av kvalifikasjon som et klinisk eller operasjonelt team utfører for hver ny pasient før vedkommende kan regnes som anskaffet. Dette gapet betyr mer i digital helse enn i de fleste andre sektorer nettopp fordi klinisk arbeid med innledende kontakt er dyrt og obligatorisk, i motsetning til i netthandel, der et "salg" ikke krever noe sammenlignbart arbeid i bakkant. Et team som optimaliserer markedsføringsutgifter mot et kunstig lavt CAC-tall vil systematisk overinvestere i kanaler som ser billige ut på et plattformdashbord, men som er dyre når den reelle CAC er beregnet.

## Hvordan det beregnes

```
Reell CAC = (utgifter til betalte medier + byrå- og kreative honorarer +
             kostnader til markedsføringsteknologi og analyse + kostnad
             for klinisk/operasjonelt arbeid med innledende kontakt) /
             nye kunder eller pasienter anskaffet i perioden

Kostnaden for klinisk/operasjonelt arbeid med innledende kontakt bør
estimeres ut fra belastet arbeidskostnad (lønn, goder, overhead) ×
gjennomsnittlig antall timer brukt per anskaffet pasient på innledende
kontakt, verifisering av kvalifikasjon og introduksjon.
```

## Gjennomarbeidet eksempel

Et digitalt helseselskap anskaffer 500 nye pasienter i en måned. Annonseplattformenes dashbord rapporterer en blandet kostnad per anskaffelse på 120 USD, basert på 60 000 USD i utgifter til betalte medier. Å legge til byråhonorarer på 9 000 USD, kostnader til markedsføringsteknologi på 6 000 USD og en estimert arbeidskostnad for innledende kontakt på 45 minutter per pasient til en fullt belastet personalkostnad på 40 USD/time (500 × 0,75 × 40 USD = 15 000 USD) gir en total anskaffelseskostnad på 60 000 + 9 000 + 6 000 + 15 000 = 90 000 USD. Reell CAC er 90 000 / 500 = 180 USD, 50 % høyere enn tallet på 120 USD annonseplattformen alene rapporterte, og det er tallet som faktisk bør informere kanalbudsjettering og beslutninger om enhetsøkonomi.

## Datakilder og forbehold

Utgifter til betalte medier og plattformrapportert kostnad per anskaffelse kommer direkte fra annonseplattformene selv (søk, sosiale medier, programmatisk); byråhonorarer og kostnader til markedsføringsteknologi kommer fra økonomi- eller leverandørgjeldsregistre; arbeidskostnaden for innledende kontakt er den vanskeligste komponenten å hente nøyaktig og krever vanligvis enten en tids- og bevegelsesstudie eller et rimelig estimat avtalt med operasjonell ledelse, siden de fleste organisasjoner ikke sporer personalets tid per anskaffelse som standard. Reell CAC bør beregnes per anskaffelseskanal der volumet tillater det, siden arbeidskostnaden for innledende kontakt per pasient ofte er lik på tvers av kanaler mens mediekostnaden varierer enormt, noe som betyr at gapet mellom plattformrapportert og reell CAC er proporsjonalt størst for de kanalene som ser billigst ut.

## Fallgruver

- **Stole utelukkende på annonseplattformenes dashbord**: plattformrapportert kostnad per anskaffelse utelater strukturelt byråhonorarer, kostnader til markedsføringsteknologi og arbeid med innledende kontakt, og er ikke en erstatning for en beregning av reell CAC.
- **Utelate klinisk eller operasjonelt arbeid med innledende kontakt**: dette er konsekvent den hyppigst oversette kostnadskomponenten i digital helse spesielt, og er ofte det enkeltstående største bidraget til gapet mellom plattformrapportert kostnad og reell CAC.
- **Beregne gjennomsnitt av reell CAC på tvers av alle kanaler**: et blandet tall for reell CAC kan skjule at én kanal er dramatisk dyrere når belastede kostnader er inkludert, selv om den fremsto som billigst på annonseplattformen alene.
- **Ikke oppdatere estimatene for arbeidskostnad når prosessene for innledende kontakt endres**: en redesign av prosessen for innledende kontakt (for eksempel automatisering av verifisering av kvalifikasjon) kan i vesentlig grad endre reell CAC, og et utdatert estimat av arbeidskostnad vil gi et feil bilde av dagens tall.

## Kilder

- Association of National Advertisers (ANA), veiledning om måling av markedsføringskostnader og mediatransparens
- Fagfellevurdert litteratur og bransjelitteratur om enhetsøkonomi og kostnadsstrukturer for markedsintroduksjon i digital helse, for eksempel analyser publisert av Rock Health og lignende forskningsorganisasjoner for digital helse
- Healthcare Financial Management Association (HFMA), veiledning om fullt belastet kostnadsregnskap i helsetjenesters drift

Se også: [LTV til CAC-forhold](../ltv-til-cac-forhold/), som reell CAC er en av de to inndataene til.
