# Stopa dosljednosti angažmana pacijenata

Stopa dosljednosti angažmana pacijenata mjeri koliko redovito upisani pacijent koristi digitalni zdravstveni proizvod tijekom vremena — na primjer bilježeći prehranu ili simptome, upisujući tjelesnu aktivnost ili pregledavajući zdravstvene podatke — a ne samo je li ga uopće koristio. To je longitudinalna metrika, različita od brojanja aktivnih korisnika u određenom trenutku: dva pacijenta mogu imati identičan status „koristio aplikaciju ovaj mjesec”, a pritom jedan bilježi dosljedno svaki dan, dok drugi jednom zabilježi i nestane na tri tjedna, i samo ih metrika dosljednosti razlikuje.

## Zašto je važna

Trajna, redovita uporaba digitalnog zdravstvenog alata jedan je od pouzdanijih prethodnih pokazatelja kliničke koristi, osobito kod stanja ovisnih o ponašanju, poput dijabetesa, kontrole tjelesne težine i mentalnog zdravlja, gdje vrijednost alata proizlazi iz navike koju podupire, a ne iz jedne sesije. Proizvod može prijaviti dobar broj mjesečno aktivnih korisnika, a zapravo služiti populaciji koja se prijavi jednom i odustane, jer je mjesečna aktivna uporaba niska prečka koja ne govori ništa o obrascu uporabe unutar mjeseca; metrike dosljednosti to otkrivaju na način na koji jednostavni brojevi aktivnosti ne mogu. Budući da je dosljednost također jedna od težih stvari za održati tijekom mjeseci, a ne tjedana, ona je pošteniji signal kvalitete proizvoda i kliničke prikladnosti od kratkoročnih pokazatelja angažmana, koji su skloni učincima novosti odmah nakon uvođenja korisnika.

## Kako se izračunava

```
Stopa dosljednosti angažmana = tjedni s barem jednom kvalificiranom interakcijom
                               / ukupni tjedni upisa × 100

„Kvalificirana interakcija” mora biti izričito i dosljedno definirana
(npr. unos u dnevnik prehrane, provjera simptoma ili dovršena sinkronizacija
aktivnosti) — nikada pasivan događaj poput otvaranja aplikacije bez ikakve
zabilježene radnje.

Prijavite kao raspodjelu, a ne samo kao prosjek populacije:
  npr. udio pacijenata s tjednom dosljednošću ≥ 80 %,
       udio s 50 – 79 %, udio s < 50 %
```

## Razrađeni primjer

Aplikacija za prehrambeno savjetovanje upisuje pacijenta na 12 tjedana. Pacijent zabilježi barem jedan kvalificirani unos hrane u 9 od tih 12 tjedana, što daje pojedinačnu stopu dosljednosti angažmana od 9 / 12 × 100 = 75 %. U cijeloj kohorti aplikacije od 2 000 pacijenata upisanih barem 12 tjedana, 600 pacijenata (30 %) održava tjednu dosljednost ≥ 80 %, 900 (45 %) nalazi se u rasponu od 50 – 79 %, a 500 (25 %) je ispod 50 %. Prijava samo prosjeka kohorte (koji bi mogao iznositi oko 65 %) prikrila bi da cijela četvrtina pacijenata jedva da se uopće angažira — skupinu koju vrijedi zasebno istražiti, a ne razrijediti u ukupni prosjek.

## Izvori podataka i ograničenja

Podaci o dosljednosti dolaze iz vlastitih zapisa događaja proizvoda (unosi hrane, sinkronizacije aktivnosti, prijave stanja), a definicija „kvalificirane interakcije” ima golem učinak na dobivenu stopu — blaga definicija (bilo koje otvaranje aplikacije) uvijek će izgledati bolje od stroge (dovršen, smislen unos u dnevnik), pa se korištena definicija mora jasno navesti uz svaki prijavljeni podatak. Automatski sinkronizirane podatke (na primjer povezani fitness narukvica koja u pozadini sinkronizira aktivnost) treba prijavljivati zasebno od ručno unesenih podataka, jer automatska sinkronizacija može napuhati prividnu dosljednost bez ikakvog aktivnog truda pacijenta ili angažmana sa smjernicama proizvoda.

## Zamke

- **Miješanje otvaranja aplikacije sa smislenim angažmanom**: pasivno otvaranje aplikacije (na primjer potaknuto push-obavijesti) nije isto što i unos hrane u dnevnik ili dovršena prijava stanja; definirajte i prijavljujte samo kvalificirane interakcije.
- **Prijava samo prosjeka populacije**: dobro izgledajući prosjek dosljednosti može sakriti bimodalnu populaciju vrlo angažiranih i gotovo potpuno neangažiranih pacijenata; prijavite raspodjelu po pojasevima dosljednosti, a ne samo srednju vrijednost.
- **Zanemarivanje nazivnika duljine upisa**: usporedba stopa dosljednosti među pacijentima upisanima vrlo različito dugo, bez uzimanja u obzir trajanja upisa, iskrivit će rezultat u korist skupine s kraćim i lakše održivim razdobljem mjerenja.
- **Automatska sinkronizacija u pozadini napuhuje stopu**: pasivno sinkronizirani tok podataka s nosivog uređaja može učiniti da se neangažirani pacijent čini dosljedno aktivnim bez ikakve stvarne promjene ponašanja ili angažmana s proizvodom.

## Izvori

- Recenzirana literatura o obrascima angažmana u digitalnom zdravlju i njihovoj povezanosti s kliničkim ishodima, na primjer studije objavljene u časopisu Journal of Medical Internet Research (JMIR)
- American Medical Informatics Association (AMIA), smjernice o kvaliteti zdravstvenih podataka koje generiraju pacijenti i mjerenju angažmana
- Digital Therapeutics Alliance, smjernice dobre prakse o mjerenju angažmana i ishoda za digitalne terapeutike

Vidi također: [stopa zadržavanja korisnika](../stopa-zadržavanja-korisnika/), usko povezana metrika koja pokazuje ostaje li pacijent uopće upisan, za razliku od toga koliko dosljedno se angažira dok je upisan.
