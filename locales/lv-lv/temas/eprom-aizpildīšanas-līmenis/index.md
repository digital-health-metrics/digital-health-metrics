# ePROM aizpildīšanas līmenis

ePROM aizpildīšanas līmenis mēra to plānoto elektronisko pacientu ziņoto iznākumu mērījumu (ePROM) īpatsvaru, kas faktiski tiek aizpildīti. ePROM ir standartizētas, validētas anketas, kas fiksē paša pacienta ziņojumu par simptomiem, funkcijām vai dzīves kvalitāti un tiek piegādātas digitāli, nevis uz papīra. Tas ir tikpat datu kvalitātes, cik iesaistes rādītājs: PROM programmas klīniskā un pētnieciskā vērtība pilnībā ir atkarīga no tā, vai aizpildīšanas līmenis ir pietiekami augsts, lai savāktās atbildes pārstāvētu visu iekļauto populāciju, nevis tikai visvairāk iesaistīto vai vismazāk simptomātisko apakškopu.

## Kāpēc tas ir svarīgi

Pacientu ziņotie iznākumi ir tiešs, pacienta apliecināts papildinājums ārsta ierakstītiem vai ierīču izmērītiem datiem, fiksējot veselības dimensijas (sāpes, funkcijas, dzīves kvalitāti), ko kartes pārskats vai biometriskais rādījums nevar; PROM vākšanas digitalizācija pastāv tieši tāpēc, lai šos datus padarītu lētākus un vieglāk savācamus plašā mērogā, nekā to jebkad ļāva administrēšana uz papīra. Taču PROM programma ar zemu aizpildīšanas līmeni riskē ar konkrētu un nopietnu novirzi: pacienti, kuri jūtas sliktāk, bieži retāk aizpilda garu anketu, tāpēc krītošs aizpildīšanas līmenis pats par sevi var būt agrīnā brīdinājuma pazīme par pasliktinošos iedzīvotāju veselību, un zems kopējais aizpildīšanas līmenis var likt savāktajām atbildēm izskatīties labākām nekā patiesās populācijas pieredze, vienkārši tāpēc, ka visvairāk simptomātiskie pacienti ir nepietiekami pārstāvēti aizpildītajā. Tāpēc aizpildīšanas līmenis vienmēr jāuzrāda līdzās pašiem PROM vērtējumiem, nevis jāuzskata par otršķirīgu darbības detaļu.

## Kā to aprēķina

```
ePROM aizpildīšanas līmenis = pilnībā aizpildītie ePROM / nosūtītie vai plānotie ePROM × 100

Uzrāda atsevišķi:
  Sākotnējais aizpildīšanas līmenis   (pirmā anketa uzraudzības
                                       secībā)
  Longitudinālais aizpildīšanas līmenis (turpmākās anketas notiekošā
                                       uzraudzības secībā, kas parasti
                                       laika gaitā samazinās un jāseko
                                       kā tendence, nevis vienam skaitlim)

"Daļēji aizpildīta" anketa jādefinē un jāuzrāda atsevišķi gan no
"pilnībā aizpildītas", gan no "nesāktas".
```

## Aprēķina piemērs

Onkoloģijas klīnika nosūta validētu simptomu sloga ePROM 400 pacientiem pirms katras ikmēneša kontrolvizītes. Pirmajā mēnesī 340 pacienti anketu aizpilda pilnībā (aizpildīšanas līmenis 85 %), 30 aizpilda daļēji un 30 nesāk. Līdz tās pašas uzraudzības secības sestajam mēnesim pilnīgas atbildes ir kritušās līdz 260 no tās pašas 400 pacientu kohortas (65 %), kas ir nozīmīgs longitudinālais kritums, kuru pilnībā palaistu garām, ja kā statisks kopējais rādītājs tiktu uzrādīts tikai pirmā mēneša 85 %. Izpētot, kuri pacienti atkrīt (pēc simptomu smaguma, slimības stadijas vai vecuma), var atklāt, vai kritums atspoguļo aptaujas nogurumu, pasliktinošos simptomus, kas apgrūtina anketas aizpildīšanu, vai tehnisku piekļuves šķērsli.

## Datu avoti un ierobežojumi

Aizpildīšanas dati nāk no ePROM platformas pašas piegādes un atbilžu žurnāliem, kas var atšķirt stāvokļus "nesākta", "daļēji aizpildīta" un "pilnībā aizpildīta"; šī atšķirība vienmēr jāsaglabā un jāuzrāda, nevis jāsakļauj binārā aizpildīts/neaizpildīts skaitlī, jo daļēja aizpildīšana bieži norāda uz konkrētu anketas punktu, kur pacienti saskaras ar grūtībām vai pārtrauc iesaisti. Aizpildīšanas līmenis jāinterpretē līdzās anketas piegādes veidam (īsziņas saite, lietotnes paziņojums vai piegādes metode, kas prasa pieteikšanos portālā), jo piegādes berze pati ietekmē aizpildīšanu neatkarīgi no anketas satura vai pacienta pamata stāvokļa. Pašam PROM vienmēr jāizmanto validēts instruments (nevis ad hoc jautājumu kopums), jo nevalidēta instrumenta aizpildīšanas līmenis neko ticamu neliecina par iegūto datu klīnisko noderīgumu pat tad, ja aizpildīšana ir augsta.

## Biežākās kļūdas

- **Krītoša aizpildīšanas līmeņa uzskatīšana tikai par piegādes problēmu**: longitudinālais aizpildīšanas kritums var atspoguļot patiesi pasliktinošos pacientu simptomus (pacienti ir pārāk slimi, lai aizpildītu aptauju), nevis aptaujas nogurumu vai tehnisku problēmu, un šī atšķirība ir ārkārtīgi svarīga klīniskajai interpretācijai.
- **Daļējas un pilnīgas aizpildīšanas sapludināšana vienā kategorijā**: daļēji aizpildīta anketa ir būtiski citādi kvalitatīvi dati nekā pilnībā aizpildīta; uzrādiet tās atsevišķi un izpētiet, kurā anketas plūsmas vietā pacienti tendēti to pamest.
- **Aizpildīšanas līmeņa uzrādīšana, neuzrādot atbildes novirzes risku**: mērens aizpildīšanas līmenis jāpavada ar izpēti, vai atbildētāji sistemātiski atšķiras (pēc simptomu smaguma, vecuma, digitālās pratības) no neatbildētājiem, jo PROM vērtējumi, kas aprēķināti tikai no atbildētājiem, var nepareizi atspoguļot visu populāciju.
- **Nevalidētas vai pašu izveidotas anketas izmantošana**: aizpildīšanas līmenis ir bezjēdzīgs kā datu kvalitātes signāls, ja aizpildāmais instruments pats nav klīniski validēts attiecīgajam stāvoklim un mērāmajai populācijai.

## Avoti

- International Consortium for Health Outcomes Measurement (ICHOM), standarta kopu izstrāde un PROM ieviešanas norādījumi
- U.S. Food and Drug Administration (FDA), norādījumi par pacientu ziņotiem iznākumu mērījumiem klīniskajos pētījumos un regulatīvajos iesniegumos
- Recenzēta literatūra par elektronisko PROM ieviešanu un aizpildīšanas līmeņiem, piemēram, pētījumi, kas publicēti Quality of Life Research un Journal of Medical Internet Research (JMIR)

Skatiet arī: [pacientu neto ieteikšanas rādītājs](../pacientu-neto-ieteikšanas-rādītājs/), saistīts, bet atšķirīgs pacientu ziņots rādītājs, kas mēra apmierinātību, nevis klīnisko iznākumu.
