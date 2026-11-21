# Triázs-irányítási pontosság

A triázs-irányítási pontosság azon betegtalálkozók hányada, amelyekben az automatikus vagy MI-támogatott triázseszköz helyesen irányítja a beteget a megfelelő ellátási szintre és környezetbe – például öngondoskodásra, alapellátásra, sürgősségi ellátásra (urgent care) vagy sürgősségi osztályra –, klinikailag validált referenciaszabványhoz mérve. Ez a biztonsági és hatékonysági mutató minden digitális „bejárati ajtó”, tünetellenőrző vagy MI-alapú triázsrendszer esetében: az eszköz teljes értékajánlata azon áll, hogy a betegeket helyesen, gyorsan és következetesen irányítja.

## Miért fontos

A pontatlan triázseszköz mindkét irányban kárt okoz: az alultriázsolás (a beteget a szükségesnél alacsonyabb ellátási szintre irányítja) késleltetheti egy valódi sürgősség kezelését, míg a túltriázsolás (a beteget a szükségesnél magasabb ellátási szintre irányítja) a szűkös sürgősségi és sürgős ellátási kapacitást pazarolja, és növeli a költséget és a beteg szorongását klinikai haszon nélkül. Mivel ennek a két hibamódnak annyira eltérőek a következményei, a triázs-irányítási pontosságot mindig a hibák irányával együtt kell jelenteni, nem egyetlen összesített pontossági számként, amely elrejti, hogy az eszköz biztonságosan vagy veszélyesen téved. Az MI-triázseszközt bevezetés előtt értékelő szabályozók és egészségügyi rendszerek egyre inkább megkövetelik ezt a fajta rétegzett pontossági jelentést a klinikai jóváhagyás feltételeként, különösen a klinikustól bármilyen fokú autonómiával működő eszközöknél.

## Hogyan számítják ki

```
Triázs-irányítási pontosság = helyesen irányított találkozók / összes
                               triázsolt találkozó × 100

Az alultriázsolást és a túltriázsolást külön jelentse:
  Alultriázsolási arány = a referenciaszabványnál alacsonyabb
                           sürgősségi szintre irányított találkozók /
                           összes triázsolt találkozó × 100
  Túltriázsolási arány  = a referenciaszabványnál magasabb sürgősségi
                           szintre irányított találkozók / összes
                           triázsolt találkozó × 100

A referenciaszabvány jellemzően ugyanazon eset visszatekintő klinikusi
felülvizsgálata, lehetőség szerint az eszköz kimenetét nem ismerve.
```

## Kidolgozott példa

Egy MI-alapú tünetellenőrző eszköz egy hónapban 5000 betegtalálkozót triázsol. Ezek közül 500 véletlenszerű mintájának vak klinikusi felülvizsgálata azt találja, hogy 430-at a helyes sürgősségi szintre irányítottak (pontosság 86%), 45-öt alultriázsoltak (9%), és 25-öt túltriázsoltak (5%). A 9%-os alultriázsolási arány az a szám, amelyet a legsürgősebben meg kell vizsgálni, mivel olyan találkozókat képvisel, ahol a beteget esetleg a ténylegesen szükségesnél kevésbé sürgős ellátásra irányították; az 5%-os túltriázsolási arány kapacitási és költségaggály, de nem közvetlen biztonsági.

## Adatforrások és megszorítások

Az a referenciaszabvány, amelyhez a triázspontosságot mérik, rendkívül fontos: az egyetlen klinikus általi felülvizsgálat bevezeti annak a klinikusnak a saját megítélési változékonyságát, így a hiteles pontossági szám általában vagy több, dokumentált megegyezési mutatóval rendelkező független értékelőt, vagy egy későbbi, megerősített klinikai kimenettel (milyen ellátásra volt a betegnek ténylegesen szüksége, utólag megállapítva) való összehasonlítást igényel. A mintavétel is számít: a találkozók kényelmi mintájának vagy csak a szokatlannak jelölteknek a felülvizsgálata nem ad olyan számot, amely általánosítható az eszköz összesített teljesítményére. A pontossági számokat a jelentkező tünet vagy panasz kategóriája szerint külön kell jelenteni, ahol az alapul szolgáló esetszám ezt lehetővé teszi, mivel a triázseszközök ritkán teljesítenek egyenletesen minden betegségnél.

## Buktatók

- **Egyetlen összevont pontossági szám jelentése**: az alultriázsolás és a túltriázsolás egyetlen számba vonása elrejti, hogy az eszköz hibái a veszélyesebb hibamód felé hajlanak-e; mindig külön jelentse őket.
- **Egyetlen, nem vak értékelő használata referenciaszabványként**: ez csendben a pontossági számot afelé torzíthatja, amit az az értékelő maga tett volna, független klinikai szabvány helyett.
- **Kizárólag visszatekintő, kényelmes adatokon való validálás**: az eszköz valós irányítási pontossága élő, kétértelmű betegbevitel mellett gyakran lényegesen eltér a fejlesztés során összeállított, gondosan válogatott validációs készleten mért pontosságától.
- **A bevezetés utáni teljesítményeltolódás figyelmen kívül hagyása**: az MI-triázsmodell pontossága idővel romolhat, ahogy a betegpopulációk, a jelentkező tünetek vagy az ellátási útvonalak elérhetősége változnak; a pontosságot rendszeresen újra kell mérni, nem egyszer validálni és stabilnak feltételezni.

## Források

- ONC / HealthIT.gov, a klinikai döntéstámogatás és az MI-alapú eszközök biztonságára és minőségbiztosítására vonatkozó útmutató
- Szakértők által lektorált szakirodalom a tünetellenőrzők és MI-triázseszközök pontosságáról, például a JAMIA, az npj Digital Medicine és a BMJ Health & Care Informatics folyóiratban megjelent tanulmányok
- NHS England, a digitális triázs- és távkonzultációs eszközök klinikai biztonságára vonatkozó útmutató (DCB0129/DCB0160 klinikai kockázatkezelési szabványok)

Lásd még: [digitális beutaló átfutási idő](../digitális-beutaló-átfutási-idő/), a triázsdöntést közvetlenül követő folyamatmutató.
