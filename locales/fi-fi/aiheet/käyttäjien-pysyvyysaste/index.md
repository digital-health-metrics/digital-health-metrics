# Käyttäjien pysyvyysaste

Käyttäjien pysyvyysaste on niiden käyttäjien osuus, jotka olivat aktiivisia alkujaksolla ja pysyvät aktiivisina myöhemmällä jaksolla, ja sen käänteisluku, poistuma-aste (tai keskeyttämisaste), on niiden osuus, jotka lopettavat tuotteen käytön kokonaan. Siinä missä potilasportaalin käyttöönottoaste (ks. kyseinen aihe) mittaa, aktivoiko potilas digitaalisen terveydenhuollon tuotteen koskaan merkityksellisesti, pysyvyys mittaa, jatkaako hän sen käyttöä — ja minkä tahansa tilaustyyppisen tai jatkuvan hoidon digitaalisen terveydenhuollon tuotteen kohdalla pysyvyys on yleensä yksittäinen mittari, joka liittyy tiukimmin sekä kliiniseen vaikutukseen että kaupalliseen kestävyyteen.

## Miksi tämä on tärkeää

Digitaalisen terveydenhuollon tuote, joka ei pysty pitämään käyttäjiään, ei voi tuottaa pysyvää kliinistä hyötyä, olivatpa sen alkuperäinen käyttöönotto- tai aktivointiluvut kuinka vahvoja tahansa: pitkäaikaissairauden hallintatyökalu, jota käytetään kaksi viikkoa ja sitten hylätään, ei todennäköisesti liikuta biometristä tulosta, joka riippuu kuukausien pysyvästä käyttäytymisen muutoksesta. Pysyvyys on myös yksi kaupallisesti merkittävimmistä mittareista, joita digitaalisen terveydenhuollon yritys raportoi sijoittajille ja maksajille, koska pysyvyyskäyrät (poistuman muoto ajan myötä, ei vain yksittäinen pysyvyysprosentti) paljastavat, onko tuote löytänyt aidosti kestävän käyttömallin vai kerääkö se vain uutuuden ajamaa alkuperäistä kiinnostusta, joka hiipuu ennustettavasti. Pysyvyyskäyrä, joka tasaantuu alkuperäisen laskun jälkeen (potilaat, jotka pääsevät ensimmäisen kuukauden yli, jäävät yleensä mukaan), on hyvin erilainen ja paljon terveempi signaali kuin sellainen, joka laskee jatkuvasti tasaisesti ilman pohjaa.

## Miten se lasketaan

```
Pysyvyysaste (jakso N) = käyttäjät, jotka olivat aktiivisia jaksolla N
                          ja olivat aktiivisia myös alkuryhmän jaksolla
                          / alkuryhmän jakson käyttäjät × 100

Poistuma-aste = 1 − pysyvyysaste (samalle jaksolle)

Raportoi ryhmäkohtaisena pysyvyyskäyränä (pysyvyys päivänä/viikolla/
kuukautena 1, 2, 3…), ei yksittäisenä ajankohtaisena lukuna, sillä
yksittäinen tilannekuva sekoittaa äskettäin liittyneet käyttäjät
(joilla ei ole vielä ollut mahdollisuutta poistua) pitkään mukana
olleisiin.
```

## Käytännön esimerkki

Digitaalinen terveydenhuoltosovellus ottaa mukaan 1 000 uuden käyttäjän ryhmän tammikuussa. Kuukauden 1 loppuun mennessä 640 näistä alkuperäisistä 1 000:sta on edelleen aktiivisia (kuukauden 1 pysyvyys 64 %). Kuukauden 3 loppuun mennessä 410 on edelleen aktiivisia (kuukauden 3 pysyvyys 41 %). Kuukauteen 6 mennessä 380 on edelleen aktiivisia (kuukauden 6 pysyvyys 38 %). Tämän käyrän muoto — jyrkkä alkulasku, jota seuraa tasaantuminen kuukausien 3 ja 6 välillä — viittaa siihen, että tuote säilyttää vakaan ytimen käyttäjiä, kun he ovat ylittäneet alkuperäisen käyttöönoton esteen, mikä on olennaisesti erilainen ja rohkaisevampi signaali kuin jos lasku kuukaudesta 3 kuukauteen 6 olisi jatkunut samalla nopeudella kuin kuukausina 1-3.

