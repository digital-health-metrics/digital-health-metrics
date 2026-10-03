# Telemeditsiini Visiitide Määr

Telemeditsiini visiitide määr on teenuse kõigi kontaktide osakaal, mis toimub kaugelt, video või telefoni teel, mitte näost näkku. See on tarnekanali jaotuse mõõdik, mitte tegevusmõõdik: see näitab, kuidas ravi osutatakse, mis on oluline võimsusplaneerimise, juurdepääsu ja kliinilise sobivuse jaoks, täiesti eraldiseisvalt sellest, kui palju ravi üldse osutatakse.

## Miks see on oluline

Kaugelt osutatava ravi osakaal muutis paljude teenuste tegevusmudelit pärast virtuaalkonsultatsioonide kiiret kasvu COVID-19 pandeemia ajal, ning organisatsioonid vajavad stabiilset viisi jälgimaks, kas see nihe säilib, kaldub tagasi pandeemiaeelsete normide poole või on aktiivselt poliitika poolt suunatud. Telemeditsiin ei ole ühtlane asendus näost näkku visiidile: sobivus varieerub eriala, konsultatsiooni tüübi (ravimite ülevaatus käitub väga erinevalt füüsilisest läbivaatusest) ja patsiendi eelistuse järgi, seega "õige" määr on kliiniline ja operatiivne otsus, mitte maksimeeritav eesmärk. Rahastajad ja regulaatorid kasutavad seda määra koos tulemuste ja ohutusmeetmetega, et otsustada hüvitispoliitika üle ja kontrollida, et kaugravi ei asendaks lihtsalt juhtumeid, mida on vaja näost näkku näha.

## Kuidas seda arvutatakse

```
Telemeditsiini visiitide määr = telemeditsiini kontaktid /
                                (telemeditsiini kontaktid +
                                näost näkku kontaktid) × 100

Esitage eraldi modaalsuse järgi, kui võimalik:
  Video määr    = videokontaktid / kontaktid kokku × 100
  Telefoni määr = ainult-telefoni kontaktid / kontaktid kokku × 100

Nimetaja peaks lugema ainult lõpetatud kontakte (vt lõksud), kindla
teenuse, eriala ja ajavahemiku jaoks.
```

## Läbitöötatud näide

Kogukonna vaimse tervise teenus registreerib kvartalis 4000 lõpetatud ambulatoorset kontakti: 1200 näost näkku, 1600 video teel ja 1200 telefoni teel. Telemeditsiini visiitide määr on (1600 + 1200) / 4000 × 100 = 70%, video määraga 40% ja ainult-telefoni määraga 30%. Ainult kombineeritud 70% näitaja esitamine varjaks seda, et suur osa siinsest "telemeditsiinist" on ainult-heli, mis kannab tavaliselt erinevat kliinilist riskiprofiili ja patsiendikogemust kui video.

## Andmeallikad ja hoiatused

Kontakti tüüp salvestatakse tavaliselt kas struktureeritud väljana elektroonilises terviseloos (visiidi tüüp või asukoht) või tuletatakse arveldamiskoodidest, näiteks teenuse osutamise koha koodist või telemeditsiini modifikaatorist nõudel. Kodeerimispraktika varieerub oluliselt organisatsioonide vahel ja isegi sama organisatsiooni klinitsistide vahel, seega peaks määra võrdlus eri asukohtade vahel esmalt kinnitama, et "telemeditsiini" kodeeritakse igas kohas samamoodi. Visiit, mis algab videona, kuid langeb tehnilise probleemi tõttu telefonile, tuleks kodeerida järjepidevalt (tavaliselt modaalsusena, mis kandis suurema osa kliinilisest sisust), ning see reegel tuleks dokumenteerida, mitte jätta individuaalse otsustuse hooleks.

## Lõksud

- **Katsetatud, mitte lõpetatud visiitide arvestamine**: telemeditsiini kohtumine, mis ei õnnestu ühenduda ja mis broneeritakse uuesti, ei tohiks telemeditsiini nimetajat kahekordselt suurendada.
- **Video ja telefoni käsitlemine vahetatavana**: neil on erinevad kliinilised ja võrdväärsuse tagajärjed (telefon välistab visuaalse hindamise, kuid on paremini kättesaadav patsientidele, kellel pole nutitelefoni, usaldusväärset andmesidet või privaatset ruumi video jaoks); esitage need alati eraldi, kui võimalik.
- **Mitteilmumise seose ignoreerimine**: mitteilmumise käitumine erineb sageli modaalsuse järgi; vt [vastuvõtule mitteilmumise määr](../appointment-no-show-rate/), enne kui teete järeldusi "paranenud juurdepääsu" kohta ainult tõusva telemeditsiini määra põhjal.
- **Kõrge määra käsitlemine iseenesest heana**: mõnede seisundite ja konsultatsioonitüüpide puhul on sobiv telemeditsiini määr madal kliinilise disaini, mitte digitaalse küpsuse ebaõnnestumise tõttu.

## Allikad

- Centers for Medicare & Medicaid Services (CMS), Medicare telemeditsiini kasutusandmed ja poliitikapublikatsioonid
- NHS England, ambulatoorsete ja kogukonnateenuste tegevusstatistika, sealhulgas virtuaalse/kaugkohaloleku jaotused
- Eelretsenseeritud kirjandus telemeditsiini kasutustrendide ja modaalsusspetsiifiliste tulemuste kohta
