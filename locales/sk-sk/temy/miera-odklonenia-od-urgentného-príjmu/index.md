# Miera odklonenia od urgentného príjmu

Miera odklonenia od urgentného príjmu (ED) meria podiel kontaktov s pacientmi vybavených digitálnym triážnym alebo virtuálnym nástrojom starostlivosti, ktoré by bez tejto intervencie pravdepodobne skončili návštevou urgentného príjmu, no namiesto toho boli bezpečne zvládnuté nižšou úrovňou starostlivosti — radou na samoliečbu, termínom u praktického lekára alebo naplánovanou návštevou urgentnej ambulancie. Je to konkrétna, vysoko hodnotná podmnožina presnosti smerovania triáže (pozri danú tému) zameraná výlučne na predchádzanie využitiu urgentného príjmu, čo je výsledok najpriamejšie spojený s nákladmi na zdravotnú starostlivosť aj s odľahčením kapacity urgentného príjmu.

## Prečo je dôležitá

Urgentné príjmy patria na jednu návštevu medzi najdrahšie prostredia starostlivosti a často sa využívajú pri problémoch, ktoré by sa dali bezpečne zvládnuť inde, a schopnosť digitálneho triážneho nástroja bezpečne presmerovať vhodné prípady mimo urgentného príjmu je preto jednou z jeho komerčne aj prevádzkovo najcennejších schopností — a jednou z najľahšie komunikovateľných platiteľovi alebo zdravotníckemu systému, ktorý hodnotí návratnosť investície do nástroja. Odklonenie má však hodnotu len vtedy, ak je bezpečné: nástroj, ktorý agresívne odkláňa pacientov od urgentného príjmu za cenu prehliadnutia skutočných urgentných stavov, optimalizoval úplne nesprávnu stranu kompromisu, a preto sa miera odklonenia od urgentného príjmu musí vždy vykazovať spolu s bezpečnostnou metrikou sledujúcou prehliadnuté alebo oneskorené urgentné prezentácie medzi odklonenými pacientmi, a nie izolovane ako čistý efektivitný úspech.

## Ako sa počíta

```
Miera odklonenia od ED = kontakty s pacientmi bezpečne presmerované od ED
                          na vhodnú trasu s nižšou naliehavosťou / všetky
                          kontakty s pacientmi posúdené ako potenciálne
                          smerujúce na ED × 100

„Bezpečne presmerované“ vyžaduje potvrdenie, prostredníctvom následného
sledovania alebo prepojených údajov zo zdravotnej dokumentácie, že stav
pacienta v skutočnosti nevyžadoval pohotovostnú starostlivosť v rámci
vymedzeného okna sledovania (napr. 72 hodín) — rozhodnutie o odklonení
nie je overené ako bezpečné len preto, že pacient hneď potom nešiel na ED.

Vykazujte spolu s:
  Mierou prehliadnutých urgentných stavov = odklonení pacienti, ktorí
                          v okne sledovania potrebovali pohotovostnú
                          starostlivosť / všetci odklonení pacienti × 100
```

## Prepracovaný príklad

Digitálna triážna služba posúdi za mesiac 3 000 kontaktov s pacientmi, ktoré jej klinický algoritmus vyhodnotí ako potenciálne smerujúce na ED, ak sa nezasiahne. Z nich 1 800 je presmerovaných na trasu s nižšou naliehavosťou (miera odklonenia 60 %). Sledovanie odklonenej kohorty po 72 hodinách pomocou prepojených údajov zo zdravotnej dokumentácie zistí, že 45 z 1 800 odklonených pacientov sa v tomto okne následne dostavilo na ED (miera prehliadnutých urgentných stavov 45 / 1 800 × 100 = 2,5 %). Vykázanie čísla odklonenia 60 % bez miery prehliadnutých urgentných stavov 2,5 % by predstavilo len polovicu kompromisu medzi bezpečnosťou a efektivitou, ktorý skutočne určuje, či je správanie nástroja pri odkláňaní vhodne nastavené.

## Zdroje údajov a výhrady

Potvrdenie, že odklonený pacient následne nevyžadoval pohotovostnú starostlivosť, závisí od prepojených údajov — buď z vlastných záznamov ED toho istého zdravotníckeho systému, z regionálnej výmeny zdravotných informácií, alebo zo štruktúrovaného telefonického či prieskumového sledovania pacienta — a program odklonenia, ktorý nemá žiadny z týchto zdrojov údajov, nemôže svoju bezpečnosť skutočne overiť, iba ju predpokladať na základe absencie sťažnosti. Vhodná miera odklonenia a prijateľná miera prehliadnutých urgentných stavov sú rozhodnutia klinickej politiky, nie čisto štatistické, a mali by ich zámerne určiť klinické vedenie, a nenechať ich vzniknúť ako vedľajší účinok toho, aký prah triážny algoritmus náhodou predvolene používa. Mieru odklonenia by sa malo vykazovať podľa kategórie hlavného príznaku alebo ťažkosti, pretože vhodné miery odklonenia sa podľa stavu enormne líšia (drobná rezná rana a bolesť na hrudi si vyžadujú veľmi odlišné prahy odklonenia).

## Nástrahy

- **Vykazovanie miery odklonenia bez prepojenej bezpečnostnej metriky prehliadnutých urgentných stavov**: vysoká miera odklonenia dosiahnutá poddimenzovanou triážou skutočných urgentných stavov nie je úspechom; obe metriky sa musia vždy vykazovať spolu.
- **Predpoklad, že absencia návštevy ED znamená bezpečné odklonenie**: pacient sa môže dostaviť na ED iného, neprepojeného nemocničného systému alebo môže mať skutočne škodlivý výsledok bez toho, aby sa vôbec dostavil na akýkoľvek ED; bezpečnosť overujte prepojenými údajmi alebo štruktúrovaným sledovaním, nie samotnou absenciou návštevy ED v tom istom systéme.
- **Nastavenie prahu odklonenia čisto na maximalizáciu miery odklonenia**: algoritmus alebo politika vyladené na maximalizáciu odklonenia bez zodpovedajúceho bezpečnostného obmedzenia vymenia bezpečnosť pacientov za lepšie vyzerajúce číslo efektivity.
- **Zlučovanie miery odklonenia naprieč všetkými typmi ťažkostí**: vhodné miery odklonenia sa podľa hlavnej ťažkosti obrovsky líšia; jedna zlúčená miera nedokáže ukázať, či nástroj funguje bezpečne a účinne pre konkrétne stavy, na ktorých klinicky najviac záleží.

## Zdroje

- Agency for Healthcare Research and Quality (AHRQ), výskum využívania urgentných príjmov a vhodného presmerovania do správneho prostredia starostlivosti
- NHS England, usmernenia k NHS 111 a štandardom bezpečnosti a účinnosti digitálnej urgentnej triáže
- Recenzovaná literatúra o výsledkoch odklonenia od ED pri digitálnej triáži a virtuálnej starostlivosti, napríklad štúdie publikované v Annals of Emergency Medicine a npj Digital Medicine

Pozri tiež: [presnosť smerovania triáže](../presnosť-smerovania-triáže/), širšia metrika presnosti, ktorej je táto konkrétnou, z hľadiska bezpečnosti kritickou podmnožinou.
