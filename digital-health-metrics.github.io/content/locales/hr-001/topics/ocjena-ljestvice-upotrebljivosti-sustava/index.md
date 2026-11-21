# Ocjena ljestvice upotrebljivosti sustava (SUS)

Ocjena ljestvice upotrebljivosti sustava (System Usability Scale, SUS) standardizirani je upitnik od 10 čestica koji se koristi za kvantificiranje koliko je neki softver upotrebljiv i daje jedinstvenu ocjenu od 0 do 100 koja se može usporediti s dobro ustanovljenim industrijskim normama. Za razliku od Net Promoter Scorea, koji mjeri spremnost na preporuku, ili mjera ishoda koje prijavljuju pacijenti, koje mjere klinički ili funkcionalni status, SUS mjeri jednu specifičnu stvar: koliko je sam softver jednostavan za učenje i korištenje, bilo za pacijente bilo za kliničko osoblje.

## Zašto je važna

Alat digitalnog zdravlja može imati snažne kliničke dokaze i uvjerljiv poslovni slučaj, a u praksi ipak zakazati jer pacijenti ili kliničari smatraju sučelje zbunjujućim, sporim ili frustrirajućim za korištenje — a budući da je SUS validiran, naširoko korišten instrument s desetljećima objavljenih usporednih podataka kroz industrije, omogućuje timu za digitalno zdravlje da usporedi upotrebljivost vlastitog proizvoda s poznatom raspodjelom, umjesto da se oslanja na neformalne dojmove ili anegdotalne pritužbe. SUS je namjerno neovisan o tehnologiji i brz za provedbu (obično manje od pet minuta), što ga čini praktičnim za višekratno provođenje kroz iteracije dizajna, za razliku od pune studije upotrebljivosti ili formalnog kliničkog ispitivanja. Budući da su nedostaci upotrebljivosti za kliničare dokumentirani čimbenik izgaranja (vidi stopu izgaranja liječnika), a nedostaci upotrebljivosti za pacijente dokumentirani čimbenik napuštanja i loših ishoda digitalne pismenosti (vidi stopu digitalne pismenosti), SUS funkcionira kao jeftin signal upotrebljivosti za rano upozorenje koji može uhvatiti problem dizajna prije nego što se pokaže u tim posljedičnijim nizvodnim metrikama.

## Kako se izračunava

```
SUS ocjena = ((zbroj ocjena neparnih čestica − 5) +
              (25 − zbroj ocjena parnih čestica)) × 2,5

Rezultat je jedinstvena ocjena od 0 do 100 (a ne postotak, unatoč
ljestvici, jer ne predstavlja „postotak točnih” ili slično).

Objavljeno tumačenje mjerila (Bangor i sur.):
  Iznad 80  — izvrsna upotrebljivost
  68        — prosječna, prema široj industrijskoj normi
  Ispod 51  — loša upotrebljivost, zahtijeva istraživanje
```

## Razrađeni primjer

Telemedicinska platforma provodi standardni SUS upitnik od 10 čestica među 150 pacijenata nakon njihova prvog videoposjeta. Izračunana prosječna SUS ocjena svih ispitanika iznosi 74. U usporedbi s naširoko citiranim industrijskim prosjekom od 68, to ukazuje na iznadprosječnu upotrebljivost za ovu specifičnu populaciju pacijenata i slučaj uporabe, iako je i dalje bitno ispod „izvrsnog” praga od 80 koji bi sugerirao malo preostalih prepreka upotrebljivosti. Segmentacija istih 150 odgovora prema dobi pokazuje prosječnu ocjenu od 81 za pacijente mlađe od 50 godina i 62 za pacijente od 65 godina i starije — jaz koji upućuje na specifičan, rješiv problem upotrebljivosti za starije pacijente, a ne opći problem upotrebljivosti proizvoda, i koji bi jedan zbrojeni prosjek sakrio.

## Izvori podataka i ograničenja

SUS podaci dolaze izravno od pacijenata ili kliničara koji ispunjavaju standardizirani upitnik od 10 čestica, a instrument se mora provoditi točno onako kako je validiran (istih 10 čestica, ista 5-stupanjska ljestvica slaganja, ista formula bodovanja) da bi se dobivena ocjena mogla usporediti s objavljenim mjerilima; izmijenjena ili skraćena verzija upitnika, koliko god dobronamjerna, daje ocjenu koja se ne može pouzdano tumačiti u odnosu na standardnu raspodjelu mjerila. SUS mjeri percipiranu upotrebljivost, koja korelira s objektivnim uspjehom dovršavanja zadataka, ali nije identična (vidi stopu digitalne pismenosti za mjeru temeljenu na dovršavanju zadataka); proizvod može imati dobru SUS ocjenu pacijenata koji nisu pokušali složenije funkcije, pa uparivanje SUS-a s objektivnim podacima o dovršavanju zadataka daje potpuniju sliku od bilo kojeg od njih samog. Vrijeme odgovaranja je važno: provođenje SUS-a odmah nakon frustrirajućeg konkretnog događaja (neuspjela veza, zbunjujući korak) naspram nakon glatke sesije može pomaknuti ocjene neovisno o ukupnoj upotrebljivosti proizvoda.

## Zamke

- **Mijenjanje standardnih čestica upitnika ili bodovanja**: čak i male promjene formulacije ili ljestvice poništavaju usporedbu s dobro ustanovljenom objavljenom raspodjelom mjerila; koristite standardni instrument od 10 čestica točno kako je validiran.
- **Prijavljivanje samo prosječne ocjene bez segmentacije**: upotrebljivost se često znatno razlikuje prema dobi korisnika, digitalnoj pismenosti ili ulozi (pacijent naspram kliničara); segmentirajte izvješćivanje kako biste pronašli specifične, rješive jazove upotrebljivosti koje jedan prosjek skriva.
- **Tretiranje SUS-a kao mjere kliničke učinkovitosti**: SUS mjeri upotrebljivost, a ne klinički ishod ni zadovoljstvo skrbi; vrlo upotrebljiv alat i dalje može ne poboljšati kliničke ishode, a to dvoje nikada ne treba miješati ni zamjenjivati jedno drugim.
- **Provođenje ankete samo nakon neobično glatkih ili neobično frustrirajućih sesija**: vrijeme i kontekst provođenja mogu pristrano utjecati na ocjenu; provodite dosljedno na reprezentativnom uzorku stvarnih sesija, a ne samo na zgodnim ili selektivno odabranima.

## Izvori

- Brooke, J., „SUS: A Quick and Dirty Usability Scale”, izvorno objavljeni instrument
- Bangor, Kortum i Miller, objavljena istraživanja SUS mjerila koja su utvrdila naširoko citirane pojaseve tumačenja ocjena
- Recenzirana literatura o uporabi SUS-a u digitalnom zdravlju i evaluaciji upotrebljivosti telemedicine, na primjer studije objavljene u časopisu JMIR Human Factors

Vidi također: [net promoter score pacijenata](../net-promoter-score-pacijenata/), srodnu, ali različitu metriku koju prijavljuju pacijenti, a mjeri zadovoljstvo i lojalnost, a ne upotrebljivost softvera.
