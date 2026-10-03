# Tasso di Tempo di Attività del Dispositivo

Il tasso di tempo di attività del dispositivo misura la quota di tempo in cui un dispositivo di monitoraggio remoto è online e trasmette effettivamente dati, come quota del tempo in cui ci si aspetta che lo faccia. È la metrica infrastrutturale fondamentale alla base di qualsiasi programma di monitoraggio remoto: nessun'altra metrica clinica o operativa in tale programma può essere affidabile se i dispositivi sottostanti che generano i dati non sono costantemente online.

## Perché è importante

Un programma di monitoraggio remoto può riportare esiti clinici impressionanti basati esclusivamente sui pazienti i cui dispositivi rimangono effettivamente online e trasmettono dati, escludendo silenziosamente o ignorando il sottoinsieme di pazienti i cui dispositivi sperimentano interruzioni frequenti — e queste interruzioni si correlano spesso con fattori tecnici o ambientali specifici (scarsa copertura wireless, firmware del dispositivo obsoleto, confusione del paziente sulla ricarica) che possono essere sproporzionatamente concentrati in determinate popolazioni di pazienti. Un tasso di tempo di attività del dispositivo basso o distribuito in modo non uniforme non solo compromette la qualità dei dati, ma crea anche un vero divario di sicurezza clinica: un paziente il cui dispositivo di monitoraggio è offline non riceve nessuno dei benefici di sicurezza che il programma è progettato per fornire, indipendentemente da quanto bene avrebbe funzionato l'algoritmo clinico sottostante se avesse ricevuto i dati.

## Come si calcola

```
Tasso di tempo di attività del dispositivo = tempo in cui il
                                             dispositivo trasmette
                                             effettivamente dati
                                             validi / totale tempo
                                             di monitoraggio atteso
                                             × 100

Riportare sempre segmentato per:
  Tasso di tempo di attività per tipo o modello di dispositivo
  Tasso di tempo di attività per demografia del paziente (per
  rivelare se il tempo di inattività è concentrato in determinate
  popolazioni)
```

## Esempio pratico

Un programma di monitoraggio remoto per l'insufficienza cardiaca riporta un miglioramento impressionante degli esiti clinici basato sui dati dell'85% dei suoi 500 pazienti iscritti, i cui dispositivi hanno mantenuto almeno il 90% del tempo di attività nei primi tre mesi del programma. Ma una revisione del restante 15% dei pazienti, i cui dispositivi avevano un tempo di attività significativamente inferiore, rivela che questo gruppo includeva in modo sproporzionato pazienti in aree rurali con scarsa copertura di rete mobile e pazienti anziani che riportavano confusione su quando e come ricaricare il dispositivo. Questa scoperta ha spinto il programma a indagare su un migliore design del dispositivo per ambienti con connettività debole e un'istruzione semplificata del paziente sulla manutenzione del dispositivo, piuttosto che riportare semplicemente i propri esiti basati sul sottoinsieme di pazienti i cui dispositivi sono rimasti affidabilmente online per caso.

## Fonti dei dati e avvertenze

I dati sul tempo di attività provengono tipicamente direttamente dalla telemetria del dispositivo stesso o dal registro lato server della piattaforma di monitoraggio delle trasmissioni di dati ricevute, rendendo relativamente semplice il calcolo di questa metrica, ma l'interpretazione richiede di distinguere tra guasto del dispositivo (un problema tecnico con il dispositivo stesso), guasto di connettività (scarsa copertura wireless o cellulare) e fattori legati al paziente (ricarica dimenticata, uso errato), poiché ciascuno richiede un intervento diverso. I tassi di tempo di attività dovrebbero essere riportati per paziente nel tempo, non solo come una cifra organizzativa aggregata, poiché una media aggregata può nascondere un sottoinsieme di pazienti con problemi di tempo di attività persistenti e gravi.

## Errori comuni

- **Riportare esiti clinici solo dai pazienti con alto tempo di attività del dispositivo**: questo esclude silenziosamente il sottoinsieme di pazienti che potrebbe avere più bisogno di un monitoraggio affidabile e che potrebbe avere esiti sistematicamente diversi.
- **Trattare tutto il tempo di inattività allo stesso modo**: i guasti del dispositivo, i problemi di connettività e i fattori legati al paziente richiedono soluzioni molto diverse; aggregarli nasconde quale intervento sia effettivamente necessario.
- **Ignorare la concentrazione demografica del tempo di inattività**: se il basso tempo di attività è concentrato in determinate popolazioni di pazienti, il programma di monitoraggio sottostante può inavvertitamente aggravare le disuguaglianze sanitarie.
- **Misurare il tempo di attività come una media organizzativa aggregata**: questo nasconde i singoli pazienti con problemi di tempo di attività persistenti e gravi che richiedono attenzione specifica.

## Fonti

- U.S. Food and Drug Administration (FDA), linee guida sull'affidabilità dei dispositivi di monitoraggio remoto medico
- Letteratura peer-reviewed sull'affidabilità del monitoraggio remoto, ad esempio studi pubblicati su Journal of the American College of Cardiology e npj Digital Medicine

Vedi anche: [tempo di intervento](../time-to-intervention-rate/), poiché questo dipende dalla ricezione di dati del dispositivo completi e affidabili per poter prendere una decisione di triage corretta.
