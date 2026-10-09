# Reel Kundeerhvervelsesomkostning

Den reelle kundeerhvervelsesomkostning (reel CAC) er den fuldt belastede omkostning ved at erhverve én ny betalende kunde eller indskrevet patient. Den omfatter ikke blot udgifter til betalt annoncering, men enhver anden omkostning, der i væsentlig grad bidrog til erhvervelsen: bureau- og kreative honorarer, teknologi til marketing og analyseinfrastruktur samt, specifikt for digital sundhed, den kliniske eller operationelle arbejdsomkostning ved indskrivning, kontrol af berettigelse og introduktion. Den findes som en selvstændig metrik, fordi omkostninger pr. erhvervelse, som annonceplatforme rapporterer, rutinemæssigt og betydeligt undervurderer organisationens reelle omkostning pr. erhvervet kunde.

## Hvorfor dette er vigtigt

Digitale sundhedsorganisationer, der styrer væksten alene ud fra annonceplatformes rapporterede omkostning pr. erhvervelse, træffer rutinemæssigt beslutninger om ressourcefordeling på tal, der udelader 30-50 % af de reelle erhvervelsesomkostninger, fordi platformenes tal kun fanger mediekøb og ikke bureauhonorarer, licenser til marketingteknologi og, afgørende for sundhedsvæsenet, det arbejdskrævende indskrivnings- og berettigelseskontrolarbejde, som et klinisk eller operationelt team udfører for hver ny patient, før vedkommende kan regnes som erhvervet. Forskellen har større betydning inden for digital sundhed end i de fleste andre sektorer netop fordi det kliniske indskrivningsarbejde er dyrt og obligatorisk, i modsætning til e-handel, hvor et "salg" næsten ikke kræver tilsvarende back office-arbejde. Et team, der optimerer marketingudgifterne efter et kunstigt lavt CAC-tal, vil systematisk overinvestere i kanaler, der ser billige ud på en platforms dashboard, men er dyre, når den reelle CAC er beregnet.

## Hvordan det beregnes

```
Reel CAC = (udgifter til betalte medier + bureau- og kreative honorarer +
            omkostninger til marketingteknologi og analyse + omkostning
            til klinisk/operationelt indskrivningsarbejde) / nye kunder
            eller patienter erhvervet i perioden

Omkostningen til klinisk/operationelt indskrivningsarbejde bør
estimeres ud fra den fuldt belastede arbejdsomkostning (løn, goder,
overhead) × det gennemsnitlige antal timer, der bruges pr. erhvervet
patient på indskrivning, kontrol af berettigelse og introduktion.
```

## Gennemarbejdet eksempel

En digital sundhedsvirksomhed erhverver 500 nye patienter på en måned. Annonceplatformenes dashboards rapporterer en samlet omkostning pr. erhvervelse på 120 USD, baseret på 60.000 USD i udgifter til betalte medier. Når man lægger bureauhonorarer på 9.000 USD, omkostninger til marketingteknologi på 6.000 USD og en skønnet arbejdsomkostning til indskrivning på 45 minutter pr. patient til en fuldt belastet personaleomkostning på 40 USD i timen (500 × 0,75 × 40 USD = 15.000 USD), bliver de samlede erhvervelsesomkostninger 60.000 + 9.000 + 6.000 + 15.000 = 90.000 USD. Den reelle CAC er 90.000 / 500 = 180 USD, 50 % højere end de 120 USD, som annonceplatformen alene rapporterede, og det er det tal, der rent faktisk bør ligge til grund for fordelingen af kanalbudgetter og beslutninger om enhedsøkonomi.

## Datakilder og forbehold

Udgifter til betalte medier og platformens rapporterede omkostning pr. erhvervelse kommer direkte fra annonceplatformene selv (søgning, sociale medier, programmatisk); bureauhonorarer og omkostninger til marketingteknologi kommer fra økonomi- eller kreditorbogholderiets registreringer. Omkostningen til indskrivningsarbejde er den komponent, der er sværest at finde præcist, og den kræver normalt enten en tids- og bevægelsesundersøgelse eller et rimeligt skøn aftalt med den operationelle ledelse, da de fleste organisationer ikke registrerer personaletid pr. erhvervelse som standard. Den reelle CAC bør beregnes pr. erhvervelseskanal, hvor volumen tillader det, da arbejdsomkostningen til indskrivning pr. patient ofte er den samme på tværs af kanaler, mens mediekøbet varierer enormt, hvilket betyder, at forskellen mellem platformens rapporterede og den reelle CAC er forholdsmæssigt størst for de kanaler, der ser billigst ud.

## Faldgruber

- **Udelukkende at stole på annonceplatformenes dashboards**: omkostning pr. erhvervelse, som platformene rapporterer, udelader strukturelt bureauhonorarer, omkostninger til marketingteknologi og indskrivningsarbejde og kan ikke erstatte en beregning af den reelle CAC.
- **At udelade klinisk eller operationelt indskrivningsarbejde**: det er konsekvent den omkostningskomponent, der oftest overses i netop digital sundhed, og ofte den enkeltstående største årsag til forskellen mellem platformens rapporterede omkostning og den reelle CAC.
- **At beregne gennemsnittet af den reelle CAC på tværs af alle kanaler**: et blandet tal for den reelle CAC kan skjule, at én kanal er dramatisk dyrere, når de fuldt belastede omkostninger er medregnet, selv om den virkede billigst på annonceplatformen alene.
- **Ikke at opdatere skønnene over arbejdsomkostninger, når indskrivningsprocesserne ændres**: en redesign af indskrivningsprocessen (for eksempel automatisering af kontrollen af berettigelse) kan ændre den reelle CAC væsentligt, og et forældet arbejdsskøn vil give et forkert tal for den aktuelle omkostning.

## Kilder

- Association of National Advertisers (ANA), vejledning om måling af marketingomkostninger og gennemsigtighed i medier
- Peer reviewet og branchelitteratur om enhedsøkonomi og go-to-market-omkostningsstrukturer inden for digital sundhed, for eksempel analyser offentliggjort af Rock Health og lignende forskningsorganisationer inden for digital sundhed
- Healthcare Financial Management Association (HFMA), vejledning om fuldt belastet omkostningsregnskab i sundhedsvæsenets drift

Se også: [LTV-til-CAC-ratio](../ltv-til-cac-ratio/), som den reelle CAC er det ene af de to inputs til.
