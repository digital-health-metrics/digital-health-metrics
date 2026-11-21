# Tingkat Retensi Pengguna

Tingkat retensi pengguna yaiku persentase pangguna sing aktif ing periode wiwitan sing tetep aktif ing periode sabanjure, lan kebalikane, tingkat churn (utawa dropout), yaiku persentase sing mandheg nggunakake produk babar pisan. Yen tingkat adopsi portal pasien (deleng topik kuwi) ngukur apa pasien tau ngaktifake produk kesehatan digital kanthi bermakna, retensi ngukur apa dheweke terus nggunakake — lan kanggo produk kesehatan digital gaya langganan utawa perawatan berkelanjutan apa wae, retensi biasane metrik tunggal sing paling raket gandheng karo dampak klinis lan kelestarian komersial.

## Kenapa penting

Produk kesehatan digital sing ora bisa njaga pangguna ora bisa menehi manfaat klinis sing lestari, sepira kuwat wae angka adopsi utawa aktivasi awale: piranti manajemen kondisi kronis sing dienggo rong minggu banjur ditinggalake ora mungkin ngowahi asil biometrik sing gumantung marang owah-owahan prilaku sasi-sasi. Retensi uga salah siji metrik sing paling gedhe akibat komersiale sing dilaporake perusahaan kesehatan digital marang investor lan pembayar, amarga kurva retensi (wangun penurunan saka wektu menyang wektu, dudu mung siji persentase retensi) nuduhake apa produk wis nemokake pola panggunaan sing lestari sejati utawa mung nangkep minat awal gerakan kebaruan sing surut kanthi bisa diprédhiksi. Kurva retensi sing mendatar sawise penurunan awal (pasien sing lolos sasi pisanan cenderung tetep) iku sinyal sing beda banget, lan luwih sehat banget, tinimbang sing terus mudhun kanthi mantep tanpa dasar.

## Carane ngetung

```
Tingkat retensi (periode N) = pangguna aktif ing periode N sing uga aktif
                               ing periode kohort wiwitan / pangguna ing
                               periode kohort wiwitan × 100

Tingkat churn = 1 − tingkat retensi (kanggo periode sing padha)

Laporake minangka kurva retensi kohort (retensi ing dina/minggu/sasi
1, 2, 3…), dudu siji angka ing titik wektu, amarga siji snapshot
nyampur pangguna sing lagi gabung (sing durung duwe kesempatan churn)
karo sing wis suwe.
```

## Conto petungan

Aplikasi kesehatan digital ndhaftar kohort 1.000 pangguna anyar ing Januari. Ing pungkasan sasi 1, 640 saka 1.000 asli isih aktif (retensi sasi-1 64%). Ing pungkasan sasi 3, 410 isih aktif (retensi sasi-3 41%). Ing sasi 6, 380 isih aktif (retensi sasi-6 38%). Wangun kurva iki — penurunan awal sing curam disusul mendatar antarane sasi 3 lan 6 — nuduhake yen produk njaga inti pangguna sing stabil sawise ngliwati alangan adopsi awal, sinyal sing beda sacara bermakna lan luwih nyengkuyung tinimbang yen penurunan saka sasi 3 nganti 6 terus kanthi tingkat sing padha karo sasi 1 nganti 3.

## Sumber data lan pangati-ati

Retensi diétung saka log kejadian login utawa aktivitas produk dhewe, nemtokake "aktif" kanthi konsisten (umpamane paling ora siji sesi mumpuni ing periode) ing saben kohort sing dibandhingake. Kohort kudu dibandhingake kanthi basis sing sepadan — definisi wiwitan "aktif" padha, dawa jendela pengamatan padha — amarga malah beda definisi cilik (sasi 30 dina versus 28 dina, utawa ambang "aktif" sing luwih ketat versus longgar) bisa ngowahi persentase retensi sing dilaporake pirang-pirang poin tanpa beda prilaku pangguna sing nyata. Efek musiman umum ing aplikasi kesehatan sing gandheng karo resolusi Taun Anyar utawa periode kesadaran kesehatan tartamtu, mula perbandhingan kohort taun-ke-taun biasane luwih informatif tinimbang mbandhingake kohort jejer saka wektu taun sing beda.

## Kesalahan umum

- **Nglaporake siji snapshot retensi tinimbang kurva**: angka "X% pangguna isih aktif" tanpa wangun penurunan saka wektu menyang wektu ora bisa mbedakake produk sing mendatar (sehat) saka sing terus mudhun (ora sehat).
- **Ngowahi definisi "aktif" ing antarane periode laporan**: nglonggarake definisi pangguna aktif (umpamane ngétung mbukak aplikasi pasif tinimbang tumindak sing rampung) bisa nggawe retensi katon saya apik nalika panggunaan sejatine ora owah babar pisan.
- **Ora nggatekake musiman kohort**: mbandhingake retensi kohort Januari (asring digedhekake dening pendaftaran resolusi Taun Anyar, sing nggawa kohort sing rata-rata kurang termotivasi) karo kohort sing dienggo ing wektu taun beda bisa ngasilake kesimpulan tren sing nyasarake.
- **Nggabungake kohort organik lan akuisisi berbayar**: pangguna sing dienggo liwat saluran beda asring nahan kanthi beda banget; nggabungake dadi siji angka retensi agregat bisa nutupi masalah retensi khusus saluran.

## Sumber

- Literatur peer-reviewed babagan keterlibatan lan atrisi aplikasi kesehatan digital, umpamane studi sing diterbitake ing Journal of Medical Internet Research (JMIR mHealth and uHealth)
- Digital Therapeutics Alliance, pandhuan praktik terbaik babagan pangukuran keterlibatan lan retensi kanggo terapi digital
- Laporan benchmarking industri babagan retensi aplikasi kesehatan seluler, saka platform analitik lan organisasi riset pasar kesehatan digital

Deleng uga: [tingkat konsistensi keterlibatan pasien](../tingkat-konsistensi-keterlibatan-pasien/), sing ngukur kualitas keterlibatan ing antarane pangguna sing dipertahanake, beda karo apa dheweke tetep kadhaptar babar pisan.
