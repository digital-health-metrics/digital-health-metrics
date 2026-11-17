# ISO/TS 82304-2

ISO/TS 82304-2 adalah spesifikasi teknis internasional, diterbitkan di bawah ISO Technical Committee 215 (Health Informatics), yang mendefinisikan metode terstruktur untuk menilai kualiti aplikasi kesihatan dan kesejahteraan — mencakup kegunaan, ketangguhan dan keandalan teknis, interoperabilitas, kualiti konten, serta keamanan dan privasi data — untuk produk yang berada di luar cakupan regulasi perangkat medis penuh tetapi tetap secara material memengaruhi keputusan atau perilaku kesihatan pengguna. Ini ada untuk mengisi celah tertentu: sebagian besar aplikasi kesihatan dan kesejahteraan yang menghadapi konsumen (pelacak kebugaran, buku harian gejala, aplikasi pembinaan kesejahteraan) tidak diregulasi sebagai perangkat medis, namun sebelumnya tidak ada cara umum dan terstruktur untuk menilai atau membandingkan kualiti dan keselamatan dasar mereka.

## Mengapa Ini Penting

Toko aplikasi menampung ratusan ribu aplikasi kesihatan dan kesejahteraan dengan kualiti yang sangat bervariasi, dan sebelum spesifikasi teknis umum ada, seorang pesakit, klinisi, atau sistem kesihatan tidak memiliki cara terstruktur dan dapat dibandingkan untuk menilai kualiti dan keselamatan dasar satu aplikasi terhadap yang lain di luar penilaian bintang dan klaim pemasaran — celah yang penting kerana aplikasi kesihatan yang dirancang buruk masih dapat menyebabkan kerugian nyata (konten tidak akurat, keamanan data yang buruk, klaim yang menyesatkan) bahkan tanpa memenuhi ambang batas regulasi perangkat medis. ISO/TS 82304-2 sengaja disusun di sekitar domain yang dapat dinilai secara konsisten oleh peninjau non-spesialis, yang telah menjadikannya dasar teknis untuk beberapa layanan pelabelan dan kurasi kualiti aplikasi kesihatan nasional dan komersial, memberi sistem kesihatan dan perpustakaan aplikasi cara yang dapat dipertahankan dan terstandarisasi untuk menyertakan atau mengecualikan aplikasi dari daftar yang direkomendasikan daripada mengandalkan penilaian ad hoc.

## Cara Diterapkan

```
Penilaian diorganisasikan di sekitar domain kualiti yang
ditentukan, dievaluasi melalui tinjauan terstruktur daripada satu
rumus numerik tunggal:

Kegunaan                          — kejelasan, aksesibilitas, dan
                                     kemudahan penggunaan untuk
                                     kelompok pengguna yang dituju
Ketangguhan/keandalan teknis      — stabilitas, kinerja, dan
                                     kebebasan dari cacat teknis
Interoperabilitas                 — kemampuan untuk bertukar data
                                     dengan sistem lain di mana
                                     relevan dengan fungsi aplikasi
Kualitas dan keselamatan konten   — akurasi, kekinian, dan tidak
                                     adanya klaim kesihatan yang
                                     berbahaya atau menyesatkan
Keamanan dan privasi              — praktik perlindungan data dan
                                     transparansi tentang penggunaan
                                     data

Setiap domain dinilai melalui kriteria tinjauan terstruktur dan
digabungkan menjadi penilaian kualiti keseluruhan, yang digunakan
beberapa skema pelabelan kualiti aplikasi kesihatan sebagai dasar
teknis untuk label kualiti publik atau keputusan penyertaan
perpustakaan terkurasi.
```

## Contoh Perhitungan

