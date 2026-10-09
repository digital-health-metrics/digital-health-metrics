# Tasso di Completamento ePROM

Il tasso di completamento ePROM misura la quota di misure elettroniche degli esiti riferiti dal paziente (ePROM) pianificate, ossia questionari standardizzati e validati che raccolgono il resoconto del paziente stesso sui suoi sintomi, sulla sua funzionalità o sulla qualità della vita e che vengono somministrati in forma digitale anziché su carta, che vengono effettivamente completate. È una metrica di qualità dei dati tanto quanto di coinvolgimento: il valore clinico e di ricerca di un programma PROM dipende interamente dal fatto che il tasso di completamento sia abbastanza alto da rendere le risposte raccolte rappresentative dell'intera popolazione arruolata, e non solo del sottoinsieme più coinvolto o meno sintomatico.

## Perché è importante

Gli esiti riferiti dal paziente sono il complemento diretto, garantito dal paziente stesso, dei dati registrati dal clinico o rilevati da dispositivi: colgono dimensioni della salute (dolore, funzionalità, qualità della vita) che una revisione della cartella clinica o una lettura biometrica non possono cogliere, e la digitalizzazione della raccolta dei PROM esiste proprio per rendere questi dati più economici e semplici da raccogliere su larga scala di quanto la somministrazione cartacea abbia mai consentito. Ma un programma PROM con un basso tasso di completamento rischia una distorsione specifica e grave: i pazienti che stanno peggio hanno spesso meno probabilità di completare un questionario lungo, per cui un tasso di completamento in calo può essere di per sé un segnale precoce di peggioramento della salute della popolazione, e un basso tasso di completamento complessivo può far apparire le risposte raccolte migliori dell'esperienza reale della popolazione semplicemente perché i pazienti più sintomatici sono sottorappresentati in ciò che viene completato. Per questo il tasso di completamento va sempre riportato insieme ai punteggi PROM stessi e non trattato come un dettaglio operativo secondario.

## Come si calcola

```
Tasso di completamento ePROM = ePROM completati per intero / ePROM
                               inviati o pianificati × 100

Riportare separatamente:
  Tasso di completamento iniziale    (primo questionario di una
                                      sequenza di monitoraggio)
  Tasso di completamento longitudinale (questionari successivi di una
                                      sequenza di monitoraggio in corso,
                                      che in genere diminuisce nel tempo
                                      e va seguito come andamento, non
                                      come valore singolo)

Un questionario "completato parzialmente" va definito e riportato
separatamente sia da "completato per intero" sia da "non iniziato".
```

## Esempio pratico

Una clinica oncologica invia un ePROM validato sul carico sintomatico a 400 pazienti prima di ogni visita di controllo mensile. Nel primo mese 340 pazienti completano il questionario per intero (tasso di completamento 85%), 30 lo completano parzialmente e 30 non lo iniziano. Al sesto mese della stessa sequenza di monitoraggio le risposte complete sono scese a 260 sulla stessa coorte di 400 pazienti (65%), un calo longitudinale significativo che passerebbe del tutto inosservato se si riportasse come metrica complessiva statica solo l'85% del primo mese. Indagare quali pazienti abbandonano (per gravità dei sintomi, stadio della malattia o età) può rivelare se il calo riflette stanchezza da questionario, un peggioramento dei sintomi che rende il questionario più difficile da completare o una barriera tecnica di accesso.

## Fonti dei dati e avvertenze

I dati sul completamento provengono dai registri di invio e di risposta della piattaforma ePROM, che sono in grado di distinguere gli stati "non iniziato", "completato parzialmente" e "completato per intero": una distinzione che va sempre conservata e riportata anziché ridotta a un dato binario completato/non completato, perché il completamento parziale indica spesso un punto specifico del questionario in cui i pazienti incontrano difficoltà o perdono interesse. Il tasso di completamento va interpretato tenendo conto di come viene somministrato il questionario (un link in un SMS, una notifica dell'app o una modalità che richiede l'accesso a un portale), perché l'attrito nella somministrazione influisce di per sé sul completamento, indipendentemente dal contenuto del questionario o dalla condizione di fondo del paziente. Per il PROM stesso va sempre usato uno strumento validato (e non un insieme di domande ad hoc), perché il tasso di completamento di uno strumento non validato non dice nulla di affidabile sull'utilità clinica dei dati risultanti, anche se il completamento è elevato.

## Insidie

- **Trattare un tasso di completamento in calo solo come un problema di somministrazione**: un calo longitudinale del completamento può riflettere un reale peggioramento dei sintomi (pazienti troppo malati per completare il questionario) e non stanchezza o un problema tecnico, e questa distinzione è decisiva per l'interpretazione clinica.
- **Accorpare completamento parziale e completo in un'unica categoria**: un questionario completato parzialmente ha una qualità dei dati sostanzialmente diversa da uno completato per intero; riportarli separatamente e indagare in quale punto del questionario i pazienti tendono ad abbandonare.
- **Riportare il tasso di completamento senza considerare il rischio di distorsione da risposta**: un tasso di completamento moderato dovrebbe spingere a verificare se chi risponde differisce sistematicamente (per gravità dei sintomi, età, competenze digitali) da chi non risponde, perché i punteggi PROM calcolati solo su chi risponde possono rappresentare in modo errato l'intera popolazione.
- **Usare un questionario non validato o autoprodotto**: il tasso di completamento è privo di significato come segnale di qualità dei dati se lo strumento completato non è a sua volta validato clinicamente per la condizione e la popolazione misurate.

## Fonti

- International Consortium for Health Outcomes Measurement (ICHOM), sviluppo di set standard e linee guida per l'implementazione dei PROM
- U.S. Food and Drug Administration (FDA), linee guida sulle misure degli esiti riferiti dal paziente negli studi clinici e nelle domande regolatorie
- Letteratura sottoposta a revisione paritaria sull'implementazione e sui tassi di completamento dei PROM elettronici, ad esempio studi pubblicati su Quality of Life Research e sul Journal of Medical Internet Research (JMIR)

Vedere anche: [punteggio net promoter del paziente](../punteggio-net-promoter-del-paziente/), una metrica correlata ma distinta riferita dal paziente, che misura la soddisfazione anziché l'esito clinico.
