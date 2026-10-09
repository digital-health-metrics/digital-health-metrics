# Tasso di Fidelizzazione degli Utenti

Il tasso di fidelizzazione degli utenti è la quota di utenti attivi in un periodo iniziale che rimangono attivi in un periodo successivo, e il suo inverso, il tasso di abbandono (churn), è la quota di chi smette del tutto di usare il prodotto. Mentre il tasso di adozione del portale pazienti (vedere quell'argomento) misura se un paziente attiva mai in modo significativo un prodotto di salute digitale, la fidelizzazione misura se continua a usarlo; per qualsiasi prodotto di salute digitale ad abbonamento o di assistenza continuativa, la fidelizzazione è in genere la singola metrica più strettamente collegata sia all'impatto clinico sia alla sostenibilità commerciale.

## Perché è importante

Un prodotto di salute digitale che non riesce a fidelizzare gli utenti non può offrire un beneficio clinico duraturo, per quanto solidi siano i suoi numeri iniziali di adozione o attivazione: uno strumento per la gestione di una condizione cronica usato per due settimane e poi abbandonato difficilmente modificherà un esito biometrico che dipende da mesi di cambiamento comportamentale sostenuto. La fidelizzazione è anche una delle metriche commercialmente più rilevanti che un'azienda di salute digitale riporta a investitori e pagatori, perché le curve di fidelizzazione (la forma del calo nel tempo, non solo una singola percentuale di fidelizzazione) rivelano se il prodotto ha trovato un modello d'uso davvero sostenibile o si limita a catturare un interesse iniziale guidato dalla novità che svanisce in modo prevedibile. Una curva di fidelizzazione che si appiattisce dopo un calo iniziale (i pazienti che superano il primo mese tendono a restare) è un segnale molto diverso, e molto più sano, di una che continua a calare costantemente senza un minimo.

## Come si calcola

```
Tasso di fidelizzazione (periodo N) = utenti attivi nel periodo N che
                                      erano attivi anche nel periodo
                                      della coorte iniziale / utenti
                                      della coorte iniziale × 100

Tasso di abbandono = 1 − tasso di fidelizzazione (per lo stesso periodo)

Riportare come curva di fidelizzazione per coorte (fidelizzazione al
giorno/settimana/mese 1, 2, 3…), non come valore puntuale singolo,
perché un'unica istantanea confonde gli utenti iscritti di recente
(che non hanno ancora avuto occasione di abbandonare) con quelli di
lunga data.
```

## Esempio pratico

Un'app di salute digitale arruola a gennaio una coorte di 1.000 nuovi utenti. Alla fine del mese 1, 640 di quei 1.000 iniziali sono ancora attivi (fidelizzazione al mese 1: 64%). Alla fine del mese 3, 410 restano attivi (fidelizzazione al mese 3: 41%). Al mese 6, 380 restano attivi (fidelizzazione al mese 6: 38%). La forma di questa curva, un forte calo iniziale seguito da un appiattimento tra il mese 3 e il mese 6, suggerisce che il prodotto mantiene un nucleo stabile di utenti una volta superato un ostacolo iniziale di adozione, un segnale sostanzialmente diverso e più incoraggiante rispetto a quello che si avrebbe se il calo dal mese 3 al mese 6 fosse proseguito allo stesso ritmo dei mesi da 1 a 3.

## Fonti dei dati e avvertenze

La fidelizzazione viene calcolata dai registri di accesso o degli eventi di attività del prodotto, definendo "attivo" in modo coerente (ad esempio almeno una sessione idonea nel periodo) per ogni coorte confrontata. Le coorti vanno confrontate a parità di condizioni, con la stessa definizione iniziale di "attivo" e la stessa lunghezza della finestra di osservazione, perché anche piccole differenze di definizione (mesi di 30 giorni rispetto a 28 giorni, o una soglia di "attivo" più rigida rispetto a una più permissiva) possono spostare di diversi punti una percentuale di fidelizzazione riportata senza alcuna reale differenza nel comportamento degli utenti. Gli effetti stagionali sono comuni nelle app per la salute legate ai buoni propositi di inizio anno o a specifici periodi di sensibilizzazione sulla salute, per cui il confronto di coorti anno su anno è in genere più informativo del confronto tra coorti adiacenti di periodi diversi dell'anno.

## Insidie

- **Riportare un'unica istantanea della fidelizzazione anziché una curva**: una singola cifra del tipo "X% degli utenti è ancora attivo" senza la forma del calo nel tempo non può distinguere un prodotto che si stabilizza (sano) da uno in calo continuo (non sano).
- **Cambiare la definizione di "attivo" tra periodi di rendicontazione**: allentare la definizione di utente attivo (ad esempio contando un'apertura passiva dell'app anziché un'azione completata) può far sembrare migliorata la fidelizzazione quando l'uso effettivo non è cambiato affatto.
- **Ignorare la stagionalità delle coorti**: confrontare la fidelizzazione di una coorte di gennaio (spesso gonfiata dalle iscrizioni dei buoni propositi di inizio anno, che in media portano una coorte meno motivata) con una coorte acquisita in un altro periodo dell'anno può produrre conclusioni fuorvianti sull'andamento.
- **Mescolare coorti organiche e coorti acquisite a pagamento**: gli utenti acquisiti tramite canali diversi si fidelizzano spesso in modo molto diverso; accorparli in un'unica cifra aggregata di fidelizzazione può nascondere un problema di fidelizzazione specifico di un canale.

## Fonti

- Letteratura sottoposta a revisione paritaria sul coinvolgimento e sull'abbandono delle app di salute digitale, ad esempio studi pubblicati sul Journal of Medical Internet Research (JMIR mHealth and uHealth)
- Digital Therapeutics Alliance, linee guida di buone pratiche sulla misurazione di coinvolgimento e fidelizzazione per le terapie digitali
- Rapporti di benchmarking di settore sulla fidelizzazione delle app di salute mobile, provenienti da piattaforme di analisi e organizzazioni di ricerca di mercato sulla salute digitale

Vedere anche: [tasso di costanza del coinvolgimento del paziente](../tasso-di-costanza-del-coinvolgimento-del-paziente/), che misura la qualità del coinvolgimento tra gli utenti fidelizzati, distinta dal fatto che restino o meno arruolati.
