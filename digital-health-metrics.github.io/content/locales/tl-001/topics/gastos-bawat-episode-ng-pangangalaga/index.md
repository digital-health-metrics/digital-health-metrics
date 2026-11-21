# Gastos Bawat Episode ng Pangangalaga

Ang gastos bawat episode ng pangangalaga ay ang kabuuang gastos na nagastos sa paggamot ng tinukoy na klinikal na episode — halimbawa ang pagpapalit ng balakang at ang kaugnay na paggaling, o isang yugto ng pamamahala ng diabetes — na inihahambing laban sa historical baseline cohort na ginamot nang walang digital na interbensyong sinusuri. Ito ang karaniwang yunit ng pinansyal na paghahambing sa value-based care, dahil kinukuha nito ang buong larawan sa ekonomiya ng isang episode sa halip na iisang line item ng gastos nang hiwalay, at ito ang sukatang pinakamadalas na hinihingi ng mga payer at health system bago sumang-ayong pondohan ang isang digital health programme sa malaking sukat.

## Bakit ito mahalaga

Parami nang paraming nagbabayad ang mga kontrata ng value-based care para sa mga resulta at episode sa halip na mga indibidwal na serbisyo, na nangangahulugang dapat gawin ang pinansyal na argumento ng digital health programme sa parehong "salapi": kabuuang gastos kada episode, na inihahambing sa kung magkano ang gastos ng parehong uri ng episode bago umiral ang interbensyon. Ang programang nagpapababa ng isang kategorya ng gastos (halimbawa, mas kaunting personal na follow-up na pagbisita) habang nagpapataas ng iba (mas maraming gastos sa device, mas maraming oras ng kawani sa klinikal na monitoring) ay hindi kinakailangang nagpababa ng kabuuang gastos kada episode, at tanging ang buong pagko-cost sa antas ng episode ang nakakakuha ng trade-off na ito; ang pagtingin sa anumang iisang line ng gastos nang hiwalay ay nanganganib sa mapanlinlang na konklusyon sa alinmang direksyon. Dahil maaaring buuin ang mga depinisyon ng episode at mga panahon ng baseline sa mga paraang pumapabor sa partikular na konklusyon, nangangailangan ang sukatang ito ng mas maraming metodolohikal na transparency kaysa sa karamihan ng iba pa sa aklat na ito upang maging mapagkakatiwalaan sa isang mapag-alinlangang payer o finance team.

## Paano ito kinakalkula

```
Gastos bawat episode ng pangangalaga = kabuuang gastos ng lahat ng pangangalagang
                                        inihatid sa loob ng tinukoy na window ng
                                        episode (lahat ng care setting, lahat ng
                                        kategorya ng gastos) / bilang ng mga episode

Ihambing laban sa gastos kada episode ng historical baseline cohort para sa
parehong klinikal na tinukoy na uri ng episode, na inayos para sa case mix
(edad, comorbidity, kalubhaan) sa pagitan ng dalawang cohort.

Isama, hindi lamang ang direktang klinikal na gastos: gastos sa technology
platform at device, karagdagang oras ng klinikal na kawani, at anumang
pangangalagang lumipat ng setting (hal. mula inpatient patungong tahanan)
sa halip na tuluyang nawala.
```

## Halimbawang kalkulasyon

Ang historical baseline na gastos ng isang health system para sa episode ng total hip replacement (mula operasyon hanggang 90-araw na paggaling) ay $28,000 kada episode, batay sa 200 historical na episode. Isang bagong digital post-surgical monitoring programme ang ipinakilala, at ang 150 bagong episode na gumagamit ng programa ay nagpapakita ng karaniwang gastos na $24,500 kada episode — $3,500 na pagbaba kada episode, na pangunahing dulot ng mas kaunting pagbisita sa emergency department habang gumagaling at mas maikling karaniwang inpatient na pananatili. Pagkatapos i-risk-adjust para sa bahagyang mas bata at mas mababang comorbidity na case mix ng digital na minomonitor na cohort kumpara sa historical baseline, bumababa ang naayos na natipid sa $2,100 kada episode — tunay pa ring pagbuti, ngunit mas maliit nang malaki kaysa sa iminungkahi ng hilaw at hindi naayos na paghahambing.

## Mga pinagmumulan ng data at mga babala

Karaniwang binubuo ang kabuuang gastos ng episode mula sa sariling cost-accounting o finance system ng health system, na pinagsasama ang claims data, panloob na paglalaan ng gastos, at, kung may kasamang digital platform, ang mga gastos nito sa lisensya at hardware — ang tumpak na pagbuo ng numerong ito ang karaniwang pinakamahirap at pinakamabigat sa mapagkukunang bahagi ng anumang pagsusuri ng halaga ng digital health, dahil madalas na naitatala ang mga gastos sa magkakahiwalay na sistemang hindi kailanman dinisenyo upang pagsamahin sa antas ng episode. Mahalaga ang case-mix adjustment tuwing ang digital na pinamamahalaang cohort at ang historical baseline cohort ay hindi itinalaga sa pamamagitan ng tunay na randomization, dahil madalas na unang inaalok ang mga digital na programa sa mas nakikilahok, karaniwang mas malusog, o mas motibadong pasyente, na maaaring magbunga ng tila natipid sa gastos na tunay na selection effect lamang at hindi tunay na epekto ng programa.

## Mga patibong

- **Paghahambing ng hindi naayos na gastos sa mga cohort na magkaiba ang case mix**: ang digital na pinamamahalaang cohort na nagkataong mas malusog o mas mababa ang panganib kaysa sa historical baseline ay magpapakita ng mas mababang gastos kada episode dahil sa mga dahilang walang kaugnayan sa mismong digital na interbensyon; laging mag-risk-adjust bago maghambing.
- **Pag-iwan sa gastos sa teknolohiya at kawani sa "digital" na panig ng paghahambing**: ang pagsusuri ng gastos na sumusubaybay lamang sa nabawasang klinikal na paggamit habang binabalewala ang mga gastos sa platform, device, at kawani sa pagpapatakbo ng digital na programa ay magpapalobo sa netong natipid.
- **Hindi pare-parehong pagtukoy sa window ng episode sa pagitan ng mga cohort**: ang paghahambing ng 90-araw na window ng episode para sa isang cohort laban sa 60-araw na window para sa iba ay magbubunga ng paghahambing ng gastos na hindi aktuwal na sumusukat sa parehong bagay.
- **Pagturing sa paglipat ng gastos bilang pagbawas ng gastos**: ang gastos na inilipat mula sa isang care setting patungo sa iba (halimbawa mula inpatient patungong minomonitor na setting sa tahanan) ay tunay at mahalagang natuklasan, ngunit analitikal na naiiba sa gastos na tuluyang naalis, at dapat iulat nang hiwalay ang dalawa.

## Mga sanggunian

- Centers for Medicare & Medicaid Services (CMS), gabay sa Bundled Payments for Care Improvement (BPCI) at mga episode-based na payment model
- Healthcare Financial Management Association (HFMA), gabay sa metodolohiya ng pagko-cost ng episode of care
- Peer-reviewed na literatura tungkol sa pagsusuri ng gastos ng value-based care sa digital health, halimbawa ang mga pag-aaral na nailathala sa Health Affairs at American Journal of Managed Care

Tingnan din: [return on investment (ROI) at value on investment (VOI)](../roi-at-voi/), na gumagamit ng gastos bawat episode ng pangangalaga bilang isa sa mga pangunahing input nito.
