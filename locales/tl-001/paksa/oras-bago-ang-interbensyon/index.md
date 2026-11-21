# Oras Bago ang Interbensyon

Ang oras bago ang interbensyon ay ang lumipas na oras mula sa paglikha ng awtomatikong health alert — halimbawa, kapag natukoy ng remote monitoring device ang vital sign na wala sa saklaw, o kapag minarkahan ng digital triage tool ang pasyenteng lumalala — hanggang sa aktuwal na pagsisimula ng tugon ng isang miyembro ng clinical team. Ito ang sukatan ng proseso na tumutukoy kung natutupad ba ng awtomatikong alerting system ang pangunahing pangako nito: ang pagtuklas sa problema nang mas maaga kaysa sa tradisyonal na modelo ng mga naka-iskedyul na check-in o mga tawag na sinisimulan ng pasyente.

## Bakit ito mahalaga

Ang alerting system na lumilikha ng klinikal na tamang alerto ngunit hindi sinusundan ng napapanahong tugon ay hindi aktuwal na nagpabuti ng kaligtasan ng pasyente; ang buong value proposition ng remote monitoring at awtomatikong alerting ay nakasalalay sa pagsasara ng loop nang mas mabilis kaysa sa alternatibong hindi minomonitor na pathway. Dahil nangangailangan ng magkakaibang pagkaapurahan ng tugon ang magkakaibang kalubhaan ng alerto, dapat laging iulat ang oras bago ang interbensyon ayon sa antas ng kalubhaan sa halip na iisang average, dahil maaaring itago ng mabilis na average sa lahat ng alerto ang mapanganib na bagal ng tugon sa kakaunting pinakamalubha. Isa rin ang sukatang ito sa pinakamalinaw at pinakakumbinsing paraan upang ipakita ang halaga ng awtomatikong monitoring programme sa klinikal na pamunuan at mga payer, dahil direktang maihahambing ito sa naunang, hindi awtomatikong oras ng tugon ng parehong organisasyon para sa katulad na klinikal na sitwasyon.

## Paano ito kinakalkula

```
Oras bago ang interbensyon = timestamp(sinimulan ang klinikal na tugon) −
                              timestamp(nalikha ang alerto)

Iulat ang median at mataas na percentile (hal. ika-90), hinati ayon sa
antas ng kalubhaan ng alerto, hindi bilang iisang pinaghalong average.

Ang "sinimulan ang klinikal na tugon" ay dapat bigyang-kahulugan nang tumpak at
pare-pareho — hal. pagbubukas ng clinician sa talaan ng pasyente at pagkilos,
o isang naidokumentong pagtatangkang makipag-ugnayan palabas — hindi lamang ang
pagtingin o pag-acknowledge sa alerto nang walang ginawang aksyon.
```

## Halimbawang kalkulasyon

Ang alerting system ng isang remote cardiac monitoring programme ay nagmarka ng 200 alerto ng arrhythmia na mataas ang kalubhaan sa loob ng isang buwan. Ang median na oras mula sa paglikha ng alerto hanggang sa pagsisimula ng clinician ng outbound na pakikipag-ugnayan ay 12 minuto, na may oras sa ika-90 percentile na 38 minuto. Ipinapakita ng makasaysayang data mula sa naunang hindi minomonitor na pathway ng parehong populasyon (kung saan ang katulad na pangyayari ay karaniwang lilitaw lamang sa susunod na naka-iskedyul na pagbisita sa klinika o pagdating sa ospital) ang median na oras sa anumang klinikal na tugon na sinusukat sa mga araw, hindi minuto. Ang paghahambing na ito — hindi ang 12 minutong numero nang mag-isa — ang nagpapakita ng klinikal na halaga ng monitoring programme; kasing-halaga rin ang numero sa ika-90 percentile, dahil tinutukoy nito ang buntot ng mga alertong inabot ng mahigit kalahating oras bago naaksyunan at nangangailangan ng sarili nitong root-cause review.

## Mga pinagmumulan ng data at mga babala

Nagmumula ang mga timestamp ng paglikha ng alerto sa sariling event log ng monitoring platform; ang mga timestamp ng klinikal na tugon ay karaniwang nagmumula sa audit trail ng electronic health record o sa sariling workflow o task-management system ng care team, at dapat tumpak na naka-synchronize ang oras ng dalawang sistemang ito upang mapagkakatiwalaan ang kinalkulang agwat. Nangangailangan ang "nasimulan ang tugon" ng mahigpit at naidokumentong depinisyon, dahil ang clinician na tumingin lamang o nagbasura ng alerto nang walang karagdagang aksyon ay pundamental na naiibang, at mas hindi nakapagpapanatag, na pangyayari kaysa sa nag-trigger ng aktuwal na outbound na pakikipag-ugnayan o interbensyon — ang pagsasama sa dalawa ay magpapabuti sa tingin ng oras ng tugon kaysa sa klinikal na katotohanan. Karaniwang malaki ang epekto ng antas ng staffing sa gabi at katapusan ng linggo sa oras bago ang interbensyon, kaya dapat iulat ang sukatang ito ayon sa segment ng oras ng araw at araw ng linggo kung pinapayagan ng dami ng alerto, sa halip na bilang 24/7 na pinaghalong average lamang na maaaring magtago ng malubhang agwat sa tugon sa labas ng oras ng trabaho.

## Mga patibong

- **Pagbilang sa pag-acknowledge ng alerto bilang tugon**: ang pagtingin o pagbasura ng clinician sa alerto ay hindi katumbas ng pagsisimula ng klinikal na tugon; bigyang-kahulugan nang mahigpit ang tugon bilang naidokumentong aksyon, hindi passive na pag-acknowledge.
- **Pag-uulat ng iisang pinaghalong oras sa lahat ng kalubhaan**: ang mabilis na average sa pinagsamang mababa at mataas na kalubhaan ng alerto ay maaaring magtago ng mapanganib na bagal ng tugon partikular sa mga alertong pinakamataas ang kalubhaan, na siyang pinakamahalaga.
- **Pagwawalang-bahala sa epekto ng padron ng staffing**: madalas na malaki ang pagkakaiba ng oras ng tugon ayon sa oras ng araw at araw ng linggo dahil sa antas ng staffing; ang iisang pangkalahatang average ay maaaring magtago ng sistematikong agwat sa tugon sa labas ng oras ng trabaho o sa katapusan ng linggo.
- **Paghahambing ng oras bago ang interbensyon sa mga organisasyong magkaiba ang hangganan ng alerto**: ang organisasyong may mas konserbatibo (mas sensitibo) na hangganan ng alerto ay lilikha ng mas maraming alertong mababa ang acuity, na maaaring magpalabnaw sa average nitong oras ng tugon kumpara sa organisasyong gumagamit ng mas mahigpit na hangganan, nang walang kaugnayan sa aktuwal na klinikal na pagtugon.

## Mga sanggunian

- NHS England, gabay sa remote monitoring at mga pamantayan ng klinikal na tugon sa virtual ward
- ONC / HealthIT.gov, gabay sa disenyo at kaligtasan ng clinical alerting system
- Peer-reviewed na literatura tungkol sa mga oras ng tugon sa alerto ng remote patient monitoring at mga klinikal na resulta, halimbawa ang mga pag-aaral na nailathala sa npj Digital Medicine

Tingnan din: [antas ng uptime ng device](../antas-ng-uptime-ng-device/), dahil nakasalalay ang maaasahang numero ng oras bago ang interbensyon sa aktuwal na pagiging online ng pinagbabatayang monitoring device upang lumikha ng alerto sa unang lugar.
