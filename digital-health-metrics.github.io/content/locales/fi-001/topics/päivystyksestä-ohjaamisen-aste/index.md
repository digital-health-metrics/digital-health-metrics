# Päivystyksestä ohjaamisen aste

Päivystyksestä ohjaamisen aste mittaa sen osuuden digitaalisen triagen tai virtuaalihoidon työkalun käsittelemistä potilaskontakteista, jotka todennäköisesti olisivat johtaneet päivystyskäyntiin ilman kyseistä interventiota, mutta jotka hoidettiin sen sijaan turvallisesti matalamman kiireellisyyden hoitopolulla — omahoito-ohjeella, perusterveydenhuollon ajanvarauksella tai ajoitetulla kiireellisen hoidon käynnillä. Se on triage-ohjauksen tarkkuuden (ks. kyseinen aihe) erityinen, erittäin arvokas osajoukko, joka keskittyy kokonaan vältettyyn päivystyspalvelujen käyttöön, mikä on tulos, joka liittyy suorimmin sekä terveydenhuollon kustannuksiin että päivystyksen kapasiteetin helpottamiseen.

## Miksi tämä on tärkeää

Päivystykset ovat käyntiä kohti kalleimpia hoitoympäristöjä, ja niitä käytetään usein ongelmiin, jotka voitaisiin hoitaa turvallisesti muualla, joten digitaalisen triage-työkalun kyky ohjata sopivat tapaukset turvallisesti pois päivystyksestä on yksi sen kaupallisesti ja operatiivisesti arvokkaimmista ominaisuuksista — ja yksi helpoimmin viestittävistä maksajalle tai terveydenhuoltojärjestelmälle, joka arvioi työkalun sijoitetun pääoman tuottoa. Ohjaamisella on kuitenkin arvoa vain, jos se on turvallista: työkalu, joka ohjaa potilaita aggressiivisesti pois päivystyksestä todellisten hätätapausten ohittamisen hinnalla, on optimoinut täysin väärää puolta vaihtokaupasta, minkä vuoksi päivystyksestä ohjaamisen aste on aina raportoitava sellaisen turvallisuusmittarin rinnalla, joka seuraa ohjattujen potilaiden ohitettuja tai viivästyneitä päivystysmuotoisia esiintymisiä, eikä sitä tule raportoida erillään puhtaana tehokkuusvoittona.

## Miten se lasketaan

```
Päivystyksestä ohjaamisen aste = potilaskontaktit, jotka on ohjattu
                                  turvallisesti pois päivystyksestä
                                  sopivalle matalamman kiireellisyyden
                                  hoitopolulle / potilaskontaktit, jotka
                                  on arvioitu mahdollisesti päivystykseen
                                  johtaviksi yhteensä × 100

"Turvallisesti ohjattu" edellyttää seurannan tai yhdistetyn
potilaskertomustiedon kautta saatua vahvistusta siitä, ettei potilaan
tila todellisuudessa vaatinut päivystyshoitoa määritellyn
seurantajakson aikana (esim. 72 tuntia) — ohjauspäätöstä ei voida
katsoa turvalliseksi vahvistetuksi pelkästään sillä, ettei potilas
mennyt päivystykseen välittömästi sen jälkeen.

Raportoi rinnalla:
  Ohitettujen hätätapausten aste = ohjatut potilaat, jotka tarvitsivat
                                    päivystyshoitoa seurantajakson
                                    aikana / ohjatut potilaat yhteensä
                                    × 100
```

## Käytännön esimerkki

Digitaalinen triage-palvelu arvioi kuukaudessa 3 000 potilaskontaktia, jotka sen kliininen algoritmi arvioi mahdollisesti päivystykseen johtaviksi ilman interventiota. Näistä 1 800 ohjataan matalamman kiireellisyyden hoitopolulle (ohjaamisen aste 60 %). Ohjatun ryhmän seuranta 72 tunnin kohdalla yhdistettyjen potilaskertomustietojen avulla osoittaa, että 45 ohjatusta 1 800 potilaasta hakeutui myöhemmin päivystykseen kyseisen ajan kuluessa (ohitettujen hätätapausten aste 45 / 1 800 × 100 = 2,5 %). 60 %:n ohjaamisluvun raportoiminen ilman 2,5 %:n ohitettujen hätätapausten astetta esittäisi vain puolet siitä turvallisuuden ja tehokkuuden vaihtokaupasta, joka todellisuudessa ratkaisee, onko työkalun ohjauskäyttäytyminen kalibroitu asianmukaisesti.

