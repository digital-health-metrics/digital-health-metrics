# Tingkat Pengabaian Peringatan Klinis

Tingkat pengabaian peringatan klinis mengukur proporsi peringatan dukungan keputusan klinis (clinical decision support/CDS), seperti peringatan interaksi obat-obat, peringatan alergi, dan pemeriksaan rentang dosis yang dihasilkan oleh sistem entri pesanan penyedia terkomputerisasi (CPOE), yang diabaikan atau dilewati oleh klinisi alih-alih ditindaklanjuti. Ini adalah sinyal kuantitatif standar yang digunakan untuk mendeteksi dan mengelola "kelelahan peringatan": kecenderungan klinisi yang terdokumentasi dengan baik untuk menjadi tidak peka terhadap peringatan setelah volume peringatan bernilai rendah menjadi terlalu banyak.

## Mengapa ini penting

Tingkat pengabaian yang dipublikasikan untuk peringatan interaksi obat umumnya berkisar dari sekitar setengah hingga lebih dari sembilan puluh persen, dan tingkat yang tinggi tidak secara otomatis merupakan kegagalan keselamatan: banyak peringatan yang mengganggu muncul untuk interaksi yang secara klinis tidak signifikan dalam konteksnya, atau mengulangi peringatan yang sudah ditindaklanjuti klinisi sebelumnya dalam set pesanan yang sama, sehingga sistem yang disetel dengan baik dengan sengaja memunculkan lebih sedikit peringatan namun bernilai lebih tinggi, alih-alih berusaha menurunkan tingkat pengabaian ke nol. Yang benar-benar penting bagi keselamatan adalah tren dari waktu ke waktu, distribusi di berbagai tingkat keparahan, dan apakah klinisi mendokumentasikan alasan ketika mereka mengabaikan peringatan dengan keparahan tinggi; tingkat pengabaian yang meningkat pada interaksi keparahan tinggi dengan bukti yang kuat adalah masalah tata kelola yang nyata bahkan ketika rata-rata di semua peringatan tampak stabil.

## Cara menghitungnya

```
Tingkat pengabaian = peringatan yang diabaikan / total peringatan yang muncul × 100

Segmentasikan berdasarkan:
  - tingkat keparahan (misalnya kontraindikasi, mayor, sedang)
  - jenis peringatan (interaksi obat-obat, alergi, terapi duplikat, rentang dosis)
  - apakah alasan pengabaian didokumentasikan

"Tingkat pengabaian yang terdokumentasi" melacak proporsi pengabaian yang
memiliki justifikasi tercatat, yang merupakan ukuran tata kelola tersendiri.
```

## Contoh penerapan

Sistem CPOE sebuah rumah sakit memunculkan 10.000 peringatan interaksi obat-obat dalam sebulan, di mana 8.700 di antaranya diabaikan, menghasilkan tingkat pengabaian keseluruhan sebesar 87%. Segmentasi berdasarkan keparahan menunjukkan bahwa dari 500 peringatan "kontraindikasi", 60 diabaikan (12%), sementara dari 6.000 peringatan "sedang", 5.700 diabaikan (95%). Angka tingkat sedang secara umum konsisten dengan tolok ukur yang dipublikasikan dan bukan dengan sendirinya alasan untuk khawatir; angka tingkat kontraindikasi memerlukan tinjauan kasus individual, dan fakta bahwa hanya 340 dari 500 pengabaian pada tingkat tersebut memiliki alasan terdokumentasi adalah temuan tata kelola yang lebih dapat ditindaklanjuti.

## Sumber data dan peringatan

Log audit rekam medis elektronik, atau modul peringatan vendor CDS itu sendiri, mencatat setiap peristiwa peringatan muncul dan respons peringatan, termasuk apakah klinisi memasukkan justifikasi teks bebas atau terstruktur. Membandingkan tingkat pengabaian antar organisasi, atau bahkan antar departemen dalam organisasi yang sama, memerlukan pemeriksaan bahwa set aturan peringatan dan penjenjangan keparahan yang mendasarinya sama; rumah sakit dengan set aturan yang disetel secara agresif akan menunjukkan tingkat pengabaian yang lebih rendah karena alasan yang tidak ada hubungannya dengan perilaku klinisi.

## Kesalahan umum

- **Memperlakukan tingkat pengabaian mentah sebagai skor keselamatan tunggal**: ini mencampuradukkan pengabaian yang dibenarkan dengan baik atas peringatan bernilai rendah dengan pengabaian yang tidak aman atas interaksi yang benar-benar berbahaya; selalu segmentasikan berdasarkan keparahan.
- **Tidak ada pencatatan alasan pengabaian**: tanpa alasan yang terdokumentasi, mustahil membedakan "peringatan ini salah" dari "peringatan ini benar dan klinisi membuat keputusan yang tidak aman", yang merupakan perbedaan sebenarnya yang penting bagi keselamatan pasien.
- **Inflasi aturan peringatan dari waktu ke waktu**: menambahkan lebih banyak peringatan untuk "berjaga-jaga" tanpa memangkas yang bernilai rendah adalah penyebab langsung meningkatnya tingkat pengabaian dan kelelahan peringatan; tata kelola peringatan harus mencakup tinjauan rutin dan penghentian aturan yang berkinerja buruk, bukan hanya pemantauan.
- **Membandingkan tingkat antar sistem dengan desain interupsi yang berbeda**: peringatan interupsi yang bersifat hard-stop menghasilkan perilaku pengabaian yang berbeda dari peringatan pasif yang tidak memblokir, sehingga keduanya bukan metrik yang dapat dibandingkan secara langsung.

## Sumber

- Literatur yang ditinjau sejawat mengenai kelelahan peringatan dukungan keputusan klinis, banyak dipublikasikan di jurnal termasuk JAMIA dan npj Digital Medicine
- ONC / HealthIT.gov, panduan keselamatan IT kesehatan mengenai dukungan keputusan klinis
- Institute for Safe Medication Practices (ISMP), panduan mengenai desain dan tata kelola peringatan CDS
