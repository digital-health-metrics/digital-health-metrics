# Vuodepäivien väheneminen

Vuodepäivien väheneminen mittaa sairaalan vuodeosastopäivien kokonaismäärää, joka on vältetty siirtämällä määritelty hoitojakso — useimmiten leikkauksen jälkeinen toipuminen tai akuutin sairauden hoito — perinteisestä vuodeosastohoidosta digitaalisesti tuettuun vaihtoehtoon, kuten virtuaaliosastoon tai kotisairaalaohjelmaan. Se on virtuaaliosastojen ja kotisairaalaohjelmien ensisijainen kapasiteettimittari, joka kääntää kliinisen hoitomallin muutoksen suoraan siihen valuuttaan (vuodekapasiteettiin), jonka mukaan sairaaloiden toiminta ja järjestelmätason suunnittelijat todellisuudessa johtavat toimintaa.

## Miksi tämä on tärkeää

Vuodeosastokapasiteetti on yksi minkä tahansa sairaalajärjestelmän niukimmista ja kalleimmista resursseista, ja virtuaaliosaston tai kotisairaalaohjelman keskeinen arvolupaus on, että se voi turvallisesti tarjota määritellyn tason kliinistä hoitoa varaamatta fyysistä vuodepaikkaa, jolloin kapasiteettia vapautuu potilaille, joita ei voida hoitaa millään muulla tavalla. Vuodepäivien väheneminen muuntaa usein abstraktin väitteen ("tämä ohjelma parantaa hoitoa") konkreettiseksi operatiiviseksi luvuksi, jonka sairaalan kapasiteettisuunnittelijat, talousyksiköt ja tilaajat voivat hyödyntää suoraan: sen avulla voidaan mallintaa, maksaako seurantaohjelmaan tehty investointi itsensä takaisin vältetyissä vuodekustannuksissa ja kuinka paljon. Koska vuodepäivien vähenemisellä on arvoa vain, jos potilasturvallisuus säilyy, se tulisi aina raportoida turvallisuutta kuvaavan tulosmittarin (kuten uudelleenotto- tai vuodeosastohoitoon eskaloitumisen asteen) rinnalla samalle väestölle, ei koskaan sen sijasta.

## Miten se lasketaan

```
Vuodepäivien väheneminen = odotetut vuodepäivät tavanomaisessa
                            vuodeosastohoidossa (perustuen verrokkiryhmän
                            historiallisiin hoitoaikatietoihin) − virtuaali-/
                            digitaalisella hoitopolulla olevien potilaiden
                            todelliset vuodepäivät

Raportoi hoitopolkukohtaisesti (esim. leikkauksen jälkeinen toipuminen,
akuutti hengityselinsairauden paheneminen), sillä odotettu hoitoaika
vaihtelee suuresti sairauden mukaan, eikä toisiinsa liittymättömien
hoitopolkujen yhdistetty luku ole merkityksellinen.
```

## Käytännön esimerkki

Sairaalan historiallisten tietojen mukaan tietystä valinnaisesta leikkauksesta toipuvien potilaiden keskimääräinen vuodeosastohoidon kesto on 4 päivää. Virtuaaliosastoohjelmaan otetaan 150 saman toimenpiteen jälkeen toipuvaa potilasta, jotka kotiutetaan keskimäärin 1,5 vuodeosastopäivän jälkeen ja joiden toipumista seurataan loppuajan etänä. Vuodepäivien väheneminen on (4 − 1,5) × 150 = 375 vuodepäivää mittausjaksolla. Tämä luku tulisi raportoida yhdessä virtuaaliosastoryhmän 30 päivän vuodeosastohoitoon eskaloitumisen asteen ja uudelleenottoasteen kanssa samoille 150 potilaalle, sillä vuodepäiväsäästö, joka saavutetaan merkittävästi korkeamman eskalaatio- tai uudelleenottoasteen hinnalla, ei ole sellainen kliininen voitto, jota otsikkoluku muuten antaisi ymmärtää.

## Tietolähteet ja varaukset

Odotetut vuodepäivät edellyttävät uskottavaa historiallista vertailutasoa, mieluiten verrokkiryhmästä, jota on hoidettu tavanomaisessa vuodeosastohoidossa ja jolla on virtuaaliosaston väestöön nähden samankaltaiset kliiniset ominaisuudet (ikä, liitännäissairaudet, toimenpiteen tyyppi, vaikeusaste). Vertaaminen yhteensovittamattomaan historialliseen keskiarvoon voi yli- tai aliarvioida todellisen vähenemisen, jos digitaalisesti hoidettu ryhmä on järjestelmällisesti terveempi tai sairaampi kuin historiallinen vertailuryhmä. Digitaalisella hoitopolulla käytetyt todelliset vuodepäivät saadaan sairaalan omasta potilaan sisäänkirjaus-, uloskirjaus- ja siirtojärjestelmästä (ADT); kaikki seurannan aikaisen toipumisjakson aikana tapahtuneet eskaloitumiset takaisin vuodeosastohoitoon tulisi laskea rehellisesti ohjelman vahingoksi (käytettyinä vuodepäivinä, ei pois jätettyinä), koska eskalaatioiden jättäminen laskennan ulkopuolelle paisuttaisi näennäistä vähenemistä keinotekoisesti.

## Sudenkuopat

- **Vuodepäivien vähenemisen raportointi ilman yhteensovitettua turvallisuusvertailua**: virtuaaliosasto, joka säästää vuodepäiviä mutta jonka eskalaatio- tai uudelleenottoaste on merkittävästi huonompi kuin tavanomaisessa hoidossa, ei ole osoittanut todellista parannusta; raportoi aina molemmat yhdessä.
- **Yhteensovittamattoman tai vanhentuneen historiallisen vertailutason käyttäminen**: vertaaminen historialliseen ryhmään, jonka potilasrakenne, liitännäissairauksien taakka tai kliininen käytäntö kuuluu eri aikakauteen, voi merkittävästi yli- tai aliarvioida todellisen vuodepäiväsäästön.
- **Vuodeosastohoitoon takaisin eskaloitumisten jättäminen laskennan ulkopuolelle**: potilaan, jota seurataan virtuaalisesti mutta joka eskaloituu vuodepaikalle kesken toipumisen, vuodepäivät tulee laskea ohjelman vahingoksi eikä jättää äänettömästi pois analyysistä.
- **Hyvin erilaisen odotetun hoitoajan omaavien hoitopolkujen yhdistäminen**: vuodepäivien vähenemisen koostaminen kliinisesti toisiinsa liittymättömien hoitopolkujen yli (esimerkiksi leikkauksen jälkeisen toipumisen ja kroonisen hengityselinsairauden hoidon yhdistäminen yhdeksi luvuksi) hämärtää sen, mikä yksittäinen hoitopolku säästön todella tuottaa.

## Lähteet

- NHS England, virtuaaliosastojen ja kotisairaalaohjelmien ohjeistus sekä vuodepäivävaikutusten raportointistandardit
- Vertaisarvioitu kirjallisuus kotisairaala- ja virtuaaliosastomalleista, esimerkiksi JAMA Internal Medicine- ja npj Digital Medicine -lehdissä julkaistut tutkimukset
- Institute for Healthcare Improvement (IHI), kapasiteetinhallinnan ja vaihtoehtoisten hoitomallien ohjeistus

Katso myös: [sairaalaan uudelleen joutumisen aste](../sairaalaan-uudelleen-joutumisen-aste/), turvallisuusmittari, joka tulisi aina raportoida kaikkien vuodepäivien vähenemistä koskevien väitteiden rinnalla samalle potilasjoukolle.
