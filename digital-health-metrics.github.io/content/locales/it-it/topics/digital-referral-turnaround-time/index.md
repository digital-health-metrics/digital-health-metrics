# Tempo di Evasione dei Rinvii Digitali

Il tempo di evasione dei rinvii digitali è il tempo trascorso dalla presentazione di un rinvio elettronico da parte di un clinico che rinvia fino al momento in cui viene sottoposto a triage e accettato, rifiutato o prenotato dal servizio ricevente. È una metrica di processo (flusso), distinta dal tempo di attesa totale del paziente, ed è uno dei luoghi più chiari in cui un cambiamento del sistema digitale (e-rinvio strutturato, triage basato su immagini, moduli di rinvio standardizzati) può dimostrare di spostare un numero operativo, non solo un punteggio di soddisfazione.

## Perché è importante

Una fase di triage lenta o molto variabile aggiunge un ritardo prima ancora che il paziente entri in una lista d'attesa clinica, e poiché tale ritardo avviene prima che inizi qualsiasi assistenza clinica, è puro spreco di processo che gli strumenti digitali sono ben posizionati per eliminare. I sistemi di rinvio che impongono un ciclo di "ritorno al rinviante" per informazioni mancanti creano cicli di ripetizione del lavoro facili da non notare se il tempo di evasione viene misurato solo sui rinvii che passano in modo pulito la prima volta. Dove un servizio ha introdotto moduli di rinvio digitale strutturati, campi obbligatori, o triage basato su immagini (ad esempio nella teledermatologia), il tempo di evasione è di solito la metrica singola più persuasiva per dimostrare il beneficio, perché è misurabile prima e dopo il cambiamento con la stessa strumentazione.

## Come si calcola

```
Tempo di evasione = timestamp(decisione di triage) − timestamp(presentazione del rinvio)

Riportare la mediana e un percentile alto (comunemente il 90°), non solo la
media, perché la distribuzione è fortemente asimmetrica a destra a causa dei
rinvii restituiti o complessi.

Considerare i tempi delle sotto-fasi dove il sistema li cattura:
  Presentazione → ricezione da parte del servizio
  Ricezione → decisione di triage
  Decisione di triage → appuntamento prenotato (dove pertinente)
```

## Esempio pratico

Il registro di audit di un sistema di e-rinvio mostra un tempo mediano dalla presentazione alla decisione di triage di 1,8 giorni in tutte le specialità, con un tempo al 90° percentile di 6 giorni, determinato principalmente dai rinvii restituiti al rinviante per informazioni cliniche mancanti. Un percorso di teledermatologia che utilizza il triage basato su immagini sulla stessa piattaforma raggiunge un tempo mediano di evasione di 4 ore e un 90° percentile di 1 giorno, perché una fotografia e un'anamnesi strutturata sono quasi sempre sufficienti per la decisione di triage senza bisogno di ulteriore corrispondenza.

## Fonti dei dati e avvertenze

Il registro di audit del sistema di e-rinvio o di gestione dei rinvii è la fonte primaria, utilizzando i timestamp di presentazione e decisione; le organizzazioni dovrebbero confermare se l'"orologio" si ferma mentre un rinvio viene restituito per ulteriori informazioni o continua a scorrere, poiché le due definizioni producono cifre sostanzialmente diverse per lo stesso processo sottostante. Il tempo di evasione dovrebbe essere riportato in modo coerente in tempo di calendario o tempo di orario lavorativo, poiché gli effetti di weekend e festività possono altrimenti distorcere i confronti tra servizi con pattern di lavoro diversi.

## Insidie

- **Misurare solo i rinvii "puliti"**: escludere dal calcolo i rinvii rifiutati o restituiti nasconde l'onere di ripetizione del lavoro che gli strumenti digitali sono spesso specificamente pensati per ridurre.
- **Riportare la media anziché la mediana e i percentili**: un piccolo numero di rinvii restituiti e di lunga durata tirerà la media ben al di sopra dell'esperienza effettiva del paziente tipico.
- **Confondere il tempo di evasione con il tempo di attesa totale**: il tempo di evasione copre solo la fase di triage; l'esperienza totale del paziente include anche la lista d'attesa clinica a valle, che è una metrica separata governata da vincoli di capacità separati.
- **Non distinguere le sotto-fasi**: un servizio che misura solo il tempo end-to-end non può stabilire se una cifra lenta sia causata dai rinvianti che presentano informazioni incomplete, dalla capacità di triage del servizio ricevente, o da entrambi.

## Fonti

- NHS England, statistiche e specifiche del servizio e-Referral Service (e-RS)
- Letteratura sottoposta a revisione paritaria sui sistemi di gestione dei rinvii elettronici e sui percorsi di triage digitale, inclusa la teledermatologia
- ONC / HealthIT.gov, linee guida sull'interoperabilità e sul coordinamento dei rinvii
