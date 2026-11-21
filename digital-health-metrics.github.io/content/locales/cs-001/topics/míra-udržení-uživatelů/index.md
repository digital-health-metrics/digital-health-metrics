# Míra udržení uživatelů

Míra udržení uživatelů (retence) je podíl uživatelů aktivních v počátečním období, kteří zůstávají aktivní i v pozdějším období, a její opak, míra odchodu (churn nebo drop-out), je podíl těch, kteří produkt přestanou používat úplně. Zatímco míra využívání pacientského portálu (viz toto téma) měří, zda pacient digitální zdravotní produkt vůbec smysluplně aktivuje, retence měří, zda jej používá dál – a u každého předplatitelského nebo průběžnou péči doprovázejícího produktu digitálního zdraví je retence obvykle metrikou nejtěsněji spojenou s klinickým dopadem i komerční udržitelností.

## Proč na ní záleží

Produkt digitálního zdraví, který nedokáže uživatele udržet, nemůže přinést trvalý klinický přínos, ať jsou jeho počáteční čísla přijetí nebo aktivace jakkoli silná: nástroj pro řízení chronického onemocnění používaný dva týdny a poté opuštěný sotva pohne biometrickým výsledkem, který závisí na měsících trvalé změny chování. Retence je také jednou z komerčně nejdůležitějších metrik, které firma digitálního zdraví vykazuje investorům a plátcům, protože křivky retence (tvar poklesu v čase, nikoli jen jediné procento retence) odhalují, zda produkt našel skutečně udržitelný vzorec používání, nebo jen zachycuje počáteční zájem poháněný novostí, který předvídatelně vyprchá. Křivka retence, která se po počátečním poklesu vyrovná (pacienti, kteří překonají první měsíc, mají tendenci zůstat), je velmi odlišným a mnohem zdravějším signálem než křivka, která stále klesá bez dna.

## Jak se počítá

```
Míra retence (období N) = uživatelé aktivní v období N, kteří byli aktivní
                          i v počátečním období kohorty / uživatelé
                          v počátečním období kohorty × 100

Míra odchodu = 1 − míra retence (za totéž období)

Vykazujte jako kohortní křivku retence (retence ve dni/týdnu/měsíci
1, 2, 3…), nikoli jako jediný okamžitý údaj, protože jediný snímek
míchá nedávno přidané uživatele (kteří ještě neměli šanci odejít)
s uživateli s dlouhou historií.
```

## Řešený příklad

Aplikace digitálního zdraví zapíše v lednu kohortu 1 000 nových uživatelů. Na konci 1. měsíce je z původních 1 000 stále aktivních 640 (retence v 1. měsíci 64 %). Na konci 3. měsíce zůstává aktivních 410 (retence ve 3. měsíci 41 %). V 6. měsíci zůstává aktivních 380 (retence v 6. měsíci 38 %). Tvar této křivky – strmý počáteční pokles následovaný vyrovnáním mezi 3. a 6. měsícem – naznačuje, že produkt si udržuje stabilní jádro uživatelů, jakmile překonají počáteční překážku přijetí, což je podstatně jiný a povzbudivější signál, než kdyby pokles od 3. do 6. měsíce pokračoval stejným tempem jako od 1. do 3. měsíce.

## Zdroje dat a omezení

Retence se počítá z vlastních protokolů událostí přihlášení nebo aktivity produktu, přičemž „aktivní“ se definuje důsledně (například alespoň jedna kvalifikující relace v období) napříč všemi porovnávanými kohortami. Kohorty by se měly porovnávat na srovnatelném základě – stejná výchozí definice „aktivního“, stejná délka pozorovacího okna – protože i malé definiční rozdíly (30denní versus 28denní měsíce nebo přísnější versus volnější práh „aktivního“) mohou posunout vykázané procento retence o několik bodů bez jakéhokoli skutečného rozdílu v chování uživatelů. Sezónní efekty jsou u zdravotních aplikací vázaných na novoroční předsevzetí nebo konkrétní období osvěty o zdraví běžné, takže meziroční srovnání kohort je obvykle informativnější než srovnávání sousedních kohort z různých částí roku.

## Úskalí

- **Vykazování jediného snímku retence místo křivky**: jediný údaj „X % uživatelů je stále aktivních“ bez tvaru poklesu v čase nedokáže odlišit produkt, který se ustálí (zdravý), od produktu v trvalém úpadku (nezdravý).
- **Změna definice „aktivní“ mezi obdobími vykazování**: uvolnění definice aktivního uživatele (například počítání pasivního otevření aplikace místo dokončené akce) může způsobit, že retence vypadá lépe, ačkoli se skutečné používání vůbec nezměnilo.
- **Ignorování sezónnosti kohort**: porovnávání retence lednové kohorty (často nafouknuté zápisem z novoročních předsevzetí, který přivádí v průměru méně motivovanou kohortu) s kohortou získanou v jinou dobu roku může vést k zavádějícím závěrům o trendu.
- **Míchání organických a placeně získaných kohort**: uživatelé získaní různými kanály se často udržují velmi odlišně; jejich sloučení do jediné souhrnné míry retence může skrýt problém s retencí specifický pro konkrétní kanál.

## Zdroje

- Recenzovaná literatura o zapojení uživatelů do aplikací digitálního zdraví a jejich úbytku, například studie publikované v Journal of Medical Internet Research (JMIR mHealth and uHealth)
- Digital Therapeutics Alliance, doporučené postupy pro měření zapojení a retence u digitálních terapeutik
- Odvětvové srovnávací zprávy o retenci mobilních zdravotních aplikací od analytických platforem a organizací pro výzkum trhu digitálního zdraví

Viz také: [míra konzistence zapojení pacientů](../míra-konzistence-zapojení-pacientů/), která měří kvalitu zapojení mezi udrženými uživateli, na rozdíl od toho, zda vůbec zůstávají zapsáni.
