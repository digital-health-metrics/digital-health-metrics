# Tasso di Visite in Telemedicina

Il tasso di visite in telemedicina è la quota del totale degli incontri di un servizio erogati a distanza, tramite video o telefono, anziché di persona. È una metrica del mix di canali di erogazione, non una metrica di attività: indica come viene erogata l'assistenza, il che è rilevante per la pianificazione della capacità, l'accesso e l'appropriatezza clinica, in modo del tutto separato da quanta assistenza viene erogata complessivamente.

## Perché è importante

La proporzione di assistenza erogata a distanza ha cambiato il modello operativo di molti servizi dopo la rapida espansione delle consultazioni virtuali durante la pandemia di COVID-19, e le organizzazioni hanno bisogno di un modo stabile per monitorare se questo cambiamento viene mantenuto, sta tornando verso le norme pre-pandemiche, o viene attivamente indirizzato dalla politica. La telemedicina non è un sostituto uniforme di una visita di persona: l'appropriatezza varia per specialità, per tipo di consultazione (una revisione della terapia farmacologica si comporta in modo molto diverso da un esame fisico) e per preferenza del paziente, quindi il tasso "giusto" è un giudizio clinico e operativo, non un obiettivo da massimizzare. Finanziatori e regolatori usano questo tasso, insieme alle misure di esito e sicurezza, per decidere le politiche di rimborso e verificare che l'assistenza a distanza non venga semplicemente sostituita a casi che devono essere visti di persona.

## Come si calcola

```
Tasso di visite in telemedicina = incontri in telemedicina / (incontri in telemedicina + incontri di persona) × 100

Riportare separatamente per modalità dove possibile:
  Tasso video    = incontri video / totale incontri × 100
  Tasso telefono = incontri solo telefonici / totale incontri × 100

Il denominatore dovrebbe contare solo gli incontri completati (vedere insidie),
per un servizio, una specialità e un periodo di tempo definiti.
```

## Esempio pratico

Un servizio comunitario di salute mentale registra 4.000 contatti ambulatoriali completati in un trimestre: 1.200 di persona, 1.600 via video e 1.200 per telefono. Il tasso di visite in telemedicina è (1.600 + 1.200) / 4.000 × 100 = 70%, con un tasso video del 40% e un tasso solo telefonico del 30%. Riportare solo la cifra combinata del 70% oscurerebbe il fatto che una grande quota della "telemedicina" qui è solo audio, il che tipicamente comporta un profilo di rischio clinico e un'esperienza del paziente diversi rispetto al video.

## Fonti dei dati e avvertenze

Il tipo di incontro viene solitamente registrato o come campo strutturato nella cartella clinica elettronica (tipo di visita o sede) o dedotto dai codici di fatturazione, come un codice di luogo del servizio o un modificatore di telemedicina su una richiesta di rimborso. La pratica di codifica varia significativamente tra organizzazioni e persino tra clinici della stessa organizzazione, quindi un confronto dei tassi tra sedi dovrebbe prima confermare che la "telemedicina" venga codificata allo stesso modo in ciascuna. Una visita che inizia come video ma passa al telefono a causa di un problema tecnico dovrebbe essere codificata in modo coerente (comunemente come la modalità che ha veicolato la maggior parte del contenuto clinico), e questa regola dovrebbe essere documentata piuttosto che lasciata al giudizio individuale.

## Insidie

- **Conteggiare le visite tentate anziché quelle completate**: un appuntamento di telemedicina che non riesce a connettersi e viene riprogrammato non dovrebbe gonfiare due volte il denominatore della telemedicina.
- **Trattare video e telefono come intercambiabili**: hanno implicazioni cliniche ed equitative diverse (il telefono esclude la valutazione visiva ma è più accessibile ai pazienti senza smartphone, dati affidabili o spazio privato per il video); riportarli sempre separatamente quando possibile.
- **Ignorare la relazione con le mancate presentazioni**: il comportamento di mancata presentazione spesso differisce per modalità; vedere [tasso di mancata presentazione agli appuntamenti](../tasso-di-mancata-presentazione-agli-appuntamenti/) prima di trarre conclusioni sull'"accesso migliorato" solo da un tasso di telemedicina in crescita.
- **Trattare un tasso elevato come intrinsecamente positivo**: per alcune condizioni e tipi di consultazione, un tasso di telemedicina appropriato è basso per progettazione clinica, non per un fallimento della maturità digitale.

## Fonti

- Centers for Medicare & Medicaid Services (CMS), dati sull'utilizzo della telemedicina Medicare e pubblicazioni sulle politiche
- NHS England, statistiche sull'attività dei servizi ambulatoriali e comunitari, incluse le ripartizioni delle presenze virtuali/a distanza
- Letteratura sottoposta a revisione paritaria sulle tendenze di utilizzo della telemedicina e sugli esiti specifici per modalità
