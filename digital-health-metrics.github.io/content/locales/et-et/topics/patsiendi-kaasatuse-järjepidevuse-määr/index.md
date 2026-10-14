# Patsiendi Kaasatuse Järjepidevuse Määr

Patsiendi kaasatuse järjepidevuse määr mõõdab, kui regulaarselt kaasatud patsient digitaaltervise tootega aja jooksul suhtleb – näiteks toidu või sümptomite sissekandmine, füüsilise aktiivsuse salvestamine või terviseandmete vaatamine – mitte lihtsalt seda, kas ta on seda üldse kasutanud. See on pikisuunaline mõõdik, mis erineb ühe ajahetke aktiivse kasutuse arvust: kahel patsiendil võib olla identne "kasutas sel kuul rakendust" staatus, samas kui üks kannab sisse järjekindlalt iga päev ja teine kannab ühe korra sisse ning kaob kolmeks nädalaks, ning ainult järjepidevuse mõõdik eristab neid.

## Miks see on oluline

Digitaaltervise tööriistaga püsiv, regulaarne suhtlus on üks usaldusväärsemaid kliinilise kasu eelnäitajaid, eriti käitumisest sõltuvate seisundite, nagu diabeet, kaalujuhtimine ja vaimne tervis, puhul, kus tööriista väärtus tuleneb harjumusest, mida see toetab, mitte ühest seansist. Toode võib esitada tervisliku igakuiste aktiivsete kasutajate arvu, teenindades tegelikult populatsiooni, kes logib korra sisse ja triivib minema, kuna igakuine aktiivne kasutus on madal lävi, mis ei ütle midagi kasutusmustri kohta kuu jooksul; järjepidevuse mõõdikud tabavad seda viisil, mida lihtsad tegevusarvud ei suuda. Kuna järjepidevus on ka üks asi, mida on raskem säilitada kuude, mitte nädalate jooksul, on see ausam signaal toote kvaliteedi ja kliinilise sobivuse kohta kui lühikese akna kaasatuse näitajad, mis on kalduvad uudsusefektidele vahetult pärast sisseelamist.

## Kuidas seda arvutatakse

```
Kaasatuse järjepidevuse määr = nädalad vähemalt ühe kvalifitseeruva
                               interaktsiooniga / kaasatud nädalad
                               kokku × 100

"Kvalifitseeruv interaktsioon" tuleks defineerida selgelt ja
järjepidevalt (nt toidu sissekanne, sümptomite kontroll või
lõpetatud aktiivsuse sünkroonimine) – mitte kunagi passiivne
sündmus nagu rakenduse avamine ilma registreeritud toiminguta.

Esitage jaotusena, mitte ainult populatsiooni keskmisena:
  nt patsientide osakaal ≥ 80% nädalase järjepidevusega,
     osakaal 50–79%, osakaal < 50%
```

## Läbitöötatud näide

Toitumisnõustamise rakendus kaasab patsiendi 12 nädalaks. Patsient kannab 12 nädalast 9 puhul sisse vähemalt ühe kvalifitseeruva toidukanne, mis annab individuaalse kaasatuse järjepidevuse määraks 9 / 12 × 100 = 75%. Rakenduse kogu vähemalt 12 nädalat kaasatud 2 000 patsiendi kohordis säilitab 600 patsienti (30%) ≥ 80% nädalase järjepidevuse, 900 (45%) jääb 50–79% vahemikku ja 500 (25%) jääb alla 50%. Ainult kohordi keskmise esitamine (mis võiks jõuda umbes 65% juurde) varjaks, et terve veerand patsientidest tegeleb vaevu üldse – segment, mida tasub eraldi uurida, mitte lahjendada üldkeskmisesse.

## Andmeallikad ja hoiatused

Järjepidevuse andmed pärinevad toote enda sündmuslogidest (toidu sissekanded, aktiivsuse sünkroonimised, kontrollid) ja "kvalifitseeruva interaktsiooni" definitsioonil on tekkivale määrale tohutu mõju – leebe definitsioon (mis tahes rakenduse avamine) näeb alati parem välja kui range (lõpetatud, sisukas sissekanne), mistõttu tuleb kasutatud definitsioon iga esitatud näitaja kõrval selgelt välja öelda. Automaatselt sünkroonitud andmeid (näiteks ühendatud fitnessi jälgija, mis sünkroonib aktiivsust taustal) tuleks esitada eraldi käsitsi sisestatud andmetest, kuna automaatne sünkroonimine võib näilist järjepidevust suurendada, ilma et see peegeldaks patsiendi aktiivset pingutust või kaasatust toote juhistega.

## Lõksud

- **Rakenduse avamiste segamine sisuka kaasatusega**: passiivne rakenduse avamine (näiteks tõuketeatise käivitatud) ei ole sama mis sisse kantud toidukanne või lõpetatud kontroll; defineerige ja esitage ainult kvalifitseeruvad interaktsioonid.
- **Ainult populatsiooni keskmise esitamine**: tervisliku väljanägemisega keskmine järjepidevuse määr võib varjata kahetipulist populatsiooni väga kaasatud ja peaaegu täielikult kaasamata patsientidest; esitage jaotus järjepidevuse vahemike lõikes, mitte ainult keskmine.
- **Kaasamise pikkuse nimetaja tähelepanuta jätmine**: väga erineva pikkusega kaasatud patsientide järjepidevuse määrade võrdlemine ilma kaasamise kestust arvestamata kaldub selle rühma kasuks, kellel oli lühem, lihtsamini säilitatav mõõteaken.
- **Automaatne taustasünkroonimine, mis suurendab määra**: passiivselt sünkroonitud kantava seadme andmevoog võib panna kaasamata patsiendi paistma järjepidevalt aktiivsena ilma tema poolse tegeliku käitumismuutuse või toote kaasatuseta.

## Allikad

- Eelretsenseeritud kirjandus digitaaltervise kaasatuse mustrite ja nende seose kohta kliiniliste tulemustega, näiteks ajakirjas Journal of Medical Internet Research (JMIR) avaldatud uuringud
- American Medical Informatics Association (AMIA), patsiendi loodud terviseandmete kvaliteedi ja kaasatuse mõõtmise juhised
- Digital Therapeutics Alliance, parimate tavade juhised digitaalsete terapeutikumide kaasatuse ja tulemuste mõõtmiseks

Vaata ka: [kasutajate püsimuse määr](../kasutajate-püsimuse-määr/), tihedalt seotud mõõdik selle kohta, kas patsient üldse kaasatuks jääb, erinevalt sellest, kui järjepidevalt ta kaasatuse ajal tegeleb.
