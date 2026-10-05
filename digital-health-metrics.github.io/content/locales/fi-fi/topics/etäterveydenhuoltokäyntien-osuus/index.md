# Etäterveydenhuoltokäyntien Osuus

Etäterveydenhuoltokäyntien osuus on se osa palvelun kaikista kohtaamisista, joka toteutetaan etänä, video- tai puhelinyhteydellä, sen sijaan että se toteutettaisiin kasvokkain. Se on toimituskanavan sekoitusmittari, ei toimintamittari: se kertoo, miten hoitoa toteutetaan, mikä on tärkeää kapasiteetin suunnittelun, saatavuuden ja kliinisen tarkoituksenmukaisuuden kannalta, täysin erillään siitä, kuinka paljon hoitoa toteutetaan kaiken kaikkiaan.

## Miksi tämä on tärkeää

Etänä toteutetun hoidon osuus muutti monien palveluiden toimintamallia COVID-19-pandemian aikaisen virtuaalikonsultaatioiden nopean laajenemisen jälkeen, ja organisaatiot tarvitsevat vakaan tavan seurata, ylläpidetäänkö tätä muutosta, ajautuuko se takaisin pandemiaa edeltäneisiin normeihin, vai ohjataanko sitä aktiivisesti politiikan keinoin. Etäterveydenhuolto ei ole yhtenäinen korvike kasvokkaiselle käynnille: tarkoituksenmukaisuus vaihtelee erikoisalan, konsultaatiotyypin (lääkityksen tarkistus käyttäytyy hyvin eri tavalla kuin fyysinen tutkimus) ja potilaan mieltymysten mukaan, joten "oikea" osuus on kliininen ja operatiivinen harkinta, ei maksimoitava tavoite. Rahoittajat ja sääntelyviranomaiset käyttävät tätä osuutta myös tulos- ja turvallisuusmittareiden ohella korvauspolitiikan päättämiseen ja sen tarkistamiseen, ettei etähoitoa vain korvata tapauksissa, jotka on nähtävä kasvokkain.

## Miten se lasketaan

```
Etäterveydenhuoltokäyntien osuus = etäterveydenhuoltokohtaamiset / (etäterveydenhuoltokohtaamiset + kasvokkaiset kohtaamiset) × 100

Raportoi erikseen tavan mukaan, mikäli mahdollista:
  Videoaste     = videokohtaamiset / kohtaamiset yhteensä × 100
  Puhelinaste   = pelkät puhelinkohtaamiset / kohtaamiset yhteensä × 100

Nimittäjän tulisi laskea vain toteutuneet kohtaamiset (katso sudenkuopat),
tietylle palvelulle, erikoisalalle ja ajanjaksolle.
```

## Käytännön esimerkki

Yhteisöllinen mielenterveyspalvelu kirjaa 4 000 toteutunutta avohoidon kontaktia neljänneksessä: 1 200 kasvokkain, 1 600 videolla ja 1 200 puhelimitse. Etäterveydenhuoltokäyntien osuus on (1 600 + 1 200) / 4 000 × 100 = 70 %, videoasteen ollessa 40 % ja pelkän puhelinasteen 30 %. Pelkän yhdistetyn 70 %:n luvun raportointi peittäisi sen, että suuri osa "etäterveydenhuollosta" tässä on pelkkää ääntä, mikä yleensä sisältää eri kliinisen riskiprofiilin ja potilaskokemuksen kuin video.

## Tietolähteet ja varaukset

Kohtaamisen tyyppi kirjataan yleensä joko strukturoituna kenttänä sähköisessä potilastietojärjestelmässä (käyntityyppi tai sijainti) tai päätellään laskutuskoodeista, kuten palvelun paikkakoodista tai etäterveydenhuollon muuntimesta korvausvaatimuksessa. Kirjauskäytäntö vaihtelee merkittävästi organisaatioiden välillä ja jopa saman organisaation kliinikkojen välillä, joten asteiden vertailun eri toimipisteiden välillä tulisi ensin varmistaa, että "etäterveydenhuolto" kirjataan samalla tavalla kaikkialla. Käynti, joka alkaa videona mutta vaihtuu puhelimeksi teknisen ongelman vuoksi, tulisi kirjata johdonmukaisesti (yleensä sen tavan mukaan, joka välitti suurimman osan kliinisestä sisällöstä), ja tämä sääntö tulisi dokumentoida sen sijaan, että se jätettäisiin yksilöllisen harkinnan varaan.

## Sudenkuopat

- **Yritettyjen käyntien laskeminen toteutuneiden sijaan**: etäterveydenhuoltokäynti, joka ei onnistu yhdistämään ja varataan uudelleen, ei saisi kasvattaa etäterveydenhuollon nimittäjää kahdesti.
- **Videon ja puhelimen käsitteleminen vaihtokelpoisina**: niillä on erilaiset kliiniset ja tasa-arvovaikutukset (puhelin sulkee pois visuaalisen arvioinnin mutta on helpommin saatavilla potilaille, joilla ei ole älypuhelinta, luotettavaa yhteyttä tai yksityistä tilaa videolle); raportoi ne aina erikseen, jos mahdollista.
- **Poissaolosuhteen huomiotta jättäminen**: poissaolokäyttäytyminen vaihtelee usein tavan mukaan; katso [ajanvarauksen peruuttamattoman poissaolon aste](../ajanvarauksen-peruuttamattoman-poissaolon-aste/) ennen kuin teet johtopäätöksiä "parantuneesta saatavuudesta" pelkästään nousevan etäterveydenhuolto-osuuden perusteella.
- **Korkean asteen pitäminen luontaisesti hyvänä**: joidenkin tilojen ja konsultaatiotyyppien kohdalla asianmukainen etäterveydenhuolto-osuus on matala kliinisen suunnittelun, ei digitaalisen kypsyyden epäonnistumisen vuoksi.

## Lähteet

- Centers for Medicare & Medicaid Services (CMS), Medicaren etäterveydenhuollon käyttötiedot ja politiikkajulkaisut
- NHS England, avohoidon ja yhteisöpalveluiden toimintatilastot, mukaan lukien virtuaalisen/etäläsnäolon erittelyt
- Vertaisarvioitu kirjallisuus etäterveydenhuollon käyttötrendeistä ja tapakohtaisista tuloksista
