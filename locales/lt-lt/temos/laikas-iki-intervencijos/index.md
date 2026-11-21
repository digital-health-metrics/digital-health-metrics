# Laikas iki intervencijos

Laikas iki intervencijos – tai laikas nuo automatinio sveikatos įspėjimo sugeneravimo – pavyzdžiui, nuotolinės stebėsenos įrenginiui aptikus ribų neatitinkantį gyvybinį rodiklį arba skaitmeninio triažo priemonei pažymėjus blogėjančią paciento būklę – iki to, kai klinikinės komandos narys iš tikrųjų pradeda reaguoti. Tai proceso rodiklis, nustatantis, ar automatinė įspėjimų sistema įvykdo savo pagrindinį pažadą: pastebėti problemą anksčiau, nei tai būtų padaręs tradicinis suplanuotų patikrų ar paciento inicijuotų telefono skambučių modelis.

## Kodėl tai svarbu

Įspėjimų sistema, sugeneruojanti klinikiniu požiūriu teisingą įspėjimą, bet po kurio nesiima savalaikio atsako, iš tikrųjų nepagerino paciento saugos; visa nuotolinės stebėsenos ir automatinių įspėjimų vertės pasiūlymo esmė remiasi tuo, kad ciklas uždaromas greičiau nei alternatyvus, nestebimas kelias. Kadangi skirtingo sunkumo įspėjimai reikalauja skirtingo atsako skubumo, laiką iki intervencijos visada reikėtų pateikti pagal sunkumo lygį, o ne kaip vieną vidurkį, nes greitas vidurkis visuose įspėjimuose gali paslėpti pavojingai lėtą atsaką į nedidelį pačių sunkiausių skaičių. Šis rodiklis taip pat yra vienas aiškiausių, įtikinamiausių būdų parodyti automatinės stebėsenos programos vertę klinikinei vadovybei ir mokėtojams, nes jį galima tiesiogiai palyginti su tos pačios organizacijos ankstesniu, neautomatizuotu atsako laiku panašiam klinikiniam scenarijui.

## Kaip skaičiuojama

```
Laikas iki intervencijos = laiko žymė (klinikinis atsakas pradėtas) −
                            laiko žymė (įspėjimas sugeneruotas)

Pateikite medianą ir aukštą procentilį (pvz., 90-ąjį), skirstomą pagal
įspėjimo sunkumo lygį, o ne kaip vieną bendrą vidurkį.

„Klinikinis atsakas pradėtas“ turėtų būti apibrėžtas tiksliai ir
nuosekliai – pvz., gydytojas atidaro paciento įrašą ir imasi veiksmų,
arba dokumentuotas išeinančio kontakto bandymas – o ne vien įspėjimo
peržiūra ar patvirtinimas be jokio veiksmo.
```

## Skaičiavimo pavyzdys

Nuotolinės širdies stebėsenos programos įspėjimų sistema per mėnesį pažymi 200 aukšto sunkumo aritmijos įspėjimų. Mediana laiko nuo įspėjimo sugeneravimo iki gydytojo pradėto išeinančio kontakto yra 12 minučių, o 90-ojo procentilio laikas – 38 minutės. Istoriniai tos pačios populiacijos ankstesnio, nestebimo kelio duomenys (kai panašus įvykis paprastai išryškėtų tik kito suplanuoto vizito klinikoje ar kreipimosi į ligoninę metu) rodo mediano laiką iki bet kokio klinikinio atsako, matuojamą dienomis, o ne minutėmis. Būtent šis palyginimas – o ne 12 minučių skaičius atskirai – parodo stebėsenos programos klinikinę vertę; 90-ojo procentilio skaičius yra ne mažiau svarbus, nes jis nustato įspėjimų uodegą, kuriems pradėti veikti prireikė daugiau nei pusės valandos, ir reikalauja atskiros pagrindinių priežasčių analizės.

## Duomenų šaltiniai ir apribojimai

Įspėjimo sugeneravimo laiko žymės gaunamos iš pačios stebėsenos platformos įvykių žurnalo; klinikinio atsako laiko žymės paprastai gaunamos iš elektroninės sveikatos istorijos audito pėdsako arba pačios priežiūros komandos darbo eigos ar užduočių valdymo sistemos, ir šios dvi sistemos turi būti tiksliai laiko požiūriu sinchronizuotos, kad apskaičiuotas intervalas būtų patikimas. „Atsakas pradėtas“ reikalauja griežtos, dokumentuotos apibrėžties, nes gydytojas, tiesiog peržiūrintis ar atmetantis įspėjimą be tolesnio veiksmo, yra iš esmės kitoks ir daug mažiau raminantis įvykis nei sukeliantis tikrą išeinantį kontaktą ar intervenciją – jų sujungimas leis atsako laikui atrodyti geriau nei klinikinė tikrovė. Naktinio ir savaitgalio personalo lygiai paprastai gerokai veikia laiką iki intervencijos, todėl šį rodiklį reikėtų pateikti pagal paros laiko ir savaitės dienos segmentą, kai leidžia įspėjimų apimtis, o ne tik kaip 24/7 bendrą vidurkį, galintį paslėpti rimtą atsako spragą ne darbo valandomis.

## Dažniausios klaidos

- **Įspėjimo patvirtinimo skaičiavimas kaip atsako**: gydytojo įspėjimo peržiūra ar atmetimas nėra tas pats kas klinikinio atsako pradėjimas; apibrėžkite atsaką griežtai kaip dokumentuotą veiksmą, o ne pasyvų patvirtinimą.
- **Vieno bendro laiko pateikimas visiems sunkumo lygiams**: greitas vidurkis, apimantis tiek mažo, tiek didelio sunkumo įspėjimus, gali paslėpti pavojingai lėtą atsako laiką būtent aukščiausio sunkumo įspėjimams, kurie svarbiausi.
- **Personalo grafiko poveikių ignoravimas**: atsako laikas dažnai gerokai skiriasi pagal paros laiką ir savaitės dieną dėl personalo lygių; vienas bendras vidurkis gali paslėpti sisteminę atsako spragą ne darbo valandomis ar savaitgaliais.
- **Laiko iki intervencijos lyginimas tarp organizacijų su skirtingais įspėjimų slenksčiais**: organizacija su konservatyvesniu (jautresniu) įspėjimo slenksčiu generuos daugiau mažo skubumo įspėjimų, o tai gali atskiesti jos vidutinį atsako laiką, palyginti su organizacija, naudojančia griežtesnį slenkstį, nepriklausomai nuo tikrojo klinikinio reagavimo.

## Šaltiniai

- NHS England, rekomendacijos dėl nuotolinės stebėsenos ir virtualių skyrių klinikinio atsako standartų
- ONC / HealthIT.gov, rekomendacijos dėl klinikinių įspėjimų sistemų projektavimo ir saugos
- Recenzuojama literatūra apie nuotolinės pacientų stebėsenos įspėjimų atsako laiką ir klinikinius rezultatus, pavyzdžiui, tyrimai, paskelbti npj Digital Medicine

Taip pat žr. [įrenginių veikimo laiko dalis](../irenginiu-veikimo-laiko-dalis/), nes patikimas laiko iki intervencijos skaičius priklauso nuo to, ar pagrindinis stebėsenos įrenginys apskritai yra prisijungęs, kad sugeneruotų įspėjimą.
