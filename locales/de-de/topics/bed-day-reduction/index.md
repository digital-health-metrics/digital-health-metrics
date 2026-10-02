# Bettentagereduktion

Die Bettentagereduktion misst die Gesamtzahl der stationären Krankenhausbettentage, die vermieden werden, indem eine definierte Versorgungsepisode – am häufigsten postoperative Erholung oder Management akuter Erkrankungen – von einem traditionellen stationären Aufenthalt zu einer digital unterstützten Alternative wie einer virtuellen Station oder einem Hospital-at-Home-Programm verlagert wird. Es ist die primäre Kapazitätskennzahl für Initiativen virtueller Stationen und Hospital-at-Home, die eine klinische Versorgungsmodelländerung direkt in die Währung (Bettenkapazität) übersetzt, gegen die Krankenhausbetrieb und Systemplaner tatsächlich steuern.

## Warum das wichtig ist

Die stationäre Bettenkapazität ist eine der am stärksten eingeschränkten und teuersten Ressourcen in jedem Krankenhaussystem, und das zentrale Wertversprechen eines virtuellen Stations- oder Hospital-at-Home-Programms ist, dass es eine definierte Versorgungsstufe sicher liefern kann, ohne ein physisches Bett zu belegen, und diese Kapazität für Patienten freigibt, die auf keine andere Weise versorgt werden können. Die Bettentagereduktion verwandelt eine oft abstrakte Behauptung („dieses Programm verbessert die Versorgung") in eine konkrete operative Zahl, auf die Krankenhauskapazitätsplaner, Finanzteams und Auftraggeber direkt reagieren können: Sie kann verwendet werden, um zu modellieren, ob sich eine Investition in ein Überwachungsprogramm durch vermiedene Bettenkosten selbst finanziert und um wie viel. Da die Bettentagereduktion nur dann wertvoll ist, wenn die Patientensicherheit gewahrt bleibt, sollte sie immer zusammen mit, niemals anstelle von, einer Sicherheitsergebniskennzahl (wie der Wiedereinweisungsrate oder der Eskalationsrate zur stationären Versorgung) für dieselbe Population berichtet werden.

## Wie sie berechnet wird

```
Bettentagereduktion = erwartete Bettentage bei standardmäßiger
                      stationärer Versorgung (basierend auf
                      historischen Verweildauer-Daten für eine
                      abgeglichene Patientenkohorte) − tatsächliche
                      Bettentage, die von Patienten auf dem
                      virtuellen/digitalen Pfad verwendet wurden

Pro klinischem Pfad berichten (z. B. postoperative Erholung, akute
respiratorische Exazerbation), da die erwartete Verweildauer stark
je nach Erkrankung variiert und eine zusammengefasste Zahl über
nicht verwandte Pfade hinweg nicht aussagekräftig ist.
```

## Durchgerechnetes Beispiel

Historische Daten eines Krankenhauses zeigen, dass Patienten, die sich von einem bestimmten elektiven chirurgischen Eingriff erholen, eine durchschnittliche stationäre Verweildauer von 4 Tagen haben. Ein virtuelles Stationsprogramm schreibt 150 Patienten ein, die sich vom selben Eingriff erholen, und entlässt sie nach durchschnittlich 1,5 stationären Tagen, wobei der Rest der Erholung aus der Ferne überwacht wird. Die Bettentagereduktion beträgt (4 − 1,5) × 150 = 375 Bettentage über den Messzeitraum. Diese Zahl sollte zusammen mit der 30-Tage-Eskalationsrate zur stationären Versorgung und der Wiedereinweisungsrate der virtuellen Stationskohorte für dieselben 150 Patienten berichtet werden, da eine Bettentageneinsparung, die auf Kosten einer materiell höheren Eskalations- oder Wiedereinweisungsrate erzielt wird, nicht der klinische Erfolg ist, den die Schlagzeilenzahl sonst nahelegen würde.

## Datenquellen und Vorbehalte

Erwartete Bettentage erfordern eine glaubwürdige historische Basislinie, idealerweise von einer abgeglichenen Patientenkohorte, die unter standardmäßiger stationärer Versorgung mit ähnlichen klinischen Merkmalen (Alter, Komorbidität, Eingriffstyp, Schweregrad) wie die virtuelle Stationspopulation behandelt wurde, da der Vergleich mit einem nicht abgeglichenen historischen Durchschnitt riskiert, die tatsächliche Reduktion zu über- oder unterschätzen, wenn die digital gemanagte Kohorte systematisch gesünder oder kränker ist als die historische Vergleichsgruppe. Tatsächlich auf dem digitalen Pfad verwendete Bettentage stammen aus dem eigenen Aufnahme-Entlassungs-Verlegungs-System (ADT) des Krankenhauses; jede Eskalation zurück zur stationären Versorgung während der überwachten Erholungsphase sollte ehrlich gegen das Programm gezählt werden (als verwendete Bettentage, nicht ausgeschlossen), da der Ausschluss von Eskalationen aus der Berechnung die scheinbare Reduktion künstlich aufblähen würde.

## Fallstricke

- **Bettentagereduktion ohne abgeglichenen Sicherheitsvergleich berichten**: Eine virtuelle Station, die Bettentage einspart, aber eine materiell schlechtere Eskalations- oder Wiedereinweisungsrate als die Standardversorgung hat, hat keine echte Verbesserung demonstriert; immer beide zusammen berichten.
- **Eine nicht abgeglichene oder veraltete historische Basislinie verwenden**: Der Vergleich mit einer historischen Kohorte mit unterschiedlichem Fallmix, unterschiedlicher Komorbiditätslast oder unterschiedlicher Ära der klinischen Praxis kann die tatsächliche Bettentageneinsparung erheblich über- oder unterschätzen.
- **Eskalationen zurück zur stationären Versorgung von der Berechnung ausschließen**: Ein Patient, der virtuell überwacht wird, aber mitten in der Erholung zur stationären Versorgung eskaliert wird, sollte diese Bettentage gegen das Programm gezählt bekommen, nicht stillschweigend aus der Analyse herausfallen.
- **Pfade mit sehr unterschiedlichen erwarteten Verweildauern zusammenfassen**: Die Aggregation der Bettentagereduktion über klinisch nicht verwandte Pfade (zum Beispiel die Kombination von postoperativer Erholung und chronischem respiratorischem Management) zu einer Zahl verschleiert, welcher spezifische Pfad die Einsparung tatsächlich antreibt.

## Quellen

- NHS England, Leitlinien zu virtuellen Stations- und Hospital-at-Home-Programmen sowie Berichtsstandards für Bettentage-Auswirkungen
- Peer-begutachtete Literatur zu Hospital-at-Home- und virtuellen Stationsmodellen, beispielsweise Studien veröffentlicht in JAMA Internal Medicine und npj Digital Medicine
- Institute for Healthcare Improvement (IHI), Leitlinien zu Kapazitätsmanagement und alternativen Versorgungsmodellen

Siehe auch: [Krankenhaus-Wiedereinweisungsrate](../hospital-readmission-rate/), die Sicherheitskennzahl, die immer zusammen mit jeder Bettentagereduktionsbehauptung für dieselbe Patientenpopulation berichtet werden sollte.
