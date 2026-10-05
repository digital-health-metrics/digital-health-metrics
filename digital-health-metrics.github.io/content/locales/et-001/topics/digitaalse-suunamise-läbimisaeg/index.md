# Digitaalse Suunamise Läbimisaeg

Digitaalse suunamise läbimisaeg on kulunud aeg alates elektroonilise suunamise esitamisest suunava klinitsisti poolt kuni selle triaažimiseni ning kas vastuvõtmiseni, tagasilükkamiseni või broneerimiseni vastuvõtva teenuse poolt. See on protsessi (voo) mõõdik, mis erineb patsiendi kogu ooteajast, ning see on üks selgemaid kohti, kus digitaalse süsteemi muutust (struktureeritud e-suunamine, pildipõhine triaaž, standardiseeritud suunamisvormid) saab näidata liikumas operatiivset näitajat, mitte ainult rahulolu skoori.

## Miks see on oluline

Aeglane või väga varieeruv triaažietapp lisab viivitust enne, kui patsient üldse liitub kliinilise ooteloendiga, ning kuna see viivitus toimub enne, kui mingit kliinilist ravi algab, on see puhas protsessiraisk, mida digitaalne tööriistastik on hästi positsioneeritud eemaldama. Suunamissüsteemid, mis sunnivad "tagastamine suunajale" tsükli puuduva info tõttu, loovad ümbertegemise tsükleid, mida on lihtne tähele panemata jätta, kui läbimisaega mõõdetakse ainult suunamiste puhul, mis läbivad esimesel korral puhtalt. Kui teenus on kasutusele võtnud struktureeritud digitaalsed suunamisvormid, kohustuslikud väljad või pildipõhise triaaži (näiteks teledermatoloogias), on läbimisaeg tavaliselt kõige veenvam üksik mõõdik kasu demonstreerimiseks, kuna seda saab mõõta enne ja pärast muudatust sama instrumentaariumiga.

## Kuidas seda arvutatakse

```
Läbimisaeg = ajatempel(triaažiotsus) − ajatempel(suunamise esitamine)

Esitage mediaan ja kõrge protsentiil (tavaliselt 90.), mitte ainult
keskmine, kuna jaotus on tugevalt paremale nihkunud tagastatud või
keeruliste suunamiste tõttu.

Kaaluge alametappide ajastamist, kui süsteem neid jäädvustab:
  Esitamine → teenuse poolt vastuvõtmine
  Vastuvõtmine → triaažiotsus
  Triaažiotsus → broneeritud vastuvõtt (kui asjakohane)
```

## Läbitöötatud näide

E-suunamissüsteemi auditijälg näitab mediaanaega esitamisest triaažiotsuseni 1,8 päeva kõigi erialade lõikes, 90. protsentiili ajaga 6 päeva, mida põhjustavad peamiselt suunamised, mis tagastatakse suunajale puuduva kliinilise info tõttu. Sama platvormi pildipõhist triaaži kasutav teledermatoloogia rada saavutab mediaan-läbimisaja 4 tundi ja 90. protsentiili 1 päev, kuna fotost ja struktureeritud anamneesist piisab peaaegu alati triaažiotsuse jaoks ilma täiendava kirjavahetuseta.

## Andmeallikad ja hoiatused

E-suunamise või suunamishaldussüsteemi enda auditijälg on peamine allikas, kasutades esitamise ja otsuse ajatempleid; organisatsioonid peaksid kinnitama, kas "kell" peatub, kui suunamine tagastatakse täiendava info saamiseks, või jookseb pidevalt, kuna need kaks määratlust annavad sama aluseks oleva protsessi jaoks oluliselt erinevad näitajad. Läbimisaega tuleks esitada järjepidevalt kalendriaja või tööaja järgi, kuna nädalavahetuse ja pühade mõjud võivad muidu moonutada võrdlusi erineva töögraafikuga teenuste vahel.

## Lõksud

- **Ainult "puhaste" suunamiste mõõtmine**: tagasilükatud või tagastatud suunamiste väljajätmine arvutusest varjab ümbertegemise koormust, mida digitaalne tööriistastik on sageli just mõeldud vähendama.
- **Keskmise esitamine mediaani ja protsentiilide asemel**: väike arv pikalt kestvaid, tagastatud suunamisi tõmbab keskmise palju kõrgemale tüüpilise patsiendi tegelikust kogemusest.
- **Läbimisaja segiajamine kogu ooteajaga**: läbimisaeg katab ainult triaažietapi; patsiendi kogukogemus hõlmab ka allavoolu kliinilist ooteloendit, mis on eraldi mõõdik, mida juhivad eraldi võimsuspiirangud.
- **Alametappide mitteeristamine**: teenus, mis mõõdab ainult otsast lõpuni aega, ei saa öelda, kas aeglane näitaja on põhjustatud suunajate poolt esitatud puudulikust infost, vastuvõtva teenuse triaaživõimsusest või mõlemast.

## Allikad

- NHS England, e-suunamisteenuse (e-RS) statistika ja teenuse spetsifikatsioonid
- Eelretsenseeritud kirjandus elektrooniliste suunamishaldussüsteemide ja digitaalsete triaažiradade kohta, sealhulgas teledermatoloogia
- ONC / HealthIT.gov, koostalitlusvõime ja suunamise koordineerimise juhised
