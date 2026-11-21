# Gydytojų perdegimo lygis

Gydytojų perdegimo lygis matuoja gydytojų, pranešančių apie reikšmingus perdegimo simptomus – dažniausiai vertinamus kaip emocinis išsekimas, depersonalizacija ar menkas asmeninių pasiekimų pojūtis per patvirtintą apklausos priemonę – dalį, o skaitmeninės sveikatos srityje sekamas kartu su gydytojams skirtų skaitmeninių priemonių naštos rodikliais, tokiais kaip laikas, praleistas popierizmui ar elektroninės sveikatos istorijos (EHR) dokumentavimui. Jis įtrauktas į skaitmeninės sveikatos rodiklių sistemą, nes blogai suprojektuota klinikinė programinė įranga yra gerai dokumentuotas, išmatuojamas perdegimo veiksnys, o skaitmeninės sveikatos priemonės sėkmė niekada neturėtų būti vertinama vien pagal pacientams skirtus rodiklius, ignoruojant jos poveikį gydytojams, kurie turi ja naudotis.

## Kodėl tai svarbu

Skaitmeninės sveikatos priemonės dažnai diegiamos aiškiu tikslu sumažinti gydytojų administracinę naštą, tačiau prastai suprojektuota elektroninės sveikatos istorijos darbo eiga, per didelis mažai vertingų klinikinių įspėjimų kiekis (žr. klinikinių įspėjimų ignoravimo dažnį) ar nerangi telesveikatos sąsaja gali perdegimą taip pat lengvai padidinti, kaip ir sumažinti – o priemonė, kuri pagerina pacientams skirtą įtraukimo rodiklį, tyliai didindama gydytojų dokumentavimo naštą, nepasiekė grynai teigiamo rezultato visai priežiūros sistemai. Klinikinėje literatūroje perdegimas stipriai susijęs su medicinos klaidomis, gydytojų kaita ir prastesne priežiūros kokybe, todėl jis veikia kaip tolesnių saugos ir darbo jėgos tvarumo problemų pirmaujantis rodiklis, o ne vien darbo vietos pasitenkinimo smulkmena. Bet kuri skaitmeninės sveikatos programa, teigianti mažinanti klinikinę naštą, turėtų sugebėti parodyti šį teiginį palyginti su išmatuota bazine linija, užuot jį teigusi kaip projektavimo ketinimą.

## Kaip skaičiuojama

```
Gydytojų perdegimo lygis = gydytojai, viršijantys patvirtintos
                           priemonės perdegimo slenkstį / visi
                           apklausti gydytojai × 100

Dažnos patvirtintos priemonės: Maslach Burnout Inventory (MBI),
Professional Fulfillment Index arba vieno klausimo perdegimo
patikros klausimas, patvirtintas pagal išsamesnę priemonę.

Pateikite kartu su skaitmeninės naštos pakaitiniu rodikliu, kai
galima:
  EHR laikas sistemoje vienam paciento kontaktui
  Dokumentavimo laikas ne suplanuotomis klinikinėmis valandomis
  („pižamos laikas“)
```

## Skaičiavimo pavyzdys

Ligoninių sistema apklausia 300 gydytojų naudodama Maslach Burnout Inventory prieš įdiegiant aplinkos klinikinio dokumentavimo priemonę, skirtą sumažinti užrašų rašymo laiką. Pradiniu momentu 135 gydytojai (45 %) viršija perdegimo slenkstį, o EHR audito žurnalo duomenys rodo vidutiniškai 58 minutes per dieną dokumentavimo laiko vienam gydytojui ne suplanuotomis klinikinėmis valandomis. Praėjus šešiems mėnesiams po priemonės diegimo, pakartotinė tų pačių gydytojų apklausa rodo 108 (36 %) viršijančius perdegimo slenkstį, o dokumentavimo laikas ne darbo valandomis sumažėja iki 34 minučių per dieną. Koreliuojantis judėjimas tiek perdegimo lygyje, tiek objektyviame iš EHR gaunamame pakaitiniame rodiklyje sustiprina argumentą, kad priemonė prisideda prie pagerėjimo, nors formaliame palyginime prieš / po vis tiek reikėtų atsižvelgti į kitus tuo pat metu vykusius darbo krūvio pokyčius.

