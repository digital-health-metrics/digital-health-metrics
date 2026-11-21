# Klinikinių įspėjimų ignoravimo dažnis

Klinikinių įspėjimų ignoravimo dažnis matuoja klinikinių sprendimų palaikymo (CDS) įspėjimų, pavyzdžiui, vaistų sąveikos įspėjimų, alergijų įspėjimų ir dozės ribų patikrų, kuriuos generuoja kompiuterizuota gydytojo paskyrimų įvedimo (CPOE) sistema, dalį, kurią gydytojas atmeta arba ignoruoja, o ne pagal juos veikia. Tai standartinis kiekybinis signalas, naudojamas „įspėjimų nuovargiui“ aptikti ir valdyti: gerai dokumentuotam gydytojų polinkiui prarasti jautrumą įspėjimams, kai mažai vertingų perspėjimų kiekis tampa neįveikiamas.

## Kodėl tai svarbu

Paskelbti vaistų sąveikos įspėjimų ignoravimo dažniai paprastai svyruoja nuo maždaug pusės iki daugiau kaip devyniasdešimties procentų, o didelis dažnis automatiškai nėra saugos nesėkmė: daug trukdančių įspėjimų suveikia dėl sąveikų, kurios konkrečioje situacijoje yra klinikiniu požiūriu nereikšmingos, arba pakartoja įspėjimą, į kurį gydytojas jau reagavo anksčiau tame pačiame paskyrimų rinkinyje, todėl gerai sureguliuota sistema sąmoningai generuoja mažiau, bet vertingesnių įspėjimų, o ne siekia ignoravimo dažnį nuleisti iki nulio. Saugai iš tikrųjų svarbu kitimo laikui bėgant tendencija, pasiskirstymas pagal sunkumo lygius ir tai, ar gydytojai dokumentuoja priežastį, kai ignoruoja aukšto sunkumo įspėjimą; didėjantis aukšto sunkumo, gerai pagrįstų sąveikų ignoravimo dažnis yra tikras valdysenos rūpestis net ir tada, kai vidurkis tarp visų įspėjimų atrodo stabilus.

## Kaip skaičiuojama

```
Ignoravimo dažnis = ignoruoti įspėjimai / visi suveikę įspėjimai × 100

Skirstykite pagal:
  - sunkumo lygį (pvz., kontraindikuotina, didelė, vidutinė)
  - įspėjimo tipą (vaistų sąveika, alergija, dubliuojamas gydymas,
    dozės riba)
  - ar buvo dokumentuota ignoravimo priežastis

„Dokumentuotas ignoravimo dažnis“ rodo ignoravimų, turinčių
užfiksuotą pagrindimą, dalį – tai pati savaime valdysenos priemonė.
```

## Skaičiavimo pavyzdys

Ligoninės CPOE sistema per mėnesį suaktyvina 10 000 vaistų sąveikos įspėjimų, iš kurių 8 700 ignoruojami, taigi bendras ignoravimo dažnis yra 87 %. Suskirsčius pagal sunkumą matyti, kad iš 500 „kontraindikuotinų“ įspėjimų ignoruojama 60 (12 %), o iš 6 000 „vidutinių“ įspėjimų – 5 700 (95 %). Vidutinio lygio rodiklis iš esmės atitinka paskelbtus orientyrus ir pats savaime nekelia susirūpinimo; kontraindikuotinų įspėjimų rodiklis reikalauja atskirų atvejų peržiūros, o tai, kad tik 340 iš 500 šio lygio ignoravimų turi dokumentuotą priežastį, yra labiau veiksmus skatinanti valdysenos išvada.

## Duomenų šaltiniai ir apribojimai

Elektroninės sveikatos įrašo audito žurnalas arba paties CDS tiekėjo įspėjimų modulis registruoja kiekvieną įspėjimo suveikimo ir įspėjimo atsako įvykį, įskaitant tai, ar gydytojas įvedė laisvo teksto ar struktūrizuotą pagrindimą. Lyginant ignoravimo dažnius tarp organizacijų ar net tarp tos pačios organizacijos skyrių, reikia patikrinti, ar pagrindiniai įspėjimų taisyklių rinkiniai ir sunkumo lygių skirstymas yra vienodi; ligoninė su agresyviai sureguliuotu taisyklių rinkiniu rodys mažesnį ignoravimo dažnį dėl priežasčių, nieko bendra neturinčių su gydytojų elgesiu.

## Dažniausios klaidos

- **Neapdoroto ignoravimo dažnio laikymas vienu saugos įvertinimu**: jis sumaišo gerai pagrįstą mažai vertingų įspėjimų ignoravimą su nesaugiu tikrai pavojingų sąveikų ignoravimu; visada skirstykite pagal sunkumą.
- **Ignoravimo priežasties neužfiksavimas**: be dokumentuotos priežasties neįmanoma atskirti „šis įspėjimas buvo klaidingas“ nuo „šis įspėjimas buvo teisingas, o gydytojas priėmė nesaugų sprendimą“ – o būtent šis skirtumas ir svarbus paciento saugai.
- **Įspėjimų taisyklių infliacija laikui bėgant**: pridėti daugiau įspėjimų „saugumo labui“ neišvalius mažai vertingų yra tiesioginė didėjančio ignoravimo dažnio ir įspėjimų nuovargio priežastis; įspėjimų valdysena turėtų apimti reguliarią prastai veikiančių taisyklių peržiūrą ir nutraukimą, o ne tik stebėseną.
- **Dažnių palyginimas tarp sistemų su skirtinga trukdymo konstrukcija**: trukdantis, sustabdantis įspėjimas sukelia kitokį ignoravimo elgesį nei pasyvus, neblokuojantis, todėl šie rodikliai nėra tiesiogiai palyginami.

## Šaltiniai

- Recenzuojama literatūra apie klinikinių sprendimų palaikymo įspėjimų nuovargį, plačiai publikuota žurnaluose, įskaitant JAMIA ir npj Digital Medicine
- ONC / HealthIT.gov, sveikatos IT saugos rekomendacijos dėl klinikinių sprendimų palaikymo
- Institute for Safe Medication Practices (ISMP), CDS įspėjimų projektavimo ir valdysenos rekomendacijos
