# Stopa ispunjavanja ePROM upitnika

Stopa ispunjavanja ePROM upitnika mjeri udio zakazanih elektroničkih mjera ishoda koje prijavljuju pacijenti (ePROM) — standardiziranih, validiranih upitnika koji bilježe pacijentov vlastiti prikaz simptoma, funkcioniranja ili kvalitete života, a dostavljaju se digitalno umjesto na papiru — koje su zaista ispunjene. To je koliko metrika kvalitete podataka toliko i angažmana: klinička i istraživačka vrijednost PROM programa u potpunosti ovisi o dovoljno visokoj stopi ispunjavanja da prikupljeni odgovori budu reprezentativni za cjelokupnu upisanu populaciju, a ne samo za najangažiraniji ili najmanje simptomatičan podskup.

## Zašto je važna

Ishodi koje prijavljuju pacijenti izravna su dopuna podacima koje bilježi kliničar ili mjeri uređaj, a koju jamči sam pacijent, jer obuhvaćaju dimenzije zdravlja — bol, funkcioniranje, kvalitetu života — koje pregled zapisa ili biometrijsko očitanje ne mogu; digitalizacija prikupljanja PROM-ova postoji upravo da bi ti podaci bili jeftiniji i lakši za prikupljanje u velikom opsegu nego što je to ikada omogućilo papirno provođenje. No PROM program s niskom stopom ispunjavanja riskira specifičnu i ozbiljnu pristranost: pacijenti koji se osjećaju lošije često su manje skloni ispuniti dugačak upitnik, pa pad stope ispunjavanja sam može biti rani znak pogoršanja zdravlja populacije, a niska ukupna stopa ispunjavanja može učiniti prikupljene odgovore boljima od iskustva stvarne populacije jednostavno zato što su najsimptomatičniji pacijenti podzastupljeni među onima koji ispune upitnik. Zbog toga stopu ispunjavanja uvijek treba prijavljivati uz same PROM rezultate, a ne tretirati je kao sporedan operativni detalj.

## Kako se izračunava

```
Stopa ispunjavanja ePROM upitnika = potpuno ispunjeni ePROM-ovi /
                                    poslani ili zakazani ePROM-ovi × 100

Prijavite zasebno za:
  Početnu stopu ispunjavanja       (prvi upitnik u nizu praćenja)
  Longitudinalnu stopu ispunjavanja (sljedeći upitnici u tekućem nizu
                                    praćenja, koja se obično smanjuje
                                    tijekom vremena i treba je pratiti
                                    kao trend, a ne kao jedan broj)

„Djelomično ispunjen” upitnik treba definirati i prijavljivati
odvojeno i od „potpuno ispunjenog” i od „nepočetog”.
```

## Razrađeni primjer

Onkološka ambulanta šalje validirani ePROM o opterećenju simptomima 400 pacijenata prije svakog mjesečnog kontrolnog posjeta. U prvom mjesecu 340 pacijenata potpuno ispuni upitnik (stopa ispunjavanja 85 %), 30 ga ispuni djelomično, a 30 ga ne započne. Do šestog mjeseca istog niza praćenja potpuni odgovori padnu na 260 od iste kohorte od 400 pacijenata (65 %), što je znatan longitudinalni pad koji bi bio potpuno propušten da se samo 85 % iz prvog mjeseca prijavi kao statična ukupna metrika. Istraživanje koji pacijenti odustaju (prema težini simptoma, stadiju bolesti ili dobi) može otkriti odražava li pad zamor od ispitivanja, pogoršanje simptoma zbog kojeg je upitnik teže ispuniti ili tehničku prepreku pristupu.

## Izvori podataka i ograničenja

Podaci o ispunjavanju dolaze iz vlastitih zapisa dostave i odgovora ePROM platforme, koji mogu razlikovati stanja „nije započet”, „djelomično ispunjen” i „potpuno ispunjen” — razlikovanje koje uvijek treba sačuvati i prijavljivati, a ne svoditi na binarni podatak ispunjeno/neispunjeno, jer djelomično ispunjavanje često ukazuje na određenu točku u upitniku na kojoj pacijenti zapinju ili odustaju. Stopu ispunjavanja treba tumačiti uz način dostave upitnika (poveznica u tekstualnoj poruci, obavijest u aplikaciji ili način dostave koji zahtijeva prijavu na portal), jer sama trenje dostave utječe na ispunjavanje neovisno o sadržaju upitnika ili pacijentovu temeljnom stanju. Za sam PROM uvijek treba koristiti validirani instrument (a ne ad hoc skup pitanja), jer stopa ispunjavanja nevalidiranog instrumenta ne govori ništa pouzdano o kliničkoj korisnosti dobivenih podataka, čak i kad je ispunjavanje visoko.

## Zamke

- **Pad stope ispunjavanja tumači se samo kao problem dostave**: longitudinalni pad ispunjavanja može odražavati stvarno pogoršanje simptoma pacijenata (preslabi su da bi ispunili upitnik), a ne zamor od ispitivanja ili tehnički problem, a ta je razlika presudna za kliničko tumačenje.
- **Svođenje djelomičnog i potpunog ispunjavanja u jednu kategoriju**: djelomično ispunjen upitnik znatno je drukčije kvalitete podataka od potpuno ispunjenog; prijavljujte ih zasebno i istražite na kojem mjestu u tijeku upitnika pacijenti obično odustaju.
- **Prijavljivanje stope ispunjavanja bez prijavljivanja rizika pristranosti odgovora**: umjerena stopa ispunjavanja treba potaknuti istraživanje razlikuju li se ispitanici sustavno (po težini simptoma, dobi, digitalnoj pismenosti) od neispitanika, jer PROM rezultati izračunani samo od ispitanika mogu pogrešno prikazati cjelokupnu populaciju.
- **Korištenje nevalidiranog ili domaćeg upitnika**: stopa ispunjavanja besmislena je kao signal kvalitete podataka ako instrument koji se ispunjava sam nije klinički validiran za stanje i populaciju koja se mjeri.

## Izvori

- International Consortium for Health Outcomes Measurement (ICHOM), razvoj standardnih skupova i smjernice za provedbu PROM-ova
- U.S. Food and Drug Administration (FDA), smjernice o mjerama ishoda koje prijavljuju pacijenti u kliničkim ispitivanjima i regulatornim zahtjevima
- Recenzirana literatura o provedbi elektroničkih PROM-ova i stopama ispunjavanja, na primjer studije objavljene u časopisima Quality of Life Research i Journal of Medical Internet Research (JMIR)

Vidi također: [net promoter score pacijenata](../net-promoter-score-pacijenata/), srodnu, ali različitu metriku koju prijavljuju pacijenti, a mjeri zadovoljstvo, a ne klinički ishod.
