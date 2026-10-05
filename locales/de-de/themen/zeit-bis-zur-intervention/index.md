# Zeit bis zur Intervention

Die Zeit bis zur Intervention ist die verstrichene Zeit von der Generierung eines automatisierten Gesundheitsalarms – zum Beispiel ein Fernüberwachungsgerät erkennt ein außerhalb des Bereichs liegendes Vitalzeichen, oder ein digitales Triage-Tool markiert einen sich verschlechternden Patienten – bis ein Mitglied des klinischen Teams tatsächlich eine Reaktion einleitet. Es ist die Prozesskennzahl, die bestimmt, ob ein automatisiertes Alarmsystem sein Kernversprechen einhält: ein Problem früher zu erfassen, als es ein traditionelles Modell geplanter Check-ins oder patienteninitiierter Telefonanrufe getan hätte.

## Warum das wichtig ist

Ein Alarmsystem, das einen klinisch korrekten Alarm generiert, dem aber keine zeitnahe Reaktion folgt, hat die Patientensicherheit nicht tatsächlich verbessert; das gesamte Wertversprechen von Fernüberwachung und automatisierter Alarmierung beruht darauf, die Schleife schneller zu schließen, als es der alternative, unüberwachte Pfad getan hätte. Da unterschiedliche Alarmschweregrade unterschiedliche Reaktionsdringlichkeit rechtfertigen, sollte die Zeit bis zur Intervention immer pro Schweregradstufe berichtet werden, nicht als einzelner Durchschnitt, da ein schneller Durchschnitt über alle Alarme hinweg eine gefährlich langsame Reaktion auf die kleine Zahl der schwerwiegendsten verbergen kann. Diese Kennzahl ist auch eine der klarsten, überzeugendsten Methoden, um den Wert eines automatisierten Überwachungsprogramms gegenüber klinischer Führung und Kostenträgern zu demonstrieren, da sie direkt mit der vorherigen, nicht automatisierten Reaktionszeit derselben Organisation für ein ähnliches klinisches Szenario verglichen werden kann.

## Wie sie berechnet wird

```
Zeit bis zur Intervention = Zeitstempel(klinische Reaktion
                            eingeleitet) − Zeitstempel(Alarm
                            generiert)

Median und ein hohes Perzentil (häufig das 90.) berichten,
segmentiert nach Alarmschweregradstufe, nicht als einzelner
zusammengefasster Durchschnitt.

„Klinische Reaktion eingeleitet" sollte präzise und konsistent
definiert werden — z. B. ein Kliniker öffnet die Patientenakte und
handelt, oder ein dokumentierter ausgehender Kontaktversuch —
nicht lediglich ein angesehener oder bestätigter Alarm ohne
ergriffene Maßnahme.
```

## Durchgerechnetes Beispiel

Das Alarmsystem eines Fernüberwachungsprogramms für Herzpatienten markiert in einem Monat 200 hochschwere Arrhythmie-Alarme. Die mediane Zeit von der Alarmgenerierung bis zur Einleitung eines ausgehenden Kontakts durch einen Kliniker beträgt 12 Minuten, mit einer 90.-Perzentil-Zeit von 38 Minuten. Historische Daten aus dem vorherigen, nicht überwachten Pfad derselben Population (wo ein ähnliches Ereignis typischerweise erst beim nächsten geplanten Klinikbesuch oder Krankenhausaufenthalt auftauchen würde) zeigen eine mediane Zeit bis zu irgendeiner klinischen Reaktion, gemessen in Tagen, nicht Minuten. Dieser Vergleich – nicht die 12-Minuten-Zahl isoliert – ist es, der den klinischen Wert des Überwachungsprogramms demonstriert; die 90.-Perzentil-Zahl ist ebenso wichtig, da sie den Schwanz der Alarme identifiziert, bei denen die Reaktion über eine halbe Stunde dauerte, und eine eigene Ursachenanalyse rechtfertigt.

## Datenquellen und Vorbehalte

Zeitstempel der Alarmgenerierung stammen aus dem eigenen Ereignisprotokoll der Überwachungsplattform; Zeitstempel der klinischen Reaktion stammen typischerweise aus dem Audit-Trail der elektronischen Patientenakte oder dem eigenen Workflow- oder Aufgabenmanagementsystem des Versorgungsteams, und diese beiden Systeme müssen präzise zeitsynchronisiert sein, damit das berechnete Intervall vertrauenswürdig ist. „Reaktion eingeleitet" benötigt eine strenge, dokumentierte Definition, da ein Kliniker, der einen Alarm lediglich ansieht oder ohne weitere Maßnahme verwirft, ein grundlegend anderes und weitaus weniger beruhigendes Ereignis ist als eines, das einen tatsächlichen ausgehenden Kontakt oder eine Intervention auslöst – die Vermischung der beiden wird die Reaktionszeit besser aussehen lassen als die klinische Realität. Nacht- und Wochenend-Personalbesetzungsniveaus beeinflussen die Zeit bis zur Intervention häufig erheblich, daher sollte diese Kennzahl, soweit das Alarmvolumen dies zulässt, nach Tageszeit- und Wochentagsegment berichtet werden, statt nur als 24/7-Gesamtdurchschnitt, der eine ernste Lücke bei der Reaktion außerhalb der Geschäftszeiten verbergen kann.

## Fallstricke

- **Alarmbestätigung als Reaktion zählen**: Ein Kliniker, der einen Alarm ansieht oder verwirft, ist nicht dasselbe wie die Einleitung einer klinischen Reaktion; Reaktion streng als dokumentierte Maßnahme definieren, nicht als passive Bestätigung.
- **Eine einzelne zusammengefasste Zeit über alle Schweregrade hinweg berichten**: Ein schneller Durchschnitt über kombinierte niedrig- und hochschwere Alarme kann eine gefährlich langsame Reaktionszeit speziell für die höchstschweren Alarme verbergen, die am wichtigsten sind.
- **Personalbesetzungsmuster-Effekte ignorieren**: Die Reaktionszeit variiert aufgrund der Personalbesetzungsniveaus oft erheblich nach Tageszeit und Wochentag; ein einziger Gesamtdurchschnitt kann eine systematische Lücke bei der Reaktion außerhalb der Geschäftszeiten oder am Wochenende verbergen.
- **Vergleich der Zeit bis zur Intervention zwischen Organisationen mit unterschiedlichen Alarmschwellenwerten**: Eine Organisation mit einem konservativeren (empfindlicheren) Alarmschwellenwert wird mehr niedrigakute Alarme generieren, was ihre durchschnittliche Reaktionszeit im Vergleich zu einer Organisation, die einen strengeren Schwellenwert verwendet, unabhängig von der tatsächlichen klinischen Reaktionsfähigkeit verwässern kann.

## Quellen

- NHS England, Leitlinien zu Standards der klinischen Reaktion bei Fernüberwachung und virtuellen Stationen
- ONC / HealthIT.gov, Leitlinien zum Design und zur Sicherheit klinischer Alarmsysteme
- Peer-begutachtete Literatur zu Alarmreaktionszeiten bei der Fernüberwachung von Patienten und klinischen Ergebnissen, beispielsweise Studien veröffentlicht in npj Digital Medicine

Siehe auch: [Geräteverfügbarkeitsrate](../geraeteverfuegbarkeitsrate/), da eine zuverlässige Zeit-bis-zur-Intervention-Zahl davon abhängt, dass das zugrunde liegende Überwachungsgerät tatsächlich online ist, um den Alarm überhaupt erst zu generieren.
