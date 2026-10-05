# Telegesundheits-Besuchsrate

Die Telegesundheits-Besuchsrate ist der Anteil aller Kontakte eines Dienstes, die aus der Ferne per Video oder Telefon erbracht werden, statt persönlich vor Ort. Sie ist eine Metrik für die Verteilung der Versorgungskanäle, keine Aktivitätsmetrik: Sie zeigt, wie Versorgung erbracht wird – was für Kapazitätsplanung, Zugang und klinische Angemessenheit relevant ist –, unabhängig davon, wie viel Versorgung insgesamt erbracht wird.

## Warum das wichtig ist

Der Anteil der aus der Ferne erbrachten Versorgung hat das Betriebsmodell vieler Dienste verändert, nachdem sich virtuelle Konsultationen während der COVID-19-Pandemie rasch ausgeweitet haben. Organisationen brauchen eine stabile Methode, um zu beobachten, ob sich diese Verschiebung hält, sich allmählich zu den Vor-Pandemie-Normen zurückbewegt oder aktiv durch Vorgaben gesteuert wird. Telegesundheit ist kein einheitlicher Ersatz für einen persönlichen Besuch: Die Angemessenheit variiert je nach Fachrichtung, Konsultationsart (eine Medikamentenüberprüfung verläuft ganz anders als eine körperliche Untersuchung) und Patientenpräferenz. Die „richtige" Rate ist deshalb eine klinische und organisatorische Ermessensfrage, kein Ziel, das maximiert werden sollte. Auch Kostenträger und Aufsichtsbehörden nutzen diese Rate neben Ergebnis- und Sicherheitskennzahlen, um über die Erstattungspolitik zu entscheiden und zu prüfen, dass Fernversorgung nicht einfach bei Fällen eingesetzt wird, die persönlich gesehen werden müssen.

## Berechnung

```
Telegesundheitsrate = Telegesundheitskontakte / (Telegesundheitskontakte + persönliche Kontakte) × 100

Nach Möglichkeit getrennt nach Modalität berichten:
  Videorate    = Videokontakte / Gesamtkontakte × 100
  Telefonrate  = ausschließlich telefonische Kontakte / Gesamtkontakte × 100

Der Nenner sollte nur abgeschlossene Kontakte zählen (siehe häufige Fehler),
für einen definierten Dienst, eine Fachrichtung und einen Zeitraum.
```

## Gelöstes Beispiel

Ein gemeindenaher Dienst für psychische Gesundheit verzeichnet in einem Quartal 4.000 abgeschlossene ambulante Kontakte: 1.200 persönlich, 1.600 per Video und 1.200 telefonisch. Die Telegesundheitsrate beträgt (1.600 + 1.200) / 4.000 × 100 = 70 %, mit einer Videorate von 40 % und einer rein telefonischen Rate von 30 %. Würde nur die kombinierte Zahl von 70 % berichtet, würde das verschleiern, dass ein großer Teil der „Telegesundheit" hier rein audio-basiert ist, was in der Regel ein anderes klinisches Risikoprofil und eine andere Patientenerfahrung mit sich bringt.

## Datenquellen und Vorbehalte

Die Kontaktart wird meist entweder als strukturiertes Feld in der elektronischen Patientenakte erfasst (Besuchsart oder Ort) oder aus Abrechnungscodes abgeleitet, etwa einem Leistungsortcode oder einem Telegesundheits-Modifikator auf einer Abrechnung. Die Kodierpraxis unterscheidet sich erheblich zwischen Organisationen und sogar zwischen einzelnen Behandelnden derselben Organisation. Ein Ratenvergleich zwischen Standorten sollte deshalb zunächst prüfen, ob „Telegesundheit" überall gleich kodiert wird. Ein Kontakt, der als Video beginnt, aber wegen eines technischen Problems auf Telefon wechselt, sollte konsistent kodiert werden (üblicherweise nach der Modalität, die den größten Teil des klinischen Inhalts getragen hat), und diese Regel sollte dokumentiert werden statt der individuellen Einschätzung überlassen zu bleiben.

## Häufige Fehler

- **Versuchte statt abgeschlossene Besuche zählen**: Ein Telegesundheitstermin, dessen Verbindung fehlschlägt und der neu vereinbart wird, sollte den Telegesundheitsnenner nicht doppelt aufblähen.
- **Video und Telefon als austauschbar behandeln**: Beide haben unterschiedliche klinische und gerechtigkeitsbezogene Implikationen (Telefon schließt die visuelle Beurteilung aus, ist aber zugänglicher für Personen ohne Smartphone, zuverlässige Daten oder einen privaten Raum für Video); berichten Sie beide nach Möglichkeit stets getrennt.
- **Den Zusammenhang mit Nichterscheinen ignorieren**: Das Nichterscheinensverhalten unterscheidet sich häufig je nach Modalität; ziehen Sie [Nichterscheinensrate bei Terminen](../nichterscheinensrate-bei-terminen/) zurate, bevor Sie aus einer steigenden Telegesundheitsrate allein auf „besseren Zugang" schließen.
- **Eine hohe Rate als grundsätzlich gut werten**: Für manche Erkrankungen und Konsultationsarten ist eine niedrige Telegesundheitsrate klinisch beabsichtigt und kein Zeichen mangelnder digitaler Reife.

## Quellen

- Centers for Medicare & Medicaid Services (CMS), Nutzungsdaten und politische Veröffentlichungen zur Telegesundheit im Medicare-Programm
- NHS England, Aktivitätsstatistiken ambulanter und gemeindenaher Dienste, einschließlich der Aufschlüsselung virtueller/ferner Kontakte
- Begutachtete Fachliteratur zu Nutzungstrends der Telegesundheit und modalitätsspezifischen Ergebnissen
