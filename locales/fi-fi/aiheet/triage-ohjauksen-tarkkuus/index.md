# Triage-ohjauksen tarkkuus

Triage-ohjauksen tarkkuus on niiden potilaskohtaamisten osuus, joissa automaattinen tai tekoälyavusteinen triage-työkalu ohjaa potilaan oikein asianmukaiselle hoidon tasolle ja ympäristöön — esimerkiksi omahoitoon, perusterveydenhuoltoon, kiireelliseen hoitoon tai päivystyshoitoon — kliinisesti validoituun vertailustandardiin nähden arvioituna. Se on turvallisuuden ja vaikuttavuuden mittari jokaiselle digitaaliselle etuovelle, oirearvioinnille tai tekoälypohjaiselle triage-järjestelmälle: työkalun koko arvolupaus perustuu potilaiden oikeaan, nopeaan ja johdonmukaiseen ohjaamiseen.

## Miksi tämä on tärkeää

Epätarkka triage-työkalu aiheuttaa haittaa kumpaankin suuntaan: aliarviointi (potilaan ohjaaminen matalammalle hoidon tasolle kuin hän tarvitsee) voi viivästyttää todellisen hätätapauksen hoitoa, kun taas yliarviointi (potilaan ohjaaminen korkeammalle hoidon tasolle kuin hän tarvitsee) tuhlaa niukkaa päivystys- ja kiireellisen hoidon kapasiteettia ja lisää kustannuksia ja potilaan ahdistusta ilman kliinistä hyötyä. Koska näillä kahdella virhetyypillä on niin erilaiset seuraukset, triage-ohjauksen tarkkuus tulisi aina raportoida virheiden suunnan rinnalla eikä yhtenä kokonaistarkkuuslukuna, joka peittää sen, erehtyykö työkalu turvallisesti vai vaarallisesti. Sääntelyviranomaiset ja terveydenhuoltojärjestelmät, jotka arvioivat tekoälytriage-työkalua käyttöönottoa varten, edellyttävät yhä useammin tällaista kerrostettua tarkkuusraportointia kliinisen hyväksynnän ehtona, erityisesti työkaluille, jotka toimivat missä tahansa määrin kliinikosta riippumattomasti.

## Miten se lasketaan

```
Triage-ohjauksen tarkkuus = oikein ohjatut kohtaamiset / triagetut
                             kohtaamiset yhteensä × 100

Raportoi aliarviointi ja yliarviointi erikseen:
  Aliarviointiaste = kohtaamiset, jotka on ohjattu vertailustandardia
                      matalammalle kiireellisyystasolle / triagetut
                      kohtaamiset yhteensä × 100
  Yliarviointiaste = kohtaamiset, jotka on ohjattu vertailustandardia
                      korkeammalle kiireellisyystasolle / triagetut
                      kohtaamiset yhteensä × 100

Vertailustandardi on tyypillisesti saman tapauksen jälkikäteinen
kliinikon tekemä tarkastelu, mahdollisuuksien mukaan sokkoutettuna
työkalun tulokselle.
```

## Käytännön esimerkki

Tekoälypohjainen oirearviointityökalu triagoi kuukaudessa 5 000 potilaskohtaamista. Sokkoutettu kliinikon tekemä 500 kohtaamisen satunnaisotoksen tarkastelu toteaa, että 430 ohjattiin oikealle kiireellisyystasolle (tarkkuus 86 %), 45 aliarvioitiin (9 %) ja 25 yliarvioitiin (5 %). 9 %:n aliarviointiaste on luku, joka kaipaa kiireellisimmin tutkimista, sillä se edustaa kohtaamisia, joissa potilas on saatettu ohjata vähemmän kiireelliseen hoitoon kuin hän todellisuudessa tarvitsi; 5 %:n yliarviointiaste on kapasiteetti- ja kustannushuoli mutta ei suora turvallisuushuoli.

## Tietolähteet ja varaukset

Vertailustandardilla, jota vasten triage-tarkkuus mitataan, on valtava merkitys: yhden kliinikon tarkastelu tuo mukaan kyseisen kliinikon oman arvion vaihtelun, joten uskottava tarkkuusluku edellyttää yleensä joko useita riippumattomia tarkastajia dokumentoidulla arvioijien välisellä yhdenmukaisuudella tai vertailua myöhempään, vahvistettuun kliiniseen lopputulokseen (mitä hoitoa potilas todellisuudessa tarvitsi, selvitettynä jälkikäteen). Myös otannalla on merkitystä: pelkästään kohtaamisten sopivuusotoksen tai vain epätavallisiksi merkittyjen tarkastelu ei tuota lukua, joka yleistyy työkalun kokonaissuorituskykyyn. Tarkkuusluvut tulisi raportoida erikseen esittävän oireen tai vaivan luokan mukaan, kun taustalla oleva tapausmäärä sen sallii, sillä triage-työkalut harvoin suoriutuvat tasaisesti kaikissa sairauksissa.

## Sudenkuopat

- **Yhden yhdistetyn tarkkuusluvun raportointi**: aliarvioinnin ja yliarvioinnin kutistaminen yhdeksi luvuksi piilottaa sen, kallistuvatko työkalun virheet vaarallisemman virhetyypin suuntaan; raportoi ne aina erikseen.
- **Yhden, sokkouttamattoman tarkastajan käyttö vertailustandardina**: tämä voi hiljaisesti vinouttaa tarkkuuslukua kohti sitä, mitä kyseinen tarkastaja olisi itse tehnyt, riippumattoman kliinisen standardin sijaan.
- **Validointi vain jälkikäteisellä, sopivalla datalla**: työkalun todellinen ohjaustarkkuus reaaliaikaisessa, monitulkintaisessa potilaan syötteessä eroaa usein olennaisesti sen tarkkuudesta kehityksen aikana koostetussa kuratoidussa validointiaineistossa.
- **Suorituskyvyn ajautumisen sivuuttaminen käyttöönoton jälkeen**: tekoälytriage-mallin tarkkuus voi heikentyä ajan myötä potilasväestöjen, esittävien oireiden tai hoitopolkujen saatavuuden muuttuessa; tarkkuus tulisi mitata uudelleen toistuvasti eikä validoida kerran ja olettaa vakaaksi.

## Lähteet

- ONC / HealthIT.gov, kliinisen päätöksenteon tuen ja tekoälyä hyödyntävien työkalujen turvallisuutta ja laadunvarmistusta koskeva ohjeistus
- Vertaisarvioitu kirjallisuus oirearviointi- ja tekoälytriage-työkalujen tarkkuudesta, esimerkiksi JAMIA-, npj Digital Medicine- ja BMJ Health & Care Informatics -lehdissä julkaistut tutkimukset
- NHS England, digitaalisten triage- ja etävastaanottotyökalujen kliinistä turvallisuutta koskeva ohjeistus (DCB0129/DCB0160 kliinisen riskinhallinnan standardit)

Katso myös: [digitaalisen lähetteen käsittelyaika](../digitaalisen-lähetteen-käsittelyaika/), prosessimittari, joka on suorimmin triage-päätöksen jatkoa.
