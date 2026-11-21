# Įrenginių veikimo laiko dalis

Įrenginių veikimo laiko dalis matuoja planuojamo stebėsenos laiko dalį, kai prijungtas sveikatos įrenginys – nuotolinės pacientų stebėsenos jutiklis, nešiojamas prietaisas ar namų telesveikatos blokas – iš tikrųjų yra prisijungęs, perduoda duomenis ir veikia tinkamai, o ne yra atsijungęs, neprisijungęs ar sugedęs. Tai pagrindinis infrastruktūros rodiklis, esantis po kiekviena nuotolinės stebėsenos ar prijungtų įrenginių programa: klinikinis įspėjimas, biometrinė tendencija ar įtraukimo skaičius, apskaičiuoti iš įrenginio, kuris dažnai buvo neprisijungęs, yra tiek patikimi, kiek patikimas už jų esantis ryšys.

## Kodėl tai svarbu

Visa nuotolinės pacientų stebėsenos programos klinikinė vertė priklauso nuo nuolatinio ar beveik nuolatinio duomenų fiksavimo; prastai veikiantis įrenginys sukuria tylias paciento klinikinio vaizdo spragas, kurios gali būti palaikytos stabilumu (nėra įspėjimo, nes nėra duomenų, o ne todėl, kad niekas nepasikeitė), užuot teisingai atpažintos kaip stebėsenos gedimas. Įrenginių veikimo laikas taip pat yra pirmaujantis programos kaštų ir pacientų patirties rodiklis: įrenginys, kuris dažnai praranda ryšį, sukelia pagalbos skambučius, paciento nusivylimą ir galbūt nereikalingą klinikinį kontaktą, siekiant patikrinti, ar duomenų spraga atspindi tikrą klinikinį įvykį, ar tiesiog techninį gedimą. Kadangi įrenginių veikimo gedimai dažnai priskirtini infrastruktūrai, kurią valdo organizacija (prastai sukonfigūruotam korinio ryšio šliuzui, silpnai Wi-Fi aprėpčiai paciento namuose, nepakankamai prižiūrimam įrenginių parkui), o ne pacientui, šis rodiklis priklauso tiekėjo ir techninių operacijų komandai, o ne turėtų būti be skirtumo įtrauktas į pacientų įtraukimo rodiklius.

## Kaip skaičiuojama

```
Įrenginių veikimo laiko dalis = laikas, kai įrenginys buvo prisijungęs
                                 ir perdavė tinkamus duomenis /
                                 visas planuojamas stebėsenos laikas × 100

Jei duomenys leidžia, skirstykite prastovų pagrindines priežastis:
  Įrenginio gedimas      (baterija, aparatinės įrangos gedimas,
                          programinės įrangos strigtis)
  Ryšio gedimas          (korinio ryšio / Wi-Fi / VPN nutrūkimas)
  Paciento veiksniai     (įrenginys išjungtas, perkeltas už veikimo
                          zonos ribų)

Palaikomieji techniniai parametrai, stebėtini kartu su veikimo laiku:
  Vidutinė procesoriaus apkrova, atminties naudojimas ir baterijos
  lygis kiekviename įrenginyje
  Vidutinis laikas tarp ryšio gedimų
  Vidutinis laikas iki pakartotinio prisijungimo po nutrūkimo
```

## Skaičiavimo pavyzdys

Nuotolinės širdies stebėsenos programa diegia 1 000 prijungtų įrenginių, kurių kiekvienas turi perduoti duomenis nuolat. Per 30 dienų mėnesį (720 planuojamų stebėsenos valandų kiekvienam įrenginiui) parkas užregistruoja bendrą 705 600 faktinių prisijungimo valandų iš planuotų 720 000 valandų, taigi viso parko įrenginių veikimo laiko dalis yra 705 600 / 720 000 × 100 = 98 %. 14 400 prastovos valandų pagrindinių priežasčių analizė rodo, kad 60 % priskirtina korinio ryšio nutrūkimams, sutelktiems tam tikrame kaimo paslaugų regione, 25 % – senstančių baterijų įrenginiams, pažymėtiems keisti, o 15 % – pacientams, laikinai išjungusiems savo įrenginį. Šis suskirstymas nurodo dvi aiškias, skirtingas intervencijas – ryšio sutvarkymą paveiktame regione ir aktyvią baterijų keitimo programą – kurių vienas bendras veikimo laiko skaičius būtų neatskyręs.

## Duomenų šaltiniai ir apribojimai

Veikimo laiko duomenys gaunami iš įrenginio gamintojo ar platformos tiekėjo įrenginių valdymo ir telemetrijos sistemos, kuri registruoja kiekvieno įrenginio ryšio ir „širdies plakimo“ (angl. heartbeat) įvykius; organizacija turėtų tiksliai patvirtinti, ką tiekėjas laiko „prisijungusiu“ (įrenginys gali pranešti apie savo prisijungimą prie tinklo, bet neperduoti tinkamų klinikinių duomenų, o tai klinikiniais tikslais turėtų būti laikoma prastova, net jei paties tiekėjo skydelis rodo jį kaip prisijungusį). Veikimo laikas turėtų būti pateikiamas pagal įrenginių kohortą ar geografiją, kai leidžia apimtis, nes ryšio kokybė dažnai susitelkusi geografiškai (kaimo korinio ryšio aprėptis, senesnių pastatų Wi-Fi), o ne tolygiai pasiskirsčiusi tarp pacientų populiacijos, ir bendras viso parko skaičius gali paslėpti rimtą, išsprendžiamą regioninę problemą.

## Dažniausios klaidos

- **Tinklo ryšio painiojimas su tinkamų duomenų perdavimu**: įrenginys tiekėjo skydelyje gali atrodyti „prisijungęs“, bet neperduoti naudotinų klinikinių duomenų; apibrėžkite ir matuokite veikimo laiką pagal faktinį tinkamų duomenų gavimą, o ne vien pagal neapdorotą tinklo ryšį.
- **Pateikimas tik viso parko vidurkio**: jis gali paslėpti rimtą, geografiškai ar įrenginių kohortai būdingą prastovų problemą, kurią atskleistų tikslesnis vidurkis ir kuri turi konkretų, išsprendžiamą sprendimą.
- **Prastovos pagrindinės priežasties nenustatymas**: įrenginio, ryšio ir paciento pusės prastovoms reikia visiškai skirtingų intervencijų; vienas prastovos procentas be priežasčių skirstymo negali būti pagrindas veiksmams.
- **Duomenų spragos laikymas klinikiniu stabilumu pagal numatytąją nuostatą**: trūkstantis neprisijungusio įrenginio duomenų srautas turėtų paskatinti techninio ryšio patikrą, o ne būti tyliai aiškinamas kaip „jokių naujienų – gerai“ paciento klinikinei būklei.

## Šaltiniai

- Continua Design Guidelines / Personal Connected Health Alliance, techniniai sąveikumo standartai prijungtiems sveikatos įrenginiams
- ONC / HealthIT.gov, rekomendacijos dėl nuotolinės pacientų stebėsenos programų diegimo ir techninių reikalavimų
- Recenzuojama literatūra apie nuotolinės pacientų stebėsenos įrenginių patikimumą ir duomenų išsamumą, pavyzdžiui, tyrimai, paskelbti npj Digital Medicine

Taip pat žr. [triažo nukreipimo tikslumas](../triazo-nukreipimo-tikslumas/) – jis priklauso nuo išsamių, patikimų įrenginio duomenų gavimo, kad apskritai būtų galima priimti teisingą triažo sprendimą.
