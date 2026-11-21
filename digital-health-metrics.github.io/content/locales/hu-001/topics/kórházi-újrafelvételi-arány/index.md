# Kórházi újrafelvételi arány

A kórházi újrafelvételi arány azon elbocsátott betegek hányada, akiket az elbocsátás után meghatározott időablakon belül – leggyakrabban 30 napon belül – előre nem tervezetten újra felvesznek a kórházba. A digitális egészségügy számára ez a finanszírozói gazdasághoz és az értékalapú ellátási szerződésekhez legközvetlenebbül kapcsolódó mutató: az a távfelügyeleti, elbocsátás utáni utánkövetési vagy digitális ellátási átmeneti program, amely nem tud hiteles hatást kimutatni az újrafelvételekre, valószínűleg nem kap folyamatos térítési támogatást, bármilyen jók is az elköteleződési számai.

## Miért fontos

Az előre nem tervezett újrafelvétel drága, zavaró a beteg számára, és sok egészségügyi rendszerben ma már közvetlenül szankcionálják: az olyan rendszerek, mint az amerikai Hospital Readmissions Reduction Program, csökkentik a kifizetést azoknak a kórházaknak, amelyeknél bizonyos betegségeknél a vártnál magasabb az újrafelvételi arány, ezért a kórházak aktívan megrendelnek digitális elbocsátás utáni és távfelügyeleti programokat ezek csökkentésére. Az újrafelvételek jelentős hányadát potenciálisan megelőzhetőnek tartják – a nem megfelelő elbocsátási utasítások, a kihagyott utánkövetési időpontok, a gyógyszerek félreértése vagy a kezeletlen tünetromlás okozza őket, amelyet egy jól megtervezett digitális érintkezési pont korábban elfoghat –, éppen ezt a hiányt célozzák a digitális átmeneti ellátási eszközök. Az újrafelvételi arányt mindig az esetösszetétellel együtt kell olvasni: a betegebb, összetettebb populációt kiszolgáló program szerkezetileg magasabb alapvonali arányt mutat, mint az egészségesebb populációt kiszolgáló, a program minőségétől függetlenül.

## Hogyan számítják ki

```
30 napos újrafelvételi arány = az elbocsátástól számított 30 napon belüli
                                előre nem tervezett újrafelvételek /
                                az összes alap-elbocsátás × 100

A számlálóból zárja ki: a tervezett újrafelvételeket (pl. ütemezett
követő beavatkozás), és azokat az áthelyezéseket, amelyek ugyanazon
ellátási epizód folytatásai, nem új felvételek.

Ahol lehetséges, kockázat szerint korrigáljon elfogadott esetösszetételi
vagy társbetegségi index segítségével, mielőtt különböző
betegpopulációk vagy időszakok arányait összehasonlítaná.
```

## Kidolgozott példa

Egy kórház egy negyedév alatt 1200 szívelégtelenségben szenvedő beteget bocsát el. Közülük 210-et 30 napon belül újra felvesznek, amelyből 15 tervezett, egy ütemezett beavatkozás miatti újrafelvétel, és ezeket kizárják. Az előre nem tervezett 30 napos újrafelvételi arány (210 − 15) / 1200 × 100 = 16,25%. Egy távfelügyeleti programot vezetnek be e betegek 400 fős részhalmazára (klinikai kockázat alapján választva, nem véletlenszerűen), és az ő előre nem tervezett újrafelvételi arányuk 14%, szemben a be nem íratott 800 beteg 18%-ával. Mivel a beíratás klinikai kockázaton alapult, nem véletlenszerű besoroláson, ez a különbség sugallja, de nem bizonyítja véglegesen a program hatását, és kockázatkorrekciós elemzéssel együtt kell értelmezni, nem szó szerint venni.

## Adatforrások és megszorítások

Az újrafelvételi adatokat az azonos intézménybe történő újrafelvételek esetében jellemzően a kórház saját felvételi-elbocsátási-áthelyezési (ADT) adatfolyamából veszik, de a másik kórházba újra felvett beteg egyáltalán nem jelenik meg ebben az adatfolyamban, így az egykórházas újrafelvételi nyomon követés szisztematikusan alulszámolja a valódi újrafelvételi arányt, hacsak nem egészítik ki regionális egészségügyi információcsere-adatokkal, finanszírozói számlázási adatokkal vagy állami szintű összes-finanszírozói adatbázisokkal. A digitális programnak való tulajdonítás óvatosságot igényel: az önkéntes távfelügyeleti programba belépő betegek ritkán véletlen mintái az elbocsátott populációnak, így a beíratott és a be nem íratott újrafelvételi arányok naiv összehasonlítását általában éppen azok a kiválasztási hatások zavarják, amelyek eleve valószínűbbé tették egyes betegek beíratkozását.

## Buktatók

- **Nyers, kockázatkorrekció nélküli arányok összehasonlítása populációk között**: a betegebb populációt kiszolgáló program magasabb nyers újrafelvételi arányt mutat, mint az egészségesebbet kiszolgáló, akkor is, ha maga a program hatékonyabb; összehasonlítás előtt mindig korrigáljon kockázat szerint.
- **Más intézményekbe történő újrafelvételek alulszámlálása**: kizárólag egyetlen kórház saját ADT-adataira támaszkodva más helyen történt újrafelvételek kimaradnak, alulbecsülve a valódi arányt, különösen több versengő kórházi rendszerrel rendelkező területeken.
- **Kiválasztási torzítás az önkéntes programbeíratásban**: azok a betegek, akik beíratkoznak egy digitális utánkövetési programba, gyakran szisztematikusan eltérnek (egészségügyi írástudásban, társas támogatásban vagy motivációban) azoktól, akik nem, ami torzítja a naiv előtte/utána vagy beíratott/be nem íratott összehasonlítást.
- **Minden azonos intézménybe való visszatérés újrafelvételként számolása**: a tervezett, ütemezett újrafelvétel (például tervezett második lépcsős beavatkozás) nem a sikertelen elbocsátás jele, és ki kell zárni a számlálóból, nem összekeverni a valóban előre nem tervezett visszatérésekkel.

## Források

- Centers for Medicare & Medicaid Services (CMS), Hospital Readmissions Reduction Program és Hospital-Wide Readmission mérési specifikációk
- Institute for Healthcare Improvement (IHI), az elkerülhető újrafelvételek csökkentésére vonatkozó útmutató
- Szakértők által lektorált szakirodalom az újrafelvételek csökkentését célzó digitális távfelügyeleti és átmeneti ellátási beavatkozásokról, például a JAMA Network Open és az npj Digital Medicine folyóiratban megjelent tanulmányok

Lásd még: [triázs-irányítási pontosság](../triázs-irányítási-pontosság/), mivel a nem megfelelő kezdeti irányítás maga is az elkerülhető felvételek későbbi hajtóereje lehet.
