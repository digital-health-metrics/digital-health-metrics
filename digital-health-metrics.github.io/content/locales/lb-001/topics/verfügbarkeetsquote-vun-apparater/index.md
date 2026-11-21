# Verfügbarkeetsquote vun Apparater

D'Verfügbarkeetsquote vun Apparater (Device Uptime Rate) mierkt den Undeel vun der geplangter Iwwerwaachungszäit, an där e verbonnenen Gesondheetsapparat — e Sensor fir d'Fernüberwaachung vu Patienten, e Wearable oder eng Telehealth-Eenheet doheem — tatsächlech online ass, Daten iwwerdréit a korrekt funktionéiert, amplaz offline, getrennt oder defekt ze sinn. Et ass déi fundamental Infrastrukturkennzuel ënner all Programm fir Fernüberwaachung oder verbonne Apparater: E klineschen Alarm, en biometreschen Trend oder eng Engagement-Zuel, déi vun engem Apparat berechent gëtt, dee dacks offline war, ass nëmmen esou zouverlässeg wéi d'Konnektivitéit dohannert.

## Firwat et wichteg ass

De ganze klineschen Wäertverspriechen vun engem Programm fir d'Fernüberwaachung vu Patienten hänkt vun enger kontinuéierlecher oder bal kontinuéierlecher Datenerfaassung of; en Apparat mat schlechter Verfügbarkeet erstellt stëll Lücken am klineschen Bild vun engem Patient, déi mat Stabilitéit kënne verwiesselt ginn (kee Alarm well keng Daten, net well sech näischt geännert huet) amplaz korrekt als Iwwerwaachungsfehler erkannt ze ginn. D'Verfügbarkeet vun Apparater ass och en Fréihindikator fir d'Programmkäschten an d'Patienteerfarung: En Apparat, dee dacks d'Verbindung verléiert, generéiert Support-Uriff, Frustratioun bei de Patienten a méiglecherweis onnéideg klinesch Kontaktopnam, fir ze préifen, ob eng Datelück en echt klinescht Ereegnes oder einfach en technesche Feeler reflektéiert. Well Ausfäll vun der Verfügbarkeet dacks Infrastruktur zouzeschreiwe sinn, déi d'Organisatioun kontrolléiert (e schlecht konfiguréierte Mobilfunk-Gateway, schwaach WLAN-Ofdeckung am Heem vum Patient, eng schlecht ënnerhale Flott vun Apparater) amplaz dem Patient, gehéiert dës Kennzuel kloer zum Ubidder an zum technesche Betribsteam, an net wahlweis an d'Kennzuele vum Patienteengagement agerechent.

## Wéi et berechent gëtt

```
Verfügbarkeetsquote vun Apparater = Zäit, an där den Apparat online war a
                                    gülteg Daten iwwerdroen huet /
                                    gesamt geplangt Iwwerwaachungszäit × 100

Ursaache vun Ausfallzäit segmentéieren, wou d'Donnéeë et erlaben:
  Feeler um Apparat   (Batterie, Hardwarefeeler, Firmware-Crash)
  Konnektivitéitsfeeler (Ënnerbriechung vu Mobilfunk/WLAN/VPN)
  Faktore vum Patient (Apparat ausgeschalt, ausser Reechwäit geréckelt)

Ënnerstëtzend technesch Parameter niewent der Verfügbarkeet verfolgen:
  Duerchschnëttlech CPU-Auslaaschtung, Späicherbenotzung a Batterieniveau
  pro Apparat
  Mëttel Zäit tëscht Konnektivitéitsfeeler
  Mëttel Zäit fir sech no enger Ënnerbriechung erëm ze verbannen
```

## Beispill

