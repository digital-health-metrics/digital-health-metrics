# Pacientu portāla pieņemšanas līmenis

Pacientu portāla pieņemšanas līmenis mēra to atbilstīgo pacientu īpatsvaru, kuri ir reģistrējušies un aktīvi lieto tiešsaistes pacientu portālu (piemēram, NHS App, Patient Access vai ar elektronisko veselības karti saistītu portālu, piemēram, MyChart), lai skatītu ierakstus, pierakstītos vizītēm vai sazinātos ar savu aprūpes komandu. Tas ir ievada līmeņa digitālās iesaistes rādītājs: pacients, kurš nekad nav aktivizējis kontu, nevar gūt labumu no neviena turpmāka portālam balstīta digitālā pakalpojuma.

## Kāpēc tas ir svarīgi

Portāls rada vērtību tikai tad, kad pacients to lieto, tāpēc organizācijām pieņemšana jāseko kā piltuve, nevis kā viens skaitlis: reģistrācija, aktivizēšana (pirmā jēgpilnā darbība) un aktīva lietošana (lietošana pēdējā laika logā) ir trīs dažādi līmeņi, kas tiek sajaukti daudz par bieži. Digitālo pakalpojumu komandām bieži ir spiediens uzrādīt vienu, labvēlīgu virsraksta skaitli, un nepieciešama disciplīna, lai pieprasītu grūtāku, godīgāku sadalījumu. Zema vai nevienmērīgi sadalīta pieņemšana ir arī vienlīdzības signāls: pacienti, kas ir vecāki, ar zemāku digitālo pratību, nerunā vairākuma valodā vai kuriem trūkst uzticamas platjoslas vai viedtālruņa, sistemātiski mazāk iekļūst skaitītājā, tāpēc augošs vidējais pieņemšanas līmenis var slēpt augošu plaisu tiem pacientiem, kam bieži visvairāk nepieciešams kontakts ar pakalpojumiem.

## Kā to aprēķina

Uzrāda visus trīs posmus, ne tikai reģistrāciju, un vienmēr skaidri norāda saucēju:

```
Reģistrācijas līmenis = pacienti ar izveidotu portāla kontu / atbilstīgā pacientu populācija × 100
Aktivizēšanas līmenis = pacienti, kuri veica pirmo jēgpilno darbību (apskatīja rezultātu,
                        pierakstījās, nosūtīja ziņu) / pacienti ar kontu × 100
Aktīvās lietošanas līmenis = pacienti, kuri pēdējos 12 mēnešos pieteicās vismaz vienu reizi /
                        atbilstīgā pacientu populācija × 100
```

Atbilstīgo pacientu populāciju parasti definē kā pacientus ar vismaz vienu saskarsmi ar organizāciju noteiktā atpakaļskata periodā (parasti 24 mēneši), kuri ir tāda vecuma un piekrišanas statusā, kas ļauj turēt savu kontu.

## Aprēķina piemērs

Primārās aprūpes tīkls apkalpo 50 000 pacientu, kas atbilst atbilstības definīcijai. No tiem 32 000 ir reģistrējušies portālā (reģistrācijas līmenis 64 %). No 32 000 reģistrācijām 27 000 ir veikušas vismaz vienu jēgpilnu darbību, piemēram, apskatījušas analīžu rezultātu (aktivizēšanas līmenis 84 % no reģistrētajiem). Pēdējos 12 mēnešos 21 000 no sākotnējiem 50 000 atbilstīgajiem pacientiem pieteicās vismaz vienu reizi (aktīvās lietošanas līmenis 42 %). Tikai 64 % reģistrācijas rādītāja uzrādīšana ievērojami pārvērtētu reālo iesaisti; 42 % aktīvās lietošanas rādītājs ir skaitlis, kam jāvada portāla programmas resursu lēmumi.

## Datu avoti un ierobežojumi

Portāla analītika parasti nāk no paša piegādātāja platformas (pieteikšanās notikumi, funkciju izmantošana) vai no pamatā esošās elektroniskās veselības kartes audita žurnāla, un organizācijām jābūt skeptiskām pret piegādātāju informācijas paneļiem, kas atklāj tikai reģistrāciju skaitu. Starpniecības piekļuve (vecāks vai aprūpētājs, kas pārvalda kontu pacienta vārdā) jāatzīmē un jāuzrāda atsevišķi, jo tā maina to, kas faktiski ir "lietotājs". Saucēja izvēlei ir milzīga nozīme: skaitīšana pret visu reģistrēto pacientu sarakstu, nevis patiesi atbilstīgu, sazināmu populāciju, vienmēr nenovērtēs pieņemšanu, savukārt skaitīšana tikai pret pacientiem, kas tika aktīvi uzaicināti, vienmēr to pārvērtēs, tāpēc atbilstības definīcija jānosaka un jāpublicē līdzās katram uzrādītajam līmenim.

## Biežākās kļūdas

- **Reģistrācijas skaitīšana kā pieņemšana**: izveidots, bet nekad nelietots konts ir gandrīz bez vērtības; uzrādiet aktivizēšanu un aktīvu lietošanu līdzās reģistrācijai, nevis tās vietā.
- **Digitālās atstumtības ignorēšana**: kopējie pieņemšanas skaitļi var pieaugt, kamēr plaisa starp visvairāk un vismazāk digitāli iekļautajām grupām paplašinās; vienmēr sadaliet pēc vecuma, nenodrošinātības, valodas un invaliditātes, ja datu pārvaldība to atļauj.
- **Organizāciju ar atšķirīgām atbilstības definīcijām salīdzināšana**: portāla programma, kas uzaicina tikai pacientus ar ierakstītu e-pasta adresi, uzrādīs augstāku līmeni nekā tā, kas mēra pret visu reģistrēto sarakstu, bez reālas atšķirības darbībā.
- **Vienreizējas pieteikšanās uzskatīšana par notiekošu iesaisti**: 12 mēnešu atpakaļskata logs ir ierasts, taču īsāks logs (piemēram, 90 dienas) dod agrāku brīdinājumu par krītošu lietošanu.

## Avoti

- NHS England, NHS App lietošanas un reģistrācijas statistika (nhs.uk / digital.nhs.uk publikācijas)
- ONC / HealthIT.gov, Promoting Interoperability Program rādītāji, tostarp View, Download, Transmit (VDT) pacientu piekļuves rādītāji
- Recenzēta literatūra par pacientu portāla pieņemšanu un digitālās veselības atšķirībām, piemēram, pētījumi, kas publicēti Journal of the American Medical Informatics Association (JAMIA)

Skatiet arī: [pieraksta neierašanās līmenis](../pieraksta-neierašanās-līmenis/), ko portāla pieraksts un atgādinājumi tieši ietekmē.
