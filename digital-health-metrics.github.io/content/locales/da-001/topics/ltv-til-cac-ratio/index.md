# LTV-til-CAC-ratio

LTV-til-CAC-ratioen sammenligner en kundes livstidsværdi (LTV), den samlede indtægt eller avance, som en organisation forventer at tjene på en patient eller kunde gennem hele vedkommendes forhold til produktet, med den reelle omkostning ved at erhverve den pågældende kunde (se den reelle kundeerhvervelsesomkostning). Det er den vigtigste enkeltstående enhedsøkonomiske metrik til at vurdere, om en digital sundhedsorganisations vækst er økonomisk bæredygtig, fordi en voksende kundebase, der er erhvervet med tab, ikke er et tegn på sundhed, uanset hvor positiv vækstkurven ser ud.

## Hvorfor dette er vigtigt

En digital sundhedsorganisation kan vokse sin brugerbase støt og samtidig i det stille ødelægge værdi på hver ny kunde, hvis erhvervelsesomkostningen overstiger livstidsværdien; LTV-til-CAC-ratioen er den metrik, der gør det synligt på en måde, som vækstrate eller rå kundetal alene ikke kan. En ratio på 3:1 (livstidsværdi på mindst tre gange erhvervelsesomkostningen) er det udbredt citerede baselinebenchmark for en bæredygtig abonnements- eller tilbagevendende indtægtsvirksomhed, fordi den giver tilstrækkelig margin til at dække driftsomkostninger ud over erhvervelsen og stadig give et afkast; en ratio under 1:1 betyder, at organisationen taber penge på hver erhvervet kunde, og en ratio langt over 3:1 (for eksempel 10:1 eller højere) kan faktisk tyde på underinvestering i vækst, fordi det antyder, at organisationen rentabelt kunne erhverve flere kunder, end den gør nu. Investorer, bestyrelser og betalere, der vurderer et digitalt sundhedsfirmas økonomiske bæredygtighed, behandler denne ratio som et af de første tal, de beder om.

## Hvordan det beregnes

```
LTV = gennemsnitlig indtægt (eller avance) pr. kunde pr. periode ×
      gennemsnitlig kundelevetid i den samme periodeenhed

LTV-til-CAC-ratio = LTV / reel CAC

En ratio på 3:1 er den almindeligt citerede bæredygtige baseline;
under 1:1 betyder, at organisationen taber penge på erhvervelsen;
langt over 3:1 (fx 10:1+) kan tyde på underinvestering i vækst.
```

## Gennemarbejdet eksempel

En digital sundhedsabonnementstjeneste genererer en gennemsnitlig månedlig indtægt på 40 USD pr. patient, og den gennemsnitlige patient forbliver abonnent i 18 måneder, hvilket giver en LTV på 40 USD × 18 = 720 USD. Den reelle CAC for denne tjeneste (se fremgangsmåden i det emnes gennemarbejdede eksempel) er beregnet til 180 USD pr. erhvervet patient. LTV-til-CAC-ratioen er 720 USD / 180 USD = 4:1, komfortabelt over bæredygtighedsbaselinen på 3:1. Hvis den reelle CAC blot var beregnet ud fra annonceplatformens rapporterede omkostning (120 USD, før bureauhonorarer og arbejdsomkostninger til indskrivning er lagt til), ville ratioen fremstå som 6:1, et væsentligt mere gunstigt og vildledende billede af enhedsøkonomien end de reelle 4:1.

## Datakilder og forbehold

LTV afhænger af en antagelse om den gennemsnitlige kundelevetid, som selv er udledt af organisationens egne data om fastholdelse eller frafald (se brugerfastholdelsesraten): en virksomhed med højt frafald har en kortere effektiv gennemsnitlig levetid og dermed en lavere LTV, selv om indtægten pr. kunde pr. periode ser sund ud. Fordi LTV er et fremadrettet skøn og ikke et observeret historisk faktum, bør den beregnes igen regelmæssigt, efterhånden som fastholdelsesdata akkumuleres, og revideres, hvis antagelserne om frafald viser sig at være forkerte, i stedet for at blive fastlagt én gang og lades stå som forældet. At bruge platformens rapporterede CAC i stedet for den reelle CAC i denne ratio er en af de mest almindelige måder, hvorpå en organisation kan overbevise sig selv om, at dens enhedsøkonomi er sundere, end den er, da en undervurderet CAC mekanisk blæser ratioen op.

## Faldgruber

- **At bruge platformens rapporterede CAC i stedet for den reelle CAC**: det blæser mekanisk ratioen op og kan få en uholdbar erhvervelsesstrategi til at se holdbar ud; brug altid det fuldt belastede tal for den reelle CAC.
- **At bruge en forældet eller optimistisk antagelse om den gennemsnitlige kundelevetid**: en LTV beregnet ud fra en forældet fastholdelseskurve afspejler ikke den nuværende frafaldsadfærd, især efter en ændring af produkt, priser eller marked, der flytter fastholdelsen.
- **At behandle en meget høj ratio som entydigt god**: en ratio langt over 3:1 kan signalere underinvestering i vækst og ikke ekstraordinær effektivitet, fordi den antyder, at organisationen sandsynligvis rentabelt kunne erhverve flere kunder, end den gør i dag.
- **At beregne én samlet ratio på tværs af meget forskellige kundesegmenter**: et segment med høj indtægt og lavt frafald kan skjule et andet segment med dårlig enhedsøkonomi; beregn ratioen pr. meningsfuldt segment (fx efter erhvervelseskanal eller produktlinje), hvor volumen tillader det.

## Kilder

- Peer reviewet litteratur og brancheliteratur om enhedsøkonomi for abonnement og tilbagevendende indtægter samt udbredte benchmarkingrammer fra venturekapital og forskningsorganisationer inden for SaaS-metrikker
- Healthcare Financial Management Association (HFMA), vejledning om metrikker for økonomisk bæredygtighed for digitale sundhedsorganisationer
- Rock Health og lignende forskningsorganisationer for markedet for digital sundhed, branchebenchmarking af enhedsøkonomi inden for digital sundhed

Se også: [reel kundeerhvervelsesomkostning](../reel-kundeerhvervelsesomkostning/) og [markedsføringseffektivitetsratio](../markedsføringseffektivitetsratio/), de to andre centrale metrikker for vækstøkonomi, som denne ratio typisk rapporteres sammen med.
