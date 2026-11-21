# Doba do zásahu

Doba do zásahu je čas, který uplyne od vygenerování automatického zdravotního upozornění (například když zařízení pro vzdálený monitoring zachytí vitální funkci mimo rozmezí nebo když nástroj digitální triáže označí pacienta se zhoršujícím se stavem) do okamžiku, kdy člen klinického týmu skutečně zahájí reakci. Je to procesní metrika, která určuje, zda systém automatických upozornění naplňuje svůj základní příslib: zachytit problém dříve, než by to umožnil tradiční model naplánovaných kontrol nebo telefonátů z iniciativy pacienta.

## Proč na ní záleží

Systém upozornění, který vygeneruje klinicky správné upozornění, po němž nenásleduje včasná reakce, ve skutečnosti bezpečnost pacientů nezlepšil. Celá hodnota vzdáleného monitoringu a automatických upozornění spočívá v tom, že smyčku uzavře rychleji než alternativní, nemonitorovaná cesta. Protože různé závažnosti upozornění vyžadují různou naléhavost reakce, měla by se doba do zásahu vždy vykazovat po úrovních závažnosti, a nikoli jako jediný průměr; rychlý průměr za všechna upozornění totiž může skrývat nebezpečně pomalou reakci na malý počet nejzávažnějších z nich. Tato metrika je také jedním z nejjasnějších a nejpřesvědčivějších způsobů, jak klinickému vedení a plátcům prokázat hodnotu programu automatického monitoringu, protože ji lze přímo porovnat s předchozí, neautomatizovanou dobou reakce téže organizace v obdobném klinickém scénáři.

## Jak se počítá

```
Doba do zásahu = časová značka (zahájení klinické reakce) −
                 časová značka (vygenerování upozornění)

Vykazuje se medián a vysoký percentil (např. 90.), členěné podle
úrovně závažnosti upozornění, nikoli jako jediný smíšený průměr.

„Zahájení klinické reakce“ je třeba definovat přesně a důsledně –
např. lékař otevře záznam pacienta a jedná, nebo je zdokumentován
pokus o odchozí kontakt – nikoli pouhé zobrazení či potvrzení
upozornění bez jakékoli akce.
```

## Řešený příklad

Systém upozornění programu vzdáleného kardiologického monitoringu označí za měsíc 200 závažných upozornění na arytmii. Medián doby od vygenerování upozornění do chvíle, kdy lékař zahájí odchozí kontakt, je 12 minut, 90. percentil je 38 minut. Historická data stejné populace z předchozí, nemonitorované cesty (kde by se obdobná příhoda obvykle projevila až při příští plánované návštěvě kliniky nebo při příjmu do nemocnice) ukazují medián doby do jakékoli klinické reakce v řádu dnů, nikoli minut. Právě toto srovnání, a ne samotných 12 minut, prokazuje klinickou hodnotu monitorovacího programu; stejně důležitý je i 90. percentil, protože označuje konec rozdělení, tedy upozornění, na která se reagovalo po více než půl hodině, a zasluhuje samostatný rozbor příčin.

## Zdroje dat a omezení

Časové značky vygenerování upozornění pocházejí z vlastního protokolu událostí monitorovací platformy; časové značky klinické reakce obvykle pocházejí z auditní stopy elektronické zdravotní dokumentace nebo z pracovního či úkolového systému péčového týmu. Tyto dva systémy musí mít přesně synchronizovaný čas, aby byl vypočtený interval důvěryhodný. „Zahájení reakce“ vyžaduje přísnou, zdokumentovanou definici, protože lékař, který upozornění pouze zobrazí nebo odmítne bez další akce, představuje zásadně jinou a mnohem méně uklidňující událost než ten, kdo spustí skutečný odchozí kontakt či zásah; jejich směšování by nechalo dobu reakce vypadat lépe, než jaká je klinická realita. Obsazení služeb v noci a o víkendech obvykle dobu do zásahu výrazně ovlivňuje, proto by se tato metrika měla, pokud to objem upozornění dovoluje, vykazovat podle denní doby a dne v týdnu, a nikoli pouze jako nepřetržitý smíšený průměr, který může zakrýt vážný nedostatek reakce mimo pracovní dobu.

## Úskalí

- **Počítání potvrzení upozornění jako reakce**: zobrazení nebo odmítnutí upozornění lékařem není totéž co zahájení klinické reakce; reakci definujte přísně jako zdokumentovanou akci, nikoli pasivní potvrzení.
- **Vykazování jediného smíšeného času za všechny závažnosti**: rychlý průměr za nízce i vysoce závažná upozornění dohromady může zakrýt nebezpečně pomalou reakci právě na upozornění nejvyšší závažnosti, na nichž záleží nejvíce.
- **Ignorování vlivu obsazení služeb**: doba reakce se často výrazně liší podle denní doby a dne v týdnu kvůli obsazení; jediný celkový průměr může skrýt systematický nedostatek reakce mimo pracovní dobu nebo o víkendech.
- **Porovnávání doby do zásahu mezi organizacemi s odlišnými prahy upozornění**: organizace s konzervativnějším (citlivějším) prahem generuje více upozornění s nízkou naléhavostí, což může zředit její průměrnou dobu reakce ve srovnání s organizací s přísnějším prahem, a to nezávisle na skutečné klinické pohotovosti.

## Zdroje

- NHS England, pokyny ke vzdálenému monitoringu a standardům klinické reakce ve virtuálních odděleních
- ONC / HealthIT.gov, pokyny k návrhu a bezpečnosti systémů klinických upozornění
- Recenzovaná literatura o dobách reakce na upozornění při vzdáleném monitoringu pacientů a klinických výsledcích, například studie publikované v npj Digital Medicine

Viz také: [míra dostupnosti zařízení](../míra-dostupnosti-zařízení/), protože spolehlivý údaj o době do zásahu závisí na tom, že monitorovací zařízení je vůbec online a může upozornění vygenerovat.
