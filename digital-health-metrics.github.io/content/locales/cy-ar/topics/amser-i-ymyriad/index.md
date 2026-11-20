# Amser i Ymyriad

Amser i ymyriad yw'r amser sy'n mynd heibio rhwng cynhyrchu rhybudd iechyd awtomataidd, er enghraifft pan fydd dyfais monitro o bell yn canfod arwydd hanfodol y tu allan i'r amrediad neu pan fydd offeryn brysbennu digidol yn nodi claf sy'n gwaethygu, ac aelod o'r tîm clinigol yn dechrau ymateb mewn gwirionedd. Dyma'r metrig proses sy'n penderfynu a yw system rybuddio awtomataidd yn cyflawni ei haddewid craidd: canfod problem yn gynt nag y byddai model traddodiadol o wiriadau a drefnwyd neu alwadau ffôn a gychwynnir gan y claf wedi'i wneud.

## Pam mae'n bwysig

Nid yw system rybuddio sy'n cynhyrchu rhybudd sy'n gywir yn glinigol ond na chaiff ymateb amserol ei roi iddo wedi gwella diogelwch cleifion mewn gwirionedd; mae holl werth monitro o bell a rhybuddio awtomataidd yn dibynnu ar gau'r cylch yn gyflymach nag y byddai'r llwybr amgen heb fonitro yn ei wneud. Gan fod angen ymateb ar wahanol frys ar gyfer rhybuddion o wahanol lefelau difrifoldeb, dylid adrodd ar amser i ymyriad bob amser fesul haen difrifoldeb yn hytrach nag fel un cyfartaledd, gan y gall cyfartaledd cyflym ar draws pob rhybudd guddio ymateb peryglus o araf i'r nifer fach o'r rhybuddion mwyaf difrifol. Mae'r metrig hwn hefyd yn un o'r ffyrdd cliriaf a mwyaf argyhoeddiadol o ddangos gwerth rhaglen fonitro awtomataidd i arweinwyr clinigol a thalwyr, gan y gellir ei gymharu'n uniongyrchol ag amser ymateb blaenorol, heb ei awtomeiddio, yr un sefydliad ar gyfer sefyllfa glinigol debyg.

## Sut caiff ei gyfrifo

```
Amser i ymyriad = stamp amser(ymateb clinigol wedi'i gychwyn) −
                  stamp amser(rhybudd wedi'i gynhyrchu)

Adroddwch ar y canolrif ac ar ganradd uchel (e.e. y 90fed), wedi'u
rhannu yn ôl haen difrifoldeb y rhybudd, ac nid fel un cyfartaledd
cyfunol.

Dylid diffinio "ymateb clinigol wedi'i gychwyn" yn fanwl gywir ac yn
gyson, e.e. clinigydd yn agor cofnod y claf ac yn gweithredu, neu
ymgais i gysylltu allan a ddogfennwyd, ac nid dim ond gweld rhybudd
neu gydnabod ei fod wedi dod i law heb gymryd unrhyw gamau.
```

## Enghraifft wedi'i datrys

Mae system rybuddio rhaglen monitro cardiaidd o bell yn nodi 200 o rybuddion arhythmia difrifol mewn mis. Yr amser canolrifol o gynhyrchu'r rhybudd hyd nes bod clinigydd yn dechrau cysylltu allan yw 12 munud, a'r 90fed canradd yw 38 munud. Mae data hanesyddol o'r un boblogaeth ar y llwybr blaenorol heb fonitro (lle byddai digwyddiad tebyg fel arfer ond yn dod i'r golwg yn yr ymweliad clinig nesaf a drefnwyd neu pan fyddai'r claf yn mynd i'r ysbyty) yn dangos bod y canolrif amser hyd at unrhyw ymateb clinigol yn cael ei fesur mewn diwrnodau, ac nid munudau. Y gymhariaeth hon, ac nid y ffigur o 12 munud ar ei ben ei hun, sy'n dangos gwerth clinigol y rhaglen fonitro. Mae ffigur y 90fed canradd yr un mor bwysig, gan ei fod yn nodi'r gynffon o rybuddion a gymerodd dros hanner awr i weithredu arnynt ac sy'n galw am adolygiad o'r achosion sylfaenol ar wahân.

