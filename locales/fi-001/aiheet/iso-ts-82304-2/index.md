# ISO/TS 82304-2

ISO/TS 82304-2 on kansainvälinen tekninen määrittely, joka on julkaistu ISO:n teknisen komitean 215 (terveydenhuollon tietotekniikka) alaisuudessa ja joka määrittelee jäsennellyn menetelmän terveys- ja hyvinvointisovellusten laadun arvioimiseksi — kattaen käytettävyyden, teknisen vakauden ja luotettavuuden, yhteentoimivuuden, sisällön laadun sekä tietoturvan ja yksityisyyden — tuotteille, jotka jäävät täyden lääkinnällisten laitteiden sääntelyn ulkopuolelle mutta vaikuttavat silti olennaisesti käyttäjän terveyspäätöksiin tai -käyttäytymiseen. Se on olemassa täyttämään tietty aukko: valtaosa kuluttajille suunnatuista terveys- ja hyvinvointisovelluksista (kuntoilun seurantalaitteet, oirepäiväkirjat, hyvinvointivalmennussovellukset) ei ole säänneltyjä lääkinnällisiksi laitteiksi, mutta niiden perusluokan laadun ja turvallisuuden arvioimiseksi tai vertaamiseksi ei aiemmin ollut yhteistä, jäsenneltyä tapaa.

## Miksi tämä on tärkeää

Sovelluskaupoissa on satoja tuhansia terveys- ja hyvinvointisovelluksia, joiden laatu vaihtelee valtavasti, ja ennen yhteisen teknisen määrittelyn olemassaoloa potilaalla, kliinikolla tai terveydenhuoltojärjestelmällä ei ollut jäsenneltyä, vertailukelpoista tapaa arvioida yhden sovelluksen perusluokan laatua ja turvallisuutta toiseen nähden tähtiarvostelujen ja markkinointiväitteiden lisäksi — aukko on tärkeä, koska huonosti suunniteltu terveyssovellus voi silti aiheuttaa todellista haittaa (epätarkka sisältö, huono tietoturva, harhaanjohtavat väitteet) vaikka se ei täyttäisi lääkinnällisen laitteen sääntelykynnystä. ISO/TS 82304-2 on tarkoituksellisesti rakennettu sellaisten osa-alueiden ympärille, joita ei-asiantuntijatarkastaja voi arvioida johdonmukaisesti, minkä vuoksi se on tullut usean kansallisen ja kaupallisen terveyssovellusten laatumerkintä- ja kuratointipalvelun tekniseksi perustaksi, antaen terveydenhuoltojärjestelmille ja sovelluskirjastoille puolustettavissa olevan, standardoidun tavan sisällyttää sovelluksia suositeltuun luetteloon tai jättää ne sen ulkopuolelle ad hoc -harkinnan sijaan.

## Miten sitä sovelletaan

```
Arviointi on järjestetty määriteltyjen laatuosa-alueiden ympärille,
ja se tehdään jäsennellyllä tarkastuksella yksittäisen numeerisen
kaavan sijaan:

Käytettävyys                     — selkeys, saavutettavuus ja
                                    helppokäyttöisyys aiotulle
                                    käyttäjäryhmälle
Tekninen vakaus/luotettavuus     — vakaus, suorituskyky ja
                                    teknisten vikojen puuttuminen
Yhteentoimivuus                  — kyky vaihtaa tietoja muiden
                                    järjestelmien kanssa, kun se on
                                    olennaista sovelluksen toiminnalle
Sisällön laatu ja turvallisuus   — tarkkuus, ajantasaisuus ja
                                    haitallisten tai harhaanjohtavien
                                    terveysväitteiden puuttuminen
Tietoturva ja yksityisyys        — tietosuojakäytäntö ja avoimuus
                                    tietojen käytöstä

Jokainen osa-alue pisteytetään jäsennellyillä tarkastuskriteereillä
ja yhdistetään kokonaislaatuarvioinniksi, jota useat terveyssovellusten
laatumerkintäjärjestelmät käyttävät teknisenä perustana julkiselle
laatumerkille tai kuratoituun kirjastoon sisällyttämispäätökselle.
```

## Käytännön esimerkki

