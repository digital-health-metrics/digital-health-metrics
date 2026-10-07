# Tempo di Intervento

Il tempo di intervento è il tempo trascorso da quando viene generato un allarme sanitario automatico (ad esempio un dispositivo di monitoraggio remoto che rileva un segno vitale fuori intervallo, o uno strumento di triage digitale che segnala un paziente in peggioramento) a quando un membro del team clinico avvia effettivamente una risposta. È la metrica di processo che determina se un sistema di allerta automatico mantiene la sua promessa fondamentale: individuare un problema prima di quanto avrebbe fatto un modello tradizionale di controlli programmati o di telefonate avviate dal paziente.

## Perché è importante

Un sistema di allerta che genera un avviso clinicamente corretto ma non è seguito da una risposta tempestiva non ha in realtà migliorato la sicurezza del paziente; l'intera proposta di valore del monitoraggio remoto e degli avvisi automatici poggia sul chiudere il ciclo più rapidamente di quanto farebbe il percorso alternativo non monitorato. Poiché diverse gravità di avviso giustificano una diversa urgenza di risposta, il tempo di intervento andrebbe sempre riportato per livello di gravità anziché come un'unica media, dato che una media rapida su tutti gli avvisi può nascondere una risposta pericolosamente lenta al piccolo numero di quelli più gravi. Questa metrica è anche uno dei modi più chiari e persuasivi per dimostrare il valore di un programma di monitoraggio automatico alla direzione clinica e ai pagatori, perché può essere confrontata direttamente con il precedente tempo di risposta non automatizzato della stessa organizzazione in uno scenario clinico analogo.

## Come si calcola

```
Tempo di intervento = timestamp(risposta clinica avviata) −
                      timestamp(avviso generato)

Riportare la mediana e un percentile alto (ad es. il 90°), segmentati per
livello di gravità dell'avviso, non come un'unica media complessiva.

"Risposta clinica avviata" va definita con precisione e coerenza, ad es.
un clinico che apre la cartella del paziente e agisce, oppure un tentativo
documentato di contatto in uscita, e non semplicemente un avviso
visualizzato o preso in carico senza alcuna azione.
```

## Esempio pratico

Il sistema di allerta di un programma di monitoraggio cardiaco remoto segnala 200 avvisi di aritmia ad alta gravità in un mese. Il tempo mediano dalla generazione dell'avviso all'avvio da parte di un clinico del contatto in uscita è di 12 minuti, con un 90° percentile di 38 minuti. I dati storici del precedente percorso non monitorato della stessa popolazione (dove un evento analogo emergeva in genere solo alla successiva visita ambulatoriale programmata o alla presentazione in ospedale) mostrano un tempo mediano a una qualsiasi risposta clinica misurato in giorni, non in minuti. È questo confronto, e non la cifra di 12 minuti in sé, a dimostrare il valore clinico del programma di monitoraggio; la cifra del 90° percentile è altrettanto importante, perché individua la coda degli avvisi per cui si è agito dopo oltre mezz'ora e merita una propria revisione delle cause radice.

## Fonti dei dati e avvertenze

I timestamp di generazione dell'avviso provengono dal registro degli eventi della piattaforma di monitoraggio; i timestamp della risposta clinica provengono in genere dal registro di audit della cartella clinica elettronica o dal sistema di flusso di lavoro o di gestione dei compiti del team di cura, e questi due sistemi devono essere sincronizzati con precisione nel tempo perché l'intervallo calcolato sia attendibile. La "risposta avviata" richiede una definizione rigorosa e documentata, perché un clinico che si limita a visualizzare o a scartare un avviso senza ulteriori azioni è un evento sostanzialmente diverso, e molto meno rassicurante, di uno che innesca un effettivo contatto in uscita o un intervento: confonderli farà sembrare il tempo di risposta migliore della realtà clinica. I livelli di personale notturni e nei fine settimana incidono spesso in modo significativo sul tempo di intervento, per cui questa metrica andrebbe riportata per fascia oraria e giorno della settimana dove il volume degli avvisi lo consente, anziché solo come media complessiva sulle 24 ore, 7 giorni su 7, che può mascherare una grave lacuna di risposta fuori orario.

## Insidie

- **Contare la presa in carico di un avviso come risposta**: un clinico che visualizza o scarta un avviso non equivale ad avviare una risposta clinica; definire la risposta rigorosamente come azione documentata, non come semplice presa visione passiva.
- **Riportare un unico tempo complessivo su tutte le gravità**: una media rapida su avvisi di bassa e alta gravità insieme può nascondere un tempo di risposta pericolosamente lento specificamente per gli avvisi di gravità più alta, che sono quelli che contano di più.
- **Ignorare gli effetti dei modelli di personale**: il tempo di risposta varia spesso sensibilmente con l'ora del giorno e il giorno della settimana a causa dei livelli di personale; un'unica media complessiva può nascondere una lacuna sistematica di risposta fuori orario o nel fine settimana.
- **Confrontare il tempo di intervento tra organizzazioni con soglie di allerta diverse**: un'organizzazione con una soglia di allerta più prudente (più sensibile) genererà più avvisi a bassa urgenza, il che può diluire il suo tempo medio di risposta rispetto a un'organizzazione che usa una soglia più rigida, indipendentemente dalla reale capacità di risposta clinica.

## Fonti

- NHS England, linee guida sugli standard di risposta clinica per il monitoraggio remoto e i reparti virtuali
- ONC / HealthIT.gov, linee guida sulla progettazione e sulla sicurezza dei sistemi di allerta clinica
- Letteratura sottoposta a revisione paritaria sui tempi di risposta agli avvisi del monitoraggio remoto del paziente e sugli esiti clinici, ad esempio studi pubblicati su npj Digital Medicine

Vedere anche: [tasso di tempo di attività del dispositivo](../tasso-di-tempo-di-attività-del-dispositivo/), poiché una cifra affidabile del tempo di intervento dipende dal fatto che il dispositivo di monitoraggio sottostante sia effettivamente online per generare l'avviso in primo luogo.
