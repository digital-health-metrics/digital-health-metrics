# Triaaži Suunamise Täpsus

Triaaži suunamise täpsus on patsiendikontaktide osakaal, mille puhul automatiseeritud või tehisintellekti toel töötav triaažitööriist suunab patsiendi õigesti sobivale ravitasemele ja -kohale – näiteks eneseabi, perearstiabi, kiirabi või erakorraline ravi –, hinnatuna kliiniliselt valideeritud võrdlusstandardi vastu. See on iga digitaalse esimese kontakti, sümptomikontrolli või tehisintellekti triaažisüsteemi ohutuse ja tõhususe mõõdik: tööriista kogu väärtuspakkumine põhineb patsientide õigel, kiirel ja järjepideval suunamisel.

## Miks see on oluline

Ebatäpne triaažitööriist põhjustab kahju mõlemas suunas: alatriaaž (patsiendi suunamine madalamale ravitasemele, kui ta vajab) võib viivitada tegeliku hädaolukorra ravi, samas kui ülitriaaž (patsiendi suunamine kõrgemale ravitasemele, kui ta vajab) raiskab napi erakorralise ja kiirabi võimekuse ning suurendab kulusid ja patsiendi ärevust ilma kliinilise kasuta. Kuna nendel kahel tõrketüübil on nii erinevad tagajärjed, tuleks triaaži suunamise täpsust alati esitada koos vigade suunaga, mitte ühe koondtäpsuse näitajana, mis varjab, kas tööriist eksib ohutul või ohtlikul viisil. Regulaatorid ja tervishoiusüsteemid, kes hindavad tehisintellekti triaažitööriista kasutuselevõttu, nõuavad üha enam seda laadi kihistatud täpsusaruandlust kliinilise heakskiidu tingimusena, eriti tööriistade puhul, mis tegutsevad kliinikust mingil määral sõltumatult.

## Kuidas seda arvutatakse

```
Triaaži suunamise täpsus = õigesti suunatud kontaktid / triaažitud
                           kontaktid kokku × 100

Esitage alatriaaž ja ülitriaaž eraldi:
  Alatriaaži määr = kontaktid, mis on suunatud võrdlusstandardist
                    madalamale kiireloomulisuse tasemele /
                    triaažitud kontaktid kokku × 100
  Ülitriaaži määr = kontaktid, mis on suunatud võrdlusstandardist
                    kõrgemale kiireloomulisuse tasemele /
                    triaažitud kontaktid kokku × 100

Võrdlusstandard on tavaliselt sama juhtumi tagasivaatav kliiniku
ülevaatus, mis on võimaluse korral tööriista väljundi suhtes
pimendatud.
```

## Läbitöötatud näide

Tehisintellekti sümptomikontrolli tööriist triaažib kuu jooksul 5 000 patsiendikontakti. Pimendatud kliiniku ülevaatus 500 sellisest kontaktist koosnevast juhuvalimist leiab, et 430 suunati õigele kiireloomulisuse tasemele (täpsus 86%), 45 alatriaažiti (9%) ja 25 ülitriaažiti (5%). 9% alatriaaži määr on näitaja, mis vajab kõige kiireloomulisemalt uurimist, kuna see esindab kontakte, kus patsient võidi suunata vähem kiireloomulisele ravile, kui ta tegelikult vajas; 5% ülitriaaži määr on võimekuse ja kulu mure, kuid mitte otsene ohutusmure.

## Andmeallikad ja hoiatused

Võrdlusstandard, mille vastu triaaži täpsust mõõdetakse, on äärmiselt oluline: ühe kliiniku ülevaatus toob kaasa selle kliiniku enda otsustusvariatsiooni, mistõttu usaldusväärne täpsusnäitaja nõuab tavaliselt kas mitut sõltumatut hindajat dokumenteeritud hindajatevahelise kokkuleppega või võrdlust järgneva, kinnitatud kliinilise tulemusega (millist ravi patsient tegelikult vajas, tuvastatud tagantjärele). Ka valimi moodustamine on oluline: ainult mugavusvalimi kontaktide või ainult ebatavaliseks märgitud kontaktide ülevaatamine ei anna näitajat, mis üldistuks tööriista üldisele toimimisele. Täpsusnäitajaid tuleks esitada eraldi esitatud sümptomi või kaebuse kategooria kaupa, kui aluseks olevate juhtude maht seda lubab, kuna triaažitööriistad toimivad harva kõigi seisundite puhul ühtlaselt.

## Lõksud

- **Ühe segatud täpsusnäitaja esitamine**: alatriaaži ja ülitriaaži ühte arvu kokku koondamine varjab, kas tööriista vead kalduvad ohtlikuma tõrketüübi poole; esitage need alati eraldi.
- **Ühe, pimendamata hindaja kasutamine võrdlusstandardina**: see võib täpsusnäitaja vaikselt kallutada selle poole, mida see hindaja ise oleks teinud, mitte sõltumatu kliinilise standardi poole.
- **Valideerimine ainult tagasivaatavatel, mugavatel andmetel**: tööriista tegelik suunamistäpsus reaalse, ebaselge patsiendisisendi korral erineb sageli oluliselt selle täpsusest arenduse käigus koostatud kureeritud valideerimiskomplektil.
- **Toimivuse triivi tähelepanuta jätmine pärast kasutuselevõttu**: tehisintellekti triaažimudeli täpsus võib aja jooksul halveneda, kui patsiendipopulatsioonid, esinevad sümptomid või ravitee kättesaadavus muutuvad; täpsust tuleks korduvalt uuesti mõõta, mitte valideerida üks kord ja eeldada stabiilsust.

## Allikad

- ONC / HealthIT.gov, kliinilise otsusetoe ja tehisintellektil põhinevate tööriistade ohutuse ning kvaliteedi tagamise juhised
- Eelretsenseeritud kirjandus sümptomikontrollijate ja tehisintellekti triaažitööriistade täpsuse kohta, näiteks ajakirjades JAMIA, npj Digital Medicine ja BMJ Health & Care Informatics avaldatud uuringud
- NHS England, digitaalsete triaaži- ja kaugkonsultatsioonitööriistade kliinilise ohutuse juhised (DCB0129/DCB0160 kliinilise riskijuhtimise standardid)

Vaata ka: [digitaalse suunamise läbimisaeg](../digitaalse-suunamise-läbimisaeg/), protsessimõõdik, mis asub triaažiotsusest otse allavoolu.
