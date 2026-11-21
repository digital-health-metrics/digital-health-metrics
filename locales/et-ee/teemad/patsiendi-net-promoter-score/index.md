# Patsiendi Net Promoter Score

Patsiendi Net Promoter Score (NPS) mõõdab patsientide valmisolekut soovitada digitaaltervise toodet või telemeditsiini teenust teistele ühe küsitlusküsimuse põhjal – "Kui tõenäoliselt soovitaksite seda teenust sõbrale või kolleegile?" –, mida hinnatakse skaalal 0 kuni 10. Vastajad, kes annavad hinde 9–10, on "soovitajad", 7–8 on "neutraalsed" ja 0–6 on "kriitikud"; NPS on soovitajate protsent miinus kriitikute protsent. See on digitaaltervises kõige laialdasemalt kasutatav ja kõige laialdasemalt kritiseeritud patsiendirahulolu mõõdik, mida hinnatakse lihtsuse eest, kuid mille diagnostiline võimekus on iseseisvalt piiratud.

## Miks see on oluline

NPS annab digitaaltervise meeskondadele lihtsa, standardiseeritud ja ristvõrreldava rahulolusignaali, mida on odav koguda ja mida on mittespetsialistidest huvirühmadel (juhid, nõukogud, tellijad) lihtne ühe pilguga tõlgendada, mistõttu see jääb populaarseks hoolimata hästi dokumenteeritud metoodilistest piirangutest. Eelkõige telemeditsiini ja digitaalse esimese kontakti toodete puhul on NPS sageli eelnäitaja selle kohta, kas patsiendid jätkavad digitaalse kanali valimist silmast silma alternatiivi asemel, kui mõlemad on saadaval, millel on otsene mõju kanalite segu ja mahutavuse planeerimisele. NPS on aga üksainus kõrgetasemeline kokkuvõttev arv: langev NPS ütleb meeskonnale, et midagi on valesti, kuid mitte mis, mistõttu tuleks seda alati siduda vabatekstilise tagasiside või üksikasjalikuma kasutatavuse instrumendiga, et see oleks rakendatav, mitte pelgalt tulemuskaardi number.

## Kuidas seda arvutatakse

```
NPS = % soovitajaid (hinne 9–10) − % kriitikuid (hinne 0–6)

Tulemus on arv vahemikus −100 kuni +100, mitte protsent, hoolimata
sellest, et see on tuletatud protsentidest – ärge lisage kunagi NPS-i
näitajale "%" märki.

Esitage koos:
  vastamismääraga (küsitletud patsientidest vastanute %)
  valimi suurusega
  kasutatud küsimuse täpse sõnastusega
```

## Läbitöötatud näide

Telemeditsiini platvorm küsitleb pärast videokonsultatsiooni 1 000 patsienti ja saab 400 vastust (vastamismäär 40%). Nendest 400 vastajast annab 220 hinde 9–10 (soovitajad, 55%), 100 annab hinde 7–8 (neutraalsed, 25%) ja 80 annab hinde 0–6 (kriitikud, 20%). NPS on 55 − 20 = 35. See näitaja tähendab midagi ainult kontekstis: NPS 35 võib olla tugev tulemus võrreldes laiema telemeditsiinitööstusega või murettekitav langus võrreldes sama platvormi enda eelmise kvartali skooriga 48 – NPS on palju kasulikum ühe toote ajas muutuva trendina kui absoluutse ühekordse võrdlusalusena teise toote suhtes.

## Andmeallikad ja hoiatused

NPS kogutakse pärast interaktsiooni tehtava küsitluse kaudu, mis käivitatakse tavaliselt vahetult pärast videovisiiti, rakenduse seanssi või ravijuhtumit, ning vastamismäär on äärmiselt oluline: madal vastamismäär (märgatavalt alla läbitöötatud näites nähtud ~40%) riskib vastamata jätmise nihkega, kus vastamisega vaevuvad ainult tugevalt rahulolevad või tugevalt rahulolematud patsiendid, mis tõmbab skoori äärmustesse ja eemale populatsiooni tegelikust meeleolust. NPS-i võrdlemine organisatsioonide vahel või isegi ühe organisatsiooni erinevate kanalite vahel (näiteks telemeditsiin versus silmast silma) on kehtiv ainult siis, kui küsimuse sõnastus, ajastus ja küsitletav populatsioon on tõepoolest võrreldavad; väikeste sõnastusmuutuste teadaolevalt mõõdetavalt skoore nihutavad. NPS-i tuleks käsitleda selgitamist vajava tulemusena, mitte eesmärgina omaette – vabatekstilised kommentaarid, mis NPS-küsitlust tavaliselt saadavad, on tavaliselt rakendatavamad kui skoor ise.

## Lõksud

- **Erineva küsimuse sõnastuse või ajastusega kogutud NPS-i näitajate võrdlemine**: isegi väikesed erinevused küsitluse kujunduses võivad skoore nihutada mitme punkti võrra, muutes organisatsioonidevahelise NPS-i võrdlusanalüüsi palju vähem usaldusväärseks, kui see paistab.
- **Vastamismäära tähelepanuta jätmine**: 10% vastamismäärast arvutatud pealkirja-NPS on palju vähem usaldusväärne kui 60% vastamismäärast arvutatud, kuna madalad vastamismäärad on kalduvad vastamata jätmise nihkele kõige äärmuslikumate arvamuste suunas.
- **NPS-i käsitlemine diagnostilise tööriistana, mitte kokkuvõtliku mõõdikuna**: langev NPS ütleb, et midagi on valesti, kuid ei ütle kunagi mis; seda tuleks alati siduda kvalitatiivse tagasiside või üksikasjalikuma rahulolu või kasutatavuse instrumendiga, et põhjus tuvastada.
- **NPS-i taga ajamine omaette sihtmärgina**: NPS-i numbri kitsas optimeerimine (näiteks küsitledes patsiente ainult ebatavaliselt positiivsete interaktsioonide järel) võib parandada esitatud skoori, kuid jätta aluseks oleva patsiendikogemuse sama heaks või isegi aktiivselt halvemaks.

## Allikad

- Bain & Company, algne Net Promoter Systemi metoodika ja võrdlusanalüüsi juhised
- Agency for Healthcare Research and Quality (AHRQ), CAHPS (Consumer Assessment of Healthcare Providers and Systems) patsiendikogemuse küsitlusprogramm kui täiendav, üksikasjalikum alternatiiv
- Eelretsenseeritud kirjandus Net Promoter Score'i kasutamise ja piirangute kohta tervishoiuasutustes, näiteks ajakirjas Journal of Medical Internet Research (JMIR) avaldatud uuringud

Vaata ka: [kasutajate püsimuse määr](../kasutajate-püsimuse-määr/), kuna patsiendi esitatud rahulolu ja toote tegelik jätkuv kasutamine lähevad sageli lahku ning väärivad eraldi signaalidena jälgimist.
