# Triage-Weiterleitungsgenauigkeit

Die Triage-Weiterleitungsgenauigkeit ist der Anteil der Patientenkontakte, bei denen ein automatisiertes oder KI-gestütztes Triage-Tool einen Patienten korrekt an die angemessene Versorgungsebene und -einrichtung weiterleitet – zum Beispiel Selbstversorgung, Hausarztversorgung, dringende Versorgung oder Notfallversorgung –, gemessen an einem klinisch validierten Referenzstandard. Dies ist die Sicherheits- und Wirksamkeitskennzahl für jede digitale Eingangstür, jeden Symptomchecker oder jedes KI-Triage-System: Das gesamte Wertversprechen des Tools beruht darauf, Patienten korrekt, schnell und konsistent weiterzuleiten.

## Warum das wichtig ist

Ein ungenaues Triage-Tool verursacht Schaden in beide Richtungen: Unter-Triage (Weiterleitung eines Patienten an eine niedrigere Versorgungsebene als benötigt) kann die Behandlung eines echten Notfalls verzögern, während Über-Triage (Weiterleitung eines Patienten an eine höhere Versorgungsebene als benötigt) knappe Notfall- und Dringlichkeitskapazitäten verschwendet und Kosten sowie Patientenangst ohne klinischen Nutzen erhöht. Da diese beiden Fehlermodi so unterschiedliche Konsequenzen haben, sollte die Triage-Weiterleitungsgenauigkeit immer zusammen mit der Richtung der Fehler berichtet werden, nicht als eine einzelne aggregierte Genauigkeitszahl, die verbirgt, ob das Tool sicher oder gefährlich irrt. Regulierungsbehörden und Gesundheitssysteme, die ein KI-Triage-Tool für den Einsatz bewerten, verlangen zunehmend diese Art der nach Schweregrad gegliederten Genauigkeitsberichterstattung als Bedingung für die klinische Freigabe, insbesondere bei Tools, die mit einem gewissen Grad an Autonomie vom Kliniker arbeiten.

## Wie sie berechnet wird

```
Triage-Weiterleitungsgenauigkeit = korrekt weitergeleitete Kontakte /
                                   triagierte Kontakte insgesamt × 100

Unter-Triage und Über-Triage separat berichten:
  Unter-Triage-Rate = Kontakte, die an eine niedrigere Dringlichkeits-
                      stufe als der Referenzstandard weitergeleitet
                      wurden / triagierte Kontakte insgesamt × 100
  Über-Triage-Rate  = Kontakte, die an eine höhere Dringlichkeitsstufe
                      als der Referenzstandard weitergeleitet wurden /
                      triagierte Kontakte insgesamt × 100

Der Referenzstandard ist typischerweise eine retrospektive klinische
Überprüfung desselben Falls, nach Möglichkeit verblindet gegenüber der
Ausgabe des Tools.
```

## Durchgerechnetes Beispiel

Ein KI-Symptomchecker-Tool triagiert 5.000 Patientenkontakte in einem Monat. Eine verblindete klinische Überprüfung einer Zufallsstichprobe von 500 dieser Kontakte ergibt, dass 430 an die korrekte Dringlichkeitsstufe weitergeleitet wurden (Genauigkeit 86 %), 45 unter-triagiert wurden (9 %) und 25 über-triagiert wurden (5 %). Die Unter-Triage-Rate von 9 % ist die Zahl, die am dringendsten untersucht werden muss, da sie Kontakte darstellt, bei denen ein Patient möglicherweise an eine weniger dringende Versorgung verwiesen wurde, als er tatsächlich benötigte; die Über-Triage-Rate von 5 % ist ein Kapazitäts- und Kostenproblem, aber kein direktes Sicherheitsproblem.

## Datenquellen und Vorbehalte

Der Referenzstandard, an dem die Triage-Genauigkeit gemessen wird, ist von enormer Bedeutung: Eine Überprüfung durch einen einzelnen Kliniker bringt dessen eigene Beurteilungsvariabilität mit sich, sodass eine glaubwürdige Genauigkeitszahl in der Regel entweder mehrere unabhängige Gutachter mit dokumentierter Übereinstimmung zwischen den Bewertern oder einen Vergleich mit einem nachträglich bestätigten klinischen Ergebnis erfordert (welche Versorgung der Patient tatsächlich benötigte, im Nachhinein festgestellt). Auch die Stichprobenziehung ist wichtig: Die Überprüfung nur einer Stichprobe aus Bequemlichkeit oder nur ungewöhnlich markierter Fälle wird keine Zahl liefern, die sich auf die Gesamtleistung des Tools verallgemeinern lässt. Genauigkeitszahlen sollten, soweit das zugrunde liegende Fallvolumen dies zulässt, separat nach vorgestellter Symptom- oder Beschwerdekategorie berichtet werden, da Triage-Tools selten bei allen Erkrankungen einheitlich funktionieren.

## Fallstricke

- **Berichten einer einzelnen zusammengefassten Genauigkeitszahl**: Das Zusammenfassen von Unter- und Über-Triage in eine Zahl verbirgt, ob die Fehler des Tools zum gefährlicheren Fehlermodus neigen; immer separat berichten.
- **Verwendung eines einzelnen, nicht verblindeten Gutachters als Referenzstandard**: Dies kann die Genauigkeitszahl stillschweigend in Richtung dessen verzerren, was dieser Gutachter selbst getan hätte, anstatt einen unabhängigen klinischen Standard.
- **Validierung nur anhand retrospektiver, bequemer Daten**: Die tatsächliche Weiterleitungsgenauigkeit eines Tools unter live, mehrdeutigen Patienteneingaben unterscheidet sich oft wesentlich von seiner Genauigkeit auf einem kuratierten Validierungsdatensatz, der während der Entwicklung zusammengestellt wurde.
- **Ignorieren von Leistungsdrift nach der Einführung**: Die Genauigkeit eines KI-Triage-Modells kann im Laufe der Zeit abnehmen, wenn sich Patientenpopulationen, vorgestellte Symptome oder die Verfügbarkeit von Versorgungspfaden ändern; die Genauigkeit sollte regelmäßig neu gemessen werden, nicht einmal validiert und dann als stabil angenommen werden.

## Quellen

- ONC / HealthIT.gov, Leitlinien zur Sicherheit und Qualitätssicherung von klinischer Entscheidungsunterstützung und KI-gestützten Tools
- Peer-begutachtete Literatur zur Genauigkeit von Symptomcheckern und KI-Triage-Tools, beispielsweise Studien veröffentlicht in JAMIA, npj Digital Medicine und BMJ Health & Care Informatics
- NHS England, Leitlinien zur klinischen Sicherheit digitaler Triage- und Fernberatungstools (DCB0129/DCB0160 klinische Risikomanagementstandards)

Siehe auch: [Bearbeitungszeit digitaler Überweisungen](../digital-referral-turnaround-time/), die Prozesskennzahl, die am direktesten einer Triage-Entscheidung nachgelagert ist.
