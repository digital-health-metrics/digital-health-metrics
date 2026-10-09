# Tasso di Adozione del Portale Pazienti

Il tasso di adozione del portale pazienti misura la quota di pazienti idonei che si sono registrati e utilizzano attivamente un portale pazienti online (ad esempio NHS App, Patient Access, o un portale collegato a una cartella clinica elettronica come MyChart) per visualizzare i referti, prenotare appuntamenti o inviare messaggi al proprio team di cura. È l'indicatore di livello base del coinvolgimento digitale: un paziente che non ha mai attivato un account non può beneficiare di alcun servizio digitale successivo costruito sul portale.

## Perché è importante

Un portale crea valore solo quando il paziente lo utilizza, quindi le organizzazioni dovrebbero monitorare l'adozione come un imbuto (funnel) piuttosto che come un unico numero: registrazione, attivazione (prima azione significativa) e utilizzo attivo (utilizzo entro una finestra temporale definita) sono tre tassi diversi che vengono confusi fin troppo spesso. I team dei servizi digitali sono spesso sotto pressione per riportare un'unica cifra favorevole, e ci vuole disciplina per insistere sulla ripartizione più difficile ma più onesta. Un'adozione bassa o distribuita in modo diseguale è anche un segnale di equità: i pazienti più anziani, con minore alfabetizzazione digitale, che non parlano la lingua maggioritaria, o che non dispongono di una connessione affidabile o di uno smartphone, hanno sistematicamente meno probabilità di essere conteggiati nel numeratore, quindi un tasso medio di adozione in crescita può mascherare un divario sempre più ampio per i pazienti che spesso hanno più bisogno di contatto con i servizi.

## Come si calcola

Riportare tutte e tre le fasi, non solo la registrazione, e dichiarare sempre esplicitamente il denominatore:

```
Tasso di registrazione = pazienti con account del portale creato / popolazione di pazienti idonei × 100
Tasso di attivazione    = pazienti che hanno completato una prima azione significativa
                          (visualizzato un risultato, prenotato uno slot, inviato un
                          messaggio) / pazienti con account × 100
Tasso di utilizzo attivo = pazienti che hanno effettuato l'accesso almeno una volta
                          negli ultimi 12 mesi / popolazione di pazienti idonei × 100
```

La popolazione di pazienti idonei è solitamente definita come i pazienti che hanno avuto almeno un contatto con l'organizzazione in un periodo di osservazione definito (comunemente 24 mesi), e che hanno l'età e lo stato di consenso necessari per possedere un proprio account.

## Esempio pratico

Una rete di assistenza primaria serve 50.000 pazienti che soddisfano la definizione di idoneità. Di questi, 32.000 si sono registrati al portale (tasso di registrazione 64%). Delle 32.000 registrazioni, 27.000 hanno completato almeno un'azione significativa come visualizzare un risultato di un esame (tasso di attivazione 84% dei registrati). Negli ultimi 12 mesi, 21.000 dei 50.000 pazienti idonei originari hanno effettuato l'accesso almeno una volta (tasso di utilizzo attivo 42%). Riportare solo la cifra di registrazione del 64% sovrastimerebbe considerevolmente il coinvolgimento reale; la cifra del 42% di utilizzo attivo è il numero che dovrebbe guidare le decisioni sulle risorse per il programma del portale.

## Fonti dei dati e avvertenze

Le analitiche del portale provengono tipicamente dalla piattaforma del fornitore stessa (eventi di accesso, utilizzo delle funzionalità) o dal registro di controllo della cartella clinica elettronica sottostante, e le organizzazioni dovrebbero essere scettiche verso i cruscotti dei fornitori che mostrano solo i conteggi delle registrazioni. L'accesso per delega (un genitore o un caregiver che gestisce un account per conto di un paziente) dovrebbe essere contrassegnato e riportato separatamente, poiché cambia chi è effettivamente l'"utente". La scelta del denominatore ha un'enorme importanza: contare rispetto all'intero elenco di pazienti registrati anziché rispetto a una popolazione realmente idonea e contattabile sottostimerà sempre l'adozione, mentre contare solo rispetto ai pazienti attivamente invitati la sovrastimerà sempre, quindi la definizione di idoneità dovrebbe essere fissata e pubblicata insieme a ogni tasso riportato.

## Insidie

- **Registrazione conteggiata come adozione**: un account creato ma mai utilizzato ha un valore prossimo allo zero; riportare l'attivazione e l'utilizzo attivo insieme alla registrazione, non al suo posto.
- **Ignorare l'esclusione digitale**: le cifre aggregate di adozione possono crescere mentre il divario tra i gruppi più e meno inclusi digitalmente si allarga; segmentare sempre per età, deprivazione, lingua e disabilità dove la governance dei dati lo consente.
- **Confrontare organizzazioni con definizioni di idoneità diverse**: un programma di portale che invita solo i pazienti con un indirizzo email registrato riporterà un tasso più alto rispetto a uno che misura rispetto all'intero elenco registrato, senza alcuna reale differenza di prestazione.
- **Trattare un accesso una tantum come coinvolgimento continuativo**: una finestra di osservazione di 12 mesi è comune, ma una finestra più breve (ad esempio 90 giorni) fornisce un avviso più precoce del calo dell'utilizzo.

## Fonti

- NHS England, statistiche sull'utilizzo e la registrazione della NHS App (pubblicazioni nhs.uk / digital.nhs.uk)
- ONC / HealthIT.gov, misure del Promoting Interoperability Program, incluse le misure di accesso dei pazienti View, Download, Transmit (VDT)
- Letteratura sottoposta a revisione paritaria sull'adozione del portale pazienti e sulle disparità nella salute digitale, ad esempio studi pubblicati sul Journal of the American Medical Informatics Association (JAMIA)

Vedere anche: [tasso di mancata presentazione agli appuntamenti](../tasso-di-mancata-presentazione-agli-appuntamenti/), su cui influiscono direttamente l'auto-pianificazione e i promemoria basati sul portale.