## Tietolähteet ja varaukset

Pysyvyys lasketaan tuotteen omista kirjautumis- tai aktiivisuustapahtumalokeista määritellen "aktiivinen" johdonmukaisesti (esimerkiksi vähintään yksi kelpaava istunto jaksolla) jokaisessa vertailtavassa ryhmässä. Ryhmiä tulisi verrata samanarvoisesti — sama alkuperäinen "aktiivisen" määritelmä, sama havainnointi-ikkunan pituus — sillä pienetkin määritelmälliset erot (30 päivän ja 28 päivän kuukaudet tai tiukempi ja väljempi "aktiivisen" kynnys) voivat siirtää raportoitua pysyvyysprosenttia usealla pisteellä ilman todellista eroa käyttäjien käyttäytymisessä. Kausivaikutukset ovat yleisiä uudenvuodenlupauksiin tai erityisiin terveystietoisuusjaksoihin sidotuissa terveyssovelluksissa, joten vuosi vuodelta tehty ryhmävertailu on yleensä informatiivisempi kuin viereisten, eri vuodenaikoina hankittujen ryhmien vertailu.

## Sudenkuopat

- **Yksittäisen pysyvyystilannekuvan raportointi käyrän sijaan**: yksittäinen "X % käyttäjistä on edelleen aktiivisia" -luku ilman poistuman muotoa ajan myötä ei pysty erottamaan tuotetta, joka tasaantuu (terve), tuotteesta, jonka käyttö jatkaa laskuaan (epäterve).
- **"Aktiivisen" määritelmän muuttaminen raportointijaksojen välillä**: aktiivisen käyttäjän määritelmän löysääminen (esimerkiksi passiivisen sovelluksen avauksen laskeminen suoritetun toiminnon sijaan) voi saada pysyvyyden näyttämään paranevan, vaikka todellinen käyttö ei ole muuttunut lainkaan.
- **Ryhmän kausivaihtelun sivuuttaminen**: tammikuun ryhmän pysyvyyden (jota uudenvuodenlupauksiin liittyvä ilmoittautuminen usein paisuttaa tuoden keskimäärin vähemmän motivoituneen ryhmän) vertaaminen toiseen vuodenaikaan hankittuun ryhmään voi tuottaa harhaanjohtavia trendipäätelmiä.
- **Orgaanisten ja maksetun hankinnan ryhmien yhdistäminen**: eri kanavien kautta hankitut käyttäjät pysyvät usein hyvin eri tavoin; niiden yhdistäminen yhdeksi kokonaispysyvyysluvuksi voi peittää kanavakohtaisen pysyvyysongelman.

## Lähteet

- Vertaisarvioitu kirjallisuus digitaalisen terveydenhuollon sovellusten sitoutumisesta ja poistumasta, esimerkiksi Journal of Medical Internet Research -lehdessä (JMIR mHealth and uHealth) julkaistut tutkimukset
- Digital Therapeutics Alliance, parhaiden käytäntöjen ohjeistus digitaalisten terapioiden sitoutumisen ja pysyvyyden mittaamiseen
- Alan vertailuraportit mobiiliterveyssovellusten pysyvyydestä, analytiikka-alustoilta ja digitaalisen terveydenhuollon markkinatutkimusorganisaatioilta

Katso myös: [potilaan sitoutumisen johdonmukaisuusaste](../potilaan-sitoutumisen-johdonmukaisuusaste/), joka mittaa sitoutumisen laatua pysyvien käyttäjien keskuudessa, erotuksena siitä, pysyvätkö he mukana lainkaan.
