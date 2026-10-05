# Biometrisen paranemisen aste

Biometrisen paranemisen aste on niiden digitaalisen terveydenhuollon ohjelmaan ilmoittautuneiden potilaiden osuus, jotka saavuttavat kliinisesti merkityksellisen paranemisen seuratussa biometrisessä mittarissa — useimmiten glykosyloituneessa hemoglobiinissa (HbA1c) diabetes- ja kardiometabolisissa ohjelmissa tai painoindeksissä (BMI) painonhallintaohjelmissa — määritellyn ohjelmajakson aikana. Se on tulosmittari, joka viime kädessä oikeuttaa digitaalisen terveydenhuollon tuotteen kliiniset väitteet: sitoutumis- ja käyttöönottoluvut kuvaavat, miten tuotetta käytetään, mutta biometrinen paraneminen on lähempänä näyttöä siitä, että se toimii.

## Miksi tämä on tärkeää

Digitaalisen terveydenhuollon ohjelmia myydään ja tilataan usein lupauksella parantuneista terveystuloksista, ja biometrisen paranemisen aste on suorin, määrällinen tapa testata tätä lupausta tiettyä, kliinisesti tunnustettua kynnysarvoa vasten epämääräisen "parempi terveys" -väitteen sijaan. Maksajat, työnantajat ja terveydenhuoltojärjestelmät sitovat korvaukset tai sopimusten uusimisen yhä useammin osoitettuun biometriseen muutokseen, joten ohjelma, joka ei pysty raportoimaan tätä astetta uskottavasti, on sekä kaupallisesti että kliinisesti epäedullisessa asemassa. Mittari on myös kurinpidollinen tarkistus ohjelman suunnittelulle: sitoutumisesta (kirjautumiset, lähetetyt viestit) on paljon helpompi raportoida kuin tuloksista, ja tiimin tulisi suhtautua epäluuloisesti ohjelmaan, joka raportoi edellisistä innokkaasti mutta on epämääräinen jälkimmäisistä.

## Miten se lasketaan

```
Biometrisen paranemisen aste = potilaat, jotka saavuttavat määritellyn
                                kliinisesti merkityksellisen paranemisen /
                                potilaat, joilla on kelvollinen lähtötaso-
                                ja seurantamittaus × 100

Yleiset kliinisesti merkitykselliset kynnysarvot:
  HbA1c   — vähintään 0,5 prosenttiyksikön lasku tai määritellyn
            tavoitteen (esim. < 7,0 %) saavuttaminen
            viitealueen ulkopuolella olevasta lähtötasosta
  BMI     — vähintään 5 %:n lasku lähtöpainosta, joka säilyy
            seurantamittauksen ajankohtaan asti

Raportoi erikseen jokaiselle seuratulle biometriselle mittarille; älä
koskaan yhdistä HbA1c:n ja BMI:n paranemista yhdeksi
"paranemisprosentiksi".
```

## Käytännön esimerkki

Kardiometabolinen digitaalisen terveydenhuollon ohjelma ottaa mukaan 800 potilasta, joiden lähtötason HbA1c on viitealueen ulkopuolella. Heistä 620:llä on sekä kelvollinen lähtötason mittaus että seurantamittaus 6 kuukauden kohdalla (180 on jäänyt seurannan ulkopuolelle ja suljetaan pois nimittäjästä, ei lasketa epäonnistumisiksi). Niistä 620 potilaasta, joilla on parilliset mittaukset, 340 saavuttaa vähintään 0,5 prosenttiyksikön laskun. Biometrisen paranemisen aste on 340 / 620 × 100 = 55 %. Tämän raportoiminen kaikkiin 800 mukaan otettuun nähden (340 / 800 = 42,5 %) sekoittaisi seurannasta poisjäämisen ja hoidon epäonnistumisen ja aliarvioisi astetta niiden potilaiden osalta, jotka todella suorittivat mittauksen.

## Tietolähteet ja varaukset

Lähtötason ja seurannan biometriset arvot tulevat tyypillisesti yhdistetystä laitteesta (Bluetooth-sokerimittari tai älyvaaka), sähköisestä potilaskertomuksesta tuodusta laboratoriotuloksesta tai potilaan itse syöttämästä arvosta — ja näiden kolmen lähteen luotettavuus vaihtelee suuresti, joten lähde tulisi raportoida asteen rinnalla. Seurannasta poisjäänti on harvoin satunnaista: ohjelmasta etääntyvät potilaat ovat usein myös ne, joiden tila on todennäköisimmin parantunut vähiten, joten pelkästään seurannan suorittaneille potilaille laskettu korkea paranemisaste voi yliarvioida ohjelman todellisen väestötason vaikutuksen. Kausivaihtelu ja taantuminen kohti keskiarvoa ovat todellisia ilmiöitä sekä HbA1c:n että painon kohdalla, joten ohjelman tulisi mahdollisuuksien mukaan verrata samanaikaiseen tai historialliseen verrokkiryhmään sen sijaan, että mitä tahansa paranemista pidettäisiin todisteena ohjelman vaikutuksesta.

## Sudenkuopat

- **Seurannasta poisjäämisen pois sulkeminen raportoimisen sijaan**: potilaiden, joilla ei ole seurantamittausta, hiljainen pudottaminen nimittäjästä voi merkittävästi paisuttaa näennäistä paranemisastetta; raportoi aina seurantamittauksen täyttöaste itse paranemisasteen rinnalla.
- **Itse ilmoitettujen ja laitteelta saatujen mittausten sekoittaminen ilman merkintää**: itse ilmoitettu paino on järjestelmällisesti epäluotettavampi kuin yhdistetyn älyvaa'an lukema, ja kahden lähteen yhdistäminen hämärtää sen, kuinka suuri osa näennäisestä paranemisesta on mittauskohinaa.
- **Ei verrokkia tai vastakkaista tilannetta**: monet kroonisten sairauksien biometriset mittarit vaihtelevat tai palautuvat kohti keskiarvoa itsestään; yhden haaran paranemisaste ilman vertailuryhmää on viitteellinen, ei ratkaiseva näyttö ohjelman vaikutuksesta.
- **Vaatimattoman keskimääräisen muutoksen pitäminen näyttönä laajasta paranemisesta**: pieni väestötason keskimääräinen paraneminen voi johtua muutamasta suuresta vasteen saaneesta, vaikka suurimmalla osalla potilaista ei tapahdu muutosta; raportoi jakauma (esim. kliinisesti merkityksellisen kynnyksen ylittäneiden osuus), ei vain keskimääräistä muutosta.

## Lähteet

- American Diabetes Association (ADA), Standards of Care in Diabetes, HbA1c-tavoitetta ja kliinisesti merkityksellistä muutosta koskeva ohjeistus
- Centers for Disease Control and Prevention (CDC), Division of Diabetes Translation, ohjelma-arvioinnin ohjeistus
- Vertaisarvioitu kirjallisuus digitaalisten diabetes- ja painonhallintaohjelmien tuloksista, esimerkiksi npj Digital Medicine- ja Diabetes Care -lehdissä julkaistut tutkimukset

Katso myös: [lääkehoitoon sitoutumisen aste](../lääkehoitoon-sitoutumisen-aste/), usein biometrisen paranemisen ylävirran tekijä pitkäaikaissairausohjelmissa.
