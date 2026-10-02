# Tingkat Retensi Pengguna

Tingkat retensi pengguna adalah proporsi pengguna yang aktif pada periode awal yang tetap aktif pada periode selanjutnya, dan kebalikannya, tingkat churn (atau putus), adalah proporsi yang berhenti menggunakan produk sama sekali. Di mana tingkat adopsi portal pasien (lihat topik tersebut) mengukur apakah seorang pasien pernah mengaktifkan produk kesehatan digital secara bermakna, retensi mengukur apakah mereka terus menggunakannya — dan untuk produk kesehatan digital bergaya langganan atau perawatan berkelanjutan mana pun, retensi biasanya merupakan satu-satunya metrik yang paling erat terkait dengan baik dampak klinis maupun keberlanjutan komersial.

## Mengapa Ini Penting

Sebuah produk kesehatan digital yang tidak dapat mempertahankan pengguna tidak dapat memberikan manfaat klinis yang berkelanjutan, betapapun kuatnya angka adopsi atau aktivasi awalnya: alat manajemen kondisi kronis yang digunakan selama dua minggu lalu ditinggalkan tidak mungkin menggerakkan hasil biometrik yang bergantung pada perubahan perilaku berkelanjutan selama berbulan-bulan. Retensi juga merupakan salah satu metrik yang paling konsekuensial secara komersial yang dilaporkan perusahaan kesehatan digital kepada investor dan pembayar, karena kurva retensi (bentuk penurunan seiring waktu, bukan hanya satu persentase retensi) mengungkapkan apakah produk telah menemukan pola penggunaan yang benar-benar berkelanjutan atau hanya menangkap minat awal yang didorong kebaruan yang memudar secara dapat diprediksi. Kurva retensi yang mendatar setelah penurunan awal (pasien yang melewati bulan pertama cenderung bertahan) adalah sinyal yang sangat berbeda, dan jauh lebih sehat, daripada yang terus menurun secara stabil tanpa batas bawah.

## Cara Menghitungnya

```
Tingkat retensi (periode N) = pengguna aktif pada periode N yang juga
                               aktif pada periode kohort awal /
                               pengguna pada periode kohort awal × 100

Tingkat churn = 1 − tingkat retensi (untuk periode yang sama)

Laporkan sebagai kurva retensi kohort (retensi pada hari/minggu/bulan
1, 2, 3…), bukan satu angka pada satu titik waktu, karena satu
cuplikan mencampuradukkan pengguna yang baru bergabung (yang belum
sempat churn) dengan yang telah lama terdaftar.
```

## Contoh Perhitungan

Sebuah aplikasi kesehatan digital mendaftarkan kohort 1.000 pengguna baru pada bulan Januari. Pada akhir bulan 1, 640 dari 1.000 pengguna asli tersebut masih aktif (retensi bulan-1 64%). Pada akhir bulan 3, 410 tetap aktif (retensi bulan-3 41%). Pada bulan 6, 380 tetap aktif (retensi bulan-6 38%). Bentuk kurva ini — penurunan awal yang tajam diikuti pendataran antara bulan 3 dan 6 — menunjukkan produk mempertahankan inti pengguna yang stabil setelah mereka melewati hambatan adopsi awal, yang merupakan sinyal yang secara material berbeda dan lebih menggembirakan daripada jika penurunan dari bulan 3 ke bulan 6 terus berlanjut pada tingkat yang sama seperti bulan 1 hingga 3.

## Sumber Data dan Catatan Penting

Retensi dihitung dari log peristiwa login atau aktivitas produk itu sendiri, mendefinisikan "aktif" secara konsisten (misalnya, setidaknya satu sesi yang memenuhi syarat dalam periode tersebut) di seluruh setiap kohort yang dibandingkan. Kohort harus dibandingkan secara setara — definisi awal "aktif" yang sama, panjang jendela observasi yang sama — karena bahkan perbedaan definisi kecil (bulan 30 hari versus 28 hari, atau ambang batas "aktif" yang lebih ketat versus lebih longgar) dapat menggeser persentase retensi yang dilaporkan beberapa poin tanpa perbedaan nyata dalam perilaku pengguna. Efek musiman umum terjadi pada aplikasi kesehatan yang terkait dengan resolusi Tahun Baru atau periode kesadaran kesehatan tertentu, sehingga perbandingan kohort tahun-ke-tahun biasanya lebih informatif daripada membandingkan kohort berdekatan dari waktu yang berbeda dalam setahun.

## Jebakan Umum

- **Melaporkan satu cuplikan retensi alih-alih kurva**: satu angka "X% pengguna masih aktif" tanpa bentuk penurunan seiring waktu tidak dapat membedakan produk yang mendatar (sehat) dari yang terus menurun (tidak sehat).
- **Mengubah definisi "aktif" antar periode pelaporan**: melonggarkan definisi pengguna aktif (misalnya menghitung pembukaan aplikasi pasif alih-alih tindakan yang selesai) dapat membuat retensi tampak membaik padahal penggunaan sebenarnya tidak berubah sama sekali.
- **Mengabaikan musiman kohort**: membandingkan retensi kohort Januari (sering meningkat karena pendaftaran resolusi Tahun Baru, yang rata-rata membawa kohort yang kurang termotivasi) dengan kohort yang diperoleh pada waktu lain dalam setahun dapat menghasilkan kesimpulan tren yang menyesatkan.
- **Mencampur kohort akuisisi organik dan berbayar**: pengguna yang diperoleh melalui saluran berbeda sering mempertahankan dengan sangat berbeda; mencampurnya menjadi satu angka retensi agregat dapat menyembunyikan masalah retensi spesifik-saluran.

## Sumber

- Literatur yang ditinjau sejawat tentang keterlibatan dan atrisi aplikasi kesehatan digital, misalnya studi yang diterbitkan di Journal of Medical Internet Research (JMIR mHealth and uHealth)
- Digital Therapeutics Alliance, panduan praktik terbaik tentang pengukuran keterlibatan dan retensi untuk terapeutik digital
- Laporan tolok ukur industri tentang retensi aplikasi kesehatan seluler, dari platform analitik dan organisasi riset pasar kesehatan digital

Lihat juga: [tingkat konsistensi keterlibatan pasien](../patient-engagement-consistency-rate/), yang mengukur kualitas keterlibatan di antara pengguna yang dipertahankan, berbeda dari apakah mereka tetap terdaftar sama sekali.
