# Katumpakan ng Triage at Pag-ruta

Ang katumpakan ng triage at pag-ruta ay ang bahagi ng mga encounter ng pasyente kung saan tama ang pag-ruta ng awtomatiko o AI-assisted na triage tool sa pasyente sa naaangkop na antas at setting ng pangangalaga — halimbawa self-care, primary care, urgent care, o emergency care — ayon sa paghuhusga laban sa klinikal na validated na reference standard. Ito ang sukatan ng kaligtasan at bisa para sa anumang digital front door, symptom checker, o AI triage system: nakasalalay ang buong value proposition ng tool sa pag-ruta ng mga pasyente nang tama, mabilis, at pare-pareho.

## Bakit ito mahalaga

Nagdudulot ng pinsala sa magkabilang direksyon ang hindi tumpak na triage tool: ang under-triage (pag-ruta ng pasyente sa mas mababang antas ng pangangalaga kaysa sa kailangan niya) ay maaaring magpaantala ng paggamot sa tunay na emergency, habang ang over-triage (pag-ruta ng pasyente sa mas mataas na antas ng pangangalaga kaysa sa kailangan niya) ay nag-aaksaya ng kakaunting kapasidad ng emergency at urgent care at nagpapataas ng gastos at pagkabalisa ng pasyente nang walang klinikal na benepisyo. Dahil magkalayo ang kahihinatnan ng dalawang uri ng pagkabigong ito, dapat laging iulat ang katumpakan ng triage at pag-ruta kasama ang direksyon ng mga pagkakamali, hindi bilang iisang pinagsamang numero ng katumpakan na nagtatago kung ligtas o mapanganib ang pagkakamali ng tool. Parami nang paraming humihingi ang mga regulator at health system na sumusuri ng AI triage tool para sa deployment ng ganitong stratified na pag-uulat ng katumpakan bilang kondisyon ng klinikal na pag-apruba, lalo na para sa mga tool na gumagana nang may anumang antas ng awtonomiya mula sa clinician.

## Paano ito kinakalkula

```
Katumpakan ng triage at pag-ruta = mga encounter na tama ang pag-ruta / kabuuang na-triage na encounter × 100

Iulat nang hiwalay ang under-triage at over-triage:
  Antas ng under-triage = mga encounter na na-ruta sa mas mababang antas ng
                           acuity kaysa sa reference standard / kabuuang
                           na-triage na encounter × 100
  Antas ng over-triage  = mga encounter na na-ruta sa mas mataas na antas ng
                           acuity kaysa sa reference standard / kabuuang
                           na-triage na encounter × 100

Ang reference standard ay karaniwang retrospective na pagsusuri ng clinician
sa parehong kaso, na hindi nakikita ang output ng tool kung maaari.
```

## Halimbawang kalkulasyon

Ang isang AI symptom-checker na tool ay nag-triage ng 5,000 encounter ng pasyente sa isang buwan. Natuklasan ng blinded na pagsusuri ng clinician sa random na sample na 500 sa mga encounter na ito na 430 ang na-ruta sa tamang antas ng acuity (katumpakan 86%), 45 ang na-under-triage (9%), at 25 ang na-over-triage (5%). Ang 9% na antas ng under-triage ang numerong pinakamadaliang nangangailangan ng imbestigasyon, dahil kumakatawan ito sa mga encounter kung saan maaaring naituro ang pasyente sa hindi gaanong apurahang pangangalaga kaysa sa aktuwal niyang kailangan; ang 5% na antas ng over-triage ay alalahanin sa kapasidad at gastos ngunit hindi direktang alalahanin sa kaligtasan.

## Mga pinagmumulan ng data at mga babala

Napakahalaga ng reference standard na pinagbabatayan ng pagsukat ng katumpakan ng triage: ang pagsusuri ng iisang clinician ay nagpapasok ng sariling pagkakaiba-iba ng paghuhusga ng clinician na iyon, kaya ang kapani-paniwalang numero ng katumpakan ay karaniwang nangangailangan ng maraming independiyenteng tagasuri na may naidokumentong inter-rater agreement, o paghahambing sa kasunod at kumpirmadong klinikal na resulta (kung anong pangangalaga ang aktuwal na kinailangan ng pasyente, na natukoy pagkatapos ng pangyayari). Mahalaga rin ang sampling: ang pagsusuri lamang sa maginhawang sample ng mga encounter, o sa mga minarkahan lamang bilang kakaiba, ay hindi magbubunga ng numerong maaaring gawing pangkalahatan sa kabuuang pagganap ng tool. Dapat iulat nang hiwalay ang mga numero ng katumpakan ayon sa kategorya ng presentadong sintomas o reklamo kung pinapayagan ng dami ng pinagbabatayang kaso, dahil bihirang pantay ang pagganap ng mga triage tool sa lahat ng kondisyon.

## Mga patibong

- **Pag-uulat ng iisang pinaghalong numero ng katumpakan**: ang pagsasama ng under-triage at over-triage sa iisang numero ay nagtatago kung ang mga pagkakamali ng tool ay nakakiling sa mas mapanganib na uri ng pagkabigo; laging iulat nang hiwalay ang mga ito.
- **Paggamit ng iisang tagasuring hindi blinded bilang reference standard**: maaari nitong tahimik na ikiling ang numero ng katumpakan patungo sa anumang gagawin mismo ng tagasuring iyon, sa halip na independiyenteng klinikal na pamantayan.
- **Pag-validate lamang sa retrospective at maginhawang data**: madalas na malaki ang pagkakaiba ng tunay na katumpakan ng pag-ruta ng tool sa live at malabong input ng pasyente mula sa katumpakan nito sa curated na validation set na binuo habang dine-develop.
- **Pagwawalang-bahala sa drift ng pagganap pagkatapos ng deployment**: maaaring humina sa paglipas ng panahon ang katumpakan ng AI triage model habang nagbabago ang mga populasyon ng pasyente, mga sintomas na ipinapakita, o pagkakaroon ng mga care pathway; dapat sukatin muli ang katumpakan nang paulit-ulit, hindi i-validate nang minsan at ipagpalagay na matatag.

## Mga sanggunian

- ONC / HealthIT.gov, gabay sa kaligtasan at quality assurance ng clinical decision support at mga AI-enabled na tool
- Peer-reviewed na literatura tungkol sa katumpakan ng symptom-checker at AI triage tool, halimbawa ang mga pag-aaral na nailathala sa JAMIA, npj Digital Medicine, at BMJ Health & Care Informatics
- NHS England, gabay sa klinikal na kaligtasan ng mga digital na triage at remote consultation tool (mga pamantayan ng clinical risk management na DCB0129/DCB0160)

Tingnan din: [oras ng pagproseso ng digital na referral](../oras-ng-pagproseso-ng-digital-na-referral/), ang sukatan ng proseso na pinakadirektang downstream ng desisyon sa triage.
