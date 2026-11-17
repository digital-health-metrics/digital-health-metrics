# Kadar Ketidakhadiran Janji Temu

Kadar ketidakhadiran janji temu (juga disebut kadar "did not attend", atau DNA) adalah proporsi janji temu terjadwal di mana pesakit tidak hadir maupun membatalkan dengan pemberitahuan yang wajar. Ini adalah salah satu metrik operasional tertua dalam perkhidmatan kesihatan, dan alat digital, khususnya pengingat, penjadwalan ulang mandiri, dan pemesanan berbasis portal, kini menjadi salah satu pengungkit paling efektif dan berbasis bukti terbaik untuk menguranginya.

## Mengapa ini penting

Setiap ketidakhadiran adalah unit kapasitas klinis yang biasanya tidak dapat dipulihkan, kerana sebagian besar layanan tidak dapat mengisi celah hari yang sama dalam waktu singkat, sehingga kadar ini secara langsung mendorong panjang daftar tunggu, biaya per janji temu yang selesai, dan waktu klinisi yang hilang. Perilaku ketidakhadiran tidak terdistribusi secara merata: hal ini berkorelasi dengan kemiskinan, akses transportasi, tanggung jawab pengasuhan, dan beban mengelola berbagai kondisi jangka panjang, sehingga memperlakukan kadar tinggi semata-mata sebagai masalah perilaku pesakit, alih-alih sebagian sebagai sinyal tentang hambatan akses, cenderung menghasilkan intervensi (seperti sanksi umum) yang justru memperkuat ketidaksetaraan alih-alih menguranginya. Pengingat digital dan penjadwalan ulang digital yang mudah secara konsisten menjadi salah satu intervensi paling efektif dan berbiaya rendah yang tersedia, itulah sebabnya metrik ini sangat layak masuk dalam program pengukuran kesihatan digital, bukan hanya dalam pelaporan operasional.

## Cara menghitungnya

```
Kadar ketidakhadiran = janji temu yang ditandai "did not attend" / total janji temu terjadwal × 100
```

Sebuah janji temu terjadwal biasanya dikecualikan dari penyebut, atau dipindahkan ke kategori terpisah, jika dibatalkan oleh salah satu pihak dengan pemberitahuan lebih dari periode tertentu (umumnya 24 jam). Pembatalan terlambat (di bawah periode pemberitahuan tersebut) biasanya dilaporkan secara terpisah dari ketidakhadiran sejati, kerana implikasi operasional dan perilakunya berbeda.

## Contoh penerapan

Sebuah klinik komunitas menjadwalkan 2.000 janji temu dalam sebulan. Dari jumlah tersebut, 140 dibatalkan dengan pemberitahuan lebih dari 24 jam (dijadwal ulang dan dikecualikan dari penyebut), 60 dibatalkan terlambat (kurang dari 24 jam), dan 180 dicatat sebagai ketidakhadiran sejati tanpa kontak sama sekali. Kadar ketidakhadiran adalah 180 / 2.000 × 100 = 9%. Jika 60 pembatalan terlambat tersebut digabungkan ke dalam kategori yang sama dengan ketidakhadiran sejati, kadar yang dilaporkan akan naik menjadi 12%, itulah sebabnya definisi yang digunakan harus selalu dinyatakan bersama angka tersebut.

## Sumber data dan peringatan

Sistem penjadwalan atau manajemen praktik adalah sumber utama, menggunakan kode status janji temunya; kualiti metrik ini sepenuhnya bergantung pada konsistensi staf dalam menggunakan status yang benar daripada kategori "dibatalkan" yang umum untuk segala sesuatu. Organisasi yang memperkenalkan pengingat digital (SMS, notifikasi push aplikasi, atau peringatan portal) harus mengukur kadar ketidakhadiran sebelum dan sesudah perubahan untuk campuran pesakit dan layanan yang sebanding, kerana efektivitas pengingat telah terdokumentasi dengan baik dalam studi acak dan observasional tetapi bervariasi menurut populasi dan saluran.

## Kesalahan umum

- **Membandingkan kadar mentah antar klinik dengan praktik overbooking yang berbeda**: klinik yang sengaja melakukan overbooking untuk mengompensasi kadar ketidakhadiran yang diharapkan akan menunjukkan kadar tampak yang berbeda dari klinik yang tidak melakukannya, terlepas dari perilaku pesakit yang sebenarnya.
- **Menggabungkan pembatalan terlambat dengan ketidakhadiran sejati**: keduanya memiliki penyebab dan solusi digital yang berbeda (masalah pembatalan terlambat sering diselesaikan dengan penjadwalan ulang mandiri yang lebih mudah; masalah ketidakhadiran sejati sering diselesaikan dengan pengingat yang lebih baik dan akurasi kontak).
- **Bias survivorship dari kebijakan pemulangan**: layanan yang memulangkan pesakit setelah ketidakhadiran berulang akan melihat kadar mereka sendiri membaik secara mekanis, sementara hanya memindahkan pesakit yang sama ke tempat lain dalam sistem.
- **Menyalahkan pesakit atas eksklusi digital**: pesakit tanpa telefon bimbit pintar atau layanan teks yang andal tidak akan mendapat manfaat dari strategi pengingat digital saja, sehingga pendekatan multi-saluran (surat, telepon, teks, aplikasi) biasanya diperlukan untuk menghindari pelebaran kesenjangan akses.

## Sumber

- NHS England, janji temu terlewat dalam praktik umum dan perawatan rawat jalan, statistik dan panduan yang dipublikasikan
- Tinjauan sistematis Cochrane tentang intervensi untuk mengurangi janji temu perkhidmatan kesihatan yang terlewat, termasuk sistem pengingat
- Literatur yang ditinjau sejawat mengenai korelasi sosioekonomi dan demografis dari ketidakhadiran janji temu

Lihat juga: [kadar kunjungan telehealth](../kadar-kunjungan-telehealth/), kerana perilaku ketidakhadiran umumnya berbeda menurut modalitas konsultasi, dan [kadar adopsi portal pesakit](../kadar-adopsi-portal-pesakit/), kerana penjadwalan mandiri dan pengingat berbasis portal adalah intervensi digital utama.
