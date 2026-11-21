# Presnosť smerovania triáže

Presnosť smerovania triáže je podiel kontaktov s pacientmi, pri ktorých automatizovaný alebo umelou inteligenciou podporovaný triážny nástroj správne nasmeruje pacienta na vhodnú úroveň a miesto starostlivosti — napríklad samoliečbu, primárnu starostlivosť, urgentnú ambulanciu alebo pohotovostnú starostlivosť —, posudzované voči klinicky validovanému referenčnému štandardu. Je to metrika bezpečnosti a účinnosti pre každé digitálne vstupné dvere, kontrolór príznakov alebo triážny systém s umelou inteligenciou: celá hodnota nástroja stojí na správnom, rýchlom a konzistentnom smerovaní pacientov.

## Prečo je dôležitá

Nepresný triážny nástroj spôsobuje škodu oboma smermi: podtriáž (nasmerovanie pacienta na nižšiu úroveň starostlivosti, než potrebuje) môže oddialiť liečbu skutočného urgentného stavu, zatiaľ čo nadtriáž (nasmerovanie pacienta na vyššiu úroveň starostlivosti, než potrebuje) plytvá vzácnou kapacitou pohotovostnej a urgentnej starostlivosti a zvyšuje náklady a úzkosť pacienta bez klinického prínosu. Keďže tieto dva režimy zlyhania majú také rozdielne dôsledky, presnosť smerovania triáže by sa mala vždy vykazovať spolu so smerom chýb, nie ako jedno súhrnné číslo presnosti, ktoré skrýva, či nástroj chybuje bezpečne alebo nebezpečne. Regulátori a zdravotnícke systémy, ktoré hodnotia triážny nástroj s umelou inteligenciou na nasadenie, čoraz častejšie vyžadujú takéto stratifikované vykazovanie presnosti ako podmienku klinického schválenia, najmä pri nástrojoch pôsobiacich s akýmkoľvek stupňom autonómie od klinického pracovníka.

## Ako sa počíta

```
Presnosť smerovania triáže = správne nasmerované kontakty / všetky
                              triážované kontakty × 100

Podtriáž a nadtriáž vykazujte osobitne:
  Miera podtriáže = kontakty nasmerované na nižšiu úroveň naliehavosti
                     než referenčný štandard / všetky triážované
                     kontakty × 100
  Miera nadtriáže = kontakty nasmerované na vyššiu úroveň naliehavosti
                     než referenčný štandard / všetky triážované
                     kontakty × 100

Referenčným štandardom je zvyčajne retrospektívne preskúmanie toho
istého prípadu klinickým pracovníkom, ak je to možné, zaslepené voči
výstupu nástroja.
```

## Prepracovaný príklad

Nástroj kontrolóra príznakov s umelou inteligenciou vytriážuje za mesiac 5 000 kontaktov s pacientmi. Zaslepené klinické preskúmanie náhodnej vzorky 500 z týchto kontaktov zistí, že 430 bolo nasmerovaných na správnu úroveň naliehavosti (presnosť 86 %), 45 bolo podtriážovaných (9 %) a 25 nadtriážovaných (5 %). Miera podtriáže 9 % je číslo, ktoré si najnaliehavejšie vyžaduje preskúmanie, pretože predstavuje kontakty, pri ktorých mohol byť pacient nasmerovaný na menej naliehavú starostlivosť, než skutočne potreboval; miera nadtriáže 5 % je problém kapacity a nákladov, no nie priamy bezpečnostný.

## Zdroje údajov a výhrady

Referenčný štandard, voči ktorému sa presnosť triáže meria, je mimoriadne dôležitý: preskúmanie jedným klinickým pracovníkom vnáša variabilitu úsudku tohto pracovníka, a dôveryhodné číslo presnosti preto zvyčajne vyžaduje buď viacerých nezávislých posudzovateľov so zdokumentovanou medzihodnotiteľskou zhodou, alebo porovnanie s následným, potvrdeným klinickým výsledkom (aká starostlivosť pacientovi skutočne bola potrebná, zistená dodatočne). Záleží aj na vzorkovaní: preskúmanie len pohodlnej vzorky kontaktov alebo len tých, ktoré boli označené ako neobvyklé, nevytvorí číslo, ktoré sa dá zovšeobecniť na celkový výkon nástroja. Čísla presnosti by sa mali vykazovať osobitne podľa kategórie hlavného príznaku alebo ťažkosti, ak to objem prípadov umožňuje, keďže triážne nástroje len zriedka fungujú rovnomerne pri všetkých stavoch.

## Nástrahy

- **Vykazovanie jedného zmiešaného čísla presnosti**: zlúčenie podtriáže a nadtriáže do jedného čísla skrýva, či chyby nástroja tiahnu k nebezpečnejšiemu režimu zlyhania; vždy ich vykazujte osobitne.
- **Používanie jedného nezaslepeného posudzovateľa ako referenčného štandardu**: môže to ticho skresliť číslo presnosti smerom k tomu, čo by urobil sám posudzovateľ, a nie k nezávislému klinickému štandardu.
- **Validácia iba na retrospektívnych, pohodlných údajoch**: reálna presnosť smerovania nástroja pri živom, nejednoznačnom vstupe pacienta sa často podstatne líši od jeho presnosti na kurovanej validačnej množine zostavenej počas vývoja.
- **Ignorovanie posunu výkonu po nasadení**: presnosť triážneho modelu s umelou inteligenciou sa môže v čase zhoršovať, keď sa menia populácie pacientov, prezentujúce príznaky alebo dostupnosť trás starostlivosti; presnosť by sa mala merať opakovane, a nie raz validovať a predpokladať za stabilnú.

## Zdroje

- ONC / HealthIT.gov, usmernenia k bezpečnosti a zabezpečeniu kvality klinickej podpory rozhodovania a nástrojov s umelou inteligenciou
- Recenzovaná literatúra o presnosti kontrolórov príznakov a triážnych nástrojov s umelou inteligenciou, napríklad štúdie publikované v JAMIA, npj Digital Medicine a BMJ Health & Care Informatics
- NHS England, usmernenia ku klinickej bezpečnosti digitálnych triážnych a vzdialených konzultačných nástrojov (štandardy riadenia klinického rizika DCB0129/DCB0160)

Pozri tiež: [čas vybavenia elektronického odporúčania](../čas-vybavenia-elektronického-odporúčania/), procesná metrika, ktorá najpriamejšie nasleduje po rozhodnutí o triáži.
