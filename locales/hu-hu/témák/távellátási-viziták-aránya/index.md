# Távellátási viziták aránya

A távellátási viziták aránya azt fejezi ki, hogy a szolgáltatás összes találkozásának mekkora hányadát bonyolítják le távolról, videón vagy telefonon, személyes jelenlét helyett. Ez az ellátási csatorna összetételét mérő mutató, nem tevékenységi mutató: azt mondja meg, hogyan nyújtják az ellátást, ami a kapacitástervezés, a hozzáférés és a klinikai megfelelőség szempontjából fontos, az ellátás összmennyiségétől teljesen függetlenül.

## Miért fontos

A távolról nyújtott ellátás aránya a COVID-19-világjárvány idején a virtuális konzultációk gyors elterjedése után számos szolgáltatás működési modelljét megváltoztatta, és a szervezeteknek stabil módszerre van szükségük annak követéséhez, hogy ez az eltolódás tartós marad-e, visszatér-e a járvány előtti normák felé, vagy a szakpolitika aktívan irányítja. A távellátás nem egységes helyettesítője a személyes vizitnek: a megfelelőség szakterületenként, a konzultáció típusa szerint (egy gyógyszerfelülvizsgálat egészen másképp viselkedik, mint egy fizikális vizsgálat) és a betegek preferenciái szerint is eltér, ezért a „helyes” arány klinikai és működési megítélés kérdése, nem maximalizálandó célérték. A finanszírozók és a szabályozók is használják ezt az arányt a kimeneti és biztonsági mutatók mellett a térítési politika meghatározásához, és annak ellenőrzésére, hogy a távellátást nem pusztán olyan esetekre alkalmazzák-e, amelyeket személyesen kellene megvizsgálni.

## Hogyan számítják ki

```
Távellátási viziták aránya = távellátási találkozások /
                             (távellátási találkozások + személyes találkozások) × 100

Ahol lehetséges, jelentse külön a módozatok szerint:
  Videós arány    = videós találkozások / összes találkozás × 100
  Telefonos arány = kizárólag telefonos találkozások / összes találkozás × 100

A nevezőben csak a lezajlott találkozások szerepeljenek (lásd a buktatókat),
egy meghatározott szolgáltatásra, szakterületre és időszakra vonatkozóan.
```

## Kidolgozott példa

Egy közösségi mentálhigiénés szolgálat egy negyedévben 4000 lezajlott járóbeteg-kapcsolatfelvételt rögzít: 1200 személyes, 1600 videós és 1200 telefonos volt. A távellátási viziták aránya (1600 + 1200) / 4000 × 100 = 70%, ebből a videós arány 40%, a kizárólag telefonos arány 30%. Ha csak az összevont 70%-ot jelentenék, az elfedné, hogy a „távellátás” itt jelentős része csak hang alapú, aminek jellemzően más a klinikai kockázati profilja és a betegélménye, mint a videónak.

## Adatforrások és megszorítások

A találkozás típusát általában vagy strukturált mezőben rögzítik az elektronikus egészségügyi nyilvántartásban (vizit típusa vagy helyszíne), vagy számlázási kódokból következtetik ki, például a szolgáltatás helyét jelölő kódból vagy a számlán szereplő távellátási módosítóból. A kódolási gyakorlat szervezetek között, sőt ugyanazon szervezet klinikusai között is jelentősen eltér, ezért a telephelyek arányainak összehasonlítása előtt meg kell győződni arról, hogy a „távellátást” mindenhol ugyanúgy kódolják. Az a vizit, amely videóként indul, de technikai probléma miatt telefonra vált, egységesen kódolandó (általában azon módozat szerint, amely a klinikai tartalom nagy részét hordozta), és ezt a szabályt dokumentálni kell, nem az egyéni megítélésre bízni.

## Buktatók

- **Megkísérelt, nem pedig lezajlott vizitek számolása**: az a távellátási időpont, amelynél nem jött létre a kapcsolat, és újrafoglalják, ne növelje kétszer a távellátási nevezőt.
- **A videó és a telefon felcserélhetőnek tekintése**: eltérő klinikai és esélyegyenlőségi következményeik vannak (a telefon kizárja a vizuális értékelést, de hozzáférhetőbb azoknak a betegeknek, akiknek nincs okostelefonjuk, megbízható adatkapcsolatuk vagy a videóhoz alkalmas, privát helyük); ahol lehet, mindig külön jelentse őket.
- **A távolmaradási kapcsolat figyelmen kívül hagyása**: a távolmaradási viselkedés gyakran módozatonként eltér; mielőtt a távellátási arány emelkedéséből a „javuló hozzáférésre” következtetne, lásd az [időpont-elmulasztási arányt](../időpont-elmulasztási-arány/).
- **A magas arány eleve jónak tekintése**: egyes állapotoknál és konzultációtípusoknál a megfelelő távellátási arány klinikai megfontolásból alacsony, nem a digitális érettség hiánya miatt.

## Források

- Centers for Medicare & Medicaid Services (CMS), a Medicare távellátási igénybevételi adatai és szakpolitikai kiadványai
- NHS England, járóbeteg- és közösségi szolgáltatások aktivitási statisztikái, beleértve a virtuális/távoli megjelenések bontását
- Szakértők által lektorált szakirodalom a távellátás igénybevételi trendjeiről és a módozatspecifikus kimenetekről
