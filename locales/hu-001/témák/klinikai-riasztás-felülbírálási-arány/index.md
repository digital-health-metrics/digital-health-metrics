# Klinikai riasztás felülbírálási arány

A klinikai riasztás felülbírálási arány azt méri, hogy a klinikai döntéstámogató (CDS) riasztások – például a számítógépes orvosi rendelésbevitel (CPOE) rendszer által generált gyógyszer-kölcsönhatási figyelmeztetések, allergiariasztások és adagtartomány-ellenőrzések – hányadát vetik el vagy bírálják felül a klinikusok ahelyett, hogy intézkednének. Ez a szabványos mennyiségi jelzés a „riasztási fáradtság” felderítésére és kezelésére: a jól dokumentált jelenségre, hogy a klinikusok érzéketlenné válnak a riasztásokra, ha az alacsony értékű figyelmeztetések mennyisége elsöprővé válik.

## Miért fontos

A gyógyszer-kölcsönhatási riasztások közzétett felülbírálási aránya általában nagyjából a felétől kilencven százalék fölé terjed, és a magas arány nem automatikusan biztonsági kudarc: számos megszakító riasztás olyan kölcsönhatásokra szól, amelyek az adott összefüggésben klinikailag jelentéktelenek, vagy megismétlik azt a riasztást, amelyre a klinikus már korábban intézkedett ugyanabban a rendeléskészletben, így a jól beállított rendszer szándékosan kevesebb, nagyobb értékű riasztást ad, ahelyett hogy a felülbírálási arányt nullára próbálná szorítani. A biztonság szempontjából valóban az számít, hogy mi az időbeli trend, hogyan oszlik meg az arány a súlyossági szintek között, és hogy a klinikusok dokumentálnak-e indoklást, amikor nagy súlyosságú riasztást bírálnak felül; a nagy súlyosságú, jól alátámasztott kölcsönhatásokon emelkedő felülbírálási arány valódi irányítási aggály akkor is, ha az összes riasztásra vett átlag stabilnak látszik.

## Hogyan számítják ki

```
Felülbírálási arány = felülbírált riasztások / összes kiváltott riasztás × 100

Bontsa a következők szerint:
  - súlyossági szint (pl. ellenjavallt, súlyos, mérsékelt)
  - riasztás típusa (gyógyszer-kölcsönhatás, allergia, kettős kezelés,
    adagtartomány)
  - dokumentálták-e a felülbírálás okát

A „dokumentált felülbírálási arány” azt követi, hogy a felülbírálások
hányadához tartozik rögzített indoklás, ami önmagában is irányítási
mutató.
```

## Kidolgozott példa

Egy kórház CPOE-rendszere egy hónapban 10 000 gyógyszer-kölcsönhatási riasztást ad ki, ebből 8700-at bírálnak felül, így az összesített felülbírálási arány 87%. A súlyossági szerinti bontás azt mutatja, hogy az 500 „ellenjavallt” riasztásból 60-at bírálnak felül (12%), míg a 6000 „mérsékelt” riasztásból 5700-at (95%). A mérsékelt szint értéke nagyjából összhangban van a közzétett viszonyítási értékekkel, és önmagában nem ad okot aggodalomra; az ellenjavallt szint értéke egyedi esetek felülvizsgálatát indokolja, és az, hogy az ezen a szinten lévő 500 riasztásból csak 340 felülbírálat tartalmaz dokumentált indoklást, a cselekvésre alkalmasabb irányítási megállapítás.

## Adatforrások és megszorítások

Az elektronikus egészségügyi nyilvántartás auditnaplója vagy a CDS-szállító saját riasztómodulja rögzíti minden riasztás kiváltását és az arra adott választ, beleértve azt is, hogy a klinikus szabad szöveges vagy strukturált indoklást adott-e meg. A szervezetek között, vagy akár ugyanazon szervezet osztályai között a felülbírálási arányok összehasonlításához ellenőrizni kell, hogy a mögöttes riasztási szabálykészletek és súlyossági szintezés azonosak-e; az agresszíven hangolt szabálykészletű kórház alacsonyabb felülbírálási arányt mutat a klinikusi magatartáshoz semmi köze nem lévő okokból.

## Buktatók

- **A nyers felülbírálási arány egyetlen biztonsági pontszámként kezelése**: összemossa az alacsony értékű riasztások jól indokolt felülbírálását a valóban veszélyes kölcsönhatások nem biztonságos felülbírálásával; mindig súlyossági szint szerint bontson.
- **A felülbírálás okának rögzítése hiányzik**: dokumentált ok nélkül lehetetlen megkülönböztetni azt, hogy „ez a riasztás téves volt”, attól, hogy „ez a riasztás helyes volt, és a klinikus nem biztonságos döntést hozott”, ami a betegbiztonság szempontjából a valódi lényegi különbség.
- **Riasztási szabályok inflációja az idő során**: egyre több riasztás hozzáadása a „biztonság kedvéért” az alacsony értékűek megnyesése nélkül közvetlen oka az emelkedő felülbírálási aránynak és a riasztási fáradtságnak; a riasztási irányításnak magában kell foglalnia a rosszul teljesítő szabályok rendszeres felülvizsgálatát és kivezetését, nem csupán a monitorozást.
- **Eltérő megszakítási kialakítású rendszerek arányainak összehasonlítása**: a megszakító, kemény megállítású riasztás más felülbírálási magatartást eredményez, mint a passzív, nem blokkoló; a kettő nem közvetlenül összehasonlítható mutató.

## Források

- Szakértők által lektorált szakirodalom a klinikai döntéstámogatási riasztási fáradtságról, széles körben közzétéve többek között a JAMIA és az npj Digital Medicine folyóiratokban
- ONC / HealthIT.gov, az egészségügyi informatikai biztonságra vonatkozó útmutató a klinikai döntéstámogatáshoz
- Institute for Safe Medication Practices (ISMP), a CDS-riasztások tervezésére és irányítására vonatkozó útmutató
