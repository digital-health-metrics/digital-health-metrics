# Notzer-Retentiounsquote

D'Notzer-Retentiounsquote ass den Undeel vun de Notzer, déi an enger Ufanksperiod aktiv waren an an enger spéiderer Period aktiv bleiwen, a säin Invers, d'Churn-Quote (oder Ofbroch-Quote), ass den Undeel, deen d'Produkt komplett net méi notzt. Wou d'Adoptiounsquote vum Patientenportal (kuckt dat Thema) mierkt, ob e Patient e digitale Gesondheetsprodukt jee sënnvoll aktivéiert, mierkt d'Retentioun, ob e weider benotzt — an fir all digitaalt Gesondheetsprodukt am Abonnement-Stil oder fir déi lafend Betreiung ass d'Retentioun normalerweis déi eenzeg Kennzuel, déi am enksten mat souwuel dem klineschen Impakt wéi och der kommerzieller Nohaltegkeet verbonne ass.

## Firwat et wichteg ass

E digitale Gesondheetsprodukt, dat Notzer net kann halen, kann keen nohaltege klineschen Notzen liwweren, egal wéi staark seng initial Adoptiouns- oder Aktivéierungszuelen sinn: En Tool fir d'Management vun enger chronescher Krankheet, dat zwou Wochen benotzt an dann opginn gëtt, wäert onwahrscheinlech e biometrescht Resultat beweegen, dat vu Méint nohalteger Verhalensännerung ofhänkt. D'Retentioun ass och eng vun de kommerziell folgereichsten Kennzuelen, déi eng digital Gesondheetsfirma un Investisseuren a Bezuelers mellt, well Retentiounskurven (d'Form vum Ofbroch iwwer d'Zäit, net nëmmen eng eenzeg Retentiounsprozentzuel) weisen, ob d'Produkt e wierklech nohaltegt Notzungsmuster fonnt huet oder just néiegkeetsgedriwwent initialt Interessi erfaasst, dat virauszesiche verschwënnt. Eng Retentiounskurve, déi sech no engem initialen Ofsprong offlaacht (Patienten, déi de éischte Mount iwwerstinn, bleiwen tendenziell), ass e ganz anert, a vill gesénger, Signal wéi eng, déi stänneg ouni Buedem weider fält.

## Wéi et berechent gëtt

```
Retentiounsquote (Period N) = Notzer, déi an der Period N aktiv waren a
                              och an der Ufankskohort-Period aktiv waren /
                              Notzer an der Ufankskohort-Period × 100

Churn-Quote = 1 − Retentiounsquote (fir déiselwecht Period)

Als Kohort-Retentiounskurve mellen (Retentioun um Dag/Woch/Mount 1, 2,
3…), net als eenzeg Zuel zu engem Zäitpunkt, well eng eenzeg Momentopnam
rezent bäigetruede Notzer (déi nach keng Chance haten, ze churnen) mat
laang gehaltenen Notzer vermëscht.
```

## Beispill

Eng digital Gesondheets-App schreift eng Kohort vun 1.000 neien Notzer am Januar an. Um Enn vum Mount 1 sinn nach 640 vun deenen originale 1.000 aktiv (Retentioun no Mount 1: 64%). Um Enn vum Mount 3 bleiwen 410 aktiv (Retentioun no Mount 3: 41%). Bis Mount 6 bleiwen 380 aktiv (Retentioun no Mount 6: 38%). D'Form vun dëser Kurve — en steile initialen Ofsprong, gefollegt vun enger Offlaachung tëscht de Méint 3 a 6 — suggeréiert, dass d'Produkt e stabille Kär vu Notzer hält, soubal se eng initial Adoptiounshürd iwwerwonnen hunn, wat e wesentlech anert an ermutegender Signal ass, wéi wann de Réckgang vum Mount 3 bis zum Mount 6 mat der selwechter Rat wéi tëscht de Méint 1 a 3 weidergaange wier.

## Datequellen a Virbehalter

D'Retentioun gëtt aus de produkteegene Login- oder Aktivitéits-Event-Logs berechent, mat enger konsequenter Definitioun vun "aktiv" (zum Beispill op d'mannst eng qualifizéierend Sessioun an der Period) iwwer all Kohort, déi verglach gëtt. Kohorte sollen op enger Like-for-Like-Basis verglach ginn — selwecht Ufankedefinitioun vun "aktiv", selwecht Längt vum Observatiounsfënster —, well souguer kleng definitoresch Ënnerscheeder (30-Deeg- géint 28-Deeg-Méint, oder eng méi strikt géint méi lockeren "aktiv"-Schwell) eng gemellte Retentiounsprozentzuel em e puer Punkte verschiebe kënnen, ouni dass et e richtegen Ënnerscheed am Notzerverhalen gëtt. Saisoneffekter si heefeg bei Gesondheets-Apps, déi u Neijoersvirsätz oder spezifesch Gesondheetsbewosstsinnsperioden gebonne sinn, sou dass e Joer-fir-Joer-Kohortverglach normalerweis informativer ass wéi e Verglach vun niewentenee läiege Kohorten zu verschiddene Joreszäiten.

## Fallen

- **Eng eenzeg Retentiounsmomentopnam amplaz vun enger Kurve mellen**: eng eenzeg "X% vun den Notzer sinn nach aktiv"-Zuel ouni d'Form vum Ofbroch iwwer d'Zäit ka net tëscht engem Produkt, dat sech offlaacht (gesond), an engem a kontinuéierlechem Réckgang (net gesond) ënnerscheeden.
- **D'"aktiv"-Definitioun tëscht Berichtsperioden änneren**: d'Definitioun vun engem aktive Notzer ze lockeren (zum Beispill en passivt App-Opmaachen amplaz enger ofgeschlossener Aktioun ze zielen) kann d'Retentioun verbessert erschéngen loossen, wann déi tatsächlech Notzung sech guer net geännert huet.
- **Kohort-Saisonalitéit ignoréieren**: d'Retentioun vun enger Januar-Kohort (dacks opgebléist duerch d'Aschreiwung mat Neijoersvirsätz, déi am Duerchschnëtt eng manner motivéiert Kohort mat sech bréngt) mat enger Kohort ze vergläichen, déi zu enger aner Joreszäit gewonnen gouf, kann irreféierend Trendconclusioune produzéieren.
- **Organesch a bezuelt Gewënnungskohorte vermëschen**: Notzer, déi iwwer ënnerschiddlech Kanäl gewonne goufen, behalen dacks ganz ënnerschiddlech; se zu enger aggregéierter Retentiounszuel ze vermëschen kann e kanalspezifescht Retentiounsproblem verstoppen.

## Quellen

- Peer-reviewed Literatur zum Engagement an Ofbroch bei Apps vun der digitaler Gesondheet, zum Beispill Studien, déi am Journal of Medical Internet Research (JMIR mHealth and uHealth) publizéiert goufen
- Digital Therapeutics Alliance, Best-Practice-Richtlinne fir d'Moossung vu Engagement a Retentioun bei digitalen Therapeutika
- Industrie-Benchmarking-Rapporte zur Retentioun vu mobilen Gesondheets-Apps, vun Analytikplattformen a Maartfuerschungsorganisatioune fir digital Gesondheet

Kuckt och: [Konsistenzquote vum Patienteengagement](../konsistenzquote-vum-patienteengagement/), déi d'Qualitéit vum Engagement bei gehale Notzer mierkt, am Géigesaz dozou, ob se iwwerhaapt ageschriwwe bleiwen.
