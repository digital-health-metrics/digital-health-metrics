# Tempo di Intervento

Il tempo di intervento misura quanto rapidamente un team clinico risponde a un avviso sanitario automatizzato generato da un sistema di monitoraggio remoto, dal momento in cui l'avviso viene attivato al momento in cui un clinico effettivamente agisce su di esso. Esiste perché il valore di un dispositivo di monitoraggio remoto dipende interamente dal fatto che qualcuno risponda effettivamente in modo tempestivo agli avvisi che genera — un dispositivo che rileva perfettamente una condizione in peggioramento non fornisce alcun beneficio clinico se l'avviso rimane non affrontato per ore o giorni.

## Perché è importante

I programmi di monitoraggio remoto vengono spesso commercializzati in base alla loro capacità di rilevare precocemente condizioni dei pazienti in peggioramento, ma il rilevamento è solo metà della proposta di valore; l'altra metà è una risposta clinica tempestiva. Un programma con un'eccellente precisione dei sensori ma un tempo di risposta agli avvisi scadente non fornisce esiti clinici migliori rispetto a nessun monitoraggio, e può persino creare un falso senso di sicurezza che ritarda altre forme di assistenza. Il tempo di intervento è quindi una delle misure più dirette di se un programma di monitoraggio remoto funzioni effettivamente come un sistema clinico completo, non solo come uno strumento di raccolta dati, ed è particolarmente importante da monitorare man mano che i programmi di monitoraggio si espandono e il personale clinico responsabile della risposta agli avvisi diventa responsabile di più pazienti.

## Come si calcola

```
Tempo di intervento = timestamp(azione clinica) −
                      timestamp(attivazione avviso), aggregato
                      come mediana e 90° percentile su tutti gli
                      avvisi in un periodo

Riportare sempre segmentato per gravità dell'avviso:
  Tempo mediano di intervento per avvisi ad alta gravità
  Tempo mediano di intervento per avvisi a bassa gravità

Usare la mediana e i percentili invece della media, poiché i dati
sul tempo di risposta sono tipicamente fortemente asimmetrici a
causa di occasionali ritardi molto lunghi.
```

## Esempio pratico

Un programma di reparto virtuale per il monitoraggio remoto di pazienti con insufficienza cardiaca genera avvisi quando il peso o la saturazione di ossigeno di un paziente supera una soglia definita. In un mese, il tempo mediano di intervento per tutti gli avvisi è di 45 minuti, che sembra ragionevole, ma la segmentazione per gravità rivela che gli avvisi ad alta gravità (che indicano un potenziale peggioramento acuto) hanno un tempo di risposta mediano di 38 minuti, mentre il 90° percentile per gli avvisi ad alta gravità è di 3 ore — il che significa che una quota significativa degli avvisi più critici rimane non affrontata per un periodo preoccupantemente lungo. Questo ha spinto il programma a riorganizzare il proprio personale per garantire una copertura dedicata per il triage degli avvisi ad alta gravità invece di affidarsi a un unico team di risposta condiviso.

## Fonti dei dati e avvertenze

Il tempo di intervento richiede timestamp accurati sia per l'attivazione dell'avviso sia per la successiva azione clinica, il che significa che il sistema di flusso di lavoro clinico deve registrare in modo affidabile il timestamp dell'azione, non solo il momento in cui è stato generato l'avviso — se i clinici agiscono su un avviso ma dimenticano di registrarlo tempestivamente nel sistema, il tempo di intervento misurato mostrerà artificialmente un tempo più lungo del tempo di risposta effettivo. La soglia appropriata per una risposta "tempestiva" dovrebbe essere stabilita in base alla gravità clinica di ciò che viene monitorato, non applicata genericamente a tutti i tipi di avviso.

## Errori comuni

- **Riportare solo la mediana senza gli avvisi in coda**: un buon numero mediano può nascondere una quota significativa di avvisi con tempi di risposta pericolosamente lunghi; riportare sempre il 90° o 95° percentile insieme alla mediana.
- **Usare la media invece della mediana e dei percentili**: i dati sul tempo di risposta sono tipicamente fortemente asimmetrici, rendendo la media fuorviante come numero riassuntivo.
- **Ignorare la segmentazione per gravità dell'avviso**: un tempo di risposta accettabile per un avviso a bassa gravità può essere pericolosamente lento per un avviso ad alta gravità; non dovrebbero mai essere aggregati senza segmentazione.
- **Affidarsi a timestamp di azione inaffidabili**: se i clinici non registrano costantemente quando hanno effettivamente agito su un avviso, la metrica misurata non rifletterà il vero tempo di risposta.

## Fonti

- American Heart Association, linee guida per il monitoraggio remoto dei pazienti con insufficienza cardiaca
- The Joint Commission, standard per i sistemi di gestione degli avvisi clinici
- Letteratura peer-reviewed sulla risposta agli avvisi di monitoraggio remoto, ad esempio studi pubblicati su Journal of the American College of Cardiology e Circulation: Heart Failure

Vedi anche: [tasso di tempo di attività del dispositivo](../tasso-di-tempo-di-attività-del-dispositivo/), poiché questo dipende dalla ricezione di dati del dispositivo completi e affidabili per poter prendere una decisione di triage corretta.
