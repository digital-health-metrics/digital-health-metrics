# Antas ng Pagpapatatag ng Biometric

Ang antas ng pagpapatatag ng biometric ay ang bahagi ng mga naka-enrol na pasyente na nakakamit at nagpapanatili ng klinikal na tinukoy na saklaw ng target para sa isang biometric na sukat — kadalasan ang presyon ng dugo na mas mababa sa hangganan gaya ng 130/80 mmHg — gamit ang konektadong monitoring device, sa loob ng tuloy-tuloy na panahon sa halip na sa isang punto lamang ng oras. Naiiba ito sa antas ng pagbuti ng biometric (tingnan ang paksang iyon): sinusukat ng pagbuti ang laki ng pagbabago mula sa baseline, habang sinusukat ng pagpapatatag kung maaasahang napapanatili ang pasyente sa ligtas na saklaw kapag nagsimula na ang paggamot o monitoring, na siyang resultang pinakamahalaga para sa mga pasyenteng malapit na sa target o nasa paggamot na.

## Bakit ito mahalaga

Para sa malaking bahagi ng mga pasyente sa mga programa para sa malalang sakit — lalo na ang hypertension, kung saan mahusay na naitatag ang mga target ng presyon ng dugo sa guideline at direktang nakaugnay sa panganib sa puso't sirkulasyon — ang klinikal na layunin ay hindi isang beses na pagbuti kundi tuloy-tuloy na kontrol, at ang pasyenteng paulit-ulit na lumalabas-pumapasok sa saklaw ng target ay may malinaw na ibang panganib kaysa sa isang bumuti nang minsan at nanatili roon. Ginagawang posible ng mga konektadong device (cellular na blood pressure cuff, continuous glucose monitor) na sukatin ang pagpapatatag nang tuloy-tuloy sa halip na sa mga pagbisita lamang sa klinika, na nagpapakita ng mga pasyenteng mukhang kontrolado ang basa sa klinika ngunit hindi matatag ang basa sa bahay — padron na kilala bilang masked hypertension na hindi matutukoy ng pana-panahong personal na pagsukat lamang. Ang pag-uulat ng antas ng pagpapatatag sa halip na iisang snapshot ng "nasa target" ay pumipilit sa programa na harapin kung gaano kapare-pareho, hindi lamang kung gaano kadalas, nitong napapanatili ang mga pasyente sa saklaw.

## Paano ito kinakalkula

```
Antas ng pagpapatatag ng biometric = mga pasyenteng may ≥ 80% ng mga basa na nasa
                                      saklaw ng target sa panahon ng pagsukat /
                                      mga pasyenteng may pinakamababang bilang ng
                                      balidong basa sa panahong iyon × 100

Halimbawang mga hangganan:
  Presyon ng dugo — target < 130/80 mmHg (o ang naaangkop na hangganan sa
                    klinikal na guideline para sa risk profile ng pasyente)
  Glucose         — saklaw ng target ayon sa gabay sa continuous glucose
                    monitoring, iniulat bilang "time in range"

Dapat itakda ang pinakamababang hangganan ng dalas ng pagbasa (hal. hindi
bababa sa 3 basa kada linggo) bago isama ang pasyente sa denominator, upang
hindi magmukhang artipisyal na matatag ang mga bihirang magbasa.
```

## Halimbawang kalkulasyon

Ang isang hypertension remote-monitoring programme ay nag-enrol ng 600 pasyenteng may cellular na blood pressure cuff, na bawat isa ay inaasahang kukuha ng hindi bababa sa 3 basa kada linggo. Sa mga ito, 540 ang pasok sa pinakamababang hangganan ng dalas ng pagbasa sa 3-buwang panahon ng pagsukat at isinama sa denominator. Sa 540 na iyon, 350 ang may hindi bababa sa 80% ng kanilang mga basa na mas mababa sa 130/80 mmHg, na nagbibigay ng antas ng pagpapatatag ng biometric na 350 / 540 × 100 = 65%. Ang 60 pasyenteng hindi isinama dahil sa hindi sapat na basa ay iniulat nang hiwalay bilang agwat sa pagkakumpleto ng data, hindi isinama sa numerator o sa grupong "hindi napatatag", dahil ang tunay nilang katayuan ng kontrol ay hindi talaga alam sa halip na masama.

