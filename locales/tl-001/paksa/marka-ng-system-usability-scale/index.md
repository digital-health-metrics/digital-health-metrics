# Marka ng System Usability Scale

Ang marka ng System Usability Scale (SUS) ay isang standardized na talatanungang may 10 aytem na ginagamit upang sukatin kung gaano kadaling gamitin ang isang software, na nagbubunga ng iisang markang mula 0 hanggang 100 na maaaring i-benchmark laban sa mahusay na naitatag na pamantayan ng industriya. Hindi tulad ng Net Promoter Score, na sumusukat sa kahandaang magrekomenda, o ng mga patient-reported outcome measure, na sumusukat sa klinikal o functional na kalagayan, may isang partikular na bagay na sinusukat ang SUS: kung gaano kadaling matutuhan at gamitin ang mismong software, para sa mga pasyente man o klinikal na kawani.

## Bakit ito mahalaga

Maaaring may matibay na klinikal na ebidensya at kapani-paniwalang business case ang isang digital health tool ngunit pumalya pa rin sa praktika dahil nahihirapan, nababagalan, o naiinis ang mga pasyente o clinician sa interface — at dahil ang SUS ay validated at malawakang ginagamit na instrumento na may mga dekada ng nailathalang benchmarking data sa iba't ibang industriya, nagagawa ng isang digital health team na ihambing ang usability ng sarili nilang produkto sa kilalang distribusyon sa halip na umasa sa impormal na impresyon o anekdotal na reklamo. Sadyang hindi nakatali sa teknolohiya at mabilis ipatupad ang SUS (karaniwang wala pang limang minuto), kaya praktikal itong ulitin sa bawat iterasyon ng disenyo, hindi tulad ng buong usability study o pormal na clinical trial. Dahil ang mga pagkabigo sa usability na nakaharap sa clinician ay naidokumentong nag-aambag sa burnout (tingnan ang antas ng burnout ng doktor) at ang mga pagkabigo sa usability na nakaharap sa pasyente ay naidokumentong nag-aambag sa pag-abandona at mahihinang resulta sa digital literacy (tingnan ang antas ng digital literacy), gumaganap ang SUS bilang mura at maagang babalang senyales ng usability na makakahuli ng problema sa disenyo bago ito lumitaw sa mga mas mabibigat na downstream na sukatang iyon.

## Paano ito kinakalkula

```
Marka ng SUS = ((kabuuan ng mga marka ng mga aytem na may kakaibang bilang − 5) +
                (25 − kabuuan ng mga marka ng mga aytem na may pantay na bilang)) × 2.5

Ang resulta ay iisang markang mula 0 hanggang 100 (hindi porsyento, kahit
ganoon ang scale, dahil hindi nito kinakatawan ang "porsyentong tama" o katulad nito).

Nailathalang interpretasyon ng benchmark (Bangor et al.):
  Higit sa 80  — mahusay na usability
  68           — katamtaman, batay sa malawak na pamantayan ng industriya
  Mas mababa sa 51 — mahinang usability, kailangang imbestigahan
```

## Halimbawang kalkulasyon

Isang telehealth platform ang nagpatupad ng karaniwang 10-aytem na talatanungan ng SUS sa 150 pasyente matapos ang kanilang unang video visit. Ang kinalkulang karaniwang marka ng SUS sa lahat ng respondent ay 74. Kapag in-benchmark laban sa malawakang binabanggit na karaniwan ng industriya na 68, ipinapahiwatig nito ang higit-sa-karaniwang usability para sa partikular na populasyon ng pasyente at gamit na ito, bagaman malinaw pa ring mas mababa sa "mahusay" na hangganang 80 na magpapahiwatig ng kakaunting natitirang hadlang sa usability. Kapag hinati ang parehong 150 tugon ayon sa edad, ang karaniwang marka ay 81 para sa mga pasyenteng wala pang 50 taong gulang at 62 para sa mga 65 pataas — agwat na nagtuturo sa partikular at maaaring tugunang isyu sa usability para sa mga matatandang pasyente sa halip na pangkalahatang problema sa usability ng produkto, at isang bagay na matatakpan ng iisang pinaghalong average.

