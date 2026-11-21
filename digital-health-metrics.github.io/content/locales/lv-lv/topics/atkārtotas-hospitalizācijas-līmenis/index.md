# Atkārtotas hospitalizācijas līmenis

Atkārtotas hospitalizācijas līmenis ir to izrakstīto pacientu īpatsvars, kuri neplānoti atkārtoti tiek hospitalizēti noteiktā laika logā pēc izrakstīšanas, visbiežāk 30 dienu laikā. Digitālajā veselībā tas ir rādītājs, kas vistiešāk saistīts ar maksātāju ekonomiku un vērtībā balstītas aprūpes līgumiem: attālinātās uzraudzības, pēcizrakstīšanas novērošanas vai digitālās aprūpes pāreju programma, kas nespēj uzrādīt ticamu ietekmi uz atkārtotām hospitalizācijām, visticamāk nesaņems turpmāku atlīdzības atbalstu, lai cik labi izskatītos tās iesaistes skaitļi.

## Kāpēc tas ir svarīgi

Neplānota atkārtota hospitalizācija ir dārga, traucē pacientam un daudzās veselības sistēmās tagad tiek tieši sodīta: tādas shēmas kā ASV Hospital Readmissions Reduction Program samazina maksājumus slimnīcām ar augstāku par gaidīto atkārtotu hospitalizāciju līmeni konkrētiem stāvokļiem, tāpēc slimnīcas aktīvi pasūta digitālās pēcizrakstīšanas un attālinātās uzraudzības programmas, kuru mērķis ir tās samazināt. Ievērojama atkārtotu hospitalizāciju daļa tiek uzskatīta par potenciāli novēršamu, un to izraisa nepietiekami izrakstīšanas norādījumi, palaisti garām kontrolvizītes, zāļu pārpratumi vai nenovērsta simptomu pasliktināšanās, ko labi izstrādāts digitālais saskarsmes punkts var atklāt agrāk, un tieši šo plaisu digitālie pārejas aprūpes rīki risina. Atkārtotas hospitalizācijas līmenis vienmēr jālasa līdzās gadījumu sastāvam: programmai, kas apkalpo slimāku, sarežģītāku populāciju, būs strukturāli augstāks pamata līmenis nekā tai, kas apkalpo veselāku populāciju, neatkarīgi no programmas kvalitātes.

## Kā to aprēķina

```
30 dienu atkārtotas hospitalizācijas līmenis = neplānotas atkārtotas hospitalizācijas
                           30 dienu laikā pēc izrakstīšanas /
                           kopējais indeksa izrakstīšanu skaits × 100

No skaitītāja izslēdz: plānotas atkārtotas hospitalizācijas (piem.,
plānota turpmākā procedūra) un pārvietošanas, kas ir tās pašas aprūpes
epizodes turpinājums, nevis jauna hospitalizācija.

Ja iespējams, koriģē pēc riska, izmantojot atzītu gadījumu sastāva vai
blakusslimību indeksu, pirms salīdzina līmeņus starp dažādām pacientu
populācijām vai laika periodiem.
```

## Aprēķina piemērs

Slimnīca ceturksnī izraksta 1 200 pacientu ar sirds mazspēju. No tiem 210 tiek atkārtoti hospitalizēti 30 dienu laikā, no kuriem 15 ir plānotas atkārtotas hospitalizācijas ieplānotai procedūrai un tiek izslēgtas. Neplānotas 30 dienu atkārtotas hospitalizācijas līmenis ir (210 − 15) / 1 200 × 100 = 16,25 %. Attālinātās uzraudzības programma tiek ieviesta 400 šo pacientu apakškopai (atlasīti pēc klīniskā riska, nevis nejauši), un viņu neplānotas atkārtotas hospitalizācijas līmenis ir 14 %, salīdzinot ar 18 % 800 pacientiem, kas nav iekļauti. Tā kā iekļaušana balstījās uz klīnisko risku, nevis nejaušu iedalījumu, šī atšķirība ir norāde, nevis pārliecinošs pierādījums programmas ietekmei, un tā jāinterpretē līdzās riska koriģēšanas analīzei, nevis jāuztver burtiski.

