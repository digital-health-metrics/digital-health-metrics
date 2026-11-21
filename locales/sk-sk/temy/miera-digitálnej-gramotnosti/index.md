# Miera digitálnej gramotnosti

Miera digitálnej gramotnosti meria podiel populácie pacientov, ktorí dokážu samostatne a úspešne dokončiť bežné úlohy na platforme digitálneho zdravia — prihlásiť sa, naplánovať termín, pripojiť sa k videonávšteve alebo si prečítať výsledok testu — bez pomoci inej osoby. Odlišuje sa od miery digitálneho prístupu a mala by sa vždy merať osobitne: pacient môže mať smartfón aj širokopásmové pripojenie a napriek tomu nezvládnuť telemedicínsku platformu bez pomoci a zlúčenie oboch metrík skrýva práve tú populáciu, ktorú má táto metrika odhaliť.

## Prečo je dôležitá

Samotný digitálny prístup nezaručuje, že pacient dokáže digitálnu zdravotnú službu účinne používať: pacienti s nižšou zdravotnou gramotnosťou, obmedzenými skúsenosťami s technológiami vo všeobecnosti, kognitívnym alebo zrakovým postihnutím alebo jazykovými bariérami v rozhraní platformy môžu mať plný technický prístup a napriek tomu nedokázať samostatne dokončiť úlohu, a táto medzera systematicky koreluje s tými istými demografickými skupinami, ktoré už čelia iným zdravotným nerovnostiam. Rámec HIMSS Digital Health Equity Measurement Framework považuje digitálnu gramotnosť za samostatný pilier popri prístupe práve z tohto dôvodu: zmenšenie medzery v prístupe bez riešenia medzery v gramotnosti môže zanechať populáciu technicky pripojenú, ale funkčne neschopnú profitovať. Organizácie, ktoré merajú dokončenie úloh a čas do dokončenia bežných akcií na platforme, členené podľa jazyka a socioekonomických ukazovateľov, dokážu identifikovať bariéry gramotnosti a cieliť podporu (zjednodušené rozhrania, asistované zaškolenie, obsah v iných jazykoch) oveľa presnejšie než organizácie, ktoré sa spoliehajú len na metriky prístupu alebo celkové skóre spokojnosti.

## Ako sa počíta

```
Miera digitálnej gramotnosti = pacienti, ktorí samostatne dokončia
                                vymedzenú úlohu bez pomoci / pacienti,
                                ktorí sa o túto úlohu pokúsia × 100

Bežne merané úlohy: prihlásenie do účtu, plánovanie termínu,
pripojenie k videonávšteve, zobrazenie výsledku testu, vyplnenie
vstupného formulára.

Vykazujte za každú úlohu osobitne, nie ako jedno zmiešané skóre,
pretože gramotnosť pri jednoduchých úlohách (prihlásenie) a zložitých
úlohách (vyplnenie viackrokového vstupného formulára) sa podstatne
líši a zmiešanie zakrýva, kde presne bariéra leží.
```

## Prepracovaný príklad

Zdravotnícky systém sleduje pripojenie k videonávšteve ako vymedzenú úlohu v 5 000 naplánovaných telemedicínskych termínoch za mesiac. Z nich 4 100 pacientov sa pripojí úspešne bez hovoru na podporu alebo technickej pomoci počas návštevy (miera digitálnej gramotnosti pre túto úlohu: 82 %). Členenie podľa primárneho jazyka ukazuje mieru 89 % u pacientov hovoriacich anglicky oproti 61 % u pacientov, ktorých primárny jazyk sa líši od predvoleného jazyka rozhrania platformy — rozdiel 28 bodov, ktorý by bol neviditeľný, keby sa vykazovalo len zmiešané číslo 82 %, a ktorý ukazuje priamo na konkrétny, riešiteľný zásah (preložené rozhranie a pokyny), a nie na vágny všeobecný problém gramotnosti.

## Zdroje údajov a výhrady

Údaje o dokončení úloh sa zvyčajne zachytávajú z vlastných záznamov udalostí platformy (dostal sa pacient do videonávštevy, dokončil sa proces plánovania termínu bez opustenia), doplnených údajmi o hovoroch na podporu alebo kontaktoch s helpdeskom na identifikáciu úloh, ktoré sa technicky „dokončili“ len preto, že pacient dostal uprostred živú pomoc. Úloha započítaná ako „dokončená“ čisto zo systémových záznamov môže zakryť, že pacient potreboval telefonát od člena rodiny alebo pracovníka podpory, aby sa tam dostal — skutočne od gramotnosti nezávislé dokončenie by sa malo vymedziť a sledovať osobitne od asistovaného všade, kde platforma dokáže tieto dva prípady rozlíšiť. Digitálna gramotnosť koreluje so zdravotnou a všeobecnou gramotnosťou, no analyticky sa od nich líši; všade, kde sa vyžaduje formálne posúdenie, by sa mal použiť validovaný nástroj (a nie neformálny predpoklad založený len na veku alebo demografii).

## Nástrahy

- **Zamieňanie digitálnej gramotnosti s digitálnym prístupom**: pacient s plným technickým prístupom môže stále postrádať gramotnosť na jeho účinné používanie; ide o samostatné metriky vyžadujúce samostatné zásahy a nikdy by sa nemali vykazovať ako jedno kombinované číslo.
- **Započítavanie asistovaných dokončení ako samostatných úspechov**: ak pacient úlohu dokončí iba s hovorom na podporu alebo s pomocou člena rodiny, je to medzera v gramotnosti, ktorú platforma zakryla, nie vyriešila; rozlišujte asistované od samostatného dokončenia všade, kde to údaje umožňujú.
- **Vykazovanie jedného zmiešaného skóre dokončenia úloh**: gramotnosť pri jednoduchej úlohe (prihlásenie) a zložitej (vyplnenie podrobného vstupného formulára) sa podstatne líši; vykazujte podľa úloh, aby ste identifikovali, kde presne bariéra leží.
- **Predpoklad, že digitálnu gramotnosť predpovedá samotný vek**: hoci vek v súhrne koreluje s nižšou digitálnou gramotnosťou, znalosť jazyka rozhrania platformy a všeobecná oboznámenosť s technológiami sú často silnejšími individuálnymi prediktormi a mali by sa merať priamo, nie odvodzovať z veku.

## Zdroje

- HIMSS, Digital Health Equity Measurement Framework (DHEMF)
- Office of the National Coordinator for Health Information Technology (ONC), výskum použiteľnosti zdravotníckych informačných technológií a digitálnej zdravotnej gramotnosti
- Recenzovaná literatúra o meraní digitálnej zdravotnej gramotnosti a intervenciách, napríklad štúdie publikované v Journal of Medical Internet Research (JMIR)

Pozri tiež: [miera digitálneho prístupu](../miera-digitálneho-prístupu/), predpokladová metrika, s ktorou sa táto najčastejšie — a najčastejšie nesprávne — zamieňa.
