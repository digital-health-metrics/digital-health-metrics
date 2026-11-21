# Biometresch Stabiliséierungsquote

D'biometresch Stabiliséierungsquote ass den Undeel vun den ageschriwwene Patienten, déi mat engem verbonnenen Iwwerwaachungsapparat iwwer e längere Zäitraum, an net nëmmen zu engem eenzegen Zäitpunkt, e klinesch definéierte Zilberäich fir e biometreschen Wäert erreechen an halen — meeschtens de Bluttdrock ënner enger Schwell wéi 130/80 mmHg. Si ënnerscheet sech vun der biometrescher Verbesserungsquote (kuckt dat Thema): D'Verbesserung mierkt d'Gréisst vun enger Ännerung géintiwwer dem Ausgangswäert, während d'Stabiliséierung mierkt, ob e Patient zouverlässeg an engem sécheren Beräich gehale gëtt, soubal d'Behandlung oder d'Iwwerwaachung ugefaangen huet — dat ass d'Resultat, dat am wichtegsten ass fir Patienten, déi schonn no um Zil sinn oder schonn ënner Behandlung stinn.

## Firwat et wichteg ass

Fir e groussen Deel vun de Patienten a Programmer fir chronesch Krankheeten — besonnesch bei Hypertonie, wou d'Bluttdrockzieler aus de Richtlinne gutt etabléiert an direkt mam kardiovaskuläre Risiko verbonne sinn — ass dat klinescht Zil net eng eemoleg Verbesserung, mee en nohaltege Kontroll, an e Patient, deen an an aus dem Zilberäich oszilléiert, stellt e wesentlech anert Risiko duer wéi een, deen sech eemol verbessert an dann do bleift. Verbonne Apparater (Mobilfunk-Bluttdrockmanschetten, kontinuéierlech Glukosemessung) maachen et méiglech, d'Stabiliséierung kontinuéierlech ze moossen amplaz nëmme bei Klinikbesich, a weisen Patienten op, deenen hir Messunge an der Klinik kontrolléiert ausgesinn, awer hir Heemmessunge instabil sinn — e Muster, dat als maskéiert Hypertonie bekannt ass an dat periodesch Messunge vir Plaz eleng net erkennen. D'Stabiliséierungsquote ze mellen amplaz nëmmen eng eenzeg Momentopnam "um Zil" zwéngt e Programm, sech domadder auserneeziesetzen, wéi konsequent, an net nëmmen wéi dacks, et d'Patienten am Beräich hält.

## Wéi et berechent gëtt

```
Biometresch Stabiliséierungsquote = Patienten mat ≥ 80% vun de Messunge
                                    am Zilberäich iwwer de Messzäitraum /
                                    Patienten mat enger Mindestzuel vu
                                    gülteg Messunge an deem Zäitraum × 100

Beispiller fir Schwellen:
  Bluttdrock — Zil < 130/80 mmHg (oder déi gëlteg klinesch Richtlinn-
               schwell fir de Risikoprofil vum Patient)
  Glukos     — Zilberäich no de Richtlinne fir kontinuéierlech
               Glukosemessung, als "Time in Range" gemellt

E Mindestschwell fir d'Mesfrequenz (z. B. op d'mannst 3 Messunge pro
Woch) soll festgeluecht ginn, ier e Patient an den Nenner opgeholl gëtt,
fir ze verhënneren, dass Patienten, déi selten moossen, kënschtlech
stabil erscheinen.
```

## Beispill

E Programm fir d'Fernüberwaachung vu Bluttdrock bei Hypertonie schreift 600 Patienten mat Mobilfunk-Bluttdrockmanschetten an, vun deenen all erwaart gëtt, op d'mannst 3 Messunge pro Woch ze maachen. Dovun erfëllen 540 iwwer e Messzäitraum vun 3 Méint d'Mindestschwell fir d'Mesfrequenz a ginn an den Nenner opgeholl. Vun deene 540 hunn 350 op d'mannst 80% vun hire Messunge ënner 130/80 mmHg, woumat déi biometresch Stabiliséierungsquote 350 / 540 × 100 = 65% ass. Déi 60 Patienten, déi wéinst ze wéineg Messunge ausgeschloss goufen, ginn getrennt als Lück an der Datekompletttheet gemellt an net an den Zieler (Zähler) nach an d'Grupp vun den "net stabiliséierten" agerechent, well hire richtege Kontrollstatus wierklech onbekannt an net schlecht ass.

