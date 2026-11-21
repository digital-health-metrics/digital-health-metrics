# Neatliekamās palīdzības nodaļas novirzīšanas līmenis

Neatliekamās palīdzības nodaļas (NPN) novirzīšanas līmenis mēra to pacientu kontaktu īpatsvaru, ko apstrādājis digitālās šķirošanas vai virtuālās aprūpes rīks un kas bez šīs iejaukšanās ticami būtu beigušies ar NPN apmeklējumu, bet tā vietā droši tikuši risināti zemākas akūtuma pakāpes aprūpes ceļā: pašaprūpes padoms, primārās aprūpes vizīte vai plānots steidzamās aprūpes apmeklējums. Tas ir konkrēts, augstvērtīgs triāžas maršrutēšanas precizitātes apakškopums (skatiet šo tēmu), kas pilnībā vērsts uz novērsto neatliekamās palīdzības nodaļas izmantojumu, un tas ir iznākums, kas visciešāk saistīts gan ar veselības aprūpes izmaksām, gan ar NPN jaudas atslogošanu.

## Kāpēc tas ir svarīgi

Neatliekamās palīdzības nodaļas ir vienas no dārgākajām aprūpes vietām uz vienu kontaktu un bieži tiek izmantotas problēmām, ko varētu droši risināt citur, tāpēc digitālās šķirošanas rīka spēja droši novirzīt piemērotus gadījumus prom no NPN ir viena no tā komerciāli un darbības ziņā vērtīgākajām iespējām, un viena no vieglāk izskaidrojamām maksātājam vai veselības sistēmai, kas vērtē rīka ieguldījumu atdevi. Taču novirzīšanai ir vērtība tikai tad, ja tā ir droša: rīks, kas agresīvi novirza pacientus prom no NPN uz īstu neatliekamo gadījumu palaišanas garām rēķina, ir pilnībā optimizējis nepareizo kompromisa pusi, un tāpēc NPN novirzīšanas līmenis vienmēr jāuzrāda līdzās drošības rādītājam, kas seko palaistiem garām vai aizkavētiem neatliekamās palīdzības gadījumiem starp novirzītajiem pacientiem, nevis izolēti kā tīra efektivitātes uzvara.

## Kā to aprēķina

```
NPN novirzīšanas līmenis = pacientu kontakti, kas droši novirzīti prom no NPN
                           uz piemērotu zemākas akūtuma pakāpes aprūpes ceļu /
                           kopējais pacientu kontaktu skaits, kas novērtēti kā
                           potenciāli NPN virzītie × 100

"Droši novirzīts" prasa apstiprinājumu, izmantojot novērošanu vai
saistītus veselības kartes datus, ka pacienta stāvoklis noteiktā
novērošanas periodā (piem., 72 stundas) faktiski neprasīja neatliekamo
palīdzību: novirzīšanas lēmums nav validēts kā drošs tikai tāpēc, ka
pacients pēc tam uzreiz nedevās uz NPN.

Uzrāda līdzās:
  Palaisto garām neatliekamo gadījumu līmenis = novirzītie pacienti, kuriem
                           novērošanas periodā tomēr bija nepieciešama
                           neatliekamā palīdzība / kopējais novirzīto
                           pacientu skaits × 100
```

## Aprēķina piemērs

Digitālās šķirošanas pakalpojums mēnesī novērtē 3 000 pacientu kontaktu, ko tā klīniskais algoritms uzskata par potenciāli NPN virzītiem bez iejaukšanās. No tiem 1 800 tiek novirzīti uz zemākas akūtuma pakāpes aprūpes ceļu (novirzīšanas līmenis 60 %). Novirzītās kohortas novērošana pēc 72 stundām ar saistītiem veselības kartes datiem atklāj, ka 45 no 1 800 novirzītajiem pacientiem šajā laikā tomēr ir nonākuši NPN (palaisto garām neatliekamo gadījumu līmenis 45 / 1 800 × 100 = 2,5 %). 60 % novirzīšanas rādītāja uzrādīšana bez 2,5 % palaisto garām neatliekamo gadījumu līmeņa parādītu tikai pusi no drošības un efektivitātes kompromisa, kas patiesībā nosaka, vai rīka novirzīšanas uzvedība ir pareizi kalibrēta.

