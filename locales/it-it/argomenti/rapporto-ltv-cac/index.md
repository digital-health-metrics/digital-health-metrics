# Rapporto LTV-CAC

Il rapporto LTV-CAC confronta il valore a vita di un paziente (il ricavo totale che un'organizzazione si aspetta di generare da un paziente nell'arco dell'intera relazione) con il costo reale per acquisire quel paziente, fornendo il test singolo più fondamentale di se un modello di business di salute digitale sia effettivamente sostenibile. Un rapporto di 3:1 — dove il valore a vita di un paziente è tre volte il costo sostenuto per acquisirlo — è la baseline sostenibile ampiamente citata nei modelli di business basati su abbonamento e per paziente.

## Perché è importante

Un'azienda può mostrare una crescita impressionante nelle nuove iscrizioni dei pazienti pur perdendo denaro su ogni singolo paziente se i costi di acquisizione superano il ricavo che ciascun paziente genera effettivamente — una situazione che può persistere inosservata a lungo se un'organizzazione monitora solo la crescita delle iscrizioni senza confrontarla con l'economia dell'acquisizione. Il rapporto LTV-CAC forza esplicitamente questo confronto, dando a investitori, consigli di amministrazione e team dirigenziali un unico numero per valutare se un'azienda in crescita si stia effettivamente muovendo verso una redditività sostenibile o stia semplicemente bruciando capitale più velocemente man mano che cresce. Poiché sia LTV che CAC richiedono un calcolo attento e onesto per essere significativi (vedi i rispettivi articoli su ciascuno), un rapporto LTV-CAC affidabile è valido solo quanto l'accuratezza dei suoi due input sottostanti.

## Come si calcola

```
Rapporto LTV-CAC = valore a vita del paziente / costo reale di
                   acquisizione del cliente

Valore a vita del paziente = ricavo medio per paziente per periodo
                             × durata media del paziente (1 /
                             tasso di abbandono)

Un rapporto di 3:1 è la baseline sostenibile ampiamente citata; un
rapporto inferiore a 1:1 indica che ogni nuovo paziente costa di
più acquisirlo di quanto genererà mai in ricavo — una posizione
immediatamente insostenibile.
```

## Esempio pratico

Un servizio in abbonamento di salute digitale genera un ricavo medio di 20 dollari per paziente al mese con un tasso di abbandono mensile del 4%, dando una durata media del paziente di 25 mesi (1 / 0,04) e un valore a vita di 500 dollari (25 mesi × 20 dollari). Se il costo reale di acquisizione del cliente dell'azienda, totalmente caricato con tutti i costi di marketing e vendita, è di 150 dollari, il rapporto LTV-CAC è 500/150 = 3,3:1 — appena sopra la baseline sostenibile ampiamente citata di 3:1. Se l'azienda avesse invece usato un CAC non totalmente caricato di soli 80 dollari (solo spesa pubblicitaria diretta), il rapporto riportato sarebbe stato un fuorviante ottimistico 6,25:1, illustrando perché l'accuratezza del calcolo del CAC sottostante sia cruciale.

## Fonti dei dati e avvertenze

Il rapporto LTV-CAC è affidabile solo quanto i suoi due input sottostanti; un CAC artificialmente basso (da una contabilità dei costi incompleta) o un LTV artificialmente alto (da ipotesi di abbandono ottimistiche) produrranno entrambi un rapporto fuorviante e favorevole. I tassi di abbandono, e quindi l'LTV, possono variare significativamente per coorte di pazienti, canale di acquisizione e tempo dall'iscrizione, il che significa che un'unica cifra LTV aggregata può nascondere una variabilità sostanziale rilevante per le decisioni su specifici canali di acquisizione o segmenti di pazienti.

## Errori comuni

- **Usare un CAC non totalmente caricato**: questo produce un rapporto artificialmente favorevole che non riflette la vera economia del business; usare sempre il CAC reale che include tutti i costi relativi all'acquisizione.
- **Usare ipotesi di abbandono ottimistiche per l'LTV**: un calcolo dell'LTV basato su un tasso di abbandono nel migliore dei casi piuttosto che sull'abbandono effettivamente osservato sovrastimerà il valore a vita.
- **Riportare un unico rapporto aggregato senza segmentazione**: il rapporto LTV-CAC può variare drasticamente per canale di acquisizione o segmento di pazienti; un rapporto aggregato sano può nascondere canali individuali insostenibili.
- **Ignorare l'orizzonte temporale di rientro**: un rapporto di 3:1 raggiunto in 5 anni è molto meno attraente dello stesso rapporto raggiunto in 1 anno, a causa del costo del capitale e del rischio; considerare sempre il periodo di rientro insieme al rapporto.

## Fonti

- Standard del settore SaaS e degli abbonamenti per il benchmarking LTV-CAC
- Letteratura peer-reviewed e di settore sull'economia di crescita della salute digitale, ad esempio analisi pubblicate da Rock Health e organizzazioni di ricerca sulla salute digitale simili

Vedi anche: [costo reale di acquisizione del cliente](../costo-reale-di-acquisizione-del-cliente/) e [rapporto di efficienza del marketing](../rapporto-di-efficienza-del-marketing/), le altre due metriche fondamentali dell'economia di crescita con cui questo rapporto viene tipicamente riportato insieme.
