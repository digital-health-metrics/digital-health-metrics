# Seadme Tööaja Määr

Seadme tööaja määr mõõdab aega, mil kaugjälgimisseade on võrgus ja tegelikult edastab andmeid, osana ajast, mil eeldatakse, et see seda teeb. See on aluseks olev infrastruktuuri mõõdik iga kaugjälgimisprogrammi all: ükski teine kliiniline ega tegevuslik mõõdik sellises programmis ei saa olla usaldusväärne, kui andmeid genereerivad aluseks olevad seadmed ei ole järjepidevalt võrgus.

## Miks see on oluline

Kaugjälgimisprogramm võib esitada muljetavaldavaid kliinilisi tulemusi, mis põhinevad ainult patsientidel, kelle seadmed tegelikult jäävad võrku ja edastavad andmeid, samal ajal vaikimisi välistades või ignoreerides patsiendi alamhulka, kelle seadmed kogevad sagedasi katkestusi — ning need katkestused korreleeruvad sageli konkreetsete tehniliste või keskkonnateguritega (halb juhtmeta leviala, vananenud seadme püsivara, patsiendi tehniline segadus taaslaadimise osas), mis võivad olla ebaproportsionaalselt koondunud teatud patsiendipopulatsioonidesse. Madal või ebaühtlaselt jaotunud seadme tööaja määr ei õõnesta mitte ainult andmekvaliteeti, vaid loob ka tõelise kliinilise ohutuslünga: patsient, kelle jälgimisseade on võrguühenduseta, ei saa ühtegi ohutuseelist, mille jaoks programm on loodud pakkuma, olenemata sellest, kui hästi aluseks olev kliiniline algoritm oleks töötanud, kui see oleks andmeid saanud.

## Kuidas seda arvutatakse

```
Seadme tööaja määr = aeg, mil seade tegelikult edastab kehtivaid
                     andmeid / oodatav jälgimisaeg kokku × 100

Esitage alati jaotatuna:
  Tööaja määr seadme tüübi või mudeli järgi
  Tööaja määr patsiendi demograafia järgi (et paljastada, kas
  seisakuaeg on koondunud teatud populatsioonidesse)
```

## Läbitöötatud näide

Südamepuudulikkuse kaugjälgimise programm esitab muljetavaldava kliinilise tulemuse paranemise, mis põhineb 85% oma 500 registreeritud patsiendi andmetel, kelle seadmed säilitasid vähemalt 90% tööaega programmi esimese kolme kuu jooksul. Kuid ülejäänud 15% patsientide ülevaatus, kelle seadmetel oli oluliselt madalam tööaeg, paljastab, et see rühm hõlmas ebaproportsionaalselt maapiirkonna patsiente halva mobiililevialaga ja eakaid patsiente, kes teatasid segadusest selle kohta, millal ja kuidas seadet taaslaadida. See leid sundis programmi uurima paremat seadme disaini nõrga ühendusega keskkondade jaoks ja lihtsustatud patsiendihariduse seadme hoolduse kohta, selle asemel et lihtsalt esitada oma tulemusi, mis põhinevad patsientide alamhulgal, kelle seadmed juhtumisi usaldusväärselt võrgus püsisid.

## Andmeallikad ja hoiatused

Tööaja andmed pärinevad tavaliselt otse seadme enda telemeetriast või jälgimisplatvormi serveripoolsest vastuvõetud andmeedastuste logist, muutes selle mõõdiku arvutamise suhteliselt lihtsaks, kuid tõlgendamine nõuab eristamist seadme rikke (tehniline probleem seadmega endaga), ühenduvuse rikke (halb juhtmeta või mobiilside levi) ja patsiendiga seotud tegurite (unustatud taaslaadimine, vale kasutus) vahel, kuna igaüks vajab erinevat sekkumist. Tööaja määrasid tuleks esitada patsiendi kohta aja jooksul, mitte ainult koondorganisatsiooni näitajana, kuna koondkeskmine võib varjata patsiendi alamhulka, kellel on püsivad, tõsised tööaja probleemid.

## Lõksud

- **Kliiniliste tulemuste esitamine ainult patsientidelt, kellel on kõrge seadme tööaeg**: see välistab vaikimisi patsiendi alamhulga, kes võib kõige rohkem vajada usaldusväärset jälgimist ja kellel võivad olla süstemaatiliselt erinevad tulemused.
- **Kõigi seisakuaegade käsitlemine ühtmoodi**: seadme rikked, ühenduvusprobleemid ja patsiendiga seotud tegurid vajavad väga erinevaid lahendusi; nende koondamine varjab, millist sekkumist tegelikult vaja on.
- **Seisakuaja demograafilise kontsentratsiooni ignoreerimine**: kui madal tööaeg on koondunud teatud patsiendipopulatsioonidesse, võib aluseks olev jälgimisprogramm tahtmatult süvendada terviseebavõrdsust.
- **Tööaja mõõtmine koondorganisatsiooni keskmisena**: see varjab üksikuid patsiente, kellel on püsivad, tõsised tööaja probleemid, mis vajavad spetsiifilist tähelepanu.

## Allikad

- U.S. Food and Drug Administration (FDA), meditsiiniseadmete kaugjälgimisseadmete usaldusväärsuse juhised
- Eelretsenseeritud kirjandus kaugjälgimise usaldusväärsuse kohta, näiteks uuringud, mis on avaldatud ajakirjades Journal of the American College of Cardiology ja npj Digital Medicine

Vaata ka: [sekkumiseni kuluv aeg](../time-to-intervention-rate/), kuna see sõltub täielike, usaldusväärsete seadmeandmete saamisest, et üldse teha õige triaažiotsus.
