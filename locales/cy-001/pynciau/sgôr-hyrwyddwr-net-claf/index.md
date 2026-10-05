# Sgôr Hyrwyddwr Net Claf

Mae Sgôr Hyrwyddwr Net (NPS) Claf yn mesur parodrwydd claf i argymell cynnyrch iechyd digidol neu wasanaeth telefeddygaeth i eraill, yn seiliedig ar un cwestiwn arolwg sengl — "Pa mor debygol ydych chi o argymell y gwasanaeth hwn i ffrind neu gydweithiwr?" — wedi'i sgorio 0 i 10. Mae ymatebwyr sy'n sgorio 9-10 yn "hyrwyddwyr", 7-8 yn "oddefol", a 0-6 yn "wrthwynebwyr"; NPS yw canran yr hyrwyddwyr minws canran y gwrthwynebwyr. Dyma'r metrig boddhad claf a ddefnyddir amlaf, ac a feirniedir amlaf, mewn iechyd digidol, a werthfawrogir am ei symlrwydd ond a gyfyngir gan yr hyn y gall ei ddiagnosio ar ei ben ei hun.

## Pam mae hyn yn bwysig

Mae NPS yn rhoi signal boddhad syml, safonol, cymharol i dimau iechyd digidol sy'n rhad i'w gasglu ac yn hawdd i randdeiliaid nad ydynt yn arbenigwyr (gweithredwyr, byrddau, comisiynwyr) ei ddehongli ar un golwg, sef pam ei fod yn parhau'n boblogaidd er gwaethaf cyfyngiadau methodolegol wedi'u dogfennu'n dda. Ar gyfer cynhyrchion telefeddygaeth a drws blaen digidol yn benodol, NPS yn aml yw'r dangosydd blaenllaw a fydd cleifion yn parhau i ddewis y sianel ddigidol dros ddewis wyneb yn wyneb pan fydd y ddau ar gael, sydd â goblygiadau uniongyrchol ar gyfer cynllunio cymysgedd sianel a chapasiti. Fodd bynnag, mae NPS yn rhif crynhoad lefel uchel, sengl: mae NPS sy'n gostwng yn dweud wrth dîm bod rhywbeth o'i le ond nid beth, felly dylid ei baru bob amser â adborth geiriau agored neu offeryn defnyddioldeb mwy manwl i fod yn weithredadwy yn hytrach na dim ond rhif cerdyn sgorio.

## Sut mae'n cael ei gyfrifo

```
NPS = % hyrwyddwyr (sgôr 9-10) − % gwrthwynebwyr (sgôr 0-6)

Mae'r canlyniad yn rhif o −100 i +100, nid canran, er ei fod wedi'i
darddu o ganrannau — peidiwch byth ag ychwanegu arwydd "%" at ffigur
NPS.

Adroddwch ochr yn ochr â:
  cyfradd ymateb (% o gleifion a arolygwyd a ymatebodd)
  maint sampl
  union eiriad y cwestiwn a ddefnyddiwyd
```

## Enghraifft waith

Mae platfform telefeddygaeth yn arolygu 1,000 o gleifion ar ôl ymgynghoriad fideo ac yn derbyn 400 ymateb (cyfradd ymateb 40%). O'r 400 ymatebwr hyn, mae 220 yn sgorio 9-10 (hyrwyddwyr, 55%), mae 100 yn sgorio 7-8 (oddefol, 25%), ac mae 80 yn sgorio 0-6 (gwrthwynebwyr, 20%). Y NPS yw 55 − 20 = 35. Nid yw'r ffigur hwn ond yn golygu rhywbeth mewn cyd-destun: gallai NPS o 35 fod yn ganlyniad cryf o gymharu â diwydiant telefeddygaeth ehangach, neu ostyngiad pryderus o gymharu â sgôr y platfform hwn ei hun o 48 y chwarter blaenorol — mae NPS yn llawer mwy defnyddiol fel tuedd dros amser ar gyfer un cynnyrch nag fel meincnod absoliwt un-tro yn erbyn un gwahanol.

