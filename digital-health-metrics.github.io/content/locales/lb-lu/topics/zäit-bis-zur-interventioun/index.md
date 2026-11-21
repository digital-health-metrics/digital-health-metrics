# Zäit bis zur Interventioun

D'Zäit bis zur Interventioun (Time to Intervention) ass d'Zäit, déi vum Zäitpunkt, wou en automatiséierten Gesondheetsalarm generéiert gëtt — zum Beispill wann en Apparat fir d'Fernüberwaachung e Vitalzeechen ausserhalb vum Beräich erkennt, oder en digitalt Triage-Tool e verschlechterte Patient markéiert — bis zum Moment verfléisst, wou e Member vum klineschen Team tatsächlech eng Reaktioun ufänkt. Et ass d'Prozesskennzuel, déi bestëmmt, ob en automatiséierten Alarmsystem säi Kärverspriechen astellt: E Problem méi fréi z'erfaassen, wéi e traditionellt Modell vu geplangte Check-ins oder patientegeleeten Telefonsuriff et gemaach hätt.

## Firwat et wichteg ass

En Alarmsystem, dat e klinesch korrekten Alarm generéiert, deen awer net vun enger zäitgerechter Reaktioun gefollegt gëtt, huet d'Patientesécherheet net tatsächlech verbessert; dat ganzt Wäertverspriechen vun der Fernüberwaachung an automatiséierte Alarmer baséiert doropper, de Krees méi séier ze schléissen wéi de Wee ouni Iwwerwaachung et géif maachen. Well ënnerschiddlech Schweregrade ënnerschiddlech Reaktiounsdringlechkeet verdéngen, soll d'Zäit bis zur Interventioun ëmmer pro Schweregradstuf gemellt ginn, amplaz als eenzegen Duerchschnëtt, well e séiere Duerchschnëtt iwwer all Alarmer geféierlech lues Reaktioun op déi kleng Zuel vun deenen am schwéierwiegendsten verstoppe kann. Dës Kennzuel ass och eng vun de kloersten, iwwerzeegendsten Weeër, de Wäert vun engem automatiséierte Iwwerwaachungsprogramm der klinescher Leedung a de Bezuelers ze demonstréieren, well si direkt mat der eegener fréierer, net automatiséierter Reaktiounszäit vun der selwechter Organisatioun fir e ähnlecht klinescht Szenario kann vergläicht ginn.

## Wéi et berechent gëtt

```
Zäit bis zur Interventioun = Zäitstempel (klinesch Reaktioun ugefaang) −
                              Zäitstempel (Alarm generéiert)

Median an en héijt Perzentil (z. B. dat 90.) mellen, segmentéiert no
Alarmschweregradstuf, net als eenzegen gemëschten Duerchschnëtt.

"Klinesch Reaktioun ugefaang" soll präzis a konsequent definéiert ginn —
z. B. e Kliniker, deen d'Patientenakt opmécht a handelt, oder e
dokumentéierte Versuch vun ausgaangenem Kontakt — net einfach en
Alarm, deen ugekuckt oder bestätegt gëtt, ouni dass eng Aktioun
geholl gëtt.
```

## Beispill

Dem Alarmsystem vun engem Programm fir kardiaal Fernüberwaachung markéiert an engem Mount 200 Arrhythmie-Alarmer mat héijem Schweregrad. D'Mediane Zäit vun der Alarmgeneratioun bis zum Ufank vum ausgaangene Kontakt duerch e Kliniker ass 12 Minutten, mat enger Zäit vum 90. Perzentil vun 38 Minutten. Historesch Daten vum selwechte fréiere, net iwwerwaachte Wee vun der selwechter Populatioun (wou e ähnlecht Ereegnes typescherweis eréischt beim nächste geplangte Klinikbesuch oder bei der Spidolspresentatioun opkomm wier) weisen eng mediane Zäit bis zu iergendenger klinescher Reaktioun, déi an Deeg, net Minutte gemooss gëtt. Dëse Verglach — net déi 12-Minutte-Zuel isoléiert — ass dat, wat de klineschen Wäert vum Iwwerwaachungsprogramm weist; d'Zuel vum 90. Perzentil ass genee sou wichteg, well si de Schwanz vun den Alarmer identifizéiert, déi iwwer eng hallef Stonn gebraucht hunn, fir ze reagéieren, an eng eegen Ursaachenanalyse verdéngt.

