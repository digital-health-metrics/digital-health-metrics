# Klīnisko brīdinājumu ignorēšanas līmenis

Klīnisko brīdinājumu ignorēšanas līmenis mēra to klīniskā lēmumu atbalsta (CDS) brīdinājumu īpatsvaru, piemēram, zāļu savstarpējās mijiedarbības brīdinājumu, alerģiju brīdinājumu un devu diapazona pārbaužu, ko ģenerē datorizēta ārstu rīkojumu ievades (CPOE) sistēma un kurus ārsts noraida vai ignorē, nevis rīkojas pēc tiem. Tas ir standarta kvantitatīvais signāls, ko izmanto, lai atklātu un pārvaldītu "brīdinājumu nogurumu": labi dokumentēto tendenci, ka ārstniecības personas kļūst vienaldzīgas pret brīdinājumiem, kad mazvērtīgu brīdinājumu apjoms kļūst nepārvarams.

## Kāpēc tas ir svarīgi

Publicētie zāļu mijiedarbības brīdinājumu ignorēšanas līmeņi parasti svārstās no aptuveni puses līdz vairāk nekā deviņdesmit procentiem, un augsts līmenis automātiski nav drošības kļūme: daudzi pārtraucoši brīdinājumi tiek aktivizēti par mijiedarbībām, kas konkrētajā kontekstā ir klīniski nenozīmīgas, vai atkārto brīdinājumu, uz ko ārsts jau reaģējis agrāk tajā pašā rīkojumu komplektā, tāpēc labi noskaņota sistēma apzināti aktivizē mazāk, bet vērtīgākus brīdinājumus, nevis cenšas samazināt ignorēšanas līmeni līdz nullei. Drošībai patiesi svarīgas ir tendence laika gaitā, sadalījums pa smaguma līmeņiem un tas, vai ārstniecības personas dokumentē iemeslu, kad ignorē augstas smaguma pakāpes brīdinājumu; augošs ignorēšanas līmenis augstas smaguma pakāpes, labi pamatotām mijiedarbībām ir reāls pārvaldības problēmu cēlonis pat tad, ja vidējais rādītājs visiem brīdinājumiem šķiet stabils.

## Kā to aprēķina

```
Ignorēšanas līmenis = ignorētie brīdinājumi / kopējais aktivizēto brīdinājumu skaits × 100

Sadala pēc:
  - smaguma līmeņa (piem., kontrindicēts, būtisks, mērens)
  - brīdinājuma veida (zāļu savstarpēja mijiedarbība, alerģija, terapijas
    dublēšanās, devu diapazons)
  - tā, vai ignorēšanas iemesls ir dokumentēts

"Dokumentētu ignorēšanu līmenis" seko tam, cik ignorēšanas gadījumiem ir
ierakstīts pamatojums, un tas pats par sevi ir pārvaldības rādītājs.
```

## Aprēķina piemērs

Slimnīcas CPOE sistēma mēnesī aktivizē 10 000 zāļu savstarpējās mijiedarbības brīdinājumu, no kuriem 8 700 tiek ignorēti, kas dod kopējo ignorēšanas līmeni 87 %. Sadalot pēc smaguma, no 500 "kontrindicētajiem" brīdinājumiem ignorēti 60 (12 %), bet no 6 000 "mērenajiem" brīdinājumiem ignorēti 5 700 (95 %). Mērenā līmeņa rādītājs kopumā atbilst publicētajiem etaloniem un pats par sevi nav iemesls bažām; kontrindicētā līmeņa rādītājs pelna atsevišķu gadījumu izskatīšanu, un fakts, ka tikai 340 no 500 ignorēšanas gadījumiem šajā līmenī ir ar dokumentētu iemeslu, ir praktiskāk izmantojams pārvaldības secinājums.

## Datu avoti un ierobežojumi

Elektroniskās veselības kartes audita žurnāls vai CDS piegādātāja paša brīdinājumu modulis reģistrē katru brīdinājuma aktivizēšanas un atbildes notikumu, tostarp to, vai ārsts ievadījis brīvā teksta vai strukturētu pamatojumu. Salīdzinot ignorēšanas līmeņus starp organizācijām vai pat starp nodaļām vienā organizācijā, jāpārbauda, vai pamatā esošie brīdinājumu noteikumu kopumi un smaguma līmeņu iedalījums ir vienādi; slimnīca ar agresīvi noskaņotu noteikumu kopumu uzrādīs zemāku ignorēšanas līmeni iemeslu dēļ, kam nav nekāda sakara ar ārstniecības personu uzvedību.

## Biežākās kļūdas

- **Neapstrādāta ignorēšanas līmeņa uzskatīšana par vienu drošības rādītāju**: tas sajauc labi pamatotu mazvērtīgu brīdinājumu ignorēšanu ar nedrošu patiesi bīstamu mijiedarbību ignorēšanu; vienmēr sadaliet pēc smaguma.
- **Ignorēšanas iemesla neuzņemšana**: bez dokumentēta iemesla nav iespējams atšķirt "šis brīdinājums bija nepareizs" no "šis brīdinājums bija pareizs, un ārsts pieņēma nedrošu lēmumu", un tieši šī atšķirība ir būtiska pacientu drošībai.
- **Brīdinājumu noteikumu uzblīšana laika gaitā**: vairāk brīdinājumu pievienošana "drošības labad", nenoņemot mazvērtīgos, ir tiešs ignorēšanas līmeņa pieauguma un brīdinājumu noguruma cēlonis; brīdinājumu pārvaldībā jāiekļauj regulāra slikti darbojošos noteikumu pārskatīšana un izņemšana, ne tikai uzraudzība.
- **Līmeņu salīdzināšana starp sistēmām ar atšķirīgu pārtraukšanas dizainu**: pārtraucošs, pārtraukuma tipa brīdinājums rada citādu ignorēšanas uzvedību nekā pasīvs, nebloķējošs brīdinājums, tāpēc tos nevar tieši salīdzināt kā rādītājus.

## Avoti

- Recenzēta literatūra par klīniskā lēmumu atbalsta brīdinājumu nogurumu, plaši publicēta žurnālos, tostarp JAMIA un npj Digital Medicine
- ONC / HealthIT.gov, veselības IT drošības norādījumi par klīnisko lēmumu atbalstu
- Institute for Safe Medication Practices (ISMP), norādījumi par CDS brīdinājumu dizainu un pārvaldību
