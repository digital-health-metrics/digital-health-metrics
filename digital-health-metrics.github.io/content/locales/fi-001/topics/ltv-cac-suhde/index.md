# LTV/CAC-suhde

LTV/CAC-suhde vertaa asiakkaan elinkaariarvoa (LTV) — kokonaistuloa tai -katetta, jonka organisaatio odottaa saavansa potilaasta tai asiakkaasta koko hänen tuotesuhteensa aikana — kyseisen asiakkaan hankinnan todellisiin kustannuksiin (ks. todellinen asiakashankintakustannus). Se on yksittäisistä yksikkötaloutta kuvaavista mittareista tärkein arvioitaessa, onko digitaalisen terveydenhuollon organisaation kasvu taloudellisesti kestävää, sillä tappiolla hankittu kasvava asiakaskunta ei ole terveyden merkki, vaikka kasvukäyrä näyttäisi kuinka myönteiseltä tahansa.

## Miksi tämä on tärkeää

Digitaalisen terveydenhuollon organisaatio voi kasvattaa käyttäjäkuntaansa tasaisesti ja samalla hiljaa tuhota arvoa jokaisen uuden asiakkaan kohdalla, jos hankintakustannus ylittää elinkaariarvon; LTV/CAC-suhde on mittari, joka tekee tämän näkyväksi tavalla, johon pelkkä kasvuvauhti tai asiakasmäärä ei pysty. 3:1-suhde (elinkaariarvo vähintään kolminkertainen hankintakustannukseen nähden) on laajasti mainittu perusvertailuarvo kestävälle tilaus- tai toistuvaistuloliiketoiminnalle, ja se jättää riittävästi katetta hankinnan ulkopuolisten toimintakustannusten kattamiseen ja silti tuottaa tuoton; alle 1:1 suhde tarkoittaa, että organisaatio menettää rahaa jokaisessa hankitussa asiakkaassa, ja selvästi yli 3:1 oleva suhde (esimerkiksi 10:1 tai korkeampi) voi itse asiassa viitata alirahoitettuun kasvuun, koska se antaa ymmärtää, että organisaatio voisi hankkia kannattavasti enemmän asiakkaita kuin se nykyisin hankkii. Sijoittajat, hallitukset ja maksajat, jotka arvioivat digitaalisen terveydenhuollon yrityksen taloudellista kestävyyttä, pitävät tätä suhdetta yhtenä ensimmäisistä luvuista, joita he pyytävät.

## Miten se lasketaan

```
LTV = keskimääräinen tulo (tai kate) asiakasta kohti jaksoa kohti ×
      keskimääräinen asiakkuuden kesto samassa jaksoyksikössä

LTV/CAC-suhde = LTV / todellinen CAC

3:1-suhde on yleisesti mainittu kestävä perustaso; alle 1:1
osoittaa, että organisaatio menettää rahaa hankinnassa; selvästi yli
3:1 (esim. 10:1+) voi osoittaa alirahoitettua kasvua.
```

## Käytännön esimerkki

Digitaalinen terveydenhuollon tilauspalvelu tuottaa keskimäärin 40 dollaria kuukaudessa potilasta kohti, ja keskimääräinen potilas pysyy tilaajana 18 kuukautta, jolloin LTV on 40 $ × 18 = 720 $. Palvelun todellinen CAC (ks. kyseisen aiheen käytännön esimerkin lähestymistapa) lasketaan 180 dollariksi hankittua potilasta kohti. LTV/CAC-suhde on 720 $ / 180 $ = 4:1, mukavasti yli 3:1-kestävyysperustason. Jos todellinen CAC laskettaisiin pelkästään mainosalustan raportoiman kustannuksen perusteella (120 $, ennen toimistopalkkioiden ja vastaanoton työpanoksen lisäämistä), suhde näyttäisi olevan 6:1 — olennaisesti suotuisampi ja harhaanjohtava kuva yksikkötaloudesta kuin todellinen 4:1-luku.

## Tietolähteet ja varaukset

LTV riippuu oletuksesta keskimääräisestä asiakkuuden kestosta, joka puolestaan johdetaan organisaation omista pysyvyys- tai poistumatiedoista (ks. käyttäjien pysyvyysaste) — liiketoiminnalla, jolla on korkea poistuma, on lyhyempi tehollinen keskimääräinen kesto ja siksi alhaisempi LTV, vaikka sen asiakaskohtainen tulo jaksoa kohti näyttäisi terveeltä. Koska LTV on eteenpäin katsova arvio eikä havaittu historiallinen tosiasia, se tulisi laskea säännöllisesti uudelleen pysyvyystietojen kertyessä ja tarkistaa, jos poistumaoletukset osoittautuvat vääriksi, sen sijaan että se kiinnitettäisiin kerran ja jätettäisiin vanhentuneeksi. Alustan raportoiman CAC:n käyttäminen todellisen CAC:n sijaan tässä suhteessa on yksi yleisimmistä tavoista, joilla organisaatio voi vakuuttaa itsensä siitä, että sen yksikkötalous on terveempi kuin se todellisuudessa on, sillä aliarvioitu CAC paisuttaa suhdetta mekaanisesti.

## Sudenkuopat

- **Alustan raportoiman CAC:n käyttö todellisen CAC:n sijaan**: tämä paisuttaa suhdetta mekaanisesti ja voi saada kestämättömän hankintastrategian näyttämään kestävältä; käytä aina täysin kuormitettua todellista CAC-lukua.
- **Vanhentuneen tai optimistisen keskimääräisen asiakkuuden keston oletuksen käyttö**: vanhentuneesta pysyvyyskäyrästä laskettu LTV ei heijasta nykyistä poistumakäyttäytymistä, erityisesti tuotteen, hinnoittelun tai markkinan muutoksen jälkeen, joka siirtää pysyvyyttä.
- **Hyvin korkean suhteen pitäminen yksiselitteisen hyvänä**: selvästi yli 3:1 oleva suhde voi viitata alirahoitettuun kasvuun eikä poikkeukselliseen tehokkuuteen, sillä se tarkoittaa, että organisaatio voisi todennäköisesti hankkia kannattavasti enemmän asiakkaita kuin se nykyisin hankkii.
- **Yhden yhdistetyn suhteen laskeminen hyvin erilaisten asiakassegmenttien yli**: segmentti, jolla on korkea tulo ja alhainen poistuma, voi peittää toisen segmentin, jolla on huono yksikkötalous; laske suhde mielekkäittäin segmenteittäin (esim. hankintakanavan tai tuotelinjan mukaan), kun volyymi sen sallii.

## Lähteet

- Vertaisarvioitu ja alan kirjallisuus tilaus- ja toistuvaistuloliiketoiminnan yksikkötaloudesta, riskipääoma- ja SaaS-mittaritutkimusorganisaatioiden laajasti käyttämät vertailukehykset
- Healthcare Financial Management Association (HFMA), digitaalisen terveydenhuollon organisaatioiden taloudellisen kestävyyden mittareita koskeva ohjeistus
- Rock Health ja vastaavat digitaalisen terveydenhuollon markkinatutkimusorganisaatiot, digitaalisen terveydenhuollon yksikkötalouden alan vertailut

Katso myös: [todellinen asiakashankintakustannus](../todellinen-asiakashankintakustannus/) ja [markkinoinnin tehokkuussuhde](../markkinoinnin-tehokkuussuhde/), kaksi muuta kasvutalouden ydinmittaria, joiden rinnalla tämä suhde tyypillisesti raportoidaan.
