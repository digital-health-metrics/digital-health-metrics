# Potilasportaalin Käyttöönottoaste

Potilasportaalin käyttöönottoaste mittaa sitä osuutta oikeutetuista potilaista, jotka ovat rekisteröityneet ja käyttävät aktiivisesti verkossa toimivaa potilasportaalia (esimerkiksi NHS App, Patient Access tai sähköiseen potilastietojärjestelmään kytketty portaali kuten MyChart) tietojen tarkasteluun, ajanvaraukseen tai viestien lähettämiseen hoitotiimilleen. Se on digitaalisen osallistumisen perustason mittari: potilas, joka ei ole koskaan aktivoinut tiliä, ei voi hyötyä mistään portaalin varaan rakennetusta myöhemmästä digitaalisesta palvelusta.

## Miksi tämä on tärkeää

Portaali luo arvoa vasta, kun potilas käyttää sitä, joten organisaatioiden tulisi seurata käyttöönottoa suppilona yksittäisen luvun sijaan: rekisteröinti, aktivointi (ensimmäinen merkityksellinen toimenpide) ja aktiivinen käyttö (käyttö tietyn ajanjakson sisällä) ovat kolme eri astetta, jotka sekoitetaan aivan liian usein. Digitaalisten palveluiden tiimit ovat usein paineen alla raportoidakseen yhden suotuisan pääluvun, ja vaikeamman, rehellisemmän erittelyn vaatiminen edellyttää kurinalaisuutta. Matala tai epätasaisesti jakautunut käyttöönotto on myös tasa-arvon merkki: iäkkäämmät potilaat, joilla on heikompi digitaalinen lukutaito, jotka eivät puhu valtaväestön kieltä tai joilla ei ole luotettavaa laajakaistayhteyttä tai älypuhelinta, jäävät systemaattisesti todennäköisemmin laskematta osoittajaan, joten nouseva keskimääräinen käyttöönottoaste voi peittää alleen kasvavan kuilun niiden potilaiden kohdalla, jotka usein tarvitsevat eniten yhteyttä palveluihin.

## Miten se lasketaan

Raportoi kaikki kolme vaihetta, ei vain rekisteröintiä, ja ilmoita nimittäjä aina eksplisiittisesti:

```
Rekisteröintiaste     = potilaat, joilla on luotu portaalitili / oikeutettu potilasjoukko × 100
Aktivointiaste          = potilaat, jotka suorittivat ensimmäisen merkityksellisen
                          toimenpiteen (katsoivat tuloksen, varasivat ajan, lähettivät
                          viestin) / potilaat, joilla on tili × 100
Aktiivisen käytön aste  = potilaat, jotka kirjautuivat sisään vähintään kerran
                          viimeisten 12 kuukauden aikana / oikeutettu potilasjoukko × 100
```

Oikeutettu potilasjoukko määritellään yleensä potilaiksi, joilla on ollut vähintään yksi käynti organisaatiossa määritellyn tarkastelujakson aikana (yleisesti 24 kuukautta) ja jotka iän ja suostumusstatuksen puolesta voivat hallita omaa tiliään.

## Käytännön esimerkki

Perusterveydenhuollon verkosto palvelee 50 000 potilasta, jotka täyttävät kelpoisuusmääritelmän. Näistä 32 000 on rekisteröitynyt portaaliin (rekisteröintiaste 64 %). 32 000 rekisteröinnistä 27 000 on suorittanut vähintään yhden merkityksellisen toimenpiteen, kuten tuloksen katsomisen (aktivointiaste 84 % rekisteröityneistä). Viimeisten 12 kuukauden aikana 21 000 alkuperäisistä 50 000 oikeutetusta potilaasta kirjautui sisään vähintään kerran (aktiivisen käytön aste 42 %). Pelkän 64 %:n rekisteröintiluvun raportointi liioittelisi huomattavasti todellista osallistumista; 42 %:n aktiivisen käytön luku on se, jonka tulisi ohjata portaaliohjelman resursointipäätöksiä.

## Tietolähteet ja varaukset

Portaalin analytiikka tulee tyypillisesti joko itse toimittajan alustalta (kirjautumistapahtumat, ominaisuuksien käyttö) tai taustalla olevan sähköisen potilastietojärjestelmän tarkastuslokista, ja organisaatioiden tulisi suhtautua epäillen toimittajien hallintapaneeleihin, jotka näyttävät vain rekisteröintimäärät. Valtuutettu pääsy (vanhempi tai omaishoitaja, joka hallinnoi tiliä potilaan puolesta) tulisi merkitä ja raportoida erikseen, koska se muuttaa sitä, kuka todella on "käyttäjä". Nimittäjän valinta on erittäin tärkeää: laskeminen koko rekisteröityneiden potilaiden listaa vastaan todella oikeutetun, tavoitettavissa olevan väestön sijaan aliarvioi käyttöönoton aina, kun taas laskeminen vain aktiivisesti kutsuttuja potilaita vastaan yliarvioi sen aina, joten kelpoisuusmääritelmä tulisi vahvistaa ja julkaista jokaisen raportoidun asteen yhteydessä.

## Sudenkuopat

- **Rekisteröinti laskettuna käyttöönotoksi**: luotu mutta koskaan käyttämätön tili on lähes arvoton; raportoi aktivointi ja aktiivinen käyttö rekisteröinnin ohella, ei sen sijasta.
- **Digitaalisen syrjäytymisen huomiotta jättäminen**: kokonaiskäyttöönottoluvut voivat nousta, vaikka eniten ja vähiten digitaalisesti osallistuvien ryhmien välinen kuilu kasvaa; segmentoi aina iän, huono-osaisuuden, kielen ja vammaisuuden mukaan, jos tietosuojahallinto sen sallii.
- **Erilaisia kelpoisuusmääritelmiä käyttävien organisaatioiden vertailu**: portaaliohjelma, joka kutsuu vain potilaita, joilla on rekisteröity sähköpostiosoite, raportoi korkeamman asteen kuin ohjelma, joka mittaa koko rekisteröityneen listan mukaan, ilman todellista suorituseroa.
- **Kertaluontoisen kirjautumisen pitäminen jatkuvana osallistumisena**: 12 kuukauden tarkastelujakso on yleinen, mutta lyhyempi ikkuna (esimerkiksi 90 päivää) antaa aikaisemman varoituksen käytön vähenemisestä.

## Lähteet

- NHS England, NHS Appin käyttö- ja rekisteröintitilastot (nhs.uk / digital.nhs.uk -julkaisut)
- ONC / HealthIT.gov, Promoting Interoperability -ohjelman mittarit, mukaan lukien View, Download, Transmit (VDT) -potilaspääsymittarit
- Vertaisarvioitu kirjallisuus potilasportaalien käyttöönotosta ja digitaalisen terveydenhuollon eriarvoisuudesta, esimerkiksi Journal of the American Medical Informatics Associationissa (JAMIA) julkaistut tutkimukset

Katso myös: [ajanvarauksen peruuttamattoman poissaolon aste](../appointment-no-show-rate/), johon portaalipohjainen itsepalveluajanvaraus ja muistutukset vaikuttavat suoraan.
