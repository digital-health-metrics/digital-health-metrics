# Pomer viazanosti DAU/MAU

Pomer viazanosti DAU/MAU porovnáva denných aktívnych používateľov (DAU) s mesačnými aktívnymi používateľmi (MAU) — rovnaká základná miera sa používa pre týždenných aktívnych používateľov (WAU) voči MAU — a vyjadruje, aký podiel širšej používateľskej základne produktu s ním pracuje v ktorýkoľvek daný deň. Je to štandardná produktovo-analytická miera intenzity zapojenia, odlišná od otázky, či je používateľ vôbec udržaný (pozri mieru udržania používateľov), alebo ako konzistentne s produktom pracuje jeden konkrétny zaradený pacient v čase (pozri mieru konzistentnosti zapojenia pacientov): viazanosť opisuje rytmus používania na úrovni populácie, nie vzorec jednotlivca.

## Prečo je dôležitý

Dva produkty digitálneho zdravia môžu vykazovať rovnaký počet mesačných aktívnych používateľov a pritom mať veľmi odlišnú základnú intenzitu zapojenia: v jednom väčšina týchto používateľov otvára aplikáciu takmer denne, v druhom ju väčšina otvorí raz za mesiac tesne predtým, než by sa inak počítala ako neaktívna. Pomer viazanosti DAU/MAU rozlišuje tieto dve veľmi odlišné situácie jedným jednoduchým, dobre známym referenčným číslom, ktoré môžu produktové a klinické tímy sledovať v čase a porovnávať so známymi odvetvovými rozsahmi — pomer okolo 20 % sa bežne uvádza ako primeraná referenčná hodnota pre mnohé spotrebiteľské aplikácie, zatiaľ čo produkty s každodennou návykovosťou (denník stravy alebo príznakov, ktorý má pacient používať každý deň) by sa mali posudzovať podľa výrazne vyššej latky. Keďže viazanosť je citlivá na to, ako sa vymedzí „aktívny“, najužitočnejšia je ako trend jedného produktu v čase a ako porovnanie s produktmi postavenými na podobný vzorec používania, a nie ako absolútna medziodvetvová referenčná hodnota.

## Ako sa počíta

```
Pomer viazanosti DAU/MAU = priemerný počet denných aktívnych používateľov
                            v období / mesační aktívni používatelia
                            v tom istom období × 100

Pomer WAU/MAU (týždenný, rovnaký princíp) je miernejší variant, vhodnejší
pre produkty, od ktorých sa očakáva používanie niekoľkokrát týždenne,
a nie denne.

„Aktívny“ sa musí vymedziť presne a konzistentne (napr. dokončená
kvalifikujúca akcia, nie pasívne otvorenie aplikácie) v čitateli aj
v menovateli.
```

## Prepracovaný príklad

Digitálna aplikácia na zvládanie diabetu má v danom mesiaci 10 000 mesačných aktívnych používateľov, definovaných ako každý používateľ, ktorý v danom mesiaci dokončil aspoň jednu kvalifikujúcu akciu (záznam glukózy, záznam jedla alebo odškrtnutie lieku). Spriemerovanie počtov denných aktívnych používateľov za 30 dní tohto mesiaca dáva priemerné DAU 2 200. Pomer viazanosti DAU/MAU je 2 200 / 10 000 × 100 = 22 %, čo znamená, že v typický deň s aplikáciou pracuje približne 22 % jej mesačnej používateľskej základne — primerané číslo pre nástroj na chronické ochorenie s každodenným návykom, hoci také, o ktorom by produktový tím chcel vidieť rastúci trend, ako sa ideálne správanie (každodenné zapisovanie) stáva pre zaradených pacientov čoraz väčším návykom.

## Zdroje údajov a výhrady

DAU, WAU a MAU sa všetky počítajú zo tých istých podkladových záznamov udalostí s jednou konzistentnou definíciou „kvalifikujúcej aktívnej“ udalosti vo všetkých oknách; zmena tejto definície medzi výpočtom čitateľa a menovateľa (napríklad započítanie každého otvorenia aplikácie pre DAU, ale len dokončenej akcie pre MAU) vytvorí skreslený pomer, ktorý neodráža skutočnú intenzitu zapojenia. Vhodná referenčná hodnota viazanosti výrazne závisí od zamýšľaného vzorca používania produktu: nástroj určený na používanie raz týždenne (týždenné hlásenie príznakov) bude a má mať nižší pomer DAU/MAU než nástroj určený na denné používanie (sprievodná aplikácia kontinuálneho glukomera), a viazanosť sa preto má vždy interpretovať vzhľadom na zamýšľanú frekvenciu používania daného produktu, nie voči jednému univerzálnemu cieľu.

## Nástrahy

- **Porovnávanie pomerov viazanosti medzi produktmi s odlišnou zamýšľanou frekvenciou používania**: nástroj na týždenné používanie bude štrukturálne vykazovať nižší pomer DAU/MAU než nástroj na denné používanie, aj keď obidva fungujú presne tak, ako majú pre svoje prípady použitia; porovnávajte voči zamýšľanej frekvencii samotného produktu, nie voči jednému univerzálnemu cieľu.
- **Používanie nejednotných definícií aktivity v čitateli a menovateli**: môže to vytvoriť pomer viazanosti, ktorý neodráža skutočnú intenzitu zapojenia a nedá sa zmysluplne porovnávať v čase ani s inými produktmi.
- **Považovanie rastúceho pomeru viazanosti za jednoznačne pozitívny bez kontroly celkového trendu MAU**: rastúci pomer spôsobený zmenšujúcim sa, návykovejším jadrom používateľov pri poklese celkového MAU je veľmi odlišná — a znepokojivejšia — situácia než pomer spôsobený skutočne rastúcim denným zapojením v stabilnej alebo rastúcej používateľskej základni.
- **Ignorovanie vplyvu dňa v týždni a sezónnych efektov na DAU**: DAU sa môže pri mnohých zdravotníckych produktoch podstatne líšiť podľa dňa v týždni (pracovný deň oproti víkendu) alebo ročného obdobia; priemerné DAU počítajte za obdobie, ktoré pokrýva celý prirodzený cyklus, a nie za krátke okno, ktoré môže byť skreslené.

## Zdroje

- Recenzovaná a odvetvová literatúra o metrikách zapojenia mobilných a digitálnych produktov, široko používané referenčné rámce platforiem mobilnej analytiky
- Digital Therapeutics Alliance, usmernenia osvedčených postupov k meraniu zapojenia pri digitálnych terapeutikách
- Recenzovaná literatúra o meraní zapojenia v digitálnom zdraví, napríklad štúdie publikované v Journal of Medical Internet Research (JMIR mHealth and uHealth)

Pozri tiež: [miera udržania používateľov](../miera-udržania-používateľov/) a [miera konzistentnosti zapojenia pacientov](../miera-konzistentnosti-zapojenia-pacientov/), dve príbuzné metriky zapojenia, s ktorými sa tento pomer najčastejšie zamieňa.
