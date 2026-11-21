# Ierīču darbspējas līmenis

Ierīču darbspējas līmenis mēra to plānotā uzraudzības laika īpatsvaru, kurā pieslēgta veselības ierīce (attālinātās pacientu uzraudzības sensors, nēsājama ierīce vai mājas telemedicīnas iekārta) faktiski ir tiešsaistē, pārraida datus un darbojas pareizi, nevis ir bezsaistē, atvienota vai darbojas nepareizi. Tas ir pamatā esošais infrastruktūras rādītājs ikvienai attālinātās uzraudzības vai pieslēgto ierīču programmai: klīniskais brīdinājums, biometriskā tendence vai iesaistes rādītājs, kas aprēķināts no ierīces, kura bieži bija bezsaistē, ir tikpat uzticams, cik savienojums, kas to nodrošina.

## Kāpēc tas ir svarīgi

Attālinātās pacientu uzraudzības programmas visa klīniskā vērtība ir atkarīga no nepārtrauktas vai gandrīz nepārtrauktas datu iegūšanas; ierīce ar sliktu darbspēju rada kluso plaisu pacienta klīniskajā ainā, ko var sajaukt ar stabilitāti (nav brīdinājuma, jo nav datu, nevis tāpēc, ka nekas nav mainījies), nevis pareizi atpazīt kā uzraudzības kļūmi. Ierīču darbspēja ir arī programmas izmaksu un pacienta pieredzes priekšlaicīgs rādītājs: ierīce, kas bieži zaudē savienojumu, rada atbalsta zvanus, pacientu neapmierinātību un potenciāli nevajadzīgu klīnisku sazināšanos, lai pārbaudītu, vai datu plaisa atspoguļo reālu klīnisku notikumu vai vienkārši tehnisku kļūmi. Tā kā ierīču darbspējas kļūmes bieži izraisa infrastruktūra, ko organizācija kontrolē (slikti konfigurēts mobilo sakaru vārteja, vājš Wi-Fi pārklājums pacienta mājās, nepietiekami apkalpots ierīču parks), nevis pats pacients, šis rādītājs pilnībā pieder piegādātājam un tehniskajai darbības komandai, nevis ir bez izšķirības iekļaujams pacientu iesaistes rādītājos.

## Kā to aprēķina

```
Ierīču darbspējas līmenis = laiks, kad ierīce bija tiešsaistē un pārraidīja derīgus datus /
                            kopējais plānotais uzraudzības laiks × 100

Dīkstāves pamatcēloņus sadala, ja dati to ļauj:
  Ierīces puses kļūme    (akumulators, aparatūras bojājums, programmaparatūras avārija)
  Savienojamības kļūme   (mobilo sakaru/Wi-Fi/VPN pārtraukums)
  Pacienta puses faktori (ierīce izslēgta, pārvietota ārpus pārklājuma zonas)

Atbalstošie tehniskie parametri, ko sekot līdzās darbspējai:
  Vidējā CPU noslodze, atmiņas izmantojums un akumulatora uzlādes līmenis katrai ierīcei
  Vidējais laiks starp savienojamības kļūmēm
  Vidējais laiks līdz atkārtotam savienojumam pēc pārtraukuma
```

## Aprēķina piemērs

Attālinātās sirds uzraudzības programmā izvietotas 1 000 pieslēgtu ierīču, katrai jāpārraida nepārtraukti. 30 dienu mēnesī (720 plānotās uzraudzības stundas uz ierīci) parks reģistrē kopā 705 600 faktiskās tiešsaistes stundas pret plānotajām 720 000 stundām, kas dod visa parka ierīču darbspējas līmeni 705 600 / 720 000 × 100 = 98 %. Pamatcēloņu analīze 14 400 dīkstāves stundām rāda, ka 60 % izraisījuši mobilo sakaru savienojuma pārtraukumi, kas koncentrēti konkrētā lauku pakalpojumu reģionā, 25 % ierīces ar novecojušiem akumulatoriem, kas atzīmēti nomaiņai, un 15 % pacienti, kas īslaicīgi izslēguši savu ierīci. Šis sadalījums norāda uz divām skaidrām, atšķirīgām iejaukšanās darbībām, savienojamības risinājumu skartajam reģionam un proaktīvu akumulatoru nomaiņas programmu, ko viens kopējs darbspējas skaitlis neatšķirtu.

## Datu avoti un ierobežojumi

Darbspējas dati nāk no ierīces ražotāja vai platformas piegādātāja paša ierīču pārvaldības un telemetrijas sistēmas, kas reģistrē savienojuma un sirdspukstu notikumus katrai ierīcei; organizācijai jāapstiprina, ko piegādātājs tieši uzskata par "tiešsaistē" (ierīce var ziņot, ka ir pieslēgta tīklam, vienlaikus nespējot pārraidīt derīgus klīniskos datus, un to klīniskā nolūkā vajadzētu uzskatīt par dīkstāvi pat tad, ja piegādātāja paša informācijas panelis uzrāda, ka tā ir pieslēgta). Darbspēja jāuzrāda pa ierīču kohortām vai ģeogrāfiskajiem apgabaliem, ja apjoms to ļauj, jo savienojuma kvalitāte bieži ir ģeogrāfiski koncentrēta (lauku mobilo sakaru pārklājums, vecāku ēku Wi-Fi), nevis vienmērīgi sadalīta pacientu populācijā, un kopējais visa parka rādītājs var slēpt smagu, novēršamu reģionālu problēmu.

## Biežākās kļūdas

- **Tīkla savienojuma sajaukšana ar derīgu datu pārraidi**: ierīce piegādātāja informācijas panelī var šķist "pieslēgta", vienlaikus nepārraidot izmantojamus klīniskos datus; definējiet un mēriet darbspēju pret faktisku derīgu datu saņemšanu, nevis tikai neapstrādātu tīkla savienojamību.
- **Tikai visa parka vidējā rādītāja uzrādīšana**: tas var slēpt smagu, ģeogrāfiski vai ierīču kohortai specifisku dīkstāves problēmu, ko mērķtiecīgs vidējais rādītājs atklātu un kam ir konkrēts, novēršams risinājums.
- **Dīkstāves pamatcēloņa neatšķiršana**: ierīces puses, savienojamības un pacienta puses dīkstāvei nepieciešama pilnīgi atšķirīga iejaukšanās; viens dīkstāves procents bez pamatcēloņu sadalījuma nav izmantojams rīcībai.
- **Datu plaisas uzskatīšana par klīnisku stabilitāti pēc noklusējuma**: trūkstoša datu plūsma no ierīces bezsaistē jāpavada ar tehniskās savienojamības pārbaudi, nevis klusi jāinterpretē kā "ja nav ziņu, tad viss kārtībā" pacienta klīniskajam stāvoklim.

## Avoti

- Continua Design Guidelines / Personal Connected Health Alliance, tehniskās sadarbspējas standarti pieslēgtām veselības ierīcēm
- ONC / HealthIT.gov, norādījumi par attālinātās pacientu uzraudzības programmu ieviešanu un tehniskajām prasībām
- Recenzēta literatūra par attālinātās pacientu uzraudzības ierīču uzticamību un datu pilnīgumu, piemēram, pētījumi, kas publicēti npj Digital Medicine

Skatiet arī: [triāžas maršrutēšanas precizitāte](../triāžas-maršrutēšanas-precizitāte/), kas ir atkarīga no pilnīgu, uzticamu ierīces datu saņemšanas, lai vispār varētu pieņemt pareizu triāžas lēmumu.
