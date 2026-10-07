# Seadme Tööaja Määr

Seadme tööaja määr mõõdab planeeritud seireajast seda osa, mil ühendatud terviseseade – patsiendi kaugjälgimise andur, kantav seade või koduse telemeditsiini üksus – on tegelikult võrgus, edastab andmeid ja töötab õigesti, mitte ei ole võrguväline, lahti ühendatud või rike. See on iga kaugjälgimise või ühendatud seadmete programmi aluseks olev infrastruktuuri alusmõõdik: kliiniline hoiatus, biomeetriline trend või kaasatuse näitaja, mis on arvutatud sageli võrguväliselt olnud seadmest, on usaldusväärne ainult niivõrd, kuivõrd on usaldusväärne selle taga olev ühenduvus.

## Miks see on oluline

Patsiendi kaugjälgimise programmi kogu kliiniline väärtuspakkumine sõltub pidevast või peaaegu pidevast andmete hõivamisest; halva tööajaga seade tekitab patsiendi kliinilisse pilti vaiksed lüngad, mida võidakse ekslikult pidada stabiilsuseks (hoiatust pole, sest andmeid pole, mitte sellepärast, et midagi poleks muutunud), mitte õigesti seirerikkena tuvastada. Seadme tööaeg on ka programmi kulude ja patsiendikogemuse eelnäitaja: seade, mis sageli ühenduse kaotab, tekitab tugikõnesid, patsiendi frustratsiooni ja potentsiaalselt tarbetut kliinilist kontakteerumist, et kontrollida, kas andmelünk peegeldab tegelikku kliinilist sündmust või lihtsalt tehnilist viga. Kuna seadme tööaja tõrked on sageli omistatavad infrastruktuurile, mida organisatsioon kontrollib (halvasti seadistatud mobiilsidelüüs, nõrk Wi-Fi leviala patsiendi kodus, halvasti hooldatud seadmepark), mitte patsiendile, kuulub see mõõdik täielikult tarnija ja tehnilise operatsioonimeeskonna alla, mitte ei tohiks seda valimatult patsiendi kaasatuse mõõdikute hulka segada.

## Kuidas seda arvutatakse

```
Seadme tööaja määr = aeg, mil seade oli võrgus ja edastas kehtivaid
                     andmeid / planeeritud seireaeg kokku × 100

Jagage seisakuaja algpõhjused, kus andmed seda võimaldavad:
  Seadmepoolne tõrge   (aku, riistvararike, püsivara kokkujooks)
  Ühenduvuse tõrge     (mobiilside/Wi-Fi/VPN katkestus)
  Patsiendipoolsed tegurid (seade välja lülitatud, kantud levialast
                            välja)

Tööaja kõrval jälgitavad toetavad tehnilised parameetrid:
  Keskmine protsessori kasutus, mälukasutus ja akutase seadme kohta
  Ühenduvuse tõrgete vaheline keskmine aeg
  Keskmine taasühendumise aeg pärast katkestust
```

## Läbitöötatud näide

Südame kaugjälgimise programm võtab kasutusele 1000 ühendatud seadet, millelt oodatakse pidevat edastamist. 30-päevase kuu jooksul (720 planeeritud seiretundi seadme kohta) logib seadmepark kokku 705 600 tegelikku võrgusolekutundi planeeritud 720 000 tunni vastu, mis annab kogu seadmepargi tööaja määraks 705 600 / 720 000 × 100 = 98%. 14 400 seisakutunni algpõhjuste analüüs näitab, et 60% on seotud mobiilsideühenduse katkestustega, mis on koondunud konkreetsesse maapiirkonna teenindusregiooni, 25% vananevate akudega seadmetega, mis on märgitud asendamiseks, ja 15% patsientidega, kes lülitavad oma seadme ajutiselt välja. See jaotus osutab kahele selgele, erinevale sekkumisele – ühenduvuse parandus mõjutatud regioonile ja ennetav akude asendamise programm –, mida üks koondtööaja näitaja poleks eristanud.

## Andmeallikad ja hoiatused

Tööaja andmed pärinevad seadme tootja või platvormi tarnija enda seadmehalduse ja telemeetria süsteemist, mis logib seadme kohta ühenduse ja pulsisündmusi; organisatsioon peaks kinnitama, mida täpselt tarnija "võrgusolekuks" loeb (seade võib end teatada võrguga ühendatuna, kuid mitte edastada kehtivaid kliinilisi andmeid, mida tuleks kliinilistel eesmärkidel seisakuna lugeda isegi siis, kui tarnija enda armatuurlaud teatab seda ühendatuna). Tööaega tuleks esitada seadmekohordi või geograafia kaupa, kui maht seda lubab, kuna ühenduvuse kvaliteet on sageli geograafiliselt koondunud (maapiirkondade mobiilsidekate, vanemate hoonete Wi-Fi) ega ole patsiendipopulatsioonis ühtlaselt jaotunud, ning kogu seadmepargi koondnäitaja võib varjata tõsist, lahendatavat piirkondlikku probleemi.

## Lõksud

- **Võrguühenduse segamine kehtiva andmeedastusega**: seade võib tarnija armatuurlaual paista "ühendatuna", kuid mitte edastada kasutatavaid kliinilisi andmeid; defineerige ja mõõtke tööaega tegeliku kehtiva andmete vastuvõtu, mitte ainult toore võrguühenduvuse alusel.
- **Ainult kogu seadmepargi keskmise esitamine**: see võib varjata tõsist, geograafiliselt või seadmekohordi spetsiifilist seisakuprobleemi, mille sihitud keskmine paljastaks ja millel on konkreetne, lahendatav parandus.
- **Seisaku algpõhjuse mitteeristamine**: seadmepoolne, ühenduvuse ja patsiendipoolne seisak nõuavad igaüks täiesti erinevat sekkumist; üht seisakuprotsenti ilma algpõhjuse segmenteerimiseta ei saa rakendada.
- **Andmelünga käsitlemine vaikimisi kliinilise stabiilsusena**: võrguvälise seadme puuduv andmevoog peaks käivitama tehnilise ühenduvuse kontrolli, mitte olema vaikides tõlgendatud kui "uudiste puudumine on hea uudis" patsiendi kliinilise seisundi kohta.

## Allikad

- Continua Design Guidelines / Personal Connected Health Alliance, ühendatud terviseseadmete tehnilise koostalitlusvõime standardid
- ONC / HealthIT.gov, patsiendi kaugjälgimise programmi rakendamise ja tehniliste nõuete juhised
- Eelretsenseeritud kirjandus patsiendi kaugjälgimise seadmete töökindluse ja andmete täielikkuse kohta, näiteks ajakirjas npj Digital Medicine avaldatud uuringud

Vaata ka: [triaaži suunamise täpsus](../triaaži-suunamise-täpsus/), mis sõltub täielike ja usaldusväärsete seadmeandmete saamisest, et üldse õiget triaažiotsust teha.
