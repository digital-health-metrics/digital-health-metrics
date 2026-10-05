# Tasso di Completamento ePROM

Il tasso di completamento ePROM misura la quota di misure elettroniche degli esiti riportati dal paziente (ePROM) programmate che i pazienti effettivamente completano entro una finestra di raccolta definita. Le ePROM sono questionari strutturati che catturano la valutazione del paziente stesso dei propri sintomi, funzionalità o qualità della vita, e poiché l'intero valore di un programma ePROM dipende dall'effettiva risposta dei pazienti, il tasso di completamento è la metrica fondamentale che determina se i dati raccolti possano essere considerati affidabili.

## Perché è importante

Un basso tasso di completamento ePROM non solo compromette la qualità dei dati statisticamente, ma introduce anche una specifica preoccupazione clinica: i pazienti che stanno peggio sono spesso quelli meno propensi a completare un questionario, il che significa che un tasso di completamento in calo può di per sé essere un segnale clinico piuttosto che semplicemente un problema di elaborazione dei dati. Un sistema sanitario che basa decisioni cliniche o reportistica sulla qualità su dati ePROM con un tasso di completamento basso o in calo rischia di basare tali decisioni su un sottoinsieme non rappresentativo della propria popolazione di pazienti, tipicamente sbilanciato verso pazienti che stanno relativamente meglio. Poiché le ePROM sono sempre più utilizzate per guidare decisioni cliniche in tempo reale (ad esempio, attivare una revisione clinica quando il punteggio dei sintomi riportato da un paziente peggiora), il tasso di completamento è anche un fattore determinante diretto di quanto siano affidabili questi flussi di lavoro clinici automatizzati.

## Come si calcola

```
Tasso di completamento ePROM = risposte ePROM completate / totale
                               richieste ePROM programmate nella
                               finestra di raccolta × 100

Riportare sempre insieme a:
  Tasso di completamento per sottogruppo di pazienti (età,
  gravità della malattia, tempo dalla diagnosi) per rivelare se le
  risposte mancanti sono distribuite casualmente o concentrate in
  particolari gruppi di pazienti
```

## Esempio pratico

Un reparto di oncologia implementa questionari ePROM settimanali per monitorare il carico di sintomi nei pazienti in trattamento attivo. Nel primo mese, il tasso di completamento aggregato è del 75%, che sembra ragionevole, ma la segmentazione per gravità della malattia rivela che il tasso di completamento tra i pazienti con il carico di sintomi riportato più alto alla loro ultima risposta è solo del 55%, rispetto all'85% tra i pazienti con basso carico di sintomi. Questo schema suggerisce che i pazienti che hanno più bisogno di essere monitorati da vicino sono proprio quelli meno propensi a rispondere — un'intuizione critica che sarebbe stata completamente nascosta dal tasso di completamento aggregato del 75%, e che ha spinto il reparto ad aggiungere un protocollo di follow-up telefonico per i pazienti che saltano una richiesta ePROM.

## Fonti dei dati e avvertenze

I dati sul tasso di completamento ePROM provengono tipicamente direttamente dalla piattaforma digitale che eroga i questionari, rendendo il calcolo di questa metrica relativamente semplice rispetto a molte altre in questo libro, ma l'interpretazione richiede un'attenzione accurata al motivo per cui mancano le risposte. Un tasso di completamento in calo può derivare dalla stanchezza da questionario (questionari troppo frequenti o troppo lunghi), da difficoltà di accesso tecnico (pazienti senza accesso internet affidabile) o da un vero segnale clinico (pazienti che stanno troppo male per rispondere), e queste tre cause richiedono interventi molto diversi.

## Errori comuni

- **Riportare un numero di completamento aggregato senza segmentazione**: questo può nascondere il fatto che le risposte mancanti sono concentrate tra i pazienti i cui dati sono più clinicamente importanti da raccogliere.
- **Presumere che un tasso di completamento in calo sia puramente un problema tecnico**: un tasso in calo può essere un segnale clinico di peggioramento della condizione del paziente piuttosto che semplice attrito dell'esperienza utente.
- **Ignorare la stanchezza da questionario come causa**: richieste ePROM troppo frequenti o troppo lunghe riducono il tasso di completamento nel tempo indipendentemente dalla condizione clinica dei pazienti.
- **Trattare i dati incompleti come se mancassero casualmente**: analizzare solo le ePROM completate senza considerare perché mancano le restanti può portare a conclusioni cliniche sistematicamente distorte.

## Fonti

- International Society for Quality of Life Research (ISOQOL), linee guida per l'implementazione degli esiti elettronici riportati dal paziente
- U.S. Food and Drug Administration (FDA), linee guida sulle misure degli esiti riportati dal paziente per uso clinico
- Letteratura peer-reviewed sul completamento ePROM e sui dati mancanti, ad esempio studi pubblicati su Journal of Clinical Oncology e Quality of Life Research

Vedi anche: [punteggio Net Promoter del paziente](../punteggio-net-promoter-del-paziente/), una metrica correlata ma distinta riportata dal paziente che misura la soddisfazione piuttosto che l'esito clinico.
