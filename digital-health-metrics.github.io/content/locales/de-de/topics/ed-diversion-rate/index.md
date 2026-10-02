# Notaufnahme-Umleitungsrate

Die Notaufnahme-Umleitungsrate (ED-Umleitungsrate) misst den Anteil der von einem digitalen Triage- oder virtuellen Versorgungstool bearbeiteten Patientenkontakte, die ohne diese Intervention plausibel zu einem Notaufnahmebesuch geführt hätten, aber stattdessen sicher über einen niedrigerakuten Pfad gemanagt wurden – Selbstversorgungsempfehlung, ein Hausarzttermin oder ein geplanter dringender Versorgungstermin. Es ist eine spezifische, hochwertige Teilmenge der Triage-Weiterleitungsgenauigkeit (siehe dieses Thema), die sich vollständig auf vermiedene Notaufnahmenutzung konzentriert, das Ergebnis, das am direktesten sowohl mit Gesundheitskosten als auch mit der Entlastung der Notaufnahmekapazität verbunden ist.

## Warum das wichtig ist

Notaufnahmen gehören zu den teuersten Versorgungsumgebungen pro Kontakt und werden häufig für Probleme genutzt, die anderswo sicher gemanagt werden könnten, sodass die Fähigkeit eines digitalen Triage-Tools, geeignete Fälle sicher von der Notaufnahme umzuleiten, eine seiner kommerziell und operativ wertvollsten Fähigkeiten ist – und eine der am leichtesten zu vermittelnden an einen Kostenträger oder ein Gesundheitssystem, das die Kapitalrendite des Tools bewertet. Aber Umleitung hat nur dann Wert, wenn sie sicher ist: Ein Tool, das Patienten aggressiv von der Notaufnahme wegleitet, auf Kosten des Übersehens echter Notfälle, hat die völlig falsche Seite des Kompromisses optimiert, weshalb die ED-Umleitungsrate immer zusammen mit einer Sicherheitskennzahl berichtet werden sollte, die übersehene oder verzögerte Notfallvorstellungen bei umgeleiteten Patienten verfolgt, nicht isoliert als reiner Effizienzgewinn berichtet werden sollte.

## Wie sie berechnet wird

```
ED-Umleitungsrate = sicher von der Notaufnahme zu einem geeigneten
                    niedrigerakuten Pfad umgeleitete Patienten-
                    kontakte / als potenziell notaufnahmegebunden
                    bewertete Patientenkontakte insgesamt × 100

„Sicher umgeleitet" erfordert eine Bestätigung, über Nachverfolgung
oder verknüpfte Gesundheitsaktendaten, dass der Zustand des
Patienten innerhalb eines definierten Nachverfolgungsfensters (z. B.
72 Stunden) tatsächlich keine Notfallversorgung erforderte — eine
Umleitungsentscheidung wird nicht allein dadurch als sicher
validiert, dass der Patient danach nicht sofort in die Notaufnahme
ging.

Zusammen berichten mit:
  Verpasste-Notfall-Rate = umgeleitete Patienten, die innerhalb des
                           Nachverfolgungsfensters tatsächlich
                           Notfallversorgung benötigten / umgeleitete
                           Patienten insgesamt × 100
```

## Durchgerechnetes Beispiel

Ein digitaler Triage-Service bewertet in einem Monat 3.000 Patientenkontakte, die sein klinischer Algorithmus als potenziell notaufnahmegebunden ohne Intervention einstuft. Von diesen werden 1.800 zu einem niedrigerakuten Pfad umgeleitet (eine Umleitungsrate von 60 %). Die Nachverfolgung der umgeleiteten Kohorte nach 72 Stunden anhand verknüpfter Gesundheitsaktendaten ergibt, dass 45 der 1.800 umgeleiteten Patienten innerhalb dieses Fensters tatsächlich in einer Notaufnahme vorstellig wurden (eine Verpasste-Notfall-Rate von 45 / 1.800 × 100 = 2,5 %). Die Berichterstattung der 60-%-Umleitungszahl ohne die 2,5-%-Verpasste-Notfall-Rate würde nur die Hälfte des Sicherheits-Effizienz-Kompromisses darstellen, der tatsächlich bestimmt, ob das Umleitungsverhalten des Tools angemessen kalibriert ist.

