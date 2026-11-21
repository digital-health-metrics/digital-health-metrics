# Biometrisko rādītāju uzlabošanās līmenis

Biometrisko rādītāju uzlabošanās līmenis ir to digitālās veselības programmā iekļauto pacientu īpatsvars, kuriem noteiktā iekļaušanas periodā ir klīniski nozīmīgs uzlabojums uzraudzītā biometriskajā rādītājā, visbiežāk glikozilētajā hemoglobīnā (HbA1c) diabēta un kardiometabolisko slimību programmās vai ķermeņa masas indeksā (ĶMI) svara pārvaldības programmās. Tas ir iznākuma rādītājs, kas galu galā pamato digitālās veselības produkta klīniskos apgalvojumus: iesaistes un pieņemšanas skaitļi raksturo, kā produkts tiek lietots, taču biometriskais uzlabojums ir tuvāk pierādījumam, ka tas darbojas.

## Kāpēc tas ir svarīgi

Digitālās veselības programmas bieži tiek pārdotas un pasūtītas, solot uzlabot veselības iznākumus, un biometrisko rādītāju uzlabošanās līmenis ir tiešākais, kvantificējamais veids, kā pārbaudīt šo solījumu pret konkrētu, klīniski atzītu slieksni, nevis neskaidru apgalvojumu par "labāku veselību". Maksātāji, darba devēji un veselības sistēmas arvien biežāk sasaista atlīdzību vai līguma atjaunošanu ar pierādītām biometriskām izmaiņām, tāpēc programma, kas nespēj ticami uzrādīt šo rādītāju, ir neizdevīgākā situācijā gan komerciāli, gan klīniski. Šis rādītājs ir arī programmas dizaina disciplīnas pārbaude: daudz vieglāk ir uzrādīt iesaisti (pieteikšanās reizes, nosūtītās ziņas) nekā iznākumus, un komandai jābūt piesardzīgai pret jebkuru programmu, kas par pirmo ziņo entuziastiski, bet par otro izsakās neskaidri.

## Kā to aprēķina

```
Biometrisko rādītāju uzlabošanās līmenis = pacienti, kuri sasnieguši noteiktu
                              klīniski nozīmīgu uzlabojumu / pacienti ar derīgu
                              sākotnējo un novērošanas mērījumu × 100

Biežākie klīniski nozīmīgie sliekšņi:
  HbA1c   — pazeminājums par ≥ 0,5 procentpunktiem vai noteikta mērķa
            sasniegšana (piem., < 7,0 %), sākot no vērtības ārpus normas
  ĶMI     — ķermeņa masas samazinājums par ≥ 5 % no sākotnējās masas,
            saglabāts līdz novērošanas mērījuma brīdim

Uzrāda atsevišķi katram uzraudzītajam biometriskajam rādītājam; HbA1c un
ĶMI uzlabojumu nekad nesapludina vienā kopīgā "uzlabošanās" procentā.
```

## Aprēķina piemērs

Kardiometabolisko slimību digitālās veselības programmā iekļauti 800 pacienti ar sākotnējo HbA1c ārpus normas. No tiem 620 ir gan derīgs sākotnējais, gan novērošanas mērījums 6 mēnešu laikā (180 zaudēti no novērošanas un izslēgti no saucēja, nevis ieskaitīti kā neveiksmes). No 620 pacientiem ar pāra mērījumiem 340 sasniedz pazeminājumu vismaz par 0,5 procentpunktiem. Biometrisko rādītāju uzlabošanās līmenis ir 340 / 620 × 100 = 55 %. Šī rādītāja uzrādīšana pret visiem 800 iekļautajiem (340 / 800 = 42,5 %) sajauktu novērošanas zudumu ar ārstēšanas neveiksmi un nenovērtētu rādītāju pacientiem, kuri mērījumus faktiski pabeidza.

## Datu avoti un ierobežojumi

Sākotnējās un novērošanas biometriskās vērtības parasti nāk no pieslēgtas ierīces (Bluetooth glikometra vai viedsvariem), no elektroniskās veselības kartes importēta laboratorijas rezultāta vai paša pacienta ievadītas pašziņotas vērtības, un šo trīs avotu ticamība ir ļoti atšķirīga, tāpēc avots jānorāda līdzās rādītājam. Novērošanas zudums reti ir nejaušs: pacienti, kas pārtrauc dalību programmā, bieži ir tieši tie, kuriem uzlabojums ir mazāk iespējams, tāpēc augsts uzlabošanās līmenis, kas aprēķināts tikai pacientiem, kuri pabeiguši novērošanu, var pārvērtēt programmas patieso ietekmi iedzīvotāju līmenī. Gan HbA1c, gan svaram ir reālas sezonālas izmaiņas un regresija uz vidējo, tāpēc programmai, ja vien iespējams, jāsalīdzina ar vienlaicīgu vai vēsturisku kontroles grupu, nevis jāuzskata jebkurš uzlabojums par pierādījumu programmas ietekmei.

## Biežākās kļūdas

- **Novērošanas zuduma izslēgšana, nevis uzrādīšana**: pacientu bez novērošanas mērījuma kluss izņemšana no saucēja var būtiski uzpūst šķietamo uzlabošanās līmeni; līdzās pašam uzlabošanās līmenim vienmēr uzrādiet novērošanas mērījuma pabeigšanas līmeni.
- **Pašziņotu un ierīču mērījumu sajaukšana bez marķējuma**: pašziņota svara vērtība ir sistemātiski mazāk ticama nekā pieslēgtu viedsvaru rādījums, un abu avotu sajaukšana neļauj saprast, cik liela daļa šķietamā uzlabojuma ir mērījumu troksnis.
- **Nav kontroles vai kontrafaktiskā scenārija**: daudzi hroniskie biometriskie rādītāji svārstās vai paši atgriežas pie vidējā; viena grupas uzlabošanās līmenis bez jebkādas salīdzinājuma grupas ir norāde, nevis pārliecinošs pierādījums programmas ietekmei.
- **Neliela vidējā nobīde kā plaša uzlabojuma pierādījums**: neliels iedzīvotāju līmeņa vidējais uzlabojums var būt radies dažu izteikti atsaucīgu pacientu dēļ, kamēr lielākajai daļai pacientu izmaiņu nav; uzrādiet sadalījumu (piemēram, to pacientu īpatsvaru, kuri pārsnieguši klīniski nozīmīgo slieksni), ne tikai vidējo nobīdi.

## Avoti

- American Diabetes Association (ADA), Standards of Care in Diabetes, HbA1c mērķa un klīniski nozīmīgu izmaiņu norādījumi
- Centers for Disease Control and Prevention (CDC), Division of Diabetes Translation, programmu novērtēšanas vadlīnijas
- Recenzēta literatūra par digitālo diabēta un svara pārvaldības programmu iznākumiem, piemēram, pētījumi, kas publicēti npj Digital Medicine un Diabetes Care

Skatiet arī: [zāļu lietošanas ievērošanas līmenis](../zāļu-lietošanas-ievērošanas-līmenis/), biežs biometriskā uzlabojuma cēlonis hronisko slimību programmās.
