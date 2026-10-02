# DAU/MAU-Stickiness-Verhältnis

Das DAU/MAU-Stickiness-Verhältnis vergleicht täglich aktive Nutzer (DAU) mit monatlich aktiven Nutzern (MAU) – dasselbe zugrunde liegende Maß wird für wöchentlich aktive Nutzer (WAU) gegenüber MAU verwendet –, um auszudrücken, welcher Anteil der breiteren Nutzerbasis eines Produkts an einem beliebigen Tag damit interagiert. Es ist das Standard-Produktanalysemaß für Engagement-Intensität, das sich davon unterscheidet, ob ein Nutzer überhaupt gebunden ist (siehe Nutzerbindungsrate) oder wie konsistent ein bestimmter eingeschriebener Patient im Laufe der Zeit engagiert ist (siehe Patienten-Engagement-Konsistenzrate): Stickiness beschreibt den Nutzungsrhythmus auf Populationsebene, nicht das Muster einer einzelnen Person.

## Warum das wichtig ist

Zwei digitale Gesundheitsprodukte können dieselbe Anzahl monatlich aktiver Nutzer berichten, während sie sehr unterschiedliche zugrunde liegende Engagement-Intensität haben: eines, bei dem die meisten dieser Nutzer die App fast täglich öffnen, und ein anderes, bei dem die meisten sie einmal im Monat öffnen, kurz bevor sie sonst als inaktiv gezählt würden. Das DAU/MAU-Stickiness-Verhältnis unterscheidet diese beiden sehr unterschiedlichen Situationen mit einer einzigen, einfachen, gut verstandenen Benchmark-Zahl, die Produkt- und klinische Teams im Laufe der Zeit verfolgen und mit bekannten Branchenbereichen vergleichen können – ein Verhältnis von etwa 20 % ist eine häufig zitierte vernünftige Benchmark für viele Verbraucher-Apps, während Produkte mit täglicher Gewohnheit (ein Essens- oder Symptomtagebuch, das ein Patient täglich nutzen soll) an einem bedeutsam höheren Maßstab gemessen werden sollten. Da Stickiness empfindlich darauf reagiert, wie „aktiv" definiert wird, ist sie am nützlichsten als Trend für ein Produkt im Laufe der Zeit und als Vergleich mit Produkten, die für ein ähnliches Nutzungsmuster gebaut wurden, statt als absolute branchenübergreifende Benchmark.

## Wie sie berechnet wird

```
DAU/MAU-Stickiness-Verhältnis = durchschnittlich täglich aktive
                                Nutzer im Zeitraum / monatlich
                                aktive Nutzer im selben Zeitraum ×
                                100

Das WAU/MAU-Verhältnis (wöchentlich, gleiches Prinzip) ist eine
sanftere Variante, geeigneter für Produkte, die einige Male pro
Woche statt täglich genutzt werden sollen.

„Aktiv" muss sowohl im Zähler als auch im Nenner präzise und
konsistent definiert werden (z. B. eine abgeschlossene
qualifizierende Aktion, kein passives App-Öffnen).
```

## Durchgerechnetes Beispiel

Eine digitale Diabetesmanagement-App hat in einem bestimmten Monat 10.000 monatlich aktive Nutzer, definiert als jeder Nutzer, der in diesem Monat mindestens eine qualifizierende Aktion abschließt (ein Glukoseprotokoll, ein Mahlzeitenprotokoll oder eine Medikamenten-Abhakung). Die Mittelung der täglich aktiven Nutzerzahlen über die 30 Tage dieses Monats ergibt eine durchschnittliche DAU von 2.200. Das DAU/MAU-Stickiness-Verhältnis beträgt 2.200 / 10.000 × 100 = 22 %, was darauf hinweist, dass an einem typischen Tag etwa 22 % der monatlichen Nutzerbasis der App damit interagieren – eine vernünftige Zahl für ein Tool für chronische Erkrankungen mit täglicher Gewohnheit, obwohl das Produktteam sie im Laufe der Zeit gerne steigen sehen würde, da das ideale Verhalten (tägliches Protokollieren) für eingeschriebene Patienten gewohnheitsmäßiger wird.

