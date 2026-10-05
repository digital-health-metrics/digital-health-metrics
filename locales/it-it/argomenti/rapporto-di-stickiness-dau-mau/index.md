# Rapporto di Stickiness DAU/MAU

Il rapporto di stickiness DAU/MAU è la metrica standard di analisi del prodotto per l'intensità del coinvolgimento in tutta la base utenti, calcolata come il rapporto tra utenti attivi giornalieri e utenti attivi mensili. Risponde a una domanda diversa dalla fidelizzazione: invece di chiedere se gli utenti rimangono iscritti nel tempo, chiede quanto spesso gli utenti che sono iscritti utilizzino effettivamente il prodotto in un dato mese.

## Perché è importante

Un alto rapporto DAU/MAU indica che un prodotto è diventato parte della routine quotidiana di un utente, mentre un rapporto basso indica che gli utenti, sebbene tecnicamente "attivi" durante un mese, lo utilizzano solo occasionalmente. Per i prodotti di salute digitale che dipendono da un'interazione frequente per fornire valore — tracciamento quotidiano dei farmaci, monitoraggio continuo dei sintomi, stimoli quotidiani di salute comportamentale — questo rapporto è un indicatore diretto di se il prodotto raggiunga effettivamente la frequenza di utilizzo che il suo modello clinico presuppone. Un prodotto progettato per l'uso quotidiano ma che raggiunge un rapporto DAU/MAU equivalente all'uso di poche volte al mese probabilmente non sta fornendo il valore clinico che il suo design presuppone, indipendentemente da quanti utenti rimangano tecnicamente "iscritti".

## Come si calcola

```
Rapporto di stickiness DAU/MAU = media utenti attivi giornalieri
                                 in un mese / utenti attivi
                                 mensili nello stesso mese

Espresso come percentuale: un rapporto del 50% indica che l'utente
attivo mensile medio utilizza il prodotto per circa metà dei
giorni del mese; un rapporto del 10% indica un utilizzo di circa 3
giorni al mese.
```

## Esempio pratico

Un'app digitale di gestione del diabete progettata per la registrazione quotidiana del glucosio ha 5.000 utenti attivi mensili in un dato mese, e il numero medio di utenti attivi giornalieri durante quel mese è 1.500, dando un rapporto di stickiness DAU/MAU del 30%. Poiché l'app è progettata sulla base di un modello clinico che presuppone una registrazione quotidiana per fornire approfondimenti tempestivi, un rapporto di stickiness del 30% (equivalente a circa 9 giorni di utilizzo al mese) solleva la questione se il prodotto stia effettivamente fornendo il suo valore clinico previsto per la maggior parte degli utenti, anche se il suo numero aggregato di utenti attivi mensili sembra sano. Questo ha spinto il team di prodotto a indagare quali specifici punti di attrito impediscano l'uso quotidiano.

## Fonti dei dati e avvertenze

Il rapporto DAU/MAU è facile da calcolare da dati di analisi del prodotto standard, ma il suo benchmark appropriato varia enormemente in base al tipo di prodotto — un'app che crea abitudini quotidiane dovrebbe mirare a un rapporto molto più alto rispetto a un prodotto progettato per un uso occasionale, come uno per prenotare rare visite specialistiche. Confrontare un rapporto DAU/MAU tra prodotti con frequenze di utilizzo previste fondamentalmente diverse è quindi insignificante senza tenere conto di questo contesto.

## Errori comuni

- **Confrontare DAU/MAU tra prodotti con diverse frequenze di utilizzo previste**: un prodotto progettato per un uso raro avrà naturalmente un rapporto più basso di uno progettato per un uso quotidiano, senza che questo indichi prestazioni peggiori.
- **Trattare un rapporto più alto come sempre migliore**: per alcuni tipi di prodotto, una frequenza di utilizzo molto alta può indicare un problema (ad esempio dipendenza eccessiva) piuttosto che un coinvolgimento sano.
- **Ignorare la tendenza MAU sottostante**: un rapporto di stickiness stabile o in miglioramento con un numero MAU aggregato in calo può comunque indicare un prodotto in contrazione.
- **Usare questa metrica isolatamente dalla fidelizzazione**: la stickiness misura l'intensità del coinvolgimento tra gli utenti attuali, non se i nuovi utenti continuino a iscriversi; entrambe le metriche sono necessarie per un quadro completo.

## Fonti

- Standard del settore delle app mobili e dell'analisi di prodotto per la misurazione del coinvolgimento
- Letteratura peer-reviewed e di settore sul coinvolgimento nella salute digitale, ad esempio analisi pubblicate da Rock Health e organizzazioni di ricerca sulla salute digitale simili

Vedi anche: [tasso di fidelizzazione degli utenti](../tasso-di-fidelizzazione-degli-utenti/), la metrica strettamente correlata se un paziente rimane iscritto, a differenza di quanto costantemente sia coinvolto mentre è iscritto.
