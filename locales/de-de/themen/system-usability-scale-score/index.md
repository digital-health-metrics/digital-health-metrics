# System-Usability-Scale-Score

Der System-Usability-Scale-Score (SUS) ist ein standardisierter 10-Punkte-Fragebogen, der verwendet wird, um zu quantifizieren, wie benutzbar ein Stück Software ist, und einen einzelnen Score von 0 bis 100 erzeugt, der gegen gut etablierte Branchennormen gemessen werden kann. Im Gegensatz zum Net Promoter Score, der die Weiterempfehlungsbereitschaft misst, oder patientenberichteten Ergebnismaßen, die den klinischen oder funktionalen Status messen, misst der SUS eine spezifische Sache: wie leicht die Software selbst zu erlernen und zu bedienen ist, sei es für Patienten oder klinisches Personal.

## Warum das wichtig ist

Ein digitales Gesundheitstool kann starke klinische Evidenz und einen überzeugenden Business Case haben und dennoch in der Praxis scheitern, weil Patienten oder Kliniker die Benutzeroberfläche verwirrend, langsam oder frustrierend zu benutzen finden – und weil der SUS ein validiertes, weit verbreitetes Instrument mit jahrzehntelangen veröffentlichten Benchmark-Daten über Branchen hinweg ist, ermöglicht er es einem digitalen Gesundheitsteam, die Usability des eigenen Produkts mit einer bekannten Verteilung zu vergleichen, statt sich auf informelle Eindrücke oder anekdotische Beschwerden zu verlassen. Der SUS ist bewusst technologieunabhängig und schnell durchzuführen (typischerweise unter fünf Minuten), was es praktisch macht, ihn wiederholt über Designiterationen hinweg durchzuführen, im Gegensatz zu einer vollständigen Usability-Studie oder einer formalen klinischen Studie. Da klinikerseitige Usability-Mängel ein dokumentierter Beitragsfaktor zu Burnout sind (siehe Ärzte-Burnout-Rate) und patientenseitige Usability-Mängel ein dokumentierter Beitragsfaktor zu Abbruch und schlechten Ergebnissen bei digitaler Gesundheitskompetenz sind (siehe digitale Gesundheitskompetenzrate), fungiert der SUS als kostengünstiges Frühwarnsignal für Usability, das ein Designproblem erfassen kann, bevor es sich in diesen folgenreicheren nachgelagerten Kennzahlen zeigt.

## Wie er berechnet wird

```
SUS-Score = ((Summe der Scores ungerade nummerierter Items − 5) +
            (25 − Summe der Scores gerade nummerierter Items)) × 2,5

Das Ergebnis ist ein einzelner Score von 0 bis 100 (keine Prozent-
angabe, trotz der Skala, da er nicht „Prozent korrekt" oder
Ähnliches darstellt).

Veröffentlichte Benchmark-Interpretation (Bangor et al.):
  Über 80  — ausgezeichnete Usability
  68       — durchschnittlich, basierend auf der breiten Branchennorm
  Unter 51 — schlechte Usability, erfordert Untersuchung
```

## Durchgerechnetes Beispiel

Eine Telemedizin-Plattform lässt 150 Patienten nach ihrem ersten Videobesuch den standardisierten 10-Punkte-SUS-Fragebogen ausfüllen. Der berechnete durchschnittliche SUS-Score über alle Befragten beträgt 74. Gemessen am weithin zitierten Branchendurchschnitt von 68 deutet dies auf überdurchschnittliche Usability für diese spezifische Patientenpopulation und diesen Anwendungsfall hin, liegt aber dennoch bedeutsam unter dem „ausgezeichnet"-Schwellenwert von 80, der auf wenige verbleibende Usability-Barrieren hindeuten würde. Die Segmentierung derselben 150 Antworten nach Alter zeigt einen durchschnittlichen Score von 81 für Patienten unter 50 und 62 für Patienten ab 65 – eine Lücke, die auf ein spezifisches, behebbares Usability-Problem für ältere Patienten hinweist, statt auf ein allgemeines Produkt-Usability-Problem, und eine, die ein einzelner zusammengefasster Durchschnitt verborgen hätte.

