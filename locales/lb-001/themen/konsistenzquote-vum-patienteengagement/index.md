# Konsistenzquote vum Patienteengagement

D'Konsistenzquote vum Patienteengagement mierkt, wéi regelméisseg e ageschriwwene Patient mat engem digitale Gesondheetsprodukt iwwer d'Zäit interagéiert — zum Beispill Iessen oder Symptomer protokolléieren, kierperlech Aktivitéit opzeechnen oder Gesondheetsdaten usinn — amplaz einfach nëmmen, ob en et iwwerhaapt benotzt huet. Et ass eng longitudinal Kennzuel, ënnerscheet vun enger Zuel vun der aktiver Notzung zu engem Zäitpunkt: Zwee Patienten kënnen en identesche Status "huet d'App dëse Mount benotzt" hunn, wärend deen een all Dag konsequent protokolléiert an deen aneren eemol protokolléiert an dräi Wochen verschwënnt, an nëmmen d'Konsistenzkennzuel ënnerscheet se.

## Firwat et wichteg ass

Nohalteg, regelméisseg Interaktioun mat engem digitale Gesondheetstool ass ee vun de méi zouverlässege Fréhindikatoren fir klineschen Notzen, besonnesch bei verhalensofhängege Krankheeten wéi Diabetes, Gewiichtsmanagement a mental Gesondheet, wou dem Tool säi Wäert aus der Gewunnecht kënnt, déi et ënnerstëtzt, amplaz aus enger eenzeger Sessioun. E Produkt ka gesond monatlech aktiv Notzerzuele mellen, wärend et tatsächlech eng Populatioun bedéngt, déi sech eemol aloggt an dann ewechdriwwt, well monatlech aktiv Notzung eng niddreg Hürd ass, déi näischt iwwer d'Notzungsmuster bannent dem Mount seet; Konsistenzmetriken erfaassen dat op eng Manéier, déi einfach Aktivitéitszuelen net kënnen. Well Konsistenz och eng vun de méi schwéiere Saache ass, déi iwwer Méint amplaz Wochen ze erhalen, ass si e méi éierlecht Signal fir Produktqualitéit a klineschen Fit wéi Engagement-Zuele mat kuerze Fënstere, déi direkt no dem Onboarding fir Neiegkeetseffekter ufälleg sinn.

## Wéi et berechent gëtt

```
Engagement-Konsistenzquote = Wochen mat op d'mannst enger qualifizéierender
                             Interaktioun / gesamt Wochen ageschriwwen × 100

Eng "qualifizéierend Interaktioun" soll explizit a konsequent definéiert
ginn (z. B. en Iessen-Log-Entrée, e Symptom-Check-in oder eng ofgeschloss
Aktivitéitssynchronisatioun) — ni en passivt Ereegnes wéi en App-Opmaachen
ouni protokolléiert Aktioun.

Als Verdeelung mellen, net nëmmen als Populatiounsmëttelwäert:
  z. B. Undeel vun de Patienten mat ≥ 80% wöchentlecher Konsistenz,
        Undeel mat 50-79%, Undeel mat < 50%
```

## Beispill

Eng Ernärungscoaching-App schreift e Patient fir 12 Wochen an. De Patient protokolléiert an 9 vun deene 12 Wochen op d'mannst een qualifizéierenden Iessen-Entrée, wat eng individuell Engagement-Konsistenzquote vu 9 / 12 × 100 = 75% erginn. Iwwer déi ganz Kohort vun 2.000 Patienten vun der App, déi fir op d'mannst 12 Wochen ageschriwwe sinn, behalen 600 Patienten (30%) ≥ 80% wöchentlech Konsistenz, 900 (45%) falen an de Bereich vun 50-79%, an 500 (25%) falen ënner 50%. Nëmmen de Kohortmëttelwäert ze mellen (deen ëm 65% kéint landen) géif verstoppen, dass e ganzt Véierel vun de Patienten kaum iwwerhaapt engagéiert ass — e Segment, dat et wäert ass, getrennt ënnersicht ze ginn, amplaz an en Gesamtmëttelwäert verdënnt ze ginn.

## Datequellen a Virbehalter

D'Konsistenzdaten kommen aus de produkteegene Event-Logs (Iessen-Entréeën, Aktivitéitssynchronisatiounen, Check-ins), an d'Definitioun vun enger "qualifizéierender Interaktioun" huet en enormen Effekt op déi resultéierend Quote — eng lenient Definitioun (all App-Opmaachen) gesäit ëmmer besser aus wéi eng strikt (e kompletten, sënnvollen Log-Entrée), dofir muss déi benotzt Definitioun niewent all gemellter Zuel kloer uginn ginn. Automatesch synchroniséiert Daten (zum Beispill e verbonnenen Fitness-Tracker, deen d'Aktivitéit am Hannergrond synchroniséiert) sollen getrennt vu manuell protokolléierten Daten gemellt ginn, well automatesch Synchronisatioun déi scheinbar Konsistenz opbléise kann, ouni eng aktiv Efforten oder en Engagement vum Patient mat de Richtlinne vum Produkt ze reflektéieren.

## Fallen

- **App-Opmaachen mat sënnvollem Engagement vermëschen**: e passivt App-Opmaachen (zum Beispill duerch eng Push-Notifikatioun ausgeléist) ass net dat selwecht wéi en protokolléierten Iessen-Entrée oder en ofgeschloss Check-in; nëmmen qualifizéierend Interaktiounen definéieren a mellen.
- **Nëmmen de Populatiounsduerchschnëtt mellen**: eng gesond ausgesinn duerchschnëttlech Konsistenzquote kann eng bimodal Populatioun aus héich engagéierte a bal komplett desengagéierte Patienten verstoppen; d'Verdeelung iwwer d'Konsistenzbänner mellen, net nëmmen de Mëttelwäert.
- **Den Nenner vun der Aschreiwungsdauer ignoréieren**: d'Konsistenzquoten tëscht Patienten ze vergläichen, déi fir ganz ënnerschiddlech laang ageschriwwe sinn, ouni d'Aschreiwungsdauer ze berécksiichtegen, verzerrt Richtung der Grupp, déi e méi kuerzt, méi einfach ze erhaltend Moossfënster hat.
- **Automatesch Hannergrondsynchronisatioun, déi d'Quote opbléist**: en passiv synchroniséierten Datestroum vun engem Wearable kann e desengagéierte Patient konsequent aktiv ausgesinn loossen, ouni dass et eng richteg Verhalensännerung oder e Produktengagement vu senger Säit gëtt.

## Quellen

- Peer-reviewed Literatur zu Engagement-Muster vun der digitaler Gesondheet an hirem Zesummenhang mat klineschen Resultater, zum Beispill Studien, déi am Journal of Medical Internet Research (JMIR) publizéiert goufen
- American Medical Informatics Association (AMIA), Richtlinne fir d'Qualitéit vu patientegeneréierte Gesondheetsdaten an d'Engagement-Moossung
- Digital Therapeutics Alliance, Best-Practice-Richtlinne fir d'Engagement- an Resultatmoossung bei digitalen Therapeutika

Kuckt och: [Notzer-Retentiounsquote](../notzer-retentiounsquote/), déi enk verbonne Kennzuel, ob e Patient iwwerhaapt ageschriwwe bleift, am Géigesaz dozou, wéi konsequent en engagéiert ass, wärend en ageschriwwe ass.
