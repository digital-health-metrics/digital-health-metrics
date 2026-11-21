# Stopa pridržavanja terapije

Stopa pridržavanja terapije mjeri u kojoj mjeri pacijent uzima propisani lijek prema uputama, najčešće izražena kao udio dana u definiranom razdoblju u kojima je pacijent imao pristup lijeku onako kako je propisan. To je jedna od najposljedičnijih metrika digitalnog zdravlja jer je nepridržavanje uobičajeno, uz odgovarajuću podršku uvelike sprječivo i izravno povezano s lošijim kliničkim ishodima i većim nizvodnim troškovima — što je upravo jaz koji aplikacije za podsjetnike na lijekove, pametne bočice s lijekovima i podsjećanja ljekarni na ponovno podizanje lijeka nastoje zatvoriti.

## Zašto je važna

Javnozdravstvena tijela procjenjuju da nepridržavanje terapije za kronične bolesti kod nekih stanja doseže čak 50 %, a vodeći je sprječivi uzrok izbježivih hospitalizacija, napredovanja bolesti i neuspjeha liječenja, koji se pogrešno pripisuje samom lijeku, a ne nedosljednoj uporabi. Digitalni alati za pridržavanje terapije postoje upravo da zatvore taj jaz, pa je za svaki program koji uključuje komponentu lijeka stopa pridržavanja obično najvažnija pojedinačna metrika za odlučivanje: uzročno prethodi biometrijskom poboljšanju, ponovnim prijemima i većini drugih metrika kliničkih ishoda koje program inače može prijavljivati. Program koji poboljšava angažman ili zadovoljstvo, a ne pomiče pridržavanje, vjerojatno još nije pokazao uvjerljiv mehanizam kliničke koristi.

## Kako se izračunava

```
Udio pokrivenih dana (PDC) = dani u razdoblju s lijekom pri ruci
                             (na temelju dana opskrbe iz izdanih
                             pakiranja) / dani u razdoblju mjerenja × 100

Omjer posjedovanja lijeka (MPR) = ukupni dani opskrbe dobiveni tijekom
                             razdoblja / dani u razdoblju × 100 (može
                             premašiti 100 % pri ranijim ponovnim
                             podizanjima; zbog toga se općenito
                             preferira PDC)

Pacijent se obično klasificira kao „pridržavajući se” pri PDC pragu
od ≥ 80 %, prema široko korištenoj konvenciji mjera kvalitete.
```

## Razrađeni primjer

Pacijentu je propisan dnevni lijek za kroničnu bolest tijekom 90-dnevnog razdoblja mjerenja. Zapisi o izdavanju u ljekarni pokazuju da je pacijent dobio dovoljno lijeka da pokrije 76 od tih 90 dana, uz dvije praznine: 9-dnevnu prazninu nakon što mu je lijek ponestao prije ponovnog podizanja i 5-dnevnu prazninu oko prijema u bolnicu. PDC iznosi 76 / 90 × 100 = 84 %, što prelazi uobičajeni prag pridržavanja od 80 %. Da su iste praznine mjerene pomoću MPR-a na temelju dana opskrbe izdane, a ne dana stvarno pokrivenih, ranije ponovno podizanje drugdje u razdoblju moglo bi gurnuti omjer iznad 100 %, što pokazuje zašto je PDC konzervativnija i općenito preferirana mjera.

## Izvori podataka i ograničenja

Standardni izvor su potraživanja ljekarni ili podaci o izdavanju (od upravitelja ljekarničkih naknada ili povezanog ljekarničkog sustava), jer odražavaju što je pacijent zapravo dobio, a ne što mu je propisano; sami podaci o receptima precjenjuju pridržavanje jer ne potvrđuju da je pacijent ikada podigao lijek. Digitalni alati za pridržavanje terapije — pametne bočice s lijekovima, gutljivi senzori, povezani pametni inhalatori koji bilježe svako aktiviranje kod dišnih stanja poput astme i KOPB-a te provjere putem aplikacije — nude podatke više razlučivosti o tome je li doza zaista uzeta, a ne samo dobivena, ali ih koristi mala, potencijalno nereprezentativna manjina pacijenata, pa miješanje pridržavanja potvrđenog uređajem s PDC-om temeljenim na potraživanjima preko populacije zahtijeva oprez pri tumačenju. Pridržavanje treba mjeriti kroz razdoblje dovoljno dugo da izgladi pojedinačne propuštene doze, ali dovoljno kratko da otkrije znatan pad prije nego što uzrokuje kliničku štetu — za lijekove za kronične bolesti uobičajeni su 90-dnevni klizni prozori.

## Zamke

- **Korištenje MPR-a bez navođenja da može premašiti 100 %**: neobjašnjeni omjeri iznad 100 % zbog ranih ponovnih podizanja ili zaliha čine usporedbu među pacijentima i razdobljima nepouzdanom, osim ako se koristi PDC ili se omjer izričito ograniči.
- **Tretiranje podataka o receptima ili narudžbama kao dokaza pridržavanja**: recept napisan ili poslan ljekarni ništa ne govori o tome je li pacijent podigao ili uzeo lijek; taj jaz zatvaraju samo podaci o izdavanju ili uređaju.
- **Neselektivna primjena jednog praga pridržavanja na sva stanja**: klinička posljedica propuštanja 20 % doza uvelike varira prema skupini lijekova (npr. antikoagulansi naspram statina), pa jedan univerzalni prag od 80 % može podcijeniti ili precijeniti klinički rizik za neke lijekove.
- **Zanemarivanje zamjena i prekida lijekova**: pacijent kojem je klinički opravdano zamijenjen lijek može se činiti kao veliki pad pridržavanja izvornog lijeka ako se zamjena ne uzme u obzir u izračunu.

## Izvori

- Pharmacy Quality Alliance (PQA), specifikacije mjere Proportion of Days Covered
- Centers for Medicare & Medicaid Services (CMS), mjere pridržavanja terapije u sustavu Star Ratings
- Recenzirana literatura o mjerenju pridržavanja terapije i digitalnim intervencijama za pridržavanje, na primjer studije objavljene u časopisu Journal of Managed Care & Specialty Pharmacy

Vidi također: [stopa poboljšanja biometrijskih pokazatelja](../stopa-poboljšanja-biometrijskih-pokazatelja/), čiji je pridržavanje terapije za kronične bolesti glavni pokretač.
