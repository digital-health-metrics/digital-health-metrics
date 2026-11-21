# Miera prijatia pacientskeho portálu

Miera prijatia pacientskeho portálu meria podiel oprávnených pacientov, ktorí sa zaregistrovali na online pacientskom portáli (napríklad NHS App, Patient Access alebo portáli prepojenom so zdravotnou dokumentáciou, ako je MyChart) a aktívne ho používajú na zobrazenie záznamov, rezerváciu termínov alebo komunikáciu so svojím tímom starostlivosti. Je to vstupný ukazovateľ digitálneho zapojenia: pacient, ktorý si nikdy neaktivoval účet, nemôže využiť žiadnu následnú digitálnu službu postavenú na portáli.

## Prečo je dôležitá

Portál vytvára hodnotu až vtedy, keď ho pacient použije, a organizácie by preto mali sledovať prijatie ako lievik, a nie jedno číslo: registrácia, aktivácia (prvá zmysluplná akcia) a aktívne používanie (používanie v klesajúcom okne) sú tri rôzne miery, ktoré sa príliš často zamieňajú. Tímy digitálnych služieb často pociťujú tlak vykazovať jedno priaznivé hlavné číslo a vyžaduje si to disciplínu trvať na ťažšom, čestnejšom rozčlenení. Nízke alebo nerovnomerne rozložené prijatie je aj signálom rovnosti: pacienti, ktorí sú starší, majú nižšiu digitálnu gramotnosť, nehovoria väčšinovým jazykom alebo nemajú spoľahlivé širokopásmové pripojenie či smartfón, sa systematicky menej často započítajú do čitateľa, takže rastúci priemer miery prijatia môže zakrývať rozširujúcu sa medzeru pre pacientov, ktorí často potrebujú kontakt so službami najviac.

## Ako sa počíta

Vykazujte všetky tri fázy, nielen registráciu, a vždy výslovne uveďte menovateľa:

```
Miera registrácie = pacienti s vytvoreným účtom na portáli / oprávnená populácia pacientov × 100
Miera aktivácie   = pacienti, ktorí dokončili prvú zmysluplnú akciu (zobrazili výsledok,
                     rezervovali termín, odoslali správu) / pacienti s účtom × 100
Miera aktívneho používania = pacienti, ktorí sa prihlásili aspoň raz za posledných 12 mesiacov /
                     oprávnená populácia pacientov × 100
```

Oprávnená populácia pacientov sa zvyčajne vymedzuje ako pacienti s aspoň jedným kontaktom s organizáciou vo vymedzenom spätnom období (bežne 24 mesiacov), ktorí majú vek a stav súhlasu umožňujúci vlastniť vlastný účet.

## Prepracovaný príklad

Sieť primárnej starostlivosti obsluhuje 50 000 pacientov, ktorí spĺňajú definíciu oprávnenosti. Z nich 32 000 sa zaregistrovalo na portáli (miera registrácie 64 %). Z 32 000 registrácií dokončilo 27 000 aspoň jednu zmysluplnú akciu, napríklad zobrazenie výsledku testu (miera aktivácie 84 % registrovaných). Za posledných 12 mesiacov sa z pôvodných 50 000 oprávnených pacientov prihlásilo aspoň raz 21 000 (miera aktívneho používania 42 %). Vykázanie len čísla registrácie 64 % by výrazne nadhodnotilo skutočné zapojenie; číslo aktívneho používania 42 % je to, ktoré by malo riadiť rozhodnutia o zdrojoch pre program portálu.

## Zdroje údajov a výhrady

Analytika portálu zvyčajne pochádza z platformy samotného dodávateľa (udalosti prihlásenia, používanie funkcií) alebo z auditného záznamu podkladovej elektronickej zdravotnej dokumentácie a organizácie by mali byť skeptické voči panelom dodávateľov, ktoré zobrazujú iba počty registrácií. Prístup splnomocnenej osoby (rodič alebo opatrovateľ spravujúci účet v mene pacienta) by sa mal označovať a vykazovať osobitne, pretože mení, kto je skutočným „používateľom“. Voľba menovateľa je mimoriadne dôležitá: počítanie voči celému zoznamu registrovaných pacientov namiesto skutočne oprávnenej, kontaktovateľnej populácie bude vždy podhodnocovať prijatie, zatiaľ čo počítanie len voči pacientom, ktorí boli aktívne pozvaní, ho bude vždy nadhodnocovať, a definícia oprávnenosti by sa preto mala stanoviť a zverejniť spolu s každou vykázanou mierou.

## Nástrahy

- **Registrácia započítaná ako prijatie**: vytvorený, ale nikdy nepoužitý účet má takmer nulovú hodnotu; vykazujte aktiváciu a aktívne používanie popri registrácii, nie namiesto nej.
- **Ignorovanie digitálneho vylúčenia**: súhrnné čísla prijatia môžu rásť, zatiaľ čo sa rozširuje medzera medzi najviac a najmenej digitálne začlenenými skupinami; vždy člente podľa veku, deprivácie, jazyka a postihnutia, ak to riadenie údajov dovoľuje.
- **Porovnávanie organizácií s odlišnými definíciami oprávnenosti**: program portálu, ktorý pozýva iba pacientov so zaznamenanou e-mailovou adresou, vykáže vyššiu mieru než ten, ktorý meria voči celému registrovanému zoznamu, bez skutočného rozdielu vo výkone.
- **Považovanie jednorazového prihlásenia za trvalé zapojenie**: 12-mesačné spätné obdobie je bežné, no kratšie okno (napríklad 90 dní) dáva skoršie varovanie pred klesajúcim používaním.

## Zdroje

- NHS England, štatistiky používania a registrácií NHS App (publikácie nhs.uk / digital.nhs.uk)
- ONC / HealthIT.gov, miery programu Promoting Interoperability vrátane mier prístupu pacientov View, Download, Transmit (VDT)
- Recenzovaná literatúra o prijatí pacientskych portálov a nerovnostiach v digitálnom zdraví, napríklad štúdie publikované v Journal of the American Medical Informatics Association (JAMIA)

Pozri tiež: [miera neprichodov na termíny](../miera-neprichodov-na-termíny/), ktorú samoobslužné plánovanie a pripomienky cez portál priamo ovplyvňujú.
