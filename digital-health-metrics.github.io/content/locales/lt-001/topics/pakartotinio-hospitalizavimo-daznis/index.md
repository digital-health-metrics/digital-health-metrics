# Pakartotinio hospitalizavimo dažnis

Pakartotinio hospitalizavimo dažnis – tai išrašytų pacientų, kurie per apibrėžtą laikotarpį po išrašymo (dažniausiai 30 dienų) neplanuotai vėl hospitalizuojami, dalis. Skaitmeninei sveikatai tai rodiklis, tiesiogiausiai susijęs su mokėtojų ekonomika ir verte grįstos sveikatos priežiūros sutartimis: nuotolinės stebėsenos, tolesnio stebėjimo po išrašymo ar skaitmeninė priežiūros perėjimo programa, negalinti įtikinamai parodyti poveikio pakartotiniams hospitalizavimams, vargu ar sulauks tolesnio kompensavimo palaikymo, kad ir kokie geri atrodytų jos įtraukimo skaičiai.

## Kodėl tai svarbu

Neplanuotas pakartotinis hospitalizavimas yra brangus, pacientui trikdantis ir daugelyje sveikatos sistemų dabar tiesiogiai baudžiamas: tokios schemos kaip JAV Hospital Readmissions Reduction Program sumažina mokėjimą ligoninėms, kurių pakartotinio hospitalizavimo dažnis tam tikroms būklėms didesnis nei tikėtasi, todėl ligoninės aktyviai užsako skaitmenines programas po išrašymo ir nuotolinę stebėseną, kurių tikslas – juos sumažinti. Reikšminga pakartotinių hospitalizavimų dalis laikoma potencialiai išvengiama – juos lemia nepakankamos išrašymo instrukcijos, praleisti tolesnio stebėjimo vizitai, nesusipratimai dėl vaistų ar neišspręstas simptomų blogėjimas, kurį gerai suprojektuotas skaitmeninis kontaktas gali pastebėti anksčiau – ir būtent šią spragą skirtos užpildyti skaitmeninės perėjimo priežiūros priemonės. Pakartotinio hospitalizavimo dažnį visada reikia skaityti kartu su atvejų mišiniu: programa, aptarnaujanti sunkiau sergančią, sudėtingesnę populiaciją, struktūriškai turės aukštesnį bazinį dažnį nei aptarnaujanti sveikesnę populiaciją, nepriklausomai nuo programos kokybės.

## Kaip skaičiuojama

```
30 dienų pakartotinio hospitalizavimo dažnis = neplanuoti pakartotiniai
                        hospitalizavimai per 30 dienų nuo išrašymo
                        / visi indeksiniai išrašymai × 100

Iš skaitiklio neįtraukite: planuotų pakartotinių hospitalizavimų
(pvz., suplanuotos tolesnės procedūros) ir perkėlimų, kurie yra to
paties gydymo epizodo tęsinys, o ne naujas hospitalizavimas.

Kai įmanoma, koreguokite dėl rizikos, naudodami pripažintą atvejų
mišinio ar gretutinių ligų indeksą, prieš lygindami dažnius tarp
skirtingų pacientų populiacijų ar laikotarpių.
```

## Skaičiavimo pavyzdys

Ligoninė per ketvirtį išrašo 1 200 pacientų, sergančių širdies nepakankamumu. Iš jų 210 pakartotinai hospitalizuojami per 30 dienų, iš kurių 15 yra planuoti pakartotiniai hospitalizavimai suplanuotai procedūrai ir neįtraukiami. Neplanuoto 30 dienų pakartotinio hospitalizavimo dažnis yra (210 − 15) / 1 200 × 100 = 16,25 %. Nuotolinės stebėsenos programa įdiegiama 400 šių pacientų pogrupiui (atrinktam pagal klinikinę riziką, ne atsitiktinai), ir jų neplanuoto pakartotinio hospitalizavimo dažnis yra 14 %, palyginti su 18 % 800 neįtrauktų pacientų. Kadangi įtraukimas buvo grindžiamas klinikine rizika, o ne atsitiktiniu paskyrimu, šis skirtumas yra veikiau užuomina, o ne galutinis programos poveikio įrodymas, ir jį reikėtų aiškinti kartu su koregavimo dėl rizikos analize, o ne priimti pažodžiui.