## Datu avoti un ierobežojumi

Apstiprinājums, ka novirzītajam pacientam vēlāk nebija vajadzīga neatliekamā palīdzība, ir atkarīgs no saistītiem datiem: vai nu tās pašas veselības sistēmas NPN ierakstiem, reģionālās veselības informācijas apmaiņas vai strukturēta pacienta novērošanas zvana vai aptaujas, un novirzīšanas programma, kas darbojas bez kāda no šiem datu avotiem, nevar patiesi validēt savu drošību, tikai pieņemt to, pamatojoties uz sūdzības neesamību. Atbilstošais novirzīšanas līmenis un pieņemamais palaisto garām neatliekamo gadījumu līmenis ir klīniskās politikas, nevis tikai statistikas lēmumi, un tos apzināti jānosaka klīniskajai vadībai, nevis jāļauj tiem rasties kā blakusefektam jebkuram slieksnim, ko triāžas algoritms pēc noklusējuma izmanto. Novirzīšanas līmenis jāuzrāda pēc sākotnējā simptoma vai sūdzības kategorijas, jo atbilstošie novirzīšanas līmeņi ir ļoti atšķirīgi atkarībā no stāvokļa (nelielam griezumam pret sāpēm krūtīs ir nepieciešami ļoti atšķirīgi novirzīšanas sliekšņi).

## Biežākās kļūdas

- **Novirzīšanas līmeņa uzrādīšana bez saistīta palaisto garām neatliekamo gadījumu drošības rādītāja**: augsts novirzīšanas līmenis, kas panākts, nepietiekami šķirojot īstus neatliekamos gadījumus, nav panākums; abi rādītāji vienmēr jāuzrāda kopā.
- **Pieņēmums, ka NPN apmeklējuma neesamība nozīmē drošu novirzīšanu**: pacients var nonākt citas, nesaistītas slimnīcu sistēmas NPN vai var iegūt patiesi kaitīgu iznākumu, nekad neapmeklējot nevienu NPN; drošību validējiet ar saistītiem datiem vai strukturētu novērošanu, nevis tikai ar tās pašas sistēmas NPN apmeklējuma neesamību.
- **Novirzīšanas sliekšņa noteikšana tikai ar mērķi maksimizēt novirzīšanas līmeni**: algoritms vai politika, kas noskaņota novirzīšanas maksimizēšanai bez atbilstoša drošības ierobežojuma, pacientu drošību nomainīs pret labāk izskatāmu efektivitātes skaitli.
- **Novirzīšanas līmeņa sapludināšana visiem sūdzību veidiem**: atbilstošie novirzīšanas līmeņi ļoti atšķiras pēc sākotnējās sūdzības; viens sapludināts līmenis nevar parādīt, vai rīks darbojas droši un efektīvi tieši tiem stāvokļiem, kas klīniski ir vissvarīgākie.

## Avoti

- Agency for Healthcare Research and Quality (AHRQ), pētījumi par neatliekamās palīdzības nodaļas izmantojumu un pareizu aprūpes vietas novirzīšanu
- NHS England, norādījumi par NHS 111 un digitālās steidzamās aprūpes šķirošanas drošības un efektivitātes standartiem
- Recenzēta literatūra par digitālās šķirošanas un virtuālās aprūpes NPN novirzīšanas iznākumiem, piemēram, pētījumi, kas publicēti Annals of Emergency Medicine un npj Digital Medicine

Skatiet arī: [triāžas maršrutēšanas precizitāte](../triāžas-maršrutēšanas-precizitāte/), plašāks precizitātes rādītājs, kura konkrēts, drošībai kritisks apakškopums ir šis rādītājs.
