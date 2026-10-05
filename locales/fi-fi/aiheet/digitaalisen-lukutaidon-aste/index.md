# Digitaalisen lukutaidon aste

Digitaalisen lukutaidon aste mittaa sen osuuden potilasväestöstä, joka pystyy itsenäisesti ja onnistuneesti suorittamaan digitaalisen terveydenhuollon alustan yleisiä tehtäviä — kirjautumaan sisään, varaamaan ajan, liittymään videokäyntiin tai lukemaan tutkimustuloksen — tarvitsematta toisen henkilön apua. Se eroaa digitaalisen saavutettavuuden asteesta, ja se tulisi aina mitata erikseen: potilaalla voi olla älypuhelin ja laajakaistayhteys, mutta hän ei silti pysty käyttämään etäterveydenhuollon alustaa ilman apua, ja näiden kahden mittarin sekoittaminen piilottaa juuri sen väestön, jonka esiin tuomiseksi tämä mittari on olemassa.

## Miksi tämä on tärkeää

Pelkkä digitaalinen saavutettavuus ei takaa, että potilas voi käyttää digitaalista terveyspalvelua tehokkaasti: potilaat, joilla on heikompi terveyslukutaito, rajallinen kokemus teknologiasta yleensä, kognitiivinen tai näkövamma tai alustan käyttöliittymän kielimuuri, voivat omata täyden teknisen saavutettavuuden ja silti epäonnistua tehtävän itsenäisessä suorittamisessa, ja tämä kuilu korreloi järjestelmällisesti samojen väestöryhmien kanssa, jotka kohtaavat jo muita terveyseroja. HIMSS Digital Health Equity Measurement Framework pitää digitaalista lukutaitoa saavutettavuudesta erillisenä pilarina juuri tästä syystä: saavutettavuuskuilun umpeen kurominen puuttumatta myös lukutaitokuiluun voi jättää väestön teknisesti yhteyksissä olevaksi mutta toiminnallisesti kykenemättömäksi hyötymään. Organisaatiot, jotka mittaavat yleisten alustatoimintojen tehtävän suorittamista ja suorittamiseen kuluvaa aikaa kielen ja sosioekonomisten indikaattorien mukaan jaoteltuna, pystyvät tunnistamaan lukutaitoesteet ja kohdentamaan tukea (yksinkertaistetut käyttöliittymät, avustettu käyttöönotto, vieraskielinen sisältö) paljon täsmällisemmin kuin organisaatiot, jotka tukeutuvat pelkkiin saavutettavuusmittareihin tai yleisiin tyytyväisyyspisteisiin.

## Miten se lasketaan

```
Digitaalisen lukutaidon aste = potilaat, jotka suorittavat määritellyn
                                tehtävän itsenäisesti ilman apua /
                                potilaat, jotka yrittävät kyseistä
                                tehtävää × 100

Yleisesti mitatut tehtävät: tilille kirjautuminen, ajanvaraus,
videokäyntiin liittyminen, tutkimustuloksen katselu, ilmoittautumis-
kaavakkeen täyttäminen.

Raportoi tehtäväkohtaisesti, ei yhtenä yhdistettynä pistemääränä,
sillä yksinkertaisten tehtävien (kirjautuminen) ja monimutkaisten
tehtävien (monivaiheisen ilmoittautumiskaavakkeen täyttäminen)
lukutaito eroaa merkittävästi, ja niiden yhdistäminen hämärtää sen,
missä kohtaa tietty este on.
```

## Käytännön esimerkki

Terveydenhuoltojärjestelmä seuraa videokäyntiin liittymistä määriteltynä tehtävänä 5 000 ajoitetun etäterveydenhuollon käynnin joukossa kuukauden aikana. Näistä 4 100 potilasta liittyy onnistuneesti ilman tukipuhelua tai käynnin aikaista teknistä apua (digitaalisen lukutaidon aste tälle tehtävälle: 82 %). Pääasiallisen kielen mukaan jaoteltuna aste on 89 % englanninkielisillä potilailla verrattuna 61 %:iin potilailla, joiden pääasiallinen kieli poikkeaa alustan oletuskäyttöliittymän kielestä — 28 prosenttiyksikön ero, joka olisi näkymätön, jos raportoitaisiin vain yhdistetty 82 %:n luku, ja joka osoittaa suoraan tiettyyn, korjattavissa olevaan toimenpiteeseen (käännetty käyttöliittymä ja ohjeet) epämääräisen yleisen lukutaitoongelman sijaan.

