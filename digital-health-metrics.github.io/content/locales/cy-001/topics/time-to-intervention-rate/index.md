# Amser i Ymyriad

Amser i ymyriad yw'r amser sy'n mynd heibio o rybudd iechyd awtomataidd yn cael ei gynhyrchu — er enghraifft dyfais monitro o bell yn canfod arwydd hanfodol y tu allan i'r ystod, neu offeryn brysbennu digidol yn baneru claf sy'n dirywio — i aelod o dîm clinigol mewn gwirionedd yn dechrau ymateb. Dyma'r metrig proses sy'n penderfynu a yw system rybuddio awtomataidd yn cyflawni ei addewid craidd: dal problem yn gynt na fyddai model traddodiadol o wiriadau wedi'u trefnu neu alwadau ffôn a gychwynnwyd gan y claf wedi'i wneud.

## Pam mae hyn yn bwysig

Nid yw system rybuddio sy'n cynhyrchu rhybudd cywir yn glinigol ond nad yw'n cael ei ddilyn gan ymateb amserol wedi gwella diogelwch claf mewn gwirionedd; mae holl gynnig gwerth monitro o bell a rhybuddio awtomataidd yn dibynnu ar gau'r ddolen yn gyflymach na fyddai'r llwybr amgen, heb ei fonitro wedi'i wneud. Gan fod gwahanol ddifrifoldebau rhybudd yn galw am wahanol frys ymateb, dylid adrodd amser i ymyriad bob amser fesul haen difrifoldeb yn hytrach na chyfartaledd sengl, gan y gall cyfartaledd cyflym ar draws pob rhybudd guddio ymateb beryglus o araf i'r nifer bach o'r rhai mwyaf difrifol. Mae'r metrig hwn hefyd yn un o'r ffyrdd cliriaf, mwyaf argyhoeddiadol o ddangos gwerth rhaglen monitro awtomataidd i arweinyddiaeth glinigol a thaliadwyr, gan y gellir ei gymharu'n uniongyrchol yn erbyn amser ymateb blaenorol, heb ei awtomataidd, yr un sefydliad ar gyfer senario clinigol tebyg.

## Sut mae'n cael ei gyfrifo

```
Amser i ymyriad = stamp amser(ymateb clinigol wedi'i gychwyn) − stamp
                   amser(rhybudd wedi'i gynhyrchu)

Adroddwch canolrif a phersentil uchel (e.e. y 90fed), wedi'i segmentu
yn ôl haen difrifoldeb rhybudd, nid fel cyfartaledd cyfun sengl.

Dylid diffinio "ymateb clinigol wedi'i gychwyn" yn fanwl gywir ac yn
gyson — e.e. clinigwr yn agor cofnod y claf ac yn gweithredu, neu
ymgais gyswllt allanol wedi'i ddogfennu — nid dim ond rhybudd yn cael
ei weld neu ei gydnabod heb unrhyw weithred wedi'i chymryd.
```

## Enghraifft waith

Mae system rybuddio rhaglen monitro cardiaidd o bell yn baneru 200 o rybuddion arhythmia difrifoldeb uchel mewn mis. Y canolrif amser o gynhyrchu'r rhybudd i glinigwr yn dechrau cyswllt allanol yw 12 munud, gyda pherfformiad y 90fed persentil o 38 munud. Mae data hanesyddol o'r un boblogaeth ar y llwybr blaenorol, heb ei fonitro (lle byddai digwyddiad tebyg fel arfer ond yn dod i'r amlwg yn yr ymweliad clinig wedi'i drefnu nesaf neu gyflwyniad ysbyty) yn dangos canolrif amser i unrhyw ymateb clinigol wedi'i fesur mewn diwrnodau, nid munudau. Y gymhariaeth hon — nid y ffigur 12 munud ar ei ben ei hun — sy'n dangos gwerth clinigol y rhaglen monitro; mae'r ffigur 90fed persentil yr un mor bwysig, gan ei fod yn nodi'r gynffon o rybuddion a gymerodd dros hanner awr i weithredu arnynt ac yn galw am ei adolygiad achos-gwraidd ei hun.

