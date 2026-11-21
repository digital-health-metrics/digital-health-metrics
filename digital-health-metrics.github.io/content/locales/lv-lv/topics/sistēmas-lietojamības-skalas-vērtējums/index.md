# Sistēmas lietojamības skalas vērtējums

Sistēmas lietojamības skalas (System Usability Scale, SUS) vērtējums ir standartizēta 10 jautājumu anketa, ko izmanto, lai kvantitatīvi noteiktu, cik lietojama ir programmatūra, iegūstot vienu vērtējumu no 0 līdz 100, ko var salīdzināt ar labi noteiktām nozares normām. Atšķirībā no neto ieteikšanas rādītāja, kas mēra gatavību ieteikt, vai pacientu ziņotiem iznākumu mērījumiem, kas mēra klīnisko vai funkcionālo stāvokli, SUS mēra vienu konkrētu lietu: cik viegli pašu programmatūru ir apgūt un lietot, vai nu pacientiem, vai klīniskajam personālam.

## Kāpēc tas ir svarīgi

Digitālās veselības rīkam var būt spēcīgi klīniskie pierādījumi un pārliecinošs uzņēmējdarbības pamatojums, un tomēr praksē tas var neizdoties, jo pacienti vai ārstniecības personas uzskata saskarni par mulsinošu, lēnu vai kaitinošu, un, tā kā SUS ir validēts, plaši izmantots instruments ar gadu desmitiem ilgiem publicētiem etalonu datiem dažādās nozarēs, tas ļauj digitālās veselības komandai salīdzināt sava produkta lietojamību ar zināmu sadalījumu, nevis paļauties uz neformāliem iespaidiem vai anekdotiskām sūdzībām. SUS ir apzināti tehnoloģiju neitrāls un ātri veicams (parasti mazāk nekā piecās minūtēs), kas padara praktisku to atkārtoti veikt dizaina iterāciju laikā, atšķirībā no pilna lietojamības pētījuma vai formāla klīniskā pētījuma. Tā kā ārstniecības personām adresētas lietojamības kļūmes ir dokumentēts izdegšanas veicinātājs (skatiet ārstu izdegšanas līmeni) un pacientiem adresētas lietojamības kļūmes ir dokumentēts pamešanas un sliktu digitālās pratības iznākumu veicinātājs (skatiet digitālās pratības līmeni), SUS darbojas kā agrīnā brīdinājuma, zemu izmaksu lietojamības signāls, kas var atklāt dizaina problēmu, pirms tā parādās šajos nozīmīgākajos turpmākajos rādītājos.

## Kā to aprēķina

```
SUS vērtējums = ((nepāra numuru jautājumu vērtējumu summa − 5) +
                 (25 − pāra numuru jautājumu vērtējumu summa)) × 2,5

Rezultāts ir viens vērtējums no 0 līdz 100 (nevis procents, kaut gan
tāda ir skala, jo tas neatspoguļo "pareizo atbilžu procentu" vai
līdzīgu).

Publicētā etalonu interpretācija (Bangor u. c.):
  Virs 80  — teicama lietojamība
  68       — vidējs, balstoties uz plašu nozares normu
  Zem 51   — slikta lietojamība, kas prasa izpēti
```

## Aprēķina piemērs

Telemedicīnas platforma 150 pacientiem pēc viņu pirmās video vizītes izdala standarta 10 jautājumu SUS anketu. Aprēķinātais vidējais SUS vērtējums visiem respondentiem ir 74. Salīdzinot ar plaši citēto nozares vidējo rādītāju 68, tas norāda uz virs vidējo lietojamību šai konkrētajai pacientu populācijai un lietošanas gadījumam, lai gan joprojām būtiski zem "teicamā" sliekšņa 80, kas liecinātu par nedaudziem atlikušajiem lietojamības šķēršļiem. Sadalot tās pašas 150 atbildes pēc vecuma, vidējais vērtējums ir 81 pacientiem līdz 50 gadu vecumam un 62 pacientiem no 65 gadu vecuma, un šī plaisa norāda uz konkrētu, novēršamu lietojamības problēmu vecākiem pacientiem, nevis vispārēju produkta lietojamības problēmu, ko viens sapludināts vidējais rādītājs būtu noslēpis.

