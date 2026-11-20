# Krankenhaus-Wiedereinweisungsrate

Die Krankenhaus-Wiedereinweisungsrate ist der Anteil entlassener Patienten, die innerhalb eines definierten Zeitfensters nach der Entlassung ungeplant wieder ins Krankenhaus eingewiesen werden – am häufigsten 30 Tage. Für die digitale Gesundheit ist dies die Kennzahl, die am direktesten mit der Kostenträgerökonomie und wertbasierten Versorgungsverträgen verbunden ist: Ein Fernüberwachungs-, Nachentlassungs-Nachsorge- oder digitales Versorgungsübergangsprogramm, das keine glaubwürdige Wirkung auf Wiedereinweisungen nachweisen kann, wird wahrscheinlich keine fortgesetzte Erstattungsunterstützung erhalten, egal wie gut seine Engagement-Zahlen aussehen.

## Warum das wichtig ist

Eine ungeplante Wiedereinweisung ist teuer, für den Patienten belastend und wird in vielen Gesundheitssystemen inzwischen direkt sanktioniert: Programme wie das US-amerikanische Hospital Readmissions Reduction Program reduzieren die Zahlung an Krankenhäuser mit höheren als erwarteten Wiedereinweisungsraten für bestimmte Erkrankungen, weshalb Krankenhäuser aktiv digitale Nachentlassungs- und Fernüberwachungsprogramme beauftragen, die auf deren Reduzierung abzielen. Ein bedeutsamer Anteil der Wiedereinweisungen gilt als potenziell vermeidbar – verursacht durch unzureichende Entlassungsanweisungen, verpasste Nachsorgetermine, Medikamentenmissverständnisse oder unbehandelte Symptomverschlechterung, die ein gut gestalteter digitaler Berührungspunkt früher erfassen könnte – genau die Lücke, auf die digitale Übergangsversorgungstools abzielen. Die Wiedereinweisungsrate sollte immer zusammen mit dem Fallmix gelesen werden: Ein Programm, das eine kränkere, komplexere Population betreut, wird strukturell eine höhere Ausgangsrate haben als eines, das eine gesündere Population betreut, unabhängig von der Programmqualität.

## Wie sie berechnet wird

```
30-Tage-Wiedereinweisungsrate = ungeplante Wiedereinweisungen
                                innerhalb von 30 Tagen nach
                                Entlassung / Index-Entlassungen
                                insgesamt × 100

Aus dem Zähler ausschließen: geplante Wiedereinweisungen (z. B. ein
geplanter Nachsorgeeingriff) und Verlegungen, die eine Fortsetzung
derselben Versorgungsepisode darstellen, anstatt eine neue Aufnahme.

Nach Möglichkeit mit einem anerkannten Fallmix- oder Komorbiditäts-
index risikoadjustieren, bevor Raten über verschiedene
Patientenpopulationen oder Zeiträume hinweg verglichen werden.
```

## Durchgerechnetes Beispiel

Ein Krankenhaus entlässt in einem Quartal 1.200 Patienten mit Herzinsuffizienz. Von diesen werden 210 innerhalb von 30 Tagen wieder eingewiesen, davon sind 15 geplante Wiedereinweisungen für einen geplanten Eingriff und werden ausgeschlossen. Die ungeplante 30-Tage-Wiedereinweisungsrate beträgt (210 − 15) / 1.200 × 100 = 16,25 %. Für eine Teilmenge von 400 dieser Patienten (ausgewählt nach klinischem Risiko, nicht zufällig) wird ein Fernüberwachungsprogramm eingeführt, und deren ungeplante Wiedereinweisungsrate beträgt 14 %, verglichen mit 18 % bei den 800 nicht eingeschriebenen Patienten. Da die Einschreibung auf klinischem Risiko statt zufälliger Zuordnung basierte, ist dieser Unterschied eher ein Hinweis als ein schlüssiger Beweis für die Wirkung des Programms und sollte zusammen mit einer Risikoadjustierungsanalyse interpretiert werden, anstatt für bare Münze genommen zu werden.

## Datenquellen und Vorbehalte

Wiedereinweisungsdaten werden typischerweise aus dem eigenen Aufnahme-Entlassungs-Verlegungs-Feed (ADT) des Krankenhauses für Wiedereinweisungen in dieselbe Einrichtung gezogen, aber ein Patient, der in ein anderes Krankenhaus wieder eingewiesen wird, erscheint in diesem Feed überhaupt nicht, sodass die Verfolgung von Wiedereinweisungen in einem einzelnen Krankenhaus die tatsächlichen Wiedereinweisungsraten systematisch unterschätzt, sofern sie nicht durch regionale Gesundheitsinformationsaustauschdaten, Kostenträger-Abrechnungsdaten oder bundesstaatliche Alle-Kostenträger-Datenbanken ergänzt wird. Die Zuschreibung zu einem digitalen Programm erfordert Sorgfalt: Patienten, die sich freiwillig für ein Fernüberwachungsprogramm anmelden, sind selten eine zufällige Stichprobe der entlassenen Population, sodass ein naiver Vergleich der Wiedereinweisungsraten von Eingeschriebenen gegenüber Nicht-Eingeschriebenen tendenziell durch genau die Selektionseffekte verfälscht wird, die manche Patienten von vornherein eher zur Einschreibung veranlasst haben.

## Fallstricke

- **Vergleich roher, nicht risikoadjustierter Raten über Populationen hinweg**: Ein Programm, das eine kränkere Population betreut, wird eine höhere rohe Wiedereinweisungsrate zeigen als eines, das eine gesündere Population betreut, selbst wenn das Programm selbst effektiver ist; immer vor dem Vergleich risikoadjustieren.
- **Unterzählung von Wiedereinweisungen in andere Einrichtungen**: Das Vertrauen allein auf die eigenen ADT-Daten eines einzelnen Krankenhauses übersieht Wiedereinweisungen anderswo und unterschätzt die tatsächliche Rate, insbesondere in Gebieten mit mehreren konkurrierenden Krankenhaussystemen.
- **Selektionsverzerrung bei freiwilliger Programmeinschreibung**: Patienten, die sich für ein digitales Nachsorgeprogramm anmelden, unterscheiden sich oft systematisch (in Gesundheitskompetenz, sozialer Unterstützung oder Motivation) von denen, die dies nicht tun, was jeden naiven Vorher-Nachher- oder Eingeschrieben-Nicht-Eingeschrieben-Vergleich verfälscht.
- **Jede Rückkehr in dieselbe Einrichtung als Wiedereinweisung zählen**: Eine geplante, programmierte Wiedereinweisung (zum Beispiel ein geplanter zweistufiger Eingriff) ist kein Signal einer fehlgeschlagenen Entlassung und sollte aus dem Zähler ausgeschlossen werden, nicht mit echt ungeplanten Rückkehrern vermischt werden.

## Quellen

- Centers for Medicare & Medicaid Services (CMS), Spezifikationen des Hospital Readmissions Reduction Program und des Hospital-Wide Readmission-Maßes
- Institute for Healthcare Improvement (IHI), Leitlinien zur Reduzierung vermeidbarer Wiedereinweisungen
- Peer-begutachtete Literatur zu digitalen Fernüberwachungs- und Übergangsversorgungsinterventionen zur Reduzierung von Wiedereinweisungen, beispielsweise Studien veröffentlicht in JAMA Network Open und npj Digital Medicine

Siehe auch: [Triage-Weiterleitungsgenauigkeit](../triage-weiterleitungsgenauigkeit/), da eine unangemessene anfängliche Weiterleitung selbst ein nachgelagerter Treiber vermeidbarer Einweisungen sein kann.
