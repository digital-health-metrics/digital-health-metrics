# System Usability Scale -pistemäärä

System Usability Scale (SUS) -pistemäärä on standardoitu, 10 kohdan kyselylomake, jota käytetään ohjelmiston käytettävyyden kvantifioimiseen ja joka tuottaa yhden pistemäärän asteikolla 0-100, jota voidaan verrata vakiintuneisiin toimialan normeihin. Toisin kuin Net Promoter Score, joka mittaa suosittelualttiutta, tai potilaan raportoimat tulosmittarit, jotka mittaavat kliinistä tai toiminnallista tilaa, SUS mittaa yhtä tiettyä asiaa: kuinka helppoa itse ohjelmiston oppiminen ja käyttö on joko potilaille tai kliiniselle henkilöstölle.

## Miksi tämä on tärkeää

Digitaalisen terveydenhuollon työkalulla voi olla vahva kliininen näyttö ja vakuuttava liiketoimintaperuste, ja se voi silti epäonnistua käytännössä, koska potilaat tai kliinikot kokevat käyttöliittymän sekavaksi, hitaaksi tai turhauttavaksi — ja koska SUS on validoitu, laajasti käytetty mittari, jolla on vuosikymmenten julkaistua vertailutietoa eri aloilta, se antaa digitaalisen terveydenhuollon tiimille mahdollisuuden verrata oman tuotteensa käytettävyyttä tunnettuun jakaumaan epävirallisten vaikutelmien tai anekdoottisten valitusten varassa olemisen sijaan. SUS on tarkoituksellisesti teknologiariippumaton ja nopea toteuttaa (tyypillisesti alle viisi minuuttia), mikä tekee siitä käytännöllisen toistaa suunnitteluiteraatioiden yli toisin kuin täysimittainen käytettävyystutkimus tai muodollinen kliininen koe. Koska kliinikoille suunnatut käytettävyysviat ovat dokumentoitu työuupumuksen aiheuttaja (ks. lääkäreiden työuupumusaste) ja potilaille suunnatut käytettävyysviat ovat dokumentoitu luopumisen ja heikkojen digitaalisen lukutaidon tulosten aiheuttaja (ks. digitaalisen lukutaidon aste), SUS toimii varhaisena, edullisena käytettävyyden varoitussignaalina, joka voi havaita suunnitteluongelman ennen kuin se tulee esiin näissä seurauksiltaan merkittävämmissä myöhemmissä mittareissa.

## Miten se lasketaan

```
SUS-pistemäärä = ((parittomien kohtien pisteiden summa − 5) +
                  (25 − parillisten kohtien pisteiden summa)) × 2,5

Tulos on yksi pistemäärä väliltä 0-100 (ei prosenttiosuus asteikosta
huolimatta, koska se ei edusta "oikeiden vastausten prosenttia" tai
vastaavaa).

Julkaistu vertailuarvojen tulkinta (Bangor ym.):
  Yli 80  — erinomainen käytettävyys
  68      — keskimääräinen, laajan toimialanormin mukaan
  Alle 51 — heikko käytettävyys, joka edellyttää tutkimista
```

## Käytännön esimerkki

Etäterveydenhuollon alusta antaa standardin 10 kohdan SUS-kyselylomakkeen 150 potilaalle heidän ensimmäisen videokäyntinsä jälkeen. Kaikkien vastaajien laskettu keskimääräinen SUS-pistemäärä on 74. Laajasti siteeratun toimialan keskiarvon 68 vertailuun nähden tämä osoittaa keskimääräistä parempaa käytettävyyttä tälle tietylle potilasväestölle ja käyttötapaukselle, vaikka se on edelleen olennaisesti alle "erinomaisen" 80 pisteen kynnyksen, joka viittaisi vain harvoihin jäljellä oleviin käytettävyysesteisiin. Samojen 150 vastauksen jaottelu iän mukaan osoittaa keskimääräisen pistemäärän 81 alle 50-vuotiailla potilailla ja 62 vähintään 65-vuotiailla — ero, joka osoittaa tiettyyn, korjattavissa olevaan käytettävyysongelmaan iäkkäillä potilailla yleisen tuotteen käytettävyysongelman sijaan, ja jonka yksittäinen yhdistetty keskiarvo olisi peittänyt.

