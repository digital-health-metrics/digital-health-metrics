# Tasso di Tempo di Attività del Dispositivo

Il tasso di tempo di attività del dispositivo misura la quota di tempo di monitoraggio programmato in cui un dispositivo sanitario connesso (un sensore di monitoraggio remoto del paziente, un dispositivo indossabile o un'unità domiciliare di telemedicina) è effettivamente online, trasmette dati e funziona correttamente, anziché essere offline, disconnesso o malfunzionante. È la metrica infrastrutturale fondamentale alla base di ogni programma di monitoraggio remoto o di dispositivi connessi: un avviso clinico, un andamento biometrico o una cifra di coinvolgimento calcolati da un dispositivo spesso offline sono affidabili solo quanto la connettività che li sostiene.

## Perché è importante

L'intera proposta di valore clinico di un programma di monitoraggio remoto del paziente dipende dall'acquisizione continua o quasi continua dei dati; un dispositivo con scarso tempo di attività crea lacune silenziose nel quadro clinico del paziente che possono essere scambiate per stabilità (nessun avviso perché non ci sono dati, non perché nulla sia cambiato) anziché correttamente identificate come un guasto del monitoraggio. Il tempo di attività del dispositivo è anche un indicatore anticipatore dei costi del programma e dell'esperienza del paziente: un dispositivo che perde spesso la connessione genera chiamate di supporto, frustrazione dei pazienti e potenzialmente contatti clinici non necessari per verificare se una lacuna di dati rifletta un vero evento clinico o semplicemente un guasto tecnico. Poiché i guasti di tempo di attività sono frequentemente attribuibili a infrastrutture controllate dall'organizzazione (un gateway cellulare configurato male, una copertura Wi-Fi debole a casa del paziente, un parco dispositivi mantenuto poco), anziché al paziente, questa metrica appartiene pienamente al fornitore e al team di operazioni tecniche e non va accorpata indiscriminatamente alle metriche di coinvolgimento del paziente.

## Come si calcola

```
Tasso di tempo di attività del dispositivo = tempo in cui il dispositivo
                                            era online e trasmetteva dati
                                            validi / tempo totale di
                                            monitoraggio programmato × 100

Segmentare le cause radice dei tempi di inattività, dove i dati lo
consentono:
  Guasto lato dispositivo   (batteria, guasto hardware, crash del firmware)
  Guasto di connettività    (interruzione cellulare/Wi-Fi/VPN)
  Fattori lato paziente     (dispositivo spento, spostato fuori portata)

Parametri tecnici di supporto da monitorare insieme al tempo di attività:
  Utilizzo medio della CPU, uso di memoria e livello di batteria per
  dispositivo
  Tempo medio tra i guasti di connettività
  Tempo medio di riconnessione dopo un'interruzione
```

## Esempio pratico

Un programma di monitoraggio cardiaco remoto distribuisce 1.000 dispositivi connessi, da ciascuno dei quali ci si aspetta una trasmissione continua. In un mese di 30 giorni (720 ore di monitoraggio programmate per dispositivo), il parco registra un totale di 705.600 ore online effettive a fronte di 720.000 ore programmate, per un tasso di tempo di attività dell'intero parco di 705.600 / 720.000 × 100 = 98%. L'analisi delle cause radice delle 14.400 ore di inattività mostra che il 60% è attribuibile a interruzioni della connettività cellulare concentrate in una specifica regione di servizio rurale, il 25% a dispositivi con batterie invecchiate segnalati per la sostituzione e il 15% a pazienti che spengono temporaneamente il proprio dispositivo. Questa ripartizione indica due interventi chiari e diversi, una correzione della connettività per la regione interessata e un programma proattivo di sostituzione delle batterie, che una singola cifra aggregata di tempo di attività non avrebbe distinto.

## Fonti dei dati e avvertenze

I dati sul tempo di attività provengono dal sistema di gestione dei dispositivi e di telemetria del produttore del dispositivo o del fornitore della piattaforma, che registra eventi di connessione e di heartbeat per dispositivo; l'organizzazione dovrebbe confermare esattamente che cosa il fornitore conti come "online" (un dispositivo può dichiararsi connesso a una rete senza riuscire a trasmettere dati clinici validi, il che a fini clinici dovrebbe contare come inattività anche se il cruscotto del fornitore lo riporta come connesso). Il tempo di attività va riportato per coorte di dispositivi o per area geografica dove il volume lo consente, perché la qualità della connettività è spesso raggruppata geograficamente (copertura cellulare rurale, Wi-Fi di edifici più vecchi) anziché distribuita uniformemente tra la popolazione di pazienti, e una cifra aggregata dell'intero parco può mascherare un grave problema regionale risolvibile.

## Insidie

- **Confondere la connessione di rete con la trasmissione di dati validi**: un dispositivo può apparire "connesso" sul cruscotto del fornitore pur non trasmettendo dati clinici utilizzabili; definire e misurare il tempo di attività rispetto all'effettiva ricezione di dati validi, non solo alla connettività di rete grezza.
- **Riportare solo una media dell'intero parco**: ciò può nascondere un grave problema di inattività specifico di una zona geografica o di una coorte di dispositivi che una media mirata rivelerebbe e per cui esiste una correzione specifica e realizzabile.
- **Non distinguere la causa radice dell'inattività**: l'inattività lato dispositivo, di connettività e lato paziente richiedono ciascuna un intervento completamente diverso; una singola percentuale di inattività senza segmentazione delle cause radice non è utilizzabile.
- **Trattare di default una lacuna di dati come stabilità clinica**: un flusso di dati mancante da un dispositivo offline dovrebbe innescare un controllo della connettività tecnica, non essere interpretato in silenzio come "nessuna notizia, buona notizia" per lo stato clinico del paziente.

## Fonti

- Continua Design Guidelines / Personal Connected Health Alliance, standard tecnici di interoperabilità per i dispositivi sanitari connessi
- ONC / HealthIT.gov, linee guida sull'implementazione dei programmi di monitoraggio remoto del paziente e sui requisiti tecnici
- Letteratura sottoposta a revisione paritaria sull'affidabilità dei dispositivi di monitoraggio remoto del paziente e sulla completezza dei dati, ad esempio studi pubblicati su npj Digital Medicine

Vedere anche: [accuratezza dell'instradamento del triage](../accuratezza-dellinstradamento-del-triage/), che dipende dalla ricezione di dati completi e affidabili dei dispositivi per poter prendere in primo luogo una decisione di triage corretta.
