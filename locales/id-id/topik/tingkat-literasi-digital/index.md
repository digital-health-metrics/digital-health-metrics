# Tingkat Literasi Digital

Tingkat literasi digital mengukur proporsi populasi pasien yang mampu secara independen dan berhasil menyelesaikan tugas umum pada platform kesehatan digital — login, menjadwalkan janji temu, bergabung dengan kunjungan video, atau membaca hasil tes — tanpa memerlukan bantuan dari orang lain. Ini berbeda dari, dan harus selalu diukur secara terpisah dari, tingkat akses digital: seorang pasien dapat memiliki smartphone dan koneksi broadband dan tetap tidak dapat menavigasi platform telehealth tanpa bantuan, dan mencampuradukkan kedua metrik ini menyembunyikan persis populasi yang ada untuk diungkap oleh metrik ini.

## Mengapa Ini Penting

Akses digital saja tidak menjamin seorang pasien dapat menggunakan layanan kesehatan digital secara efektif: pasien dengan literasi kesehatan yang lebih rendah, pengalaman terbatas dengan teknologi secara umum, gangguan kognitif atau visual, atau hambatan bahasa dengan antarmuka platform dapat memiliki akses teknis penuh dan tetap gagal menyelesaikan tugas secara independen, dan kesenjangan ini secara sistematis berkorelasi dengan kelompok demografis yang sama yang sudah menghadapi disparitas kesehatan lainnya. HIMSS Digital Health Equity Measurement Framework memperlakukan literasi digital sebagai pilar yang berbeda dari akses justru karena alasan ini: menutup kesenjangan akses tanpa juga mengatasi kesenjangan literasi dapat meninggalkan populasi yang secara teknis terhubung tetapi secara fungsional tidak mampu mendapat manfaat. Organisasi yang mengukur penyelesaian tugas dan waktu-hingga-penyelesaian untuk tindakan platform umum, disegmentasi berdasarkan bahasa dan indikator sosial-ekonomi, mampu mengidentifikasi hambatan literasi dan menargetkan dukungan (antarmuka yang disederhanakan, onboarding yang dibantu, konten bahasa alternatif) jauh lebih tepat daripada organisasi yang hanya mengandalkan metrik akses atau skor kepuasan keseluruhan.

## Cara Menghitungnya

```
Tingkat literasi digital = pasien yang secara independen
                            menyelesaikan tugas yang ditentukan tanpa
                            bantuan / pasien yang mencoba tugas
                            tersebut × 100

Tugas umum yang diukur: login akun, penjadwalan janji temu,
bergabung dengan kunjungan video, melihat hasil tes, menyelesaikan
formulir penerimaan.

Laporkan per tugas, bukan sebagai satu skor gabungan, karena literasi
untuk tugas sederhana (login) dan tugas kompleks (menyelesaikan
formulir penerimaan multi-langkah) berbeda secara substansial dan
menggabungkannya mengaburkan di mana letak hambatan spesifiknya.
```

## Contoh Perhitungan

Sebuah sistem kesehatan melacak bergabung dengan kunjungan video sebagai tugas yang ditentukan di 5.000 janji temu telehealth terjadwal dalam sebulan. Dari jumlah tersebut, 4.100 pasien bergabung dengan sukses tanpa panggilan dukungan atau bantuan teknis selama kunjungan (tingkat literasi digital untuk tugas ini: 82%). Memisahkan berdasarkan bahasa utama menunjukkan tingkat 89% untuk pasien berbahasa Inggris versus 61% untuk pasien yang bahasa utamanya berbeda dari bahasa antarmuka default platform — kesenjangan 28-poin yang akan tidak terlihat jika hanya angka gabungan 82% yang dilaporkan, dan yang menunjuk langsung pada intervensi yang spesifik dan dapat ditangani (antarmuka dan instruksi yang diterjemahkan) daripada masalah literasi umum yang samar.

## Sumber Data dan Catatan Penting

Data penyelesaian tugas biasanya ditangkap dari log peristiwa platform itu sendiri (apakah pasien mencapai kunjungan video, apakah alur penjadwalan janji temu selesai tanpa pengabaian), dilengkapi dengan data kontak panggilan dukungan atau help-desk untuk mengidentifikasi tugas yang secara teknis "selesai" hanya karena pasien menerima bantuan langsung di tengah jalan. Sebuah tugas yang dihitung "selesai" murni dari log sistem dapat menyembunyikan bahwa seorang pasien memerlukan panggilan telepon dari anggota keluarga atau staf dukungan untuk sampai ke sana — penyelesaian yang benar-benar independen literasi harus didefinisikan dan dilacak secara terpisah dari yang dibantu di mana pun platform dapat membedakan keduanya. Literasi digital berkorelasi dengan, tetapi secara analitis berbeda dari, literasi kesehatan dan literasi umum; instrumen yang tervalidasi (bukan asumsi informal berdasarkan usia atau demografi saja) harus digunakan di mana pun penilaian formal diperlukan.

## Jebakan Umum

- **Mencampuradukkan literasi digital dengan akses digital**: seorang pasien dengan akses teknis penuh masih dapat kekurangan literasi untuk menggunakannya secara efektif; ini adalah metrik terpisah yang memerlukan intervensi terpisah, dan tidak boleh pernah dilaporkan sebagai satu angka gabungan.
- **Menghitung penyelesaian yang dibantu sebagai keberhasilan tanpa bantuan**: jika seorang pasien hanya menyelesaikan tugas dengan panggilan dukungan atau bantuan anggota keluarga, itu adalah kesenjangan literasi yang ditutupi platform, bukan diselesaikan; bedakan penyelesaian yang dibantu dari tanpa bantuan di mana pun data memungkinkan.
- **Melaporkan satu skor penyelesaian tugas gabungan**: literasi untuk tugas sederhana (login) dan yang kompleks (menyelesaikan formulir penerimaan terperinci) berbeda secara substansial; laporkan per tugas untuk mengidentifikasi persis di mana letak hambatannya.
- **Mengasumsikan usia saja memprediksi literasi digital**: meskipun usia berkorelasi dengan literasi digital yang lebih rendah secara agregat, kemahiran bahasa dalam bahasa antarmuka platform dan keakraban teknologi umum sering menjadi prediktor individu yang lebih kuat dan harus diukur secara langsung daripada disimpulkan dari usia.

## Sumber

- HIMSS, Digital Health Equity Measurement Framework (DHEMF)
- Office of the National Coordinator for Health Information Technology (ONC), penelitian tentang kegunaan teknologi informasi kesehatan dan literasi kesehatan digital
- Literatur yang ditinjau sejawat tentang pengukuran dan intervensi literasi kesehatan digital, misalnya studi yang diterbitkan di Journal of Medical Internet Research (JMIR)

Lihat juga: [tingkat akses digital](../tingkat-akses-digital/), metrik prasyarat yang paling umum, dan paling umum salah, dicampuradukkan dengan ini.
