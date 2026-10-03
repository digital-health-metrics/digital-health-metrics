# Kasutajate Püsimuse Määr

Kasutajate püsimuse määr mõõdab nende kasutajate osakaalu, kes jäävad aktiivselt registreerituks või jätkavad digitaalse terviseprodukti kasutamist järjestikustel ajaperioodidel pärast esialgset registreerimist, tavaliselt visualiseerituna kohordipõhise püsimuse kõverana. See on mõõdik, mis eristab toodet, millel on jätkusuutlik kasutusmuster, tootest, mis sõidab uudsuse laineharjal ja kaotab seejärel kasutajaid ettearvatavas langevas mustris.

## Miks see on oluline

Peaaegu iga digitaalne terviseprodukt kogeb teatud väljalangemist pärast esialgset registreerumist, kuid püsimuse kõvera kuju paljastab, kas see väljalangemine stabiliseerub jätkusuutlikuks tuumikkasutajaskonnaks või jätkab langemist nulli poole. Toode, mille püsimuse kõver tasandub pärast esimest paari nädalat, on leidnud tuumikgrupi kasutajaid, kellele toode pakub püsivat väärtust, samas kui toode, mille kõver kunagi ei tasandu, tõenäoliselt ei paku püsivat väärtust, olenemata sellest, kui tugev on selle esialgne registreerumisnäitaja. Investorid, tervishoiusüsteemi partnerid ja toodemeeskonnad kõik toetuvad püsimuse kõveratele kui ühele kõige usaldusväärsemale varajasele signaalile pikaajalise toote elujõulisuse kohta, kuna erinevalt paljudest teistest selle raamatu mõõdikutest saab seda arvutada suhteliselt varakult toote eluea jooksul ja see on siiski tugevalt ennustav pikaajalise edu jaoks.

## Kuidas seda arvutatakse

```
Kasutajate püsimuse määr (päev/nädal/kuu N) = esialgsest
                                              registreerumise
                                              kohordist pärit
                                              kasutajad, kes on
                                              endiselt aktiivsed
                                              ajapunktil N /
                                              esialgse registreerumise
                                              kohordi kasutajad kokku
                                              × 100

Seda arvutatakse tavaliselt mitme ajapunkti jaoks (päev 1, päev 7,
päev 30, päev 90), et konstrueerida täielik püsimuse kõver, mitte
esitada ühe arvuna.
```

## Läbitöötatud näide

Digitaalne füsioteraapia rakendus registreerib jaanuaris 1000-kasutajalise kohordi. Päeval 7 on 600 endiselt aktiivsed (60% püsimus), päeval 30 on 350 endiselt aktiivsed (35% püsimus), ning päeval 90 on 320 endiselt aktiivsed (32% püsimus). Asjaolu, et kõver langeb järsult päevast 7 päevani 30, kuid seejärel suures osas tasandub päevast 30 päevani 90, on tugev positiivne signaal — see viitab, et toode on leidnud umbes 32%-lise tuumikkasutajaskonna, kellele see pakub püsivat väärtust, selle asemel et jätkuvalt piiramatult kasutajaid kaotada. Ainult ühe "aktiivsed kasutajad pärast 90 päeva" näitaja esitamine ilma kogu kõverata oleks varjanud selle olulise kujuinfo.

## Andmeallikad ja hoiatused

Püsimuse arvutamine nõuab üksikute kasutajate jälgimist nende esialgsest registreerumise kuupäevast kõigi järgnevate ajapunktide läbi, mis tähendab, et "aktiivse" määratlus peab olema fikseeritud järjepidevalt (nt vähemalt üks seanss eelneval nädalal) ja rakendatud ühtlaselt kogu kohordi ulatuses. Püsimuse kõverate võrdlemine erinevate kohortide vahel (nt kasutajad, kes registreerusid erinevatel kuudel) nõuab tähelepanu hooajalistele või välistele teguritele, mis võisid mõjutada konkreetse kohordi käitumist sõltumatult tootest endast.

## Lõksud

- **Ühe püsimuse näitaja esitamine terve kõvera asemel**: püsimuse kõvera kuju (kas see tasandub või jätkab langemist) on sageli informatiivsem kui ükski üksik ajapunkt.
- **"Aktiivse" ebajärjekindel määratlemine**: aktiivse kasutuse määratluse muutmine kohortide või ajaperioodide vahel muudab püsimuse võrdlused mõttetuks.
- **Kohordiefektide ignoreerimine**: kasutajatel, kes registreerusid erinevate kanalite kaudu või erinevatel perioodidel, võivad olla süstemaatiliselt erinevad püsimuse mustrid sõltumatult tootemuudatustest.
- **Püsimuse segiajamine kaasatuse kvaliteediga**: kasutaja võib jääda "aktiivseks" minimaalse kasutuse läve all ilma reaalset kasu saamata; kombineerige patsiendi kaasatuse järjepidevuse määraga, et saada täielik pilt.

## Allikad

- Mobiilirakenduste tööstusstandardid kohordipõhise püsimuse analüüsi kohta
- Eelretsenseeritud kirjandus digitaalse tervise püsimuse ja väljalangemise kohta, näiteks uuringud, mis on avaldatud ajakirjas Journal of Medical Internet Research (JMIR)
- Rock Health, tööstusanalüüsid digitaalse tervise kaasatuse mustrite kohta

Vaata ka: [DAU/MAU-kleepuvuse suhe](../dau-mau-stickiness-ratio/), täiendav mõõdik kaasatuse intensiivsuse kohta registreerituna püsivate kasutajate seas.
