# Digitālās piekļuves līmenis

Digitālās piekļuves līmenis mēra tās atbilstīgās pacientu populācijas īpatsvaru, kurai vispār ir praktiskas iespējas izmantot digitālās veselības produktu: platjoslas vai uzticams mobilo datu savienojums, ar internetu savienojama ierīce un aktīvs konts attiecīgajā pacientu portālā vai lietotnē. Tas ir priekšnosacījuma rādītājs ikvienam citam digitālās veselības mērījumam šajā grāmatā: populācija nevar reģistrēties, iesaistīties vai gūt labumu no digitālās veselības produkta, kuru tā strukturāli nevar sasniegt, lai cik labi šis produkts būtu izstrādāts.

## Kāpēc tas ir svarīgi

Digitālās veselības pieņemšanas un iesaistes rādītāji netieši paredz populāciju, kurai jau ir digitāla piekļuve, un pieņemšanas vai iesaistes līmeņu uzrādīšana, vispirms nenosakot pamatā esošo piekļuves līmeni, riskē klusi izslēgt pacientus, kuriem šādas piekļuves ir vismazāk, un kuriem bieži ir arī vislielākās veselības vajadzības. HIMSS Digital Health Equity Measurement Framework (DHEMF) un līdzīgi ietvari uzskata digitālo piekļuvi par pamata, pirmās kārtas vienlīdzības rādītāju tieši tāpēc, ka iejaukšanās pasākumi, kas izstrādāti, neņemot vērā piekļuves plaisas, mēdz nostiprināt, nevis mazināt esošās veselības atšķirības: "vispirms telemedicīna" stratēģija var netīši samazināt piekļuvi aprūpei pacientiem bez uzticama savienojuma vai ierīces, pat ja tā izmērāmi uzlabo pieredzi pacientiem, kuriem abu jau bija. Digitālās piekļuves līmenis jāseko un jāuzrāda pa demogrāfiskajiem un ģeogrāfiskajiem segmentiem, jo valsts vai visas organizācijas vidējie rādītāji regulāri slēpj lielas plaisas konkrētām iedzīvotāju grupām.

## Kā to aprēķina

```
Digitālās piekļuves līmenis = pacienti ar platjoslas/mobilo savienojamību UN ar internetu
                              savienojamu ierīci UN aktīvu pacientu portāla vai lietotnes
                              kontu / kopējā atbilstīgā pacientu populācija × 100

Katru apakškomponenti uzrāda arī atsevišķi līdzās apvienotajam līmenim:
  Savienojamības līmenis   = pacienti ar uzticamu interneta savienojumu /
                             atbilstīgā populācija × 100
  Ierīču īpašumtiesību līmenis = pacienti ar internetu savienojamu ierīci /
                             atbilstīgā populācija × 100
  Portāla aktivizācijas līmenis = pacienti ar aktīvu portāla/lietotnes kontu /
                             atbilstīgā populācija × 100 (pilnīgāku pieņemšanas
                             piltuvi skatiet pacientu portāla pieņemšanas līmenī)
```

## Aprēķina piemērs

Veselības sistēma apkalpo 40 000 atbilstīgu pacientu. Pacientu aptauja un infrastruktūras dati liecina, ka 34 000 (85 %) ir uzticama platjoslas vai mobilā savienojamība, 33 000 (82,5 %) ir ar internetu savienojama ierīce, un no pacientiem, kas atbilst abiem nosacījumiem, 27 000 (67,5 % no visas atbilstīgās populācijas) ir aktīvs pacientu portāla konts. Sadalot pēc vecuma, redzams, ka pacientiem no 65 gadu vecuma kombinētais digitālās piekļuves līmenis ir tikai 48 %, salīdzinot ar 78 % pacientiem līdz 65 gadu vecumam, un šo plaisu visas organizācijas 67,5 % vidējais rādītājs pilnībā nosedz, kaut gan tai būtu tieši jāietekmē lēmums, vai konkrēto pakalpojumu šai populācijai var droši piedāvāt tikai digitāli.

## Datu avoti un ierobežojumi

Savienojamības un ierīču īpašumtiesību dati parasti nāk no pacientu pašziņojuma (aptaujas vai uzņemšanas anketas), Federal Communications Commission (FCC) vai līdzvērtīgu valsts platjoslas pieejamības kartēšanas datu pacienta ģeogrāfiskajam apgabalam un portāla aktivizācijas datiem no organizācijas pašas sistēmām. Platjoslas pieejamība apgabala līmenī (vai pakalpojumu sniedzējs piedāvā pakalpojumu noteiktā pasta indeksa apgabalā) ir vājāks aizstājējs nekā savienojamība mājsaimniecības līmenī, jo apgabala līmeņa pieejamības dati neko nesaka par to, vai konkrēts pacients var atļauties vai ir izvēlējies abonēt šo pakalpojumu; apgabala un mājsaimniecības līmeņa piekļuves līmeņus nedrīkst sajaukt. Ierīču un savienojamības piekļuve var būt arī kopīga mājsaimniecībā (piemēram, viens viedtālrunis, ko lieto vairāki ģimenes locekļi), ko mājsaimniecības līmeņa aptaujas dati atspoguļo labāk nekā tikai individuālā līmeņa portāla pieteikšanās dati.

## Biežākās kļūdas

- **Tikai visas organizācijas vidējā rādītāja uzrādīšana**: tas uzticami slēpj lielas piekļuves plaisas vecākiem, mazāk turīgiem, lauku vai citādi digitāli atstumtiem pacientu segmentiem; vienmēr sadaliet pa demogrāfiskajiem un ģeogrāfiskajiem segmentiem.
- **Platjoslas pieejamības apgabala līmenī sajaukšana ar faktisko piekļuvi mājsaimniecībā**: tas, ka pasta indeksa apgabalu "apkalpo" platjoslas pakalpojumu sniedzējs, nenozīmē, ka katra tajā esošā mājsaimniecība šo pakalpojumu abonē vai var atļauties.
- **Ierīču īpašumtiesību uzskatīšana par vienreizēju, statisku faktu**: ierīču piekļuve var būt pārejoša (novecojusi ierīce, pazaudēts vai bojāts tālrunis, atkārtoti piešķirta kopīga ģimenes ierīce), tāpēc piekļuves līmenis jāmēra regulāri, nevis jāpieņem kā stabils pēc vienreizējas novērtēšanas.
- **Tikai digitāla aprūpes ceļa izstrāde pirms skartās populācijas piekļuves līmeņa noteikšanas**: pakalpojuma pārcelšana uz tikai digitālu formātu, vispirms neapstiprinot mērķa populācijas faktisko digitālās piekļuves līmeni, riskē klusi izslēgt tieši tos pacientus, kuri vismazāk spēj sasniegt alternatīvu kanālu.

## Avoti

- HIMSS, Digital Health Equity Measurement Framework (DHEMF)
- Federal Communications Commission (FCC), valsts platjoslas pieejamības un digitālās vienlīdzības dati
- Pew Research Center, pētījumi par piekļuvi internetam, platjoslai un ierīcēm un digitālās plaisas tendencēm dažādās demogrāfiskajās grupās

Skatiet arī: [digitālās pratības līmenis](../digitālās-pratības-līmenis/), cieši saistītais rādītājs par to, vai pacienti, kuriem piekļuve ir, to var efektīvi izmantot.
