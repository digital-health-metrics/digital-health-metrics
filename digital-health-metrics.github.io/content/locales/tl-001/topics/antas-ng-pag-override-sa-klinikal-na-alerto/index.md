# Antas ng Pag-override sa Klinikal na Alerto

Sinusukat ng antas ng pag-override sa klinikal na alerto ang bahagi ng mga alerto ng clinical decision support (CDS), tulad ng mga babala sa drug-drug interaction, alerto sa allergy, at pagsusuri ng saklaw ng dosis na nililikha ng computerized provider order entry (CPOE) system, na ibinabasura o ino-override ng clinician sa halip na kumilos ayon dito. Ito ang karaniwang kwantitatibong senyales na ginagamit upang matukoy at pamahalaan ang "alert fatigue": ang mahusay na naidokumentong tendensiya ng mga clinician na mawalan ng sensitibidad sa mga alerto kapag napakarami na ng mga babalang mababa ang halaga.

## Bakit ito mahalaga

Ang mga nailathalang antas ng override para sa mga alerto sa drug interaction ay karaniwang nasa pagitan ng halos kalahati hanggang mahigit siyamnapung porsyento, at ang mataas na antas ay hindi awtomatikong pagkabigo sa kaligtasan: maraming interruptive na alerto ang tumutunog para sa mga interaksyong walang klinikal na kahalagahan sa konteksto, o inuulit ang alertong naaksyunan na ng clinician kanina sa parehong order set, kaya ang mahusay na naka-tune na sistema ay sadyang nagpapalabas ng mas kaunti ngunit mas mataas ang halagang alerto sa halip na pilitin ang antas ng override sa zero. Ang tunay na mahalaga para sa kaligtasan ay ang trend sa paglipas ng panahon, ang distribusyon sa iba't ibang antas ng kalubhaan, at kung nagdodokumento ba ang mga clinician ng dahilan kapag nag-o-override sila ng alertong mataas ang kalubhaan; ang tumataas na antas ng override sa mga interaksyong mataas ang kalubhaan at mahusay ang ebidensya ay tunay na alalahanin sa governance kahit mukhang matatag ang average sa lahat ng alerto.

## Paano ito kinakalkula

```
Antas ng override = mga alertong na-override / kabuuang alertong pinalabas × 100

Hatiin ayon sa:
  - antas ng kalubhaan (hal. contraindicated, major, moderate)
  - uri ng alerto (drug-drug interaction, allergy, duplicate therapy, saklaw ng dosis)
  - kung may naidokumentong dahilan ng override

Sinusubaybayan ng "documented override rate" ang bahagi ng mga override na
may naitalang katwiran, na isang sukatan ng governance sa sarili nito.
```

## Halimbawang kalkulasyon

Ang CPOE system ng isang ospital ay nagpapalabas ng 10,000 alerto sa drug-drug interaction sa isang buwan, kung saan 8,700 ang na-override, na nagbibigay ng kabuuang antas ng override na 87%. Kapag hinati ayon sa kalubhaan, sa 500 alertong "contraindicated", 60 ang na-override (12%), habang sa 6,000 alertong "moderate", 5,700 ang na-override (95%). Ang numero ng moderate tier ay halos naaayon sa mga nailathalang benchmark at hindi, sa sarili nito, dahilan ng pag-aalala; ang numero ng contraindicated tier ay nangangailangan ng indibidwal na pagsusuri ng kaso, at ang katotohanang 340 lamang sa 500 override sa tier na iyon ang may naidokumentong dahilan ang mas magagamit sa pagkilos na natuklasan sa governance.

## Mga pinagmumulan ng data at mga babala

Itinatala ng audit log ng electronic health record, o ng sariling alerting module ng CDS vendor, ang bawat event ng pagpapalabas ng alerto at tugon sa alerto, kabilang kung nagpasok ang clinician ng free-text o structured na katwiran. Ang paghahambing ng mga antas ng override sa pagitan ng mga organisasyon, o maging sa pagitan ng mga departamento sa iisang organisasyon, ay nangangailangan ng pagsusuri na pareho ang pinagbabatayang mga rule set ng alerto at pag-tier ng kalubhaan; ang ospital na agresibong naka-tune ang rule set ay magpapakita ng mas mababang antas ng override dahil sa mga dahilang walang kinalaman sa pag-uugali ng clinician.

## Mga patibong

- **Pagturing sa hilaw na antas ng override bilang iisang marka ng kaligtasan**: pinagsasama nito ang mga makatwirang override ng mababang-halagang alerto at ang mga hindi ligtas na override ng tunay na mapanganib na interaksyon; laging hatiin ayon sa kalubhaan.
- **Walang pagtatala ng dahilan ng override**: kung walang naidokumentong dahilan, imposibleng matukoy ang pagkakaiba ng "mali ang alertong ito" at "tama ang alertong ito at nagkamali ng hindi ligtas na pasya ang clinician", na siyang aktuwal na pagkakaibang mahalaga sa kaligtasan ng pasyente.
- **Pagdami ng mga alert rule sa paglipas ng panahon**: ang pagdaragdag ng mas maraming alerto upang "maging ligtas" nang hindi inaalis ang mga mababa ang halaga ang direktang sanhi ng tumataas na antas ng override at alert fatigue; dapat isama sa governance ng alerto ang regular na pagsusuri at pag-retiro ng mga hindi mahusay na rule, hindi lamang ang pagsubaybay.
- **Paghahambing ng mga antas sa mga sistemang magkaiba ang disenyo ng interruption**: ang interruptive at hard-stop na alerto ay nagbubunga ng ibang gawi sa override kaysa sa passive at hindi humaharang na alerto, kaya hindi direktang maihahambing ang dalawang sukatan.

## Mga sanggunian

- Peer-reviewed na literatura tungkol sa alert fatigue sa clinical decision support, malawakang nailathala sa mga journal kabilang ang JAMIA at npj Digital Medicine
- ONC / HealthIT.gov, gabay sa kaligtasan ng health IT tungkol sa clinical decision support
- Institute for Safe Medication Practices (ISMP), gabay sa disenyo at governance ng mga alerto ng CDS
