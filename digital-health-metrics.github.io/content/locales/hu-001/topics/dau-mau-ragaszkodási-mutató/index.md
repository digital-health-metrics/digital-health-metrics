# DAU/MAU ragaszkodási mutató

A DAU/MAU ragaszkodási mutató (stickiness) a napi aktív felhasználókat (DAU) hasonlítja a havi aktív felhasználókhoz (MAU) – ugyanez az alapmérték használatos a heti aktív felhasználókra (WAU) a MAU-hoz képest is –, hogy kifejezze, a termék tágabb felhasználói bázisának mekkora hányada használja azt egy adott napon. Ez a bevonódási intenzitás szokásos terméktanulmányi (product-analytics) mércéje, amely különbözik attól, hogy egy felhasználó egyáltalán megmarad-e (lásd a felhasználó-megtartási arányt), vagy hogy egy adott beíratott beteg mennyire következetesen vesz részt az idő során (lásd a betegbevonódás-állandósági arányt): a ragaszkodás a használat populációs szintű ritmusát írja le, nem egyetlen egyén mintázatát.

## Miért fontos

Két digitális egészségügyi termék jelenthet azonos havi aktív felhasználószámot, miközben a mögöttes bevonódási intenzitásuk nagyon eltér: az egyiknél a felhasználók többsége szinte naponta megnyitja az alkalmazást, a másiknál a többség havonta egyszer, éppen mielőtt inaktívnak számítana. A DAU/MAU ragaszkodási mutató egyetlen, egyszerű, jól ismert viszonyítási számmal különbözteti meg ezt a két nagyon eltérő helyzetet, amelyet a termék- és klinikai csapatok az idő során követhetnek, és összevethetnek az ismert iparági tartományokkal – a 20% körüli arány sok fogyasztói alkalmazásnál általánosan idézett észszerű viszonyítási érték, míg a napi szokásra épülő termékeket (egy étkezési vagy tünetnapló, amelyet a beteg várhatóan naponta használ) érdemben magasabb mércével kell megítélni. Mivel a ragaszkodás érzékeny arra, hogyan határozzák meg az „aktívat”, leginkább egy termék időbeli trendjeként, valamint hasonló használati mintázatra épített termékekkel való összevetésként hasznos, nem pedig abszolút, iparágak közötti viszonyítási értékként.

## Hogyan számítják ki

```
DAU/MAU ragaszkodási mutató = az időszak átlagos napi aktív felhasználói /
                              ugyanazon időszak havi aktív felhasználói × 100

A WAU/MAU arány (heti, ugyanaz az elv) lazább változat, amely
azoknál a termékeknél megfelelőbb, amelyeket hetente néhányszor,
nem naponta várnak használni.

Az „aktívat” pontosan és következetesen kell meghatározni (pl. egy befejezett
minősített művelet, nem passzív alkalmazásmegnyitás) a számlálóban
és a nevezőben egyaránt.
```

## Kidolgozott példa

Egy digitális cukorbetegség-kezelő alkalmazásnak egy adott hónapban 10 000 havi aktív felhasználója van, vagyis olyan felhasználó, aki a hónapban legalább egy minősített műveletet végrehajtott (vércukornaplózás, étkezésnaplózás vagy gyógyszerbevétel-jelölés). A hónap 30 napjára átlagolva a napi aktív felhasználók átlagos száma (DAU) 2200. A DAU/MAU ragaszkodási mutató 2200 / 10 000 × 100 = 22%, ami arra utal, hogy egy tipikus napon az alkalmazás havi felhasználói bázisának mintegy 22%-a használja azt – ez észszerű szám egy napi szokásra épülő krónikus állapotkezelő eszköznél, bár a terméket fejlesztő csapat azt szeretné látni, hogy az idő során emelkedő trendet mutat, ahogy az ideális viselkedés (a napi naplózás) a beíratott betegeknél egyre inkább szokássá válik.

## Adatforrások és megszorítások

A DAU, a WAU és a MAU egyaránt ugyanazokból az eseménynaplókból számítható, a „minősített aktív” esemény egyetlen, következetes meghatározásával minden ablakban; ha e meghatározást a számláló és a nevező számításai között megváltoztatják (például a DAU-hoz bármely alkalmazásmegnyitást, de a MAU-hoz csak befejezett műveletet számolnak), az torz arányt eredményez, amely nem tükrözi a valódi bevonódási intenzitást. A ragaszkodás megfelelő viszonyítási értéke nagymértékben függ a termék tervezett használati mintázatától: az az eszköz, amelyet hetente egyszer kell használni (heti tünet-bejelentkezés), alacsonyabb DAU/MAU arányt mutat, és kell is mutatnia, mint az, amelyet naponta (folyamatos glükózmonitor társalkalmazás), ezért a ragaszkodást mindig a termék saját tervezett használati ütemében kell értelmezni, nem egyetlen általános célértékhez viszonyítva.

## Buktatók

- **Eltérő tervezett használati gyakoriságú termékek ragaszkodási arányainak összehasonlítása**: egy heti használatú eszköz szerkezetileg alacsonyabb DAU/MAU arányt mutat, mint egy napi használatú, még ha mindkettő pontosan úgy teljesít is, ahogy az adott felhasználási esetére tervezték; a termék saját tervezett ütemét vegye viszonyítási alapul, ne egyetlen általános célértéket.
- **Következetlen aktivitás-meghatározások a számlálóban és a nevezőben**: ez olyan ragaszkodási arányt eredményezhet, amely nem tükrözi a valódi bevonódási intenzitást, és sem az idő során, sem más termékekkel nem hasonlítható össze értelmesen.
- **Az emelkedő ragaszkodási arány egyértelműen pozitívnak tekintése az összesített MAU-trend ellenőrzése nélkül**: az az emelkedő arány, amelyet egy zsugorodó, de szokásszerűbb magfelhasználói bázis hajt, miközben az összes MAU csökken, egészen más – és aggasztóbb – helyzet, mint az, amelyet a stabil vagy növekvő felhasználói bázison valóban növekvő napi bevonódás hajt.
- **A hét napja és a szezonális hatások figyelmen kívül hagyása a DAU-nál**: sok egészségügyi terméknél a DAU jelentősen változhat a hét napja (hétköznap és hétvége) vagy az évszak szerint; olyan időszakra átlagoljon, amely egy teljes természetes ciklust lefed, nem egy rövid, torzulásra hajlamos ablakra.

## Források

- Szakértők által lektorált és iparági szakirodalom a mobil- és digitális termékek bevonódási mutatóiról, a mobilanalitikai platformok által széles körben használt viszonyítási keretrendszerek
- Digital Therapeutics Alliance, bevált gyakorlati útmutató a digitális terápiák bevonódásának méréséhez
- Szakértők által lektorált szakirodalom a digitális egészségügyi bevonódás méréséről, például a Journal of Medical Internet Research (JMIR mHealth and uHealth) folyóiratban megjelent tanulmányok

Lásd még: [felhasználó-megtartási arány](../felhasználó-megtartási-arány/) és [betegbevonódás-állandósági arány](../betegbevonódás-állandósági-arány/), az a két kapcsolódó bevonódási mutató, amellyel ezt az arányt a leggyakrabban összetévesztik.
