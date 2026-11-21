# ePROM-Ofschlossquote

D'ePROM-Ofschlossquote mierkt den Undeel vun de geplangten elektroneschen Patient-Reported Outcome Measures (ePROMs) — standardiséiert, validéiert Froebeen, déi dem Patient seng eege Beschreiwung vu sengen Symptomer, senger Funktioun oder senger Liewensqualitéit erfaassen, digital amplaz op Pabeier geliwwert —, déi tatsächlech ofgeschloss ginn. Et ass esou vill eng Datequalitéitskennzuel wéi eng Engagement-Kennzuel: De klineschen a Fuerschungswäert vun engem PROM-Programm hänkt komplett dovun of, eng héich genuch Ofschlossquote ze hunn, sou dass déi gesammelt Äntwerten d'ganz ageschriwwe Populatioun representéieren, net nëmmen déi engagéiertst oder am mannste symptomatesch Ënnergrupp.

## Firwat et wichteg ass

Patient-gemellt Resultater sinn dat direkt, vum Patient bestätegt Komplement zu klinesch opgeholl oder apparatgemoossen Daten, a si erfaassen Dimensioune vun der Gesondheet — Péng, Funktioun, Liewensqualitéit —, déi eng Chartpréifung oder eng biometresch Liesung net erfaasse kann; d'Digitaliséierung vun der PROM-Erfaassung gëtt et genee dofir, fir dës Daten méi bëlleg a méi einfach a grousser Skala ze sammelen, wéi et d'Verwaltung op Pabeier jee erlaabt huet. Awer e PROM-Programm mat enger niddreger Ofschlossquote riskéiert e spezifesche a schwéierwiegende Bias: Patienten, déi sech méi schlecht fillen, hunn dacks manner Loscht, e laangen Froebou auszefëllen, sou dass eng ofsënkend Ofschlossquote selwer en Fréiwarnsignal fir eng verschlechtert Populatiounsgesondheet kann sinn, an eng niddreg gesamt Ofschlossquote kann déi gesammelt Äntwerten besser ausgesinn loossen wéi dem richtege Populatioun seng Erfarung, einfach well déi am meeschte symptomatesch Patienten ënnerrepresentéiert sinn an deem, wat ofgeschloss gëtt. Dofir soll d'Ofschlossquote ëmmer niewent de PROM-Scoren selwer gemellt ginn, net als sekundäre operationelle Detail behandelt ginn.

## Wéi et berechent gëtt

```
ePROM-Ofschlossquote = komplett ofgeschloss ePROMs / geschéckt oder
                       geplangt ePROMs × 100

Getrennt mellen fir:
  Initial Ofschlossquote       (éischte Froebou an enger
                                Iwwerwaachungssequenz)
  Longitudinal Ofschlossquote  (spéider Froebeen an enger lafender
                                Iwwerwaachungssequenz, déi typescherweis
                                mat der Zäit ofsénkt a soll als Trend
                                verfollegt ginn, net als eenzeg Zuel)

E "deelweis ofgeschloss" Froebou soll getrennt vu béiden, "komplett
ofgeschloss" an "net ugefaang", definéiert a gemellt ginn.
```

## Beispill

Eng Onkologieklinik schéckt engem validéierte Symptombelaaschtungs-ePROM un 400 Patienten viru jidde monatleche Follow-up-Besuch. Am éischte Mount schléissen 340 Patienten de Froebou komplett of (Ofschlossquote 85%), 30 schléissen en deelweis of, an 30 fänken en net un. Am sechste Mount vun der selwechter Iwwerwaachungssequenz sinn déi komplett Äntwerten op 260 vun der selwechter 400-Patiente-Kohort gefall (65%), e bedeitenden longitudinale Réckgang, deen komplett iwwersi géif ginn, wann nëmmen déi 85% vum éischte Mount als statesch Gesamtkennzuel gemellt gi wieren. D'Ënnersiche vun deene Patienten, déi ofspringen (no Symptomschweregrad, Krankheetsstadium oder Alter) kann weisen, ob de Réckgang Ëmfragemiddegkeet reflektéiert, verschlechtert Symptomer, déi de Froebou méi schwéier auszefëllen maachen, oder eng technesch Zougangsbarrière.

