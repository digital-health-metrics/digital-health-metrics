# Eszközök rendelkezésre állási aránya

Az eszközök rendelkezésre állási aránya azt méri, hogy az ütemezett felügyeleti idő mekkora hányadában van egy csatlakoztatott egészségügyi eszköz – távoli betegfelügyeleti érzékelő, viselhető eszköz vagy otthoni távellátási egység – ténylegesen online, ad adatot és működik megfelelően, szemben a nem elérhető, szétkapcsolt vagy meghibásodott állapottal. Ez minden távfelügyeleti vagy csatlakoztatott eszközös program alapvető infrastruktúramutatója: a gyakran offline lévő eszközből számított klinikai riasztás, biometrikus trend vagy elköteleződési szám csak olyan megbízható, mint a mögötte álló kapcsolat.

## Miért fontos

A távoli betegfelügyeleti program teljes klinikai értékajánlata a folyamatos vagy közel folyamatos adatrögzítésen múlik; a gyenge rendelkezésre állású eszköz a beteg klinikai képében csendes hézagokat hoz létre, amelyeket stabilitásnak lehet nézni (nincs riasztás, mert nincs adat, nem azért, mert semmi sem változott), ahelyett hogy felügyeleti hibaként azonosítanák. Az eszközök rendelkezésre állása a program költségének és a betegélménynek is előrejelzője: a gyakran megszakadó kapcsolatú eszköz támogatási hívásokat, betegi frusztrációt és esetleg szükségtelen klinikai megkeresést generál annak ellenőrzésére, hogy az adathiány valódi klinikai eseményt vagy egyszerűen technikai hibát tükröz-e. Mivel az eszköz-rendelkezésre állási hibák gyakran a szervezet által ellenőrzött infrastruktúrának (rosszul konfigurált mobilhálózati átjáró, gyenge Wi-Fi-lefedettség a beteg otthonában, elhanyagolt eszközpark) tulajdoníthatók, nem a betegnek, ez a mutató egyértelműen a szállító és a technikai üzemeltetési csapat hatáskörébe tartozik, nem keverendő válogatás nélkül a betegelköteleződési mutatók közé.

## Hogyan számítják ki

```
Eszközök rendelkezésre állási aránya = az az idő, amíg az eszköz online volt
                                        és érvényes adatot továbbított /
                                        teljes ütemezett felügyeleti idő
                                        × 100

Az állásidő kiváltó okait az adatok lehetősége szerint bontsa:
  Eszközoldali hiba     (akkumulátor, hardverhiba, firmware-összeomlás)
  Kapcsolati hiba       (mobil/Wi-Fi/VPN kiesés)
  Betegoldali tényezők  (az eszköz ki van kapcsolva, hatótávon kívülre
                         került)

A rendelkezésre állás mellett követendő támogató technikai paraméterek:
  Átlagos CPU-kihasználtság, memóriahasználat és akkumulátorszint
  eszközönként
  Kapcsolati hibák közötti átlagos idő
  Átlagos idő az újracsatlakozásig kiesés után
```

## Kidolgozott példa

Egy távoli szívfelügyeleti program 1000 csatlakoztatott eszközt telepít, mindegyiktől folyamatos adattovábbítást várva. Egy 30 napos hónap alatt (eszközönként 720 ütemezett felügyeleti óra) az eszközpark összesen 705 600 tényleges online órát naplóz az ütemezett 720 000 órából, így az eszközpark egészére vetített eszköz-rendelkezésre állási arány 705 600 / 720 000 × 100 = 98%. A 14 400 állásidő-óra kiváltó ok szerinti elemzése azt mutatja, hogy 60%-a egy konkrét vidéki szolgáltatási régióban koncentrálódó mobilkapcsolati kiesésnek, 25%-a a cserére megjelölt, öregedő akkumulátorú eszközöknek, 15%-a pedig a betegek általi átmeneti kikapcsolásnak tulajdonítható. Ez a bontás két világos, különböző beavatkozásra mutat – kapcsolati javításra az érintett régióban és proaktív akkumulátorcsere-programra –, amelyeket egyetlen összesített rendelkezésre állási szám nem különböztetett volna meg.

## Adatforrások és megszorítások

A rendelkezésre állási adatok az eszközgyártó vagy a platformszállító saját eszközkezelő és telemetriai rendszeréből származnak, amely eszközönként naplózza a kapcsolódási és szívverés- (heartbeat) eseményeket; a szervezetnek pontosan meg kell erősítenie, hogy a szállító mit számít „online”-nak (az eszköz jelentheti magát hálózathoz csatlakozottnak, miközben nem továbbít érvényes klinikai adatot, amit klinikai szempontból állásidőnek kell számítani, még ha a szállító saját műszerfala csatlakozottnak jelzi is). A rendelkezésre állást eszközkohorsz vagy földrajzi terület szerint kell jelenteni, ahol a mennyiség ezt lehetővé teszi, mivel a kapcsolati minőség gyakran földrajzilag csoportosul (vidéki mobillefedettség, régebbi épületek Wi-Fi-je), nem egyenletesen oszlik el a betegpopulációban, és az eszközpark egészére vonatkozó összesített szám elfedhet egy súlyos, orvosolható regionális problémát.

## Buktatók

- **A hálózati kapcsolat összekeverése az érvényes adattovábbítással**: az eszköz a szállítói műszerfalon „csatlakozottnak” tűnhet, miközben nem továbbít használható klinikai adatot; a rendelkezésre állást az érvényes adatok tényleges beérkezéséhez kell definiálni és mérni, ne csak a nyers hálózati kapcsolathoz.
- **Csak az eszközpark egészére vonatkozó átlag jelentése**: ez elrejthet egy súlyos, földrajzilag vagy eszközkohorsz-specifikusan jelentkező állásidő-problémát, amelyet egy célzott átlag feltárna, és amelynek konkrét, orvosolható megoldása van.
- **Az állásidő kiváltó okának meg nem különböztetése**: az eszközoldali, a kapcsolati és a betegoldali állásidő mind teljesen más beavatkozást igényel; a kiváltó ok szerinti bontás nélküli egyetlen állásidő-százalék alapján nem lehet cselekedni.
- **Az adathiány alapértelmezett klinikai stabilitásként kezelése**: az offline eszköz hiányzó adatfolyama technikai kapcsolati ellenőrzést váltson ki, ne értelmezzék csendben úgy, hogy „nincs hír, jó hír” a beteg klinikai állapotára nézve.

## Források

- Continua Design Guidelines / Personal Connected Health Alliance, a csatlakoztatott egészségügyi eszközök technikai interoperabilitási szabványai
- ONC / HealthIT.gov, a távoli betegfelügyeleti programok bevezetésére és technikai követelményeire vonatkozó útmutató
- Szakértők által lektorált szakirodalom a távoli betegfelügyeleti eszközök megbízhatóságáról és adatteljességéről, például az npj Digital Medicine folyóiratban megjelent tanulmányok

Lásd még: [triázs-irányítási pontosság](../triázs-irányítási-pontosság/), amely a helyes triázsdöntés meghozatalához teljes, megbízható eszközadatok beérkezésén múlik.
