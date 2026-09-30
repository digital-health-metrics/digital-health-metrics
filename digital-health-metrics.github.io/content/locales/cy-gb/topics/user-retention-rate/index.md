# Cyfradd Cadw Defnyddwyr

Cyfradd cadw defnyddwyr yw'r gyfran o ddefnyddwyr gweithredol mewn cyfnod cychwynnol sy'n aros yn weithredol mewn cyfnod diweddarach, a'i wrthdro, cyfradd gadael (neu golli), yw'r gyfran sy'n rhoi'r gorau i ddefnyddio'r cynnyrch yn gyfan gwbl. Lle mae cyfradd mabwysiadu porth cleifion (gweler y pwnc hwnnw) yn mesur a yw claf byth yn actifadu cynnyrch iechyd digidol yn ystyrlon, mae cadw yn mesur a ydynt yn parhau i'w ddefnyddio — ac ar gyfer unrhyw gynnyrch iechyd digidol arddull-tanysgrifiad neu gofal parhaus, cadw fel arfer yw'r metrig sengl sydd fwyaf tynn ei gysylltiad ag effaith glinigol a chynaliadwyedd masnachol ill dau.

## Pam mae hyn yn bwysig

Ni all cynnyrch iechyd digidol na all gadw defnyddwyr gyflawni budd clinigol cynaliedig, waeth pa mor gryf yw ei rifau mabwysiadu neu actifadu cychwynnol: mae'n annhebygol y bydd offeryn rheoli cyflwr cronig a ddefnyddir am bythefnos ac yna'i adael yn symud canlyniad biometrig sy'n dibynnu ar fisoedd o newid ymddygiad cynaliedig. Cadw hefyd yw un o'r metrigau mwyaf arwyddocaol yn fasnachol y mae cwmni iechyd digidol yn ei adrodd i fuddsoddwyr a thaliadwyr, gan fod cromliniau cadw (siâp y gostyngiad dros amser, nid dim ond canran sengl cadw) yn datgelu a yw'r cynnyrch wedi dod o hyd i batrwm defnydd gwirioneddol gynaliadwy neu ddim ond yn dal diddordeb cychwynnol wedi'i yrru gan newydd-deb sy'n pylu'n rhagweladwy. Mae cromlin cadw sy'n gwastatáu ar ôl gostyngiad cychwynnol (mae cleifion sy'n goroesi'r mis cyntaf yn tueddu i aros) yn signal gwahanol iawn, ac yn llawer iachach, na chromlin sy'n parhau i ostwng yn gyson heb lawr.

## Sut mae'n cael ei gyfrifo

```
Cyfradd cadw (cyfnod N) = defnyddwyr gweithredol yng nghyfnod N a
                           oedd hefyd yn weithredol yng nghyfnod
                           dechreuol y garfan / defnyddwyr yng
                           nghyfnod dechreuol y garfan × 100

Cyfradd colli = 1 − cyfradd cadw (ar gyfer yr un cyfnod)

Adroddwch fel cromlin cadw carfan (cadw ar ddiwrnod/wythnos/mis 1, 2,
3…), nid ffigur cipolwg sengl, gan fod cipolwg sengl yn cymysgu
defnyddwyr sydd newydd ymuno (heb gael cyfle i golli eto) â rhai sydd
wedi bod ynghlwm yn hirach.
```

## Enghraifft waith

Mae ap iechyd digidol yn cofrestru carfan o 1,000 o ddefnyddwyr newydd ym mis Ionawr. Erbyn diwedd mis 1, mae 640 o'r 1,000 gwreiddiol hynny'n dal yn weithredol (cadw mis 1 64%). Erbyn diwedd mis 3, mae 410 yn parhau'n weithredol (cadw mis 3 41%). Erbyn mis 6, mae 380 yn parhau'n weithredol (cadw mis 6 38%). Mae siâp y cromlin hwn — gostyngiad cychwynnol serth wedi'i ddilyn gan wastatáu rhwng mis 3 a 6 — yn awgrymu bod y cynnyrch yn cadw craidd sefydlog o ddefnyddwyr unwaith y byddant wedi pasio rhwystr mabwysiadu cychwynnol, sy'n signal gwahanol yn sylweddol ac yn fwy calonogol na phe bai'r gostyngiad o fis 3 i fis 6 wedi parhau ar yr un gyfradd â misoedd 1 i 3.

