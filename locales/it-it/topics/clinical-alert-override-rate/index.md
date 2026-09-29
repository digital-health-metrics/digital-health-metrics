# Tasso di Override degli Avvisi Clinici

Il tasso di override degli avvisi clinici misura la quota di avvisi di supporto decisionale clinico (clinical decision support, CDS), come gli avvisi di interazione farmaco-farmaco, gli avvisi di allergia e i controlli sull'intervallo di dosaggio generati da un sistema di inserimento ordini computerizzato per i prestatori (CPOE), che un clinico ignora o scavalca anziché seguire. È il segnale quantitativo standard usato per rilevare e gestire l'"affaticamento da avvisi": la tendenza ben documentata dei clinici a desensibilizzarsi agli avvisi quando il volume di avvisi di scarso valore diventa eccessivo.

## Perché è importante

I tassi di override pubblicati per gli avvisi di interazione farmacologica variano comunemente da circa la metà a oltre il novanta percento, e un tasso elevato non è automaticamente un fallimento della sicurezza: molti avvisi interruttivi scattano per interazioni clinicamente insignificanti nel contesto, o ripetono un avviso a cui il clinico ha già dato seguito in precedenza nello stesso ordine, quindi un sistema ben calibrato fa scattare deliberatamente meno avvisi, ma di maggior valore, anziché cercare di portare a zero il tasso di override. Ciò che conta davvero per la sicurezza è la tendenza nel tempo, la distribuzione tra i livelli di gravità, e se i clinici documentano un motivo quando ignorano un avviso ad alta gravità; un tasso di override in aumento su interazioni ad alta gravità e ben documentate è una reale preoccupazione di governance anche quando la media su tutti gli avvisi appare stabile.

## Come si calcola

```
Tasso di override = avvisi ignorati / totale avvisi generati × 100

Segmentare per:
  - livello di gravità (ad es. controindicato, maggiore, moderato)
  - tipo di avviso (interazione farmaco-farmaco, allergia, terapia duplicata, intervallo di dosaggio)
  - se il motivo dell'override è stato documentato

Un "tasso di override documentato" traccia la quota di override che
riportano una giustificazione registrata, che è di per sé una misura di governance.
```

## Esempio pratico

Il sistema CPOE di un ospedale genera 10.000 avvisi di interazione farmaco-farmaco in un mese, di cui 8.700 vengono ignorati, dando un tasso di override complessivo dell'87%. La segmentazione per gravità mostra che, di 500 avvisi "controindicati", 60 vengono ignorati (12%), mentre di 6.000 avvisi "moderati", 5.700 vengono ignorati (95%). La cifra del livello moderato è ampiamente coerente con i benchmark pubblicati e non è di per sé motivo di preoccupazione; la cifra del livello controindicato richiede una revisione caso per caso, e il fatto che solo 340 dei 500 override a quel livello riportino un motivo documentato è la scoperta di governance più utile.

## Fonti dei dati e avvertenze

Il registro di controllo della cartella clinica elettronica, o il modulo di allerta del fornitore CDS stesso, registra ogni evento di generazione dell'avviso e di risposta, incluso se il clinico ha inserito una giustificazione in testo libero o strutturata. Confrontare i tassi di override tra organizzazioni, o persino tra reparti della stessa organizzazione, richiede di verificare che i set di regole di allerta e la stratificazione della gravità sottostanti siano gli stessi; un ospedale con un set di regole calibrato in modo aggressivo mostrerà un tasso di override inferiore per ragioni che non hanno nulla a che fare con il comportamento dei clinici.

## Insidie

- **Trattare il tasso di override grezzo come un unico punteggio di sicurezza**: confonde override ben giustificati di avvisi di scarso valore con override non sicuri di interazioni realmente pericolose; segmentare sempre per gravità.
- **Nessuna cattura del motivo dell'override**: senza un motivo documentato, è impossibile distinguere "questo avviso era sbagliato" da "questo avviso era corretto e il clinico ha fatto una scelta non sicura", che è la distinzione effettiva rilevante per la sicurezza del paziente.
- **Inflazione delle regole di allerta nel tempo**: aggiungere più avvisi "per sicurezza" senza eliminare quelli di scarso valore è la causa diretta dell'aumento dei tassi di override e dell'affaticamento da avvisi; la governance degli avvisi dovrebbe includere una revisione regolare e il ritiro delle regole poco performanti, non solo il monitoraggio.
- **Confrontare tassi tra sistemi con design di interruzione diversi**: un avviso interruttivo di tipo hard-stop produce un comportamento di override diverso rispetto a uno passivo e non bloccante, quindi i due non sono metriche direttamente confrontabili.

## Fonti

- Letteratura sottoposta a revisione paritaria sull'affaticamento da avvisi nel supporto decisionale clinico, ampiamente pubblicata su riviste tra cui JAMIA e npj Digital Medicine
- ONC / HealthIT.gov, linee guida sulla sicurezza IT sanitaria relative al supporto decisionale clinico
- Institute for Safe Medication Practices (ISMP), linee guida sulla progettazione e governance degli avvisi CDS
