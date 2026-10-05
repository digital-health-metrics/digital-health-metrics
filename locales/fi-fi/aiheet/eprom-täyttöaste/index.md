# ePROM-täyttöaste

ePROM-täyttöaste mittaa sen osuuden ajoitetuista sähköisistä potilaan raportoimista tulosmittareista (ePROM) — standardoiduista, validoiduista kyselylomakkeista, jotka keräävät potilaan oman kuvauksen oireistaan, toimintakyvystään tai elämänlaadustaan ja jotka toimitetaan digitaalisesti paperin sijaan — jotka todella täytetään. Se on yhtä lailla tietojen laadun kuin sitoutumisen mittari: PROM-ohjelman kliininen ja tutkimuksellinen arvo riippuu kokonaan siitä, että täyttöaste on riittävän korkea, jotta kerätyt vastaukset edustavat koko mukaan otettua väestöä eikä vain sitoutuneinta tai vähiten oireilevaa osajoukkoa.

## Miksi tämä on tärkeää

Potilaan raportoimat tulokset ovat suora, potilaan itsensä vahvistama täydennys kliinikon kirjaamille tai laitteella mitatuille tiedoille, ja ne kuvaavat terveyden ulottuvuuksia — kipua, toimintakykyä, elämänlaatua — joita potilaskertomuksen läpikäynti tai biometrinen mittaus ei tavoita; PROM-keruun digitalisointi on olemassa nimenomaan sitä varten, että nämä tiedot voidaan kerätä halvemmin ja helpommin laajassa mittakaavassa kuin paperipohjainen toteutus koskaan salli. PROM-ohjelmaan, jonka täyttöaste on alhainen, liittyy kuitenkin erityinen ja vakava harhan riski: potilaat, jotka voivat huonommin, täyttävät pitkän kyselylomakkeen usein epätodennäköisemmin, joten laskeva täyttöaste voi itsessään olla varhainen varoitusmerkki väestön terveyden heikkenemisestä, ja alhainen kokonaistäyttöaste voi saada kerätyt vastaukset näyttämään paremmilta kuin todellisen väestön kokemus yksinkertaisesti siksi, että eniten oireilevat potilaat ovat aliedustettuina täytetyissä vastauksissa. Siksi täyttöaste tulisi aina raportoida itse PROM-pisteiden rinnalla, eikä sitä tule käsitellä toissijaisena operatiivisena yksityiskohtana.

## Miten se lasketaan

```
ePROM-täyttöaste = kokonaan täytetyt ePROM:t / lähetetyt tai ajoitetut
                    ePROM:t × 100

Raportoi erikseen:
  Alkuvaiheen täyttöaste      (ensimmäinen kyselylomake
                               seurantasarjassa)
  Pitkittäinen täyttöaste     (jatkuvan seurantasarjan myöhemmät
                               kyselylomakkeet, joiden täyttöaste laskee
                               tyypillisesti ajan myötä ja jota tulisi
                               seurata trendinä, ei yksittäisenä lukuna)

"Osittain täytetty" kyselylomake tulisi määritellä ja raportoida
erikseen sekä "kokonaan täytetystä" että "aloittamattomasta".
```

## Käytännön esimerkki

Syöpäklinikka lähettää validoidun oirekuormitus-ePROM:n 400 potilaalle ennen jokaista kuukausittaista seurantakäyntiä. Ensimmäisenä kuukautena 340 potilasta täyttää kyselylomakkeen kokonaan (täyttöaste 85 %), 30 täyttää sen osittain ja 30 ei aloita sitä. Saman seurantasarjan kuudentena kuukautena täydelliset vastaukset ovat laskeneet 260:een samasta 400 potilaan ryhmästä (65 %), mikä on merkittävä pitkittäinen lasku, joka jäisi kokonaan huomaamatta, jos vain ensimmäisen kuukauden 85 %:n luku raportoitaisiin staattisena kokonaismittarina. Sen tutkiminen, mitkä potilaat jäävät pois (oireiden vaikeusasteen, sairauden vaiheen tai iän mukaan), voi paljastaa, johtuuko lasku kyselyväsymyksestä, pahenevista oireista, jotka vaikeuttavat lomakkeen täyttämistä, vai teknisestä saavutettavuusesteestä.

