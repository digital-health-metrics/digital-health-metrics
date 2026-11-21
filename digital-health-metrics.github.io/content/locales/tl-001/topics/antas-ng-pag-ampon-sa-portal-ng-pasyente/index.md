# Antas ng Pag-ampon sa Portal ng Pasyente

Ang antas ng pag-ampon sa portal ng pasyente ay sumusukat sa bahagi ng mga kwalipikadong pasyente na nagparehistro at aktibong gumagamit ng online na portal ng pasyente (halimbawa, NHS App, Patient Access, o portal na nakakabit sa EHR gaya ng MyChart) upang tingnan ang mga talaan, mag-book ng appointment, o magpadala ng mensahe sa kanilang care team. Ito ang pangunahing indikasyon ng digital na pakikilahok: ang pasyenteng hindi pa kailanman nag-activate ng account ay hindi makikinabang sa anumang digital na serbisyong nakabatay sa portal.

## Bakit ito mahalaga

Nagkakaroon lamang ng halaga ang isang portal kapag ginagamit na ito ng pasyente, kaya dapat subaybayan ng mga organisasyon ang pag-ampon bilang isang funnel at hindi bilang iisang numero: ang pagpaparehistro, ang activation (ang unang makabuluhang aksyon), at ang aktibong paggamit (paggamit sa loob ng nakaraang takdang panahon) ay tatlong magkakaibang antas na masyadong madalas na pinagsasama-sama. Madalas na napipilitan ang mga digital services team na mag-ulat ng iisang paborableng pangunahing numero, at kailangan ng disiplina upang igiit ang mas mahirap at mas tapat na paghahati. Ang mababa o hindi pantay na pag-ampon ay isa ring senyales ng pagkakapantay-pantay: ang mga pasyenteng mas matanda, may mas mababang digital literacy, hindi nagsasalita ng pangunahing wika, o walang maaasahang broadband o smartphone ay sistematikong mas malamang na hindi mabilang sa numerator, kaya ang tumataas na karaniwang antas ng pag-ampon ay maaaring magtakip sa lumalawak na agwat para sa mga pasyenteng madalas ay pinakanangangailangan ng ugnayan sa mga serbisyo.

## Paano ito kinakalkula

Iulat ang lahat ng tatlong yugto, hindi lamang ang pagpaparehistro, at laging ipahayag nang tahasan ang denominator:

```
Antas ng pagpaparehistro = mga pasyenteng may nalikhang account sa portal / kwalipikadong populasyon ng pasyente × 100
Antas ng activation      = mga pasyenteng nakakumpleto ng unang makabuluhang aksyon (tumingin ng resulta,
                            nag-book ng slot, nagpadala ng mensahe) / mga pasyenteng may account × 100
Antas ng aktibong paggamit = mga pasyenteng nag-log in nang kahit isang beses sa nakaraang 12 buwan /
                            kwalipikadong populasyon ng pasyente × 100
```

Karaniwang binibigyang-kahulugan ang kwalipikadong populasyon ng pasyente bilang mga pasyenteng may kahit isang encounter sa organisasyon sa loob ng takdang look-back period (karaniwang 24 na buwan), na nasa edad at katayuan ng pahintulot na pinapayagang magkaroon ng sarili nilang account.

## Halimbawang kalkulasyon

Isang primary care network ang naglilingkod sa 50,000 pasyenteng pasok sa depinisyon ng pagiging kwalipikado. Sa bilang na ito, 32,000 ang nagparehistro sa portal (antas ng pagpaparehistro: 64%). Sa 32,000 na nagparehistro, 27,000 ang nakakumpleto ng kahit isang makabuluhang aksyon gaya ng pagtingin sa resulta ng pagsusuri (antas ng activation: 84% ng mga nagparehistro). Sa nakalipas na 12 buwan, 21,000 sa orihinal na 50,000 kwalipikadong pasyente ang nag-log in nang kahit isang beses (antas ng aktibong paggamit: 42%). Kung ang 64% na antas ng pagpaparehistro lamang ang iuulat, lubos nitong mapapalaki ang tunay na pakikilahok; ang 42% na antas ng aktibong paggamit ang dapat gumabay sa mga desisyon sa paglalaan ng mga mapagkukunan para sa programa ng portal.

## Mga pinagmumulan ng data at mga babala

Karaniwang nagmumula ang analytics ng portal sa mismong vendor platform (mga login event, paggamit ng feature) o sa audit log ng pinagbabatayang electronic health record, at dapat maging mapagduda ang mga organisasyon sa mga dashboard ng vendor na bilang lamang ng pagpaparehistro ang ipinapakita. Dapat i-tag at iulat nang hiwalay ang proxy access (magulang o tagapag-alaga na namamahala ng account para sa pasyente), dahil binabago nito kung sino talaga ang "user". Napakahalaga ng pagpili ng denominator: ang pagbilang laban sa kabuuang listahan ng mga rehistradong pasyente sa halip na isang tunay na kwalipikado at makokontak na populasyon ay laging magpapababa sa tunay na pag-ampon, habang ang pagbilang laban lamang sa mga pasyenteng aktibong inimbitahan ay laging magpapalaki rito, kaya dapat itakda at ilathala ang depinisyon ng pagiging kwalipikado kasabay ng bawat iniulat na antas.

## Mga patibong

- **Pagbilang ng pagpaparehistro bilang pag-ampon**: ang account na nalikha ngunit hindi kailanman ginamit ay halos walang halaga; iulat ang activation at aktibong paggamit kasabay ng pagpaparehistro, hindi bilang kapalit nito.
- **Pagwawalang-bahala sa digital na pagkakahiwalay**: maaaring tumaas ang pinagsamang antas ng pag-ampon habang lumalawak ang agwat sa pagitan ng mga grupong pinakamarami at pinakakaunti ang digital na pagsasama; laging hatiin ayon sa edad, antas ng kahirapan, wika, at kapansanan kung pinahihintulutan ng data governance.
- **Paghahambing ng mga organisasyong magkaiba ang depinisyon ng pagiging kwalipikado**: ang programa ng portal na nag-iimbita lamang ng mga pasyenteng may naitalang email address ay mag-uulat ng mas mataas na antas kaysa sa sumusukat laban sa buong rehistradong listahan, nang walang tunay na pagkakaiba sa pagganap.
- **Pagturing sa isang beses na pag-log in bilang tuloy-tuloy na pakikilahok**: karaniwan ang 12-buwang look-back, ngunit ang mas maikling panahon (halimbawa, 90 araw) ay nagbibigay ng mas maagang babala sa humihinang paggamit.

## Mga sanggunian

- NHS England, mga estadistika sa paggamit at pagpaparehistro sa NHS App (mga publikasyon sa nhs.uk / digital.nhs.uk)
- ONC / HealthIT.gov, mga sukatan ng Promoting Interoperability Program, kabilang ang mga sukatan ng pag-access ng pasyente na View, Download, Transmit (VDT)
- Peer-reviewed na literatura tungkol sa pag-ampon ng portal ng pasyente at mga hindi pagkakapantay-pantay sa digital health, halimbawa ang mga pag-aaral na nailathala sa Journal of the American Medical Informatics Association (JAMIA)

Tingnan din: [antas ng hindi pagdalo sa appointment](../antas-ng-hindi-pagdalo-sa-appointment/), na direktang naiimpluwensyahan ng self-scheduling at mga paalala sa portal.
