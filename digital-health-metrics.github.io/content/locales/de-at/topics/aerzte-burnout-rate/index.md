# Ärzte-Burnout-Rate

Die Ärzte-Burnout-Rate misst den Anteil der Kliniker, die bedeutsame Burnout-Symptome berichten – üblicherweise als emotionale Erschöpfung, Depersonalisation oder ein geringes Gefühl persönlicher Leistung über ein validiertes Umfrageinstrument bewertet – und wird speziell in der digitalen Gesundheit zusammen mit Maßen für die klinikerseitige digitale Werkzeugbelastung verfolgt, wie der für Papierkram oder die Dokumentation in der elektronischen Patientenakte (EHR) aufgewendeten Zeit. Sie existiert in einem Rahmenwerk digitaler Gesundheitskennzahlen, weil schlecht gestaltete klinische Software ein gut dokumentierter, messbarer Beitragsfaktor zu Burnout ist, und der Erfolg eines digitalen Gesundheitstools sollte niemals rein anhand patientenseitiger Kennzahlen bewertet werden, während seine Auswirkung auf die Kliniker ignoriert wird, die es bedienen müssen.

## Warum das wichtig ist

Digitale Gesundheitstools werden häufig mit dem expliziten Ziel eingeführt, die administrative Belastung der Kliniker zu reduzieren, aber ein schlecht gestalteter Workflow der elektronischen Patientenakte, eine übermäßige Menge an klinischen Alarmen von geringem Wert (siehe Übersteuerungsrate klinischer Warnmeldungen) oder eine umständliche Telemedizin-Benutzeroberfläche kann Burnout ebenso leicht erhöhen wie reduzieren – und ein Tool, das eine patientenseitige Engagement-Kennzahl verbessert, während es still und leise die Dokumentationsbelastung der Kliniker erhöht, hat kein positives Nettoergebnis für das Versorgungssystem insgesamt geliefert. Burnout ist in der klinischen Literatur stark mit medizinischen Fehlern, Klinikerfluktuation und geringerer Versorgungsqualität verbunden, daher fungiert es als Frühindikator für nachgelagerte Sicherheits- und Arbeitskräftenachhaltigkeitsprobleme, nicht nur als eine Annehmlichkeit der Arbeitsplatzzufriedenheit. Jedes digitale Gesundheitsprogramm, das behauptet, die klinische Belastung zu reduzieren, sollte diese Behauptung anhand einer gemessenen Basislinie belegen können, statt sie als Designabsicht zu behaupten.

## Wie sie berechnet wird

```
Ärzte-Burnout-Rate = Kliniker, die über dem Burnout-Schwellenwert
                     des validierten Instruments punkten / insgesamt
                     befragte Kliniker × 100

Gängige validierte Instrumente: Maslach Burnout Inventory (MBI),
der Professional Fulfillment Index oder eine einzelne Burnout-
Screening-Frage, validiert gegen ein umfassenderes Instrument.

Zusammen mit einem Proxy für digitale Belastung berichten, wo
verfügbar:
  EHR-Systemzeit pro Patientenkontakt
  Dokumentationszeit außerhalb geplanter klinischer Stunden
  („Pyjama-Zeit")
```

## Durchgerechnetes Beispiel

Ein Krankenhaussystem befragt 300 Ärzte mit dem Maslach Burnout Inventory, bevor ein ambientes klinisches Dokumentationstool eingeführt wird, das die Notizschreibzeit reduzieren soll. Zu Beginn punkten 135 Ärzte (45 %) über dem Burnout-Schwellenwert, und EHR-Audit-Protokolldaten zeigen durchschnittlich 58 Minuten Dokumentationszeit pro Arzt und Tag außerhalb geplanter klinischer Stunden. Sechs Monate nach der Einführung des Tools ergibt eine wiederholte Befragung derselben Ärzte, dass 108 (36 %) über dem Burnout-Schwellenwert liegen, zusammen mit einem Rückgang der Dokumentationszeit außerhalb der Geschäftszeiten auf 34 Minuten pro Tag. Die korrelierte Bewegung sowohl der Burnout-Rate als auch des objektiven EHR-abgeleiteten Proxys stärkt das Argument, dass das Tool zur Verbesserung beiträgt, obwohl ein formaler Vorher-Nachher-Vergleich dennoch andere gleichzeitige Arbeitsbelastungsänderungen im selben Zeitraum berücksichtigen sollte.

