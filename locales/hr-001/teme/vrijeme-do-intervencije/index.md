# Vrijeme do intervencije

Vrijeme do intervencije proteklo je vrijeme od generiranja automatskog zdravstvenog upozorenja — na primjer kada uređaj za praćenje na daljinu otkrije vitalni znak izvan raspona ili alat za digitalnu trijažu označi pacijenta s pogoršanjem stanja — do trenutka kada član kliničkog tima zaista pokrene odgovor. To je procesna metrika koja određuje ispunjava li sustav automatskog upozoravanja svoje temeljno obećanje: da uhvati problem ranije nego što bi to učinio tradicionalni model zakazanih kontrola ili telefonskih poziva koje pokreće pacijent.

## Zašto je važno

Sustav upozoravanja koji generira klinički ispravno upozorenje, ali nakon kojeg ne slijedi pravodoban odgovor, zapravo nije poboljšao sigurnost pacijenata; cjelokupna vrijednosna ponuda praćenja na daljinu i automatskog upozoravanja počiva na tome da se petlja zatvori brže nego što bi to učinio alternativni, nepraćeni put. Budući da različite razine ozbiljnosti upozorenja zahtijevaju različitu žurnost odgovora, vrijeme do intervencije uvijek treba prijavljivati po razini ozbiljnosti, a ne kao jedan prosjek, jer brz prosjek preko svih upozorenja može sakriti opasno spor odgovor na mali broj najozbiljnijih. Ova je metrika i jedan od najjasnijih, najuvjerljivijih načina da se kliničkom vodstvu i platiteljima pokaže vrijednost programa automatskog praćenja, jer se može izravno usporediti s ranijim, neautomatiziranim vremenom odgovora iste organizacije u sličnom kliničkom scenariju.

## Kako se izračunava

```
Vrijeme do intervencije = vremenska oznaka (pokrenut klinički odgovor) −
                          vremenska oznaka (generirano upozorenje)

Prijavite medijan i visoki percentil (npr. 90.), segmentirano po razini
ozbiljnosti upozorenja, a ne kao jedan zbrojeni prosjek.

„Pokrenut klinički odgovor” treba definirati precizno i dosljedno —
npr. kliničar otvara pacijentov zapis i djeluje ili je dokumentiran
pokušaj odlaznog kontakta — a ne samo da je upozorenje pregledano ili
potvrđeno bez poduzete radnje.
```

## Razrađeni primjer

Sustav upozoravanja programa kardiološkog praćenja na daljinu u mjesecu označi 200 upozorenja o aritmijama visoke ozbiljnosti. Medijan vremena od generiranja upozorenja do trenutka kada kliničar pokrene odlazni kontakt iznosi 12 minuta, uz vrijeme 90. percentila od 38 minuta. Povijesni podaci iste populacije s ranijeg, nepraćenog puta (gdje bi se sličan događaj obično pojavio tek pri sljedećem zakazanom posjetu ambulanti ili dolasku u bolnicu) pokazuju medijan vremena do bilo kakvog kliničkog odgovora koji se mjeri u danima, a ne minutama. Upravo ta usporedba — a ne broj od 12 minuta izolirano — pokazuje kliničku vrijednost programa praćenja; podatak za 90. percentil jednako je važan jer identificira rep upozorenja na koja se djelovalo tek nakon više od pola sata i zaslužuje vlastiti pregled uzroka.

## Izvori podataka i ograničenja

Vremenske oznake generiranja upozorenja dolaze iz vlastitog zapisa događaja platforme za praćenje; vremenske oznake kliničkog odgovora obično dolaze iz revizijskog traga elektroničkog zdravstvenog zapisa ili iz vlastitog sustava tijeka rada ili upravljanja zadacima skrbnog tima, a ta se dva sustava moraju precizno vremenski sinkronizirati da bi izračunani interval bio vjerodostojan. „Pokrenut odgovor” treba strogu, dokumentiranu definiciju, jer kliničar koji samo pregleda ili odbaci upozorenje bez daljnje radnje predstavlja bitno drukčiji, i mnogo manje umirujući događaj od onoga koji pokreće stvarni odlazni kontakt ili intervenciju — miješanje to dvoje učinit će da vrijeme odgovora izgleda bolje od kliničke stvarnosti. Razina osoblja noću i vikendom obično znatno utječe na vrijeme do intervencije, pa ovu metriku treba prijavljivati po segmentu doba dana i dana u tjednu gdje broj upozorenja to dopušta, a ne samo kao zbrojeni prosjek 24/7 koji može prikriti ozbiljan jaz u odgovoru izvan radnog vremena.

## Zamke

- **Brojanje potvrde upozorenja kao odgovora**: kliničar koji pregleda ili odbaci upozorenje nije isto što i pokretanje kliničkog odgovora; odgovor definirajte strogo kao dokumentiranu radnju, a ne pasivnu potvrdu.
- **Prijavljivanje jednog zbrojenog vremena preko svih razina ozbiljnosti**: brz prosjek preko upozorenja niske i visoke ozbiljnosti zajedno može prikriti opasno sporo vrijeme odgovora upravo za upozorenja najviše ozbiljnosti, koja su najvažnija.
- **Zanemarivanje učinaka rasporeda osoblja**: vrijeme odgovora često se znatno razlikuje prema dobu dana i danu u tjednu zbog razine osoblja; jedan ukupni prosjek može sakriti sustavni jaz u odgovoru izvan radnog vremena ili vikendom.
- **Usporedba vremena do intervencije među organizacijama s različitim pragovima upozoravanja**: organizacija s konzervativnijim (osjetljivijim) pragom upozoravanja generirat će više upozorenja niske žurnosti, što može razrijediti njezino prosječno vrijeme odgovora u usporedbi s organizacijom koja koristi stroži prag, neovisno o stvarnoj kliničkoj reaktivnosti.

## Izvori

- NHS England, smjernice o praćenju na daljinu i standardima kliničkog odgovora virtualnih odjela
- ONC / HealthIT.gov, smjernice o dizajnu i sigurnosti sustava kliničkog upozoravanja
- Recenzirana literatura o vremenima odgovora na upozorenja pri praćenju pacijenata na daljinu i kliničkim ishodima, na primjer studije objavljene u časopisu npj Digital Medicine

Vidi također: [stopa raspoloživosti uređaja](../stopa-raspoloživosti-uređaja/), jer pouzdan podatak o vremenu do intervencije ovisi o tome da je uređaj za praćenje uopće na mreži kako bi generirao upozorenje.
