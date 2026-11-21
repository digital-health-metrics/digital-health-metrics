# Miera adherencie k liečbe

Miera adherencie k liečbe meria, v akom rozsahu pacient užíva predpísaný liek podľa predpisu, najčastejšie vyjadrená ako podiel dní vo vymedzenom období, počas ktorých mal pacient k dispozícii svoj liek tak, ako bol predpísaný. Je to jedna z najdôležitejších metrík digitálneho zdravia, pretože neadherencia je častá, pri správnej podpore do veľkej miery predchádzateľná a priamo súvisí s horšími klinickými výsledkami a vyššími následnými nákladmi — a práve túto medzeru majú zmenšovať aplikácie s pripomienkami liekov, inteligentné fľaše na lieky a impulzy lekární pri opätovnom výdaji.

## Prečo je dôležitá

Orgány verejného zdravia odhadujú, že neadherencia k chronickej liečbe dosahuje pri niektorých ochoreniach až 50 %, a je jednou z hlavných predchádzateľných príčin zbytočných hospitalizácií, progresie ochorenia a zlyhania liečby, ktoré sa nesprávne pripisuje samotnému lieku, a nie nepravidelnému užívaniu. Digitálne nástroje adherencie existujú práve na zmenšenie tejto medzery, a preto je pri každom programe, ktorý zahŕňa liekovú zložku, miera adherencie zvyčajne najrozhodujúcejšou jednotlivou metrikou: kauzálne stojí pred biometrickým zlepšením, opätovnou hospitalizáciou a väčšinou ďalších metrík klinických výsledkov, ktoré by program inak mohol vykazovať. Program, ktorý zlepšuje zapojenie alebo spokojnosť, no neposúva adherenciu, pravdepodobne ešte nepreukázal vierohodný mechanizmus klinického prínosu.

## Ako sa počíta

```
Podiel pokrytých dní (PDC) = dni v období s liekom k dispozícii
                              (na základe počtu dní zásoby z výdajov) /
                              dni v sledovanom období × 100

Pomer držby lieku (MPR) = celkový počet dní zásoby získaných počas
                           obdobia / dni v období × 100 (môže presiahnuť
                           100 % pri predčasných výdajoch; z tohto dôvodu
                           sa vo všeobecnosti uprednostňuje PDC)

Pacient sa zvyčajne klasifikuje ako „adherentný“ pri hranici PDC ≥ 80 %
podľa široko používanej konvencie mier kvality.
```

## Prepracovaný príklad

Pacientovi je predpísaný denný chronický liek počas 90-dňového sledovaného obdobia. Záznamy o výdaji z lekárne ukazujú, že pacient získal dostatok lieku na pokrytie 76 z týchto 90 dní, pričom boli dve medzery: 9-dňová medzera po vyčerpaní zásoby pred opätovným výdajom a 5-dňová medzera okolo hospitalizácie. PDC je 76 / 90 × 100 = 84 %, čo prekračuje konvenčnú hranicu adherencie 80 %. Keby sa tie isté medzery merali pomocou MPR na základe vydaných dní zásoby, a nie skutočne pokrytých dní, predčasný výdaj inde v období by mohol posunúť pomer nad 100 %, čo ukazuje, prečo je PDC konzervatívnejšou a vo všeobecnosti uprednostňovanou mierou.

## Zdroje údajov a výhrady

Štandardným zdrojom sú údaje z nárokov lekární alebo údaje o výdaji (od manažéra lekárenských benefitov alebo z prepojeného lekárenského systému), pretože odrážajú to, čo pacient skutočne získal, a nie to, čo mu bolo predpísané; samotné údaje o predpisoch nadhodnocujú adherenciu, pretože nepotvrdzujú, že si pacient liek vôbec vyzdvihol. Digitálne nástroje adherencie — inteligentné fľaše na lieky, prehltnuteľné senzory, pripojené inteligentné inhalátory, ktoré zaznamenávajú každé použitie pri respiračných ochoreniach, ako sú astma a CHOCHP, a kontroly v aplikácii — ponúkajú údaje s vyšším rozlíšením o tom, či bola dávka skutočne užitá, a nie len získaná, no používa ich malá, potenciálne nereprezentatívna menšina pacientov, takže zmiešanie adherencie potvrdenej zariadením s PDC založeným na nárokoch naprieč populáciou vyžaduje opatrnosť pri interpretácii. Adherencia by sa mala merať počas obdobia dostatočne dlhého na vyhladenie jednotlivých vynechaných dávok, ale dostatočne krátkeho na zistenie významného poklesu predtým, než spôsobí klinickú ujmu — pri chronických liekoch sú bežné 90-dňové kĺzavé okná.

## Nástrahy

- **Používanie MPR bez uvedenia, že môže presiahnuť 100 %**: nevysvetlené pomery nad 100 % z predčasných výdajov alebo hromadenia zásob robia porovnanie medzi pacientmi a obdobiami nespoľahlivým, pokiaľ sa nepoužije PDC alebo sa pomer výslovne neohraničí.
- **Považovanie údajov o predpisoch alebo objednávkach za dôkaz adherencie**: predpis vypísaný alebo odoslaný do lekárne nehovorí nič o tom, či si pacient liek vyzdvihol alebo užil; túto medzeru uzatvárajú len údaje o výdaji alebo zo zariadenia.
- **Bezvýberové uplatňovanie jednej hranice adherencie na všetky ochorenia**: klinický dôsledok vynechania 20 % dávok sa podľa triedy liekov enormne líši (napr. antikoagulanciá oproti statínom), takže jedna univerzálna hranica 80 % môže pri niektorých liekoch podhodnotiť alebo nadhodnotiť klinické riziko.
- **Ignorovanie zmien a ukončenia liečby**: pacient, ktorému je klinicky a vhodne zmenený liek, sa môže javiť ako veľký pokles adherencie pri pôvodnom lieku, ak sa zmena vo výpočte nezohľadní.

## Zdroje

- Pharmacy Quality Alliance (PQA), špecifikácie miery Proportion of Days Covered
- Centers for Medicare & Medicaid Services (CMS), miery adherencie k liekom v Star Ratings
- Recenzovaná literatúra o meraní adherencie k liečbe a digitálnych intervenciách adherencie, napríklad štúdie publikované v Journal of Managed Care & Specialty Pharmacy

Pozri tiež: [miera zlepšenia biometrických ukazovateľov](../miera-zlepšenia-biometrických-ukazovateľov/), ktorej hlavným faktorom je adherencia k liečbe chronických ochorení.
