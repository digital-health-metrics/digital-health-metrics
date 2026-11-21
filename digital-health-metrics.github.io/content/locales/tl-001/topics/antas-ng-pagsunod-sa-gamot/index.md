# Antas ng Pagsunod sa Gamot

Sinusukat ng antas ng pagsunod sa gamot kung hanggang saan umiinom ang pasyente ng iniresetang gamot ayon sa direksyon, na kadalasang ipinapahayag bilang proporsyon ng mga araw sa tinukoy na panahon kung kailan may access ang pasyente sa kanyang gamot ayon sa reseta. Isa ito sa pinakamabigat na sukatan sa digital health dahil karaniwan ang hindi pagsunod, higit na maiiwasan sa tamang suporta, at direktang nakaugnay sa mas masamang klinikal na resulta at mas mataas na downstream na gastos — na eksaktong agwat na nilalayong punan ng mga medication reminder app, smart pill bottle, at pharmacy refill nudge.

## Bakit ito mahalaga

Tinatayang umaabot hanggang 50% para sa ilang kondisyon ang hindi pagsunod sa gamot para sa malalang sakit ayon sa mga pampublikong ahensya ng kalusugan, at isa itong pangunahing maiiwasang sanhi ng maiiwasang pagpapaospital, paglala ng sakit, at pagkabigo ng paggamot na maling iniuugnay sa mismong gamot sa halip na sa hindi pare-parehong paggamit. Umiiral ang mga digital na kagamitan sa pagsunod partikular upang punan ang agwat na ito, kaya para sa anumang programang may bahaging gamot, karaniwang ang antas ng pagsunod ang pinakamahalagang sukatan sa pagpapasya: nasa sanhi itong upstream ng pagbuti ng biometric, muling pagpapaospital, at karamihan ng iba pang sukatan ng klinikal na resulta na maaaring iulat ng programa. Ang programang nagpapabuti ng pakikilahok o kasiyahan nang hindi nagpapagalaw sa pagsunod ay malamang na hindi pa nakapagpapakita ng kapani-paniwalang mekanismo ng klinikal na benepisyo.

## Paano ito kinakalkula

```
Proportion of Days Covered (PDC) = mga araw sa panahon na may gamot na hawak
                                    (batay sa days' supply mula sa mga fill) /
                                    mga araw sa panahon ng pagsukat × 100

Medication Possession Ratio (MPR) = kabuuang days' supply na nakuha sa panahon
                                    / mga araw sa panahon × 100 (maaaring lumampas
                                    sa 100% dahil sa maagang refill; kaya
                                    karaniwang mas gusto ang PDC)

Karaniwang itinuturing na "sumusunod" ang pasyente sa hangganan ng PDC na
≥ 80%, ayon sa malawakang ginagamit na kumbensiyon ng quality measure.
```

## Halimbawang kalkulasyon

Isang pasyente ang niresetahan ng pang-araw-araw na gamot para sa malalang sakit sa loob ng 90-araw na panahon ng pagsukat. Ipinapakita ng mga talaan ng pharmacy fill na nakakuha ang pasyente ng sapat na gamot upang sakupin ang 76 sa 90 araw na iyon, na may dalawang agwat: 9-araw na agwat matapos maubusan bago ang refill, at 5-araw na agwat sa paligid ng pagpapaospital. Ang PDC ay 76 / 90 × 100 = 84%, na lumalampas sa kumbensiyonal na hangganan ng pagsunod na 80%. Kung ang parehong mga agwat ay sinukat gamit ang MPR batay sa days' supply na ibinigay sa halip na mga araw na aktuwal na nasaklaw, ang maagang refill sa ibang bahagi ng panahon ay maaaring magtulak sa ratio nang higit sa 100%, na naglalarawan kung bakit mas konserbatibo at karaniwang mas gustong sukatan ang PDC.

## Mga pinagmumulan ng data at mga babala

Ang pharmacy claims o fill data (mula sa pharmacy benefit manager o konektadong pharmacy system) ang karaniwang pinagmumulan, dahil sinasalamin nito kung ano ang aktuwal na nakuha ng pasyente sa halip na kung ano ang iniresetang; ang data ng reseta lamang ay nagpapalobo sa pagsunod dahil hindi nito kinukumpirma na kinuha man lang ng pasyente ang gamot. Ang mga digital na kagamitan sa pagsunod — smart pill bottle, ingestible sensor, konektadong smart inhaler na nagtatala ng bawat pagpindot para sa mga kondisyon sa baga gaya ng hika at COPD, at app-based na check-in — ay nag-aalok ng mas mataas na resolusyon ng data kung aktuwal na ininom ang dosis, hindi lamang nakuha, ngunit ginagamit ng maliit at posibleng hindi kinatawang minorya ng mga pasyente, kaya ang paghahalo ng pagsunod na kinumpirma ng device at PDC na batay sa claims sa buong populasyon ay nangangailangan ng pag-iingat sa interpretasyon. Dapat sukatin ang pagsunod sa panahong sapat na mahaba upang pantayin ang mga nag-iisang nalampasang dosis ngunit sapat na maikli upang matukoy ang makabuluhang pagbaba bago ito magdulot ng klinikal na pinsala — karaniwan ang 90-araw na rolling window para sa mga gamot sa malalang sakit.

## Mga patibong

- **Paggamit ng MPR nang hindi isinisiwalat na maaari itong lumampas sa 100%**: ang hindi ipinaliwanag na ratio na higit sa 100% dahil sa maagang refill o pag-iimbak ay nagpapahina sa pagiging maaasahan ng paghahambing sa pagitan ng mga pasyente at panahon maliban kung PDC ang gagamitin o tahasang lilimitahan ang ratio.
- **Pagturing sa data ng reseta o order bilang patunay ng pagsunod**: ang reseta na isinulat o ipinadala sa parmasya ay walang sinasabi kung kinuha o ininom ba ng pasyente ang gamot; tanging fill o device data lamang ang pumupuno sa agwat na iyon.
- **Paglalapat ng iisang hangganan ng pagsunod sa lahat ng kondisyon nang walang pagtatangi**: malaki ang pagkakaiba ng klinikal na kahihinatnan ng pagliban sa 20% ng mga dosis ayon sa klase ng gamot (hal. anticoagulant laban sa statin), kaya ang iisang 80% na hangganang ginagamit sa lahat ay maaaring magpababa o magpalobo ng klinikal na panganib para sa ilang gamot.
- **Pagwawalang-bahala sa paglipat at paghinto ng gamot**: ang pasyenteng klinikal at angkop na inilipat sa ibang gamot ay maaaring magmukhang malaking pagbaba ng pagsunod sa orihinal na gamot kung hindi isinasaalang-alang ang paglipat sa kalkulasyon.

## Mga sanggunian

- Pharmacy Quality Alliance (PQA), mga espesipikasyon ng sukatang Proportion of Days Covered
- Centers for Medicare & Medicaid Services (CMS), mga sukatan ng pagsunod sa gamot sa Star Ratings
- Peer-reviewed na literatura tungkol sa pagsukat ng pagsunod sa gamot at mga digital na interbensyon sa pagsunod, halimbawa ang mga pag-aaral na nailathala sa Journal of Managed Care & Specialty Pharmacy

Tingnan din: [antas ng pagbuti ng biometric](../antas-ng-pagbuti-ng-biometric/), kung saan pangunahing tagapagtulak ang pagsunod sa gamot para sa malalang sakit.
