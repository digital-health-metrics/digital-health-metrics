# Kliiniliste Hoiatuste Tühistamise Määr

Kliiniliste hoiatuste tühistamise määr mõõdab kliinilise otsustustoe (CDS) hoiatuste osakaalu — näiteks ravimite koostoime hoiatused, allergiahoiatused ja doosivahemiku kontrollid, mida genereerib arvutipõhine tellimuste sisestamise (CPOE) süsteem — mille klinitsist tühistab või eirab, selle asemel et nende alusel tegutseda. See on standardne kvantitatiivne signaal, mida kasutatakse "hoiatusväsimuse" tuvastamiseks ja haldamiseks: hästi dokumenteeritud kalduvus, et klinitsistid muutuvad hoiatuste suhtes tuimaks, kui madala väärtusega hoiatuste maht muutub ülekaalukaks.

## Miks see on oluline

Avaldatud ravimite koostoime hoiatuste tühistamise määrad jäävad tavaliselt umbes poolest kuni üle üheksakümne protsendini, ning kõrge määr ei ole automaatselt ohutusrike: paljud katkestavad hoiatused rakenduvad koostoimete puhul, mis on kontekstis kliiniliselt ebaolulised, või korduvad hoiatuse puhul, mille alusel klinitsist on juba varem samas tellimuste komplektis tegutsenud, seega hästi häälestatud süsteem rakendab tahtlikult vähem, kõrgema väärtusega hoiatusi, selle asemel et püüda tühistamise määra nullini viia. See, mis tegelikult ohutuse jaoks oluline on, on trend aja jooksul, jaotus raskusastmete lõikes ning kas klinitsistid dokumenteerivad põhjuse, kui nad tühistavad kõrge raskusastmega hoiatuse; tõusev tühistamise määr kõrge raskusastmega, hästi tõendatud koostoimete puhul on tõeline juhtimisprobleem isegi siis, kui keskmine kõigi hoiatuste lõikes näib stabiilne.

## Kuidas seda arvutatakse

```
Tühistamise määr = tühistatud hoiatused / käivitatud hoiatused kokku × 100

Jaotage järgmiselt:
  - raskusaste (nt vastunäidustatud, suur, mõõdukas)
  - hoiatuse tüüp (ravimite koostoime, allergia, dubleeriv ravi,
    doosivahemik)
  - kas tühistamise põhjus dokumenteeriti

"Dokumenteeritud tühistamise määr" jälgib nende tühistamiste
osakaalu, millel on salvestatud põhjendus, mis on omaette
juhtimismõõdik.
```

## Läbitöötatud näide

Haigla CPOE süsteem käivitab kuus 10 000 ravimite koostoime hoiatust, millest 8700 tühistatakse, andes üldiseks tühistamise määraks 87%. Raskusastme järgi jaotamine näitab, et 500 "vastunäidustatud" hoiatusest tühistatakse 60 (12%), samas kui 6000 "mõõdukast" hoiatusest tühistatakse 5700 (95%). Mõõduka taseme näitaja on üldiselt kooskõlas avaldatud võrdlusalustega ega ole iseenesest muret tekitav; vastunäidustatud taseme näitaja väärib individuaalset juhtumi ülevaatust, ning asjaolu, et ainult 340-l 500-st selle taseme tühistamisest on dokumenteeritud põhjus, on olulisem juhtimisleid.

## Andmeallikad ja hoiatused

Elektroonilise terviseloo auditilogi või CDS-tarnija enda hoiatusmoodul registreerib iga hoiatuse käivitumise ja vastuse sündmuse, sealhulgas kas klinitsist sisestas vabateksti või struktureeritud põhjenduse. Tühistamise määrade võrdlemine organisatsioonide vahel, või isegi sama organisatsiooni osakondade vahel, nõuab kontrollimist, et aluseks olevad hoiatusreeglite komplektid ja raskusastme jaotus on samad; agressiivselt häälestatud reeglistikuga haigla näitab madalamat tühistamise määra põhjustel, mis ei ole seotud klinitsisti käitumisega.

## Lõksud

- **Toore tühistamise määra käsitlemine ühe ohutusskoorina**: see segab hästi põhjendatud madala väärtusega hoiatuste tühistamised ohtlike koostoimete ebaturvaliste tühistamistega; jaotage alati raskusastme järgi.
- **Tühistamispõhjuse salvestamata jätmine**: ilma dokumenteeritud põhjuseta on võimatu eristada "see hoiatus oli vale" ja "see hoiatus oli õige ja klinitsist tegi ebaturvalise otsuse", mis on patsiendiohutuse jaoks tegelikult oluline eristus.
- **Hoiatusreeglite inflatsioon aja jooksul**: rohkemate hoiatuste lisamine "kindluse mõttes" ilma madala väärtusega hoiatusi eemaldamata on tühistamismäärade tõusu ja hoiatusväsimuse otsene põhjus; hoiatuste juhtimine peaks hõlmama halvasti toimivate reeglite regulaarset ülevaatust ja kõrvaldamist, mitte ainult jälgimist.
- **Määrade võrdlemine erineva katkestusdisainiga süsteemide vahel**: katkestav, kõva peatumisega hoiatus tekitab erinevat tühistamiskäitumist kui passiivne, mitteblokeeriv hoiatus, seega pole need kaks otseselt võrreldavad mõõdikud.

## Allikad

- Eelretsenseeritud kirjandus kliinilise otsustustoe hoiatusväsimuse kohta, laialdaselt avaldatud ajakirjades, sealhulgas JAMIA ja npj Digital Medicine
- ONC / HealthIT.gov, terviseinfotehnoloogia ohutusjuhised kliinilise otsustustoe kohta
- Institute for Safe Medication Practices (ISMP), juhised CDS-hoiatuste disaini ja juhtimise kohta