Program perpustakaan aplikasi digital sebuah sistem kesihatan ingin mengurasi daftar yang direkomendasikan dari aplikasi kesejahteraan untuk pesakit daripada membiarkan pemilihan aplikasi sepenuhnya pada pencarian toko aplikasi. Setiap aplikasi kandidat dinilai terhadap domain ISO/TS 82304-2: sebuah aplikasi pelacak tidur mencetak baik pada kegunaan dan ketangguhan teknis, memadai pada kualiti konten, tetapi ditandai selama tinjauan keamanan dan privasi kerana membagikan data pengguna dengan pengiklan pihak ketiga tanpa pengungkapan yang jelas — temuan yang cukup signifikan untuk mengecualikan aplikasi tersebut dari daftar yang direkomendasikan meskipun skor kegunaannya yang kuat. Hasil per-domain ini lebih dapat ditindaklanjuti baik bagi tim kurasi maupun, jika dibagikan, pengembang aplikasi itu sendiri daripada satu skor kualiti gabungan, kerana ini mengidentifikasi dengan tepat aspek mana yang perlu diperbaiki sebelum aplikasi dapat dipertimbangkan kembali.

## Sumber Data dan Catatan Penting

Penilaian terhadap ISO/TS 82304-2 biasanya dilakukan oleh peninjau terlatih atau layanan penilaian terakreditasi, mengikuti kriteria tinjauan terstruktur spesifikasi untuk setiap domain, dan beberapa inisiatif nasional dan komersial (organisasi pelabelan dan kurasi kualiti aplikasi kesihatan, beberapa beroperasi di bawah dukungan sistem kesihatan nasional formal) menggunakan standar tersebut sebagai dasar teknis untuk label kualiti aplikasi yang menghadapi publik mereka sendiri — yang berarti status "bersertifikat" atau "berlabel" aplikasi dalam praktiknya sering mencerminkan implementasi skema pelabelan tertentu dari standar tersebut, belum tentu proses yang identik di setiap skema, sehingga organisasi penilai tertentu dan metodologinya harus diperiksa dan diungkapkan bersama label kualiti apa pun yang dikutip. Spesifikasi tersebut menilai karakteristik kualiti dan keselamatan dasar sebuah aplikasi sebagai perisian; ini bukan pengganti izin regulasi perangkat medis di mana klaim atau fungsi aplikasi benar-benar memenuhi ambang batas perangkat medis, dan menggunakannya sebagai pengganti akan menjadi kesalahan kategori.

## Jebakan Umum

- **Memperlakukan label kualiti sebagai izin regulasi**: sebuah aplikasi yang dinilai dan dilabeli di bawah ISO/TS 82304-2 belum dengan demikian menerima persetujuan regulasi perangkat medis; keduanya melayani tujuan yang berbeda dan tidak boleh pernah dicampuradukkan dalam cara aplikasi dideskripsikan atau dipasarkan.
- **Mengasumsikan semua skema pelabelan berdasarkan standar tersebut setara**: organisasi yang berbeda menerapkan penilaian berbasis ISO/TS 82304-2 dengan proses tinjauan dan ketelitian spesifik mereka sendiri; periksa organisasi mana yang melakukan penilaian dan bagaimana, daripada memperlakukan label "berbasis ISO/TS 82304-2" mana pun sebagai dapat dipertukarkan dengan yang lain.
- **Hanya menilai kegunaan sambil mengabaikan keamanan dan privasi**: masalah kegunaan paling terlihat bagi pengguna akhir dan paling mudah dinilai secara informal, yang dapat menyebabkan peninjau kurang memberi bobot pada domain keamanan dan privasi yang kurang terlihat tetapi berpotensi lebih konsekuensial.
- **Memperlakukan penilaian sebagai sertifikasi permanen satu kali**: konten, praktik keamanan, dan pengaturan berbagi data pihak ketiga sebuah aplikasi semuanya dapat berubah setelah penilaian awal; program pelabelan kualiti yang kredibel menilai ulang secara berkala daripada memperlakukan satu kelulusan awal sebagai permanen.

## Sumber

- International Organization for Standardization, ISO/TS 82304-2:2021, "Health software — Part 2: Health and wellness apps — Quality and reliability"
- ISO Technical Committee 215 (Health Informatics), informasi publikasi dan kelompok kerja
- Organisasi pelabelan dan kurasi kualiti aplikasi kesihatan nasional dan komersial yang menerbitkan metodologi penilaian mereka berdasarkan standar ini

Lihat juga: [skor System Usability Scale](../skor-system-usability-scale/), instrumen khusus kegunaan yang lebih sempit dan saling melengkapi yang sering digunakan bersama penilaian kualiti ISO/TS 82304-2 yang lebih luas.
