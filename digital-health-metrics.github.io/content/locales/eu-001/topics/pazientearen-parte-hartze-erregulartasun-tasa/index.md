# Pazientearen parte-hartze erregulartasun tasa

Pazientearen parte-hartze erregulartasun tasak neurtzen du matrikulatutako pazienteek zenbateko erregulartasunez erabiltzen duten osasun digitaleko produktu bat denboran zehar (adibidez janaria edo sintomak erregistratzea, jarduera fisikoa grabatzea edo osasun-datuak ikustea), erabili ote duten soilik neurtu beharrean. Metrika longitudinala da, une jakin bateko erabilera aktiboaren zenbaketatik bereizia: bi pazientek "aplikazioa hilabete honetan erabili du" egoera berbera izan dezakete, batak egunero erregistratzen duen bitartean eta besteak behin erregistratu eta hiru astez desagertzen den bitartean; erregulartasun-metrikak soilik bereizten ditu.

## Zergatik den garrantzitsua

Osasun digitaleko tresna batekin etengabeko eta erregularki elkarreragitea onura klinikoaren aurretiazko adierazle fidagarrienetakoa da, bereziki portaeraren mende dauden baldintzetan, hala nola diabetesean, pisu-kudeaketan eta osasun mentalean, non tresnaren balioa sostengatzen duen ohituratik datorren, eta ez saio bakar batetik. Produktu batek hileko erabiltzaile aktiboen zenbaketa osasuntsua jakinarazi dezake, behin sartu eta urruntzen den populazioa zerbitzatzen ari den bitartean, hileko erabilera aktiboa langa baxua baita eta hilabetearen barneko erabilera-ereduari buruz ezer esaten ez baitu; erregulartasun-metrikek, jarduera-zenbaketa soilek ezin duten moduan, hori atzematen dute. Erregulartasuna asteetan baino hilabeteetan zehar mantentzeko gauza zailenetakoa denez, produktuaren kalitatearen eta egokitasun klinikoaren seinale zintzoagoa da leiho laburreko konpromiso-zifrak baino, hauek onboarding-aren ondorengo berritasun-efektuetara joera baitute.

## Nola kalkulatzen den

```
Parte-hartze erregulartasun tasa = gutxienez elkarrekintza egoki bat izan duten asteak
                                    / matrikulatutako aste guztiak × 100

"Elkarrekintza egokia" esplizituki eta koherentki definitu behar da
(adibidez janari-sarrera bat, sintomen kontrol bat edo jarduera-sinkronizazio bat) —
ez inoiz ekintzarik erregistratu gabeko gertaera pasibo bat, hala nola aplikazioa irekitzea.

Banaketa gisa jakinarazi, ez populazio-batez bestekoa soilik:
  adib. % 80ko edo gehiagoko aste-erregulartasuna duten pazienteen ehunekoa,
        % 50-79 dutenena,
        % 50etik behera dutenena
```

## Adibide landua

Elikadura-entrenamenduko aplikazio batek paziente bat 12 asterako matrikulatzen du. Pazienteak gutxienez janari-sarrera egoki bat erregistratzen du 12 asteetatik 9tan; beraz, banakako parte-hartze erregulartasun tasa 9 / 12 × 100 = % 75 da. Gutxienez 12 astez matrikulatutako 2.000 pazienteko aplikazioaren kohorte osoan, 600k (% 30) ≥ % 80ko aste-erregulartasuna mantentzen dute, 900k (% 45) % 50-79ko tartean daude, eta 500ek (% 25) % 50etik behera. Kohorteko batez bestekoa soilik jakinaraziz gero (% 65 ingurukoa izan liteke), pazienteen laurdena ia batere ez dagoela parte hartzen ezkutatuko litzateke — batez besteko orokorrean diluitu beharrean bereizita ikertzea merezi duen segmentua.

## Datu-iturriak eta kontuan hartu beharrekoak

Erregulartasun-datuak produktuaren gertaera-erregistroetatik datoz (janari-sarrerak, jarduera-sinkronizazioak, kontrolak), eta "elkarrekintza egokia"ren definizioak eragin itzela du emaitzazko tasan — definizio malgu batek (aplikazioa irekitzea) beti hobeto begiratuko du zorrotz batek (erregistro-sarrera oso eta esanguratsu batek) baino; beraz, erabilitako definizioa garbi adierazi behar da jakinarazitako edozein zifrarekin batera. Automatikoki sinkronizatutako datuak (adibidez, atzeko planoan jarduera sinkronizatzen duen fitness-jarraitzaile konektatu bat) eskuz erregistratutako datuetatik bereizita jakinarazi behar dira, sinkronizazio automatikoak itxurazko erregulartasuna puztu dezakeelako, pazientearen ahalegin aktiborik edo produktuaren orientazioarekiko konpromisorik islatu gabe.

## Hutsuneak

- **Aplikazioa irekitzea konpromiso esanguratsuarekin nahastea**: aplikazio-irekitze pasibo bat (adibidez push jakinarazpen batek eragindakoa) ez da janari-sarrera erregistratu bat edo kontrol osatu bat bezalakoa; definitu eta jakinarazi elkarrekintza egokiak soilik.
- **Populazioaren batez bestekoa soilik jakinaraztea**: erregulartasun-tasa batez beste osasuntsua ematen duenak populazio bimodal bat ezkuta dezake, oso konprometituak eta ia osoki desinplikatuak; jakinarazi erregulartasun-bandetan banaketa, ez batez bestekoa soilik.
- **Matrikulazio-luzeraren izendatzailea alde batera uztea**: oso denbora desberdinez matrikulatutako pazienteen arteko erregulartasun-tasak, matrikulazio-iraupena kontuan hartu gabe alderatzeak, neurketa-leiho laburragoa eta mantentzeko errazagoa izan duen taldearen alde alborapena sortuko du.
- **Atzeko planoko sinkronizazio automatikoak tasa puztea**: pasiboki sinkronizatutako wearable-datuen jarioak paziente desinplikatu bat etengabe aktibo gisa ager dezake, portaera-aldaketarik edo produktuarekiko konpromiso errealik gabe.

## Iturriak

- Osasun digitaleko konpromiso-ereduei eta emaitza klinikoekiko harremanari buruzko literatura aditu-berrikusia, adibidez Journal of Medical Internet Research (JMIR) aldizkarian argitaratutako ikerketak
- American Medical Informatics Association (AMIA), pazienteek sortutako osasun-datuen kalitateari eta konpromisoaren neurketari buruzko gidalerroa
- Digital Therapeutics Alliance, terapia digitalen konpromisoaren eta emaitzen neurketarako jardunbide egokien gidalerroa

Ikus, halaber: [erabiltzaileen atxikipen tasa](../erabiltzaileen-atxikipen-tasa/), pazientea matrikulatuta jarraitzen duen ala ez neurtzen duen metrika estuki lotua, matrikulatuta dagoen bitartean zenbateko erregulartasunez parte hartzen duen horretatik bereizia.
