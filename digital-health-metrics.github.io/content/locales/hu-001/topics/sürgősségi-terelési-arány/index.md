# Sürgősségi osztályi terelési arány

A sürgősségi osztályi (SO) terelési arány azt méri, hogy a digitális triázs- vagy virtuális ellátási eszköz által kezelt betegkapcsolatok mekkora hányada vezetett volna ésszerűen sürgősségi osztályi látogatáshoz a beavatkozás nélkül, de ehelyett biztonságosan kezelték alacsonyabb sürgősségű útvonalon – öngondoskodási tanáccsal, alapellátási időponttal vagy ütemezett sürgősségi ellátási (urgent care) látogatással. A triázs-irányítási pontosság (lásd azt a témát) egy konkrét, nagy értékű részhalmaza, amely teljes egészében az elkerült sürgősségi osztályi igénybevételre összpontosít, ami az egészségügyi költséghez és a sürgősségi osztály kapacitásának tehermentesítéséhez legközvetlenebbül kapcsolódó kimenet.

## Miért fontos

A sürgősségi osztályok találkozónként a legdrágább ellátási környezetek közé tartoznak, és gyakran olyan problémákra használják őket, amelyek máshol is biztonságosan kezelhetők, így a digitális triázseszköz azon képessége, hogy a megfelelő eseteket biztonságosan elterelje a sürgősségi osztálytól, egyik legkereskedelmileg és működésileg legértékesebb képessége – és egyike azoknak, amelyeket a legkönnyebb közölni az eszköz megtérülését értékelő finanszírozóval vagy egészségügyi rendszerrel. A terelésnek azonban csak akkor van értéke, ha biztonságos: az az eszköz, amely agresszíven tereli el a betegeket a sürgősségi osztálytól a valódi sürgős esetek elmulasztásának árán, teljesen a rossz oldalra optimalizált az átváltásban, ezért a sürgősségi osztályi terelési arányt mindig az elterelt betegek körében elmulasztott vagy késleltetett sürgősségi megjelenéseket követő biztonsági mutató mellett kell jelenteni, nem elszigetelten, tiszta hatékonysági győzelemként.

## Hogyan számítják ki

```
SO terelési arány = a sürgősségi osztálytól biztonságosan megfelelő
                     alacsonyabb sürgősségű útvonalra terelt
                     betegkapcsolatok / a potenciálisan SO-ra tartó
                     betegkapcsolatok összesen × 100

A „biztonságosan terelt” megköveteli utánkövetéssel vagy összekapcsolt
egészségügyi nyilvántartási adatokkal annak megerősítését, hogy a
beteg állapota egy meghatározott utánkövetési ablakon belül (pl. 72
óra) valójában nem igényelt sürgősségi ellátást – a terelési döntés
nem bizonyul biztonságosnak pusztán attól, hogy a beteg utána nem
ment azonnal a sürgősségire.

Együtt jelentendő:
  Elmulasztott sürgősség aránya = az utánkövetési ablakon belül
                           sürgősségi ellátást igénylő elterelt
                           betegek / az összes elterelt beteg × 100
```

## Kidolgozott példa

Egy digitális triázsszolgáltatás egy hónapban 3000 olyan betegkapcsolatot értékel, amelyeket klinikai algoritmusa beavatkozás hiányában potenciálisan SO-ra tartónak ítél. Ezek közül 1800-at alacsonyabb sürgősségű útvonalra terelnek (60%-os terelési arány). Az elterelt kohorsz 72 órás utánkövetése összekapcsolt egészségügyi nyilvántartási adatokkal azt találja, hogy az 1800 elterelt beteg közül 45 mégis megjelent a sürgősségi osztályon ezen az ablakon belül (elmulasztott sürgősség aránya 45 / 1800 × 100 = 2,5%). A 60%-os terelési szám jelentése a 2,5%-os elmulasztott sürgősségi arány nélkül az eszköz terelési magatartásának megfelelő kalibráltságát valójában meghatározó biztonsági-hatékonysági átváltásnak csak a felét mutatná.

## Adatforrások és megszorítások

Annak megerősítése, hogy az elterelt betegnek később nem volt szüksége sürgősségi ellátásra, összekapcsolt adatokon múlik – ugyanazon egészségügyi rendszer saját SO-nyilvántartásán, regionális egészségügyi információcserén vagy strukturált beteg-utánkövető hívás vagy felmérés útján –, és az e forrásokból egyiket sem használó terelési program valójában nem tudja validálni saját biztonságát, csak a panasz hiánya alapján feltételezi. A megfelelő terelési arány és az elfogadható elmulasztott sürgősségi arány klinikai szakpolitikai döntések, nem tisztán statisztikaiak, és a klinikai vezetésnek szándékosan kell meghatároznia őket, nem hagyva, hogy mellékhatásként alakuljanak ki attól függően, hogy a triázsalgoritmus alapértelmezésben milyen küszöböt használ. A terelési arányt a jelentkező tünet vagy panasz kategóriája szerint kell jelenteni, mivel a megfelelő terelési arányok betegségenként rendkívül eltérnek (egy kisebb vágott seb és a mellkasi fájdalom nagyon eltérő terelési küszöböket indokol).

## Buktatók

- **A terelési arány jelentése összekapcsolt elmulasztott sürgősségi biztonsági mutató nélkül**: a valódi sürgősségek alultriázsolásával elért magas terelési arány nem siker; a két mutatót mindig együtt kell jelenteni.
- **Annak feltételezése, hogy a SO-látogatás hiánya azt jelenti, hogy a terelés biztonságos volt**: a beteg megjelenhet egy másik, nem összekapcsolt kórházi rendszer sürgősségi osztályán, vagy valóban káros kimenetele lehet anélkül, hogy valaha bármely sürgősségire eljutna; a biztonságot összekapcsolt adatokkal vagy strukturált utánkövetéssel validálja, nem kizárólag az azonos rendszerbeli SO-látogatás hiányával.
- **A terelési küszöb kizárólag a terelési arány maximalizálására való beállítása**: az olyan algoritmus vagy szabályzat, amelyet a terelés maximalizálására hangoltak a megfelelő biztonsági korlát nélkül, a betegbiztonságot jobban kinéző hatékonysági számra cseréli.
- **A terelési arány összevonása az összes panaszra**: a megfelelő terelési arányok a jelentkező panasz szerint nagyon eltérnek; az egyetlen összevont arány nem mutatja meg, hogy az eszköz biztonságosan és hatékonyan teljesít-e a klinikailag legfontosabb konkrét betegségeknél.

## Források

- Agency for Healthcare Research and Quality (AHRQ), a sürgősségi osztályi igénybevételről és a megfelelő ellátási környezetbe terelésről szóló kutatás
- NHS England, az NHS 111-re és a digitális sürgősségi triázs biztonsági és hatékonysági szabványaira vonatkozó útmutató
- Szakértők által lektorált szakirodalom a digitális triázs és a virtuális ellátás SO-terelési kimeneteiről, például az Annals of Emergency Medicine és az npj Digital Medicine folyóiratban megjelent tanulmányok

Lásd még: [triázs-irányítási pontosság](../triázs-irányítási-pontosság/), az átfogóbb pontossági mutató, amelynek ez egy konkrét, biztonságkritikus részhalmaza.
