# Punteggio Net Promoter del Paziente

Il Punteggio Net Promoter del Paziente (NPS) è la metrica di soddisfazione a domanda singola ampiamente utilizzata, e ampiamente criticata, che chiede ai pazienti quanto probabilmente raccomanderebbero un prodotto o servizio di salute digitale a un amico o collega, su una scala da 0 a 10. Le risposte sono raggruppate in detrattori (0-6), passivi (7-8) e promotori (9-10), e il punteggio è calcolato come la percentuale di promotori meno la percentuale di detrattori.

## Perché è importante

L'NPS è attraente perché è semplice da somministrare, rapido da rispondere per i pazienti, e fornisce un unico numero confrontabile che può essere monitorato nel tempo e confrontato con altre organizzazioni e settori. Fornisce un polso ampio e facilmente comprensibile del sentimento complessivo dei pazienti, utile per individuare grandi tendenze e comunicare con la dirigenza che desidera un unico numero piuttosto che un dashboard complesso. Ma la sua semplicità è anche la sua debolezza: poiché si basa su una singola domanda ipotetica sul comportamento futuro (raccomandazione) piuttosto che sulla qualità effettivamente vissuta, non si correla sempre in modo affidabile con gli esiti clinici o persino con l'uso continuato effettivo, il che significa che dovrebbe essere trattato come un segnale tra molti, non l'unico metro di successo di un prodotto.

## Come si calcola

```
NPS del paziente = (% promotori [punteggio 9-10] − % detrattori
                   [punteggio 0-6]) × 100

Il risultato è un numero tra -100 e +100, non una percentuale,
sebbene a volte venga erroneamente riportato come tale.

Riportare sempre insieme a:
  Tasso di risposta = sondaggi NPS completati / totale sondaggi
                      NPS inviati × 100
```

## Esempio pratico

Un programma di telemedicina invia un sondaggio NPS a 1.000 pazienti dopo la loro consultazione, e 400 rispondono (tasso di risposta 40%). Di queste 400 risposte, 220 sono promotori (55%), 120 sono passivi (30%), e 60 sono detrattori (15%), dando un NPS di 55 − 15 = 40. Questo sembra essere un punteggio forte, ma il team del programma nota che il tasso di risposta del 40% significa che non sentono il parere del 60% dei pazienti, e un'analisi di follow-up su un campione di non rispondenti tramite telefono rivela un sentimento leggermente meno positivo tra loro — un promemoria che l'NPS misura solo il sentimento di chi sceglie di rispondere, non necessariamente l'intera popolazione di pazienti.

## Fonti dei dati e avvertenze

I dati NPS vengono tipicamente raccolti tramite un breve sondaggio inviato elettronicamente dopo un'interazione, e il tasso di risposta è un fattore contestuale critico ma spesso sotto-riportato — un NPS calcolato da un tasso di risposta del 10% è molto meno affidabile come rappresentazione del sentimento complessivo della popolazione di pazienti rispetto a uno calcolato da un tasso di risposta del 60%. L'NPS non dovrebbe mai essere utilizzato come l'unico metro di successo del prodotto, poiché non misura direttamente gli esiti clinici, l'uso continuato effettivo o specifici problemi di usabilità che potrebbero causare insoddisfazione.

## Errori comuni

- **Riportare l'NPS senza il tasso di risposta**: un punteggio basato su un basso tasso di risposta può essere fortemente distorto e dovrebbe essere interpretato con notevole cautela.
- **Trattare l'NPS come una percentuale**: l'NPS è un numero tra -100 e +100, non una percentuale, e non dovrebbe essere confrontato direttamente con metriche basate su percentuali.
- **Usare l'NPS come unica metrica di successo**: l'NPS misura la probabilità ipotetica di raccomandazione, non gli esiti clinici o il comportamento di utilizzo effettivo; combinare con altre metriche per un quadro completo.
- **Confrontare l'NPS tra settori senza contesto**: le aspettative dei pazienti e i benchmark in sanità differiscono dalla tecnologia di consumo o dal commercio al dettaglio; confrontare solo con benchmark sanitari appropriati.

## Fonti

- Bain & Company, sviluppo originale e metodologia del Net Promoter Score
- Press Ganey e organizzazioni simili di misurazione dell'esperienza del paziente in sanità, dati di benchmark specifici per la sanità
- Letteratura peer-reviewed che critica e contestualizza l'NPS in contesti sanitari, ad esempio studi pubblicati su Journal of Medical Internet Research (JMIR)

Vedi anche: [punteggio System Usability Scale](../system-usability-scale-score/), una metrica correlata ma distinta riportata dal paziente che misura l'usabilità specifica del software piuttosto che la soddisfazione e la fedeltà generali.
