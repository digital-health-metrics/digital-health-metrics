# Cywirdeb Llwybro Brysbennu

Cywirdeb llwybro brysbennu yw'r gyfran o gyswllt claf lle mae offeryn brysbennu awtomataidd neu â chymorth AI yn cyfeirio claf yn gywir at y lefel a'r lleoliad gofal priodol — er enghraifft hunanofal, gofal sylfaenol, gofal brys, neu ofal argyfwng — yn ôl safon gyfeirio a ddilyswyd yn glinigol. Dyma'r metrig diogelwch-ac-effeithiolrwydd ar gyfer unrhyw ddrws blaen digidol, gwiriwr symptomau, neu system frysbennu AI: mae gwerth cyfan yr offeryn yn dibynnu ar lwybro cleifion yn gywir, yn gyflym, ac yn gyson.

## Pam mae hyn yn bwysig

Mae offeryn brysbennu anghywir yn achosi niwed i'r ddau gyfeiriad: gall tan-frysbennu (llwybro claf i lefel gofal is nag sydd ei angen arno) oedi triniaeth ar gyfer argyfwng gwirioneddol, tra bo gor-frysbennu (llwybro claf i lefel gofal uwch nag sydd ei angen arno) yn gwastraffu capasiti gofal argyfwng a brys prin ac yn cynyddu cost a phryder claf heb unrhyw fudd clinigol. Gan fod gan y ddau fodd methiant hyn ganlyniadau mor wahanol, dylid adrodd cywirdeb llwybro brysbennu bob amser ochr yn ochr â chyfeiriad y gwallau, nid fel ffigur cywirdeb cyfanredol sengl sy'n cuddio a yw'r offeryn yn gwyro'n ddiogel neu'n beryglus. Mae rheoleiddwyr a systemau iechyd sy'n gwerthuso offeryn brysbennu AI ar gyfer defnydd fwyfwy yn ei gwneud yn ofynnol adrodd cywirdeb wedi'i haenu fel hyn fel amod cymeradwyaeth glinigol, yn enwedig ar gyfer offer sy'n gweithredu â rhywfaint o annibyniaeth oddi wrth glinigwr.

## Sut mae'n cael ei gyfrifo

```
Cywirdeb llwybro brysbennu = cyswllt a lwybrwyd yn gywir / cyfanswm
                              cyswllt a frysbennwyd × 100

Adroddwch tan-frysbennu a gor-frysbennu ar wahân:
  Cyfradd tan-frysbennu = cyswllt a lwybrwyd i lefel acuedd is na'r
                          safon gyfeirio / cyfanswm cyswllt a
                          frysbennwyd × 100
  Cyfradd gor-frysbennu = cyswllt a lwybrwyd i lefel acuedd uwch na'r
                          safon gyfeirio / cyfanswm cyswllt a
                          frysbennwyd × 100

Yn nodweddiadol, adolygiad clinigwr ôl-syllol o'r un achos yw'r safon
gyfeirio, wedi'i ddallu i allbwn yr offeryn lle bo modd.
```

## Enghraifft waith

Mae offeryn gwiriwr symptomau AI yn brysbennu 5,000 o gyswllt claf mewn mis. Mae adolygiad clinigwr dallu o sampl ar hap o 500 o'r cyswllt hyn yn canfod bod 430 wedi'u llwybro i'r lefel acuedd gywir (cywirdeb 86%), 45 wedi'u tan-frysbennu (9%), a 25 wedi'u gor-frysbennu (5%). Y gyfradd tan-frysbennu 9% yw'r ffigur sydd angen ei ymchwilio ar frys mwyaf, gan ei fod yn cynrychioli cyswllt lle gallai claf fod wedi'i gyfeirio at ofal llai brys nag oedd ei angen arno mewn gwirionedd; mae'r gyfradd gor-frysbennu 5% yn bryder capasiti a chost ond nid un diogelwch uniongyrchol.

## Ffynonellau data a rhybuddion

Mae'r safon gyfeirio y mesurir cywirdeb brysbennu yn ei herbyn yn bwysig dros ben: mae adolygiad gan un clinigwr yn cyflwyno amrywioldeb barn y clinigwr hwnnw ei hun, felly mae angen naill ai adolygwyr annibynnol lluosog gyda chytundeb rhwng-graddiwr dogfennedig, neu gymhariaeth yn erbyn canlyniad clinigol dilynol a gadarnhawyd (pa ofal roedd y claf ei angen mewn gwirionedd, wedi'i sefydlu ar ôl y ffaith), fel arfer, ar gyfer ffigur cywirdeb hygred. Mae samplo yn bwysig hefyd: ni fydd adolygu dim ond sampl cyfleus o gyswllt, neu ddim ond rhai a nodwyd fel anarferol, yn cynhyrchu ffigur sy'n cyffredinoli i berfformiad cyffredinol yr offeryn. Dylid adrodd ffigurau cywirdeb ar wahân yn ôl categori symptom neu gŵyn cyflwynol lle bo cyfaint achosion sylfaenol yn caniatáu, gan mai anaml y mae offer brysbennu yn perfformio'n unffurf ar draws pob cyflwr.

## Peryglon

- **Adrodd un ffigur cywirdeb cyfun**: mae cywasgu tan-frysbennu a gor-frysbennu yn un rhif yn cuddio a yw gwallau'r offeryn yn gogwyddo tuag at y modd methiant mwy peryglus; adroddwch bob amser ar wahân.
- **Defnyddio un adolygydd heb ei ddallu fel y safon gyfeirio**: gall hyn ragfarnu'r ffigur cywirdeb yn dawel tuag at beth bynnag fyddai'r adolygydd hwnnw ei hun wedi'i wneud, yn hytrach na safon glinigol annibynnol.
- **Dilysu ar ddata ôl-syllol, cyfleus yn unig**: gall cywirdeb llwybro byw, real-amser offeryn dan fewnbwn claf byw, amwys wahaniaethu'n sylweddol o'i gywirdeb ar set ddilysu wedi'i churadu a gasglwyd yn ystod datblygiad.
- **Anwybyddu drifft perfformiad ar ôl defnyddio**: gall cywirdeb model brysbennu AI ddirywio dros amser wrth i boblogaethau cleifion, symptomau cyflwynol, neu argaeledd llwybr gofal newid; dylid ail-fesur cywirdeb yn rheolaidd, nid ei ddilysu unwaith a chymryd ei fod yn sefydlog.

## Ffynonellau

- ONC / HealthIT.gov, canllawiau ar ddiogelwch a sicrwydd ansawdd cymorth penderfynu clinigol ac offer wedi'u galluogi gan AI
- Llenyddiaeth adolygiad-gan-gymheiriaid ar gywirdeb gwiriwr symptomau ac offeryn brysbennu AI, er enghraifft astudiaethau a gyhoeddwyd yn JAMIA, npj Digital Medicine, a BMJ Health & Care Informatics
- NHS England, canllawiau ar ddiogelwch clinigol offer brysbennu digidol ac ymgynghori o bell (safonau rheoli risg clinigol DCB0129/DCB0160)

Gweler hefyd: [amser trosi atgyfeiriadau digidol](../digital-referral-turnaround-time/), y metrig proses fwyaf uniongyrchol i lawr yr afon o benderfyniad brysbennu.
