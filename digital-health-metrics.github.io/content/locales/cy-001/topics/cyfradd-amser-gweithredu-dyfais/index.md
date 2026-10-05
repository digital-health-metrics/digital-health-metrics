# Cyfradd Amser Gweithredu Dyfais

Cyfradd amser gweithredu dyfais yw'r gyfran o amser monitro a drefnwyd y mae dyfais iechyd gysylltiedig — synhwyrydd monitro claf o bell, dyfais wisgadwy, neu uned telefeddygaeth cartref — mewn gwirionedd ar-lein, yn trosglwyddo data, ac yn gweithredu'n gywir, yn hytrach nag all-lein, wedi'i ddatgysylltu, neu'n camweithredu. Dyma'r metrig seilwaith sylfaenol o dan bob rhaglen monitro o bell neu ddyfais gysylltiedig: mae rhybudd clinigol, tuedd biometrig, neu ffigur ymgysylltiad a gyfrifir o ddyfais a oedd yn aml all-lein dim ond yr un mor ddibynadwy â'r cysylltedd y tu ôl iddo.

## Pam mae hyn yn bwysig

Mae holl gynnig gwerth clinigol rhaglen monitro claf o bell yn dibynnu ar ddal data parhaus neu bron-parhaus; mae dyfais ag amser gweithredu gwael yn creu bylchau tawel yn narlun clinigol claf y gellir eu camgymryd am sefydlogrwydd (dim rhybudd am nad oes data, nid am nad oes dim wedi newid) yn hytrach na'u nodi'n gywir fel methiant monitro. Mae amser gweithredu dyfais hefyd yn ddangosydd blaenllaw o gost rhaglen a phrofiad claf: mae dyfais sy'n aml yn colli cysylltiad yn cynhyrchu galwadau cymorth, rhwystredigaeth claf, ac allgymorth clinigol posib diangen i wirio a yw bwlch data'n adlewyrchu digwyddiad clinigol gwirioneddol neu ddim ond nam technegol. Gan fod methiannau amser gweithredu dyfais yn aml yn briodoladwy i seilwaith y mae'r sefydliad yn ei reoli (porth cellog wedi'i gyflunio'n wael, sylw Wi-Fi gwan yng nghartref claf, fflyd dyfeisiau heb ei chynnal yn ddigonol) yn hytrach na'r claf, mae'r metrig hwn yn perthyn yn bendant i'r tîm gweithrediadau technegol a gwerthwr, nid ei blygu'n ddiwahaniaeth i metrigau ymgysylltiad claf.

## Sut mae'n cael ei gyfrifo

```
Cyfradd amser gweithredu dyfais = amser roedd y ddyfais ar-lein ac yn
                                   trosglwyddo data dilys / cyfanswm
                                   amser monitro a drefnwyd × 100

Segmentwch achosion gwraidd amser segur lle bo data'n caniatáu:
  Methiant ochr-dyfais    (batri, nam caledwedd, chwalfa cadarnwedd)
  Methiant cysylltedd     (colli cellog/Wi-Fi/VPN)
  Ffactorau ochr-claf     (dyfais wedi'i diffodd, wedi symud allan o
                           gyrraedd)

Paramedrau technegol ategol i'w holrhain ochr yn ochr ag amser
gweithredu:
  Defnydd CPU cyfartalog, defnydd cof, a lefel batri fesul dyfais
  Amser cyfartalog rhwng methiannau cysylltedd
  Amser cyfartalog i ailgysylltu ar ôl colli cysylltiad
```

## Enghraifft waith

