# Tasso di Stabilizzazione Biometrica

Il tasso di stabilizzazione biometrica è la quota di pazienti arruolati che raggiungono e mantengono un intervallo target clinicamente definito per una misura biometrica (più comunemente la pressione arteriosa al di sotto di una soglia come 130/80 mmHg) tramite un dispositivo di monitoraggio connesso, per un periodo prolungato anziché in un singolo momento. Si distingue dal tasso di miglioramento biometrico (vedere quell'argomento): il miglioramento misura l'entità di una variazione rispetto alla base di partenza, mentre la stabilizzazione misura se un paziente viene mantenuto in modo affidabile entro un intervallo sicuro una volta avviati il trattamento o il monitoraggio, che è l'esito più importante per i pazienti già vicini al target o già in trattamento.

## Perché è importante

Per una larga parte dei pazienti dei programmi per malattie croniche, in particolare l'ipertensione, dove gli obiettivi pressori delle linee guida sono ben stabiliti e direttamente collegati al rischio cardiovascolare, l'obiettivo clinico non è un miglioramento una tantum ma un controllo sostenuto, e un paziente che oscilla dentro e fuori dall'intervallo target presenta un rischio sostanzialmente diverso da uno che migliora una volta e rimane lì. I dispositivi connessi (bracciali per la pressione con connessione cellulare, monitor continui del glucosio) permettono di misurare la stabilizzazione in modo continuo anziché solo durante le visite in ambulatorio, facendo emergere i pazienti le cui letture in ambulatorio sembrano controllate ma le cui letture a domicilio sono instabili, uno schema noto come ipertensione mascherata che la sola misurazione periodica di persona non può rilevare. Riportare il tasso di stabilizzazione anziché solo un'istantanea "a target" costringe un programma a confrontarsi con la costanza, e non solo con la frequenza, con cui mantiene i pazienti nell'intervallo.

## Come si calcola

```
Tasso di stabilizzazione biometrica = pazienti con ≥ 80% delle letture
                                      entro l'intervallo target nel
                                      periodo di misurazione / pazienti
                                      con un numero minimo di letture
                                      valide in quel periodo × 100

Esempi di soglie:
  Pressione arteriosa — target < 130/80 mmHg (o la soglia applicabile
                        delle linee guida cliniche per il profilo di
                        rischio del paziente)
  Glucosio            — intervallo target secondo le indicazioni sul
                        monitoraggio continuo del glucosio, riportato
                        come "tempo nell'intervallo"

Prima di includere un paziente nel denominatore va fissata una soglia
minima di frequenza delle letture (ad es. almeno 3 letture a settimana),
per evitare che i pazienti che misurano di rado appaiano
artificialmente stabili.
```

## Esempio pratico

Un programma di telemonitoraggio dell'ipertensione arruola 600 pazienti con bracciali per la pressione con connessione cellulare, da cui ci si aspetta almeno 3 letture a settimana. Di questi, 540 raggiungono la soglia minima di frequenza delle letture nell'arco di 3 mesi di misurazione e sono inclusi nel denominatore. Dei 540, 350 hanno almeno l'80% delle letture sotto 130/80 mmHg, il che dà un tasso di stabilizzazione biometrica di 350 / 540 × 100 = 65%. I 60 pazienti esclusi per letture insufficienti sono riportati separatamente come lacuna di completezza dei dati, non inclusi né nel numeratore né nel gruppo dei "non stabilizzati", perché il loro reale stato di controllo è realmente sconosciuto, non scarso.

## Fonti dei dati e avvertenze

Le letture provengono direttamente dal flusso di dati del dispositivo connesso, che è più oggettivo e molto più frequente della misurazione in ambulatorio, ma errori di posizionamento e di tecnica (un bracciale di misura errata o posizionato in modo scorretto) possono introdurre una distorsione sistematica che una singola lettura di validazione in ambulatorio non necessariamente coglie. La scelta dell'intervallo target dovrebbe seguire la linea guida clinica attuale applicabile al profilo di rischio e alle comorbilità specifici del paziente, anziché un'unica soglia universale, perché gli obiettivi delle linee guida differiscono per età, funzione renale e rischio cardiovascolare del paziente. Un paziente con bassa frequenza di letture non dovrebbe mai essere contato in silenzio come "stabile" per impostazione predefinita; escluderlo dal denominatore con una segnalazione trasparente dell'esclusione è più onesto che contarlo come controllato o non controllato sulla base di dati troppo scarsi.

## Insidie

- **Trattare una singola lettura nell'intervallo come stabilizzazione**: la stabilizzazione riguarda un controllo sostenuto in un periodo definito, non un'istantanea; richiedere sempre una proporzione minima di letture nell'intervallo nel periodo, non una singola misurazione idonea.
- **Escludere in silenzio i pazienti che misurano di rado senza segnalarlo**: i pazienti che effettuano raramente le letture non sono automaticamente stabili né instabili; escluderli in modo trasparente dal denominatore e riportare il tasso di esclusione come metrica separata di completezza dei dati.
- **Ignorare gli errori di calibrazione e di tecnica del dispositivo**: un bracciale mal posizionato o un dispositivo non calibrato può falsare sistematicamente le letture in una direzione, cosa che un tasso di stabilizzazione calcolato ingenuamente dai dati grezzi del dispositivo non coglie senza una validazione periodica.
- **Usare un unico intervallo target universale per tutti i pazienti**: gli obiettivi delle linee guida cliniche variano in base al profilo di rischio e alle comorbilità del paziente; applicare un'unica soglia generalizzata a una popolazione clinicamente eterogenea classificherà in modo errato alcuni pazienti come stabilizzati o non stabilizzati rispetto al loro effettivo target individualizzato.

## Fonti

- American Heart Association (AHA) / American College of Cardiology (ACC), obiettivi pressori delle linee guida e indicazioni sul monitoraggio domiciliare della pressione arteriosa
- International Diabetes Federation e American Diabetes Association (ADA), indicazioni di consenso sul "tempo nell'intervallo" del monitoraggio continuo del glucosio
- Letteratura sottoposta a revisione paritaria sul monitoraggio biometrico a distanza e sul controllo sostenuto delle condizioni, ad esempio studi pubblicati su npj Digital Medicine

Vedere anche: [tasso di miglioramento biometrico](../tasso-di-miglioramento-biometrico/), la metrica correlata dell'entità della variazione rispetto alla base di partenza, distinta dal controllo sostenuto una volta raggiunto un target.
