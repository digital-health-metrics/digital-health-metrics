# Pacientu neto ieteikšanas rādītājs

Pacientu neto ieteikšanas rādītājs (Net Promoter Score, NPS) mēra pacienta gatavību ieteikt digitālās veselības produktu vai telemedicīnas pakalpojumu citiem, pamatojoties uz vienu aptaujas jautājumu: "Cik iespējams, ka jūs ieteiktu šo pakalpojumu draugam vai kolēģim?", vērtējot no 0 līdz 10. Respondenti, kas vērtē ar 9–10, ir "veicinātāji", 7–8 ir "pasīvie" un 0–6 ir "kritiķi"; NPS ir veicinātāju procentuālā daļa mīnus kritiķu procentuālā daļa. Tas ir visplašāk izmantotais un visplašāk kritizētais pacientu apmierinātības rādītājs digitālajā veselībā, novērtēts tā vienkāršības dēļ, bet ierobežots tajā, ko tas pats spēj diagnosticēt.

## Kāpēc tas ir svarīgi

NPS sniedz digitālās veselības komandām vienkāršu, standartizētu, starp organizācijām salīdzināmu apmierinātības signālu, ko ir lēti savākt un kas ir viegli saprotams ar pirmo acu uzmetienu nespeciālistiem (vadītājiem, valdēm, pasūtītājiem), tāpēc tas joprojām ir populārs, neraugoties uz labi dokumentētajiem metodoloģiskajiem ierobežojumiem. Tieši telemedicīnas un digitālo "pirmo durvju" produktiem NPS bieži ir priekšlaicīgs rādītājs tam, vai pacienti turpinās izvēlēties digitālo kanālu, nevis klātienes alternatīvu, kad pieejami abi, un tam ir tieša ietekme uz kanālu maisījuma un jaudas plānošanu. Tomēr NPS ir viens, augsta līmeņa kopsavilkuma skaitlis: krītošs NPS komandai norāda, ka kaut kas nav kārtībā, bet ne ko, tāpēc tas vienmēr jāpārī ar atklāta teksta atsauksmēm vai detalizētāku lietojamības instrumentu, lai tas būtu praktiski izmantojams, nevis tikai rezultātu kartes skaitlis.

## Kā to aprēķina

```
NPS = % veicinātāju (vērtējums 9–10) − % kritiķu (vērtējums 0–6)

Rezultāts ir skaitlis no −100 līdz +100, nevis procents, kaut gan tas
atvasināts no procentiem; NPS skaitlim nekad nepievieno "%" zīmi.

Uzrāda līdzās:
  atbildes līmeni (% aptaujāto pacientu, kuri atbildēja)
  izlases lielumu
  precīzu izmantoto jautājuma formulējumu
```

## Aprēķina piemērs

Telemedicīnas platforma pēc video konsultācijas aptauj 1 000 pacientu un saņem 400 atbildes (atbildes līmenis 40 %). No šiem 400 respondentiem 220 vērtē ar 9–10 (veicinātāji, 55 %), 100 vērtē ar 7–8 (pasīvie, 25 %) un 80 vērtē ar 0–6 (kritiķi, 20 %). NPS ir 55 − 20 = 35. Šis skaitlis kaut ko nozīmē tikai kontekstā: NPS 35 var būt spēcīgs rezultāts salīdzinājumā ar plašāku telemedicīnas nozari vai satraucošs kritums salīdzinājumā ar šīs pašas platformas iepriekšējā ceturkšņa rādītāju 48; NPS ir daudz noderīgāks kā viena produkta tendence laika gaitā nekā kā absolūts vienreizējs etalons pret citu produktu.

## Datu avoti un ierobežojumi

NPS tiek vākts ar pēcmijiedarbības aptauju, parasti ierosinātu uzreiz pēc video vizītes, lietotnes sesijas vai aprūpes epizodes, un atbildes līmenim ir milzīga nozīme: zems atbildes līmenis (krietni zem aptuveni 40 %, kas redzami aprēķina piemērā) riskē ar neatbildēšanas novirzi, kad atbild tikai ļoti apmierināti vai ļoti neapmierināti pacienti, pavelkot rādītāju uz galējībām un prom no patiesā iedzīvotāju noskaņojuma. NPS salīdzināšana starp organizācijām vai pat starp vienas organizācijas dažādiem kanāliem (piemēram, telemedicīna pret klātienes) ir derīga tikai tad, ja jautājuma formulējums, laiks un aptaujātā populācija ir patiesi salīdzināmi; zināms, ka nelielas formulējuma izmaiņas izmērāmi maina rādītājus. NPS jāuzskata par iznākumu, kas jāizskaidro, nevis par pašmērķi: atklātā teksta komentāri, kas parasti pavada NPS aptauju, parasti ir praktiski noderīgāki par rādītāju.

## Biežākās kļūdas

- **NPS skaitļu, kas vākti ar atšķirīgu jautājuma formulējumu vai laiku, salīdzināšana**: pat nelielas aptaujas dizaina atšķirības var mainīt rādītājus par vairākiem punktiem, padarot starp organizācijām veiktu NPS etalonu salīdzināšanu daudz mazāk uzticamu, nekā šķiet.
- **Atbildes līmeņa ignorēšana**: galvenais NPS, kas aprēķināts no 10 % atbildes līmeņa, ir daudz mazāk uzticams nekā aprēķināts no 60 % atbildes līmeņa, jo zemi atbildes līmeņi ir pakļauti neatbildēšanas novirzei uz galējākajiem viedokļiem.
- **NPS uzskatīšana par diagnostikas rīku, nevis kopsavilkuma rādītāju**: krītošs NPS norāda, ka kaut kas nav kārtībā, bet nekad neizsaka, kas; tas vienmēr jāpārī ar kvalitatīvām atsauksmēm vai detalizētāku apmierinātības vai lietojamības instrumentu, lai noteiktu cēloni.
- **NPS dzīšanās kā pašmērķis**: šaura optimizēšana NPS skaitlim (piemēram, aptaujājot pacientus tikai pēc neparasti pozitīvām mijiedarbībām) var uzlabot uzrādīto rādītāju, nepadarot pacientu pieredzi labāku vai pat padarot to sliktāku.

## Avoti

- Bain & Company, oriģinālā Net Promoter System metodoloģija un etalonu norādījumi
- Agency for Healthcare Research and Quality (AHRQ), CAHPS (Consumer Assessment of Healthcare Providers and Systems) pacientu pieredzes aptauju programma kā papildinoša, detalizētāka alternatīva
- Recenzēta literatūra par Net Promoter Score izmantošanu un ierobežojumiem veselības aprūpes vidē, piemēram, pētījumi, kas publicēti Journal of Medical Internet Research (JMIR)

Skatiet arī: [lietotāju noturēšanas līmenis](../lietotāju-noturēšanas-līmenis/), jo pacientu ziņotā apmierinātība un faktiskā produkta turpmākā lietošana bieži atšķiras un ir vērts tos sekot kā atsevišķus signālus.
