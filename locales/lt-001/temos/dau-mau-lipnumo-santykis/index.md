# DAU/MAU lipnumo santykis

DAU/MAU lipnumo santykis lygina kasdien aktyvius naudotojus (DAU) su kas mėnesį aktyviais naudotojais (MAU) – tas pats principas taikomas ir kas savaitę aktyvių naudotojų (WAU) santykiui su MAU – ir parodo, kokia platesnės produkto naudotojų bazės dalis juo naudojasi bet kurią tam tikrą dieną. Tai standartinis produkto analitikos įtraukimo intensyvumo rodiklis, skiriasi nuo to, ar naudotojas apskritai išlaikomas (žr. naudotojų išlaikymo lygį), ar kaip nuosekliai vienas konkretus įtrauktas pacientas naudojasi laikui bėgant (žr. pacientų įtraukimo nuoseklumo lygį): lipnumas aprašo populiacijos lygio naudojimo ritmą, o ne kurio nors vieno asmens modelį.

## Kodėl tai svarbu

Du skaitmeninės sveikatos produktai gali pateikti identišką mėnesio aktyvių naudotojų skaičių, tačiau turėti labai skirtingą pagrindinį įtraukimo intensyvumą: viename dauguma tų naudotojų atidaro programėlę beveik kasdien, o kitame dauguma ją atidaro kartą per mėnesį, prieš pat tai, kai kitaip būtų laikomi neaktyviais. DAU/MAU lipnumo santykis atskiria šias dvi labai skirtingas situacijas vienu paprastu, gerai suprantamu orientyriniu skaičiumi, kurį produkto ir klinikinės komandos gali sekti laikui bėgant ir lyginti su žinomais pramonės intervalais – apie 20 % santykis yra dažnai minimas pagrįstas orientyras daugeliui vartotojiškų programėlių, o kasdienio įpročio produktai (maisto ar simptomų dienoraštis, kuriuo pacientas turėtų naudotis kiekvieną dieną) turėtų būti vertinami pagal gerokai aukštesnę kartelę. Kadangi lipnumas jautrus tam, kaip apibrėžiamas „aktyvus“, jis naudingiausias kaip vieno produkto tendencija laikui bėgant ir kaip palyginimas su panašiam naudojimo modeliui sukurtais produktais, o ne kaip absoliutus tarpšakinis orientyras.

## Kaip skaičiuojama

```
DAU/MAU lipnumo santykis = vidutinis kasdien aktyvių naudotojų skaičius
                            laikotarpiu / kas mėnesį aktyvūs naudotojai
                            tuo pačiu laikotarpiu × 100

WAU/MAU santykis (savaitinis, tas pats principas) yra švelnesnis
variantas, tinkamesnis produktams, kuriais tikimasi naudotis kelis
kartus per savaitę, o ne kasdien.

„Aktyvus“ turi būti apibrėžtas tiksliai ir nuosekliai (pvz., atliktas
atitinkantis veiksmas, o ne pasyvus programėlės atidarymas) tiek
skaitiklyje, tiek vardiklyje.
```

## Skaičiavimo pavyzdys

Skaitmeninė diabeto valdymo programėlė per tam tikrą mėnesį turi 10 000 mėnesio aktyvių naudotojų, apibrėžtų kaip bet kuris naudotojas, tą mėnesį atlikęs bent vieną atitinkantį veiksmą (gliukozės, valgio ar vaistų pažymėjimo įrašą). Suvidurkinus dienos aktyvių naudotojų skaičių per 30 to mėnesio dienų gaunamas vidutinis DAU, lygus 2 200. DAU/MAU lipnumo santykis yra 2 200 / 10 000 × 100 = 22 %, o tai rodo, kad įprastą dieną maždaug 22 % programėlės mėnesio naudotojų bazės ja naudojasi – pagrįstas skaičius kasdienio įpročio lėtinės būklės priemonei, nors produkto komanda norėtų matyti jį laikui bėgant didėjantį, kai idealus elgesys (kasdienis registravimas) įtrauktiems pacientams tampa vis labiau įprastas.

## Duomenų šaltiniai ir apribojimai

DAU, WAU ir MAU visi skaičiuojami iš tų pačių pagrindinių įvykių žurnalų, naudojant vieną nuoseklią „atitinkančio aktyvaus“ įvykio apibrėžtį kiekviename lange; pakeitus tą apibrėžtį skaitiklio ir vardiklio skaičiavimuose (pavyzdžiui, skaičiuojant bet kokį programėlės atidarymą DAU, bet tik atliktą veiksmą MAU), gaunamas iškreiptas santykis, neatspindintis tikro įtraukimo intensyvumo. Tinkamas lipnumo orientyras labai priklauso nuo numatyto produkto naudojimo modelio: priemonė, skirta naudoti kartą per savaitę (savaitinis simptomų patikrinimas), turės ir turi turėti mažesnį DAU/MAU santykį nei priemonė, skirta naudoti kasdien (nuolatinės gliukozės stebėsenos palydovinė programėlė), todėl lipnumą visada reikia aiškinti pagal paties produkto numatytą naudojimo kadenciją, o ne pagal vieną visuotinį tikslą.

## Dažniausios klaidos

- **Lipnumo santykių palyginimas tarp produktų su skirtingu numatytu naudojimo dažniu**: kartą per savaitę naudojama priemonė struktūriškai rodys mažesnį DAU/MAU santykį nei kasdien naudojama, net jei abi veikia tiksliai taip, kaip numatyta jų naudojimo atvejams; lyginkite su paties produkto numatyta kadencija, o ne su vienu visuotiniu tikslu.
- **Nenuoseklių aktyvumo apibrėžčių naudojimas skaitiklyje ir vardiklyje**: tai gali sukurti lipnumo santykį, kuris neatspindi tikro įtraukimo intensyvumo ir kurio negalima prasmingai lyginti laikui bėgant ar su kitais produktais.
- **Didėjančio lipnumo santykio laikymas vienareikšmiškai teigiamu netikrinant bendros MAU tendencijos**: didėjantis santykis, kurį lemia mažėjanti, labiau į įprotį linkusi pagrindinė naudotojų bazė, kai bendras MAU krenta, yra visai kita – ir labiau nerimą keliančia – padėtis nei ta, kai jį lemia iš tikrųjų didėjantis kasdienis įtraukimas stabilioje ar augančioje naudotojų bazėje.
- **Savaitės dienos ir sezoninių poveikių DAU ignoravimas**: daugelio sveikatos produktų DAU gali ženkliai skirtis pagal savaitės dieną (darbo dienos ir savaitgalis) ar sezoną; naudokite vidutinį DAU per laikotarpį, apimantį visą natūralų ciklą, o ne trumpą langą, kuris gali būti iškreiptas.

## Šaltiniai

- Recenzuojama ir pramonės literatūra apie mobiliųjų ir skaitmeninių produktų įtraukimo rodiklius, plačiai naudojamos orientyrų sistemos iš mobiliosios analitikos platformų
- Digital Therapeutics Alliance, geriausios praktikos rekomendacijos dėl skaitmeninių terapijų įtraukimo matavimo
- Recenzuojama literatūra apie skaitmeninės sveikatos įtraukimo matavimą, pavyzdžiui, tyrimai, paskelbti Journal of Medical Internet Research (JMIR mHealth and uHealth)

Taip pat žr. [naudotojų išlaikymo lygis](../naudotoju-islaikymo-lygis/) ir [pacientų įtraukimo nuoseklumo lygis](../pacientu-itraukimo-nuoseklumo-lygis/) – du susiję įtraukimo rodikliai, su kuriais šis santykis dažniausiai painiojamas.
