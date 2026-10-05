# ISO/TS 82304-2

ISO/TS 82304-2 ist eine internationale technische Spezifikation, veröffentlicht unter dem ISO-Technikkomitee 215 (Health Informatics), die eine strukturierte Methode zur Bewertung der Qualität von Gesundheits- und Wellness-Anwendungen definiert – die Benutzerfreundlichkeit, technische Robustheit und Zuverlässigkeit, Interoperabilität, Inhaltsqualität sowie Datensicherheit und Datenschutz umfasst – für Produkte, die außerhalb des Anwendungsbereichs der vollständigen Medizinprodukteregulierung liegen, aber dennoch die Gesundheitsentscheidungen oder das Verhalten eines Nutzers materiell beeinflussen. Sie existiert, um eine spezifische Lücke zu schließen: Die große Mehrheit der verbraucherorientierten Gesundheits- und Wellness-Apps (Fitness-Tracker, Symptomtagebücher, Wellness-Coaching-Apps) ist nicht als Medizinprodukt reguliert, dennoch gab es zuvor keine gemeinsame, strukturierte Methode, um ihre grundlegende Qualität und Sicherheit zu bewerten oder zu vergleichen.

## Warum das wichtig ist

App-Stores beherbergen Hunderttausende von Gesundheits- und Wellness-Apps mit enorm unterschiedlicher Qualität, und bevor eine gemeinsame technische Spezifikation existierte, hatten ein Patient, Kliniker oder ein Gesundheitssystem keine strukturierte, vergleichbare Methode, um die grundlegende Qualität und Sicherheit einer App gegen eine andere zu beurteilen, jenseits von Sternebewertungen und Marketingbehauptungen – eine Lücke, die wichtig ist, weil eine schlecht gestaltete Gesundheits-App dennoch echten Schaden verursachen kann (ungenaue Inhalte, schlechte Datensicherheit, irreführende Behauptungen), selbst ohne die regulatorische Schwelle eines Medizinprodukts zu erreichen. ISO/TS 82304-2 ist bewusst um Bereiche herum strukturiert, die ein nicht-spezialisierter Gutachter konsistent bewerten kann, was es zur technischen Grundlage für mehrere nationale und kommerzielle Qualitätskennzeichnungs- und Kuratierungsdienste für Gesundheits-Apps gemacht hat, die Gesundheitssystemen und App-Bibliotheken eine vertretbare, standardisierte Methode geben, Apps in eine empfohlene Liste aufzunehmen oder daraus auszuschließen, statt sich auf Ad-hoc-Beurteilungen zu verlassen.

## Wie es angewendet wird

```
Die Bewertung ist um definierte Qualitätsbereiche organisiert, die
durch strukturierte Überprüfung statt durch eine einzelne numerische
Formel bewertet werden:

Benutzerfreundlichkeit              — Klarheit, Zugänglichkeit und
                                      Benutzungsfreundlichkeit für
                                      die beabsichtigte Nutzergruppe
Technische Robustheit/Zuverlässigkeit — Stabilität, Leistung und
                                      Freiheit von technischen
                                      Mängeln
Interoperabilität                    — Fähigkeit, Daten mit anderen
                                      Systemen auszutauschen, wo
                                      relevant für die Funktion der
                                      App
Inhaltsqualität und -sicherheit      — Genauigkeit, Aktualität und
                                      Abwesenheit schädlicher oder
                                      irreführender Gesundheits-
                                      behauptungen
Sicherheit und Datenschutz           — Datenschutzpraxis und
                                      Transparenz über die Daten-
                                      nutzung

Jeder Bereich wird anhand strukturierter Überprüfungskriterien
bewertet und zu einer Gesamtqualitätsbewertung kombiniert, die
mehrere Qualitätskennzeichnungsprogramme für Gesundheits-Apps als
technische Grundlage für ein öffentliches Qualitätssiegel oder eine
Entscheidung zur Aufnahme in eine kuratierte Bibliothek verwenden.
```

## Durchgerechnetes Beispiel