## Tietolähteet ja varaukset

Täyttötiedot tulevat ePROM-alustan omista toimitus- ja vastauslokeista, jotka voivat erottaa tilat "aloittamaton", "osittain täytetty" ja "kokonaan täytetty" — erottelu, joka tulisi aina säilyttää ja raportoida sen sijaan, että se kutistettaisiin binääriseksi täytetty/ei täytetty -luvuksi, sillä osittainen täyttö osoittaa usein tietyn kohdan kyselylomakkeessa, jossa potilaat takertuvat tai menettävät kiinnostuksensa. Täyttöastetta tulisi tulkita yhdessä sen kanssa, miten kyselylomake toimitetaan (tekstiviestilinkki, sovellusilmoitus tai toimitustapa, joka edellyttää portaaliin kirjautumista), sillä toimituksen kitka vaikuttaa täyttöön itsenäisesti kyselylomakkeen sisällöstä tai potilaan taustalla olevasta sairaudesta riippumatta. Itse PROM:ssa tulisi aina käyttää validoitua mittaria (eikä ad hoc -kysymyssarjaa), sillä validoimattoman mittarin täyttöaste ei kerro mitään luotettavaa syntyvän tiedon kliinisestä hyödyllisyydestä, vaikka täyttö olisi korkea.

## Sudenkuopat

- **Laskevan täyttöasteen pitäminen vain toimitusongelmana**: pitkittäinen täytön lasku voi heijastaa aidosti pahenevia potilaan oireita (potilaat liian sairaita täyttääkseen kyselyn) eikä kyselyväsymystä tai teknistä ongelmaa, ja tällä erolla on valtava merkitys kliinisessä tulkinnassa.
- **Osittaisen ja täydellisen täytön yhdistäminen yhdeksi luokaksi**: osittain täytetty kyselylomake on tietojen laadultaan merkittävästi erilainen kuin kokonaan täytetty; raportoi ne erikseen ja tutki, missä kohdassa kyselylomakkeen kulkua potilaat yleensä keskeyttävät sen.
- **Täyttöasteen raportointi ilman vastaajaharhan riskin raportointia**: kohtalainen täyttöaste tulisi saada tutkimaan, eroavatko vastaajat järjestelmällisesti (oireiden vaikeusasteen, iän tai digitaalisen lukutaidon suhteen) vastaamattomista, sillä pelkästään vastaajista laskettu PROM-pistemäärä voi vääristää kuvaa koko väestöstä.
- **Validoimattoman tai itse laaditun kyselylomakkeen käyttö**: täyttöaste on merkityksetön tietojen laatusignaali, jos täytettävää mittaria ei ole itse validoitu kliinisesti mitattavalle sairaudelle ja väestölle.

## Lähteet

- International Consortium for Health Outcomes Measurement (ICHOM), vakiomuotoisten mittarikokonaisuuksien kehittäminen ja PROM-käyttöönoton ohjeistus
- U.S. Food and Drug Administration (FDA), potilaan raportoimia tulosmittareita koskeva ohjeistus kliinisissä tutkimuksissa ja sääntelyyn liittyvissä hakemuksissa
- Vertaisarvioitu kirjallisuus sähköisen PROM:n käyttöönotosta ja täyttöasteista, esimerkiksi Quality of Life Research- ja Journal of Medical Internet Research (JMIR) -lehdissä julkaistut tutkimukset

Katso myös: [potilaan net promoter score](../potilaan-net-promoter-score/), liittyvä mutta erillinen potilaan raportoima mittari, joka mittaa tyytyväisyyttä eikä kliinistä tulosta.
