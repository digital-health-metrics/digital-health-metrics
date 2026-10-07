# Riduzione dei Giorni di Degenza

La riduzione dei giorni di degenza misura il numero totale di giorni di ricovero ospedaliero evitati spostando un episodio di cura definito (più comunemente il recupero post-chirurgico o la gestione di una condizione acuta) da una degenza tradizionale a un'alternativa supportata dal digitale, come un reparto virtuale o un programma di ospedalizzazione a domicilio. È la metrica principale di capacità per le iniziative di reparto virtuale e ospedale a domicilio, perché traduce direttamente un cambiamento del modello di cura nella valuta (la capacità di posti letto) con cui le direzioni ospedaliere e i pianificatori di sistema si confrontano concretamente.

## Perché è importante

La capacità di posti letto per ricoveri è una delle risorse più limitate e costose di qualsiasi sistema ospedaliero, e la proposta di valore centrale di un reparto virtuale o di un programma di ospedale a domicilio è che può erogare in sicurezza un livello definito di assistenza clinica senza occupare un posto letto fisico, liberando quella capacità per i pazienti che non possono essere gestiti in nessun altro modo. La riduzione dei giorni di degenza trasforma un'affermazione spesso astratta ("questo programma migliora l'assistenza") in un numero operativo concreto su cui pianificatori della capacità ospedaliera, uffici finanziari e committenti possono agire direttamente: permette di modellare se l'investimento in un programma di monitoraggio si ripaga in costi di degenza evitati, e di quanto. Poiché la riduzione dei giorni di degenza ha valore solo se la sicurezza del paziente è mantenuta, va sempre riportata insieme, mai al posto di, una metrica di esito di sicurezza (come il tasso di riammissione o di escalation al ricovero) per la stessa popolazione.

## Come si calcola

```
Riduzione dei giorni di degenza = giorni di degenza attesi con assistenza
                                  ospedaliera standard (basati sui dati
                                  storici di durata della degenza di una
                                  coorte di pazienti appaiata) − giorni di
                                  degenza effettivamente utilizzati dai
                                  pazienti nel percorso virtuale/digitale

Riportare per percorso clinico (ad es. recupero post-chirurgico,
riacutizzazione respiratoria acuta), perché la durata attesa della
degenza varia enormemente a seconda della condizione e un dato
aggregato tra percorsi non correlati non ha significato.
```

## Esempio pratico

I dati storici di un ospedale mostrano che i pazienti in recupero da una specifica procedura chirurgica elettiva hanno una durata media di degenza di 4 giorni. Un programma di reparto virtuale arruola 150 pazienti in recupero dalla stessa procedura, dimettendoli dopo una media di 1,5 giorni di degenza, con il resto del recupero monitorato a distanza. La riduzione dei giorni di degenza è (4 − 1,5) × 150 = 375 giorni di degenza nel periodo di misurazione. Questo dato va riportato insieme al tasso di escalation al ricovero a 30 giorni e al tasso di riammissione della coorte del reparto virtuale per gli stessi 150 pazienti, perché un risparmio di giorni di degenza ottenuto a costo di un tasso di escalation o di riammissione sensibilmente più alto non è il successo clinico che il dato principale suggerirebbe altrimenti.

## Fonti dei dati e avvertenze

I giorni di degenza attesi richiedono una base storica credibile, idealmente una coorte di pazienti appaiata trattata con assistenza ospedaliera standard e con caratteristiche cliniche simili (età, comorbilità, tipo di procedura, gravità) a quelle della popolazione del reparto virtuale, perché il confronto con una media storica non appaiata rischia di sovrastimare o sottostimare la riduzione reale se la coorte gestita digitalmente è sistematicamente più sana o più grave del gruppo di confronto storico. I giorni di degenza effettivamente utilizzati nel percorso digitale provengono dal sistema ammissioni-dimissioni-trasferimenti (ADT) dell'ospedale; qualsiasi escalation al ricovero durante il periodo di recupero monitorato va contata onestamente a carico del programma (come giorni di degenza utilizzati, non esclusi), perché escludere le escalation dal calcolo gonfierebbe artificialmente la riduzione apparente.

## Insidie

- **Riportare la riduzione dei giorni di degenza senza un confronto di sicurezza appaiato**: un reparto virtuale che risparmia giorni di degenza ma ha un tasso di escalation o di riammissione sensibilmente peggiore rispetto all'assistenza standard non ha dimostrato un miglioramento reale; riportare sempre entrambi insieme.
- **Usare una base storica non appaiata o obsoleta**: il confronto con una coorte storica con casistica, carico di comorbilità o epoca di pratica clinica diversi può sovrastimare o sottostimare in modo significativo il reale risparmio di giorni di degenza.
- **Escludere dal calcolo le escalation al ricovero**: un paziente monitorato virtualmente ma poi sottoposto a escalation verso un posto letto a metà del recupero deve vedere quei giorni di degenza contati a carico del programma, non scartati in silenzio dall'analisi.
- **Accorpare percorsi con durate di degenza attese molto diverse**: aggregare la riduzione dei giorni di degenza tra percorsi clinicamente non correlati (ad esempio recupero post-chirurgico e gestione respiratoria cronica) in un unico dato nasconde quale percorso specifico stia effettivamente generando il risparmio.

## Fonti

- NHS England, linee guida sui programmi di reparto virtuale e ospedale a domicilio e standard di rendicontazione dell'impatto sui giorni di degenza
- Letteratura sottoposta a revisione paritaria sui modelli di ospedale a domicilio e reparto virtuale, ad esempio studi pubblicati su JAMA Internal Medicine e npj Digital Medicine
- Institute for Healthcare Improvement (IHI), linee guida sulla gestione della capacità e sui modelli di assistenza alternativi

Vedere anche: [tasso di riammissione ospedaliera](../tasso-di-riammissione-ospedaliera/), la metrica di sicurezza che andrebbe sempre riportata insieme a qualsiasi affermazione di riduzione dei giorni di degenza per la stessa popolazione di pazienti.
