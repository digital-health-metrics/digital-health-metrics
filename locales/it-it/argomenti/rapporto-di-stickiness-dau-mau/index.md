# Rapporto di Stickiness DAU/MAU

Il rapporto di stickiness DAU/MAU confronta gli utenti attivi giornalieri (DAU) con gli utenti attivi mensili (MAU), la stessa misura di base utilizzata per gli utenti attivi settimanali (WAU) rispetto ai MAU, per esprimere quale quota della più ampia base di utenti di un prodotto lo utilizza in un dato giorno. È la misura standard di analisi di prodotto dell'intensità del coinvolgimento, distinta dal fatto che un utente sia fidelizzato o meno (vedere il tasso di fidelizzazione degli utenti) o da quanto costantemente un paziente arruolato specifico si impegni nel tempo (vedere il tasso di costanza del coinvolgimento del paziente): la stickiness descrive il ritmo d'uso a livello di popolazione, non il comportamento di un singolo individuo.

## Perché è importante

Due prodotti di salute digitale possono riportare un numero identico di utenti attivi mensili pur avendo un'intensità di coinvolgimento sottostante molto diversa: in uno la maggior parte di quegli utenti apre l'app quasi ogni giorno, nell'altro la maggior parte la apre una volta al mese, poco prima che altrimenti verrebbe contata come inattiva. Il rapporto di stickiness DAU/MAU distingue queste due situazioni molto diverse con un'unica cifra di riferimento semplice e ben compresa, che i team di prodotto e clinici possono monitorare nel tempo e confrontare con intervalli noti del settore: un rapporto intorno al 20% è un parametro ragionevole comunemente citato per molte app di consumo, mentre i prodotti basati su un'abitudine quotidiana (un diario alimentare o dei sintomi che il paziente dovrebbe usare ogni giorno) vanno giudicati con una soglia significativamente più alta. Poiché la stickiness è sensibile a come si definisce "attivo", è più utile come andamento nel tempo per un singolo prodotto e come confronto con prodotti costruiti per un modello d'uso simile, anziché come parametro assoluto trasversale ai settori.

## Come si calcola

```
Rapporto di stickiness DAU/MAU = utenti attivi giornalieri medi nel
                                 periodo / utenti attivi mensili nello
                                 stesso periodo × 100

Il rapporto WAU/MAU (settimanale, stesso principio) è una variante più
morbida, più adatta ai prodotti che ci si aspetta vengano usati alcune
volte a settimana anziché ogni giorno.

"Attivo" deve essere definito in modo preciso e coerente (ad es. un'azione
idonea completata, non un'apertura passiva dell'app) sia nel numeratore
sia nel denominatore.
```

## Esempio pratico

Un'app digitale per la gestione del diabete ha 10.000 utenti attivi mensili in un dato mese, definiti come qualsiasi utente che completa almeno un'azione idonea (una registrazione della glicemia, un pasto o la spunta di un farmaco) in quel mese. Mediando i conteggi giornalieri degli utenti attivi nei 30 giorni di quel mese si ottiene un DAU medio di 2.200. Il rapporto di stickiness DAU/MAU è 2.200 / 10.000 × 100 = 22%, il che indica che in un giorno tipico circa il 22% della base mensile di utenti dell'app la utilizza: una cifra ragionevole per uno strumento per condizioni croniche basato su un'abitudine quotidiana, anche se il team di prodotto vorrebbe vederla crescere nel tempo man mano che il comportamento ideale (la registrazione quotidiana) diventa più abituale per i pazienti arruolati.

## Fonti dei dati e avvertenze

DAU, WAU e MAU sono tutti calcolati dagli stessi registri di eventi sottostanti, usando un'unica definizione coerente di evento "attivo idoneo" in ogni finestra; cambiare tale definizione tra il calcolo del numeratore e del denominatore (ad esempio contando qualsiasi apertura dell'app per i DAU ma solo un'azione completata per i MAU) produrrà un rapporto distorto che non riflette la reale intensità del coinvolgimento. Il parametro di riferimento appropriato per la stickiness dipende molto dal modello d'uso previsto del prodotto: uno strumento pensato per essere usato una volta a settimana (un controllo settimanale dei sintomi) avrà e dovrà avere un rapporto DAU/MAU inferiore rispetto a uno strumento pensato per l'uso quotidiano (un'app compagna di un monitor continuo del glucosio), per cui la stickiness va sempre interpretata rispetto alla cadenza d'uso prevista dal prodotto stesso, non a un unico obiettivo universale.

## Insidie

- **Confrontare i rapporti di stickiness tra prodotti con diversa frequenza d'uso prevista**: uno strumento a uso settimanale mostrerà strutturalmente un rapporto DAU/MAU più basso di uno a uso quotidiano anche se entrambi funzionano esattamente come previsto per i rispettivi casi d'uso; confrontare con la cadenza prevista del prodotto stesso, non con un unico obiettivo universale.
- **Usare definizioni di attività incoerenti tra numeratore e denominatore**: ciò può produrre un rapporto di stickiness che non riflette un coinvolgimento genuino e che non può essere confrontato in modo significativo nel tempo o con altri prodotti.
- **Trattare un rapporto di stickiness in crescita come inequivocabilmente positivo senza verificare l'andamento complessivo dei MAU**: un rapporto in crescita dovuto a una base di utenti centrale più abituale ma in contrazione mentre i MAU complessivi calano è una situazione molto diversa, e più preoccupante, di una dovuta a un coinvolgimento quotidiano realmente crescente in una base di utenti stabile o in crescita.
- **Ignorare gli effetti del giorno della settimana e stagionali sui DAU**: i DAU possono variare sensibilmente per giorno della settimana (giorni feriali rispetto al fine settimana) o stagione per molti prodotti di salute; mediare i DAU su un periodo che copra un ciclo naturale completo anziché su una finestra breve che potrebbe risultare distorta.

## Fonti

- Letteratura di settore e sottoposta a revisione paritaria sulle metriche di coinvolgimento dei prodotti mobili e digitali, quadri di benchmarking largamente utilizzati dalle piattaforme di analisi mobile
- Digital Therapeutics Alliance, linee guida di buone pratiche sulla misurazione del coinvolgimento per le terapie digitali
- Letteratura sottoposta a revisione paritaria sulla misurazione del coinvolgimento nella salute digitale, ad esempio studi pubblicati sul Journal of Medical Internet Research (JMIR mHealth and uHealth)

Vedere anche: [tasso di fidelizzazione degli utenti](../tasso-di-fidelizzazione-degli-utenti/) e [tasso di costanza del coinvolgimento del paziente](../tasso-di-costanza-del-coinvolgimento-del-paziente/), le due metriche di coinvolgimento correlate con cui questo rapporto viene più spesso confuso.
