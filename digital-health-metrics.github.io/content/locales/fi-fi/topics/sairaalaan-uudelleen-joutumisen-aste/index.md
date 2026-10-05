# Sairaalaan uudelleen joutumisen aste

Sairaalaan uudelleen joutumisen aste on niiden kotiutettujen potilaiden osuus, jotka otetaan suunnittelemattomasti uudelleen sairaalaan määritellyn ajanjakson kuluessa kotiutuksesta — useimmiten 30 päivän kuluessa. Digitaalisessa terveydenhuollossa se on mittari, joka liittyy suorimmin maksajien talouteen ja arvopohjaisen hoidon sopimuksiin: etäseuranta-, kotiutuksen jälkeinen seuranta- tai digitaalinen hoidon siirtymävaiheen ohjelma, joka ei pysty osoittamaan uskottavaa vaikutusta uudelleen joutumisiin, ei todennäköisesti saa jatkuvaa korvaustukea, olivatpa sen sitoutumisluvut kuinka hyviä tahansa.

## Miksi tämä on tärkeää

Suunnittelematon uudelleen joutuminen on kallis, häiritsee potilasta ja on monissa terveydenhuoltojärjestelmissä nykyään suoraan sanktioitu: järjestelmät, kuten yhdysvaltalainen Hospital Readmissions Reduction Program, alentavat maksuja sairaaloille, joiden uudelleen joutumisaste on odotettua korkeampi tietyissä sairauksissa, minkä vuoksi sairaalat tilaavat aktiivisesti digitaalisia kotiutuksen jälkeisiä ja etäseurantaohjelmia niiden vähentämiseksi. Merkittävä osa uudelleen joutumisista katsotaan mahdollisesti ehkäistävissä oleviksi — ne johtuvat riittämättömistä kotiutusohjeista, ohitetuista seurantakäynneistä, lääkityksen väärinymmärtämisestä tai huomioimatta jääneestä oireiden pahenemisesta, jonka hyvin suunniteltu digitaalinen kontaktipiste voi havaita aiemmin — mikä on juuri se aukko, johon digitaaliset hoidon siirtymävaiheen työkalut kohdistuvat. Uudelleen joutumisastetta tulisi aina lukea potilasrakenteen rinnalla: sairaampaa, monimutkaisempaa väestöä palvelevan ohjelman lähtötaso on rakenteellisesti korkeampi kuin terveempää väestöä palvelevan, ohjelman laadusta riippumatta.

## Miten se lasketaan

```
30 päivän uudelleen joutumisaste = suunnittelemattomat uudelleen
                                    sisäänotot 30 päivän kuluessa
                                    kotiutuksesta / indeksikotiutukset
                                    yhteensä × 100

Jätä osoittajasta pois: suunnitellut uudelleen sisäänotot (esim.
ajoitettu seurantatoimenpide) sekä siirrot, jotka ovat saman
hoitojakson jatkoa eivätkä uusi sisäänotto.

Oikaise riskin mukaan mahdollisuuksien mukaan, käyttäen hyväksyttyä
potilasrakenteen tai liitännäissairauksien indeksiä, ennen asteiden
vertaamista eri potilasväestöjen tai ajanjaksojen välillä.
```

## Käytännön esimerkki

Sairaala kotiuttaa neljännesvuoden aikana 1 200 sydämen vajaatoimintapotilasta. Näistä 210 otetaan uudelleen sisään 30 päivän kuluessa, ja niistä 15 on suunniteltuja uudelleen sisäänottoja ajoitettua toimenpidettä varten, jotka jätetään pois. Suunnittelematon 30 päivän uudelleen joutumisaste on (210 − 15) / 1 200 × 100 = 16,25 %. Etäseurantaohjelma otetaan käyttöön 400 näistä potilaista koostuvalle osajoukolle (valittu kliinisen riskin eikä satunnaisesti), ja heidän suunnittelematon uudelleen joutumisasteensa on 14 % verrattuna 18 %:iin 800 potilaalla, jotka eivät ole mukana. Koska mukaan ottaminen perustui kliiniseen riskiin eikä satunnaiseen jakoon, tämä ero on viitteellinen eikä ratkaiseva näyttö ohjelman vaikutuksesta, ja se tulisi tulkita riskinoikaisuanalyysin rinnalla eikä ottaa sellaisenaan.

