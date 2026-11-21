# Triažo nukreipimo tikslumas

Triažo nukreipimo tikslumas – tai pacientų kontaktų, kuriuose automatinė ar dirbtinio intelekto padedama triažo priemonė teisingai nukreipia pacientą į tinkamą priežiūros lygį ir aplinką – pavyzdžiui, savipagalbą, pirminę priežiūrą, neatidėliotiną pagalbą ar skubiąją pagalbą – vertinant pagal klinikiniu požiūriu patvirtintą atskaitos standartą, dalis. Tai saugos ir veiksmingumo rodiklis bet kuriems skaitmeniniams „priekinėms durims“, simptomų tikrintuvui ar DI triažo sistemai: visa priemonės vertės pasiūlymo esmė remiasi tuo, kad pacientai nukreipiami teisingai, greitai ir nuosekliai.

## Kodėl tai svarbu

Netiksli triažo priemonė daro žalą abiem kryptimis: nepakankamas triažas (paciento nukreipimas į žemesnį priežiūros lygį, nei jam reikia) gali atidėti tikros skubios būklės gydymą, o perteklinis triažas (paciento nukreipimas į aukštesnį priežiūros lygį, nei jam reikia) švaisto ribotus skubiosios ir neatidėliotinos pagalbos pajėgumus ir didina išlaidas bei paciento nerimą be jokios klinikinės naudos. Kadangi šie du klaidų tipai turi labai skirtingas pasekmes, triažo nukreipimo tikslumą visada reikėtų pateikti kartu su klaidų kryptimi, o ne kaip vieną bendrą tikslumo skaičių, kuris paslepia, ar priemonė klysta saugiai, ar pavojingai. Reguliuotojai ir sveikatos sistemos, vertinančios DI triažo priemonę diegimui, vis dažniau reikalauja tokio stratifikuoto tikslumo pateikimo kaip klinikinio patvirtinimo sąlygos, ypač priemonėms, veikiančioms su bet kokiu savarankiškumo laipsniu nuo gydytojo.

## Kaip skaičiuojama

```
Triažo nukreipimo tikslumas = teisingai nukreipti kontaktai / visi
                              triažuoti kontaktai × 100

Pateikite nepakankamą ir perteklinį triažą atskirai:
  Nepakankamo triažo dalis = kontaktai, nukreipti į žemesnį skubumo
                       lygį nei atskaitos standartas / visi triažuoti
                       kontaktai × 100
  Perteklinio triažo dalis = kontaktai, nukreipti į aukštesnį skubumo
                       lygį nei atskaitos standartas / visi triažuoti
                       kontaktai × 100

Atskaitos standartas paprastai yra to paties atvejo retrospektyvi
gydytojo peržiūra, kai įmanoma, nematant priemonės rezultato.
```

## Skaičiavimo pavyzdys

DI simptomų tikrintuvo priemonė per mėnesį atlieka 5 000 pacientų kontaktų triažą. Aklas gydytojų atliktas atsitiktinės 500 šių kontaktų imties vertinimas nustato, kad 430 buvo nukreipti į teisingą skubumo lygį (tikslumas 86 %), 45 buvo nepakankamai triažuoti (9 %), o 25 – perteklinai triažuoti (5 %). 9 % nepakankamo triažo dalis yra skaičius, kurį skubiausiai reikia tirti, nes jis reiškia kontaktus, kai pacientas galėjo būti nukreiptas į mažiau skubią priežiūrą, nei jam iš tikrųjų reikėjo; 5 % perteklinio triažo dalis yra pajėgumų ir išlaidų rūpestis, bet ne tiesioginis saugos.

## Duomenų šaltiniai ir apribojimai

Atskaitos standartas, pagal kurį matuojamas triažo tikslumas, yra labai svarbus: vieno gydytojo atlikta peržiūra įneša to gydytojo paties sprendimų kintamumą, todėl patikimam tikslumo skaičiui paprastai reikia arba kelių nepriklausomų vertintojų su dokumentuotu vertintojų tarpusavio sutarimu, arba palyginimo su vėlesniu, patvirtintu klinikiniu rezultatu (kokios priežiūros pacientui iš tikrųjų reikėjo, nustatyta po fakto). Svarbi ir atranka: peržiūrint tik patogią kontaktų imtį ar tik tuos, kurie pažymėti kaip neįprasti, negausime skaičiaus, kuris apibendrintų bendrą priemonės veikimą. Tikslumo skaičius reikėtų pateikti atskirai pagal pagrindinį simptomą ar nusiskundimo kategoriją, kai leidžia atvejų apimtis, nes triažo priemonės retai veikia vienodai visoms būklėms.

## Dažniausios klaidos

- **Vieno bendro tikslumo skaičiaus pateikimas**: nepakankamo ir perteklinio triažo sujungimas į vieną skaičių paslepia, ar priemonės klaidos linksta į pavojingesnį gedimo tipą; visada pateikite juos atskirai.
- **Vieno, neakluojamo vertintojo naudojimas kaip atskaitos standarto**: tai gali tyliai iškreipti tikslumo skaičių link to, ką tas vertintojas būtų pats padaręs, o ne nepriklausomo klinikinio standarto.
- **Patvirtinimas tik retrospektyviais, patogiais duomenimis**: tikrasis priemonės nukreipimo tikslumas gyvu, dviprasmišku paciento įvedimu dažnai iš esmės skiriasi nuo jo tikslumo kuruotame patvirtinimo rinkinyje, sudarytame kūrimo metu.
- **Veikimo dreifo po diegimo ignoravimas**: DI triažo modelio tikslumas gali blogėti laikui bėgant, kintant pacientų populiacijoms, pagrindiniams simptomams ar priežiūros kelių prieinamumui; tikslumą reikėtų perskaičiuoti periodiškai, o ne patvirtinti vieną kartą ir laikyti stabiliu.

## Šaltiniai

- ONC / HealthIT.gov, rekomendacijos dėl klinikinių sprendimų palaikymo ir DI palaikomų priemonių saugos bei kokybės užtikrinimo
- Recenzuojama literatūra apie simptomų tikrintuvų ir DI triažo priemonių tikslumą, pavyzdžiui, tyrimai, paskelbti JAMIA, npj Digital Medicine ir BMJ Health & Care Informatics
- NHS England, rekomendacijos dėl skaitmeninio triažo ir nuotolinių konsultacijų priemonių klinikinės saugos (DCB0129/DCB0160 klinikinės rizikos valdymo standartai)

Taip pat žr. [skaitmeninių siuntimų apdorojimo trukmė](../skaitmeniniu-siuntimu-apdorojimo-trukme/) – proceso rodiklis, tiesiausiai einantis po triažo sprendimo.
