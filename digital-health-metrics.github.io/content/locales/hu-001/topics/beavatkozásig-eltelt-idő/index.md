# Beavatkozásig eltelt idő

A beavatkozásig eltelt idő az automatikus egészségügyi riasztás keletkezésétől – például amikor egy távfelügyeleti eszköz a tartományon kívüli életjelet észlel, vagy egy digitális triázseszköz romló állapotú beteget jelez – addig eltelt idő, amíg egy klinikai csapattag ténylegesen megkezdi a reagálást. Ez az a folyamatmutató, amely eldönti, hogy az automatikus riasztórendszer teljesíti-e alapvető ígéretét: hamarabb észleli-e a problémát, mint azt az ütemezett ellenőrzések vagy a beteg által kezdeményezett telefonhívások hagyományos modellje tenné.

## Miért fontos

Az a riasztórendszer, amely klinikailag helyes riasztást ad, de azt nem követi időben reagálás, valójában nem javította a betegbiztonságot; a távfelügyelet és az automatikus riasztás teljes értékajánlata azon áll, hogy gyorsabban zárja a kört, mint a felügyelet nélküli alternatív útvonal. Mivel a különböző súlyosságú riasztások eltérő sürgősségű reagálást igényelnek, a beavatkozásig eltelt időt mindig súlyossági szintenként kell jelenteni, nem egyetlen átlagként, mert az összes riasztásra számított gyors átlag elrejtheti a legsúlyosabb, kis számú riasztásra adott veszélyesen lassú reagálást. Ez a mutató az automatikus felügyeleti program értékének egyik legvilágosabb és legmeggyőzőbb bizonyítéka a klinikai vezetők és a finanszírozók előtt, mivel közvetlenül összevethető ugyanazon szervezet korábbi, nem automatizált reagálási idejével hasonló klinikai helyzetben.

## Hogyan számítják ki

```
Beavatkozásig eltelt idő = időbélyeg(klinikai reagálás megkezdése) −
                            időbélyeg(riasztás keletkezése)

A mediánt és egy magas percentilist (pl. 90.) kell jelenteni, riasztási
súlyossági szintenként bontva, nem egyetlen összevont átlagként.

A „klinikai reagálás megkezdését” pontosan és következetesen kell
meghatározni – pl. a klinikus megnyitja a beteg adatlapját és
intézkedik, vagy dokumentált kimenő kapcsolatfelvételi kísérlet
történik –, nem pusztán azt, hogy a riasztást megtekintették vagy
tudomásul vették, intézkedés nélkül.
```

## Kidolgozott példa

Egy távoli szívfelügyeleti program riasztórendszere egy hónapban 200 nagy súlyosságú ritmuszavar-riasztást jelez. A riasztás keletkezésétől addig, hogy egy klinikus kimenő kapcsolatfelvételt kezdeményez, a medián idő 12 perc, a 90. percentilis ideje 38 perc. Ugyanazon populáció korábbi, nem felügyelt útvonalának történeti adatai (ahol hasonló esemény jellemzően csak a következő ütemezett rendelői látogatáskor vagy kórházi megjelenéskor derülne ki) azt mutatják, hogy a bármilyen klinikai reagálásig eltelt medián idő napokban, nem percekben mérhető. Ez az összehasonlítás – nem a 12 perces szám önmagában – bizonyítja a felügyeleti program klinikai értékét; a 90. percentilis szám ugyanilyen fontos, mert azonosítja azon riasztások farkát, amelyekre több mint fél órával később reagáltak, és amely külön kiváltó ok szerinti felülvizsgálatot igényel.

## Adatforrások és megszorítások

A riasztás keletkezésének időbélyegei a felügyeleti platform saját eseménynaplójából származnak; a klinikai reagálás időbélyegei jellemzően az elektronikus egészségügyi nyilvántartás auditnaplójából vagy az ellátócsapat saját munkafolyamat- vagy feladatkezelő rendszeréből, és e két rendszernek pontosan szinkronizáltnak kell lennie ahhoz, hogy a kiszámított időtartam megbízható legyen. A „reagálás megkezdése” szigorú, dokumentált meghatározást igényel, mivel az, hogy egy klinikus pusztán megtekint vagy elvet egy riasztást további intézkedés nélkül, alapvetően más, és sokkal kevésbé megnyugtató esemény, mint az, amely tényleges kimenő kapcsolatfelvételt vagy beavatkozást vált ki – a kettő összemosása a reagálási időt a klinikai valóságnál jobbnak mutatja. Az éjszakai és hétvégi létszám jellemzően jelentősen befolyásolja a beavatkozásig eltelt időt, ezért ezt a mutatót – ahol a riasztások száma lehetővé teszi – napszak és hét napja szerinti bontásban kell jelenteni, nem csak a 0–24 órás összevont átlagként, amely elfedheti a munkaidőn kívüli súlyos reagálási hiányosságot.

## Buktatók

- **A riasztás tudomásulvételének reagálásként való számlálása**: az, hogy egy klinikus megtekint vagy elvet egy riasztást, nem azonos a klinikai reagálás megkezdésével; a reagálást szigorúan dokumentált intézkedésként kell meghatározni, nem passzív tudomásulvételként.
- **Egyetlen összevont idő jelentése az összes súlyossági szintre**: az alacsony és nagy súlyosságú riasztásokra együtt számolt gyors átlag elrejtheti a legsúlyosabb, legfontosabb riasztásokra adott veszélyesen lassú reagálási időt.
- **A létszámbeosztás hatásainak figyelmen kívül hagyása**: a reagálási idő a létszám miatt gyakran jelentősen változik a napszaktól és a hét napjától függően; az egyetlen összesített átlag elfedhet rendszerszintű munkaidőn kívüli vagy hétvégi reagálási hiányt.
- **A beavatkozásig eltelt idő összehasonlítása eltérő riasztási küszöbű szervezetek között**: a konzervatívabb (érzékenyebb) riasztási küszöbű szervezet több alacsony akuitású riasztást generál, ami a tényleges klinikai reagálóképességtől függetlenül hígíthatja az átlagos reagálási idejét a szigorúbb küszöböt használó szervezethez képest.

## Források

- NHS England, a távfelügyeletre és a virtuális osztályok klinikai reagálási szabványaira vonatkozó útmutató
- ONC / HealthIT.gov, a klinikai riasztórendszerek tervezésére és biztonságára vonatkozó útmutató
- Szakértők által lektorált szakirodalom a távoli betegfelügyeleti riasztások reagálási idejéről és a klinikai kimenetekről, például az npj Digital Medicine folyóiratban megjelent tanulmányok

Lásd még: [eszközök rendelkezésre állási aránya](../eszközök-rendelkezésre-állási-aránya/), mivel a megbízható beavatkozásig eltelt idő adat azon múlik, hogy a mögöttes felügyeleti eszköz egyáltalán online-e a riasztás generálásához.
