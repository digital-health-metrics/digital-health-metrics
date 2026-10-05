# Cyfradd Cysondeb Ymgysylltiad Claf

Mae cyfradd cysondeb ymgysylltiad claf yn mesur pa mor rheolaidd y mae claf cofrestredig yn rhyngweithio â chynnyrch iechyd digidol dros amser — er enghraifft cofnodi bwyd neu symptomau, cofnodi gweithgaredd corfforol, neu wylio data iechyd — yn hytrach na dim ond a yw wedi'i ddefnyddio o gwbl. Mae'n fetrig hydredol, gwahanol i gyfrif defnydd gweithredol ar un pwynt mewn amser: gall dau glaf gael statws "defnyddiodd yr ap y mis hwn" union yr un fath tra bo un yn cofnodi'n gyson bob dydd a'r llall yn cofnodi unwaith ac yn diflannu am dair wythnos, a dim ond y metrig cysondeb sy'n gwahaniaethu rhyngddynt.

## Pam mae hyn yn bwysig

Mae rhyngweithio cynaliedig, rheolaidd ag offeryn iechyd digidol yn un o'r dangosyddion blaenllaw mwyaf dibynadwy o fudd clinigol, yn enwedig ar gyfer cyflyrau sy'n dibynnu ar ymddygiad fel diabetes, rheoli pwysau, ac iechyd meddwl, lle daw gwerth yr offeryn o'r arfer y mae'n ei gefnogi yn hytrach nag unrhyw sesiwn sengl. Gall cynnyrch adrodd cyfrif defnyddwyr gweithredol misol iach tra'n gwasanaethu poblogaeth sydd mewn gwirionedd yn mewngofnodi unwaith ac yn drifftio i ffwrdd, gan mai bar isel yw defnydd gweithredol misol nad yw'n dweud dim am batrwm defnydd o fewn y mis; mae metrigau cysondeb yn dal hyn mewn ffordd na all cyfrifon gweithgaredd syml. Gan fod cysondeb hefyd yn un o'r pethau anos i'w gynnal dros fisoedd yn hytrach nag wythnosau, mae'n signal mwy gonest o ansawdd cynnyrch a ffit clinigol na ffigurau ymgysylltiad ffenestr fer, sy'n dueddol o effeithiau newydd-deb yn union ar ôl mewnbwn cyntaf.

## Sut mae'n cael ei gyfrifo

```
Cyfradd cysondeb ymgysylltiad = wythnosau â o leiaf un rhyngweithiad
                                 cymhwyso / cyfanswm wythnosau
                                 cofrestredig × 100

Dylid diffinio "rhyngweithiad cymhwyso" yn benodol ac yn gyson (e.e.
cofnod bwyd, gwiriad symptom, neu gydamseriad gweithgaredd wedi'i
gwblhau) — byth ddigwyddiad goddefol fel agor ap heb weithred wedi'i
gofnodi.

Adroddwch fel dosraniad, nid dim ond cymedr poblogaeth:
  e.e. cyfran cleifion â ≥ 80% cysondeb wythnosol,
       cyfran â 50-79%, cyfran â < 50%
```

## Enghraifft waith

Mae ap hyfforddi maeth yn cofrestru claf am 12 wythnos. Mae'r claf yn cofnodi o leiaf un cofnod bwyd cymhwyso mewn 9 o'r 12 wythnos hynny, gan roi cyfradd cysondeb ymgysylltiad unigol o 9 / 12 × 100 = 75%. Ar draws carfan lawn yr ap o 2,000 o gleifion cofrestredig am o leiaf 12 wythnos, mae 600 o gleifion (30%) yn cynnal cysondeb wythnosol ≥ 80%, mae 900 (45%) yn syrthio yn y band 50-79%, ac mae 500 (25%) yn syrthio o dan 50%. Byddai adrodd cymedr y garfan yn unig (a allai lanio o amgylch 65%) yn cuddio bod chwarter llawn o gleifion prin yn ymgysylltu o gwbl — segment gwerth ei ymchwilio ar wahân yn hytrach na'i wanhau'n gymedr cyffredinol.

## Ffynonellau data a rhybuddion

Daw data cysondeb o gofnodion digwyddiad y cynnyrch ei hun (cofnodion bwyd, cydamseriadau gweithgaredd, gwiriadau), ac mae gan ddiffiniad "rhyngweithiad cymhwyso" effaith enfawr ar y gyfradd a geir — bydd diffiniad goddefgar bob amser (unrhyw agoriad ap) yn edrych yn well na diffiniad llym (cofnod wedi'i gwblhau, ystyrlon), felly rhaid nodi'r diffiniad a ddefnyddiwyd yn glir ochr yn ochr ag unrhyw ffigur a adroddwyd. Dylid adrodd data a gydamserwyd yn awtomatig (er enghraifft tracker ffitrwydd cysylltiedig yn cydamseru gweithgaredd yn y cefndir) ar wahân i ddata a gofnodwyd â llaw, gan y gall cydamseru awtomatig chwyddo cysondeb ymddangosiadol heb adlewyrchu unrhyw ymdrech neu ymgysylltiad gweithredol gan y claf â chanllawiau'r cynnyrch.

## Peryglon

- **Cymysgu agoriadau ap ag ymgysylltiad ystyrlon**: nid yw agoriad ap goddefol (a sbardunwyd er enghraifft gan hysbysiad push) yr un fath â chofnod bwyd neu wiriad wedi'i gwblhau; diffiniwch ac adroddwch ar ryngweithiadau cymhwyso yn unig.
- **Adrodd cymedr poblogaeth yn unig**: gall cyfradd cysondeb cymedrig iach yr olwg guddio poblogaeth ddau-fodd o gleifion hynod ymgysylltiedig a rhai bron yn gyfan gwbl heb ymgysylltu; adroddwch y dosraniad ar draws bandiau cysondeb, nid y cymedr yn unig.
- **Anwybyddu'r enwadur hyd cofrestru**: bydd cymharu cyfraddau cysondeb rhwng cleifion a gofrestrwyd am gyfnodau gwahanol iawn heb ystyried hyd cofrestru yn gogwyddo tuag at ba grŵp bynnag a gafodd ffenestr fesur fyrrach, haws ei chynnal.
- **Cydamseru cefndir awtomatig yn chwyddo'r gyfradd**: gall ffrwd data traul a gydamserwyd yn oddefol wneud i glaf heb ymgysylltu ymddangos yn gyson weithredol heb unrhyw newid ymddygiad gwirioneddol nac ymgysylltiad cynnyrch ar eu rhan.

## Ffynonellau

- Llenyddiaeth adolygiad-gan-gymheiriaid ar batrymau ymgysylltiad iechyd digidol a'u perthynas â chanlyniadau clinigol, er enghraifft astudiaethau a gyhoeddwyd yn y Journal of Medical Internet Research (JMIR)
- Cymdeithas Americanaidd Gwybodeg Feddygol (AMIA), canllawiau ar ansawdd data iechyd a gynhyrchwyd gan gleifion a mesur ymgysylltiad
- Cynghrair Therapiwteg Digidol, canllawiau arfer gorau ar fesur ymgysylltiad a chanlyniad ar gyfer therapiwteg ddigidol

Gweler hefyd: [cyfradd cadw defnyddwyr](../cyfradd-cadw-defnyddwyr/), y metrig cysylltiedig agos o a yw claf yn parhau i fod wedi cofrestru o gwbl, yn wahanol i ba mor gyson y mae'n ymgysylltu tra'n gofrestredig.
