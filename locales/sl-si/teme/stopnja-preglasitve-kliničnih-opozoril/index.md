# Stopnja preglasitve kliničnih opozoril

Stopnja preglasitve kliničnih opozoril meri delež opozoril sistema za podporo kliničnemu odločanju (CDS), kot so opozorila o medsebojnem delovanju zdravil, opozorila o alergijah in preverjanja razponov odmerkov, ki jih ustvari računalniški sistem za vnos naročil zdravnika (CPOE), ki jih zdravnik opusti ali preglasi, namesto da bi ukrepal. Je standardni količinski signal za odkrivanje in obvladovanje »utrujenosti zaradi opozoril«: dobro dokumentirane težnje zdravnikov, da postanejo neobčutljivi za opozorila, ko količina malo vrednih opozoril postane preobsežna.

## Zakaj je pomembna

Objavljene stopnje preglasitve opozoril o medsebojnem delovanju zdravil se običajno gibljejo od približno polovice do več kot devetdeset odstotkov, visoka stopnja pa ni samodejno varnostna napaka: številna prekinjajoča opozorila se sprožijo zaradi interakcij, ki so v kontekstu klinično nepomembne, ali ponovijo opozorilo, na katerega se je zdravnik že odzval prej v istem naboru naročil, zato dobro uravnotežen sistem namenoma sproži manj opozoril z večjo vrednostjo, namesto da bi poskušal stopnjo preglasitve spraviti na nič. Za varnost je resnično pomemben trend skozi čas, porazdelitev po stopnjah resnosti in ali zdravniki pri preglasitvi opozorila visoke resnosti dokumentirajo razlog; naraščajoča stopnja preglasitve pri interakcijah visoke resnosti z dobrimi dokazi je resna skrb za upravljanje, tudi kadar se povprečje vseh opozoril zdi stabilno.

## Kako se izračuna

```
Stopnja preglasitve = preglašena opozorila / vsa sprožena opozorila × 100

Segmentirajte po:
  - stopnji resnosti (npr. kontraindicirano, veliko, zmerno)
  - vrsti opozorila (medsebojno delovanje zdravil, alergija, podvojeno zdravljenje, razpon odmerka)
  - tem, ali je bil razlog preglasitve dokumentiran

»Dokumentirana stopnja preglasitve« spremlja delež preglasitev, ki imajo
zabeleženo utemeljitev, kar je samo po sebi merilo upravljanja.
```

## Izračunani primer

Sistem CPOE v bolnišnici v mesecu sproži 10.000 opozoril o medsebojnem delovanju zdravil, od katerih jih je 8.700 preglašenih, kar daje skupno stopnjo preglasitve 87 %. Segmentacija po resnosti pokaže, da je od 500 opozoril »kontraindicirano« preglašenih 60 (12 %), od 6.000 »zmernih« opozoril pa jih je preglašenih 5.700 (95 %). Številka za zmerno stopnjo je v grobem skladna z objavljenimi primerjalnimi vrednostmi in sama po sebi ni razlog za zaskrbljenost; številka za kontraindicirano stopnjo zahteva pregled posameznih primerov, dejstvo, da ima le 340 od 500 preglasitev na tej stopnji dokumentiran razlog, pa je bolj uporabna ugotovitev za upravljanje.

## Viri podatkov in omejitve

Revizijska sled elektronskega zdravstvenega zapisa ali lasten modul opozarjanja ponudnika CDS beleži vsak dogodek sprožitve opozorila in odziva nanj, vključno s tem, ali je zdravnik vnesel prosto besedilno ali strukturirano utemeljitev. Primerjava stopenj preglasitve med organizacijami ali celo med oddelki iste organizacije zahteva preverjanje, da so osnovni nabori pravil opozoril in razvrstitev po resnosti enaki; bolnišnica z agresivno prilagojenim naborom pravil bo kazala nižjo stopnjo preglasitve iz razlogov, ki nimajo nič skupnega z vedenjem zdravnikov.

## Pasti

- **Obravnavanje surove stopnje preglasitve kot ene same varnostne ocene**: meša dobro utemeljene preglasitve malo vrednih opozoril z nevarnimi preglasitvami resnično nevarnih interakcij; vedno segmentirajte po resnosti.
- **Brez zajema razloga preglasitve**: brez dokumentiranega razloga ni mogoče ločiti »to opozorilo je bilo napačno« od »to opozorilo je bilo pravilno in je zdravnik presodil nevarno«, kar je dejanska razlika, ki šteje za varnost pacientov.
- **Inflacija pravil opozoril skozi čas**: dodajanje vedno več opozoril »za večjo varnost« brez obrezovanja malo vrednih je neposreden vzrok naraščajočih stopenj preglasitve in utrujenosti zaradi opozoril; upravljanje opozoril bi moralo vključevati redni pregled in ukinitev slabo delujočih pravil, ne le spremljanja.
- **Primerjava stopenj med sistemi z različno zasnovo prekinjanja**: prekinjajoče opozorilo s trdo zaustavitvijo povzroča drugačno vedenje preglasitve kot pasivno, neblokirajoče, zato njuni meri nista neposredno primerljivi.

## Viri

- Recenzirana literatura o utrujenosti zaradi opozoril pri podpori kliničnemu odločanju, široko objavljena v revijah, vključno z JAMIA in npj Digital Medicine
- ONC / HealthIT.gov, varnostne smernice zdravstvene informatike o podpori kliničnemu odločanju
- Institute for Safe Medication Practices (ISMP), smernice o zasnovi in upravljanju opozoril CDS
