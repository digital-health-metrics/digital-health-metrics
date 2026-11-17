# Kadar Waktu Aktif Perangkat

Kadar waktu aktif perangkat mengukur proporsi waktu pemantauan terjadwal di mana perangkat kesihatan yang terhubung — sensor pemantauan pesakit jarak jauh, wearable, atau unit telehealth rumah — benar-benar daring, mentransmisikan data, dan berfungsi dengan benar, bukan offline, terputus, atau mengalami malfungsi. Ini adalah metrik infrastruktur dasar di balik setiap program pemantauan jarak jauh atau perangkat terhubung: sebuah peringatan klinis, tren biometrik, atau angka keterlibatan yang dihitung dari perangkat yang sering offline hanya seandal konektivitas di baliknya.

## Mengapa Ini Penting

Seluruh proposisi nilai klinis program pemantauan pesakit jarak jauh bergantung pada penangkapan data yang berkelanjutan atau hampir berkelanjutan; perangkat dengan waktu aktif yang buruk menciptakan celah diam dalam gambaran klinis pesakit yang dapat disalahartikan sebagai stabilitas (tidak ada peringatan kerana tidak ada data, bukan kerana tidak ada yang berubah) daripada diidentifikasi dengan benar sebagai kegagalan pemantauan. Waktu aktif perangkat juga merupakan indikator utama biaya program dan pengalaman pesakit: perangkat yang sering kehilangan koneksi menghasilkan panggilan dukungan, frustrasi pesakit, dan berpotensi penjangkauan klinis yang tidak perlu untuk memeriksa apakah celah data mencerminkan peristiwa klinis nyata atau sekadar kesalahan teknis. Karena kegagalan waktu aktif perangkat sering dapat diatribusikan pada infrastruktur yang dikendalikan organisasi (gateway seluler yang dikonfigurasi buruk, cakupan Wi-Fi lemah di rumah pesakit, armada perangkat yang kurang terawat) daripada pesakit, metrik ini sepenuhnya menjadi tanggung jawab tim vendor dan operasi teknis, tidak dilipat secara sembarangan ke dalam metrik keterlibatan pesakit.

## Cara Menghitungnya

```
Kadar waktu aktif perangkat = waktu perangkat daring dan
                                 mentransmisikan data valid / total
                                 waktu pemantauan terjadwal × 100

Segmentasikan akar penyebab waktu tidak aktif di mana data
memungkinkan:
  Kegagalan sisi-perangkat  (baterai, kerusakan perangkat keras,
                            crash firmware)
  Kegagalan konektivitas    (putus seluler/Wi-Fi/VPN)
  Faktor sisi-pesakit        (perangkat dimatikan, dipindahkan di luar
                            jangkauan)

Parameter teknis pendukung untuk dilacak bersama waktu aktif:
  Rata-rata penggunaan CPU, penggunaan memori, dan kadar baterai
  per perangkat
  Rata-rata waktu antara kegagalan konektivitas
  Rata-rata waktu untuk terhubung kembali setelah putus
```

## Contoh Perhitungan

Sebuah program pemantauan jantung jarak jauh menyebarkan 1.000 perangkat terhubung, masing-masing diharapkan mentransmisikan secara berkelanjutan. Selama bulan 30 hari (720 jam pemantauan terjadwal per perangkat), armada tersebut mencatat gabungan 705.600 jam daring aktual dari 720.000 jam terjadwal, memberikan kadar waktu aktif perangkat armada-lebar sebesar 705.600 / 720.000 × 100 = 98%. Analisis akar penyebab dari 14.400 jam waktu tidak aktif menunjukkan 60% diatribusikan pada putus konektivitas seluler yang terkonsentrasi di wilayah layanan pedesaan tertentu, 25% pada perangkat dengan baterai menua yang ditandai untuk penggantian, dan 15% pada pesakit yang sementara mematikan perangkat mereka. Pemecahan ini menunjuk pada dua intervensi yang jelas dan berbeda — perbaikan konektivitas untuk wilayah yang terdampak dan program penggantian baterai proaktif — yang tidak akan dibedakan oleh satu angka waktu aktif agregat.

## Sumber Data dan Catatan Penting

Data waktu aktif berasal dari sistem manajemen perangkat dan telemetri milik produsen perangkat atau vendor platform itu sendiri, yang mencatat peristiwa koneksi dan detak jantung per perangkat; organisasi harus mengonfirmasi persis apa yang dihitung vendor sebagai "daring" (sebuah perangkat dapat melaporkan dirinya terhubung ke jaringan sambil gagal mentransmisikan data klinis yang valid, yang harus dihitung sebagai waktu tidak aktif untuk tujuan klinis bahkan jika dasbor vendor sendiri melaporkannya terhubung). Waktu aktif harus dilaporkan per kohort perangkat atau geografi di mana volume memungkinkan, kerana kualiti konektivitas sering terkelompok secara geografis (cakupan seluler pedesaan, Wi-Fi gedung tua) daripada terdistribusi merata di seluruh populasi pesakit, dan angka armada-lebar agregat dapat menyembunyikan masalah regional yang parah dan dapat ditangani.

## Jebakan Umum

- **Mencampuradukkan koneksi jaringan dengan transmisi data yang valid**: sebuah perangkat dapat tampak "terhubung" pada dasbor vendor sambil gagal mentransmisikan data klinis yang dapat digunakan; definisikan dan ukur waktu aktif terhadap penerimaan data valid aktual, bukan konektivitas jaringan mentah saja.
- **Melaporkan hanya rata-rata armada-lebar**: ini dapat menyembunyikan masalah waktu tidak aktif yang parah dan spesifik secara geografis atau kohort-perangkat yang akan diungkap oleh rata-rata yang ditargetkan dan yang memiliki perbaikan spesifik dan dapat ditangani.
- **Tidak membedakan akar penyebab waktu tidak aktif**: waktu tidak aktif sisi-perangkat, konektivitas, dan sisi-pesakit masing-masing memerlukan intervensi yang sama sekali berbeda; satu peratusan waktu tidak aktif tanpa segmentasi akar penyebab tidak dapat ditindaklanjuti.
- **Memperlakukan celah data sebagai stabilitas klinis secara default**: aliran data yang hilang dari perangkat offline harus memicu pemeriksaan konektivitas-teknis, bukan diam-diam ditafsirkan sebagai "tidak ada kabar adalah kabar baik" untuk status klinis pesakit.

## Sumber

- Continua Design Guidelines / Personal Connected Health Alliance, standar interoperabilitas teknis untuk perangkat kesihatan terhubung
- ONC / HealthIT.gov, panduan tentang implementasi program pemantauan pesakit jarak jauh dan persyaratan teknis
- Literatur yang ditinjau sejawat tentang keandalan perangkat pemantauan pesakit jarak jauh dan kelengkapan data, misalnya studi yang diterbitkan di npj Digital Medicine

Lihat juga: [akurasi perutean triase](../akurasi-perutean-triase/), yang bergantung pada penerimaan data perangkat yang lengkap dan andal untuk membuat keputusan triase yang benar sejak awal.