## Mga pinagmumulan ng data at mga babala

Nagmumula ang mga basa nang direkta sa sariling daloy ng data ng konektadong device, na mas obhetibo at mas madalas kaysa sa pagsukat sa klinika, ngunit ang mga pagkakamali sa pagkakalagay at teknik ng device (maling laki o posisyon ng blood pressure cuff) ay maaaring magpasok ng sistematikong bias na hindi kinakailangang mahuli ng iisang validation na basa sa klinika. Dapat sundin ng pagpili ng saklaw ng target ang kasalukuyang naaangkop na klinikal na guideline para sa partikular na risk profile at comorbidity ng pasyente sa halip na iisang pangkalahatang hangganan, dahil nag-iiba ang mga target sa guideline ayon sa edad ng pasyente, function ng bato, at panganib sa puso't sirkulasyon. Hindi dapat tahimik na ibilang bilang "matatag" bilang default ang pasyenteng bihirang magbasa; mas tapat ang pag-aalis sa kanila sa denominator na may malinaw na pag-uulat ng pag-aalis kaysa sa pagbibilang sa kanila bilang kontrolado o hindi kontrolado batay sa masyadong kaunting data.

## Mga patibong

- **Pagturing sa iisang basang nasa saklaw bilang pagpapatatag**: ang pagpapatatag ay tungkol sa tuloy-tuloy na kontrol sa loob ng tinukoy na panahon, hindi snapshot; laging hingin ang pinakamababang proporsyon ng mga basang nasa saklaw sa panahong iyon, hindi iisang kwalipikadong sukat.
- **Tahimik na pag-aalis sa mga bihirang magbasa nang hindi iniuulat**: ang mga pasyenteng bihirang kumuha ng basa ay hindi awtomatikong matatag o hindi matatag; alisin sila nang hayag sa denominator at iulat ang antas ng pag-aalis bilang hiwalay na sukatan ng pagkakumpleto ng data.
- **Pagwawalang-bahala sa calibration ng device at pagkakamali sa teknik**: ang hindi maayos na pagkakasuot ng cuff o hindi na-calibrate na device ay maaaring sistematikong magkiling ng mga basa sa isang direksyon, na hindi mahuhuli ng antas ng pagpapatatag na simpleng kinalkula mula sa hilaw na data ng device nang walang pana-panahong validation.
- **Paggamit ng iisang pangkalahatang saklaw ng target para sa lahat ng pasyente**: nag-iiba ang mga target sa klinikal na guideline ayon sa risk profile at comorbidity ng pasyente; ang paglalapat ng iisang blanket na hangganan sa klinikal na magkakaibang populasyon ay magkakamali sa pag-uuri sa ilang pasyente bilang napatatag o hindi napatatag kaugnay ng kanilang aktuwal na indibidwal na target.

## Mga sanggunian

- American Heart Association (AHA) / American College of Cardiology (ACC), mga target ng guideline sa presyon ng dugo at gabay sa home blood pressure monitoring
- International Diabetes Federation at American Diabetes Association (ADA), consensus guidance sa "time in range" ng continuous glucose monitoring
- Peer-reviewed na literatura tungkol sa remote biometric monitoring at tuloy-tuloy na kontrol ng kondisyon, halimbawa ang mga pag-aaral na nailathala sa npj Digital Medicine

Tingnan din: [antas ng pagbuti ng biometric](../antas-ng-pagbuti-ng-biometric/), ang kaugnay na sukatan ng laki ng pagbabago mula sa baseline, na naiiba sa tuloy-tuloy na kontrol kapag naabot na ang target.
