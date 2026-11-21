# Adoptiounsquote vum Patientenportal

D'Adoptiounsquote vum Patientenportal mierkt den Undeel vun de berechtegte Patienten, déi sech fir e Patientenportal online registréiert hunn an et aktiv benotzen (zum Beispill NHS App, Patient Access oder en EHR-gebonnent Portal wéi MyChart), fir Akten ze gesinn, Rendez-vousen ze buchen oder hirem Betreiungsteam ze schreiwen. Et ass den Aastiegsindikator fir digitalt Engagement: E Patient, deen ni e Konto aktivéiert huet, ka vun kengem nofollgenden digitale Service profitéieren, dee um Portal opbaut.

## Firwat et wichteg ass

E Portal schaaft nëmmen e Wäert, wann e Patient et benotzt, dofir sollen Organisatiounen d'Adoptioun als Trichter amplaz als eenzeg Zuel verfollegen: Registréierung, Aktivéierung (éischt sënnvoll Aktioun) an aktiv Notzung (Notzung bannent engem rullende Fënster) sinn dräi ënnerschiddlech Quoten, déi vill ze dacks vermëscht ginn. Teams fir digital Servicer stinn dacks ënner Drock, eng eenzeg, favorabel Haaptzuel ze mellen, an et brauch Disziplin, op der méi schwéierer, éierlecherer Opschlësselung ze bestoen. Niddreg oder ongläichméisseg verdeelt Adoptioun ass och en Equitéitssignal: Patienten, déi eeler sinn, méi niddreg digital Kompetenz hunn, d'Majoritéitssprooch net schwätzen oder keng zouverlässeg Breetband oder e Smartphone hunn, ginn systematesch manner wahrscheinlech am Zeller gezielt, sou dass eng steigend duerchschnëttlech Adoptiounsquote eng wuessend Lück fir déi Patienten verstoppen kann, déi dacks am meeschte Kontakt mat de Servicer brauchen.

## Wéi et berechent gëtt

All dräi Stadien mellen, net nëmmen d'Registréierung, an den Nenner ëmmer explizit uginn:

```
Registréierungsquote = Patienten mat engem erstellte Portalkonto / berechtegt Patientepopulatioun × 100
Aktivéierungsquote   = Patienten, déi eng éischt sënnvoll Aktioun ofgeschloss hunn (en Resultat
                       gekuckt, e Fënster gebucht, e Message geschéckt) / Patienten mat engem Konto × 100
Aktiv-Notzungsquote  = Patienten, déi sech an de leschte 12 Méint op d'mannst eemol ageloggt hunn /
                       berechtegt Patientepopulatioun × 100
```

D'berechtegt Patientepopulatioun gëtt normalerweis als Patienten definéiert, déi an engem definéierte Réckbléckzäitraum (dacks 24 Méint) op d'mannst eng Begéinung mat der Organisatioun haten, an déi an engem Alter a mat engem Zoustëmmungsstatus sinn, deen hinnen erlaabt, e eegene Konto ze hunn.

## Beispill

E Primärversuergungsnetzwierk bedéngt 50.000 Patienten, déi d'Berechtegungsdefinitioun erfëllen. Dovun hunn sech 32.000 fir d'Portal registréiert (Registréierungsquote 64%). Vun de 32.000 Registréierunge hunn 27.000 op d'mannst eng sënnvoll Aktioun ofgeschloss, wéi e Testresultat ze gesinn (Aktivéierungsquote 84% vun de Registréierten). Iwwer déi lescht 12 Méint hunn sech 21.000 vun den originale 50.000 berechtegte Patienten op d'mannst eemol ageloggt (Aktiv-Notzungsquote 42%). Nëmmen déi 64% Registréierungszuel ze mellen géif dat richtegt Engagement wesentlech iwwerschätzen; déi 42% Aktiv-Notzungszuel ass d'Zuel, déi d'Ressourcenentscheedunge fir de Portalprogramm soll dreiwen.

## Datequellen a Virbehalter

Portalanalytik kënnt typescherweis vun der Ubidderplattform selwer (Login-Eventer, Funktiounsnotzung) oder aus dem Audit-Log vun der ënnerleiender elektronescher Patientenakt, an Organisatiounen sollen skeptesch géintiwwer Ubidder-Dashboards sinn, déi nëmmen Registréierungszuele weisen. Proxy-Zougang (e Elterendeel oder Betreier, deen e Konto am Numm vum Patient geréiert) soll getaggt a getrennt gemellt ginn, well et ännert, wien den "Notzer" tatsächlech ass. D'Wiel vum Nenner ass immens wichteg: Géint déi ganz registréiert Patientelëscht amplaz géint eng wierklech berechtegt, kontaktéierbar Populatioun ze zielen, ënnerschätzt d'Adoptioun ëmmer, während et géint nëmmen aktiv invitéiert Patienten ze zielen se ëmmer iwwerschätzt, dofir soll d'Berechtegungsdefinitioun fixéiert a niewent all gemellter Quote publizéiert ginn.

## Fallen

- **Registréierung als Adoptioun gezielt**: e erstellt, awer ni benotzt Konto huet bal null Wäert; Aktivéierung an aktiv Notzung niewent der Registréierung mellen, net amplaz.
- **Digital Exklusioun ignoréieren**: aggregéiert Adoptiounszuele kënne klammen, wärend d'Lück tëscht de meescht- a mannst-digital agebonnene Gruppe wiisst; ëmmer no Alter, Benodeelegung, Sprooch a Behënnerung segmentéieren, wou d'Daten-Governance et erlaabt.
- **Organisatiounen mat ënnerschiddleche Berechtegungsdefinitioune vergläichen**: e Portalprogramm, dat nëmmen Patienten mat enger opgeholl E-Mail-Adress invitéiert, mellt eng méi héich Quote wéi een, dat géint déi ganz registréiert Lëscht mierkt, ouni echte Ënnerscheed an der Leeschtung.
- **Een eemolege Login als lafend Engagement behandelen**: e 12-Méint-Réckbléck ass heefeg, awer e méi kuerzt Fënster (zum Beispill 90 Deeg) gëtt eng méi fréi Warnung virun enger sënkender Notzung.

## Quellen

- NHS England, Statistike vun der NHS-App-Notzung a Registréierung (nhs.uk / digital.nhs.uk Publikatiounen)
- ONC / HealthIT.gov, Moossnamen vum Promoting Interoperability Program, dorënner d'Patientezougangsmoossnamen View, Download, Transmit (VDT)
- Peer-reviewed Literatur zur Adoptioun vu Patientenportaler an zu Ongläichheeten an der digitaler Gesondheet, zum Beispill Studien, déi am Journal of the American Medical Informatics Association (JAMIA) publizéiert goufen

Kuckt och: [No-Show-Quote bei Rendez-vousen](../no-show-quote-bei-rendez-vousen/), déi d'Selbstplangung an d'Erënnerungen iwwer d'Portal direkt beaflossen.
