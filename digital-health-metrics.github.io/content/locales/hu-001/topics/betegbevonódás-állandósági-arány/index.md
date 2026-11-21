# Betegbevonódás-állandósági arány

A betegbevonódás-állandósági arány azt méri, hogy egy beíratott beteg mennyire rendszeresen használ egy digitális egészségügyi terméket az idő során – például étkezés vagy tünetek naplózására, fizikai aktivitás rögzítésére, egészségügyi adatok megtekintésére –, nem pusztán azt, hogy használta-e egyáltalán. Hosszmetszeti mutató, amely különbözik a pillanatnyi aktív használati számtól: két betegnek azonos lehet a „ebben a hónapban használta az alkalmazást” státusza, miközben az egyik minden nap következetesen naplóz, a másik egyszer naplóz, majd három hétre eltűnik, és csak az állandósági mutató tesz köztük különbséget.

## Miért fontos

A digitális egészségügyi eszközzel való tartós, rendszeres interakció a klinikai előny egyik megbízhatóbb előremutató jelzője, különösen a viselkedésfüggő állapotoknál, mint a cukorbetegség, a testsúlykezelés és a mentális egészség, ahol az eszköz értéke az általa támogatott szokásból fakad, nem egyetlen alkalomból. Egy termék egészséges havi aktív felhasználószámot jelenthet, miközben valójában olyan populációt szolgál ki, amely egyszer belép, majd elsodródik, mert a havi aktív használat alacsony mérce, amely semmit nem mond a hónapon belüli használati mintázatról; az állandósági mutatók ezt olyan módon fogják meg, ahogy az egyszerű aktivitási számok nem. Mivel az állandóság egyúttal az egyik nehezebben fenntartható dolog hónapokon, nem csak heteken át, őszintébb jelzése a termék minőségének és klinikai illeszkedésének, mint a rövid ablakú bevonódási adatok, amelyek a bevezetés utáni újdonsághatásnak vannak kitéve.

## Hogyan számítják ki

```
Bevonódás-állandósági arány = legalább egy minősített interakciót tartalmazó hetek
                              / a beíratás összes hete × 100

A „minősített interakciót” egyértelműen és következetesen meg kell határozni
(pl. étkezésnapló-bejegyzés, tünet-bejelentkezés vagy befejezett aktivitás-szinkronizálás) –
soha nem lehet passzív esemény, például naplózott művelet nélküli alkalmazásmegnyitás.

Eloszlásként jelentse, ne csak populációs átlagként:
  pl. a legalább 80%-os heti állandóságú betegek aránya,
      az 50-79%-os betegek aránya, az 50% alattiak aránya
```

## Kidolgozott példa

Egy táplálkozási coaching alkalmazás 12 hétre beír egy beteget. A beteg a 12 hétből 9-ben naplóz legalább egy minősített étkezési bejegyzést, így az egyéni bevonódás-állandósági arány 9 / 12 × 100 = 75%. Az alkalmazás teljes, legalább 12 hete beírt, 2000 fős kohorszában 600 beteg (30%) tartja a legalább 80%-os heti állandóságot, 900 (45%) az 50-79%-os sávba esik, és 500 (25%) 50% alatti. Ha csak a kohorszátlagot jelentenék (amely nagyjából 65% lehet), az elfedné, hogy a betegek teljes negyede alig vesz részt – ezt a szegmenst külön érdemes vizsgálni, nem pedig összesített átlagba hígítani.

## Adatforrások és megszorítások

Az állandósági adatok a termék saját eseménynaplóiból származnak (étkezési bejegyzések, aktivitás-szinkronizálások, bejelentkezések), és a „minősített interakció” meghatározása óriási hatással van az eredményül kapott arányra – a megengedő meghatározás (bármilyen alkalmazásmegnyitás) mindig jobban fest, mint a szigorú (befejezett, érdemi naplóbejegyzés), ezért a használt meghatározást világosan meg kell adni minden jelentett szám mellett. Az automatikusan szinkronizált adatokat (például egy csatlakoztatott fitneszkövető háttérben történő aktivitás-szinkronizálását) külön kell jelenteni a kézzel naplózott adatoktól, mert az automatikus szinkronizálás növelheti a látszólagos állandóságot anélkül, hogy bármilyen aktív betegi erőfeszítést vagy a termék útmutatásával való foglalkozást tükrözne.

## Buktatók

- **Az alkalmazásmegnyitások összekeverése az érdemi bevonódással**: a passzív megnyitás (például push-értesítés által kiváltott) nem azonos egy naplózott étkezési bejegyzéssel vagy befejezett bejelentkezéssel; csak minősített interakciókat határozzon meg és jelentsen.
- **Csak a populációs átlag jelentése**: az egészségesnek tűnő átlagos állandósági arány elrejthet egy kétmóduszú populációt, amelyben vannak erősen bevont és szinte teljesen elpártolt betegek; az eloszlást jelentse az állandósági sávok szerint, ne csak az átlagot.
- **A beíratás hosszának mint nevezőnek a figyelmen kívül hagyása**: ha az állandósági arányokat nagyon eltérő ideje beírt betegek között hasonlítják össze a beíratás időtartamának figyelembevétele nélkül, az a rövidebb, könnyebben fenntartható mérési ablakú csoport javára torzít.
- **Az automatikus háttér-szinkronizálás növeli az arányt**: a passzívan szinkronizált viselhető eszköz adatfolyama elpártolt beteget is következetesen aktívnak mutathat, valódi magatartásváltozás vagy a termékkel való foglalkozás nélkül.

## Források

- Szakértők által lektorált szakirodalom a digitális egészségügyi bevonódási mintázatokról és azok klinikai kimenetekkel való összefüggéséről, például a Journal of Medical Internet Research (JMIR) folyóiratban megjelent tanulmányok
- American Medical Informatics Association (AMIA), útmutató a betegek által generált egészségügyi adatok minőségéről és a bevonódás méréséről
- Digital Therapeutics Alliance, bevált gyakorlati útmutató a digitális terápiák bevonódásának és kimenetének méréséhez

Lásd még: [felhasználó-megtartási arány](../felhasználó-megtartási-arány/), a szorosan kapcsolódó mutató, amely azt méri, hogy a beteg egyáltalán beíratva marad-e, szemben azzal, hogy a beíratás ideje alatt mennyire következetesen vesz részt.
