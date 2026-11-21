# Lietotāju noturēšanas līmenis

Lietotāju noturēšanas līmenis ir to lietotāju īpatsvars, kuri bija aktīvi sākuma periodā un paliek aktīvi vēlākā periodā, un tā pretējais rādītājs, aizplūšanas (jeb atkrišanas) līmenis, ir to īpatsvars, kuri pārtrauc lietot produktu pavisam. Kamēr pacientu portāla pieņemšanas līmenis (skatiet šo tēmu) mēra, vai pacients jebkad jēgpilni aktivizē digitālās veselības produktu, noturēšana mēra, vai viņš turpina to lietot, un jebkuram abonēšanas tipa vai notiekošas aprūpes digitālās veselības produktam noturēšana parasti ir vienīgais rādītājs, kas visciešāk saistīts gan ar klīnisko ietekmi, gan komerciālo ilgtspēju.

## Kāpēc tas ir svarīgi

Digitālās veselības produkts, kas nespēj noturēt lietotājus, nevar sniegt ilgstošu klīnisko ieguvumu, lai cik spēcīgi būtu tā sākotnējie pieņemšanas vai aktivizēšanas skaitļi: hroniska stāvokļa pārvaldības rīks, ko lieto divas nedēļas un pēc tam atmet, diez vai mainīs biometrisko iznākumu, kas ir atkarīgs no vairākiem mēnešiem ilgstošām uzvedības izmaiņām. Noturēšana ir arī viens no komerciāli nozīmīgākajiem rādītājiem, ko digitālās veselības uzņēmums uzrāda investoriem un maksātājiem, jo noturēšanas līknes (atkrišanas forma laika gaitā, ne tikai viens noturēšanas procents) atklāj, vai produkts ir atradis patiesi ilgtspējīgu lietošanas modeli vai tikai uztver jaunuma virzītu sākotnējo interesi, kas paredzami izgaist. Noturēšanas līkne, kas pēc sākotnējā krituma izlīdzinās (pacienti, kas tiek pāri pirmajam mēnesim, mēdz palikt), ir ļoti atšķirīgs un daudz veselīgāks signāls nekā tāda, kas turpina pastāvīgi kristies bez grīdas.

## Kā to aprēķina

```
Noturēšanas līmenis (periods N) = lietotāji, kas aktīvi periodā N un bija aktīvi
                                  arī sākuma kohortas periodā / lietotāji
                                  sākuma kohortas periodā × 100

Aizplūšanas līmenis = 1 − noturēšanas līmenis (tam pašam periodam)

Uzrāda kā kohortas noturēšanas līkni (noturēšana 1., 2., 3. dienā/nedēļā/
mēnesī…), nevis vienu laika punkta skaitli, jo viens momentuzņēmums
sajauc nesen pievienojušos lietotājus (kuriem vēl nav bijis laika
aizplūst) ar ilgi lietojušiem.
```

## Aprēķina piemērs

Digitālās veselības lietotne janvārī iekļauj 1 000 jaunu lietotāju kohortu. Līdz 1. mēneša beigām 640 no šiem sākotnējiem 1 000 joprojām ir aktīvi (1. mēneša noturēšana 64 %). Līdz 3. mēneša beigām aktīvi paliek 410 (3. mēneša noturēšana 41 %). Līdz 6. mēnesim aktīvi paliek 380 (6. mēneša noturēšana 38 %). Šīs līknes forma, straujš sākotnējais kritums, kam seko izlīdzināšanās starp 3. un 6. mēnesi, liecina, ka produkts notur stabilu lietotāju kodolu, tiklīdz tie pārvar sākotnējo pieņemšanas šķērsli, un tas ir būtiski atšķirīgs un iepriecinošāks signāls, nekā ja kritums no 3. līdz 6. mēnesim būtu turpinājies tādā pašā tempā kā no 1. līdz 3. mēnesim.

## Datu avoti un ierobežojumi

Noturēšanu aprēķina no produkta paša pieteikšanās vai aktivitātes notikumu žurnāliem, definējot "aktīvs" konsekventi (piemēram, vismaz viena kvalificējoša sesija periodā) visās salīdzināmajās kohortās. Kohortas jāsalīdzina uz līdzīgiem pamatiem (tā pati sākotnējā "aktīvs" definīcija, tāds pats novērošanas loga garums), jo pat nelielas definīciju atšķirības (30 dienu pret 28 dienu mēnešiem vai stingrāks pret brīvāku "aktīvs" slieksni) var pārbīdīt uzrādīto noturēšanas procentu par vairākiem punktiem bez reālas atšķirības lietotāju uzvedībā. Sezonālie efekti ir bieži veselības lietotnēs, kas saistītas ar Jaungada apņemšanos vai īpašiem veselības izglītošanas periodiem, tāpēc kohortu salīdzinājums gads pret gadu parasti ir informatīvāks nekā blakus esošu kohortu salīdzināšana no dažādiem gada laikiem.

## Biežākās kļūdas

- **Viena noturēšanas momentuzņēmuma, nevis līknes uzrādīšana**: viens "X % lietotāju joprojām ir aktīvi" skaitlis bez atkrišanas formas laika gaitā nevar atšķirt produktu, kas izlīdzinās (veselīgi), no tāda, kas nepārtraukti krīt (neveselīgi).
- **"Aktīvs" definīcijas maiņa starp ziņošanas periodiem**: aktīva lietotāja definīcijas atvieglināšana (piemēram, pasīvas lietotnes atvēršanas skaitīšana pabeigtas darbības vietā) var likt noturēšanai šķist uzlabojušās, kad faktiskā lietošana nav mainījusies nemaz.
- **Kohortu sezonalitātes ignorēšana**: janvāra kohortas noturēšanas (bieži uzpūsta ar Jaungada apņemšanās iekļaušanu, kas vidēji ienes mazāk motivētu kohortu) salīdzināšana ar kohortu, kas iegūta citā gada laikā, var radīt maldinošus tendenču secinājumus.
- **Organisko un apmaksātās piesaistes kohortu sapludināšana**: lietotāji, kas iegūti ar dažādiem kanāliem, bieži noturas ļoti atšķirīgi; to sapludināšana vienā kopējā noturēšanas skaitlī var slēpt kanālam specifisku noturēšanas problēmu.

## Avoti

- Recenzēta literatūra par digitālās veselības lietotņu iesaisti un atkrišanu, piemēram, pētījumi, kas publicēti žurnālā Journal of Medical Internet Research (JMIR mHealth and uHealth)
- Digital Therapeutics Alliance, labākās prakses norādījumi par iesaistes un noturēšanas mērīšanu digitālajā terapijā
- Nozares etalonu ziņojumi par mobilās veselības lietotņu noturēšanu no analītikas platformām un digitālās veselības tirgus pētniecības organizācijām

Skatiet arī: [pacientu iesaistes regularitātes līmenis](../pacientu-iesaistes-regularitātes-līmenis/), kas mēra iesaistes kvalitāti starp noturētajiem lietotājiem, atšķirībā no tā, vai viņi vispār paliek iekļauti.