## Tietolähteet ja varaukset

Sen vahvistaminen, ettei ohjattu potilas myöhemmin tarvinnut päivystyshoitoa, riippuu yhdistetystä tiedosta — joko saman terveydenhuoltojärjestelmän omista päivystystiedoista, alueellisesta potilastietojen vaihdosta tai jäsennellystä potilaan seurantapuhelusta tai kyselystä — ja ohjausohjelma, joka toimii ilman mitään näistä tietolähteistä, ei voi todellisuudessa vahvistaa omaa turvallisuuttaan, vaan ainoastaan olettaa sen valituksen puuttumisen perusteella. Sopiva ohjaamisen aste ja hyväksyttävä ohitettujen hätätapausten aste ovat kliinisiä toimintapoliittisia päätöksiä, eivät puhtaasti tilastollisia, ja ne tulisi asettaa tietoisesti kliinisen johdon toimesta sen sijaan, että ne saisivat syntyä sivuvaikutuksena siitä kynnysarvosta, jota triage-algoritmi sattuu oletuksena käyttämään. Ohjaamisaste tulisi raportoida esittävän oireen tai vaivan luokan mukaan, sillä sopivat ohjaamisasteet vaihtelevat valtavasti sairauden mukaan (pieni viiltohaava ja rintakipu edellyttävät hyvin erilaisia ohjauskynnyksiä).

## Sudenkuopat

- **Ohjaamisasteen raportointi ilman yhdistettyä ohitettujen hätätapausten turvallisuusmittaria**: korkea ohjaamisaste, joka on saavutettu aliarvioimalla todellisia hätätapauksia, ei ole onnistuminen; nämä kaksi mittaria on aina raportoitava yhdessä.
- **Sen olettaminen, että päivystyskäynnin puuttuminen tarkoittaa ohjauksen olleen turvallinen**: potilas voi hakeutua toisen, yhdistämättömän sairaalajärjestelmän päivystykseen tai kärsiä aidosti haitallisen lopputuloksen hakeutumatta lainkaan päivystykseen; vahvista turvallisuus yhdistetyn tiedon tai jäsennellyn seurannan avulla, ei pelkästään saman järjestelmän päivystyskäynnin puuttumisen perusteella.
- **Ohjauskynnyksen asettaminen pelkästään ohjaamisasteen maksimoimiseksi**: algoritmi tai toimintatapa, joka on viritetty maksimoimaan ohjaus ilman vastaavaa turvallisuusrajoitetta, vaihtaa potilasturvallisuuden paremman näköiseen tehokkuuslukuun.
- **Ohjaamisasteen yhdistäminen kaikkien vaivatyyppien yli**: sopivat ohjaamisasteet eroavat valtavasti esittävän vaivan mukaan; yksittäinen yhdistetty aste ei voi osoittaa, toimiiko työkalu turvallisesti ja tehokkaasti juuri niissä sairauksissa, joilla on kliinisesti eniten merkitystä.

## Lähteet

- Agency for Healthcare Research and Quality (AHRQ), tutkimus päivystyspalvelujen käytöstä ja sopivaan hoitoympäristöön ohjaamisesta
- NHS England, NHS 111 -palvelun ja digitaalisen kiireellisen hoidon triagen turvallisuus- ja tehokkuusstandardien ohjeistus
- Vertaisarvioitu kirjallisuus digitaalisen triagen ja virtuaalihoidon päivystyksestä ohjaamisen tuloksista, esimerkiksi Annals of Emergency Medicine- ja npj Digital Medicine -lehdissä julkaistut tutkimukset

Katso myös: [triage-ohjauksen tarkkuus](../triage-ohjauksen-tarkkuus/), laajempi tarkkuusmittari, jonka erityinen, turvallisuuskriittinen osajoukko tämä mittari on.
