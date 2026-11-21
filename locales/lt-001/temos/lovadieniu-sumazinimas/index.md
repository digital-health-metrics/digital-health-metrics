# Lovadienių sumažinimas

Lovadienių sumažinimas matuoja bendrą stacionaro lovadienių skaičių, kurio pavyko išvengti apibrėžtą priežiūros epizodą – dažniausiai pooperacinį sveikimą arba ūmios būklės valdymą – perkėlus iš įprasto stacionaro į skaitmeniniu būdu palaikomą alternatyvą, pavyzdžiui, virtualų skyrių ar gydymo namuose programą. Tai pagrindinis pajėgumų rodiklis virtualių skyrių ir gydymo namuose iniciatyvoms: jis klinikinį priežiūros modelio pokytį išverčia į valiutą (lovų pajėgumą), kuria ligoninių veikla ir sistemų planuotojai iš tikrųjų disponuoja.

## Kodėl tai svarbu

Stacionaro lovų pajėgumas yra vienas labiausiai ribotų ir brangiausių išteklių bet kurioje ligoninių sistemoje, o pagrindinė virtualaus skyriaus ar gydymo namuose programos vertės pasiūlymo mintis yra ta, kad ji gali saugiai užtikrinti apibrėžtą klinikinės priežiūros lygį neužimant fizinės lovos ir taip išlaisvinti pajėgumą pacientams, kurių kitaip valdyti neįmanoma. Lovadienių sumažinimas abstraktų teiginį („ši programa gerina priežiūrą“) paverčia konkrečiu veiklos skaičiumi, kuriuo gali tiesiogiai remtis ligoninių pajėgumų planuotojai, finansų komandos ir užsakovai: juo galima modeliuoti, ar investicija į stebėsenos programą atsiperka sutaupytomis lovų sąnaudomis ir kiek. Kadangi lovadienių sumažinimas turi vertę tik tada, kai išlaikoma paciento sauga, jį visada reikia pateikti kartu su tos pačios populiacijos saugos rezultatų rodikliu (pavyzdžiui, pakartotinio hospitalizavimo arba eskalavimo į stacionarą dažniu), o ne vietoj jo.

## Kaip skaičiuojama

```
Lovadienių sumažinimas = tikėtini lovadieniai taikant standartinę
                         stacionarinę priežiūrą (remiantis istoriniais
                         gulėjimo trukmės duomenimis atitinkamai
                         pacientų kohortai) − faktiniai lovadieniai,
                         kuriuos panaudojo virtualiu / skaitmeniniu
                         keliu gydyti pacientai

Pateikite pagal klinikinį kelią (pvz., pooperacinis sveikimas, ūmus
kvėpavimo takų pablogėjimas), nes tikėtina gulėjimo trukmė labai
skiriasi pagal būklę, o bendras skaičius iš nesusijusių kelių nėra
prasmingas.
```

## Skaičiavimo pavyzdys

Ligoninės istoriniai duomenys rodo, kad pacientų, sveikstančių po tam tikros planinės chirurginės procedūros, vidutinė gulėjimo stacionare trukmė yra 4 dienos. Virtualaus skyriaus programa įtraukia 150 pacientų, sveikstančių po tos pačios procedūros, ir išleidžia juos po vidutiniškai 1,5 stacionaro dienos, o likusį sveikimo laiką stebi nuotoliniu būdu. Lovadienių sumažinimas yra (4 − 1,5) × 150 = 375 lovadieniai per matavimo laikotarpį. Šį skaičių reikia pateikti kartu su tų pačių 150 pacientų virtualaus skyriaus kohortos 30 dienų eskalavimo į stacionarą dažniu ir pakartotinio hospitalizavimo dažniu, nes lovadienių sutaupymas, už kurį sumokama žymiai didesniu eskalavimo ar pakartotinio hospitalizavimo dažniu, nėra tokia klinikinė pergalė, kokią rodytų pagrindinis skaičius.

## Duomenų šaltiniai ir apribojimai

Tikėtiniems lovadieniams reikalinga patikima istorinė atskaitos linija, geriausia – iš atitinkamos pacientų kohortos, gydytos standartine stacionarine priežiūra ir turinčios panašias klinikines charakteristikas (amžių, gretutines ligas, procedūros tipą, sunkumą) kaip virtualaus skyriaus populiacija. Palyginimas su neatitinkančiu istoriniu vidurkiu gali per daug arba per mažai parodyti tikrąjį sumažėjimą, jei skaitmeniniu būdu valdoma kohorta sistemingai sveikesnė ar sergančiųjų sunkiau nei istorinė palyginamoji grupė. Faktiniai lovadieniai skaitmeniniu keliu imami iš pačios ligoninės priėmimo, išrašymo ir perkėlimo (ADT) sistemos; bet koks eskalavimas atgal į stacionarą stebimo sveikimo laikotarpiu turi būti sąžiningai įskaitytas programai nepalankiai (kaip panaudoti lovadieniai, o ne išbrauktas), nes eskalavimų neįtraukimas į skaičiavimą dirbtinai išpūstų matomą sumažėjimą.

## Dažniausios klaidos

- **Lovadienių sumažinimo pateikimas be atitinkamo saugos palyginimo**: virtualus skyrius, taupantis lovadienius, bet turintis žymiai blogesnį eskalavimo ar pakartotinio hospitalizavimo dažnį nei standartinė priežiūra, tikro pagerėjimo neįrodė; visada pateikite abu rodiklius kartu.
- **Neatitinkančios arba pasenusios istorinės atskaitos linijos naudojimas**: palyginimas su istorine kohorta, turinčia kitokį atvejų mišinį, gretutinių ligų naštą ar kitą klinikinės praktikos laikotarpį, gali gerokai pervertinti arba nuvertinti tikrąjį lovadienių sutaupymą.
- **Eskalavimų atgal į stacionarą neįtraukimas į skaičiavimą**: pacientui, kuris stebimas virtualiai, bet sveikimo viduryje perkeliamas į stacionaro lovą, tie lovadieniai turi būti įskaityti programai nepalankiai, o ne tyliai išmesti iš analizės.
- **Kelių, labai skirtingos tikėtinos gulėjimo trukmės, kelių sujungimas**: lovadienių sumažinimo sumavimas klinikiniu požiūriu nesusijusiuose keliuose (pavyzdžiui, pooperacinio sveikimo ir lėtinės kvėpavimo ligos valdymo) į vieną skaičių paslepia, kuris konkretus kelias iš tikrųjų lemia sutaupymą.

## Šaltiniai

- NHS England, virtualių skyrių ir gydymo namuose programų rekomendacijos bei lovadienių poveikio ataskaitų standartai
- Recenzuojama literatūra apie gydymo namuose ir virtualių skyrių modelius, pavyzdžiui, tyrimai, paskelbti JAMA Internal Medicine ir npj Digital Medicine
- Institute for Healthcare Improvement (IHI), pajėgumų valdymo ir alternatyvių priežiūros modelių rekomendacijos

Taip pat žr. [pakartotinio hospitalizavimo dažnis](../pakartotinio-hospitalizavimo-daznis/) – saugos rodiklis, kuris visada turi būti pateikiamas kartu su bet kokiu lovadienių sumažinimo teiginiu tai pačiai pacientų populiacijai.