## Datequellen a Virbehalter

D'Ofschlossdaten kommen aus de Liwwerungs- an Äntwertlogs vun der ePROM-Plattform selwer, déi d'Zoustänn "net ugefaang", "deelweis ofgeschloss" a "komplett ofgeschloss" kënne ënnerscheeden — eng Ënnerscheedung, déi ëmmer soll erhale bleiwen a gemellt ginn, amplaz zu enger binärer Zuel ofgeschloss/net ofgeschloss kollabéiert ze ginn, well deelweis Ofschlossung dacks op e spezifesche Punkt am Froebou weist, wou Patienten Schwieregkeeten hunn oder sech zréckzéien. D'Ofschlossquote soll zesumme mat der Aart a Weis interpretéiert ginn, wéi de Froebou geliwwert gëtt (e Link per SMS, eng App-Notifikatioun, oder eng Liwwermethod, déi e Portal-Login verlaangt), well d'Friktioun bei der Liwwerung selwer d'Ofschlossung beaflosst, onofhängeg vum Inhalt vum Froebou oder dem ënnerleienden Zoustand vum Patient. Fir de PROM selwer soll ëmmer e validéierten Instrument (amplaz enger ad-hoc Rei vu Froen) benotzt ginn, well d'Ofschlossquote fir en net validéierten Instrument näischt Zouverlässeges iwwer de klineschen Notzen vun de resultéierende Daten seet, och wann d'Ofschlossung héich ass.

## Fallen

- **E sënkend Ofschlossquote nëmmen als Liwwerungsproblem behandelen**: e longitudinale Réckgang vun der Ofschlossung kann tatsächlech verschlechtert Symptomer vun de Patienten reflektéieren (Patienten ze krank, fir d'Ëmfro auszefëllen) amplaz Ëmfragemiddegkeet oder en techneschen Zoustand, an dës Ënnerscheedung ass fir déi klinesch Interpretatioun immens wichteg.
- **Deelweis a komplett Ofschlossung an eng Kategorie kollabéieren**: e deelweis ofgeschloss Froebou ass eng wesentlech aner Datequalitéit wéi e komplett ofgeschlossene; se getrennt mellen, an ënnersichen, wou am Fluss vum Froebou Patienten en dacks opginn.
- **D'Ofschlossquote ouni Risiko vu Äntwertbias mellen**: eng moderat Ofschlossquote soll eng Ënnersichung ausléisen, ob Respondenten sech systematesch (a Symptomschweregrad, Alter, digitaler Kompetenz) vun Net-Respondenten ënnerscheeden, well PROM-Scoren, déi nëmmen aus Respondente berechent ginn, déi ganz Populatioun falsch duerstellen kënnen.
- **E net validéierte oder selwer gebaute Froebou benotzen**: d'Ofschlossquote ass als Datequalitéitssignal bedeitungslos, wann dat Instrument, dat ofgeschloss gëtt, selwer net klinesch fir de Krankheet an d'Populatioun, déi gemooss gëtt, validéiert gouf.

## Quellen

- International Consortium for Health Outcomes Measurement (ICHOM), Entwécklung vu Standardsätz a Richtlinne fir d'PROM-Ëmsetzung
- U.S. Food and Drug Administration (FDA), Richtlinne fir patient-gemellt Resultatmoossnamen a klineschen Studien a regulatoreschen Anmeldungen
- Peer-reviewed Literatur zur Ëmsetzung vun elektroneschen PROMs an zu Ofschlossquoten, zum Beispill Studien, déi a Quality of Life Research an am Journal of Medical Internet Research (JMIR) publizéiert goufen

Kuckt och: [Patient Net Promoter Score](../patienten-net-promoter-score/), eng verbonne, awer ënnerscheedlech patient-gemellt Kennzuel, déi d'Zefriddenheet amplaz dem klineschen Resultat mierkt.
