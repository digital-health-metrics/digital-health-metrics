# Skóre System Usability Scale

Skóre System Usability Scale (SUS) je standardizovaný dotazník o 10 položkách používaný ke kvantifikaci použitelnosti softwaru, který dává jediné skóre od 0 do 100, jež lze srovnávat s dobře zavedenými odvětvovými normami. Na rozdíl od Net Promoter Score, které měří ochotu doporučit, nebo měřítek výsledků hlášených pacientem, která měří klinický či funkční stav, měří SUS jednu konkrétní věc: jak snadno se samotný software učí a používá, ať už pacienty, nebo klinickým personálem.

## Proč na ní záleží

Nástroj digitálního zdraví může mít silné klinické důkazy a přesvědčivý obchodní případ, a přesto v praxi selhat, protože pacienti či lékaři shledávají rozhraní matoucí, pomalé nebo frustrující – a protože SUS je validovaný, široce používaný nástroj s desítkami let publikovaných srovnávacích dat napříč odvětvími, umožňuje týmu digitálního zdraví porovnat použitelnost vlastního produktu se známým rozdělením, místo aby se spoléhal na neformální dojmy či anekdotické stížnosti. SUS je záměrně technologicky neutrální a rychlý na podání (obvykle pod pět minut), což jej činí praktickým pro opakované provádění napříč iteracemi návrhu, na rozdíl od plné studie použitelnosti či formální klinické studie. Protože selhání použitelnosti pro zdravotníky jsou zdokumentovaným přispěvatelem k vyhoření (viz míra vyhoření lékařů) a selhání použitelnosti pro pacienty jsou zdokumentovaným přispěvatelem k opuštění produktu a špatným výsledkům digitální gramotnosti (viz míra digitální gramotnosti), slouží SUS jako levný signál včasného varování o použitelnosti, který může zachytit problém návrhu dříve, než se projeví v těchto závažnějších následných metrikách.

## Jak se počítá

```
Skóre SUS = ((součet skóre lichých položek − 5) +
             (25 − součet skóre sudých položek)) × 2,5

Výsledkem je jediné skóre od 0 do 100 (nikoli procento, přestože
je to rozsah škály, protože nepředstavuje „procento správných“ ani
podobnou veličinu).

Publikovaný výklad srovnávacích hodnot (Bangor a kol.):
  Nad 80   — výborná použitelnost
  68       — průměrná, podle širokého odvětvového standardu
  Pod 51   — špatná použitelnost, vyžadující šetření
```

## Řešený příklad

Telemedicínská platforma podá standardní 10položkový dotazník SUS 150 pacientům po jejich první video návštěvě. Vypočtené průměrné skóre SUS napříč všemi respondenty je 74. Ve srovnání s široce citovaným odvětvovým průměrem 68 to ukazuje nadprůměrnou použitelnost pro tuto konkrétní populaci pacientů a případ použití, i když stále podstatně pod „výbornou“ hranicí 80, která by naznačovala málo zbývajících překážek použitelnosti. Členění týchž 150 odpovědí podle věku ukazuje průměrné skóre 81 u pacientů do 50 let a 62 u pacientů ve věku 65 let a více – rozdíl, který ukazuje na konkrétní řešitelný problém použitelnosti pro starší pacienty, a nikoli na obecný problém použitelnosti produktu, a který by jediný smíšený průměr skryl.

## Zdroje dat a omezení

Data SUS pocházejí přímo od pacientů nebo zdravotníků vyplňujících standardizovaný 10položkový dotazník a nástroj musí být podáván přesně tak, jak byl validován (stejných 10 položek, stejná 5bodová škála souhlasu, stejný vzorec hodnocení), aby bylo výsledné skóre srovnatelné s publikovanými srovnávacími hodnotami; upravená nebo zkrácená verze dotazníku, jakkoli dobře míněná, vytvoří skóre, které nelze spolehlivě interpretovat vůči standardnímu srovnávacímu rozdělení. SUS měří vnímanou použitelnost, která koreluje s objektivním úspěchem při dokončení úkolu, ale není s ním totožná (míru založenou na dokončení úkolů viz míra digitální gramotnosti); produkt může mít dobré skóre SUS od pacientů, kteří složitější funkce nevyzkoušeli, takže spojení SUS s objektivními daty o dokončení úkolů poskytuje úplnější obraz než kterékoli samostatně. Záleží i na načasování odpovědí: podání SUS bezprostředně po frustrujícím konkrétním incidentu (selhání připojení, matoucí krok) oproti podání po hladké relaci může posunout skóre nezávisle na celkové použitelnosti produktu.

## Úskalí

- **Úprava standardních položek dotazníku nebo hodnocení**: i malé změny formulace či škály zneplatňují srovnání se zavedeným publikovaným srovnávacím rozdělením; používejte standardní 10položkový nástroj přesně tak, jak byl validován.
- **Vykazování pouze průměrného skóre bez členění**: použitelnost se často podstatně liší podle věku uživatele, digitální gramotnosti nebo role (pacient versus lékař); členěte vykazování, abyste našli konkrétní, řešitelné mezery v použitelnosti, které jediný průměr skrývá.
- **Chápání SUS jako míry klinické účinnosti**: SUS měří konkrétně použitelnost, nikoli klinický výsledek či spokojenost s péčí; vysoce použitelný nástroj může stále selhat při zlepšování klinických výsledků a obojí by se nikdy nemělo zaměňovat ani nahrazovat.
- **Podávání průzkumu pouze po neobvykle hladkých nebo neobvykle frustrujících relacích**: načasování a kontext podání mohou skóre zkreslit; podávejte jej důsledně na reprezentativním vzorku reálných relací, nikoli jen pohodlných či selektivně vybraných.

## Zdroje

- Brooke, J., „SUS: A Quick and Dirty Usability Scale“, původní publikovaný nástroj
- Bangor, Kortum a Miller, publikovaný výzkum srovnávacích hodnot SUS, který stanovil široce citovaná pásma výkladu skóre
- Recenzovaná literatura o používání SUS při hodnocení použitelnosti digitálního zdraví a telemedicíny, například studie publikované v JMIR Human Factors

Viz také: [net promoter score pacientů](../net-promoter-score-pacientů/), související, ale odlišná metrika hlášená pacientem, která měří spokojenost a loajalitu, nikoli konkrétně použitelnost softwaru.
