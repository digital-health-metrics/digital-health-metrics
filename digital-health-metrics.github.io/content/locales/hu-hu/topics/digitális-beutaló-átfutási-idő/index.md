# Digitális beutaló átfutási idő

A digitális beutaló átfutási idő az az eltelt idő, amely attól kezdve telik el, hogy a beutaló klinikus elektronikus beutalót ad le, addig, amíg a fogadó szolgáltatás azt megtriázsolja, és elfogadja, elutasítja vagy időpontot foglal rá. Folyamat- (áramlási) mutató, amely különbözik a beteg teljes várakozási idejétől, és egyike azon legvilágosabb helyeknek, ahol egy digitális rendszerváltoztatás (strukturált e-beutaló, képalapú triázs, szabványosított beutalóűrlapok) működési számot mozdít el, nem csupán elégedettségi pontszámot.

## Miért fontos

A lassú vagy erősen változó triázslépés még azelőtt késést okoz, hogy a beteg felkerülne a klinikai várólistára, és mivel ez a késés bármilyen klinikai ellátás megkezdése előtt történik, tiszta folyamatpazarlás, amelynek megszüntetésére a digitális eszközök kiválóan alkalmasak. Azok a beutalórendszerek, amelyek hiányzó információk miatt „visszaküldés a beutalónak” kört kényszerítenek ki, újrafeldolgozási hurkokat hoznak létre, amelyeket könnyű figyelmen kívül hagyni, ha az átfutási időt csak az elsőre tisztán átmenő beutalókon mérik. Ahol a szolgáltatás strukturált digitális beutalóűrlapokat, kötelező mezőket vagy képalapú triázst vezetett be (például a teledermatológiában), az átfutási idő általában az előny bizonyításának legmeggyőzőbb egyetlen mutatója, mivel a változás előtt és után ugyanazzal a mérőeszközzel mérhető.

## Hogyan számítják ki

```
Átfutási idő = időbélyeg(triázsdöntés) − időbélyeg(beutaló leadása)

A mediánt és egy magas percentilist (általában a 90.) kell jelenteni,
nem csak az átlagot, mert az eloszlást a visszaküldött vagy összetett
beutalók erősen jobbra ferdítik.

Vegye figyelembe az al-szakaszok időzítéseit, ha a rendszer rögzíti:
  Leadás → a szolgáltatás átvétele
  Átvétel → triázsdöntés
  Triázsdöntés → lefoglalt időpont (ahol releváns)
```

## Kidolgozott példa

Egy e-beutalórendszer auditnaplója szerint a leadástól a triázsdöntésig a medián idő 1,8 nap az összes szakterületen, a 90. percentilis ideje 6 nap, főként a hiányzó klinikai információ miatt a beutalónak visszaküldött beutalók miatt. Egy ugyanazon a platformon képalapú triázst használó teledermatológiai útvonal 4 órás medián átfutási időt és 1 napos 90. percentilist ér el, mert egy fényképfelvétel és a strukturált kórelőzmény szinte mindig elegendő a triázsdöntéshez további levelezés nélkül.

## Adatforrások és megszorítások

Az elsődleges forrás az e-beutaló- vagy beutalókezelő rendszer saját auditnaplója, a leadási és döntési időbélyegekkel; a szervezeteknek meg kell erősíteniük, hogy az „óra” megáll-e, amíg a beutalót további információért visszaküldik, vagy folyamatosan fut, mivel a két meghatározás ugyanazon folyamat esetében lényegesen eltérő számokat ad. Az átfutási időt következetesen naptári vagy munkaórákban kell jelenteni, mivel a hétvégi és ünnepnapi hatások egyébként eltorzíthatják az eltérő munkarendű szolgáltatások összehasonlítását.

## Buktatók

- **Csak a „tiszta” beutalók mérése**: az elutasított vagy visszaküldött beutalók kizárása a számításból elrejti azt az újrafeldolgozási terhet, amelynek csökkentésére a digitális eszközöket gyakran kifejezetten szánják.
- **Az átlag jelentése a medián és a percentilisek helyett**: néhány hosszan húzódó, visszaküldött beutaló az átlagot messze a tipikus beteg tényleges tapasztalata fölé húzza.
- **Az átfutási idő összekeverése a teljes várakozási idővel**: az átfutási idő csak a triázslépést fedi le; a beteg teljes élménye magában foglalja a későbbi klinikai várólistát is, amely külön mutató, külön kapacitási korlátokkal.
- **Az al-szakaszok meg nem különböztetése**: az a szolgáltatás, amely csak a végponttól végpontig tartó időt méri, nem tudja megmondani, hogy a lassú szám oka a hiányos információt beküldő beutaló, a fogadó szolgáltatás triázskapacitása, vagy mindkettő.

## Források

- NHS England, e-Referral Service (e-RS) statisztikák és szolgáltatásspecifikációk
- Szakértők által lektorált szakirodalom az elektronikus beutalókezelő rendszerekről és a digitális triázsútvonalakról, beleértve a teledermatológiát
- ONC / HealthIT.gov, az interoperabilitásra és a beutalók koordinációjára vonatkozó útmutató
