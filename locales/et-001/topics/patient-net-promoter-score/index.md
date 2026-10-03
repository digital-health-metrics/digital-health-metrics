# Patsiendi Net Promoter Score

Patsiendi Net Promoter Score (NPS) on laialdaselt kasutatav ja laialdaselt kritiseeritud ühe küsimusega rahulolumõõdik, mis küsib patsientidelt, kui tõenäoliselt nad soovitaksid digitaalset terviseprodukti või -teenust sõbrale või kolleegile, skaalal 0 kuni 10. Vastused rühmitatakse halvustajateks (0-6), passiivseteks (7-8) ja soovitajateks (9-10), ning skoor arvutatakse kui soovitajate protsent miinus halvustajate protsent.

## Miks see on oluline

NPS on atraktiivne, kuna seda on lihtne manustada, patsientidel kiire vastata ning see annab ühe võrreldava arvu, mida saab jälgida aja jooksul ja võrrelda teiste organisatsioonide ja tööstusharudega. See annab laia, kergesti mõistetava pulsi üldise patsiendimeeleolu kohta, mis on kasulik suurte trendide avastamiseks ja suhtlemiseks juhtkonnaga, kes soovib ühte arvu keeruka armatuurlaua asemel. Kuid selle lihtsus on ka nõrkus: kuna see põhineb ühel hüpoteetilisel küsimusel tulevase käitumise kohta (soovitamine), mitte tegelikult kogetud kvaliteedil, ei korreleeru see alati usaldusväärselt kliiniliste tulemuste või isegi tegeliku jätkuva kasutusega, mis tähendab, et seda tuleks käsitleda ühe signaalina mitme seas, mitte ainsa mõõdupuuna toote edu kohta.

## Kuidas seda arvutatakse

```
Patsiendi NPS = (% soovitajaid [skoor 9-10] − % halvustajaid
                [skoor 0-6]) × 100

Tulemus on arv -100 ja +100 vahel, mitte protsent, ehkki seda
mõnikord ekslikult esitatakse protsendina.

Esitage alati koos:
  Vastamise määr = vastatud NPS-küsitlused / saadetud
                   NPS-küsitlused kokku × 100
```

## Läbitöötatud näide

Telemeditsiini programm saadab NPS-küsitluse 1000 patsiendile pärast nende konsultatsiooni, ning 400 vastab (vastamise määr 40%). Neist 400 vastusest on 220 soovitajad (55%), 120 passiivsed (30%) ja 60 halvustajad (15%), andes NPS-iks 55 − 15 = 40. See tundub olevat tugev skoor, kuid programmeeskond märkab, et 40%-line vastamise määr tähendab, et nad ei kuule 60%-lt patsientidest, ning järelkontrolli analüüs mittevastajate valimist telefoni teel paljastab veidi vähem positiivse meeleolu nende seas — meeldetuletus, et NPS mõõdab ainult nende meeleolu, kes valivad vastamise, mitte tingimata kogu patsiendipopulatsiooni.

## Andmeallikad ja hoiatused

NPS-andmed kogutakse tavaliselt lühikese küsitluse kaudu, mis saadetakse elektrooniliselt pärast suhtlust, ning vastamise määr on kriitiline, kuid sageli alaraporteeritud kontekstuaalne tegur — NPS, mis on arvutatud 10%-lisest vastamise määrast, on palju vähem usaldusväärne üldise patsiendipopulatsiooni meeleolu esindajana kui 60%-lisest vastamise määrast arvutatud. NPS-i ei tohiks kunagi kasutada ainsa tootmise edu mõõdupuuna, kuna see ei mõõda otseselt kliinilisi tulemusi, tegelikku jätkuvat kasutust ega konkreetseid kasutatavuseprobleeme, mis võivad rahulolematust põhjustada.

## Lõksud

- **NPS-i esitamine ilma vastamise määrata**: madalal vastamise määral põhinev skoor võib olla tugevalt moonutatud ning seda tuleks tõlgendada olulise ettevaatusega.
- **NPS-i käsitlemine protsendina**: NPS on arv -100 ja +100 vahel, mitte protsent, ning seda ei tohiks otse võrrelda protsendipõhiste mõõdikutega.
- **NPS-i kasutamine ainsa edu mõõdikuna**: NPS mõõdab hüpoteetilist soovitamise tõenäosust, mitte kliinilisi tulemusi ega tegelikku kasutuskäitumist; kombineerige teiste mõõdikutega täieliku pildi saamiseks.
- **NPS-i võrdlemine tööstusharude vahel ilma kontekstita**: patsientide ootused ja võrdlusalused tervishoius erinevad tarbijatehnoloogiast või jaekaubandusest; võrrelge ainult sobivate tervishoiu võrdlusalustega.

## Allikad

- Bain & Company, Net Promoter Score'i esialgne arendus ja metoodika
- Press Ganey ja sarnased tervishoiu patsiendikogemuse mõõtmise organisatsioonid, võrdlusandmed spetsiaalselt tervishoiu jaoks
- Eelretsenseeritud kirjandus, mis kritiseerib ja kontekstualiseerib NPS-i tervishoiu keskkonnas, näiteks uuringud, mis on avaldatud ajakirjas Journal of Medical Internet Research (JMIR)

Vaata ka: [System Usability Scale-skoor](../system-usability-scale-score/), seotud, kuid eraldiseisev patsiendi teatatud mõõdik, mis mõõdab konkreetset tarkvara kasutatavust, mitte üldist rahulolu ja lojaalsust.