## Tietolähteet ja varaukset

Tehtävien suorittamistiedot kerätään tyypillisesti alustan omista tapahtumalokeista (pääsikö potilas videokäyntiin, valmistuiko ajanvarausvirta ilman keskeyttämistä), joita täydennetään tukipuhelu- tai neuvontapalvelun yhteydenottotiedoilla sellaisten tehtävien tunnistamiseksi, jotka "suoritettiin" teknisesti vain siksi, että potilas sai reaaliaikaista apua kesken kaiken. Pelkästään järjestelmälokeista "suoritetuksi" lasketun tehtävän taustalla voi piillä se, että potilas tarvitsi puhelun perheenjäseneltä tai tukihenkilöstöltä päästäkseen perille — aidosti lukutaidosta riippumaton suoritus tulisi määritellä ja sitä seurata erikseen avustetusta suorituksesta aina, kun alusta pystyy erottamaan nämä kaksi. Digitaalinen lukutaito korreloi terveyslukutaidon ja yleisen lukutaidon kanssa mutta on niistä analyyttisesti erillinen; validoitua mittaria (eikä pelkästään iän tai demografisten tietojen perusteella tehtyä epävirallista oletusta) tulisi käyttää aina, kun tarvitaan muodollinen arviointi.

## Sudenkuopat

- **Digitaalisen lukutaidon sekoittaminen digitaaliseen saavutettavuuteen**: potilaalta, jolla on täysi tekninen saavutettavuus, voi silti puuttua lukutaito sen tehokkaaseen käyttöön; nämä ovat erillisiä mittareita, jotka vaativat erilliset toimenpiteet, eikä niitä tulisi koskaan raportoida yhtenä yhdistettynä lukuna.
- **Avustettujen suoritusten laskeminen itsenäisiksi onnistumisiksi**: jos potilas suorittaa tehtävän vain tukipuhelun tai perheenjäsenen avulla, se on lukutaitokuilu, jonka alusta on peittänyt eikä ratkaissut; erottele avustettu ja itsenäinen suoritus aina, kun tiedot sen sallivat.
- **Yhden yhdistetyn tehtävien suorituspistemäärän raportointi**: yksinkertaisen tehtävän (kirjautuminen) ja monimutkaisen tehtävän (yksityiskohtaisen ilmoittautumiskaavakkeen täyttäminen) lukutaito eroaa merkittävästi; raportoi tehtäväkohtaisesti tunnistaaksesi tarkasti, missä este on.
- **Sen olettaminen, että pelkkä ikä ennustaa digitaalista lukutaitoa**: vaikka ikä korreloi kokonaisuutena alhaisemman digitaalisen lukutaidon kanssa, kielitaito alustan käyttöliittymän kielellä ja yleinen teknologiatuntemus ovat usein vahvempia yksilötason ennustajia, ja ne tulisi mitata suoraan eikä päätellä iästä.

## Lähteet

- HIMSS, Digital Health Equity Measurement Framework (DHEMF)
- Office of the National Coordinator for Health Information Technology (ONC), terveydenhuollon tietotekniikan käytettävyyttä ja digitaalista terveyslukutaitoa koskeva tutkimus
- Vertaisarvioitu kirjallisuus digitaalisen terveyslukutaidon mittaamisesta ja interventioista, esimerkiksi Journal of Medical Internet Research (JMIR) -lehdessä julkaistut tutkimukset

Katso myös: [digitaalisen saavutettavuuden aste](../digitaalisen-saavutettavuuden-aste/), edellytysmittari, jonka kanssa tämä mittari useimmin, ja useimmiten virheellisesti, sekoitetaan.
