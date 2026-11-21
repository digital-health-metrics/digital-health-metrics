# Oras ng Pagproseso ng Digital na Referral

Ang oras ng pagproseso ng digital na referral ay ang lumipas na oras mula sa pagsusumite ng electronic referral ng referring clinician hanggang sa ma-triage ito at tanggapin, tanggihan, o i-book ng tumatanggap na serbisyo. Ito ay sukatan ng proseso (daloy), naiiba sa kabuuang oras ng paghihintay ng pasyente, at isa ito sa pinakamalinaw na lugar kung saan maipapakitang ang pagbabago sa digital na sistema (structured na e-referral, image-based na triage, standardized na referral form) ay nakapagpapagalaw ng operasyonal na numero at hindi lamang ng marka ng kasiyahan.

## Bakit ito mahalaga

Ang mabagal o labis na nag-iiba-ibang hakbang ng triage ay nagdaragdag ng pagkaantala bago pa man sumali ang pasyente sa klinikal na waiting list, at dahil nangyayari ang pagkaantalang iyon bago magsimula ang anumang klinikal na pangangalaga, ito ay purong aksaya sa proseso na mahusay na maaalis ng digital na kagamitan. Ang mga referral system na pumipilit ng siklo ng "pagbabalik sa nag-refer" dahil sa nawawalang impormasyon ay lumilikha ng mga loop ng pag-uulit ng trabaho na madaling makaligtaan kung ang oras ng pagproseso ay sinusukat lamang sa mga referral na dumaan nang maayos sa unang pagkakataon. Kapag nagpakilala ang isang serbisyo ng structured na digital na referral form, mandatoryong field, o image-based na triage (halimbawa sa teledermatology), karaniwang ang oras ng pagproseso ang pinakakumbinsing sukatan upang ipakita ang benepisyo, dahil masusukat ito bago at pagkatapos ng pagbabago gamit ang parehong instrumentasyon.

## Paano ito kinakalkula

```
Oras ng pagproseso = timestamp(desisyon sa triage) − timestamp(pagsusumite ng referral)

Iulat ang median at mataas na percentile (karaniwang ika-90), hindi lamang
ang mean, dahil malaki ang pagkiling sa kanan ng distribusyon dahil sa mga
naibalik o kumplikadong referral.

Isaalang-alang ang mga oras ng sub-stage kung kinukuha ito ng sistema:
  Pagsusumite → natanggap ng serbisyo
  Natanggap → desisyon sa triage
  Desisyon sa triage → naka-book na appointment (kung naaangkop)
```

## Halimbawang kalkulasyon

Ang audit trail ng isang e-referral system ay nagpapakita ng median na oras mula pagsusumite hanggang desisyon sa triage na 1.8 araw sa lahat ng espesyalidad, na may oras sa ika-90 percentile na 6 na araw, na pangunahing dulot ng mga referral na ibinabalik sa nag-refer dahil sa nawawalang klinikal na impormasyon. Ang isang teledermatology pathway na gumagamit ng image-based na triage sa parehong platform ay nakakamit ng median na oras ng pagproseso na 4 na oras at ika-90 percentile na 1 araw, dahil ang larawan at structured na kasaysayan ay halos laging sapat para sa desisyon sa triage nang hindi na kailangan ng karagdagang korespondensiya.

## Mga pinagmumulan ng data at mga babala

Ang sariling audit trail ng e-referral o referral management system ang pangunahing pinagmumulan, gamit ang mga timestamp ng pagsusumite at desisyon; dapat tiyakin ng mga organisasyon kung humihinto ba ang "orasan" habang ibinabalik ang referral para sa karagdagang impormasyon o tuloy-tuloy itong tumatakbo, dahil magkaibang-magkaiba ang numerong ibinubunga ng dalawang depinisyon para sa iisang pinagbabatayang proseso. Dapat iulat nang pare-pareho ang oras ng pagproseso sa calendar time o business-hours time, dahil kung hindi, maaaring pilipitin ng mga epekto ng katapusan ng linggo at pista opisyal ang paghahambing ng mga serbisyong magkaiba ang padron ng pagtatrabaho.

## Mga patibong

- **Pagsukat lamang ng "malinis" na mga referral**: ang pag-alis ng mga tinanggihan o naibalik na referral sa kalkulasyon ay nagtatago ng pasanin ng pag-uulit ng trabaho na madalas ay partikular na nilalayong bawasan ng digital na kagamitan.
- **Pag-uulat ng mean sa halip na median at mga percentile**: hihilahin ng kaunting bilang ng matatagal at naibalik na referral ang mean nang malayo sa aktuwal na karanasan ng karaniwang pasyente.
- **Pagkalito sa oras ng pagproseso at kabuuang oras ng paghihintay**: sakop lamang ng oras ng pagproseso ang hakbang ng triage; kasama rin sa kabuuang karanasan ng pasyente ang downstream na klinikal na waiting list, na hiwalay na sukatan at pinamamahalaan ng hiwalay na limitasyon sa kapasidad.
- **Hindi paghihiwalay ng mga sub-stage**: ang serbisyong sumusukat lamang ng end-to-end na oras ay hindi matutukoy kung ang mabagal na numero ay dulot ng mga nag-refer na nagsusumite ng hindi kumpletong impormasyon, ng kapasidad sa triage ng tumatanggap na serbisyo, o ng pareho.

## Mga sanggunian

- NHS England, mga estadistika at service specification ng e-Referral Service (e-RS)
- Peer-reviewed na literatura tungkol sa mga electronic referral management system at digital na triage pathway, kabilang ang teledermatology
- ONC / HealthIT.gov, gabay sa interoperability at koordinasyon ng referral
