# Geräteverfügbarkeitsrate

Die Geräteverfügbarkeitsrate misst den Anteil der geplanten Überwachungszeit, in der ein vernetztes Gesundheitsgerät – ein Fernpatientenüberwachungssensor, ein Wearable oder eine häusliche Telemedizin-Einheit – tatsächlich online ist, Daten überträgt und korrekt funktioniert, statt offline, getrennt oder fehlerhaft zu sein. Es ist die grundlegende Infrastrukturkennzahl unter jedem Fernüberwachungs- oder vernetzten Geräteprogramm: Ein klinischer Alarm, ein biometrischer Trend oder eine Engagement-Zahl, die aus einem Gerät berechnet wird, das häufig offline war, ist nur so zuverlässig wie die dahinterstehende Konnektivität.

## Warum das wichtig ist

Das gesamte klinische Wertversprechen eines Fernpatientenüberwachungsprogramms hängt von kontinuierlicher oder nahezu kontinuierlicher Datenerfassung ab; ein Gerät mit schlechter Verfügbarkeit erzeugt stille Lücken im klinischen Bild eines Patienten, die als Stabilität fehlinterpretiert werden können (kein Alarm, weil keine Daten, nicht weil sich nichts geändert hat), statt korrekt als Überwachungsfehler identifiziert zu werden. Die Geräteverfügbarkeit ist auch ein Frühindikator für Programmkosten und Patientenerfahrung: Ein Gerät, das häufig die Verbindung verliert, erzeugt Support-Anrufe, Patientenfrustration und potenziell unnötige klinische Kontaktaufnahme, um zu prüfen, ob eine Datenlücke ein echtes klinisches Ereignis oder einfach einen technischen Fehler widerspiegelt. Da Fehler bei der Geräteverfügbarkeit häufig auf von der Organisation kontrollierte Infrastruktur zurückzuführen sind (ein schlecht konfiguriertes Mobilfunk-Gateway, schwache WLAN-Abdeckung im Haus eines Patienten, eine unzureichend gewartete Geräteflotte) statt auf den Patienten, gehört diese Kennzahl eindeutig zum Vertriebspartner- und technischen Betriebsteam, nicht wahllos in die Engagement-Kennzahlen der Patienten eingefaltet.

## Wie sie berechnet wird

```
Geräteverfügbarkeitsrate = Zeit, in der das Gerät online war und
                           gültige Daten übertragen hat / gesamte
                           geplante Überwachungszeit × 100

Grundursachen der Ausfallzeit segmentieren, wo Daten dies zulassen:
  Geräteseitiger Ausfall     (Batterie, Hardwarefehler, Firmware-
                             Absturz)
  Konnektivitätsausfall      (Mobilfunk-/WLAN-/VPN-Unterbrechung)
  Patientenseitige Faktoren  (Gerät ausgeschaltet, außer Reichweite
                             bewegt)

Unterstützende technische Parameter, die zusammen mit der
Verfügbarkeit verfolgt werden sollten:
  Durchschnittliche CPU-Auslastung, Speichernutzung und Batterie-
  stand pro Gerät
  Mittlere Zeit zwischen Konnektivitätsausfällen
  Mittlere Zeit bis zur Wiederverbindung nach einem Ausfall
```

## Durchgerechnetes Beispiel

Ein Fernüberwachungsprogramm für Herzpatienten setzt 1.000 vernetzte Geräte ein, von denen jedes kontinuierlich übertragen soll. Über einen 30-tägigen Monat (720 geplante Überwachungsstunden pro Gerät) protokolliert die Flotte kombiniert 705.600 tatsächliche Online-Stunden gegenüber geplanten 720.000 Stunden, was eine flottenweite Geräteverfügbarkeitsrate von 705.600 / 720.000 × 100 = 98 % ergibt. Die Grundursachenanalyse der 14.400 Ausfallstunden zeigt, dass 60 % auf Mobilfunk-Konnektivitätsausfälle zurückzuführen sind, die sich in einer bestimmten ländlichen Serviceregion konzentrieren, 25 % auf Geräte mit alternden Batterien, die zum Austausch markiert sind, und 15 % auf Patienten, die ihr Gerät vorübergehend ausschalten. Diese Aufschlüsselung weist auf zwei klare, unterschiedliche Interventionen hin – eine Konnektivitätskorrektur für die betroffene Region und ein proaktives Batterieaustauschprogramm –, die eine einzelne aggregierte Verfügbarkeitszahl nicht unterschieden hätte.

## Datenquellen und Vorbehalte

Verfügbarkeitsdaten stammen aus dem eigenen Geräteverwaltungs- und Telemetriesystem des Geräteherstellers oder Plattformanbieters, das Verbindungs- und Heartbeat-Ereignisse pro Gerät protokolliert; die Organisation sollte genau bestätigen, was der Anbieter als „online" zählt (ein Gerät kann sich selbst als mit einem Netzwerk verbunden melden, während es keine gültigen klinischen Daten überträgt, was für klinische Zwecke als Ausfallzeit zählen sollte, selbst wenn das eigene Dashboard des Anbieters es als verbunden meldet). Die Verfügbarkeit sollte, soweit das Volumen dies zulässt, pro Gerätekohorte oder Geografie berichtet werden, da die Konnektivitätsqualität oft geografisch gebündelt ist (ländliche Mobilfunkabdeckung, WLAN in älteren Gebäuden), statt gleichmäßig über eine Patientenpopulation verteilt zu sein, und eine aggregierte flottenweite Zahl ein schwerwiegendes, behebbares regionales Problem verbergen kann.

## Fallstricke

- **Netzwerkverbindung mit gültiger Datenübertragung verwechseln**: Ein Gerät kann auf einem Anbieter-Dashboard „verbunden" erscheinen, während es keine nutzbaren klinischen Daten überträgt; Verfügbarkeit gegen tatsächlichen gültigen Datenempfang definieren und messen, nicht allein gegen rohe Netzwerkkonnektivität.
- **Nur einen flottenweiten Durchschnitt berichten**: Dies kann ein schwerwiegendes, geografisch oder gerätekohorten-spezifisches Ausfallzeitproblem verbergen, das ein gezielter Durchschnitt aufdecken würde und das eine spezifische, behebbare Lösung hat.
- **Grundursache der Ausfallzeit nicht unterscheiden**: Geräteseitige, konnektivitätsbezogene und patientenseitige Ausfallzeit erfordern jeweils eine völlig andere Intervention; ein einzelner Ausfallzeitprozentsatz ohne Grundursachensegmentierung kann nicht gehandhabt werden.
- **Eine Datenlücke standardmäßig als klinische Stabilität behandeln**: Ein fehlender Datenstrom von einem Offline-Gerät sollte eine technische Konnektivitätsprüfung auslösen, nicht stillschweigend als „keine Nachricht ist gute Nachricht" für den klinischen Status des Patienten interpretiert werden.

## Quellen

- Continua Design Guidelines / Personal Connected Health Alliance, technische Interoperabilitätsstandards für vernetzte Gesundheitsgeräte
- ONC / HealthIT.gov, Leitlinien zur Implementierung von Fernpatientenüberwachungsprogrammen und technischen Anforderungen
- Peer-begutachtete Literatur zur Zuverlässigkeit von Fernpatientenüberwachungsgeräten und Datenvollständigkeit, beispielsweise Studien veröffentlicht in npj Digital Medicine

Siehe auch: [Triage-Weiterleitungsgenauigkeit](../triage-routing-accuracy/), da diese davon abhängt, vollständige, zuverlässige Gerätedaten zu erhalten, um überhaupt eine korrekte Triage-Entscheidung zu treffen.
