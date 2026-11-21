# Stopa zadržavanja korisnika

Stopa zadržavanja korisnika udio je korisnika aktivnih u početnom razdoblju koji ostaju aktivni u kasnijem razdoblju, a njezin obrat, stopa odlaska (churn, odnosno odustajanja), udio je onih koji potpuno prestanu koristiti proizvod. Dok stopa usvajanja portala za pacijente (vidi tu temu) mjeri aktivira li pacijent uopće smisleno digitalni zdravstveni proizvod, zadržavanje mjeri nastavlja li ga koristiti — a za svaki digitalni zdravstveni proizvod pretplatničkog tipa ili za trajnu skrb zadržavanje je obično jedina metrika najčvršće povezana i s kliničkim učinkom i s komercijalnom održivošću.

## Zašto je važna

Digitalni zdravstveni proizvod koji ne može zadržati korisnike ne može pružiti trajnu kliničku korist, koliko god bili dobri njegovi početni brojevi usvajanja ili aktivacije: alat za upravljanje kroničnim stanjem koji se koristi dva tjedna pa napusti malo će vjerojatno pomaknuti biometrijski ishod koji ovisi o mjesecima trajne promjene ponašanja. Zadržavanje je ujedno jedna od komercijalno najvažnijih metrika koje digitalna zdravstvena tvrtka prijavljuje ulagačima i platiteljima, jer krivulje zadržavanja (oblik opadanja tijekom vremena, a ne samo jedan postotak zadržavanja) otkrivaju je li proizvod pronašao doista održiv obrazac uporabe ili samo hvata početni interes potaknut novošću koji predvidljivo jenjava. Krivulja zadržavanja koja se nakon početnog pada izravna (pacijenti koji prežive prvi mjesec uglavnom ostaju) posve je drukčiji, i mnogo zdraviji signal od one koja stalno opada bez dna.

## Kako se izračunava

```
Stopa zadržavanja (razdoblje N) = korisnici aktivni u razdoblju N koji su bili
                                  aktivni i u početnom razdoblju kohorte /
                                  korisnici u početnom razdoblju kohorte × 100

Stopa odlaska = 1 − stopa zadržavanja (za isto razdoblje)

Prijavite kao kohortnu krivulju zadržavanja (zadržavanje nakon 1., 2., 3.
dana/tjedna/mjeseca…), a ne kao pojedinačan podatak u jednom trenutku, jer
jedna snimka miješa nedavno pridošle korisnike (koji još nisu stigli
odustati) s dugogodišnjima.
```

## Razrađeni primjer

Digitalna zdravstvena aplikacija upisuje kohortu od 1 000 novih korisnika u siječnju. Do kraja 1. mjeseca 640 od tih izvornih 1 000 još je aktivno (zadržavanje u 1. mjesecu 64 %). Do kraja 3. mjeseca aktivno ostaje 410 (zadržavanje u 3. mjesecu 41 %). Do 6. mjeseca aktivno ostaje 380 (zadržavanje u 6. mjesecu 38 %). Oblik ove krivulje — strmi početni pad nakon kojeg slijedi izravnavanje između 3. i 6. mjeseca — upućuje na to da proizvod zadržava stabilnu jezgru korisnika nakon što prijeđu početnu prepreku usvajanja, što je materijalno drukčiji i ohrabrujući signal nego da se pad od 3. do 6. mjeseca nastavio istom brzinom kao u 1. do 3. mjesecu.

## Izvori podataka i ograničenja

Zadržavanje se izračunava iz vlastitih zapisa događaja prijave ili aktivnosti proizvoda, pri čemu se „aktivan” definira dosljedno (na primjer barem jedna kvalificirana sesija u razdoblju) u svim kohortama koje se uspoređuju. Kohorte treba uspoređivati na istoj osnovi — ista početna definicija „aktivnog”, ista duljina razdoblja promatranja — jer i male definicijske razlike (mjeseci od 30 naspram 28 dana ili stroži naspram blaži prag „aktivnosti”) mogu pomaknuti prijavljeni postotak zadržavanja za nekoliko bodova bez ikakve stvarne razlike u ponašanju korisnika. Sezonski su učinci uobičajeni kod zdravstvenih aplikacija vezanih uz novogodišnje odluke ili posebna razdoblja osvještavanja o zdravlju, pa je usporedba kohorti iz godine u godinu obično informativnija od usporedbe susjednih kohorti iz različitih doba godine.

## Zamke

- **Prijava jedne snimke zadržavanja umjesto krivulje**: jedan podatak „X % korisnika još je aktivno” bez oblika opadanja tijekom vremena ne može razlikovati proizvod koji se stabilizira (zdravo) od onoga koji stalno opada (nezdravo).
- **Promjena definicije „aktivnog” između razdoblja izvješćivanja**: popuštanje definicije aktivnog korisnika (na primjer brojanje pasivnog otvaranja aplikacije umjesto dovršene radnje) može učiniti da se zadržavanje čini boljim iako se stvarna uporaba nije uopće promijenila.
- **Zanemarivanje sezonalnosti kohorte**: usporedba zadržavanja siječanjske kohorte (često napuhane upisima zbog novogodišnjih odluka, koji u prosjeku dovode manje motiviranu kohortu) s kohortom stečenom u drugo doba godine može dati pogrešne zaključke o trendu.
- **Miješanje organskih kohorti i kohorti stečenih plaćenim oglašavanjem**: korisnici stečeni različitim kanalima često se zadržavaju vrlo različito; spajanje u jedan ukupni podatak o zadržavanju može sakriti problem zadržavanja specifičan za kanal.

## Izvori

- Recenzirana literatura o angažmanu i odustajanju kod digitalnih zdravstvenih aplikacija, na primjer studije objavljene u časopisu Journal of Medical Internet Research (JMIR mHealth and uHealth)
- Digital Therapeutics Alliance, smjernice dobre prakse o mjerenju angažmana i zadržavanja za digitalne terapeutike
- Industrijska izvješća o usporednim mjerilima zadržavanja kod mobilnih zdravstvenih aplikacija, platformi za analitiku i organizacija za istraživanje tržišta digitalnog zdravlja

Vidi također: [stopa dosljednosti angažmana pacijenata](../stopa-dosljednosti-angažmana-pacijenata/), koja mjeri kvalitetu angažmana među zadržanim korisnicima, za razliku od toga ostaju li uopće upisani.
