# Sgôr Graddfa Defnyddioldeb System

Mae Sgôr Graddfa Defnyddioldeb System (SUS) yn holiadur safonol, 10-eitem a ddefnyddir i feintioli pa mor ddefnyddiol yw darn o feddalwedd, gan gynhyrchu un sgôr o 0 i 100 y gellir ei feincnodi yn erbyn normau diwydiant sefydledig. Yn wahanol i Sgôr Hyrwyddwr Net, sy'n mesur parodrwydd i argymell, neu fesurau canlyniad a adroddwyd gan gleifion, sy'n mesur statws clinigol neu swyddogaethol, mae SUS yn mesur un peth penodol: pa mor hawdd yw dysgu a defnyddio'r feddalwedd ei hun, ar gyfer cleifion neu staff clinigol.

## Pam mae hyn yn bwysig

Gall offeryn iechyd digidol gael tystiolaeth glinigol gref ac achos busnes deniadol tra'n dal i fethu mewn ymarfer oherwydd bod cleifion neu glinigwyr yn ei chael yn ddryslyd, yn araf, neu'n rhwystredig i'w defnyddio — a chan fod SUS yn offeryn dilys, a ddefnyddir yn eang gyda degawdau o ddata meincnodi cyhoeddedig ar draws diwydiannau, mae'n gadael i dîm iechyd digidol gymharu defnyddioldeb eu cynnyrch eu hunain yn erbyn dosraniad hysbys yn hytrach na dibynnu ar argraffiadau anffurfiol neu gwynion achlysurol. Mae SUS yn fwriadol yn ddechnoleg-niwtral ac yn gyflym i'w weinyddu (fel arfer o dan bum munud), sy'n ei wneud yn ymarferol i'w redeg dro ar ôl tro ar draws ailadroddiadau dylunio, yn wahanol i astudiaeth ddefnyddioldeb lawn neu dreial clinigol ffurfiol. Gan fod methiannau defnyddioldeb sy'n wynebu clinigwyr yn gyfrannwr dogfennedig i losgi allan (gweler cyfradd llosgi allan meddyg) a bod methiannau defnyddioldeb sy'n wynebu cleifion yn gyfrannwr dogfennedig i adael a chanlyniadau llythrennedd digidol gwael (gweler cyfradd llythrennedd digidol), mae SUS yn gweithredu fel signal defnyddioldeb cynnar, cost-isel a all ddal problem dylunio cyn iddo ymddangos yn y metrigau canlyniad mwy arwyddocaol hynny i lawr yr afon.

## Sut mae'n cael ei gyfrifo

```
Sgôr SUS = ((swm sgoriau eitemau odrif − 5) +
            (25 − swm sgoriau eitemau eilrif)) × 2.5

Y canlyniad yw un sgôr o 0 i 100 (nid canran, er gwaethaf y raddfa,
gan nad yw'n cynrychioli "canran gywir" na thebyg).

Dehongliad meincnod cyhoeddedig (Bangor et al.):
  Uwchlaw 80  — defnyddioldeb rhagorol
  68          — cyfartalog, yn seiliedig ar y norm diwydiant eang
  Islaw 51    — defnyddioldeb gwael, sy'n galw am ymchwiliad
```

## Enghraifft waith

Mae platfform telefeddygaeth yn gweinyddu'r holiadur SUS 10-eitem safonol i 150 o gleifion ar ôl eu hymweliad fideo cyntaf. Y sgôr SUS cyfartalog a gyfrifwyd ar draws pob ymatebwr yw 74. Wedi'i feincnodi yn erbyn y cyfartaledd diwydiant a ddyfynnir yn eang o 68, mae hyn yn dangos defnyddioldeb uwch na chyfartalog ar gyfer y boblogaeth claf a'r achos defnydd penodol hwn, er ei fod yn dal yn ystyrlon islaw'r trothwy "rhagorol" o 80 a fyddai'n awgrymu ychydig o rwystrau defnyddioldeb sy'n weddill. Mae segmentu'r un 150 ymateb yn ôl oedran yn dangos sgôr cyfartalog o 81 ar gyfer cleifion dan 50 a 62 ar gyfer cleifion 65 a hŷn — bwlch sy'n pwyntio tuag at fater defnyddioldeb penodol, y gellir mynd i'r afael ag ef ar gyfer cleifion hŷn yn hytrach na phroblem defnyddioldeb cynnyrch cyffredinol, ac un y byddai cymedr cyfun sengl wedi'i guddio.

