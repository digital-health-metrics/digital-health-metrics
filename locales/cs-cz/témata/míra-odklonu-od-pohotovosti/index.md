# Míra odklonu od pohotovosti

Míra odklonu od pohotovosti (ED diversion rate) měří podíl kontaktů s pacienty vyřízených nástrojem digitální triáže nebo virtuální péče, které by bez tohoto zásahu pravděpodobně vedly k návštěvě urgentního příjmu (pohotovosti), ale místo toho byly bezpečně vyřešeny cestou s nižší naléhavostí – radou k samoléčbě, termínem u praktického lékaře nebo plánovanou návštěvou urgentní péče. Je to konkrétní, vysoce hodnotná podmnožina přesnosti směrování triáže (viz toto téma), zaměřená výhradně na předejité využití pohotovosti, což je výsledek nejpřímněji spojený s náklady na zdravotní péči i s odlehčením kapacity pohotovosti.

## Proč na ní záleží

Urgentní příjmy patří mezi nejdražší prostředí péče na jedno ošetření a často se využívají pro potíže, které lze bezpečně řešit jinde, takže schopnost nástroje digitální triáže bezpečně odklonit vhodné případy od pohotovosti je jednou z jeho komerčně i provozně nejcennějších schopností – a jednou z nejsnáze sdělitelných plátci nebo zdravotnickému systému, který hodnotí návratnost investice do nástroje. Odklon má ale hodnotu pouze tehdy, je-li bezpečný: nástroj, který agresivně odklání pacienty od pohotovosti za cenu přehlédnutí skutečných akutních stavů, optimalizoval úplně špatnou stranu kompromisu, a proto se míra odklonu od pohotovosti musí vždy vykazovat spolu s bezpečnostní metrikou sledující zmeškané nebo opožděné urgentní příjmy u odkloněných pacientů, a nikoli izolovaně jako čistý úspěch efektivity.

## Jak se počítá

```
Míra odklonu od pohotovosti = kontakty s pacienty bezpečně přesměrované
                              od pohotovosti na vhodnou cestu s nižší
                              naléhavostí / celkový počet kontaktů
                              posouzených jako potenciálně směřující
                              na pohotovost × 100

„Bezpečně přesměrováno“ vyžaduje potvrzení – následným kontaktem nebo
propojenými daty zdravotní dokumentace –, že stav pacienta ve stanoveném
následném okně (např. 72 hodin) ve skutečnosti nevyžadoval akutní péči;
rozhodnutí o odklonu není ověřeno jako bezpečné jen proto, že pacient
poté hned nešel na pohotovost.

Vykazuje se spolu s:
  Míra zmeškaných akutních stavů = odkloněni pacienti, kteří v následném
                                   okně akutní péči potřebovali / celkový
                                   počet odkloněných pacientů × 100
```

## Řešený příklad

Služba digitální triáže posoudí za měsíc 3 000 kontaktů s pacienty, které její klinický algoritmus vyhodnotí jako potenciálně směřující na pohotovost bez zásahu. Z nich je 1 800 přesměrováno na cestu s nižší naléhavostí (míra odklonu 60 %). Následný kontakt s odkloněnou kohortou po 72 hodinách pomocí propojených dat zdravotní dokumentace zjistí, že 45 z 1 800 odkloněných pacientů se v tomto okně na pohotovosti skutečně objevilo (míra zmeškaných akutních stavů 45 / 1 800 × 100 = 2,5 %). Vykazování údaje o odklonu 60 % bez míry zmeškaných akutních stavů 2,5 % by představovalo jen polovinu kompromisu mezi bezpečností a efektivitou, který skutečně určuje, zda je chování nástroje při odklonu správně kalibrováno.

## Zdroje dat a omezení

Potvrzení, že odkloněný pacient následně akutní péči nepotřeboval, závisí na propojených datech – buď na vlastních záznamech pohotovosti téhož zdravotnického systému, na regionální výměně zdravotních informací, nebo na strukturovaném následném telefonátu či průzkumu mezi pacienty. Program odklonu fungující bez kteréhokoli z těchto zdrojů dat nemůže svou bezpečnost skutečně ověřit, pouze ji předpokládat na základě nepřítomnosti stížnosti. Přiměřená míra odklonu a přijatelná míra zmeškaných akutních stavů jsou rozhodnutí klinické politiky, nikoli čistě statistická, a měla by je záměrně stanovit klinické vedení, nikoli ponechat jejich vznik jako vedlejší efekt prahu, který triážní algoritmus používá ve výchozím nastavení. Míru odklonu je třeba vykazovat podle výchozího příznaku nebo kategorie potíží, protože přiměřené míry odklonu se podle stavu enormně liší (drobná tržná rána a bolest na hrudi vyžadují velmi odlišné prahy odklonu).

## Úskalí

- **Vykazování míry odklonu bez propojené bezpečnostní metriky zmeškaných akutních stavů**: vysoká míra odklonu dosažená podtriážováním skutečných akutních stavů není úspěch; obě metriky se musí vždy vykazovat společně.
- **Předpoklad, že nepřítomnost návštěvy pohotovosti znamená bezpečný odklon**: pacient se může dostavit na pohotovost jiného, nepropojeného nemocničního systému, nebo může mít skutečně škodlivý výsledek, aniž se kdy dostaví na jakoukoli pohotovost; bezpečnost ověřujte propojenými daty nebo strukturovaným následným kontaktem, nikoli samotnou absencí návštěvy pohotovosti téhož systému.
- **Nastavení prahu odklonu čistě pro maximalizaci míry odklonu**: algoritmus nebo politika vyladěná na maximální odklon bez odpovídajícího bezpečnostního omezení vymění bezpečnost pacientů za lépe vypadající číslo efektivity.
- **Slučování míry odklonu napříč všemi typy potíží**: přiměřené míry odklonu se podle výchozích potíží obrovsky liší; jediná smíšená míra nemůže ukázat, zda nástroj funguje bezpečně a účinně u konkrétních stavů, na kterých klinicky nejvíce záleží.

## Zdroje

- Agency for Healthcare Research and Quality (AHRQ), výzkum využívání pohotovostí a vhodného přesměrování do jiného prostředí péče
- NHS England, pokyny k NHS 111 a standardům bezpečnosti a účinnosti digitální triáže urgentní péče
- Recenzovaná literatura o výsledcích odklonu od pohotovosti u digitální triáže a virtuální péče, například studie publikované v Annals of Emergency Medicine a npj Digital Medicine

Viz také: [přesnost směrování triáže](../přesnost-směrování-triáže/), širší metrika přesnosti, jejíž konkrétní, z hlediska bezpečnosti kritickou podmnožinou je tato metrika.
