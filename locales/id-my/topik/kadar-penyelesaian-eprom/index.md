# Kadar Penyelesaian ePROM

Kadar penyelesaian ePROM mengukur proporsi Patient-Reported Outcome Measures (ePROM) elektronik terjadwal — kuesioner standar dan tervalidasi yang menangkap catatan pesakit sendiri tentang gejala, fungsi, atau kualiti hidup mereka, disampaikan secara digital alih-alih di atas kertas — yang benar-benar diselesaikan. Ini adalah metrik kualiti data sekaligus metrik keterlibatan: nilai klinis dan penelitian sebuah program PROM sepenuhnya bergantung pada kadar penyelesaian yang cukup tinggi sehingga respons yang dikumpulkan representatif terhadap seluruh populasi terdaftar, bukan hanya subset yang paling terlibat atau paling sedikit gejalanya.

## Mengapa Ini Penting

Hasil yang dilaporkan pesakit adalah pelengkap langsung yang dijamin pesakit terhadap data yang dicatat klinisi atau diukur perangkat, menangkap dimensi kesihatan — nyeri, fungsi, kualiti hidup — yang tidak dapat ditangkap oleh tinjauan rekam medis atau pembacaan biometrik; digitalisasi pengumpulan PROM ada secara khusus untuk membuat data ini lebih murah dan lebih mudah dikumpulkan dalam skala besar daripada yang pernah memungkinkan administrasi berbasis kertas. Tetapi sebuah program PROM dengan kadar penyelesaian rendah berisiko mengalami bias yang spesifik dan serius: pesakit yang merasa lebih buruk sering kali lebih kecil kemungkinannya untuk menyelesaikan kuesioner yang panjang, sehingga kadar penyelesaian yang menurun itu sendiri dapat menjadi tanda peringatan dini memburuknya kesihatan populasi, dan kadar penyelesaian keseluruhan yang rendah dapat membuat respons yang dikumpulkan terlihat lebih baik daripada pengalaman populasi sebenarnya hanya kerana pesakit yang paling bergejala kurang terwakili dalam apa yang diselesaikan. Inilah mengapa kadar penyelesaian harus selalu dilaporkan bersama skor PROM itu sendiri, bukan diperlakukan sebagai detail operasional sekunder.

## Cara Menghitungnya

```
Kadar penyelesaian ePROM = ePROM yang diselesaikan sepenuhnya / ePROM
                              yang dikirim atau dijadwalkan × 100

Laporkan secara terpisah untuk:
  Kadar penyelesaian awal     (kuesioner pertama dalam urutan
                                 pemantauan)
  Kadar penyelesaian longitudinal (kuesioner berikutnya dalam urutan
                                 pemantauan yang sedang berlangsung,
                                 yang biasanya menurun seiring waktu
                                 dan harus dilacak sebagai tren, bukan
                                 satu angka)

Kuesioner yang "diselesaikan sebagian" harus didefinisikan dan
dilaporkan secara terpisah dari "diselesaikan sepenuhnya" maupun
"tidak dimulai".
```

## Contoh Perhitungan

Sebuah klinik onkologi mengirimkan ePROM beban gejala yang tervalidasi kepada 400 pesakit sebelum setiap kunjungan tindak lanjut bulanan. Pada bulan pertama, 340 pesakit menyelesaikan kuesioner sepenuhnya (kadar penyelesaian 85%), 30 menyelesaikan sebagian, dan 30 tidak memulainya. Pada bulan keenam dari urutan pemantauan yang sama, respons lengkap telah turun menjadi 260 dari kohort 400 pesakit yang sama (65%), penurunan longitudinal yang bermakna yang akan sepenuhnya terlewat jika hanya angka 85% bulan pertama dilaporkan sebagai metrik keseluruhan statis. Menyelidiki pesakit mana yang berhenti (berdasarkan keparahan gejala, stadium penyakit, atau usia) dapat mengungkap apakah penurunan tersebut mencerminkan kelelahan survei, gejala yang memburuk membuat kuesioner lebih sulit diselesaikan, atau hambatan akses teknis.

## Sumber Data dan Catatan Penting

Data penyelesaian berasal dari log pengiriman dan respons platform ePROM itu sendiri, yang dapat membedakan status "tidak dimulai", "diselesaikan sebagian", dan "diselesaikan sepenuhnya" — perbedaan yang harus selalu dipertahankan dan dilaporkan, bukan diringkas menjadi angka biner selesai/tidak selesai, kerana penyelesaian sebagian sering menunjukkan titik tertentu dalam kuesioner di mana pesakit kesulitan atau berhenti. Kadar penyelesaian harus ditafsirkan bersama cara kuesioner disampaikan (tautan pesan teks, notifikasi aplikasi, atau metode pengiriman yang memerlukan login portal), kerana friksi pengiriman itu sendiri memengaruhi penyelesaian terlepas dari isi kuesioner atau kondisi dasar pesakit. Instrumen yang tervalidasi (bukan seperangkat pertanyaan ad hoc) harus selalu digunakan untuk PROM itu sendiri, kerana kadar penyelesaian untuk instrumen yang tidak divalidasi tidak mengatakan apa pun yang dapat diandalkan tentang kegunaan klinis data yang dihasilkan bahkan jika penyelesaiannya tinggi.

## Jebakan Umum

- **Memperlakukan kadar penyelesaian yang menurun hanya sebagai masalah pengiriman**: penurunan longitudinal dalam penyelesaian dapat mencerminkan gejala pesakit yang benar-benar memburuk (pesakit terlalu tidak sehat untuk menyelesaikan survei) daripada kelelahan survei atau masalah teknis, dan perbedaan ini sangat penting untuk interpretasi klinis.
- **Meringkas penyelesaian sebagian dan penuh menjadi satu kategori**: kuesioner yang diselesaikan sebagian secara bermakna berbeda kualiti datanya dari yang diselesaikan sepenuhnya; laporkan secara terpisah, dan selidiki di bagian mana alur kuesioner pesakit cenderung meninggalkannya.
- **Melaporkan kadar penyelesaian tanpa melaporkan risiko bias respons**: kadar penyelesaian sedang harus memicu penyelidikan apakah responden berbeda secara sistematis (dalam keparahan gejala, usia, literasi digital) dari non-responden, kerana skor PROM yang dihitung hanya dari responden dapat salah menggambarkan seluruh populasi.
- **Menggunakan kuesioner yang tidak tervalidasi atau buatan sendiri**: kadar penyelesaian tidak berarti sebagai sinyal kualiti data jika instrumen yang diselesaikan itu sendiri belum divalidasi secara klinis untuk kondisi dan populasi yang diukur.

## Sumber

- International Consortium for Health Outcomes Measurement (ICHOM), panduan pengembangan set standar dan implementasi PROM
- U.S. Food and Drug Administration (FDA), panduan tentang ukuran hasil yang dilaporkan pesakit dalam uji klinis dan pengajuan regulasi
- Literatur yang ditinjau sejawat tentang implementasi dan kadar penyelesaian PROM elektronik, misalnya studi yang diterbitkan di Quality of Life Research dan Journal of Medical Internet Research (JMIR)

Lihat juga: [skor net promoter pesakit](../skor-net-promoter-pesakit/), metrik yang dilaporkan pesakit terkait tetapi berbeda yang mengukur kepuasan, bukan hasil klinis.
