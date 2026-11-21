# Antas ng Pananatili ng mga User

Ang antas ng pananatili ng mga user ay ang bahagi ng mga user na aktibo sa isang panimulang yugto na nananatiling aktibo sa isang mas huling yugto, at ang kabaligtaran nito, ang churn (o dropout) rate, ay ang bahaging tuluyan nang tumitigil sa paggamit ng produkto. Kung ang antas ng pag-ampon sa portal ng pasyente (tingnan ang paksang iyon) ay sumusukat kung nag-activate ba nang makabuluhan ang pasyente sa isang digital health product, sinusukat ng pananatili kung patuloy ba niya itong ginagamit — at para sa anumang digital health product na nakabatay sa subscription o tuloy-tuloy na pangangalaga, ang pananatili ang karaniwang pinakamahigpit na nakaugnay na sukatan sa parehong klinikal na epekto at komersyal na pagpapanatili.

## Bakit ito mahalaga

Ang digital health product na hindi kayang panatilihin ang mga user ay hindi makapaghahatid ng tuloy-tuloy na klinikal na benepisyo, gaano man kalakas ang unang numero ng pag-ampon o activation: ang tool sa pamamahala ng malalang kondisyon na ginamit sa loob ng dalawang linggo at pagkatapos ay iniwan ay malamang na hindi makapagbabago ng biometric na resultang nakadepende sa mga buwan ng tuloy-tuloy na pagbabago ng pag-uugali. Ang pananatili rin ay isa sa mga sukatang pinakamabigat ang komersyal na kahihinatnan na iniuulat ng isang digital health company sa mga investor at payer, dahil ang mga retention curve (ang hugis ng pagbaba sa paglipas ng panahon, hindi lamang iisang porsyento ng pananatili) ay nagpapakita kung nakatagpo na ang produkto ng tunay na napapanatiling padron ng paggamit o nakakakuha lamang ng paunang interes na dulot ng pagiging bago na inaasahang kukupas. Ang retention curve na pumapatag matapos ang unang pagbagsak (ang mga pasyenteng nakalampas sa unang buwan ay karaniwang nananatili) ay lubhang naiibang, at mas malusog, na senyales kaysa sa patuloy at tuloy-tuloy na bumababa nang walang sahig.

## Paano ito kinakalkula

```
Antas ng pananatili (yugto N) = mga user na aktibo sa yugto N na aktibo rin
                                 sa panimulang yugto ng cohort / mga user sa
                                 panimulang yugto ng cohort × 100

Churn rate = 1 − antas ng pananatili (para sa parehong yugto)

Iulat bilang cohort retention curve (pananatili sa araw/linggo/buwan 1, 2, 3…),
hindi bilang iisang numero sa isang punto ng panahon, dahil pinagsasama ng
iisang snapshot ang mga bagong sumali (na wala pang pagkakataong mag-churn)
at ang mga matagal nang user.
```

## Halimbawang kalkulasyon

Isang digital health app ang nag-enrol ng cohort na 1,000 bagong user noong Enero. Sa pagtatapos ng buwan 1, 640 sa orihinal na 1,000 ang aktibo pa rin (pananatili sa buwan 1: 64%). Sa pagtatapos ng buwan 3, 410 ang nananatiling aktibo (pananatili sa buwan 3: 41%). Pagsapit ng buwan 6, 380 ang nananatiling aktibo (pananatili sa buwan 6: 38%). Ang hugis ng curve na ito — matarik na unang pagbaba na sinundan ng pagpapatag sa pagitan ng buwan 3 at 6 — ay nagmumungkahing nakapagpapanatili ang produkto ng matatag na ubod ng mga user kapag nalampasan na nila ang paunang hadlang ng pag-ampon, na isang malaki ang kaibhan at mas nakapagpapalakas-loob na senyales kaysa kung ang pagbaba mula buwan 3 hanggang 6 ay nagpatuloy sa parehong bilis ng buwan 1 hanggang 3.

## Mga pinagmumulan ng data at mga babala

Kinakalkula ang pananatili mula sa sariling login o activity event log ng produkto, na pare-parehong binibigyang-kahulugan ang "aktibo" (halimbawa, kahit isang kwalipikadong session sa yugto) sa bawat cohort na pinaghahambing. Dapat paghambingin ang mga cohort sa magkatulad na batayan — parehong panimulang depinisyon ng "aktibo", parehong haba ng window ng pagmamasid — dahil kahit maliliit na pagkakaiba sa depinisyon (30-araw laban sa 28-araw na buwan, o mas mahigpit laban sa mas maluwag na hangganan ng "aktibo") ay maaaring magpabago sa iniulat na porsyento ng pananatili ng ilang puntos nang walang tunay na pagkakaiba sa pag-uugali ng user. Karaniwan ang mga epekto ng panahon sa mga health app na nakatali sa mga resolusyon sa Bagong Taon o sa mga partikular na panahon ng health awareness, kaya ang paghahambing ng cohort taon-sa-taon ay karaniwang mas nagbibigay-kaalaman kaysa sa paghahambing ng magkatabing cohort mula sa magkaibang panahon ng taon.

## Mga patibong

- **Pag-uulat ng iisang snapshot ng pananatili sa halip na curve**: ang iisang numerong "X% ng mga user ay aktibo pa rin" nang walang hugis ng pagbaba sa paglipas ng panahon ay hindi makapagtatangi sa produktong pumapatag (malusog) mula sa patuloy na bumabagsak (hindi malusog).
- **Pagbabago ng depinisyon ng "aktibo" sa pagitan ng mga yugto ng pag-uulat**: ang pagluwag sa depinisyon ng aktibong user (halimbawa, pagbibilang ng passive na pagbubukas ng app sa halip na nakumpletong aksyon) ay maaaring magmukhang bumubuti ang pananatili kahit hindi naman nagbago ang aktuwal na paggamit.
- **Pagwawalang-bahala sa seasonality ng cohort**: ang paghahambing ng pananatili ng cohort ng Enero (na madalas ay napapalaki ng pag-enrol dahil sa resolusyon sa Bagong Taon, na karaniwang nagdadala ng mas mababa ang motibasyon na cohort) laban sa cohort na nakuha sa ibang panahon ng taon ay maaaring magbunga ng mapanlinlang na konklusyon sa trend.
- **Paghahalo ng organic at paid-acquisition na mga cohort**: kadalasang magkaiba ang pananatili ng mga user na nakuha sa magkakaibang channel; ang paghahalo sa mga ito sa iisang pinagsamang numero ng pananatili ay maaaring magtago ng problema sa pananatili na partikular sa isang channel.

## Mga sanggunian

- Peer-reviewed na literatura tungkol sa pakikilahok at attrition sa mga digital health app, halimbawa ang mga pag-aaral na nailathala sa Journal of Medical Internet Research (JMIR mHealth and uHealth)
- Digital Therapeutics Alliance, gabay sa pinakamahuhusay na kasanayan sa pagsukat ng pakikilahok at pananatili para sa mga digital therapeutics
- Mga ulat ng industry benchmarking tungkol sa pananatili sa mga mobile health app, mula sa mga analytics platform at organisasyon ng market research sa digital health

Tingnan din: [antas ng pagkakapare-pareho ng pakikilahok ng pasyente](../antas-ng-pagkakapare-pareho-ng-pakikilahok-ng-pasyente/), na sumusukat sa kalidad ng pakikilahok ng mga user na nanatili, na naiiba sa kung nananatili ba silang naka-enrol.
