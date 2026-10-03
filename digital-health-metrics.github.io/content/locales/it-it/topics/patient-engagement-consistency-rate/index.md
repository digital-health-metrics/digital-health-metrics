# Tasso di Costanza del Coinvolgimento del Paziente

Il tasso di costanza del coinvolgimento del paziente misura con quale regolarità un paziente interagisce con uno strumento digitale nel tempo, a differenza del fatto che lo abbia mai utilizzato. Un paziente che ha usato intensamente un'app nella prima settimana e poi mai più, e un paziente che usa la stessa app costantemente ogni settimana per sei mesi, possono entrambi contare come "utenti attivi" secondo una semplice metrica di utilizzo, ma rappresentano schemi di coinvolgimento molto diversi con implicazioni molto diverse per il fatto che il programma fornisca effettivamente un valore duraturo.

## Perché è importante

Molti programmi di salute digitale riportano una cifra aggregata di "utenti attivi" che nasconde una distinzione critica: il coinvolgimento iniziale guidato dalla novità in genere svanisce rapidamente, mentre un coinvolgimento sostenuto e costante è un indicatore molto più forte che uno strumento si è integrato nella routine di un paziente in un modo che probabilmente produce un beneficio clinico o comportamentale duraturo. Per i programmi che dipendono da un uso sostenuto per funzionare — promemoria farmacologici, monitoraggio delle malattie croniche, interventi di salute comportamentale — il tasso di costanza è spesso un predittore più forte dell'esito clinico rispetto a qualsiasi metrica di utilizzo una tantum, rendendolo un importante indicatore di allarme precoce per i team di prodotto che vogliono individuare un coinvolgimento in calo prima che si manifesti come un cattivo esito clinico mesi dopo.

## Come si calcola

```
Tasso di costanza del coinvolgimento del paziente = pazienti che
                                                    soddisfano la
                                                    soglia di
                                                    coinvolgimento
                                                    definita (ad
                                                    esempio utilizzo
                                                    in almeno 3
                                                    settimane su 4)
                                                    in un periodo
                                                    sostenuto /
                                                    totale utenti
                                                    attivi nello
                                                    stesso periodo
                                                    × 100

La soglia specifica (quanto spesso, su quale periodo) dovrebbe
essere definita in base alla motivazione clinica o comportamentale
dello strumento, non scelta arbitrariamente.
```

## Esempio pratico

Un'app per la salute mentale ha 1.000 utenti che hanno scaricato e usato l'app almeno una volta in un dato mese, contando come "utenti attivi" secondo una semplice metrica di utilizzo. Ma l'analisi della costanza rivela che solo 350 di questi utenti hanno soddisfatto la soglia di utilizzo dell'app in almeno tre delle quattro settimane di quel mese, dando un tasso di costanza del 35%. Il team di prodotto indaga sui 650 utenti incostanti e scopre che la maggior parte di loro ha usato intensamente l'app nella prima settimana dopo il download e poi si è praticamente fermata — un classico schema di effetto novità che sarebbe stato completamente nascosto dalla cifra aggregata di 1.000 "utenti attivi", ma che indirizza il team di prodotto a indagare cosa succede nella transizione dalla settimana uno alla settimana due.

## Fonti dei dati e avvertenze

Il calcolo della costanza richiede il tracciamento degli schemi di utilizzo nel tempo per ogni singolo utente, non solo conteggi di utilizzo aggregati, il che significa che un prodotto deve avere un'infrastruttura di tracciamento dell'utilizzo adeguata fin dall'inizio per poter calcolare questa metrica retrospettivamente. La soglia e il periodo scelti modellano drasticamente il numero risultante, quindi il confronto dei tassi di costanza tra prodotti o periodi di tempo richiede la conferma che le stesse definizioni siano state applicate in modo coerente.

## Errori comuni

- **Riportare solo l'utilizzo attivo aggregato senza costanza**: questo nasconde il coinvolgimento guidato dalla novità che svanisce rapidamente rispetto a uno schema di coinvolgimento sostenuto e clinicamente prezioso.
- **Impostare una soglia di costanza arbitraria**: una soglia scelta senza motivazione clinica o comportamentale può produrre un numero che non predice effettivamente l'esito a cui si tiene.
- **Confrontare tassi di costanza con diverse definizioni di soglia**: un "tasso di costanza" calcolato con soglie o periodi diversi non è direttamente confrontabile tra prodotti o studi.
- **Ignorare il motivo per cui il coinvolgimento diminuisce**: il tasso di costanza identifica che il coinvolgimento sta svanendo, ma non perché; è necessaria un'ulteriore indagine qualitativa per affrontare la causa sottostante.

## Fonti

- Letteratura peer-reviewed sul coinvolgimento nella salute digitale e sugli effetti novità, ad esempio studi pubblicati su Journal of Medical Internet Research (JMIR) mHealth and uHealth
- Standard del settore delle app mobili per la misurazione del coinvolgimento da organizzazioni come la Mobile Marketing Association

Vedi anche: [tasso di fidelizzazione degli utenti](../user-retention-rate/), la metrica strettamente correlata se un paziente rimane iscritto, a differenza di quanto costantemente sia coinvolto mentre è iscritto.