## Ffynonellau data a rhybuddion

Daw data SUS yn uniongyrchol o gleifion neu glinigwyr yn cwblhau'r holiadur 10-eitem safonol, a rhaid gweinyddu'r offeryn yn union fel y'i dilyswyd (yr un 10 eitem, yr un raddfa cytundeb 5-pwynt, yr un fformiwla sgorio) er mwyn i'r sgôr canlyniadol fod yn gymharol yn erbyn meincnodau cyhoeddedig; mae fersiwn wedi'i haddasu neu wedi'i gwtogi o'r holiadur, waeth pa mor dda ei fwriad, yn cynhyrchu sgôr na ellir ei ddehongli'n ddibynadwy yn erbyn y dosraniad meincnod safonol. Mae SUS yn mesur defnyddioldeb canfyddedig, sy'n cydberthyn â, ond nid yr un fath â, llwyddiant cwblhau tasg gwrthrychol (gweler cyfradd llythrennedd digidol ar gyfer mesur seiliedig ar gwblhau tasg); gall cynnyrch gael sgôr SUS da gan gleifion na wnaethant geisio'r nodweddion mwy cymhleth, felly mae paru SUS â data cwblhau tasg gwrthrychol yn rhoi darlun cyflawnach na'r naill neu'r llall ar ei ben ei hun.

## Peryglon

- **Addasu eitemau neu sgorio'r holiadur safonol**: mae hyd yn oed newidiadau geiriad neu raddfa bach yn dirymu cymhariaeth yn erbyn y dosraniad meincnod cyhoeddedig sefydledig; defnyddiwch yr offeryn 10-eitem safonol yn union fel y'i dilyswyd.
- **Adrodd y sgôr cyfartalog yn unig heb segmentu**: mae defnyddioldeb yn aml yn amrywio'n sylweddol yn ôl oedran defnyddiwr, llythrennedd digidol, neu rôl (claf yn erbyn clinigwr); segmentwch adrodd i ddod o hyd i fylchau defnyddioldeb penodol, y gellir mynd i'r afael â nhw y mae cymedr sengl yn eu cuddio.
- **Trin SUS fel mesur o effeithiolrwydd clinigol**: mae SUS yn mesur defnyddioldeb yn benodol, nid canlyniad clinigol na boddhad â gofal; gall offeryn hynod ddefnyddiol dal fethu â gwella canlyniadau clinigol, ac ni ddylid byth eu cymysgu na'u disodli â'i gilydd.
- **Gweinyddu'r arolwg dim ond ar ôl sesiynau anarferol o esmwyth neu anarferol o rwystredig**: gall amseriad a chyd-destun gweinyddu ragfarnu'r sgôr; gweinyddwch yn gyson ar draws sampl cynrychioliadol o sesiynau byd-real, nid rhai cyfleus neu a ddewiswyd yn ddethol yn unig.

## Ffynonellau

- Brooke, J., "SUS: A Quick and Dirty Usability Scale", yr offeryn cyhoeddedig gwreiddiol
- Bangor, Kortum, a Miller, ymchwil meincnodi SUS gyhoeddedig yn sefydlu'r bandiau dehongli sgôr a ddyfynnir yn eang
- Llenyddiaeth adolygiad-gan-gymheiriaid ar ddefnydd SUS mewn iechyd digidol a gwerthuso defnyddioldeb telefeddygaeth, er enghraifft astudiaethau a gyhoeddwyd yn JMIR Human Factors

Gweler hefyd: [sgôr hyrwyddwr net claf](../sgôr-hyrwyddwr-net-claf/), metrig a adroddwyd gan gleifion cysylltiedig ond gwahanol sy'n mesur boddhad a theyrngarwch yn hytrach na defnyddioldeb meddalwedd yn benodol.
