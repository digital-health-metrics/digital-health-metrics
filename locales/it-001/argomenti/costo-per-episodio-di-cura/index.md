# Costo per Episodio di Cura

Il costo per episodio di cura è il costo totale sostenuto per trattare un episodio clinico definito (ad esempio una protesi d'anca e il relativo recupero, oppure un periodo di gestione del diabete), confrontato con una coorte storica di riferimento trattata senza l'intervento digitale in valutazione. È l'unità standard di confronto finanziario nell'assistenza basata sul valore, perché coglie il quadro economico completo di un episodio anziché una singola voce di costo isolata, ed è la metrica che pagatori e sistemi sanitari richiedono più spesso prima di accettare di finanziare un programma di salute digitale su larga scala.

## Perché è importante

I contratti di assistenza basata sul valore pagano sempre più gli esiti e gli episodi anziché le singole prestazioni, il che significa che l'argomentazione finanziaria di un programma di salute digitale deve essere presentata nella stessa valuta: il costo totale per episodio confrontato con quanto costava lo stesso tipo di episodio prima che l'intervento esistesse. Un programma che riduce una categoria di costo (ad esempio meno visite di controllo di persona) aumentandone un'altra (più costi per dispositivi, più tempo del personale clinico di monitoraggio) non ha necessariamente ridotto il costo totale per episodio, e solo una contabilizzazione completa dei costi a livello di episodio coglie questo compromesso; guardare a una singola voce di costo isolata rischia una conclusione fuorviante in entrambe le direzioni. Poiché le definizioni di episodio e i periodi di riferimento possono essere costruiti in modi che favoriscono una particolare conclusione, questa metrica richiede più trasparenza metodologica della maggior parte delle altre di questo libro per essere credibile agli occhi di un pagatore o di un ufficio finanziario scettici.

## Come si calcola

```
Costo per episodio di cura = costo totale di tutta l'assistenza erogata
                             entro una finestra di episodio definita
                             (tutti i contesti di cura, tutte le categorie
                             di costo) / numero di episodi

Confrontare con il costo per episodio di una coorte storica di riferimento
per lo stesso tipo di episodio clinicamente definito, aggiustato per la
casistica (età, comorbilità, gravità) tra le due coorti.

Includere, oltre ai costi clinici diretti: costi della piattaforma
tecnologica e dei dispositivi, tempo aggiuntivo del personale clinico e
qualsiasi assistenza che ha cambiato contesto (ad es. dal ricovero al
domicilio) anziché scomparire del tutto.
```

## Esempio pratico

Il costo storico di riferimento di un sistema sanitario per un episodio di protesi totale d'anca (dall'intervento fino a 90 giorni di recupero) è di 28.000 USD per episodio, sulla base di 200 episodi storici. Viene introdotto un nuovo programma digitale di monitoraggio post-chirurgico e 150 nuovi episodi che lo utilizzano mostrano un costo medio di 24.500 USD per episodio, una riduzione di 3.500 USD per episodio dovuta principalmente a meno visite al pronto soccorso durante il recupero e a una degenza media più breve. Dopo l'aggiustamento per il rischio, a causa di una casistica leggermente più giovane e con minori comorbilità nella coorte monitorata digitalmente rispetto alla base storica, il risparmio aggiustato si riduce a 2.100 USD per episodio: ancora un miglioramento reale, ma sensibilmente inferiore a quello suggerito dal confronto grezzo non aggiustato.

## Fonti dei dati e avvertenze

Il costo totale dell'episodio viene in genere ricostruito dal sistema di contabilità dei costi o dal sistema finanziario del sistema sanitario, combinando dati di rimborso, allocazione interna dei costi e, quando è coinvolta una piattaforma digitale, i suoi costi di licenza e hardware: ricostruire questo dato con precisione è di solito la parte più difficile e più dispendiosa in termini di risorse di qualsiasi analisi del valore della salute digitale, perché i costi sono spesso registrati in sistemi separati che non sono mai stati progettati per essere combinati a livello di episodio. L'aggiustamento per la casistica è essenziale ogni volta che la coorte gestita digitalmente e la coorte storica di riferimento non sono state assegnate tramite vera randomizzazione, perché i programmi digitali vengono spesso offerti per primi ai pazienti più coinvolti, generalmente più sani o più motivati, il che può produrre un apparente risparmio di costi che in realtà è un effetto di selezione e non un vero effetto del programma.

## Insidie

- **Confrontare costi non aggiustati tra coorti con casistica diversa**: una coorte gestita digitalmente che risulta più sana o a rischio più basso rispetto alla base storica mostrerà un costo per episodio più basso per ragioni estranee all'intervento digitale stesso; aggiustare sempre per il rischio prima di confrontare.
- **Omettere i costi di tecnologia e di personale dal lato "digitale" del confronto**: un'analisi dei costi che segue solo la ridotta utilizzazione clinica ignorando i costi di piattaforma, dispositivi e personale per far funzionare il programma digitale sovrastimerà i risparmi netti.
- **Definire in modo incoerente la finestra dell'episodio tra le coorti**: confrontare una finestra di episodio di 90 giorni per una coorte con una di 60 giorni per un'altra produrrà un confronto di costi che in realtà non misura la stessa cosa.
- **Trattare uno spostamento di costo come una riduzione di costo**: il costo spostato da un contesto di cura a un altro (ad esempio dal ricovero a un contesto domiciliare monitorato) è un risultato reale e prezioso, ma analiticamente diverso da un costo eliminato del tutto, e i due vanno riportati separatamente.

## Fonti

- Centers for Medicare & Medicaid Services (CMS), linee guida sui Bundled Payments for Care Improvement (BPCI) e sui modelli di pagamento basati sull'episodio
- Healthcare Financial Management Association (HFMA), linee guida sulla metodologia di calcolo dei costi per episodio di cura
- Letteratura sottoposta a revisione paritaria sull'analisi dei costi dell'assistenza basata sul valore nella salute digitale, ad esempio studi pubblicati su Health Affairs e sull'American Journal of Managed Care

Vedere anche: [ritorno sull'investimento (ROI) e valore dell'investimento (VOI)](../roi-e-voi/), che utilizza il costo per episodio di cura come uno dei suoi input principali.
