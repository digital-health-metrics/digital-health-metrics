# Accuratezza dell'Instradamento del Triage

L'accuratezza dell'instradamento del triage è la quota di incontri con i pazienti in cui uno strumento di triage automatizzato o assistito dall'intelligenza artificiale instrada correttamente un paziente al livello e al contesto di cura appropriati (ad esempio autocura, assistenza primaria, assistenza urgente o emergenza), giudicati rispetto a uno standard di riferimento clinicamente validato. È la metrica di sicurezza ed efficacia per qualsiasi "porta d'ingresso digitale", verificatore di sintomi o sistema di triage con intelligenza artificiale: l'intera proposta di valore dello strumento poggia sull'instradare i pazienti in modo corretto, rapido e coerente.

## Perché è importante

Uno strumento di triage inaccurato provoca danni in entrambe le direzioni: il sotto-triage (instradare un paziente a un livello di cura inferiore a quello di cui ha bisogno) può ritardare il trattamento di una vera emergenza, mentre il sovra-triage (instradare un paziente a un livello di cura superiore a quello di cui ha bisogno) spreca la scarsa capacità di emergenza e urgenza e aumenta costi e ansia del paziente senza alcun beneficio clinico. Poiché queste due modalità di errore hanno conseguenze così diverse, l'accuratezza dell'instradamento del triage va sempre riportata insieme alla direzione degli errori, non come un'unica cifra aggregata di accuratezza che nasconde se lo strumento sbaglia in modo sicuro o pericoloso. Autorità di regolamentazione e sistemi sanitari che valutano uno strumento di triage basato sull'IA per la sua introduzione richiedono sempre più spesso questo tipo di rendicontazione stratificata dell'accuratezza come condizione per l'approvazione clinica, in particolare per gli strumenti che operano con un certo grado di autonomia da un clinico.

## Come si calcola

```
Accuratezza dell'instradamento del triage = incontri instradati
                                            correttamente / totale degli
                                            incontri sottoposti a triage
                                            × 100

Riportare separatamente sotto-triage e sovra-triage:
  Tasso di sotto-triage = incontri instradati a un livello di acuità
                          inferiore rispetto allo standard di riferimento
                          / totale degli incontri sottoposti a triage
                          × 100
  Tasso di sovra-triage = incontri instradati a un livello di acuità
                          superiore rispetto allo standard di riferimento
                          / totale degli incontri sottoposti a triage
                          × 100

Lo standard di riferimento è in genere una revisione retrospettiva dello
stesso caso da parte di un clinico, in cieco rispetto all'output dello
strumento ove possibile.
```

## Esempio pratico

Uno strumento di verifica dei sintomi basato sull'IA effettua il triage di 5.000 incontri con pazienti in un mese. Una revisione clinica in cieco di un campione casuale di 500 di questi incontri rileva che 430 sono stati instradati al livello di acuità corretto (accuratezza 86%), 45 sono stati sotto-triati (9%) e 25 sono stati sovra-triati (5%). Il tasso di sotto-triage del 9% è la cifra che richiede l'indagine più urgente, perché rappresenta gli incontri in cui un paziente può essere stato indirizzato a cure meno urgenti di quelle di cui aveva realmente bisogno; il tasso di sovra-triage del 5% è un problema di capacità e di costi ma non direttamente di sicurezza.

## Fonti dei dati e avvertenze

Lo standard di riferimento con cui si misura l'accuratezza del triage conta moltissimo: la revisione di un singolo clinico introduce la variabilità di giudizio di quel clinico, per cui una cifra di accuratezza credibile richiede di solito o più revisori indipendenti con un accordo tra valutatori documentato, oppure il confronto con un esito clinico successivo e confermato (di quale assistenza il paziente avesse realmente bisogno, accertato a posteriori). Conta anche il campionamento: rivedere solo un campione di convenienza di incontri, o solo quelli segnalati come insoliti, non produrrà una cifra generalizzabile alle prestazioni complessive dello strumento. Le cifre di accuratezza vanno riportate separatamente per categoria di sintomo o disturbo presentato dove il volume di casi sottostante lo consente, poiché gli strumenti di triage raramente si comportano in modo uniforme su tutte le condizioni.

## Insidie

- **Riportare un'unica cifra complessiva di accuratezza**: accorpare sotto-triage e sovra-triage in un solo numero nasconde se gli errori dello strumento propendono per la modalità di errore più pericolosa; riportarli sempre separatamente.
- **Usare come standard di riferimento un singolo revisore non in cieco**: ciò può falsare in silenzio la cifra di accuratezza verso ciò che quel revisore avrebbe fatto di persona, anziché verso uno standard clinico indipendente.
- **Validare solo su dati retrospettivi e di comodo**: l'accuratezza di instradamento nel mondo reale di uno strumento con input di pazienti dal vivo e ambigui differisce spesso sensibilmente dalla sua accuratezza su un insieme di validazione curato assemblato durante lo sviluppo.
- **Ignorare la deriva delle prestazioni dopo l'introduzione**: l'accuratezza di un modello di triage basato sull'IA può peggiorare nel tempo al mutare delle popolazioni di pazienti, dei sintomi presentati o della disponibilità dei percorsi di cura; l'accuratezza va rimisurata periodicamente, non validata una volta sola e presunta stabile.

## Fonti

- ONC / HealthIT.gov, linee guida sulla sicurezza e sull'assicurazione di qualità del supporto alle decisioni cliniche e degli strumenti basati sull'IA
- Letteratura sottoposta a revisione paritaria sull'accuratezza dei verificatori di sintomi e degli strumenti di triage con IA, ad esempio studi pubblicati su JAMIA, npj Digital Medicine e BMJ Health & Care Informatics
- NHS England, linee guida sulla sicurezza clinica degli strumenti di triage digitale e di consultazione a distanza (standard di gestione del rischio clinico DCB0129/DCB0160)

Vedere anche: [tempo di evasione dei rinvii digitali](../tempo-di-evasione-dei-rinvii-digitali/), la metrica di processo più direttamente a valle di una decisione di triage.
