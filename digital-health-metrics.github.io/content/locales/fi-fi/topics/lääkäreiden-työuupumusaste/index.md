# Lääkäreiden työuupumusaste

Lääkäreiden työuupumusaste mittaa niiden kliinikoiden osuutta, jotka raportoivat merkittäviä työuupumuksen oireita — yleisesti arvioituna tunneperäisenä uupumuksena, depersonalisaationa tai heikkona henkilökohtaisen onnistumisen tunteena validoidulla kyselymittarilla — ja digitaalisessa terveydenhuollossa sitä seurataan erityisesti kliinikoille suunnattujen digitaalisten työkalujen kuormitusta kuvaavien mittarien, kuten paperityöhön tai sähköisen potilaskertomuksen (EHR) dokumentointiin käytetyn ajan, rinnalla. Se kuuluu digitaalisen terveydenhuollon mittauskehykseen, koska huonosti suunniteltu kliininen ohjelmisto on hyvin dokumentoitu, mitattavissa oleva työuupumuksen aiheuttaja, eikä digitaalisen terveydenhuollon työkalun onnistumista tulisi koskaan arvioida pelkästään potilaille suunnattujen mittarien perusteella sivuuttaen sen vaikutus kliinikoihin, joiden on sitä käytettävä.

## Miksi tämä on tärkeää

Digitaalisia terveydenhuollon työkaluja otetaan usein käyttöön nimenomaisena tavoitteena vähentää kliinikoiden hallinnollista kuormitusta, mutta huonosti suunniteltu sähköisen potilaskertomuksen työnkulku, liiallinen määrä vähäarvoisia kliinisiä hälytyksiä (ks. kliinisten hälytysten ohittamisaste) tai kömpelö etäterveydenhuollon käyttöliittymä voivat yhtä helposti lisätä työuupumusta kuin vähentää sitä — ja työkalu, joka parantaa potilaille suunnattua sitoutumismittaria mutta lisää hiljaa kliinikoiden dokumentointikuormitusta, ei ole tuottanut nettomyönteistä tulosta hoitojärjestelmälle kokonaisuutena. Työuupumus on kliinisessä kirjallisuudessa vahvasti yhteydessä hoitovirheisiin, kliinikoiden vaihtuvuuteen ja heikentyneeseen hoidon laatuun, joten se toimii johtavana indikaattorina myöhemmille turvallisuus- ja työvoiman kestävyysongelmille eikä ole pelkkä työtyytyväisyyden mukava lisä. Minkä tahansa digitaalisen terveydenhuollon ohjelman, joka väittää vähentävänsä kliinistä kuormitusta, tulisi pystyä osoittamaan tämä väite mitattua lähtötasoa vasten sen sijaan, että se esitetään suunnitteluaikomuksena.

## Miten se lasketaan

```
Lääkäreiden työuupumusaste = kliinikot, jotka ylittävät validoidun
                              mittarin työuupumuskynnyksen / kyselyyn
                              vastanneet kliinikot yhteensä × 100

Yleiset validoidut mittarit: Maslach Burnout Inventory (MBI),
Professional Fulfillment Index tai täydempää mittaria vasten validoitu
yhden kysymyksen työuupumuksen seulontakysymys.

Raportoi rinnalla digitaalisen kuormituksen korvike, jos saatavilla:
  EHR-järjestelmässä vietetty aika potilaskohtaamista kohti
  Ajoitettujen kliinisten työtuntien ulkopuolella tapahtuva
  dokumentointiaika ("pyjamaaika")
```

## Käytännön esimerkki

Sairaalajärjestelmä kyselee 300 lääkäriltä Maslach Burnout Inventoryn avulla ennen ympäristön kliinisen dokumentoinnin työkalun käyttöönottoa, jonka tarkoitus on vähentää muistiinpanojen kirjoittamiseen kuluvaa aikaa. Lähtötasolla 135 lääkäriä (45 %) ylittää työuupumuskynnyksen, ja EHR:n auditointilokitiedot osoittavat keskimäärin 58 minuuttia lääkäriä kohti päivässä dokumentointiaikaa ajoitettujen kliinisten työtuntien ulkopuolella. Kuusi kuukautta työkalun käyttöönoton jälkeen samojen lääkäreiden toistettu kysely osoittaa, että 108 (36 %) ylittää työuupumuskynnyksen, ja työajan ulkopuolinen dokumentointiaika on laskenut 34 minuuttiin päivässä. Sekä työuupumusasteen että objektiivisen EHR-pohjaisen korvikemittarin korreloiva liike vahvistaa perustetta sille, että työkalu myötävaikuttaa paranemiseen, vaikka muodollisen ennen/jälkeen-vertailun tulisi silti ottaa huomioon muut samanaikaiset työkuormituksen muutokset samalla ajanjaksolla.

