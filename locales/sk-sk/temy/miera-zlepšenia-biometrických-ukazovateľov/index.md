# Miera zlepšenia biometrických ukazovateľov

Miera zlepšenia biometrických ukazovateľov je podiel zaradených pacientov v programe digitálneho zdravia, ktorí za vymedzené obdobie zaradenia dosiahnu klinicky významné zlepšenie sledovaného biometrického ukazovateľa — najčastejšie glykovaného hemoglobínu (HbA1c) v programoch pre diabetes a kardiometabolické ochorenia alebo indexu telesnej hmotnosti (BMI) v programoch na reguláciu hmotnosti. Je to výsledková metrika, ktorá v konečnom dôsledku zdôvodňuje klinické tvrdenia digitálneho zdravotníckeho produktu: čísla o zapojení a prijatí opisujú, ako sa produkt používa, no biometrické zlepšenie je bližšie k dôkazu, že funguje.

## Prečo je dôležitá

Programy digitálneho zdravia sa často predávajú a objednávajú na základe prísľubu zlepšených zdravotných výsledkov a miera zlepšenia biometrických ukazovateľov je najpriamejší, kvantifikovateľný spôsob, ako tento prísľub overiť voči konkrétnej, klinicky uznávanej hranici, a nie voči vágnemu tvrdeniu o „lepšom zdraví“. Platitelia, zamestnávatelia a zdravotnícke systémy čoraz častejšie viažu úhradu alebo obnovenie zmluvy na preukázanú biometrickú zmenu, a program, ktorý túto mieru nedokáže dôveryhodne vykázať, je preto v nevýhode komerčne aj klinicky. Metrika je zároveň kontrolou disciplíny pri návrhu programu: vykazovať zapojenie (prihlásenia, odoslané správy) je oveľa jednoduchšie než výsledky a tím by mal byť podozrievavý voči každému programu, ktorý nadšene hlási prvé a o druhých je vágny.

## Ako sa počíta

```
Miera zlepšenia biometrických ukazovateľov = pacienti, ktorí dosiahli
                                              vymedzené klinicky významné
                                              zlepšenie / pacienti s platným
                                              východiskovým a následným
                                              meraním × 100

Bežné klinicky významné hranice:
  HbA1c   — zníženie o ≥ 0,5 percentuálneho bodu alebo dosiahnutie
            vymedzeného cieľa (napr. < 7,0 %) z východiskovej hodnoty
            mimo rozsahu
  BMI     — zníženie o ≥ 5 % východiskovej telesnej hmotnosti, udržané
            do bodu následného merania

Vykazujte osobitne pre každý sledovaný biometrický ukazovateľ; nikdy
nezlučujte zlepšenie HbA1c a BMI do jedného spoločného percentuálneho
„zlepšenia“.
```

## Prepracovaný príklad

Kardiometabolický program digitálneho zdravia zaradí 800 pacientov s východiskovou hodnotou HbA1c mimo rozsahu. Z nich 620 má platné východiskové aj následné meranie po 6 mesiacoch (180 je stratených zo sledovania a vylúčených z menovateľa, nepočítajú sa ako zlyhania). Zo 620 pacientov s párovými meraniami 340 dosiahne zníženie aspoň o 0,5 percentuálneho bodu. Miera zlepšenia biometrických ukazovateľov je 340 / 620 × 100 = 55 %. Vykázanie voči všetkým 800 zaradeným (340 / 800 = 42,5 %) by zamiešalo stratu zo sledovania so zlyhaním liečby a podhodnotilo by mieru pre pacientov, ktorí meranie skutočne dokončili.

## Zdroje údajov a výhrady

Východiskové a následné biometrické hodnoty zvyčajne pochádzajú z pripojeného zariadenia (glukomer alebo inteligentná váha s Bluetooth), z laboratórneho výsledku importovaného z elektronickej zdravotnej dokumentácie alebo z hodnoty, ktorú zadal sám pacient — a tieto tri zdroje majú veľmi odlišnú spoľahlivosť, preto by sa zdroj mal vykazovať spolu s mierou. Strata zo sledovania je zriedka náhodná: pacienti, ktorí sa od programu odpoja, sú často aj tí, u ktorých je najmenej pravdepodobné, že sa zlepšili, takže vysoká miera zlepšenia vypočítaná len za pacientov, ktorí dokončili sledovanie, môže nadhodnotiť skutočný účinok programu na úrovni populácie. Sezónne efekty a regresia k priemeru sú reálne pre HbA1c aj hmotnosť, preto by program mal, ak je to možné, porovnávať so súbežnou alebo historickou kontrolnou skupinou a nepovažovať každé zlepšenie za dôkaz účinku programu.

## Nástrahy

- **Vylúčenie straty zo sledovania namiesto jej vykázania**: tiché vynechanie pacientov bez následného merania z menovateľa môže zdanlivú mieru zlepšenia podstatne nafúknuť; mieru dokončenia následného merania vždy vykazujte spolu so samotnou mierou zlepšenia.
- **Miešanie meraní zadaných pacientom a meraní zo zariadení bez označenia**: hmotnosť zadaná pacientom je systematicky menej spoľahlivá než údaj z pripojenej inteligentnej váhy a zmiešanie oboch zdrojov zakrýva, koľko zo zdanlivého zlepšenia je merací šum.
- **Žiadna kontrola ani kontrafaktuál**: mnohé chronické biometrické ukazovatele samy kolíšu alebo sa vracajú k priemeru; miera zlepšenia z jednej vetvy bez porovnávacej skupiny je indíciou, nie presvedčivým dôkazom účinku programu.
- **Považovanie mierneho priemerného posunu za dôkaz širokého zlepšenia**: malé priemerné zlepšenie na úrovni populácie môžu spôsobiť niekoľkí výrazne reagujúci pacienti, zatiaľ čo väčšina pacientov nezaznamená žiadnu zmenu; vykazujte rozdelenie (napr. podiel prekračujúci klinicky významnú hranicu), nielen priemerný posun.

## Zdroje

- American Diabetes Association (ADA), Standards of Care in Diabetes, usmernenia k cieľovej hodnote HbA1c a klinicky významnej zmene
- Centers for Disease Control and Prevention (CDC), Division of Diabetes Translation, usmernenia k hodnoteniu programov
- Recenzovaná literatúra o výsledkoch digitálnych programov pre diabetes a reguláciu hmotnosti, napríklad štúdie publikované v npj Digital Medicine a Diabetes Care

Pozri tiež: [miera adherencie k liečbe](../miera-adherencie-k-liečbe/), častý východiskový faktor biometrického zlepšenia v programoch pre chronické ochorenia.
