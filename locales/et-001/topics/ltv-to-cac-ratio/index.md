# LTV-CAC Suhe

LTV-CAC suhe võrdleb patsiendi eluaegset väärtust (koguv tulu, mida organisatsioon eeldab patsiendilt saada kogu nende suhte vältel) tegeliku kuluga selle patsiendi hankimiseks, andes kõige põhilisema üksiktesti selle kohta, kas digitaalse tervise ärimudel on tegelikult jätkusuutlik. Suhe 3:1 — kus patsiendi eluaegne väärtus on kolm korda suurem kui nende hankimise kulu — on laialdaselt tsiteeritud jätkusuutlik baastase tellimus- ja patsiendipõhiste ärimudelite puhul.

## Miks see on oluline

Ettevõte võib näidata muljetavaldavat kasvu uute patsientide registreerumistes, kaotades samal ajal raha iga üksiku patsiendi pealt, kui hankimiskulud ületavad tulu, mida iga patsient tegelikult genereerib — olukord, mis võib kesta pikka aega avastamata, kui organisatsioon jälgib ainult registreerumiste kasvu, võrdlemata seda hankimise majandusega. LTV-CAC suhe sunnib seda võrdlust selgesõnaliselt esile, andes investoritele, juhatustele ja juhtkonna meeskondadele ühe arvu, et hinnata, kas kasvav ettevõte tegelikult liigub jätkusuutliku kasumlikkuse poole või lihtsalt põletab kapitali kiiremini kasvades. Kuna nii LTV kui ka CAC nõuavad hoolikat, ausat arvutust, et olla tähendusrikkad (vt vastavaid artikleid kummagi kohta), on usaldusväärne LTV-CAC suhe ainult nii hea kui tema kahe aluseks oleva sisendi täpsus.

## Kuidas seda arvutatakse

```
LTV-CAC suhe = patsiendi eluaegne väärtus / tegelik kliendi
              hankimise kulu

Patsiendi eluaegne väärtus = keskmine tulu patsiendi kohta perioodi
                             kohta × keskmine patsiendi eluiga
                             (1 / väljalangemise määr)

Suhe 3:1 on laialdaselt tsiteeritud jätkusuutlik baastase; suhe alla
1:1 näitab, et iga uus patsient maksab hankimiseks rohkem, kui nad
kunagi tulu genereerivad — kohe jätkusuutmatu positsioon.
```

## Läbitöötatud näide

Digitaalne terviseteenuse tellimusteenus genereerib keskmiselt 20 dollarit tulu patsiendi kohta kuus, kuise väljalangemise määraga 4%, andes keskmise patsiendi eluea 25 kuud (1 / 0,04) ja eluaegse väärtuse 500 dollarit (25 kuud × 20 dollarit). Kui ettevõtte tegelik kliendi hankimise kulu, täielikult koormatud kõigi turundus- ja müügikuludega, on 150 dollarit, on LTV-CAC suhe 500/150 = 3,3:1 — veidi üle laialdaselt tsiteeritud jätkusuutliku baastaseme 3:1. Kui ettevõte oleks selle asemel kasutanud mitte-täielikult-koormatud CAC-i ainult 80 dollariga (ainult otsesed reklaamikulud), oleks teatatud suhe olnud eksitavalt optimistlik 6,25:1, illustreerides, miks aluseks oleva CAC arvutuse täpsus on ülioluline.

## Andmeallikad ja hoiatused

LTV-CAC suhe on usaldusväärne ainult niivõrd, kui selle kaks aluseks olevat sisendit; kunstlikult madal CAC (ebatäieliku kuluarvestuse tõttu) või kunstlikult kõrge LTV (optimistlike väljalangemise eelduste tõttu) mõlemad tekitavad eksitavalt soodsa suhte. Väljalangemise määrad ja seega LTV võivad varieeruda oluliselt patsiendikohortide, hankimiskanalite ja registreerumisest möödunud aja järgi, mis tähendab, et üks koond LTV näitaja võib varjata olulist varieeruvust, mis on asjakohane konkreetsete hankimiskanalite või patsiendisegmentide kohta otsuste tegemisel.

## Lõksud

- **Mitte-täielikult-koormatud CAC-i kasutamine**: see tekitab kunstlikult soodsa suhte, mis ei peegelda tegelikku ärimajandust; kasutage alati tegelikku CAC-i, mis hõlmab kõiki hankimisega seotud kulusid.
- **Optimistlike väljalangemise eelduste kasutamine LTV jaoks**: LTV arvutus, mis põhineb parima juhtumi väljalangemise määral, mitte tegelikult täheldatud väljalangemisel, ülehindab eluaegset väärtust.
- **Ühe koondsuhte esitamine ilma jaotamiseta**: LTV-CAC võib varieeruda dramaatiliselt hankimiskanali või patsiendisegmendi järgi; terve koondsuhe võib varjata jätkusuutmatuid üksikuid kanaleid.
- **Tagasimakse ajaraami ignoreerimine**: 5 aasta jooksul saavutatud 3:1 suhe on palju vähem atraktiivne kui sama suhe saavutatud 1 aasta jooksul, kapitalikulude ja riski tõttu; kaaluge alati tagasimakseperioodi koos suhtega.

## Allikad

- SaaS- ja tellimusäri tööstusstandardid LTV-CAC võrdlusuuringuteks
- Eelretsenseeritud ja tööstuskirjandus digitaalse tervise kasvumajanduse kohta, näiteks analüüsid, mis on avaldatud Rock Health'i ja sarnaste digitaalse tervise uurimisorganisatsioonide poolt

Vaata ka: [tegelik kliendi hankimise kulu](../true-customer-acquisition-cost/) ja [turunduse tõhususe suhe](../marketing-efficiency-ratio/), kaks teist kasvumajanduse põhimõõdikut, millega koos seda suhet tavaliselt esitatakse.
