# Tasso di Aderenza alla Terapia Farmacologica

Il tasso di aderenza alla terapia farmacologica misura in che misura un paziente assume un farmaco prescritto come indicato, espresso più comunemente come la proporzione di giorni in un periodo definito in cui il paziente ha avuto accesso al proprio farmaco come prescritto. È una delle metriche di salute digitale più rilevanti perché la mancata aderenza è frequente, in gran parte prevenibile con il giusto supporto e direttamente collegata a esiti clinici peggiori e a costi a valle più alti: proprio la lacuna che app di promemoria per i farmaci, flaconi di pillole intelligenti e solleciti di rinnovo delle farmacie sono costruiti per colmare.

## Perché è importante

Gli organismi di sanità pubblica stimano che la mancata aderenza ai farmaci per le malattie croniche possa raggiungere il 50% per alcune condizioni, ed è una delle principali cause prevenibili di ricoveri evitabili, progressione della malattia e fallimento del trattamento, attribuito erroneamente al farmaco stesso anziché a un uso incostante. Gli strumenti digitali per l'aderenza esistono specificamente per colmare questa lacuna, per cui in qualsiasi programma che includa una componente farmacologica il tasso di aderenza è di solito la singola metrica più rilevante per le decisioni: si trova causalmente a monte del miglioramento biometrico, della riammissione e della maggior parte delle altre metriche di esito clinico che un programma potrebbe altrimenti riportare. Un programma che migliora il coinvolgimento o la soddisfazione senza spostare l'aderenza probabilmente non ha ancora dimostrato un meccanismo plausibile di beneficio clinico.

## Come si calcola

```
Proporzione di giorni coperti (Proportion of Days Covered, PDC) = giorni
                                    del periodo con il farmaco a
                                    disposizione (in base ai giorni di
                                    fornitura delle erogazioni) / giorni
                                    del periodo di misurazione × 100

Rapporto di possesso del farmaco (Medication Possession Ratio, MPR) =
                                    totale dei giorni di fornitura
                                    ottenuti nel periodo / giorni del
                                    periodo × 100 (può superare il 100%
                                    con rinnovi anticipati; per questo
                                    motivo si preferisce in genere il
                                    PDC)

Un paziente è in genere classificato come "aderente" a una soglia PDC di
≥ 80%, seguendo la convenzione largamente usata nelle misure di qualità.
```

## Esempio pratico

A un paziente viene prescritto un farmaco cronico giornaliero per un periodo di misurazione di 90 giorni. I registri di erogazione della farmacia mostrano che il paziente ha ottenuto farmaco sufficiente a coprire 76 di quei 90 giorni, con due interruzioni: una di 9 giorni dopo aver finito la scorta prima del rinnovo e una di 5 giorni in occasione di un ricovero ospedaliero. Il PDC è 76 / 90 × 100 = 84%, che supera la soglia convenzionale di aderenza dell'80%. Se le stesse interruzioni fossero misurate con l'MPR basato sui giorni di fornitura erogati anziché sui giorni effettivamente coperti, un rinnovo anticipato altrove nel periodo potrebbe spingere il rapporto oltre il 100%, il che illustra perché il PDC è la misura più prudente e in genere preferita.

## Fonti dei dati e avvertenze

I dati di rimborso o di erogazione delle farmacie (provenienti da un gestore dei benefici farmaceutici o da un sistema di farmacia connesso) sono la fonte standard, perché riflettono ciò che un paziente ha effettivamente ottenuto e non ciò che gli è stato prescritto; i soli dati di prescrizione sovrastimano l'aderenza perché non confermano che il paziente abbia mai ritirato il farmaco. Gli strumenti digitali per l'aderenza (flaconi di pillole intelligenti, sensori ingeribili, inalatori intelligenti connessi che registrano ogni azionamento nelle condizioni respiratorie come l'asma e la BPCO e controlli basati su app) offrono dati a più alta risoluzione sul fatto che una dose sia stata effettivamente assunta, e non solo ottenuta, ma sono usati da una piccola minoranza di pazienti potenzialmente non rappresentativa, per cui fondere l'aderenza confermata dal dispositivo con il PDC basato sui rimborsi su una popolazione richiede cautela nell'interpretazione. L'aderenza va misurata su un periodo abbastanza lungo da smussare le singole dosi saltate ma abbastanza breve da rilevare un calo significativo prima che causi un danno clinico; le finestre mobili di 90 giorni sono comuni per i farmaci cronici.

## Insidie

- **Usare l'MPR senza dichiarare che può superare il 100%**: rapporti oltre il 100% non spiegati, dovuti a rinnovi anticipati o accaparramento, rendono inaffidabile il confronto tra pazienti e tra periodi, a meno che non si usi il PDC o il rapporto non sia esplicitamente limitato.
- **Trattare i dati di prescrizione o di ordine come prova di aderenza**: una prescrizione redatta o inviata a una farmacia non dice nulla sul fatto che il paziente abbia ritirato o assunto il farmaco; solo i dati di erogazione o del dispositivo colmano quella lacuna.
- **Applicare una sola soglia di aderenza a tutte le condizioni indiscriminatamente**: la conseguenza clinica del saltare il 20% delle dosi varia enormemente per classe di farmaco (ad es. anticoagulanti rispetto a statine), per cui un'unica soglia dell'80% usata universalmente può sottostimare o sovrastimare il rischio clinico per alcuni farmaci.
- **Ignorare i cambi di farmaco e le sospensioni**: un paziente che viene clinicamente e appropriatamente passato a un farmaco diverso può apparire come un forte calo di aderenza al farmaco originale se il cambio non viene considerato nel calcolo.

## Fonti

- Pharmacy Quality Alliance (PQA), specifiche della misura Proportion of Days Covered
- Centers for Medicare & Medicaid Services (CMS), misure di aderenza ai farmaci delle Star Ratings
- Letteratura sottoposta a revisione paritaria sulla misurazione dell'aderenza ai farmaci e sugli interventi digitali per l'aderenza, ad esempio studi pubblicati sul Journal of Managed Care & Specialty Pharmacy

Vedere anche: [tasso di miglioramento biometrico](../tasso-di-miglioramento-biometrico/), di cui l'aderenza ai farmaci per le malattie croniche è un fattore determinante.
