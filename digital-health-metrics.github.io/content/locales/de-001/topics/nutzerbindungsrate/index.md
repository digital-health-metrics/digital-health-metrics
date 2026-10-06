# Nutzerbindungsrate

Die Nutzerbindungsrate ist der Anteil der in einem Startzeitraum aktiven Nutzer, die in einem späteren Zeitraum aktiv bleiben, und ihr Gegenstück, die Abwanderungsrate, ist der Anteil derer, die die Nutzung des Produkts vollständig einstellen. Während die Patientenportal-Adoptionsrate (siehe dieses Thema) misst, ob ein Patient jemals ein digitales Gesundheitsprodukt bedeutsam aktiviert hat, misst die Bindung, ob er es weiter nutzt – und für jedes digitale Gesundheitsprodukt im Abonnement-Stil oder mit laufender Versorgung ist die Bindung normalerweise die einzige Kennzahl, die am engsten sowohl mit klinischer Wirkung als auch mit kommerzieller Nachhaltigkeit verbunden ist.

## Warum das wichtig ist

Ein digitales Gesundheitsprodukt, das Nutzer nicht binden kann, kann keinen anhaltenden klinischen Nutzen liefern, egal wie stark seine anfänglichen Adoptions- oder Aktivierungszahlen sind: Ein zwei Wochen lang genutztes und dann aufgegebenes Tool zum Management chronischer Erkrankungen wird wahrscheinlich kein biometrisches Ergebnis bewegen, das von monatelanger anhaltender Verhaltensänderung abhängt. Die Bindung ist auch eine der kommerziell folgenreichsten Kennzahlen, die ein digitales Gesundheitsunternehmen Investoren und Kostenträgern berichtet, da Bindungskurven (die Form des Rückgangs im Laufe der Zeit, nicht nur ein einzelner Bindungsprozentsatz) aufzeigen, ob das Produkt ein wirklich nachhaltiges Nutzungsmuster gefunden hat oder lediglich neuheitsgetriebenes anfängliches Interesse erfasst, das vorhersehbar verblasst. Eine Bindungskurve, die sich nach einem anfänglichen Rückgang abflacht (Patienten, die den ersten Monat überstehen, neigen dazu zu bleiben), ist ein sehr anderes und wesentlich gesünderes Signal als eine, die stetig ohne Boden weiter sinkt.

## Wie sie berechnet wird

```
Bindungsrate (Zeitraum N) = im Zeitraum N aktive Nutzer, die auch im
                            Start-Kohortenzeitraum aktiv waren /
                            Nutzer im Start-Kohortenzeitraum × 100

Abwanderungsrate = 1 − Bindungsrate (für denselben Zeitraum)

Als Kohorten-Bindungskurve berichten (Bindung an Tag/Woche/Monat
1, 2, 3…), nicht als Einzelzeitpunktzahl, da eine einzelne
Momentaufnahme kürzlich beigetretene Nutzer (die noch keine
Gelegenheit zur Abwanderung hatten) mit langjährigen vermischt.
```

## Durchgerechnetes Beispiel

Eine digitale Gesundheits-App schreibt im Januar eine Kohorte von 1.000 neuen Nutzern ein. Bis Ende Monat 1 sind 640 der ursprünglichen 1.000 noch aktiv (Monat-1-Bindung 64 %). Bis Ende Monat 3 bleiben 410 aktiv (Monat-3-Bindung 41 %). Bis Monat 6 bleiben 380 aktiv (Monat-6-Bindung 38 %). Die Form dieser Kurve – ein steiler anfänglicher Rückgang, gefolgt von einer Abflachung zwischen Monat 3 und 6 – legt nahe, dass das Produkt einen stabilen Kern von Nutzern hält, sobald sie eine anfängliche Adoptionshürde überwinden, was ein materiell anderes und ermutigenderes Signal ist, als wenn der Rückgang von Monat 3 zu Monat 6 mit derselben Rate wie Monat 1 bis 3 fortgesetzt hätte.

## Datenquellen und Vorbehalte

Die Bindung wird aus den eigenen Anmelde- oder Aktivitätsereignisprotokollen des Produkts berechnet, wobei „aktiv" über jede verglichene Kohorte hinweg konsistent definiert wird (zum Beispiel mindestens eine qualifizierende Sitzung im Zeitraum). Kohorten sollten auf vergleichbarer Basis verglichen werden – dieselbe Ausgangsdefinition von „aktiv", dieselbe Länge des Beobachtungsfensters –, da selbst kleine definitorische Unterschiede (30-Tage- versus 28-Tage-Monate oder ein strengerer versus lockererer „aktiv"-Schwellenwert) einen berichteten Bindungsprozentsatz um mehrere Punkte verschieben können, ohne dass es einen echten Unterschied im Nutzerverhalten gibt. Saisonale Effekte sind bei Gesundheits-Apps häufig, die mit Neujahrsvorsätzen oder bestimmten Gesundheitsbewusstseinsperioden verbunden sind, sodass ein Jahr-über-Jahr-Kohortenvergleich normalerweise aufschlussreicher ist als der Vergleich benachbarter Kohorten aus verschiedenen Jahreszeiten.

## Fallstricke

- **Eine einzelne Bindungs-Momentaufnahme statt einer Kurve berichten**: Eine einzelne Zahl „X % der Nutzer sind noch aktiv" ohne die Form des Rückgangs im Laufe der Zeit kann ein Produkt, das sich einpendelt (gesund), nicht von einem in kontinuierlichem Rückgang (ungesund) unterscheiden.
- **Die „aktiv"-Definition zwischen Berichtszeiträumen ändern**: Das Aufweichen der Definition eines aktiven Nutzers (zum Beispiel das Zählen eines passiven App-Öffnens statt einer abgeschlossenen Aktion) kann die Bindung verbessert erscheinen lassen, obwohl sich die tatsächliche Nutzung überhaupt nicht geändert hat.
- **Kohorten-Saisonalität ignorieren**: Der Vergleich der Bindung einer Januar-Kohorte (oft aufgebläht durch Einschreibung aufgrund von Neujahrsvorsätzen, die im Durchschnitt eine weniger motivierte Kohorte anzieht) mit einer zu einer anderen Jahreszeit gewonnenen Kohorte kann zu irreführenden Trendschlussfolgerungen führen.
- **Organische und bezahlte Akquisitionskohorten vermischen**: Über verschiedene Kanäle gewonnene Nutzer binden sich oft sehr unterschiedlich; sie zu einer aggregierten Bindungszahl zu vermischen, kann ein kanalspezifisches Bindungsproblem verbergen.

## Quellen

- Peer-begutachtete Literatur zu digitalem Gesundheits-App-Engagement und -Abwanderung, beispielsweise Studien veröffentlicht im Journal of Medical Internet Research (JMIR mHealth and uHealth)
- Digital Therapeutics Alliance, Best-Practice-Leitlinien zur Engagement- und Bindungsmessung für digitale Therapeutika
- Branchen-Benchmarking-Berichte zur Bindung mobiler Gesundheits-Apps, von Analyseplattformen und digitalen Gesundheitsmarktforschungsorganisationen

Siehe auch: [Patienten-Engagement-Konsistenzrate](../patienten-engagement-konsistenzrate/), die die Qualität des Engagements unter gebundenen Nutzern misst, im Unterschied dazu, ob sie überhaupt eingeschrieben bleiben.