## Tietolähteet ja varaukset

SUS-tiedot tulevat suoraan potilailta tai kliinikoilta, jotka täyttävät standardoidun 10 kohdan kyselylomakkeen, ja mittari on annettava täsmälleen validoidulla tavalla (samat 10 kohtaa, sama 5-portainen samanmielisyysasteikko, sama pisteytyskaava), jotta tuloksena oleva pistemäärä on vertailukelpoinen julkaistuihin vertailuarvoihin nähden; kyselylomakkeen muokattu tai lyhennetty versio, olipa se kuinka hyvää tarkoittava tahansa, tuottaa pistemäärän, jota ei voida luotettavasti tulkita standardin vertailujakaumaa vasten. SUS mittaa koettua käytettävyyttä, joka korreloi mutta ei ole identtinen objektiivisen tehtävien suorittamisen onnistumisen kanssa (ks. digitaalisen lukutaidon aste tehtävien suorittamiseen perustuvasta mittarista); tuotteella voi olla hyvä SUS-pistemäärä potilailta, jotka eivät yrittäneet monimutkaisempia ominaisuuksia, joten SUS:n yhdistäminen objektiiviseen tehtävien suoritustietoon antaa täydemmän kuvan kuin kumpikaan yksinään. Vastausajankohdalla on merkitystä: SUS:n antaminen heti turhauttavan yksittäisen tapahtuman (epäonnistunut yhteys, sekava vaihe) jälkeen verrattuna sujuvan istunnon jälkeiseen voi siirtää pisteitä tuotteen yleisestä käytettävyydestä riippumatta.

## Sudenkuopat

- **Standardin kyselylomakkeen kohtien tai pisteytyksen muuttaminen**: pienetkin sanamuodon tai asteikon muutokset mitätöivät vertailun vakiintuneeseen julkaistuun vertailujakaumaan; käytä standardia 10 kohdan mittaria täsmälleen validoidulla tavalla.
- **Pelkän keskimääräisen pistemäärän raportointi ilman jaottelua**: käytettävyys vaihtelee usein merkittävästi käyttäjän iän, digitaalisen lukutaidon tai roolin (potilas vastaan kliinikko) mukaan; jaottele raportointi löytääksesi täsmällisiä, korjattavissa olevia käytettävyysaukkoja, jotka yksittäinen keskiarvo peittää.
- **SUS:n käsittely kliinisen vaikuttavuuden mittarina**: SUS mittaa nimenomaan käytettävyyttä, ei kliinistä tulosta tai tyytyväisyyttä hoitoon; erittäin käytettävä työkalu voi silti jättää kliiniset tulokset parantamatta, eikä näitä tulisi koskaan sekoittaa tai korvata toisillaan.
- **Kyselyn antaminen vain epätavallisen sujuvien tai epätavallisen turhauttavien istuntojen jälkeen**: annon ajoitus ja konteksti voivat vinouttaa pistemäärää; anna johdonmukaisesti edustavalle otokselle todellisia istuntoja, ei vain käteviä tai valikoivasti valittuja.

## Lähteet

- Brooke, J., "SUS: A Quick and Dirty Usability Scale", alkuperäinen julkaistu mittari
- Bangor, Kortum ja Miller, julkaistu SUS-vertailututkimus, joka vahvisti laajasti siteeratut pistemäärän tulkintakaistat
- Vertaisarvioitu kirjallisuus SUS:n käytöstä digitaalisen terveydenhuollon ja etäterveydenhuollon käytettävyyden arvioinnissa, esimerkiksi JMIR Human Factors -lehdessä julkaistut tutkimukset

Katso myös: [potilaan net promoter score](../potilaan-net-promoter-score/), liittyvä mutta erillinen potilaan raportoima mittari, joka mittaa tyytyväisyyttä ja uskollisuutta eikä erityisesti ohjelmiston käytettävyyttä.
