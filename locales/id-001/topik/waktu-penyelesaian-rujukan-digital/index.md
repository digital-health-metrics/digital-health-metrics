# Waktu Penyelesaian Rujukan Digital

Waktu penyelesaian rujukan digital adalah waktu yang berlalu dari saat rujukan elektronik diajukan oleh klinisi yang merujuk hingga rujukan tersebut ditriase dan diterima, ditolak, atau dijadwalkan oleh layanan penerima. Ini adalah metrik proses (alur), berbeda dari total waktu tunggu pasien, dan merupakan salah satu tempat paling jelas di mana perubahan sistem digital (e-rujukan terstruktur, triase berbasis gambar, formulir rujukan standar) dapat ditunjukkan untuk menggerakkan angka operasional, bukan sekadar skor kepuasan.

## Mengapa ini penting

Tahap triase yang lambat atau sangat bervariasi menambah penundaan sebelum pasien bahkan bergabung dengan daftar tunggu klinis, dan karena penundaan tersebut terjadi sebelum perawatan klinis apa pun dimulai, ini adalah pemborosan proses murni yang sangat cocok untuk dihilangkan oleh perangkat digital. Sistem rujukan yang memaksa siklus "kembali ke perujuk" untuk informasi yang hilang menciptakan siklus pekerjaan ulang yang mudah terlewatkan jika waktu penyelesaian hanya diukur pada rujukan yang lolos dengan bersih pada percobaan pertama. Di mana suatu layanan telah memperkenalkan formulir rujukan digital terstruktur, kolom wajib, atau triase berbasis gambar (misalnya dalam teledermatologi), waktu penyelesaian biasanya merupakan metrik tunggal yang paling meyakinkan untuk menunjukkan manfaatnya, karena dapat diukur sebelum dan sesudah perubahan dengan instrumentasi yang sama.

## Cara menghitungnya

```
Waktu penyelesaian = stempel waktu(keputusan triase) − stempel waktu(pengajuan rujukan)

Laporkan median dan persentil tinggi (umumnya persentil ke-90), bukan hanya
rata-rata, karena distribusinya sangat condong ke kanan akibat rujukan
yang dikembalikan atau kompleks.

Pertimbangkan waktu sub-tahap jika sistem menangkapnya:
  Pengajuan → diterima oleh layanan
  Diterima → keputusan triase
  Keputusan triase → janji temu terjadwal (jika relevan)
```

## Contoh penerapan

Jejak audit sistem e-rujukan menunjukkan waktu median dari pengajuan hingga keputusan triase sebesar 1,8 hari di semua spesialisasi, dengan waktu persentil ke-90 sebesar 6 hari, yang sebagian besar disebabkan oleh rujukan yang dikembalikan kepada perujuk karena informasi klinis yang hilang. Jalur teledermatologi yang menggunakan triase berbasis gambar pada platform yang sama mencapai median waktu penyelesaian 4 jam dan persentil ke-90 sebesar 1 hari, karena foto dan riwayat terstruktur hampir selalu cukup untuk keputusan triase tanpa memerlukan korespondensi lebih lanjut.

## Sumber data dan peringatan

Jejak audit sistem e-rujukan atau manajemen rujukan itu sendiri adalah sumber utama, menggunakan stempel waktu pengajuan dan keputusan; organisasi harus memastikan apakah "jam" berhenti saat rujukan dikembalikan untuk informasi lebih lanjut atau terus berjalan, karena kedua definisi tersebut menghasilkan angka yang sangat berbeda untuk proses yang sama. Waktu penyelesaian harus dilaporkan secara konsisten dalam waktu kalender atau waktu jam kerja, karena efek akhir pekan dan hari libur dapat mendistorsi perbandingan antar layanan dengan pola kerja yang berbeda.

## Kesalahan umum

- **Hanya mengukur rujukan yang "bersih"**: mengecualikan rujukan yang ditolak atau dikembalikan dari perhitungan menyembunyikan beban pekerjaan ulang yang sering kali secara khusus dimaksudkan untuk dikurangi oleh perangkat digital.
- **Melaporkan rata-rata alih-alih median dan persentil**: sejumlah kecil rujukan yang dikembalikan dan berjalan lama akan menarik rata-rata jauh di atas pengalaman sebenarnya dari pasien pada umumnya.
- **Mengacaukan waktu penyelesaian dengan total waktu tunggu**: waktu penyelesaian hanya mencakup tahap triase; pengalaman total pasien juga mencakup daftar tunggu klinis lanjutan, yang merupakan metrik terpisah yang diatur oleh keterbatasan kapasitas yang terpisah.
- **Tidak membedakan sub-tahap**: layanan yang hanya mengukur waktu ujung ke ujung tidak dapat mengetahui apakah angka yang lambat disebabkan oleh perujuk yang mengajukan informasi tidak lengkap, kapasitas triase layanan penerima, atau keduanya.

## Sumber

- NHS England, statistik dan spesifikasi layanan e-Referral Service (e-RS)
- Literatur yang ditinjau sejawat mengenai sistem manajemen rujukan elektronik dan jalur triase digital, termasuk teledermatologi
- ONC / HealthIT.gov, panduan interoperabilitas dan koordinasi rujukan
