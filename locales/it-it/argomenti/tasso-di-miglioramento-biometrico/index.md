# Tasso di Miglioramento Biometrico

Il tasso di miglioramento biometrico è la quota di pazienti che raggiunge un cambiamento clinicamente significativo in un parametro biometrico monitorato — come l'HbA1c, la pressione arteriosa o il BMI — tra il basale e un punto temporale di follow-up definito, dopo aver utilizzato un programma di salute digitale. Esiste per distinguere un programma che effettivamente sposta gli esiti clinici da uno che genera semplicemente dati di coinvolgimento o soddisfazione, rendendolo uno dei collegamenti più diretti tra l'attività di salute digitale e il valore clinico.

## Perché è importante

Molti programmi di salute digitale riportano metriche di coinvolgimento — accessi, messaggi inviati, giorni attivi — come proxy dell'efficacia, ma il coinvolgimento da solo non dimostra che la salute di un paziente sia migliorata; un paziente può accedere quotidianamente senza alcun cambiamento nella sua condizione sottostante. Il tasso di miglioramento biometrico riporta la valutazione all'esito che conta davvero per il paziente e per il finanziatore, ed è particolarmente importante nei contratti di assistenza basata sul valore, dove il pagamento è sempre più legato a esiti clinici dimostrati piuttosto che al semplice servizio erogato. Poiché richiede una misurazione di base coerente e una finestra di follow-up definita per ogni paziente, rivela anche quanto dell'effetto apparente di un programma sia in realtà dovuto a una segnalazione selettiva che include solo i pazienti rimasti nel programma e misurati di nuovo.

## Come si calcola

```
Tasso di miglioramento biometrico = pazienti con miglioramento
                                    clinicamente significativo nel
                                    parametro biometrico monitorato
                                    / totale pazienti con
                                    misurazione valida di basale e
                                    follow-up × 100

"Clinicamente significativo" deve essere definito in anticipo in
base a soglie cliniche consolidate per lo specifico parametro
biometrico (ad esempio una riduzione di ≥0,5 punti percentuali
nell'HbA1c), non scelto dopo aver visto i dati.

Riportare sempre insieme a:
  Tasso di completamento della misurazione = pazienti con
                                             misurazione di
                                             follow-up valida /
                                             totale pazienti
                                             arruolati × 100
```

## Esempio pratico

Un programma digitale di gestione del diabete arruola 500 pazienti con una misurazione di basale dell'HbA1c. A sei mesi, 350 di questi pazienti hanno una misurazione di follow-up valida (tasso di completamento della misurazione 70%), e di questi 350, 210 raggiungono una riduzione di almeno 0,5 punti percentuali nell'HbA1c, dando un tasso di miglioramento biometrico del 60%. Ma se il programma riporta solo "il 60% dei pazienti ha migliorato il proprio HbA1c" senza menzionare che il 30% dei pazienti inizialmente arruolati non ha mai ottenuto una misurazione di follow-up, questo nasconde la possibilità che i pazienti persi senza misurazione possano essere stati peggio di quelli rimasti — motivo per cui il tasso di completamento della misurazione deve sempre essere riportato insieme al tasso di miglioramento.

## Fonti dei dati e avvertenze

I dati biometrici provengono tipicamente da dispositivi connessi (monitor continui del glucosio, bracciali per la pressione arteriosa), da risultati di laboratorio integrati dalla cartella clinica elettronica sottostante, o da misurazioni auto-riportate dal paziente inserite manualmente — e ciascuna fonte ha un diverso profilo di affidabilità, con i dati inseriti manualmente più soggetti a errori o a segnalazione selettiva. La finestra di follow-up deve essere coerente in tutta la popolazione riportata, poiché consentire una finestra variabile (alcuni pazienti misurati a 3 mesi, altri a 12) permette di nascondere una debole efficacia a lungo termine dietro forti risultati a breve termine.

## Errori comuni

- **Riportare il tasso di miglioramento senza il tasso di completamento della misurazione**: un alto tasso di miglioramento solo tra i pazienti rimisurati può nascondere un abbandono sostanziale che probabilmente distorce il risultato in modo positivo.
- **Definire "clinicamente significativo" dopo aver visto i dati**: scegliere una soglia che per caso corrisponde a ciò che mostrano i dati, anziché uno standard clinico consolidato, mina l'intero scopo del meccanismo.
- **Confrontare tassi di miglioramento tra programmi con finestre di follow-up diverse**: un programma che misura a 3 mesi mostrerà tipicamente un tasso di miglioramento più alto di uno che misura a 12 mesi, indipendentemente dall'efficacia sottostante.
- **Ignorare la regressione verso la media**: i pazienti arruolati a causa di un valore di basale scarsamente controllato spesso mostreranno un certo miglioramento per puri motivi statistici, indipendentemente dall'efficacia dell'intervento; confrontare con un gruppo di controllo o un basale storico aiuta a correggere questo effetto.

## Fonti

- American Diabetes Association, standard per soglie clinicamente significative nel controllo glicemico
- Letteratura peer-reviewed sugli interventi di salute digitale per malattie croniche, ad esempio studi pubblicati su Diabetes Care e Journal of Medical Internet Research (JMIR)
- Centers for Medicare & Medicaid Services (CMS), linee guida sulle misure di qualità nei contratti di assistenza basata sul valore

Vedi anche: [tasso di stabilizzazione biometrica](../tasso-di-stabilizzazione-biometrica/), la metrica correlata per il controllo sostenuto dopo il raggiungimento di un obiettivo, a differenza del cambiamento iniziale rispetto al basale.