## Datequellen a Virbehalter

D'Messunge kommen direkt aus dem eegenen Datestroum vum verbonnenen Apparat, deen objektiver a vill méi dacks ass wéi Messunge an der Klinik, awer Feeler bei der Positionéierung an der Technik (eng falsch dimensionéiert oder positionéiert Bluttdrockmanschett) kënnen e systematesche Bias abréngen, deen eng eenzeg Validéierungsmessung an der Klinik net onbedéngt erfaasst. D'Wiel vum Zilberäich soll der aktueller gëltegen klinescher Richtlinn fir de spezifesche Risikoprofil a Komorbiditéite vum Patient follegen an net enger eenzeger universeller Schwell, well d'Zieler aus de Richtlinne jee no Alter, Nierfunktioun a kardiovaskuläre Risiko ënnerschiddlech sinn. E Patient mat wéineg Messunge soll ni roueg standardméisseg als "stabil" gezielt ginn; en transparent aus dem Nenner auszeschléissen an d'Ausschléissung ze mellen ass éierlecher wéi en op Basis vun ze wéineg Donnéeën entweder als kontrolléiert oder als net kontrolléiert ze zielen.

## Fallen

- **Eng eenzeg Messung am Zilberäich als Stabiliséierung behandelen**: Stabiliséierung geet ëm nohalteg Kontroll iwwer en definéierten Zäitraum, net ëm eng Momentopnam; ëmmer en Mindestundeel u Messunge am Zilberäich iwwer dësen Zäitraum verlaangen, net eng eenzeg qualifizéierend Messung.
- **Seelen Messer roueg ausschléissen ouni et ze mellen**: Patienten, déi selten Messunge maachen, si weder automatesch stabil nach instabil; si transparent aus dem Nenner ausschléissen an d'Ausschléissungsquote als separat Kennzuel fir d'Datekompletttheet mellen.
- **Kalibréierungs- an Techniksfeeler vum Apparat ignoréieren**: eng schlecht ugepasste Manschett oder en net kalibréierten Apparat kann d'Messunge systematesch an eng Richtung verfälschen, wat eng naiv aus Rohdaten vum Apparat berechent Stabiliséierungsquote ouni periodesch Validéierung net erkennt.
- **Een eenzegen universelle Zilberäich fir all Patienten benotzen**: klinesch Zieler aus de Richtlinne variéieren no Risikoprofil a Komorbiditéit; eng pauschal Schwell op eng klinesch heterogen Populatioun unzewenden klassifizéiert verschidde Patienten falsch als stabiliséiert oder net stabiliséiert par rapport zu hirem tatsächlechen individuellen Zil.

## Quellen

- American Heart Association (AHA) / American College of Cardiology (ACC), Bluttdrockzieler aus de Richtlinnen a Richtlinne fir d'Bluttdrockiwwerwaachung doheem
- International Diabetes Federation an American Diabetes Association (ADA), Konsens-Richtlinne zur kontinuéierlecher Glukosemessung "Time in Range"
- Peer-reviewed Literatur zur biometrescher Fernüberwaachung an zur nohaltege Kontroll vu Krankheeten, zum Beispill Studien, déi am npj Digital Medicine publizéiert goufen

Kuckt och: [Biometresch Verbesserungsquote](../biometresch-verbesserungsquote/), déi verbonne Kennzuel zur Gréisst vun der Ännerung géintiwwer dem Ausgangswäert, am Géigesaz zur nohaltege Kontroll, soubal e Zil erreecht ass.
