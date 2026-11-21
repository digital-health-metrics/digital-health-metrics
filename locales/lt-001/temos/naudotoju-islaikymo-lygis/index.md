# Naudotojų išlaikymo lygis

Naudotojų išlaikymo lygis – tai pradiniu laikotarpiu aktyvių naudotojų, kurie lieka aktyvūs vėlesniu laikotarpiu, dalis, o jo atvirkštinis rodiklis, nutekėjimo (angl. churn, arba iškritimo) lygis, – dalis tų, kurie visai nustoja naudotis produktu. Pacientų portalo naudojimo lygis (žr. tą temą) matuoja, ar pacientas kada nors prasmingai aktyvuoja skaitmeninės sveikatos produktą, o išlaikymas matuoja, ar jis juo naudojasi toliau – ir bet kuriam prenumeratos tipo ar tęstinės priežiūros skaitmeninės sveikatos produktui išlaikymas paprastai yra vienas rodiklis, glaudžiausiai susijęs ir su klinikiniu poveikiu, ir su komerciniu tvarumu.

## Kodėl tai svarbu

Skaitmeninės sveikatos produktas, negalintis išlaikyti naudotojų, negali užtikrinti nuolatinės klinikinės naudos, kad ir kokie stiprūs būtų jo pradiniai pritaikymo ar aktyvavimo skaičiai: lėtinės būklės valdymo priemonė, naudota dvi savaites ir paskui atsisakyta, vargu ar pajudins biometrinį rezultatą, priklausantį nuo mėnesius trunkančio nuolatinio elgesio pokyčio. Išlaikymas taip pat yra vienas komerciškai reikšmingiausių rodiklių, apie kuriuos skaitmeninės sveikatos įmonė praneša investuotojams ir mokėtojams, nes išlaikymo kreivės (kritimo laikui bėgant forma, o ne vienas išlaikymo procentas) atskleidžia, ar produktas rado tikrai tvarų naudojimo modelį, ar tiesiog sulaukia naujumo skatinamo pradinio susidomėjimo, kuris nuspėjamai blėsta. Išlaikymo kreivė, kuri po pradinio kritimo išsilygina (pacientai, praėję pirmą mėnesį, linkę likti), yra labai kitoks ir daug sveikesnis signalas nei kreivė, kuri toliau nuosekliai krenta be dugno.

## Kaip skaičiuojama

```
Išlaikymo lygis (laikotarpis N) = laikotarpiu N aktyvūs naudotojai, kurie
                             buvo aktyvūs ir pradinės kohortos
                             laikotarpiu / naudotojai pradinės kohortos
                             laikotarpiu × 100

Nutekėjimo lygis = 1 − išlaikymo lygis (tam pačiam laikotarpiui)

Pateikite kaip kohortos išlaikymo kreivę (išlaikymas 1, 2, 3… dieną /
savaitę / mėnesį), o ne vieno laiko taško skaičių, nes vienas momentinis
vaizdas sumaišo neseniai prisijungusius naudotojus (kurie dar nespėjo
nutekėti) su seniai esančiais.
```

## Skaičiavimo pavyzdys

Skaitmeninės sveikatos programėlė sausį įtraukia 1 000 naujų naudotojų kohortą. Iki 1 mėnesio pabaigos 640 iš tų pradinių 1 000 vis dar aktyvūs (1 mėnesio išlaikymas 64 %). Iki 3 mėnesio pabaigos aktyvūs lieka 410 (3 mėnesio išlaikymas 41 %). Iki 6 mėnesio aktyvūs lieka 380 (6 mėnesio išlaikymas 38 %). Šios kreivės forma – staigus pradinis kritimas, po kurio išsilyginimas tarp 3 ir 6 mėnesių – rodo, kad produktas išlaiko stabilų naudotojų branduolį, kai jie įveikia pradinę pritaikymo kliūtį, o tai yra gerokai kitoks ir labiau skatinantis signalas nei jei kritimas nuo 3 iki 6 mėnesio būtų tęsęsis tokiu pat tempu kaip nuo 1 iki 3 mėnesio.

## Duomenų šaltiniai ir apribojimai

Išlaikymas skaičiuojamas iš paties produkto prisijungimo ar aktyvumo įvykių žurnalų, nuosekliai apibrėžiant „aktyvus“ (pavyzdžiui, bent viena atitinkanti sesija per laikotarpį) kiekvienoje lyginamoje kohortoje. Kohortas reikėtų lyginti vienodomis sąlygomis – ta pačia pradine „aktyvaus“ apibrėžtimi, tos pačios trukmės stebėjimo langu – nes net nedideli apibrėžčių skirtumai (30 dienų ar 28 dienų mėnesiai, griežtesnis ar laisvesnis „aktyvaus“ slenkstis) gali pakeisti pateikiamą išlaikymo procentą keliais punktais be jokio realaus naudotojų elgesio skirtumo. Sezoniniai poveikiai įprasti sveikatos programėlėms, susijusioms su Naujųjų metų pasižadėjimais ar konkrečiais sveikatos sąmoningumo laikotarpiais, todėl kohortų palyginimas metai iš metų paprastai yra informatyvesnis nei gretimų kohortų iš skirtingų metų laikų lyginimas.

## Dažniausios klaidos

- **Vieno išlaikymo momentinio vaizdo, o ne kreivės pateikimas**: vienas „X % naudotojų vis dar aktyvūs“ skaičius be kritimo laikui bėgant formos negali atskirti produkto, kurio kreivė išsilygina (sveika), nuo nuolat mažėjančio (nesveika).
- **„Aktyvaus“ apibrėžties keitimas tarp ataskaitų laikotarpių**: aktyvaus naudotojo apibrėžties sušvelninimas (pavyzdžiui, pasyvaus programėlės atidarymo skaičiavimas vietoj atlikto veiksmo) gali padaryti, kad išlaikymas atrodytų pagerėjęs, nors faktinis naudojimas visai nepasikeitė.
- **Kohortos sezoniškumo ignoravimas**: sausio kohortos išlaikymo (dažnai išpučiamo Naujųjų metų pasižadėjimų įtraukimo, kuris vidutiniškai atneša mažiau motyvuotą kohortą) palyginimas su kohorta, pritraukta kitu metų laiku, gali duoti klaidinančias tendencijų išvadas.
- **Organinių ir mokamu būdu pritrauktų kohortų maišymas**: skirtingais kanalais pritraukti naudotojai dažnai išlieka labai skirtingai; sujungimas į vieną bendrą išlaikymo skaičių gali paslėpti konkretaus kanalo išlaikymo problemą.

## Šaltiniai

- Recenzuojama literatūra apie skaitmeninės sveikatos programėlių įtraukimą ir iškritimą, pavyzdžiui, tyrimai, paskelbti Journal of Medical Internet Research (JMIR mHealth and uHealth)
- Digital Therapeutics Alliance, geriausios praktikos rekomendacijos dėl skaitmeninių terapijų įtraukimo ir išlaikymo matavimo
- Pramonės orientyrų ataskaitos apie mobiliųjų sveikatos programėlių išlaikymą, iš analitikos platformų ir skaitmeninės sveikatos rinkos tyrimų organizacijų

Taip pat žr. [pacientų įtraukimo nuoseklumo lygis](../pacientu-itraukimo-nuoseklumo-lygis/) – matuojantis įtraukimo kokybę tarp išlaikytų naudotojų, skirtingą nuo to, ar jie apskritai lieka įtraukti.
