# Digitaalisen Lähetteen Käsittelyaika

Digitaalisen lähetteen käsittelyaika on kulunut aika siitä, kun lähettävä kliinikko lähettää sähköisen lähetteen, siihen, kun vastaanottava palvelu on käsitellyt sen ja joko hyväksynyt, hylännyt tai varannut ajan sen perusteella. Se on prosessi- (virtaus-) mittari, joka eroaa potilaan kokonaisodotusajasta, ja se on yksi selkeimmistä paikoista, joissa digitaalisen järjestelmän muutos (strukturoitu sähköinen lähete, kuvapohjainen triage, standardoidut lähetelomakkeet) voidaan osoittaa siirtävän operatiivista lukua, ei vain tyytyväisyyspistemäärää.

## Miksi tämä on tärkeää

Hidas tai hyvin vaihteleva triage-vaihe lisää viivettä jo ennen kuin potilas edes liittyy kliiniseen jonotuslistaan, ja koska tämä viive tapahtuu ennen minkäänlaisen kliinisen hoidon alkamista, se on puhdasta prosessihukkaa, jonka poistamiseen digitaaliset työkalut soveltuvat hyvin. Lähetejärjestelmät, jotka pakottavat "palautus lähettäjälle" -kierteeseen puuttuvien tietojen vuoksi, luovat uudelleentyöskentelyn silmukoita, jotka on helppo jättää huomiotta, jos käsittelyaikaa mitataan vain lähetteille, jotka etenevät puhtaasti ensimmäisellä kerralla. Kun palvelu on ottanut käyttöön strukturoidut digitaaliset lähetelomakkeet, pakolliset kentät tai kuvapohjaisen triagen (esimerkiksi teledermatologiassa), käsittelyaika on yleensä yksittäisistä mittareista vakuuttavin hyödyn osoittamiseen, koska se on mitattavissa ennen ja jälkeen muutoksen samalla mittausvälineistöllä.

## Miten se lasketaan

```
Käsittelyaika = aikaleima(triage-päätös) − aikaleima(lähetteen lähettäminen)

Raportoi mediaani ja korkea prosenttipiste (yleisesti 90.), älä vain
keskiarvoa, koska jakauma on voimakkaasti oikealle vino palautettujen tai
monimutkaisten lähetteiden vuoksi.

Harkitse alavaiheiden ajoituksia, jos järjestelmä tallentaa ne:
  Lähetys → palvelun vastaanottama
  Vastaanotettu → triage-päätös
  Triage-päätös → varattu aika (jos relevantti)
```

## Käytännön esimerkki

Sähköisen lähetejärjestelmän lokitieto osoittaa mediaanikäsittelyajan lähetyksestä triage-päätökseen olevan 1,8 päivää kaikilla erikoisaloilla, ja 90. prosenttipisteen ajan olevan 6 päivää, mikä johtuu pääasiassa lähetteistä, jotka palautetaan lähettäjälle puuttuvien kliinisten tietojen vuoksi. Teledermatologiapolku, joka käyttää kuvapohjaista triagea samalla alustalla, saavuttaa mediaanikäsittelyajaksi 4 tuntia ja 90. prosenttipisteeksi 1 päivän, koska valokuva ja strukturoitu esitiedot riittävät lähes aina triage-päätökseen ilman lisäkirjeenvaihtoa.

## Tietolähteet ja varaukset

Sähköisen lähete- tai lähetehallintajärjestelmän oma lokitieto on ensisijainen lähde, jossa käytetään lähetys- ja päätösaikaleimoja; organisaatioiden tulisi vahvistaa, pysähtyykö "kello" siksi aikaa, kun lähete palautetaan lisätietoja varten, vai jatkuuko se, koska nämä kaksi määritelmää tuottavat merkittävästi erilaisia lukuja samalle taustalla olevalle prosessille. Käsittelyaika tulisi raportoida johdonmukaisesti joko kalenteriaikana tai työaikana, koska viikonloppu- ja lomavaikutukset voivat muutoin vääristää vertailuja palveluiden välillä, joilla on erilaiset työskentelymallit.

## Sudenkuopat

- **Vain "puhtaiden" lähetteiden mittaaminen**: hylättyjen tai palautettujen lähetteiden pois jättäminen laskennasta piilottaa uudelleentyöskentelyn taakan, jota digitaaliset työkalut usein on tarkoitettu erityisesti vähentämään.
- **Keskiarvon raportointi mediaanin ja prosenttipisteiden sijaan**: pieni määrä pitkäkestoisia, palautettuja lähetteitä vetää keskiarvon paljon tyypillisen potilaan todellista kokemusta korkeammalle.
- **Käsittelyajan sekoittaminen kokonaisodotusaikaan**: käsittelyaika kattaa vain triage-vaiheen; potilaan kokonaiskokemukseen kuuluu myös alavirran kliininen jonotuslista, joka on erillinen mittari, jota säätelevät erilliset kapasiteettirajoitteet.
- **Alavaiheiden erottelemattomuus**: palvelu, joka mittaa vain päästä päähän -aikaa, ei voi kertoa, johtuuko hidas luku lähettäjien puutteellisten tietojen lähettämisestä, vastaanottavan palvelun triage-kapasiteetista vai molemmista.

## Lähteet

- NHS England, e-Referral Service (e-RS) -tilastot ja palvelumäärittelyt
- Vertaisarvioitu kirjallisuus sähköisistä lähetehallintajärjestelmistä ja digitaalisista triage-poluista, mukaan lukien teledermatologia
- ONC / HealthIT.gov, yhteentoimivuutta ja lähetteiden koordinointia koskeva ohjeistus
