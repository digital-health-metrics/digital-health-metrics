# Pacientų portalo naudojimo lygis

Pacientų portalo naudojimo lygis matuoja tinkamų pacientų, kurie užsiregistravo internetiniame pacientų portale (pavyzdžiui, NHS App, Patient Access ar su elektronine sveikatos istorija susietame portale, tokiame kaip MyChart) ir juo aktyviai naudojasi įrašams peržiūrėti, vizitams užsiregistruoti ar rašyti savo priežiūros komandai, dalį. Tai įėjimo lygio skaitmeninio įtraukimo rodiklis: pacientas, niekada neaktyvavęs paskyros, negali gauti naudos iš jokios tolesnės skaitmeninės paslaugos, sukurtos portalo pagrindu.

## Kodėl tai svarbu

Portalas sukuria vertę tik tada, kai pacientas juo naudojasi, todėl organizacijos turėtų sekti naudojimą kaip piltuvą, o ne vieną skaičių: registracija, aktyvavimas (pirmas prasmingas veiksmas) ir aktyvus naudojimas (naudojimas per slenkantį langą) yra trys skirtingi rodikliai, kurie pernelyg dažnai painiojami. Skaitmeninių paslaugų komandos dažnai patiria spaudimą pateikti vieną, palankų pagrindinį skaičių, ir reikia disciplinos reikalauti sunkesnio, sąžiningesnio suskirstymo. Žemas ar netolygiai pasiskirstęs naudojimas taip pat yra lygybės signalas: vyresni pacientai, turintys mažesnį skaitmeninį raštingumą, nekalbantys daugumos kalba arba neturintys patikimo plačiajuosčio ryšio ar išmaniojo telefono sistemingai rečiau patenka į skaitiklį, todėl didėjantis vidutinis naudojimo lygis gali paslėpti besiplečiančią spragą pacientams, kuriems paslaugų kontaktas dažnai reikalingas labiausiai.

## Kaip skaičiuojama

Pateikite visus tris etapus, ne tik registraciją, ir visada aiškiai nurodykite vardiklį:

```
Registracijos lygis = pacientai, sukūrę portalo paskyrą / tinkama pacientų populiacija × 100
Aktyvavimo lygis    = pacientai, atlikę pirmą prasmingą veiksmą (peržiūrėjo rezultatą,
                       užsiregistravo vizitui, išsiuntė žinutę) / pacientai su paskyra × 100
Aktyvaus naudojimo lygis = pacientai, prisijungę bent kartą per pastaruosius 12 mėnesių /
                       tinkama pacientų populiacija × 100
```

Tinkama pacientų populiacija paprastai apibrėžiama kaip pacientai, turėję bent vieną kontaktą su organizacija apibrėžtu retrospektyvos laikotarpiu (dažniausiai 24 mėnesiai), kurių amžius ir sutikimo statusas leidžia turėti savo paskyrą.

## Skaičiavimo pavyzdys

Pirminės priežiūros tinklas aptarnauja 50 000 pacientų, atitinkančių tinkamumo apibrėžtį. Iš jų 32 000 užsiregistravo portale (registracijos lygis 64 %). Iš 32 000 registracijų 27 000 atliko bent vieną prasmingą veiksmą, pavyzdžiui, peržiūrėjo tyrimo rezultatą (aktyvavimo lygis 84 % registruotųjų). Per pastaruosius 12 mėnesių 21 000 iš pradinių 50 000 tinkamų pacientų prisijungė bent kartą (aktyvaus naudojimo lygis 42 %). Pateikus tik 64 % registracijos skaičių, tikrasis įtraukimas būtų gerokai pervertintas; 42 % aktyvaus naudojimo skaičius yra tas skaičius, kuris turėtų lemti portalo programos išteklių sprendimus.

## Duomenų šaltiniai ir apribojimai

Portalo analitika paprastai gaunama iš pačios tiekėjo platformos (prisijungimo įvykiai, funkcijų naudojimas) arba iš pagrindinės elektroninės sveikatos istorijos audito žurnalo, o organizacijos turėtų skeptiškai vertinti tiekėjų skydelius, rodančius tik registracijų skaičių. Įgaliotas naudojimas (tėvas ar globėjas, valdantis paskyrą paciento vardu) turėtų būti pažymimas ir pateikiamas atskirai, nes tai keičia, kas iš tikrųjų yra „naudotojas“. Vardiklio pasirinkimas yra labai svarbus: skaičiavimas pagal visą registruotų pacientų sąrašą, o ne tikrai tinkamą, pasiekiamą populiaciją visada nuvertins naudojimą, o skaičiavimas tik pagal aktyviai pakviestus pacientus visada jį pervertins, todėl tinkamumo apibrėžtis turėtų būti fiksuota ir paskelbta kartu su kiekvienu pateiktu rodikliu.

## Dažniausios klaidos

- **Registracija, skaičiuojama kaip naudojimas**: sukurta, bet niekada nenaudota paskyra turi beveik nulinę vertę; pateikite aktyvavimą ir aktyvų naudojimą kartu su registracija, o ne vietoj jos.
- **Skaitmeninės atskirties ignoravimas**: bendri naudojimo skaičiai gali didėti, kol tarpas tarp labiausiai ir mažiausiai skaitmeniškai įtrauktų grupių plečiasi; visada skirstykite pagal amžių, nepriteklių, kalbą ir negalią, kai tai leidžia duomenų valdysena.
- **Organizacijų su skirtingomis tinkamumo apibrėžtimis palyginimas**: portalo programa, kviečianti tik pacientus su užfiksuotu el. pašto adresu, pateiks aukštesnį rodiklį nei matuojanti pagal visą registruotų sąrašą, be jokio realaus veiklos skirtumo.
- **Vienkartinio prisijungimo laikymas tęstiniu įtraukimu**: 12 mėnesių retrospektyva yra įprasta, bet trumpesnis langas (pavyzdžiui, 90 dienų) anksčiau įspėja apie mažėjantį naudojimą.

## Šaltiniai

- NHS England, NHS App naudojimo ir registracijos statistika (nhs.uk / digital.nhs.uk publikacijos)
- ONC / HealthIT.gov, Promoting Interoperability Program rodikliai, įskaitant View, Download, Transmit (VDT) pacientų prieigos rodiklius
- Recenzuojama literatūra apie pacientų portalo naudojimą ir skaitmeninės sveikatos nelygybes, pavyzdžiui, tyrimai, paskelbti Journal of the American Medical Informatics Association (JAMIA)

Taip pat žr. [vizitų neatvykimo rodiklis](../vizitu-neatvykimo-rodiklis/), kurį tiesiogiai veikia registracija ir priminimai per portalą.
