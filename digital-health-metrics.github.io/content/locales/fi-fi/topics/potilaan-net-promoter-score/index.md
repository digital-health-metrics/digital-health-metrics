# Potilaan Net Promoter Score

Potilaan Net Promoter Score (NPS) mittaa potilaan halukkuutta suositella digitaalisen terveydenhuollon tuotetta tai etäterveydenhuollon palvelua muille yhden kyselykysymyksen perusteella — "Kuinka todennäköisesti suosittelisit tätä palvelua ystävälle tai työtoverille?" — pisteytettynä asteikolla 0-10. Vastaajat, jotka antavat pisteet 9-10, ovat "suosittelijoita", 7-8 "passiivisia" ja 0-6 "arvostelijoita"; NPS on suosittelijoiden prosenttiosuus miinus arvostelijoiden prosenttiosuus. Se on digitaalisen terveydenhuollon laajimmin käytetty ja laajimmin kritisoitu potilastyytyväisyyden mittari, jota arvostetaan sen yksinkertaisuuden vuoksi mutta jonka kyky diagnosoida asioita yksinään on rajallinen.

## Miksi tämä on tärkeää

NPS antaa digitaalisen terveydenhuollon tiimeille yksinkertaisen, standardoidun, keskenään vertailukelpoisen tyytyväisyyssignaalin, joka on edullinen kerätä ja jonka ei-asiantuntijatahot (johtoryhmät, hallitukset, tilaajat) voivat tulkita helposti yhdellä silmäyksellä, minkä vuoksi se on säilynyt suosittuna hyvin dokumentoiduista menetelmällisistä rajoituksistaan huolimatta. Erityisesti etäterveydenhuollon ja digitaalisen etuoven tuotteille NPS on usein johtava indikaattori siitä, jatkavatko potilaat digitaalisen kanavan valintaa henkilökohtaisen vaihtoehdon sijaan, kun molemmat ovat saatavilla, millä on suoria vaikutuksia kanavajakauman ja kapasiteetin suunnitteluun. NPS on kuitenkin yksi, korkean tason yhteenvetoluku: laskeva NPS kertoo tiimille, että jokin on pielessä, mutta ei mikä, joten se tulisi aina yhdistää avoimen tekstin sanalliseen palautteeseen tai tarkempaan käytettävyysmittariin, jotta siitä tulee toimintakelpoinen eikä pelkkä tulostaulun luku.

## Miten se lasketaan

```
NPS = suosittelijoiden osuus-% (pisteet 9-10) − arvostelijoiden
      osuus-% (pisteet 0-6)

Tulos on luku väliltä −100 - +100, ei prosenttiosuus, vaikka se
johdetaan prosenttiosuuksista — älä koskaan lisää NPS-lukuun
"%"-merkkiä.

Raportoi rinnalla:
  vastausprosentti (kyselyn saaneista potilaista vastanneiden %)
  otoskoko
  käytetty kysymyksen tarkka sanamuoto
```

## Käytännön esimerkki

Etäterveydenhuollon alusta kyselee 1 000 potilaalta videovastaanoton jälkeen ja saa 400 vastausta (vastausprosentti 40 %). Näistä 400 vastaajasta 220 antaa pisteet 9-10 (suosittelijat, 55 %), 100 antaa 7-8 (passiiviset, 25 %) ja 80 antaa 0-6 (arvostelijat, 20 %). NPS on 55 − 20 = 35. Tämä luku merkitsee jotain vain kontekstissa: NPS 35 voi olla vahva tulos verrattuna laajempaan etäterveydenhuollon alaan tai huolestuttava lasku verrattuna saman alustan omaan 48 pisteen tulokseen edellisellä neljänneksellä — NPS on paljon hyödyllisempi yhden tuotteen trendinä ajan myötä kuin absoluuttisena kertaluonteisena vertailuarvona toista tuotetta vasten.

## Tietolähteet ja varaukset

NPS kerätään vuorovaikutuksen jälkeisellä kyselyllä, joka käynnistetään tyypillisesti välittömästi videokäynnin, sovellusistunnon tai hoitojakson jälkeen, ja vastausprosentilla on valtava merkitys: alhainen vastausprosentti (selvästi alle käytännön esimerkin noin 40 %) riskeeraa vastaamattomuusharhan, jossa vain voimakkaasti tyytyväiset tai voimakkaasti tyytymättömät potilaat vaivautuvat vastaamaan, mikä vetää pisteet ääripäihin ja pois todellisesta väestön mielipiteestä. NPS:n vertaaminen organisaatioiden välillä tai jopa yhden organisaation eri kanavien välillä (esimerkiksi etäterveydenhuolto verrattuna henkilökohtaiseen käyntiin) on pätevää vain, jos kysymyksen sanamuoto, ajoitus ja kyselyn väestö ovat aidosti vertailukelpoisia; pienten sanamuodon muutosten tiedetään siirtävän pisteitä mitattavasti. NPS tulisi nähdä selitettävänä tuloksena, ei itsetarkoituksena — NPS-kyselyyn tyypillisesti liittyvät avoimen tekstin kommentit ovat yleensä toimintakelpoisempia kuin pistemäärä.

## Sudenkuopat

- **Eri kysymyksen sanamuodolla tai ajoituksella kerättyjen NPS-lukujen vertaaminen**: pienetkin kyselyn suunnittelun erot voivat siirtää pisteitä useilla pisteillä, mikä tekee organisaatioiden välisestä NPS-vertailusta paljon epäluotettavampaa kuin miltä se näyttää.
- **Vastausprosentin sivuuttaminen**: 10 %:n vastausprosentista laskettu otsikkoluku NPS on paljon vähemmän luotettava kuin 60 %:n vastausprosentista laskettu, sillä alhaiset vastausprosentit ovat alttiita vastaamattomuusharhalle kohti äärimmäisimpiä mielipiteitä.
- **NPS:n käsittäminen diagnostiseksi työkaluksi yhteenvetomittarin sijaan**: laskeva NPS kertoo, että jokin on pielessä, mutta ei koskaan mikä; se tulisi aina yhdistää laadulliseen palautteeseen tai tarkempaan tyytyväisyys- tai käytettävyysmittariin syyn tunnistamiseksi.
- **NPS:n tavoittelu itsetarkoituksena**: pelkästään NPS-luvun kapea optimointi (esimerkiksi kyselemällä potilailta vain epätavallisen myönteisten vuorovaikutusten jälkeen) voi parantaa raportoitua pistemäärää tekemättä taustalla olevasta potilaskokemuksesta yhtään parempaa tai jopa huonomman.

## Lähteet

- Bain & Company, alkuperäinen Net Promoter System -menetelmä ja vertailuohjeistus
- Agency for Healthcare Research and Quality (AHRQ), CAHPS (Consumer Assessment of Healthcare Providers and Systems) -potilaskokemuskyselyohjelma täydentävänä, tarkempana vaihtoehtona
- Vertaisarvioitu kirjallisuus Net Promoter Scoren käytöstä ja rajoituksista terveydenhuollon ympäristöissä, esimerkiksi Journal of Medical Internet Research (JMIR) -lehdessä julkaistut tutkimukset

Katso myös: [käyttäjien pysyvyysaste](../käyttäjien-pysyvyysaste/), sillä potilaan raportoima tyytyväisyys ja tuotteen todellinen jatkuva käyttö poikkeavat usein toisistaan, ja ne kannattaa seurata erillisinä signaaleina.
