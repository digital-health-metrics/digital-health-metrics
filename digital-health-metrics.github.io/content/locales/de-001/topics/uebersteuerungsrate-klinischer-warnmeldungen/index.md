# Übersteuerungsrate klinischer Warnmeldungen

Die Übersteuerungsrate klinischer Warnmeldungen misst den Anteil der Warnmeldungen der klinischen Entscheidungsunterstützung (Clinical Decision Support, CDS) – etwa Warnungen vor Arzneimittelwechselwirkungen, Allergiehinweise und Dosisbereichsprüfungen, die von einem System zur computergestützten Verordnungserfassung (CPOE) erzeugt werden –, die eine behandelnde Person abweist oder übersteuert, statt darauf zu reagieren. Sie ist das quantitative Standardsignal zur Erkennung und Steuerung von „Alarmmüdigkeit": der gut dokumentierten Tendenz, dass Behandelnde gegenüber Warnmeldungen unempfindlich werden, wenn die Menge an Hinweisen mit geringem Nutzen überhandnimmt.

## Warum das wichtig ist

Veröffentlichte Übersteuerungsraten für Warnungen vor Arzneimittelwechselwirkungen liegen üblicherweise zwischen etwa der Hälfte und über neunzig Prozent, und eine hohe Rate ist nicht automatisch ein Sicherheitsversagen: Viele unterbrechende Warnmeldungen betreffen Wechselwirkungen, die im jeweiligen Kontext klinisch unbedeutend sind, oder wiederholen eine Warnung, auf die bereits im selben Verordnungssatz reagiert wurde. Ein gut abgestimmtes System löst deshalb bewusst weniger, dafür wertvollere Warnmeldungen aus, statt zu versuchen, die Übersteuerungsrate auf null zu senken. Für die Sicherheit zählt tatsächlich der Verlauf über die Zeit, die Verteilung über die Schweregrade sowie die Frage, ob Behandelnde beim Übersteuern einer hochgradigen Warnmeldung einen Grund dokumentieren; eine steigende Übersteuerungsrate bei hochgradigen, gut belegten Wechselwirkungen ist ein echtes Governance-Anliegen, selbst wenn der Durchschnitt über alle Warnmeldungen stabil erscheint.

## Berechnung

```
Übersteuerungsrate = übersteuerte Warnmeldungen / ausgelöste Warnmeldungen insgesamt × 100

Segmentieren nach:
  - Schweregrad (z. B. kontraindiziert, schwerwiegend, mäßig)
  - Warnungstyp (Arzneimittelwechselwirkung, Allergie, doppelte Therapie, Dosisbereich)
  - ob ein Übersteuerungsgrund dokumentiert wurde

Eine „dokumentierte Übersteuerungsrate" erfasst den Anteil der Übersteuerungen
mit einer festgehaltenen Begründung, was selbst ein Governance-Maß darstellt.
```

## Gelöstes Beispiel

Das CPOE-System eines Krankenhauses löst in einem Monat 10.000 Warnungen zu Arzneimittelwechselwirkungen aus, von denen 8.700 übersteuert werden, was eine Gesamtübersteuerungsrate von 87 % ergibt. Nach Schweregrad aufgeschlüsselt zeigt sich: Von 500 „kontraindizierten" Warnungen werden 60 übersteuert (12 %), während von 6.000 „mäßigen" Warnungen 5.700 übersteuert werden (95 %). Der Wert für die mäßige Stufe steht weitgehend im Einklang mit veröffentlichten Referenzwerten und ist für sich genommen kein Anlass zur Sorge; der Wert für die kontraindizierte Stufe rechtfertigt eine individuelle Fallprüfung, und der aussagekräftigste Governance-Befund ist, dass nur 340 der 500 Übersteuerungen auf dieser Stufe einen dokumentierten Grund tragen.

## Datenquellen und Vorbehalte

Das Prüfprotokoll der elektronischen Patientenakte oder das eigene Warnmodul des CDS-Anbieters erfasst jedes Ereignis einer ausgelösten Warnung und der Reaktion darauf, einschließlich der Frage, ob eine Freitext- oder strukturierte Begründung eingegeben wurde. Der Vergleich von Übersteuerungsraten zwischen Organisationen oder sogar zwischen Abteilungen derselben Organisation erfordert die Prüfung, dass die zugrunde liegenden Regelsätze für Warnmeldungen und die Schweregradeinstufung identisch sind; ein Krankenhaus mit einem aggressiv abgestimmten Regelsatz wird aus Gründen, die nichts mit dem Verhalten der Behandelnden zu tun haben, eine niedrigere Übersteuerungsrate zeigen.

## Häufige Fehler

- **Die rohe Übersteuerungsrate als einzige Sicherheitskennzahl behandeln**: Dies vermischt gut begründete Übersteuerungen von Warnungen mit geringem Nutzen mit unsicheren Übersteuerungen wirklich gefährlicher Wechselwirkungen; segmentieren Sie stets nach Schweregrad.
- **Keine Erfassung des Übersteuerungsgrundes**: Ohne dokumentierten Grund lässt sich nicht unterscheiden, ob „diese Warnung war falsch" oder „diese Warnung war richtig, und die behandelnde Person hat eine unsichere Entscheidung getroffen" – genau das ist die Unterscheidung, die für die Patientensicherheit zählt.
- **Zunehmende Regelinflation bei Warnmeldungen über die Zeit**: Immer mehr Warnungen „zur Sicherheit" hinzuzufügen, ohne solche mit geringem Nutzen zu entfernen, ist die unmittelbare Ursache steigender Übersteuerungsraten und wachsender Alarmmüdigkeit; die Governance von Warnmeldungen sollte eine regelmäßige Überprüfung und Abschaffung schwach performender Regeln umfassen, nicht nur deren Überwachung.
- **Raten zwischen Systemen mit unterschiedlichem Unterbrechungsdesign vergleichen**: Eine unterbrechende Warnung mit zwingendem Stopp erzeugt ein anderes Übersteuerungsverhalten als eine passive, nicht blockierende Warnung; die beiden sind daher keine direkt vergleichbaren Metriken.

## Quellen

- Begutachtete Fachliteratur zu Alarmmüdigkeit bei der klinischen Entscheidungsunterstützung, breit veröffentlicht in Fachzeitschriften wie JAMIA und npj Digital Medicine
- ONC / HealthIT.gov, Leitlinien zur IT-Sicherheit im Gesundheitswesen bei der klinischen Entscheidungsunterstützung
- Institute for Safe Medication Practices (ISMP), Leitlinien zu Design und Governance von CDS-Warnmeldungen
