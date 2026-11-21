# Triāžas maršrutēšanas precizitāte

Triāžas maršrutēšanas precizitāte ir to pacientu saskarsmju īpatsvars, kurās automatizēts vai ar mākslīgo intelektu atbalstīts triāžas rīks pareizi novirza pacientu uz atbilstošo aprūpes līmeni un vietu, piemēram, pašaprūpi, primāro aprūpi, steidzamo aprūpi vai neatliekamo palīdzību, vērtējot pēc klīniski validēta atsauces standarta. Tas ir drošības un efektivitātes rādītājs jebkurām digitālajām "pirmajām durvīm", simptomu pārbaudītājam vai MI triāžas sistēmai: rīka visa vērtība balstās uz pacientu pareizu, ātru un konsekventu maršrutēšanu.

## Kāpēc tas ir svarīgi

Neprecīzs triāžas rīks rada kaitējumu abos virzienos: nepietiekama triāža (pacienta novirzīšana uz zemāku aprūpes līmeni, nekā nepieciešams) var aizkavēt patiesas neatliekamās palīdzības ārstēšanu, bet pārmērīga triāža (pacienta novirzīšana uz augstāku aprūpes līmeni, nekā nepieciešams) tērē ierobežoto neatliekamās un steidzamās aprūpes jaudu un palielina izmaksas un pacientu trauksmi bez klīniska ieguvuma. Tā kā šiem diviem kļūmju veidiem ir tik atšķirīgas sekas, triāžas maršrutēšanas precizitāte vienmēr jāuzrāda līdzās kļūdu virzienam, nevis kā viens kopējais precizitātes skaitlis, kas slēpj, vai rīks kļūdās droši vai bīstami. Regulatori un veselības sistēmas, kas vērtē MI triāžas rīku ieviešanai, arvien biežāk pieprasa šādu stratificētu precizitātes ziņošanu kā klīniskā apstiprinājuma nosacījumu, īpaši rīkiem, kas darbojas ar jebkādu autonomijas pakāpi no ārstniecības personas.

## Kā to aprēķina

```
Triāžas maršrutēšanas precizitāte = pareizi novirzītās saskarsmes / kopējās šķirotās saskarsmes × 100

Nepietiekamu un pārmērīgu triāžu uzrāda atsevišķi:
  Nepietiekamas triāžas līmenis = saskarsmes, kas novirzītas uz zemāku akūtuma
                                  līmeni nekā atsauces standarts /
                                  kopējās šķirotās saskarsmes × 100
  Pārmērīgas triāžas līmenis    = saskarsmes, kas novirzītas uz augstāku akūtuma
                                  līmeni nekā atsauces standarts /
                                  kopējās šķirotās saskarsmes × 100

Atsauces standarts parasti ir tā paša gadījuma retrospektīvs klīnicista
pārskats, ja iespējams, akls pret rīka izvadi.
```

## Aprēķina piemērs

MI simptomu pārbaudītāja rīks mēnesī šķiro 5 000 pacientu saskarsmju. Akls klīnicistu pārskats par nejaušu 500 no šīm saskarsmēm izlasi konstatē, ka 430 tika novirzītas uz pareizo akūtuma līmeni (precizitāte 86 %), 45 tika nepietiekami šķirotas (9 %) un 25 tika pārmērīgi šķirotas (5 %). 9 % nepietiekamas triāžas līmenis ir skaitlis, kas visvairāk steidzami jāizmeklē, jo tas atspoguļo saskarsmes, kurās pacients, iespējams, tika novirzīts uz mazāk steidzamu aprūpi, nekā viņam faktiski vajadzēja; 5 % pārmērīgas triāžas līmenis ir jaudas un izmaksu problēma, bet ne tieša drošības problēma.

## Datu avoti un ierobežojumi

Atsauces standartam, pret kuru mēra triāžas precizitāti, ir milzīga nozīme: viena klīnicista pārskats ievieš šī klīnicista paša vērtējuma mainīgumu, tāpēc ticams precizitātes skaitlis parasti prasa vai nu vairākus neatkarīgus pārskatītājus ar dokumentētu starpvērtētāju saskaņotību, vai salīdzinājumu ar vēlāku, apstiprinātu klīnisko iznākumu (kāda aprūpe pacientam faktiski bija nepieciešama, noskaidrots pēc fakta). Svarīga ir arī izlase: pārskatot tikai ērtu saskarsmju izlasi vai tikai tās, kas atzīmētas kā neparastas, netiks iegūts skaitlis, ko var vispārināt uz rīka kopējo veiktspēju. Precizitātes skaitļi jāuzrāda atsevišķi pēc sākotnējā simptoma vai sūdzības kategorijas, ja pamatā esošais gadījumu apjoms to ļauj, jo triāžas rīki reti darbojas vienmērīgi visiem stāvokļiem.

## Biežākās kļūdas

- **Viena sapludināta precizitātes skaitļa uzrādīšana**: nepietiekamas un pārmērīgas triāžas sakļaušana vienā skaitlī slēpj, vai rīka kļūdas sliecas uz bīstamāko kļūmju veidu; vienmēr uzrādiet tās atsevišķi.
- **Viena, neakla pārskatītāja izmantošana kā atsauces standarta**: tas var kluši novirzīt precizitātes skaitli uz to, ko pats šis pārskatītājs būtu darījis, nevis neatkarīgu klīnisku standartu.
- **Validēšana tikai uz retrospektīviem, ērtiem datiem**: rīka reālā maršrutēšanas precizitāte ar dzīvu, neskaidru pacienta ievadi bieži būtiski atšķiras no tā precizitātes uz izstrādes laikā sastādītas kurētas validācijas kopas.
- **Veiktspējas novirzes ignorēšana pēc ieviešanas**: MI triāžas modeļa precizitāte var laika gaitā pasliktināties, mainoties pacientu populācijām, sākotnējiem simptomiem vai aprūpes ceļu pieejamībai; precizitāte jāmēra atkārtoti, nevis jāvalidē vienreiz un jāpieņem kā stabila.

## Avoti

- ONC / HealthIT.gov, norādījumi par klīniskā lēmumu atbalsta un MI iespējotu rīku drošību un kvalitātes nodrošināšanu
- Recenzēta literatūra par simptomu pārbaudītāju un MI triāžas rīku precizitāti, piemēram, pētījumi, kas publicēti JAMIA, npj Digital Medicine un BMJ Health & Care Informatics
- NHS England, norādījumi par digitālās triāžas un attālināto konsultāciju rīku klīnisko drošību (DCB0129/DCB0160 klīniskā riska pārvaldības standarti)

Skatiet arī: [digitālo nosūtījumu apstrādes laiks](../digitālo-nosūtījumu-apstrādes-laiks/), procesa rādītājs, kas visciešāk seko triāžas lēmumam.
