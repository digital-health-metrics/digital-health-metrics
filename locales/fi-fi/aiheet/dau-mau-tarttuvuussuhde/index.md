# DAU/MAU-tarttuvuussuhde

DAU/MAU-tarttuvuussuhde vertaa päivittäisiä aktiivisia käyttäjiä (DAU) kuukausittaisiin aktiivisiin käyttäjiin (MAU) — samaa perusmittaa käytetään viikoittaisille aktiivisille käyttäjille (WAU) suhteessa MAU:hun — ilmaisemaan, kuinka suuri osa tuotteen laajemmasta käyttäjäkunnasta käyttää sitä minä tahansa tiettynä päivänä. Se on tuoteanalytiikan vakiomuotoinen sitoutumisen intensiteetin mittari, joka eroaa siitä, onko käyttäjä ylipäätään säilynyt (ks. käyttäjien pysyvyysaste) tai kuinka johdonmukaisesti yksittäinen mukaan otettu potilas sitoutuu ajan myötä (ks. potilaan sitoutumisen johdonmukaisuusaste): tarttuvuus kuvaa käytön väestötason rytmiä, ei yksittäisen henkilön käyttäytymismallia.

## Miksi tämä on tärkeää

Kaksi digitaalisen terveydenhuollon tuotetta voivat raportoida täsmälleen saman kuukausittaisten aktiivisten käyttäjien määrän, vaikka niiden taustalla oleva sitoutumisen intensiteetti on hyvin erilainen: toisessa useimmat käyttäjät avaavat sovelluksen lähes päivittäin, toisessa useimmat avaavat sen kerran kuussa juuri ennen kuin heidät muuten laskettaisiin ei-aktiivisiksi. DAU/MAU-tarttuvuussuhde erottaa nämä kaksi hyvin erilaista tilannetta yhdellä yksinkertaisella, hyvin ymmärretyllä vertailuluvulla, jota tuote- ja kliiniset tiimit voivat seurata ajan myötä ja verrata tunnettuihin toimialan vaihteluväleihin — noin 20 %:n suhde on yleisesti mainittu kohtuullinen vertailuarvo monille kuluttajasovelluksille, kun taas päivittäisen tavan tuotteita (ruoka- tai oirepäiväkirja, jota potilaan odotetaan käyttävän joka päivä) tulisi arvioida merkittävästi korkeampaa rajaa vasten. Koska tarttuvuus on herkkä sille, miten "aktiivinen" määritellään, se on hyödyllisin yhden tuotteen trendinä ajan myötä ja vertailuna samankaltaiseen käyttömalliin tarkoitettuihin tuotteisiin, ei absoluuttisena toimialojen välisenä vertailuarvona.

## Miten se lasketaan

```
DAU/MAU-tarttuvuussuhde = päivittäisten aktiivisten käyttäjien
                           keskiarvo jaksolla / kuukausittaiset aktiiviset
                           käyttäjät samalla jaksolla × 100

WAU/MAU-suhde (viikoittainen, sama periaate) on pehmeämpi muunnelma,
joka sopii paremmin tuotteille, joiden odotetaan olevan käytössä
muutaman kerran viikossa eikä päivittäin.

"Aktiivinen" on määriteltävä tarkasti ja johdonmukaisesti (esim.
suoritettu kelpaava toiminto, ei passiivinen sovelluksen avaus) sekä
osoittajassa että nimittäjässä.
```

## Käytännön esimerkki

Digitaalisella diabeteksenhoitosovelluksella on 10 000 kuukausittaista aktiivista käyttäjää tietyllä kuukaudella, jolloin aktiiviseksi määritellään jokainen käyttäjä, joka suorittaa kuukauden aikana vähintään yhden kelpaavan toiminnon (glukoosikirjaus, ateriakirjaus tai lääkityksen kuittaus). Päivittäisten aktiivisten käyttäjien määrien keskiarvo kuukauden 30 päivältä on 2 200. DAU/MAU-tarttuvuussuhde on 2 200 / 10 000 × 100 = 22 %, mikä osoittaa, että tyypillisenä päivänä noin 22 % sovelluksen kuukausittaisesta käyttäjäkunnasta käyttää sitä — kohtuullinen luku päivittäisen tavan pitkäaikaissairaustyökalulle, vaikka tuotetiimi haluaisi nähdä sen nousevan ajan myötä, kun ihanteellinen käyttäytyminen (päivittäinen kirjaus) muuttuu mukana olevien potilaiden keskuudessa tavanomaisemmaksi.

