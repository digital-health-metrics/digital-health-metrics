# Tingkat Ketidakhadiran Janji Temu

Tingkat ketidakhadiran janji temu (juga disebut tingkat "did not attend", atau DNA) adalah proporsi janji temu terjadwal di mana pasien tidak hadir maupun membatalkan dengan pemberitahuan yang wajar. Ini adalah salah satu metrik operasional tertua dalam layanan kesehatan, dan alat digital, khususnya pengingat, penjadwalan ulang mandiri, dan pemesanan berbasis portal, kini menjadi salah satu pengungkit paling efektif dan berbasis bukti terbaik untuk menguranginya.

## Mengapa ini penting

Setiap ketidakhadiran adalah unit kapasitas klinis yang biasanya tidak dapat dipulihkan, karena sebagian besar layanan tidak dapat mengisi celah hari yang sama dalam waktu singkat, sehingga tingkat ini secara langsung mendorong panjang daftar tunggu, biaya per janji temu yang selesai, dan waktu klinisi yang hilang. Perilaku ketidakhadiran tidak terdistribusi secara merata: hal ini berkorelasi dengan kemiskinan, akses transportasi, tanggung jawab pengasuhan, dan beban mengelola berbagai kondisi jangka panjang, sehingga memperlakukan tingkat tinggi semata-mata sebagai masalah perilaku pasien, alih-alih sebagian sebagai sinyal tentang hambatan akses, cenderung menghasilkan intervensi (seperti sanksi umum) yang justru memperkuat ketidaksetaraan alih-alih menguranginya. Pengingat digital dan penjadwalan ulang digital yang mudah secara konsisten menjadi salah satu intervensi paling efektif dan berbiaya rendah yang tersedia, itulah sebabnya metrik ini sangat layak masuk dalam program pengukuran kesehatan digital, bukan hanya dalam pelaporan operasional.

## Cara menghitungnya

```
Tingkat ketidakhadiran = janji temu yang ditandai "did not attend" / total janji temu terjadwal × 100
```

Sebuah janji temu terjadwal biasanya dikecualikan dari penyebut, atau dipindahkan ke kategori terpisah, jika dibatalkan oleh salah satu pihak dengan pemberitahuan lebih dari periode tertentu (umumnya 24 jam). Pembatalan terlambat (di bawah periode pemberitahuan tersebut) biasanya dilaporkan secara terpisah dari ketidakhadiran sejati, karena implikasi operasional dan perilakunya berbeda.

## Contoh penerapan

Sebuah klinik komunitas menjadwalkan 2.000 janji temu dalam sebulan. Dari jumlah tersebut, 140 dibatalkan dengan pemberitahuan lebih dari 24 jam (dijadwal ulang dan dikecualikan dari penyebut), 60 dibatalkan terlambat (kurang dari 24 jam), dan 180 dicatat sebagai ketidakhadiran sejati tanpa kontak sama sekali. Tingkat ketidakhadiran adalah 180 / 2.000 × 100 = 9%. Jika 60 pembatalan terlambat tersebut digabungkan ke dalam kategori yang sama dengan ketidakhadiran sejati, tingkat yang dilaporkan akan naik menjadi 12%, itulah sebabnya definisi yang digunakan harus selalu dinyatakan bersama angka tersebut.

## Sumber data dan peringatan

Sistem penjadwalan atau manajemen praktik adalah sumber utama, menggunakan kode status janji temunya; kualitas metrik ini sepenuhnya bergantung pada konsistensi staf dalam menggunakan status yang benar daripada kategori "dibatalkan" yang umum untuk segala sesuatu. Organisasi yang memperkenalkan pengingat digital (SMS, notifikasi push aplikasi, atau peringatan portal) harus mengukur tingkat ketidakhadiran sebelum dan sesudah perubahan untuk campuran pasien dan layanan yang sebanding, karena efektivitas pengingat telah terdokumentasi dengan baik dalam studi acak dan observasional tetapi bervariasi menurut populasi dan saluran.

## Kesalahan umum

- **Membandingkan tingkat mentah antar klinik dengan praktik overbooking yang berbeda**: klinik yang sengaja melakukan overbooking untuk mengompensasi tingkat ketidakhadiran yang diharapkan akan menunjukkan tingkat tampak yang berbeda dari klinik yang tidak melakukannya, terlepas dari perilaku pasien yang sebenarnya.
- **Menggabungkan pembatalan terlambat dengan ketidakhadiran sejati**: keduanya memiliki penyebab dan solusi digital yang berbeda (masalah pembatalan terlambat sering diselesaikan dengan penjadwalan ulang mandiri yang lebih mudah; masalah ketidakhadiran sejati sering diselesaikan dengan pengingat yang lebih baik dan akurasi kontak).
- **Bias survivorship dari kebijakan pemulangan**: layanan yang memulangkan pasien setelah ketidakhadiran berulang akan melihat tingkat mereka sendiri membaik secara mekanis, sementara hanya memindahkan pasien yang sama ke tempat lain dalam sistem.
- **Menyalahkan pasien atas eksklusi digital**: pasien tanpa ponsel pintar atau layanan teks yang andal tidak akan mendapat manfaat dari strategi pengingat digital saja, sehingga pendekatan multi-saluran (surat, telepon, teks, aplikasi) biasanya diperlukan untuk menghindari pelebaran kesenjangan akses.

## Sumber

- NHS England, janji temu terlewat dalam praktik umum dan perawatan rawat jalan, statistik dan panduan yang dipublikasikan
- Tinjauan sistematis Cochrane tentang intervensi untuk mengurangi janji temu layanan kesehatan yang terlewat, termasuk sistem pengingat
- Literatur yang ditinjau sejawat mengenai korelasi sosioekonomi dan demografis dari ketidakhadiran janji temu

Lihat juga: [tingkat kunjungan telehealth](../telehealth-visit-rate/), karena perilaku ketidakhadiran umumnya berbeda menurut modalitas konsultasi, dan [tingkat adopsi portal pasien](../patient-portal-adoption-rate/), karena penjadwalan mandiri dan pengingat berbasis portal adalah intervensi digital utama.
