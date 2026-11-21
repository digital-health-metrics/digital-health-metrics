# Antas ng Paglilihis sa Emergency Department

Sinusukat ng antas ng paglilihis sa emergency department (ED) ang bahagi ng mga contact ng pasyente na hinawakan ng digital triage o virtual care tool na malamang sana ay nauwi sa pagbisita sa ED kung wala ang interbensyong iyon, ngunit sa halip ay ligtas na napamahalaan sa pamamagitan ng mas mababang-acuity na pathway — payo sa self-care, appointment sa primary care, o naka-iskedyul na urgent care na pagbisita. Ito ay tiyak at mataas-ang-halagang subset ng katumpakan ng triage at pag-ruta (tingnan ang paksang iyon) na nakatuon nang buo sa naiwasang paggamit ng emergency department, ang resultang pinakadirektang nakaugnay sa parehong gastos sa pangangalagang pangkalusugan at pagpapagaan ng kapasidad ng ED.

## Bakit ito mahalaga

Ang mga emergency department ay kabilang sa pinakamahal na care setting kada encounter at madalas na ginagamit para sa mga problemang ligtas sanang mapamahalaan sa ibang lugar, kaya ang kakayahan ng digital triage tool na ligtas na i-redirect ang mga angkop na kaso palayo sa ED ay isa sa pinakamahalagang kakayahan nito sa komersyal at operasyonal na aspeto — at isa sa pinakamadaling ipaliwanag sa payer o health system na sumusuri sa return on investment ng tool. Ngunit may halaga lamang ang paglilihis kung ligtas ito: ang tool na agresibong naglilihis ng mga pasyente palayo sa ED sa halip na makaligtaan ang tunay na emergency ay nag-optimize sa maling panig ng trade-off, kaya laging iulat ang antas ng paglilihis sa ED kasabay ng sukatan ng kaligtasan na sumusubaybay sa mga nalampasan o naantalang presentasyon sa emergency ng mga nilihis na pasyente, at hindi iulat nang mag-isa bilang purong panalo sa kahusayan.

## Paano ito kinakalkula

```
Antas ng paglilihis sa ED = mga contact ng pasyenteng ligtas na na-redirect palayo sa ED
                             patungo sa angkop na mas mababang-acuity na pathway /
                             kabuuang contact ng pasyenteng natasang posibleng
                             papunta sa ED × 100

Ang "ligtas na na-redirect" ay nangangailangan ng kumpirmasyon, sa pamamagitan
ng follow-up o naka-link na data ng health record, na ang kondisyon ng
pasyente ay hindi pala nangailangan ng emergency na pangangalaga sa loob ng
tinukoy na follow-up window (hal. 72 oras) — ang desisyon sa paglilihis ay
hindi napapatunayang ligtas dahil lamang hindi agad pumunta sa ED ang pasyente
pagkatapos.

Iulat kasabay ng:
  Antas ng nalampasang emergency = mga nilihis na pasyenteng nangailangan ng
                                    emergency na pangangalaga sa loob ng
                                    follow-up window / kabuuang nilihis na
                                    pasyente × 100
```

## Halimbawang kalkulasyon

Ang isang digital triage service ay tumatasa ng 3,000 contact ng pasyente sa isang buwan na hinuhusgahan ng klinikal na algorithm nito bilang posibleng papunta sa ED kung walang interbensyon. Sa mga ito, 1,800 ang na-redirect sa mas mababang-acuity na pathway (antas ng paglilihis na 60%). Ang pag-follow-up sa nilihis na cohort sa loob ng 72 oras gamit ang naka-link na data ng health record ay nagpapakitang 45 sa 1,800 nilihis na pasyente ang sumunod na nagpunta sa ED sa loob ng window na iyon (antas ng nalampasang emergency na 45 / 1,800 × 100 = 2.5%). Ang pag-uulat ng 60% na paglilihis nang walang 2.5% na antas ng nalampasang emergency ay magpapakita lamang ng kalahati ng trade-off ng kaligtasan at kahusayan na aktuwal na tumutukoy kung angkop ang pagkaka-calibrate ng gawi ng paglilihis ng tool.

