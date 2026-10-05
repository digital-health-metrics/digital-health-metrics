# Tasso di Fidelizzazione degli Utenti

Il tasso di fidelizzazione degli utenti misura la quota di utenti che rimane attivamente iscritta o continua a usare un prodotto di salute digitale nei periodi successivi dopo l'iscrizione iniziale, tipicamente visualizzata come una curva di fidelizzazione per coorte. È la metrica che distingue un prodotto con uno schema di utilizzo sostenibile da uno che cavalca un'onda di novità e poi perde utenti in uno schema di declino prevedibile.

## Perché è importante

Quasi ogni prodotto di salute digitale sperimenta un certo abbandono dopo l'iscrizione iniziale, ma la forma della curva di fidelizzazione rivela se quell'abbandono si stabilizza su una base di utenti principale sostenibile o se continua a scendere verso lo zero. Un prodotto con una curva di fidelizzazione che si appiattisce dopo le prime settimane ha trovato un nucleo di utenti per i quali il prodotto fornisce un valore duraturo, mentre un prodotto con una curva che non si appiattisce mai probabilmente non fornisce un valore duraturo, indipendentemente da quanto sia forte la sua cifra di iscrizione iniziale. Investitori, partner di sistemi sanitari e team di prodotto fanno tutti affidamento sulle curve di fidelizzazione come uno dei segnali precoci più affidabili della vitalità a lungo termine del prodotto, perché a differenza di molte altre metriche in questo libro può essere calcolata relativamente presto nella vita di un prodotto ed essere comunque fortemente predittiva del successo a lungo termine.

## Come si calcola

```
Tasso di fidelizzazione degli utenti (giorno/settimana/mese N) =
                                   utenti della coorte di iscrizione
                                   iniziale ancora attivi al
                                   momento N / totale utenti della
                                   coorte di iscrizione iniziale
                                   × 100

Questo viene tipicamente calcolato per più punti temporali (giorno
1, giorno 7, giorno 30, giorno 90) per costruire una curva di
fidelizzazione completa, piuttosto che riportato come un unico
numero.
```

## Esempio pratico

Un'app digitale di fisioterapia iscrive una coorte di 1.000 utenti a gennaio. Al giorno 7, 600 sono ancora attivi (fidelizzazione 60%), al giorno 30, 350 sono ancora attivi (fidelizzazione 35%), e al giorno 90, 320 sono ancora attivi (fidelizzazione 32%). Il fatto che la curva scenda bruscamente dal giorno 7 al giorno 30 ma poi si appiattisca in gran parte dal giorno 30 al giorno 90 è un segnale positivo forte — suggerisce che il prodotto ha trovato una base di utenti principale di circa il 32% per i quali fornisce un valore duraturo, piuttosto che continuare a perdere utenti indefinitamente. Riportare solo una cifra di "utenti attivi dopo 90 giorni" senza l'intera curva avrebbe nascosto questa importante informazione sulla forma.

## Fonti dei dati e avvertenze

Il calcolo della fidelizzazione richiede il tracciamento dei singoli utenti dalla loro data di iscrizione iniziale attraverso tutti i punti temporali successivi, il che significa che la definizione di "attivo" deve essere fissata in modo coerente (ad esempio almeno una sessione nella settimana precedente) e applicata uniformemente in tutta la coorte. Il confronto delle curve di fidelizzazione tra coorti diverse (ad esempio utenti iscritti in mesi diversi) richiede attenzione a fattori stagionali o esterni che potrebbero aver influenzato il comportamento di una particolare coorte indipendentemente dal prodotto stesso.

## Errori comuni

- **Riportare un singolo numero di fidelizzazione invece dell'intera curva**: la forma della curva di fidelizzazione (se si appiattisce o continua a scendere) è spesso più informativa di qualsiasi singolo punto temporale.
- **Definire "attivo" in modo incoerente**: cambiare la definizione di utilizzo attivo tra coorti o periodi di tempo rende insignificanti i confronti di fidelizzazione.
- **Ignorare gli effetti di coorte**: gli utenti iscritti tramite canali diversi o in periodi diversi possono avere schemi di fidelizzazione sistematicamente diversi indipendentemente dai cambiamenti del prodotto.
- **Confondere la fidelizzazione con la qualità del coinvolgimento**: un utente può rimanere "attivo" al di sotto di una soglia di utilizzo minima senza ottenere alcun beneficio reale; combinare con il tasso di costanza del coinvolgimento del paziente per un quadro completo.

## Fonti

- Standard del settore delle app mobili per l'analisi della fidelizzazione per coorte
- Letteratura peer-reviewed sulla fidelizzazione e l'abbandono nella salute digitale, ad esempio studi pubblicati su Journal of Medical Internet Research (JMIR)
- Rock Health, analisi del settore sugli schemi di coinvolgimento nella salute digitale

Vedi anche: [rapporto di stickiness DAU/MAU](../rapporto-di-stickiness-dau-mau/), la metrica complementare per l'intensità del coinvolgimento tra gli utenti che rimangono iscritti.
