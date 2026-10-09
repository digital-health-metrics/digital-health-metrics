# Potilaan sitoutumisen johdonmukaisuusaste

Potilaan sitoutumisen johdonmukaisuusaste mittaa, kuinka säännöllisesti mukaan otettu potilas on vuorovaikutuksessa digitaalisen terveydenhuollon tuotteen kanssa ajan myötä — esimerkiksi kirjaamalla ruokaa tai oireita, tallentamalla fyysistä aktiivisuutta tai katselemalla terveystietoja — sen sijaan, että mitattaisiin pelkästään se, onko hän käyttänyt sitä lainkaan. Se on pitkittäinen mittari, joka eroaa ajankohtaisesta aktiivisen käytön määrästä: kahdella potilaalla voi olla identtinen "käytti sovellusta tässä kuussa" -tila, vaikka toinen kirjaa johdonmukaisesti joka päivä ja toinen kirjaa kerran ja katoaa kolmeksi viikoksi, ja vain johdonmukaisuusmittari erottaa heidät toisistaan.

## Miksi tämä on tärkeää

Digitaalisen terveydenhuollon työkalun jatkuva, säännöllinen käyttö on yksi luotettavimmista kliinisen hyödyn ennakoivista indikaattoreista, erityisesti käyttäytymisestä riippuvaisissa sairauksissa, kuten diabeteksessa, painonhallinnassa ja mielenterveydessä, joissa työkalun arvo tulee sen tukemasta tavasta eikä yksittäisestä istunnosta. Tuote voi raportoida terveen kuukausittaisten aktiivisten käyttäjien määrän samalla kun se todellisuudessa palvelee väestöä, joka kirjautuu kerran ja ajautuu pois, koska kuukausittainen aktiivinen käyttö on matala kynnys, joka ei kerro mitään käytön kaavasta kuukauden sisällä; johdonmukaisuusmittarit havaitsevat tämän tavalla, johon yksinkertaiset aktiivisuuslaskurit eivät pysty. Koska johdonmukaisuus on myös yksi vaikeimmista asioista ylläpitää kuukausien eikä viikkojen ajan, se on rehellisempi signaali tuotteen laadusta ja kliinisestä soveltuvuudesta kuin lyhyen ikkunan sitoutumisluvut, jotka ovat alttiita uutuusvaikutuksille heti käyttöönoton jälkeen.

## Miten se lasketaan

```
Sitoutumisen johdonmukaisuusaste = viikot, joilla oli vähintään yksi
                                    kelpaava vuorovaikutus / mukana
                                    olleet viikot yhteensä × 100

"Kelpaava vuorovaikutus" tulisi määritellä nimenomaisesti ja
johdonmukaisesti (esim. ruokakirjaus, oireiden kirjaus tai suoritettu
aktiivisuuden synkronointi) — ei koskaan passiivinen tapahtuma, kuten
sovelluksen avaus ilman kirjattua toimintaa.

Raportoi jakaumana, ei vain väestön keskiarvona:
  esim. potilaiden osuus, joilla viikoittainen johdonmukaisuus ≥ 80 %,
        osuus, jolla 50-79 %, osuus, jolla < 50 %
```

## Käytännön esimerkki

Ravitsemusvalmennussovellus ottaa potilaan mukaan 12 viikoksi. Potilas kirjaa vähintään yhden kelpaavan ruokamerkinnän 9 näistä 12 viikosta, mikä antaa yksilölliseksi sitoutumisen johdonmukaisuusasteeksi 9 / 12 × 100 = 75 %. Sovelluksen koko 2 000 potilaan ryhmässä, joka on ollut mukana vähintään 12 viikkoa, 600 potilasta (30 %) ylläpitää ≥ 80 %:n viikoittaista johdonmukaisuutta, 900 (45 %) sijoittuu 50-79 %:n kaistalle ja 500 (25 %) jää alle 50 %:n. Pelkän ryhmän keskiarvon raportointi (joka voisi olla noin 65 %) peittäisi sen, että kokonainen neljännes potilaista ei sitoudu juuri lainkaan — segmentti, joka kannattaa tutkia erikseen sen sijaan, että se laimennetaan kokonaiskeskiarvoon.

## Tietolähteet ja varaukset

Johdonmukaisuustiedot tulevat tuotteen omista tapahtumalokeista (ruokamerkinnät, aktiivisuuden synkronoinnit, kirjaukset), ja "kelpaavan vuorovaikutuksen" määritelmällä on valtava vaikutus syntyvään asteeseen — väljä määritelmä (mikä tahansa sovelluksen avaus) näyttää aina paremmalta kuin tiukka (suoritettu, merkityksellinen kirjausmerkintä), joten käytetty määritelmä on ilmoitettava selkeästi minkä tahansa raportoidun luvun rinnalla. Automaattisesti synkronoitu tieto (esimerkiksi yhdistetty kuntoilun seurantalaite, joka synkronoi aktiivisuuden taustalla) tulisi raportoida erikseen manuaalisesti kirjatusta tiedosta, sillä automaattinen synkronointi voi paisuttaa näennäistä johdonmukaisuutta ilman, että se heijastaa potilaan aktiivista ponnistelua tai sitoutumista tuotteen ohjaukseen.

## Sudenkuopat

- **Sovelluksen avausten sekoittaminen merkitykselliseen sitoutumiseen**: passiivinen sovelluksen avaus (esimerkiksi push-ilmoituksen laukaisema) ei ole sama asia kuin kirjattu ruokamerkintä tai suoritettu kirjaus; määrittele ja raportoi vain kelpaavista vuorovaikutuksista.
- **Pelkän väestön keskiarvon raportointi**: terveeltä näyttävä keskimääräinen johdonmukaisuusaste voi peittää kaksihuippuisen väestön, jossa on erittäin sitoutuneita ja lähes kokonaan sitoutumattomia potilaita; raportoi jakauma johdonmukaisuuskaistoittain, ei vain keskiarvoa.
- **Mukana olon keston nimittäjän sivuuttaminen**: johdonmukaisuusasteiden vertaaminen potilaiden välillä, jotka ovat olleet mukana hyvin eri pituisia aikoja, ottamatta huomioon mukana olon kestoa, vinouttaa tuloksen sen ryhmän eduksi, jolla oli lyhyempi, helpommin ylläpidettävä mittausikkuna.
- **Automaattinen taustasynkronointi paisuttaa astetta**: passiivisesti synkronoitu puettavan laitteen tietovirta voi saada sitoutumattoman potilaan näyttämään johdonmukaisen aktiiviselta ilman, että hänen käyttäytymisessään tai sitoutumisessaan tuotteeseen on todellista muutosta.

## Lähteet

- Vertaisarvioitu kirjallisuus digitaalisen terveydenhuollon sitoutumismalleista ja niiden suhteesta kliinisiin tuloksiin, esimerkiksi Journal of Medical Internet Research (JMIR) -lehdessä julkaistut tutkimukset
- American Medical Informatics Association (AMIA), potilaan tuottaman terveystiedon laatua ja sitoutumisen mittaamista koskeva ohjeistus
- Digital Therapeutics Alliance, parhaiden käytäntöjen ohjeistus digitaalisten terapioiden sitoutumisen ja tulosten mittaamiseen

Katso myös: [käyttäjien pysyvyysaste](../käyttäjien-pysyvyysaste/), läheisesti liittyvä mittari siitä, pysyykö potilas mukana lainkaan, erotuksena siitä, kuinka johdonmukaisesti hän sitoutuu mukana ollessaan.
