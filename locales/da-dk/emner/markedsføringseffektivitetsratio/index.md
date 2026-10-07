# Markedsføringseffektivitetsratio

Markedsføringseffektivitetsratioen (MER) er den samlede indtægt divideret med de samlede markedsføringsudgifter på tværs af alle kanaler i en defineret periode. Den findes som en bevidst, uafhængig realitetstjek af platformenes rapporterede afkast på annonceudgifter (ROAS), som måler hver kanals egen påståede bidrag til indtægten og strukturelt har tilbøjelighed til at give sig selv for meget kredit. MER ser i stedet på de samlede indtægter mod de samlede udgifter, et tal ingen enkelt annonceplatform kan forvride.

## Hvorfor dette er vigtigt

Annonceplatforme rapporterer hver især ROAS ud fra deres egen attributionsmodel, og fordi de fleste organisationer kører flere kanaler samtidig, bliver den samme konverterende kunde ofte krediteret af mere end én platform, så summen af hver platforms selvrapporterede ROAS rutinemæssigt overvurderer det samlede marketingbidrag sammenlignet med de faktiske samlede indtægter. MER omgår dette problem helt ved at sammenligne de samlede indtægter med de samlede udgifter på organisationsniveau, hvilket gør det langt sværere at forvride gennem manipulation af attribution eller platformsvenlig rapportering, og det er netop derfor, økonomi- og ledelsesteams i stigende grad behandler den som den troværdige overordnede effektivitetskontrol, som tal rapporteret af de enkelte platforme kalibreres mod. Et marketingteam, der rapporterer stærk ROAS på hver enkelt kanal, mens den samlede MER falder, har et reelt problem med effektivitet eller overlappende attribution, som rapportering på kanalniveau alene ikke vil afsløre.

## Hvordan det beregnes

```
MER = samlede indtægter / samlede markedsføringsudgifter (alle kanaler,
      samme periode)

I modsætning til ROAS beregnes MER ikke pr. kanal: det er et enkelt tal
for hele organisationen, netop fordi dens værdi kommer af, at den er
immun over for en enkelt platforms attributionspåstande.

En stigende MER over tid ved stabile eller voksende udgifter tyder på
forbedret samlet markedsføringseffektivitet; en stabil MER ved voksende
indtægter kan tyde på, at væksten kommer fra kilder, der ikke er
drevet af markedsføring (fx henvisninger, organisk søgning,
mund-til-mund).
```

## Gennemarbejdet eksempel

En digital sundhedsvirksomhed genererer 2.400.000 USD i indtægter i et kvartal med samlede markedsføringsudgifter på alle betalte kanaler på 480.000 USD. MER er 2.400.000 USD / 480.000 USD = 5,0. Hver for sig rapporterer platformen for betalt søgning en ROAS på 6,0, platformen for betalte sociale medier rapporterer en ROAS på 5,5, og en platform for programmatisk displayannoncering rapporterer en ROAS på 4,0. Hvis disse blot blev lagt sammen som et krav på det samlede indtægtsbidrag, ville de antyde mere samlet tilskrevet indtægt, end virksomheden rent faktisk genererede, fordi en betydelig andel af de konverterende kunder var udsat for mere end én kanal og tælles to eller tre gange. Den MER på 5,0 for hele organisationen er det tal, der stemmer det af: det kan ikke blæses op af overlappende attribution på den måde, som ROAS-tal på platformsniveau strukturelt kan.

## Datakilder og forbehold

De samlede indtægter kommer fra organisationens eget økonomi- eller faktureringssystem, og de samlede markedsføringsudgifter kommer fra de faktisk fakturerede og betalte markedsføringsomkostninger på tværs af alle kanaler, og begge bør hentes uafhængigt af en annonceplatforms eget dashboard. MER bør følges over tid som en tendens og ikke vurderes mod ét universelt benchmark, da en "god" MER varierer enormt efter forretningsmodel, marginstruktur og vækststadie: en virksomhed i tidlig fase, der investerer tungt i vækst, kan bevidst acceptere en lavere MER end en moden virksomhed, der optimerer for rentabilitet. MER diagnosticerer ikke, hvilken kanal der er ansvarlig for en ændring i effektiviteten; det diagnostiske arbejde kræver stadig analyse på kanalniveau, helst suppleret med test af inkrementalitet (holdout-grupper, der ikke udsættes for nogen markedsføring) i stedet for platformsrapporteret attribution alene.

## Faldgruber

- **At behandle platformsrapporteret ROAS som additiv på tværs af kanaler**: at lægge hver platforms selvrapporterede ROAS sammen overvurderer det samlede marketingbidrag, hver gang en kunde er udsat for og krediteres af mere end én kanal, hvilket er almindeligt; MER undgår dette ved sit design.
- **At sammenligne MER med et fast universelt benchmark**: en passende MER varierer efter forretningsmodel, margin og vækststadie; brug den som en tendens for én organisation over tid og ikke som en fast bestå/dumpe-tærskel.
- **At bruge MER som diagnose på kanalniveau**: MER er bevidst et tal for hele organisationen og kan ikke i sig selv udpege, hvilken kanal der driver en ændring i effektiviteten; kombinér den med analyse på kanalniveau og test af inkrementalitet til det formål.
- **At ignorere indtægtsdrivere, der ikke skyldes markedsføring**: en stabil eller forbedret MER ved voksende indtægter kan afspejle organisk vækst (henvisninger, mund-til-mund, optjent omtale) snarere end markedsføringseffektivitet; opdel om muligt indtægterne efter erhvervelseskilde for at undgå at give markedsføringen for meget kredit.

## Kilder

- Association of National Advertisers (ANA), vejledning om markedsføringsmåling, attribution og gennemsigtighed i medier
- Marketing Accountability Standards Board (MASB), vejledning om definitioner og målestandarder for markedsføringsmetrikker
- Peer reviewet litteratur og brancheliteratur om marketing mix-modellering og test af inkrementalitet som supplement til platformsrapporteret attribution

Se også: [reel kundeerhvervelsesomkostning](../reel-kundeerhvervelsesomkostning/) og [LTV-til-CAC-ratio](../ltv-til-cac-ratio/), de to andre centrale metrikker for vækstøkonomi, som denne ratio typisk rapporteres sammen med.