## Datequellen a Virbehalter

D'Zäitstempele vun der Alarmgeneratioun kommen aus dem eegenen Event-Log vun der Iwwerwaachungsplattform; d'Zäitstempele vun der klinescher Reaktioun kommen typescherweis aus dem Audit-Trail vun der elektronescher Patientenakt oder dem eegene Workflow- oder Task-Managementsystem vum Betreiungsteam, an dës zwee Systemer musse präzis zäitsynchroniséiert sinn, fir dass dat berechent Intervall vertrauenswierdeg ass. "Reaktioun ugefaang" brauch eng strikt, dokumentéiert Definitioun, well e Kliniker, deen nëmmen en Alarm kuckt oder ofweist, ouni weider Aktioun, e fundamental anert, a vill manner berouegend, Ereegnes ass wéi een, dat e tatsächlechen ausgaangene Kontakt oder eng Interventioun ausléist — d'Vermëschung vun deenen zwee léisst d'Reaktiounszäit besser ausgesinn, wéi d'klinesch Realitéit ass. Personalniveauen iwwer Nuecht an um Weekend beaflossen d'Zäit bis zur Interventioun heefeg bedeitend, dofir soll dës Kennzuel no Dagesziit- a Wochendagssegmenter gemellt ginn, wou d'Alarmvolumen et erlaabt, amplaz nëmmen als 24/7-gemëschten Duerchschnëtt, deen eng seriö Reaktiounslück no der Aarbecht verstoppen kann.

## Fallen

- **Alarmbestätegung als Reaktioun zielen**: e Kliniker, deen en Alarm kuckt oder ofweist, ass net dat selwecht wéi eng klinesch Reaktioun ze starten; Reaktioun strikt als dokumentéiert Aktioun definéieren, net als passiv Bestätegung.
- **Eng eenzeg gemëscht Zäit iwwer all Schweregrade mellen**: e séiere Duerchschnëtt iwwer Alarmer mat niddregem a mat héijem Schweregrad zesummen ka eng geféierlech lues Reaktiounszäit speziell fir déi Alarmer mam héchste Schweregrad verstoppen, déi am wichtegsten sinn.
- **Effekter vum Personalmuster ignoréieren**: d'Reaktiounszäit variéiert dacks wesentlech no Dagesziit a Wochendag wéinst de Personalniveauen; en eenzegen Gesamtduerchschnëtt ka eng systematesch Reaktiounslück no der Aarbecht oder um Weekend verstoppen.
- **D'Zäit bis zur Interventioun tëscht Organisatioune mat ënnerschiddlechen Alarmschwellen vergläichen**: eng Organisatioun mat enger méi konservativer (méi sensibeler) Alarmschwell generéiert méi Alarmer mat niddregem Schweregrad, wat hir duerchschnëttlech Reaktiounszäit am Verglach zu enger Organisatioun mat enger strikterer Schwell verdënne kann, onofhängeg vun der tatsächlecher klinescher Reaktiounsfäegkeet.

## Quellen

- NHS England, Richtlinne fir d'Fernüberwaachung a Standarde fir d'klinesch Reaktioun vu virtuellen Statiounen
- ONC / HealthIT.gov, Richtlinne fir d'Design a d'Sécherheet vu klineschen Alarmsystemer
- Peer-reviewed Literatur zu Reaktiounszäite bei Alarmer vun der Fernüberwaachung vu Patienten a klineschen Resultater, zum Beispill Studien, déi am npj Digital Medicine publizéiert goufen

Kuckt och: [Verfügbarkeetsquote vun Apparater](../verfügbarkeetsquote-vun-apparater/), well eng zouverlässeg Zuel fir d'Zäit bis zur Interventioun dovun ofhänkt, dass den ënnerleienden Iwwerwaachungsapparat tatsächlech online ass, fir den Alarm iwwerhaapt ze generéieren.
