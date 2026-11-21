# Ágynap-csökkentés

Az ágynap-csökkentés azt méri, hogy összesen hány fekvőbeteg-kórházi ágynapot sikerült megtakarítani azzal, hogy egy meghatározott ellátási epizódot – leggyakrabban a műtét utáni lábadozást vagy az akut állapotok kezelését – a hagyományos fekvőbeteg-ellátásról digitálisan támogatott alternatívára, például virtuális osztályra vagy otthoni kórházi ellátási programra helyeznek át. Ez a virtuális osztályok és az otthoni kórházi ellátási kezdeményezések elsődleges kapacitásmutatója, amely az ellátási modell klinikai változását közvetlenül abba a „pénznembe” (ágykapacitás) váltja át, amellyel a kórházi működés és a rendszertervezők ténylegesen gazdálkodnak.

## Miért fontos

A fekvőbeteg-ágykapacitás bármely kórházi rendszer egyik legszűkösebb és legdrágább erőforrása, a virtuális osztályok és az otthoni kórházi ellátási programok központi értékajánlata pedig az, hogy biztonságosan képesek meghatározott szintű klinikai ellátást nyújtani fizikai ágy elfoglalása nélkül, felszabadítva a kapacitást azok számára, akiket más módon nem lehet ellátni. Az ágynap-csökkentés a gyakran elvont állítást („ez a program javítja az ellátást”) olyan konkrét működési számmá alakítja, amelyre a kórházi kapacitástervezők, a pénzügyi csapatok és a megrendelők közvetlenül építhetnek: segítségével modellezhető, hogy egy távfelügyeleti program beruházása megtérül-e a megtakarított ágyköltségekben, és mekkora mértékben. Mivel az ágynap-csökkentésnek csak a betegbiztonság megőrzése mellett van értéke, mindig biztonsági kimeneti mutatóval (például az újrafelvételi vagy a fekvőbeteg-ellátásba való visszaterelési arány) együtt kell jelenteni ugyanarra a populációra, soha nem helyette.

## Hogyan számítják ki

```
Ágynap-csökkentés = a hagyományos fekvőbeteg-ellátásban várható ágynapok
                     (egy illesztett betegkohorsz korábbi ápolási
                     időtartam-adatai alapján) − a virtuális/digitális
                     útvonalon lévő betegek által ténylegesen felhasznált
                     ágynapok

Klinikai útvonalanként jelentendő (pl. műtét utáni lábadozás, akut
légzőszervi exacerbáció), mivel a várható ápolási idő állapotonként
rendkívül eltér, és egymással nem összefüggő útvonalak összevont
száma nem értelmezhető.
```

## Kidolgozott példa

Egy kórház korábbi adatai szerint egy adott elektív sebészeti beavatkozás utáni lábadozó betegek átlagos fekvőbeteg-ápolási ideje 4 nap. Egy virtuális osztályi program 150, ugyanazon beavatkozás utáni lábadozó beteget vesz fel, és átlagosan 1,5 fekvőbeteg-nap után bocsátja el őket, a lábadozás hátralévő részét távolról felügyelve. Az ágynap-csökkentés (4 − 1,5) × 150 = 375 ágynap a mérési időszakban. Ezt a számot a virtuális osztályi kohorsz 30 napos fekvőbeteg-ellátásba való visszaterelési arányával és újrafelvételi arányával együtt kell jelenteni ugyanarra a 150 betegre, mivel az az ágynap-megtakarítás, amely lényegesen magasabb visszaterelési vagy újrafelvételi arány árán jön létre, nem az a klinikai siker, amelyet a címszám egyébként sugallna.

## Adatforrások és megszorítások

A várható ágynapokhoz hiteles korábbi alapvonal szükséges, ideális esetben a hagyományos fekvőbeteg-ellátásban kezelt, a virtuális osztály populációjához hasonló klinikai jellemzőkkel (életkor, társbetegség, beavatkozás típusa, súlyosság) rendelkező, illesztett betegkohorszból, mivel az illesztetlen korábbi átlaggal való összehasonlítás a valódi csökkenés túl- vagy alulbecslésének kockázatával jár, ha a digitálisan kezelt kohorsz szisztematikusan egészségesebb vagy betegebb a korábbi összehasonlító csoportnál. A digitális útvonalon ténylegesen felhasznált ágynapok a kórház saját felvételi-elbocsátási-áthelyezési (ADT) rendszeréből származnak; a felügyelt lábadozási időszak alatti bármely fekvőbeteg-ellátásba való visszatérést őszintén a program terhére kell elszámolni (felhasznált ágynapként, nem kizárva), mivel a visszaterelések kihagyása a számításból mesterségesen felfújná a látszólagos csökkenést.

## Buktatók

- **Ágynap-csökkentés jelentése illesztett biztonsági összehasonlítás nélkül**: az a virtuális osztály, amely ágynapokat takarít meg, de lényegesen rosszabb visszaterelési vagy újrafelvételi aránnyal rendelkezik a hagyományos ellátásnál, nem igazolt valódi javulást; mindig mindkettőt együtt kell jelenteni.
- **Illesztetlen vagy elavult korábbi alapvonal használata**: a más esetösszetételű, társbetegség-terhű vagy klinikai gyakorlati korszakú korábbi kohorsszal való összehasonlítás jelentősen túl- vagy alulbecsülheti a valódi ágynap-megtakarítást.
- **A fekvőbeteg-ellátásba való visszaterelések kihagyása a számításból**: az a beteg, akit virtuálisan felügyelnek, de a lábadozás közben fekvőbeteg-ágyra terelnek vissza, annak ágynapjait a program terhére kell elszámolni, nem csendben kihagyni az elemzésből.
- **Nagyon eltérő várható ápolási idejű útvonalak összevonása**: az ágynap-csökkentés klinikailag össze nem függő útvonalakon (például a műtét utáni lábadozás és a krónikus légzőszervi kezelés) egyetlen számba való összegzése elfedi, hogy melyik konkrét útvonal eredményezi ténylegesen a megtakarítást.

## Források

- NHS England, a virtuális osztályokra és az otthoni kórházi ellátási programokra vonatkozó útmutatók és az ágynaphatás-jelentési szabványok
- Szakértők által lektorált szakirodalom az otthoni kórházi ellátási és virtuális osztályi modellekről, például a JAMA Internal Medicine és az npj Digital Medicine folyóiratban megjelent tanulmányok
- Institute for Healthcare Improvement (IHI), a kapacitáskezelésről és az alternatív ellátási modellekről szóló útmutatók

Lásd még: [kórházi újrafelvételi arány](../kórházi-újrafelvételi-arány/), az a biztonsági mutató, amelyet mindig minden, ugyanarra a betegpopulációra vonatkozó ágynap-csökkentési állítás mellett jelenteni kell.
