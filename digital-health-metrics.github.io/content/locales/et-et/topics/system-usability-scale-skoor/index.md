# System Usability Scale-skoor

System Usability Scale (SUS) skoor on standardiseeritud 10-küsimuseline küsimustik, mida kasutatakse tarkvara kasutatavuse kvantifitseerimiseks, andes ühe skoori vahemikus 0 kuni 100, mida saab võrrelda väljakujunenud tööstusharu normidega. Erinevalt Net Promoter Score'ist, mis mõõdab soovitamise valmisolekut, või patsiendi esitatud tulemusmõõdikutest, mis mõõdavad kliinilist või funktsionaalset seisundit, mõõdab SUS üht konkreetset asja: kui lihtne on tarkvara ise õppida ja kasutada, kas patsientidele või kliinilisele personalile.

## Miks see on oluline

Digitaaltervise tööriistal võivad olla tugevad kliinilised tõendid ja veenev ärijuhtum, kuid see võib praktikas siiski ebaõnnestuda, kuna patsiendid või kliinikud leiavad liidese segadusttekitava, aeglase või frustreeriva – ja kuna SUS on valideeritud, laialdaselt kasutatav instrument aastakümnete pikkuste avaldatud võrdlusandmetega erinevates tööstusharudes, võimaldab see digitaaltervise meeskonnal võrrelda oma toote kasutatavust teadaoleva jaotusega, mitte toetuda mitteametlikele muljetele või anekdootlikele kaebustele. SUS on tahtlikult tehnoloogiaagnostiline ja kiire korraldada (tavaliselt alla viie minuti), mis teeb selle praktiliseks korduvaks läbiviimiseks disainiiteratsioonide jooksul, erinevalt täielikust kasutatavuse uuringust või ametlikust kliinilisest uuringust. Kuna kliinikutele suunatud kasutatavuse tõrked on dokumenteeritud läbipõlemise põhjustaja (vt arstide läbipõlemise määr) ja patsientidele suunatud kasutatavuse tõrked on dokumenteeritud hülgamise ja halbade digitaalse kirjaoskuse tulemuste põhjustaja (vt digitaalse tervisekirjaoskuse määr), toimib SUS varajase hoiatuse, madala kuluga kasutatavuse signaalina, mis suudab tabada disainiprobleemi enne, kui see ilmneb nendes tagajärgi rohkem kandvates allavoolu mõõdikutes.

## Kuidas seda arvutatakse

```
SUS skoor = ((paaritute numbritega küsimuste skooride summa − 5) +
             (25 − paaris numbritega küsimuste skooride summa)) × 2,5

Tulemus on üks skoor vahemikus 0 kuni 100 (mitte protsent, hoolimata
skaalast, kuna see ei esinda "protsenti õigeid" või sarnast).

Avaldatud võrdlusaluse tõlgendus (Bangor et al.):
  Üle 80  — suurepärane kasutatavus
  68      — keskmine, laiaulatusliku tööstusharu normi alusel
  Alla 51 — halb kasutatavus, mis nõuab uurimist
```

## Läbitöötatud näide

Telemeditsiini platvorm korraldab standardse 10-küsimuselise SUS-küsimustiku 150 patsiendile pärast nende esimest videovisiiti. Arvutatud keskmine SUS skoor kõigi vastajate lõikes on 74. Võrreldes laialdaselt viidatud tööstusharu keskmisega 68, viitab see selle konkreetse patsiendipopulatsiooni ja kasutusjuhtumi keskmisest paremale kasutatavusele, kuigi see on endiselt märkimisväärselt allpool "suurepärase" lävendit 80, mis viitaks väheste allesjäänud kasutatavuse tõketele. Samade 150 vastuse segmenteerimine vanuse järgi näitab keskmist skoori 81 alla 50-aastaste patsientide puhul ja 62 65-aastaste ja vanemate patsientide puhul – lõhe, mis osutab konkreetsele, lahendatavale kasutatavuse probleemile vanemate patsientide jaoks, mitte üldisele toote kasutatavuse probleemile, ja mida üks segatud keskmine oleks varjanud.

## Andmeallikad ja hoiatused

SUS-i andmed pärinevad otse patsientidelt või kliinikutelt, kes täidavad standardiseeritud 10-küsimuselise küsimustiku, ning instrumenti tuleb korraldada täpselt nii, nagu see on valideeritud (samad 10 küsimust, sama 5-punktiline nõustumise skaala, sama hindamisvalem), et saadud skoor oleks avaldatud võrdlusalustega võrreldav; küsimustiku muudetud või lühendatud versioon, kuigi hea mõttega, annab skoori, mida ei saa standardse võrdlusaluse jaotuse suhtes usaldusväärselt tõlgendada. SUS mõõdab tajutud kasutatavust, mis korreleerub, kuid ei ole identne objektiivse ülesande täitmise edukusega (ülesande täitmisel põhineva mõõdiku kohta vt digitaalse tervisekirjaoskuse määr); tootel võib olla hea SUS skoor patsientidelt, kes ei proovinud keerulisemaid funktsioone, mistõttu SUS-i sidumine objektiivsete ülesande täitmise andmetega annab täielikuma pildi kui kumbki üksi. Vastamise ajastus on oluline: SUS-i korraldamine vahetult pärast frustreerivat konkreetset vahejuhtumit (ebaõnnestunud ühendus, segadusttekitav samm) versus pärast sujuvat seanssi võib skoore nihutada sõltumata toote üldisest kasutatavusest.

## Lõksud

- **Standardse küsimustiku küsimuste või hindamise muutmine**: isegi väikesed sõnastuse või skaala muudatused muudavad kehtetuks võrdluse väljakujunenud avaldatud võrdlusaluse jaotusega; kasutage standardset 10-küsimuselist instrumenti täpselt nii, nagu see on valideeritud.
- **Ainult keskmise skoori esitamine ilma segmenteerimiseta**: kasutatavus varieerub sageli oluliselt kasutaja vanuse, digitaalse kirjaoskuse või rolli (patsient versus kliinik) järgi; segmenteerige aruandlus, et leida konkreetsed, lahendatavad kasutatavuse lüngad, mida üks keskmine varjab.
- **SUS-i käsitlemine kliinilise tõhususe mõõdikuna**: SUS mõõdab spetsiifiliselt kasutatavust, mitte kliinilist tulemust ega rahulolu raviga; väga kasutatav tööriist ei pruugi siiski kliinilisi tulemusi parandada ning neid ei tohiks kunagi segi ajada ega üksteisega asendada.
- **Küsitluse korraldamine ainult ebatavaliselt sujuvate või ebatavaliselt frustreerivate seansside järel**: korraldamise ajastus ja kontekst võivad skoori kallutada; korraldage järjepidevalt reaalsete seansside esindusliku valimi lõikes, mitte ainult mugavate või selektiivselt valitud seansside puhul.

## Allikad

- Brooke, J., "SUS: A Quick and Dirty Usability Scale", algne avaldatud instrument
- Bangor, Kortum ja Miller, avaldatud SUS-i võrdlusanalüüsi uuringud, mis kehtestasid laialdaselt viidatud skoori tõlgendamise vahemikud
- Eelretsenseeritud kirjandus SUS-i kasutamise kohta digitaaltervises ja telemeditsiini kasutatavuse hindamises, näiteks ajakirjas JMIR Human Factors avaldatud uuringud

Vaata ka: [patsiendi net promoter score](../patsiendi-net-promoter-score/), seotud, kuid eraldiseisev patsiendi esitatud mõõdik, mis mõõdab rahulolu ja lojaalsust, mitte spetsiifiliselt tarkvara kasutatavust.
