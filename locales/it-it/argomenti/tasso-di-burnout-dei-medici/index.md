# Tasso di Burnout dei Medici

Il tasso di burnout dei medici misura la quota di clinici che riportano sintomi di esaurimento emotivo, depersonalizzazione o ridotto senso di realizzazione personale, tipicamente valutati tramite un questionario validato come il Maslach Burnout Inventory. Viene monitorato in questo libro insieme al carico che gli strumenti digitali rivolti ai clinici impongono, poiché il software mal progettato è un contributore documentato e attuabile al burnout dei clinici, a differenza di molti altri contributori (carico di lavoro, carico amministrativo, cultura organizzativa) che un team di strumenti digitali ha più difficoltà ad affrontare direttamente.

## Perché è importante

Il burnout dei clinici è associato a tassi più elevati di errori medici, peggiore soddisfazione dei pazienti e alto turnover del personale, rendendolo di per sé una metrica di qualità e operativa importante, non solo una questione di benessere del personale. Gli strumenti di salute digitale specificamente progettati per ridurre il carico dei clinici — documentazione ambientale, gestione semplificata dei messaggi, flussi di lavoro clinici meglio ottimizzati — possono dimostrare in parte il proprio valore mostrando un miglioramento misurabile nei punteggi di burnout dei clinici, fornendo un argomento supplementare forte oltre alle pure metriche di efficienza come il tempo di documentazione. Al contrario, uno strumento digitale che migliora tecnicamente una metrica di efficienza del processo peggiorando contemporaneamente il burnout dei clinici (ad esempio aggiungendo un altro schermo da monitorare o un altro sistema in cui accedere) può rappresentare un impatto netto negativo che una metrica di efficienza ristretta da sola non catturerebbe.

## Come si calcola

```
Tasso di burnout dei medici = clinici che raggiungono un punteggio
                              superiore alla soglia di burnout
                              stabilita in uno strumento validato
                              (ad esempio Maslach Burnout Inventory)
                              / totale clinici esaminati × 100

Riportare sempre insieme a una metrica specifica di indagine sul
carico degli strumenti digitali, ad esempio:
  Tempo di documentazione fuori orario per clinico a settimana
  Numero di clic nella cartella clinica elettronica richiesti per
  un flusso di lavoro clinico standard
```

## Esempio pratico

Un sistema sanitario implementa uno strumento di documentazione ambientale che genera automaticamente note cliniche dalla trascrizione vocale durante le consultazioni con i pazienti, con l'obiettivo di ridurre il carico amministrativo dei clinici. Prima dell'implementazione, il 45% dei clinici nel reparto interessato riporta sintomi di burnout superiori alla soglia in un'indagine Maslach Burnout Inventory, e i clinici trascorrono in media 6 ore a settimana in documentazione fuori orario. Sei mesi dopo l'implementazione dello strumento di documentazione ambientale, il tasso di burnout scende al 32%, e il tempo di documentazione fuori orario scende a 2,5 ore a settimana — una correlazione che fornisce un argomento convincente, seppure non completamente definitivo (poiché anche altri fattori potrebbero essere cambiati nello stesso periodo), per l'impatto positivo dello strumento sul benessere dei clinici.

## Fonti dei dati e avvertenze

La misurazione del burnout richiede uno strumento di questionario validato somministrato in modo coerente nel tempo a un campione rappresentativo di clinici, e il tasso di risposta a tali indagini è spesso basso, il che può distorcere i risultati se i clinici che sperimentano il burnout più grave sono anche i meno propensi ad avere tempo o energia per rispondere. Poiché il burnout ha molte cause contribuenti oltre agli strumenti digitali (carico di lavoro, cultura organizzativa, livelli di personale), una correlazione tra l'adozione di uno strumento digitale e un cambiamento nel tasso di burnout non può da sola dimostrare la causalità senza controllare questi altri fattori.

## Errori comuni

- **Attribuire l'intero cambiamento del burnout a un singolo strumento digitale**: il burnout ha molte cause contribuenti; una correlazione dopo l'adozione di uno strumento non dimostra da sola la causalità.
- **Applicare un basso tasso di risposta all'indagine senza aggiustamento**: i clinici con il burnout più grave potrebbero essere i meno propensi a rispondere, distorcendo artificialmente il tasso riportato verso il basso.
- **Misurare il burnout senza una metrica specifica del carico degli strumenti digitali**: senza collegare il burnout a una misura concreta relativa allo strumento (tempo di documentazione, numero di clic), è difficile identificare quale specifico intervento abbia effettivamente aiutato.
- **Ignorare la variabilità per sottogruppo**: il burnout può variare significativamente per specialità, anzianità o reparto; un tasso organizzativo aggregato può nascondere problemi gravi in sottogruppi specifici.

## Fonti

- Maslach, C., e Jackson, S.E., Maslach Burnout Inventory, lo strumento di valutazione originariamente sviluppato e più ampiamente utilizzato
- American Medical Association, ricerca sul burnout dei clinici e il carico della cartella clinica elettronica
- Letteratura peer-reviewed sull'impatto degli strumenti digitali sul burnout dei clinici, ad esempio studi pubblicati su Journal of the American Medical Informatics Association (JAMIA) e Mayo Clinic Proceedings

Vedi anche: [tasso di override degli avvisi clinici](../tasso-di-override-degli-avvisi-clinici/), dove l'affaticamento da avvisi è uno dei contributori più specifici e misurabili al burnout dei clinici che gli strumenti digitali possono affrontare direttamente.