## Datu avoti un ierobežojumi

Atkārtotas hospitalizācijas dati parasti tiek ņemti no slimnīcas pašas uzņemšanas, izrakstīšanas un pārvietošanas (ADT) plūsmas atkārtotām hospitalizācijām tajā pašā iestādē, taču pacients, kas atkārtoti hospitalizēts citā slimnīcā, šajā plūsmā neparādīsies vispār, tāpēc vienas slimnīcas atkārtotu hospitalizāciju uzskaite sistemātiski nenovērtē patiesos līmeņus, ja to nepapildina ar reģionālās veselības informācijas apmaiņas datiem, maksātāju pieprasījumu datiem vai štata līmeņa visu maksātāju datubāzēm. Attiecināšana uz digitālo programmu prasa piesardzību: pacienti, kas brīvprātīgi piesakās attālinātās uzraudzības programmai, reti ir nejauša izrakstīto populācijas izlase, tāpēc naivs iekļauto un neiekļauto pacientu atkārtotas hospitalizācijas līmeņu salīdzinājums mēdz būt sajaukts tieši ar tiem atlases efektiem, kas dažus pacientus padarīja vairāk gatavus iekļauties jau sākotnēji.

## Biežākās kļūdas

- **Neapstrādātu, nekoriģētu pēc riska līmeņu salīdzināšana starp populācijām**: programma, kas apkalpo slimāku populāciju, uzrādīs augstāku neapstrādātu atkārtotas hospitalizācijas līmeni nekā tā, kas apkalpo veselāku populāciju, pat ja pati programma ir efektīvāka; pirms salīdzināšanas vienmēr koriģējiet pēc riska.
- **Atkārtotu hospitalizāciju citās iestādēs nenovērtēšana**: paļaušanās tikai uz vienas slimnīcas pašas ADT datiem palaidīs garām atkārtotas hospitalizācijas citur un nenovērtēs patieso līmeni, īpaši apgabalos ar vairākām konkurējošām slimnīcu sistēmām.
- **Atlases novirze brīvprātīgā programmas iekļaušanā**: pacienti, kas izvēlas iekļauties digitālajā novērošanas programmā, bieži sistemātiski atšķiras (veselības pratības, sociālā atbalsta vai motivācijas ziņā) no tiem, kuri neiekļaujas, sajaucot jebkuru naivu pirms/pēc vai iekļauto/neiekļauto salīdzinājumu.
- **Katras atgriešanās tajā pašā iestādē skaitīšana par atkārtotu hospitalizāciju**: plānota atkārtota hospitalizācija (piemēram, plānota otrā posma procedūra) nav neveiksmīgas izrakstīšanas signāls un jāizslēdz no skaitītāja, nevis jāsapludina ar patiesi neplānotām atgriešanās reizēm.

## Avoti

- Centers for Medicare & Medicaid Services (CMS), Hospital Readmissions Reduction Program un Hospital-Wide Readmission rādītāja specifikācijas
- Institute for Healthcare Improvement (IHI), norādījumi par novēršamu atkārtotu hospitalizāciju samazināšanu
- Recenzēta literatūra par digitālās attālinātās uzraudzības un pārejas aprūpes iejaukšanās pasākumiem atkārtotu hospitalizāciju samazināšanai, piemēram, pētījumi, kas publicēti JAMA Network Open un npj Digital Medicine

Skatiet arī: [triāžas maršrutēšanas precizitāte](../triāžas-maršrutēšanas-precizitāte/), jo nepiemērota sākotnējā maršrutēšana pati var būt novēršamu hospitalizāciju tālāks virzītājs.
