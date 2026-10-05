# Laitteiden käytettävyysaste

Laitteiden käytettävyysaste mittaa sen osuuden aikataulutetusta seuranta-ajasta, jonka yhdistetty terveydenhuollon laite — etäseurannan anturi, puettava laite tai kotona käytettävä etäterveydenhuollon yksikkö — on todella verkossa, lähettää tietoa ja toimii oikein sen sijaan, että se olisi offline-tilassa, yhteydettömänä tai toimintahäiriöinen. Se on perustavanlaatuinen infrastruktuurimittari jokaisen etäseuranta- tai yhdistettyjen laitteiden ohjelman taustalla: kliininen hälytys, biometrinen trendi tai sitoutumisluku, joka on laskettu usein offline-tilassa olleesta laitteesta, on yhtä luotettava kuin sen takana oleva yhteys.

## Miksi tämä on tärkeää

Etäseurantaohjelman koko kliininen arvolupaus riippuu jatkuvasta tai lähes jatkuvasta tiedonkeruusta; laite, jonka käytettävyys on heikko, luo hiljaisia aukkoja potilaan kliiniseen kuvaan, jotka voidaan sekoittaa vakauteen (ei hälytystä, koska ei tietoa, ei siksi, ettei mikään olisi muuttunut) sen sijaan, että ne tunnistettaisiin oikein seurannan epäonnistumiseksi. Laitteiden käytettävyys on myös ohjelman kustannusten ja potilaskokemuksen johtava indikaattori: laite, jonka yhteys katkeaa usein, aiheuttaa tukipuheluita, potilaan turhautumista ja mahdollisesti tarpeetonta kliinistä yhteydenottoa sen selvittämiseksi, johtuuko tietoaukko todellisesta kliinisestä tapahtumasta vai pelkästä teknisestä viasta. Koska laitteiden käytettävyyden häiriöt johtuvat usein infrastruktuurista, jota organisaatio hallitsee (huonosti konfiguroitu matkapuhelinverkon yhdyskäytävä, heikko Wi-Fi-kattavuus potilaan kotona, puutteellisesti huollettu laitekanta), eikä potilaasta, tämä mittari kuuluu selkeästi toimittajalle ja teknisen toiminnan tiimille, eikä sitä tulisi sulauttaa umpimähkään potilaan sitoutumisen mittareihin.

## Miten se lasketaan

```
Laitteiden käytettävyysaste = aika, jonka laite oli verkossa ja lähetti
                               kelvollista tietoa / aikataulutettu
                               seuranta-aika yhteensä × 100

Jaa seisokkien perimmäiset syyt tietojen salliessa:
  Laitepuolen vika        (akku, laitteistovika, laiteohjelmiston kaatuminen)
  Yhteysvika              (matkapuhelinverkon/Wi-Fi:n/VPN:n katkeaminen)
  Potilaspuolen tekijät   (laite sammutettu, siirretty kantaman ulkopuolelle)

Käytettävyyden rinnalla seurattavat tekniset tukiparametrit:
  Keskimääräinen suorittimen käyttöaste, muistin käyttö ja akun varaus
  laitetta kohti
  Yhteysvikojen välinen keskimääräinen aika
  Keskimääräinen aika yhteyden palautumiseen katkon jälkeen
```

## Käytännön esimerkki

