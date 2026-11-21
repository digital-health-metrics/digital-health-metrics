# Antas ng Pagbuti ng Biometric

Ang antas ng pagbuti ng biometric ay ang bahagi ng mga naka-enrol na pasyente sa isang digital health programme na nakakamit ng klinikal na makabuluhang pagbuti sa isang sinusubaybayang biometric — kadalasan ang glycated haemoglobin (HbA1c) sa mga programa para sa diabetes at cardiometabolic, o ang body mass index (BMI) sa mga programa sa pamamahala ng timbang — sa loob ng tinukoy na panahon ng pagka-enrol. Ito ang sukatan ng resulta na sa huli ay nagbibigay-katwiran sa mga klinikal na pahayag ng isang digital health product: inilalarawan ng mga numero ng pakikilahok at pag-ampon kung paano ginagamit ang produkto, ngunit mas malapit sa ebidensya na gumagana ito ang pagbuti ng biometric.

## Bakit ito mahalaga

Madalas na ibinebenta at kinokomisyon ang mga digital health programme batay sa pangako ng mas mabuting resulta sa kalusugan, at ang antas ng pagbuti ng biometric ang pinakadirekta at pinakakwantipikadong paraan upang subukin ang pangakong iyon laban sa partikular at klinikal na kinikilalang hangganan sa halip na malabong pahayag na "mas mabuting kalusugan". Parami nang paraming nag-uugnay ang mga payer, employer, at health system ng reimbursement o pag-renew ng kontrata sa naipakitang pagbabago sa biometric, kaya ang programang hindi kayang mag-ulat ng antas na ito nang kapani-paniwala ay may kawalan sa komersyal at klinikal na aspeto. Isa rin itong pagsusuri ng disiplina sa disenyo ng programa: mas madaling mag-ulat ng pakikilahok (mga login, naipadalang mensahe) kaysa sa mga resulta, at dapat maghinala ang isang team sa anumang programang masigasig na nag-uulat ng una habang malabo sa huli.

## Paano ito kinakalkula

```
Antas ng pagbuti ng biometric = mga pasyenteng nakakamit ng tinukoy na klinikal na
                                 makabuluhang pagbuti / mga pasyenteng may balidong
                                 baseline at follow-up na sukat × 100

Karaniwang klinikal na makabuluhang hangganan:
  HbA1c   — pagbaba ng ≥ 0.5 porsyentong punto, o pag-abot sa tinukoy na
            target (hal. < 7.0%) mula sa baseline na wala sa saklaw
  BMI     — pagbaba ng ≥ 5% ng baseline na timbang ng katawan, napanatili
            hanggang sa punto ng follow-up na pagsukat

Iulat nang hiwalay para sa bawat sinusubaybayang biometric; huwag kailanman
pagsamahin ang pagbuti ng HbA1c at BMI sa iisang pinagsamang porsyento ng "pagbuti".
```

## Halimbawang kalkulasyon

Ang isang cardiometabolic na digital health programme ay nag-enrol ng 800 pasyenteng may baseline na HbA1c na wala sa saklaw. Sa mga ito, 620 ang may parehong balidong baseline at follow-up na sukat sa 6 na buwan (180 ang nawala sa follow-up at inalis sa denominator, hindi ibinilang na pagkabigo). Sa 620 na may magkapares na sukat, 340 ang nakakamit ng pagbaba ng hindi bababa sa 0.5 porsyentong punto. Ang antas ng pagbuti ng biometric ay 340 / 620 × 100 = 55%. Ang pag-uulat nito laban sa buong 800 na naka-enrol (340 / 800 = 42.5%) ay maghahalo sa pagkawala sa follow-up at pagkabigo ng paggamot, na magpapababa sa antas para sa mga pasyenteng aktuwal na nakakumpleto ng pagsukat.

## Mga pinagmumulan ng data at mga babala

Ang mga baseline at follow-up na halaga ng biometric ay karaniwang nagmumula sa konektadong device (Bluetooth glucometer o smart scale), sa resulta ng laboratoryo na inangkat mula sa electronic health record, o sa halagang iniulat mismo ng pasyente — at ang tatlong pinagmumulang ito ay may magkakaibang pagiging maaasahan, kaya dapat iulat ang pinagmulan kasabay ng antas. Bihirang random ang pagkawala sa follow-up: ang mga pasyenteng humihiwalay sa programa ay madalas ding sila ang pinakamalamang na hindi bumuti, kaya ang mataas na antas ng pagbuti na kinalkula lamang sa mga pasyenteng nakakumpleto ng follow-up ay maaaring magpalobo sa tunay na epekto ng programa sa antas ng populasyon. Totoo ang mga epekto ng panahon at regression-to-the-mean para sa parehong HbA1c at timbang, kaya dapat maghambing ang isang programa sa kasabay o makasaysayang control group kung maaari sa halip na ituring na patunay ng epekto ng programa ang anumang pagbuti.

## Mga patibong

- **Pag-aalis, sa halip na pag-uulat, ng pagkawala sa follow-up**: ang tahimik na pag-alis sa denominator ng mga pasyenteng walang follow-up na sukat ay maaaring malaking magpalobo sa tila antas ng pagbuti; laging iulat ang antas ng pagkumpleto ng follow-up na sukat kasabay ng mismong antas ng pagbuti.
- **Paghahalo ng mga sukat na iniulat ng pasyente at mula sa device nang hindi nilalagyan ng label**: sistematikong mas hindi maaasahan ang timbang na iniulat ng pasyente kaysa sa basa ng konektadong smart scale, at ang paghahalo sa dalawang pinagmulan ay nagtatago kung gaano karami sa tila pagbuti ang ingay lamang ng pagsukat.
- **Walang control o counterfactual**: maraming malalang biometric na sukat ang nag-iiba-iba o bumabalik sa mean nang mag-isa; ang single-arm na antas ng pagbuti na walang anumang grupo ng paghahambing ay nagpapahiwatig lamang, hindi nagpapatunay, ng epekto ng programa.
- **Pagturing sa katamtamang pagbabago ng average bilang ebidensya ng malawak na pagbuti**: ang maliit na average na pagbuti sa antas ng populasyon ay maaaring dulot ng ilang malakas tumugon habang walang pagbabago sa karamihan ng pasyente; iulat ang distribusyon (hal. ang bahaging lumampas sa klinikal na makabuluhang hangganan), hindi lamang ang pagbabago ng mean.

## Mga sanggunian

- American Diabetes Association (ADA), Standards of Care in Diabetes, gabay sa target ng HbA1c at klinikal na makabuluhang pagbabago
- Centers for Disease Control and Prevention (CDC), Division of Diabetes Translation, gabay sa pagsusuri ng programa
- Peer-reviewed na literatura tungkol sa mga resulta ng mga digital na programa para sa diabetes at pamamahala ng timbang, halimbawa ang mga pag-aaral na nailathala sa npj Digital Medicine at Diabetes Care

Tingnan din: [antas ng pagsunod sa gamot](../antas-ng-pagsunod-sa-gamot/), isang madalas na upstream na tagapagtulak ng pagbuti ng biometric sa mga programa para sa malalang kondisyon.
