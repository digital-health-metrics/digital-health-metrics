# Orvosi kiégési arány

Az orvosi kiégési arány azon klinikusok hányadát méri, akik jelentős kiégési tünetekről számolnak be – amelyeket általában az érzelmi kimerültség, a deperszonalizáció vagy a személyes teljesítmény alacsony érzése szerint értékelnek validált felmérési mérőeszközzel –, és a digitális egészségügy összefüggésében a klinikusokat érő digitális eszközterhelés mutatói, például a papírmunkára vagy az elektronikus egészségügyi nyilvántartásban (EHR) való dokumentálásra fordított idő mellett követik. Azért szerepel a digitális egészségügyi mutatók keretrendszerében, mert a rosszul tervezett klinikai szoftver a kiégés jól dokumentált, mérhető hozzájárulója, és a digitális egészségügyi eszköz sikerét soha nem szabad kizárólag a betegek felé irányuló mutatókkal értékelni, figyelmen kívül hagyva azt, hogy milyen hatással van az azt kezelő klinikusokra.

## Miért fontos

A digitális egészségügyi eszközöket gyakran a klinikusok adminisztratív terhének csökkentésének kifejezett céljával vezetik be, de a rosszul megtervezett elektronikus egészségügyi nyilvántartási munkafolyamat, az alacsony értékű klinikai riasztások túlzott mennyisége (lásd a klinikai riasztás felülbírálási arányt) vagy a nehézkes távellátási felület ugyanúgy növelheti a kiégést, mint csökkentheti – és az az eszköz, amely javítja a betegek felé irányuló elköteleződési mutatót, miközben csendben növeli a klinikusok dokumentációs terhét, nem ért el nettó pozitív eredményt az ellátási rendszer egészére nézve. A kiégés a klinikai szakirodalomban szorosan összefügg az orvosi hibákkal, a klinikusok fluktuációjával és az ellátás minőségének romlásával, így a későbbi biztonsági és munkaerő-fenntarthatósági problémák előrejelzője, nem csupán munkahelyi elégedettségi finomság. Minden olyan digitális egészségügyi programnak, amely azt állítja, hogy csökkenti a klinikai terhet, képesnek kell lennie ezen állítás mért alapvonalhoz viszonyított bizonyítására, ahelyett hogy tervezési szándékként állítaná.

## Hogyan számítják ki

```
Orvosi kiégési arány = a validált mérőeszköz kiégési küszöbe felett
                        pontozó klinikusok / összes megkérdezett
                        klinikus × 100

Gyakori validált mérőeszközök: Maslach Burnout Inventory (MBI), a
Professional Fulfillment Index, vagy egy részletesebb mérőeszközzel
validált egykérdéses kiégési szűrőkérdés.

Ahol elérhető, digitális terhelési közelítő mutatóval együtt jelentendő:
  EHR-ben töltött idő betegtalálkozónként
  Az ütemezett klinikai órákon kívül történő dokumentálási idő
  („pizsamaidő”)
```

## Kidolgozott példa

Egy kórházi rendszer 300 orvost kérdez meg a Maslach Burnout Inventory segítségével, mielőtt bevezet egy, a jegyzetírási időt csökkentő környezeti klinikai dokumentációs eszközt. Az alapvonalon 135 orvos (45%) pontoz a kiégési küszöb felett, és az EHR auditnapló-adatai szerint naponta átlagosan 58 perc dokumentálási idő esik orvosonként az ütemezett klinikai órákon kívülre. Az eszköz bevezetése után hat hónappal ugyanazon orvosok megismételt felmérése 108 főt (36%) talál a kiégési küszöb felett, a munkaidőn kívüli dokumentálási idő napi 34 percre csökkenése mellett. A kiégési arány és a tárgyilagos, EHR-ből származó közelítő mutató korrelált mozgása erősíti azt az érvet, hogy az eszköz hozzájárul a javuláshoz, bár a formális előtte/utána összehasonlításnak továbbra is figyelembe kell vennie az ugyanabban az időszakban fennálló egyéb munkaterhelési változásokat.

## Adatforrások és megszorítások

A kiégési felmérési adatok validált mérőeszközből származnak, amelyet rendszeresen (évente vagy gyakrabban) alkalmaznak, és a válaszadási arány számít: az alacsony válaszadási arány a válaszmegtagadási torzítás kockázatával jár, amikor a leginkább kiégett klinikusok (akiknek a legkevesebb kapacitásuk van egy további felmérés kitöltésére) szisztematikusan alulreprezentáltak, alulbecsülve a valódi arányt. A digitális terhelés EHR-ből származó közelítő mutatói – a rendszerben töltött idő, a munkaidőn kívüli dokumentálási idő, a találkozónkénti kattintások száma – hasznos, tárgyilagos, folyamatosan elérhető kiegészítői az időszakos felmérési adatoknak, de egy adott szervezetben a felmérésben jelentett kiégéssel validálni kell őket, mielőtt megbízható önálló kiégési jelzőként kezelnék, mivel a rendszerben töltött idő és a tényleges kiégés közötti kapcsolat szakterületenként és egyéni munkastílusonként változhat.

## Buktatók

- **Kizárólag EHR-ből származó közelítő mutatókra támaszkodás**: a rendszerben töltött idő és a kattintásszám összességében korrelál a kiégéssel, de nem azonos magával a kiégéssel, és félrevezető lehet egyes klinikusok vagy valóban eltérő dokumentálási igényű szakterületek esetében.
- **Az alacsony felmérési válaszadási arány elfedi a valódi arányt**: a kiégés által leginkább érintett klinikusoknak gyakran a legkevesebb kapacitásuk van egy önkéntes felmérésre válaszolni, az alacsony válaszadási arányú eredményt mesterségesen egészségesebbnek látszó szám felé torzítva.
- **A kiégés változásának egyetlen eszköznek tulajdonítása a zavaró tényezők figyelembevétele nélkül**: a kiégést számos egyidejű tényező befolyásolja (létszám, betegforgalom, szervezeti változás); az egyetlen eszköz bevezetése körüli előtte/utána összehasonlításnak ahol lehetséges kontrollálnia kell ezeket, ahelyett hogy egyetlen okot feltételezne.
- **A kiégés kizárólag egyéni ellenálló-képességi kérdésként kezelése**: a kiégéskutatás következetesen azt találja, hogy a munkaterhelés, a rendszertervezés és a szervezeti tényezők az elsődleges hajtóerők; kizárólag egyéni klinikusi problémaként való beállítása a beavatkozást eltereli azoktól a digitális eszközöktől és munkafolyamatoktól, amelyek gyakran a tényleges kiváltó okok.

## Források

- Maslach Burnout Inventory (MBI), validált felmérési mérőeszköz és pontozási útmutató
- American Medical Association (AMA), az orvosi kiégésre irányuló kutatás és a STEPS Forward gyakorlatfejlesztési program
- Szakértők által lektorált szakirodalom az EHR használhatóságáról, a dokumentációs terhelésről és a klinikusi kiégésről, például a JAMIA és az Annals of Internal Medicine folyóiratban megjelent tanulmányok

Lásd még: [klinikai riasztás felülbírálási arány](../klinikai-riasztás-felülbírálási-arány/), mivel a riasztási fáradtság a klinikusi kiégés egyik specifikusabb, mérhető hozzájárulója, amelyet a digitális eszközök közvetlenül kezelhetnek.
