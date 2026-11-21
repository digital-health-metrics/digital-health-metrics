# Míra vyhoření lékařů

Míra vyhoření lékařů měří podíl zdravotníků uvádějících významné příznaky vyhoření – běžně posuzované jako emoční vyčerpání, depersonalizace nebo nízký pocit osobního naplnění pomocí validovaného dotazníku – a v digitálním zdraví se konkrétně sleduje spolu s měřítky zátěže klinických digitálních nástrojů, jako je čas strávený administrativou nebo dokumentací v elektronické zdravotní dokumentaci (EHR). V rámci metrik digitálního zdraví existuje proto, že špatně navržený klinický software je dobře zdokumentovaným, měřitelným přispěvatelem k vyhoření a úspěch digitálního zdravotního nástroje by se nikdy neměl posuzovat čistě podle metrik zaměřených na pacienty při ignorování jeho vlivu na zdravotníky, kteří jej musejí obsluhovat.

## Proč na ní záleží

Digitální zdravotní nástroje se často zavádějí s výslovným cílem snížit administrativní zátěž lékařů, ale špatně navržený pracovní postup v elektronické zdravotní dokumentaci, nadměrný objem málo hodnotných klinických upozornění (viz míra ignorování klinických upozornění) nebo těžkopádné telemedicínské rozhraní mohou vyhoření stejně snadno zvýšit jako snížit – a nástroj, který zlepší metriku zapojení pacientů a přitom tiše zvýší dokumentační zátěž lékařů, nepřinesl čistě pozitivní výsledek pro systém péče jako celek. Vyhoření je v klinické literatuře silně spojeno s lékařskými chybami, fluktuací zdravotníků a sníženou kvalitou péče, takže funguje jako předstihový ukazatel následných problémů s bezpečností a udržitelností pracovní síly, a nikoli pouze jako okrajová záležitost pracovní spokojenosti. Každý program digitálního zdraví, který tvrdí, že snižuje klinickou zátěž, by měl být schopen toto tvrzení doložit proti změřené výchozí hodnotě, a nikoli jej pouze uvádět jako záměr návrhu.

## Jak se počítá

```
Míra vyhoření lékařů = zdravotníci s výsledkem nad prahem vyhoření
                       validovaného nástroje / celkový počet dotázaných
                       zdravotníků × 100

Běžné validované nástroje: Maslach Burnout Inventory (MBI),
Professional Fulfillment Index nebo jednopoložková screeningová otázka
na vyhoření validovaná proti úplnějšímu nástroji.

Vykazujte spolu s náhradním ukazatelem digitální zátěže, pokud je
k dispozici:
  Čas v EHR na jeden kontakt s pacientem
  Čas dokumentace mimo plánovanou klinickou dobu
  („pyžamový čas“)
```

## Řešený příklad

Nemocniční systém dotazuje 300 lékařů pomocí Maslach Burnout Inventory před zavedením nástroje pro okolní (ambient) klinickou dokumentaci, který má zkrátit čas psaní zpráv. Na začátku je 135 lékařů (45 %) nad prahem vyhoření a data z auditního protokolu EHR ukazují v průměru 58 minut dokumentace denně na lékaře mimo plánovanou klinickou dobu. Šest měsíců po zavedení nástroje opakovaný průzkum týchž lékařů zjistí 108 (36 %) nad prahem vyhoření spolu s poklesem času dokumentace po pracovní době na 34 minut denně. Korelovaný pohyb míry vyhoření i objektivního ukazatele odvozeného z EHR posiluje argument, že nástroj k zlepšení přispívá, ačkoli formální srovnání před/po by mělo zohlednit i další souběžné změny pracovní zátěže ve stejném období.

## Zdroje dat a omezení

Data o vyhoření pocházejí z validovaného nástroje podávaného opakovaně (ročně nebo častěji) a záleží na míře odpovědí: nízká míra odpovědí riskuje zkreslení z neodpovědi, kdy jsou nejvíce vyhoření zdravotníci (s nejmenší kapacitou vyplnit další dotazník) systematicky podreprezentováni, což podhodnotí skutečnou míru. Náhradní ukazatele digitální zátěže odvozené z EHR – čas v systému, čas dokumentace po pracovní době, počet kliknutí na kontakt – jsou užitečným objektivním, průběžně dostupným doplňkem periodických dat z dotazníků, ale měly by být před použitím jako spolehlivý samostatný ukazatel vyhoření v dané organizaci validovány proti vyhoření uváděnému v dotazníku, protože vztah mezi časem v systému a skutečným vyhořením se může lišit podle oboru a individuálního stylu práce.

## Úskalí

- **Spoléhání pouze na náhradní ukazatele z EHR**: čas v systému a počty kliknutí korelují s vyhořením v souhrnu, ale nejsou totéž co vyhoření samo a mohou být zavádějící u jednotlivých lékařů nebo oborů se skutečně odlišnými dokumentačními potřebami.
- **Nízká míra odpovědí v dotazníku maskující skutečnou míru**: zdravotníci nejvíce postižení vyhořením mají často nejmenší kapacitu odpovědět na dobrovolný dotazník, což zkresluje výsledek s nízkou mírou odpovědí směrem k uměle zdravěji vypadajícímu údaji.
- **Přisuzování změny vyhoření jedinému nástroji bez zohlednění zavádějících faktorů**: vyhoření ovlivňuje mnoho souběžných faktorů (obsazení služeb, objem pacientů, organizační změny); srovnání před/po kolem zavedení jednoho nástroje by mělo tyto faktory kontrolovat, kde je to možné, a nepředpokládat jedinou příčinu.
- **Chápání vyhoření čistě jako otázky individuální odolnosti**: výzkum vyhoření soustavně zjišťuje, že hlavními hybateli jsou pracovní zátěž, návrh systému a organizační faktory; podání jako problému samotného zdravotníka odklání zásah pryč od digitálních nástrojů a pracovních postupů, které bývají skutečnou základní příčinou.

## Zdroje

- Maslach Burnout Inventory (MBI), validovaný dotazník a pokyny k vyhodnocení
- American Medical Association (AMA), výzkum vyhoření lékařů a program zlepšování praxe STEPS Forward
- Recenzovaná literatura o použitelnosti EHR, dokumentační zátěži a vyhoření zdravotníků, například studie publikované v JAMIA a Annals of Internal Medicine

Viz také: [míra ignorování klinických upozornění](../míra-ignorování-klinických-upozornění/), protože únava z upozornění je jedním z konkrétnějších, měřitelných přispěvatelů k vyhoření zdravotníků, který mohou digitální nástroje přímo řešit.
