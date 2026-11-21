# Bideratze digitalen erantzun-denbora

Bideratze digitalen erantzun-denbora bideratzen duen klinikoak bideratze elektroniko bat bidaltzen duenetik hartzaile den zerbitzuak triajea egin eta onartu, baztertu edo hitzordua ematen duen arte igarotako denbora da. Prozesu (fluxu) metrika bat da, pazientearen itxaron-denbora osotik bereizita, eta sistema digitalaren aldaketa batek (e-bideratze egituratua, irudietan oinarritutako triajea, bideratze-inprimaki estandarizatuak) asebetetze-puntuazio bat baino zenbaki operatibo bat mugitzen duela erakusteko leku argienetakoa da.

## Zergatik den garrantzitsua

Triaje-urrats geldo edo oso aldakorrak atzerapena gehitzen du pazientea itxaron-zerrenda klinikora sartu aurretik ere, eta atzerapen hori arreta klinikoa hasi aurretik gertatzen denez, tresna digitalek kentzeko leku onean dauden prozesu-hondakin hutsa da. Informazio faltagatik "bideratzailera itzultzeko" zikloa derrigortzen duten bideratze-sistemek berrikuntza-begiztak sortzen dituzte, erantzun-denbora lehen aldiz garbi igarotzen diren bideratzeetan soilik neurtzen bada erraz ikusi gabe geratzen direnak. Zerbitzu batek bideratze-inprimaki digital egituratuak, derrigorrezko eremuak edo irudietan oinarritutako triajea (adibidez teledermatologian) ezarri dituenean, erantzun-denbora izan ohi da onura erakusteko metrika sinesgarriena, aldaketaren aurretik eta ondoren tresneria berarekin neur daitekeelako.

## Nola kalkulatzen den

```
Erantzun-denbora = denbora-zigilua(triaje-erabakia) −
                   denbora-zigilua(bideratzearen bidalketa)

Mediana eta pertzentil altu bat (normalean 90.a) jakinarazi, ez batez
bestekoa soilik, banaketa asko eskuinerantz okertuta baitago itzulitako
edo bideratze konplexuengatik.

Sistemak jasotzen duenean, azpi-faseen denborak kontuan hartu:
  Bidalketa → zerbitzuak jasoa
  Jasoa → triaje-erabakia
  Triaje-erabakia → hitzordu emana (dagokionean)
```

## Adibide landua

E-bideratze sistema baten auditoria-arrastoak erakusten du bidalketatik triaje-erabakira doan denboraren mediana 1,8 egunekoa dela espezialitate guztietan, 90. pertzentilaren denbora 6 egunekoa izanik, nagusiki informazio kliniko falta zela eta bideratzailera itzuli diren bideratzeek eraginda. Plataforma berean irudietan oinarritutako triajea erabiltzen duen teledermatologia-bide batek 4 orduko erantzun-denbora mediana eta 1 eguneko 90. pertzentila lortzen ditu, argazki batek eta historia egituratu batek ia beti nahikoak direlako triaje-erabakirako, gutun-trukaketa gehiagorik behar izan gabe.

## Datu-iturriak eta kontuan hartu beharrekoak

E-bideratze edo bideratze-kudeaketa sistemaren auditoria-arrastoa da iturri nagusia, bidalketa- eta erabaki-denbora-zigiluak erabiliz; erakundeek egiaztatu behar dute "erlojua" gelditzen den bideratze bat informazio gehiagorako itzultzen den bitartean edo etengabe martxan jarraitzen duen, bi definizioek azpiko prozesu beraren zifra nabarmen desberdinak sortzen dituztelako. Erantzun-denbora koherentziaz jakinarazi behar da egutegi-denboran edo lanordu-denboran, asteburuko eta jaiegunetako efektuek, bestela, lan-eredu desberdineko zerbitzuen arteko alderaketak distortsionatu ditzaketelako.

## Hutsuneak

- **Bideratze "garbiak" soilik neurtzea**: baztertutako edo itzulitako bideratzeak kalkulutik kanpo uzteak tresna digitalek murrizteko diseinatuta egon ohi diren berrikuntza-zama ezkutatzen du.
- **Batez bestekoa jakinaraztea mediana eta pertzentilen ordez**: luze doazen eta itzulitako bideratze gutxik batez bestekoa pazientearen benetako esperientzia tipikoaren oso gainetik eramango dute.
- **Erantzun-denbora eta itxaron-denbora osoa nahastea**: erantzun-denborak triaje-urratsa soilik hartzen du; pazientearen esperientzia osoak beheko itxaron-zerrenda klinikoa ere barne hartzen du, gaitasun-murrizketa bereizien mende dagoen metrika bereizi bat.
- **Azpi-faseak bereizi gabe uztea**: muturretik muturrerako denbora soilik neurtzen duen zerbitzu batek ezin du jakin zifra geldo bat bideratzaileek informazio osatu gabea bidaltzeak, hartzaile den zerbitzuaren triaje-gaitasunak, edo biek eragiten dutenik.

## Iturriak

- NHS England, e-Referral Service (e-RS) estatistikak eta zerbitzu-zehaztapenak
- E-bideratzeen kudeaketa-sistemei eta triaje digitaleko bideei (teledermatologia barne) buruzko literatura aditu-berrikusia
- ONC / HealthIT.gov, elkarreragingarritasunari eta bideratzeen koordinazioari buruzko gidalerroak
