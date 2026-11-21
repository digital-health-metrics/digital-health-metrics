# Sistemos naudojimo paprastumo skalės rezultatas

Sistemos naudojimo paprastumo skalės (angl. System Usability Scale, SUS) rezultatas – tai standartizuotas 10 teiginių klausimynas, naudojamas kiekybiškai įvertinti, kiek programinė įranga yra patogi naudoti, duodantis vieną nuo 0 iki 100 skalės rezultatą, kurį galima lyginti su gerai nusistovėjusiomis pramonės normomis. Skirtingai nei pacientų rekomendavimo indeksas, matuojantis norą rekomenduoti, ar paties paciento pranešami rezultatų vertinimo rodikliai, matuojantys klinikinę ar funkcinę būklę, SUS matuoja vieną konkretų dalyką: kaip lengva išmokti naudotis pačia programine įranga ir ja naudotis – tiek pacientams, tiek klinikos personalui.

## Kodėl tai svarbu

Skaitmeninės sveikatos priemonė gali turėti stiprių klinikinių įrodymų ir įtikinamą verslo pagrindimą, bet praktikoje vis tiek nepasisekti, nes pacientams ar gydytojams sąsaja atrodo painioja, lėta ar nepatogi – o kadangi SUS yra patvirtinta, plačiai naudojama priemonė su dešimtmečiais paskelbtų orientyrinių duomenų įvairiose pramonės šakose, ji leidžia skaitmeninės sveikatos komandai palyginti savo produkto naudojimo patogumą su žinomu pasiskirstymu, užuot rėmusis neformaliais įspūdžiais ar pavieniais skundais. SUS sąmoningai yra technologijai neutrali ir greitai pateikiama (paprastai per mažiau nei penkias minutes), todėl ją praktiška vykdyti pakartotinai per dizaino iteracijas, skirtingai nei pilną naudojimo patogumo tyrimą ar formalų klinikinį tyrimą. Kadangi gydytojams skirto naudojimo patogumo nesėkmės yra dokumentuotas perdegimo veiksnys (žr. gydytojų perdegimo lygį), o pacientams skirto – dokumentuotas atsisakymo ir prastų skaitmeninio raštingumo rezultatų veiksnys (žr. skaitmeninio raštingumo lygį), SUS veikia kaip pigus ankstyvo įspėjimo naudojimo patogumo signalas, galintis aptikti dizaino problemą, kol ji dar nepasirodė tuose reikšmingesniuose tolesniuose rodikliuose.

## Kaip skaičiuojama

```
SUS įvertis = ((nelyginių teiginių balų suma − 5) +
               (25 − lyginių teiginių balų suma)) × 2,5

Rezultatas yra vienas nuo 0 iki 100 įvertis (ne procentas, nepaisant
skalės, nes jis neatspindi „teisingų atsakymų procento“ ar panašiai).

Paskelbtas orientyrų aiškinimas (Bangor ir kt.):
  Virš 80  – puikus naudojimo patogumas
  68       – vidutinis, remiantis plačia pramonės norma
  Žemiau 51 – prastas naudojimo patogumas, reikalaujantis tyrimo
```

## Skaičiavimo pavyzdys

Telesveikatos platforma pateikia standartinį 10 teiginių SUS klausimyną 150 pacientų po jų pirmojo vaizdo vizito. Apskaičiuotas visų respondentų vidutinis SUS įvertis yra 74. Palyginus su plačiai cituojamu 68 pramonės vidurkiu, tai rodo aukštesnį nei vidutinį šios konkrečios pacientų populiacijos ir naudojimo atvejo naudojimo patogumą, nors vis dar gerokai žemiau nei 80 „puikus“ slenkstis, kuris rodytų, kad liko nedaug naudojimo patogumo kliūčių. Suskirsčius tuos pačius 150 atsakymų pagal amžių, matyti, kad jaunesnių nei 50 metų pacientų vidutinis įvertis yra 81, o 65 metų ir vyresnių – 62; ši spraga nurodo konkrečią, išsprendžiamą naudojimo patogumo problemą vyresniems pacientams, o ne bendrą produkto naudojimo patogumo problemą, ir vienas bendras vidurkis ją būtų paslėpęs.

