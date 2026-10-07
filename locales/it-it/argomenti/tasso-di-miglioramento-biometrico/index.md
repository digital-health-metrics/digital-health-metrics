# Tasso di Miglioramento Biometrico

Il tasso di miglioramento biometrico è la quota di pazienti arruolati in un programma di salute digitale che ottiene un miglioramento clinicamente significativo in un parametro biometrico monitorato (più comunemente l'emoglobina glicata (HbA1c) nei programmi per il diabete e cardiometabolici, o l'indice di massa corporea (BMI) nei programmi di gestione del peso) nel corso di un periodo di arruolamento definito. È la metrica di esito che in ultima analisi giustifica le affermazioni cliniche di un prodotto di salute digitale: i numeri di coinvolgimento e adozione descrivono come viene usato un prodotto, ma il miglioramento biometrico è più vicino a una prova che funziona.

## Perché è importante

I programmi di salute digitale vengono spesso venduti e commissionati sulla promessa di migliori esiti di salute, e il tasso di miglioramento biometrico è il modo più diretto e quantificabile per verificare quella promessa rispetto a una soglia specifica e clinicamente riconosciuta anziché a un vago richiamo a una "salute migliore". Pagatori, datori di lavoro e sistemi sanitari legano sempre più il rimborso o il rinnovo del contratto a un cambiamento biometrico dimostrato, per cui un programma che non riesce a riportare in modo credibile questo tasso è in svantaggio sia commerciale sia clinico. La metrica è anche un controllo di disciplina sulla progettazione del programma: è molto più facile riportare il coinvolgimento (accessi, messaggi inviati) che gli esiti, e un team dovrebbe diffidare di qualsiasi programma che riporta con entusiasmo il primo restando vago sui secondi.

## Come si calcola

```
Tasso di miglioramento biometrico = pazienti che raggiungono un
                                    miglioramento clinicamente
                                    significativo definito / pazienti
                                    con una misurazione valida alla
                                    base di partenza e al follow-up
                                    × 100

Soglie clinicamente significative comuni:
  HbA1c — una riduzione di ≥ 0,5 punti percentuali, o il
          raggiungimento di un target definito (ad es. < 7,0%) da una
          base di partenza fuori intervallo
  BMI   — una riduzione di ≥ 5% del peso corporeo di base, mantenuta
          fino al punto di misurazione del follow-up

Riportare separatamente per ciascun parametro biometrico monitorato;
non accorpare mai il miglioramento di HbA1c e BMI in un'unica
percentuale combinata di "miglioramento".
```

## Esempio pratico

Un programma di salute digitale cardiometabolica arruola 800 pazienti con HbA1c di base fuori intervallo. Di questi, 620 hanno sia una misurazione di base valida sia una misurazione di follow-up a 6 mesi (180 sono persi al follow-up ed esclusi dal denominatore, non contati come fallimenti). Dei 620 con misurazioni appaiate, 340 ottengono una riduzione di almeno 0,5 punti percentuali. Il tasso di miglioramento biometrico è 340 / 620 × 100 = 55%. Riportare il dato rispetto a tutti gli 800 arruolati (340 / 800 = 42,5%) confonderebbe la perdita al follow-up con il fallimento del trattamento, sottostimando il tasso per i pazienti che hanno effettivamente completato la misurazione.

## Fonti dei dati e avvertenze

I valori biometrici di base e di follow-up provengono in genere da un dispositivo connesso (un glucometro Bluetooth o una bilancia smart), da un risultato di laboratorio importato dalla cartella clinica elettronica o da un valore autodichiarato inserito dal paziente, e queste tre fonti hanno un'affidabilità molto diversa, per cui la fonte va riportata insieme al tasso. La perdita al follow-up raramente è casuale: i pazienti che si disimpegnano da un programma sono spesso anche quelli con minori probabilità di essere migliorati, per cui un alto tasso di miglioramento calcolato solo sui pazienti che hanno completato il follow-up può sovrastimare il vero effetto del programma a livello di popolazione. Gli effetti stagionali e di regressione verso la media sono reali sia per l'HbA1c sia per il peso, quindi un programma dovrebbe confrontarsi dove possibile con un gruppo di controllo concomitante o storico anziché trattare qualsiasi miglioramento come prova dell'effetto del programma.

## Insidie

- **Escludere, anziché riportare, la perdita al follow-up**: eliminare in silenzio dal denominatore i pazienti senza misurazione di follow-up può gonfiare in modo sostanziale il tasso di miglioramento apparente; riportare sempre il tasso di completamento della misurazione di follow-up insieme al tasso di miglioramento stesso.
- **Mescolare misurazioni autodichiarate e da dispositivo senza etichettarle**: un peso autodichiarato è sistematicamente meno affidabile della lettura di una bilancia smart connessa, e fondere le due fonti oscura quanto di un miglioramento apparente sia rumore di misura.
- **Nessun controllo o controfattuale**: molte misure biometriche croniche fluttuano o regrediscono verso la media da sole; un tasso di miglioramento a braccio singolo senza alcun gruppo di confronto è un indizio, non una prova conclusiva dell'effetto del programma.
- **Trattare un modesto spostamento medio come prova di un ampio miglioramento**: un piccolo miglioramento medio a livello di popolazione può essere trainato da pochi grandi responder mentre la maggior parte dei pazienti non vede cambiamenti; riportare la distribuzione (ad es. la quota che supera la soglia clinicamente significativa), non solo lo spostamento medio.

## Fonti

- American Diabetes Association (ADA), Standards of Care in Diabetes, indicazioni sul target di HbA1c e sulla variazione clinicamente significativa
- Centers for Disease Control and Prevention (CDC), Division of Diabetes Translation, linee guida per la valutazione dei programmi
- Letteratura sottoposta a revisione paritaria sugli esiti dei programmi digitali per il diabete e la gestione del peso, ad esempio studi pubblicati su npj Digital Medicine e Diabetes Care

Vedere anche: [tasso di aderenza alla terapia farmacologica](../tasso-di-aderenza-alla-terapia-farmacologica/), un frequente fattore a monte del miglioramento biometrico nei programmi per condizioni croniche.
