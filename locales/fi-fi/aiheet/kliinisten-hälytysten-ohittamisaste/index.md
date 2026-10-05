# Kliinisten Hälytysten Ohittamisaste

Kliinisten hälytysten ohittamisaste mittaa sitä osuutta kliinisen päätöksenteon tuen (CDS) hälytyksistä, kuten lääkeaineiden yhteisvaikutusvaroituksista, allergiahälytyksistä ja tietokoneistetun tilausjärjestelmän (CPOE) tuottamista annosaluetarkistuksista, jotka kliinikko hylkää tai ohittaa sen sijaan, että toimisi niiden mukaan. Se on vakiomittari, jota käytetään "hälytysväsymyksen" havaitsemiseen ja hallintaan: hyvin dokumentoitu taipumus, jossa kliinikot turtuvat hälytyksille, kun vähäarvoisten varoitusten määrä muuttuu ylivoimaiseksi.

## Miksi tämä on tärkeää

Julkaistut ohittamisasteet lääkeaineiden yhteisvaikutushälytyksille vaihtelevat yleisesti noin puolesta yli yhdeksäänkymmeneen prosenttiin, eikä korkea aste automaattisesti tarkoita turvallisuuspuutetta: monet keskeyttävät hälytykset laukeavat yhteisvaikutuksista, jotka ovat kliinisesti merkityksettömiä kontekstissaan, tai toistavat hälytyksen, johon kliinikko on jo reagoinut aiemmin samassa tilaussarjassa, joten hyvin viritetty järjestelmä laukaisee tarkoituksella vähemmän mutta arvokkaampia hälytyksiä sen sijaan, että pyrkisi viemään ohittamisasteen nollaan. Turvallisuuden kannalta todella tärkeää on trendi ajan myötä, jakauma vakavuusluokkien välillä, ja se, dokumentoivatko kliinikot syyn ohittaessaan korkean vakavuuden hälytyksen; nouseva ohittamisaste korkean vakavuuden, hyvin todistetuissa yhteisvaikutuksissa on aito hallinnollinen huolenaihe, vaikka keskiarvo kaikissa hälytyksissä näyttäisikin vakaalta.

## Miten se lasketaan

```
Ohittamisaste = ohitetut hälytykset / kaikki laukaistut hälytykset yhteensä × 100

Segmentoi seuraavien mukaan:
  - vakavuusluokka (esim. vasta-aiheinen, merkittävä, kohtalainen)
  - hälytystyyppi (lääkeaineiden yhteisvaikutus, allergia, päällekkäinen hoito, annosalue)
  - dokumentoitiinko ohittamiselle syy

"Dokumentoitu ohittamisaste" seuraa sitä osuutta ohituksista, joilla on
kirjattu perustelu, mikä on itsessään hallinnollinen mittari.
```

## Käytännön esimerkki

Sairaalan CPOE-järjestelmä laukaisee 10 000 lääkeaineiden yhteisvaikutushälytystä kuukaudessa, joista 8 700 ohitetaan, mikä antaa kokonaisohittamisasteeksi 87 %. Vakavuuden mukaan segmentointi osoittaa, että 500 "vasta-aiheisesta" hälytyksestä 60 ohitetaan (12 %), kun taas 6 000 "kohtalaisesta" hälytyksestä 5 700 ohitetaan (95 %). Kohtalaisen tason luku on laajasti yhdenmukainen julkaistujen vertailuarvojen kanssa eikä sinänsä ole huolenaihe; vasta-aiheisen tason luku vaatii yksittäisten tapausten tarkastelua, ja se, että vain 340 tämän tason 500 ohituksesta sisältää dokumentoidun syyn, on toiminnallisesti merkittävämpi hallinnollinen havainto.

## Tietolähteet ja varaukset

Sähköisen potilastietojärjestelmän tarkastusloki tai CDS-toimittajan oma hälytysmoduuli tallentaa jokaisen hälytyksen laukaisu- ja vastaustapahtuman, mukaan lukien sen, kirjasiko kliinikko vapaamuotoisen vai strukturoidun perustelun. Ohittamisasteiden vertailu organisaatioiden välillä, tai jopa saman organisaation osastojen välillä, edellyttää tarkistusta siitä, että taustalla olevat hälytyssääntöjoukot ja vakavuusluokitus ovat samat; sairaala, jolla on aggressiivisesti viritetty sääntöjoukko, näyttää alhaisemman ohittamisasteen syistä, joilla ei ole mitään tekemistä kliinikon käyttäytymisen kanssa.

## Sudenkuopat

- **Raakaa ohittamisastetta pidetään yhtenä turvallisuuspisteytyksenä**: se sekoittaa vähäarvoisten hälytysten hyvin perustellut ohitukset todella vaarallisten yhteisvaikutusten turvattomiin ohituksiin; segmentoi aina vakavuuden mukaan.
- **Ohittamisen syyn kirjaamisen puuttuminen**: ilman dokumentoitua syytä on mahdotonta erottaa "tämä hälytys oli väärä" ja "tämä hälytys oli oikea ja kliinikko teki turvattoman harkinnan", mikä on se todellinen erottelu, joka on merkittävä potilasturvallisuuden kannalta.
- **Hälytyssääntöjen inflaatio ajan myötä**: lisää hälytyksiä "varmuuden vuoksi" karsimatta vähäarvoisia on suora syy nouseville ohittamisasteille ja hälytysväsymykselle; hälytyshallintaan tulisi kuulua säännöllinen tarkastelu ja huonosti toimivien sääntöjen poistaminen, ei vain seuranta.
- **Asteiden vertailu järjestelmien välillä, joilla on erilainen keskeytyssuunnittelu**: keskeyttävä, täysin pysäyttävä hälytys tuottaa erilaisen ohittamiskäyttäytymisen kuin passiivinen, ei-estävä hälytys, joten nämä kaksi eivät ole suoraan vertailukelpoisia mittareita.

## Lähteet

- Vertaisarvioitu kirjallisuus kliinisen päätöksenteon tuen hälytysväsymyksestä, laajasti julkaistu lehdissä kuten JAMIA ja npj Digital Medicine
- ONC / HealthIT.gov, terveys-IT:n turvallisuusohjeistus kliinisestä päätöksenteon tuesta
- Institute for Safe Medication Practices (ISMP), ohjeistus CDS-hälytysten suunnittelusta ja hallinnasta
