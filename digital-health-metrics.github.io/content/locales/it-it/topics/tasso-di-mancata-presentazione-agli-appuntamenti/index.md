# Tasso di Mancata Presentazione agli Appuntamenti

Il tasso di mancata presentazione agli appuntamenti (chiamato anche tasso "did not attend", o DNA) è la quota di appuntamenti programmati in cui il paziente non si è presentato né ha cancellato con un preavviso ragionevole. È una delle metriche operative più antiche in sanità, e gli strumenti digitali, in particolare i promemoria, la riprogrammazione self-service e la prenotazione tramite portale, sono oggi tra le leve più efficaci e meglio documentate per ridurlo.

## Perché è importante

Ogni mancata presentazione è un'unità di capacità clinica che di solito non può essere recuperata, poiché la maggior parte dei servizi non può riempire uno spazio libero lo stesso giorno con breve preavviso, quindi il tasso guida direttamente la lunghezza delle liste d'attesa, il costo per appuntamento completato e il tempo del clinico perso. Il comportamento di mancata presentazione non è distribuito uniformemente: è correlato alla deprivazione, all'accesso ai trasporti, alle responsabilità di cura e al peso della gestione di più condizioni croniche, quindi trattare un tasso elevato puramente come un problema di comportamento del paziente, anziché in parte come un segnale sulle barriere di accesso, tende a produrre interventi (come sanzioni generalizzate) che consolidano l'iniquità anziché ridurla. I promemoria digitali e la facile riprogrammazione digitale sono costantemente tra gli interventi più efficaci e a basso costo disponibili, motivo per cui questa metrica appartiene a pieno titolo a un programma di misurazione della salute digitale e non solo alla reportistica operativa.

## Come si calcola

```
Tasso di mancata presentazione = appuntamenti segnati "did not attend" / totale appuntamenti programmati × 100
```

Un appuntamento programmato viene tipicamente escluso dal denominatore, o spostato in una categoria separata, se è stato cancellato da una delle parti con un preavviso superiore a un periodo definito (comunemente 24 ore). Le cancellazioni tardive (al di sotto di quel periodo di preavviso) vengono solitamente riportate separatamente dalle vere mancate presentazioni, poiché le implicazioni operative e comportamentali differiscono.

## Esempio pratico

Una clinica comunitaria programma 2.000 appuntamenti in un mese. Di questi, 140 vengono cancellati con più di 24 ore di preavviso (riprogrammati ed esclusi dal denominatore), 60 vengono cancellati tardivamente (meno di 24 ore), e 180 vengono registrati come vera mancata presentazione senza alcun contatto. Il tasso di mancata presentazione è 180 / 2.000 × 100 = 9%. Se le 60 cancellazioni tardive venissero inglobate nella stessa categoria delle vere mancate presentazioni, il tasso riportato salirebbe al 12%, motivo per cui la definizione utilizzata deve sempre essere dichiarata insieme alla cifra.

## Fonti dei dati e avvertenze

Il sistema di programmazione o di gestione dello studio è la fonte primaria, utilizzando i suoi codici di stato dell'appuntamento; la qualità della metrica dipende interamente dal fatto che il personale utilizzi in modo coerente lo stato corretto anziché una generica categoria "cancellato" per tutto. Le organizzazioni che introducono promemoria digitali (SMS, notifica push dell'app, o avvisi tramite portale) dovrebbero misurare il tasso di mancata presentazione prima e dopo il cambiamento per un mix di pazienti e servizi comparabile, poiché l'efficacia dei promemoria è ben documentata in studi randomizzati e osservazionali ma varia per popolazione e canale.

## Insidie

- **Confrontare tassi grezzi tra cliniche con pratiche di overbooking diverse**: una clinica che deliberatamente esegue overbooking per compensare un tasso di mancata presentazione previsto mostrerà un tasso apparente diverso rispetto a una che non lo fa, indipendentemente dal reale comportamento dei pazienti.
- **Confondere le cancellazioni tardive con le vere mancate presentazioni**: le due hanno cause e soluzioni digitali diverse (un problema di cancellazione tardiva è spesso risolto con una riprogrammazione self-service più facile; un problema di vera mancata presentazione è spesso risolto con promemoria migliori e accuratezza dei contatti).
- **Bias di sopravvivenza dalle politiche di dimissione**: i servizi che dimettono i pazienti dopo mancate presentazioni ripetute vedranno il proprio tasso migliorare meccanicamente, semplicemente spostando gli stessi pazienti altrove nel sistema.
- **Attribuire al paziente l'esclusione digitale**: un paziente senza smartphone o servizio di messaggistica affidabile non beneficerà di una strategia di promemoria solo digitale, quindi un approccio multicanale (lettera, chiamata, sms, app) è di solito necessario per evitare di ampliare i divari di accesso.

## Fonti

- NHS England, appuntamenti mancati nella medicina generale e nell'assistenza ambulatoriale, statistiche e linee guida pubblicate
- Revisioni sistematiche Cochrane sugli interventi per ridurre gli appuntamenti sanitari mancati, inclusi i sistemi di promemoria
- Letteratura sottoposta a revisione paritaria sui correlati socioeconomici e demografici della mancata presentazione agli appuntamenti

Vedere anche: [tasso di visite in telemedicina](../tasso-di-visite-in-telemedicina/), poiché il comportamento di mancata presentazione comunemente differisce per modalità di consultazione, e [tasso di adozione del portale pazienti](../tasso-di-adozione-del-portale-pazienti/), poiché l'auto-pianificazione e i promemoria basati sul portale sono un intervento digitale primario.