## Mga pinagmumulan ng data at mga babala

Ang pagkumpirma na ang nilihis na pasyente ay hindi sumunod na nangailangan ng emergency na pangangalaga ay nakasalalay sa naka-link na data — sariling mga talaan ng ED ng parehong health system, regional health information exchange, o structured na follow-up na tawag o survey sa pasyente — at ang programa ng paglilihis na gumagana nang walang alinman sa mga pinagmumulang ito ay hindi aktuwal na makapagva-validate ng sariling kaligtasan, kundi ipagpalagay lamang ito batay sa kawalan ng reklamo. Ang angkop na antas ng paglilihis at katanggap-tanggap na antas ng nalampasang emergency ay mga desisyon sa klinikal na patakaran, hindi purong estadistikal, at dapat itakda nang sinasadya ng klinikal na pamunuan sa halip na hayaang lumitaw bilang side effect ng anumang hangganang default na ginagamit ng triage algorithm. Dapat iulat ang antas ng paglilihis ayon sa kategorya ng presentadong sintomas o reklamo, dahil napakalaki ng pagkakaiba ng angkop na antas ng paglilihis ayon sa kondisyon (ang maliit na hiwa laban sa pananakit ng dibdib ay nangangailangan ng ganap na magkaibang hangganan ng paglilihis).

## Mga patibong

- **Pag-uulat ng antas ng paglilihis nang walang naka-link na sukatan ng kaligtasan ng nalampasang emergency**: ang mataas na antas ng paglilihis na nakamit sa pamamagitan ng under-triage ng tunay na emergency ay hindi tagumpay; dapat laging iulat nang magkasama ang dalawang sukatan.
- **Pagpapalagay na ligtas ang paglilihis kung walang pagbisita sa ED**: maaaring magpunta ang pasyente sa ED ng ibang, hindi naka-link na health system, o maaaring magkaroon ng tunay na nakapipinsalang resulta nang hindi kailanman nagpapakita sa anumang ED; i-validate ang kaligtasan sa pamamagitan ng naka-link na data o structured na follow-up, hindi lamang ang kawalan ng pagbisita sa ED ng parehong sistema.
- **Pagtatakda ng hangganan ng paglilihis para lamang i-maximize ang antas ng paglilihis**: ang algorithm o patakarang naka-tune upang i-maximize ang paglilihis nang walang katugmang limitasyon sa kaligtasan ay ipagpapalit ang kaligtasan ng pasyente sa mas magandang tingnang numero ng kahusayan.
- **Paghahalo ng antas ng paglilihis sa lahat ng uri ng reklamo**: napakalaki ng pagkakaiba ng angkop na antas ng paglilihis ayon sa presentadong reklamo; hindi maipapakita ng iisang pinaghalong antas kung ligtas at epektibo ang pagganap ng tool para sa mga partikular na kondisyong pinakamahalaga sa klinikal.

## Mga sanggunian

- Agency for Healthcare Research and Quality (AHRQ), pananaliksik sa paggamit ng emergency department at angkop na pag-redirect ng care setting
- NHS England, gabay sa NHS 111 at mga pamantayan ng kaligtasan at bisa ng digital urgent care triage
- Peer-reviewed na literatura tungkol sa mga resulta ng ED diversion sa digital triage at virtual care, halimbawa ang mga pag-aaral na nailathala sa Annals of Emergency Medicine at npj Digital Medicine

Tingnan din: [katumpakan ng triage at pag-ruta](../katumpakan-ng-triage-at-pag-ruta/), ang mas malawak na sukatan ng katumpakan na ang sukatang ito ay isang tiyak at kritikal-sa-kaligtasan na subset.
