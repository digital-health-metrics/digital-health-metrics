# ISO/TS 82304-2

ISO/TS 82304-2 è una specifica tecnica internazionale, pubblicata dal Comitato Tecnico ISO 215 (Informatica Sanitaria), che definisce un metodo strutturato per valutare la qualità delle applicazioni di salute e benessere — che spaziano dall'usabilità, alla robustezza tecnica e affidabilità, all'interoperabilità, alla qualità dei contenuti e alla sicurezza e privacy dei dati — per prodotti che rientrano al di fuori dell'ambito della regolamentazione completa dei dispositivi medici ma che comunque influenzano sostanzialmente le decisioni sanitarie o il comportamento di un utente. Esiste per colmare un divario specifico: la grande maggioranza delle app di salute e benessere rivolte ai consumatori (tracker di fitness, diari dei sintomi, app di coaching per il benessere) non è regolamentata come dispositivo medico, ma in precedenza non esisteva un modo comune e strutturato per valutare o confrontare la loro qualità e sicurezza di base.

## Perché è importante

Gli store di applicazioni ospitano centinaia di migliaia di app di salute e benessere con qualità enormemente variabile, e prima che esistesse una specifica tecnica comune, un paziente, un clinico o un sistema sanitario non avevano un modo strutturato e confrontabile per valutare la qualità e la sicurezza di base di un'app rispetto a un'altra oltre alle valutazioni a stelle e alle affermazioni di marketing — un divario importante perché un'app sanitaria mal progettata può comunque causare danni reali (contenuti imprecisi, scarsa sicurezza dei dati, affermazioni fuorvianti) anche senza raggiungere la soglia normativa di un dispositivo medico. ISO/TS 82304-2 è deliberatamente strutturata intorno ad aree che un valutatore non specializzato può valutare in modo coerente, il che l'ha resa la base tecnica per diversi servizi nazionali e commerciali di etichettatura della qualità e cura delle app sanitarie, dando ai sistemi sanitari e alle librerie di app un modo difendibile e standardizzato per includere o escludere app da un elenco raccomandato invece di affidarsi a una valutazione ad hoc.

## Come si applica

```
La valutazione è organizzata attorno ad aree di qualità
consolidate, valutate tramite valutazione strutturata piuttosto che
una singola formula numerica:

Usabilità                             — chiarezza, accessibilità e
                                       facilità d'uso per il
                                       gruppo di utenti previsto
Robustezza/affidabilità tecnica       — stabilità, prestazioni e
                                       assenza di difetti tecnici
Interoperabilità                      — capacità di scambiare dati
                                       con altri sistemi dove
                                       rilevante per la funzione
                                       dell'app
Qualità e sicurezza dei contenuti     — accuratezza, attualità e
                                       assenza di affermazioni
                                       sanitarie dannose o
                                       fuorvianti
Sicurezza e privacy                   — pratica di protezione dei
                                       dati e trasparenza sull'uso
                                       dei dati

Ogni area viene valutata tramite criteri di valutazione strutturati
e combinata in una valutazione complessiva della qualità, che
diversi schemi di etichettatura della qualità delle app sanitarie
usano come base tecnica per un'etichetta pubblica di qualità o una
decisione di inclusione in una libreria curata.
```

## Esempio pratico

Un programma di libreria di app digitali di un sistema sanitario vuole curare un elenco raccomandato di app di benessere per i pazienti invece di lasciare completamente la selezione delle app alla ricerca nello store di applicazioni. Ogni app candidata viene valutata rispetto alle aree ISO/TS 82304-2: un'app di tracciamento del sonno ottiene un buon punteggio in usabilità e robustezza tecnica, un punteggio adeguato in qualità dei contenuti, ma viene segnalata durante la valutazione di sicurezza e privacy per la condivisione di dati utente con inserzionisti terzi senza una chiara comunicazione — una scoperta sufficientemente significativa da escludere l'app dall'elenco raccomandato nonostante il suo punteggio di usabilità altrimenti forte. Questo risultato area per area è più utile sia per il team di cura sia, se condiviso, per lo sviluppatore dell'app stesso, rispetto a quanto lo sarebbe un singolo punteggio di qualità mescolato, poiché identifica precisamente quale aspetto debba essere affrontato prima che l'app possa essere riconsiderata.

## Fonti dei dati e avvertenze

La valutazione rispetto a ISO/TS 82304-2 viene tipicamente condotta da un valutatore formato o da un servizio di valutazione accreditato, seguendo i criteri di valutazione strutturati della specifica per ciascuna area, e diverse iniziative nazionali e commerciali (organizzazioni di etichettatura della qualità e cura delle app sanitarie, alcune operanti sotto approvazione formale del sistema sanitario nazionale) usano lo standard come base tecnica per i propri marchi di qualità delle app rivolti al pubblico — il che significa che lo stato "certificato" o "etichettato" di un'app in pratica riflette spesso l'implementazione dello standard da parte di uno specifico schema di etichettatura, non necessariamente un processo identico in tutti gli schemi, quindi l'organizzazione valutatrice specifica e la sua metodologia dovrebbero essere verificate e comunicate insieme a qualsiasi etichetta di qualità citata. La specifica valuta le caratteristiche di qualità e sicurezza di base di un'app come software; non è un sostituto dell'approvazione normativa dei dispositivi medici laddove le affermazioni o le funzioni di un'app raggiungano effettivamente la soglia di dispositivo medico, e usarla come tale sarebbe un errore di categoria.

## Errori comuni

- **Trattare un'etichetta di qualità come approvazione normativa**: un'app valutata ed etichettata secondo ISO/TS 82304-2 non ha quindi ricevuto l'approvazione normativa come dispositivo medico; i due servono scopi diversi e non dovrebbero mai essere confusi nel modo in cui un'app viene descritta o commercializzata.
- **Presumere che tutti gli schemi di etichettatura basati sullo standard siano equivalenti**: organizzazioni diverse implementano la valutazione basata su ISO/TS 82304-2 con i propri processi di valutazione specifici e rigore; verificare quale organizzazione abbia condotto una valutazione e come, invece di trattare ogni marchio "basato su ISO/TS 82304-2" come intercambiabile con un altro.
- **Valutare solo l'usabilità trascurando sicurezza e privacy**: i problemi di usabilità sono i più visibili per un utente finale e i più facili da valutare informalmente, il che può portare i valutatori a sottovalutare l'area meno visibile ma potenzialmente più consequenziale della sicurezza e privacy.
- **Trattare la valutazione come una certificazione unica e permanente**: i contenuti, le pratiche di sicurezza e gli accordi di condivisione dei dati con terze parti di un'app possono tutti cambiare dopo una valutazione iniziale; un programma credibile di etichettatura della qualità rivaluta periodicamente invece di trattare un superamento iniziale come permanente.

## Fonti

- International Organization for Standardization, ISO/TS 82304-2:2021, "Health software — Part 2: Health and wellness apps — Quality and reliability"
- Comitato Tecnico ISO 215 (Informatica Sanitaria), informazioni di pubblicazione e gruppo di lavoro
- Organizzazioni nazionali e commerciali di etichettatura della qualità e cura delle app sanitarie che pubblicano la propria metodologia di valutazione basata su questo standard

Vedi anche: [punteggio System Usability Scale](../punteggio-system-usability-scale/), uno strumento complementare e più ristretto specifico per l'usabilità spesso usato insieme a una più ampia valutazione della qualità ISO/TS 82304-2.
