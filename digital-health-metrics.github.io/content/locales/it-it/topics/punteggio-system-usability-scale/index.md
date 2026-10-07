# Punteggio System Usability Scale

Il punteggio System Usability Scale (SUS) è un questionario standardizzato di 10 voci utilizzato per quantificare quanto sia usabile un software, che produce un unico punteggio da 0 a 100 confrontabile con norme di settore ben consolidate. A differenza del Net Promoter Score, che misura la disponibilità a raccomandare, o delle misure di esito riferite dal paziente, che misurano lo stato clinico o funzionale, il SUS misura una cosa specifica: quanto sia facile imparare e usare il software stesso, per i pazienti o per il personale clinico.

## Perché è importante

Uno strumento di salute digitale può avere solide evidenze cliniche e un business case convincente e fallire comunque nella pratica perché pazienti o clinici trovano l'interfaccia confusa, lenta o frustrante da usare, e poiché il SUS è uno strumento validato e ampiamente utilizzato con decenni di dati di benchmarking pubblicati tra settori diversi, consente a un team di salute digitale di confrontare l'usabilità del proprio prodotto con una distribuzione nota anziché affidarsi a impressioni informali o a lamentele aneddotiche. Il SUS è deliberatamente indipendente dalla tecnologia e rapido da somministrare (in genere meno di cinque minuti), il che lo rende pratico da ripetere nelle iterazioni di progettazione, a differenza di uno studio completo di usabilità o di una sperimentazione clinica formale. Poiché i difetti di usabilità rivolti ai clinici sono un fattore documentato del burnout (vedere il tasso di burnout dei medici) e quelli rivolti ai pazienti sono un fattore documentato di abbandono e di scarsi esiti di alfabetizzazione digitale (vedere il tasso di alfabetizzazione sanitaria digitale), il SUS funziona come segnale di usabilità di allerta precoce a basso costo, in grado di individuare un problema di progettazione prima che emerga in quelle metriche a valle più gravose.

## Come si calcola

```
Punteggio SUS = ((somma dei punteggi delle voci dispari − 5) +
                 (25 − somma dei punteggi delle voci pari)) × 2,5

Il risultato è un unico punteggio da 0 a 100 (non una percentuale,
nonostante la scala, poiché non rappresenta una "percentuale di risposte
corrette" o simile).

Interpretazione pubblicata dei parametri di riferimento (Bangor et al.):
  Sopra 80  — usabilità eccellente
  68        — media, in base alla norma generale del settore
  Sotto 51  — usabilità scarsa, che richiede approfondimento
```

## Esempio pratico

Una piattaforma di telemedicina somministra il questionario SUS standard di 10 voci a 150 pazienti dopo la loro prima videovisita. Il punteggio SUS medio calcolato su tutti i rispondenti è 74. Confrontato con la media di settore largamente citata di 68, indica un'usabilità superiore alla media per questa specifica popolazione di pazienti e questo caso d'uso, pur restando sensibilmente al di sotto della soglia di "eccellente" di 80 che suggerirebbe poche barriere di usabilità residue. Segmentando per età le stesse 150 risposte, il punteggio medio è 81 per i pazienti sotto i 50 anni e 62 per i pazienti di 65 anni e più, un divario che indica un problema di usabilità specifico e risolvibile per i pazienti più anziani anziché un problema generale di usabilità del prodotto, e che una singola media complessiva avrebbe nascosto.

## Fonti dei dati e avvertenze

I dati SUS provengono direttamente da pazienti o clinici che compilano il questionario standardizzato di 10 voci, e lo strumento deve essere somministrato esattamente come validato (le stesse 10 voci, la stessa scala di accordo a 5 punti, la stessa formula di punteggio) perché il punteggio ottenuto sia confrontabile con i parametri pubblicati; una versione modificata o abbreviata del questionario, per quanto ben intenzionata, produce un punteggio che non può essere interpretato in modo affidabile rispetto alla distribuzione standard di riferimento. Il SUS misura l'usabilità percepita, che è correlata a, ma non identica al, successo oggettivo nel completamento dei compiti (vedere il tasso di alfabetizzazione sanitaria digitale per una misura basata sul completamento dei compiti); un prodotto può ottenere un buon punteggio SUS da pazienti che non hanno provato le funzioni più complesse, per cui abbinare il SUS a dati oggettivi di completamento dei compiti dà un quadro più completo di ciascuno dei due da solo. I tempi di risposta contano: somministrare il SUS subito dopo un episodio specifico frustrante (una connessione fallita, un passaggio confuso) o dopo una sessione fluida può spostare i punteggi indipendentemente dall'usabilità complessiva del prodotto.

## Insidie

- **Modificare le voci o il punteggio del questionario standard**: anche piccole modifiche di formulazione o di scala invalidano il confronto con la distribuzione di riferimento pubblicata e ben consolidata; usare lo strumento standard di 10 voci esattamente come validato.
- **Riportare solo il punteggio medio senza segmentazione**: l'usabilità varia spesso sensibilmente per età dell'utente, alfabetizzazione digitale o ruolo (paziente rispetto a clinico); segmentare la reportistica per individuare lacune specifiche e risolvibili di usabilità che una singola media nasconde.
- **Trattare il SUS come misura di efficacia clinica**: il SUS misura specificamente l'usabilità, non l'esito clinico né la soddisfazione per le cure; uno strumento molto usabile può comunque non migliorare gli esiti clinici, e le due cose non vanno mai confuse né sostituite l'una all'altra.
- **Somministrare l'indagine solo dopo sessioni insolitamente fluide o insolitamente frustranti**: i tempi e il contesto della somministrazione possono distorcere il punteggio; somministrare in modo coerente su un campione rappresentativo di sessioni reali, non solo comode o scelte selettivamente.

## Fonti

- Brooke, J., "SUS: A Quick and Dirty Usability Scale", lo strumento originale pubblicato
- Bangor, Kortum e Miller, ricerca di benchmarking sul SUS pubblicata che ha stabilito le fasce di interpretazione del punteggio largamente citate
- Letteratura sottoposta a revisione paritaria sull'uso del SUS nella salute digitale e nella valutazione dell'usabilità della telemedicina, ad esempio studi pubblicati su JMIR Human Factors

Vedere anche: [punteggio net promoter del paziente](../punteggio-net-promoter-del-paziente/), una metrica correlata ma distinta riferita dal paziente, che misura soddisfazione e fedeltà e non specificamente l'usabilità del software.
