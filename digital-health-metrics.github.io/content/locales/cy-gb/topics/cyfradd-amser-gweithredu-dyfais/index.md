# Cyfradd Amser Gweithredu Dyfais

Mae cyfradd amser gweithredu dyfais yn mesur cyfran yr amser monitro a drefnwyd y mae dyfais iechyd gysylltiedig, sef synhwyrydd i fonitro cleifion o bell, dyfais wisgadwy neu uned teleiechyd gartref, ar-lein mewn gwirionedd, yn trosglwyddo data ac yn gweithio'n gywir, yn hytrach nag all-lein, wedi datgysylltu neu'n camweithio. Dyma'r metrig seilwaith sylfaenol sy'n sail i bob rhaglen monitro o bell neu ddyfeisiau cysylltiedig: dim ond mor ddibynadwy â'r cysylltedd y tu ôl iddo yw rhybudd clinigol, tuedd biometrig neu ffigur ymgysylltu a gyfrifwyd o ddyfais a oedd yn aml all-lein.

## Pam mae'n bwysig

Mae holl werth clinigol rhaglen monitro cleifion o bell yn dibynnu ar gasglu data'n barhaus neu bron yn barhaus. Mae dyfais sydd ag amser gweithredu gwael yn creu bylchau tawel yn narlun clinigol claf y gellir eu camgymryd am sefydlogrwydd (dim rhybudd am nad oes data, ac nid am nad oes dim wedi newid) yn hytrach na'u nodi'n gywir fel methiant monitro. Mae amser gweithredu dyfeisiau hefyd yn ddangosydd blaenllaw o gost y rhaglen a phrofiad y claf: mae dyfais sy'n colli ei chysylltiad yn aml yn arwain at alwadau am gymorth, rhwystredigaeth i'r claf ac, o bosibl, allgymorth clinigol diangen i wirio a yw bwlch yn y data'n adlewyrchu digwyddiad clinigol go iawn neu ddim ond nam technegol. Gan fod methiannau o ran amser gweithredu dyfeisiau yn aml i'w priodoli i seilwaith y mae'r sefydliad yn ei reoli (porth cellog sydd wedi'i ffurfweddu'n wael, signal Wi-Fi gwan yng nghartref claf, fflyd o ddyfeisiau na chaiff ei chynnal a'i chadw'n ddigonol) yn hytrach nag i'r claf, mae'r metrig hwn yn perthyn yn gadarn i'r cyflenwr a'r tîm gweithrediadau technegol, ac ni ddylid ei gynnwys yn ddiwahân ymhlith metrigau ymgysylltiad cleifion.

## Sut caiff ei gyfrifo

```
Cyfradd amser gweithredu dyfais = yr amser yr oedd y ddyfais ar-lein ac
                                  yn trosglwyddo data dilys / cyfanswm
                                  yr amser monitro a drefnwyd × 100

Rhannwch achosion sylfaenol amser segur lle mae'r data'n caniatáu:
  Methiant ar ochr y ddyfais (batri, nam caledwedd, cadarnwedd yn chwalu)
  Methiant cysylltedd        (colli cysylltiad cellog/Wi-Fi/VPN)
  Ffactorau ar ochr y claf   (dyfais wedi'i diffodd, wedi symud y tu
                              allan i'r amrediad)

Paramedrau technegol ategol i'w holrhain ochr yn ochr ag amser
gweithredu:
  Defnydd cyfartalog o'r CPU, defnydd cof a lefel y batri fesul dyfais
  Yr amser cyfartalog rhwng methiannau cysylltedd
  Yr amser cyfartalog i ailgysylltu ar ôl colli cysylltiad
```

## Enghraifft wedi'i datrys

Mae rhaglen monitro cardiaidd o bell yn defnyddio 1,000 o ddyfeisiau cysylltiedig, a disgwylir i bob un drosglwyddo'n barhaus. Dros fis o 30 diwrnod (720 awr o fonitro a drefnwyd fesul dyfais), mae'r fflyd yn cofnodi cyfanswm o 705,600 awr ar-lein go iawn o'i gymharu â 720,000 awr a drefnwyd, sy'n rhoi cyfradd amser gweithredu dyfeisiau ar draws y fflyd o 705,600 / 720,000 × 100 = 98%. Mae dadansoddi gwraidd y 14,400 awr o amser segur yn dangos bod 60% i'w priodoli i golli cysylltiad cellog, wedi'i grynhoi mewn rhanbarth gwledig penodol, 25% i ddyfeisiau â batris sy'n heneiddio ac a nodwyd i'w newid, a 15% i gleifion yn diffodd eu dyfais dros dro. Mae'r dadansoddiad hwn yn tynnu sylw at ddau ymyriad clir a gwahanol, sef datrys problem cysylltedd yn y rhanbarth yr effeithir arno a rhaglen ragweithiol i newid batris, na fyddai un ffigur cyfunol ar gyfer amser gweithredu wedi gallu eu gwahaniaethu.

