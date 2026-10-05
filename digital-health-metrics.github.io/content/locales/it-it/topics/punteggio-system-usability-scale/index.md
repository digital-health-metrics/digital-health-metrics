# Punteggio System Usability Scale

Il System Usability Scale (SUS) è un questionario standardizzato di 10 domande che quantifica quanto sia effettivamente utilizzabile un software, con risposte fornite su una scala di accordo a 5 punti che vengono combinate in un unico punteggio da 0 a 100. A differenza del Net Promoter Score, che misura la soddisfazione generale e la probabilità di raccomandazione, il SUS è specificamente progettato per misurare l'usabilità — quanto facilmente ed efficacemente un utente possa effettivamente svolgere compiti con un software.

## Perché è importante

I problemi di usabilità sono una delle cause più comuni e correggibili per cui i prodotti di salute digitale non raggiungono l'impatto clinico previsto: un'app tecnicamente impeccabile ma confusa da navigare non raggiungerà il comportamento di utilizzo che il suo modello clinico presuppone, indipendentemente da quanto sia buono l'intervento sanitario sottostante. Il SUS fornisce uno strumento validato, standardizzato e facile da somministrare per quantificare l'usabilità, consentendo ai team di prodotto di monitorare i miglioramenti di usabilità nel tempo e confrontarsi con benchmark di settore ampiamente pubblicati piuttosto che affidarsi a valutazioni interne soggettive. Poiché il SUS è stato utilizzato su migliaia di prodotti software nel corso di diversi decenni, ha uno dei set di dati di benchmark disponibili più ricchi tra qualsiasi metrica di usabilità, rendendo il punteggio significativo in un contesto più ampio piuttosto che solo confrontabile con se stesso nel tempo.

## Come si calcola

```
Il punteggio SUS viene calcolato da 10 domande standardizzate,
formulate alternativamente in modo positivo e negativo, ciascuna
risposta su una scala di accordo a 5 punti (fortemente in
disaccordo a fortemente d'accordo):

Per le domande con numero dispari (formulate positivamente):
  contributo al punteggio = (risposta dell'utente − 1)
Per le domande con numero pari (formulate negativamente):
  contributo al punteggio = (5 − risposta dell'utente)

La somma di tutti i 10 contributi al punteggio viene moltiplicata
per 2,5 per produrre un punteggio da 0 a 100.

Un punteggio SUS superiore a 68 è ampiamente considerato superiore
alla media in base al set di dati di benchmark di settore
accumulato, sebbene l'obiettivo appropriato possa variare in base
al tipo di prodotto.
```

## Esempio pratico

Un sistema sanitario testa una nuova interfaccia del portale pazienti con 50 pazienti che completano ciascuno il questionario SUS dopo aver svolto un insieme standardizzato di compiti (prenotare un appuntamento, visualizzare i risultati di laboratorio, inviare un messaggio al proprio medico curante). Il punteggio SUS medio tra i 50 pazienti è 72, che è superiore alla media ampiamente citata di 68, dando al team fiducia che l'interfaccia sia ragionevolmente utilizzabile. Ma la scomposizione del punteggio per tipo di compito rivela che i pazienti che hanno faticato specificamente con la funzione di messaggistica hanno dato punteggi individuali significativamente più bassi, indirizzando il team verso una parte specifica dell'interfaccia da migliorare piuttosto che semplicemente riportare il numero medio aggregato.

## Fonti dei dati e avvertenze

I dati SUS vengono raccolti tramite il questionario standardizzato di 10 domande somministrato immediatamente dopo che un utente ha svolto un compito o un insieme di compiti rappresentativi con il software, e la metodologia di punteggio è fissa e ben consolidata, rendendola confrontabile tra studi e organizzazioni, a condizione che venga utilizzato lo stesso questionario standardizzato. Poiché il SUS fornisce un unico punteggio aggregato, può nascondere quali compiti specifici o elementi dell'interfaccia stiano causando un punteggio basso; un follow-up qualitativo o un'analisi specifica per compito sono spesso necessari per rendere il risultato utilizzabile.

## Errori comuni

- **Modificare la formulazione del questionario**: la validità e la confrontabilità del SUS con i benchmark di settore dipendono dall'uso della formulazione standardizzata delle domande; personalizzare le domande compromette la confrontabilità.
- **Trattare un unico punteggio aggregato come completamente diagnostico**: un punteggio SUS indica se esiste un problema di usabilità, ma non dove; è necessario un follow-up specifico per compito o qualitativo per identificare la causa specifica.
- **Confrontare punteggi SUS tra compiti utente molto diversi**: un punteggio ottenuto da un compito complesso multi-fase non è direttamente confrontabile con uno ottenuto da un compito semplice a fase unica.
- **Ignorare la dimensione e la composizione del campione**: un punteggio SUS basato su un campione di utenti piccolo o non rappresentativo non può essere generalizzato in modo affidabile all'intera popolazione di utenti.

## Fonti

- Brooke, J., "SUS: A quick and dirty usability scale", lo sviluppo originale del metodo
- Sauro, J., "A Practical Guide to the System Usability Scale", dati di benchmark di settore accumulati
- Letteratura peer-reviewed sull'applicazione del SUS nella valutazione del software sanitario, ad esempio studi pubblicati su Journal of Medical Internet Research (JMIR) e JMIR Human Factors

Vedi anche: [punteggio Net Promoter del paziente](../punteggio-net-promoter-del-paziente/), una metrica correlata ma distinta riportata dal paziente che misura la soddisfazione e la fedeltà piuttosto che l'usabilità specifica del software.
