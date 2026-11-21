# Gailuen erabilgarritasun tasa

Gailuen erabilgarritasun tasak neurtzen du programatutako monitorizazio-denboraren zer proportziotan dagoen gailu konektatu bat (urrutiko pazienteen monitorizazio-sentsore bat, janzgarri bat edo etxeko telemedikuntza-unitate bat) benetan lineaz, datuak transmitituz eta behar bezala funtzionatuz, lineaz kanpo, deskonektatuta edo hutsegiten ari beharrean. Urrutiko monitorizazioko edo gailu konektatuetako programa guztien azpiko azpiegitura-metrika oinarrizkoa da: maiz lineaz kanpo egon zen gailu batetik kalkulatutako alerta klinikoa, joera biometrikoa edo konpromiso-zifra bat haren atzean dagoen konektibitatea bezain fidagarria da soilik.

## Zergatik den garrantzitsua

Urrutiko pazienteen monitorizazio-programa baten balio-proposamen kliniko osoa datuen jaso jarraitu edo ia jarraituaren mende dago; erabilgarritasun txarreko gailu batek pazientearen irudi klinikoan hutsune isilak sortzen ditu, egonkortasuntzat har daitezkeenak (alertarik ez dago datu-faltagatik, ez ezer aldatu ez delako) monitorizazio-hutsegite gisa behar bezala identifikatu beharrean. Gailuen erabilgarritasuna programaren kostuaren eta pazientearen esperientziaren adierazle aurreratua ere bada: maiz konexioa galtzen duen gailuak laguntza-deiak, pazientearen frustrazioa eta, balitekeena, datu-hutsune batek gertaera kliniko erreal bat ala hutsegite tekniko soil bat islatzen duen egiaztatzeko beharrezkoa ez den kanpo-kontaktu klinikoa sortzen ditu. Gailuen erabilgarritasun-hutsegiteak sarritan erakundeak kontrolatzen duen azpiegiturari egotz dakizkiokeenez (zelula-ate-bide gaizki konfiguratu bati, pazientearen etxeko Wi-Fi estaldura ahulari, gailu-flota gaizki mantendu bati), pazientearen ordez, metrika hau saltzailearen eta eragiketa teknikoen taldearen esku dago zuzenean, ez pazientearen konpromiso-metriken artean bereizketarik gabe nahasia.

## Nola kalkulatzen den

```
Gailuen erabilgarritasun tasa = gailua lineaz eta datu baliozkoak
                                transmitituz egon zen denbora /
                                programatutako monitorizazio-denbora
                                osoa × 100

Datuek ahalbidetzen dutenean, geldialdiaren kausa nagusiak segmentatu:
  Gailuaren aldeko hutsegitea  (bateria, hardware-akatsa, firmware-hutsegitea)
  Konektibitate-hutsegitea     (zelula/Wi-Fi/VPN etena)
  Pazientearen aldeko faktoreak (gailua itzalita, irismenetik kanpo mugitua)

Erabilgarritasunarekin batera jarraitu beharreko parametro tekniko
osagarriak:
  CPU erabileraren, memoria-erabileraren eta bateria-mailaren batez
  bestekoa gailuko
  Konektibitate-hutsegiteen arteko batez besteko denbora
  Etenaren ondoren berriro konektatzeko batez besteko denbora
```

## Adibide landua

Urrutiko monitorizazio kardiakoko programa batek 1.000 gailu konektatu hedatzen ditu, bakoitzak etengabe transmititzea espero delarik. 30 eguneko hilabete batean (gailuko 720 monitorizazio-ordu programatu), flotak 705.600 ordu lineako erregistratzen ditu, 720.000 ordu programatuen aurka, flota osoko gailuen erabilgarritasun tasa 705.600 / 720.000 × 100 = % 98 emanez. Geldialdiko 14.400 orduen kausa-analisiak erakusten du % 60 zerbitzu-eskualde errural jakin batean kontzentratutako zelula-konektibitatearen etenei egotzi daitekeela, % 25 ordezkapenerako markatutako bateria zaharkitudun gailuei, eta % 15 pazienteek behin-behinean gailua itzaltzeari. Banaketa honek bi esku-hartze argi eta desberdin adierazten ditu (eragindako eskualderako konektibitate-konponketa bat eta bateria-ordezkapen programa proaktibo bat), erabilgarritasun-zifra agregatu bakar batek bereiziko ez zituenak.

## Datu-iturriak eta kontuan hartu beharrekoak

Erabilgarritasun-datuak gailuaren fabrikatzailearen edo plataforma-saltzailearen gailu-kudeaketa- eta telemetria-sistematik datoz, gailu bakoitzeko konexio- eta bihotz-taupada-gertaerak erregistratzen dituena; erakundeak zehatz-mehatz egiaztatu behar du saltzaileak zer zenbatzen duen "lineaz" gisa (gailu batek sare batera konektatuta dagoela jakinarazi dezake datu kliniko baliozkorik transmitzen ez duen bitartean, eta hori helburu klinikoetarako geldialdi gisa zenbatu behar da, saltzailearen kontrol-panelak konektatuta dagoela jakinarazi arren). Erabilgarritasuna gailu-kohorte edo geografiaren arabera jakinarazi behar da bolumenak ahalbidetzen duenean, konektibitatearen kalitatea sarritan geografikoki multzokatuta egoten baita (landa-guneetako zelula-estaldura, eraikin zaharretako Wi-Fi) paziente-populazioan modu berdinean banatuta egon beharrean, eta flota osoko zifra agregatu batek eskualde-arazo larri eta konpondu daitekeena ezkutatu dezake.

## Hutsuneak

- **Sare-konexioa eta datu baliozkoen transmisioa nahastea**: gailu bat saltzailearen kontrol-panelean "konektatuta" ager daiteke datu kliniko erabilgarririk transmititzen ez duen bitartean; erabilgarritasuna datu baliozkoen benetako harrerarekiko definitu eta neurtu, ez sare-konektibitate gordinarekiko soilik.
- **Flota osoko batez bestekoa soilik jakinaraztea**: honek geografikoki edo gailu-kohorteka berariazkoa den geldialdi-arazo larri bat ezkutatu dezake, batez besteko bideratu batek agerian utziko lukeena eta konponketa zehatz eta bideragarria duena.
- **Geldialdiaren kausa bereiztu gabe uztea**: gailuaren aldeko, konektibitatezko eta pazientearen aldeko geldialdiek esku-hartze guztiz desberdina behar dute; kausen segmentaziorik gabeko geldialdi-ehuneko bakar batean ezin da jardun.
- **Datu-hutsunea lehenespenez egonkortasun klinikotzat hartzea**: lineaz kanpoko gailu baten datu-fluxu falta batek konektibitate tekniko-egiaztapena abiarazi behar du, ez isilean "berririk ez, berri onak" gisa interpretatu pazientearen egoera klinikorako.

## Iturriak

- Continua Design Guidelines / Personal Connected Health Alliance, osasun konektatuko gailuen elkarreragingarritasun-arau teknikoak
- ONC / HealthIT.gov, urrutiko pazienteen monitorizazio-programen ezarpenari eta eskakizun teknikoei buruzko gidalerroak
- Urrutiko pazienteen monitorizazio-gailuen fidagarritasunari eta datuen osotasunari buruzko literatura aditu-berrikusia, adibidez npj Digital Medicine aldizkarian argitaratutako ikerketak

Ikus, halaber: [triajeko bideratzearen zehaztasuna](../triajeko-bideratzearen-zehaztasuna/), hasteko triaje-erabaki zuzena hartzeko gailuen datu osoak eta fidagarriak jasotzearen mende dagoena.
