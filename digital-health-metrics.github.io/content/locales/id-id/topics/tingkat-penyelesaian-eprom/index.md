# Tingkat Penyelesaian ePROM

Tingkat penyelesaian ePROM mengukur proporsi Patient-Reported Outcome Measures (ePROM) elektronik terjadwal — kuesioner standar dan tervalidasi yang menangkap catatan pasien sendiri tentang gejala, fungsi, atau kualitas hidup mereka, disampaikan secara digital alih-alih di atas kertas — yang benar-benar diselesaikan. Ini adalah metrik kualitas data sekaligus metrik keterlibatan: nilai klinis dan penelitian sebuah program PROM sepenuhnya bergantung pada tingkat penyelesaian yang cukup tinggi sehingga respons yang dikumpulkan representatif terhadap seluruh populasi terdaftar, bukan hanya subset yang paling terlibat atau paling sedikit gejalanya.

## Mengapa Ini Penting

Hasil yang dilaporkan pasien adalah pelengkap langsung yang dijamin pasien terhadap data yang dicatat klinisi atau diukur perangkat, menangkap dimensi kesehatan — nyeri, fungsi, kualitas hidup — yang tidak dapat ditangkap oleh tinjauan rekam medis atau pembacaan biometrik; digitalisasi pengumpulan PROM ada secara khusus untuk membuat data ini lebih murah dan lebih mudah dikumpulkan dalam skala besar daripada yang pernah memungkinkan administrasi berbasis kertas. Tetapi sebuah program PROM dengan tingkat penyelesaian rendah berisiko mengalami bias yang spesifik dan serius: pasien yang merasa lebih buruk sering kali lebih kecil kemungkinannya untuk menyelesaikan kuesioner yang panjang, sehingga tingkat penyelesaian yang menurun itu sendiri dapat menjadi tanda peringatan dini memburuknya kesehatan populasi, dan tingkat penyelesaian keseluruhan yang rendah dapat membuat respons yang dikumpulkan terlihat lebih baik daripada pengalaman populasi sebenarnya hanya karena pasien yang paling bergejala kurang terwakili dalam apa yang diselesaikan. Inilah mengapa tingkat penyelesaian harus selalu dilaporkan bersama skor PROM itu sendiri, bukan diperlakukan sebagai detail operasional sekunder.

## Cara Menghitungnya

```
Tingkat penyelesaian ePROM = ePROM yang diselesaikan sepenuhnya / ePROM
                              yang dikirim atau dijadwalkan × 100

Laporkan secara terpisah untuk:
  Tingkat penyelesaian awal     (kuesioner pertama dalam urutan
                                 pemantauan)
  Tingkat penyelesaian longitudinal (kuesioner berikutnya dalam urutan
                                 pemantauan yang sedang berlangsung,
                                 yang biasanya menurun seiring waktu
                                 dan harus dilacak sebagai tren, bukan
                                 satu angka)

Kuesioner yang "diselesaikan sebagian" harus didefinisikan dan
dilaporkan secara terpisah dari "diselesaikan sepenuhnya" maupun
"tidak dimulai".
```

## Contoh Perhitungan

Sebuah klinik onkologi mengirimkan ePROM beban gejala yang tervalidasi kepada 400 pasien sebelum setiap kunjungan tindak lanjut bulanan. Pada bulan pertama, 340 pasien menyelesaikan kuesioner sepenuhnya (tingkat penyelesaian 85%), 30 menyelesaikan sebagian, dan 30 tidak memulainya. Pada bulan keenam dari urutan pemantauan yang sama, respons lengkap telah turun menjadi 260 dari kohort 400 pasien yang sama (65%), penurunan longitudinal yang bermakna yang akan sepenuhnya terlewat jika hanya angka 85% bulan pertama dilaporkan sebagai metrik keseluruhan statis. Menyelidiki pasien mana yang berhenti (berdasarkan keparahan gejala, stadium penyakit, atau usia) dapat mengungkap apakah penurunan tersebut mencerminkan kelelahan survei, gejala yang memburuk membuat kuesioner lebih sulit diselesaikan, atau hambatan akses teknis.

## Sumber Data dan Catatan Penting

Data penyelesaian berasal dari log pengiriman dan respons platform ePROM itu sendiri, yang dapat membedakan status "tidak dimulai", "diselesaikan sebagian", dan "diselesaikan sepenuhnya" — perbedaan yang harus selalu dipertahankan dan dilaporkan, bukan diringkas menjadi angka biner selesai/tidak selesai, karena penyelesaian sebagian sering menunjukkan titik tertentu dalam kuesioner di mana pasien kesulitan atau berhenti. Tingkat penyelesaian harus ditafsirkan bersama cara kuesioner disampaikan (tautan pesan teks, notifikasi aplikasi, atau metode pengiriman yang memerlukan login portal), karena friksi pengiriman itu sendiri memengaruhi penyelesaian terlepas dari isi kuesioner atau kondisi dasar pasien. Instrumen yang tervalidasi (bukan seperangkat pertanyaan ad hoc) harus selalu digunakan untuk PROM itu sendiri, karena tingkat penyelesaian untuk instrumen yang tidak divalidasi tidak mengatakan apa pun yang dapat diandalkan tentang kegunaan klinis data yang dihasilkan bahkan jika penyelesaiannya tinggi.

## Jebakan Umum

- **Memperlakukan tingkat penyelesaian yang menurun hanya sebagai masalah pengiriman**: penurunan longitudinal dalam penyelesaian dapat mencerminkan gejala pasien yang benar-benar memburuk (pasien terlalu tidak sehat untuk menyelesaikan survei) daripada kelelahan survei atau masalah teknis, dan perbedaan ini sangat penting untuk interpretasi klinis.
- **Meringkas penyelesaian sebagian dan penuh menjadi satu kategori**: kuesioner yang diselesaikan sebagian secara bermakna berbeda kualitas datanya dari yang diselesaikan sepenuhnya; laporkan secara terpisah, dan selidiki di bagian mana alur kuesioner pasien cenderung meninggalkannya.
- **Melaporkan tingkat penyelesaian tanpa melaporkan risiko bias respons**: tingkat penyelesaian sedang harus memicu penyelidikan apakah responden berbeda secara sistematis (dalam keparahan gejala, usia, literasi digital) dari non-responden, karena skor PROM yang dihitung hanya dari responden dapat salah menggambarkan seluruh populasi.
- **Menggunakan kuesioner yang tidak tervalidasi atau buatan sendiri**: tingkat penyelesaian tidak berarti sebagai sinyal kualitas data jika instrumen yang diselesaikan itu sendiri belum divalidasi secara klinis untuk kondisi dan populasi yang diukur.

## Sumber

- International Consortium for Health Outcomes Measurement (ICHOM), panduan pengembangan set standar dan implementasi PROM
- U.S. Food and Drug Administration (FDA), panduan tentang ukuran hasil yang dilaporkan pasien dalam uji klinis dan pengajuan regulasi
- Literatur yang ditinjau sejawat tentang implementasi dan tingkat penyelesaian PROM elektronik, misalnya studi yang diterbitkan di Quality of Life Research dan Journal of Medical Internet Research (JMIR)

Lihat juga: [skor net promoter pasien](../skor-net-promoter-pasien/), metrik yang dilaporkan pasien terkait tetapi berbeda yang mengukur kepuasan, bukan hasil klinis.
