# Riduzione dei Giorni di Degenza

La riduzione dei giorni di degenza misura il numero di giorni di degenza ospedaliera risparmiati spostando il recupero o il monitoraggio del paziente da un letto ospedaliero fisico a un reparto virtuale o a un programma di monitoraggio remoto. È una delle metriche di capacità e costo più dirette nella salute digitale, perché i letti ospedalieri sono una delle risorse più scarse e costose in un sistema sanitario, e ogni giorno in cui un paziente può essere curato in sicurezza a casa invece che in ospedale rappresenta sia un risparmio sui costi sia una capacità liberata per un altro paziente che ha bisogno di quel letto fisico.

## Perché è importante

Gli ospedali spesso operano con una capacità di riserva molto ridotta, il che significa che anche modeste riduzioni del fabbisogno di giorni di degenza possono produrre benefici operativi sproporzionatamente grandi — alleviare il sovraffollamento, ridurre la necessità di una costosa espansione della capacità, o liberare capacità per casi più urgenti. Per i finanziatori e i sistemi sanitari che valutano un reparto virtuale o un programma di monitoraggio remoto, la riduzione dei giorni di degenza è spesso la singola cifra più persuasiva del caso aziendale, perché si traduce in modo relativamente diretto in una cifra in euro attraverso calcoli standard di costo per giorno di degenza. Ma poiché il trasferimento di un paziente da un letto fisico a uno virtuale ha valore solo se è clinicamente sicuro, la riduzione dei giorni di degenza deve sempre essere riportata insieme a una metrica di sicurezza che confermi che i pazienti curati virtualmente non sperimentino esiti peggiori rispetto a quelli che rimangono ricoverati.

## Come si calcola

```
Riduzione dei giorni di degenza = (giorni di degenza attesi in
                                  base allo schema di cura storico
                                  per pazienti simili − giorni di
                                  degenza ospedaliera effettivi
                                  utilizzati) sommati su tutti i
                                  pazienti nel programma di
                                  reparto virtuale

Riportare sempre insieme a:
  Tasso di riammissione di sicurezza = pazienti curati virtualmente
                                       che richiedono un ricovero
                                       ospedaliero non programmato
                                       entro una finestra definita
                                       / totale pazienti curati
                                       virtualmente × 100
```

## Esempio pratico

Un programma di reparto virtuale per pazienti con polmonite cura 200 pazienti che storicamente avrebbero richiesto una degenza media di 5 giorni, sulla base di dati storici abbinati. I giorni di degenza ospedaliera effettivi utilizzati da questi 200 pazienti (per il sottoinsieme che ha richiesto un qualche tipo di ricovero fisico prima o dopo la cura virtuale) ammontano a soli 150 giorni di degenza in totale, rispetto ai 1.000 giorni di degenza attesi (200 pazienti × 5 giorni), dando una riduzione dei giorni di degenza di 850 giorni. Insieme a questa cifra, il programma riporta un tasso di riammissione di sicurezza del 4%, che si confronta favorevolmente con il tasso di riammissione storico del 6% per pazienti simili curati esclusivamente in ospedale — dando fiducia che i risparmi sui giorni di degenza non siano arrivati a scapito della sicurezza del paziente.

## Fonti dei dati e avvertenze

Stimare i "giorni di degenza attesi" richiede un gruppo di confronto storico credibile di pazienti simili curati secondo lo schema di cura tradizionale, e la qualità di questo confronto è decisiva per la credibilità di qualsiasi riduzione riportata — un gruppo di confronto scarsamente abbinato (ad esempio uno che include sistematicamente pazienti più gravi rispetto a quelli selezionati per il programma virtuale) può produrre una cifra di riduzione artificialmente gonfiata. I calcoli del costo per giorno di degenza variano significativamente tra sistemi sanitari e regioni, quindi convertire la riduzione dei giorni di degenza in una cifra in euro richiede l'uso della metodologia di contabilità dei costi propria dell'organizzazione.

## Errori comuni

- **Riportare la riduzione dei giorni di degenza senza una metrica di sicurezza**: i risparmi sui giorni di degenza ottenuti dimettendo pazienti che avevano effettivamente bisogno di assistenza ospedaliera non rappresentano un valore reale e possono danneggiare i pazienti.
- **Usare un gruppo di confronto storico scarsamente abbinato**: se i pazienti selezionati per il programma virtuale sono sistematicamente meno malati del gruppo di confronto storico, la riduzione riportata esagererà l'effetto reale del programma.
- **Ignorare i pazienti che richiedono una transizione di ritorno in ospedale**: i giorni di degenza utilizzati da pazienti che iniziano virtualmente ma successivamente richiedono un ricovero fisico devono essere inclusi nel conteggio effettivo dei giorni di degenza, non esclusi.
- **Applicare una cifra generica di costo per giorno di degenza**: i costi per giorno di degenza variano significativamente in base al tipo di reparto, alla regione e al sistema sanitario; utilizzare i dati sui costi propri dell'organizzazione specifica per calcoli finanziari credibili.

## Fonti

- NHS England, linee guida sui programmi di reparto virtuale e ospedale-a-casa
- Agency for Healthcare Research and Quality (AHRQ), ricerca sulla capacità ospedaliera e l'utilizzo dei letti
- Letteratura peer-reviewed sugli esiti dei reparti virtuali, ad esempio studi pubblicati su BMJ Open e Journal of the American Medical Association (JAMA)

Vedi anche: [tasso di riammissione ospedaliera](../tasso-di-riammissione-ospedaliera/), la metrica di sicurezza che dovrebbe sempre essere riportata insieme a qualsiasi affermazione di riduzione dei giorni di degenza per la stessa popolazione di pazienti.
