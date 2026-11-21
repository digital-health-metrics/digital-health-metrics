# ISO/TS 82304-2

ISO/TS 82304-2 međunarodna je tehnička specifikacija, objavljena pod okriljem Tehničkog odbora ISO-a 215 (zdravstvena informatika), koja definira strukturiranu metodu procjene kvalitete zdravstvenih i wellness aplikacija — obuhvaćajući upotrebljivost, tehničku robusnost i pouzdanost, interoperabilnost, kvalitetu sadržaja te sigurnost i privatnost podataka — za proizvode koji ne ulaze u opseg pune regulative medicinskih proizvoda, ali ipak bitno utječu na zdravstvene odluke ili ponašanje korisnika. Postoji da popuni određeni jaz: velika većina zdravstvenih i wellness aplikacija namijenjenih potrošačima (praćenje tjelesne aktivnosti, dnevnici simptoma, aplikacije za wellness coaching) nije regulirana kao medicinski proizvod, a prije nije postojao zajednički, strukturiran način za procjenu ili usporedbu njihove osnovne kvalitete i sigurnosti.

## Zašto je važan

Trgovine aplikacija sadrže stotine tisuća zdravstvenih i wellness aplikacija izrazito različite kvalitete, a prije nego što je postojala zajednička tehnička specifikacija pacijent, kliničar ili zdravstveni sustav nisu imali strukturiran, usporediv način da prosude osnovnu kvalitetu i sigurnost jedne aplikacije u odnosu na drugu osim ocjena zvjezdicama i marketinških tvrdnji — jaz koji je važan jer loše dizajnirana zdravstvena aplikacija i dalje može uzrokovati stvarnu štetu (netočan sadržaj, slaba sigurnost podataka, zavaravajuće tvrdnje) čak i bez dosezanja regulatornog praga medicinskog proizvoda. ISO/TS 82304-2 namjerno je strukturiran oko područja koja nespecijalistički ocjenjivač može dosljedno procijeniti, zbog čega je postao tehnička osnova za nekoliko nacionalnih i komercijalnih usluga označavanja kvalitete i kuriranja zdravstvenih aplikacija, dajući zdravstvenim sustavima i knjižnicama aplikacija obranjiv, standardiziran način uključivanja ili isključivanja aplikacija s preporučenog popisa umjesto oslanjanja na ad hoc prosudbu.

## Kako se primjenjuje

```
Procjena je organizirana oko definiranih područja kvalitete, koja se
vrednuju strukturiranim pregledom, a ne jednom brojčanom formulom:

Upotrebljivost                   — jasnoća, pristupačnost i jednostavnost
                                    uporabe za predviđenu skupinu korisnika
Tehnička robusnost/pouzdanost    — stabilnost, performanse i odsutnost
                                    tehničkih nedostataka
Interoperabilnost                — sposobnost razmjene podataka s drugim
                                    sustavima kada je relevantna za
                                    funkciju aplikacije
Kvaliteta i sigurnost sadržaja   — točnost, ažurnost i odsutnost štetnih
                                    ili zavaravajućih zdravstvenih tvrdnji
Sigurnost i privatnost           — praksa zaštite podataka i transparentnost
                                    o uporabi podataka

Svako se područje ocjenjuje putem strukturiranih kriterija pregleda i
spaja u ukupnu procjenu kvalitete, koju nekoliko shema označavanja
kvalitete zdravstvenih aplikacija koristi kao tehničku osnovu za
javnu oznaku kvalitete ili odluku o uključivanju u kuriranu knjižnicu.
```

## Razrađeni primjer

