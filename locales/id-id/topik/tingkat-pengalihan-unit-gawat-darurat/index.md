# Tingkat Pengalihan Unit Gawat Darurat

Tingkat pengalihan unit gawat darurat (ED) mengukur proporsi kontak pasien yang ditangani oleh alat triase digital atau perawatan virtual yang kemungkinan besar akan menghasilkan kunjungan ED tanpa intervensi tersebut, tetapi justru dikelola dengan aman melalui jalur keparahan-lebih-rendah — saran perawatan mandiri, janji temu perawatan primer, atau kunjungan perawatan mendesak terjadwal. Ini adalah subset spesifik dan bernilai tinggi dari akurasi perutean triase (lihat topik tersebut) yang sepenuhnya berfokus pada pemanfaatan unit gawat darurat yang dihindari, yang merupakan hasil yang paling langsung terkait dengan baik biaya layanan kesehatan maupun pelonggaran kapasitas ED.

## Mengapa Ini Penting

Unit gawat darurat adalah salah satu tempat perawatan paling mahal per kunjungan dan sering digunakan untuk masalah yang dapat dikelola dengan aman di tempat lain, sehingga kemampuan alat triase digital untuk dengan aman mengalihkan kasus yang sesuai dari ED adalah salah satu kemampuannya yang paling berharga secara komersial dan operasional — dan salah satu yang paling mudah dikomunikasikan kepada pembayar atau sistem kesehatan yang mengevaluasi return on investment alat tersebut. Tetapi pengalihan hanya bernilai jika aman: sebuah alat yang secara agresif mengalihkan pasien dari ED dengan mengorbankan kehilangan keadaan darurat sejati telah mengoptimalkan sisi pertukaran yang sepenuhnya salah, itulah sebabnya tingkat pengalihan ED harus selalu dilaporkan bersama metrik keselamatan yang melacak presentasi darurat yang terlewat atau tertunda di antara pasien yang dialihkan, tidak dilaporkan secara terisolasi sebagai kemenangan efisiensi murni.

## Cara Menghitungnya

```
Tingkat pengalihan ED = kontak pasien yang dialihkan dengan aman dari
                         ED ke jalur keparahan-lebih-rendah yang
                         sesuai / total kontak pasien yang dinilai
                         berpotensi menuju-ED × 100

"Dialihkan dengan aman" memerlukan konfirmasi, melalui tindak lanjut
atau data rekam kesehatan yang ditautkan, bahwa kondisi pasien
sebenarnya tidak memerlukan perawatan darurat dalam jendela tindak
lanjut yang ditentukan (misalnya 72 jam) — keputusan pengalihan tidak
divalidasi sebagai aman hanya karena pasien tidak langsung pergi ke
ED setelahnya.

Laporkan bersama:
  Tingkat darurat-terlewat = pasien yang dialihkan yang sebenarnya
                             memerlukan perawatan darurat dalam
                             jendela tindak lanjut / total pasien yang
                             dialihkan × 100
```

## Contoh Perhitungan

Sebuah layanan triase digital menilai 3.000 kontak pasien dalam sebulan yang algoritma klinisnya nilai berpotensi menuju-ED tanpa intervensi. Dari jumlah tersebut, 1.800 dialihkan ke jalur keparahan-lebih-rendah (tingkat pengalihan 60%). Menindaklanjuti kohort yang dialihkan pada 72 jam menggunakan data rekam kesehatan yang ditautkan menemukan bahwa 45 dari 1.800 pasien yang dialihkan memang kemudian datang ke ED dalam jendela tersebut (tingkat darurat-terlewat 45 / 1.800 × 100 = 2,5%). Melaporkan angka pengalihan 60% tanpa tingkat darurat-terlewat 2,5% hanya akan menyajikan setengah dari pertukaran keselamatan-efisiensi yang sebenarnya menentukan apakah perilaku pengalihan alat tersebut dikalibrasi dengan tepat.

## Sumber Data dan Catatan Penting

Mengonfirmasi bahwa pasien yang dialihkan tidak kemudian memerlukan perawatan darurat bergantung pada data yang ditautkan — baik catatan ED sistem kesehatan yang sama, pertukaran informasi kesehatan regional, atau panggilan atau survei tindak lanjut pasien yang terstruktur — dan program pengalihan yang beroperasi tanpa salah satu sumber data ini sebenarnya tidak dapat memvalidasi keselamatannya sendiri, hanya dapat mengasumsikannya berdasarkan tidak adanya keluhan. Tingkat pengalihan yang tepat dan tingkat darurat-terlewat yang dapat diterima adalah keputusan kebijakan klinis, bukan murni statistik, dan harus ditetapkan secara sengaja oleh kepemimpinan klinis daripada dibiarkan muncul sebagai efek samping dari ambang batas apa pun yang kebetulan digunakan algoritma triase secara default. Tingkat pengalihan harus dilaporkan berdasarkan kategori gejala atau keluhan yang muncul, karena tingkat pengalihan yang tepat sangat bervariasi menurut kondisi (laserasi kecil versus nyeri dada menjamin ambang batas pengalihan yang sangat berbeda).

## Jebakan Umum

- **Melaporkan tingkat pengalihan tanpa metrik keselamatan darurat-terlewat yang ditautkan**: tingkat pengalihan tinggi yang dicapai dengan men-triase-rendah keadaan darurat sejati bukanlah keberhasilan; kedua metrik harus selalu dilaporkan bersama.
- **Mengasumsikan tidak ada kunjungan ED berarti pengalihan aman**: seorang pasien mungkin datang ke ED sistem rumah sakit yang berbeda dan tidak tertaut, atau mungkin mengalami hasil yang benar-benar berbahaya tanpa pernah datang ke ED mana pun; validasi keselamatan melalui data yang ditautkan atau tindak lanjut terstruktur, bukan hanya tidak adanya kunjungan ED sistem-yang-sama.
- **Menetapkan ambang batas pengalihan murni untuk memaksimalkan tingkat pengalihan**: algoritma atau kebijakan yang disetel untuk memaksimalkan pengalihan tanpa batasan keselamatan yang sesuai akan menukar keselamatan pasien dengan angka efisiensi yang terlihat lebih baik.
- **Mencampurkan tingkat pengalihan di seluruh jenis keluhan**: tingkat pengalihan yang tepat berbeda jauh menurut keluhan yang muncul; satu tingkat gabungan tidak dapat menunjukkan apakah alat tersebut berkinerja aman dan efektif untuk kondisi spesifik yang paling penting secara klinis.

## Sumber

- Agency for Healthcare Research and Quality (AHRQ), penelitian tentang pemanfaatan unit gawat darurat dan pengalihan tempat-perawatan yang tepat
- NHS England, panduan tentang standar keselamatan dan efektivitas triase NHS 111 dan perawatan mendesak digital
- Literatur yang ditinjau sejawat tentang hasil pengalihan ED triase digital dan perawatan virtual, misalnya studi yang diterbitkan di Annals of Emergency Medicine dan npj Digital Medicine

Lihat juga: [akurasi perutean triase](../akurasi-perutean-triase/), metrik akurasi yang lebih luas yang menjadi subset spesifik dan kritis-keselamatan ini.
