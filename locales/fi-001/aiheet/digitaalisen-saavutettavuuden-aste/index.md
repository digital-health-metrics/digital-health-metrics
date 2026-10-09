# Digitaalisen saavutettavuuden aste

Digitaalisen saavutettavuuden aste mittaa sen osuuden kelpoisesta potilasväestöstä, jolla on käytännön edellytykset käyttää digitaalisen terveydenhuollon tuotetta lainkaan: laajakaista- tai luotettava mobiilidatayhteys, internetiin kykenevä laite ja aktiivinen tili asianomaisessa potilasportaalissa tai sovelluksessa. Se on tämän kirjan jokaisen muun digitaalisen terveydenhuollon mittarin edellytysmittari — väestö ei voi rekisteröityä mihinkään digitaalisen terveydenhuollon tuotteeseen, sitoutua siihen tai hyötyä siitä, jos se ei rakenteellisesti pysty tavoittamaan sitä, riippumatta siitä, kuinka hyvin tuote on suunniteltu.

## Miksi tämä on tärkeää

Digitaalisen terveydenhuollon käyttöönotto- ja sitoutumismittarit olettavat implisiittisesti väestön, jolla on jo digitaalinen saavutettavuus, ja käyttöönotto- tai sitoutumisasteiden raportointi ilman taustalla olevan saavutettavuusasteen määrittämistä ensin riskeeraa niiden potilaiden hiljaisen poissulkemisen, joilla on vähiten todennäköisesti tämä saavutettavuus — ja jotka ovat usein myös potilaita, joilla on suurin terveydenhuollon tarve. HIMSS Digital Health Equity Measurement Framework (DHEMF) ja vastaavat viitekehykset pitävät digitaalista saavutettavuutta perustavanlaatuisena, ensisijaisena tasa-arvomittarina juuri siksi, että interventiot, jotka on rakennettu huomioimatta saavutettavuuskuiluja, pyrkivät vahvistamaan olemassa olevia terveyseroja sen sijaan, että ne kaventaisivat niitä: etäterveydenhuolto ensin -strategia voi tahattomasti heikentää hoitoon pääsyä potilailta, joilla ei ole luotettavaa yhteyttä tai laitetta, vaikka se mitattavasti parantaisi kokemusta potilailla, joilla oli jo molemmat. Digitaalisen saavutettavuuden astetta tulisi seurata ja raportoida väestö- ja maantieteellisten segmenttien mukaan, sillä kansalliset tai organisaatiotason keskiarvot peittävät rutiininomaisesti suuria aukkoja tietyissä väestöryhmissä.

## Miten se lasketaan

```
Digitaalisen saavutettavuuden aste = potilaat, joilla on laajakaista-/
                                      mobiiliyhteys JA internetiin
                                      kykenevä laite JA aktiivinen
                                      potilasportaalin tai sovelluksen
                                      tili / kelpoinen potilasväestö
                                      yhteensä × 100

Raportoi jokainen osatekijä erikseen sekä yhdistetty aste:
  Yhteysaste           = potilaat, joilla on luotettava internet-yhteys /
                          kelpoinen väestö × 100
  Laiteomistusaste     = potilaat, joilla on internetiin kykenevä laite /
                          kelpoinen väestö × 100
  Portaalin aktivointiaste = potilaat, joilla on aktiivinen portaalin/
                          sovelluksen tili / kelpoinen väestö × 100
                          (ks. potilasportaalin käyttöönottoaste
                          täydemmän käyttöönottosuppilon osalta)
```

## Käytännön esimerkki