Mae rhaglen monitro cardiaidd o bell yn defnyddio 1,000 o ddyfeisiau cysylltiedig, pob un yn disgwylwyd i drosglwyddo'n barhaus. Dros fis 30 diwrnod (720 awr monitro a drefnwyd fesul dyfais), mae'r fflyd yn cofnodi cyfanswm cyfun o 705,600 awr ar-lein gwirioneddol yn erbyn 720,000 awr a drefnwyd, gan roi cyfradd amser gweithredu dyfais lefel-fflyd o 705,600 / 720,000 × 100 = 98%. Mae dadansoddiad achos-gwraidd o'r 14,400 awr amser segur yn dangos 60% yn briodoladwy i golli cysylltedd cellog wedi'i grynhoi mewn rhanbarth gwasanaeth gwledig penodol, 25% i ddyfeisiau â batris heneiddio wedi'u baneru ar gyfer eu disodli, a 15% i gleifion yn diffodd eu dyfais dros dro. Mae'r dadansoddiad hwn yn pwyntio tuag at ddau ymyriad clir, gwahanol — trwsio cysylltedd ar gyfer y rhanbarth yr effeithir arno a rhaglen disodli batri ragweithiol — na fyddai un ffigur amser gweithredu cyfun wedi'u gwahaniaethu.

## Ffynonellau data a rhybuddion

Daw data amser gweithredu o system rheoli a thelemetreg dyfais gweithgynhyrchwr neu blatfform y gwerthwr ei hun, sy'n cofnodi digwyddiadau cysylltiad a churiad calon fesul dyfais; dylai'r sefydliad gadarnhau'n union beth y mae'r gwerthwr yn ei gyfrif fel "ar-lein" (gall dyfais adrodd ei bod wedi cysylltu â rhwydwaith tra'n methu â throsglwyddo data clinigol dilys, a ddylai gyfrif fel amser segur at ddibenion clinigol hyd yn oed os yw dangosfwrdd y gwerthwr ei hun yn ei adrodd fel wedi cysylltu). Dylid adrodd amser gweithredu fesul carfan dyfais neu ddaearyddiaeth lle bo cyfaint yn caniatáu, gan fod ansawdd cysylltedd yn aml wedi'i grynhoi'n ddaearyddol (sylw cellog gwledig, Wi-Fi adeilad hŷn) yn hytrach na'i ddosbarthu'n gyfartal ar draws poblogaeth claf, a gall ffigur fflyd-gyfan cyfun guddio problem rhanbarthol difrifol, y gellir mynd i'r afael ag ef.

## Peryglon

- **Cymysgu cysylltiad rhwydwaith â throsglwyddiad data dilys**: gall dyfais ymddangos "wedi cysylltu" ar ddangosfwrdd gwerthwr tra'n methu â throsglwyddo data clinigol defnyddiadwy; diffiniwch a mesurwch amser gweithredu yn erbyn derbyniad data dilys gwirioneddol, nid cysylltedd rhwydwaith amrwd yn unig.
- **Adrodd cyfartaledd fflyd-gyfan yn unig**: gall hyn guddio problem amser segur difrifol, wedi'i grynhoi'n ddaearyddol neu'n benodol i garfan dyfais y byddai cyfartaledd wedi'i dargedu'n ei ddatgelu ac y mae ganddo drwsiad penodol, y gellir mynd i'r afael ag ef.
- **Peidio â gwahaniaethu achos gwraidd amser segur**: mae angen ymyriad hollol wahanol ar amser segur ochr-dyfais, cysylltedd, ac ochr-claf; ni ellir gweithredu ar un canran amser segur heb segmentu achos gwraidd.
- **Trin bwlch data fel sefydlogrwydd clinigol yn ddiofyn**: dylai ffrwd data ar goll o ddyfais all-lein sbarduno gwiriad cysylltedd technegol, nid ei ddehongli'n dawel fel "dim newyddion yn newyddion da" ar gyfer statws clinigol y claf.

## Ffynonellau

- Canllawiau Dylunio Continua / Cynghrair Iechyd Cysylltiedig Personol, safonau rhyngweithredu technegol ar gyfer dyfeisiau iechyd cysylltiedig
- ONC / HealthIT.gov, canllawiau ar weithredu rhaglen monitro claf o bell a gofynion technegol
- Llenyddiaeth adolygiad-gan-gymheiriaid ar ddibynadwyedd dyfais monitro claf o bell a chyflawnrwydd data, er enghraifft astudiaethau a gyhoeddwyd yn npj Digital Medicine

Gweler hefyd: [cywirdeb llwybro brysbennu](../cywirdeb-llwybro-brysbennu/), sy'n dibynnu ar dderbyn data dyfais cyflawn, dibynadwy er mwyn gwneud penderfyniad brysbennu cywir yn y lle cyntaf.
