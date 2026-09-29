# Nichterscheinensrate bei Terminen

Die Nichterscheinensrate bei Terminen (auch „Did-not-attend"- oder DNA-Rate genannt) ist der Anteil vereinbarter Termine, bei denen die Patientin oder der Patient weder erschienen ist noch mit angemessener Vorlaufzeit abgesagt hat. Sie ist eine der ältesten operativen Metriken im Gesundheitswesen, und digitale Werkzeuge – insbesondere Erinnerungen, Selbstbedienungs-Umbuchung und portalbasierte Terminbuchung – gehören heute zu den wirksamsten und am besten belegten Hebeln, um sie zu senken.

## Warum das wichtig ist

Jedes Nichterscheinen ist eine Einheit klinischer Kapazität, die sich in der Regel nicht zurückgewinnen lässt, da die meisten Dienste eine kurzfristig freigewordene Lücke am selben Tag nicht mehr füllen können. Die Rate wirkt sich deshalb direkt auf die Länge der Wartelisten, die Kosten pro abgeschlossenem Termin und verlorene Behandlungszeit aus. Das Nichterscheinensverhalten ist nicht gleichmäßig verteilt: Es korreliert mit sozialer Benachteiligung, Zugang zu Verkehrsmitteln, Betreuungsverpflichtungen und der Belastung durch die Verwaltung mehrerer langfristiger Erkrankungen. Eine hohe Rate rein als Verhaltensproblem der Patientinnen und Patienten zu behandeln – statt teilweise als Signal für Zugangshürden – führt tendenziell zu Maßnahmen (etwa pauschalen Sanktionen), die Ungleichheit eher verstärken als verringern. Digitale Erinnerungen und einfache digitale Umbuchung gehören durchweg zu den wirksamsten und kostengünstigsten verfügbaren Maßnahmen; deshalb gehört diese Metrik eindeutig in ein Messprogramm für digitale Gesundheit und nicht nur in die operative Berichterstattung.

## Berechnung

```
Nichterscheinensrate = als „nicht erschienen" markierte Termine / Gesamtzahl vereinbarter Termine × 100
```

Ein vereinbarter Termin wird in der Regel aus dem Nenner ausgeschlossen oder einer eigenen Kategorie zugeordnet, wenn er von einer der beiden Seiten mit mehr als einer festgelegten Vorlauffrist (üblicherweise 24 Stunden) abgesagt wurde. Kurzfristige Absagen (unterhalb dieser Frist) werden in der Regel getrennt von tatsächlichem Nichterscheinen ausgewiesen, da sich die organisatorischen und verhaltensbezogenen Implikationen unterscheiden.

## Gelöstes Beispiel

Eine gemeindenahe Praxis vereinbart in einem Monat 2.000 Termine. Davon werden 140 mit mehr als 24 Stunden Vorlauf abgesagt (umgebucht und aus dem Nenner ausgeschlossen), 60 werden kurzfristig abgesagt (unter 24 Stunden), und 180 werden als tatsächliches Nichterscheinen ohne jeden Kontakt erfasst. Die Nichterscheinensrate beträgt 180 / 2.000 × 100 = 9 %. Würden die 60 kurzfristigen Absagen derselben Kategorie wie das tatsächliche Nichterscheinen zugerechnet, stiege die berichtete Rate auf 12 % – deshalb sollte die verwendete Definition stets zusammen mit der Zahl angegeben werden.

## Datenquellen und Vorbehalte

Das Terminplanungs- oder Praxisverwaltungssystem ist die primäre Quelle und nutzt dessen Terminstatuscodes; die Qualität der Metrik hängt vollständig davon ab, dass das Personal durchgehend den korrekten Status verwendet und nicht eine allgemeine Kategorie „abgesagt" für alles. Organisationen, die digitale Erinnerungen einführen (SMS, App-Push-Benachrichtigung oder Portalbenachrichtigungen), sollten die Nichterscheinensrate vor und nach der Umstellung für eine vergleichbare Patienten- und Dienstmischung messen, da die Wirksamkeit von Erinnerungen in randomisierten und Beobachtungsstudien gut dokumentiert ist, aber je nach Population und Kanal variiert.

## Häufige Fehler

- **Rohdaten zwischen Praxen mit unterschiedlicher Überbuchungspraxis vergleichen**: Eine Praxis, die absichtlich überbucht, um eine erwartete Nichterscheinensrate auszugleichen, wird eine andere scheinbare Rate zeigen als eine, die das nicht tut – unabhängig vom tatsächlichen Patientenverhalten.
- **Kurzfristige Absagen mit tatsächlichem Nichterscheinen verwechseln**: Beide haben unterschiedliche Ursachen und unterschiedliche digitale Lösungen (ein Problem mit kurzfristigen Absagen lässt sich oft durch einfachere Selbstbedienungs-Umbuchung lösen; ein Problem mit tatsächlichem Nichterscheinen oft durch bessere Erinnerungen und genauere Kontaktdaten).
- **Survivorship Bias durch Entlassungspolitik**: Dienste, die Patient:innen nach wiederholtem Nichterscheinen entlassen, werden eine mechanische Verbesserung ihrer eigenen Rate sehen, während sie dieselben Patient:innen lediglich an eine andere Stelle im System verschieben.
- **Der Patientin oder dem Patienten die Schuld für digitale Exklusion geben**: Eine Person ohne Smartphone oder zuverlässigen Textnachrichtendienst profitiert nicht von einer rein digitalen Erinnerungsstrategie; deshalb ist meist ein Mehrkanalansatz (Brief, Anruf, SMS, App) nötig, um eine Vergrößerung der Zugangslücken zu vermeiden.

## Quellen

- NHS England, verpasste Termine in der Primärversorgung und ambulanten Versorgung, veröffentlichte Statistiken und Leitlinien
- Systematische Cochrane-Übersichtsarbeiten zu Maßnahmen zur Reduzierung verpasster Gesundheitstermine, einschließlich Erinnerungssystemen
- Begutachtete Fachliteratur zu sozioökonomischen und demografischen Korrelaten des Nichterscheinens bei Terminen

Siehe auch: [Telegesundheits-Besuchsrate](../telehealth-visit-rate/), da sich das Nichterscheinensverhalten häufig je nach Konsultationsart unterscheidet, sowie [Adoptionsrate des Patientenportals](../patient-portal-adoption-rate/), da portalbasierte Selbstterminierung und Erinnerungen in diesem Bereich eine zentrale digitale Maßnahme sind.