## Ffynonellau data a chyfyngiadau

Daw data amser gweithredu o system rheoli dyfeisiau a thelemetreg gwneuthurwr y ddyfais neu gyflenwr y platfform, sy'n cofnodi digwyddiadau cysylltu a churiadau fesul dyfais. Dylai'r sefydliad gadarnhau'n union beth y mae'r cyflenwr yn ei gyfrif yn "ar-lein": gall dyfais adrodd ei bod wedi'i chysylltu â rhwydwaith ac eto fethu â throsglwyddo data clinigol dilys, a dylai hynny gyfrif fel amser segur at ddibenion clinigol hyd yn oed os yw dangosfwrdd y cyflenwr ei hun yn ei adrodd fel dyfais gysylltiedig. Dylid adrodd ar amser gweithredu fesul carfan o ddyfeisiau neu fesul daearyddiaeth lle mae'r niferoedd yn caniatáu, gan fod ansawdd cysylltedd yn aml wedi'i grynhoi'n ddaearyddol (signal cellog gwledig, Wi-Fi hŷn mewn adeiladau) yn hytrach na'i ddosbarthu'n gyfartal ar draws poblogaeth o gleifion. Gall ffigur cyfunol ar gyfer y fflyd gyfan guddio problem ranbarthol ddifrifol y gellir mynd i'r afael â hi.

## Peryglon cyffredin

- **Cymysgu cysylltiad rhwydwaith â throsglwyddo data dilys**: gall dyfais ymddangos yn "gysylltiedig" ar ddangosfwrdd y cyflenwr ac eto fethu â throsglwyddo data clinigol y gellir ei ddefnyddio; diffiniwch a mesurwch amser gweithredu yn erbyn y data dilys a dderbyniwyd mewn gwirionedd, ac nid yn erbyn cysylltedd rhwydwaith crai yn unig.
- **Adrodd ar gyfartaledd y fflyd gyfan yn unig**: gall hyn guddio problem ddifrifol o ran amser segur sy'n benodol i ardal ddaearyddol neu garfan o ddyfeisiau, y byddai cyfartaledd wedi'i dargedu yn ei datgelu, ac sydd ag ateb penodol.
- **Peidio â gwahaniaethu rhwng achosion sylfaenol amser segur**: mae amser segur ar ochr y ddyfais, amser segur oherwydd cysylltedd ac amser segur ar ochr y claf yn galw am ymyriad hollol wahanol; ni ellir gweithredu ar un ganran o amser segur heb ei rhannu yn ôl achos sylfaenol.
- **Trin bwlch yn y data fel sefydlogrwydd clinigol yn ddiofyn**: dylai ffrwd ddata sydd ar goll o ddyfais all-lein sbarduno gwiriad o'r cysylltedd technegol, yn hytrach na chael ei dehongli'n dawel fel "dim newyddion yw newyddion da" am gyflwr clinigol y claf.

## Ffynonellau

- Continua Design Guidelines / Personal Connected Health Alliance, safonau rhyngweithredu technegol ar gyfer dyfeisiau iechyd cysylltiedig
- ONC / HealthIT.gov, canllawiau ar roi rhaglenni monitro cleifion o bell ar waith a'r gofynion technegol
- Llenyddiaeth a adolygwyd gan gymheiriaid ar ddibynadwyedd dyfeisiau monitro cleifion o bell a chyflawnrwydd data, er enghraifft astudiaethau a gyhoeddwyd yn npj Digital Medicine

Gweler hefyd: [cywirdeb llwybro brysbennu](../cywirdeb-llwybro-brysbennu/), sy'n dibynnu ar dderbyn data dyfeisiau cyflawn a dibynadwy er mwyn gwneud penderfyniad brysbennu cywir yn y lle cyntaf.
