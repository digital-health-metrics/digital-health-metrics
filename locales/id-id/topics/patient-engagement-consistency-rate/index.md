# Tingkat Konsistensi Keterlibatan Pasien

Tingkat konsistensi keterlibatan pasien mengukur seberapa teratur seorang pasien terdaftar berinteraksi dengan produk kesehatan digital seiring waktu — misalnya mencatat makanan atau gejala, merekam aktivitas fisik, atau melihat data kesehatan — bukan sekadar apakah mereka pernah menggunakannya sama sekali. Ini adalah metrik longitudinal, berbeda dari hitungan penggunaan aktif pada satu titik waktu: dua pasien dapat memiliki status "menggunakan aplikasi bulan ini" yang identik sementara satu mencatat secara konsisten setiap hari dan yang lain mencatat sekali lalu menghilang selama tiga minggu, dan hanya metrik konsistensi yang membedakan keduanya.

## Mengapa Ini Penting

Interaksi yang berkelanjutan dan teratur dengan alat kesehatan digital adalah salah satu indikator utama yang lebih andal dari manfaat klinis, khususnya untuk kondisi yang bergantung pada perilaku seperti diabetes, manajemen berat badan, dan kesehatan mental, di mana nilai alat tersebut berasal dari kebiasaan yang didukungnya, bukan dari sesi tunggal mana pun. Sebuah produk dapat melaporkan jumlah pengguna aktif bulanan yang sehat sementara sebenarnya melayani populasi yang login sekali lalu menghilang, karena penggunaan aktif bulanan adalah ambang batas rendah yang tidak mengatakan apa pun tentang pola penggunaan dalam bulan tersebut; metrik konsistensi menangkap ini dengan cara yang tidak dapat dilakukan oleh hitungan aktivitas sederhana. Karena konsistensi juga merupakan salah satu hal yang lebih sulit dipertahankan selama berbulan-bulan daripada berminggu-minggu, ini adalah sinyal yang lebih jujur tentang kualitas produk dan kesesuaian klinis daripada angka keterlibatan jendela pendek, yang rentan terhadap efek kebaruan segera setelah onboarding.

## Cara Menghitungnya

```
Tingkat konsistensi keterlibatan = minggu dengan setidaknya satu
                                    interaksi yang memenuhi syarat /
                                    total minggu terdaftar × 100

"Interaksi yang memenuhi syarat" harus didefinisikan secara eksplisit
dan konsisten (misalnya entri catatan makanan, check-in gejala, atau
sinkronisasi aktivitas yang selesai) — tidak pernah peristiwa pasif
seperti membuka aplikasi tanpa tindakan yang dicatat.

Laporkan sebagai distribusi, bukan hanya rata-rata populasi:
  misalnya proporsi pasien dengan konsistensi mingguan ≥ 80%,
       proporsi dengan 50-79%, proporsi dengan < 50%
```

## Contoh Perhitungan

Sebuah aplikasi pelatihan nutrisi mendaftarkan seorang pasien selama 12 minggu. Pasien tersebut mencatat setidaknya satu entri makanan yang memenuhi syarat dalam 9 dari 12 minggu tersebut, memberikan tingkat konsistensi keterlibatan individu 9 / 12 × 100 = 75%. Di seluruh kohort penuh aplikasi yang terdiri dari 2.000 pasien yang terdaftar setidaknya 12 minggu, 600 pasien (30%) mempertahankan konsistensi mingguan ≥ 80%, 900 (45%) jatuh dalam rentang 50-79%, dan 500 (25%) jatuh di bawah 50%. Melaporkan hanya rata-rata kohort (yang mungkin berada sekitar 65%) akan mengaburkan bahwa seperempat penuh pasien hampir tidak terlibat sama sekali — segmen yang layak diselidiki secara terpisah daripada dilarutkan ke dalam rata-rata keseluruhan.

## Sumber Data dan Catatan Penting

Data konsistensi berasal dari log peristiwa produk itu sendiri (entri makanan, sinkronisasi aktivitas, check-in), dan definisi "interaksi yang memenuhi syarat" memiliki efek yang sangat besar pada tingkat yang dihasilkan — definisi yang longgar (membuka aplikasi apa pun) akan selalu terlihat lebih baik daripada yang ketat (entri catatan yang lengkap dan bermakna), sehingga definisi yang digunakan harus dinyatakan dengan jelas bersama angka yang dilaporkan. Data yang disinkronkan secara otomatis (misalnya pelacak kebugaran yang terhubung menyinkronkan aktivitas di latar belakang) harus dilaporkan secara terpisah dari data yang dicatat secara manual, karena sinkronisasi otomatis dapat meningkatkan konsistensi yang tampak tanpa mencerminkan upaya aktif pasien atau keterlibatan dengan panduan produk.

## Jebakan Umum

- **Mencampuradukkan pembukaan aplikasi dengan keterlibatan yang bermakna**: pembukaan aplikasi secara pasif (misalnya dipicu oleh notifikasi push) tidak sama dengan entri makanan yang dicatat atau check-in yang selesai; definisikan dan laporkan hanya interaksi yang memenuhi syarat.
- **Melaporkan hanya rata-rata populasi**: tingkat konsistensi rata-rata yang terlihat sehat dapat menyembunyikan populasi bimodal pasien yang sangat terlibat dan hampir sepenuhnya tidak terlibat; laporkan distribusi di seluruh rentang konsistensi, bukan hanya rata-rata.
- **Mengabaikan penyebut panjang pendaftaran**: membandingkan tingkat konsistensi antara pasien yang terdaftar untuk jangka waktu yang sangat berbeda tanpa memperhitungkan durasi pendaftaran akan bias ke arah kelompok mana pun yang memiliki jendela pengukuran lebih pendek dan lebih mudah dipertahankan.
- **Sinkronisasi latar belakang otomatis meningkatkan tingkat**: aliran data wearable yang disinkronkan secara pasif dapat membuat pasien yang tidak terlibat tampak aktif secara konsisten tanpa perubahan perilaku nyata atau keterlibatan produk dari pihak mereka.

## Sumber

- Literatur yang ditinjau sejawat tentang pola keterlibatan kesehatan digital dan hubungannya dengan hasil klinis, misalnya studi yang diterbitkan di Journal of Medical Internet Research (JMIR)
- American Medical Informatics Association (AMIA), panduan tentang kualitas data kesehatan yang dihasilkan pasien dan pengukuran keterlibatan
- Digital Therapeutics Alliance, panduan praktik terbaik tentang pengukuran keterlibatan dan hasil untuk terapeutik digital

Lihat juga: [tingkat retensi pengguna](../user-retention-rate/), metrik terkait erat tentang apakah seorang pasien tetap terdaftar sama sekali, berbeda dari seberapa konsisten mereka terlibat saat terdaftar.