## Datu avoti un ierobežojumi

SUS dati nāk tieši no pacientiem vai ārstniecības personām, kas aizpilda standartizēto 10 jautājumu anketu, un instruments jāadministrē tieši tā, kā validēts (tie paši 10 jautājumi, tā pati 5 punktu piekrišanas skala, tā pati vērtēšanas formula), lai iegūtais vērtējums būtu salīdzināms ar publicētajiem etaloniem; pārveidota vai saīsināta anketas versija, lai cik labi nodomāta, dod vērtējumu, ko nevar droši interpretēt pret standarta etalonu sadalījumu. SUS mēra uztverto lietojamību, kas korelē ar objektīvu uzdevumu izpildes panākumu, bet nav ar to identiska (skatiet digitālās pratības līmeni, kas ir uz uzdevumu izpildi balstīts mērs); produktam var būt labs SUS vērtējums no pacientiem, kas nemēģināja izmantot sarežģītākās funkcijas, tāpēc SUS savienošana ar objektīviem uzdevumu izpildes datiem sniedz pilnīgāku ainu nekā katrs atsevišķi. Atbildes laikam ir nozīme: SUS administrēšana uzreiz pēc nomāktas konkrētas epizodes (neizdevies savienojums, mulsinošs solis) pret pēc gludas sesijas var mainīt vērtējumus neatkarīgi no produkta kopējās lietojamības.

## Biežākās kļūdas

- **Standarta anketas jautājumu vai vērtēšanas modificēšana**: pat nelielas formulējuma vai skalas izmaiņas padara nederīgu salīdzinājumu ar labi noteikto publicēto etalonu sadalījumu; izmantojiet standarta 10 jautājumu instrumentu tieši tā, kā tas validēts.
- **Tikai vidējā vērtējuma uzrādīšana bez sadalījuma**: lietojamība bieži būtiski atšķiras pēc lietotāja vecuma, digitālās pratības vai lomas (pacients pret ārstniecības personu); sadaliet ziņojumus, lai atrastu konkrētas, novēršamas lietojamības plaisas, ko viens vidējais rādītājs nosedz.
- **SUS uzskatīšana par klīniskās efektivitātes mēru**: SUS mēra tieši lietojamību, nevis klīnisko iznākumu vai apmierinātību ar aprūpi; ļoti lietojams rīks joprojām var neuzlabot klīniskos iznākumus, un tos nekad nedrīkst sajaukt vai aizstāt vienu ar otru.
- **Aptaujas veikšana tikai pēc neparasti gludām vai neparasti nomāktām sesijām**: administrēšanas laiks un konteksts var novirzīt vērtējumu; veiciet konsekventi reprezentatīvā reālu sesiju izlasē, nevis tikai ērtās vai selektīvi izvēlētās.

## Avoti

- Brooke, J., "SUS: A Quick and Dirty Usability Scale", oriģinālais publicētais instruments
- Bangor, Kortum un Miller, publicēti SUS etalonu pētījumi, kas noteikuši plaši citētās vērtējuma interpretācijas joslas
- Recenzēta literatūra par SUS izmantošanu digitālajā veselībā un telemedicīnas lietojamības novērtēšanā, piemēram, pētījumi, kas publicēti JMIR Human Factors

Skatiet arī: [pacientu neto ieteikšanas rādītājs](../pacientu-neto-ieteikšanas-rādītājs/), saistīts, bet atšķirīgs pacientu ziņots rādītājs, kas mēra apmierinātību un lojalitāti, nevis tieši programmatūras lietojamību.
