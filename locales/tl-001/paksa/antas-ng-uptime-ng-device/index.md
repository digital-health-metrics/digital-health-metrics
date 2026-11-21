# Antas ng Uptime ng Device

Sinusukat ng antas ng uptime ng device ang bahagi ng naka-iskedyul na oras ng monitoring na ang isang konektadong health device — remote patient monitoring sensor, wearable, o home telehealth unit — ay aktuwal na online, nagpapadala ng data, at gumagana nang tama, sa halip na offline, nadiskonekta, o may sira. Ito ang pundamental na sukatan ng imprastraktura sa ilalim ng bawat remote monitoring o connected-device na programa: ang klinikal na alerto, trend ng biometric, o numero ng pakikilahok na kinalkula mula sa device na madalas na offline ay kasing-maaasahan lamang ng koneksyon sa likod nito.

## Bakit ito mahalaga

Nakasalalay sa tuloy-tuloy o halos tuloy-tuloy na pagkuha ng data ang buong klinikal na value proposition ng remote patient monitoring programme; ang device na mahina ang uptime ay lumilikha ng mga tahimik na puwang sa klinikal na larawan ng pasyente na maaaring mapagkamalang katatagan (walang alerto dahil walang data, hindi dahil walang nagbago) sa halip na tamang makilala bilang pagkabigo ng monitoring. Ang uptime ng device ay isa ring nangungunang indikasyon ng gastos ng programa at karanasan ng pasyente: ang device na madalas na nawawalan ng koneksyon ay lumilikha ng mga tawag sa suporta, pagkadismaya ng pasyente, at posibleng hindi kinakailangang klinikal na pag-abot upang tingnan kung ang puwang sa data ay sumasalamin sa tunay na klinikal na pangyayari o simpleng teknikal na sira. Dahil ang mga pagkabigo sa uptime ng device ay madalas na maiuugnay sa imprastrakturang kontrolado ng organisasyon (hindi maayos na na-configure na cellular gateway, mahinang Wi-Fi sa tahanan ng pasyente, hindi naaalagaang fleet ng device) sa halip na sa pasyente, nabibilang ang sukatang ito sa vendor at technical operations team, hindi basta isinasama sa mga sukatan ng pakikilahok ng pasyente.

## Paano ito kinakalkula

```
Antas ng uptime ng device = oras na online ang device at nagpapadala ng balidong data /
                             kabuuang naka-iskedyul na oras ng monitoring × 100

Hatiin ang mga ugat na sanhi ng downtime kung pinapayagan ng data:
  Pagkabigo sa panig ng device (baterya, sira ng hardware, pag-crash ng firmware)
  Pagkabigo sa koneksyon       (pagkawala ng cellular/Wi-Fi/VPN)
  Mga salik sa panig ng pasyente (pinatay ang device, inilayo sa saklaw)

Mga pantulong na teknikal na parameter na susubaybayan kasabay ng uptime:
  Karaniwang CPU utilization, paggamit ng memorya, at antas ng baterya kada device
  Mean time between connectivity failures
  Mean time to reconnect pagkatapos ng pagkawala ng koneksyon
```

## Halimbawang kalkulasyon

Ang isang remote cardiac monitoring programme ay nag-deploy ng 1,000 konektadong device, na bawat isa ay inaasahang magpapadala nang tuloy-tuloy. Sa loob ng 30-araw na buwan (720 naka-iskedyul na oras ng monitoring kada device), nagtala ang fleet ng pinagsamang 705,600 aktuwal na oras na online laban sa naka-iskedyul na 720,000 oras, na nagbibigay ng antas ng uptime ng device sa buong fleet na 705,600 / 720,000 × 100 = 98%. Ipinapakita ng pagsusuri sa ugat ng sanhi ng 14,400 oras ng downtime na 60% ay maiuugnay sa pagkawala ng cellular na koneksyon na nakatuon sa isang partikular na rehiyong rural, 25% sa mga device na may tumatandang baterya na minarkahan para palitan, at 15% sa pansamantalang pagpatay ng mga pasyente sa kanilang device. Itinuturo ng breakdown na ito ang dalawang malinaw at magkaibang interbensyon — pag-aayos ng koneksyon para sa apektadong rehiyon at proaktibong programa sa pagpapalit ng baterya — na hindi mapag-uugnay ng iisang pinagsamang numero ng uptime.

## Mga pinagmumulan ng data at mga babala

Nagmumula ang data ng uptime sa sariling device management at telemetry system ng tagagawa ng device o vendor ng platform, na nagtatala ng mga event ng koneksyon at heartbeat kada device; dapat kumpirmahin ng organisasyon nang eksakto kung ano ang itinuturing ng vendor na "online" (maaaring iulat ng device na nakakonekta ito sa network habang nabibigong magpadala ng balidong klinikal na data, na dapat ibilang na downtime para sa klinikal na layunin kahit iulat ito ng dashboard ng vendor bilang nakakonekta). Dapat iulat ang uptime kada cohort ng device o heograpiya kung pinapayagan ng dami, dahil madalas na nakagrupo sa heograpiya ang kalidad ng koneksyon (cellular na saklaw sa kanayunan, Wi-Fi ng lumang gusali) sa halip na pantay na nakakalat sa populasyon ng pasyente, at maaaring itago ng pinagsamang numero sa buong fleet ang malubha at matutugunang problemang panrehiyon.

## Mga patibong

- **Pagsasama ng koneksyon sa network at pagpapadala ng balidong data**: maaaring magmukhang "nakakonekta" ang device sa dashboard ng vendor habang nabibigong magpadala ng magagamit na klinikal na data; bigyang-kahulugan at sukatin ang uptime laban sa aktuwal na pagtanggap ng balidong data, hindi lamang hilaw na koneksyon sa network.
- **Pag-uulat lamang ng average sa buong fleet**: maaari nitong itago ang malubhang problema sa downtime na partikular sa heograpiya o cohort ng device na mabubunyag ng mas targeted na average at may partikular na matutugunang solusyon.
- **Hindi paghihiwalay ng ugat na sanhi ng downtime**: ang downtime sa panig ng device, koneksyon, at pasyente ay bawat isa ay nangangailangan ng ganap na magkaibang interbensyon; ang iisang porsyento ng downtime na walang segmentasyon ng ugat na sanhi ay hindi maaaring kumilos.
- **Pagturing sa puwang ng data bilang klinikal na katatagan bilang default**: ang nawawalang daloy ng data mula sa offline na device ay dapat mag-trigger ng teknikal na pagsusuri ng koneksyon, hindi tahimik na bigyang-kahulugan bilang "walang balita ay mabuting balita" para sa klinikal na kalagayan ng pasyente.

## Mga sanggunian

- Continua Design Guidelines / Personal Connected Health Alliance, mga teknikal na pamantayan ng interoperability para sa mga konektadong health device
- ONC / HealthIT.gov, gabay sa implementasyon at mga teknikal na kinakailangan ng remote patient monitoring programme
- Peer-reviewed na literatura tungkol sa pagiging maaasahan ng device at pagkakumpleto ng data sa remote patient monitoring, halimbawa ang mga pag-aaral na nailathala sa npj Digital Medicine

Tingnan din: [katumpakan ng triage at pag-ruta](../katumpakan-ng-triage-at-pag-ruta/), na nakasalalay sa pagtanggap ng kumpleto at maaasahang data ng device upang makagawa ng tamang desisyon sa triage sa unang lugar.
