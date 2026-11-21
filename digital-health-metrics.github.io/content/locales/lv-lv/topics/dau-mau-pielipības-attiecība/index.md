# DAU/MAU pielipības attiecība

DAU/MAU pielipības attiecība salīdzina ikdienas aktīvos lietotājus (DAU) ar ikmēneša aktīvajiem lietotājiem (MAU); tas pats pamatprincips tiek izmantots arī iknedēļas aktīvajiem lietotājiem (WAU) pret MAU. Tā izsaka, kāda daļa no produkta plašākās lietotāju bāzes ar to mijiedarbojas jebkurā dotajā dienā. Tas ir standarta produktu analītikas iesaistes intensitātes mērs, kas atšķiras gan no tā, vai lietotājs vispār tiek noturēts (skatiet lietotāju noturēšanas līmeni), gan no tā, cik konsekventi viens konkrēts iekļautais pacients iesaistās laika gaitā (skatiet pacientu iesaistes regularitātes līmeni): pielipība raksturo iedzīvotāju līmeņa lietošanas ritmu, nevis kāda atsevišķa cilvēka modeli.

## Kāpēc tas ir svarīgi

Divi digitālās veselības produkti var uzrādīt identisku ikmēneša aktīvo lietotāju skaitu, bet ļoti atšķirīgu pamatā esošo iesaistes intensitāti: vienā lielākā daļa šo lietotāju atver lietotni gandrīz katru dienu, bet otrā lielākā daļa to atver vienu reizi mēnesī tieši pirms brīža, kad citādi tiktu uzskatīti par neaktīviem. DAU/MAU pielipības attiecība šīs divas ļoti atšķirīgās situācijas atšķir ar vienu, vienkāršu, labi saprotamu etalona skaitli, ko produktu un klīniskās komandas var sekot laika gaitā un salīdzināt ar zināmiem nozares diapazoniem: aptuveni 20 % attiecība ir plaši citēts saprātīgs etalons daudzām patērētāju lietotnēm, savukārt ikdienas ieraduma produkti (ēdiena vai simptomu dienasgrāmata, ko no pacienta gaida lietot katru dienu) jāvērtē pret būtiski augstāku latiņu. Tā kā pielipība ir jutīga pret to, kā definēts "aktīvs", tā visnoderīgākā ir kā viena produkta tendence laika gaitā un kā salīdzinājums ar produktiem, kas veidoti līdzīgam lietošanas modelim, nevis kā absolūts starpnozaru etalons.

## Kā to aprēķina

```
DAU/MAU pielipības attiecība = vidējais ikdienas aktīvo lietotāju skaits periodā /
                               ikmēneša aktīvo lietotāju skaits tajā pašā periodā × 100

WAU/MAU attiecība (iknedēļas, tas pats princips) ir maigāks variants,
piemērotāks produktiem, ko paredzēts lietot dažas reizes nedēļā,
nevis katru dienu.

"Aktīvs" jādefinē precīzi un konsekventi (piem., pabeigta
kvalificējoša darbība, nevis pasīva lietotnes atvēršana) gan
skaitītājā, gan saucējā.
```

## Aprēķina piemērs

Digitālai diabēta pārvaldības lietotnei konkrētā mēnesī ir 10 000 ikmēneša aktīvo lietotāju, definējot kā jebkuru lietotāju, kurš šajā mēnesī veicis vismaz vienu kvalificējošu darbību (glikozes ierakstu, ēdienreizes ierakstu vai zāļu lietošanas atzīmi). Vidēji ņemot ikdienas aktīvo lietotāju skaitu 30 dienās šajā mēnesī, vidējais DAU ir 2 200. DAU/MAU pielipības attiecība ir 2 200 / 10 000 × 100 = 22 %, kas norāda, ka tipiskā dienā aptuveni 22 % lietotnes ikmēneša lietotāju bāzes ar to mijiedarbojas, un tas ir saprātīgs rādītājs ikdienas ieraduma hroniska stāvokļa rīkam, lai gan produktu komanda vēlētos redzēt, ka tas laika gaitā pieaug, jo ideālā uzvedība (ikdienas ierakstīšana) kļūst par iekļauto pacientu ieradumu.