Ein digitales App-Bibliotheksprogramm eines Gesundheitssystems möchte eine empfohlene Liste von Wellness-Apps für Patienten kuratieren, statt die App-Auswahl vollständig der App-Store-Suche zu überlassen. Jede Kandidaten-App wird anhand der ISO/TS 82304-2-Bereiche bewertet: Eine Schlaftracking-App schneidet gut bei Benutzerfreundlichkeit und technischer Robustheit ab, angemessen bei Inhaltsqualität, wird aber während der Sicherheits- und Datenschutzprüfung markiert, weil sie Nutzerdaten ohne klare Offenlegung mit Drittanbieter-Werbetreibenden teilt – ein Befund, der bedeutsam genug ist, um die App trotz ihres ansonsten starken Benutzerfreundlichkeitsscores von der empfohlenen Liste auszuschließen. Dieses bereichsweise Ergebnis ist sowohl für das Kuratierungsteam als auch, falls geteilt, für den eigenen Entwickler der App umsetzbarer als ein einzelner gemischter Qualitätsscore, da es genau identifiziert, welcher Aspekt behoben werden muss, bevor die App wieder in Betracht gezogen werden könnte.

## Datenquellen und Vorbehalte

Die Bewertung anhand von ISO/TS 82304-2 wird typischerweise von einem geschulten Gutachter oder einem akkreditierten Bewertungsdienst durchgeführt, wobei den strukturierten Überprüfungskriterien der Spezifikation für jeden Bereich gefolgt wird, und mehrere nationale und kommerzielle Initiativen (Organisationen zur Qualitätskennzeichnung und Kuratierung von Gesundheits-Apps, von denen einige unter formeller nationaler Gesundheitssystem-Unterstützung operieren) verwenden den Standard als technische Grundlage für ihre eigenen öffentlich sichtbaren App-Qualitätssiegel – was bedeutet, dass der „zertifizierte" oder „gekennzeichnete" Status einer App in der Praxis oft die Implementierung des Standards durch ein spezifisches Kennzeichnungsprogramm widerspiegelt, nicht notwendigerweise einen identischen Prozess über alle Programme hinweg, daher sollten die spezifische bewertende Organisation und ihre Methodik zusammen mit jedem zitierten Qualitätssiegel überprüft und offengelegt werden. Die Spezifikation bewertet Qualitäts- und grundlegende Sicherheitsmerkmale einer App als Software; sie ist kein Ersatz für eine Medizinprodukte-Zulassung, wenn die Behauptungen oder Funktionen einer App tatsächlich die Schwelle eines Medizinprodukts erreichen, und sie als solche zu verwenden wäre ein Kategorienfehler.

## Fallstricke

- **Ein Qualitätssiegel als regulatorische Zulassung behandeln**: Eine unter ISO/TS 82304-2 bewertete und gekennzeichnete App hat dadurch keine regulatorische Medizinprodukte-Zulassung erhalten; die beiden dienen unterschiedlichen Zwecken und sollten niemals in der Art, wie eine App beschrieben oder vermarktet wird, vermischt werden.
- **Annehmen, dass alle auf dem Standard basierenden Kennzeichnungsprogramme gleichwertig sind**: Verschiedene Organisationen implementieren auf ISO/TS 82304-2 basierende Bewertungen mit ihren eigenen spezifischen Überprüfungsprozessen und ihrer eigenen Strenge; prüfen, welche Organisation eine Bewertung durchgeführt hat und wie, statt ein „auf ISO/TS 82304-2 basierendes" Siegel als austauschbar mit einem anderen zu behandeln.
- **Nur Benutzerfreundlichkeit bewerten und Sicherheit sowie Datenschutz vernachlässigen**: Usability-Probleme sind für einen Endnutzer am sichtbarsten und am einfachsten informell zu bewerten, was dazu führen kann, dass Gutachter den weniger sichtbaren, aber potenziell folgenreicheren Bereich Sicherheit und Datenschutz unterbewerten.
- **Die Bewertung als einmalige, dauerhafte Zertifizierung behandeln**: Die Inhalte, Sicherheitspraktiken und Vereinbarungen zur Weitergabe von Daten an Dritte einer App können sich alle nach einer anfänglichen Bewertung ändern; ein glaubwürdiges Qualitätskennzeichnungsprogramm bewertet periodisch neu, statt ein anfängliches Bestehen als dauerhaft zu behandeln.

## Quellen

- International Organization for Standardization, ISO/TS 82304-2:2021, „Health software — Part 2: Health and wellness apps — Quality and reliability"
- ISO-Technikkomitee 215 (Health Informatics), Veröffentlichungs- und Arbeitsgruppeninformationen
- Nationale und kommerzielle Organisationen zur Qualitätskennzeichnung und Kuratierung von Gesundheits-Apps, die ihre Bewertungsmethodik basierend auf diesem Standard veröffentlichen

Siehe auch: [System-Usability-Scale-Score](../system-usability-scale-score/), ein ergänzendes, engeres, speziell auf Benutzerfreundlichkeit fokussiertes Instrument, das oft zusammen mit einer breiteren ISO/TS 82304-2-Qualitätsbewertung verwendet wird.
