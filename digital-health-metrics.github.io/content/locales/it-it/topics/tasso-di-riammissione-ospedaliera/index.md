# Tasso di Riammissione Ospedaliera

Il tasso di riammissione ospedaliera è la quota di pazienti dimessi che vengono riammessi in ospedale in modo non pianificato entro una finestra definita dopo la dimissione, più comunemente 30 giorni. Per la salute digitale è la metrica più direttamente legata all'economia dei pagatori e ai contratti di assistenza basata sul valore: un programma di monitoraggio a distanza, di follow-up post-dimissione o di transizione digitale tra setting di cura che non riesca a mostrare un effetto credibile sulle riammissioni difficilmente otterrà un sostegno continuativo in termini di rimborso, per quanto buoni appaiano i suoi numeri di coinvolgimento.

## Perché è importante

Una riammissione non pianificata è costosa, destabilizzante per il paziente e in molti sistemi sanitari ormai direttamente penalizzata: schemi come l'Hospital Readmissions Reduction Program statunitense riducono i pagamenti agli ospedali con tassi di riammissione superiori al previsto per specifiche condizioni, ed è per questo che gli ospedali commissionano attivamente programmi digitali di post-dimissione e di monitoraggio a distanza mirati a ridurle. Una quota significativa delle riammissioni è considerata potenzialmente prevenibile, determinata da istruzioni di dimissione inadeguate, appuntamenti di follow-up mancati, fraintendimenti sui farmaci o peggioramenti dei sintomi non affrontati che un punto di contatto digitale ben progettato può cogliere prima, ed è proprio la lacuna che gli strumenti digitali di transizione assistenziale si propongono di colmare. Il tasso di riammissione va sempre letto insieme alla casistica: un programma che serve una popolazione più malata e complessa avrà un tasso di base strutturalmente più alto di uno che serve una popolazione più sana, indipendentemente dalla qualità del programma.

## Come si calcola

```
Tasso di riammissione a 30 giorni = riammissioni non pianificate entro
                                    30 giorni dalla dimissione / totale
                                    delle dimissioni indice × 100

Escludere dal numeratore: le riammissioni pianificate (ad es. una
procedura di follow-up programmata) e i trasferimenti che costituiscono
la continuazione dello stesso episodio di cura anziché un nuovo ricovero.

Aggiustare per il rischio, ove possibile, usando un indice di casistica
o di comorbilità accettato, prima di confrontare i tassi tra popolazioni
di pazienti o periodi diversi.
```

## Esempio pratico

Un ospedale dimette 1.200 pazienti con scompenso cardiaco in un trimestre. Di questi, 210 vengono riammessi entro 30 giorni, di cui 15 sono riammissioni pianificate per una procedura programmata e sono escluse. Il tasso di riammissione non pianificata a 30 giorni è (210 − 15) / 1.200 × 100 = 16,25%. Viene introdotto un programma di monitoraggio a distanza per un sottoinsieme di 400 di questi pazienti (selezionati in base al rischio clinico, non a caso) e il loro tasso di riammissione non pianificata è del 14%, rispetto al 18% degli 800 pazienti non arruolati. Poiché l'arruolamento si è basato sul rischio clinico e non su un'assegnazione casuale, questa differenza è indicativa e non una prova conclusiva dell'effetto del programma, e va interpretata insieme a un'analisi di aggiustamento per il rischio anziché presa per buona.

## Fonti dei dati e avvertenze

I dati sulle riammissioni sono in genere tratti dal flusso ammissioni-dimissioni-trasferimenti (ADT) dell'ospedale stesso per le riammissioni nella stessa struttura, ma un paziente riammesso in un altro ospedale non comparirà affatto in quel flusso, per cui il monitoraggio delle riammissioni di un solo ospedale sottostima sistematicamente i veri tassi di riammissione, a meno che non sia integrato con dati di uno scambio regionale di informazioni sanitarie, dati sui rimborsi dei pagatori o banche dati statali di tutti i pagatori. L'attribuzione a un programma digitale richiede cautela: i pazienti che scelgono di aderire a un programma volontario di monitoraggio a distanza sono raramente un campione casuale della popolazione dimessa, per cui un confronto ingenuo dei tassi di riammissione tra arruolati e non arruolati tenderà a essere confuso proprio dagli effetti di selezione che hanno reso alcuni pazienti più propensi ad aderire in primo luogo.

## Insidie

- **Confrontare tassi grezzi, non aggiustati per il rischio, tra popolazioni**: un programma che serve una popolazione più malata mostrerà un tasso grezzo di riammissione più alto di uno che serve una popolazione più sana anche se il programma stesso è più efficace; aggiustare sempre per il rischio prima di confrontare.
- **Sottostimare le riammissioni in altre strutture**: affidarsi ai soli dati ADT di un singolo ospedale farà perdere le riammissioni altrove, sottostimando il tasso reale, in particolare nelle aree con più sistemi ospedalieri concorrenti.
- **Distorsione da selezione nell'arruolamento volontario nel programma**: i pazienti che scelgono di aderire a un programma digitale di follow-up differiscono spesso in modo sistematico (per alfabetizzazione sanitaria, supporto sociale o motivazione) da quelli che non lo fanno, confondendo qualsiasi confronto ingenuo prima/dopo o tra arruolati e non arruolati.
- **Contare ogni ritorno nella stessa struttura come riammissione**: una riammissione pianificata (ad esempio una seconda fase programmata di una procedura) non è un segnale di dimissione fallita e va esclusa dal numeratore, non mescolata con i ritorni realmente non pianificati.

## Fonti

- Centers for Medicare & Medicaid Services (CMS), specifiche delle misure dell'Hospital Readmissions Reduction Program e della riammissione ospedaliera complessiva
- Institute for Healthcare Improvement (IHI), linee guida sulla riduzione delle riammissioni evitabili
- Letteratura sottoposta a revisione paritaria sul monitoraggio digitale a distanza e sugli interventi di transizione assistenziale per ridurre le riammissioni, ad esempio studi pubblicati su JAMA Network Open e npj Digital Medicine

Vedere anche: [accuratezza dell'instradamento del triage](../accuratezza-dellinstradamento-del-triage/), perché un instradamento iniziale inappropriato può essere di per sé un fattore a valle di ricoveri evitabili.