Terveydenhuoltojärjestelmä palvelee 40 000 potilaan kelpoista väestöä. Potilaskysely ja infrastruktuuritiedot osoittavat, että 34 000:lla (85 %) on luotettava laajakaista- tai mobiiliyhteys, 33 000:lla (82,5 %) on internetiin kykenevä laite, ja molemmat ehdot täyttävistä potilaista 27 000:lla (67,5 % koko kelpoisesta väestöstä) on aktiivinen potilasportaalitili. Ikäryhmittäinen erittely osoittaa, että vähintään 65-vuotiaiden potilaiden yhdistetty digitaalisen saavutettavuuden aste on vain 48 % verrattuna alle 65-vuotiaiden 78 %:iin — kuilu, jonka koko organisaation 67,5 %:n keskiarvo peittää täysin ja jonka tulisi suoraan ohjata sitä, voidaanko tietty palvelu turvallisesti tarjota vain digitaalisena tälle väestölle.

## Tietolähteet ja varaukset

Yhteys- ja laiteomistustiedot tulevat tyypillisesti potilaan itseilmoituksen (kyselyn tai ilmoittautumiskaavakkeen kautta), Federal Communications Commissionin (FCC) tai vastaavan kansallisen laajakaistan saatavuuskarttatiedon potilaan maantieteelliselle alueelle sekä organisaation omien järjestelmien portaalin aktivointitietojen yhdistelmästä. Laajakaistan saatavuus aluetasolla (tarjoaako palveluntarjoaja palvelua tietyllä postinumeroalueella) on heikompi korvike kuin kotitalouskohtainen yhteys, koska aluetason saatavuustieto ei kerro mitään siitä, onko tietyllä potilaalla todella varaa tilata kyseinen palvelu tai onko hän valinnut tilata sen — aluetason ja kotitaloustason saavutettavuusasteita ei tulisi sekoittaa. Laitteiden ja yhteyksien käyttömahdollisuus voi myös olla jaettu kotitalouden sisällä (esimerkiksi yksi älypuhelin usean perheenjäsenen käytössä), minkä kotitaloustason kyselytiedot kuvaavat paremmin kuin pelkät yksilötason portaalin kirjautumistiedot.

## Sudenkuopat

- **Pelkän organisaation laajuisen keskiarvon raportointi**: tämä peittää luotettavasti suuret saavutettavuuskuilut iäkkäiden, pienituloisten, maaseudulla asuvien tai muutoin digitaalisesti syrjäytyneiden potilassegmenttien osalta; erottele aina väestö- ja maantieteellisten segmenttien mukaan.
- **Aluetason laajakaistan saatavuuden sekoittaminen todelliseen kotitalouden saavutettavuuteen**: se, että postinumeroaluetta "palvelee" laajakaistan tarjoaja, ei tarkoita, että jokainen alueen kotitalous tilaa kyseisen palvelun tai että sillä on siihen varaa.
- **Laiteomistuksen pitäminen kertaluonteisena, staattisena tosiasiana**: laitteen käyttömahdollisuus voi olla ohimenevä (ikääntyvä laite, kadonnut tai rikkoutunut puhelin, uudelleen osoitettu jaettu perhelaite), joten saavutettavuusaste tulisi mitata toistuvasti eikä olettaa vakaaksi kerran arvioinnin jälkeen.
- **Vain digitaalisen hoitopolun suunnittelu ennen kuin kyseisen väestön saavutettavuusaste on selvitetty**: palvelun siirtäminen vain digitaaliseksi vahvistamatta ensin kohdeväestön todellista digitaalisen saavutettavuuden astetta riskeeraa juuri niiden potilaiden hiljaisen poissulkemisen, joilla on vähiten mahdollisuuksia tavoittaa vaihtoehtoinen kanava.

## Lähteet

- HIMSS, Digital Health Equity Measurement Framework (DHEMF)
- Federal Communications Commission (FCC), kansallinen laajakaistan saatavuus- ja digitaalisen tasa-arvon tieto
- Pew Research Center, tutkimus internetin, laajakaistan ja laitteiden saatavuudesta sekä digitaalisen kuilun kehityksestä eri väestöryhmissä

Katso myös: [digitaalisen lukutaidon aste](../digitaalisen-lukutaidon-aste/), läheisesti liittyvä mittari siitä, pystyvätkö potilaat, joilla saavutettavuus on, käyttämään sitä tehokkaasti.
