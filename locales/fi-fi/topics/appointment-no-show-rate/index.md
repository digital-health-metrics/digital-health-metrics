# Ajanvarauksen Peruuttamattoman Poissaolon Aste

Ajanvarauksen peruuttamattoman poissaolon aste (kutsutaan myös "did not attend"- eli DNA-asteeksi) on se osuus varatuista ajoista, joissa potilas ei saapunut eikä peruuttanut kohtuullisella varoitusajalla. Se on yksi terveydenhuollon vanhimmista operatiivisista mittareista, ja digitaaliset työkalut, erityisesti muistutukset, itsepalveluna tapahtuva uudelleenajanvaraus ja portaalipohjainen varaaminen, ovat nykyään joitakin tehokkaimmista ja parhaiten todistetuista keinoista sen vähentämiseksi.

## Miksi tämä on tärkeää

Jokainen poissaolo on kliinisen kapasiteetin yksikkö, jota ei yleensä voida palauttaa, koska useimmat palvelut eivät voi täyttää saman päivän aukkoa lyhyellä varoitusajalla, joten aste vaikuttaa suoraan jonotusajan pituuteen, kustannuksiin per toteutunut käynti ja menetettyyn kliinikon aikaan. Poissaolokäyttäytyminen ei jakaudu tasaisesti: se korreloi huono-osaisuuden, kulkuyhteyksien, hoivavastuiden ja useiden pitkäaikaissairauksien hallinnan taakan kanssa, joten korkean asteen käsitteleminen pelkästään potilaan käyttäytymisongelmana sen sijaan, että se nähtäisiin osittain merkkinä pääsyn esteistä, johtaa yleensä toimenpiteisiin (kuten yleisiin sanktioihin), jotka juurruttavat eriarvoisuutta sen vähentämisen sijaan. Digitaaliset muistutukset ja helppo digitaalinen uudelleenajanvaraus ovat johdonmukaisesti joitakin tehokkaimmista ja edullisimmista saatavilla olevista toimenpiteistä, minkä vuoksi tämä mittari kuuluu selkeästi digitaalisen terveydenhuollon mittausohjelmaan eikä vain operatiiviseen raportointiin.

## Miten se lasketaan

```
Poissaoloaste = "did not attend" -merkinnällä varustetut ajat / kaikki varatut ajat yhteensä × 100
```

Varattu aika jätetään yleensä pois nimittäjästä tai siirretään erilliseen kategoriaan, jos jompikumpi osapuoli peruutti sen tietyn varoitusajan (yleensä 24 tuntia) yli menevällä varoitusajalla. Myöhäiset peruutukset (alle tämän varoitusajan) raportoidaan yleensä erikseen todellisista poissaoloista, koska operatiiviset ja käyttäytymiseen liittyvät vaikutukset eroavat toisistaan.

## Käytännön esimerkki

Yhteisöklinikka varaa 2 000 aikaa kuukaudessa. Näistä 140 peruutetaan yli 24 tunnin varoitusajalla (varataan uudelleen ja jätetään pois nimittäjästä), 60 peruutetaan myöhään (alle 24 tuntia), ja 180 kirjataan todelliseksi poissaoloksi ilman minkäänlaista yhteydenottoa. Poissaoloaste on 180 / 2 000 × 100 = 9 %. Jos 60 myöhäistä peruutusta yhdistettäisiin samaan kategoriaan todellisten poissaolojen kanssa, raportoitu aste nousisi 12 prosenttiin, minkä vuoksi käytetty määritelmä tulisi aina ilmoittaa luvun yhteydessä.

## Tietolähteet ja varaukset

Ajanvaraus- tai käytäntöhallintajärjestelmä on ensisijainen lähde, joka käyttää omia ajanvarauksen tilakoodejaan; mittarin laatu riippuu täysin siitä, käyttääkö henkilökunta johdonmukaisesti oikeaa tilaa yleisen "peruutettu"-kategorian sijaan kaikkeen. Organisaatioiden, jotka ottavat käyttöön digitaalisia muistutuksia (tekstiviesti, sovelluksen push-ilmoitus tai portaalihälytykset), tulisi mitata poissaoloastetta ennen muutosta ja sen jälkeen vertailukelpoisella potilas- ja palvelusekoituksella, koska muistutusten tehokkuus on hyvin dokumentoitu satunnaistetuissa ja havainnoivissa tutkimuksissa, mutta vaihtelee väestön ja kanavan mukaan.

## Sudenkuopat

- **Raakojen asteiden vertailu klinikoiden välillä, joilla on erilaiset ylivarauskäytännöt**: klinikka, joka tarkoituksella ylivaraa kompensoidakseen odotettua poissaoloastetta, näyttää erilaisen näennäisen asteen kuin klinikka, joka ei tee näin, riippumatta todellisesta potilaskäyttäytymisestä.
- **Myöhäisten peruutusten sekoittaminen todellisiin poissaoloihin**: näillä kahdella on erilaiset syyt ja erilaiset digitaaliset ratkaisut (myöhäisen peruutuksen ongelma ratkaistaan usein helpommalla itsepalveluna tapahtuvalla uudelleenajanvarauksella; todellisen poissaolon ongelma ratkaistaan usein paremmilla muistutuksilla ja yhteystietojen tarkkuudella).
- **Selviytymisharha poisto-käytännöistä**: palvelut, jotka poistavat potilaita toistuvien poissaolojen jälkeen, näkevät oman asteensa paranevan mekaanisesti siirtäen samat potilaat vain muualle järjestelmässä.
- **Digitaalisen syrjäytymisen syyttäminen potilaasta**: potilas, jolla ei ole älypuhelinta tai luotettavaa tekstiviestipalvelua, ei hyödy pelkästään digitaalisesta muistutusstrategiasta, joten monikanavainen lähestymistapa (kirje, puhelu, tekstiviesti, sovellus) on yleensä tarpeen pääsykuilujen kasvun välttämiseksi.

## Lähteet

- NHS England, menetetyt ajanvaraukset yleislääketieteessä ja avohoidossa, julkaistut tilastot ja ohjeistus
- Cochranen systemaattiset katsaukset menetettyjen terveydenhuoltoajanvarausten vähentämiseen tähtäävistä toimenpiteistä, mukaan lukien muistutusjärjestelmät
- Vertaisarvioitu kirjallisuus ajanvarauksen laiminlyönnin sosioekonomisista ja demografisista korrelaateista

Katso myös: [etäterveydenhuoltokäyntien osuus](../telehealth-visit-rate/), koska poissaolokäyttäytyminen yleensä vaihtelee konsultaatiotavan mukaan, ja [potilasportaalin käyttöönottoaste](../patient-portal-adoption-rate/), koska portaalipohjainen itsepalveluajanvaraus ja muistutukset ovat ensisijainen digitaalinen toimenpide.
