# Net Promoter Score ng Pasyente

Sinusukat ng Patient Net Promoter Score (NPS) ang kahandaan ng pasyente na irekomenda ang isang digital health product o telehealth service sa iba, batay sa iisang tanong sa survey — "Gaano kalamang na irekomenda mo ang serbisyong ito sa isang kaibigan o katrabaho?" — na may marka mula 0 hanggang 10. Ang mga respondent na may markang 9-10 ay "promoter", ang 7-8 ay "passive", at ang 0-6 ay "detractor"; ang NPS ay ang porsyento ng mga promoter na binawasan ng porsyento ng mga detractor. Ito ang pinakamalawak na ginagamit, at pinakamalawak na binabatikos, na sukatan ng kasiyahan ng pasyente sa digital health, pinahahalagahan dahil sa pagiging simple ngunit limitado sa kayang idiyagnos nang mag-isa.

## Bakit ito mahalaga

Nagbibigay ang NPS sa mga digital health team ng simple, standardized, at maihahambing na senyales ng kasiyahan na mura kolektahin at madaling unawain sa isang sulyap ng mga stakeholder na hindi espesyalista (mga ehekutibo, board, commissioner), kaya nananatili itong popular sa kabila ng mahusay na naidokumentong mga limitasyon sa metodolohiya. Para sa telehealth at mga digital front-door na produkto partikular, ang NPS ay madalas na nangungunang indikasyon kung patuloy bang pipiliin ng mga pasyente ang digital na channel kaysa sa personal na alternatibo kapag parehong available, na may direktang implikasyon sa pagpaplano ng channel mix at kapasidad. Gayunman, ang NPS ay iisang mataas-na-antas na buod na numero: ang bumababang NPS ay nagsasabi sa team na may mali ngunit hindi kung ano, kaya dapat itong laging ipares sa open-text na verbatim na feedback o mas detalyadong instrumento ng usability upang maging magagamit sa pagkilos at hindi lamang numero sa scorecard.

## Paano ito kinakalkula

```
NPS = % ng mga promoter (marka 9-10) − % ng mga detractor (marka 0-6)

Ang resulta ay numerong mula −100 hanggang +100, hindi porsyento, kahit
hinango mula sa mga porsyento — huwag kailanman maglagay ng "%" sa numero ng NPS.

Iulat kasama ang:
  response rate (% ng mga sinurvey na pasyenteng tumugon)
  laki ng sample
  ang eksaktong pagkakasulat ng tanong na ginamit
```

## Halimbawang kalkulasyon

Isang telehealth platform ang nagsurvey ng 1,000 pasyente matapos ang video consultation at nakatanggap ng 400 tugon (response rate: 40%). Sa 400 respondent na ito, 220 ang may markang 9-10 (mga promoter, 55%), 100 ang may markang 7-8 (mga passive, 25%), at 80 ang may markang 0-6 (mga detractor, 20%). Ang NPS ay 55 − 20 = 35. Nagkakaroon lamang ng kahulugan ang numerong ito sa konteksto: ang NPS na 35 ay maaaring malakas na resulta kumpara sa mas malawak na industriya ng telehealth, o nakababahalang pagbaba kumpara sa sariling marka ng platform na 48 noong nakaraang quarter — mas kapaki-pakinabang ang NPS bilang trend sa paglipas ng panahon para sa isang produkto kaysa bilang ganap na isang-beses na benchmark laban sa iba.

## Mga pinagmumulan ng data at mga babala

Kinokolekta ang NPS sa pamamagitan ng survey pagkatapos ng interaksyon, karaniwang na-trigger kaagad pagkatapos ng video visit, session sa app, o episode ng pangangalaga, at napakahalaga ng response rate: ang mababang response rate (malayong mas mababa sa ~40% sa halimbawang kalkulasyon) ay nanganganib sa non-response bias, kung saan ang mga pasyenteng lubhang nasiyahan o lubhang hindi nasiyahan lamang ang nag-aabalang tumugon, na humihila sa marka patungo sa mga sukdulan at palayo sa tunay na damdamin ng populasyon. Ang paghahambing ng NPS sa pagitan ng mga organisasyon o maging sa magkakaibang channel ng iisang organisasyon (halimbawa telehealth laban sa personal) ay balido lamang kung tunay na maihahambing ang pagkakasulat ng tanong, tiyempo, at populasyon ng survey; kilalang nagpapabago ng marka nang masusukat ang maliliit na pagbabago sa pagkakasulat. Dapat ituring ang NPS bilang resultang ipapaliwanag, hindi layunin sa sarili nito — ang mga open-text na komentong karaniwang kasama ng NPS survey ay kadalasang mas magagamit sa pagkilos kaysa sa marka.

## Mga patibong

- **Paghahambing ng mga numero ng NPS na kinolekta gamit ang magkaibang pagkakasulat ng tanong o tiyempo**: kahit maliliit na pagkakaiba sa disenyo ng survey ay maaaring magpabago ng marka ng ilang puntos, kaya mas hindi maaasahan ang cross-organization na NPS benchmarking kaysa sa tila.
- **Pagwawalang-bahala sa response rate**: ang pangunahing NPS na kinalkula mula sa 10% response rate ay mas hindi mapagkakatiwalaan kaysa sa kinalkula mula sa 60% response rate, dahil madaling magkaroon ng non-response bias patungo sa pinakasukdulang opinyon ang mababang response rate.
- **Pagturing sa NPS bilang diagnostic tool sa halip na buod na sukatan**: ang bumababang NPS ay nagsasabing may mali ngunit hindi kailanman nagsasabi kung ano; dapat itong laging ipares sa qualitative na feedback o mas detalyadong instrumento ng kasiyahan o usability upang matukoy ang sanhi.
- **Paghabol sa NPS bilang target sa sarili nito**: ang makitid na pag-optimize sa numero ng NPS (halimbawa, sa pagsu-survey lamang ng mga pasyente pagkatapos ng di-pangkaraniwang positibong interaksyon) ay maaaring magpabuti ng iniulat na marka habang hindi gumaganda, o aktibong lumalala pa, ang pinagbabatayang karanasan ng pasyente.

## Mga sanggunian

- Bain & Company, orihinal na metodolohiya ng Net Promoter System at gabay sa benchmarking
- Agency for Healthcare Research and Quality (AHRQ), CAHPS (Consumer Assessment of Healthcare Providers and Systems) na programa ng survey sa karanasan ng pasyente, bilang pantulong at mas detalyadong alternatibo
- Peer-reviewed na literatura tungkol sa paggamit at mga limitasyon ng Net Promoter Score sa mga setting ng pangangalagang pangkalusugan, halimbawa ang mga pag-aaral na nailathala sa Journal of Medical Internet Research (JMIR)

Tingnan din: [antas ng pananatili ng mga user](../antas-ng-pananatili-ng-mga-user/), dahil madalas na nagkakaiba ang iniulat ng pasyenteng kasiyahan at ang aktuwal na patuloy na paggamit ng produkto at sulit subaybayan bilang magkahiwalay na senyales.