## Ffynonellau data a chyfyngiadau

Daw stampiau amser cynhyrchu rhybuddion o gofnod digwyddiadau platfform y monitro ei hun; fel arfer daw stampiau amser yr ymateb clinigol o drywydd archwilio'r cofnod iechyd electronig neu o system llif gwaith neu reoli tasgau'r tîm gofal ei hun, a rhaid cydamseru'r ddwy system hyn yn fanwl gywir er mwyn i'r cyfwng a gyfrifir fod yn ddibynadwy. Mae angen diffiniad caeth a ddogfennwyd ar gyfer "ymateb wedi'i gychwyn", gan fod clinigydd sy'n gweld rhybudd neu'n ei ddiystyru heb gymryd camau pellach yn ddigwyddiad hollol wahanol, ac yn llawer llai calonogol, i un sy'n sbarduno cysylltu allan neu ymyriad gwirioneddol; bydd cymysgu'r ddau yn gwneud i'r amser ymateb edrych yn well na'r gwirionedd clinigol. Mae lefelau staffio dros nos ac ar benwythnosau yn aml yn effeithio'n sylweddol ar amser i ymyriad, felly dylid adrodd ar y metrig hwn yn ôl yr adeg o'r dydd a'r diwrnod o'r wythnos lle mae nifer y rhybuddion yn caniatáu hynny, yn hytrach nag fel cyfartaledd cyfunol 24/7 yn unig a all guddio bwlch difrifol yn yr ymateb y tu allan i oriau.

## Peryglon cyffredin

- **Cyfrif cydnabod rhybudd fel ymateb**: nid yw clinigydd yn gweld neu'n diystyru rhybudd yr un fath â chychwyn ymateb clinigol; diffiniwch ymateb yn gaeth fel gweithred a ddogfennwyd, ac nid fel cydnabyddiaeth oddefol.
- **Adrodd un amser cyfunol ar draws pob lefel o ddifrifoldeb**: gall cyfartaledd cyflym ar draws rhybuddion lefel isel a lefel uchel gyda'i gilydd guddio amser ymateb peryglus o araf yn benodol ar gyfer y rhybuddion mwyaf difrifol, sydd bwysicaf.
- **Anwybyddu effeithiau patrymau staffio**: mae'r amser ymateb yn aml yn amrywio'n sylweddol yn ôl yr adeg o'r dydd a'r diwrnod o'r wythnos oherwydd lefelau staffio; gall un cyfartaledd cyffredinol guddio bwlch systematig yn yr ymateb y tu allan i oriau neu ar benwythnosau.
- **Cymharu amser i ymyriad rhwng sefydliadau sydd â throthwyon rhybuddio gwahanol**: bydd sefydliad sydd â throthwy rhybuddio mwy ceidwadol (mwy sensitif) yn cynhyrchu mwy o rybuddion llai brys, a all wanhau ei amser ymateb cyfartalog o'i gymharu â sefydliad sy'n defnyddio trothwy llymach, ni waeth pa mor ymatebol yw'r ddau yn glinigol.

## Ffynonellau

- NHS England, canllawiau ar safonau ymateb clinigol ar gyfer monitro o bell a wardiau rhithwir
- ONC / HealthIT.gov, canllawiau ar ddylunio a diogelwch systemau rhybuddio clinigol
- Llenyddiaeth a adolygwyd gan gymheiriaid ar amseroedd ymateb i rybuddion wrth fonitro cleifion o bell a chanlyniadau clinigol, er enghraifft astudiaethau a gyhoeddwyd yn npj Digital Medicine

Gweler hefyd: [cyfradd amser gweithredu dyfais](../cyfradd-amser-gweithredu-dyfais/), gan fod ffigur dibynadwy ar gyfer amser i ymyriad yn dibynnu ar i'r ddyfais fonitro sylfaenol fod ar-lein i gynhyrchu'r rhybudd yn y lle cyntaf.
