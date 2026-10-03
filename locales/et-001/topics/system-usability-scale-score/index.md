# System Usability Scale-skoor

System Usability Scale (SUS) on standardiseeritud 10-küsimusega küsimustik, mis kvantifitseerib, kui kasutatav tarkvara tegelikult on, vastustega 5-punktisel nõustumisskaalal, mis kombineeritakse üheks skooriks vahemikus 0 kuni 100. Erinevalt Net Promoter Score'ist, mis mõõdab üldist rahulolu ja soovitamise tõenäosust, on SUS spetsiaalselt loodud kasutatavuse mõõtmiseks — kui lihtsalt ja tõhusalt kasutaja tegelikult saab tarkvaraga ülesandeid täita.

## Miks see on oluline

Kasutatavuse probleemid on üks levinumaid ja parandatavamaid põhjuseid, miks digitaalsed terviseprodused ei saavuta kavandatud kliinilist mõju: tehniliselt veatu rakendus, mis on segadusttekitav navigeerida, ei saavuta kasutuskäitumist, mida tema kliiniline mudel eeldab, olenemata sellest, kui hea on aluseks olev terviseekkumine. SUS annab valideeritud, standardiseeritud, kergesti manustatava vahendi kasutatavuse kvantifitseerimiseks, võimaldades toodemeeskondadel jälgida kasutatavuse paranemist aja jooksul ja võrrelda laialdaselt avaldatud tööstusstandarditega, selle asemel et toetuda subjektiivsetele sisemistele hinnangutele. Kuna SUS-i on kasutatud tuhandete tarkvaraproduktide puhul mitme aastakümne jooksul, on sellel üks rikkalikumaid kättesaadavaid võrdlusandmestikke mis tahes kasutatavuse mõõdiku seas, muutes skoori tähendusrikkaks laiemas kontekstis, mitte ainult võrreldavaks iseendaga aja jooksul.

## Kuidas seda arvutatakse

```
SUS-skoor arvutatakse 10 standardiseeritud küsimusest, mis on
kordamööda positiivselt ja negatiivselt sõnastatud, igaüks vastatud
5-punktisel nõustumisskaalal (täiesti ei nõustu kuni täiesti
nõustun):

Paaritute numbritega küsimuste jaoks (positiivselt sõnastatud):
  skoori panus = (kasutaja vastus − 1)
Paaris numbritega küsimuste jaoks (negatiivselt sõnastatud):
  skoori panus = (5 − kasutaja vastus)

Kõigi 10 skoori panuse summa korrutatakse 2,5-ga, et saada skoor
vahemikus 0 kuni 100.

SUS-skoori üle 68 peetakse laialdaselt keskmisest kõrgemaks, lähtudes
kogunenud tööstuse võrdlusandmestikust, ehkki sobiv eesmärk võib
varieeruda tootetüübi järgi.
```

## Läbitöötatud näide

Tervishoiusüsteem testib uut patsiendiportaali liidest 50 patsiendiga, kes igaüks täidavad SUS-küsimustiku pärast standardiseeritud ülesannete komplekti sooritamist (vastuvõtu broneerimine, laboritulemuste vaatamine, sõnumi saatmine oma klinitsistile). Keskmine SUS-skoor 50 patsiendi lõikes on 72, mis on üle laialdaselt tsiteeritud keskmise 68, andes meeskonnale kindlustunde, et liides on mõistlikult kasutatav. Kuid skoori jaotamine ülesandetüübi järgi paljastab, et patsiendid, kes võitlesid spetsiifiliselt sõnumifunktsiooniga, andsid oluliselt madalamaid individuaalseid skoore, suunates meeskonda konkreetsele liidese osale, mida tuleb parandada, selle asemel et lihtsalt esitada koondkeskmist.

## Andmeallikad ja hoiatused

SUS-andmed kogutakse standardiseeritud 10-küsimusega küsimustiku kaudu, mis manustatakse kohe pärast seda, kui kasutaja on tarkvaraga sooritanud esindusliku ülesande või ülesannete komplekti, ning skoorimismetoodika on fikseeritud ja hästi väljakujunenud, muutes selle võrreldavaks uuringute ja organisatsioonide vahel, eeldusel, et kasutatakse sama standardiseeritud küsimustikku. Kuna SUS annab ühe koondskoori, võib see varjata, millised konkreetsed ülesanded või liideselemendid madalat skoori põhjustavad; kvalitatiivne järelkontroll või ülesandepõhine analüüs on sageli vajalik tulemuse tegutsemisvõimeliseks muutmiseks.

## Lõksud

- **Küsimustiku sõnastuse muutmine**: SUS-i kehtivus ja võrreldavus tööstusharu võrdlusalustega sõltub standardiseeritud küsimuste sõnastuse kasutamisest; küsimuste kohandamine õõnestab võrreldavust.
- **Ühe koondskoori käsitlemine täielikult diagnostilisena**: SUS-skoor ütleb, kas esineb kasutatavuse probleem, kuid mitte kus; konkreetse probleemi tuvastamiseks on vaja ülesandepõhist või kvalitatiivset järelkontrolli.
- **SUS-skooride võrdlemine väga erinevate kasutajaülesannete vahel**: keerulisest mitmeastmelisest ülesandest saadud skoor ei ole otseselt võrreldav lihtsast ühe-astmelisest ülesandest saadud skooriga.
- **Valimi suuruse ja koosseisu ignoreerimine**: väikesel või mitte-esinduslikul kasutajavalimil põhinevat SUS-skoori ei saa usaldusväärselt üldistada kogu kasutajapopulatsioonile.

## Allikad

- Brooke, J., "SUS: A quick and dirty usability scale", meetodi esialgne arendus
- Sauro, J., "A Practical Guide to the System Usability Scale", kogunenud tööstuse võrdlusandmed
- Eelretsenseeritud kirjandus SUS-i rakendamise kohta tervishoiu tarkvara hindamisel, näiteks uuringud, mis on avaldatud ajakirjades Journal of Medical Internet Research (JMIR) ja JMIR Human Factors

Vaata ka: [patsiendi Net Promoter Score](../patient-net-promoter-score/), seotud, kuid eraldiseisev patsiendi teatatud mõõdik, mis mõõdab rahulolu ja lojaalsust, mitte konkreetset tarkvara kasutatavust.
