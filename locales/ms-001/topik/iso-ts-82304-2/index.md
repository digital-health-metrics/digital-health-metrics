# ISO/TS 82304-2

ISO/TS 82304-2 ialah spesifikasi teknikal antarabangsa, diterbitkan di bawah Jawatankuasa Teknikal ISO 215 (Informatik Kesihatan), yang mentakrifkan kaedah berstruktur untuk menilai kualiti aplikasi kesihatan dan kesejahteraan, merangkumi kebolehgunaan, keteguhan dan kebolehpercayaan teknikal, saling kendali, kualiti kandungan, serta keselamatan dan privasi data, bagi produk yang berada di luar skop kawal selia peranti perubatan sepenuhnya tetapi masih memberi kesan ketara kepada keputusan atau tingkah laku kesihatan pengguna. Ia wujud untuk mengisi jurang tertentu: sebahagian besar aplikasi kesihatan dan kesejahteraan yang ditujukan kepada pengguna (penjejak kecergasan, diari gejala, aplikasi bimbingan kesejahteraan) tidak dikawal selia sebagai peranti perubatan, namun sebelum ini tiada cara berstruktur yang sama untuk menilai atau membandingkan kualiti dan keselamatan asasnya.

## Mengapa ia penting

Kedai aplikasi menempatkan ratusan ribu aplikasi kesihatan dan kesejahteraan dengan kualiti yang sangat berbeza-beza, dan sebelum spesifikasi teknikal bersama wujud, pesakit, klinisien atau sistem kesihatan tidak mempunyai cara berstruktur dan boleh dibandingkan untuk menilai kualiti dan keselamatan asas satu aplikasi berbanding yang lain selain daripada penilaian bintang dan dakwaan pemasaran. Jurang ini penting kerana aplikasi kesihatan yang direka dengan buruk masih boleh menyebabkan kemudaratan sebenar (kandungan yang tidak tepat, keselamatan data yang lemah, dakwaan mengelirukan) walaupun tidak memenuhi ambang kawal selia peranti perubatan. ISO/TS 82304-2 sengaja distrukturkan sekitar domain yang boleh dinilai secara konsisten oleh penyemak bukan pakar, yang menjadikannya asas teknikal bagi beberapa perkhidmatan pelabelan dan kurasi kualiti aplikasi kesihatan kebangsaan dan komersial, memberi sistem kesihatan dan perpustakaan aplikasi cara piawai yang boleh dipertahankan untuk memasukkan atau mengecualikan aplikasi daripada senarai yang disyorkan dan bukannya bergantung pada pertimbangan ad hoc.

## Cara ia digunakan

```
Penilaian diatur sekitar domain kualiti yang ditakrifkan, dinilai
melalui semakan berstruktur dan bukannya satu formula berangka:

Kebolehgunaan                     — kejelasan, kebolehcapaian dan
                                     kemudahan penggunaan bagi kumpulan
                                     pengguna yang dimaksudkan
Keteguhan/kebolehpercayaan teknikal — kestabilan, prestasi dan
                                     bebas daripada kecacatan teknikal
Saling kendali                    — keupayaan bertukar data dengan sistem
                                     lain jika berkaitan dengan fungsi
                                     aplikasi
Kualiti dan keselamatan kandungan — ketepatan, kebaharuan dan ketiadaan
                                     dakwaan kesihatan yang berbahaya
                                     atau mengelirukan
Keselamatan dan privasi           — amalan perlindungan data dan
                                     ketelusan tentang penggunaan data

Setiap domain dinilai melalui kriteria semakan berstruktur dan
digabungkan menjadi penilaian kualiti keseluruhan, yang digunakan oleh
beberapa skim pelabelan kualiti aplikasi kesihatan sebagai asas teknikal
bagi label kualiti awam atau keputusan kemasukan ke perpustakaan terkurasi.
```

## Contoh kerja

