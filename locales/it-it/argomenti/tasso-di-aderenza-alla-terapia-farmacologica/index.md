# Tasso di Aderenza alla Terapia Farmacologica

Il tasso di aderenza alla terapia farmacologica misura in che misura un paziente assume un farmaco prescritto come indicato, tipicamente espresso come la quota di giorni in un periodo definito in cui il paziente ha avuto accesso al farmaco come prescritto. È una delle metriche di salute digitale più impattanti, perché la non aderenza è diffusa, in gran parte prevenibile con il giusto supporto, e direttamente collegata a esiti clinici peggiori e costi a valle più elevati — esattamente il divario che le app di promemoria farmacologico, i portapillole intelligenti e le notifiche di riordino in farmacia sono costruiti per colmare.

## Perché è importante

La non aderenza alla terapia farmacologica è associata a una quota significativa di ricoveri ospedalieri evitabili e condizioni croniche peggiorate, rendendola uno degli obiettivi di intervento di salute digitale più misurabili e attuabili. A differenza di molti altri esiti di salute digitale che richiedono un follow-up a lungo termine per essere valutati, l'aderenza può essere misurata quasi in tempo reale attraverso portapillole connessi, dati di riordino in farmacia o sistemi di monitoraggio elettronico, consentendo a un programma di identificare e intervenire su un'aderenza in calo prima che porti a un esito clinico. Poiché l'aderenza è così strettamente legata ai costi a valle — un paziente che non assume il farmaco per la pressione arteriosa ha un rischio elevato di una costosa visita di emergenza — è anche uno dei casi aziendali più facilmente comunicabili per l'investimento in salute digitale a un finanziatore o sistema sanitario.

## Come si calcola

```
Tasso di aderenza alla terapia farmacologica = giorni con accesso
                                               al farmaco come
                                               prescritto / totale
                                               giorni nel periodo
                                               misurato × 100

Il calcolo concreto più comune è la Proportion of Days Covered (PDC):
  PDC = giorni coperti da farmaco riordinato / giorni nel periodo
        di misurazione × 100

Un PDC dell'80% o superiore è ampiamente utilizzato come soglia
clinicamente accettata per "aderenza adeguata" per la maggior parte
dei tipi di farmaci cronici, sebbene la soglia appropriata vari per
condizione e classe farmacologica.
```

## Esempio pratico

A un paziente viene prescritto un farmaco per abbassare la pressione arteriosa da assumere quotidianamente in un periodo di misurazione di 90 giorni. I dati di riordino in farmacia mostrano che il paziente ha ritirato abbastanza farmaco da coprire 72 dei 90 giorni, dando un PDC dell'80% — proprio alla soglia di adeguatezza comunemente utilizzata. Un programma digitale di promemoria interviene con promemoria SMS giornalieri ai pazienti il cui schema di riordino suggerisce lacune imminenti, e nel periodo di misurazione successivo il PDC del paziente sale al 94%. Riportare questo miglioramento richiede il confronto del PDC dello stesso paziente nel tempo o il confronto di un gruppo di intervento con un gruppo di controllo abbinato, non semplicemente una misurazione istantanea.

## Fonti dei dati e avvertenze

I dati di riordino in farmacia (Proportion of Days Covered) sono la fonte più comunemente utilizzata e scalabile, ma misurano solo se il paziente ha ritirato il farmaco, non se lo ha effettivamente assunto come prescritto — un paziente può ritirare un riordino e comunque saltare delle dosi. I portapillole connessi e i sistemi di monitoraggio elettronico forniscono dati più precisi sull'assunzione effettiva, ma sono più costosi da implementare e richiedono la partecipazione attiva del paziente al sistema di monitoraggio, il che può introdurre un proprio bias di selezione verso pazienti più coinvolti.

## Errori comuni

- **Confondere il riordino con l'assunzione effettiva**: i dati di riordino in farmacia dimostrano solo che il paziente ha ottenuto il farmaco, non che lo ha assunto come prescritto; essere espliciti su quale tipo di aderenza si sta misurando.
- **Usare un'unica soglia universale per tutti i tipi di farmaci**: la soglia di aderenza clinicamente significativa varia notevolmente per classe farmacologica e condizione; una soglia dell'80% appropriata per una statina potrebbe non essere appropriata per un antibiotico.
- **Ignorare la non aderenza primaria**: un paziente che non ritira mai una nuova prescrizione non compare nei dati di aderenza basati sul riordino, il che significa che queste metriche possono sovrastimare sistematicamente la vera aderenza di una popolazione.
- **Riportare il miglioramento dell'aderenza senza un gruppo di confronto**: l'aderenza fluttua naturalmente nel tempo per ragioni non correlate a un intervento; un confronto prima-dopo senza gruppo di controllo può attribuire a un intervento una variazione casuale.

## Fonti

- Pharmacy Quality Alliance (PQA), definizioni e metodologie standard per la Proportion of Days Covered
- World Health Organization, rapporto sull'aderenza alle terapie a lungo termine
- Letteratura peer-reviewed sull'impatto degli interventi digitali sull'aderenza alla terapia farmacologica, ad esempio studi pubblicati su Journal of Medical Internet Research (JMIR) e npj Digital Medicine

Vedi anche: [tasso di miglioramento biometrico](../tasso-di-miglioramento-biometrico/), per il quale l'aderenza alla terapia farmacologica nelle malattie croniche è un driver importante.