## Ffynonellau data a rhybuddion

Cyfrifir cadw o gofnodion digwyddiad mewngofnodi neu weithgaredd y cynnyrch ei hun, gan ddiffinio "gweithredol" yn gyson (er enghraifft, o leiaf un sesiwn cymhwyso yn y cyfnod) ar draws pob carfan a gymherir. Dylid cymharu carfannau ar sail debyg-i-debyg — yr un diffiniad dechreuol o "weithredol", yr un hyd ffenestr arsylwi — gan y gall hyd yn oed wahaniaethau diffiniadol bach (misoedd 30 diwrnod yn erbyn 28 diwrnod, neu drothwy "gweithredol" mwy llym yn erbyn un llai llym) symud canran cadw a adroddwyd o sawl pwynt heb unrhyw wahaniaeth gwirioneddol mewn ymddygiad defnyddiwr. Mae effeithiau tymhorol yn gyffredin mewn apiau iechyd ynghlwm wrth benderfyniadau Blwyddyn Newydd neu gyfnodau ymwybyddiaeth iechyd penodol, felly mae cymhariaeth carfan flwyddyn-dros-flwyddyn fel arfer yn fwy dadlennol na chymharu carfannau cyfagos o wahanol adegau'r flwyddyn.

## Peryglon

- **Adrodd un cipolwg cadw yn hytrach na chromlin**: ni all un ffigur "mae X% o ddefnyddwyr yn dal yn weithredol" heb siâp y gostyngiad dros amser wahaniaethu rhwng cynnyrch sy'n gwastatáu (iach) ac un mewn dirywiad parhaus (afiach).
- **Newid diffiniad "gweithredol" rhwng cyfnodau adrodd**: gall llacio diffiniad defnyddiwr gweithredol (er enghraifft cyfrif agoriad ap goddefol yn lle gweithred wedi'i gwblhau) wneud i gadw ymddangos yn gwella pan nad yw defnydd gwirioneddol wedi newid o gwbl.
- **Anwybyddu tymhorolrwydd carfan**: gall cymharu cadw carfan Ionawr (a chwyddir yn aml gan gofrestriad penderfyniad Blwyddyn Newydd, sy'n dod â charfan lai cymhellol ar gyfartaledd) yn erbyn carfan a gafwyd ar adeg wahanol o'r flwyddyn gynhyrchu casgliadau tuedd camarweiniol.
- **Cymysgu carfannau caffael organig a thalu**: mae defnyddwyr a gafwyd trwy sianeli gwahanol yn aml yn cadw'n wahanol iawn; gall eu cymysgu'n un ffigur cadw cyfun guddio problem cadw sy'n benodol i sianel.

## Ffynonellau

- Llenyddiaeth adolygiad-gan-gymheiriaid ar ymgysylltiad a chwymp ap iechyd digidol, er enghraifft astudiaethau a gyhoeddwyd yn y Journal of Medical Internet Research (JMIR mHealth and uHealth)
- Cynghrair Therapiwteg Digidol, canllawiau arfer gorau ar fesur ymgysylltiad a chadw ar gyfer therapiwteg ddigidol
- Adroddiadau meincnodi diwydiant ar gadw ap iechyd symudol, o blatfformau dadansoddeg ac sefydliadau ymchwil marchnad iechyd digidol

Gweler hefyd: [cyfradd cysondeb ymgysylltiad claf](../patient-engagement-consistency-rate/), sy'n mesur ansawdd ymgysylltiad ymhlith defnyddwyr a gadwyd, yn wahanol i a ydynt yn parhau i fod wedi cofrestru o gwbl.
