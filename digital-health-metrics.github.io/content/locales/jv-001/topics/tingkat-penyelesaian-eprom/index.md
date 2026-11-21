# Tingkat Penyelesaian ePROM

Tingkat penyelesaian ePROM ngukur persentase electronic Patient-Reported Outcome Measures (ePROM) sing dijadwalake — kuesioner baku lan wis divalidasi sing nangkep crita pasien dhewe babagan gejala, fungsi, utawa kualitas urip, sing diwenehake sacara digital, dudu ing kertas — sing sejatine rampung diisi. Iki metrik kualitas data uga metrik keterlibatan: nilai klinis lan riset program PROM gumantung babar pisan marang tingkat penyelesaian sing cukup dhuwur supaya respon sing dikumpulake representatif saka kabeh populasi sing kadhaptar, dudu mung subset sing paling melu utawa paling sithik gejala.

## Kenapa penting

Asil sing dilaporake pasien minangka pelengkap langsung, sing dijamin pasien, saka data sing dicathet klinisi utawa diukur piranti, nangkep dimensi kesehatan — nyeri, fungsi, kualitas urip — sing ora bisa ditangkep tinjauan bagan utawa pembacaan biometrik; digitalisasi pengumpulan PROM ana khusus kanggo nggawe data iki luwih murah lan luwih gampang dikumpulake ing skala gedhe tinimbang sing tau diidinake administrasi basis kertas. Nanging program PROM kanthi tingkat penyelesaian murah beresiko bias khusus lan serius: pasien sing krasa luwih elek asring kurang mungkin ngrampungake kuesioner sing dawa, mula tingkat penyelesaian sing mudhun bisa dadi tandha peringatan awal kesehatan populasi sing saya elek, lan tingkat penyelesaian sakabehe sing murah bisa nggawe respon sing dikumpulake katon luwih apik tinimbang pengalaman populasi sejati mung amarga pasien sing paling akeh gejala kurang diwakili ing apa sing rampung. Iki sebabe tingkat penyelesaian kudu tansah dilaporake bareng skor PROM dhewe, dudu dianggep minangka rincian operasional sekunder.

## Carane ngetung

```
Tingkat penyelesaian ePROM = ePROM sing rampung kabeh / ePROM sing
                              dikirim utawa dijadwalake × 100

Laporake kapisah kanggo:
  Tingkat penyelesaian awal       (kuesioner pisanan ing urutan
                                    pemantauan)
  Tingkat penyelesaian longitudinal (kuesioner sabanjure ing urutan
                                    pemantauan sing lagi mlaku, sing
                                    biasane mudhun saka wektu menyang
                                    wektu lan kudu dilacak minangka
                                    tren, dudu siji angka)

Kuesioner "rampung sebagian" kudu ditetepake lan dilaporake kapisah
saka "rampung kabeh" lan "ora diwiwiti".
```

## Conto petungan

Klinik onkologi ngirim ePROM beban gejala sing wis divalidasi marang 400 pasien sadurunge saben kunjungan tindak lanjut sasi. Ing sasi pisanan, 340 pasien ngrampungake kuesioner kanthi lengkap (tingkat penyelesaian 85%), 30 ngrampungake sebagian, lan 30 ora miwiti. Ing sasi kaping enem urutan pemantauan sing padha, respon lengkap mudhun dadi 260 saka kohort 400 pasien sing padha (65%), penurunan longitudinal bermakna sing bakal kaliwat babar pisan yen mung angka 85% sasi pisanan dilaporake minangka metrik sakabehe sing statis. Nyelidiki pasien endi sing mandheg (miturut keparahan gejala, tahap penyakit, utawa umur) bisa mbukak apa penurunan nggambarake kesel survei, gejala sing saya elek nggawe kuesioner luwih angel diisi, utawa alangan akses teknis.

## Sumber data lan pangati-ati

Data penyelesaian asale saka log pangiriman lan respon platform ePROM dhewe, sing bisa mbedakake kahanan "ora diwiwiti", "rampung sebagian", lan "rampung kabeh" — pambeda sing kudu tansah dijaga lan dilaporake tinimbang diringkes dadi angka biner rampung/ora-rampung, amarga penyelesaian sebagian asring nuduhake titik tartamtu ing kuesioner ing ngendi pasien kangelan utawa mandheg melu. Tingkat penyelesaian kudu ditafsirake bareng carane kuesioner diwenehake (link pesen teks, notifikasi aplikasi, utawa cara pangiriman sing mbutuhake login portal), amarga gesekan pangiriman dhewe mengaruhi penyelesaian ora gumantung isi kuesioner utawa kondisi pasien sing ndasari. Instrumen sing divalidasi (dudu set pitakon ad hoc) kudu tansah digunakake kanggo PROM dhewe, amarga tingkat penyelesaian kanggo instrumen sing durung divalidasi ora ngandhani apa-apa sing dipercaya babagan kegunaan klinis data sing diasilake sanajan penyelesaian dhuwur.

## Kesalahan umum

- **Nganggep tingkat penyelesaian sing mudhun mung minangka masalah pangiriman**: penurunan longitudinal ing penyelesaian bisa nggambarake gejala pasien sing sejatine saya elek (pasien kakehan lara kanggo ngrampungake survei) tinimbang kesel survei utawa masalah teknis, lan pambeda iki penting banget kanggo interpretasi klinis.
- **Nggabungake penyelesaian sebagian lan lengkap dadi siji kategori**: kuesioner sing rampung sebagian minangka kualitas data sing beda sacara bermakna saka sing rampung lengkap; laporake kapisah, lan selidiki ing endi ing alur kuesioner pasien cenderung ninggalake.
- **Nglaporake tingkat penyelesaian tanpa nglaporake risiko bias respon**: tingkat penyelesaian moderat kudu nuntun penyelidikan apa responden beda sacara sistematis (ing keparahan gejala, umur, literasi digital) saka non-responden, amarga skor PROM sing diétung mung saka responden bisa nyasarake gambaran kabeh populasi.
- **Nggunakake kuesioner sing durung divalidasi utawa gawe dhewe**: tingkat penyelesaian ora ana gunane minangka sinyal kualitas data yen instrumen sing diisi dhewe durung divalidasi sacara klinis kanggo kondisi lan populasi sing diukur.

## Sumber

- International Consortium for Health Outcomes Measurement (ICHOM), pangembangan set baku lan pandhuan implementasi PROM
- U.S. Food and Drug Administration (FDA), pandhuan babagan ukuran asil sing dilaporake pasien ing uji klinis lan pengajuan regulasi
- Literatur peer-reviewed babagan implementasi PROM elektronik lan tingkat penyelesaian, umpamane studi sing diterbitake ing Quality of Life Research lan Journal of Medical Internet Research (JMIR)

Deleng uga: [Net Promoter Score pasien](../skor-net-promoter-pasien/), metrik sing dilaporake pasien sing gandheng nanging beda sing ngukur kepuasan, dudu asil klinis.
