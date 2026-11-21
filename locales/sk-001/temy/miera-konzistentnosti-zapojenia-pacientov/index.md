# Miera konzistentnosti zapojenia pacientov

Miera konzistentnosti zapojenia pacientov meria, ako pravidelne zaradený pacient pracuje s digitálnym zdravotníckym produktom v čase — napríklad zapisuje jedlo alebo príznaky, zaznamenáva fyzickú aktivitu alebo si prezerá zdravotné údaje — a nie len to, či ho vôbec použil. Je to longitudinálna metrika, odlišná od okamžitého počtu aktívnych používateľov: dvaja pacienti môžu mať rovnaký stav „použil aplikáciu tento mesiac“, pričom jeden zapisuje dôsledne každý deň a druhý zapíše raz a na tri týždne zmizne, a rozlíšiť ich dokáže iba metrika konzistentnosti.

## Prečo je dôležitá

Trvalá, pravidelná interakcia s digitálnym zdravotníckym nástrojom je jedným zo spoľahlivejších predstihových ukazovateľov klinického prínosu, najmä pri ochoreniach závislých od správania, ako sú diabetes, regulácia hmotnosti a duševné zdravie, kde hodnota nástroja pramení z návyku, ktorý podporuje, a nie z jedinej relácie. Produkt môže vykazovať zdravý počet mesačných aktívnych používateľov, a pritom obsluhovať populáciu, ktorá sa raz prihlási a vytráca sa, pretože mesačné aktívne používanie je nízka latka, ktorá nehovorí nič o vzorci používania v rámci mesiaca; metriky konzistentnosti to zachytia spôsobom, akým jednoduché počty aktivity nedokážu. Keďže konzistentnosť je zároveň jednou z ťažších vecí, ktoré treba udržať mesiace, a nie týždne, je čestnejším signálom kvality produktu a klinickej vhodnosti než čísla zapojenia v krátkom okne, ktoré sú náchylné na efekt novosti hneď po zaškolení.

## Ako sa počíta

```
Miera konzistentnosti zapojenia = týždne s aspoň jednou kvalifikujúcou
                                   interakciou / celkový počet týždňov
                                   zaradenia × 100

„Kvalifikujúca interakcia“ by sa mala vymedziť výslovne a konzistentne
(napr. záznam jedla, kontrola príznakov alebo dokončená synchronizácia
aktivity) — nikdy nie pasívna udalosť, ako otvorenie aplikácie bez
zaznamenanej akcie.

Vykazujte ako rozdelenie, nielen ako priemer populácie:
  napr. podiel pacientov s týždennou konzistentnosťou ≥ 80 %,
        podiel s 50 – 79 %, podiel s < 50 %
```

## Prepracovaný príklad

Aplikácia výživového koučingu zaradí pacienta na 12 týždňov. Pacient zaznamená aspoň jeden kvalifikujúci záznam jedla v 9 z týchto 12 týždňov, čo dáva individuálnu mieru konzistentnosti zapojenia 9 / 12 × 100 = 75 %. V celej kohorte 2 000 pacientov zaradených aspoň na 12 týždňov si 600 pacientov (30 %) udržuje týždennú konzistentnosť ≥ 80 %, 900 (45 %) spadá do pásma 50 – 79 % a 500 (25 %) pod 50 %. Vykázanie iba priemeru kohorty (ktorý by mohol vyjsť okolo 65 %) by zakrylo, že celá štvrtina pacientov sa takmer vôbec nezapája — segment, ktorý si zaslúži osobitné skúmanie, a nie rozriedenie do celkového priemeru.

## Zdroje údajov a výhrady

Údaje o konzistentnosti pochádzajú z vlastných záznamov udalostí produktu (záznamy jedál, synchronizácie aktivity, kontroly) a definícia „kvalifikujúcej interakcie“ má obrovský vplyv na výslednú mieru — voľná definícia (akékoľvek otvorenie aplikácie) bude vždy vyzerať lepšie než prísna (dokončený, zmysluplný záznam), a použitá definícia sa preto musí jasne uviesť spolu s každým vykázaným číslom. Automaticky synchronizované údaje (napríklad pripojený fitness tracker synchronizujúci aktivitu na pozadí) by sa mali vykazovať osobitne od ručne zadávaných údajov, pretože automatická synchronizácia môže nafúknuť zdanlivú konzistentnosť, bez toho, aby odrážala akékoľvek aktívne úsilie pacienta alebo zapojenie do pokynov produktu.

## Nástrahy

- **Zamieňanie otvorení aplikácie so zmysluplným zapojením**: pasívne otvorenie aplikácie (napríklad vyvolané push oznámením) nie je to isté ako zaznamenaný záznam jedla alebo dokončená kontrola; vymedzte a vykazujte iba kvalifikujúce interakcie.
- **Vykazovanie iba priemeru populácie**: zdravo vyzerajúci priemer konzistentnosti môže skrývať bimodálnu populáciu veľmi zapojených a takmer úplne nezapojených pacientov; vykazujte rozdelenie naprieč pásmami konzistentnosti, nielen priemer.
- **Ignorovanie dĺžky zaradenia v menovateli**: porovnanie mier konzistentnosti medzi pacientmi zaradenými na veľmi rozdielne dlhé obdobia bez zohľadnenia trvania zaradenia skresľuje v prospech skupiny, ktorá mala kratšie, ľahšie udržateľné okno merania.
- **Automatická synchronizácia na pozadí nafukujúca mieru**: pasívne synchronizovaný tok údajov z nositeľného zariadenia môže spôsobiť, že nezapojený pacient sa javí ako dôsledne aktívny bez akejkoľvek skutočnej zmeny správania alebo zapojenia do produktu z jeho strany.

## Zdroje

- Recenzovaná literatúra o vzorcoch zapojenia do digitálneho zdravia a ich vzťahu ku klinickým výsledkom, napríklad štúdie publikované v Journal of Medical Internet Research (JMIR)
- American Medical Informatics Association (AMIA), usmernenia ku kvalite údajov generovaných pacientmi a meraniu zapojenia
- Digital Therapeutics Alliance, usmernenia osvedčených postupov k meraniu zapojenia a výsledkov pri digitálnych terapeutikách

Pozri tiež: [miera udržania používateľov](../miera-udržania-používateľov/), úzko súvisiaca metrika toho, či pacient zostáva zaradený vôbec, na rozdiel od toho, ako konzistentne sa zapája počas zaradenia.