## Datenquellen und Vorbehalte

Die Bestätigung, dass ein umgeleiteter Patient anschließend keine Notfallversorgung benötigte, hängt von verknüpften Daten ab – entweder den eigenen Notaufnahmeaufzeichnungen desselben Gesundheitssystems, einem regionalen Gesundheitsinformationsaustausch oder einem strukturierten Patientennachverfolgungsanruf oder -fragebogen – und ein Umleitungsprogramm, das ohne eine dieser Datenquellen betrieben wird, kann seine eigene Sicherheit tatsächlich nicht validieren, sondern nur basierend auf dem Fehlen einer Beschwerde annehmen. Die angemessene Umleitungsrate und akzeptable Verpasste-Notfall-Rate sind klinische Policy-Entscheidungen, nicht rein statistische, und sollten bewusst von der klinischen Führung festgelegt werden, statt als Nebeneffekt dessen entstehen zu dürfen, welchen Schwellenwert ein Triage-Algorithmus zufällig standardmäßig verwendet. Die Umleitungsrate sollte nach vorgestellter Symptom- oder Beschwerdekategorie berichtet werden, da angemessene Umleitungsraten je nach Erkrankung enorm variieren (eine kleine Platzwunde versus Brustschmerzen rechtfertigen sehr unterschiedliche Umleitungsschwellenwerte).

## Fallstricke

- **Umleitungsrate ohne verknüpfte Verpasste-Notfall-Sicherheitskennzahl berichten**: Eine hohe Umleitungsrate, erzielt durch Unter-Triage echter Notfälle, ist kein Erfolg; die beiden Kennzahlen müssen immer zusammen berichtet werden.
- **Annehmen, dass kein Notaufnahmebesuch bedeutet, dass die Umleitung sicher war**: Ein Patient könnte sich in einem anderen, nicht verknüpften Krankenhaussystem vorstellen, oder könnte ein wirklich schädliches Ergebnis haben, ohne sich jemals in einer Notaufnahme vorzustellen; Sicherheit über verknüpfte Daten oder strukturierte Nachverfolgung validieren, nicht allein das Fehlen eines Notaufnahmebesuchs im selben System.
- **Den Umleitungsschwellenwert rein zur Maximierung der Umleitungsrate festlegen**: Ein Algorithmus oder eine Policy, die auf Maximierung der Umleitung ohne eine entsprechende Sicherheitsbeschränkung abgestimmt ist, wird die Patientensicherheit gegen eine besser aussehende Effizienzzahl eintauschen.
- **Umleitungsrate über alle Beschwerdetypen hinweg vermischen**: Angemessene Umleitungsraten unterscheiden sich stark je nach vorgestellter Beschwerde; eine einzelne gemischte Rate kann nicht zeigen, ob das Tool für die spezifischen klinisch wichtigsten Erkrankungen sicher und effektiv funktioniert.

## Quellen

- Agency for Healthcare Research and Quality (AHRQ), Forschung zur Notaufnahmenutzung und angemessenen Umleitung der Versorgungsumgebung
- NHS England, Leitlinien zu NHS-111- und digitalen Dringlichkeitsversorgungs-Triage-Sicherheits- und Wirksamkeitsstandards
- Peer-begutachtete Literatur zu digitalen Triage- und virtuellen Versorgungs-ED-Umleitungsergebnissen, beispielsweise Studien veröffentlicht in den Annals of Emergency Medicine und npj Digital Medicine

Siehe auch: [Triage-Weiterleitungsgenauigkeit](../triage-routing-accuracy/), die breitere Genauigkeitskennzahl, deren spezifische, sicherheitskritische Teilmenge diese ist.
