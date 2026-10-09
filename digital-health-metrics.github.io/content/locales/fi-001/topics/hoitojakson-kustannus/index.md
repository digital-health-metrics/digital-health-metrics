# Hoitojakson kustannus

Hoitojakson kustannus on määritellyn kliinisen jakson — esimerkiksi lonkkaleikkauksen ja siihen liittyvän toipumisen tai diabeteksen hoitojakson — hoitamisesta aiheutuneet kokonaiskustannukset verrattuna historialliseen verrokkiryhmään, jota hoidettiin ilman arvioitavaa digitaalista interventiota. Se on arvopohjaisen hoidon vakiomuotoinen taloudellisen vertailun yksikkö, koska se kuvaa jakson koko taloudellisen kokonaiskuvan eikä yksittäistä kustannuserää erillisenä, ja se on mittari, jota maksajat ja terveydenhuoltojärjestelmät useimmiten vaativat ennen kuin ne sitoutuvat rahoittamaan digitaalisen terveydenhuollon ohjelmaa laajassa mittakaavassa.

## Miksi tämä on tärkeää

Arvopohjaiset hoitosopimukset korvaavat yhä useammin tuloksia ja hoitojaksoja yksittäisten palvelujen sijaan, mikä tarkoittaa, että digitaalisen terveydenhuollon ohjelman taloudellinen peruste on esitettävä samassa valuutassa: kokonaiskustannus hoitojaksoa kohti verrattuna siihen, mitä samanlainen jakso maksoi ennen intervention olemassaoloa. Ohjelma, joka vähentää yhtä kustannuslajia (esimerkiksi vähemmän henkilökohtaisia seurantakäyntejä) mutta lisää toista (enemmän laitekustannuksia, enemmän kliinisen seurantahenkilöstön työaikaa), ei välttämättä ole vähentänyt hoitojakson kokonaiskustannusta, ja vain koko jakson kattava kustannuslaskenta tuo tämän vaihtokaupan esiin; yksittäisen kustannuserän tarkastelu erillään riskeeraa harhaanjohtavan johtopäätöksen kumpaankin suuntaan. Koska jaksojen määritelmät ja vertailujaksot voidaan rakentaa tavoilla, jotka suosivat tiettyä johtopäätöstä, tämä mittari edellyttää enemmän menetelmällistä läpinäkyvyyttä kuin useimmat muut tämän kirjan mittarit, jotta se olisi luotettava epäilevälle maksajalle tai talousyksikölle.

## Miten se lasketaan

```
Hoitojakson kustannus = kaikkien määritellyn jaksoikkunan aikana
                         annettujen hoitojen kokonaiskustannus (kaikki
                         hoitoympäristöt, kaikki kustannuslajit) /
                         jaksojen lukumäärä

Vertaa historiallisen verrokkiryhmän hoitojakson kustannukseen samalle
kliinisesti määritellylle jaksotyypille, oikaistuna kahden ryhmän
välisellä potilasrakenteella (ikä, liitännäissairaudet, vaikeusaste).

Sisällytä muutakin kuin suorat kliiniset kustannukset: teknologia-
alustan ja laitteiden kustannukset, lisäksi tarvittava kliininen
henkilöstöaika sekä hoito, joka siirtyi toiseen ympäristöön (esim.
vuodeosastolta kotiin) eikä kokonaan poistunut.
```

## Käytännön esimerkki

Terveydenhuoltojärjestelmän historiallinen lähtötason kustannus lonkan kokonaisleikkausjaksolle (leikkauksesta 90 päivän toipumiseen) on 28 000 dollaria jaksoa kohti, perustuen 200 historialliseen jaksoon. Otetaan käyttöön uusi digitaalinen leikkauksen jälkeinen seurantaohjelma, ja 150 uuden ohjelmaa käyttävän jakson keskimääräinen kustannus on 24 500 dollaria jaksoa kohti — 3 500 dollarin lasku jaksoa kohti, joka johtuu pääasiassa vähemmistä päivystyskäynneistä toipumisen aikana ja lyhyemmästä keskimääräisestä vuodeosastohoidosta. Kun oikaistaan riskin mukaan digitaalisesti seuratun ryhmän historialliseen lähtötasoon verrattuna hieman nuorempi ja vähemmän liitännäissairauksia sisältävä potilasrakenne, oikaistu säästö supistuu 2 100 dollariin jaksoa kohti — edelleen todellinen parannus, mutta olennaisesti pienempi kuin raaka, oikaisematon vertailu antoi ymmärtää.