## Datenquellen und Vorbehalte

SUS-Daten stammen direkt von Patienten oder Klinikern, die den standardisierten 10-Punkte-Fragebogen ausfüllen, und das Instrument muss genau so durchgeführt werden, wie es validiert wurde (dieselben 10 Items, dieselbe 5-Punkte-Zustimmungsskala, dieselbe Bewertungsformel), damit der resultierende Score mit veröffentlichten Benchmarks vergleichbar ist; eine modifizierte oder verkürzte Version des Fragebogens, so gut gemeint auch immer, erzeugt einen Score, der nicht zuverlässig gegen die standardisierte Benchmark-Verteilung interpretiert werden kann. Der SUS misst wahrgenommene Usability, die mit objektivem Aufgabenerfolg korreliert, aber nicht identisch damit ist (siehe digitale Gesundheitskompetenzrate für ein aufgabenabschlussbasiertes Maß); ein Produkt kann einen guten SUS-Score von Patienten erhalten, die die komplexeren Funktionen nicht ausprobiert haben, sodass die Kombination von SUS mit objektiven Aufgabenabschlussdaten ein vollständigeres Bild ergibt als beides allein. Der Zeitpunkt der Antwort ist wichtig: Die Durchführung des SUS unmittelbar nach einem spezifischen frustrierenden Vorfall (eine fehlgeschlagene Verbindung, ein verwirrender Schritt) gegenüber nach einer reibungslosen Sitzung kann Scores unabhängig von der Gesamt-Usability des Produkts verschieben.

## Fallstricke

- **Modifizieren der standardisierten Fragebogenitems oder der Bewertung**: Selbst kleine Wortlaut- oder Skalenänderungen machen den Vergleich mit der gut etablierten veröffentlichten Benchmark-Verteilung ungültig; das standardisierte 10-Punkte-Instrument genau so verwenden, wie es validiert wurde.
- **Nur den Durchschnittsscore ohne Segmentierung berichten**: Usability variiert oft erheblich nach Nutzeralter, digitaler Kompetenz oder Rolle (Patient versus Kliniker); die Berichterstattung segmentieren, um spezifische, behebbare Usability-Lücken zu finden, die ein einzelner Durchschnitt verbirgt.
- **SUS als Maß klinischer Wirksamkeit behandeln**: SUS misst spezifisch Usability, nicht klinisches Ergebnis oder Zufriedenheit mit der Versorgung; ein sehr benutzbares Tool kann dennoch die klinischen Ergebnisse nicht verbessern, und diese sollten niemals vermischt oder füreinander eingesetzt werden.
- **Die Umfrage nur nach ungewöhnlich reibungslosen oder ungewöhnlich frustrierenden Sitzungen durchführen**: Zeitpunkt und Kontext der Durchführung können den Score verzerren; konsistent über eine repräsentative Stichprobe realer Sitzungen durchführen, nicht nur bequeme oder selektiv ausgewählte.

## Quellen

- Brooke, J., „SUS: A Quick and Dirty Usability Scale", das ursprüngliche veröffentlichte Instrument
- Bangor, Kortum und Miller, veröffentlichte SUS-Benchmarking-Forschung, die die weithin zitierten Score-Interpretationsbänder etabliert
- Peer-begutachtete Literatur zur Nutzung von SUS in der Usability-Bewertung digitaler Gesundheit und Telemedizin, beispielsweise Studien veröffentlicht in JMIR Human Factors

Siehe auch: [Patienten-Net-Promoter-Score](../patienten-net-promoter-score/), eine verwandte, aber unterschiedliche patientenberichtete Kennzahl, die Zufriedenheit und Loyalität statt spezifisch die Software-Usability misst.
