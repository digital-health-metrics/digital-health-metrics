# Náklady na epizódu starostlivosti

Náklady na epizódu starostlivosti sú celkové náklady vynaložené na liečbu vymedzenej klinickej epizódy — napríklad náhrady bedrového kĺbu a súvisiaceho zotavovania alebo obdobia zvládania diabetu — porovnané s historickou základnou kohortou liečenou bez hodnotenej digitálnej intervencie. Je to štandardná jednotka finančného porovnania v starostlivosti založenej na hodnote, pretože zachytáva úplný ekonomický obraz epizódy, a nie žiadnu jednotlivú nákladovú položku izolovane, a je to metrika, ktorú platitelia a zdravotnícke systémy najčastejšie vyžadujú predtým, než súhlasia s financovaním programu digitálneho zdravia vo veľkom.

## Prečo je dôležitá

Zmluvy o starostlivosti založenej na hodnote čoraz viac platia za výsledky a epizódy, a nie za jednotlivé služby, čo znamená, že finančný argument programu digitálneho zdravia sa musí viesť v rovnakej mene: celkové náklady na epizódu v porovnaní s tým, koľko rovnaký typ epizódy stál pred zavedením intervencie. Program, ktorý znižuje jednu nákladovú kategóriu (napríklad menej osobných kontrolných návštev) a zvyšuje inú (viac nákladov na zariadenia, viac času klinického personálu na monitorovanie), nemusel nutne znížiť celkové náklady na epizódu, a tento kompromis zachytí iba úplné nákladové vyčíslenie na úrovni epizódy; pohľad na ktorúkoľvek jednotlivú nákladovú položku izolovane hrozí zavádzajúcim záverom oboma smermi. Keďže definície epizód a základné obdobia možno zostaviť spôsobom, ktorý uprednostní určitý záver, táto metrika vyžaduje väčšiu metodologickú transparentnosť než väčšina ostatných v tejto knihe, aby bola dôveryhodná pre skeptického platiteľa alebo finančný tím.

## Ako sa počíta

```
Náklady na epizódu starostlivosti = celkové náklady všetkej starostlivosti
                                     poskytnutej v rámci vymedzeného okna
                                     epizódy (všetky prostredia starostlivosti,
                                     všetky nákladové kategórie) / počet epizód

Porovnajte s nákladmi na epizódu historickej základnej kohorty pre ten istý
klinicky vymedzený typ epizódy, upravenými o rozdiely v skladbe prípadov
(vek, komorbidita, závažnosť) medzi oboma kohortami.

Zahrňte nielen priame klinické náklady: náklady na technologickú platformu
a zariadenia, čas dodatočného klinického personálu a každú starostlivosť,
ktorá sa presunula do iného prostredia (napr. z nemocnice domov), namiesto
toho, aby celkom zmizla.
```

## Prepracovaný príklad

Historické základné náklady zdravotníckeho systému na epizódu totálnej náhrady bedrového kĺbu (od operácie po 90-dňové zotavovanie) sú 28 000 USD na epizódu, na základe 200 historických epizód. Zavedie sa nový digitálny program monitorovania po operácii a 150 nových epizód s programom vykazuje priemerné náklady 24 500 USD na epizódu — zníženie o 3 500 USD na epizódu, spôsobené najmä menším počtom návštev urgentného príjmu počas zotavovania a kratším priemerným pobytom v nemocnici. Po úprave o riziko vzhľadom na o niečo mladšiu skladbu prípadov s nižšou komorbiditou v digitálne monitorovanej kohorte v porovnaní s historickým základom sa upravená úspora zúži na 2 100 USD na epizódu — stále skutočné zlepšenie, no podstatne menšie, než naznačovalo surové, neupravené porovnanie.

## Zdroje údajov a výhrady

Celkové náklady na epizódu sa zvyčajne zostavujú z vlastného nákladového účtovníctva alebo finančného systému zdravotníckeho systému, ktorý kombinuje údaje z nárokov, vnútornú alokáciu nákladov a — ak ide o digitálnu platformu — jej licenčné a hardvérové náklady. Presné zostavenie tohto čísla je zvyčajne najťažšou a najnáročnejšou časťou každej analýzy hodnoty digitálneho zdravia, pretože náklady sa často evidujú v samostatných systémoch, ktoré nikdy neboli navrhnuté na kombináciu na úrovni epizódy. Úprava podľa skladby prípadov je nevyhnutná vždy, keď digitálne vedená kohorta a historická základná kohorta neboli pridelené skutočnou randomizáciou, pretože digitálne programy sa často ponúkajú najprv zapojenejším, vo všeobecnosti zdravším alebo motivovanejším pacientom, čo môže viesť k zdanlivej úspore nákladov, ktorá je v skutočnosti efektom výberu, a nie skutočným účinkom programu.

## Nástrahy

- **Porovnávanie neupravených nákladov medzi kohortami s odlišnou skladbou prípadov**: digitálne vedená kohorta, ktorá je náhodou zdravšia alebo má nižšie riziko než historický základ, vykáže nižšie náklady na epizódu z dôvodov nesúvisiacich so samotnou digitálnou intervenciou; pred porovnaním vždy upravte o riziko.
- **Vynechanie nákladov na technológie a personál z „digitálnej“ strany porovnania**: nákladová analýza, ktorá sleduje iba znížené klinické čerpanie, no ignoruje náklady na platformu, zariadenia a personál potrebný na prevádzku digitálneho programu, nadhodnotí čisté úspory.
- **Nejednotné vymedzenie okna epizódy medzi kohortami**: porovnanie 90-dňového okna epizódy jednej kohorty so 60-dňovým oknom druhej vytvorí nákladové porovnanie, ktoré v skutočnosti nemeria to isté.
- **Považovanie presunu nákladov za ich zníženie**: náklady presunuté z jedného prostredia starostlivosti do iného (napríklad z nemocnice do monitorovaného domáceho prostredia) sú skutočným a hodnotným zistením, no analyticky sa líšia od nákladov, ktoré úplne zanikli, a obe by sa mali vykazovať osobitne.

## Zdroje

- Centers for Medicare & Medicaid Services (CMS), Bundled Payments for Care Improvement (BPCI) a usmernenia k modelom platieb založeným na epizódach
- Healthcare Financial Management Association (HFMA), usmernenia k metodike vyčíslenia nákladov na epizódu starostlivosti
- Recenzovaná literatúra o nákladových analýzach starostlivosti založenej na hodnote v digitálnom zdraví, napríklad štúdie publikované v Health Affairs a American Journal of Managed Care

Pozri tiež: [návratnosť investícií (ROI) a hodnota investícií (VOI)](../roi-a-voi/), ktorá používa náklady na epizódu starostlivosti ako jeden zo svojich hlavných vstupov.