## Ffynonellau data a rhybuddion

Daw stampiau amser cynhyrchu rhybuddion o gofnod digwyddiad y platfform monitro ei hun; fel arfer daw stampiau amser ymateb clinigol o lwybr archwilio'r cofnod iechyd electronig neu system rheoli gwaith neu weithlif y tîm gofal ei hun, a rhaid i'r ddwy system hyn gael eu cydamseru'n amserol yn union er mwyn i'r cyfwng a gyfrifir fod yn ddibynadwy. Mae angen diffiniad llym, wedi'i ddogfennu ar gyfer "ymateb wedi'i gychwyn", gan fod clinigwr yn dim ond gweld neu ddiystyru rhybudd heb weithred bellach yn ddigwyddiad hollol wahanol, ac yn llawer llai calonogol, na un sy'n sbarduno cyswllt allanol neu ymyriad gwirioneddol — bydd cymysgu'r ddau yn gwneud i amser ymateb edrych yn well na'r realiti clinigol. Mae lefelau staffio dros nos a phenwythnos yn aml yn effeithio'n sylweddol ar amser i ymyriad, felly dylid adrodd y metrig hwn fesul segment amser-o'r-dydd a diwrnod-o'r-wythnos lle bo cyfaint rhybudd yn caniatáu, yn hytrach na dim ond fel cyfartaledd cyfun 24/7 a all guddio bwlch ymateb difrifol y tu allan i oriau.

## Peryglon

- **Cyfrif cydnabyddiaeth rhybudd fel ymateb**: nid yw clinigwr yn gweld neu'n diystyru rhybudd yr un fath â chychwyn ymateb clinigol; diffiniwch ymateb yn llym fel gweithred wedi'i dogfennu, nid cydnabyddiaeth oddefol.
- **Adrodd un amser cyfun ar draws pob difrifoldeb**: gall cyfartaledd cyflym ar draws rhybuddion isel- a difrifoldeb-uchel gyfun guddio ymateb beryglus o araf yn benodol i'r rhybuddion difrifoldeb uchaf, sydd bwysicaf.
- **Anwybyddu effeithiau patrwm staffio**: mae amser ymateb yn aml yn amrywio'n sylweddol yn ôl amser o'r dydd a diwrnod o'r wythnos oherwydd lefelau staffio; gall un cyfartaledd cyffredinol guddio bwlch ymateb systematig y tu allan i oriau neu benwythnos.
- **Cymharu amser i ymyriad ar draws sefydliadau â throthwyon rhybuddio gwahanol**: bydd sefydliad â throthwy rhybuddio mwy ceidwadol (mwy sensitif) yn cynhyrchu mwy o rybuddion acuedd isel, a all wanhau ei amser ymateb cyfartalog o gymharu â sefydliad sy'n defnyddio trothwy mwy llym, yn annibynnol ar ymatebolrwydd clinigol gwirioneddol.

## Ffynonellau

- NHS England, canllawiau ar safonau ymateb clinigol monitro o bell a ward rithwir
- ONC / HealthIT.gov, canllawiau ar ddylunio a diogelwch system rybuddio clinigol
- Llenyddiaeth adolygiad-gan-gymheiriaid ar amseroedd ymateb rhybudd monitro claf o bell a chanlyniadau clinigol, er enghraifft astudiaethau a gyhoeddwyd yn npj Digital Medicine

Gweler hefyd: [cyfradd amser gweithredu dyfais](../device-uptime-rate/), gan fod ffigur amser i ymyriad dibynadwy yn dibynnu ar y ddyfais fonitro sylfaenol fod ar-lein mewn gwirionedd i gynhyrchu'r rhybudd yn y lle cyntaf.
