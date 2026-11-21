# Duerchlafzäit vun digitalen Iwwerweisungen

D'Duerchlafzäit vun digitalen Iwwerweisungen (Digital Referral Turnaround Time) ass d'Zäit, déi tëscht der Ofgab vun enger elektronescher Iwwerweisung duerch en iwwerweisende Kliniker a senger Triage an entweder Unhuele, Ofleenung oder Buchung duerch de empfänkleche Service verfléisst. Et ass eng Prozess- (Flux-)Kennzuel, ënnerscheet vun der gesamter Waardezäit vum Patient, an et ass eng vun de kloersten Plazen, wou eng Ännerung vum digitale System (strukturéiert E-Iwwerweisung, bildbaséiert Triage, standardiséiert Iwwerweisungsformulairen) kann weisen, eng operationell Zuel ze beweegen amplaz nëmmen e Zefriddenheetsscore.

## Firwat et wichteg ass

E luesen oder staark variabelen Triage-Schrëtt füügt Verzögerung derbäi, ier e Patient iwwerhaapt op eng klinesch Waardelëscht kënnt, an well dës Verzögerung geschitt, ier eng klinesch Betreiung unfänkt, ass et reng Prozessverschwendung, déi digital Tools gutt kënne beseitegen. Iwwerweisungssystemer, déi e "Zréck zum Iwwerweiser"-Zyklus fir feelend Informatiounen erzwéngen, kreéieren Nobesserungsschleifen, déi liicht ze iwwersinn sinn, wann d'Duerchlafzäit nëmmen op Iwwerweisungen gemooss gëtt, déi beim éischte Mol propper duerchlafen. Wou e Service strukturéiert digital Iwwerweisungsformulairen, Pflichtfelder oder bildbaséiert Triage agefouert huet (zum Beispill an der Teledermatologie), ass d'Duerchlafzäit normalerweis déi iwwerzeegendst eenzeg Kennzuel, fir de Virdeel ze demonstréieren, well si virun an no der Ännerung mat der selwechter Instrumentéierung moossbar ass.

## Wéi et berechent gëtt

```
Duerchlafzäit = Zäitstempel (Triage-Entscheedung) − Zäitstempel (Ofgab vun der Iwwerweisung)

Median an en héijt Perzentil (dacks dat 90.) mellen, net nëmmen de
Mëttelwäert, well d'Verdeelung duerch zréckgeschéckt oder komplex
Iwwerweisungen staark no riets verzerrt ass.

Zäite fir Ënnerstadien berécksiichtegen, wou de System se erfaasst:
  Ofgab → vum Service kritt
  Kritt → Triage-Entscheedung
  Triage-Entscheedung → gebuchte Rendez-vous (wou relevant)
```

## Beispill

D'Audit-Trail vun engem E-Iwwerweisungssystem weist eng mediane Zäit vun der Ofgab bis zur Triage-Entscheedung vun 1,8 Deeg iwwer all Spezialitéiten, mat enger Zäit vum 90. Perzentil vu 6 Deeg, haaptsächlech gedriwwe vun Iwwerweisungen, déi wéinst feelender klinescher Informatioun un den Iwwerweiser zréckgeschéckt ginn. E Teledermatologie-Wee mat bildbaséierter Triage op der selwechter Plattform erreecht eng median Duerchlafzäit vu 4 Stonnen an e 90. Perzentil vun 1 Dag, well e Foto an eng strukturéiert Anamnese bal ëmmer fir d'Triage-Entscheedung duergoen, ouni weider Korrespondenz ze brauchen.

## Datequellen a Virbehalter

D'Audit-Trail vum E-Iwwerweisungs- oder Iwwerweisungsmanagementsystem selwer ass déi primär Quell, mat den Zäitstempele vun der Ofgab an der Entscheedung; Organisatiounen sollen bestätegen, ob d'"Auer" pauséiert, wärend eng Iwwerweisung fir méi Informatioun zréckgeschéckt gëtt, oder kontinuéierlech weiderleeft, well déi zwou Definitiounen wesentlech ënnerschiddlech Zuele fir deeselwechte ënnerleienden Prozess produzéieren. D'Duerchlafzäit soll konsequent a Kalennerzäit oder a Geschäftsstonnen gemellt ginn, well Weekend- a Feierdagseffekter soss Verglaicher tëscht Servicer mat ënnerschiddleche Aarbechtsmuster verzerre kënnen.

## Fallen

- **Nëmmen "propper" Iwwerweisunge moossen**: Ofgelehnt oder zréckgeschéckt Iwwerweisungen aus der Berechnung auszeschléissen verstoppt d'Belaaschtung duerch Nobesserung, déi digital Tools dacks speziell solle reduzéieren.
- **De Mëttelwäert amplaz vum Median a vun de Perzentile mellen**: eng kleng Zuel vu laang lafenden, zréckgeschéckten Iwwerweisunge dréckt de Mëttelwäert wäit iwwer dat, wat e typesche Patient tatsächlech erlieft.
- **Duerchlafzäit mat der gesamter Waardezäit verwiesselen**: d'Duerchlafzäit deckt nëmmen den Triage-Schrëtt of; dem Patient seng ganz Erfarung enthält och déi nofollgend klinesch Waardelëscht, wat eng separat Kennzuel ass, déi vu separate Kapazitéitsbeschränkunge regéiert gëtt.
- **Ënnerstadien net ënnerscheeden**: e Service, deen nëmmen d'End-zu-End-Zäit mierkt, ka net soen, ob eng lues Zuel duerch Iwwerweiser verursaacht gëtt, déi onkomplett Informatioun ofginn, duerch d'Triage-Kapazitéit vum empfänkleche Service, oder duerch béides.

## Quellen

- NHS England, Statistike vum e-Referral Service (e-RS) a Servicespezifikatioune
- Peer-reviewed Literatur zu elektroneschen Iwwerweisungsmanagementsystemer an digitale Triage-Weeër, dorënner Teledermatologie
- ONC / HealthIT.gov, Richtlinne fir Interoperabilitéit a Koordinatioun vun Iwwerweisungen
