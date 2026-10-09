# Rapporto LTV-CAC

Il rapporto LTV-CAC confronta il valore del cliente nel tempo (LTV), ossia il ricavo o il margine totale che un'organizzazione si aspetta di ottenere da un paziente o cliente nell'intera durata della sua relazione con il prodotto, con il costo reale di acquisizione di quel cliente (vedere il costo reale di acquisizione del cliente). È la singola metrica più importante di economia unitaria per giudicare se la crescita di un'organizzazione di salute digitale è finanziariamente sostenibile, perché una base clienti in crescita acquisita in perdita non è un segno di salute, per quanto positiva appaia la curva di crescita.

## Perché è importante

Un'organizzazione di salute digitale può far crescere con costanza la propria base di utenti distruggendo in silenzio valore su ogni nuovo cliente, se il costo di acquisizione supera il valore nel tempo; il rapporto LTV-CAC è la metrica che lo rende visibile in un modo che il tasso di crescita o il solo numero di clienti non possono. Un rapporto di 3:1 (valore nel tempo pari ad almeno tre volte il costo di acquisizione) è il parametro di base ampiamente citato per un'attività sostenibile ad abbonamento o a ricavi ricorrenti, perché lascia un margine sufficiente a coprire i costi operativi oltre all'acquisizione e a generare comunque un rendimento; un rapporto inferiore a 1:1 significa che l'organizzazione perde denaro su ogni cliente acquisito, e un rapporto molto superiore a 3:1 (ad esempio 10:1 o più) può in realtà indicare un sottoinvestimento nella crescita, perché suggerisce che l'organizzazione potrebbe acquisire in modo redditizio più clienti di quanti ne acquisisca ora. Investitori, consigli di amministrazione e pagatori che valutano la sostenibilità finanziaria di un'azienda di salute digitale trattano questo rapporto come uno dei primi numeri che chiedono.

## Come si calcola

```
LTV = ricavo (o margine) medio per cliente per periodo × durata media
      della vita del cliente nella stessa unità di periodo

Rapporto LTV-CAC = LTV / CAC reale

Un rapporto di 3:1 è la base sostenibile comunemente citata; inferiore a
1:1 indica che l'organizzazione perde denaro sull'acquisizione; molto
superiore a 3:1 (ad es. 10:1+) può indicare un sottoinvestimento nella
crescita.
```

## Esempio pratico

Un servizio di abbonamento di salute digitale genera un ricavo mensile medio di 40 USD per paziente, e il paziente medio rimane abbonato per 18 mesi, con un LTV di 40 USD × 18 = 720 USD. Il CAC reale di questo servizio (vedere l'approccio dell'esempio pratico di quell'argomento) è calcolato in 180 USD per paziente acquisito. Il rapporto LTV-CAC è 720 USD / 180 USD = 4:1, comodamente sopra la base di sostenibilità di 3:1. Se il CAC reale fosse calcolato usando solo il costo riportato dalla piattaforma pubblicitaria (120 USD, prima di aggiungere compensi di agenzia e lavoro di accettazione), il rapporto apparirebbe come 6:1, un quadro dell'economia unitaria sensibilmente più favorevole e fuorviante rispetto al vero 4:1.

## Fonti dei dati e avvertenze

L'LTV dipende da un'ipotesi sulla durata media della vita del cliente, a sua volta derivata dai dati di fidelizzazione o di abbandono dell'organizzazione (vedere il tasso di fidelizzazione degli utenti): un'azienda con un alto abbandono ha una vita media effettiva più breve e quindi un LTV più basso, anche se il ricavo per cliente per periodo appare sano. Poiché l'LTV è una stima prospettica e non un fatto storico osservato, andrebbe ricalcolato regolarmente man mano che si accumulano dati di fidelizzazione e rivisto se le ipotesi di abbandono si rivelano errate, anziché essere fissato una volta e lasciato obsoleto. Usare il CAC riportato dalla piattaforma anziché il CAC reale in questo rapporto è uno dei modi più comuni in cui un'organizzazione può convincersi che la propria economia unitaria sia più sana di quanto sia in realtà, perché un CAC sottostimato gonfia meccanicamente il rapporto.

## Insidie

- **Usare il CAC riportato dalla piattaforma anziché il CAC reale**: ciò gonfia meccanicamente il rapporto e può far sembrare sostenibile una strategia di acquisizione insostenibile; usare sempre la cifra del CAC reale pienamente caricato.
- **Usare un'ipotesi di durata media della vita del cliente obsoleta o ottimistica**: un LTV calcolato da una curva di fidelizzazione superata non rifletterà il comportamento di abbandono attuale, soprattutto dopo una modifica di prodotto, prezzo o mercato che sposta la fidelizzazione.
- **Trattare un rapporto molto alto come inequivocabilmente positivo**: un rapporto molto superiore a 3:1 può segnalare un sottoinvestimento nella crescita anziché un'efficienza eccezionale, perché implica che l'organizzazione potrebbe probabilmente acquisire in modo redditizio più clienti di quanti ne acquisisca oggi.
- **Calcolare un unico rapporto complessivo su segmenti di clienti molto diversi**: un segmento con ricavi alti e abbandono basso può mascherare un altro segmento con una cattiva economia unitaria; calcolare il rapporto per segmento significativo (ad es. per canale di acquisizione o linea di prodotto) dove il volume lo consente.

## Fonti

- Letteratura di settore e sottoposta a revisione paritaria sull'economia unitaria di abbonamenti e ricavi ricorrenti, quadri di benchmarking largamente utilizzati da organizzazioni di venture capital e di ricerca sulle metriche SaaS
- Healthcare Financial Management Association (HFMA), linee guida sulle metriche di sostenibilità finanziaria per le organizzazioni di salute digitale
- Rock Health e organizzazioni analoghe di ricerca di mercato sulla salute digitale, benchmarking di settore sull'economia unitaria della salute digitale

Vedere anche: [costo reale di acquisizione del cliente](../costo-reale-di-acquisizione-del-cliente/) e [rapporto di efficienza del marketing](../rapporto-di-efficienza-del-marketing/), le altre due metriche centrali di economia della crescita insieme alle quali questo rapporto viene tipicamente riportato.