E Programm fir d'kardiaalt Fernüberwaachung setzt 1.000 verbonnen Apparater an, vun deenen all erwaart gëtt, kontinuéierlech ze iwwerdroen. Iwwer e 30-Deeg-Mount (720 geplangt Iwwerwaachungsstonnen pro Apparat) hält d'Flott kombinéiert 705.600 tatsächlech Online-Stonnen géint geplangt 720.000 Stonnen fest, wat eng flottewäit Verfügbarkeetsquote vun Apparater vun 705.600 / 720.000 × 100 = 98% erginn. D'Ursaachenanalyse vun de 14.400 Ausfallstonnen weist 60%, déi sech op Ënnerbriechungen vun der Mobilfunk-Konnektivitéit zréckféiere loossen, konzentréiert an enger spezifescher ländlecher Servicereegioun, 25% op Apparater mat alternde Batterien, déi fir den Ersatz markéiert sinn, an 15% op Patienten, déi hiren Apparat temporär ausgeschalt hunn. Dës Opschlësselung weist op zwou kloer, ënnerschiddlech Interventiounen — eng Konnektivitéitsléisung fir déi betraffe Regioun an e proaktive Programm fir de Batterieersatz —, déi eng eenzeg aggregéiert Verfügbarkeetszuel net ënnerscheet hätt.

## Datequellen a Virbehalter

D'Verfügbarkeetsdaten kommen aus dem eegene Apparatemanagement- an Telemetriesystem vum Apparathersteller oder Plattformubidder, dat Verbindungs- an Heartbeat-Eventer pro Apparat protokolléiert; d'Organisatioun soll genee bestätegen, wat den Ubidder als "online" zielt (en Apparat ka sech selwer als mat engem Netzwierk verbonnen mellen, wärend et net fäerdeg bréngt, gülteg klinesch Daten ze iwwerdroen, wat fir klinesch Zwecker als Ausfallzäit soll zielen, och wann dem Ubidder säin eegent Dashboard et als verbonnen mellt). D'Verfügbarkeet soll pro Apparatekohort oder Geografie gemellt ginn, wou de Volume et erlaabt, well d'Qualitéit vun der Konnektivitéit dacks geografesch gruppéiert ass (ländlech Mobilfunkofdeckung, ältere WLAN a Gebaier) amplaz gläichméisseg iwwer eng Patientepopulatioun verdeelt, an eng aggregéiert flottewäit Zuel kann e schwéiert, behiewbart regionaalt Problem verstoppen.

## Fallen

- **Netzwierkverbindung mat gülteger Datenübertragung vermëschen**: en Apparat kann um Dashboard vum Ubidder "verbonnen" erscheinen, wärend et net fäerdeg bréngt, brauchbar klinesch Daten ze iwwerdroen; d'Verfügbarkeet géint de tatsächleche Empfang vu gülteg Daten definéieren a moossen, net géint déi rau Netzwierkkonnektivitéit eleng.
- **Nëmmen e flottewäiten Duerchschnëtt mellen**: dat ka e schwéiere, geografesch oder apparatekohort-spezifesche Problem vun der Ausfallzäit verstoppen, dee en zilgeriichten Duerchschnëtt opdecke géif an dee eng spezifesch, behiewbar Léisung huet.
- **D'Ursaach vun der Ausfallzäit net ënnerscheeden**: Ausfälle um Apparat, bei der Konnektivitéit a beim Patient verlaangen all eng komplett ënnerschiddlech Interventioun; eng eenzeg Ausfallprozentzuel ouni Segmentéierung no Ursaach léisst sech net a Handlung ëmsetzen.
- **Eng Datelück standardméisseg als klinesch Stabilitéit behandelen**: en Datestroum, deen aus engem offline Apparat feelt, soll eng technesch Konnektivitéitspréifung ausléisen an net roueg als "keng Neiegkeet ass gutt Neiegkeet" fir dem Patient säi klineschen Zoustand interpretéiert ginn.

## Quellen

- Continua Design Guidelines / Personal Connected Health Alliance, technesch Interoperabilitéitsstandarde fir verbonne Gesondheetsapparater
- ONC / HealthIT.gov, Richtlinne fir d'Ëmsetze vu Programmer fir d'Fernüberwaachung vu Patienten an technesch Ufuerderungen
- Peer-reviewed Literatur zur Zouverlässegkeet vun Apparater an der Datekompletttheet bei der Fernüberwaachung vu Patienten, zum Beispill Studien, déi am npj Digital Medicine publizéiert goufen

Kuckt och: [Genauegkeet vun der Triage-Weiderleedung](../genauegkeet-vun-der-triage-weiderleedung/), déi dovun ofhänkt, komplett, zouverlässeg Apparatedaten ze kréien, fir iwwerhaapt eng korrekt Triage-Entscheedung ze treffen.