## Tietolähteet ja varaukset

DAU, WAU ja MAU lasketaan kaikki samoista taustalla olevista tapahtumalokeista käyttäen yhtä johdonmukaista "kelpaavan aktiivisen" tapahtuman määritelmää kaikissa ikkunoissa; tämän määritelmän muuttaminen osoittajan ja nimittäjän laskelmien välillä (esimerkiksi minkä tahansa sovelluksen avauksen laskeminen DAU:lle mutta vain suoritetun toiminnon laskeminen MAU:lle) tuottaa vääristyneen suhteen, joka ei kuvaa todellista sitoutumisen intensiteettiä. Tarttuvuuden asianmukainen vertailuarvo riippuu vahvasti tuotteen tarkoitetusta käyttömallista: kerran viikossa käytettäväksi tarkoitetulla työkalulla (viikoittainen oireiden kirjaus) on ja kuuluukin olla alhaisempi DAU/MAU-suhde kuin päivittäin käytettäväksi tarkoitetulla työkalulla (jatkuvan glukoosimittarin oheissovellus), joten tarttuvuus tulisi aina tulkita tuotteen oman tarkoitetun käyttötiheyden eikä yhden yleisen tavoitteen valossa.

## Sudenkuopat

- **Tarttuvuussuhteiden vertaaminen tuotteiden välillä, joilla on erilainen tarkoitettu käyttötiheys**: viikoittain käytettävän työkalun DAU/MAU-suhde on rakenteellisesti alhaisempi kuin päivittäin käytettävän, vaikka molemmat toimisivat täsmälleen tarkoitetulla tavalla omissa käyttötapauksissaan; vertaa tuotteen omaan tarkoitettuun käyttötiheyteen, ei yhteen yleiseen tavoitteeseen.
- **Epäjohdonmukaisten aktiivisuusmääritelmien käyttö osoittajassa ja nimittäjässä**: tämä voi tuottaa tarttuvuussuhteen, joka ei kuvaa todellista sitoutumisen intensiteettiä eikä sitä voida mielekkäästi verrata ajan myötä tai muihin tuotteisiin.
- **Nousevan tarttuvuussuhteen pitäminen yksiselitteisen myönteisenä tarkistamatta kokonais-MAU:n trendiä**: nouseva suhde, jonka aiheuttaa kutistuva, tavanomaisempi ydinkäyttäjäkunta kokonais-MAU:n laskiessa, on hyvin erilainen — ja huolestuttavampi — tilanne kuin sellainen, jonka aiheuttaa aidosti kasvava päivittäinen sitoutuminen vakaassa tai kasvavassa käyttäjäkunnassa.
- **Viikonpäivän ja vuodenajan vaikutusten sivuuttaminen DAU:ssa**: DAU voi vaihdella huomattavasti viikonpäivän (arkipäivä vastaan viikonloppu) tai vuodenajan mukaan monilla terveystuotteilla; käytä DAU:n keskiarvoa jaksolta, joka kattaa kokonaisen luonnollisen syklin, eikä lyhyttä ikkunaa, joka voi vääristyä.

## Lähteet

- Vertaisarvioitu ja alan kirjallisuus mobiili- ja digitaalisten tuotteiden sitoutumismittareista, mobiilianalytiikka-alustojen laajasti käyttämät vertailukehykset
- Digital Therapeutics Alliance, parhaiden käytäntöjen ohjeistus digitaalisten terapioiden sitoutumisen mittaamiseen
- Vertaisarvioitu kirjallisuus digitaalisen terveydenhuollon sitoutumisen mittaamisesta, esimerkiksi Journal of Medical Internet Research -lehdessä (JMIR mHealth and uHealth) julkaistut tutkimukset

Katso myös: [käyttäjien pysyvyysaste](../käyttäjien-pysyvyysaste/) ja [potilaan sitoutumisen johdonmukaisuusaste](../potilaan-sitoutumisen-johdonmukaisuusaste/), kaksi toisiinsa liittyvää sitoutumismittaria, joiden kanssa tämä suhde sekoitetaan useimmin.
