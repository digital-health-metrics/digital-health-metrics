# Patienten-Engagement-Konsistenzrate

Die Patienten-Engagement-Konsistenzrate misst, wie regelmäßig ein eingeschriebener Patient im Laufe der Zeit mit einem digitalen Gesundheitsprodukt interagiert – zum Beispiel Essen oder Symptome protokolliert, körperliche Aktivität erfasst oder Gesundheitsdaten ansieht –, statt einfach nur, ob er es überhaupt genutzt hat. Es ist eine longitudinale Kennzahl, die sich von einer Momentaufnahme-Zahl der aktiven Nutzung unterscheidet: Zwei Patienten können denselben „diesen Monat die App genutzt"-Status haben, während der eine konsistent jeden Tag protokolliert und der andere einmal protokolliert und für drei Wochen verschwindet, und nur die Konsistenzkennzahl unterscheidet sie.

## Warum das wichtig ist

Anhaltende, regelmäßige Interaktion mit einem digitalen Gesundheitstool ist einer der zuverlässigeren Frühindikatoren für klinischen Nutzen, insbesondere bei verhaltensabhängigen Erkrankungen wie Diabetes, Gewichtsmanagement und psychischer Gesundheit, bei denen der Wert des Tools aus der Gewohnheit kommt, die es unterstützt, nicht aus irgendeiner einzelnen Sitzung. Ein Produkt kann eine gesunde Zahl monatlich aktiver Nutzer berichten, während es tatsächlich eine Population bedient, die sich einmal anmeldet und dann abdriftet, weil monatliche aktive Nutzung eine niedrige Hürde ist, die nichts über das Nutzungsmuster innerhalb des Monats aussagt; Konsistenzkennzahlen erfassen dies auf eine Weise, die einfache Aktivitätszählungen nicht können. Da Konsistenz auch eines der schwieriger über Monate statt Wochen aufrechtzuerhaltenden Dinge ist, ist sie ein ehrlicheres Signal für Produktqualität und klinische Passung als kurzfristige Engagement-Zahlen, die direkt nach dem Onboarding anfällig für Neuheitseffekte sind.

## Wie sie berechnet wird

```
Engagement-Konsistenzrate = Wochen mit mindestens einer qualifizierenden
                            Interaktion / insgesamt eingeschriebene
                            Wochen × 100

Eine „qualifizierende Interaktion" sollte explizit und konsistent
definiert werden (z. B. ein Ernährungsprotokolleintrag, ein Symptom-
Check-in oder eine abgeschlossene Aktivitätssynchronisierung) — niemals
ein passives Ereignis wie ein App-Öffnen ohne protokollierte Aktion.

Als Verteilung berichten, nicht nur als Populationsdurchschnitt:
  z. B. Anteil der Patienten mit ≥ 80 % wöchentlicher Konsistenz,
       Anteil mit 50-79 %, Anteil mit < 50 %
```

## Durchgerechnetes Beispiel

Eine Ernährungscoaching-App schreibt einen Patienten für 12 Wochen ein. Der Patient protokolliert in 9 dieser 12 Wochen mindestens einen qualifizierenden Ernährungseintrag, was eine individuelle Engagement-Konsistenzrate von 9 / 12 × 100 = 75 % ergibt. In der gesamten Kohorte der App von 2.000 Patienten, die für mindestens 12 Wochen eingeschrieben sind, halten 600 Patienten (30 %) eine wöchentliche Konsistenz von ≥ 80 % aufrecht, 900 (45 %) fallen in das 50-79-%-Band, und 500 (25 %) fallen unter 50 %. Nur den Kohortendurchschnitt zu berichten (der vielleicht bei etwa 65 % liegt) würde verschleiern, dass ein volles Viertel der Patienten kaum überhaupt engagiert ist – ein Segment, das es wert ist, separat untersucht zu werden, statt in einem Gesamtdurchschnitt verwässert zu werden.

## Datenquellen und Vorbehalte

Konsistenzdaten stammen aus den eigenen Ereignisprotokollen des Produkts (Ernährungseinträge, Aktivitätssynchronisierungen, Check-ins), und die Definition einer „qualifizierenden Interaktion" hat einen enormen Effekt auf die resultierende Rate – eine großzügige Definition (jedes App-Öffnen) wird immer besser aussehen als eine strenge (ein abgeschlossener, bedeutsamer Protokolleintrag), daher muss die verwendete Definition klar zusammen mit jeder berichteten Zahl angegeben werden. Automatisch synchronisierte Daten (zum Beispiel ein verbundener Fitness-Tracker, der Aktivität im Hintergrund synchronisiert) sollten separat von manuell protokollierten Daten berichtet werden, da automatische Synchronisierung die scheinbare Konsistenz aufblähen kann, ohne irgendeine aktive Anstrengung des Patienten oder Engagement mit der Anleitung des Produkts widerzuspiegeln.

## Fallstricke

- **App-Öffnungen mit bedeutsamem Engagement verwechseln**: Ein passives App-Öffnen (zum Beispiel ausgelöst durch eine Push-Benachrichtigung) ist nicht dasselbe wie ein protokollierter Ernährungseintrag oder ein abgeschlossener Check-in; nur über qualifizierende Interaktionen definieren und berichten.
- **Nur den Populationsdurchschnitt berichten**: Eine gesund aussehende durchschnittliche Konsistenzrate kann eine bimodale Population hochengagierter und fast vollständig nicht engagierter Patienten verbergen; die Verteilung über Konsistenzbänder berichten, nicht nur den Durchschnitt.
- **Den Einschreibungsdauer-Nenner ignorieren**: Der Vergleich von Konsistenzraten zwischen Patienten, die für sehr unterschiedlich lange Zeiträume eingeschrieben sind, ohne die Einschreibungsdauer zu berücksichtigen, wird zugunsten jeder Gruppe verzerrt, die ein kürzeres, leichter aufrechtzuerhaltendes Messfenster hatte.
- **Automatische Hintergrundsynchronisierung bläht die Rate auf**: Ein passiv synchronisierter Wearable-Datenstrom kann einen nicht engagierten Patienten konsistent aktiv erscheinen lassen, ohne jegliche echte Verhaltensänderung oder Produktengagement seinerseits.

## Quellen

- Peer-begutachtete Literatur zu digitalen Gesundheits-Engagement-Mustern und ihrer Beziehung zu klinischen Ergebnissen, beispielsweise Studien veröffentlicht im Journal of Medical Internet Research (JMIR)
- American Medical Informatics Association (AMIA), Leitlinien zur Qualität patientengenerierter Gesundheitsdaten und Engagement-Messung
- Digital Therapeutics Alliance, Best-Practice-Leitlinien zur Engagement- und Ergebnismessung für digitale Therapeutika

Siehe auch: [Nutzerbindungsrate](../nutzerbindungsrate/), die eng verwandte Kennzahl, ob ein Patient überhaupt eingeschrieben bleibt, im Unterschied dazu, wie konsistent er während der Einschreibung engagiert ist.
