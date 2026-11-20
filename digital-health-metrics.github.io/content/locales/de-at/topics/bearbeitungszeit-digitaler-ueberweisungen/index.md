# Bearbeitungszeit digitaler Überweisungen

Die Bearbeitungszeit digitaler Überweisungen ist die verstrichene Zeit von der Einreichung einer elektronischen Überweisung durch eine überweisende Person bis zu deren Sichtung (Triage) durch den empfangenden Dienst, die zur Annahme, Ablehnung oder Terminvereinbarung führt. Sie ist eine Prozessmetrik (Durchfluss), die sich von der gesamten Wartezeit der Patientin oder des Patienten unterscheidet, und eine der klarsten Stellen, an denen sich zeigen lässt, dass eine digitale Systemänderung (strukturierte elektronische Überweisung, bildbasierte Triage, standardisierte Überweisungsformulare) tatsächlich eine operative Kennzahl bewegt – und nicht nur einen Zufriedenheitswert.

## Warum das wichtig ist

Ein langsamer oder stark schwankender Triage-Schritt fügt eine Verzögerung hinzu, noch bevor die Patientin oder der Patient überhaupt in eine klinische Warteliste aufgenommen wird. Da diese Verzögerung vor Beginn jeder klinischen Versorgung auftritt, handelt es sich um reine Prozessverschwendung, die digitale Werkzeuge gut beseitigen können. Überweisungssysteme, die bei fehlenden Informationen einen „Rücksendung an die überweisende Person"-Kreislauf erzwingen, erzeugen Nacharbeitsschleifen, die leicht übersehen werden, wenn die Bearbeitungszeit nur bei Überweisungen gemessen wird, die gleich beim ersten Mal sauber durchlaufen. Wo ein Dienst strukturierte digitale Überweisungsformulare, Pflichtfelder oder bildbasierte Triage eingeführt hat (etwa in der Telemedizin für Dermatologie), ist die Bearbeitungszeit meist die überzeugendste einzelne Kennzahl, um den Nutzen zu belegen, da sie vor und nach der Umstellung mit derselben Instrumentierung messbar ist.

## Berechnung

```
Bearbeitungszeit = Zeitstempel(Triage-Entscheidung) − Zeitstempel(Einreichung der Überweisung)

Berichten Sie den Median und ein hohes Perzentil (üblicherweise das 90.),
nicht nur den Mittelwert, da die Verteilung durch zurückgesendete oder
komplexe Überweisungen stark rechtsschief ist.

Berücksichtigen Sie Teilschrittzeiten, sofern das System sie erfasst:
  Einreichung → vom Dienst empfangen
  Empfangen → Triage-Entscheidung
  Triage-Entscheidung → Termin gebucht (sofern zutreffend)
```

## Gelöstes Beispiel

Das Prüfprotokoll eines elektronischen Überweisungssystems zeigt über alle Fachrichtungen hinweg eine mediane Zeit von der Einreichung bis zur Triage-Entscheidung von 1,8 Tagen, mit einer Zeit am 90. Perzentil von 6 Tagen, vor allem verursacht durch Überweisungen, die wegen fehlender klinischer Informationen an die überweisende Person zurückgesendet werden. Ein Pfad für Telemedizin-Dermatologie, der auf derselben Plattform bildbasierte Triage nutzt, erreicht eine mediane Bearbeitungszeit von 4 Stunden und ein 90. Perzentil von 1 Tag, da ein Foto und eine strukturierte Anamnese fast immer für die Triage-Entscheidung ausreichen, ohne dass weiterer Schriftverkehr nötig ist.

## Datenquellen und Vorbehalte

Das eigene Prüfprotokoll des elektronischen Überweisungs- oder Überweisungsmanagementsystems ist die primäre Quelle, anhand der Zeitstempel für Einreichung und Entscheidung. Organisationen sollten klären, ob die „Uhr" pausiert, während eine Überweisung zur Nachforderung weiterer Informationen zurückgesendet wird, oder ob sie durchgehend weiterläuft, da beide Definitionen für denselben zugrunde liegenden Prozess erheblich unterschiedliche Zahlen ergeben. Die Bearbeitungszeit sollte durchgehend entweder in Kalenderzeit oder in Arbeitsstunden berichtet werden, da Wochenend- und Feiertagseffekte sonst Vergleiche zwischen Diensten mit unterschiedlichen Arbeitsmustern verzerren können.

## Häufige Fehler

- **Nur „saubere" Überweisungen messen**: Der Ausschluss abgelehnter oder zurückgesendeter Überweisungen aus der Berechnung verschleiert genau die Nacharbeitslast, die digitale Werkzeuge oft gezielt verringern sollen.
- **Den Mittelwert statt Median und Perzentile berichten**: Eine kleine Zahl langwieriger, zurückgesendeter Überweisungen zieht den Mittelwert weit über die tatsächliche Erfahrung der typischen Patientin bzw. des typischen Patienten hinaus.
- **Bearbeitungszeit mit gesamter Wartezeit verwechseln**: Die Bearbeitungszeit umfasst nur den Triage-Schritt; die gesamte Erfahrung der Patientin oder des Patienten schließt auch die nachgelagerte klinische Warteliste ein, die eine eigene, durch andere Kapazitätsgrenzen bestimmte Metrik ist.
- **Teilschritte nicht unterscheiden**: Ein Dienst, der nur die Gesamtzeit von Anfang bis Ende misst, kann nicht feststellen, ob eine langsame Zahl auf unvollständige Angaben der überweisenden Personen, auf die Triage-Kapazität des empfangenden Dienstes oder auf beides zurückzuführen ist.

## Quellen

- NHS England, Statistiken und Leistungsspezifikationen des elektronischen Überweisungsdienstes (e-RS)
- Begutachtete Fachliteratur zu elektronischen Überweisungsmanagementsystemen und digitalen Triage-Pfaden, einschließlich Telemedizin-Dermatologie
- ONC / HealthIT.gov, Leitlinien zu Interoperabilität und Überweisungskoordination
