# Betegportál-elfogadási arány

A betegportál-elfogadási arány azt méri, hogy a jogosult betegek mekkora hányada regisztrált egy online betegportálra (például NHS App, Patient Access, vagy elektronikus egészségügyi nyilvántartáshoz kötött portál, mint a MyChart), és használja is azt aktívan a leletek megtekintésére, időpontfoglalásra vagy az ellátócsapattal való üzenetváltásra. Ez a digitális bevonódás belépő szintű mutatója: az a beteg, aki sosem aktiválta a fiókját, nem profitálhat a portálra épülő egyetlen további digitális szolgáltatásból sem.

## Miért fontos

A portál csak akkor teremt értéket, ha a beteg használja, ezért a szervezeteknek az elfogadást tölcsérként érdemes követniük, nem egyetlen számként: a regisztráció, az aktiválás (az első érdemi művelet) és az aktív használat (használat egy visszatekintő időszakon belül) három különböző arány, amelyeket jóval túl gyakran vonnak össze. A digitális szolgáltatásokat működtető csapatokra gyakran nehezedik a nyomás, hogy egyetlen, kedvező főszámot jelentsenek, és fegyelem kell ahhoz, hogy ragaszkodjanak a nehezebb, őszintébb bontáshoz. Az alacsony vagy egyenlőtlenül elosztott elfogadás egyúttal esélyegyenlőségi jelzés is: az idősebb, alacsonyabb digitális jártasságú betegek, azok, akik nem a többségi nyelvet beszélik, vagy akiknek nincs megbízható szélessávú internetük vagy okostelefonjuk, rendszeresen kisebb eséllyel kerülnek be a számlálóba, így az átlagos elfogadási arány emelkedése elfedheti a szélesedő szakadékot éppen azoknál a betegeknél, akiknek gyakran a legnagyobb szükségük van az ellátással való kapcsolatra.

## Hogyan számítják ki

Mind a három szakaszt jelenteni kell, nem csak a regisztrációt, és a nevezőt mindig egyértelműen meg kell adni:

```
Regisztrációs arány = létrehozott portálfiókkal rendelkező betegek / jogosult betegpopuláció × 100
Aktiválási arány    = az első érdemi műveletet (eredmény megtekintése,
                      időpont lefoglalása, üzenet küldése) végrehajtó betegek /
                      fiókkal rendelkező betegek × 100
Aktív használati arány = az elmúlt 12 hónapban legalább egyszer bejelentkezett betegek /
                      jogosult betegpopuláció × 100
```

A jogosult betegpopulációt általában azok a betegek alkotják, akiknek egy meghatározott visszatekintő időszakban (jellemzően 24 hónap) legalább egy találkozásuk volt a szervezettel, és akik életkoruk és beleegyezési státuszuk alapján saját fiókot birtokolhatnak.

## Kidolgozott példa

Egy alapellátási hálózat 50 000 olyan beteget lát el, akik megfelelnek a jogosultsági meghatározásnak. Közülük 32 000 regisztrált a portálra (regisztrációs arány 64%). A 32 000 regisztrálóból 27 000 legalább egy érdemi műveletet végzett, például megtekintett egy vizsgálati eredményt (aktiválási arány a regisztráltak 84%-a). Az elmúlt 12 hónapban az eredeti 50 000 jogosult betegből 21 000 legalább egyszer bejelentkezett (aktív használati arány 42%). Ha csak a 64%-os regisztrációs számot jelentenék, az jelentősen eltúlozná a valós bevonódást; a 42%-os aktív használati arány az a szám, amelynek a portálprogram erőforrás-tervezési döntéseit kell vezérelnie.

## Adatforrások és megszorítások

A portálelemzési adatok jellemzően magából a szállítói platformból (bejelentkezési események, funkcióhasználat) vagy az alapul szolgáló elektronikus egészségügyi nyilvántartás naplójából származnak, és a szervezeteknek szkeptikusnak kell lenniük az olyan szállítói irányítópultokkal szemben, amelyek csak a regisztrációk számát mutatják. A meghatalmazotti hozzáférést (amikor egy szülő vagy gondozó a beteg nevében kezeli a fiókot) meg kell jelölni és külön kell jelenteni, mert ez megváltoztatja, hogy ki is valójában a „felhasználó”. A nevező megválasztása rendkívül fontos: ha az összes regisztrált betegre vetítünk a valóban jogosult, elérhető populáció helyett, az mindig alulbecsüli az elfogadást, míg ha csak az aktívan meghívott betegekre vetítünk, az mindig felülbecsüli, ezért a jogosultsági meghatározást rögzíteni kell, és minden jelentett arány mellett közzé kell tenni.

## Buktatók

- **A regisztráció elfogadásként való számolása**: egy létrehozott, de sosem használt fióknak közel nulla az értéke; a regisztráció mellett, nem helyette kell jelenteni az aktiválást és az aktív használatot.
- **A digitális kirekesztés figyelmen kívül hagyása**: az összesített elfogadási adatok emelkedhetnek, miközben a leginkább és legkevésbé digitálisan befogadott csoportok közötti szakadék szélesedik; ahol az adatkezelési szabályok engedik, mindig bontsa a mutatót életkor, szegénység, nyelv és fogyatékosság szerint.
- **Eltérő jogosultsági meghatározású szervezetek összehasonlítása**: az a portálprogram, amely csak a rögzített e-mail-címmel rendelkező betegeket hívja meg, magasabb arányt fog jelenteni, mint az, amely a teljes nyilvántartott listához mér, a teljesítményben mutatkozó valódi különbség nélkül.
- **Az egyszeri bejelentkezés tartós bevonódásnak tekintése**: a 12 hónapos visszatekintés bevett gyakorlat, de egy rövidebb ablak (például 90 nap) korábbi figyelmeztetést ad a csökkenő használatról.

## Források

- NHS England, NHS App használati és regisztrációs statisztikák (nhs.uk / digital.nhs.uk kiadványok)
- ONC / HealthIT.gov, Promoting Interoperability Program mutatók, köztük a View, Download, Transmit (VDT) betegi hozzáférési mutatók
- Szakértők által lektorált szakirodalom a betegportálok elfogadásáról és a digitális egészségügyi egyenlőtlenségekről, például a Journal of the American Medical Informatics Association (JAMIA) folyóiratban megjelent tanulmányok

Lásd még: [időpont-elmulasztási arány](../időpont-elmulasztási-arány/), amelyet a portálalapú önálló időpontfoglalás és az emlékeztetők közvetlenül befolyásolnak.
