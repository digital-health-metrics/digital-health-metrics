# System Usability Scale pontszám

A System Usability Scale (SUS) pontszám szabványosított, 10 tételes kérdőív, amely számszerűsíti egy szoftver használhatóságát, és 0–100 közötti egyetlen pontszámot ad, amely jól megalapozott iparági normákhoz mérhető. A Net Promoter Score-tól, amely az ajánlási hajlandóságot méri, vagy a betegek által jelentett kimeneti méréseitől, amelyek a klinikai vagy működési állapotot mérik, eltérően a SUS egyetlen konkrét dolgot mér: mennyire könnyű magát a szoftvert megtanulni és használni, akár betegek, akár klinikai személyzet számára.

## Miért fontos

A digitális egészségügyi eszköz erős klinikai bizonyítékkal és meggyőző üzleti indoklással rendelkezhet, mégis kudarcot vallhat a gyakorlatban, mert a betegek vagy a klinikusok zavarosnak, lassúnak vagy bosszantónak találják a felületet – és mivel a SUS validált, széles körben használt mérőeszköz, amelyhez évtizedek óta közzétett, iparágakon átívelő viszonyítási adat áll rendelkezésre, lehetővé teszi a digitális egészségügyi csapatnak, hogy saját termékük használhatóságát egy ismert eloszláshoz hasonlítsák, ahelyett hogy informális benyomásokra vagy anekdotikus panaszokra támaszkodnának. A SUS szándékosan technológiasemleges és gyorsan felvehető (jellemzően öt perc alatt), ami gyakorlatiassá teszi a tervezési iterációk során ismételt futtatását, szemben a teljes használhatósági vizsgálattal vagy a formális klinikai vizsgálattal. Mivel a klinikusok felé irányuló használhatósági hibák dokumentált hozzájárulói a kiégésnek (lásd az orvosi kiégési arányt), a betegek felé irányuló használhatósági hibák pedig a lemorzsolódás és a gyenge digitális jártassági kimenetek dokumentált hozzájárulói (lásd a digitális jártassági arányt), a SUS korai figyelmeztető, olcsó használhatósági jelzésként működik, amely felfoghatja a tervezési problémát, mielőtt az megjelenne ezekben a következményesebb későbbi mutatókban.

## Hogyan számítják ki

```
SUS pontszám = ((a páratlan sorszámú tételek pontszámának összege − 5) +
                (25 − a páros sorszámú tételek pontszámának összege)) × 2,5

Az eredmény 0–100 közötti egyetlen pontszám (nem százalék, a skála
ellenére, mert nem „százalékos helyességet” vagy hasonlót jelent).

A közzétett viszonyítási értelmezés (Bangor és mtsai):
  80 felett — kiváló használhatóság
  68        — átlagos, a széles iparági norma alapján
  51 alatt  — gyenge használhatóság, vizsgálatot igényel
```

## Kidolgozott példa

Egy távellátási platform az első videóvizit után 150 betegnek adja ki a szabványos, 10 tételes SUS-kérdőívet. Az összes válaszadóra számított átlagos SUS-pontszám 74. A széles körben idézett 68-as iparági átlaghoz viszonyítva ez átlag feletti használhatóságot jelez erre a konkrét betegpopulációra és felhasználási esetre, bár még mindig érdemben a 80-as „kiváló” küszöb alatt, amely kevés fennmaradó használhatósági akadályt sugallna. Ugyanezen 150 válasz életkor szerinti bontása 81-es átlagpontszámot mutat az 50 év alatti és 62-t a 65 éves és idősebb betegeknél – ez a különbség egy konkrét, megoldható használhatósági problémára mutat az idősebb betegeknél, nem általános termékhasználhatósági problémára, és az egyetlen összevont átlag elrejtette volna.

## Adatforrások és megszorítások

A SUS-adatok közvetlenül azoktól a betegektől vagy klinikusoktól származnak, akik kitöltik a szabványosított, 10 tételes kérdőívet, és a mérőeszközt pontosan a validált módon kell alkalmazni (ugyanaz a 10 tétel, ugyanaz az 5 fokú egyetértési skála, ugyanaz a pontozási képlet) ahhoz, hogy az eredményül kapott pontszám összehasonlítható legyen a közzétett viszonyítási értékekkel; a kérdőív módosított vagy lerövidített változata, bármilyen jó szándékú is, olyan pontszámot ad, amelyet nem lehet megbízhatóan értelmezni a szabványos viszonyítási eloszláshoz képest. A SUS az észlelt használhatóságot méri, amely korrelál, de nem azonos a tárgyilagos feladatteljesítési sikerrel (a feladatteljesítésen alapuló mértéket lásd a digitális jártassági aránynál); a terméknek jó SUS-pontszáma lehet olyan betegektől, akik nem próbálták ki az összetettebb funkciókat, így a SUS párosítása tárgyilagos feladatteljesítési adatokkal teljesebb képet ad bármelyiknél egyedül. A válaszadás időzítése számít: a SUS kiadása egy frusztráló konkrét esemény (megszakadt kapcsolat, zavaros lépés) közvetlenül utáni időpontban, szemben egy zökkenőmentes munkamenet utánival, a termék általános használhatóságától függetlenül eltolhatja a pontszámokat.

## Buktatók

- **A szabványos kérdőív tételeinek vagy pontozásának módosítása**: már a megfogalmazás vagy a skála kis változtatásai is érvénytelenítik az összehasonlítást a jól megalapozott, közzétett viszonyítási eloszlással; a szabványos 10 tételes mérőeszközt pontosan a validált módon használja.
- **Csak az átlagpontszám jelentése bontás nélkül**: a használhatóság gyakran jelentősen változik a felhasználó életkora, digitális jártassága vagy szerepe (beteg vagy klinikus) szerint; bontva jelentsen, hogy megtalálja azokat a konkrét, megoldható használhatósági hiányosságokat, amelyeket az egyetlen átlag elfed.
- **A SUS klinikai hatékonysági mértékként kezelése**: a SUS kifejezetten a használhatóságot méri, nem a klinikai kimenetet vagy az ellátással való elégedettséget; a nagyon jól használható eszköz is kudarcot vallhat a klinikai kimenetek javításában, és ezeket soha nem szabad összekeverni vagy egymással helyettesíteni.
- **A felmérés kiadása csak szokatlanul zökkenőmentes vagy szokatlanul frusztráló munkamenetek után**: a kiadás időzítése és összefüggése torzíthatja a pontszámot; következetesen, a valós munkamenetek reprezentatív mintáján alkalmazza, nem csak kényelmes vagy szelektíven kiválasztott mintán.

## Források

- Brooke, J., „SUS: A Quick and Dirty Usability Scale”, az eredeti közzétett mérőeszköz
- Bangor, Kortum és Miller, a közzétett SUS-viszonyítási kutatás, amely a széles körben idézett pontszám-értelmezési sávokat megállapította
- Szakértők által lektorált szakirodalom a SUS digitális egészségügyi és távellátási használhatósági értékelésben való alkalmazásáról, például a JMIR Human Factors folyóiratban megjelent tanulmányok

Lásd még: [beteg Net Promoter Score](../beteg-net-promoter-score/), egy rokon, de különálló, beteg által jelentett mutató, amely az elégedettséget és a hűséget méri, nem kifejezetten a szoftver használhatóságát.
