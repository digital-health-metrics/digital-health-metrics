# ISO/TS 82304-2

ISO/TS 82304-2 adalah spesifikasi teknis internasional, diterbitkan di bawah ISO Technical Committee 215 (Health Informatics), yang mendefinisikan metode terstruktur untuk menilai kualitas aplikasi kesehatan dan kesejahteraan — mencakup kegunaan, ketangguhan dan keandalan teknis, interoperabilitas, kualitas konten, serta keamanan dan privasi data — untuk produk yang berada di luar cakupan regulasi perangkat medis penuh tetapi tetap secara material memengaruhi keputusan atau perilaku kesehatan pengguna. Ini ada untuk mengisi celah tertentu: sebagian besar aplikasi kesehatan dan kesejahteraan yang menghadapi konsumen (pelacak kebugaran, buku harian gejala, aplikasi pembinaan kesejahteraan) tidak diregulasi sebagai perangkat medis, namun sebelumnya tidak ada cara umum dan terstruktur untuk menilai atau membandingkan kualitas dan keselamatan dasar mereka.

## Mengapa Ini Penting

Toko aplikasi menampung ratusan ribu aplikasi kesehatan dan kesejahteraan dengan kualitas yang sangat bervariasi, dan sebelum spesifikasi teknis umum ada, seorang pasien, klinisi, atau sistem kesehatan tidak memiliki cara terstruktur dan dapat dibandingkan untuk menilai kualitas dan keselamatan dasar satu aplikasi terhadap yang lain di luar penilaian bintang dan klaim pemasaran — celah yang penting karena aplikasi kesehatan yang dirancang buruk masih dapat menyebabkan kerugian nyata (konten tidak akurat, keamanan data yang buruk, klaim yang menyesatkan) bahkan tanpa memenuhi ambang batas regulasi perangkat medis. ISO/TS 82304-2 sengaja disusun di sekitar domain yang dapat dinilai secara konsisten oleh peninjau non-spesialis, yang telah menjadikannya dasar teknis untuk beberapa layanan pelabelan dan kurasi kualitas aplikasi kesehatan nasional dan komersial, memberi sistem kesehatan dan perpustakaan aplikasi cara yang dapat dipertahankan dan terstandarisasi untuk menyertakan atau mengecualikan aplikasi dari daftar yang direkomendasikan daripada mengandalkan penilaian ad hoc.

## Cara Diterapkan

```
Penilaian diorganisasikan di sekitar domain kualitas yang
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
                                     adanya klaim kesehatan yang
                                     berbahaya atau menyesatkan
Keamanan dan privasi              — praktik perlindungan data dan
                                     transparansi tentang penggunaan
                                     data

Setiap domain dinilai melalui kriteria tinjauan terstruktur dan
digabungkan menjadi penilaian kualitas keseluruhan, yang digunakan
beberapa skema pelabelan kualitas aplikasi kesehatan sebagai dasar
teknis untuk label kualitas publik atau keputusan penyertaan
perpustakaan terkurasi.
```

## Contoh Perhitungan

Program perpustakaan aplikasi digital sebuah sistem kesehatan ingin mengurasi daftar yang direkomendasikan dari aplikasi kesejahteraan untuk pasien daripada membiarkan pemilihan aplikasi sepenuhnya pada pencarian toko aplikasi. Setiap aplikasi kandidat dinilai terhadap domain ISO/TS 82304-2: sebuah aplikasi pelacak tidur mencetak baik pada kegunaan dan ketangguhan teknis, memadai pada kualitas konten, tetapi ditandai selama tinjauan keamanan dan privasi karena membagikan data pengguna dengan pengiklan pihak ketiga tanpa pengungkapan yang jelas — temuan yang cukup signifikan untuk mengecualikan aplikasi tersebut dari daftar yang direkomendasikan meskipun skor kegunaannya yang kuat. Hasil per-domain ini lebih dapat ditindaklanjuti baik bagi tim kurasi maupun, jika dibagikan, pengembang aplikasi itu sendiri daripada satu skor kualitas gabungan, karena ini mengidentifikasi dengan tepat aspek mana yang perlu diperbaiki sebelum aplikasi dapat dipertimbangkan kembali.

