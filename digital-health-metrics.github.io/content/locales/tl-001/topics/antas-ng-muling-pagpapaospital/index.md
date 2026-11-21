# Antas ng Muling Pagpapaospital

Ang antas ng muling pagpapaospital ay ang bahagi ng mga pasyenteng pinalabas na muling inaospital, hindi planado, sa loob ng tinukoy na window pagkatapos ng discharge — kadalasan ay 30 araw. Para sa digital health, ito ang sukatang pinakadirektang nakaugnay sa ekonomiya ng payer at mga kontrata ng value-based care: ang remote monitoring, post-discharge na follow-up, o digital na care-transition programme na hindi makapagpakita ng kapani-paniwalang epekto sa muling pagpapaospital ay malamang na hindi makakakuha ng tuloy-tuloy na suporta sa reimbursement, gaano man kaganda ang tingin ng mga numero ng pakikilahok nito.

## Bakit ito mahalaga

Ang hindi planadong muling pagpapaospital ay magastos, nakagugulo sa pasyente, at sa maraming health system ay direktang pinaparusahan na ngayon: binabawasan ng mga iskema gaya ng US Hospital Readmissions Reduction Program ang bayad sa mga ospital na may mas mataas kaysa inaasahang antas ng muling pagpapaospital para sa mga partikular na kondisyon, kaya aktibong kinokomisyon ng mga ospital ang mga digital na programa sa post-discharge at remote monitoring na naglalayong bawasan ang mga ito. Itinuturing na posibleng maiiwasan ang malaking bahagi ng mga muling pagpapaospital — dulot ng hindi sapat na tagubilin sa discharge, nalampasang follow-up na appointment, hindi pagkakaunawa sa gamot, o hindi natugunang paglala ng sintomas na maaaring mahuli nang mas maaga ng maayos na dinisenyong digital touchpoint — na eksaktong agwat na tinutugunan ng mga digital na kagamitan sa transitional care. Dapat laging basahin ang antas ng muling pagpapaospital kasabay ng case mix: ang programang naglilingkod sa mas maysakit at mas kumplikadong populasyon ay magkakaroon ng likas na mas mataas na baseline na antas kaysa sa naglilingkod sa mas malusog na populasyon, nang hindi nakadepende sa kalidad ng programa.

## Paano ito kinakalkula

```
30-araw na antas ng muling pagpapaospital = mga hindi planadong muling pagpapaospital sa loob
                                            ng 30 araw mula sa discharge
                                            / kabuuang index discharge × 100

Alisin sa numerator: ang mga planadong muling pagpapaospital (hal. isang
naka-iskedyul na follow-up na procedure), at ang mga paglilipat na
pagpapatuloy ng parehong episode ng pangangalaga sa halip na bagong admission.

I-risk-adjust kung maaari, gamit ang tinatanggap na case-mix o comorbidity
index, bago maghambing ng mga antas sa pagitan ng magkakaibang populasyon
ng pasyente o yugto ng panahon.
```

## Halimbawang kalkulasyon

Ang isang ospital ay nagpalabas ng 1,200 pasyenteng may heart failure sa isang quarter. Sa mga ito, 210 ang muling naospital sa loob ng 30 araw, kung saan 15 ay planadong muling pagpapaospital para sa naka-iskedyul na procedure at inalis. Ang hindi planadong 30-araw na antas ng muling pagpapaospital ay (210 − 15) / 1,200 × 100 = 16.25%. Isang remote monitoring programme ang ipinakilala para sa subset na 400 sa mga pasyenteng ito (pinili ayon sa klinikal na panganib, hindi random), at ang kanilang antas ng hindi planadong muling pagpapaospital ay 14%, kumpara sa 18% para sa 800 pasyenteng hindi naka-enrol. Dahil ang pag-enrol ay batay sa klinikal na panganib sa halip na random na pagtatalaga, ang pagkakaibang ito ay nagpapahiwatig lamang, hindi nagpapatunay, ng epekto ng programa, at dapat bigyang-kahulugan kasabay ng pagsusuri sa risk-adjustment sa halip na tanggapin nang literal.

## Mga pinagmumulan ng data at mga babala

Karaniwang kinukuha ang data ng muling pagpapaospital mula sa sariling admission-discharge-transfer (ADT) feed ng ospital para sa mga muling pagpapaospital sa parehong pasilidad, ngunit ang pasyenteng muling naospital sa ibang ospital ay hindi lalabas sa feed na iyon, kaya sistematikong nababawasan ang bilang ng tunay na antas ng muling pagpapaospital ng single-hospital na pagsubaybay maliban kung dagdagan ng data mula sa regional health information exchange, payer claims data, o state-level na all-payer database. Nangangailangan ng pag-iingat ang pag-uugnay sa isang digital na programa: bihirang random na sample ng mga pinalabas na pasyente ang mga pasyenteng kusang sumasali sa boluntaryong remote monitoring programme, kaya ang simpleng paghahambing ng antas ng muling pagpapaospital ng naka-enrol laban sa hindi naka-enrol ay malamang na malilito ng mismong mga epekto ng pagpili na naging dahilan kung bakit mas malamang na mag-enrol ang ilang pasyente sa unang lugar.

## Mga patibong

- **Paghahambing ng hilaw at hindi risk-adjusted na mga antas sa iba't ibang populasyon**: ang programang naglilingkod sa mas maysakit na populasyon ay magpapakita ng mas mataas na hilaw na antas ng muling pagpapaospital kaysa sa naglilingkod sa mas malusog na populasyon kahit mas epektibo ang programa; laging mag-risk-adjust bago maghambing.
- **Pagkulang sa bilang ng muling pagpapaospital sa ibang pasilidad**: ang pag-asa lamang sa sariling ADT data ng iisang ospital ay makakaligtaan ang mga muling pagpapaospital sa ibang lugar, na magpapababa sa tunay na antas, lalo na sa mga lugar na may maraming nagpapaligsahang sistema ng ospital.
- **Selection bias sa boluntaryong pag-enrol sa programa**: ang mga pasyenteng pumipiling mag-enrol sa digital na follow-up programme ay madalas na sistematikong naiiba (sa health literacy, suportang panlipunan, o motibasyon) sa hindi, na naglilito sa anumang simpleng paghahambing ng before/after o naka-enrol/hindi naka-enrol.
- **Pagbilang sa bawat pagbabalik sa parehong pasilidad bilang muling pagpapaospital**: ang naka-iskedyul at planadong muling pagpapaospital (halimbawa, planadong ikalawang yugto ng procedure) ay hindi senyales ng nabigong discharge at dapat alisin sa numerator, hindi ihalo sa mga tunay na hindi planadong pagbabalik.

## Mga sanggunian

- Centers for Medicare & Medicaid Services (CMS), mga espesipikasyon ng Hospital Readmissions Reduction Program at ng sukatang Hospital-Wide Readmission
- Institute for Healthcare Improvement (IHI), gabay sa pagbabawas ng maiiwasang muling pagpapaospital
- Peer-reviewed na literatura tungkol sa digital na remote monitoring at mga interbensyon sa transitional care para sa pagbabawas ng muling pagpapaospital, halimbawa ang mga pag-aaral na nailathala sa JAMA Network Open at npj Digital Medicine

Tingnan din: [katumpakan ng triage at pag-ruta](../katumpakan-ng-triage-at-pag-ruta/), dahil ang hindi angkop na unang pag-ruta ay maaaring mismong downstream na tagapagtulak ng maiiwasang admission.
