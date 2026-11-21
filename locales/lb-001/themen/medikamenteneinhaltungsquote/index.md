# Medikamenteneinhaltungsquote

D'Medikamenteneinhaltungsquote (Medication Adherence Rate) mierkt, wéi wäit e Patient en verschriwwent Medikament esou hëlt, wéi et verordnet gouf, meeschtens ausgedréckt als Undeel vun den Deeg an engem definéierten Zäitraum, an deenen e Patient säi Medikament wéi verschriwwen zur Verfügung hat. Et ass eng vun de folgereichste digitale Gesondheetskennzuelen, well Net-Adhärenz heefeg ass, mat der richteger Ënnerstëtzung gréisstendeels vermeidbar ass an direkt mat méi schlechte klineschen Resultater a méi héije nofollgende Käschte verbonne ass — genee dës Lück, déi Erënnerungs-Apps, smart Pëllefläschen a Nolooss-Impulser vun der Apdikt zouzemaachen hëllefen.

## Firwat et wichteg ass

D'Net-Adhärenz bei Medikamenter géint chronesch Krankheeten gëtt vun ëffentleche Gesondheetsbehörden op bis zu 50% fir verschidde Krankheeten geschat, an et ass eng féierend vermeidbar Ursaach vu vermeidbare Spidolsopenthalter, Krankheetsprogressioun a Behandlungsversoen, dat dem Medikament selwer amplaz enger inkonsequenter Notzung falsch zougeschriwwe gëtt. Digital Adhärenz-Tools gëtt et speziell, fir dës Lück ze schléissen, sou dass fir all Programm mat engem Medikamentekomponent d'Adhärenzquote normalerweis déi eenzeg entscheedungsrelevantst Kennzuel ass: Si läit kausal viru biometrescher Verbesserung, Widderopnam an de meeschte aneren klineschen Resultatkennzuelen, déi e Programm soss kéint mellen. E Programm, dat Engagement oder Zefriddenheet verbessert, ouni d'Adhärenz ze beweegen, huet wahrscheinlech nach keen plausibelen Mechanismus fir e klineschen Notzen opgewisen.

## Wéi et berechent gëtt

```
Proportion of Days Covered (PDC) = Deeg am Zäitraum mat Medikament zur
                                    Hand (baséiert op Deeg Virrot vun den
                                    Ofgaben) / Deeg am Moosszäitraum × 100

Medication Possession Ratio (MPR) = gesamt Deeg Virrot, déi am Zäitraum
                                    kritt goufen / Deeg am Zäitraum × 100
                                    (kann bei fréie Nofëllungen iwwer 100%
                                    leien; PDC gëtt aus dësem Grond allgemeng
                                    bevorzugt)

E Patient gëtt typescherweis bei enger PDC-Schwell vun ≥ 80% als
"adhärent" klasséiert, no der wäit benotzter Konventioun vu
Qualitéitsmoossnamen.
```

## Beispill

E Patient kritt iwwer e Moosszäitraum vun 90 Deeg e chronescht Medikament deeglech verschriwwen. D'Apdikt-Ofgabe-Records weisen, dass de Patient genuch Medikament kritt huet, fir 76 vun deene 90 Deeg ze decken, mat zwou Lücken: eng Lück vun 9 Deeg, nodeems en ausgaangen ass, ier eng Nofëllung koum, an eng Lück vu 5 Deeg ronderëm eng Spidolsopnam. D'PDC ass 76 / 90 × 100 = 84%, wat déi konventionell Adhärenzschwell vun 80% iwwerschreit. Wann déiselwecht Lücke mat MPR gemooss gi wieren, baséiert op Deeg Virrot, déi ausgeliwwert goufen, amplaz Deeg, déi tatsächlech gedeckt waren, kéint eng fréi Nofëllung anzwousch am Zäitraum d'Verhältnis iwwer 100% dreiwen, wat illustréiert, firwat PDC d'konservativst a allgemeng bevorzugt Moossnam ass.

## Datequellen a Virbehalter

Ofrechnungs- oder Ofgabedaten vun der Apdikt (entweder vun engem Pharmacy Benefit Manager oder engem verbonnenen Apdikensystem) sinn déi Standardquell, well se reflektéieren, wat e Patient tatsächlech kritt huet, amplaz wat him verschriwwe gouf; Rezeptdaten eleng iwwerschätzen d'Adhärenz, well se net bestätegen, dass de Patient d'Medikament jee ofgeholl huet. Digital Adhärenz-Tools — smart Pëllefläschen, schlockbar Sensoren, verbonne smart Inhalatoren, déi all Betätegung bei Atmungskrankheeten wéi Asthma a COPD protokolléieren, an App-baséiert Check-ins — bidden Daten mat méi héijer Opléisung doriwwer, ob eng Dosis tatsächlech geholl gouf, net nëmme kritt, ginn awer vun enger klenger, potenziell net representativer Minoritéit vu Patienten benotzt, sou dass d'Vermëschung vu vum Apparat bestätegter Adhärenz mat ofrechnungsbaséierter PDC iwwer eng Populatioun Suergfalt bei der Interpretatioun verlaangt. D'Adhärenz soll iwwer en Zäitraum gemooss ginn, deen laang genuch ass, fir eenzel verpasst Dosen auszeglätten, awer kuerz genuch, fir e bedeitende Réckgang z'erkennen, ier en klineschen Schued verursaacht — 90-Deeg-rollend Fënstere sinn bei chronesche Medikamenter heefeg.

## Fallen

- **MPR benotzen ouni ze soen, dass se iwwer 100% kënne goen**: onerklärt Verhältnisser iwwer 100% duerch fréi Nofëllungen oder Hamsteren maachen de Verglach tëscht Patienten an Zäiträim onzouverlässeg, ausser PDC gëtt benotzt oder d'Verhältnis gëtt explizit begrenzt.
- **Rezept- oder Bestellungsdaten als Beweis fir Adhärenz behandelen**: e verschriwwent oder un d'Apdikt geschéckt Rezept seet näischt doriwwer, ob de Patient d'Medikament ofgeholl oder geholl huet; nëmmen Ofgab- oder Apparatdaten schléissen dës Lück.
- **Eng eenzeg Adhärenzschwell wahllos iwwer all Krankheeten uwenden**: déi klinesch Konsequenz, 20% vun den Dosen ze verpassen, variéiert immens no Medikamenteklass (z. B. Antikoagulantien géint Statine), sou dass eng eenzeg 80%-Schwell, déi universell benotzt gëtt, dat klinescht Risiko fir verschidde Medikamenter ënner- oder iwwerschätzen kann.
- **Medikamenteweessel an Ofbriecher ignoréieren**: e Patient, dee klinesch a korrekt op en anert Medikament ëmgestallt gëtt, kann als groussen Adhärenzréckgang bei dem ursprénglechen Medikament erschéngen, wann de Wiessel net an der Berechnung berécksiichtegt gëtt.

## Quellen

- Pharmacy Quality Alliance (PQA), Spezifikatioune vun der Proportion-of-Days-Covered-Moossnam
- Centers for Medicare & Medicaid Services (CMS), Star Ratings Moossnamen zur Medikamenteneinhaltung
- Peer-reviewed Literatur zur Moossung vun der Medikamenteneinhaltung an zu digitalen Adhärenz-Interventiounen, zum Beispill Studien, déi am Journal of Managed Care & Specialty Pharmacy publizéiert goufen

Kuckt och: [Biometresch Verbesserungsquote](../biometresch-verbesserungsquote/), vun där d'Adhärenz bei Medikamenter géint chronesch Krankheeten e primären Treiber ass.
