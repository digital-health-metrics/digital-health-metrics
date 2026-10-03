# Triaaži Suunamise Täpsus

Triaaži suunamise täpsus on patsiendikontaktide osakaal, mille puhul automatiseeritud või AI-toega triaažitööriist suunab patsiendi õigesti õigele hooldustasemele ja -kohta — näiteks enesehooldus, esmatasandi arstiabi, erakorralise meditsiini osakond mitte-eluohtlike seisundite jaoks või kiirabi — hinnatuna kliiniliselt valideeritud võrdlusstandardi alusel. See on ohutuse ja tõhususe mõõdik iga digitaalse juurdepääsuvärava, sümptomikontrollija või AI-triaažisüsteemi jaoks: kogu tööriista väärtuspakkumine põhineb patsientide õigel, kiirel ja järjepideval suunamisel.

## Miks see on oluline

Ebatäpne triaažitööriist tekitab kahju mõlemas suunas: alatriaaž (patsiendi suunamine madalamale hooldustasemele kui vajalik) võib edasi lükata tegeliku erakorralise olukorra ravi, samas kui ületriaaž (patsiendi suunamine kõrgemale hooldustasemele kui vajalik) raiskab napi erakorralise ja kiirabi võimsuse ning suurendab kulusid ja patsiendi ärevust ilma kliinilise kasuta. Kuna neil kahel rikke tüübil on nii erinevad tagajärjed, tuleb triaaži suunamise täpsust alati esitada koos vigade suunaga, mitte ühe koondtäpsuse näitajana, mis varjab, kas tööriist eksib ohutult või ohtlikult. Regulaatorid ja tervishoiusüsteemid, kes hindavad AI-triaažitööriista kasutuselevõtuks, nõuavad üha enam sellist kihilist täpsuse aruandlust kliinilise heakskiidu tingimusena, eriti tööriistade puhul, mis töötavad teatud iseseisvusega klinitsistist.

## Kuidas seda arvutatakse

```
Triaaži suunamise täpsus = õigesti suunatud patsiendikontaktid /
                           patsiendikontaktid kokku, mida hinnati
                           võrdlusstandardi alusel × 100

Esitage alati vigade suund eraldi:
  Alatriaaži määr  = patsiendikontaktid suunatud madalamale
                     hooldustasemele kui võrdlusstandard näitab /
                     patsiendikontaktid kokku × 100
  Ületriaaži määr  = patsiendikontaktid suunatud kõrgemale
                     hooldustasemele kui võrdlusstandard näitab /
                     patsiendikontaktid kokku × 100
```

## Läbitöötatud näide

AI-põhine sümptomikontrollija hindab valideerimisuuringus 2000 patsiendikontakti klinitsisti hinnatud võrdlusstandardi alusel. Neist suunab tööriist 1800 õigesti (90% koondtäpsus), kuid 200 vea jaotamine paljastab, et 150 olid alatriaaž (patsient oleks pidanud saama suunatud kõrgemale hooldustasemele, kuid saadeti madalamale) ja ainult 50 olid ületriaaž. Need 150 alatriaaži juhtumit — 7,5% koguvalimist — esindavad kliiniliselt murettekitavamat vea tüüpi, ning kliiniline ülevaatus paljastab, et need mõjutavad ebaproportsionaalselt patsiente, kellel on ebatüüpilised sümptomite esitlused, oluline ohutuspiirang, mida 90% koondtäpsuse näitaja täielikult varjas.

## Andmeallikad ja hoiatused

Usaldusväärse võrdlusstandardi loomine nõuab tavaliselt klinitsisti hinnatud ülevaadet tegelike patsiendikontaktide esindusliku valimi kohta, kas prospektiivselt või retrospektiivselt, ning selle võrdlusstandardi kvaliteet on otsustav tegur, kui tähenduslik täpsuse mõõdik üldse on. Triaažitööriist, mida valideeritakse ainult sünteetilisel või kureeritud testikomplektil, näitab sageli kõrgemat täpsust kui see, mis saavutatakse tegelikel, mitmetähenduslikel patsiendi esitlustel, seega tuleb valideerimismetoodika esitada koos täpsusnäitajaga, et seda korrektselt hinnata.

## Lõksud

- **Valideerimine ainult retrospektiivsete, lihtsate andmetega**: tööriista tegelik suunamise täpsus elavate, mitmetähenduslike patsiendi sisendite puhul erineb sageli oluliselt täpsusest kureeritud valideerimiskomplektil, mis loodi arenduse käigus.
- **Ühe koondtäpsuse näitaja esitamine ilma vigade suunata**: see varjab, kas tööriist eksib ohutuse (ületriaaž) või ohu (alatriaaž) suunas, mis on kõige olulisem eristus patsiendiohutuse jaoks.
- **Madala kvaliteediga võrdlusstandardi kasutamine**: kui võrdlusstandard ise on ebausaldusväärne või ebajärjekindel, mõõdab täpsusmõõdik parimal juhul kooskõla vigase standardiga, mitte tõelist kliinilist õigsust.
- **Alamrühma tulemuslikkuse ignoreerimine**: tööriist võib saavutada hea koondtäpsuse, eksides samal ajal süstemaatiliselt teatud patsiendipopulatsioonide või sümptomite esitluste puhul; jaotamine demograafia ja esitluse tüübi järgi paljastab varjatud ohutusauke.

## Allikad

- Agency for Healthcare Research and Quality (AHRQ), diagnostilise täpsuse ja triaaži ohutuse uuringud
- FDA raamistik tarkvara kui meditsiiniseadme (SaMD) kohta, kliinilise valideerimise juhised AI-triaažitööriistadele
- Eelretsenseeritud kirjandus AI-triaaži täpsuse kohta, näiteks uuringud, mis on avaldatud ajakirjades npj Digital Medicine ja BMJ Health & Care Informatics

Vaata ka: [digitaalse suunamise läbimisaeg](../digital-referral-turnaround-time/), protsessimõõdik, mis asub triaažiotsuse suhtes kõige otsesemalt allavoolu.
