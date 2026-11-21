# Iwwerschreiwungsquote vu klineschen Alarmer

D'Iwwerschreiwungsquote vu klineschen Alarmer mierkt den Undeel vun den Alarmer vum klineschen Entscheedungssystem (CDS), wéi Warnungen virun Medikamenteninteraktiounen, Allergiealarmer a Kontrolle vum Dosisberäich, déi vun engem computeriséierte System fir Medikatiounsbestellungen (CPOE) generéiert ginn, déi e Kliniker ofweist oder iwwerschreift, amplaz drop ze reagéieren. Et ass dat quantitativt Standardsignal, fir "Alert Fatigue" z'erkennen a ze managen: déi gutt dokumentéiert Tendenz vu Kliniker, géintiwwer Alarmer ofzestompen, soubal d'Volumen vu Warnunge mat wéinege Wäert iwwerwältegend gëtt.

## Firwat et wichteg ass

Publizéiert Iwwerschreiwungsquoten fir Alarmer zu Medikamenteninteraktioune leie mat engem Beräich vu ronn der Hallschent bis iwwer nonzeg Prozent, an eng héich Quote ass net automatesch e Sécherheetsfehler: Vill ënnerbriechend Alarmer léise fir Interaktiounen aus, déi am Kontext klinesch onbedeitend sinn, oder widderhuelen en Alarm, op deen de Kliniker méi fréi am selwechten Order-Set scho reagéiert huet. E gutt ofgestëmmte System léisst dofir bewosst manner Alarmer mat méi héijem Wäert auslëssen, amplaz ze probéieren, d'Iwwerschreiwungsquote op null ze drécken. Wat fir d'Sécherheet wierklech zielt, ass d'Entwécklung iwwer d'Zäit, d'Verdeelung iwwer d'Schweregradsstufen a ob Kliniker e Grond dokumentéieren, wann se en Alarm mat héijem Schweregrad iwwerschreiwen; eng steigend Iwwerschreiwungsquote bei Interaktiounen mat héijem Schweregrad a gudder Evidenz ass eng richteg Governance-Suerg, och wann den Duerchschnëtt iwwer all Alarmer stabil ausgesäit.

## Wéi et berechent gëtt

```
Iwwerschreiwungsquote = iwwerschriwwen Alarmer / insgesamt ausgeléist Alarmer × 100

Segmentéieren no:
  - Schweregradsstuf (z. B. kontraindizéiert, major, moderat)
  - Alarmtyp (Medikamenteninteraktioun, Allergie, Duplikattherapie, Dosisberäich)
  - ob e Grond fir d'Iwwerschreiwung dokumentéiert gouf

Eng "dokumentéiert Iwwerschreiwungsquote" mierkt den Undeel vun den
Iwwerschreiwungen, déi eng opgeholl Begrënnung hunn, wat eng Governance-
Moossnam fir sech ass.
```

## Beispill

Dem Spidol säi CPOE-System léist an engem Mount 10.000 Alarmer zu Medikamenteninteraktiounen aus, vun deenen 8.700 iwwerschriwwe ginn, wat eng gesamt Iwwerschreiwungsquote vun 87% erginn. Eng Segmentéierung no Schweregrad weist, dass vun 500 "kontraindizéierten" Alarmer 60 iwwerschriwwe ginn (12%), während vun 6.000 "moderaten" Alarmer 5.700 iwwerschriwwe ginn (95%). D'Zuel fir déi moderat Stuf ass am Allgemengen an Ordnung mat de publizéierte Benchmarks a gëtt eleng net als Grond fir Suerg ugesinn; d'Zuel fir déi kontraindizéiert Stuf verdéngt eng individuell Fallbewäertung, an d'Tatsaach, dass nëmmen 340 vun de 500 Iwwerschreiwungen op där Stuf eng dokumentéiert Begrënnung hunn, ass de méi handlungsrelevante Governance-Befund.

## Datequellen a Virbehalter

Dem elektroneschen Patientenakt säi Audit-Log, oder dem CDS-Ubidder säin eegent Alarmmodul, hält all Ereegnes vun ausgeléistem Alarm an Reaktioun op den Alarm fest, dorënner ob de Kliniker Fräitext oder eng strukturéiert Begrënnung agi gouf. De Verglach vun Iwwerschreiwungsquoten tëscht Organisatiounen, oder souguer tëscht Departementer an der selwechter Organisatioun, verlaangt ze kontrolléieren, dass déi ënnerleien Alarmreegelsätz an d'Schweregradsstufen déiselwecht sinn; e Spidol mat engem aggressiv ofgestëmmte Reegelsaz weist eng méi niddreg Iwwerschreiwungsquote aus Grënn, déi näischt mam Verhalen vun de Kliniker ze dinn hunn.

## Fallen

- **Déi rau Iwwerschreiwungsquote als eenzege Sécherheetsscore behandelen**: si vermëscht gutt begrënnt Iwwerschreiwunge vun Alarmer mat wéinege Wäert mat onsécheren Iwwerschreiwunge vu wierklech geféierlechen Interaktiounen; ëmmer no Schweregrad segmentéieren.
- **Keng Erfaassung vum Iwwerschreiwungsgrond**: ouni dokumentéierte Grond ass et onméiglech ze ënnerscheeden tëscht "dësen Alarm war falsch" an "dësen Alarm war richteg an de Kliniker huet eng onsécher Entscheedung getraff", wat d'tatsächlech Ënnerscheedung ass, déi fir d'Patientesécherheet zielt.
- **Inflatioun vun den Alarmreegele mat der Zäit**: méi Alarmer derbäizesetzen, fir "sécher ze sinn", ouni déi mat wéinege Wäert ze reduzéieren, ass déi direkt Ursaach fir steigend Iwwerschreiwungsquoten an Alert Fatigue; d'Alarm-Governance soll eng reegelméisseg Iwwerpréiwung an d'Ofschafe vu schlecht performante Reegele ëmfaassen, net nëmmen d'Iwwerwaachung.
- **Quoten tëscht Systemer mat ënnerschiddlecher Ënnerbriechungsdesign vergläichen**: en ënnerbriechenden Alarm mat Hard-Stop produzéiert en anert Iwwerschreiwungsverhalen wéi e passive, net blockéierenden, dofir sinn déi zwee net direkt vergläichbar Kennzuelen.

## Quellen

- Peer-reviewed Literatur zu Alert Fatigue bei klineschen Entscheedungssystemer, wäit publizéiert a Zäitschrëften dorënner JAMIA an npj Digital Medicine
- ONC / HealthIT.gov, Health-IT-Sécherheetsrichtlinne zu klineschen Entscheedungssystemer
- Institute for Safe Medication Practices (ISMP), Richtlinne fir den Design a d'Governance vun CDS-Alarmer
