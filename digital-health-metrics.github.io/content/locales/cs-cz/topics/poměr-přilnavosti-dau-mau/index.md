# Poměr přilnavosti DAU/MAU

Poměr přilnavosti DAU/MAU porovnává denní aktivní uživatele (DAU) s měsíčními aktivními uživateli (MAU) – stejné základní měřítko se používá pro týdenní aktivní uživatele (WAU) vůči MAU – a vyjadřuje, jaký podíl širší uživatelské základny produktu s ním pracuje v kterýkoli daný den. Je to standardní produktově-analytické měřítko intenzity zapojení, odlišné od toho, zda je uživatel vůbec udržen (viz míra udržení uživatelů), nebo jak důsledně se konkrétní zapsaný pacient zapojuje v čase (viz míra konzistence zapojení pacientů): přilnavost popisuje rytmus používání na úrovni populace, nikoli vzorec jednotlivce.

## Proč na ní záleží

Dva produkty digitálního zdraví mohou vykazovat shodný počet měsíčních aktivních uživatelů, a přitom mít velmi odlišnou základní intenzitu zapojení: v jednom většina těchto uživatelů otevírá aplikaci téměř denně, v druhém ji většina otevře jednou za měsíc těsně předtím, než by jinak byla započítána jako neaktivní. Poměr přilnavosti DAU/MAU tyto dvě velmi odlišné situace rozliší jediným jednoduchým, dobře pochopitelným srovnávacím údajem, který mohou produktové i klinické týmy sledovat v čase a porovnávat se známými odvětvovými rozmezími – poměr kolem 20 % je běžně citovanou rozumnou referenční hodnotou pro mnoho spotřebitelských aplikací, zatímco produkty denního návyku (deník jídla nebo příznaků, který má pacient používat každý den) je třeba posuzovat podle podstatně vyšší laťky. Protože je přilnavost citlivá na to, jak se definuje „aktivní“, je nejužitečnější jako trend jednoho produktu v čase a jako srovnání s produkty vytvořenými pro podobný vzorec používání, nikoli jako absolutní srovnávací hodnota napříč odvětvími.

## Jak se počítá

```
Poměr přilnavosti DAU/MAU = průměrný počet denních aktivních uživatelů
                            v období / měsíční aktivní uživatelé ve
                            stejném období × 100

Poměr WAU/MAU (týdenní, stejný princip) je mírnější varianta,
vhodnější pro produkty, u nichž se očekává používání několikrát týdně
a nikoli denně.

„Aktivní“ musí být definováno přesně a důsledně (např. dokončená
kvalifikující akce, nikoli pasivní otevření aplikace) v čitateli
i ve jmenovateli.
```

## Řešený příklad

Aplikace pro digitální řízení diabetu má v daném měsíci 10 000 měsíčních aktivních uživatelů, definovaných jako uživatelé, kteří v daném měsíci dokončili alespoň jednu kvalifikující akci (záznam glukózy, záznam jídla nebo odškrtnutí léku). Průměr denních počtů aktivních uživatelů za 30 dnů tohoto měsíce dává průměrné DAU 2 200. Poměr přilnavosti DAU/MAU je 2 200 / 10 000 × 100 = 22 %, což znamená, že v typický den s aplikací pracuje asi 22 % její měsíční uživatelské základny – přiměřený údaj pro nástroj pro chronické onemocnění s denním návykem, ačkoli produktový tým by chtěl vidět jeho růst v čase, jak se ideální chování (denní zápis) stává u zapsaných pacientů zvykovějším.

## Zdroje dat a omezení

DAU, WAU i MAU se počítají ze stejných podkladových protokolů událostí, s jednou jednotnou definicí „kvalifikující aktivní“ události ve všech oknech; změna této definice mezi výpočtem čitatele a jmenovatele (například počítání jakéhokoli otevření aplikace pro DAU, ale jen dokončené akce pro MAU) vytvoří zkreslený poměr, který neodráží skutečnou intenzitu zapojení. Vhodné srovnávací měřítko přilnavosti silně závisí na zamýšleném vzorci používání produktu: nástroj určený k použití jednou týdně (týdenní kontrola příznaků) bude a má mít nižší poměr DAU/MAU než nástroj určený k použití denně (doprovodná aplikace ke kontinuálnímu měření glukózy), takže přilnavost je třeba vždy interpretovat vůči zamýšlené frekvenci používání daného produktu, a nikoli jedinému univerzálnímu cíli.

## Úskalí

- **Porovnávání poměrů přilnavosti mezi produkty s odlišnou zamýšlenou frekvencí používání**: nástroj pro týdenní použití bude strukturálně vykazovat nižší poměr DAU/MAU než nástroj pro denní použití, i když oba fungují přesně podle záměru pro své případy použití; srovnávejte vůči zamýšlené frekvenci produktu, nikoli jedinému univerzálnímu cíli.
- **Používání nekonzistentních definic aktivity v čitateli a jmenovateli**: může vzniknout poměr přilnavosti, který neodráží skutečnou intenzitu zapojení a nelze jej smysluplně porovnávat v čase ani s jinými produkty.
- **Chápání rostoucího poměru přilnavosti jako jednoznačně pozitivního bez kontroly celkového trendu MAU**: rostoucí poměr způsobený zmenšující se, zvykovější jádrovou uživatelskou základnou při klesajícím celkovém MAU je velmi odlišná – a znepokojivější – situace než poměr poháněný skutečně rostoucím denním zapojením ve stabilní nebo rostoucí uživatelské základně.
- **Ignorování vlivů dne v týdnu a sezóny na DAU**: DAU se může u mnoha zdravotních produktů výrazně lišit podle dne v týdnu (pracovní den versus víkend) nebo sezóny; průměrujte DAU přes období, které zachycuje celý přirozený cyklus, a nikoli krátké okno, které může být zkresleno.

## Zdroje

- Recenzovaná a odvětvová literatura o metrikách zapojení mobilních a digitálních produktů, široce používané srovnávací rámce z platforem mobilní analytiky
- Digital Therapeutics Alliance, doporučené postupy pro měření zapojení u digitálních terapeutik
- Recenzovaná literatura o měření zapojení v digitálním zdraví, například studie publikované v Journal of Medical Internet Research (JMIR mHealth and uHealth)

Viz také: [míra udržení uživatelů](../míra-udržení-uživatelů/) a [míra konzistence zapojení pacientů](../míra-konzistence-zapojení-pacientů/), dvě související metriky zapojení, se kterými se tento poměr nejčastěji zaměňuje.