## Tietolähteet ja varaukset

Jakson kokonaiskustannus kootaan tyypillisesti terveydenhuoltojärjestelmän omasta kustannuslaskenta- tai taloushallintojärjestelmästä yhdistämällä korvausvaatimustiedot, sisäinen kustannusten kohdentaminen ja, jos mukana on digitaalinen alusta, sen lisenssi- ja laitekustannukset — tämän luvun tarkka kokoaminen on yleensä minkä tahansa digitaalisen terveydenhuollon arvoanalyysin vaikein ja resurssi-intensiivisin osa, koska kustannukset kirjataan usein erillisiin järjestelmiin, joita ei koskaan suunniteltu yhdistettäviksi jaksotasolla. Potilasrakenteen oikaisu on välttämätön aina, kun digitaalisesti hoidettua ryhmää ja historiallista verrokkiryhmää ei ole muodostettu todellisella satunnaistamisella, sillä digitaalisia ohjelmia tarjotaan usein ensin sitoutuneemmille, yleisesti terveemmille tai motivoituneemmille potilaille, mikä voi tuottaa näennäisen kustannussäästön, joka on todellisuudessa valikoitumisvaikutus eikä todellinen ohjelman vaikutus.

## Sudenkuopat

- **Oikaisemattomien kustannusten vertaaminen ryhmien välillä, joilla on erilainen potilasrakenne**: digitaalisesti hoidettu ryhmä, joka sattuu olemaan terveempi tai pienempiriskinen kuin historiallinen lähtötaso, osoittaa alhaisemman hoitojakson kustannuksen syistä, jotka eivät liity digitaaliseen interventioon; oikaise aina riskin mukaan ennen vertailua.
- **Teknologia- ja henkilöstökustannusten jättäminen pois vertailun "digitaaliselta" puolelta**: kustannusanalyysi, joka seuraa vain vähentynyttä kliinistä käyttöä mutta sivuuttaa digitaalisen ohjelman pyörittämisen alusta-, laite- ja henkilöstökustannukset, yliarvioi nettosäästöt.
- **Jaksoikkunan epäjohdonmukainen määrittely ryhmien välillä**: 90 päivän jaksoikkunan vertaaminen yhdelle ryhmälle 60 päivän ikkunaan toiselle tuottaa kustannusvertailun, joka ei todellisuudessa mittaa samaa asiaa.
- **Kustannussiirtymän pitäminen kustannusten vähenemisenä**: kustannus, joka on siirtynyt hoitoympäristöstä toiseen (esimerkiksi vuodeosastolta seurattuun kotiympäristöön), on todellinen ja arvokas löydös, mutta analyyttisesti eri asia kuin kokonaan poistunut kustannus, ja nämä kaksi tulisi raportoida erikseen.

## Lähteet

- Centers for Medicare & Medicaid Services (CMS), Bundled Payments for Care Improvement (BPCI) ja jaksopohjaisten maksumallien ohjeistus
- Healthcare Financial Management Association (HFMA), hoitojaksojen kustannuslaskentamenetelmän ohjeistus
- Vertaisarvioitu kirjallisuus digitaalisen terveydenhuollon arvopohjaisen hoidon kustannusanalyysistä, esimerkiksi Health Affairs- ja American Journal of Managed Care -lehdissä julkaistut tutkimukset

Katso myös: [sijoitetun pääoman tuotto (ROI) ja sijoituksen arvo (VOI)](../roi-ja-voi/), joka käyttää hoitojakson kustannusta yhtenä pääasiallisista syöttötiedoistaan.
