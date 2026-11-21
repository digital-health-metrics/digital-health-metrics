# Biometrinių rodiklių pagerėjimo dalis

Biometrinių rodiklių pagerėjimo dalis – tai skaitmeninės sveikatos programoje dalyvaujančių pacientų, per apibrėžtą dalyvavimo laikotarpį pasiekusių klinikiniu požiūriu reikšmingą stebimo biometrinio rodiklio pagerėjimą, dalis. Dažniausiai stebimi rodikliai yra glikuotas hemoglobinas (HbA1c) diabeto ir kardiometabolinėse programose arba kūno masės indeksas (KMI) svorio valdymo programose. Tai rezultatų rodiklis, galiausiai pagrindžiantis skaitmeninės sveikatos produkto klinikinius teiginius: įtraukimo ir pritaikymo skaičiai aprašo, kaip produktas naudojamas, o biometrinių rodiklių pagerėjimas yra artimesnis įrodymui, kad jis veikia.

## Kodėl tai svarbu

Skaitmeninės sveikatos programos dažnai parduodamos ir užsakomos žadant geresnius sveikatos rezultatus, o biometrinių rodiklių pagerėjimo dalis yra tiesiausias kiekybinis būdas patikrinti šį pažadą pagal konkretų, klinikiniu požiūriu pripažintą slenkstį, o ne pagal neapibrėžtą „geresnės sveikatos“ teiginį. Mokėtojai, darbdaviai ir sveikatos sistemos vis dažniau susieja kompensavimą ar sutarties pratęsimą su įrodytu biometriniu pokyčiu, todėl programa, negalinti patikimai pateikti šio rodiklio, atsiduria nepalankioje tiek komercinėje, tiek klinikinėje padėtyje. Šis rodiklis taip pat yra programos projektavimo drausmės patikra: pranešti apie įtraukimą (prisijungimus, išsiųstas žinutes) kur kas lengviau nei apie rezultatus, todėl komanda turėtų būti nepatikli programai, kuri entuziastingai pateikia pirmuosius, bet neaiškiai kalba apie antruosius.

## Kaip skaičiuojama

```
Biometrinių rodiklių pagerėjimo dalis = pacientai, pasiekę apibrėžtą
                              klinikiniu požiūriu reikšmingą pagerėjimą /
                              pacientai, turintys tinkamą pradinį ir
                              tolesnio stebėjimo matavimą × 100

Dažni klinikiniu požiūriu reikšmingi slenksčiai:
  HbA1c   – sumažėjimas ≥ 0,5 procentinio punkto arba apibrėžto
            tikslo pasiekimas (pvz., < 7,0 %) nuo ribų neatitinkančio
            pradinio lygio
  KMI     – pradinio kūno svorio sumažėjimas ≥ 5 %, išlaikytas iki
            tolesnio stebėjimo matavimo taško

Pateikite atskirai kiekvienam stebimam biometriniam rodikliui; niekada
nesujunkite HbA1c ir KMI pagerėjimo į vieną bendrą „pagerėjimo“ procentą.
```

## Skaičiavimo pavyzdys

Kardiometabolinė skaitmeninės sveikatos programa įtraukia 800 pacientų, kurių pradinis HbA1c neatitinka ribų. Iš jų 620 turi ir tinkamą pradinį, ir tolesnio stebėjimo matavimą po 6 mėnesių (180 prarasta stebėjimo metu ir neįtraukta į vardiklį, o ne laikoma nesėkmėmis). Iš 620 pacientų su suporuotais matavimais 340 pasiekia bent 0,5 procentinio punkto sumažėjimą. Biometrinių rodiklių pagerėjimo dalis yra 340 / 620 × 100 = 55 %. Šį rodiklį pateikus nuo visų 800 įtrauktų (340 / 800 = 42,5 %), būtų supainiotas pacientų praradimas stebėjimo metu su gydymo nesėkme, ir būtų nuvertinta dalis tų pacientų, kurie matavimą iš tikrųjų baigė.

## Duomenų šaltiniai ir apribojimai

Pradinės ir tolesnio stebėjimo biometrinės reikšmės paprastai gaunamos iš prijungto įrenginio (Bluetooth gliukometro ar išmaniųjų svarstyklių), iš elektroninės sveikatos įrašo importuoto laboratorinio rezultato arba paties paciento įvestos reikšmės, o šie trys šaltiniai pasižymi labai skirtingu patikimumu, todėl šaltinį reikia nurodyti kartu su rodikliu. Praradimas stebėjimo metu retai būna atsitiktinis: pacientai, nustoję dalyvauti programoje, dažnai yra ir tie, kuriems mažiausiai tikėtina, kad pagerėjo, todėl didelė pagerėjimo dalis, apskaičiuota tik tiems, kurie baigė stebėjimą, gali pervertinti tikrąjį programos poveikį populiacijos lygiu. Sezoniniai ir regresijos į vidurkį poveikiai yra reali tiek HbA1c, tiek svorio atveju, todėl programa, kai tik įmanoma, turėtų lyginti su lygiagrečia arba istorine kontroline grupe, o ne bet kokį pagerėjimą laikyti programos poveikio įrodymu.

## Dažniausios klaidos

- **Praradimo stebėjimo metu neįtraukimas, užuot apie jį pranešus**: tyliai išmetus pacientus be tolesnio stebėjimo matavimo iš vardiklio, matomą pagerėjimo dalį galima gerokai išpūsti; visada pateikite tolesnio stebėjimo matavimo užbaigimo dalį kartu su pačiu pagerėjimo rodikliu.
- **Pačių pacientų pranešamų ir įrenginio matavimų maišymas nepažymint**: paties paciento pranešamas svoris sistemingai mažiau patikimas nei prijungtų išmaniųjų svarstyklių rodmuo, o šių šaltinių sumaišymas paslepia, kokia matomo pagerėjimo dalis yra matavimo triukšmas.
- **Nėra kontrolinės grupės ar kontrafaktinio scenarijaus**: daugelis lėtinių biometrinių rodiklių svyruoja arba savaime grįžta link vidurkio; vienos grupės pagerėjimo dalis be jokios palyginamosios grupės yra užuomina, bet ne galutinis programos poveikio įrodymas.
- **Kuklaus vidutinio poslinkio laikymas plataus pagerėjimo įrodymu**: nedidelį populiacijos vidutinį pagerėjimą gali lemti keli stipriai atsiliepę pacientai, o dauguma pokyčio nemato; pateikite pasiskirstymą (pvz., klinikiniu požiūriu reikšmingą slenkstį peržengusiųjų dalį), o ne vien vidutinį poslinkį.

## Šaltiniai

- American Diabetes Association (ADA), Standards of Care in Diabetes, HbA1c tikslo ir klinikiniu požiūriu reikšmingo pokyčio rekomendacijos
- Centers for Disease Control and Prevention (CDC), Division of Diabetes Translation, programų vertinimo rekomendacijos
- Recenzuojama literatūra apie skaitmeninių diabeto ir svorio valdymo programų rezultatus, pavyzdžiui, tyrimai, paskelbti npj Digital Medicine ir Diabetes Care

Taip pat žr. [vaistų vartojimo laikymosi lygis](../vaistu-vartojimo-laikymosi-lygis/) – dažnas lėtinių būklių programų biometrinių rodiklių pagerėjimo veiksnys.
