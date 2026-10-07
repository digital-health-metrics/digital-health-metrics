# Punteggio Net Promoter del Paziente

Il Net Promoter Score (NPS) del paziente misura la disponibilità dei pazienti a raccomandare ad altri un prodotto di salute digitale o un servizio di telemedicina, sulla base di un'unica domanda di indagine ("Con quale probabilità raccomanderebbe questo servizio a un amico o a un collega?") valutata da 0 a 10. Chi risponde con 9-10 è un "promotore", 7-8 un "passivo" e 0-6 un "detrattore"; l'NPS è la percentuale di promotori meno la percentuale di detrattori. È la metrica di soddisfazione del paziente più usata, e più criticata, nella salute digitale, apprezzata per la sua semplicità ma limitata in ciò che può diagnosticare da sola.

## Perché è importante

L'NPS offre ai team di salute digitale un segnale di soddisfazione semplice, standardizzato e confrontabile, economico da raccogliere e facile da interpretare a colpo d'occhio per gli stakeholder non specialisti (dirigenti, consigli di amministrazione, committenti), ed è per questo che rimane popolare nonostante limiti metodologici ben documentati. Per i prodotti di telemedicina e di "porta d'ingresso digitale" in particolare, l'NPS è spesso l'indicatore anticipatore del fatto che i pazienti continueranno a scegliere il canale digitale rispetto a un'alternativa di persona quando entrambi sono disponibili, con implicazioni dirette sulla pianificazione del mix di canali e della capacità. Tuttavia l'NPS è un unico numero di sintesi di alto livello: un NPS in calo dice a un team che qualcosa non va ma non cosa, per cui va sempre abbinato a commenti testuali liberi o a uno strumento di usabilità più granulare per essere utilizzabile e non soltanto un numero su un cruscotto.

## Come si calcola

```
NPS = % promotori (punteggio 9-10) − % detrattori (punteggio 0-6)

Il risultato è un numero da −100 a +100, non una percentuale, anche se
deriva da percentuali: non aggiungere mai il segno "%" a un valore NPS.

Riportare insieme a:
  tasso di risposta (% di pazienti intervistati che hanno risposto)
  dimensione del campione
  la formulazione esatta della domanda utilizzata
```

## Esempio pratico

Una piattaforma di telemedicina intervista 1.000 pazienti dopo una videovisita e riceve 400 risposte (tasso di risposta 40%). Di questi 400 rispondenti, 220 danno 9-10 (promotori, 55%), 100 danno 7-8 (passivi, 25%) e 80 danno 0-6 (detrattori, 20%). L'NPS è 55 − 20 = 35. Questo valore ha significato solo nel contesto: un NPS di 35 potrebbe essere un risultato solido rispetto al settore della telemedicina in generale, oppure un calo preoccupante rispetto al punteggio di 48 della stessa piattaforma nel trimestre precedente; l'NPS è molto più utile come andamento nel tempo per un prodotto che come parametro assoluto una tantum rispetto a un altro.

## Fonti dei dati e avvertenze

L'NPS viene raccolto tramite un'indagine successiva all'interazione, in genere attivata subito dopo una videovisita, una sessione dell'app o un episodio di cura, e il tasso di risposta conta moltissimo: un basso tasso di risposta (molto inferiore al ~40% dell'esempio pratico) rischia una distorsione da mancata risposta, in cui solo i pazienti molto soddisfatti o molto insoddisfatti si prendono la briga di rispondere, spostando il punteggio verso gli estremi e lontano dal reale sentimento della popolazione. Confrontare l'NPS tra organizzazioni, o anche tra canali diversi di una stessa organizzazione (ad esempio telemedicina rispetto a visita di persona), è valido solo se la formulazione della domanda, i tempi e la popolazione intervistata sono realmente confrontabili; è noto che piccole modifiche di formulazione spostano i punteggi in modo misurabile. L'NPS va trattato come un esito da spiegare, non come un fine in sé: i commenti testuali liberi che di solito accompagnano un'indagine NPS sono in genere più utilizzabili del punteggio stesso.

## Insidie

- **Confrontare valori NPS raccolti con formulazioni o tempistiche diverse della domanda**: anche differenze minime nella progettazione dell'indagine possono spostare i punteggi di diversi punti, rendendo il benchmarking dell'NPS tra organizzazioni molto meno affidabile di quanto appaia.
- **Ignorare il tasso di risposta**: un NPS di sintesi calcolato con un tasso di risposta del 10% è molto meno attendibile di uno calcolato con un tasso del 60%, perché i bassi tassi di risposta sono soggetti a distorsione da mancata risposta verso le opinioni più estreme.
- **Trattare l'NPS come strumento diagnostico anziché come metrica di sintesi**: un NPS in calo dice che qualcosa non va ma mai cosa; va sempre abbinato a feedback qualitativi o a uno strumento più granulare di soddisfazione o usabilità per individuare la causa.
- **Inseguire l'NPS come obiettivo in sé**: ottimizzare in modo ristretto il numero NPS (ad esempio intervistando i pazienti solo dopo interazioni insolitamente positive) può migliorare il punteggio riportato senza migliorare l'esperienza sottostante del paziente, o addirittura peggiorandola attivamente.

## Fonti

- Bain & Company, metodologia originale del Net Promoter System e indicazioni di benchmarking
- Agency for Healthcare Research and Quality (AHRQ), programma di indagini sull'esperienza del paziente CAHPS (Consumer Assessment of Healthcare Providers and Systems), come alternativa complementare e più granulare
- Letteratura sottoposta a revisione paritaria sull'uso e sui limiti del Net Promoter Score in ambito sanitario, ad esempio studi pubblicati sul Journal of Medical Internet Research (JMIR)

Vedere anche: [tasso di fidelizzazione degli utenti](../tasso-di-fidelizzazione-degli-utenti/), poiché la soddisfazione riferita dal paziente e l'effettivo uso continuativo di un prodotto spesso divergono e vale la pena monitorarli come segnali separati.