Sydämen etäseurantaohjelma ottaa käyttöön 1 000 yhdistettyä laitetta, joiden kunkin odotetaan lähettävän tietoa jatkuvasti. 30 päivän kuukauden aikana (720 aikataulutettua seurantatuntia laitetta kohti) laitekanta kirjaa yhteensä 705 600 todellista verkkotuntia aikataulutettua 720 000 tuntia vastaan, mikä antaa koko laitekannan laitteiden käytettävyysasteeksi 705 600 / 720 000 × 100 = 98 %. Niiden 14 400 seisokkitunnin perimmäisten syiden analyysi osoittaa, että 60 % johtuu matkapuhelinverkon yhteyskatkoista, jotka keskittyvät tiettyyn maaseutumaiseen palvelualueeseen, 25 % ikääntyneistä akuista, jotka on merkitty vaihdettaviksi, ja 15 % siitä, että potilaat sammuttavat laitteensa tilapäisesti. Tämä erittely osoittaa kaksi selkeää, erilaista toimenpidettä — yhteyskorjauksen kyseiselle alueelle ja ennakoivan akunvaihto-ohjelman — joita yksittäinen kokonaiskäytettävyysluku ei olisi erottanut.

## Tietolähteet ja varaukset

Käytettävyystiedot tulevat laitevalmistajan tai alustatoimittajan omasta laitehallinta- ja telemetriajärjestelmästä, joka kirjaa yhteys- ja sykepulssitapahtumat laitekohtaisesti; organisaation tulisi varmistaa tarkasti, mitä toimittaja laskee "verkossa olevaksi" (laite voi ilmoittaa olevansa yhteydessä verkkoon samalla kun se ei lähetä kelvollista kliinistä tietoa, mikä tulisi kliinisessä mielessä laskea seisokiksi, vaikka toimittajan oma kojelauta raportoisi sen olevan yhteydessä). Käytettävyys tulisi raportoida laiteryhmittäin tai maantieteellisesti, kun määrä sen sallii, koska yhteyden laatu on usein maantieteellisesti keskittynyt (maaseudun matkapuhelinkattavuus, vanhojen rakennusten Wi-Fi) eikä jakautunut tasaisesti potilasväestöön, ja koko laitekannan kokonaisluku voi peittää vakavan, korjattavissa olevan alueellisen ongelman.

## Sudenkuopat

- **Verkkoyhteyden sekoittaminen kelvollisen tiedon lähettämiseen**: laite voi näyttää "yhdistetyltä" toimittajan kojelaudalla samalla kun se ei lähetä käyttökelpoista kliinistä tietoa; määrittele ja mittaa käytettävyys todellisen kelvollisen tiedon vastaanoton eikä pelkän raa'an verkkoyhteyden perusteella.
- **Pelkän koko laitekannan keskiarvon raportointi**: tämä voi piilottaa vakavan, maantieteellisesti tai laiteryhmäkohtaisesti rajautuvan seisokkiongelman, jonka kohdennettu keskiarvo paljastaisi ja jolla on tietty, korjattavissa oleva ratkaisu.
- **Seisokin perimmäisen syyn erottelematta jättäminen**: laitepuolen, yhteyteen liittyvät ja potilaspuolen seisokit vaativat kukin täysin erilaisen toimenpiteen; yksittäinen seisokkiprosentti ilman perimmäisten syiden jaottelua ei anna toimintapohjaa.
- **Tietoaukon pitäminen oletuksena kliinisenä vakautena**: offline-tilassa olevan laitteen puuttuvan tietovirran tulisi laukaista tekninen yhteystarkistus, eikä sitä tulisi hiljaisesti tulkita "ei uutisia on hyvä uutinen" potilaan kliinisestä tilasta.

## Lähteet

- Continua Design Guidelines / Personal Connected Health Alliance, yhdistettyjen terveydenhuollon laitteiden tekniset yhteentoimivuusstandardit
- ONC / HealthIT.gov, etäseurantaohjelmien käyttöönoton ja teknisten vaatimusten ohjeistus
- Vertaisarvioitu kirjallisuus etäseurantalaitteiden luotettavuudesta ja tietojen täydellisyydestä, esimerkiksi npj Digital Medicine -lehdessä julkaistut tutkimukset

Katso myös: [triage-ohjauksen tarkkuus](../triage-ohjauksen-tarkkuus/), joka riippuu täydellisen ja luotettavan laitetiedon saamisesta, jotta oikea triage-päätös on ylipäätään mahdollinen.
