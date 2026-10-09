# Tasso di Burnout dei Medici

Il tasso di burnout dei medici misura la quota di clinici che riferiscono sintomi significativi di burnout (comunemente valutati come esaurimento emotivo, spersonalizzazione o scarso senso di realizzazione personale tramite uno strumento di indagine validato) e, per la salute digitale in particolare, viene monitorato insieme a misure del carico che gli strumenti digitali impongono ai clinici, come il tempo dedicato alla burocrazia o alla documentazione nella cartella clinica elettronica (EHR). Rientra in un quadro di metriche per la salute digitale perché un software clinico progettato male è un fattore contribuente al burnout ben documentato e misurabile, e il successo di uno strumento di salute digitale non dovrebbe mai essere valutato solo con metriche rivolte ai pazienti, ignorando il suo effetto sui clinici che devono utilizzarlo.

## Perché è importante

Gli strumenti di salute digitale vengono spesso introdotti con l'obiettivo esplicito di ridurre il carico amministrativo dei clinici, ma un flusso di lavoro della cartella clinica elettronica mal progettato, un volume eccessivo di avvisi clinici di scarso valore (vedere il tasso di override degli avvisi clinici) o un'interfaccia di telemedicina macchinosa possono altrettanto facilmente aumentare il burnout anziché ridurlo, e uno strumento che migliora una metrica di coinvolgimento rivolta ai pazienti aumentando silenziosamente il carico di documentazione dei clinici non ha prodotto un risultato netto positivo per il sistema di cura nel suo insieme. Nella letteratura clinica il burnout è fortemente collegato a errori medici, turnover dei clinici e riduzione della qualità dell'assistenza, per cui funziona come indicatore anticipatore di problemi a valle di sicurezza e di sostenibilità della forza lavoro, e non è un semplice dettaglio di soddisfazione lavorativa. Qualsiasi programma di salute digitale che affermi di ridurre il carico clinico dovrebbe essere in grado di dimostrarlo rispetto a una base di partenza misurata, anziché asserirlo come intenzione progettuale.

## Come si calcola

```
Tasso di burnout dei medici = clinici con punteggio superiore alla soglia
                              di burnout dello strumento validato / totale
                              dei clinici intervistati × 100

Strumenti validati comuni: Maslach Burnout Inventory (MBI), Professional
Fulfillment Index o una domanda singola di screening del burnout validata
rispetto a uno strumento più completo.

Riportare insieme a un indicatore indiretto del carico digitale, dove
disponibile:
  Tempo nell'EHR per incontro con il paziente
  Tempo di documentazione al di fuori dell'orario clinico programmato
  ("tempo in pigiama")
```

## Esempio pratico

Un sistema ospedaliero intervista 300 medici con il Maslach Burnout Inventory prima di introdurre uno strumento di documentazione clinica ambientale pensato per ridurre il tempo di scrittura delle note. Alla base di partenza 135 medici (45%) superano la soglia di burnout e i dati del registro di audit dell'EHR mostrano in media 58 minuti al giorno per medico di tempo di documentazione al di fuori dell'orario clinico programmato. Sei mesi dopo l'introduzione dello strumento, una nuova indagine sugli stessi medici rileva 108 medici (36%) sopra la soglia di burnout, insieme a un calo del tempo di documentazione fuori orario a 34 minuti al giorno. Il movimento correlato sia del tasso di burnout sia dell'indicatore indiretto oggettivo derivato dall'EHR rafforza l'ipotesi che lo strumento contribuisca al miglioramento, anche se un confronto formale prima/dopo dovrebbe comunque tenere conto di altri cambiamenti concomitanti del carico di lavoro nello stesso periodo.

## Fonti dei dati e avvertenze

I dati dell'indagine sul burnout provengono da uno strumento validato somministrato periodicamente (annualmente o più spesso), e il tasso di risposta conta: un basso tasso di risposta rischia una distorsione da mancata risposta, per cui i clinici più esauriti (con meno capacità di compilare un'ulteriore indagine) sono sistematicamente sottorappresentati, sottostimando il tasso reale. Gli indicatori indiretti del carico digitale derivati dall'EHR (tempo nel sistema, tempo di documentazione fuori orario, numero di clic per incontro) sono utili come complementi oggettivi e continuamente disponibili dei dati periodici dell'indagine, ma andrebbero validati rispetto al burnout dichiarato nell'indagine per una data organizzazione prima di essere trattati come indicatore autonomo affidabile di burnout, perché il rapporto tra tempo nel sistema e burnout effettivo può variare in base alla specialità e allo stile di lavoro individuale.

## Insidie

- **Affidarsi solo a indicatori indiretti derivati dall'EHR**: il tempo nel sistema e il numero di clic sono correlati al burnout in aggregato ma non coincidono con il burnout stesso, e possono essere fuorvianti per singoli clinici o specialità con esigenze di documentazione realmente diverse.
- **Un basso tasso di risposta all'indagine che maschera il tasso reale**: i clinici più colpiti dal burnout sono spesso quelli con meno capacità di rispondere a un'indagine volontaria, il che distorce un risultato con basso tasso di risposta verso un dato artificialmente più sano.
- **Attribuire una variazione del burnout a un singolo strumento senza tenere conto dei fattori confondenti**: il burnout è influenzato da molti fattori concomitanti (livelli di personale, volume di pazienti, cambiamenti organizzativi); un confronto prima/dopo attorno all'introduzione di uno strumento dovrebbe controllarli, dove possibile, anziché presumere una causa unica.
- **Trattare il burnout esclusivamente come una questione di resilienza individuale**: la ricerca sul burnout rileva costantemente che carico di lavoro, progettazione dei sistemi e fattori organizzativi sono i principali determinanti; inquadrarlo come un problema esclusivo del singolo clinico distoglie l'intervento dagli strumenti digitali e dai flussi di lavoro che sono spesso la vera causa radice.

## Fonti

- Maslach Burnout Inventory (MBI), strumento di indagine validato e indicazioni per l'attribuzione dei punteggi
- American Medical Association (AMA), ricerca sul burnout dei medici e programma di miglioramento della pratica STEPS Forward
- Letteratura sottoposta a revisione paritaria su usabilità dell'EHR, carico di documentazione e burnout dei clinici, ad esempio studi pubblicati su JAMIA e Annals of Internal Medicine

Vedere anche: [tasso di override degli avvisi clinici](../tasso-di-override-degli-avvisi-clinici/), poiché la fatica da avvisi è uno dei fattori più specifici e misurabili che contribuiscono al burnout dei clinici e su cui gli strumenti digitali possono intervenire direttamente.
