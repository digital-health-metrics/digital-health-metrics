# Digitale Zugangsrate

Die digitale Zugangsrate misst den Anteil einer berechtigten Patientenpopulation, der überhaupt die praktischen Mittel hat, ein digitales Gesundheitsprodukt zu nutzen: eine Breitband- oder zuverlässige Mobilfunkverbindung, ein internetfähiges Gerät und ein aktives Konto im relevanten Patientenportal oder der App. Es ist die Voraussetzungskennzahl für jedes andere digitale Gesundheitsmaß in diesem Buch – eine Population kann sich nicht bei einem digitalen Gesundheitsprodukt registrieren, damit interagieren oder davon profitieren, das sie strukturell nicht erreichen kann, egal wie gut dieses Produkt gestaltet ist.

## Warum das wichtig ist

Kennzahlen zur digitalen Gesundheitsadoption und zum Engagement setzen implizit eine Population voraus, die bereits digitalen Zugang hat, und die Berichterstattung über Adoptions- oder Engagement-Raten, ohne zuvor die zugrunde liegende Zugangsrate festzustellen, riskiert, stillschweigend genau die Patienten auszuschließen, die am wenigsten wahrscheinlich diesen Zugang haben – die oft auch die Patienten mit dem größten Gesundheitsbedarf sind. Das HIMSS Digital Health Equity Measurement Framework (DHEMF) und ähnliche Frameworks behandeln digitalen Zugang als grundlegende, erstrangige Gerechtigkeitskennzahl, genau weil Interventionen, die ohne Berücksichtigung von Zugangslücken gebaut werden, dazu neigen, bestehende Gesundheitsdisparitäten zu verstärken statt zu schließen: Eine Telemedizin-First-Strategie kann unbeabsichtigt den Zugang zur Versorgung für Patienten ohne zuverlässige Verbindung oder Gerät verringern, selbst während sie die Erfahrung für Patienten, die bereits beides hatten, messbar verbessert. Die digitale Zugangsrate sollte nach demografischem und geografischem Segment verfolgt und berichtet werden, da nationale oder organisationsweite Durchschnittswerte routinemäßig große Lücken für bestimmte Populationen verschleiern.

## Wie sie berechnet wird

```
Digitale Zugangsrate = Patienten mit Breitband-/Mobilfunkverbindung
                       UND einem internetfähigen Gerät UND einem
                       aktiven Patientenportal- oder App-Konto /
                       berechtigte Gesamtpatientenpopulation × 100

Jede Teilkomponente zusätzlich zur kombinierten Rate separat
berichten:
  Verbindungsrate          = Patienten mit zuverlässiger Internet-
                             verbindung / berechtigte Population ×
                             100
  Geräteeigentumsrate      = Patienten mit internetfähigem Gerät /
                             berechtigte Population × 100
  Portal-Aktivierungsrate  = Patienten mit aktivem Portal-/App-
                             Konto / berechtigte Population × 100
                             (siehe Patientenportal-Adoptionsrate
                             für den vollständigeren Adoptions-
                             trichter)
```

## Durchgerechnetes Beispiel

Ein Gesundheitssystem versorgt eine berechtigte Population von 40.000 Patienten. Eine Patientenbefragung und Infrastrukturdaten zeigen, dass 34.000 (85 %) über zuverlässige Breitband- oder Mobilfunkverbindung verfügen, 33.000 (82,5 %) über ein internetfähiges Gerät, und von den Patienten, die beide Bedingungen erfüllen, haben 27.000 (67,5 % der gesamten berechtigten Population) ein aktives Patientenportalkonto. Die Aufschlüsselung nach Alter zeigt, dass Patienten ab 65 Jahren eine kombinierte digitale Zugangsrate von nur 48 % haben, verglichen mit 78 % bei Patienten unter 65 – eine Lücke, die der organisationsweite Durchschnitt von 67,5 % vollständig verschleiert, und eine, die direkt informieren sollte, ob ein bestimmter Service für diese Population sicher nur digital angeboten werden kann.

## Datenquellen und Vorbehalte

Daten zu Verbindung und Geräteeigentum stammen typischerweise aus einer Kombination von Patientenselbstberichten (über Umfrage oder Aufnahmefragebogen), Daten der Federal Communications Commission (FCC) oder gleichwertigen nationalen Breitbandverfügbarkeits-Kartierungsdaten für das geografische Gebiet eines Patienten, und Portal-Aktivierungsdaten aus den eigenen Systemen der Organisation. Die Breitbandverfügbarkeit auf Gebietsebene (ob ein Anbieter in einer bestimmten Postleitzahl Dienste anbietet) ist ein schwächerer Proxy als die Verbindung auf Haushaltsebene, da Verfügbarkeitsdaten auf Gebietsebene nichts darüber aussagen, ob sich ein bestimmter Patient diesen Dienst tatsächlich leisten kann oder sich dafür entschieden hat, ihn zu abonnieren – Zugangsraten auf Gebiets- und Haushaltsebene sollten nicht vermischt werden. Der Zugang zu Geräten und Verbindung kann auch innerhalb eines Haushalts geteilt werden (zum Beispiel ein von mehreren Familienmitgliedern genutztes Smartphone), was Umfragedaten auf Haushaltsebene besser erfassen als allein Portal-Anmeldedaten auf individueller Ebene.

## Fallstricke

- **Nur einen organisationsweiten Durchschnitt berichten**: Dies verschleiert zuverlässig große Zugangslücken für ältere, einkommensschwächere, ländliche oder anderweitig digital marginalisierte Patientensegmente; immer nach demografischem und geografischem Segment aufschlüsseln.
- **Breitbandverfügbarkeit auf Gebietsebene mit tatsächlichem Haushaltszugang vermischen**: Dass eine Postleitzahl von einem Breitbandanbieter „versorgt" wird, bedeutet nicht, dass jeder Haushalt darin diesen Dienst abonniert oder sich leisten kann.
- **Geräteeigentum als einmalige, statische Tatsache behandeln**: Der Gerätezugang kann vorübergehend sein (ein alterndes Gerät, ein verlorenes oder beschädigtes Telefon, ein neu zugewiesenes gemeinsam genutztes Familiengerät), daher sollte die Zugangsrate wiederkehrend gemessen werden, nicht als stabil angenommen werden, sobald sie einmal bewertet wurde.
- **Einen rein digitalen Pfad gestalten, bevor die Zugangsrate für die betroffene Population festgestellt wird**: Die Verlagerung eines Service auf rein digital, ohne zuvor die tatsächliche digitale Zugangsrate der Zielpopulation zu bestätigen, riskiert, genau die Patienten stillschweigend auszuschließen, die am wenigsten in der Lage sind, einen alternativen Kanal zu erreichen.

## Quellen

- HIMSS, Digital Health Equity Measurement Framework (DHEMF)
- Federal Communications Commission (FCC), nationale Breitbandverfügbarkeits- und Digital-Equity-Daten
- Pew Research Center, Forschung zu Internet-, Breitband- und Gerätezugang sowie digitalen Kluft-Trends über demografische Gruppen hinweg

Siehe auch: [digitale Gesundheitskompetenzrate](../digitale-gesundheitskompetenzrate/), die eng verwandte Kennzahl, ob Patienten, die Zugang haben, ihn tatsächlich unaided nutzen können.
