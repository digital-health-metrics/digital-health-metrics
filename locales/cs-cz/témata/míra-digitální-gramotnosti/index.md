# Míra digitální gramotnosti

Míra digitální gramotnosti měří podíl populace pacientů, kteří dokážou samostatně a úspěšně dokončit běžné úkony na platformě digitálního zdraví – přihlásit se, objednat se na termín, připojit se k videonávštěvě nebo si přečíst výsledek vyšetření – bez pomoci jiné osoby. Liší se od míry digitálního přístupu a je třeba ji vždy měřit samostatně: pacient může mít chytrý telefon i širokopásmové připojení a přesto nedokázat samostatně pracovat s telemedicínskou platformou. Směšování obou metrik skrývá právě tu populaci, kterou má tato metrika odhalit.

## Proč na ní záleží

Samotný digitální přístup nezaručuje, že pacient dokáže digitální zdravotní službu efektivně využívat: pacienti s nižší zdravotní gramotností, omezenou zkušeností s technologiemi obecně, kognitivním či zrakovým postižením nebo jazykovou bariérou vůči rozhraní platformy mohou mít plný technický přístup a přesto úkol samostatně nedokončit. Tato mezera systematicky koreluje s týmiž demografickými skupinami, které už čelí jiným zdravotním nerovnostem. Rámec HIMSS Digital Health Equity Measurement Framework proto z tohoto důvodu považuje digitální gramotnost za samostatný pilíř vedle přístupu: uzavření mezery v přístupu bez řešení mezery v gramotnosti může nechat populaci technicky připojenou, ale prakticky neschopnou z digitálních služeb těžit. Organizace, které měří dokončení úkolů a čas do dokončení u běžných akcí na platformě, členěné podle jazyka a socioekonomických ukazatelů, dokážou odhalit bariéry gramotnosti a cílit podporu (zjednodušená rozhraní, asistované zaškolení, obsah v jiných jazycích) mnohem přesněji než organizace spoléhající pouze na metriky přístupu či celkové skóre spokojenosti.

## Jak se počítá

```
Míra digitální gramotnosti = pacienti, kteří samostatně dokončí definovaný
                             úkol bez pomoci / pacienti, kteří se o tento
                             úkol pokusí × 100

Běžně měřené úkoly: přihlášení k účtu, objednání na termín, připojení
k videonávštěvě, zobrazení výsledku vyšetření, vyplnění vstupního formuláře.

Vykazuje se po jednotlivých úkolech, nikoli jako jediné smíšené skóre,
protože gramotnost pro jednoduché úkoly (přihlášení) a složité úkoly
(vyplnění vícekrokového vstupního formuláře) se podstatně liší
a jejich smíšení zakrývá, kde přesně bariéra leží.
```

## Řešený příklad

Zdravotnický systém sleduje připojení k videonávštěvě jako definovaný úkol u 5 000 naplánovaných telemedicínských návštěv za měsíc. Z nich se 4 100 pacientů připojí úspěšně bez volání na podporu či technické pomoci během návštěvy (míra digitální gramotnosti pro tento úkol: 82 %). Členění podle hlavního jazyka ukazuje míru 89 % u anglicky mluvících pacientů oproti 61 % u pacientů, jejichž hlavní jazyk se liší od výchozího jazyka rozhraní platformy – rozdíl 28 procentních bodů, který by zůstal neviditelný, kdyby se vykazoval jen smíšený údaj 82 %, a který ukazuje přímo na konkrétní řešitelný zásah (přeložené rozhraní a pokyny), nikoli na vágní obecný problém gramotnosti.

## Zdroje dat a omezení

Data o dokončení úkolů se obvykle zachycují z vlastních protokolů událostí platformy (dostal se pacient na videonávštěvu, dokončil se proces objednání bez opuštění), doplněných o data z volání na podporu či helpdesku, aby se odhalily úkoly, které byly technicky „dokončeny“ jen proto, že pacient dostal uprostřed živou pomoc. Úkol započítaný jako „dokončený“ čistě podle systémových protokolů může zakrýt, že pacient potřeboval telefonát od člena rodiny nebo pracovníka podpory, aby se tam dostal; skutečně na gramotnosti nezávislé dokončení je třeba definovat a sledovat odděleně od asistovaného všude, kde platforma obojí dokáže rozlišit. Digitální gramotnost koreluje se zdravotní gramotností a obecnou gramotností, ale analyticky se od nich liší; tam, kde je nutné formální hodnocení, je třeba použít validovaný nástroj, nikoli neformální předpoklad založený jen na věku či demografii.

## Úskalí

- **Směšování digitální gramotnosti s digitálním přístupem**: pacient s plným technickým přístupem může stále postrádat gramotnost k jeho efektivnímu využití; jde o samostatné metriky vyžadující samostatné zásahy a nikdy by se neměly vykazovat jedním společným údajem.
- **Počítání asistovaných dokončení jako samostatných úspěchů**: pokud pacient úkol dokončí jen s pomocí volání na podporu nebo člena rodiny, jde o mezeru v gramotnosti, kterou platforma zamaskovala, nikoli vyřešila; asistované a samostatné dokončení rozlišujte všude, kde to data dovolují.
- **Vykazování jediného smíšeného skóre dokončení úkolů**: gramotnost pro jednoduchý úkol (přihlášení) a složitý (vyplnění podrobného vstupního formuláře) se podstatně liší; vykazujte po jednotlivých úkolech, abyste zjistili, kde přesně bariéra leží.
- **Předpoklad, že digitální gramotnost předpovídá samotný věk**: ačkoli věk v souhrnu koreluje s nižší digitální gramotností, znalost jazyka rozhraní platformy a obecná obeznámenost s technologiemi bývají silnějšími individuálními prediktory a je třeba je měřit přímo, nikoli odvozovat z věku.

## Zdroje

- HIMSS, Digital Health Equity Measurement Framework (DHEMF)
- Office of the National Coordinator for Health Information Technology (ONC), výzkum použitelnosti zdravotnických informačních technologií a digitální zdravotní gramotnosti
- Recenzovaná literatura o měření digitální zdravotní gramotnosti a intervencích, například studie publikované v Journal of Medical Internet Research (JMIR)

Viz také: [míra digitálního přístupu](../míra-digitálního-přístupu/), předpokladová metrika, se kterou se tato nejčastěji, a nejčastěji chybně, zaměňuje.