## Tietolähteet ja varaukset

Työuupumuskyselytiedot tulevat validoidusta mittarista, jota annetaan toistuvasti (vuosittain tai useammin), ja vastausprosentilla on merkitystä: alhainen vastausprosentti riskeeraa vastaamattomuusharhan, jossa eniten työuupuneet kliinikot (joilla on vähiten kapasiteettia täyttää ylimääräinen kysely) ovat järjestelmällisesti aliedustettuina, mikä aliarvioi todellista astetta. Digitaalisen kuormituksen EHR-pohjaiset korvikemittarit — järjestelmässä vietetty aika, työajan ulkopuolinen dokumentointiaika, napsautusten määrä kohtaamista kohti — ovat hyödyllisiä objektiivisina, jatkuvasti saatavilla olevina täydennyksinä ajoittaisille kyselytiedoille, mutta ne tulisi validoida organisaatiokohtaisesti kyselyllä raportoitua työuupumusta vasten ennen kuin niitä pidetään luotettavana itsenäisenä työuupumuksen indikaattorina, sillä järjestelmässä vietetyn ajan ja todellisen työuupumuksen suhde voi vaihdella erikoisalan ja yksilöllisen työtyylin mukaan.

## Sudenkuopat

- **Pelkkien EHR-pohjaisten korvikemittarien varaan nojaaminen**: järjestelmässä vietetty aika ja napsautusmäärät korreloivat työuupumuksen kanssa kokonaisuutena, mutta eivät ole sama asia kuin työuupumus itse, ja ne voivat olla harhaanjohtavia yksittäisille kliinikoille tai erikoisaloille, joilla on aidosti erilaiset dokumentointitarpeet.
- **Alhainen kyselyn vastausprosentti peittää todellisen asteen**: työuupumuksesta eniten kärsivillä kliinikoilla on usein vähiten kapasiteettia vastata vapaaehtoiseen kyselyyn, mikä vinouttaa alhaisen vastausprosentin tuloksen keinotekoisesti terveemmän näköiseksi.
- **Työuupumuksen muutoksen kohdistaminen yhteen työkaluun sekoittavia tekijöitä huomioimatta**: työuupumukseen vaikuttavat monet samanaikaiset tekijät (henkilöstömitoitus, potilasmäärät, organisaatiomuutokset); yhden työkalun käyttöönoton ympärillä tehdyn ennen/jälkeen-vertailun tulisi hallita näitä mahdollisuuksien mukaan sen sijaan, että oletetaan yksi syy.
- **Työuupumuksen käsittely pelkkänä yksilön resilienssiongelmana**: työuupumustutkimus löytää johdonmukaisesti työkuormituksen, järjestelmäsuunnittelun ja organisatoristen tekijöiden olevan ensisijaisia ajureita; sen kehystäminen pelkästään yksittäisen kliinikon ongelmaksi ohjaa interventiot pois digitaalisista työkaluista ja työnkuluista, jotka ovat usein todellinen perimmäinen syy.

## Lähteet

- Maslach Burnout Inventory (MBI), validoitu kyselymittari ja pisteytysohjeistus
- American Medical Association (AMA), lääkäreiden työuupumustutkimus ja STEPS Forward -käytäntöjen parantamisohjelma
- Vertaisarvioitu kirjallisuus EHR:n käytettävyydestä, dokumentointikuormituksesta ja kliinikoiden työuupumuksesta, esimerkiksi JAMIA- ja Annals of Internal Medicine -lehdissä julkaistut tutkimukset

Katso myös: [kliinisten hälytysten ohittamisaste](../kliinisten-hälytysten-ohittamisaste/), sillä hälytysväsymys on yksi täsmällisimmistä, mitattavissa olevista kliinikoiden työuupumuksen aiheuttajista, joihin digitaaliset työkalut voivat suoraan vaikuttaa.
