# Pacientų rekomendavimo indeksas (NPS)

Pacientų rekomendavimo indeksas (angl. Net Promoter Score, NPS) matuoja paciento norą rekomenduoti skaitmeninės sveikatos produktą ar telesveikatos paslaugą kitiems, remiantis vienu apklausos klausimu – „Kiek tikėtina, kad rekomenduotumėte šią paslaugą draugui ar kolegai?“ – vertinamu nuo 0 iki 10. Respondentai, įvertinę 9–10, yra „skatintojai“, 7–8 – „pasyvūs“, o 0–6 – „kritikai“; NPS yra skatintojų procentas, atėmus kritikų procentą. Tai plačiausiai naudojamas ir plačiausiai kritikuojamas pacientų pasitenkinimo rodiklis skaitmeninėje sveikatoje, vertinamas dėl paprastumo, bet ribotas tuo, ką gali diagnozuoti pats vienas.

## Kodėl tai svarbu

NPS suteikia skaitmeninės sveikatos komandoms paprastą, standartizuotą, tarpusavyje palyginamą pasitenkinimo signalą, kurį pigu rinkti ir lengva suprasti ne specialistams (vadovams, valdyboms, užsakovams), todėl jis išlieka populiarus nepaisant gerai dokumentuotų metodologinių apribojimų. Konkrečiai telesveikatos ir skaitmeninių „priekinių durų“ produktams NPS dažnai yra pirmaujantis rodiklis, ar pacientai ir toliau rinksis skaitmeninį kanalą, o ne gyvą alternatyvą, kai prieinami abu, o tai tiesiogiai veikia kanalų mišinio ir pajėgumų planavimą. Tačiau NPS yra vienas, aukšto lygio suvestinis skaičius: mažėjantis NPS komandai pasako, kad kažkas negerai, bet ne ką, todėl jis visada turėtų būti derinamas su atviro teksto pateiktais atsiliepimais ar detalesne naudojimo patogumo priemone, kad būtų veiksmus skatinantis, o ne vien rezultatų lentelės skaičius.

## Kaip skaičiuojama

```
NPS = % skatintojų (įvertinimas 9–10) − % kritikų (įvertinimas 0–6)

Rezultatas yra skaičius nuo −100 iki +100, o ne procentas, nors ir
gaunamas iš procentų – niekada prie NPS skaičiaus nedėkite „%“ ženklo.

Pateikite kartu su:
  atsako dalimi (% apklaustų pacientų, kurie atsakė)
  imties dydžiu
  tiksliu naudotu klausimo formuluotės tekstu
```

## Skaičiavimo pavyzdys

Telesveikatos platforma apklausia 1 000 pacientų po vaizdo konsultacijos ir gauna 400 atsakymų (atsako dalis 40 %). Iš šių 400 respondentų 220 įvertina 9–10 (skatintojai, 55 %), 100 įvertina 7–8 (pasyvūs, 25 %), o 80 įvertina 0–6 (kritikai, 20 %). NPS yra 55 − 20 = 35. Šis skaičius reiškia ką nors tik kontekste: 35 NPS gali būti stiprus rezultatas, palyginti su platesne telesveikatos pramone, arba nerimą keliantis nuosmukis, palyginti su šios platformos pačios ankstesnio ketvirčio 48 – NPS kur kas naudingesnis kaip vieno produkto tendencija laikui bėgant nei kaip absoliutus vienkartinis orientyras kito produkto atžvilgiu.

## Duomenų šaltiniai ir apribojimai

NPS renkamas po sąveikos apklausa, paprastai paleidžiama iškart po vaizdo vizito, programėlės sesijos ar priežiūros epizodo, o atsako dalis yra labai svarbi: žema atsako dalis (gerokai mažesnė nei skaičiavimo pavyzdyje matoma ~40 %) rizikuoja neatsakiusiųjų šališkumu, kai atsako tik stipriai patenkinti ar stipriai nepatenkinti pacientai, o tai traukia įvertį į kraštutinumus ir tolyn nuo tikrosios populiacijos nuotaikos. NPS lyginti tarp organizacijų ar net tarp skirtingų vienos organizacijos kanalų (pavyzdžiui, telesveikatos ir gyvo apsilankymo) teisinga tik jei klausimo formuluotė, laikas ir apklausos populiacija yra tikrai palyginami; žinoma, kad nedideli formuluotės pokyčiai išmatuojamai keičia įverčius. NPS reikėtų laikyti rezultatu, kurį reikia paaiškinti, o ne savitikslu – atviro teksto komentarai, paprastai lydintys NPS apklausą, paprastai yra veiksmingesni nei pats įvertis.

## Dažniausios klaidos

- **NPS skaičių, surinktų su skirtinga klausimo formuluote ar laiku, lyginimas**: net nedideli apklausos dizaino skirtumai gali pakeisti įverčius keliais punktais, todėl tarporganizacinis NPS lyginimas yra daug mažiau patikimas, nei atrodo.
- **Atsako dalies ignoravimas**: pagrindinis NPS, apskaičiuotas iš 10 % atsako dalies, yra daug mažiau patikimas nei apskaičiuotas iš 60 % atsako dalies, nes žema atsako dalis linkusi į neatsakiusiųjų šališkumą link kraštutinių nuomonių.
- **NPS laikymas diagnostikos priemone, o ne suvestiniu rodikliu**: mažėjantis NPS pasako, kad kažkas negerai, bet niekada nepasako ką; jį visada reikėtų derinti su kokybiniais atsiliepimais arba detalesne pasitenkinimo ar naudojimo patogumo priemone priežasčiai nustatyti.
- **NPS vaikymasis kaip paties tikslo**: siaura NPS skaičiaus optimizacija (pavyzdžiui, apklausiant pacientus tik po neįprastai teigiamų sąveikų) gali pagerinti pateikiamą įvertį, nepagerindama, o galbūt net pablogindama pagrindinę paciento patirtį.

## Šaltiniai

- Bain & Company, originali Net Promoter System metodika ir orientyrų rekomendacijos
- Agency for Healthcare Research and Quality (AHRQ), CAHPS (Consumer Assessment of Healthcare Providers and Systems) pacientų patirties apklausų programa kaip papildoma, detalesnė alternatyva
- Recenzuojama literatūra apie Net Promoter Score naudojimą ir apribojimus sveikatos priežiūros aplinkose, pavyzdžiui, tyrimai, paskelbti Journal of Medical Internet Research (JMIR)

Taip pat žr. [naudotojų išlaikymo lygis](../naudotoju-islaikymo-lygis/), nes paties paciento pranešamas pasitenkinimas ir faktinis tolesnis produkto naudojimas dažnai išsiskiria ir verta juos sekti kaip atskirus signalus.
