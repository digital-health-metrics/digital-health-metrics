# Gultasdienu samazinājums

Gultasdienu samazinājums mēra to stacionāra slimnīcas gultasdienu kopējo skaitu, kas ir novērstas, noteiktu aprūpes epizodi, visbiežāk atveseļošanos pēc operācijas vai akūta stāvokļa ārstēšanu, no tradicionālas uzturēšanās stacionārā pārceļot uz digitāli atbalstītu alternatīvu, piemēram, virtuālo nodaļu vai mājas hospitalizācijas programmu. Tas ir galvenais jaudas rādītājs virtuālo nodaļu un mājas hospitalizācijas iniciatīvām, kas klīniskās aprūpes modeļa izmaiņas pārvērš tieši tajā valūtā (gultu jaudā), ar kuru slimnīcu darbība un sistēmas plānotāji faktiski strādā.

## Kāpēc tas ir svarīgi

Stacionāra gultu jauda ir viens no visierobežotākajiem un dārgākajiem resursiem jebkurā slimnīcu sistēmā, un virtuālās nodaļas vai mājas hospitalizācijas programmas galvenā vērtība ir tā, ka tā var droši nodrošināt noteiktu klīniskās aprūpes līmeni, neaizņemot fizisku gultu, tādējādi atbrīvojot jaudu pacientiem, kurus nav iespējams ārstēt citādi. Gultasdienu samazinājums bieži abstraktu apgalvojumu ("šī programma uzlabo aprūpi") pārvērš konkrētā darbības skaitlī, ar ko tieši var strādāt slimnīcu jaudas plānotāji, finanšu komandas un pasūtītāji: to var izmantot, lai modelētu, vai ieguldījums uzraudzības programmā atmaksājas ar izvairītām gultu izmaksām un cik lielā mērā. Tā kā gultasdienu samazinājumam ir vērtība tikai tad, ja tiek saglabāta pacientu drošība, tas vienmēr jāuzrāda līdzās drošības iznākuma rādītājam (piemēram, atkārtotas hospitalizācijas vai eskalācijas uz stacionāru līmenim) tai pašai populācijai, nekad tā vietā.

## Kā to aprēķina

```
Gultasdienu samazinājums = paredzamās gultasdienas standarta stacionārā aprūpē
                           (pamatojoties uz vēsturiskiem uzturēšanās ilguma
                           datiem salīdzināmai pacientu kohortai) − faktiskās
                           gultasdienas, ko izmantojuši pacienti virtuālajā/
                           digitālajā aprūpes ceļā

Uzrāda katram klīniskajam aprūpes ceļam atsevišķi (piemēram, atveseļošanās
pēc operācijas, akūts elpceļu slimības saasinājums), jo paredzamais
uzturēšanās ilgums dažādiem stāvokļiem ļoti atšķiras, un apvienots
rādītājs par nesaistītiem aprūpes ceļiem nav jēgpilns.
```

## Aprēķina piemērs

Slimnīcas vēsturiskie dati rāda, ka pacientu, kas atveseļojas pēc konkrētas plānveida ķirurģiskas procedūras, vidējais uzturēšanās ilgums stacionārā ir 4 dienas. Virtuālās nodaļas programmā tiek iekļauti 150 pacienti, kas atveseļojas pēc tās pašas procedūras; tie tiek izrakstīti pēc vidēji 1,5 dienām stacionārā, bet atlikušais atveseļošanās laiks tiek uzraudzīts attālināti. Gultasdienu samazinājums ir (4 − 1,5) × 150 = 375 gultasdienas mērījumu periodā. Šis skaitlis jāuzrāda līdzās virtuālās nodaļas kohortas 30 dienu eskalācijas uz stacionāru līmenim un atkārtotas hospitalizācijas līmenim tiem pašiem 150 pacientiem, jo gultasdienu ietaupījums, kas panākts uz ievērojami augstāka eskalācijas vai atkārtotas hospitalizācijas līmeņa rēķina, nav tāds klīnisks ieguvums, kādu liecina virsraksta skaitlis.

## Datu avoti un ierobežojumi

Paredzamajām gultasdienām nepieciešams ticams vēsturiskais salīdzinājuma pamats, vēlams no salīdzināmas pacientu kohortas, kas ārstēta standarta stacionārā aprūpē un kuras klīniskie raksturlielumi (vecums, blakusslimības, procedūras veids, smaguma pakāpe) ir līdzīgi virtuālās nodaļas populācijai, jo salīdzinājums ar nesalīdzināmu vēsturisko vidējo rādītāju riskē pārvērtēt vai nenovērtēt patieso samazinājumu, ja digitāli pārvaldītā kohorta sistemātiski ir veselāka vai slimāka par vēsturisko salīdzināmo grupu. Faktiskās gultasdienas digitālajā aprūpes ceļā iegūst no slimnīcas pašas uzņemšanas, izrakstīšanas un pārvietošanas (ADT) sistēmas; jebkura eskalācija atpakaļ uz stacionāru uzraudzītās atveseļošanās periodā godīgi jāieskaita programmas neizdevumos (kā izmantotas gultasdienas, nevis izslēdzot tās), jo eskalāciju izslēgšana no aprēķina mākslīgi uzpūstu šķietamo samazinājumu.

## Biežākās kļūdas

- **Gultasdienu samazinājuma uzrādīšana bez salīdzināmas drošības salīdzināšanas**: virtuālā nodaļa, kas ietaupa gultasdienas, bet kuras eskalācijas vai atkārtotas hospitalizācijas līmenis ir ievērojami sliktāks nekā standarta aprūpē, nav pierādījusi patiesu uzlabojumu; vienmēr uzrādiet abus kopā.
- **Nesalīdzināma vai novecojuša vēsturiskā salīdzinājuma pamata izmantošana**: salīdzinājums ar vēsturisku kohortu ar atšķirīgu gadījumu sastāvu, blakusslimību slogu vai klīniskās prakses laikmetu var būtiski pārvērtēt vai nenovērtēt patieso gultasdienu ietaupījumu.
- **Eskalāciju atpakaļ uz stacionāru izslēgšana no aprēķina**: pacienta, kuru uzrauga virtuāli, bet atveseļošanās laikā eskalē uz stacionāra gultu, šīs gultasdienas jāieskaita programmas neizdevumos, nevis klusi jāizslēdz no analīzes.
- **Aprēķinu ceļu sajaukšana ar ļoti atšķirīgu paredzamo uzturēšanās ilgumu**: gultasdienu samazinājuma apkopošana klīniski nesaistītos aprūpes ceļos (piemēram, atveseļošanās pēc operācijas un hronisku elpceļu slimību pārvaldība) vienā skaitlī neļauj saprast, kurš konkrētais aprūpes ceļš faktiski rada ietaupījumu.

## Avoti

- NHS England, virtuālo nodaļu un mājas hospitalizācijas programmu vadlīnijas un gultasdienu ietekmes pārskatu standarti
- Recenzēta literatūra par mājas hospitalizācijas un virtuālo nodaļu modeļiem, piemēram, pētījumi, kas publicēti žurnālos JAMA Internal Medicine un npj Digital Medicine
- Institute for Healthcare Improvement (IHI), vadlīnijas par jaudas pārvaldību un alternatīviem aprūpes modeļiem

Skatiet arī: [atkārtotas hospitalizācijas līmenis](../atkārtotas-hospitalizācijas-līmenis/), drošības rādītājs, kas vienmēr jāuzrāda līdzās jebkuram gultasdienu samazinājuma apgalvojumam tai pašai pacientu populācijai.
