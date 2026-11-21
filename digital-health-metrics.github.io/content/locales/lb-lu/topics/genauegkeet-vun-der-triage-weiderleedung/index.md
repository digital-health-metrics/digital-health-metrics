# Genauegkeet vun der Triage-Weiderleedung

D'Genauegkeet vun der Triage-Weiderleedung (Triage Routing Accuracy) ass den Undeel vun de Patientebegéinungen, bei deenen en automatiséierten oder KI-ënnerstëtzten Triage-Tool e Patient korrekt op dat passend Niveau an dat passend Ëmfeld vun der Betreiung weiderleet — zum Beispill Selbstbetreiung, Primärversuergung, dringend Betreiung oder Noutfallbetreiung — wéi et géint e klinesch validéierte Referenzstandard beurteelt gëtt. Et ass d'Sécherheets- a Wierksamkeetskennzuel fir all digital "Front Door", all Symptom-Checker oder all KI-Triage-System: Dem Tool säi ganzt Wäertverspriechen baséiert doropper, Patienten korrekt, séier a konsequent weiderzeleeden.

## Firwat et wichteg ass

En ongenautt Triage-Tool verursaacht Schued a béid Richtungen: Under-Triage (e Patient op e méi niddregt Betreiungsniveau weiderleeden, wéi e brauch) kann d'Behandlung bei engem echten Noutfall verzögeren, während Over-Triage (e Patient op e méi héijt Betreiungsniveau weiderleeden, wéi e brauch) knapp Kapazitéit vun Urgence an dringender Betreiung verschwend a Käschten a Patienteangscht ouni klineschen Notzen erhéicht. Well dës zwee Feelermodi esou ënnerschiddlech Konsequenze hunn, soll d'Genauegkeet vun der Triage-Weiderleedung ëmmer zesumme mat der Richtung vun de Feeler gemellt ginn, net als eenzeg aggregéiert Genauegkeetszuel, déi verstoppt, ob dat Tool sécher oder geféierlech feelt. Reguléierer a Gesondheetssystemer, déi en KI-Triage-Tool fir den Asaz evaluéieren, verlaange ëmmer méi dës Zort vu stratifizéierter Genauegkeetsberichterstattung als Bedéngung fir déi klinesch Fräigab, besonnesch fir Tools, déi mat iergendengem Grad u Autonomie vun engem Kliniker operéieren.

## Wéi et berechent gëtt

```
Genauegkeet vun der Triage-Weiderleedung = korrekt weidergeleet Begéinungen /
                                           gesamt triagéiert Begéinungen × 100

Under-Triage an Over-Triage getrennt mellen:
  Under-Triage-Quote = Begéinungen, déi op e méi niddregt Dringlechkeets-
                       niveau wéi de Referenzstandard weidergeleet goufen /
                       gesamt triagéiert Begéinungen × 100
  Over-Triage-Quote  = Begéinungen, déi op e méi héijt Dringlechkeets-
                       niveau wéi de Referenzstandard weidergeleet goufen /
                       gesamt triagéiert Begéinungen × 100

De Referenzstandard ass typescherweis eng retrospektiv Iwwerpréiwung vum
selwechte Fall duerch e Kliniker, wou méiglech blann géintiwwer dem
Resultat vum Tool.
```

## Beispill

En KI-Symptom-Checker-Tool triagéiert an engem Mount 5.000 Patientebegéinungen. Eng blann klinesch Iwwerpréiwung vun enger zoufälleger Stéchprouf vu 500 vun dëse Begéinunge fënnt, dass 430 op dat korrekt Dringlechkeetsniveau weidergeleet goufen (Genauegkeet 86%), 45 under-triagéiert goufen (9%) an 25 over-triagéiert goufen (5%). Déi 9% Under-Triage-Quote ass d'Zuel, déi am dringendsten eng Ënnersichung verdéngt, well si Begéinunge representéiert, bei deenen e Patient op manner dringend Betreiung geleet gi ka sinn, wéi e tatsächlech gebraucht huet; déi 5% Over-Triage-Quote ass e Kapazitéits- a Käschteproblem, awer keng direkt Sécherheetsfro.

## Datequellen a Virbehalter

De Referenzstandard, géint deen d'Triage-Genauegkeet gemooss gëtt, ass immens wichteg: Eng Iwwerpréiwung vun engem eenzege Kliniker bréngt dem Kliniker säin eegene Variabilitéit vum Uerteel eran, sou dass eng glaubwürdeg Genauegkeetszuel normalerweis entweder méi onofhängeg Reviewer mat dokumentéierter Inter-Rater-Iwwereneestëmmung verlaangt, oder e Verglach mat engem spéidere, bestätegte klineschen Resultat (wéi eng Betreiung de Patient tatsächlech gebraucht huet, nodréiglech festgestallt). D'Stéchprouf ass och wichteg: Nëmmen eng Bequemlechkeets-Stéchprouf vu Begéinungen ze iwwerpréiwen, oder nëmmen déi, déi als ongewéinlech markéiert goufen, produzéiert keng Zuel, déi sech op d'Gesamtleeschtung vum Tool generaliséiere léisst. Genauegkeetszuele sollen getrennt no presentéierter Symptom- oder Beschwerdekategorie gemellt ginn, wou de ënnerleienden Fallvolumen et erlaabt, well Triage-Tools selten eenheetlech iwwer all Krankheeten funktionéieren.

## Fallen

- **Eng eenzeg gemëscht Genauegkeetszuel mellen**: Under-Triage an Over-Triage an eng Zuel zesummenzefaassen verstoppt, ob d'Feeler vum Tool Richtung de geféierlecheren Feelermodus tendéieren; se ëmmer getrennt mellen.
- **E eenzege, net blann Reviewer als Referenzstandard benotzen**: dat ka roueg d'Genauegkeetszuel Richtung dat verzerren, wat dee Reviewer selwer gemaach hätt, amplaz engem onofhängege klineschen Standard.
- **Nëmmen op retrospektiven, bequemen Daten validéieren**: déi richteg Weiderleedungsgenauegkeet vun engem Tool ënner live, ambiguem Patienteninput ënnerscheet sech dacks wesentlech vu senger Genauegkeet op engem kuratéierte Validatiounsset, deen während der Entwécklung zesummegestallt gouf.
- **Leeschtungsdrift no dem Asaz ignoréieren**: d'Genauegkeet vun engem KI-Triage-Modell kann mat der Zäit ofhuelen, wann Patientepopulatiounen, presentéiert Symptomer oder d'Verfügbarkeet vu Betreiungsweeër sech änneren; d'Genauegkeet soll reegelméisseg nei gemooss ginn, net eemol validéiert a stabil ugeholl ginn.

## Quellen

- ONC / HealthIT.gov, Richtlinne fir d'Sécherheet an d'Qualitéitssécherung vu klineschen Entscheedungssystemer a KI-baséierten Tools
- Peer-reviewed Literatur zur Genauegkeet vu Symptom-Checker- a KI-Triage-Tools, zum Beispill Studien, déi am JAMIA, am npj Digital Medicine a BMJ Health & Care Informatics publizéiert goufen
- NHS England, Richtlinne fir d'klinesch Sécherheet vu digitalen Triage- a Fernkonsultatiounstools (DCB0129/DCB0160 Standarde fir klinescht Risikomanagement)

Kuckt och: [Duerchlafzäit vun digitalen Iwwerweisungen](../duerchlafzäit-vun-digitalen-iwwerweisungen/), de Prozesskennzuel, déi am direktste vun enger Triage-Entscheedung ofhänkt.
