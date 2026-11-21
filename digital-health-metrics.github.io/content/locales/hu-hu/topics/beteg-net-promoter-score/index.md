# Beteg Net Promoter Score

A beteg Net Promoter Score (NPS) azt méri, hogy a betegek mennyire hajlandók egy digitális egészségügyi terméket vagy távellátási szolgáltatást másoknak ajánlani, egyetlen felmérési kérdés alapján – „Mennyire valószínű, hogy ajánlaná ezt a szolgáltatást egy barátjának vagy munkatársának?” –, 0-tól 10-ig pontozva. A 9–10 pontot adók „támogatók”, a 7–8 pontot adók „passzívak”, a 0–6 pontot adók „kritikusok”; az NPS a támogatók százalékos aránya mínusz a kritikusok százalékos aránya. Ez a digitális egészségügy legszélesebb körben használt, és egyúttal leggyakrabban bírált betegelégedettségi mutatója, amelyet egyszerűsége miatt értékelnek, de önmagában korlátozottan képes diagnosztizálni a problémákat.

## Miért fontos

Az NPS egyszerű, szabványosított, szervezetek között összehasonlítható elégedettségi jelzést ad a digitális egészségügyi csapatoknak, amely olcsón gyűjthető, és a nem szakértő érdekeltek (vezetők, testületek, megrendelők) számára is első pillantásra értelmezhető, ezért marad népszerű a jól dokumentált módszertani korlátok ellenére. Kifejezetten a távellátási és digitális „bejárati ajtó” termékek esetében az NPS gyakran előrejelzi, hogy a betegek továbbra is a digitális csatornát választják-e a személyes alternatíva helyett, ha mindkettő elérhető, ami közvetlen következményekkel jár a csatornamix- és kapacitástervezésre. Az NPS azonban egyetlen, magas szintű összegző szám: a csökkenő NPS jelzi a csapatnak, hogy valami nincs rendben, de azt nem, hogy mi, ezért mindig nyílt szöveges vélemények vagy részletesebb használhatósági mérőeszköz mellé kell párosítani, hogy cselekvésre alkalmas legyen, ne csupán eredménytáblás szám.

## Hogyan számítják ki

```
NPS = a támogatók % (9–10 pont) − a kritikusok % (0–6 pont)

Az eredmény −100 és +100 közötti szám, nem százalék, bár százalékokból
származik – az NPS-értékhez soha ne fűzzön „%” jelet.

Együtt jelentendő:
  válaszadási arány (a megkérdezett betegek hány %-a válaszolt)
  mintaméret
  a használt kérdés pontos megfogalmazása
```

## Kidolgozott példa

Egy távellátási platform 1000 beteget kérdez meg videókonzultáció után, és 400 választ kap (válaszadási arány 40%). A 400 válaszadó közül 220 ad 9–10 pontot (támogatók, 55%), 100 ad 7–8 pontot (passzívak, 25%), és 80 ad 0–6 pontot (kritikusok, 20%). Az NPS 55 − 20 = 35. Ez a szám csak összefüggésben jelent valamit: a 35-ös NPS erős eredmény lehet a távellátási iparág egészéhez képest, vagy aggasztó visszaesés ugyanezen platform előző negyedévi 48-as pontszámához képest – az NPS sokkal hasznosabb egyetlen termék időbeli trendjeként, mint egy másik termékkel szembeni önálló, egyszeri összehasonlító értékként.

## Adatforrások és megszorítások

Az NPS-t interakció utáni felméréssel gyűjtik, jellemzően közvetlenül egy videóvizit, alkalmazás-munkamenet vagy ellátási epizód után indítva, és a válaszadási arány rendkívül fontos: az alacsony válaszadási arány (jóval a kidolgozott példa mintegy 40%-a alatt) a válaszmegtagadási torzítás kockázatát hordozza, amikor csak az erősen elégedett vagy erősen elégedetlen betegek veszik a fáradságot a válaszadásra, a pontszámot a szélsőségek felé húzva, el a valódi populációs hangulattól. Az NPS szervezetek között, vagy akár egyetlen szervezet különböző csatornái között (például távellátás és személyes ellátás) csak akkor hasonlítható össze érvényesen, ha a kérdés megfogalmazása, időzítése és a felmérési populáció valóban összevethető; ismert, hogy kis megfogalmazásbeli változások mérhetően eltolják a pontszámokat. Az NPS-t magyarázandó kimenetként kell kezelni, nem öncélként – az NPS-felmérést általában kísérő nyílt szöveges megjegyzések rendszerint cselekvésre alkalmasabbak, mint maga a pontszám.

## Buktatók

- **Eltérő kérdésmegfogalmazással vagy időzítéssel gyűjtött NPS-értékek összehasonlítása**: már a felmérés-tervezés csekély különbségei is néhány ponttal eltolhatják a pontszámokat, így a szervezetek közötti NPS-összehasonlítás sokkal kevésbé megbízható, mint amilyennek látszik.
- **A válaszadási arány figyelmen kívül hagyása**: a 10%-os válaszadási arányból számított címszerű NPS sokkal kevésbé megbízható, mint a 60%-osból számított, mivel az alacsony válaszadási arány hajlamos a legszélsőségesebb vélemények irányába torzítani.
- **Az NPS diagnosztikai eszközként kezelése összegző mutató helyett**: a csökkenő NPS jelzi, hogy valami nincs rendben, de soha nem mondja meg, hogy mi; mindig kvalitatív visszajelzéssel vagy részletesebb elégedettségi vagy használhatósági mérőeszközzel kell párosítani az ok azonosításához.
- **Az NPS hajszolása öncélként**: az NPS-szám szűk körű optimalizálása (például úgy, hogy csak szokatlanul pozitív interakciók után kérdezik a betegeket) javíthatja a jelentett pontszámot, miközben a mögöttes betegélmény nem lesz jobb, sőt, akár rosszabbá is válhat.

## Források

- Bain & Company, az eredeti Net Promoter System módszertan és az összehasonlító értékelési útmutató
- Agency for Healthcare Research and Quality (AHRQ), CAHPS (Consumer Assessment of Healthcare Providers and Systems) betegélmény-felmérési program, mint kiegészítő, részletesebb alternatíva
- Szakértők által lektorált szakirodalom a Net Promoter Score egészségügyi alkalmazásáról és korlátairól, például a Journal of Medical Internet Research (JMIR) folyóiratban megjelent tanulmányok

Lásd még: [felhasználó-megtartási arány](../felhasználó-megtartási-arány/), mivel a betegek által jelentett elégedettség és a termék tényleges folyamatos használata gyakran eltér egymástól, és külön jelzésként érdemes követni őket.
