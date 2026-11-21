# Nisbah Kelekatan DAU/MAU

Nisbah kelekatan DAU/MAU membandingkan pengguna aktif harian (DAU) dengan pengguna aktif bulanan (MAU), dengan ukuran asas yang sama digunakan bagi pengguna aktif mingguan (WAU) berbanding MAU, untuk menyatakan berapa bahagian pangkalan pengguna produk yang lebih luas melibatkan diri dengannya pada sesuatu hari. Ia ialah ukuran analitik produk piawai bagi keamatan penglibatan, berbeza daripada sama ada seseorang pengguna dikekalkan langsung (lihat kadar pengekalan pengguna) atau seberapa konsisten seorang pesakit berdaftar tertentu melibatkan diri dari semasa ke semasa (lihat kadar konsistensi penglibatan pesakit): kelekatan menggambarkan irama penggunaan pada peringkat populasi, bukan corak mana-mana individu.

## Mengapa ia penting

Dua produk kesihatan digital boleh melaporkan bilangan pengguna aktif bulanan yang sama tetapi keamatan penglibatan asas yang sangat berbeza: satu yang kebanyakan penggunanya membuka aplikasi hampir setiap hari, dan satu lagi yang kebanyakan penggunanya membukanya sekali sebulan tepat sebelum ia dikira tidak aktif. Nisbah kelekatan DAU/MAU membezakan dua keadaan yang sangat berbeza ini dengan satu angka penanda aras yang ringkas dan difahami baik yang boleh dijejaki dari semasa ke semasa oleh pasukan produk dan klinikal serta dibandingkan dengan julat industri yang diketahui. Nisbah sekitar 20% ialah penanda aras munasabah yang sering disebut bagi banyak aplikasi pengguna, manakala produk tabiat harian (diari makanan atau gejala yang dijangka digunakan pesakit setiap hari) harus dinilai berbanding tahap yang jauh lebih tinggi. Oleh sebab kelekatan sensitif terhadap cara "aktif" ditakrifkan, ia paling berguna sebagai arah aliran bagi satu produk dari semasa ke semasa, dan sebagai perbandingan dengan produk yang dibina untuk corak penggunaan yang serupa, dan bukan sebagai penanda aras mutlak merentas industri.

## Cara pengiraannya

```
Nisbah kelekatan DAU/MAU = purata pengguna aktif harian dalam tempoh /
                            pengguna aktif bulanan dalam tempoh yang
                            sama × 100

Nisbah WAU/MAU (mingguan, prinsip yang sama) ialah varian yang lebih
longgar, lebih sesuai untuk produk yang dijangka digunakan beberapa kali
seminggu dan bukan setiap hari.

"Aktif" mesti ditakrifkan dengan tepat dan konsisten (cth. tindakan
layak yang diselesaikan, bukan bukaan aplikasi yang pasif) pada kedua-dua
pengangka dan penyebut.
```

## Contoh kerja

Sebuah aplikasi pengurusan diabetes digital mempunyai 10,000 pengguna aktif bulanan dalam sesuatu bulan, ditakrifkan sebagai mana-mana pengguna yang menyelesaikan sekurang-kurangnya satu tindakan layak (log glukosa, log makanan atau penandaan ubat) dalam bulan itu. Purata kiraan pengguna aktif harian merentas 30 hari bulan itu memberikan purata DAU 2,200. Nisbah kelekatan DAU/MAU ialah 2,200 / 10,000 × 100 = 22%, menunjukkan bahawa pada hari biasa, kira-kira 22% daripada pangkalan pengguna bulanan aplikasi itu melibatkan diri dengannya, iaitu angka yang munasabah bagi alat keadaan kronik tabiat harian, walaupun pasukan produk mahu melihatnya menaik dari semasa ke semasa apabila tingkah laku ideal (pelogan harian) menjadi lebih menjadi tabiat bagi pesakit berdaftar.

## Sumber data dan kaveat

DAU, WAU dan MAU semuanya dikira daripada log peristiwa asas yang sama, menggunakan satu takrifan peristiwa "aktif yang layak" yang konsisten merentas setiap tetingkap; menukar takrifan itu antara pengiraan pengangka dan penyebut (misalnya mengira sebarang bukaan aplikasi bagi DAU tetapi hanya tindakan yang diselesaikan bagi MAU) akan menghasilkan nisbah yang terherot dan tidak mencerminkan keamatan penglibatan sebenar. Penanda aras yang sesuai untuk kelekatan sangat bergantung pada corak penggunaan yang dimaksudkan bagi produk: alat yang dimaksudkan untuk digunakan sekali seminggu (daftar masuk gejala mingguan) akan dan patut mempunyai nisbah DAU/MAU yang lebih rendah daripada alat yang dimaksudkan untuk digunakan setiap hari (aplikasi pendamping monitor glukosa berterusan), jadi kelekatan harus sentiasa ditafsir berbanding kadar penggunaan yang dimaksudkan bagi produk itu sendiri, bukan satu sasaran sejagat.

## Perangkap

- **Membandingkan nisbah kelekatan merentas produk dengan kekerapan penggunaan dimaksudkan yang berbeza**: alat penggunaan mingguan secara struktur akan menunjukkan nisbah DAU/MAU yang lebih rendah daripada alat penggunaan harian walaupun kedua-duanya berprestasi tepat seperti yang dimaksudkan bagi kes penggunaan masing-masing; ukur berdasarkan kadar penggunaan produk itu sendiri, bukan satu sasaran sejagat.
- **Menggunakan takrifan aktiviti yang tidak konsisten merentas pengangka dan penyebut**: ini boleh menghasilkan nisbah kelekatan yang tidak mencerminkan keamatan penglibatan yang tulen dan tidak dapat dibandingkan dengan bermakna dari semasa ke semasa atau dengan produk lain.
- **Menganggap nisbah kelekatan yang meningkat sebagai positif tanpa keraguan tanpa menyemak arah aliran MAU keseluruhan**: nisbah yang meningkat kerana pangkalan pengguna teras yang mengecil dan lebih berpegang pada tabiat sementara MAU keseluruhan merosot ialah keadaan yang sangat berbeza, dan lebih membimbangkan, daripada yang didorong oleh peningkatan sebenar penglibatan harian merentas pangkalan pengguna yang stabil atau berkembang.
- **Mengabaikan kesan hari dalam minggu dan bermusim pada DAU**: DAU boleh berbeza dengan ketara mengikut hari dalam minggu (hari bekerja berbanding hujung minggu) atau musim bagi banyak produk kesihatan; gunakan purata DAU sepanjang tempoh yang merangkumi satu kitaran semula jadi yang lengkap dan bukan tetingkap singkat yang boleh terpencong.

## Sumber

- Literatur yang dikaji sejawat dan industri tentang metrik penglibatan produk mudah alih dan digital, rangka kerja penanda aras yang digunakan secara meluas daripada platform analitik mudah alih
- Digital Therapeutics Alliance, panduan amalan terbaik tentang pengukuran penglibatan bagi terapeutik digital
- Literatur yang dikaji sejawat tentang pengukuran penglibatan kesihatan digital, contohnya kajian yang diterbitkan dalam Journal of Medical Internet Research (JMIR mHealth and uHealth)

Lihat juga: [kadar pengekalan pengguna](../kadar-pengekalan-pengguna/) dan [kadar konsistensi penglibatan pesakit](../kadar-konsistensi-penglibatan-pesakit/), dua metrik penglibatan berkaitan yang paling kerap dikelirukan dengan nisbah ini.
