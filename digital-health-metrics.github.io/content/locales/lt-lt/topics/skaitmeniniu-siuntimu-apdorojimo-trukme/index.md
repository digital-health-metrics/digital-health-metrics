# Skaitmeninių siuntimų apdorojimo trukmė

Skaitmeninių siuntimų apdorojimo trukmė – tai laikas nuo elektroninio siuntimo pateikimo siunčiančio gydytojo iki jo triažo ir priėmimo, atmetimo arba užregistravimo priimančioje tarnyboje. Tai proceso (srauto) rodiklis, skiriasi nuo bendros paciento laukimo trukmės, ir tai viena aiškiausių vietų, kur skaitmeninės sistemos pokytis gali būti parodytas kaip pakeitęs veiklos skaičių, o ne vien pasitenkinimo įvertinimą (struktūrizuotas e. siuntimas, triažas pagal vaizdus, standartizuotos siuntimo formos).

## Kodėl tai svarbu

Lėtas arba labai kintantis triažo žingsnis prideda vėlavimą dar prieš pacientui patenkant į klinikinį laukimo sąrašą, o kadangi šis vėlavimas įvyksta prieš prasidedant bet kokiai klinikinei priežiūrai, tai gryni proceso nuostoliai, kuriuos skaitmeninės priemonės gali puikiai pašalinti. Siuntimų sistemos, verčiančios „grąžinti siuntėjui“ ciklą dėl trūkstamos informacijos, sukuria pakartotinio darbo kilpas, kurias lengva praleisti, jei apdorojimo trukmė matuojama tik siuntimams, kurie iš pirmo karto praeina sklandžiai. Kai paslauga įdiegė struktūrizuotas skaitmenines siuntimo formas, privalomus laukus ar triažą pagal vaizdus (pavyzdžiui, teledermatologijoje), apdorojimo trukmė paprastai yra įtikinamiausias vienas rodiklis naudai parodyti, nes ją galima išmatuoti prieš pokytį ir po jo naudojant tą pačią instrumentuotę.

## Kaip skaičiuojama

```
Apdorojimo trukmė = laiko žymė (triažo sprendimas) − laiko žymė
                    (siuntimo pateikimas)

Pateikite medianą ir aukštą procentilį (dažniausiai 90-ąjį), o ne tik
vidurkį, nes skirstinys stipriai pasviręs į dešinę dėl grąžintų ar
sudėtingų siuntimų.

Apsvarstykite etapų trukmes, kai sistema jas fiksuoja:
  Pateikimas → gauta tarnyboje
  Gauta → triažo sprendimas
  Triažo sprendimas → užregistruotas vizitas (kai aktualu)
```

## Skaičiavimo pavyzdys

E. siuntimų sistemos audito pėdsakas rodo, kad mediana laiko nuo pateikimo iki triažo sprendimo yra 1,8 dienos visose specialybėse, o 90-ojo procentilio laikas – 6 dienos, ir tai daugiausia lemia siuntimai, grąžinti siuntėjui dėl trūkstamos klinikinės informacijos. Teledermatologijos kelias, naudojantis triažą pagal vaizdus toje pačioje platformoje, pasiekia 4 valandų medianą ir 1 dienos 90-ąjį procentilį, nes nuotraukos ir struktūrizuotos anamnezės beveik visada pakanka triažo sprendimui be tolesnės korespondencijos.

## Duomenų šaltiniai ir apribojimai

Pagrindinis šaltinis yra paties e. siuntimų ar siuntimų valdymo sistemos audito pėdsakas, naudojant pateikimo ir sprendimo laiko žymes; organizacijos turėtų patvirtinti, ar „laikrodis“ sustoja, kol siuntimas grąžintas papildomos informacijos, ar eina nuolat, nes šios dvi apibrėžtys to paties proceso atveju duoda esmingai skirtingus skaičius. Apdorojimo trukmę reikėtų nuosekliai pateikti kalendoriniu arba darbo valandų laiku, nes savaitgalių ir švenčių poveikis kitaip gali iškreipti palyginimus tarp paslaugų su skirtingais darbo režimais.

## Dažniausios klaidos

- **Matavimas tik „švarių“ siuntimų**: atmestų ar grąžintų siuntimų neįtraukimas į skaičiavimą paslepia pakartotinio darbo naštą, kurią skaitmeninės priemonės dažnai ir skirtos sumažinti.
- **Vidurkio, o ne medianos ir procentilių pateikimas**: nedidelis ilgai trunkančių, grąžintų siuntimų skaičius vidurkį iškels toli virš tipinio paciento faktinės patirties.
- **Apdorojimo trukmės painiojimas su bendru laukimo laiku**: apdorojimo trukmė apima tik triažo žingsnį; bendra paciento patirtis apima ir tolesnį klinikinį laukimo sąrašą, kuris yra atskiras rodiklis, kurį valdo atskiri pajėgumų apribojimai.
- **Etapų neskyrimas**: paslauga, matuojanti tik pilną laiką nuo pradžios iki pabaigos, negali pasakyti, ar lėtą skaičių sukelia siuntėjai, pateikiantys nepilną informaciją, priimančios tarnybos triažo pajėgumai, ar abu.

## Šaltiniai

- NHS England, e-Referral Service (e-RS) statistika ir paslaugos specifikacijos
- Recenzuojama literatūra apie elektroninių siuntimų valdymo sistemas ir skaitmeninius triažo kelius, įskaitant teledermatologiją
- ONC / HealthIT.gov, sąveikumo ir siuntimų koordinavimo rekomendacijos