## Sumber Data dan Catatan Penting

Penilaian terhadap ISO/TS 82304-2 biasanya dilakukan oleh peninjau terlatih atau layanan penilaian terakreditasi, mengikuti kriteria tinjauan terstruktur spesifikasi untuk setiap domain, dan beberapa inisiatif nasional dan komersial (organisasi pelabelan dan kurasi kualitas aplikasi kesehatan, beberapa beroperasi di bawah dukungan sistem kesehatan nasional formal) menggunakan standar tersebut sebagai dasar teknis untuk label kualitas aplikasi yang menghadapi publik mereka sendiri — yang berarti status "bersertifikat" atau "berlabel" aplikasi dalam praktiknya sering mencerminkan implementasi skema pelabelan tertentu dari standar tersebut, belum tentu proses yang identik di setiap skema, sehingga organisasi penilai tertentu dan metodologinya harus diperiksa dan diungkapkan bersama label kualitas apa pun yang dikutip. Spesifikasi tersebut menilai karakteristik kualitas dan keselamatan dasar sebuah aplikasi sebagai perangkat lunak; ini bukan pengganti izin regulasi perangkat medis di mana klaim atau fungsi aplikasi benar-benar memenuhi ambang batas perangkat medis, dan menggunakannya sebagai pengganti akan menjadi kesalahan kategori.

## Jebakan Umum

- **Memperlakukan label kualitas sebagai izin regulasi**: sebuah aplikasi yang dinilai dan dilabeli di bawah ISO/TS 82304-2 belum dengan demikian menerima persetujuan regulasi perangkat medis; keduanya melayani tujuan yang berbeda dan tidak boleh pernah dicampuradukkan dalam cara aplikasi dideskripsikan atau dipasarkan.
- **Mengasumsikan semua skema pelabelan berdasarkan standar tersebut setara**: organisasi yang berbeda menerapkan penilaian berbasis ISO/TS 82304-2 dengan proses tinjauan dan ketelitian spesifik mereka sendiri; periksa organisasi mana yang melakukan penilaian dan bagaimana, daripada memperlakukan label "berbasis ISO/TS 82304-2" mana pun sebagai dapat dipertukarkan dengan yang lain.
- **Hanya menilai kegunaan sambil mengabaikan keamanan dan privasi**: masalah kegunaan paling terlihat bagi pengguna akhir dan paling mudah dinilai secara informal, yang dapat menyebabkan peninjau kurang memberi bobot pada domain keamanan dan privasi yang kurang terlihat tetapi berpotensi lebih konsekuensial.
- **Memperlakukan penilaian sebagai sertifikasi permanen satu kali**: konten, praktik keamanan, dan pengaturan berbagi data pihak ketiga sebuah aplikasi semuanya dapat berubah setelah penilaian awal; program pelabelan kualitas yang kredibel menilai ulang secara berkala daripada memperlakukan satu kelulusan awal sebagai permanen.

## Sumber

- International Organization for Standardization, ISO/TS 82304-2:2021, "Health software — Part 2: Health and wellness apps — Quality and reliability"
- ISO Technical Committee 215 (Health Informatics), informasi publikasi dan kelompok kerja
- Organisasi pelabelan dan kurasi kualitas aplikasi kesehatan nasional dan komersial yang menerbitkan metodologi penilaian mereka berdasarkan standar ini

Lihat juga: [skor System Usability Scale](../skor-system-usability-scale/), instrumen khusus kegunaan yang lebih sempit dan saling melengkapi yang sering digunakan bersama penilaian kualitas ISO/TS 82304-2 yang lebih luas.
