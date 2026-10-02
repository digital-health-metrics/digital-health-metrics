# Kosten pro Versorgungsepisode

Die Kosten pro Versorgungsepisode sind die Gesamtkosten, die bei der Behandlung einer definierten klinischen Episode entstehen – zum Beispiel ein Hüftgelenksersatz und die damit verbundene Genesung oder ein Diabetesmanagement-Zeitraum – verglichen mit einer historischen Basiskohorte, die ohne die zu bewertende digitale Intervention behandelt wurde. Es ist die Standardeinheit des finanziellen Vergleichs in der wertbasierten Versorgung, da sie das vollständige wirtschaftliche Bild einer Episode erfasst statt eines einzelnen Kostenpostens isoliert, und es ist die Kennzahl, die Kostenträger und Gesundheitssysteme am häufigsten verlangen, bevor sie zustimmen, ein digitales Gesundheitsprogramm in großem Maßstab zu finanzieren.

## Warum das wichtig ist

Wertbasierte Versorgungsverträge zahlen zunehmend für Ergebnisse und Episoden statt für einzelne Leistungen, was bedeutet, dass der finanzielle Fall eines digitalen Gesundheitsprogramms in derselben Währung gemacht werden muss: Gesamtkosten pro Episode, verglichen mit dem, was dieselbe Art von Episode kostete, bevor die Intervention existierte. Ein Programm, das eine Kostenkategorie reduziert (zum Beispiel weniger persönliche Nachsorgetermine), während es eine andere erhöht (mehr Gerätekosten, mehr klinische Überwachungspersonalzeit), hat nicht notwendigerweise die Gesamtkosten pro Episode reduziert, und nur eine vollständige Kostenrechnung auf Episodenebene erfasst diesen Kompromiss; die Betrachtung eines einzelnen Kostenpostens isoliert riskiert eine irreführende Schlussfolgerung in beide Richtungen. Da Episodendefinitionen und Basiszeiträume auf eine Weise konstruiert werden können, die eine bestimmte Schlussfolgerung begünstigt, erfordert diese Kennzahl mehr methodische Transparenz als die meisten anderen in diesem Buch, um einem skeptischen Kostenträger oder Finanzteam vertrauenswürdig zu sein.

## Wie sie berechnet werden

```
Kosten pro Versorgungsepisode = Gesamtkosten aller innerhalb eines
                                definierten Episodenfensters
                                erbrachten Versorgungsleistungen
                                (alle Versorgungsumgebungen, alle
                                Kostenkategorien) / Anzahl der
                                Episoden

Mit den Kosten pro Episode einer historischen Basiskohorte für
denselben klinisch definierten Episodentyp vergleichen, angepasst
für den Fallmix (Alter, Komorbidität, Schweregrad) zwischen den
beiden Kohorten.

Einbeziehen, nicht nur direkte klinische Kosten: Technologieplatt-
form- und Gerätekosten, zusätzliche klinische Personalzeit, und
jede Versorgung, die die Umgebung gewechselt hat (z. B. von
stationär zu häuslich), statt vollständig zu verschwinden.
```

## Durchgerechnetes Beispiel

Die historischen Basiskosten eines Gesundheitssystems für eine Hüft-Totalendoprothesen-Episode (Operation bis 90-tägige Genesung) betragen 28.000 $ pro Episode, basierend auf 200 historischen Episoden. Ein neues digitales postoperatives Überwachungsprogramm wird eingeführt, und 150 neue Episoden unter Verwendung des Programms zeigen durchschnittliche Kosten von 24.500 $ pro Episode – eine Reduktion von 3.500 $ pro Episode, hauptsächlich getrieben durch weniger Notaufnahmebesuche während der Genesung und einen kürzeren durchschnittlichen stationären Aufenthalt. Nach Risikoanpassung für einen etwas jüngeren Fallmix mit geringerer Komorbidität in der digital überwachten Kohorte im Vergleich zur historischen Basislinie verengt sich die angepasste Einsparung auf 2.100 $ pro Episode – immer noch eine echte Verbesserung, aber materiell kleiner, als der rohe, nicht angepasste Vergleich nahelegte.

## Datenquellen und Vorbehalte

Die Gesamtkosten der Episode werden typischerweise aus dem eigenen Kostenrechnungs- oder Finanzsystem des Gesundheitssystems zusammengestellt, wobei Abrechnungsdaten, interne Kostenzuordnung und, wo eine digitale Plattform beteiligt ist, deren Lizenz- und Hardwarekosten kombiniert werden – diese Zahl genau zusammenzustellen ist normalerweise der schwierigste und ressourcenintensivste Teil jeder digitalen Gesundheitswertanalyse, da Kosten häufig in separaten Systemen erfasst werden, die nie dafür konzipiert wurden, auf Episodenebene kombiniert zu werden. Die Fallmix-Anpassung ist unerlässlich, wann immer die digital gemanagte Kohorte und die historische Basiskohorte nicht durch echte Randomisierung zugewiesen wurden, da digitale Programme häufig zuerst engagierteren, im Allgemeinen gesünderen oder motivierteren Patienten angeboten werden, was eine scheinbare Kosteneinsparung erzeugen kann, die tatsächlich ein Selektionseffekt statt eines echten Programmeffekts ist.

## Fallstricke

- **Nicht angepasste Kosten über Kohorten mit unterschiedlichem Fallmix vergleichen**: Eine digital gemanagte Kohorte, die zufällig gesünder oder risikoärmer ist als die historische Basislinie, wird aus Gründen, die nichts mit der digitalen Intervention selbst zu tun haben, niedrigere Kosten pro Episode zeigen; vor dem Vergleich immer risikoanpassen.
- **Technologie- und Personalkosten von der „digitalen" Seite des Vergleichs weglassen**: Eine Kostenanalyse, die nur die reduzierte klinische Nutzung verfolgt, während die Plattform-, Geräte- und Personalkosten des digitalen Programmbetriebs ignoriert werden, wird die Nettoeinsparungen überschätzen.
- **Das Episodenfenster zwischen Kohorten inkonsistent definieren**: Der Vergleich eines 90-Tage-Episodenfensters für eine Kohorte mit einem 60-Tage-Fenster für eine andere erzeugt einen Kostenvergleich, der tatsächlich nicht dasselbe misst.
- **Eine Kostenverlagerung als Kostenreduktion behandeln**: Kosten, die von einer Versorgungsumgebung zu einer anderen verlagert wurden (zum Beispiel von stationär zu einer überwachten häuslichen Umgebung), sind ein echter und wertvoller Befund, unterscheiden sich aber analytisch von vollständig eliminierten Kosten, und beide sollten separat berichtet werden.

## Quellen

- Centers for Medicare & Medicaid Services (CMS), Leitlinien zu Bundled Payments for Care Improvement (BPCI) und episodenbasierten Zahlungsmodellen
- Healthcare Financial Management Association (HFMA), Leitlinien zur Methodologie der Kostenrechnung für Versorgungsepisoden
- Peer-begutachtete Literatur zur Kostenanalyse wertbasierter digitaler Gesundheitsversorgung, beispielsweise Studien veröffentlicht in Health Affairs und dem American Journal of Managed Care

Siehe auch: [Kapitalrendite (ROI) und Wertrendite (VOI)](../roi-and-voi/), die die Kosten pro Versorgungsepisode als einen ihrer wichtigsten Eingabewerte verwendet.