## Tietolähteet ja varaukset

Uudelleen joutumistiedot saadaan tyypillisesti sairaalan omasta potilaan sisäänkirjaus-, uloskirjaus- ja siirtosyötteestä (ADT) samaan laitokseen tapahtuville uudelleen sisäänotoille, mutta toiseen sairaalaan uudelleen otettu potilas ei näy tässä syötteessä lainkaan, joten yhden sairaalan uudelleen joutumisseuranta aliarvioi järjestelmällisesti todellisia uudelleen joutumisasteita, ellei sitä täydennetä alueellisen potilastietojen vaihdon tiedoilla, maksajien korvausvaatimustiedoilla tai osavaltiotason kaikkien maksajien tietokannoilla. Kohdentaminen digitaaliseen ohjelmaan vaatii huolellisuutta: vapaaehtoiseen etäseurantaohjelmaan ilmoittautuvat potilaat ovat harvoin satunnaisotos kotiutetusta väestöstä, joten mukana olevien ja mukana olemattomien uudelleen joutumisasteiden naiivi vertailu on yleensä sekoittunut juuri niihin valikoitumisvaikutuksiin, jotka tekivät joistakin potilaista todennäköisemmin mukaan ilmoittautuvia.

## Sudenkuopat

- **Raakojen, riskinoikaisemattomien asteiden vertaaminen väestöjen välillä**: sairaampaa väestöä palveleva ohjelma osoittaa korkeamman raa'an uudelleen joutumisasteen kuin terveempää väestöä palveleva, vaikka ohjelma itsessään olisi tehokkaampi; oikaise aina riskin mukaan ennen vertailua.
- **Muihin laitoksiin tapahtuvien uudelleen sisäänottojen aliraportointi**: pelkästään yhden sairaalan oman ADT-tiedon varaan nojaaminen ohittaa muualla tapahtuvat uudelleen sisäänotot ja aliarvioi todellista astetta, erityisesti alueilla, joilla on useita kilpailevia sairaalajärjestelmiä.
- **Valikoitumisharha vapaaehtoisessa ohjelmaan ilmoittautumisessa**: potilaat, jotka valitsevat digitaalisen seurantaohjelman, eroavat usein järjestelmällisesti (terveyslukutaidon, sosiaalisen tuen tai motivaation suhteen) niistä, jotka eivät valitse, mikä sekoittaa kaikki naiivit ennen/jälkeen- tai mukana/ei mukana -vertailut.
- **Jokaisen saman laitoksen paluun laskeminen uudelleen sisäänotoksi**: ajoitettu, suunniteltu uudelleen sisäänotto (esimerkiksi suunniteltu toisen vaiheen toimenpide) ei ole merkki epäonnistuneesta kotiutuksesta, ja se tulisi jättää pois osoittajasta eikä sekoittaa aidosti suunnittelemattomiin paluisiin.

## Lähteet

- Centers for Medicare & Medicaid Services (CMS), Hospital Readmissions Reduction Program ja Hospital-Wide Readmission -mittarin määritykset
- Institute for Healthcare Improvement (IHI), ehkäistävissä olevien uudelleen sisäänottojen vähentämisen ohjeistus
- Vertaisarvioitu kirjallisuus digitaalisesta etäseurannasta ja hoidon siirtymävaiheen interventioista uudelleen joutumisten vähentämiseksi, esimerkiksi JAMA Network Open- ja npj Digital Medicine -lehdissä julkaistut tutkimukset

Katso myös: [triage-ohjauksen tarkkuus](../triage-ohjauksen-tarkkuus/), sillä sopimaton alkuperäinen ohjaus voi itsessään olla ehkäistävissä olevien sisäänottojen myöhempi tekijä.
