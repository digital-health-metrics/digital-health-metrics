# Gyógyszeradherencia-arány

A gyógyszeradherencia-arány azt méri, hogy a beteg milyen mértékben szedi az előírt gyógyszert az előírás szerint, leggyakrabban a meghatározott időszak azon napjainak hányadaként kifejezve, amelyeken a betegnek az előírás szerint rendelkezésére állt a gyógyszere. A digitális egészségügy egyik legnagyobb hatású mutatója, mert a nem adherencia gyakori, a megfelelő támogatással nagyrészt megelőzhető, és közvetlenül összefügg a rosszabb klinikai kimenetekkel és a magasabb későbbi költségekkel – éppen ezt a hiányosságot hivatottak betölteni a gyógyszeremlékeztető-alkalmazások, az okos gyógyszeres üvegek és a gyógyszertári újratöltési emlékeztetők.

## Miért fontos

A közegészségügyi szervek becslése szerint a krónikus betegségek gyógyszereinek nem adherenciája egyes betegségeknél akár 50%-ot is elérhet, és az elkerülhető kórházi felvételek, a betegség progressziója és a kezelési kudarc vezető megelőzhető oka, amelyet gyakran a gyógyszernek, nem pedig a következetlen szedésnek tulajdonítanak. A digitális adherenciaeszközök kifejezetten e hiány betöltésére léteznek, így minden olyan programnál, amely gyógyszeres komponenst tartalmaz, az adherenciaarány általában az egyetlen legfontosabb döntéshozói mutató: oksági értelemben a biometrikus javulás, az újrafelvétel és a program által egyébként jelenthető legtöbb klinikai kimeneti mutató előtt áll. Az a program, amely az adherencia mozdítása nélkül javítja az elköteleződést vagy az elégedettséget, valószínűleg még nem mutatta be a klinikai előny hihető mechanizmusát.

## Hogyan számítják ki

```
Fedezett napok aránya (Proportion of Days Covered, PDC) = a mérési
                                    időszak azon napjai, amelyeken a
                                    gyógyszer rendelkezésre állt (a
                                    kiváltások napi ellátása alapján) /
                                    a mérési időszak napjai × 100

Gyógyszerbirtoklási arány (Medication Possession Ratio, MPR) = az
                                    időszakban megszerzett összes napi
                                    ellátás / az időszak napjai × 100
                                    (korai újratöltésekkel meghaladhatja
                                    a 100%-ot; emiatt általában a PDC
                                    az előnyben részesített)

A beteget jellemzően „adherensnek” minősítik ≥ 80%-os PDC-küszöbnél,
a széles körben használt minőségmérési konvenciót követve.
```

## Kidolgozott példa

Egy betegnek napi krónikus gyógyszert írnak elő egy 90 napos mérési időszakra. A gyógyszertári kiváltási nyilvántartások szerint a beteg annyi gyógyszert szerzett be, hogy a 90 napból 76-ot fedezzen, két hézaggal: 9 napos hézag a kifogyás és az újratöltés között, és 5 napos hézag egy kórházi felvétel körül. A PDC 76 / 90 × 100 = 84%, ami átlépi a hagyományos 80%-os adherenciaküszöböt. Ha ugyanezeket a hézagokat a tényleges fedezett napok helyett a kiadott napi ellátás alapján MPR-rel mérnék, az időszak egy másik pontján végzett korai újratöltés a hányadost 100% fölé emelhetné, ami szemlélteti, miért a PDC a konzervatívabb és általában előnyben részesített mérték.

## Adatforrások és megszorítások

A gyógyszertári számlázási vagy kiváltási adatok (gyógyszerellátási menedzsertől vagy összekapcsolt gyógyszertári rendszerből) a szabványos forrás, mivel azt tükrözik, hogy a beteg ténylegesen mit szerzett be, nem azt, hogy mit írtak elő neki; a recept adatai önmagukban túlbecsülik az adherenciát, mert nem erősítik meg, hogy a beteg valaha átvette-e a gyógyszert. A digitális adherenciaeszközök – okos gyógyszeres üvegek, lenyelhető érzékelők, csatlakoztatott okos inhalátorok, amelyek légzőszervi betegségeknél, például asztmánál és COPD-nél naplózzák minden használatot, valamint alkalmazásalapú bejelentkezések – nagyobb felbontású adatot nyújtanak arról, hogy az adagot ténylegesen bevették-e, nem csupán beszerezték, de a betegek kis, esetleg nem reprezentatív kisebbsége használja őket, így az eszközzel igazolt adherencia és a számlázási adatokon alapuló PDC egy populáción belüli keverése óvatos értelmezést igényel. Az adherenciát elég hosszú időszakon kell mérni ahhoz, hogy kisimítsa az egyedi kihagyott adagokat, de elég rövid ahhoz, hogy észlelje az érdemi csökkenést, mielőtt klinikai kárt okozna – a krónikus gyógyszereknél a 90 napos gördülő ablakok gyakoriak.

## Buktatók

- **Az MPR használata anélkül, hogy közölnék, meghaladhatja a 100%-ot**: a korai újratöltésekből vagy felhalmozásból származó, megmagyarázatlan 100% feletti hányadosok megbízhatatlanná teszik a betegek és időszakok közötti összehasonlítást, hacsak nem PDC-t használnak, vagy a hányadost nem korlátozzák kifejezetten.
- **A receptadatok vagy rendelési adatok adherenciabizonyítékként kezelése**: a gyógyszertárnak felírt vagy elküldött recept semmit sem mond arról, hogy a beteg átvette vagy bevette-e a gyógyszert; csak a kiváltási vagy eszközadat zárja be ezt a hiányt.
- **Egyetlen adherenciaküszöb válogatás nélküli alkalmazása minden betegségre**: a dózisok 20%-ának kihagyásának klinikai következménye gyógyszercsoportonként rendkívül eltér (pl. antikoagulánsok és sztatinok), így az egyetlen, általánosan használt 80%-os küszöb egyes gyógyszereknél alul- vagy túlbecsülheti a klinikai kockázatot.
- **A gyógyszerváltások és megszakítások figyelmen kívül hagyása**: az a beteg, akit klinikailag megfelelően másik gyógyszerre állítanak át, az eredeti gyógyszerre nézve nagy adherenciacsökkenésként jelenhet meg, ha az átállást nem veszik figyelembe a számításban.

## Források

- Pharmacy Quality Alliance (PQA), a Proportion of Days Covered mérték specifikációi
- Centers for Medicare & Medicaid Services (CMS), a Star Ratings gyógyszeradherencia-mérései
- Szakértők által lektorált szakirodalom a gyógyszeradherencia méréséről és a digitális adherencia-beavatkozásokról, például a Journal of Managed Care & Specialty Pharmacy folyóiratban megjelent tanulmányok

Lásd még: [biometrikus javulási arány](../biometrikus-javulási-arány/), amelynek a krónikus betegségi gyógyszerek adherenciája az egyik fő hajtóereje.
