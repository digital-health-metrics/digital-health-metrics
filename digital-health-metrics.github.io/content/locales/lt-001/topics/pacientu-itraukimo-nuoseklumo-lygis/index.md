# Pacientų įtraukimo nuoseklumo lygis

Pacientų įtraukimo nuoseklumo lygis matuoja, kaip reguliariai įtrauktas pacientas sąveikauja su skaitmeninės sveikatos produktu laikui bėgant – pavyzdžiui, registruoja maistą ar simptomus, fiksuoja fizinį aktyvumą ar peržiūri sveikatos duomenis – o ne tik tai, ar jis apskritai yra naudojęsis. Tai išilginis rodiklis, skiriasi nuo to paties laiko taško aktyvaus naudojimo skaičiaus: du pacientai gali turėti identišką būseną „šį mėnesį naudojosi programėle“, bet vienas registruoja nuosekliai kiekvieną dieną, o kitas užregistruoja vieną kartą ir dingsta trims savaitėms, ir tik nuoseklumo rodiklis juos atskiria.

## Kodėl tai svarbu

Nuolatinė, reguliari sąveika su skaitmeninės sveikatos priemone yra vienas patikimesnių klinikinės naudos pirmaujančių rodiklių, ypač elgesiu pagrįstoms būklėms, tokioms kaip diabetas, svorio valdymas ir psichikos sveikata, kai priemonės vertė kyla iš jos palaikomo įpročio, o ne iš kurios nors vienos sesijos. Produktas gali pranešti apie sveiką kas mėnesį aktyvių naudotojų skaičių, iš tikrųjų aptarnaudamas populiaciją, kuri vieną kartą prisijungia ir nutolsta, nes mėnesio aktyvus naudojimas yra žema kartelė, nieko nesakanti apie naudojimo modelį per mėnesį; nuoseklumo rodikliai tai užfiksuoja taip, kaip paprasti aktyvumo skaičiai negali. Kadangi nuoseklumą taip pat vienas sunkiau išlaikyti mėnesius, o ne savaites, tai sąžiningesnis produkto kokybės ir klinikinio tinkamumo signalas nei trumpo lango įtraukimo skaičiai, kurie linkę į naujumo poveikius iškart po įtraukimo.

## Kaip skaičiuojama

```
Įtraukimo nuoseklumo lygis = savaitės su bent viena atitinkančia
                              sąveika / visos įtraukimo savaitės × 100

„Atitinkanti sąveika“ turėtų būti apibrėžta aiškiai ir nuosekliai
(pvz., maisto įrašas, simptomų patikrinimas ar užbaigta veiklos
sinchronizacija) – niekada ne pasyvus įvykis, tokia kaip programėlės
atidarymas be užregistruoto veiksmo.

Pateikite kaip pasiskirstymą, o ne tik populiacijos vidurkį:
  pvz., pacientų dalis su ≥ 80 % savaitinio nuoseklumo,
        dalis su 50–79 %, dalis su < 50 %
```

## Skaičiavimo pavyzdys

Mitybos konsultavimo programėlė įtraukia pacientą 12 savaičių. Pacientas bent vieną atitinkantį maisto įrašą užregistruoja 9 iš tų 12 savaičių, taigi individualus įtraukimo nuoseklumo lygis yra 9 / 12 × 100 = 75 %. Visoje programėlės 2 000 pacientų kohortoje, įtrauktų bent 12 savaičių, 600 pacientų (30 %) išlaiko ≥ 80 % savaitinį nuoseklumą, 900 (45 %) patenka į 50–79 % juostą, o 500 (25 %) – žemiau 50 %. Pateikus tik kohortos vidurkį (kuris galėtų būti apie 65 %), būtų paslėpta, kad visas ketvirtadalis pacientų vos įsitraukia – segmentas, kurį verta tirti atskirai, o ne skiesti bendru vidurkiu.

## Duomenų šaltiniai ir apribojimai

Nuoseklumo duomenys gaunami iš pačio produkto įvykių žurnalų (maisto įrašai, veiklos sinchronizacijos, patikrinimai), o „atitinkančios sąveikos“ apibrėžtis turi milžinišką įtaką gautam rodikliui – švelni apibrėžtis (bet koks programėlės atidarymas) visada atrodys geriau nei griežta (užbaigtas, prasmingas registravimo įrašas), todėl naudojama apibrėžtis turi būti aiškiai nurodyta kartu su bet kokiu pateiktu skaičiumi. Automatiškai sinchronizuoti duomenys (pavyzdžiui, prijungta kūno rengybos apyrankė, sinchronizuojanti veiklą fone) turėtų būti pateikiami atskirai nuo rankiniu būdu užregistruotų duomenų, nes automatinė sinchronizacija gali išpūsti matomą nuoseklumą neatspindėdama jokių aktyvių paciento pastangų ar įsitraukimo į produkto rekomendacijas.

## Dažniausios klaidos

- **Programėlės atidarymų painiojimas su prasmingu įtraukimu**: pasyvus programėlės atidarymas (pavyzdžiui, sukeltas push pranešimo) nėra tas pats kas užregistruotas maisto įrašas ar užbaigtas patikrinimas; apibrėžkite ir pateikite tik atitinkančias sąveikas.
- **Pateikimas tik populiacijos vidurkio**: sveikai atrodantis vidutinis nuoseklumo lygis gali paslėpti dvimodę populiaciją iš labai įsitraukusių ir beveik visiškai neįsitraukiančių pacientų; pateikite pasiskirstymą pagal nuoseklumo juostas, o ne tik vidurkį.
- **Įtraukimo trukmės vardiklio ignoravimas**: lyginant nuoseklumo lygius tarp pacientų, įtrauktų labai skirtingus laikotarpius, neatsižvelgiant į įtraukimo trukmę, bus pasirenkama grupė, turėjusi trumpesnį, lengviau išlaikomą matavimo langą.
- **Automatinė sinchronizacija fone, išpučianti rodiklį**: pasyviai sinchronizuojamas nešiojamo prietaiso duomenų srautas gali padaryti neįsitraukiantį pacientą atrodantį nuosekliai aktyvų be jokio realaus elgesio pokyčio ar paciento įsitraukimo į produktą.

## Šaltiniai

- Recenzuojama literatūra apie skaitmeninės sveikatos įtraukimo modelius ir jų ryšį su klinikiniais rezultatais, pavyzdžiui, tyrimai, paskelbti Journal of Medical Internet Research (JMIR)
- American Medical Informatics Association (AMIA), rekomendacijos dėl paties paciento sukurtų sveikatos duomenų kokybės ir įtraukimo matavimo
- Digital Therapeutics Alliance, geriausios praktikos rekomendacijos dėl skaitmeninių terapijų įtraukimo ir rezultatų matavimo

Taip pat žr. [naudotojų išlaikymo lygis](../naudotoju-islaikymo-lygis/) – glaudžiai susijęs rodiklis, ar pacientas apskritai lieka įtrauktas, skirtingas nuo to, kaip nuosekliai jis įsitraukia būdamas įtrauktas.
