# Masa Pusing Ganti Rujukan Digital

Masa pusing ganti rujukan digital ialah masa berlalu daripada rujukan elektronik dihantar oleh klinisien perujuk sehingga ia ditriaj dan sama ada diterima, ditolak atau ditempah oleh perkhidmatan penerima. Ia ialah metrik proses (aliran), berbeza daripada jumlah masa menunggu pesakit, dan merupakan salah satu tempat yang paling jelas di mana perubahan sistem digital (e-rujukan berstruktur, triaj berasaskan imej, borang rujukan piawai) dapat ditunjukkan menggerakkan angka operasi dan bukan sekadar skor kepuasan.

## Mengapa ia penting

Langkah triaj yang perlahan atau sangat berubah-ubah menambah kelewatan sebelum pesakit malah menyertai senarai menunggu klinikal, dan oleh sebab kelewatan itu berlaku sebelum sebarang penjagaan klinikal bermula, ia ialah pembaziran proses semata-mata yang sesuai dihapuskan oleh perkakasan digital. Sistem rujukan yang memaksa kitaran "kembali kepada perujuk" untuk maklumat yang hilang mewujudkan gelung kerja semula yang mudah terlepas pandang jika masa pusing ganti hanya diukur pada rujukan yang lulus dengan bersih pada kali pertama. Apabila sesuatu perkhidmatan telah memperkenalkan borang rujukan digital berstruktur, medan wajib atau triaj berasaskan imej (contohnya dalam telederma), masa pusing ganti lazimnya metrik tunggal yang paling meyakinkan untuk menunjukkan manfaat, kerana ia boleh diukur sebelum dan selepas perubahan menggunakan instrumentasi yang sama.

## Cara pengiraannya

```
Masa pusing ganti = cap masa(keputusan triaj) − cap masa(penghantaran rujukan)

Laporkan median dan persentil tinggi (lazimnya persentil ke-90), bukan
hanya min, kerana taburan sangat condong ke kanan oleh rujukan yang
dikembalikan atau kompleks.

Pertimbangkan masa sub-peringkat jika sistem menangkapnya:
  Penghantaran → diterima oleh perkhidmatan
  Diterima → keputusan triaj
  Keputusan triaj → temu janji ditempah (jika berkaitan)
```

## Contoh kerja

Jejak audit sebuah sistem e-rujukan menunjukkan median masa daripada penghantaran hingga keputusan triaj sebanyak 1.8 hari merentas semua kepakaran, dengan masa persentil ke-90 sebanyak 6 hari, terutamanya didorong oleh rujukan yang dikembalikan kepada perujuk kerana maklumat klinikal yang hilang. Laluan telederma yang menggunakan triaj berasaskan imej pada platform yang sama mencapai median masa pusing ganti 4 jam dan persentil ke-90 sebanyak 1 hari, kerana gambar foto dan sejarah berstruktur hampir selalu mencukupi untuk keputusan triaj tanpa memerlukan surat-menyurat lanjut.

## Sumber data dan kaveat

Jejak audit sistem e-rujukan atau pengurusan rujukan itu sendiri ialah sumber utama, menggunakan cap masa penghantaran dan keputusan; organisasi harus mengesahkan sama ada "jam" berhenti sementara rujukan dikembalikan untuk maklumat lanjut atau berjalan berterusan, kerana kedua-dua takrifan menghasilkan angka yang jauh berbeza bagi proses asas yang sama. Masa pusing ganti harus dilaporkan dalam masa kalendar atau masa jam bekerja secara konsisten, kerana kesan hujung minggu dan cuti umum boleh memutarbelitkan perbandingan antara perkhidmatan dengan corak kerja yang berbeza.

## Perangkap

- **Mengukur hanya rujukan yang "bersih"**: mengecualikan rujukan yang ditolak atau dikembalikan daripada pengiraan menyembunyikan beban kerja semula yang sering menjadi sasaran khusus alat digital untuk dikurangkan.
- **Melaporkan min dan bukannya median dan persentil**: sebilangan kecil rujukan yang berlarutan dan dikembalikan akan menarik min jauh melebihi pengalaman sebenar pesakit biasa.
- **Mengelirukan masa pusing ganti dengan jumlah masa menunggu**: masa pusing ganti hanya merangkumi langkah triaj; pengalaman keseluruhan pesakit juga merangkumi senarai menunggu klinikal hiliran, iaitu metrik yang berasingan yang dikawal oleh kekangan kapasiti yang berasingan.
- **Tidak membezakan sub-peringkat**: perkhidmatan yang hanya mengukur masa hujung ke hujung tidak dapat memberitahu sama ada angka yang perlahan disebabkan oleh perujuk yang menghantar maklumat tidak lengkap, oleh kapasiti triaj perkhidmatan penerima, atau kedua-duanya.

## Sumber

- NHS England, statistik dan spesifikasi perkhidmatan e-Referral Service (e-RS)
- Literatur yang dikaji sejawat tentang sistem pengurusan rujukan elektronik dan laluan triaj digital, termasuk telederma
- ONC / HealthIT.gov, panduan saling kendali dan penyelarasan rujukan
