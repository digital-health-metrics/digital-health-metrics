# Skor System Usability Scale

Skor System Usability Scale (SUS) adalah kuesioner 10-item standar yang digunakan untuk mengukur seberapa dapat digunakan sebuah perangkat lunak, menghasilkan satu skor dari 0 hingga 100 yang dapat ditolok-ukurkan terhadap norma industri yang sudah mapan. Berbeda dari Net Promoter Score, yang mengukur kesediaan merekomendasikan, atau ukuran hasil yang dilaporkan pasien, yang mengukur status klinis atau fungsional, SUS mengukur satu hal spesifik: seberapa mudah perangkat lunak itu sendiri dipelajari dan digunakan, baik oleh pasien maupun staf klinis.

## Mengapa Ini Penting

Sebuah alat kesehatan digital dapat memiliki bukti klinis yang kuat dan kasus bisnis yang meyakinkan sementara tetap gagal dalam praktik karena pasien atau klinisi menganggap antarmukanya membingungkan, lambat, atau membuat frustrasi untuk digunakan — dan karena SUS adalah instrumen tervalidasi yang banyak digunakan dengan puluhan tahun data tolok ukur yang diterbitkan di berbagai industri, ini memungkinkan tim kesehatan digital membandingkan kegunaan produk mereka sendiri terhadap distribusi yang dikenal daripada mengandalkan kesan informal atau keluhan anekdotal. SUS sengaja dibuat agnostik teknologi dan cepat diberikan (biasanya di bawah lima menit), yang membuatnya praktis dijalankan berulang kali di seluruh iterasi desain, tidak seperti studi kegunaan penuh atau uji klinis formal. Karena kegagalan kegunaan yang dihadapi klinisi adalah kontributor yang terdokumentasi terhadap burnout (lihat tingkat burnout dokter) dan kegagalan kegunaan yang dihadapi pasien adalah kontributor yang terdokumentasi terhadap penghentian penggunaan dan hasil literasi digital yang buruk (lihat tingkat literasi digital), SUS berfungsi sebagai sinyal kegunaan peringatan dini berbiaya rendah yang dapat menangkap masalah desain sebelum muncul dalam metrik hilir yang lebih konsekuensial tersebut.

## Cara Menghitungnya

```
Skor SUS = ((jumlah skor item bernomor ganjil − 5) +
            (25 − jumlah skor item bernomor genap)) × 2.5

Hasilnya adalah satu skor dari 0 hingga 100 (bukan persentase,
meskipun skalanya, karena tidak mewakili "persen benar" atau
sejenisnya).

Interpretasi tolok ukur yang diterbitkan (Bangor et al.):
  Di atas 80 — kegunaan sangat baik
  68         — rata-rata, berdasarkan norma industri yang luas
  Di bawah 51 — kegunaan buruk, memerlukan investigasi
```

## Contoh Perhitungan

Sebuah platform telehealth memberikan kuesioner SUS 10-item standar kepada 150 pasien setelah kunjungan video pertama mereka. Rata-rata skor SUS yang dihitung di seluruh responden adalah 74. Ditolok-ukurkan terhadap rata-rata industri yang banyak dikutip sebesar 68, ini menunjukkan kegunaan di atas rata-rata untuk populasi pasien dan kasus penggunaan khusus ini, meskipun masih secara bermakna di bawah ambang batas "sangat baik" sebesar 80 yang akan menyarankan sedikit hambatan kegunaan yang tersisa. Membagi 150 respons yang sama berdasarkan usia menunjukkan skor rata-rata 81 untuk pasien di bawah 50 tahun dan 62 untuk pasien berusia 65 tahun ke atas — kesenjangan yang menunjuk pada masalah kegunaan yang spesifik dan dapat ditangani untuk pasien yang lebih tua daripada masalah kegunaan produk umum, dan yang akan disembunyikan oleh satu rata-rata gabungan.

## Sumber Data dan Catatan Penting

Data SUS berasal langsung dari pasien atau klinisi yang menyelesaikan kuesioner 10-item standar, dan instrumen tersebut harus diberikan persis seperti yang divalidasi (10 item yang sama, skala kesepakatan 5-poin yang sama, rumus penilaian yang sama) agar skor yang dihasilkan dapat dibandingkan dengan tolok ukur yang diterbitkan; versi kuesioner yang dimodifikasi atau dipersingkat, betapapun baiknya niatnya, menghasilkan skor yang tidak dapat ditafsirkan secara andal terhadap distribusi tolok ukur standar. SUS mengukur kegunaan yang dirasakan, yang berkorelasi tetapi tidak identik dengan keberhasilan penyelesaian tugas objektif (lihat tingkat literasi digital untuk ukuran berbasis penyelesaian tugas); sebuah produk dapat memiliki skor SUS yang baik dari pasien yang tidak mencoba fitur yang lebih kompleks, sehingga memasangkan SUS dengan data penyelesaian tugas objektif memberikan gambaran yang lebih lengkap daripada salah satu saja. Waktu respons penting: memberikan SUS segera setelah insiden spesifik yang membuat frustrasi (koneksi gagal, langkah yang membingungkan) versus setelah sesi yang lancar dapat menggeser skor terlepas dari kegunaan keseluruhan produk.

## Jebakan Umum

- **Memodifikasi item kuesioner standar atau penilaian**: bahkan perubahan kata-kata atau skala kecil membatalkan perbandingan terhadap distribusi tolok ukur yang diterbitkan dengan baik; gunakan instrumen 10-item standar persis seperti yang divalidasi.
- **Melaporkan hanya skor rata-rata tanpa segmentasi**: kegunaan sering bervariasi secara substansial menurut usia pengguna, literasi digital, atau peran (pasien versus klinisi); segmentasikan pelaporan untuk menemukan kesenjangan kegunaan yang spesifik dan dapat ditangani yang disembunyikan oleh satu rata-rata.
- **Memperlakukan SUS sebagai ukuran efektivitas klinis**: SUS mengukur kegunaan secara khusus, bukan hasil klinis atau kepuasan dengan perawatan; alat yang sangat dapat digunakan masih dapat gagal meningkatkan hasil klinis, dan ini tidak boleh pernah dicampuradukkan atau digantikan satu sama lain.
- **Memberikan survei hanya setelah sesi yang sangat lancar atau sangat membuat frustrasi**: waktu dan konteks pemberian dapat membiaskan skor; berikan secara konsisten di seluruh sampel representatif sesi dunia nyata, bukan hanya yang nyaman atau dipilih secara selektif.

## Sumber

- Brooke, J., "SUS: A Quick and Dirty Usability Scale", instrumen asli yang diterbitkan
- Bangor, Kortum, dan Miller, penelitian tolok ukur SUS yang diterbitkan yang menetapkan pita interpretasi skor yang banyak dikutip
- Literatur yang ditinjau sejawat tentang penggunaan SUS dalam evaluasi kegunaan kesehatan digital dan telehealth, misalnya studi yang diterbitkan di JMIR Human Factors

Lihat juga: [skor net promoter pasien](../skor-net-promoter-pasien/), metrik yang dilaporkan pasien terkait tetapi berbeda yang mengukur kepuasan dan loyalitas, bukan kegunaan perangkat lunak secara khusus.
