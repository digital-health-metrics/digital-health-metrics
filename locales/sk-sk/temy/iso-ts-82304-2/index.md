# ISO/TS 82304-2

ISO/TS 82304-2 je medzinárodná technická špecifikácia vydaná pod technickou komisiou ISO 215 (Zdravotnícka informatika), ktorá vymedzuje štruktúrovanú metódu posudzovania kvality zdravotných a wellness aplikácií — zahŕňajúcu použiteľnosť, technickú robustnosť a spoľahlivosť, interoperabilitu, kvalitu obsahu a bezpečnosť a ochranu údajov — pre produkty, ktoré nespadajú do rozsahu úplnej regulácie zdravotníckych pomôcok, no napriek tomu podstatne ovplyvňujú zdravotné rozhodnutia alebo správanie používateľa. Existuje na vyplnenie konkrétnej medzery: veľká väčšina spotrebiteľských zdravotných a wellness aplikácií (fitness trackery, denníky príznakov, aplikácie wellness koučingu) nie je regulovaná ako zdravotnícka pomôcka, no predtým neexistoval spoločný, štruktúrovaný spôsob, ako posúdiť alebo porovnať ich základnú kvalitu a bezpečnosť.

## Prečo je dôležitá

Obchody s aplikáciami ponúkajú státisíce zdravotných a wellness aplikácií s enormne premenlivou kvalitou a pred existenciou spoločnej technickej špecifikácie nemal pacient, klinický pracovník ani zdravotnícky systém štruktúrovaný, porovnateľný spôsob, ako posúdiť základnú kvalitu a bezpečnosť jednej aplikácie oproti druhej inak než podľa hviezdičkových hodnotení a marketingových tvrdení — medzera, ktorá je dôležitá, pretože zle navrhnutá zdravotná aplikácia môže spôsobiť skutočnú škodu (nepresný obsah, slabá bezpečnosť údajov, zavádzajúce tvrdenia) aj bez dosiahnutia regulačnej hranice zdravotníckej pomôcky. ISO/TS 82304-2 je zámerne štruktúrovaná okolo domén, ktoré dokáže konzistentne posúdiť aj nešpecialista, čo z nej urobilo technický základ pre viaceré národné a komerčné služby označovania kvality a kurácie zdravotných aplikácií a poskytlo zdravotníckym systémom a knižniciam aplikácií obhájiteľný, štandardizovaný spôsob zaradiť alebo vylúčiť aplikácie z odporúčaného zoznamu namiesto ad hoc úsudku.

## Ako sa uplatňuje

```
Posudzovanie je organizované okolo vymedzených domén kvality, hodnotených
štruktúrovaným preskúmaním, a nie jedným číselným vzorcom:

Použiteľnosť                    — zrozumiteľnosť, prístupnosť a ľahkosť
                                   používania pre zamýšľanú skupinu
                                   používateľov
Technická robustnosť/spoľahlivosť — stabilita, výkon a absencia
                                   technických chýb
Interoperabilita                — schopnosť vymieňať si údaje s inými
                                   systémami, ak je to relevantné pre
                                   funkciu aplikácie
Kvalita a bezpečnosť obsahu     — presnosť, aktuálnosť a absencia
                                   škodlivých alebo zavádzajúcich
                                   zdravotných tvrdení
Bezpečnosť a ochrana súkromia   — prax ochrany údajov a transparentnosť
                                   ohľadom používania údajov

Každá doména sa hodnotí pomocou štruktúrovaných kritérií preskúmania
a kombinuje sa do celkového posúdenia kvality, ktoré viaceré schémy
označovania kvality zdravotných aplikácií používajú ako technický
základ pre verejné označenie kvality alebo rozhodnutie o zaradení do
kurátorskej knižnice.
```

## Prepracovaný príklad

