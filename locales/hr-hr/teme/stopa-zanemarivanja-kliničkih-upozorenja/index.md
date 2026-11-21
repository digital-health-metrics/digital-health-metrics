# Stopa zanemarivanja kliničkih upozorenja

Stopa zanemarivanja kliničkih upozorenja mjeri udio upozorenja sustava kliničke potpore odlučivanju (CDS), poput upozorenja o interakcijama lijekova, upozorenja o alergijama i provjera raspona doza koje generira sustav računalnog unosa liječničkih naloga (CPOE), koje kliničar odbaci ili zanemari umjesto da po njima postupi. To je standardni kvantitativni signal za otkrivanje i upravljanje „zamorom od upozorenja”: dobro dokumentirane sklonosti kliničara da postanu neosjetljivi na upozorenja kada količina upozorenja male vrijednosti postane preplavljujuća.

## Zašto je važna

Objavljene stope zanemarivanja upozorenja o interakcijama lijekova obično se kreću od otprilike polovice do preko devedeset posto, a visoka stopa nije automatski sigurnosni propust: mnoga prekidna upozorenja javljaju se za interakcije koje su u kontekstu klinički beznačajne ili ponavljaju upozorenje po kojem je kliničar već postupio ranije u istom skupu naloga, pa dobro podešen sustav namjerno izdaje manje upozorenja veće vrijednosti, umjesto da pokušava stopu zanemarivanja svesti na nulu. Za sigurnost je zaista važan trend tijekom vremena, raspodjela po razinama ozbiljnosti i dokumentira li kliničar razlog kada zanemari upozorenje visoke ozbiljnosti; rastuća stopa zanemarivanja kod interakcija visoke ozbiljnosti i dobro utemeljenih dokazima stvaran je problem upravljanja čak i kada prosjek svih upozorenja izgleda stabilno.

## Kako se izračunava

```
Stopa zanemarivanja = zanemarena upozorenja / ukupno izdana upozorenja × 100

Segmentirajte prema:
  - razini ozbiljnosti (npr. kontraindicirano, ozbiljno, umjereno)
  - vrsti upozorenja (interakcija lijekova, alergija, dvostruka terapija,
    raspon doze)
  - je li dokumentiran razlog zanemarivanja

„Stopa dokumentiranog zanemarivanja” prati udio zanemarivanja uz
zabilježeno obrazloženje, što je samostalna mjera upravljanja.
```

## Razrađeni primjer

CPOE sustav bolnice u mjesecu izda 10 000 upozorenja o interakcijama lijekova, od kojih je 8 700 zanemareno, što daje ukupnu stopu zanemarivanja od 87 %. Segmentacija prema ozbiljnosti pokazuje da je od 500 „kontraindiciranih” upozorenja zanemareno 60 (12 %), dok je od 6 000 „umjerenih” upozorenja zanemareno 5 700 (95 %). Podatak za umjerenu razinu uglavnom je u skladu s objavljenim usporednim mjerilima i sam po sebi nije razlog za zabrinutost; podatak za kontraindiciranu razinu zahtijeva pregled pojedinačnih slučajeva, a činjenica da samo 340 od 500 zanemarivanja na toj razini ima dokumentiran razlog korisniji je nalaz za upravljanje.

## Izvori podataka i ograničenja

Revizijski dnevnik elektroničkog zdravstvenog zapisa ili vlastiti modul upozorenja dobavljača CDS-a bilježi svaki događaj izdavanja upozorenja i odgovora na njega, uključujući je li kliničar unio slobodan tekst ili strukturirano obrazloženje. Usporedba stopa zanemarivanja među organizacijama, pa čak i među odjelima iste organizacije, zahtijeva provjeru da su skupovi pravila upozorenja i razine ozbiljnosti isti; bolnica s agresivno podešenim skupom pravila pokazat će nižu stopu zanemarivanja iz razloga koji nemaju veze s ponašanjem kliničara.

## Zamke

- **Neobrađena stopa zanemarivanja kao jedinstvena sigurnosna ocjena**: miješa dobro opravdana zanemarivanja upozorenja male vrijednosti s nesigurnim zanemarivanjem doista opasnih interakcija; uvijek segmentirajte prema ozbiljnosti.
- **Nema bilježenja razloga zanemarivanja**: bez dokumentiranog razloga nemoguće je razlikovati „ovo upozorenje bilo je pogrešno” od „ovo upozorenje bilo je ispravno, a kliničar je donio nesigurnu prosudbu”, što je zapravo razlika važna za sigurnost pacijenata.
- **Inflacija pravila upozorenja tijekom vremena**: dodavanje sve više upozorenja „zbog sigurnosti” bez uklanjanja onih male vrijednosti izravan je uzrok rastućih stopa zanemarivanja i zamora od upozorenja; upravljanje upozorenjima treba uključivati redovit pregled i ukidanje slabo učinkovitih pravila, a ne samo praćenje.
- **Usporedba stopa među sustavima s različitim dizajnom prekidanja**: prekidno upozorenje s tvrdim zaustavljanjem izaziva drukčije ponašanje pri zanemarivanju od pasivnog upozorenja koje ne blokira, pa te dvije metrike nisu izravno usporedive.

## Izvori

- Recenzirana literatura o zamoru od upozorenja u kliničkoj potpori odlučivanju, naširoko objavljivana u časopisima uključujući JAMIA i npj Digital Medicine
- ONC / HealthIT.gov, smjernice o sigurnosti zdravstvenog IT-a za kliničku potporu odlučivanju
- Institute for Safe Medication Practices (ISMP), smjernice o dizajnu i upravljanju CDS upozorenjima