Program knjižnice digitalnih aplikacija jednog zdravstvenog sustava želi sastaviti preporučeni popis wellness aplikacija za pacijente umjesto da odabir aplikacija u potpunosti prepusti pretraživanju trgovine aplikacija. Svaka kandidatska aplikacija procjenjuje se prema područjima ISO/TS 82304-2: aplikacija za praćenje sna dobro prolazi u upotrebljivosti i tehničkoj robusnosti, zadovoljavajuće u kvaliteti sadržaja, ali se pri pregledu sigurnosti i privatnosti označava jer dijeli korisničke podatke s trećim oglašivačima bez jasnog otkrivanja — nalaz dovoljno značajan da aplikaciju isključi s preporučenog popisa unatoč njezinoj inače snažnoj ocjeni upotrebljivosti. Ovaj ishod po područjima djelotvorniji je i za tim koji kurira popis i, ako se podijeli, za samog razvojnog tima aplikacije nego jedna zbrojena ocjena kvalitete, jer točno utvrđuje koji aspekt treba sanirati prije nego što se aplikacija može ponovno razmotriti.

## Izvori podataka i ograničenja

Procjenu prema ISO/TS 82304-2 obično provodi obučen ocjenjivač ili akreditirana služba za procjenu, slijedeći strukturirane kriterije pregleda specifikacije za svako područje, a nekoliko nacionalnih i komercijalnih inicijativa (organizacije za označavanje kvalitete i kuriranje zdravstvenih aplikacija, od kojih neke djeluju uz formalnu potporu nacionalnog zdravstvenog sustava) koristi standard kao tehničku osnovu za vlastite javne oznake kvalitete aplikacija — što znači da „certificirani” ili „označeni” status aplikacije u praksi često odražava provedbu standarda u određenoj shemi označavanja, a ne nužno identičan postupak u svakoj shemi, pa uz svaku navedenu oznaku kvalitete treba provjeriti i objaviti organizaciju koja je provela procjenu i njezinu metodologiju. Specifikacija procjenjuje kvalitetu i osnovna sigurnosna obilježja aplikacije kao softvera; nije zamjena za regulatorno odobrenje medicinskog proizvoda kada tvrdnje ili funkcije aplikacije zaista dosežu prag medicinskog proizvoda, a njezino korištenje kao zamjene bila bi kategorijska pogreška.

## Zamke

- **Oznaka kvalitete smatra se regulatornim odobrenjem**: aplikacija procijenjena i označena prema ISO/TS 82304-2 time nije dobila regulatorno odobrenje medicinskog proizvoda; to dvoje služi različitim svrhama i nikada ih ne treba miješati u načinu na koji se aplikacija opisuje ili prodaje.
- **Pretpostavka da su sve sheme označavanja temeljene na standardu jednake**: različite organizacije provode procjenu temeljenu na ISO/TS 82304-2 vlastitim posebnim procesima pregleda i razinama strogosti; provjerite tko je proveo procjenu i kako, a ne tretirajte svaku oznaku „temeljenu na ISO/TS 82304-2” kao zamjenjivu s bilo kojom drugom.
- **Procjena samo upotrebljivosti uz zanemarivanje sigurnosti i privatnosti**: problemi s upotrebljivošću najvidljiviji su krajnjem korisniku i najlakše ih je neformalno procijeniti, što može navesti ocjenjivače da podcijene manje vidljivo, ali potencijalno posljedičnije područje sigurnosti i privatnosti.
- **Procjena kao jednokratna, trajna certifikacija**: sadržaj aplikacije, sigurnosne prakse i aranžmani dijeljenja podataka s trećim stranama mogu se promijeniti nakon početne procjene; vjerodostojan program označavanja kvalitete ponovno procjenjuje periodički, a ne tretira početni prolaz kao trajan.

## Izvori

- International Organization for Standardization, ISO/TS 82304-2:2021, „Health software — Part 2: Health and wellness apps — Quality and reliability”
- ISO Technical Committee 215 (Health Informatics), informacije o publikacijama i radnim skupinama
- Nacionalne i komercijalne organizacije za označavanje kvalitete i kuriranje zdravstvenih aplikacija koje objavljuju svoju metodologiju procjene temeljenu na ovom standardu

Vidi također: [ocjena ljestvice upotrebljivosti sustava](../ocjena-ljestvice-upotrebljivosti-sustava/), komplementaran, uži instrument specifičan za upotrebljivost koji se često koristi uz širu procjenu kvalitete prema ISO/TS 82304-2.
