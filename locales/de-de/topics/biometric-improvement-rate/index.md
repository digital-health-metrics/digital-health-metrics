# Biometrische Verbesserungsrate

Die biometrische Verbesserungsrate ist der Anteil der in ein digitales Gesundheitsprogramm eingeschriebenen Patienten, die eine klinisch bedeutsame Verbesserung bei einem erfassten biometrischen Wert erzielen – am häufigsten glykiertes Hämoglobin (HbA1c) bei Diabetes- und kardiometabolischen Programmen oder Body-Mass-Index (BMI) bei Gewichtsmanagement-Programmen – innerhalb eines definierten Einschreibungszeitraums. Es ist die Ergebniskennzahl, die letztlich die klinischen Aussagen eines digitalen Gesundheitsprodukts rechtfertigt: Engagement- und Nutzungszahlen beschreiben, wie ein Produkt verwendet wird, aber die biometrische Verbesserung kommt dem Nachweis näher, dass es tatsächlich wirkt.

## Warum das wichtig ist

Digitale Gesundheitsprogramme werden häufig mit dem Versprechen verbesserter Gesundheitsergebnisse verkauft und beauftragt, und die biometrische Verbesserungsrate ist die direkteste, quantifizierbarste Methode, um dieses Versprechen gegen einen spezifischen, klinisch anerkannten Schwellenwert zu prüfen, anstatt gegen eine vage Behauptung „besserer Gesundheit". Kostenträger, Arbeitgeber und Gesundheitssysteme knüpfen Erstattung oder Vertragsverlängerung zunehmend an nachgewiesene biometrische Veränderungen, sodass ein Programm, das diese Rate nicht glaubwürdig berichten kann, sowohl kommerziell als auch klinisch im Nachteil ist. Die Kennzahl ist auch eine Disziplinkontrolle für das Programmdesign: Es ist weitaus einfacher, Engagement (Anmeldungen, gesendete Nachrichten) zu berichten als Ergebnisse, und ein Team sollte misstrauisch gegenüber jedem Programm sein, das Ersteres begeistert berichtet, während es bei Letzterem vage bleibt.

## Wie sie berechnet wird

```
Biometrische Verbesserungsrate = Patienten, die eine definierte klinisch
                                 bedeutsame Verbesserung erzielen /
                                 Patienten mit gültiger Ausgangs- und
                                 Folgemessung × 100

Gängige klinisch bedeutsame Schwellenwerte:
  HbA1c  — eine Reduktion von ≥ 0,5 Prozentpunkten oder Erreichen
           eines definierten Ziels (z. B. < 7,0 %) ausgehend von
           einem außerhalb des Bereichs liegenden Ausgangswert
  BMI    — eine Reduktion von ≥ 5 % des Ausgangsgewichts, aufrecht-
           erhalten bis zum Folgemessungszeitpunkt

Für jeden erfassten biometrischen Wert separat berichten; HbA1c- und
BMI-Verbesserung niemals zu einem einzigen kombinierten
„Verbesserungs"-Prozentsatz vermischen.
```

## Durchgerechnetes Beispiel

Ein kardiometabolisches digitales Gesundheitsprogramm schreibt 800 Patienten mit einem außerhalb des Bereichs liegenden HbA1c-Ausgangswert ein. Von diesen haben 620 sowohl eine gültige Ausgangs- als auch eine Folgemessung nach 6 Monaten (180 gehen für die Nachverfolgung verloren und werden aus dem Nenner ausgeschlossen, nicht als Misserfolge gezählt). Von den 620 mit gepaarten Messungen erzielen 340 eine Reduktion von mindestens 0,5 Prozentpunkten. Die biometrische Verbesserungsrate beträgt 340 / 620 × 100 = 55 %. Würde dies gegen die vollen 800 Eingeschriebenen berichtet (340 / 800 = 42,5 %), würde dies den Verlust der Nachverfolgung mit Behandlungsversagen vermischen und die Rate für Patienten, die die Messung tatsächlich abgeschlossen haben, unterschätzen.

## Datenquellen und Vorbehalte

Ausgangs- und Folgemesswerte stammen typischerweise von einem verbundenen Gerät (ein Bluetooth-Blutzuckermessgerät oder eine smarte Waage), einem aus der elektronischen Patientenakte importierten Laborergebnis oder einem vom Patienten selbst gemeldeten Wert – und diese drei Quellen weisen sehr unterschiedliche Zuverlässigkeit auf, daher sollte die Quelle zusammen mit der Rate berichtet werden. Der Verlust der Nachverfolgung ist selten zufällig: Patienten, die sich von einem Programm lösen, sind oft auch diejenigen, die sich am wenigsten verbessert haben, sodass eine hohe Verbesserungsrate, die nur bei Patienten berechnet wird, die die Nachverfolgung abgeschlossen haben, die tatsächliche Wirkung des Programms auf Populationsebene überschätzen kann. Saisonale Effekte und Regression zum Mittelwert sind sowohl bei HbA1c als auch beim Gewicht real, daher sollte ein Programm nach Möglichkeit mit einer gleichzeitigen oder historischen Kontrollgruppe vergleichen, anstatt jede Verbesserung als Beweis für die Wirkung des Programms zu behandeln.

## Fallstricke

- **Verlust der Nachverfolgung ausschließen statt berichten**: Patienten ohne Folgemessung stillschweigend aus dem Nenner zu entfernen, kann die scheinbare Verbesserungsrate erheblich aufblähen; immer die Abschlussrate der Folgemessung zusammen mit der Verbesserungsrate selbst berichten.
- **Selbstberichtete und gerätebasierte Messungen ohne Kennzeichnung mischen**: Ein selbstberichtetes Gewicht ist systematisch weniger zuverlässig als eine Messung von einer verbundenen smarten Waage, und das Vermischen der beiden Quellen verschleiert, wie viel einer scheinbaren Verbesserung Messrauschen ist.
- **Keine Kontrolle oder Kontrafaktum**: Viele chronische biometrische Messwerte schwanken oder regredieren von selbst zum Mittelwert; eine einarmige Verbesserungsrate ohne jegliche Vergleichsgruppe ist ein Hinweis, aber kein schlüssiger Beweis für die Programmwirkung.
- **Eine bescheidene durchschnittliche Veränderung als Beweis für breite Verbesserung behandeln**: Eine kleine durchschnittliche Verbesserung auf Populationsebene kann von wenigen stark Reagierenden getragen werden, während die meisten Patienten keine Veränderung sehen; die Verteilung berichten (z. B. den Anteil, der den klinisch bedeutsamen Schwellenwert überschreitet), nicht nur die durchschnittliche Veränderung.

## Quellen

- American Diabetes Association (ADA), Standards of Care in Diabetes, Leitlinien zu HbA1c-Zielwerten und klinisch bedeutsamer Veränderung
- Centers for Disease Control and Prevention (CDC), Division of Diabetes Translation, Leitlinien zur Programmevaluation
- Peer-begutachtete Literatur zu den Ergebnissen digitaler Diabetes- und Gewichtsmanagement-Programme, beispielsweise Studien veröffentlicht in npj Digital Medicine und Diabetes Care

Siehe auch: [Medikamentenadhärenzrate](../medication-adherence-rate/), ein häufiger vorgelagerter Treiber biometrischer Verbesserung in Programmen für chronische Erkrankungen.
