# Tasso di Alfabetizzazione Sanitaria Digitale

Il tasso di alfabetizzazione digitale misura la quota di una popolazione di pazienti in grado di completare in modo autonomo e con successo compiti comuni su una piattaforma di salute digitale (accedere, prenotare un appuntamento, partecipare a una videovisita o leggere l'esito di un esame) senza richiedere l'aiuto di un'altra persona. Si distingue dal tasso di accesso digitale, e va sempre misurato separatamente da esso: un paziente può avere uno smartphone e una connessione a banda larga e non essere comunque in grado di orientarsi in una piattaforma di telemedicina senza aiuto, e confondere le due metriche nasconde proprio la popolazione che questa metrica esiste per far emergere.

## Perché è importante

L'accesso digitale da solo non garantisce che un paziente possa usare efficacemente un servizio di salute digitale: pazienti con minore alfabetizzazione sanitaria, esperienza limitata con la tecnologia in generale, disabilità cognitive o visive, o barriere linguistiche con l'interfaccia della piattaforma possono avere pieno accesso tecnico e comunque non riuscire a completare un compito in autonomia, e questo divario è sistematicamente correlato agli stessi gruppi demografici che già affrontano altre disparità di salute. Il Digital Health Equity Measurement Framework di HIMSS tratta l'alfabetizzazione digitale come un pilastro distinto dall'accesso proprio per questo motivo: colmare un divario di accesso senza affrontare anche un divario di alfabetizzazione può lasciare una popolazione tecnicamente connessa ma di fatto incapace di trarne beneficio. Le organizzazioni che misurano il completamento dei compiti e il tempo di completamento per le azioni più comuni sulla piattaforma, segmentati per lingua e indicatori socioeconomici, sono in grado di individuare le barriere di alfabetizzazione e di mirare il supporto (interfacce semplificate, onboarding assistito, contenuti in altre lingue) con molta più precisione rispetto alle organizzazioni che si affidano solo a metriche di accesso o a punteggi complessivi di soddisfazione.

## Come si calcola

```
Tasso di alfabetizzazione digitale = pazienti che completano in autonomia
                                     un compito definito senza aiuto /
                                     pazienti che tentano quel compito
                                     × 100

Compiti misurati comunemente: accesso all'account, prenotazione di un
appuntamento, partecipazione a una videovisita, consultazione di un
esito di esame, compilazione di un modulo di accettazione.

Riportare per compito, non come un unico punteggio complessivo, perché
l'alfabetizzazione per compiti semplici (accesso) e complessi
(compilazione di un modulo di accettazione in più passaggi) differisce
sostanzialmente e accorparli oscura dove si trova la barriera specifica.
```

## Esempio pratico

Un sistema sanitario monitora la partecipazione alla videovisita come compito definito su 5.000 appuntamenti di telemedicina programmati in un mese. Di questi, 4.100 pazienti partecipano con successo senza alcuna chiamata di supporto o assistenza tecnica durante la visita (tasso di alfabetizzazione digitale per questo compito: 82%). La segmentazione per lingua principale mostra un tasso dell'89% per i pazienti anglofoni contro il 61% per i pazienti la cui lingua principale differisce dalla lingua predefinita dell'interfaccia della piattaforma, un divario di 28 punti che sarebbe invisibile se si riportasse solo l'82% complessivo, e che indica direttamente un intervento specifico e realizzabile (interfaccia e istruzioni tradotte) anziché un vago problema generale di alfabetizzazione.

## Fonti dei dati e avvertenze

I dati sul completamento dei compiti vengono in genere acquisiti dai registri degli eventi della piattaforma (il paziente ha raggiunto la videovisita, il flusso di prenotazione dell'appuntamento si è concluso senza abbandono), integrati con dati di chiamate di supporto o contatti con l'help desk per individuare i compiti che sono stati tecnicamente "completati" solo perché il paziente ha ricevuto assistenza in tempo reale a metà percorso. Un compito contato come "completato" unicamente dai registri di sistema può mascherare che un paziente ha avuto bisogno di una telefonata di un familiare o del personale di supporto per arrivarci: un completamento realmente indipendente dall'alfabetizzazione va definito e monitorato separatamente da uno assistito, ovunque la piattaforma sappia distinguere i due. L'alfabetizzazione digitale è correlata a, ma analiticamente distinta da, l'alfabetizzazione sanitaria e l'alfabetizzazione generale; dove è richiesta una valutazione formale va usato uno strumento validato (anziché un'ipotesi informale basata solo su età o dati demografici).

## Insidie

- **Confondere alfabetizzazione digitale e accesso digitale**: un paziente con pieno accesso tecnico può comunque non avere l'alfabetizzazione per usarlo efficacemente; sono metriche separate che richiedono interventi separati e non vanno mai riportate come un'unica cifra combinata.
- **Contare i completamenti assistiti come successi autonomi**: se un paziente completa un compito solo con una chiamata di supporto o l'aiuto di un familiare, quello è un divario di alfabetizzazione che la piattaforma ha coperto, non risolto; distinguere il completamento assistito da quello autonomo dove i dati lo consentono.
- **Riportare un unico punteggio complessivo di completamento dei compiti**: l'alfabetizzazione per un compito semplice (accedere) e per uno complesso (compilare un modulo di accettazione dettagliato) differisce sostanzialmente; riportare per compito per individuare esattamente dove si trova la barriera.
- **Presumere che la sola età predica l'alfabetizzazione digitale**: sebbene l'età sia correlata in aggregato a una minore alfabetizzazione digitale, la padronanza della lingua dell'interfaccia della piattaforma e la familiarità generale con la tecnologia sono spesso predittori individuali più forti e vanno misurate direttamente anziché dedotte dall'età.

## Fonti

- HIMSS, Digital Health Equity Measurement Framework (DHEMF)
- Office of the National Coordinator for Health Information Technology (ONC), ricerca sull'usabilità delle tecnologie dell'informazione sanitaria e sull'alfabetizzazione sanitaria digitale
- Letteratura sottoposta a revisione paritaria sulla misurazione e sugli interventi per l'alfabetizzazione sanitaria digitale, ad esempio studi pubblicati sul Journal of Medical Internet Research (JMIR)

Vedere anche: [tasso di accesso digitale](../tasso-di-accesso-digitale/), la metrica di precondizione con cui questa viene più comunemente, e più comunemente a torto, confusa.