Program perpustakaan aplikasi digital sebuah sistem kesihatan ingin mengurasi senarai aplikasi kesejahteraan yang disyorkan kepada pesakit dan bukannya membiarkan pemilihan aplikasi sepenuhnya kepada carian kedai aplikasi. Setiap aplikasi calon dinilai berdasarkan domain ISO/TS 82304-2: aplikasi penjejak tidur mendapat skor baik dalam kebolehgunaan dan keteguhan teknikal, memadai dalam kualiti kandungan, tetapi ditanda semasa semakan keselamatan dan privasi kerana berkongsi data pengguna dengan pengiklan pihak ketiga tanpa pendedahan yang jelas, iaitu penemuan yang cukup penting untuk mengecualikan aplikasi itu daripada senarai yang disyorkan walaupun skor kebolehgunaannya sebaliknya kukuh. Hasil domain demi domain ini lebih boleh ditindaki bagi pasukan kurasi dan, jika dikongsi, pembangun aplikasi itu sendiri berbanding satu skor kualiti gabungan, kerana ia mengenal pasti dengan tepat aspek mana yang perlu diperbaiki sebelum aplikasi itu boleh dipertimbangkan semula.

## Sumber data dan kaveat

Penilaian terhadap ISO/TS 82304-2 lazimnya dijalankan oleh penyemak terlatih atau perkhidmatan penilaian bertauliah, mengikut kriteria semakan berstruktur spesifikasi itu bagi setiap domain, dan beberapa inisiatif kebangsaan dan komersial (organisasi pelabelan dan kurasi kualiti aplikasi kesihatan, sesetengahnya beroperasi di bawah pengesahan rasmi sistem kesihatan kebangsaan) menggunakan piawaian ini sebagai asas teknikal bagi label kualiti aplikasi awam mereka sendiri. Ini bermakna status "diperakui" atau "berlabel" sesuatu aplikasi dalam praktiknya sering mencerminkan pelaksanaan piawaian oleh skim pelabelan tertentu, bukan semestinya proses yang sama merentas setiap skim, jadi organisasi penilai dan metodologinya harus disemak dan didedahkan bersama sebarang label kualiti yang disebut. Spesifikasi ini menilai ciri kualiti dan keselamatan asas sesuatu aplikasi sebagai perisian; ia bukan pengganti kelulusan kawal selia peranti perubatan jika dakwaan atau fungsi aplikasi sebenarnya memenuhi ambang peranti perubatan, dan menggunakannya sebagai pengganti ialah kesilapan kategori.

## Perangkap

- **Menganggap label kualiti sebagai kelulusan kawal selia**: aplikasi yang dinilai dan dilabel di bawah ISO/TS 82304-2 tidak dengan itu menerima kelulusan kawal selia peranti perubatan; kedua-duanya berfungsi untuk tujuan berbeza dan tidak harus dicampuradukkan dalam cara aplikasi diterangkan atau dipasarkan.
- **Menganggap semua skim pelabelan berasaskan piawaian ini setara**: organisasi berbeza melaksanakan penilaian berasaskan ISO/TS 82304-2 dengan proses semakan dan ketelitian masing-masing; semak organisasi mana yang melakukan penilaian dan bagaimana, dan bukannya menganggap mana-mana label "berasaskan ISO/TS 82304-2" boleh ditukar ganti dengan yang lain.
- **Menilai hanya kebolehgunaan sambil mengabaikan keselamatan dan privasi**: isu kebolehgunaan paling ketara kepada pengguna akhir dan paling mudah dinilai secara tidak formal, yang boleh menyebabkan penyemak kurang memberi pemberat kepada domain keselamatan dan privasi yang kurang ketara tetapi berpotensi lebih berimpak.
- **Menganggap penilaian sebagai pensijilan sekali sahaja yang kekal**: kandungan, amalan keselamatan dan susunan perkongsian data pihak ketiga sesuatu aplikasi semuanya boleh berubah selepas penilaian awal; program pelabelan kualiti yang boleh dipercayai menilai semula secara berkala dan bukannya menganggap kelulusan awal sebagai kekal.

## Sumber

- International Organization for Standardization, ISO/TS 82304-2:2021, "Health software — Part 2: Health and wellness apps — Quality and reliability"
- ISO Technical Committee 215 (Health Informatics), maklumat penerbitan dan kumpulan kerja
- Organisasi pelabelan dan kurasi kualiti aplikasi kesihatan kebangsaan dan komersial yang menerbitkan metodologi penilaian mereka berasaskan piawaian ini

Lihat juga: [skor skala kebolehgunaan sistem](../skor-skala-kebolehgunaan-sistem/), instrumen pelengkap yang lebih sempit dan khusus kebolehgunaan yang sering digunakan bersama penilaian kualiti ISO/TS 82304-2 yang lebih luas.
