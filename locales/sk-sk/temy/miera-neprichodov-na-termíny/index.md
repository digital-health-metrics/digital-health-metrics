# Miera neprichodov na termíny

Miera neprichodov na termíny (v angličtine aj „did not attend“, DNA) je podiel naplánovaných termínov, na ktoré pacient neprišiel a ani ich v primeranom predstihu nezrušil. Ide o jednu z najstarších prevádzkových metrík v zdravotníctve a digitálne nástroje, najmä pripomienky, samoobslužné presúvanie termínov a rezervácie cez portál, patria dnes medzi najúčinnejšie a najlepšie podložené spôsoby, ako ju znížiť.

## Prečo je dôležitá

Každý neprichod je kus klinickej kapacity, ktorý sa zvyčajne nedá nahradiť, pretože väčšina služieb nedokáže na poslednú chvíľu zaplniť uvoľnený termín v ten istý deň. Táto miera preto priamo ovplyvňuje dĺžku čakacích zoznamov, náklady na jeden dokončený termín a stratený čas klinických pracovníkov. Neprichody nie sú rozložené rovnomerne: súvisia s chudobou, dostupnosťou dopravy, opatrovateľskými povinnosťami a záťažou zo zvládania viacerých dlhodobých ochorení. Ak sa vysoká miera posudzuje výlučne ako problém správania pacientov, a nie sčasti ako signál o prekážkach v prístupe, vedie to k opatreniam (napríklad plošným pokutám), ktoré nerovnosť skôr prehlbujú, než zmierňujú. Digitálne pripomienky a jednoduché digitálne presúvanie termínov patria dlhodobo medzi najúčinnejšie a najlacnejšie dostupné zásahy, a preto táto metrika patrí do programu merania digitálneho zdravia, a nie iba do prevádzkového výkazníctva.

## Ako sa počíta

```
Miera neprichodov = termíny označené „pacient neprišiel“ / všetky naplánované termíny × 100
```

Naplánovaný termín sa zvyčajne vylučuje z menovateľa alebo sa presúva do samostatnej kategórie, ak ho ktorákoľvek strana zrušila s predstihom dlhším, než je stanovená lehota (bežne 24 hodín). Neskoré zrušenia (v kratšej lehote) sa zvyčajne vykazujú samostatne od skutočných neprichodov, pretože ich prevádzkové a behaviorálne dôsledky sa líšia.

## Prepracovaný príklad

Komunitná klinika naplánuje za mesiac 2 000 termínov. Z nich 140 sa zruší s predstihom dlhším ako 24 hodín (termíny sa znovu obsadia a z menovateľa sa vylúčia), 60 sa zruší neskoro (do 24 hodín) a 180 sa eviduje ako skutočný neprichod bez akéhokoľvek kontaktu. Miera neprichodov je 180 / 2 000 × 100 = 9 %. Ak by sa 60 neskorých zrušení zahrnulo do tej istej kategórie ako skutočné neprichody, vykázaná miera by stúpla na 12 %, a preto sa použitá definícia musí vždy uviesť spolu s číslom.

## Zdroje údajov a výhrady

Hlavným zdrojom je systém na plánovanie termínov alebo správu ambulancie a jeho stavové kódy termínov; kvalita metriky celkom závisí od toho, či zamestnanci dôsledne používajú správny stav, a nie univerzálnu kategóriu „zrušené“ pre všetko. Organizácie, ktoré zavádzajú digitálne pripomienky (SMS, oznámenia v aplikácii alebo upozornenia z portálu), by mali mieru neprichodov merať pred zmenou a po nej pri porovnateľnej skladbe pacientov a služieb, pretože účinnosť pripomienok je dobre zdokumentovaná v randomizovaných aj observačných štúdiách, no líši sa podľa populácie a kanála.

## Nástrahy

- **Porovnávanie hrubých mier medzi klinikami s odlišnou praxou preplňovania termínov**: klinika, ktorá zámerne rezervuje viac termínov, aby vyrovnala očakávanú mieru neprichodov, vykáže inú zdanlivú mieru než klinika, ktorá to nerobí, a to nezávisle od skutočného správania pacientov.
- **Zamieňanie neskorých zrušení so skutočnými neprichodmi**: obe majú rôzne príčiny a rôzne digitálne riešenia (problém neskorých zrušení sa často rieši jednoduchšími samoobslužnými zmenami termínov; problém skutočných neprichodov sa často rieši lepšími pripomienkami a presnejšími kontaktnými údajmi).
- **Skreslenie prežívaním v dôsledku pravidiel prepúšťania**: služby, ktoré po opakovaných neprichodoch pacientov vyradia, uvidia, že sa im vlastná miera mechanicky zlepšuje, hoci tých istých pacientov len presúvajú inam v systéme.
- **Prekladanie viny za digitálne vylúčenie na pacienta**: pacient bez smartfónu alebo spoľahlivej textovej služby nebude mať z čisto digitálnej stratégie pripomienok úžitok, a preto je zvyčajne potrebný viackanálový prístup (list, telefonát, SMS, aplikácia), aby sa nezväčšovali rozdiely v prístupe.

## Zdroje

- NHS England, zmeškané termíny vo všeobecnej praxi a ambulantnej starostlivosti, publikované štatistiky a usmernenia
- Systematické prehľady Cochrane o intervenciách na zníženie zmeškaných zdravotníckych termínov vrátane systémov pripomienok
- Recenzovaná literatúra o socioekonomických a demografických koreláciách neprichodu na termíny

Pozri tiež: [miera telemedicínskych návštev](../miera-telemedicínskych-návštev/), keďže správanie pri neprichodoch sa bežne líši podľa modality konzultácie, a [miera prijatia pacientskeho portálu](../miera-prijatia-pacientskeho-portálu/), keďže samoobslužné plánovanie a pripomienky cez portál sú hlavným digitálnym zásahom.
