# Ratio ng Stickiness ng DAU/MAU

Inihahambing ng ratio ng stickiness ng DAU/MAU ang mga pang-araw-araw na aktibong user (DAU) sa mga buwanang aktibong user (MAU) — ang parehong pinagbabatayang sukatan ay ginagamit para sa mga lingguhang aktibong user (WAU) laban sa MAU — upang ipahayag kung anong bahagi ng mas malawak na user base ng isang produkto ang gumagamit nito sa alinmang partikular na araw. Ito ang karaniwang sukatan sa product analytics ng tindi ng pakikilahok, naiiba sa kung napapanatili ba ang isang user (tingnan ang antas ng pananatili ng mga user) o kung gaano kapare-pareho ang pakikilahok ng isang partikular na naka-enrol na pasyente sa paglipas ng panahon (tingnan ang antas ng pagkakapare-pareho ng pakikilahok ng pasyente): inilalarawan ng stickiness ang ritmo ng paggamit sa antas ng populasyon, hindi ang padron ng alinmang indibidwal.

## Bakit ito mahalaga

Ang dalawang digital health product ay maaaring mag-ulat ng magkaparehong bilang ng buwanang aktibong user ngunit magkaiba ang pinagbabatayang tindi ng pakikilahok: ang isa ay kung saan karamihan sa mga user ay nagbubukas ng app halos araw-araw, at ang isa naman ay kung saan karamihan ay nagbubukas nito nang minsan sa isang buwan bago pa ito ituring na hindi aktibo. Natatangi ang ratio ng stickiness ng DAU/MAU sa pagkakaiba ng dalawang ito gamit ang isang simple at kilalang benchmark na numerong masusubaybayan ng mga product at clinical team sa paglipas ng panahon at maihahambing sa mga kilalang hanay ng industriya — ang ratio na nasa 20% ay karaniwang binabanggit na makatwirang benchmark para sa maraming consumer app, habang ang mga produktong pang-araw-araw na gawi (isang food o symptom diary na inaasahang gagamitin ng pasyente araw-araw) ay dapat sukatin laban sa mas mataas na pamantayan. Dahil sensitibo ang stickiness sa kung paano binibigyang-kahulugan ang "aktibo", pinakamakabuluhan ito bilang trend ng isang produkto sa paglipas ng panahon, at bilang paghahambing sa mga produktong ginawa para sa katulad na padron ng paggamit, hindi bilang ganap na benchmark sa lahat ng industriya.

## Paano ito kinakalkula

```
Ratio ng stickiness ng DAU/MAU = karaniwang pang-araw-araw na aktibong user sa yugto /
                                  buwanang aktibong user sa parehong yugto × 100

Ang WAU/MAU ratio (lingguhan, parehong prinsipyo) ay mas banayad na
variant, mas angkop para sa mga produktong inaasahang gagamitin nang
ilang beses kada linggo sa halip na araw-araw.

Ang "aktibo" ay dapat bigyang-kahulugan nang tumpak at pare-pareho (hal. isang
nakumpletong kwalipikadong aksyon, hindi passive na pagbubukas ng app) sa
parehong numerator at denominator.
```

## Halimbawang kalkulasyon

Ang isang digital diabetes management app ay may 10,000 buwanang aktibong user sa isang buwan, na binibigyang-kahulugan bilang sinumang user na nakakumpleto ng kahit isang kwalipikadong aksyon (isang glucose log, isang meal log, o isang pag-tsek ng gamot) sa buwang iyon. Kapag inaverage ang bilang ng pang-araw-araw na aktibong user sa 30 araw ng buwang iyon, ang karaniwang DAU ay 2,200. Ang ratio ng stickiness ng DAU/MAU ay 2,200 / 10,000 × 100 = 22%, na nagpapahiwatig na sa karaniwang araw, humigit-kumulang 22% ng buwanang user base ng app ang gumagamit nito — makatwirang numero para sa chronic-condition tool na pang-araw-araw na gawi, bagaman nais ng product team na makitang tumataas ito sa paglipas ng panahon habang nagiging mas ugali na ng mga naka-enrol na pasyente ang ideyal na pag-uugali (araw-araw na pagtatala).

