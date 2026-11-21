# Stopa preusmjeravanja iz hitne službe

Stopa preusmjeravanja iz hitne službe (HS) mjeri udio kontakata pacijenata obrađenih digitalnim alatom za trijažu ili virtualnu skrb koji bi bez te intervencije vjerojatno završili posjetom hitnoj službi, a umjesto toga su sigurno zbrinuti putem puta niže žurnosti — savjetom za samozbrinjavanje, terminom u primarnoj zdravstvenoj zaštiti ili zakazanim posjetom službi za hitnu skrb niže razine. To je specifičan, visokovrijedan podskup točnosti usmjeravanja trijaže (vidi tu temu) usredotočen isključivo na izbjegnuto korištenje hitne službe, što je ishod najizravnije povezan i s troškom zdravstvene skrbi i s rasterećenjem kapaciteta hitne službe.

## Zašto je važna

Hitne službe među najskupljim su okruženjima skrbi po susretu i često se koriste za probleme koji bi se sigurno mogli zbrinuti drugdje, pa je sposobnost digitalnog alata za trijažu da sigurno preusmjeri prikladne slučajeve iz hitne službe jedna od njegovih komercijalno i operativno najvrjednijih mogućnosti — i jedna od najlakših za prenijeti platitelju ili zdravstvenom sustavu koji procjenjuje povrat ulaganja u alat. No preusmjeravanje ima vrijednost samo ako je sigurno: alat koji agresivno preusmjerava pacijente iz hitne službe po cijenu propuštanja stvarnih hitnih stanja optimizirao je potpuno pogrešnu stranu kompromisa, zbog čega se stopa preusmjeravanja iz hitne službe uvijek mora prijavljivati uz sigurnosnu metriku koja prati propuštene ili odgođene hitne prezentacije među preusmjerenim pacijentima, a ne izolirano kao čista pobjeda u učinkovitosti.

## Kako se izračunava

```
Stopa preusmjeravanja iz HS-a = kontakti pacijenata sigurno preusmjereni
                                 iz HS-a na odgovarajući put niže žurnosti /
                                 ukupni kontakti pacijenata procijenjeni
                                 kao potencijalno upućeni u HS × 100

„Sigurno preusmjereno” zahtijeva potvrdu, putem praćenja ili povezanih
podataka zdravstvenog zapisa, da stanje pacijenta zapravo nije
zahtijevalo hitnu skrb unutar definiranog razdoblja praćenja (npr. 72
sata) — odluka o preusmjeravanju nije potvrđena kao sigurna samo zato
što pacijent nakon toga nije odmah otišao u HS.

Prijavite uz:
  Stopa propuštenih hitnih stanja = preusmjereni pacijenti koji su
                                    zatražili hitnu skrb unutar razdoblja
                                    praćenja / ukupno preusmjereni
                                    pacijenti × 100
```

## Razrađeni primjer

Digitalna služba za trijažu u mjesecu procjenjuje 3 000 kontakata pacijenata koje njezin klinički algoritam ocjenjuje kao potencijalno upućene u HS bez intervencije. Od toga je 1 800 preusmjereno na put niže žurnosti (stopa preusmjeravanja od 60 %). Praćenje preusmjerene kohorte nakon 72 sata putem povezanih podataka zdravstvenog zapisa pokazuje da se 45 od 1 800 preusmjerenih pacijenata zaista javilo u HS unutar tog razdoblja (stopa propuštenih hitnih stanja iznosi 45 / 1 800 × 100 = 2,5 %). Prijavljivanje podatka o preusmjeravanju od 60 % bez stope propuštenih hitnih stanja od 2,5 % prikazalo bi samo pola kompromisa između sigurnosti i učinkovitosti koji zapravo određuje je li ponašanje alata pri preusmjeravanju primjereno kalibrirano.

## Izvori podataka i ograničenja

Potvrda da preusmjerenom pacijentu nije naknadno bila potrebna hitna skrb ovisi o povezanim podacima — bilo o evidenciji hitne službe istog zdravstvenog sustava, regionalnoj razmjeni zdravstvenih informacija ili strukturiranom pozivu ili anketi za praćenje pacijenta — a program preusmjeravanja koji djeluje bez ijednog od tih izvora podataka ne može zapravo potvrditi vlastitu sigurnost, nego je samo pretpostavlja na temelju izostanka pritužbe. Odgovarajuća stopa preusmjeravanja i prihvatljiva stopa propuštenih hitnih stanja kliničke su odluke o politici, a ne isključivo statističke, i trebaju ih namjerno postaviti klinički čelnici, a ne dopustiti da proizlaze kao popratni učinak praga koji algoritam trijaže slučajno koristi prema zadanim postavkama. Stopu preusmjeravanja treba prijavljivati po simptomu ili kategoriji tegoba, jer se odgovarajuće stope preusmjeravanja golemo razlikuju prema stanju (mala razderotina naspram boli u prsima zahtijevaju vrlo različite pragove preusmjeravanja).

## Zamke

- **Prijavljivanje stope preusmjeravanja bez povezane sigurnosne metrike propuštenih hitnih stanja**: visoka stopa preusmjeravanja postignuta podtrijažiranjem stvarnih hitnih stanja nije uspjeh; te dvije metrike uvijek se moraju prijavljivati zajedno.
- **Pretpostavka da izostanak posjeta HS-u znači da je preusmjeravanje bilo sigurno**: pacijent se može javiti u HS drugog, nepovezanog bolničkog sustava ili može imati stvarno štetan ishod a da se nikada ne javi ni u jednu HS; sigurnost potvrdite povezanim podacima ili strukturiranim praćenjem, a ne samo izostankom posjeta HS-u istog sustava.
- **Postavljanje praga preusmjeravanja isključivo radi maksimiziranja stope preusmjeravanja**: algoritam ili politika podešena da maksimizira preusmjeravanje bez usklađenog sigurnosnog ograničenja zamijenit će sigurnost pacijenata za ljepše izgledajući broj učinkovitosti.
- **Zbrajanje stope preusmjeravanja preko svih vrsta tegoba**: odgovarajuće stope preusmjeravanja uvelike se razlikuju prema tegobi zbog koje se pacijent javlja; jedna zbrojena stopa ne može pokazati radi li alat sigurno i učinkovito za stanja koja su klinički najvažnija.

## Izvori

- Agency for Healthcare Research and Quality (AHRQ), istraživanja o korištenju hitnih službi i preusmjeravanju na odgovarajuće okruženje skrbi
- NHS England, smjernice o NHS-u 111 i standardima sigurnosti i učinkovitosti digitalne trijaže hitne skrbi
- Recenzirana literatura o ishodima preusmjeravanja iz HS-a putem digitalne trijaže i virtualne skrbi, na primjer studije objavljene u časopisima Annals of Emergency Medicine i npj Digital Medicine

Vidi također: [točnost usmjeravanja trijaže](../točnost-usmjeravanja-trijaže/), širu metriku točnosti čiji je ova specifičan, sigurnosno kritičan podskup.
