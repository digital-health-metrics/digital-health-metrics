# Čas vybavenia elektronického odporúčania

Čas vybavenia elektronického odporúčania je čas, ktorý uplynie od odoslania elektronického odporúčania odosielajúcim klinickým pracovníkom do jeho posúdenia (triáže) a následného prijatia, zamietnutia alebo zarezervovania prijímajúcou službou. Je to procesná (tokovou) metrika, odlišná od celkového čakacieho času pacienta, a je to jedno z najjasnejších miest, kde možno ukázať, že zmena digitálneho systému (štruktúrované elektronické odporúčanie, triáž na základe obrazu, štandardizované formuláre odporúčaní) posúva prevádzkové číslo, a nielen skóre spokojnosti.

## Prečo je dôležitý

Pomalý alebo vysoko premenlivý krok triáže pridáva oneskorenie ešte predtým, než sa pacient vôbec zaradí do klinického čakacieho zoznamu, a keďže k tomuto oneskoreniu dochádza pred začiatkom akejkoľvek klinickej starostlivosti, ide o čisté procesné plytvanie, ktoré digitálne nástroje dokážu dobre odstrániť. Systémy odporúčaní, ktoré vynucujú cyklus „vrátenia odosielateľovi“ pre chýbajúce informácie, vytvárajú slučky prepracovania, ktoré sa ľahko prehliadnu, ak sa čas vybavenia meria len pri odporúčaniach, ktoré prejdú na prvý raz bez problémov. Tam, kde služba zaviedla štruktúrované digitálne formuláre odporúčaní, povinné polia alebo triáž na základe obrazu (napríklad v teledermatológii), je čas vybavenia zvyčajne najpresvedčivejšou jednotlivou metrikou na preukázanie prínosu, pretože sa dá merať pred zmenou aj po nej tým istým prístrojovým vybavením.

## Ako sa počíta

```
Čas vybavenia = časová pečiatka (rozhodnutie o triáži) − časová pečiatka
                (odoslanie odporúčania)

Vykazujte medián a vysoký percentil (bežne 90.), nielen priemer, pretože
rozdelenie je silne pravostranne zošikmené vrátenými alebo zložitými
odporúčaniami.

Zvážte časy čiastkových fáz, ak ich systém zaznamenáva:
  Odoslanie → prijaté službou
  Prijatie → rozhodnutie o triáži
  Rozhodnutie o triáži → zarezervovaný termín (ak je to relevantné)
```

## Prepracovaný príklad

Auditná stopa systému elektronických odporúčaní ukazuje medián času od odoslania po rozhodnutie o triáži 1,8 dňa vo všetkých odbornostiach, s 90. percentilom 6 dní, ktorý spôsobujú najmä odporúčania vrátené odosielateľovi pre chýbajúce klinické informácie. Teledermatologická trasa využívajúca triáž na základe obrazu na tej istej platforme dosahuje medián času vybavenia 4 hodiny a 90. percentil 1 deň, pretože fotografia a štruktúrovaná anamnéza takmer vždy stačia na rozhodnutie o triáži bez ďalšej korešpondencie.

## Zdroje údajov a výhrady

Hlavným zdrojom je vlastná auditná stopa systému elektronických odporúčaní alebo správy odporúčaní s časovými pečiatkami odoslania a rozhodnutia; organizácie by mali potvrdiť, či sa „hodiny“ pozastavujú, kým je odporúčanie vrátené kvôli doplneniu informácií, alebo bežia nepretržite, pretože tieto dve definície dávajú pre ten istý podkladový proces podstatne odlišné čísla. Čas vybavenia by sa mal konzistentne vykazovať v kalendárnom alebo v pracovnom čase, pretože víkendové a sviatočné efekty môžu inak skresliť porovnania medzi službami s odlišným pracovným režimom.

## Nástrahy

- **Meranie iba „čistých“ odporúčaní**: vylúčenie zamietnutých alebo vrátených odporúčaní z výpočtu skrýva záťaž prepracovaním, ktorú majú digitálne nástroje často práve znižovať.
- **Vykazovanie priemeru namiesto mediánu a percentilov**: malý počet dlhotrvajúcich, vrátených odporúčaní vytiahne priemer ďaleko nad skutočnú skúsenosť typického pacienta.
- **Zamieňanie času vybavenia s celkovým čakacím časom**: čas vybavenia pokrýva iba krok triáže; celková skúsenosť pacienta zahŕňa aj následný klinický čakací zoznam, čo je samostatná metrika podliehajúca samostatným kapacitným obmedzeniam.
- **Nerozlišovanie čiastkových fáz**: služba, ktorá meria iba čas od začiatku do konca, nedokáže zistiť, či je pomalé číslo spôsobené tým, že odosielatelia posielajú neúplné informácie, kapacitou triáže prijímajúcej služby, alebo oboma.

## Zdroje

- NHS England, štatistiky a špecifikácie služby e-Referral Service (e-RS)
- Recenzovaná literatúra o systémoch správy elektronických odporúčaní a digitálnych trasách triáže vrátane teledermatológie
- ONC / HealthIT.gov, usmernenia k interoperabilite a koordinácii odporúčaní