## Duomenų šaltiniai ir apribojimai

Perdegimo apklausos duomenys gaunami iš patvirtintos priemonės, taikomos periodiškai (kasmet ar dažniau), o atsako dalis yra svarbi: žema atsako dalis rizikuoja neatsakiusiųjų šališkumu, kai labiausiai perdegę gydytojai (turintys mažiausiai galimybių užpildyti papildomą apklausą) yra sistemingai nepakankamai atstovaujami, nuvertinant tikrąjį lygį. Iš EHR gaunami skaitmeninės naštos pakaitiniai rodikliai – laikas sistemoje, dokumentavimo laikas ne darbo valandomis, paspaudimų skaičius vienam kontaktui – yra naudingi kaip objektyvūs, nuolat prieinami periodinių apklausos duomenų papildymai, tačiau konkrečioje organizacijoje juos reikėtų patvirtinti pagal apklausoje nurodytą perdegimą, prieš laikant patikimu savarankišku perdegimo rodikliu, nes santykis tarp laiko sistemoje ir faktinio perdegimo gali skirtis pagal specialybę ir individualų darbo stilių.

## Dažniausios klaidos

- **Pasikliovimas vien iš EHR gaunamais pakaitiniais rodikliais**: laikas sistemoje ir paspaudimų skaičius koreliuoja su perdegimu apskritai, bet nėra pats perdegimas ir gali klaidinti atskirus gydytojus ar specialybes su iš tikrųjų skirtingais dokumentavimo poreikiais.
- **Žema apklausos atsako dalis, paslepianti tikrąjį lygį**: perdegimo labiausiai paveikti gydytojai dažnai mažiausiai gali atsakyti į savanorišką apklausą, todėl žemos atsako dalies rezultatas iškreipiamas link dirbtinai sveikiau atrodančio skaičiaus.
- **Perdegimo pokyčio priskyrimas vienai priemonei neatsižvelgus į painiavos veiksnius**: perdegimą veikia daug vienu metu veikiančių veiksnių (personalo lygiai, pacientų srautas, organizaciniai pokyčiai); palyginime prieš / po aplink vienos priemonės diegimą šiuos veiksnius reikėtų kontroliuoti, kai tik įmanoma, užuot darius prielaidą apie vieną priežastį.
- **Perdegimo laikymas vien individualaus atsparumo problema**: perdegimo tyrimai nuosekliai nustato, kad darbo krūvis, sistemos projektavimas ir organizaciniai veiksniai yra pagrindiniai veiksniai; jo pateikimas vien kaip individualaus gydytojo problemos nukreipia intervenciją nuo skaitmeninių priemonių ir darbo eigų, kurios dažnai yra tikroji pagrindinė priežastis.

## Šaltiniai

- Maslach Burnout Inventory (MBI), patvirtinta apklausos priemonė ir vertinimo rekomendacijos
- American Medical Association (AMA), gydytojų perdegimo tyrimai ir STEPS Forward praktikos gerinimo programa
- Recenzuojama literatūra apie EHR naudojimo patogumą, dokumentavimo naštą ir gydytojų perdegimą, pavyzdžiui, tyrimai, paskelbti JAMIA ir Annals of Internal Medicine

Taip pat žr. [klinikinių įspėjimų ignoravimo dažnis](../klinikiniu-ispejimu-ignoravimo-daznis/) – įspėjimų nuovargis yra vienas konkretesnių, išmatuojamų gydytojų perdegimo veiksnių, kuriuos skaitmeninės priemonės gali tiesiogiai spręsti.
