# Tasso di Accesso Digitale

Il tasso di accesso digitale misura la quota di una popolazione di pazienti idonea che dispone dei mezzi pratici per usare un prodotto di salute digitale: una connessione a banda larga o una connessione dati mobile affidabile, un dispositivo con accesso a Internet e un account attivo sul portale pazienti o sull'app pertinente. È la metrica di precondizione per ogni altra misura di salute digitale di questo libro: una popolazione non può registrarsi, interagire con o trarre beneficio da alcun prodotto di salute digitale che strutturalmente non può raggiungere, per quanto ben progettato sia quel prodotto.

## Perché è importante

Le metriche di adozione e coinvolgimento nella salute digitale presuppongono implicitamente una popolazione che dispone già di accesso digitale, e riportare tassi di adozione o coinvolgimento senza aver prima stabilito il tasso di accesso sottostante rischia di escludere silenziosamente i pazienti con meno probabilità di avere quell'accesso, che sono spesso anche quelli con il maggior bisogno di salute. Il Digital Health Equity Measurement Framework (DHEMF) di HIMSS e quadri analoghi trattano l'accesso digitale come metrica di equità fondamentale e di primo ordine proprio perché gli interventi costruiti senza tenere conto dei divari di accesso tendono a rafforzare, anziché colmare, le disparità di salute esistenti: una strategia basata prima di tutto sulla telemedicina può ridurre inavvertitamente l'accesso alle cure per i pazienti privi di una connessione o di un dispositivo affidabili, pur migliorando in modo misurabile l'esperienza dei pazienti che già avevano entrambi. Il tasso di accesso digitale va monitorato e riportato per segmento demografico e geografico, poiché le medie nazionali o dell'intera organizzazione nascondono regolarmente ampi divari per popolazioni specifiche.

## Come si calcola

```
Tasso di accesso digitale = pazienti con connettività a banda larga/mobile
                            E un dispositivo con accesso a Internet E un
                            account attivo sul portale pazienti o sull'app
                            / totale della popolazione di pazienti idonea
                            × 100

Riportare separatamente anche ciascuna sottocomponente, oltre al tasso
combinato:
  Tasso di connettività    = pazienti con una connessione Internet
                             affidabile / popolazione idonea × 100
  Tasso di possesso di dispositivi = pazienti con un dispositivo con
                             accesso a Internet / popolazione idonea × 100
  Tasso di attivazione del portale = pazienti con un account attivo
                             sul portale/app / popolazione idonea × 100
                             (per l'imbuto di adozione completo vedere il
                             tasso di adozione del portale pazienti)
```

## Esempio pratico

Un sistema sanitario serve una popolazione idonea di 40.000 pazienti. Un'indagine sui pazienti e i dati sulle infrastrutture indicano che 34.000 (85%) dispongono di una connettività a banda larga o mobile affidabile, 33.000 (82,5%) hanno un dispositivo con accesso a Internet e, tra i pazienti che soddisfano entrambe le condizioni, 27.000 (67,5% dell'intera popolazione idonea) hanno un account attivo sul portale pazienti. La disaggregazione per età mostra che i pazienti di 65 anni e più hanno un tasso di accesso digitale combinato di appena il 48%, rispetto al 78% dei pazienti sotto i 65 anni, un divario che la media del 67,5% dell'intera organizzazione oscura completamente e che dovrebbe orientare direttamente la decisione se un dato servizio possa essere offerto in sicurezza solo in digitale per questa popolazione.

## Fonti dei dati e avvertenze

I dati su connettività e possesso di dispositivi provengono in genere da una combinazione di autodichiarazione dei pazienti (tramite indagine o questionario di accettazione), dati di mappatura della disponibilità della banda larga della Federal Communications Commission (FCC) o equivalente nazionale per l'area geografica del paziente e dati di attivazione del portale dai sistemi dell'organizzazione. La disponibilità della banda larga a livello di area (se un fornitore offre il servizio in un dato codice postale) è un indicatore indiretto più debole della connettività a livello di nucleo familiare, perché i dati di disponibilità a livello di area non dicono nulla sul fatto che un paziente specifico possa permettersi o abbia scelto di abbonarsi a quel servizio: i tassi di accesso a livello di area e di nucleo familiare non vanno confusi. L'accesso a dispositivi e connettività può inoltre essere condiviso all'interno di un nucleo familiare (ad esempio un solo smartphone usato da più familiari), cosa che i dati di indagine a livello di nucleo familiare colgono meglio dei soli dati di accesso al portale a livello individuale.

## Insidie

- **Riportare solo una media dell'intera organizzazione**: ciò nasconde in modo affidabile ampi divari di accesso per segmenti di pazienti più anziani, a basso reddito, rurali o comunque digitalmente marginalizzati; disaggregare sempre per segmento demografico e geografico.
- **Confondere la disponibilità della banda larga a livello di area con l'effettivo accesso del nucleo familiare**: il fatto che un codice postale sia "servito" da un fornitore di banda larga non significa che ogni nucleo familiare al suo interno sia abbonato o possa permettersi quel servizio.
- **Trattare il possesso di un dispositivo come un fatto unico e statico**: l'accesso al dispositivo può essere transitorio (un dispositivo vecchio, un telefono perso o danneggiato, un dispositivo familiare condiviso riassegnato), per cui il tasso di accesso va misurato periodicamente e non presunto stabile una volta valutato.
- **Progettare un percorso esclusivamente digitale prima di stabilire il tasso di accesso della popolazione interessata**: spostare un servizio sul solo digitale senza prima confermare l'effettivo tasso di accesso digitale della popolazione target rischia di escludere silenziosamente proprio i pazienti meno in grado di raggiungere un canale alternativo.

## Fonti

- HIMSS, Digital Health Equity Measurement Framework (DHEMF)
- Federal Communications Commission (FCC), dati nazionali sulla disponibilità della banda larga e sull'equità digitale
- Pew Research Center, ricerca sull'accesso a Internet, banda larga e dispositivi e sulle tendenze del divario digitale tra gruppi demografici

Vedere anche: [tasso di alfabetizzazione sanitaria digitale](../tasso-di-alfabetizzazione-sanitaria-digitale/), la metrica strettamente correlata che misura se i pazienti che dispongono di accesso riescono a usarlo efficacemente.