Terveydenhuoltojärjestelmän digitaalisen sovelluskirjaston ohjelma haluaa kuratoida potilaille suositellun hyvinvointisovellusten luettelon sen sijaan, että sovelluksen valinta jätettäisiin kokonaan sovelluskaupan hakuun. Jokainen ehdokassovellus arvioidaan ISO/TS 82304-2 -osa-alueita vasten: unen seurantasovellus saa hyvät pisteet käytettävyydestä ja teknisestä vakaudesta, riittävät sisällön laadusta, mutta tietoturva- ja yksityisyystarkastuksessa siihen kiinnitetään huomiota, koska se jakaa käyttäjätietoja kolmansien osapuolten mainostajien kanssa ilman selkeää ilmoitusta — havainto, joka on niin merkittävä, että sovellus suljetaan suositellun luettelon ulkopuolelle muuten vahvasta käytettävyyspistemäärästään huolimatta. Tämä osa-aluekohtainen tulos on toimintakelpoisempi sekä kuratointitiimille että, jos se jaetaan, sovelluksen omalle kehittäjälle kuin yksittäinen yhdistetty laatupistemäärä, koska se osoittaa tarkasti, mikä osa-alue vaatii korjausta ennen kuin sovellusta voitaisiin harkita uudelleen.

## Tietolähteet ja varaukset

ISO/TS 82304-2 -arvioinnin suorittaa tyypillisesti koulutettu tarkastaja tai akkreditoitu arviointipalvelu määrittelyn jäsenneltyjen tarkastuskriteerien mukaisesti kullekin osa-alueelle, ja useat kansalliset ja kaupalliset aloitteet (terveyssovellusten laatumerkintä- ja kuratointiorganisaatiot, joista osa toimii virallisella kansallisella terveydenhuoltojärjestelmän tuella) käyttävät standardia teknisenä perustana omille julkisille sovellusten laatumerkeilleen — mikä tarkoittaa, että sovelluksen "sertifioitu"- tai "merkitty"-tila heijastaa käytännössä usein tietyn merkintäjärjestelmän toteutusta standardista, eikä välttämättä identtistä prosessia jokaisessa järjestelmässä, joten kulloinenkin arvioiva organisaatio ja sen menetelmä tulisi tarkistaa ja ilmoittaa minkä tahansa mainitun laatumerkin rinnalla. Määrittely arvioi sovelluksen laatua ja perusturvallisuusominaisuuksia ohjelmistona; se ei korvaa lääkinnällisen laitteen sääntelyn mukaista hyväksyntää silloin, kun sovelluksen väitteet tai toiminnot todella täyttävät lääkinnällisen laitteen kynnyksen, ja sen käyttäminen sellaisena olisi kategoriavirhe.

## Sudenkuopat

- **Laatumerkin pitäminen sääntelyn mukaisena hyväksyntänä**: sovellus, joka on arvioitu ja merkitty ISO/TS 82304-2:n mukaan, ei ole sen perusteella saanut lääkinnällisen laitteen sääntelyn mukaista hyväksyntää; nämä kaksi palvelevat eri tarkoituksia, eikä niitä tulisi koskaan sekoittaa sovelluksen kuvauksessa tai markkinoinnissa.
- **Sen olettaminen, että kaikki standardiin perustuvat merkintäjärjestelmät ovat samanarvoisia**: eri organisaatiot toteuttavat ISO/TS 82304-2 -pohjaisen arvioinnin omilla erityisillä tarkastusprosesseillaan ja tarkkuudellaan; tarkista, mikä organisaatio arvioinnin teki ja miten, sen sijaan että mitä tahansa "ISO/TS 82304-2 -pohjaista" merkkiä pidettäisiin keskenään vaihdettavana minkä tahansa toisen kanssa.
- **Pelkän käytettävyyden arvioiminen tietoturvan ja yksityisyyden laiminlyöden**: käytettävyysongelmat ovat loppukäyttäjälle näkyvimpiä ja helpoimpia arvioida epävirallisesti, mikä voi johtaa siihen, että tarkastajat antavat liian vähän painoa vähemmän näkyvälle mutta mahdollisesti seurauksiltaan merkittävämmälle tietoturva- ja yksityisyysosa-alueelle.
- **Arvioinnin pitäminen kertaluonteisena, pysyvänä sertifiointina**: sovelluksen sisältö, tietoturvakäytännöt ja kolmansien osapuolten kanssa tapahtuva tietojen jakaminen voivat kaikki muuttua ensimmäisen arvioinnin jälkeen; uskottava laatumerkintäohjelma arvioi uudelleen määräajoin eikä pidä ensimmäistä hyväksyntää pysyvänä.

## Lähteet

- International Organisation for Standardization, ISO/TS 82304-2:2021, "Health software — Part 2: Health and wellness apps — Quality and reliability"
- ISO Technical Committee 215 (Health Informatics), julkaisu- ja työryhmätiedot
- Kansalliset ja kaupalliset terveyssovellusten laatumerkintä- ja kuratointiorganisaatiot, jotka julkaisevat tähän standardiin perustuvan arviointimenetelmänsä

Katso myös: [System Usability Scale -pistemäärä](../system-usability-scale-pistemäärä/), täydentävä, suppeampi käytettävyyteen keskittyvä mittari, jota käytetään usein laajemman ISO/TS 82304-2 -laatuarvioinnin rinnalla.
