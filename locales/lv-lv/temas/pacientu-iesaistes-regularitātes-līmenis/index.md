# Pacientu iesaistes regularitātes līmenis

Pacientu iesaistes regularitātes līmenis mēra, cik regulāri iekļautais pacients laika gaitā mijiedarbojas ar digitālās veselības produktu, piemēram, reģistrējot uzturu vai simptomus, fiksējot fiziskās aktivitātes vai skatot veselības datus, nevis tikai to, vai viņš to vispār ir izmantojis. Tas ir longitudinālais rādītājs, kas atšķiras no brīža aktīvo lietotāju skaita: diviem pacientiem var būt identisks statuss "šomēnes lietoja lietotni", bet viens veic ierakstus katru dienu, bet otrs veic vienu ierakstu un pazūd uz trim nedēļām, un tikai regularitātes rādītājs tos atšķir.

## Kāpēc tas ir svarīgi

Ilgstoša, regulāra mijiedarbība ar digitālās veselības rīku ir viens no uzticamākajiem klīniskā ieguvuma priekšlaicīgajiem rādītājiem, īpaši no uzvedības atkarīgiem stāvokļiem, piemēram, diabētam, svara pārvaldībai un garīgajai veselībai, kur rīka vērtība izriet no ieraduma, ko tas atbalsta, nevis no kādas atsevišķas sesijas. Produkts var uzrādīt veselīgu ikmēneša aktīvo lietotāju skaitu, faktiski apkalpojot populāciju, kas pieteicas vienreiz un attālinās, jo ikmēneša aktīvā lietošana ir zema latiņa, kas neko nesaka par lietošanas modeli mēneša ietvaros; regularitātes rādītāji to atklāj tā, kā to nevar vienkārši aktivitāšu skaitļi. Tā kā regularitāti ir arī grūtāk uzturēt mēnešiem, nevis nedēļām, tā ir godīgāks produkta kvalitātes un klīniskās atbilstības signāls nekā īsa loga iesaistes skaitļi, kas ir pakļauti jaunuma efektiem uzreiz pēc uzsākšanas.

## Kā to aprēķina

```
Iesaistes regularitātes līmenis = nedēļas ar vismaz vienu kvalificējošu
                                  mijiedarbību / kopējās iekļaušanas
                                  nedēļas × 100

"Kvalificējoša mijiedarbība" jādefinē skaidri un konsekventi
(piem., ēdiena ieraksts, simptomu pārbaude vai pabeigta aktivitāšu
sinhronizācija), nekad nevis pasīvs notikums, piemēram, lietotnes
atvēršana bez ierakstītas darbības.

Uzrāda kā sadalījumu, ne tikai populācijas vidējo:
  piem., pacientu īpatsvars ar ≥ 80 % iknedēļas regularitāti,
         īpatsvars ar 50–79 %, īpatsvars ar < 50 %
```

## Aprēķina piemērs

Uztura koučinga lietotne iekļauj pacientu uz 12 nedēļām. Pacients veic vismaz vienu kvalificējošu ēdiena ierakstu 9 no šīm 12 nedēļām, dodot individuālo iesaistes regularitātes līmeni 9 / 12 × 100 = 75 %. Visā lietotnes kohortā ar 2 000 pacientiem, kas iekļauti vismaz 12 nedēļas, 600 pacientu (30 %) uztur ≥ 80 % iknedēļas regularitāti, 900 (45 %) iekrīt 50–79 % joslā un 500 (25 %) atrodas zem 50 %. Tikai kohortas vidējā rādītāja uzrādīšana (kas varētu būt ap 65 %) nosegtu, ka vesela ceturtdaļa pacientu gandrīz nemaz neiesaistās, un šis segments ir pelnījis atsevišķu izpēti, nevis atšķaidīšanu kopējā vidējā.

## Datu avoti un ierobežojumi

Regularitātes dati nāk no produkta paša notikumu žurnāliem (ēdiena ieraksti, aktivitāšu sinhronizācijas, pārbaudes), un "kvalificējošas mijiedarbības" definīcijai ir milzīga ietekme uz iegūto līmeni: atbilstoša definīcija (jebkura lietotnes atvēršana) vienmēr izskatīsies labāk nekā stingra (pabeigts, jēgpilns ieraksts), tāpēc izmantotā definīcija skaidri jānorāda līdzās jebkuram uzrādītajam skaitlim. Automātiski sinhronizētie dati (piemēram, pieslēgts fitnesa izsekotājs, kas sinhronizē aktivitāti fonā) jāuzrāda atsevišķi no manuāli ierakstītajiem datiem, jo automātiskā sinhronizācija var uzpūst šķietamo regularitāti, neatspoguļojot nekādas pacienta aktīvas pūles vai iesaisti ar produkta norādījumiem.

## Biežākās kļūdas

- **Lietotnes atvēršanas sajaukšana ar jēgpilnu iesaisti**: pasīva lietotnes atvēršana (piemēram, ko izraisa push paziņojums) nav tas pats, kas ierakstīts ēdiena ieraksts vai pabeigta pārbaude; definējiet un uzrādiet tikai kvalificējošās mijiedarbības.
- **Tikai populācijas vidējā uzrādīšana**: veselīgi izskatošs vidējais regularitātes līmenis var slēpt bimodālu populāciju ar ļoti iesaistītiem un gandrīz pilnībā neiesaistītiem pacientiem; uzrādiet sadalījumu pa regularitātes joslām, ne tikai vidējo.
- **Iekļaušanas ilguma saucēja ignorēšana**: regularitātes līmeņu salīdzināšana starp pacientiem, kas iekļauti ļoti atšķirīgu laiku, neņemot vērā iekļaušanas ilgumu, novirzīs rezultātu par labu tai grupai, kurai bija īsāks, vieglāk uzturams mērījumu logs.
- **Automātiskā fona sinhronizācija, kas uzpūš līmeni**: pasīvi sinhronizēta nēsājamas ierīces datu plūsma var likt neiesaistītam pacientam šķist konsekventi aktīvam bez jebkādām reālām uzvedības izmaiņām vai iesaistes ar produktu no viņa puses.

## Avoti

- Recenzēta literatūra par digitālās veselības iesaistes modeļiem un to saistību ar klīniskajiem iznākumiem, piemēram, pētījumi, kas publicēti Journal of Medical Internet Research (JMIR)
- American Medical Informatics Association (AMIA), norādījumi par pacientu radīto veselības datu kvalitāti un iesaistes mērīšanu
- Digital Therapeutics Alliance, labākās prakses norādījumi par iesaistes un iznākumu mērīšanu digitālajā terapijā

Skatiet arī: [lietotāju noturēšanas līmenis](../lietotāju-noturēšanas-līmenis/), cieši saistītais rādītājs par to, vai pacients vispār paliek iekļauts, atšķirībā no tā, cik regulāri viņš iesaistās, kamēr ir iekļauts.