## Datenquellen und Vorbehalte

DAU, WAU und MAU werden alle aus denselben zugrunde liegenden Ereignisprotokollen berechnet, wobei eine konsistente Definition eines „qualifizierend aktiven" Ereignisses über jedes Fenster hinweg verwendet wird; das Ändern dieser Definition zwischen den Zähler- und Nennerberechnungen (zum Beispiel das Zählen jedes App-Öffnens für DAU, aber nur einer abgeschlossenen Aktion für MAU) erzeugt ein verzerrtes Verhältnis, das die tatsächliche Engagement-Intensität nicht widerspiegelt. Die angemessene Benchmark für Stickiness hängt stark vom beabsichtigten Nutzungsmuster des Produkts ab: Ein Tool, das einmal pro Woche genutzt werden soll (ein wöchentlicher Symptom-Check-in), wird und sollte ein niedrigeres DAU/MAU-Verhältnis haben als ein Tool, das täglich genutzt werden soll (eine Begleit-App für einen kontinuierlichen Glukosemonitor), sodass Stickiness immer im Verhältnis zum eigenen beabsichtigten Nutzungsrhythmus des Produkts interpretiert werden sollte, nicht zu einem einzigen universellen Ziel.

## Fallstricke

- **Vergleich von Stickiness-Verhältnissen zwischen Produkten mit unterschiedlicher beabsichtigter Nutzungshäufigkeit**: Ein Tool für wöchentliche Nutzung wird strukturell ein niedrigeres DAU/MAU-Verhältnis zeigen als ein Tool für tägliche Nutzung, selbst wenn beide genau wie für ihre jeweiligen Anwendungsfälle beabsichtigt funktionieren; am eigenen beabsichtigten Rhythmus des Produkts benchmarken, nicht an einem einzigen universellen Ziel.
- **Inkonsistente Aktivitätsdefinitionen über Zähler und Nenner hinweg verwenden**: Dies kann ein Stickiness-Verhältnis erzeugen, das keine echte Engagement-Intensität widerspiegelt und nicht sinnvoll im Laufe der Zeit oder mit anderen Produkten verglichen werden kann.
- **Ein steigendes Stickiness-Verhältnis ohne Prüfung des allgemeinen MAU-Trends als eindeutig positiv behandeln**: Ein steigendes Verhältnis, das durch eine schrumpfende, gewohnheitsmäßigere Kernnutzerbasis getrieben wird, während die gesamte MAU zurückgeht, ist eine sehr andere – und besorgniserregendere – Situation als eine, die durch echt steigendes tägliches Engagement über eine stabile oder wachsende Nutzerbasis getrieben wird.
- **Wochentags- und Saisoneffekte auf DAU ignorieren**: DAU kann bei vielen Gesundheitsprodukten erheblich nach Wochentag (Werktag versus Wochenende) oder Jahreszeit variieren; DAU über einen Zeitraum mitteln, der einen vollständigen natürlichen Zyklus erfasst, statt eines kurzen Fensters, das verzerrt sein könnte.

## Quellen

- Peer-begutachtete und Branchenliteratur zu mobilen und digitalen Produkt-Engagement-Kennzahlen, weit verbreitete Benchmarking-Frameworks von mobilen Analyseplattformen
- Digital Therapeutics Alliance, Best-Practice-Leitlinien zur Engagement-Messung für digitale Therapeutika
- Peer-begutachtete Literatur zur Messung des Engagements im digitalen Gesundheitsbereich, beispielsweise Studien veröffentlicht im Journal of Medical Internet Research (JMIR mHealth and uHealth)

Siehe auch: [Nutzerbindungsrate](../user-retention-rate/) und [Patienten-Engagement-Konsistenzrate](../patient-engagement-consistency-rate/), die zwei verwandten Engagement-Kennzahlen, mit denen dieses Verhältnis am häufigsten verwechselt wird.
