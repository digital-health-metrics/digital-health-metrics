# Omjer DAU/MAU (prianjanje)

Omjer prianjanja DAU/MAU uspoređuje dnevno aktivne korisnike (DAU) s mjesečno aktivnim korisnicima (MAU) — ista temeljna mjera koristi se i za tjedno aktivne korisnike (WAU) naspram MAU — kako bi izrazio koji udio šire korisničke baze proizvoda s njime stupa u interakciju u bilo kojem danu. To je standardna mjera intenziteta angažmana u analitici proizvoda, različita od toga je li korisnik uopće zadržan (vidi stopu zadržavanja korisnika) ili koliko dosljedno određeni upisani pacijent koristi proizvod tijekom vremena (vidi stopu dosljednosti angažmana pacijenata): prianjanje opisuje ritam uporabe na razini populacije, a ne obrazac pojedinca.

## Zašto je važan

Dva digitalna zdravstvena proizvoda mogu prijaviti identičan broj mjesečno aktivnih korisnika, a imati vrlo različit temeljni intenzitet angažmana: jedan u kojem većina tih korisnika otvara aplikaciju gotovo svaki dan i drugi u kojem je većina otvara jednom mjesečno, neposredno prije nego što bi inače bila brojana kao neaktivna. Omjer prianjanja DAU/MAU razlikuje te dvije vrlo različite situacije jednim, jednostavnim, dobro poznatim usporednim brojem koji timovi za proizvod i klinički timovi mogu pratiti tijekom vremena i uspoređivati s poznatim industrijskim rasponima — omjer od oko 20 % često se navodi kao razuman usporedni pokazatelj za mnoge potrošačke aplikacije, dok proizvode dnevne navike (dnevnik prehrane ili simptoma koji pacijent treba koristiti svaki dan) treba ocjenjivati prema bitno višoj ljestvici. Budući da je prianjanje osjetljivo na to kako se definira „aktivan”, najkorisnije je kao trend jednog proizvoda tijekom vremena i kao usporedba s proizvodima izrađenima za sličan obrazac uporabe, a ne kao apsolutno međuindustrijsko mjerilo.

## Kako se izračunava

```
Omjer prianjanja DAU/MAU = prosječan broj dnevno aktivnih korisnika u
                           razdoblju / mjesečno aktivni korisnici u
                           istom razdoblju × 100

Omjer WAU/MAU (tjedni, isto načelo) blaža je varijanta, prikladnija
za proizvode koje se očekuje koristiti nekoliko puta tjedno, a ne
svaki dan.

„Aktivan” se mora definirati precizno i dosljedno (npr. dovršena
kvalificirajuća radnja, a ne pasivno otvaranje aplikacije) i u
brojniku i u nazivniku.
```

## Razrađeni primjer

Digitalna aplikacija za upravljanje dijabetesom ima 10 000 mjesečno aktivnih korisnika u određenom mjesecu, definiranih kao svaki korisnik koji u tom mjesecu dovrši barem jednu kvalificirajuću radnju (unos glukoze, unos obroka ili potvrdu uzimanja lijeka). Prosjek dnevno aktivnih korisnika kroz 30 dana tog mjeseca daje prosječni DAU od 2 200. Omjer prianjanja DAU/MAU iznosi 2 200 / 10 000 × 100 = 22 %, što pokazuje da u uobičajenom danu oko 22 % mjesečne korisničke baze aplikacije stupa u interakciju s njom — razuman podatak za alat dnevne navike za kronična stanja, iako bi tim proizvoda želio vidjeti da kroz vrijeme raste kako idealno ponašanje (svakodnevno bilježenje) postaje sve više navika upisanih pacijenata.

## Izvori podataka i ograničenja

DAU, WAU i MAU izračunavaju se iz istih temeljnih zapisa događaja, uz jednu dosljednu definiciju „kvalificirajućeg aktivnog” događaja u svakom prozoru; mijenjanje te definicije između izračuna brojnika i nazivnika (na primjer, brojanje svakog otvaranja aplikacije za DAU, ali samo dovršene radnje za MAU) dat će iskrivljen omjer koji ne odražava stvarni intenzitet angažmana. Odgovarajuće usporedno mjerilo prianjanja uvelike ovisi o predviđenom obrascu uporabe proizvoda: alat namijenjen uporabi jednom tjedno (tjedna provjera simptoma) imat će i treba imati niži omjer DAU/MAU od alata namijenjenog svakodnevnoj uporabi (prateća aplikacija uz uređaj za kontinuirano praćenje glukoze), pa prianjanje uvijek treba tumačiti u odnosu na vlastiti predviđeni ritam uporabe proizvoda, a ne jedan univerzalni cilj.

## Zamke

- **Usporedba omjera prianjanja među proizvodima s različitom predviđenom učestalošću uporabe**: alat za tjednu uporabu strukturno će pokazivati niži omjer DAU/MAU od alata za dnevnu uporabu, čak i ako oba rade točno onako kako je predviđeno za njihove namjene; uspoređujte s vlastitim predviđenim ritmom proizvoda, a ne jednim univerzalnim ciljem.
- **Nedosljedne definicije aktivnosti u brojniku i nazivniku**: to može dati omjer prianjanja koji ne odražava stvaran intenzitet angažmana i ne može se smisleno uspoređivati tijekom vremena ni s drugim proizvodima.
- **Rastući omjer prianjanja smatra se nedvosmisleno pozitivnim bez provjere ukupnog trenda MAU-a**: rastući omjer uzrokovan smanjenjem, ali navikom sve vezanije jezgre korisnika dok ukupni MAU pada vrlo je drukčija — i zabrinjavajuća — situacija od one uzrokovane stvarno rastućim dnevnim angažmanom na stabilnoj ili rastućoj korisničkoj bazi.
- **Zanemarivanje učinaka dana u tjednu i sezone na DAU**: DAU može znatno varirati prema danu u tjednu (radni dani naspram vikenda) ili sezoni za mnoge zdravstvene proizvode; koristite prosječni DAU kroz razdoblje koje obuhvaća puni prirodni ciklus, a ne kratki prozor koji bi mogao biti iskrivljen.

## Izvori

- Recenzirana i industrijska literatura o metrikama angažmana mobilnih i digitalnih proizvoda, naširoko korišteni okviri za usporedno mjerenje s platformi za mobilnu analitiku
- Digital Therapeutics Alliance, smjernice dobre prakse o mjerenju angažmana za digitalne terapeutike
- Recenzirana literatura o mjerenju angažmana u digitalnom zdravlju, na primjer studije objavljene u časopisu Journal of Medical Internet Research (JMIR mHealth and uHealth)

Vidi također: [stopa zadržavanja korisnika](../stopa-zadržavanja-korisnika/) i [stopa dosljednosti angažmana pacijenata](../stopa-dosljednosti-angažmana-pacijenata/), dvije srodne metrike angažmana s kojima se ovaj omjer najčešće miješa.
