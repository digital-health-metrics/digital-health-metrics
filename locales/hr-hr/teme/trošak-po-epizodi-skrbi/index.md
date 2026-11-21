# Trošak po epizodi skrbi

Trošak po epizodi skrbi ukupan je trošak nastao liječenjem definirane kliničke epizode — na primjer ugradnje umjetnog kuka i pripadajućeg oporavka ili razdoblja zbrinjavanja dijabetesa — u usporedbi s povijesnom osnovnom kohortom liječenom bez digitalne intervencije koja se evaluira. To je standardna jedinica financijske usporedbe u skrbi temeljenoj na vrijednosti, jer obuhvaća cjelovitu ekonomsku sliku epizode, a ne pojedinu stavku troška izolirano, te je metrika koju platitelji i zdravstveni sustavi najčešće traže prije nego što pristanu financirati program digitalnog zdravlja u većem opsegu.

## Zašto je važan

Ugovori o skrbi temeljenoj na vrijednosti sve češće plaćaju ishode i epizode, a ne pojedinačne usluge, što znači da se financijski argument programa digitalnog zdravlja mora iznijeti u istoj valuti: ukupan trošak po epizodi, u usporedbi s onim koliko je ista vrsta epizode koštala prije nego što je intervencija postojala. Program koji smanjuje jednu kategoriju troška (na primjer, manje osobnih kontrolnih posjeta) dok povećava drugu (više troškova uređaja, više vremena kliničkog osoblja za praćenje) nije nužno smanjio ukupan trošak po epizodi, a tu razmjenu obuhvaća samo cjelovito obračunavanje troškova na razini epizode; promatranje bilo koje pojedinačne stavke troška izolirano riskira zavaravajući zaključak u oba smjera. Budući da se definicije epizoda i osnovna razdoblja mogu konstruirati tako da favoriziraju određeni zaključak, ova metrika zahtijeva više metodološke transparentnosti od većine drugih u ovoj knjizi da bi bila vjerodostojna skeptičnom platitelju ili financijskoj službi.

## Kako se izračunava

```
Trošak po epizodi skrbi = ukupan trošak sve skrbi pružene unutar
                          definiranog prozora epizode (sve razine
                          skrbi, sve kategorije troškova) /
                          broj epizoda

Usporedite s troškom po epizodi povijesne osnovne kohorte za istu
klinički definiranu vrstu epizode, uz prilagodbu za sastav slučajeva
(dob, komorbiditet, težina) između dviju kohorti.

Uključite, a ne samo izravne kliničke troškove: troškove tehnološke
platforme i uređaja, dodatno vrijeme kliničkog osoblja i svu skrb koja
je promijenila mjesto pružanja (npr. s bolničke na kućnu) umjesto da
potpuno nestane.
```

## Razrađeni primjer

Povijesni osnovni trošak zdravstvenog sustava za epizodu potpune ugradnje umjetnog kuka (od operacije do 90-dnevnog oporavka) iznosi 28 000 USD po epizodi, na temelju 200 povijesnih epizoda. Uvodi se novi digitalni program praćenja nakon operacije, a 150 novih epizoda uz program pokazuje prosječan trošak od 24 500 USD po epizodi — smanjenje od 3 500 USD po epizodi, uglavnom zbog manje posjeta hitnoj službi tijekom oporavka i kraćeg prosječnog bolničkog boravka. Nakon prilagodbe za rizik zbog nešto mlađeg sastava slučajeva s manjim komorbiditetom u digitalno praćenoj kohorti u odnosu na povijesnu osnovicu, prilagođena ušteda smanjuje se na 2 100 USD po epizodi — i dalje stvarno poboljšanje, ali bitno manje od onoga što je sugerirala neobrađena, neprilagođena usporedba.

## Izvori podataka i ograničenja

Ukupan trošak epizode obično se sastavlja iz vlastitog sustava troškovnog računovodstva ili financija zdravstvenog sustava, kombinirajući podatke iz potraživanja, interne raspodjele troškova i, gdje je uključena digitalna platforma, troškove licenci i opreme — točno sastavljanje tog broja obično je najteži i najzahtjevniji dio svake analize vrijednosti digitalnog zdravlja, jer se troškovi često bilježe u zasebnim sustavima koji nikada nisu osmišljeni za spajanje na razini epizode. Prilagodba za sastav slučajeva ključna je kad god digitalno vođena kohorta i povijesna osnovna kohorta nisu dodijeljene pravom randomizacijom, jer se digitalni programi često najprije nude angažiranijim, općenito zdravijim ili motiviranijim pacijentima, što može stvoriti prividnu uštedu koja je zapravo učinak selekcije, a ne pravi učinak programa.

## Zamke

- **Usporedba neprilagođenih troškova među kohortama s različitim sastavom slučajeva**: digitalno vođena kohorta koja je slučajno zdravija ili manjeg rizika od povijesne osnovice pokazat će niži trošak po epizodi iz razloga nepovezanih sa samom digitalnom intervencijom; uvijek prilagodite za rizik prije usporedbe.
- **Izostavljanje troškova tehnologije i osoblja s „digitalne” strane usporedbe**: analiza troškova koja prati samo smanjeno kliničko korištenje, a zanemaruje troškove platforme, uređaja i osoblja za vođenje digitalnog programa, precijenit će neto uštede.
- **Nedosljedno definiranje prozora epizode među kohortama**: usporedba 90-dnevnog prozora epizode za jednu kohortu s 60-dnevnim za drugu dat će usporedbu troškova koja zapravo ne mjeri istu stvar.
- **Premještanje troška smatra se smanjenjem troška**: trošak premješten iz jednog okruženja skrbi u drugo (na primjer s bolničkog u praćeno kućno okruženje) stvaran je i vrijedan nalaz, ali je analitički drukčiji od potpuno uklonjenog troška, pa ih treba prijavljivati zasebno.

## Izvori

- Centers for Medicare & Medicaid Services (CMS), Bundled Payments for Care Improvement (BPCI) i smjernice za modele plaćanja temeljene na epizodama
- Healthcare Financial Management Association (HFMA), smjernice o metodologiji obračuna troškova epizode skrbi
- Recenzirana literatura o analizi troškova digitalnog zdravlja u skrbi temeljenoj na vrijednosti, na primjer studije objavljene u časopisima Health Affairs i American Journal of Managed Care

Vidi također: [povrat ulaganja (ROI) i vrijednost ulaganja (VOI)](../roi-i-voi/), koji koristi trošak po epizodi skrbi kao jedan od svojih glavnih ulaznih podataka.
