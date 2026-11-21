# Antas ng Pagkakapare-pareho ng Pakikilahok ng Pasyente

Sinusukat ng antas ng pagkakapare-pareho ng pakikilahok ng pasyente kung gaano kadalas at kaayos nakikipag-ugnayan ang isang naka-enrol na pasyente sa isang digital health product sa paglipas ng panahon — halimbawa, sa pagtatala ng pagkain o sintomas, pagrerekord ng pisikal na aktibidad, o pagtingin sa health data — sa halip na kung nagamit na ba niya ito kahit minsan. Ito ay longitudinal na sukatan, naiiba sa bilang ng aktibong paggamit sa isang partikular na punto ng panahon: dalawang pasyente ay maaaring magkapareho ang katayuang "gumamit ng app ngayong buwan", ngunit ang isa ay nagtatala araw-araw nang pare-pareho at ang isa ay nagtala nang minsan at nawala sa loob ng tatlong linggo, at ang sukatan ng pagkakapare-pareho lamang ang nakapagtatangi sa kanila.

## Bakit ito mahalaga

Ang tuloy-tuloy at regular na pakikipag-ugnayan sa isang digital health tool ay isa sa mas maaasahang nangungunang indikasyon ng klinikal na benepisyo, lalo na para sa mga kondisyong nakadepende sa pag-uugali gaya ng diabetes, pamamahala ng timbang, at mental health, kung saan nagmumula ang halaga ng tool sa gawing sinusuportahan nito at hindi sa anumang iisang session. Maaaring mag-ulat ang isang produkto ng malusog na bilang ng buwanang aktibong user habang aktuwal na naglilingkod sa populasyong nag-log in nang minsan at unti-unting lumayo, dahil mababang pamantayan ang buwanang aktibong paggamit na walang sinasabi tungkol sa padron ng paggamit sa loob ng buwan; nahuhuli ito ng mga sukatan ng pagkakapare-pareho sa paraang hindi kaya ng simpleng bilang ng aktibidad. Dahil ang pagkakapare-pareho rin ay isa sa mas mahirap panatilihin sa loob ng mga buwan sa halip na mga linggo, mas tapat itong senyales ng kalidad ng produkto at klinikal na pagkakaakma kaysa sa mga numero ng pakikilahok sa maikling panahon, na madaling maapektuhan ng novelty effect kaagad pagkatapos ng onboarding.

## Paano ito kinakalkula

```
Antas ng pagkakapare-pareho ng pakikilahok = mga linggong may kahit isang kwalipikadong pakikipag-ugnayan
                                              / kabuuang linggo ng pagka-enrol × 100

Ang "kwalipikadong pakikipag-ugnayan" ay dapat bigyang-kahulugan nang tahasan at pare-pareho
(hal. isang entry ng food log, isang symptom check-in, o isang nakumpletong activity sync) —
huwag kailanman isang passive na event gaya ng pagbubukas ng app nang walang naitalang aksyon.

Iulat bilang distribusyon, hindi lamang bilang karaniwang halaga ng populasyon:
  hal. bahagi ng mga pasyenteng may ≥ 80% lingguhang pagkakapare-pareho,
       bahaging may 50-79%, bahaging may < 50%
```

## Halimbawang kalkulasyon

Isang nutrition-coaching app ang nag-enrol ng pasyente sa loob ng 12 linggo. Nagtala ang pasyente ng kahit isang kwalipikadong food entry sa 9 sa 12 linggong iyon, kaya ang indibidwal na antas ng pagkakapare-pareho ng pakikilahok ay 9 / 12 × 100 = 75%. Sa buong cohort ng app na 2,000 pasyenteng naka-enrol nang hindi bababa sa 12 linggo, 600 pasyente (30%) ang nagpapanatili ng ≥ 80% lingguhang pagkakapare-pareho, 900 (45%) ang nasa hanay na 50-79%, at 500 (25%) ang mas mababa sa 50%. Kung ang karaniwang halaga ng cohort lamang (na maaaring nasa mga 65%) ang iuulat, matatakpan nito na ang buong isang kapat ng mga pasyente ay halos hindi nakikilahok — isang segmentong dapat imbestigahan nang hiwalay sa halip na ihalo sa pangkalahatang average.

## Mga pinagmumulan ng data at mga babala

Nagmumula ang data ng pagkakapare-pareho sa sariling event log ng produkto (mga food entry, activity sync, check-in), at napakalaki ng epekto ng depinisyon ng "kwalipikadong pakikipag-ugnayan" sa resultang antas — ang maluwag na depinisyon (anumang pagbubukas ng app) ay laging magmumukhang mas maganda kaysa sa mahigpit (isang nakumpleto at makabuluhang log entry), kaya dapat ipahayag nang malinaw ang ginamit na depinisyon kasabay ng anumang iniulat na numero. Ang awtomatikong na-sync na data (halimbawa, isang konektadong fitness tracker na nagsi-sync ng aktibidad sa background) ay dapat iulat nang hiwalay sa manu-manong naitalang data, dahil maaaring palobohin ng awtomatikong pag-sync ang tila pagkakapare-pareho nang walang anumang aktibong pagsisikap ng pasyente o pakikilahok sa gabay ng produkto.

## Mga patibong

- **Pagsasama ng pagbubukas ng app at makabuluhang pakikilahok**: ang passive na pagbubukas ng app (halimbawa, na na-trigger ng push notification) ay hindi katumbas ng naitalang food entry o nakumpletong check-in; bigyang-kahulugan at mag-ulat lamang batay sa mga kwalipikadong pakikipag-ugnayan.
- **Pag-uulat lamang ng karaniwang halaga ng populasyon**: ang mukhang malusog na karaniwang antas ng pagkakapare-pareho ay maaaring magtago ng bimodal na populasyon ng mga lubhang nakikilahok at halos ganap na hindi nakikilahok; iulat ang distribusyon sa mga hanay ng pagkakapare-pareho, hindi lamang ang mean.
- **Pagwawalang-bahala sa denominator ng haba ng pagka-enrol**: ang paghahambing ng antas ng pagkakapare-pareho sa pagitan ng mga pasyenteng magkalayo ang haba ng pagka-enrol nang hindi isinasaalang-alang ang tagal ay magkikiling pabor sa grupong may mas maikli at mas madaling panatilihing yugto ng pagsukat.
- **Pagpapalobo ng antas dahil sa awtomatikong background sync**: ang passive na na-sync na daloy ng data mula sa wearable ay maaaring magmukhang tuloy-tuloy na aktibo ang isang hindi nakikilahok na pasyente nang walang tunay na pagbabago sa pag-uugali o pakikilahok sa produkto.

## Mga sanggunian

- Peer-reviewed na literatura tungkol sa mga padron ng pakikilahok sa digital health at ang kaugnayan nito sa mga klinikal na resulta, halimbawa ang mga pag-aaral na nailathala sa Journal of Medical Internet Research (JMIR)
- American Medical Informatics Association (AMIA), gabay tungkol sa kalidad ng patient-generated health data at pagsukat ng pakikilahok
- Digital Therapeutics Alliance, gabay sa pinakamahuhusay na kasanayan sa pagsukat ng pakikilahok at resulta para sa mga digital therapeutics

Tingnan din: [antas ng pananatili ng mga user](../antas-ng-pananatili-ng-mga-user/), ang malapit na kaugnay na sukatan kung nananatili bang naka-enrol ang pasyente, na naiiba sa kung gaano siya kapare-pareho sa pakikilahok habang naka-enrol.