## Mga pinagmumulan ng data at mga babala

Direktang nagmumula ang data ng SUS sa mga pasyente o clinician na sumasagot sa standardized na 10-aytem na talatanungan, at dapat isagawa ang instrumento nang eksakto ayon sa na-validate (parehong 10 aytem, parehong 5-puntong scale ng pagsang-ayon, parehong pormula ng pagmamarka) upang maihambing ang resultang marka laban sa mga nailathalang benchmark; ang binago o pinaikling bersyon ng talatanungan, gaano man kabuti ang hangarin, ay nagbubunga ng markang hindi maaasahang mabibigyang-kahulugan laban sa karaniwang distribusyon ng benchmark. Sinusukat ng SUS ang pinaghihinalaang usability, na may ugnayan ngunit hindi magkapareho sa obhetibong tagumpay sa pagkumpleto ng gawain (tingnan ang digital literacy para sa sukatang nakabatay sa pagkumpleto ng gawain); maaaring magkaroon ang isang produkto ng mahusay na marka ng SUS mula sa mga pasyenteng hindi sumubok ng mas kumplikadong feature, kaya ang pagpapares ng SUS sa obhetibong data ng pagkumpleto ng gawain ay nagbibigay ng mas kumpletong larawan kaysa sa alinman nang mag-isa. Mahalaga ang tiyempo ng pagtugon: ang pagpapatupad ng SUS kaagad pagkatapos ng nakakabigong partikular na insidente (nabigong koneksyon, nakalilitong hakbang) kumpara sa pagkatapos ng maayos na session ay maaaring magpabago ng marka nang hindi nakadepende sa pangkalahatang usability ng produkto.

## Mga patibong

- **Pagbabago sa mga karaniwang aytem ng talatanungan o sa pagmamarka**: kahit maliliit na pagbabago sa pagkakasulat o scale ay nagpapawalang-bisa sa paghahambing laban sa mahusay na naitatag na nailathalang distribusyon ng benchmark; gamitin ang karaniwang 10-aytem na instrumento nang eksakto ayon sa na-validate.
- **Pag-uulat lamang ng karaniwang marka nang walang paghahati**: madalas na malaki ang pagkakaiba ng usability ayon sa edad ng user, digital literacy, o tungkulin (pasyente laban sa clinician); hatiin ang pag-uulat upang matagpuan ang mga partikular at matutugunang agwat sa usability na itinatago ng iisang average.
- **Pagturing sa SUS bilang sukatan ng klinikal na bisa**: partikular na usability ang sinusukat ng SUS, hindi ang klinikal na resulta o kasiyahan sa pangangalaga; ang napakadaling gamiting tool ay maaari pa ring pumalya sa pagpapabuti ng mga klinikal na resulta, at hindi dapat kailanman pagsamahin o ipalit ang mga ito sa isa't isa.
- **Pagsasagawa ng survey lamang pagkatapos ng di-pangkaraniwang maayos o di-pangkaraniwang nakakabigong session**: maaaring magkiling sa marka ang tiyempo at konteksto ng pagsasagawa; isagawa nang pare-pareho sa kinatawang sample ng mga tunay na session, hindi lamang sa mga maginhawa o pinili.

## Mga sanggunian

- Brooke, J., "SUS: A Quick and Dirty Usability Scale", ang orihinal na nailathalang instrumento
- Bangor, Kortum, at Miller, nailathalang pananaliksik sa SUS benchmarking na nagtatag ng malawakang binabanggit na mga banda ng interpretasyon ng marka
- Peer-reviewed na literatura tungkol sa paggamit ng SUS sa pagsusuri ng usability ng digital health at telehealth, halimbawa ang mga pag-aaral na nailathala sa JMIR Human Factors

Tingnan din: [net promoter score ng pasyente](../net-promoter-score-ng-pasyente/), kaugnay ngunit natatanging sukatan na iniulat ng pasyente na sumusukat sa kasiyahan at katapatan sa halip na partikular na usability ng software.
