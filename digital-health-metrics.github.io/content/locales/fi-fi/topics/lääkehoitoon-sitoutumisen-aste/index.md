# Lääkehoitoon sitoutumisen aste

Lääkehoitoon sitoutumisen aste mittaa, missä määrin potilas ottaa määrätyn lääkkeen ohjeen mukaisesti, ja se ilmaistaan useimmiten niiden päivien osuutena määritellyllä jaksolla, jolloin potilaalla oli lääkkeensä saatavilla määrätyllä tavalla. Se on yksi seurauksiltaan merkittävimmistä digitaalisen terveydenhuollon mittareista, koska hoitoon sitoutumattomuus on yleistä, suurelta osin ehkäistävissä oikealla tuella ja suoraan yhteydessä huonompiin kliinisiin tuloksiin ja korkeampiin myöhempiin kustannuksiin — mikä on juuri se aukko, jonka sulkemiseksi lääkemuistutussovellukset, älykkäät pilleripullot ja apteekin reseptin uusimisen muistutukset on rakennettu.

## Miksi tämä on tärkeää

Kansanterveysorganisaatioiden arvioiden mukaan pitkäaikaissairauksien lääkehoitoon sitoutumattomuus voi olla jopa 50 % joissakin sairauksissa, ja se on johtava ehkäistävissä oleva syy vältettävissä oleviin sairaalahoitoihin, taudin etenemiseen ja hoidon epäonnistumiseen, joka kirjataan virheellisesti lääkkeen eikä epäjohdonmukaisen käytön syyksi. Digitaaliset sitoutumistyökalut ovat olemassa nimenomaan tämän aukon sulkemiseksi, joten minkä tahansa lääkehoitokomponentin sisältävän ohjelman kohdalla sitoutumisaste on yleensä päätöksenteon kannalta merkittävin yksittäinen mittari: se sijaitsee kausaalisesti biometrisen paranemisen, uudelleen joutumisen ja useimpien muiden kliinisten tulosmittarien ylävirrassa, joita ohjelma voisi muutoin raportoida. Ohjelma, joka parantaa sitoutumista tai tyytyväisyyttä mutta ei liikuta lääkehoitoon sitoutumista, ei todennäköisesti ole vielä osoittanut uskottavaa mekanismia kliiniselle hyödylle.

## Miten se lasketaan

```
Katettujen päivien osuus (PDC) = päivät jaksolla, joina lääke oli
                                  saatavilla (perustuu lunastusten
                                  päiväannostoimitukseen) / päivät
                                  mittausjaksolla × 100

Lääkkeen hallussapitosuhde (MPR) = jaksolla saatu päiväannosten
                                   kokonaismäärä / päivät jaksolla × 100
                                   (voi ylittää 100 % ennenaikaisten
                                   uusintojen vuoksi; PDC on yleensä
                                   suositeltavampi tästä syystä)

Potilas luokitellaan tyypillisesti "sitoutuneeksi" PDC-kynnyksellä
≥ 80 %, laajasti käytetyn laatumittarikäytännön mukaisesti.
```

## Käytännön esimerkki

Potilaalle on määrätty päivittäinen pitkäaikaislääke 90 päivän mittausjaksolle. Apteekin lunastustietueet osoittavat, että potilas sai riittävästi lääkettä kattamaan 76 näistä 90 päivästä, kahdella aukolla: 9 päivän aukko lääkkeen loppumisen ja uusinnan välillä ja 5 päivän aukko sairaalahoitojakson aikana. PDC on 76 / 90 × 100 = 84 %, mikä ylittää tavanomaisen 80 %:n sitoutumiskynnyksen. Jos samat aukot mitattaisiin MPR:llä, joka perustuu toimitettuihin päiväannoksiin eikä todellisuudessa katettuihin päiviin, jaksolla muualla tehty ennenaikainen uusinta voisi nostaa suhteen yli 100 %:n, mikä havainnollistaa, miksi PDC on varovaisempi ja yleensä suositeltavampi mittari.

## Tietolähteet ja varaukset

Apteekin korvausvaatimus- tai lunastustiedot (joko apteekkietuuksien hallinnoijalta tai yhdistetystä apteekkijärjestelmästä) ovat vakiolähde, koska ne kuvaavat sitä, mitä potilas todella sai, eikä sitä, mitä hänelle määrättiin; pelkkä reseptitieto yliarvioi sitoutumista, koska se ei vahvista, että potilas koskaan nouti lääkettä. Digitaaliset sitoutumistyökalut — älykkäät pilleripullot, nielaistavat anturit, yhdistetyt älyinhalaattorit, jotka kirjaavat jokaisen annoksen hengityselinsairauksissa kuten astmassa ja keuhkoahtaumataudissa, sekä sovellukseen perustuvat kirjaukset — tarjoavat tarkemman tiedon siitä, otettiinko annos todella eikä vain hankittu, mutta niitä käyttää pieni, mahdollisesti epäedustava vähemmistö potilaista, joten laitteella vahvistetun sitoutumisen ja korvausvaatimuksiin perustuvan PDC:n yhdistäminen väestön yli vaatii huolellisuutta tulkinnassa. Sitoutumista tulisi mitata jaksolla, joka on riittävän pitkä tasoittamaan yksittäiset väliin jääneet annokset mutta riittävän lyhyt havaitsemaan merkittävän laskun ennen kuin se aiheuttaa kliinistä haittaa — 90 päivän liukuvat ikkunat ovat yleisiä pitkäaikaislääkkeille.

## Sudenkuopat

- **MPR:n käyttö ilmoittamatta, että se voi ylittää 100 %**: selittämättömät yli 100 %:n suhteet ennenaikaisista uusinnoista tai varastoinnista tekevät potilaiden ja jaksojen välisen vertailun epäluotettavaksi, ellei käytetä PDC:tä tai suhdetta nimenomaisesti rajata.
- **Resepti- tai tilaustietojen pitäminen sitoutumisen todisteena**: kirjoitettu tai apteekkiin lähetetty resepti ei kerro mitään siitä, noutiko tai otti potilas lääkkeen; vain lunastus- tai laitetieto sulkee tämän aukon.
- **Yhden sitoutumiskynnyksen soveltaminen kaikkiin sairauksiin erottelematta**: 20 %:n annoksista väliin jättämisen kliininen seuraus vaihtelee valtavasti lääkeaineryhmän mukaan (esim. antikoagulantit verrattuna statiineihin), joten yksi kaikkialla käytetty 80 %:n kynnys voi ali- tai yliarvioida kliinistä riskiä joillekin lääkkeille.
- **Lääkkeenvaihtojen ja lopetusten sivuuttaminen**: potilas, joka vaihdetaan kliinisesti ja asianmukaisesti toiseen lääkkeeseen, voi näyttää suurelta sitoutumisen laskulta alkuperäisen lääkkeen osalta, jos vaihtoa ei oteta huomioon laskennassa.

## Lähteet

- Pharmacy Quality Alliance (PQA), Proportion of Days Covered -mittarin määritykset
- Centers for Medicare & Medicaid Services (CMS), Star Ratings -lääkehoitoon sitoutumisen mittarit
- Vertaisarvioitu kirjallisuus lääkehoitoon sitoutumisen mittaamisesta ja digitaalisista sitoutumisinterventioista, esimerkiksi Journal of Managed Care & Specialty Pharmacy -lehdessä julkaistut tutkimukset

Katso myös: [biometrisen paranemisen aste](../biometrisen-paranemisen-aste/), jonka pääasiallinen ajuri pitkäaikaissairauden lääkehoitoon sitoutuminen on.
