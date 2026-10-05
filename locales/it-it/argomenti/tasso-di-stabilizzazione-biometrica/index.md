# Tasso di Stabilizzazione Biometrica

Il tasso di stabilizzazione biometrica misura la quota di pazienti che mantiene un parametro biometrico monitorato all'interno di un intervallo target clinico per un periodo sostenuto, a differenza del tasso di miglioramento biometrico, che misura un cambiamento una tantum rispetto al basale. Esiste perché una singola misurazione migliorata non dimostra un controllo duraturo — un paziente può mostrare un buon valore a una visita di follow-up e poi tornare indietro, ed è la stabilizzazione sostenuta nel tempo che effettivamente predice esiti clinici migliori a lungo termine.

## Perché è importante

Condizioni croniche come il diabete e l'ipertensione richiedono un controllo sostenuto, non una singola buona misurazione, per ridurre il rischio di complicanze, il che significa che un programma di salute digitale che riporta il miglioramento solo in un singolo punto temporale di follow-up può dipingere un quadro incompleto o persino fuorviante del suo impatto clinico. Il tasso di stabilizzazione biometrica costringe la valutazione a guardare l'intero percorso dei dati di un paziente piuttosto che un singolo istante, rendendolo un test più rigoroso e clinicamente più significativo di se un programma fornisca un valore duraturo. È particolarmente importante per i programmi che giustificano commissioni di abbonamento o adesione continue, poiché la proposta di valore per un coinvolgimento sostenuto dipende dalla dimostrazione di un beneficio duraturo, non solo iniziale.

## Come si calcola

```
Tasso di stabilizzazione biometrica = pazienti che mantengono il
                                      valore biometrico
                                      nell'intervallo target a
                                      tutte le misurazioni
                                      programmate in un periodo
                                      definito / totale pazienti
                                      con misurazioni programmate
                                      complete × 100

Questo richiede più punti dati per paziente nel tempo, non solo il
basale e un follow-up — tipicamente un minimo di tre misurazioni
su un periodo da sei a dodici mesi, a seconda della condizione.
```

## Esempio pratico

Un programma di gestione dell'ipertensione monitora la pressione arteriosa di 300 pazienti su un periodo di dodici mesi con misurazioni trimestrali (quattro punti dati per paziente). Di questi, 180 pazienti hanno tutte e quattro le misurazioni nell'intervallo target clinico, dando un tasso di stabilizzazione biometrica del 60%. Un'analisi separata mostra che altri 90 pazienti hanno raggiunto una buona misurazione in almeno un punto temporale ma sono scesi fuori dall'intervallo in almeno un altro punto temporale — questi pazienti conterebbero come "migliorati" secondo una semplice misurazione basale-follow-up, ma rivelano una storia notevolmente meno convincente quando si considera l'intero loro percorso, mostrando esattamente il tipo di variabilità nascosta che la metrica di stabilizzazione è progettata per catturare.

## Fonti dei dati e avvertenze

Misurare la stabilizzazione richiede misurazioni coerenti e regolarmente programmate per ogni paziente nel tempo, il che significa che i programmi con una programmazione delle misurazioni irregolare o avviata dal paziente avranno più difficoltà a calcolare questa metrica in modo affidabile, e le misurazioni mancanti devono essere gestite esplicitamente (escluse dal denominatore o trattate come un fallimento) piuttosto che ignorate silenziosamente. L'intervallo target clinico e il numero richiesto di misurazioni coerenti dovrebbero essere stabiliti in base a linee guida cliniche consolidate per la specifica condizione, non scelti retroattivamente per produrre un numero favorevole.

## Errori comuni

- **Riportare solo il miglioramento senza la stabilizzazione**: un miglioramento una tantum rispetto al basale non dimostra un controllo sostenuto; entrambe le metriche dovrebbero essere riportate insieme per un quadro completo.
- **Escludere silenziosamente i pazienti con misurazioni mancanti**: escludere dal denominatore i pazienti che hanno saltato una misurazione programmata può aumentare artificialmente il tasso di stabilizzazione se le misurazioni mancanti provengono in modo sproporzionato da pazienti che se la cavano peggio.
- **Usare un periodo di misurazione troppo breve**: richiedere solo due punti dati per dichiarare "stabilizzazione" non cattura la variabilità che un periodo più lungo rivelerebbe.
- **Applicare un intervallo target generico anziché uno clinicamente stabilito**: l'intervallo di stabilizzazione appropriato varia per condizione, età del paziente e comorbidità; un intervallo generico può sia sovrastimare sia sottostimare il vero controllo clinico.

## Fonti

- American Heart Association, linee guida per il controllo sostenuto della pressione arteriosa
- American Diabetes Association, standard per il controllo glicemico a lungo termine
- Letteratura peer-reviewed sugli esiti sostenuti della gestione digitale delle malattie croniche, ad esempio studi pubblicati su Diabetes Care e Hypertension

Vedi anche: [tasso di miglioramento biometrico](../tasso-di-miglioramento-biometrico/), la metrica correlata per l'entità del cambiamento rispetto al basale, a differenza del controllo sostenuto dopo il raggiungimento di un obiettivo.
