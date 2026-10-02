# Medikamentenadhärenzrate

Die Medikamentenadhärenzrate misst, inwieweit ein Patient ein verschriebenes Medikament wie angeordnet einnimmt, am häufigsten ausgedrückt als der Anteil der Tage in einem definierten Zeitraum, an denen ein Patient wie verschrieben Zugang zu seinem Medikament hatte. Es ist eine der folgenreichsten digitalen Gesundheitskennzahlen, da Nichtadhärenz häufig ist, mit der richtigen Unterstützung weitgehend vermeidbar ist und direkt mit schlechteren klinischen Ergebnissen und höheren nachgelagerten Kosten verbunden ist – genau die Lücke, die Medikamentenerinnerungs-Apps, smarte Pillendosen und Apotheken-Nachfüll-Erinnerungen schließen sollen.

## Warum das wichtig ist

Die Nichtadhärenz bei Medikamenten gegen chronische Erkrankungen wird von Gesundheitsbehörden für einige Erkrankungen auf bis zu 50 % geschätzt und ist eine führende vermeidbare Ursache für vermeidbare Krankenhauseinweisungen, Krankheitsprogression und Behandlungsversagen, das fälschlicherweise dem Medikament selbst und nicht der unregelmäßigen Einnahme zugeschrieben wird. Digitale Adhärenztools existieren speziell, um diese Lücke zu schließen, sodass für jedes Programm mit einer Medikamentenkomponente die Adhärenzrate normalerweise die einzige entscheidungsrelevanteste Kennzahl ist: Sie liegt kausal vorgelagert von biometrischer Verbesserung, Wiedereinweisung und den meisten anderen klinischen Ergebniskennzahlen, die ein Programm sonst berichten könnte. Ein Programm, das Engagement oder Zufriedenheit verbessert, ohne die Adhärenz zu bewegen, hat wahrscheinlich noch keinen plausiblen Mechanismus für klinischen Nutzen nachgewiesen.

## Wie sie berechnet wird

```
Proportion of Days Covered (PDC) = Tage im Zeitraum mit Medikament
                                   zur Hand (basierend auf Vorrats-
                                   tagen aus Verordnungen) / Tage im
                                   Messzeitraum × 100

Medication Possession Ratio (MPR) = während des Zeitraums erhaltene
                                   Vorratstage insgesamt / Tage im
                                   Zeitraum × 100 (kann bei vorzeitiger
                                   Nachbeschaffung 100 % übersteigen;
                                   PDC wird aus diesem Grund im
                                   Allgemeinen bevorzugt)

Ein Patient wird typischerweise bei einem PDC-Schwellenwert von ≥ 80 %
als „adhärent" eingestuft, nach weit verbreiteter Qualitätsmaß-
Konvention.
```

## Durchgerechnetes Beispiel

Einem Patienten wird über einen Messzeitraum von 90 Tagen ein tägliches Medikament gegen eine chronische Erkrankung verschrieben. Apothekenabgabeunterlagen zeigen, dass der Patient genug Medikament erhielt, um 76 dieser 90 Tage abzudecken, mit zwei Lücken: einer 9-tägigen Lücke nach Aufbrauchen vor einer Nachbeschaffung und einer 5-tägigen Lücke im Zusammenhang mit einer Krankenhauseinweisung. Der PDC beträgt 76 / 90 × 100 = 84 %, was den konventionellen Adhärenz-Schwellenwert von 80 % übersteigt. Würden dieselben Lücken mit MPR basierend auf abgegebenen Vorratstagen statt tatsächlich abgedeckten Tagen gemessen, könnte eine vorzeitige Nachbeschaffung an anderer Stelle im Zeitraum das Verhältnis über 100 % treiben, was veranschaulicht, warum PDC das konservativere und im Allgemeinen bevorzugte Maß ist.

## Datenquellen und Vorbehalte

Apotheken-Abrechnungs- oder Abgabedaten (entweder von einem Apotheken-Leistungsmanager oder einem verbundenen Apothekensystem) sind die Standardquelle, da sie widerspiegeln, was ein Patient tatsächlich erhalten hat, und nicht, was ihm verschrieben wurde; Verschreibungsdaten allein überschätzen die Adhärenz, da sie nicht bestätigen, dass der Patient das Medikament jemals abgeholt hat. Digitale Adhärenztools – smarte Pillendosen, verschluckbare Sensoren, verbundene smarte Inhalatoren, die jede Betätigung für Atemwegserkrankungen wie Asthma und COPD protokollieren, und App-basierte Check-ins – bieten höher aufgelöste Daten darüber, ob eine Dosis tatsächlich eingenommen und nicht nur erhalten wurde, werden aber von einer kleinen, potenziell nicht repräsentativen Minderheit von Patienten genutzt, sodass die Vermischung gerätebestätigter Adhärenz mit abrechnungsbasiertem PDC über eine Population hinweg bei der Interpretation Sorgfalt erfordert. Die Adhärenz sollte über einen Zeitraum gemessen werden, der lang genug ist, um einzelne verpasste Dosen zu glätten, aber kurz genug, um einen bedeutsamen Rückgang zu erkennen, bevor er klinischen Schaden verursacht – 90-Tage-Rollfenster sind bei chronischen Medikamenten üblich.

## Fallstricke

- **Verwendung von MPR ohne Offenlegung, dass es 100 % übersteigen kann**: Unerklärte Verhältnisse über 100 % aus vorzeitiger Nachbeschaffung oder Bevorratung machen patienten- und zeitraumübergreifende Vergleiche unzuverlässig, es sei denn, PDC wird verwendet oder das Verhältnis wird explizit begrenzt.
- **Verschreibungs- oder Bestelldaten als Adhärenznachweis behandeln**: Eine an eine Apotheke geschriebene oder gesendete Verschreibung sagt nichts darüber aus, ob der Patient das Medikament abgeholt oder eingenommen hat; nur Abgabe- oder Gerätedaten schließen diese Lücke.
- **Einen einzigen Adhärenz-Schwellenwert wahllos über alle Erkrankungen anwenden**: Die klinische Konsequenz des Verpassens von 20 % der Dosen variiert je nach Medikamentenklasse enorm (z. B. Antikoagulanzien versus Statine), sodass ein universell verwendeter einzelner 80-%-Schwellenwert das klinische Risiko für manche Medikamente unter- oder überschätzen kann.
- **Medikamentenwechsel und -absetzungen ignorieren**: Ein Patient, der klinisch angemessen auf ein anderes Medikament umgestellt wird, kann als großer Adhärenzrückgang beim ursprünglichen Medikament erscheinen, wenn der Wechsel in der Berechnung nicht berücksichtigt wird.

## Quellen

- Pharmacy Quality Alliance (PQA), Spezifikationen des Proportion of Days Covered-Maßes
- Centers for Medicare & Medicaid Services (CMS), Star Ratings-Medikamentenadhärenzmaße
- Peer-begutachtete Literatur zur Messung der Medikamentenadhärenz und digitalen Adhärenzinterventionen, beispielsweise Studien veröffentlicht im Journal of Managed Care & Specialty Pharmacy

Siehe auch: [biometrische Verbesserungsrate](../biometric-improvement-rate/), für die die Adhärenz bei Medikamenten gegen chronische Erkrankungen ein wesentlicher Treiber ist.
