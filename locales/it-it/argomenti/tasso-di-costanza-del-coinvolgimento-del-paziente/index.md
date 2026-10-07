# Tasso di Costanza del Coinvolgimento del Paziente

Il tasso di costanza del coinvolgimento del paziente misura con quale regolarità un paziente arruolato interagisce nel tempo con un prodotto di salute digitale (ad esempio registrando alimenti o sintomi, annotando l'attività fisica o consultando i dati sulla salute) anziché semplicemente se lo abbia usato o meno. È una metrica longitudinale, distinta da un conteggio dell'uso attivo in un dato momento: due pazienti possono avere identico stato "ha usato l'app questo mese" mentre uno registra con costanza ogni giorno e l'altro registra una volta e sparisce per tre settimane, e solo la metrica di costanza li distingue.

## Perché è importante

L'interazione regolare e sostenuta con uno strumento di salute digitale è uno degli indicatori anticipatori più affidabili del beneficio clinico, in particolare per le condizioni dipendenti dal comportamento come il diabete, la gestione del peso e la salute mentale, dove il valore dello strumento deriva dall'abitudine che sostiene e non da una singola sessione. Un prodotto può riportare un sano numero di utenti attivi mensili pur servendo una popolazione che accede una volta e si allontana, perché l'uso attivo mensile è una soglia bassa che non dice nulla sul modello d'uso all'interno del mese; le metriche di costanza lo colgono in un modo che i semplici conteggi di attività non possono. Poiché la costanza è anche una delle cose più difficili da sostenere nell'arco di mesi anziché di settimane, è un segnale più onesto della qualità del prodotto e dell'adeguatezza clinica rispetto alle cifre di coinvolgimento su finestre brevi, soggette a effetti di novità subito dopo l'onboarding.

## Come si calcola

```
Tasso di costanza del coinvolgimento = settimane con almeno una
                                       interazione idonea / totale
                                       settimane di arruolamento × 100

Un'"interazione idonea" va definita in modo esplicito e coerente (ad es.
una registrazione di un alimento, un controllo dei sintomi o una
sincronizzazione di attività completata), mai un evento passivo come
l'apertura dell'app senza alcuna azione registrata.

Riportare come distribuzione, non solo come media della popolazione:
  ad es. quota di pazienti con costanza settimanale ≥ 80%,
         quota con 50-79%, quota con < 50%
```

## Esempio pratico

Un'app di coaching nutrizionale arruola un paziente per 12 settimane. Il paziente registra almeno un alimento idoneo in 9 di quelle 12 settimane, il che dà un tasso individuale di costanza del coinvolgimento di 9 / 12 × 100 = 75%. Sull'intera coorte dell'app di 2.000 pazienti arruolati da almeno 12 settimane, 600 pazienti (30%) mantengono una costanza settimanale ≥ 80%, 900 (45%) rientrano nella fascia 50-79% e 500 (25%) sono sotto il 50%. Riportare solo la media della coorte (che potrebbe attestarsi intorno al 65%) oscurerebbe che un quarto intero dei pazienti si coinvolge a malapena: un segmento che vale la pena indagare separatamente anziché diluirlo in una media complessiva.

## Fonti dei dati e avvertenze

I dati di costanza provengono dai registri degli eventi del prodotto (registrazioni di alimenti, sincronizzazioni di attività, controlli), e la definizione di "interazione idonea" ha un effetto enorme sul tasso risultante: una definizione permissiva (qualsiasi apertura dell'app) apparirà sempre migliore di una rigorosa (una registrazione completata e significativa), per cui la definizione utilizzata va dichiarata chiaramente accanto a qualsiasi cifra riportata. I dati sincronizzati automaticamente (ad esempio un fitness tracker connesso che sincronizza l'attività in background) vanno riportati separatamente dai dati registrati manualmente, perché la sincronizzazione automatica può gonfiare l'apparente costanza senza riflettere alcuno sforzo attivo del paziente o coinvolgimento con le indicazioni del prodotto.

## Insidie

- **Confondere le aperture dell'app con un coinvolgimento significativo**: un'apertura passiva dell'app (ad esempio innescata da una notifica push) non equivale a un alimento registrato o a un controllo completato; definire e riportare solo le interazioni idonee.
- **Riportare solo la media della popolazione**: un tasso medio di costanza dall'aspetto sano può nascondere una popolazione bimodale di pazienti molto coinvolti e quasi del tutto disimpegnati; riportare la distribuzione tra le fasce di costanza, non solo la media.
- **Ignorare il denominatore della durata dell'arruolamento**: confrontare i tassi di costanza tra pazienti arruolati per durate molto diverse senza tenere conto della durata dell'arruolamento falserà il risultato a favore del gruppo che ha avuto una finestra di misurazione più breve e più facile da sostenere.
- **La sincronizzazione automatica in background che gonfia il tasso**: un flusso di dati di un dispositivo indossabile sincronizzato passivamente può far apparire costantemente attivo un paziente disimpegnato, senza alcun reale cambiamento di comportamento o coinvolgimento con il prodotto da parte sua.

## Fonti

- Letteratura sottoposta a revisione paritaria sui modelli di coinvolgimento nella salute digitale e sulla loro relazione con gli esiti clinici, ad esempio studi pubblicati sul Journal of Medical Internet Research (JMIR)
- American Medical Informatics Association (AMIA), linee guida sulla qualità dei dati sanitari generati dal paziente e sulla misurazione del coinvolgimento
- Digital Therapeutics Alliance, linee guida di buone pratiche sulla misurazione di coinvolgimento ed esiti per le terapie digitali

Vedere anche: [tasso di fidelizzazione degli utenti](../tasso-di-fidelizzazione-degli-utenti/), la metrica strettamente correlata che misura se un paziente rimane arruolato, distinta da quanto costantemente si coinvolga mentre è arruolato.
