# Zníženie počtu ošetrovacích dní

Zníženie počtu ošetrovacích dní meria celkový počet dní hospitalizácie na lôžku, ktorým sa predišlo presunom vymedzenej epizódy starostlivosti — najčastejšie zotavovania po operácii alebo zvládania akútneho stavu — z tradičného pobytu v nemocnici na alternatívu s digitálnou podporou, ako je virtuálne oddelenie alebo program nemocničnej starostlivosti v domácom prostredí. Je to hlavná kapacitná metrika iniciatív virtuálnych oddelení a nemocničnej starostlivosti doma: prekladá zmenu modelu klinickej starostlivosti priamo do meny (lôžkovej kapacity), s ktorou nemocničné prevádzky a systémoví plánovači skutočne pracujú.

## Prečo je dôležité

Lôžková kapacita je v každom nemocničnom systéme jedným z najviac obmedzených a najdrahších zdrojov. Hlavná hodnota virtuálneho oddelenia alebo programu nemocničnej starostlivosti doma spočíva v tom, že dokáže bezpečne poskytnúť vymedzenú úroveň klinickej starostlivosti bez obsadenia fyzického lôžka, a uvoľniť tak kapacitu pre pacientov, ktorých sa nedá zvládnuť inak. Zníženie počtu ošetrovacích dní premieňa často abstraktné tvrdenie („tento program zlepšuje starostlivosť“) na konkrétne prevádzkové číslo, s ktorým môžu priamo pracovať plánovači nemocničnej kapacity, finančné tímy a objednávatelia starostlivosti: dá sa pomocou neho modelovať, či sa investícia do monitorovacieho programu vráti v ušetrených nákladoch na lôžka, a o koľko. Keďže zníženie počtu ošetrovacích dní má hodnotu iba vtedy, ak sa zachová bezpečnosť pacientov, malo by sa vždy vykazovať spolu s metrikou bezpečnostného výsledku (napríklad mierou opätovných hospitalizácií alebo mierou eskalácie do ústavnej starostlivosti) pre tú istú populáciu, nikdy nie namiesto nej.

## Ako sa počíta

```
Zníženie počtu ošetrovacích dní = očakávané ošetrovacie dni pri štandardnej
                                   ústavnej starostlivosti (na základe
                                   historických údajov o dĺžke hospitalizácie
                                   pre zodpovedajúcu kohortu pacientov) −
                                   skutočné ošetrovacie dni využité pacientmi
                                   na virtuálnej/digitálnej trase

Vykazujte za každú klinickú trasu (napr. zotavovanie po operácii, akútna
exacerbácia dýchacieho ochorenia), pretože očakávaná dĺžka hospitalizácie
sa podľa stavu výrazne líši a zlúčené číslo za nesúvisiace trasy nemá
výpovednú hodnotu.
```

## Prepracovaný príklad

Historické údaje nemocnice ukazujú, že pacienti zotavujúci sa po konkrétnom plánovanom chirurgickom výkone majú priemernú dĺžku hospitalizácie 4 dni. Program virtuálneho oddelenia zaradí 150 pacientov zotavujúcich sa po tom istom výkone a prepúšťa ich po priemerne 1,5 dňa v nemocnici, pričom zvyšok zotavovania sa monitoruje na diaľku. Zníženie počtu ošetrovacích dní je (4 − 1,5) × 150 = 375 ošetrovacích dní za sledované obdobie. Toto číslo by sa malo vykázať spolu s 30-dňovou mierou eskalácie do ústavnej starostlivosti a mierou opätovných hospitalizácií kohorty virtuálneho oddelenia pre tých istých 150 pacientov, pretože úspora ošetrovacích dní za cenu podstatne vyššej miery eskalácií alebo opätovných hospitalizácií nie je klinickým úspechom, na aký by inak poukazovalo hlavné číslo.

## Zdroje údajov a výhrady

Očakávané ošetrovacie dni vyžadujú dôveryhodný historický základ, ideálne zo zodpovedajúcej kohorty pacientov liečených štandardnou ústavnou starostlivosťou s podobnými klinickými charakteristikami (vek, komorbidita, typ výkonu, závažnosť) ako populácia virtuálneho oddelenia, pretože porovnanie s nezodpovedajúcim historickým priemerom hrozí nadhodnotením alebo podhodnotením skutočného zníženia, ak je digitálne vedená kohorta systematicky zdravšia alebo chorejšia než historická porovnávacia skupina. Skutočné ošetrovacie dni využité na digitálnej trase pochádzajú z vlastného systému nemocnice na evidenciu príjmu, prepustenia a presunu (ADT); každá eskalácia späť do ústavnej starostlivosti počas monitorovaného zotavovania by sa mala programu započítať čestne (ako využité ošetrovacie dni, nie ich vylúčením), pretože vylúčenie eskalácií z výpočtu by umelo nafúklo zdanlivé zníženie.

## Nástrahy

- **Vykazovanie zníženia počtu ošetrovacích dní bez zodpovedajúceho bezpečnostného porovnania**: virtuálne oddelenie, ktoré šetrí ošetrovacie dni, no má podstatne horšiu mieru eskalácií alebo opätovných hospitalizácií než štandardná starostlivosť, nepreukázalo skutočné zlepšenie; vždy vykazujte obe hodnoty spolu.
- **Používanie nezodpovedajúceho alebo zastaraného historického základu**: porovnanie s historickou kohortou s odlišnou skladbou prípadov, záťažou komorbidít alebo obdobím klinickej praxe môže výrazne nadhodnotiť alebo podhodnotiť skutočnú úsporu ošetrovacích dní.
- **Vylúčenie eskalácií späť do ústavnej starostlivosti z výpočtu**: pacient, ktorý je monitorovaný virtuálne, no uprostred zotavovania je presunutý na lôžko, by mal mať tieto ošetrovacie dni započítané v neprospech programu, nie ticho vynechané z analýzy.
- **Zlučovanie trás s veľmi odlišnou očakávanou dĺžkou hospitalizácie**: agregácia zníženia počtu ošetrovacích dní naprieč klinicky nesúvisiacimi trasami (napríklad zlúčenie zotavovania po operácii a zvládania chronického dýchacieho ochorenia) do jedného čísla zakrýva, ktorá konkrétna trasa úsporu skutočne prináša.

## Zdroje

- NHS England, usmernenia k programom virtuálnych oddelení a nemocničnej starostlivosti doma a štandardy vykazovania vplyvu na ošetrovacie dni
- Recenzovaná literatúra o modeloch nemocničnej starostlivosti doma a virtuálnych oddelení, napríklad štúdie publikované v JAMA Internal Medicine a npj Digital Medicine
- Institute for Healthcare Improvement (IHI), usmernenia k riadeniu kapacity a alternatívnym modelom starostlivosti

Pozri tiež: [miera opätovných hospitalizácií](../miera-opätovných-hospitalizácií/), bezpečnostná metrika, ktorá by sa mala vždy vykazovať spolu s každým tvrdením o znížení počtu ošetrovacích dní pre tú istú populáciu pacientov.
