# Biometrinių rodiklių stabilizavimo dalis

Biometrinių rodiklių stabilizavimo dalis – tai pacientų, kurie naudodamiesi prijungtu stebėsenos įrenginiu pasiekia ir išlaiko klinikiniu požiūriu apibrėžtą biometrinio rodiklio tikslo intervalą (dažniausiai kraujospūdį žemiau slenksčio, pavyzdžiui, 130/80 mmHg) per ilgesnį laikotarpį, o ne viename laiko taške, dalis. Tai skiriasi nuo biometrinių rodiklių pagerėjimo dalies (žr. tą temą): pagerėjimas matuoja pokyčio nuo pradinio lygio dydį, o stabilizavimas – ar pacientas patikimai laikomas saugiame intervale, kai gydymas ar stebėsena jau prasidėjo. Šis rezultatas svarbiausias pacientams, kurie jau yra arti tikslo arba jau gydomi.

## Kodėl tai svarbu

Daugeliui lėtinių ligų programų pacientų – ypač sergančių hipertenzija, kai rekomenduojami kraujospūdžio tikslai gerai nustatyti ir tiesiogiai susiję su širdies ir kraujagyslių rizika – klinikinis tikslas yra ne vienkartinis pagerėjimas, o nuolatinė kontrolė, o pacientas, svyruojantis tarp tikslo intervalo ir už jo ribų, kelia kitokią riziką nei tas, kuris vieną kartą pagerėja ir taip išlieka. Prijungti įrenginiai (korinio ryšio kraujospūdžio manžetės, nuolatinės gliukozės stebėsenos prietaisai) leidžia stabilizavimą matuoti nuolat, o ne tik vizitų klinikoje metu, išryškindami pacientus, kurių rodmenys klinikoje atrodo kontroliuojami, bet namuose nestabilūs – šis modelis vadinamas paslėpta hipertenzija ir vien periodiniu matavimu gyvai jo aptikti neįmanoma. Pateikiant stabilizavimo dalį, o ne vien vienkartinį „tikslo pasiekimo“ vaizdą, programa priversta atsižvelgti į tai, kaip nuosekliai, o ne vien kaip dažnai ji išlaiko pacientus intervale.

## Kaip skaičiuojama

```
Biometrinių rodiklių stabilizavimo dalis = pacientai, kurių ≥ 80 %
                                rodmenų per matavimo laikotarpį buvo
                                tikslo intervale /
                                pacientai, turintys minimalų tinkamų
                                rodmenų skaičių tuo laikotarpiu × 100

Pavyzdiniai slenksčiai:
  Kraujospūdis – tikslas < 130/80 mmHg (arba taikomas klinikinių
                 rekomendacijų slenkstis paciento rizikos profiliui)
  Gliukozė     – tikslo intervalas pagal nuolatinės gliukozės
                 stebėsenos rekomendacijas, pateikiamas kaip „laikas
                 intervale“

Prieš įtraukiant pacientą į vardiklį reikėtų nustatyti minimalų
rodmenų dažnio slenkstį (pvz., bent 3 rodmenys per savaitę), kad
retai matuojantys pacientai neatrodytų dirbtinai stabilūs.
```

## Skaičiavimo pavyzdys

Hipertenzijos nuotolinės stebėsenos programa įtraukia 600 pacientų su korinio ryšio kraujospūdžio manžetėmis, kurių kiekvienas turi atlikti bent 3 matavimus per savaitę. Iš jų 540 atitinka minimalų rodmenų dažnio slenkstį per 3 mėnesių matavimo laikotarpį ir įtraukiami į vardiklį. Iš tų 540 pacientų 350 turi bent 80 % rodmenų žemiau 130/80 mmHg, taigi biometrinių rodiklių stabilizavimo dalis yra 350 / 540 × 100 = 65 %. 60 pacientų, neįtrauktų dėl nepakankamo rodmenų skaičiaus, pateikiami atskirai kaip duomenų išsamumo spraga ir neįtraukiami nei į skaitiklį, nei į „nestabilizuotų“ grupę, nes jų tikroji kontrolės būklė yra tikrai nežinoma, o ne bloga.

## Duomenų šaltiniai ir apribojimai

Rodmenys gaunami tiesiai iš prijungto įrenginio duomenų srauto, kuris yra objektyvesnis ir daug dažnesnis nei matavimas klinikoje, tačiau įrenginio padėties ir technikos klaidos (netinkamo dydžio ar netinkamai uždėta kraujospūdžio manžetė) gali sukelti sistemingą paklaidą, kurios vienas patvirtinamasis matavimas klinikoje būtinai neaptiks. Tikslo intervalo pasirinkimas turėtų atitikti galiojančias klinikines rekomendacijas konkrečiam paciento rizikos profiliui ir gretutinėms ligoms, o ne vieną visuotinį slenkstį, nes rekomenduojami tikslai skiriasi pagal paciento amžių, inkstų funkciją ir širdies ir kraujagyslių riziką. Retai matuojančio paciento niekada nereikėtų tyliai pagal numatytąją nuostatą laikyti „stabiliu“; sąžiningiau jį išbraukti iš vardiklio skaidriai pranešant apie išbraukimą, nei laikyti kontroliuojamu ar nekontroliuojamu remiantis per menkais duomenimis.

## Dažniausios klaidos

- **Vieno tikslo intervale esančio rodmens laikymas stabilizavimu**: stabilizavimas reiškia nuolatinę kontrolę per apibrėžtą laikotarpį, o ne vienkartinį vaizdą; visada reikalaukite minimalios tikslo intervale esančių rodmenų dalies per tą laikotarpį, o ne vieno atitinkančio matavimo.
- **Retai matuojančių pacientų tylus išbraukimas apie tai nepranešus**: pacientai, kurie retai matuojasi, nėra automatiškai nei stabilūs, nei nestabilūs; išbraukite juos iš vardiklio skaidriai ir apie išbraukimo dalį pranešykite kaip apie atskirą duomenų išsamumo rodiklį.
- **Įrenginio kalibravimo ir technikos klaidų ignoravimas**: prastai uždėta manžetė ar nekalibruotas įrenginys gali sistemingai iškreipti rodmenis viena kryptimi, o naiviai iš neapdorotų įrenginio duomenų apskaičiuota stabilizavimo dalis to neaptiks be periodinio patvirtinimo.
- **Vieno visuotinio tikslo intervalo taikymas visiems pacientams**: klinikinių rekomendacijų tikslai skiriasi pagal paciento rizikos profilį ir gretutines ligas; vieną visuotinį slenkstį taikant klinikiniu požiūriu nevienalytei populiacijai kai kurie pacientai bus neteisingai priskirti stabilizuotiems ar nestabilizuotiems, palyginti su jų tikruoju individualizuotu tikslu.

## Šaltiniai

- American Heart Association (AHA) / American College of Cardiology (ACC), kraujospūdžio tikslų rekomendacijos ir namų kraujospūdžio stebėsenos gairės
- International Diabetes Federation ir American Diabetes Association (ADA), nuolatinės gliukozės stebėsenos „laiko intervale“ konsensuso rekomendacijos
- Recenzuojama literatūra apie nuotolinę biometrinę stebėseną ir nuolatinę būklės kontrolę, pavyzdžiui, tyrimai, paskelbti npj Digital Medicine

Taip pat žr. [biometrinių rodiklių pagerėjimo dalis](../biometriniu-rodikliu-pagerejimo-dalis/) – susijęs rodiklis, matuojantis pokyčio nuo pradinio lygio dydį, o ne nuolatinę kontrolę pasiekus tikslą.
