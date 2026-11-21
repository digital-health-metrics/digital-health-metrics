# ePROM kitöltési arány

Az ePROM kitöltési arány azt méri, hogy az ütemezett elektronikus betegek által jelentett kimeneti mérések (ePROM-ok) – szabványosított, validált kérdőívek, amelyek a beteg saját beszámolóját rögzítik tüneteiről, működéséről vagy életminőségéről, papír helyett digitálisan kézbesítve – hányada kerül ténylegesen kitöltésre. Ugyanannyira adatminőségi, mint elköteleződési mutató: a PROM-program klinikai és kutatási értéke teljes mértékben azon múlik, hogy a kitöltési arány elég magas-e ahhoz, hogy az összegyűjtött válaszok a teljes beíratott populációt reprezentálják, ne csak a legelkötelezettebb vagy legkevésbé tünetes részhalmazt.

## Miért fontos

A betegek által jelentett kimenetek a klinikus által rögzített vagy eszközzel mért adatok közvetlen, a beteg által hitelesített kiegészítői, amelyek az egészség olyan dimenzióit rögzítik – fájdalom, működés, életminőség –, amelyeket a dokumentáció átnézése vagy biometrikus mérés nem tud; a PROM-gyűjtés digitalizálása éppen azért létezik, hogy ezeket az adatokat olcsóbbá és könnyebben nagy léptékben gyűjthetővé tegye, mint ahogy azt a papíralapú adminisztráció valaha lehetővé tette. Az alacsony kitöltési arányú PROM-program azonban sajátos és súlyos torzítás kockázatával jár: a rosszabbul érző betegek gyakran kevésbé valószínű, hogy kitöltenek egy hosszú kérdőívet, így a csökkenő kitöltési arány maga is a populáció egészségi állapota romlásának korai figyelmeztető jele lehet, és az alacsony összesített kitöltési arány a begyűjtött válaszokat a valódi populáció tapasztalatánál jobbnak mutathatja, egyszerűen azért, mert a leginkább tüneteket mutató betegek alulreprezentáltak a kitöltöttek között. Ezért a kitöltési arányt mindig magukkal a PROM-pontszámokkal együtt kell jelenteni, nem másodlagos működési részletként kezelni.

## Hogyan számítják ki

```
ePROM kitöltési arány = teljesen kitöltött ePROM-ok / elküldött vagy
                         ütemezett ePROM-ok × 100

Külön jelentendő:
  Kezdeti kitöltési arány    (az első kérdőív egy felügyeleti
                              sorozatban)
  Longitudinális kitöltési arány (a folyamatban lévő felügyeleti
                              sorozat későbbi kérdőívei, amely
                              jellemzően idővel csökken, és trendként
                              kell követni, nem egyetlen számként)

A „részben kitöltött” kérdőívet a „teljesen kitöltött” és a „meg
nem kezdett” kategóriától elkülönítve kell meghatározni és jelenteni.
```

## Kidolgozott példa

Egy onkológiai klinika validált tünetterhelési ePROM-ot küld 400 betegnek minden havi utóellenőrző vizit előtt. Az első hónapban 340 beteg teljesen kitölti a kérdőívet (kitöltési arány 85%), 30 részben tölti ki, és 30 meg sem kezdi. Ugyanazon felügyeleti sorozat hatodik hónapjára a teljes válaszok száma ugyanazon 400 fős kohorszból 260-ra esett (65%) – jelentős longitudinális csökkenés, amelyet teljesen figyelmen kívül hagynának, ha csak az első hónap 85%-át jelentenék statikus összesített mutatóként. Annak vizsgálata, hogy mely betegek morzsolódnak le (tünetsúlyosság, betegségstádium vagy életkor szerint), feltárhatja, hogy a csökkenés a felmérési fáradtságot, a romló tünetek miatti nehezebb kitölthetőséget vagy technikai hozzáférési akadályt tükröz-e.

## Adatforrások és megszorítások

A kitöltési adatok az ePROM-platform saját kézbesítési és válaszolási naplóiból származnak, amelyek meg tudják különböztetni a „meg nem kezdett”, a „részben kitöltött” és a „teljesen kitöltött” állapotot – ezt a megkülönböztetést mindig meg kell őrizni és jelenteni, nem összevonni bináris kitöltött/nem kitöltött számmá, mivel a részleges kitöltés gyakran jelzi a kérdőív azon konkrét pontját, ahol a betegek nehézségekbe ütköznek vagy kiszállnak. A kitöltési arányt a kérdőív kézbesítési módjával együtt kell értelmezni (szöveges üzenetben küldött link, alkalmazás-értesítés vagy portálbejelentkezést igénylő kézbesítési mód), mivel maga a kézbesítési súrlódás a kérdőív tartalmától vagy a beteg mögöttes állapotától függetlenül befolyásolja a kitöltést. Maga a PROM-hoz mindig validált mérőeszközt (nem ad hoc kérdéssort) kell használni, mert az nem validált mérőeszköz kitöltési aránya semmi megbízhatót nem mond az eredményül kapott adatok klinikai használhatóságáról, még ha a kitöltés magas is.

## Buktatók

- **A csökkenő kitöltési arány kizárólag kézbesítési problémaként kezelése**: a kitöltés longitudinális csökkenése valóban romló betegtüneteket (a kérdőív kitöltésére túl rosszul lévő betegeket) tükrözhet, nem felmérési fáradtságot vagy technikai problémát, és ez a megkülönböztetés a klinikai értelmezés szempontjából rendkívül fontos.
- **A részleges és a teljes kitöltés egyetlen kategóriába vonása**: a részben kitöltött kérdőív jelentősen más adatminőség, mint a teljesen kitöltött; jelentse őket külön, és vizsgálja meg, hogy a kérdőív folyamatának mely pontján hagyják abba a betegek.
- **A kitöltési arány jelentése a válaszadási torzítás kockázatának jelentése nélkül**: a mérsékelt kitöltési arány indítson vizsgálatot arról, hogy a válaszadók szisztematikusan eltérnek-e (tünetsúlyosság, életkor, digitális jártasság szerint) a nem válaszadóktól, mivel a csak a válaszadókból számított PROM-pontszámok félreképviselhetik a teljes populációt.
- **Nem validált vagy saját fejlesztésű kérdőív használata**: a kitöltési arány értelmetlen adatminőségi jelzésként, ha a kitöltött mérőeszközt maga nem validálták klinikailag a mért állapotra és populációra.

## Források

- International Consortium for Health Outcomes Measurement (ICHOM), szabványkészlet-fejlesztés és PROM-bevezetési útmutató
- U.S. Food and Drug Administration (FDA), a betegek által jelentett kimeneti mérésekre vonatkozó útmutató klinikai vizsgálatokban és szabályozási benyújtásokban
- Szakértők által lektorált szakirodalom az elektronikus PROM-ok bevezetéséről és kitöltési arányairól, például a Quality of Life Research és a Journal of Medical Internet Research (JMIR) folyóiratban megjelent tanulmányok

Lásd még: [beteg Net Promoter Score](../beteg-net-promoter-score/), egy rokon, de különálló, beteg által jelentett mutató, amely a klinikai kimenet helyett az elégedettséget méri.
