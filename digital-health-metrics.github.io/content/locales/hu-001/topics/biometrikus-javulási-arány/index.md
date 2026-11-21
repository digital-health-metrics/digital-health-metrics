# Biometrikus javulási arány

A biometrikus javulási arány azon beíratott betegek hányada egy digitális egészségügyi programban, akik egy meghatározott beíratási időszak alatt klinikailag jelentős javulást érnek el egy követett biometrikus mutatóban – leggyakrabban a glikált hemoglobinban (HbA1c) cukorbetegségi és kardiometabolikus programokban, vagy a testtömegindexben (BMI) súlykezelő programokban. Ez az a kimeneti mutató, amely végső soron igazolja a digitális egészségügyi termék klinikai állításait: az elköteleződési és elfogadási számok azt írják le, hogyan használják a terméket, a biometrikus javulás azonban közelebb áll annak bizonyítékához, hogy működik.

## Miért fontos

A digitális egészségügyi programokat gyakran az egészségi kimenetek javulásának ígéretével értékesítik és rendelik meg, és a biometrikus javulási arány a legközvetlenebb, számszerűsíthető módja ennek az ígéretnek egy konkrét, klinikailag elismert küszöbértékhez mérésére a „jobb egészség” homályos állítása helyett. A finanszírozók, a munkáltatók és az egészségügyi rendszerek egyre inkább a bizonyított biometrikus változáshoz kötik a térítést vagy a szerződés megújítását, így az a program, amely nem tudja hitelesen jelenteni ezt az arányt, kereskedelmi és klinikai hátrányban is van. A mutató a programtervezés fegyelmének ellenőrzése is: sokkal könnyebb az elköteleződést (bejelentkezések, elküldött üzenetek) jelenteni, mint a kimeneteket, és a csapatnak gyanakodnia kell minden olyan programra, amely lelkesen számol be az előbbiről, miközben homályos az utóbbiról.

## Hogyan számítják ki

```
Biometrikus javulási arány = a meghatározott, klinikailag jelentős javulást
                              elérő betegek / az érvényes alapvonali és
                              követéses méréssel rendelkező betegek × 100

Gyakori klinikailag jelentős küszöbök:
  HbA1c   — legalább 0,5 százalékpontos csökkenés, vagy egy meghatározott
            célérték (pl. < 7,0%) elérése a tartományon kívüli alapvonalról
  BMI     — az alapvonali testtömeg legalább 5%-ának csökkenése, a követéses
            mérési időpontig fenntartva

Minden követett biometrikus mutatóra külön jelentendő; a HbA1c- és a
BMI-javulást soha ne vonja össze egyetlen közös „javulási” százalékba.
```

## Kidolgozott példa

Egy kardiometabolikus digitális egészségügyi program 800, tartományon kívüli alapvonali HbA1c-jű beteget vesz fel. Közülük 620-nak van érvényes alapvonali és 6 hónapos követéses mérése (180 beteg elveszett a követésből, őket kizárják a nevezőből, nem számítják kudarcnak). A 620 páros méréssel rendelkező beteg közül 340 legalább 0,5 százalékpontos csökkenést ér el. A biometrikus javulási arány 340 / 620 × 100 = 55%. Ennek a teljes 800 beíratottra vonatkoztatott jelentése (340 / 800 = 42,5%) összemosná a követésből való lemorzsolódást a kezelés kudarcával, alulbecsülve az arányt azon betegek esetében, akik ténylegesen teljesítették a mérést.

## Adatforrások és megszorítások

Az alapvonali és követéses biometrikus értékek jellemzően csatlakoztatott eszközből (Bluetooth-os vércukormérő vagy okosmérleg), az elektronikus egészségügyi nyilvántartásból importált laboreredményből vagy a beteg által megadott saját bejelentésű értékből származnak – és e három forrás megbízhatósága nagyon eltérő, ezért a forrást az aránnyal együtt kell jelenteni. A követésből való lemorzsolódás ritkán véletlenszerű: a programból kiszálló betegek gyakran azok is, akik a legkevésbé valószínű, hogy javultak, így a kizárólag a követést teljesítő betegekre számított magas javulási arány túlbecsülheti a program valódi populációs hatását. A szezonális hatások és az átlaghoz való visszatérés a HbA1c és a testsúly esetében egyaránt valós, ezért a programnak lehetőleg párhuzamos vagy történeti kontrollcsoporttal kell összehasonlítania, ahelyett hogy bármilyen javulást a program hatásának bizonyítékaként kezelne.

## Buktatók

- **A követésből való lemorzsolódás kizárása jelentés helyett**: a követéses mérés nélküli betegek csendes kihagyása a nevezőből jelentősen felfújhatja a látszólagos javulási arányt; a követéses mérés teljesítési arányát mindig a javulási arány mellett kell jelenteni.
- **Saját bejelentésű és eszközforrású mérések jelölés nélküli keverése**: a saját bejelentésű testsúly szisztematikusan kevésbé megbízható, mint a csatlakoztatott okosmérleg leolvasása, és a két forrás keverése elfedi, hogy a látszólagos javulás mekkora része mérési zaj.
- **Kontroll vagy ellentétes forgatókönyv hiánya**: számos krónikus biometrikus mérték önmagától is ingadozik vagy az átlag felé tér vissza; az összehasonlító csoport nélküli egykarú javulási arány sugallja, de nem bizonyítja a program hatását.
- **A szerény átlagos eltolódás széles körű javulás bizonyítékaként kezelése**: a kis populációs átlagos javulást néhány nagy válaszadó is eredményezheti, miközben a legtöbb beteg nem tapasztal változást; az eloszlást (pl. a klinikailag jelentős küszöböt átlépők hányadát) kell jelenteni, nem csak az átlagos eltolódást.

## Források

- American Diabetes Association (ADA), Standards of Care in Diabetes, a HbA1c-célértékekre és a klinikailag jelentős változásra vonatkozó útmutató
- Centers for Disease Control and Prevention (CDC), Division of Diabetes Translation, programértékelési útmutató
- Szakértők által lektorált szakirodalom a digitális cukorbetegségi és súlykezelő programok kimeneteiről, például az npj Digital Medicine és a Diabetes Care folyóiratban megjelent tanulmányok

Lásd még: [gyógyszeradherencia-arány](../gyógyszeradherencia-arány/), a krónikus betegségi programokban a biometrikus javulás gyakori előzetes hajtóereje.
