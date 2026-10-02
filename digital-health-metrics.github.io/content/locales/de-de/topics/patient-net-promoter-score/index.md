# Patienten-Net-Promoter-Score

Der Patienten-Net-Promoter-Score (NPS) misst die Bereitschaft von Patienten, ein digitales Gesundheitsprodukt oder einen Telemedizin-Service weiterzuempfehlen, basierend auf einer einzigen Umfragefrage – „Wie wahrscheinlich ist es, dass Sie diesen Service einem Freund oder Kollegen empfehlen?" – bewertet von 0 bis 10. Befragte mit Werten von 9-10 sind „Promotoren", 7-8 sind „Passive", und 0-6 sind „Kritiker"; der NPS ist der Prozentsatz der Promotoren minus dem Prozentsatz der Kritiker. Es ist die am weitesten verbreitete und am weitesten kritisierte Patientenzufriedenheitskennzahl in der digitalen Gesundheit, geschätzt für ihre Einfachheit, aber begrenzt in dem, was sie allein diagnostizieren kann.

## Warum das wichtig ist

Der NPS gibt digitalen Gesundheitsteams ein einfaches, standardisiertes, querverglleichbares Zufriedenheitssignal, das kostengünstig zu erheben ist und für nicht-spezialisierte Stakeholder (Führungskräfte, Vorstände, Auftraggeber) auf einen Blick leicht zu interpretieren ist, weshalb er trotz gut dokumentierter methodischer Einschränkungen beliebt bleibt. Speziell für Telemedizin- und digitale Eingangstürprodukte ist der NPS oft der führende Indikator dafür, ob Patienten weiterhin den digitalen Kanal gegenüber einer persönlichen Alternative wählen werden, wenn beide verfügbar sind, was direkte Auswirkungen auf die Kanalmix-Planung und -Kapazität hat. Der NPS ist jedoch eine einzelne, übergeordnete Zusammenfassungszahl: Ein sinkender NPS sagt einem Team, dass etwas nicht stimmt, aber nicht was, daher sollte er immer mit frei formuliertem Feedback oder einem detaillierteren Usability-Instrument gepaart werden, um umsetzbar zu sein, statt lediglich eine Scorecard-Zahl zu sein.

## Wie er berechnet wird

```
NPS = % Promotoren (Wert 9-10) − % Kritiker (Wert 0-6)

Das Ergebnis ist eine Zahl von −100 bis +100, keine Prozentangabe,
obwohl sie von Prozentangaben abgeleitet ist — einer NPS-Zahl
niemals ein „%"-Zeichen anhängen.

Zusammen berichten mit:
  Antwortrate (% der befragten Patienten, die geantwortet haben)
  Stichprobengröße
  dem genauen verwendeten Fragewortlaut
```

## Durchgerechnetes Beispiel

Eine Telemedizin-Plattform befragt 1.000 Patienten nach einer Videokonsultation und erhält 400 Antworten (Antwortrate 40 %). Von diesen 400 Befragten bewerten 220 mit 9-10 (Promotoren, 55 %), 100 mit 7-8 (Passive, 25 %) und 80 mit 0-6 (Kritiker, 20 %). Der NPS beträgt 55 − 20 = 35. Diese Zahl bedeutet nur im Kontext etwas: Ein NPS von 35 könnte ein starkes Ergebnis im Vergleich zur breiteren Telemedizin-Branche sein oder ein besorgniserregender Rückgang im Vergleich zum eigenen Score dieser Plattform von 48 im vorherigen Quartal – der NPS ist weitaus nützlicher als Trend im Laufe der Zeit für ein Produkt als als absolute einmalige Benchmark gegen ein anderes.

## Datenquellen und Vorbehalte

Der NPS wird durch eine Nach-Interaktions-Umfrage erhoben, typischerweise unmittelbar nach einem Videobesuch, einer App-Sitzung oder einer Versorgungsepisode ausgelöst, und die Antwortrate ist enorm wichtig: Eine niedrige Antwortrate (deutlich unter den ~40 % im durchgerechneten Beispiel) riskiert eine Nicht-Antwort-Verzerrung, bei der nur stark zufriedene oder stark unzufriedene Patienten sich die Mühe machen zu antworten, was den Score zu den Extremen hin und weg von der wahren Populationsstimmung zieht. Der Vergleich des NPS zwischen Organisationen oder sogar zwischen verschiedenen Kanälen derselben Organisation (zum Beispiel Telemedizin versus persönlich) ist nur gültig, wenn Fragewortlaut, Zeitpunkt und befragte Population wirklich vergleichbar sind; schon kleine Wortlautänderungen sind bekanntermaßen in der Lage, Scores messbar zu verschieben. Der NPS sollte als ein zu erklärendes Ergebnis behandelt werden, nicht als Selbstzweck – die frei formulierten Kommentare, die typischerweise eine NPS-Umfrage begleiten, sind normalerweise umsetzbarer als der Score.

## Fallstricke

- **Vergleich von NPS-Zahlen, die mit unterschiedlichem Fragewortlaut oder Zeitpunkt erhoben wurden**: Selbst geringfügige Unterschiede im Umfragedesign können Scores um mehrere Punkte verschieben, was organisationsübergreifendes NPS-Benchmarking weit weniger zuverlässig macht, als es erscheint.
- **Antwortrate ignorieren**: Ein Schlagzeilen-NPS, berechnet aus einer Antwortrate von 10 %, ist weit weniger vertrauenswürdig als einer, berechnet aus einer Antwortrate von 60 %, da niedrige Antwortraten anfällig für Nicht-Antwort-Verzerrung zu den extremsten Meinungen hin sind.
- **NPS als diagnostisches Werkzeug statt als Zusammenfassungskennzahl behandeln**: Ein fallender NPS sagt, dass etwas nicht stimmt, aber niemals, was; er sollte immer mit qualitativem Feedback oder einem detaillierteren Zufriedenheits- oder Usability-Instrument gepaart werden, um die Ursache zu identifizieren.
- **NPS als Selbstzweck verfolgen**: Eng auf die NPS-Zahl zu optimieren (zum Beispiel indem nur Patienten nach ungewöhnlich positiven Interaktionen befragt werden) kann den berichteten Score verbessern, während das zugrunde liegende Patientenerlebnis nicht besser oder sogar aktiv schlechter wird.

## Quellen

- Bain & Company, ursprüngliche Net Promoter System-Methodologie und Benchmarking-Leitlinien
- Agency for Healthcare Research and Quality (AHRQ), CAHPS (Consumer Assessment of Healthcare Providers and Systems) Patientenerfahrungs-Umfrageprogramm, als ergänzende, detailliertere Alternative
- Peer-begutachtete Literatur zur Nutzung und den Grenzen des Net Promoter Score im Gesundheitswesen, beispielsweise Studien veröffentlicht im Journal of Medical Internet Research (JMIR)

Siehe auch: [Nutzerbindungsrate](../user-retention-rate/), da patientenberichtete Zufriedenheit und tatsächliche fortgesetzte Nutzung eines Produkts oft auseinanderklaffen und es wert sind, als separate Signale verfolgt zu werden.