## Duomenų šaltiniai ir apribojimai

Pakartotinio hospitalizavimo duomenys paprastai imami iš pačios ligoninės priėmimo, išrašymo ir perkėlimo (ADT) srauto pakartotiniams hospitalizavimams toje pačioje įstaigoje, tačiau pacientas, pakartotinai hospitalizuotas kitoje ligoninėje, tame sraute visai nebus matomas, todėl vienos ligoninės pakartotinių hospitalizavimų sekimas sistemingai nuvertina tikrąjį dažnį, nebent papildomas regioninės sveikatos informacijos mainų duomenimis, mokėtojų išlaidų ataskaitų duomenimis ar valstijos lygio visų mokėtojų duomenų bazėmis. Priskyrimas skaitmeninei programai reikalauja atidumo: pacientai, savanoriškai pasirenkantys nuotolinės stebėsenos programą, retai yra atsitiktinė išrašytų pacientų imtis, todėl naivus įtrauktų ir neįtrauktų pakartotinio hospitalizavimo dažnių palyginimas bus iškreiptas būtent atrankos poveikių, dėl kurių kai kurie pacientai iš pradžių labiau linkę įsitraukti.

## Dažniausios klaidos

- **Neapdorotų, nepakoreguotų dėl rizikos dažnių palyginimas tarp populiacijų**: sunkiau sergančią populiaciją aptarnaujanti programa rodys didesnį neapdorotą pakartotinio hospitalizavimo dažnį nei sveikesnę aptarnaujanti, net jei pati programa veiksmingesnė; prieš lygindami visada koreguokite dėl rizikos.
- **Pakartotinių hospitalizavimų kitose įstaigose nepakankamas skaičiavimas**: pasikliaujant tik vienos ligoninės ADT duomenimis bus praleisti pakartotiniai hospitalizavimai kitur ir nuvertintas tikrasis dažnis, ypač vietovėse su keliomis konkuruojančiomis ligoninių sistemomis.
- **Atrankos šališkumas savanoriškame programos įtraukime**: pacientai, kurie pasirenka įsitraukti į skaitmeninio tolesnio stebėjimo programą, dažnai sistemingai skiriasi (sveikatos raštingumu, socialine parama ar motyvacija) nuo tų, kurie nesirenka, ir tai iškraipo bet kokį naivų palyginimą prieš / po arba įtrauktų / neįtrauktų.
- **Kiekvieno sugrįžimo į tą pačią įstaigą skaičiavimas kaip pakartotinio hospitalizavimo**: suplanuotas, planinis pakartotinis hospitalizavimas (pavyzdžiui, planuota antro etapo procedūra) nėra nesėkmingo išrašymo signalas ir turėtų būti neįtrauktas iš skaitiklio, o ne maišomas su tikrai neplanuotais sugrįžimais.

## Šaltiniai

- Centers for Medicare & Medicaid Services (CMS), Hospital Readmissions Reduction Program ir Hospital-Wide Readmission rodiklio specifikacijos
- Institute for Healthcare Improvement (IHI), rekomendacijos dėl išvengiamų pakartotinių hospitalizavimų mažinimo
- Recenzuojama literatūra apie skaitmenines nuotolinės stebėsenos ir perėjimo priežiūros intervencijas pakartotiniams hospitalizavimams mažinti, pavyzdžiui, tyrimai, paskelbti JAMA Network Open ir npj Digital Medicine

Taip pat žr. [triažo nukreipimo tikslumas](../triazo-nukreipimo-tikslumas/), nes netinkamas pradinis nukreipimas pats gali būti tolesnis išvengiamų hospitalizavimų veiksnys.