## Ffynonellau data a rhybuddion

Casglir NPS trwy arolwg ôl-ryngweithio, a sbardunir fel arfer yn syth ar ôl ymweliad fideo, sesiwn ap, neu bennod gofal, ac mae cyfradd ymateb yn bwysig dros ben: mae cyfradd ymateb isel (yn llawer is na'r ~40% a welwyd yn yr enghraifft waith) yn peri risg rhagfarn dim-ymateb, lle mai dim ond cleifion boddhaus iawn neu anfoddhaus iawn sy'n trafferthu ymateb, gan dynnu'r sgôr tuag at y pegynau ac oddi wrth deimlad gwirioneddol y boblogaeth. Dim ond yn ddilys y mae cymharu NPS ar draws sefydliadau neu hyd yn oed ar draws gwahanol sianeli un sefydliad (er enghraifft telefeddygaeth yn erbyn wyneb yn wyneb) os yw eiriad, amseriad, a phoblogaeth arolwg yn wirioneddol gymharol; gwyddys bod newidiadau geiriad bach yn symud sgoriau'n fesuradwy. Dylid trin NPS fel canlyniad i'w esbonio, nid diben ynddo'i hun — mae'r sylwadau geiriau agored sydd fel arfer yn cyd-fynd ag arolwg NPS fel arfer yn fwy gweithredadwy na'r sgôr.

## Peryglon

- **Cymharu ffigurau NPS a gasglwyd gydag eiriad neu amseriad cwestiwn gwahanol**: gall hyd yn oed wahaniaethau bach yn nyluniad arolwg symud sgoriau o sawl pwynt, gan wneud meincnodi NPS traws-sefydliad yn llawer llai dibynadwy nag y mae'n ymddangos.
- **Anwybyddu cyfradd ymateb**: mae NPS pennawd a gyfrifir o gyfradd ymateb 10% yn llawer llai dibynadwy nag un a gyfrifir o gyfradd ymateb 60%, gan fod cyfraddau ymateb isel yn dueddol o ragfarn dim-ymateb tuag at y farn fwyaf eithafol.
- **Trin NPS fel offeryn diagnostig yn hytrach na metrig crynhoad**: mae NPS sy'n gostwng bob amser yn dweud bod rhywbeth o'i le ond byth yn dweud beth; dylid ei baru bob amser ag adborth ansoddol neu offeryn boddhad neu ddefnyddioldeb mwy manwl i nodi'r achos.
- **Erlid NPS fel targed ynddo'i hun**: gall optimeiddio'n gul am y rhif NPS (er enghraifft trwy arolygu cleifion dim ond ar ôl rhyngweithiadau anarferol o gadarnhaol) wella'r sgôr a adroddwyd tra na fydd yr profiad claf sylfaenol ddim gwell, neu'n waeth mewn gwirionedd.

## Ffynonellau

- Bain & Company, methodoleg wreiddiol System Hyrwyddwr Net a chanllawiau meincnodi
- Asiantaeth Ymchwil a Ansawdd Gofal Iechyd (AHRQ), rhaglen arolwg profiad claf CAHPS (Consumer Assessment of Healthcare Providers and Systems), fel dewis arall cyflenwol, mwy manwl
- Llenyddiaeth adolygiad-gan-gymheiriaid ar ddefnydd a chyfyngiadau Sgôr Hyrwyddwr Net mewn lleoliadau gofal iechyd, er enghraifft astudiaethau a gyhoeddwyd yn y Journal of Medical Internet Research (JMIR)

Gweler hefyd: [cyfradd cadw defnyddwyr](../cyfradd-cadw-defnyddwyr/), gan fod boddhad a adroddwyd gan gleifion a defnydd parhaus gwirioneddol o gynnyrch yn aml yn gwahaniaethu ac yn werth eu holrhain fel signalau ar wahân.