## Datu avoti un ierobežojumi

DAU, WAU un MAU visi tiek aprēķināti no tiem pašiem pamatā esošajiem notikumu žurnāliem, izmantojot vienu konsekventu "kvalificējoša aktīva" notikuma definīciju visos logos; šīs definīcijas maiņa starp skaitītāja un saucēja aprēķiniem (piemēram, jebkura lietotnes atvēršana tiek skaitīta DAU, bet MAU tikai pabeigta darbība) radīs izkropļotu attiecību, kas neatspoguļo patieso iesaistes intensitāti. Atbilstošais pielipības etalons lielā mērā ir atkarīgs no produkta paredzētā lietošanas modeļa: rīkam, kas paredzēts lietošanai reizi nedēļā (iknedēļas simptomu pārbaude), būs un tam jābūt zemākai DAU/MAU attiecībai nekā rīkam, kas paredzēts ikdienas lietošanai (nepārtrauktas glikozes uzraudzības pavadošā lietotne), tāpēc pielipība vienmēr jāinterpretē attiecībā pret paša produkta paredzēto lietošanas ritmu, nevis vienu universālu mērķi.

## Biežākās kļūdas

- **Pielipības attiecību salīdzināšana starp produktiem ar atšķirīgu paredzēto lietošanas biežumu**: iknedēļas lietošanas rīks strukturāli uzrādīs zemāku DAU/MAU attiecību nekā ikdienas lietošanas rīks, pat ja abi darbojas tieši tā, kā paredzēts savam lietošanas gadījumam; salīdziniet ar paša produkta paredzēto ritmu, nevis vienu universālu mērķi.
- **Nekonsekventu aktivitātes definīciju izmantošana skaitītājā un saucējā**: tas var radīt pielipības attiecību, kas neatspoguļo patiesu iesaistes intensitāti un ko nevar jēgpilni salīdzināt laika gaitā vai ar citiem produktiem.
- **Augošas pielipības attiecības uzskatīšana par viennozīmīgi pozitīvu, nepārbaudot kopējo MAU tendenci**: augoša attiecība, ko izraisījusi saraujoša, ieradumiem pieķērusies kodola lietotāju bāze, kamēr kopējais MAU samazinās, ir ļoti atšķirīga un satraucošāka situācija nekā tāda, ko izraisījusi patiesi pieaugoša ikdienas iesaiste stabilā vai augošā lietotāju bāzē.
- **Nedēļas dienas un sezonas efektu ignorēšana DAU**: daudziem veselības produktiem DAU var būtiski atšķirties atkarībā no nedēļas dienas (darbdiena pret nedēļas nogali) vai sezonas; izmantojiet vidējo DAU periodā, kas aptver pilnu dabisko ciklu, nevis īsu logu, ko var izkropļot.

## Avoti

- Recenzēta un nozares literatūra par mobilo un digitālo produktu iesaistes rādītājiem, plaši izmantoti etalonu ietvari no mobilās analītikas platformām
- Digital Therapeutics Alliance, labākās prakses norādījumi par iesaistes mērīšanu digitālajā terapijā
- Recenzēta literatūra par digitālās veselības iesaistes mērīšanu, piemēram, pētījumi, kas publicēti žurnālā Journal of Medical Internet Research (JMIR mHealth and uHealth)

Skatiet arī: [lietotāju noturēšanas līmenis](../lietotāju-noturēšanas-līmenis/) un [pacientu iesaistes regularitātes līmenis](../pacientu-iesaistes-regularitātes-līmenis/), divi saistītie iesaistes rādītāji, ar kuriem šo attiecību visbiežāk sajauc.