## Mga pinagmumulan ng data at mga babala

Ang DAU, WAU, at MAU ay pawang kinakalkula mula sa parehong pinagbabatayang event log, gamit ang iisang pare-parehong depinisyon ng "kwalipikadong aktibong" event sa bawat window; ang pagbabago sa depinisyong iyon sa pagitan ng kalkulasyon ng numerator at denominator (halimbawa, pagbibilang ng anumang pagbubukas ng app para sa DAU ngunit nakumpletong aksyon lamang para sa MAU) ay magbubunga ng pinilipit na ratio na hindi sumasalamin sa tunay na tindi ng pakikilahok. Lubos na nakadepende ang angkop na benchmark ng stickiness sa nilalayong padron ng paggamit ng produkto: ang tool na nilayong gamitin nang minsan sa isang linggo (lingguhang symptom check-in) ay magkakaroon at dapat magkaroon ng mas mababang DAU/MAU ratio kaysa sa tool na nilayong gamitin araw-araw (companion app ng continuous glucose monitor), kaya dapat laging bigyang-kahulugan ang stickiness batay sa sariling nilalayong dalas ng paggamit ng produkto, hindi sa iisang pangkalahatang target.

## Mga patibong

- **Paghahambing ng mga ratio ng stickiness sa mga produktong magkaiba ang nilalayong dalas ng paggamit**: ang tool na lingguhan ang gamit ay likas na magpapakita ng mas mababang DAU/MAU ratio kaysa sa pang-araw-araw na tool kahit pareho silang gumaganap nang eksakto ayon sa nilalayon para sa kani-kanilang gamit; mag-benchmark laban sa sariling nilalayong dalas ng produkto, hindi sa iisang pangkalahatang target.
- **Paggamit ng hindi pare-parehong depinisyon ng aktibidad sa numerator at denominator**: maaari itong magbunga ng ratio ng stickiness na hindi sumasalamin sa tunay na tindi ng pakikilahok at hindi makabuluhang maihahambing sa paglipas ng panahon o sa ibang produkto.
- **Pagturing na tiyak na positibo ang tumataas na ratio ng stickiness nang hindi sinusuri ang pangkalahatang trend ng MAU**: ang tumataas na ratio dahil sa lumiliit ngunit mas ugaling ubod ng user base habang bumababa ang kabuuang MAU ay lubhang naiibang — at mas nakababahalang — sitwasyon kaysa sa dulot ng tunay na pagtaas ng pang-araw-araw na pakikilahok sa matatag o lumalaking user base.
- **Pagwawalang-bahala sa epekto ng araw ng linggo at panahon sa DAU**: maaaring mag-iba nang malaki ang DAU ayon sa araw ng linggo (karaniwang araw laban sa katapusan ng linggo) o panahon para sa maraming health product; gamitin ang karaniwang DAU sa yugtong sumasaklaw sa buong natural na siklo sa halip na maikling window na maaaring mapilipit.

## Mga sanggunian

- Peer-reviewed at industry na literatura tungkol sa mga sukatan ng pakikilahok sa mobile at digital na produkto, mga malawakang ginagamit na benchmarking framework mula sa mga mobile analytics platform
- Digital Therapeutics Alliance, gabay sa pinakamahuhusay na kasanayan sa pagsukat ng pakikilahok para sa mga digital therapeutics
- Peer-reviewed na literatura tungkol sa pagsukat ng pakikilahok sa digital health, halimbawa ang mga pag-aaral na nailathala sa Journal of Medical Internet Research (JMIR mHealth and uHealth)

Tingnan din: [antas ng pananatili ng mga user](../antas-ng-pananatili-ng-mga-user/) at [antas ng pagkakapare-pareho ng pakikilahok ng pasyente](../antas-ng-pagkakapare-pareho-ng-pakikilahok-ng-pasyente/), ang dalawang kaugnay na sukatan ng pakikilahok na pinakamadalas mapagkamalang kapareho ng ratio na ito.
