# Tingkat Kunjungan Telehealth

Tingkat kunjungan telehealth adalah proporsi dari total interaksi suatu layanan yang diberikan dari jarak jauh, melalui video atau telepon, bukan secara langsung. Ini adalah metrik campuran saluran penyampaian, bukan metrik aktivitas: metrik ini menunjukkan bagaimana perawatan diberikan, yang penting untuk perencanaan kapasitas, akses, dan kesesuaian klinis, sepenuhnya terpisah dari berapa banyak perawatan yang diberikan secara keseluruhan.

## Mengapa ini penting

Proporsi perawatan yang diberikan dari jarak jauh mengubah model operasional banyak layanan setelah ekspansi cepat konsultasi virtual selama pandemi COVID-19, dan organisasi memerlukan cara yang stabil untuk memantau apakah pergeseran tersebut sedang dipertahankan, kembali ke norma sebelum pandemi, atau secara aktif diarahkan oleh kebijakan. Telehealth bukanlah pengganti seragam untuk kunjungan langsung: kesesuaiannya bervariasi menurut spesialisasi, jenis konsultasi (tinjauan obat berperilaku sangat berbeda dari pemeriksaan fisik), dan preferensi pasien, sehingga tingkat yang "tepat" adalah penilaian klinis dan operasional, bukan target untuk dimaksimalkan. Pemberi dana dan regulator juga menggunakan tingkat ini, bersama dengan ukuran hasil dan keselamatan, untuk memutuskan kebijakan penggantian biaya dan memeriksa bahwa perawatan jarak jauh tidak sekadar digantikan pada kasus-kasus yang perlu dilihat secara langsung.

## Cara menghitungnya

```
Tingkat kunjungan telehealth = interaksi telehealth / (interaksi telehealth + interaksi langsung) × 100

Laporkan secara terpisah berdasarkan modalitas jika memungkinkan:
  Tingkat video    = interaksi video / total interaksi × 100
  Tingkat telepon  = interaksi hanya telepon / total interaksi × 100

Penyebut hanya boleh menghitung interaksi yang selesai (lihat kesalahan umum),
untuk layanan, spesialisasi, dan periode waktu tertentu.
```

## Contoh penerapan

Sebuah layanan kesehatan mental komunitas mencatat 4.000 kontak rawat jalan yang selesai dalam satu kuartal: 1.200 secara langsung, 1.600 melalui video, dan 1.200 melalui telepon. Tingkat kunjungan telehealth adalah (1.600 + 1.200) / 4.000 × 100 = 70%, dengan tingkat video 40% dan tingkat hanya telepon 30%. Melaporkan angka gabungan 70% saja akan menyembunyikan fakta bahwa sebagian besar "telehealth" di sini hanya berupa audio, yang biasanya membawa profil risiko klinis dan pengalaman pasien yang berbeda dari video.

## Sumber data dan peringatan

Jenis interaksi biasanya dicatat baik sebagai kolom terstruktur dalam rekam medis elektronik (jenis kunjungan atau lokasi) atau disimpulkan dari kode penagihan, seperti kode tempat layanan atau pengubah telehealth pada klaim. Praktik pengkodean sangat bervariasi antar organisasi dan bahkan antar klinisi dalam organisasi yang sama, sehingga perbandingan tingkat antar lokasi harus terlebih dahulu memastikan bahwa "telehealth" dikodekan dengan cara yang sama di setiap tempat. Sebuah kunjungan yang dimulai sebagai video tetapi beralih ke telepon karena masalah teknis harus dikodekan secara konsisten (biasanya sebagai modalitas yang membawa sebagian besar konten klinis), dan aturan tersebut harus didokumentasikan daripada diserahkan kepada penilaian individu.

## Kesalahan umum

- **Menghitung kunjungan yang dicoba alih-alih yang selesai**: janji temu telehealth yang gagal terhubung dan dijadwalkan ulang tidak boleh menggelembungkan penyebut telehealth dua kali.
- **Memperlakukan video dan telepon sebagai dapat dipertukarkan**: keduanya memiliki implikasi klinis dan kesetaraan yang berbeda (telepon mengecualikan penilaian visual tetapi lebih mudah diakses oleh pasien tanpa ponsel pintar, data yang andal, atau ruang pribadi untuk video); selalu laporkan secara terpisah jika memungkinkan.
- **Mengabaikan hubungan dengan ketidakhadiran**: perilaku ketidakhadiran sering berbeda menurut modalitas; lihat [tingkat ketidakhadiran janji temu](../tingkat-ketidakhadiran-janji-temu/) sebelum menarik kesimpulan tentang "peningkatan akses" hanya dari tingkat telehealth yang meningkat.
- **Menganggap tingkat tinggi selalu baik**: untuk beberapa kondisi dan jenis konsultasi, tingkat telehealth yang sesuai memang rendah karena desain klinis, bukan karena kegagalan kematangan digital.

## Sumber

- Centers for Medicare & Medicaid Services (CMS), data pemanfaatan telehealth Medicare dan publikasi kebijakan
- NHS England, statistik aktivitas layanan rawat jalan dan komunitas, termasuk rincian kehadiran virtual/jarak jauh
- Literatur yang ditinjau sejawat mengenai tren pemanfaatan telehealth dan hasil spesifik modalitas
