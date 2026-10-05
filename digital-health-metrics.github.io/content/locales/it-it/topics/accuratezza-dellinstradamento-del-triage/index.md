# Accuratezza dell'Instradamento del Triage

L'accuratezza dell'instradamento del triage è la quota di contatti con i pazienti in cui uno strumento di triage automatizzato o assistito da IA indirizza correttamente un paziente al giusto livello e luogo di assistenza — ad esempio autogestione, cure primarie, pronto soccorso per condizioni non potenzialmente letali, o assistenza urgente — valutata rispetto a uno standard di riferimento clinicamente validato. È la metrica di sicurezza ed efficacia per ogni gateway di accesso digitale, verificatore di sintomi o sistema di triage IA: l'intera proposta di valore dello strumento si basa sull'instradare correttamente, rapidamente e in modo coerente i pazienti.

## Perché è importante

Uno strumento di triage impreciso causa danni in entrambe le direzioni: il sottotriage (indirizzare un paziente verso un livello di assistenza inferiore al necessario) può ritardare il trattamento di una vera emergenza, mentre il sovratriage (indirizzare un paziente verso un livello di assistenza superiore al necessario) spreca la scarsa capacità di urgenza e assistenza acuta e aumenta i costi e l'ansia del paziente senza beneficio clinico. Poiché questi due tipi di errore hanno conseguenze così diverse, l'accuratezza dell'instradamento del triage deve sempre essere riportata insieme alla direzione degli errori, non come un singolo tasso di accuratezza aggregato che nasconde se lo strumento fallisce in modo sicuro o pericoloso. I regolatori e i sistemi sanitari che valutano uno strumento di triage IA per la distribuzione richiedono sempre più questo tipo di segnalazione stratificata dell'accuratezza come condizione per l'approvazione clinica, specialmente per gli strumenti che operano con un certo grado di autonomia da un clinico.

## Come si calcola

```
Accuratezza dell'instradamento del triage = contatti con pazienti
                                            indirizzati correttamente
                                            / totale contatti con
                                            pazienti valutati rispetto
                                            allo standard di
                                            riferimento × 100

Riportare sempre separatamente la direzione degli errori:
  Tasso di sottotriage = contatti con pazienti indirizzati a un
                         livello di assistenza inferiore rispetto a
                         quanto indicato dallo standard di
                         riferimento / totale contatti con pazienti
                         × 100
  Tasso di sovratriage = contatti con pazienti indirizzati a un
                         livello di assistenza superiore rispetto a
                         quanto indicato dallo standard di
                         riferimento / totale contatti con pazienti
                         × 100
```

## Esempio pratico

Un verificatore di sintomi basato su IA valuta 2.000 contatti con pazienti in uno studio di validazione rispetto a uno standard di riferimento valutato da un clinico. Di questi, lo strumento ne indirizza correttamente 1.800 (accuratezza aggregata 90%), ma la segmentazione dei 200 errori rivela che 150 erano sottotriage (il paziente avrebbe dovuto essere indirizzato a un livello di assistenza superiore, ma è stato inviato a uno inferiore) e solo 50 erano sovratriage. Questi 150 casi di sottotriage — il 7,5% della popolazione totale — rappresentano il tipo di errore clinicamente più preoccupante, e una revisione clinica rivela che colpiscono in modo sproporzionato i pazienti con presentazioni di sintomi atipiche, un importante limite di sicurezza che il tasso di accuratezza aggregato del 90% nascondeva completamente.

## Fonti dei dati e avvertenze

Costruire uno standard di riferimento affidabile richiede tipicamente una revisione valutata da un clinico di un campione rappresentativo di contatti effettivi con i pazienti, sia prospettivamente che retrospettivamente, e la qualità di questo standard di riferimento è il fattore decisivo per quanto significativa sia effettivamente la metrica di accuratezza. Uno strumento di triage validato esclusivamente su un set di test sintetico o curato mostrerà spesso un'accuratezza superiore a quella raggiunta su presentazioni reali e ambigue dei pazienti, quindi la metodologia di validazione deve essere riportata insieme al tasso di accuratezza per poterlo valutare correttamente.

## Errori comuni

- **Validazione solo su dati retrospettivi e facili**: l'accuratezza reale di instradamento di uno strumento su input live e ambigui dei pazienti spesso differisce sostanzialmente dall'accuratezza su un set di validazione curato costruito durante lo sviluppo.
- **Riportare un singolo tasso di accuratezza aggregato senza la direzione degli errori**: questo nasconde se lo strumento fallisce verso la sicurezza (sovratriage) o verso il pericolo (sottotriage), che è la distinzione più importante per la sicurezza del paziente.
- **Usare uno standard di riferimento di bassa qualità**: se lo standard di riferimento stesso è inaffidabile o incoerente, la metrica di accuratezza misura nel migliore dei casi l'accordo con uno standard difettoso, non la vera correttezza clinica.
- **Ignorare le prestazioni per sottogruppi**: uno strumento può raggiungere una buona accuratezza aggregata pur fallendo sistematicamente per particolari popolazioni di pazienti o tipi di presentazione; la segmentazione per demografia e tipo di presentazione rivela lacune di sicurezza nascoste.

## Fonti

- Agency for Healthcare Research and Quality (AHRQ), ricerca sull'accuratezza diagnostica e la sicurezza del triage
- Quadro normativo della FDA sul software come dispositivo medico (SaMD), linee guida sulla validazione clinica degli strumenti di triage IA
- Letteratura peer-reviewed sull'accuratezza del triage IA, ad esempio studi pubblicati su npj Digital Medicine e BMJ Health & Care Informatics

Vedi anche: [tempo di evasione dei rinvii digitali](../tempo-di-evasione-dei-rinvii-digitali/), la metrica di processo che si trova più direttamente a valle di una decisione di triage.
