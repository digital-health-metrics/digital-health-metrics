# Antas ng mga Pagbisita sa Telehealth

Ang antas ng mga pagbisita sa telehealth ay ang bahagi ng kabuuang encounter ng isang serbisyo na isinasagawa nang malayuan, sa pamamagitan ng video o telepono, sa halip na personal. Ito ay sukatan ng halo ng channel ng paghahatid, hindi sukatan ng dami ng aktibidad: ipinapakita nito kung paano inihahatid ang pangangalaga, na mahalaga para sa capacity planning, access, at klinikal na pagiging angkop, nang hiwalay sa kung gaano karaming pangangalaga ang inihahatid sa kabuuan.

## Bakit ito mahalaga

Binago ng bahagi ng pangangalagang inihahatid nang malayuan ang operating model ng maraming serbisyo matapos ang mabilis na pagpapalawak ng mga virtual na konsultasyon noong pandemya ng COVID-19, at kailangan ng mga organisasyon ng matatag na paraan upang masubaybayan kung napapanatili ba ang pagbabagong iyon, bumabalik ba ito sa mga pamantayan bago ang pandemya, o aktibong pinapatnubayan ng patakaran. Ang telehealth ay hindi pare-parehong kapalit ng personal na pagbisita: nag-iiba ang pagiging angkop ayon sa espesyalidad, ayon sa uri ng konsultasyon (ibang-iba ang pagsusuri ng gamot sa pisikal na eksaminasyon), at ayon sa kagustuhan ng pasyente, kaya ang "tamang" antas ay isang klinikal at operasyonal na pagpapasya, hindi isang target na dapat paramihin. Ginagamit din ng mga tagapondo at regulator ang antas na ito, kasama ng mga sukatan ng resulta at kaligtasan, upang magpasya sa patakaran sa reimbursement at tiyaking hindi lamang basta inililipat ang malayuang pangangalaga sa mga kasong dapat personal na makita.

## Paano ito kinakalkula

```
Antas ng pagbisita sa telehealth = mga telehealth encounter / (mga telehealth encounter + mga personal na encounter) × 100

Iulat nang hiwalay ayon sa modality kung maaari:
  Antas ng video     = mga video encounter / kabuuang encounter × 100
  Antas ng telepono  = mga encounter sa telepono lamang / kabuuang encounter × 100

Ang denominator ay dapat magbilang lamang ng mga nakumpletong encounter (tingnan ang
mga patibong), para sa takdang serbisyo, espesyalidad, at yugto ng panahon.
```

## Halimbawang kalkulasyon

Isang community mental health service ang nagtala ng 4,000 nakumpletong outpatient contact sa isang quarter: 1,200 personal, 1,600 sa video, at 1,200 sa telepono. Ang antas ng pagbisita sa telehealth ay (1,600 + 1,200) / 4,000 × 100 = 70%, na may antas ng video na 40% at antas ng telepono lamang na 30%. Kung ang pinagsamang 70% lamang ang iuulat, matatakpan nito na malaking bahagi ng "telehealth" dito ay audio-only, na karaniwang may ibang klinikal na profile ng panganib at karanasan ng pasyente kaysa sa video.

## Mga pinagmumulan ng data at mga babala

Karaniwang naitatala ang uri ng encounter bilang structured field sa electronic health record (uri o lokasyon ng pagbisita) o hinuhulaan mula sa mga billing code, gaya ng place-of-service code o telehealth modifier sa isang claim. Malaki ang pagkakaiba ng gawi sa pag-code sa pagitan ng mga organisasyon at maging sa pagitan ng mga clinician sa iisang organisasyon, kaya dapat munang tiyakin sa paghahambing ng antas sa pagitan ng mga site na pareho ang pag-code ng "telehealth" sa bawat isa. Ang pagbisitang nagsimula sa video ngunit napunta sa telepono dahil sa teknikal na problema ay dapat i-code nang pare-pareho (karaniwan ay bilang modality na nagdala ng karamihan ng klinikal na nilalaman), at dapat idokumento ang tuntuning iyon sa halip na iwan sa pagpapasya ng indibidwal.

## Mga patibong

- **Pagbilang ng mga tinangkang pagbisita sa halip na mga nakumpleto**: ang telehealth appointment na hindi nakakonekta at muling ibinook ay hindi dapat magpalobo sa denominator ng telehealth nang dalawang beses.
- **Pagturing sa video at telepono bilang magkapalit**: magkaiba ang kanilang klinikal at equity na implikasyon (hindi nagbibigay ang telepono ng biswal na pagtatasa ngunit mas abot-kamay ito ng mga pasyenteng walang smartphone, maaasahang data, o pribadong espasyo para sa video); laging iulat nang hiwalay kung maaari.
- **Pagwawalang-bahala sa ugnayan sa hindi pagdalo**: kadalasang nag-iiba ang gawi sa hindi pagdalo ayon sa modality; tingnan ang [antas ng hindi pagdalo sa appointment](../antas-ng-hindi-pagdalo-sa-appointment/) bago magbigay ng konklusyon tungkol sa "pinahusay na access" mula lamang sa tumataas na antas ng telehealth.
- **Pagturing na likas na mabuti ang mataas na antas**: para sa ilang kondisyon at uri ng konsultasyon, mababa ang angkop na antas ng telehealth dahil sa klinikal na disenyo, hindi dahil sa kakulangan ng digital maturity.

## Mga sanggunian

- Centers for Medicare & Medicaid Services (CMS), data sa paggamit ng Medicare telehealth at mga publikasyon sa patakaran
- NHS England, mga estadistika sa aktibidad ng outpatient at community services, kabilang ang mga breakdown ng virtual/malayuang pagdalo
- Peer-reviewed na literatura tungkol sa mga trend sa paggamit ng telehealth at mga resultang partikular sa modality
