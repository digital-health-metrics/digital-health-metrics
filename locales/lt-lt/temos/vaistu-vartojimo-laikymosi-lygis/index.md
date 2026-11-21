# Vaistų vartojimo laikymosi lygis

Vaistų vartojimo laikymosi lygis matuoja, kiek pacientas vartoja paskirtą vaistą taip, kaip nurodyta, dažniausiai išreiškiamas kaip apibrėžto laikotarpio dienų, kai pacientas turėjo vaistų taip, kaip paskirta, dalis. Tai vienas reikšmingiausių skaitmeninės sveikatos rodiklių, nes paskyrimų nesilaikymas yra dažnas, daugiausia išvengiamas tinkamai padedant ir tiesiogiai susijęs su blogesniais klinikiniais rezultatais bei didesnėmis tolesnėmis išlaidomis – būtent šią spragą skirtos užpildyti vaistų priminimų programėlės, išmaniosios vaistų talpyklės ir vaistinių receptų pakartojimo priminimai.

## Kodėl tai svarbu

Visuomenės sveikatos įstaigų vertinimu, lėtinių ligų vaistų nevartojimas kai kurioms būklėms gali siekti net 50 %, ir tai yra viena pagrindinių išvengiamų hospitalizavimų, ligos progresavimo ir gydymo nesėkmės priežasčių, kuri klaidingai priskiriama pačiam vaistui, o ne nenuosekliam vartojimui. Skaitmeninės laikymosi priemonės egzistuoja būtent šiai spragai užpildyti, todėl bet kuriai programai, turinčiai vaistų komponentą, laikymosi lygis paprastai yra vienas svarbiausių sprendimams rodiklių: priežastiniu požiūriu jis yra prieš biometrinių rodiklių pagerėjimą, pakartotinį hospitalizavimą ir daugumą kitų klinikinių rezultatų rodiklių, apie kuriuos programa kitaip galėtų pranešti. Programa, gerinanti įtraukimą ar pasitenkinimą, bet nepajudinanti laikymosi, tikriausiai dar neparodė tikėtino klinikinės naudos mechanizmo.

## Kaip skaičiuojama

```
Padengtų dienų dalis (PDC) = laikotarpio dienos, kai vaistų turėta
                              (pagal dienų atsargą iš išduotų receptų)
                              / matavimo laikotarpio dienų skaičius
                              × 100

Vaistų turėjimo santykis (MPR) = bendra dienų atsarga, gauta per
                              laikotarpį / laikotarpio dienų skaičius
                              × 100 (gali viršyti 100 % dėl ankstyvų
                              papildymų; dėl šios priežasties paprastai
                              pirmenybė teikiama PDC)

Pacientas paprastai priskiriamas „laikantis“ prie PDC slenksčio ≥ 80 %,
laikantis plačiai naudojamos kokybės rodiklių konvencijos.
```

## Skaičiavimo pavyzdys

Pacientui paskirtas kasdienis lėtinis vaistas 90 dienų matavimo laikotarpiui. Vaistinės išdavimo įrašai rodo, kad pacientas gavo pakankamai vaistų 76 iš tų 90 dienų padengti, su dviem spragomis: 9 dienų spraga, pasibaigus vaistams prieš papildant, ir 5 dienų spraga aplink hospitalizavimą. PDC yra 76 / 90 × 100 = 84 %, o tai viršija įprastą 80 % laikymosi slenkstį. Jei tos pačios spragos būtų matuojamos naudojant MPR pagal išduotų vaistų dienų atsargą, o ne faktiškai padengtas dienas, ankstyvas papildymas kitur laikotarpyje galėtų pakelti santykį virš 100 %, o tai iliustruoja, kodėl PDC yra konservatyvesnis ir paprastai pageidautinas rodiklis.

## Duomenų šaltiniai ir apribojimai

Vaistinės išlaidų ataskaitų arba išdavimo duomenys (iš vaistų išmokų valdytojo arba prijungtos vaistinės sistemos) yra standartinis šaltinis, nes atspindi tai, ką pacientas iš tikrųjų gavo, o ne tai, kas buvo paskirta; vien receptų duomenys pervertina laikymąsi, nes nepatvirtina, kad pacientas kada nors atsiėmė vaistus. Skaitmeninės laikymosi priemonės – išmaniosios vaistų talpyklės, nuryjami jutikliai, prijungti išmanieji inhaliatoriai, registruojantys kiekvieną naudojimą kvėpavimo takų būklėms, tokioms kaip astma ir LOPL, ir programėlėmis grįsti patikrinimai – siūlo didesnės skiriamosios gebos duomenis apie tai, ar dozė iš tikrųjų buvo suvartota, o ne tik gauta, bet jomis naudojasi nedidelė, galbūt neatstovaujanti pacientų mažuma, todėl įrenginiu patvirtinto laikymosi sujungimas su išlaidų ataskaitomis grįstu PDC visoje populiacijoje reikalauja atsargaus aiškinimo. Laikymąsi reikėtų matuoti pakankamai ilgu laikotarpiu, kad būtų išlygintos pavienės praleistos dozės, bet pakankamai trumpu, kad būtų galima aptikti reikšmingą nuosmukį prieš jam padarant klinikinę žalą – lėtiniams vaistams įprasti 90 dienų slenkantys langai.

## Dažniausios klaidos

- **MPR naudojimas neatskleidžiant, kad jis gali viršyti 100 %**: nepaaiškinti santykiai virš 100 % dėl ankstyvų papildymų ar kaupimo daro palyginimą tarp pacientų ir laikotarpių nepatikimą, nebent naudojamas PDC arba santykis aiškiai ribojamas.
- **Receptų ar užsakymų duomenų laikymas laikymosi įrodymu**: išrašytas ar vaistinei išsiųstas receptas nieko nesako apie tai, ar pacientas vaistus atsiėmė ar vartojo; šią spragą užpildo tik išdavimo ar įrenginio duomenys.
- **Vieno laikymosi slenksčio taikymas visoms būklėms be skirtumo**: 20 % dozių praleidimo klinikinės pasekmės labai skiriasi pagal vaistų klasę (pvz., antikoaguliantai ir statinai), todėl vienas visuotinis 80 % slenkstis kai kuriems vaistams gali nuvertinti ar pervertinti klinikinę riziką.
- **Vaistų keitimo ir nutraukimo ignoravimas**: pacientas, kuriam klinikiniu požiūriu ir tinkamai pakeičiamas vaistas, gali atrodyti kaip didelis laikymosi sumažėjimas dėl pradinio vaisto, jei keitimas neįskaičiuojamas skaičiavime.

## Šaltiniai

- Pharmacy Quality Alliance (PQA), Proportion of Days Covered rodiklio specifikacijos
- Centers for Medicare & Medicaid Services (CMS), Star Ratings vaistų vartojimo laikymosi rodikliai
- Recenzuojama literatūra apie vaistų vartojimo laikymosi matavimą ir skaitmenines laikymosi intervencijas, pavyzdžiui, tyrimai, paskelbti Journal of Managed Care & Specialty Pharmacy

Taip pat žr. [biometrinių rodiklių pagerėjimo dalis](../biometriniu-rodikliu-pagerejimo-dalis/), kurio pagrindinis veiksnys yra lėtinių ligų vaistų vartojimo laikymasis.