## Datenquellen und Vorbehalte

Burnout-Umfragedaten stammen aus einem validierten Instrument, das wiederkehrend durchgeführt wird (jährlich oder häufiger), und die Antwortrate ist wichtig: Eine niedrige Antwortrate riskiert eine Nicht-Antwort-Verzerrung, bei der die am meisten ausgebrannten Kliniker (mit der geringsten Kapazität, eine zusätzliche Umfrage auszufüllen) systematisch unterrepräsentiert sind, was die tatsächliche Rate unterschätzt. EHR-abgeleitete Proxys für digitale Belastung – Systemzeit, Dokumentationszeit außerhalb der Geschäftszeiten, Klickanzahl pro Kontakt – sind als objektive, kontinuierlich verfügbare Ergänzungen zu periodischen Umfragedaten nützlich, sollten aber gegen umfragebasiert berichtetes Burnout für eine bestimmte Organisation validiert werden, bevor sie als zuverlässiger eigenständiger Burnout-Indikator behandelt werden, da die Beziehung zwischen Systemzeit und tatsächlichem Burnout je nach Fachgebiet und individuellem Arbeitsstil variieren kann.

## Fallstricke

- **Sich allein auf EHR-abgeleitete Proxys verlassen**: Systemzeit und Klickanzahl korrelieren aggregiert mit Burnout, sind aber nicht dasselbe wie Burnout selbst, und können für einzelne Kliniker oder Fachgebiete mit wirklich unterschiedlichen Dokumentationsanforderungen irreführend sein.
- **Niedrige Umfrage-Antwortrate verschleiert die tatsächliche Rate**: Die am meisten von Burnout betroffenen Kliniker haben oft am wenigsten Kapazität, auf eine freiwillige Umfrage zu antworten, was ein Ergebnis mit niedriger Antwortrate zu einer künstlich gesünder aussehenden Zahl verzerrt.
- **Eine Burnout-Änderung einem einzelnen Tool zuschreiben, ohne Störfaktoren zu berücksichtigen**: Burnout wird von vielen gleichzeitigen Faktoren beeinflusst (Personalbesetzungsniveaus, Patientenvolumen, organisatorische Veränderungen); ein Vorher-Nachher-Vergleich um die Einführung eines Tools sollte diese nach Möglichkeit kontrollieren, statt eine einzelne Ursache anzunehmen.
- **Burnout rein als individuelles Resilienzproblem behandeln**: Die Burnout-Forschung findet durchweg, dass Arbeitsbelastung, Systemdesign und organisatorische Faktoren primäre Treiber sind; es allein als Problem des einzelnen Klinikers zu framen, lenkt die Intervention von den digitalen Tools und Workflows ab, die oft die eigentliche Grundursache sind.

## Quellen

- Maslach Burnout Inventory (MBI), validiertes Umfrageinstrument und Bewertungsleitlinien
- American Medical Association (AMA), Forschung zu Ärzte-Burnout und das STEPS Forward Praxisverbesserungsprogramm
- Peer-begutachtete Literatur zu EHR-Benutzerfreundlichkeit, Dokumentationsbelastung und Klinikerburnout, beispielsweise Studien veröffentlicht in JAMIA und den Annals of Internal Medicine

Siehe auch: [Übersteuerungsrate klinischer Warnmeldungen](../uebersteuerungsrate-klinischer-warnmeldungen/), wobei Alarmmüdigkeit einer der spezifischeren, messbareren Beiträge zu Klinikerburnout ist, die digitale Tools direkt angehen können.
