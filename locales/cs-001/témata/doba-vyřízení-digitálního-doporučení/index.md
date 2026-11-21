# Doba vyřízení digitálního doporučení

Doba vyřízení digitálního doporučení je čas, který uplyne od odeslání elektronického doporučení odesílajícím lékařem do okamžiku, kdy přijímající služba doporučení vytřídí a přijme, odmítne nebo objedná. Je to procesní (tokové) metrika odlišná od celkové čekací doby pacienta a patří k nejjasnějším místům, kde lze ukázat, že změna digitálního systému (strukturované e-doporučení, triáž na základě snímků, standardizované formuláře doporučení) hýbe provozním číslem, a nikoli jen skóre spokojenosti.

## Proč na ní záleží

Pomalý nebo značně proměnlivý krok triáže přidává zpoždění ještě předtím, než se pacient vůbec zařadí na klinickou čekací listinu, a protože toto zpoždění vzniká před zahájením jakékoli klinické péče, jde o čisté procesní plýtvání, které digitální nástroje dokážou dobře odstranit. Systémy doporučení, které vynucují cyklus „vrácení odesílateli“ kvůli chybějícím informacím, vytvářejí smyčky přepracování, které snadno uniknou, pokud se doba vyřízení měří jen u doporučení, která projdou napoprvé bez vrácení. Tam, kde služba zavedla strukturované digitální formuláře doporučení, povinná pole nebo triáž na základě snímků (například v teledermatologii), je doba vyřízení obvykle nejpřesvědčivější jednotlivou metrikou pro prokázání přínosu, protože ji lze před změnou i po ní měřit stejným nástrojem.

## Jak se počítá

```
Doba vyřízení = časová značka (rozhodnutí triáže) − časová značka (odeslání doporučení)

Vykazuje se medián a vysoký percentil (běžně 90.), nikoli jen průměr,
protože rozdělení je silně zešikmeno doprava kvůli vráceným
nebo složitým doporučením.

Zvažte časy dílčích fází, pokud je systém zachytává:
  Odeslání → přijetí službou
  Přijetí → rozhodnutí triáže
  Rozhodnutí triáže → objednaný termín (kde je to relevantní)
```

## Řešený příklad

Auditní stopa systému e-doporučení ukazuje medián doby od odeslání do rozhodnutí triáže 1,8 dne napříč všemi obory, s 90. percentilem 6 dnů, způsobeným hlavně doporučeními vracenými odesílateli kvůli chybějícím klinickým informacím. Teledermatologická cesta využívající triáž na základě snímků na téže platformě dosahuje mediánu doby vyřízení 4 hodiny a 90. percentilu 1 den, protože fotografie a strukturovaná anamnéza téměř vždy stačí pro rozhodnutí triáže bez další korespondence.

## Zdroje dat a omezení

Primárním zdrojem je auditní stopa systému e-doporučení nebo správy doporučení s časovými značkami odeslání a rozhodnutí. Organizace by měly potvrdit, zda se „hodiny“ zastavují, když je doporučení vráceno pro doplnění informací, nebo běží nepřetržitě, protože tyto dvě definice dávají pro tentýž proces podstatně odlišné hodnoty. Dobu vyřízení je třeba vykazovat důsledně buď v kalendářním čase, nebo v pracovních hodinách, protože vliv víkendů a svátků by jinak mohl zkreslit srovnání mezi službami s odlišným pracovním režimem.

## Úskalí

- **Měření jen „čistých“ doporučení**: vyloučení odmítnutých nebo vrácených doporučení z výpočtu skrývá zátěž přepracování, kterou mají digitální nástroje často právě snižovat.
- **Vykazování průměru místo mediánu a percentilů**: malý počet dlouho vyřizovaných, vrácených doporučení vytáhne průměr daleko nad skutečnou zkušenost typického pacienta.
- **Záměna doby vyřízení s celkovou čekací dobou**: doba vyřízení zahrnuje jen krok triáže; celková zkušenost pacienta zahrnuje i navazující klinickou čekací listinu, což je samostatná metrika podléhající samostatným kapacitním omezením.
- **Nerozlišování dílčích fází**: služba, která měří jen celkový čas, nemůže poznat, zda pomalý údaj způsobují odesílatelé zasílající neúplné informace, kapacita triáže přijímající služby, nebo obojí.

## Zdroje

- NHS England, statistiky a specifikace služby e-Referral Service (e-RS)
- Recenzovaná literatura o systémech správy elektronických doporučení a digitálních cestách triáže, včetně teledermatologie
- ONC / HealthIT.gov, pokyny k interoperabilitě a koordinaci doporučení