## Duomenų šaltiniai ir apribojimai

SUS duomenys gaunami tiesiai iš pacientų ar gydytojų, užpildančių standartizuotą 10 teiginių klausimyną, ir priemonė turi būti taikoma tiksliai taip, kaip patvirtinta (tie patys 10 teiginių, ta pati 5 balų sutikimo skalė, ta pati vertinimo formulė), kad gautas įvertis būtų palyginamas su paskelbtais orientyrais; modifikuota ar sutrumpinta klausimyno versija, kad ir kokia gerai sumanyta, duoda įvertį, kurio negalima patikimai aiškinti pagal standartinį orientyrų pasiskirstymą. SUS matuoja suvokiamą naudojimo patogumą, kuris koreliuoja su objektyviu užduočių atlikimo sėkmingumu, bet nėra tapatus jam (žr. skaitmeninio raštingumo lygį dėl užduočių atlikimu grįsto rodiklio); produktas gali turėti gerą SUS įvertį iš pacientų, kurie nebandė sudėtingesnių funkcijų, todėl SUS derinimas su objektyviais užduočių atlikimo duomenimis suteikia išsamesnį vaizdą nei kuris nors vienas atskirai. Atsakymo laikas yra svarbus: SUS pateikimas iškart po nuviliančio konkretaus incidento (nepavykusio ryšio, painaus žingsnio), palyginti su po sklandžios sesijos, gali pakeisti įvertį nepriklausomai nuo bendro produkto naudojimo patogumo.

## Dažniausios klaidos

- **Standartinių klausimyno teiginių ar vertinimo keitimas**: net nedideli formuluotės ar skalės pakeitimai paneigia palyginimą su gerai nusistovėjusiu paskelbtu orientyrų pasiskirstymu; naudokite standartinę 10 teiginių priemonę tiksliai taip, kaip patvirtinta.
- **Pateikimas tik vidutinio įverčio be skirstymo**: naudojimo patogumas dažnai gerokai skiriasi pagal naudotojo amžių, skaitmeninį raštingumą ar vaidmenį (pacientas ar gydytojas); skirstykite ataskaitas, kad rastumėte konkrečias, išsprendžiamas naudojimo patogumo spragas, kurias vienas vidurkis paslepia.
- **SUS laikymas klinikinio veiksmingumo matu**: SUS matuoja būtent naudojimo patogumą, o ne klinikinį rezultatą ar pasitenkinimą priežiūra; labai patogi naudoti priemonė vis tiek gali nepagerinti klinikinių rezultatų, ir šių dalykų niekada neturėtų painioti ar keisti vienas kitu.
- **Apklausos pateikimas tik po neįprastai sklandžių ar neįprastai nuviliančių sesijų**: pateikimo laikas ir kontekstas gali iškreipti įvertį; pateikite nuosekliai reprezentatyviai realių sesijų imčiai, o ne tik patogioms ar selektyviai pasirinktoms.

## Šaltiniai

- Brooke, J., „SUS: A Quick and Dirty Usability Scale“, originali paskelbta priemonė
- Bangor, Kortum ir Miller, paskelbti SUS orientyrų tyrimai, nustatę plačiai cituojamas įverčio aiškinimo juostas
- Recenzuojama literatūra apie SUS naudojimą skaitmeninėje sveikatoje ir telesveikatos naudojimo patogumo vertinime, pavyzdžiui, tyrimai, paskelbti JMIR Human Factors

Taip pat žr. [pacientų rekomendavimo indeksas (NPS)](../pacientu-rekomendavimo-indeksas-nps/) – susijęs, bet atskiras paties paciento pranešamas rodiklis, matuojantis pasitenkinimą ir lojalumą, o ne konkrečiai programinės įrangos naudojimo patogumą.
