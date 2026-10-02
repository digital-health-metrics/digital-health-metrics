# Akurasi Perutean Triase

Akurasi perutean triase adalah proporsi pertemuan pasien di mana alat triase otomatis atau berbantuan AI secara benar mengarahkan pasien ke tingkat dan tempat perawatan yang sesuai — misalnya perawatan mandiri, perawatan primer, perawatan mendesak, atau perawatan darurat — sebagaimana dinilai terhadap standar referensi yang divalidasi secara klinis. Ini adalah metrik keselamatan-dan-efektivitas untuk setiap pintu depan digital, pemeriksa gejala, atau sistem triase AI: seluruh proposisi nilai alat tersebut bergantung pada perutean pasien secara benar, cepat, dan konsisten.

## Mengapa Ini Penting

Alat triase yang tidak akurat menyebabkan bahaya dalam dua arah: triase-rendah (mengarahkan pasien ke tingkat perawatan yang lebih rendah dari yang mereka butuhkan) dapat menunda pengobatan untuk keadaan darurat yang sebenarnya, sementara triase-tinggi (mengarahkan pasien ke tingkat perawatan yang lebih tinggi dari yang mereka butuhkan) membuang-buang kapasitas darurat dan mendesak yang langka serta meningkatkan biaya dan kecemasan pasien tanpa manfaat klinis. Karena kedua mode kegagalan ini memiliki konsekuensi yang sangat berbeda, akurasi perutean triase harus selalu dilaporkan bersama arah kesalahan, bukan sebagai satu angka akurasi agregat yang menyembunyikan apakah alat tersebut keliru secara aman atau berbahaya. Regulator dan sistem kesehatan yang mengevaluasi alat triase AI untuk penerapan semakin mewajibkan jenis pelaporan akurasi bertingkat ini sebagai syarat persetujuan klinis, khususnya untuk alat yang beroperasi dengan tingkat otonomi tertentu dari klinisi.

## Cara Menghitungnya

```
Akurasi perutean triase = pertemuan yang dirutekan dengan benar / total
                           pertemuan yang ditriase × 100

Laporkan triase-rendah dan triase-tinggi secara terpisah:
  Tingkat triase-rendah = pertemuan yang dirutekan ke tingkat keparahan
                           lebih rendah dari standar referensi / total
                           pertemuan yang ditriase × 100
  Tingkat triase-tinggi = pertemuan yang dirutekan ke tingkat keparahan
                           lebih tinggi dari standar referensi / total
                           pertemuan yang ditriase × 100

Standar referensi biasanya adalah tinjauan klinisi retrospektif terhadap
kasus yang sama, disamarkan dari hasil alat jika memungkinkan.
```

## Contoh Perhitungan

Sebuah alat pemeriksa gejala AI mentriase 5.000 pertemuan pasien dalam sebulan. Tinjauan klinisi tersamar terhadap sampel acak 500 pertemuan ini menemukan bahwa 430 dirutekan ke tingkat keparahan yang benar (akurasi 86%), 45 ditriase-rendah (9%), dan 25 ditriase-tinggi (5%). Tingkat triase-rendah 9% adalah angka yang paling mendesak memerlukan investigasi, karena mewakili pertemuan di mana seorang pasien mungkin telah diarahkan ke perawatan yang kurang mendesak dari yang sebenarnya mereka butuhkan; tingkat triase-tinggi 5% adalah masalah kapasitas dan biaya tetapi bukan masalah keselamatan langsung.

## Sumber Data dan Catatan Penting

Standar referensi terhadap mana akurasi triase diukur sangat penting: tinjauan oleh satu klinisi memperkenalkan variabilitas penilaian klinisi itu sendiri, sehingga angka akurasi yang kredibel biasanya memerlukan baik beberapa peninjau independen dengan kesepakatan antar-penilai yang terdokumentasi, atau perbandingan terhadap hasil klinis yang dikonfirmasi selanjutnya (perawatan apa yang sebenarnya dibutuhkan pasien, ditetapkan setelahnya). Pengambilan sampel juga penting: meninjau hanya sampel kenyamanan dari pertemuan, atau hanya yang ditandai sebagai tidak biasa, tidak akan menghasilkan angka yang dapat digeneralisasi ke kinerja alat secara keseluruhan. Angka akurasi harus dilaporkan secara terpisah berdasarkan kategori gejala atau keluhan yang muncul di mana volume kasus yang mendasarinya memungkinkan, karena alat triase jarang berkinerja seragam di semua kondisi.

## Jebakan Umum

- **Melaporkan satu angka akurasi gabungan**: menggabungkan triase-rendah dan triase-tinggi menjadi satu angka menyembunyikan apakah kesalahan alat condong ke mode kegagalan yang lebih berbahaya; selalu laporkan keduanya secara terpisah.
- **Menggunakan satu peninjau yang tidak disamarkan sebagai standar referensi**: ini dapat diam-diam mengarahkan angka akurasi ke arah apa pun yang akan dilakukan peninjau tersebut sendiri, bukan standar klinis independen.
- **Memvalidasi hanya pada data retrospektif yang nyaman**: akurasi perutean dunia nyata alat di bawah input pasien langsung dan ambigu sering kali berbeda secara material dari akurasinya pada set validasi yang dikurasi yang dirakit selama pengembangan.
- **Mengabaikan pergeseran kinerja setelah penerapan**: akurasi model triase AI dapat menurun seiring waktu karena populasi pasien, gejala yang muncul, atau ketersediaan jalur perawatan berubah; akurasi harus diukur ulang secara berkala, bukan divalidasi sekali dan diasumsikan stabil.

## Sumber

- ONC / HealthIT.gov, panduan tentang keselamatan dan jaminan mutu dukungan keputusan klinis dan alat yang diaktifkan AI
- Literatur yang ditinjau sejawat tentang akurasi pemeriksa gejala dan alat triase AI, misalnya studi yang diterbitkan di JAMIA, npj Digital Medicine, dan BMJ Health & Care Informatics
- NHS England, panduan tentang keselamatan klinis alat triase digital dan konsultasi jarak jauh (standar manajemen risiko klinis DCB0129/DCB0160)

Lihat juga: [waktu penyelesaian rujukan digital](../digital-referral-turnaround-time/), metrik proses yang paling langsung berada di hilir keputusan triase.