Program knižnice digitálnych aplikácií zdravotného systému chce zostaviť odporúčaný zoznam wellness aplikácií pre pacientov, a nenechať výber aplikácií úplne na vyhľadávanie v obchode s aplikáciami. Každá kandidátska aplikácia sa posúdi podľa domén ISO/TS 82304-2: aplikácia na sledovanie spánku dosiahne dobré skóre v použiteľnosti a technickej robustnosti, primerané v kvalite obsahu, no pri preskúmaní bezpečnosti a súkromia je označená za zdieľanie údajov používateľov s inzerentmi tretích strán bez jasného zverejnenia — zistenie dosť závažné na to, aby viedlo k vylúčeniu aplikácie z odporúčaného zoznamu napriek inak silnému skóre použiteľnosti. Tento výsledok po doménach je použiteľnejší pre kurátorský tím aj — ak sa zdieľa — pre samotného vývojára aplikácie než jedno zmiešané skóre kvality, pretože presne určuje, ktorý aspekt vyžaduje nápravu, aby sa aplikácia mohla znovu zvážiť.

## Zdroje údajov a výhrady

Posudzovanie podľa ISO/TS 82304-2 zvyčajne vykonáva vyškolený posudzovateľ alebo akreditovaná posudzovacia služba podľa štruktúrovaných kritérií preskúmania špecifikácie pre každú doménu a viaceré národné a komerčné iniciatívy (organizácie na označovanie kvality a kuráciu zdravotných aplikácií, niektoré pôsobiace pod formálnym schválením národného zdravotného systému) používajú tento štandard ako technický základ vlastných verejných označení kvality aplikácií — čo znamená, že stav aplikácie „certifikovaná“ alebo „označená“ v praxi často odráža implementáciu štandardu konkrétnou schémou označovania, nie nutne rovnaký proces v každej schéme, a konkrétna posudzujúca organizácia a jej metodika by sa preto mali overiť a uviesť spolu s každým citovaným označením kvality. Špecifikácia posudzuje charakteristiky kvality a základnej bezpečnosti aplikácie ako softvéru; nie je náhradou za regulačné schválenie zdravotníckej pomôcky tam, kde tvrdenia alebo funkcie aplikácie skutočne spĺňajú hranicu zdravotníckej pomôcky, a jej používanie ako náhrady by bolo kategoriálnou chybou.

## Nástrahy

- **Považovanie označenia kvality za regulačné schválenie**: aplikácia posúdená a označená podľa ISO/TS 82304-2 tým nezískala regulačné schválenie zdravotníckej pomôcky; obe slúžia na odlišné účely a nikdy by sa nemali zamieňať pri opise alebo marketingu aplikácie.
- **Predpoklad, že všetky schémy označovania založené na štandarde sú rovnocenné**: rôzne organizácie implementujú posudzovanie založené na ISO/TS 82304-2 s vlastnými konkrétnymi procesmi preskúmania a prísnosťou; overte, ktorá organizácia posúdenie vykonala a ako, namiesto toho, aby sa akékoľvek označenie „založené na ISO/TS 82304-2“ považovalo za zameniteľné s iným.
- **Posudzovanie iba použiteľnosti a zanedbanie bezpečnosti a súkromia**: problémy s použiteľnosťou sú pre koncového používateľa najviditeľnejšie a najľahšie sa posudzujú neformálne, čo môže viesť posudzovateľov k podvážení menej viditeľnej, no potenciálne dôležitejšej domény bezpečnosti a súkromia.
- **Považovanie posúdenia za jednorazovú, trvalú certifikáciu**: obsah aplikácie, bezpečnostné postupy a dohody o zdieľaní údajov s tretími stranami sa môžu po počiatočnom posúdení zmeniť; dôveryhodný program označovania kvality posudzuje pravidelne, nepovažuje počiatočné splnenie za trvalé.

## Zdroje

- International Organization for Standardization, ISO/TS 82304-2:2021, „Health software — Part 2: Health and wellness apps — Quality and reliability“
- ISO Technical Committee 215 (Health Informatics), informácie o publikáciách a pracovných skupinách
- Národné a komerčné organizácie na označovanie kvality a kuráciu zdravotných aplikácií, ktoré zverejňujú svoju metodiku posudzovania založenú na tomto štandarde

Pozri tiež: [skóre System Usability Scale](../skóre-system-usability-scale/), doplnkový, užší nástroj zameraný špecificky na použiteľnosť, ktorý sa často používa popri širšom posúdení kvality podľa ISO/TS 82304-2.
