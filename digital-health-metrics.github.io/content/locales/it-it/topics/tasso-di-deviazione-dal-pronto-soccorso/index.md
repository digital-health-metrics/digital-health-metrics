# Tasso di Deviazione dal Pronto Soccorso

Il tasso di deviazione dal pronto soccorso misura la quota di contatti con i pazienti gestiti da uno strumento di triage digitale o assistenza virtuale che, senza quell'intervento, avrebbero plausibilmente portato a una visita al pronto soccorso, ma sono stati invece gestiti in sicurezza tramite un percorso a minore urgenza — consigli di autogestione, un appuntamento di cure primarie, o una visita di assistenza urgente ma non potenzialmente letale programmata. È un sottoinsieme specifico e di alto valore dell'accuratezza dell'instradamento del triage (vedi quell'argomento) interamente focalizzato sull'uso evitato del pronto soccorso, l'esito più direttamente legato sia ai costi sanitari sia all'alleggerimento della capacità del pronto soccorso.

## Perché è importante

I pronto soccorso sono tra le strutture di assistenza più costose per contatto e vengono spesso utilizzati per problemi che potrebbero essere gestiti in sicurezza altrove, quindi la capacità di uno strumento di triage digitale di deviare in sicurezza casi appropriati lontano dal pronto soccorso è una delle capacità più preziose dal punto di vista commerciale e operativo — ed è una delle più facili da comunicare a un finanziatore o sistema sanitario che valuta il ritorno sull'investimento dello strumento. Ma la deviazione ha valore solo se è sicura: uno strumento che devia aggressivamente i pazienti dal pronto soccorso a costo di perdere vere emergenze ha ottimizzato il lato completamente sbagliato del compromesso, motivo per cui il tasso di deviazione dal pronto soccorso deve sempre essere riportato insieme a una metrica di sicurezza che monitori le presentazioni di emergenza mancate o ritardate tra i pazienti deviati, non riportato isolatamente come un puro guadagno di efficienza.

## Come si calcola

```
Tasso di deviazione dal pronto soccorso = contatti con pazienti
                                          deviati in sicurezza dal
                                          pronto soccorso verso un
                                          percorso appropriato a
                                          minore urgenza / totale
                                          contatti con pazienti
                                          valutati come
                                          potenzialmente destinati
                                          al pronto soccorso × 100

"Deviato in sicurezza" richiede conferma, tramite follow-up o dati
di cartella clinica collegati, che la condizione del paziente non
richiedesse effettivamente assistenza urgente entro una finestra di
follow-up stabilita (ad esempio 72 ore) — una decisione di
deviazione non viene convalidata come sicura semplicemente perché
il paziente non si è recato immediatamente al pronto soccorso dopo.

Riportare sempre insieme a:
  Tasso di emergenza mancata = pazienti deviati che hanno
                               effettivamente richiesto assistenza
                               urgente entro la finestra di
                               follow-up / totale pazienti deviati
                               × 100
```

## Esempio pratico

Un servizio di triage digitale valuta 3.000 contatti con pazienti in un mese che l'algoritmo clinico valuta come potenzialmente destinati al pronto soccorso senza intervento. Di questi, 1.800 vengono deviati verso un percorso a minore urgenza (tasso di deviazione 60%). Il follow-up della coorte deviata a 72 ore utilizzando dati di cartella clinica collegati rileva che 45 dei 1.800 pazienti deviati si sono effettivamente recati al pronto soccorso entro quella finestra (tasso di emergenza mancata 45/1.800 × 100 = 2,5%). Riportare il numero di deviazione del 60% senza il tasso di emergenza mancata del 2,5% presenterebbe solo metà del compromesso sicurezza-efficienza che determina effettivamente se il comportamento di deviazione dello strumento sia ben calibrato.

## Fonti dei dati e avvertenze

Confermare che un paziente deviato non abbia poi avuto bisogno di assistenza urgente dipende da dati collegati — sia le cartelle del pronto soccorso dello stesso sistema sanitario, uno scambio regionale di informazioni sanitarie, o una chiamata o un sondaggio di follow-up strutturato con il paziente — e un programma di deviazione che opera senza nessuna di queste fonti di dati non può effettivamente convalidare la propria sicurezza, può solo presumerla sulla base dell'assenza di un reclamo. Il tasso di deviazione appropriato e il tasso di emergenza mancata accettabile sono decisioni politiche cliniche, non puramente statistiche, e dovrebbero essere stabiliti deliberatamente dalla direzione clinica piuttosto che emergere come un sottoprodotto di qualunque soglia un algoritmo di triage usi per caso come predefinita.

## Errori comuni

- **Riportare il tasso di deviazione senza una metrica di sicurezza di emergenza mancata collegata**: un alto tasso di deviazione ottenuto sottotriando vere emergenze non è un successo; le due metriche dovrebbero sempre essere riportate insieme.
- **Presumere che nessuna visita al pronto soccorso significhi che la deviazione fosse sicura**: un paziente può presentarsi al pronto soccorso di un diverso sistema ospedaliero non collegato, o sperimentare un vero esito dannoso senza mai presentarsi a un pronto soccorso; convalidare la sicurezza tramite dati collegati o follow-up strutturato, non solo l'assenza di una visita al pronto soccorso nello stesso sistema.
- **Impostare la soglia di deviazione puramente per massimizzare il tasso di deviazione**: un algoritmo o una politica ottimizzati per massimizzare la deviazione senza un vincolo di sicurezza corrispondente scambieranno la sicurezza del paziente per una cifra di efficienza dall'aspetto migliore.
- **Mescolare il tasso di deviazione in tutti i tipi di reclamo**: i tassi di deviazione appropriati differiscono enormemente per reclamo presentato; un unico numero mescolato non può dimostrare se lo strumento funzioni in modo sicuro ed efficace per le condizioni clinicamente più importanti specifiche.

## Fonti

- Agency for Healthcare Research and Quality (AHRQ), ricerca sull'uso del pronto soccorso e la deviazione appropriata della struttura di assistenza
- NHS England, linee guida su NHS 111 e standard di sicurezza ed efficacia per il triage digitale dell'assistenza urgente ma non potenzialmente letale
- Letteratura peer-reviewed sugli esiti della deviazione dal pronto soccorso tramite triage digitale e assistenza virtuale, ad esempio studi pubblicati su Annals of Emergency Medicine e npj Digital Medicine

Vedi anche: [accuratezza dell'instradamento del triage](../accuratezza-dellinstradamento-del-triage/), la più ampia metrica di accuratezza di cui questo è un sottoinsieme specifico e critico per la sicurezza.
