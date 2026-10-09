# Tingkat Akses Digital

Tingkat akses digital mengukur proporsi populasi pasien yang memenuhi syarat yang memiliki sarana praktis untuk menggunakan produk kesehatan digital sama sekali: koneksi broadband atau data seluler yang andal, perangkat yang mampu internet, dan akun aktif pada portal atau aplikasi pasien yang relevan. Ini adalah metrik prasyarat untuk setiap ukuran kesehatan digital lainnya dalam buku ini — sebuah populasi tidak dapat mendaftar, terlibat dengan, atau mendapat manfaat dari produk kesehatan digital mana pun yang secara struktural tidak dapat dijangkaunya, betapapun baiknya produk tersebut dirancang.

## Mengapa Ini Penting

Metrik adopsi dan keterlibatan kesehatan digital secara implisit mengasumsikan populasi yang sudah memiliki akses digital, dan melaporkan tingkat adopsi atau keterlibatan tanpa terlebih dahulu menetapkan tingkat akses yang mendasarinya berisiko diam-diam mengecualikan pasien yang paling kecil kemungkinannya memiliki akses tersebut — yang sering juga merupakan pasien dengan kebutuhan kesehatan terbesar. HIMSS Digital Health Equity Measurement Framework (DHEMF) dan kerangka kerja serupa memperlakukan akses digital sebagai metrik ekuitas dasar dan tingkat pertama justru karena intervensi yang dibangun tanpa memperhitungkan kesenjangan akses cenderung memperkuat, bukan menutup, disparitas kesehatan yang ada: strategi telehealth-pertama dapat secara tidak sengaja mengurangi akses ke perawatan bagi pasien tanpa koneksi atau perangkat yang andal, bahkan sambil secara terukur meningkatkan pengalaman bagi pasien yang sudah memiliki keduanya. Tingkat akses digital harus dilacak dan dilaporkan berdasarkan segmen demografis dan geografis, karena rata-rata nasional atau tingkat-organisasi secara rutin menyembunyikan kesenjangan besar untuk populasi tertentu.

## Cara Menghitungnya

```
Tingkat akses digital = pasien dengan konektivitas broadband/seluler
                         DAN perangkat yang mampu internet DAN akun
                         portal atau aplikasi pasien yang aktif /
                         total populasi pasien yang memenuhi syarat
                         × 100

Laporkan setiap sub-komponen secara terpisah serta tingkat gabungan:
  Tingkat konektivitas    = pasien dengan koneksi internet yang andal
                            / populasi yang memenuhi syarat × 100
  Tingkat kepemilikan perangkat = pasien dengan perangkat yang mampu
                            internet / populasi yang memenuhi syarat
                            × 100
  Tingkat aktivasi portal = pasien dengan akun portal/aplikasi aktif
                            / populasi yang memenuhi syarat × 100
                            (lihat tingkat adopsi portal pasien untuk
                            corong adopsi yang lebih lengkap)
```

## Contoh Perhitungan

Sebuah sistem kesehatan melayani populasi yang memenuhi syarat sebanyak 40.000 pasien. Survei pasien dan data infrastruktur menunjukkan 34.000 (85%) memiliki konektivitas broadband atau seluler yang andal, 33.000 (82,5%) memiliki perangkat yang mampu internet, dan dari pasien yang memenuhi kedua kondisi tersebut, 27.000 (67,5% dari total populasi yang memenuhi syarat) memiliki akun portal pasien yang aktif. Memisahkan berdasarkan usia menunjukkan pasien berusia 65+ memiliki tingkat akses digital gabungan hanya 48%, dibandingkan dengan 78% untuk pasien di bawah 65 — kesenjangan yang sepenuhnya disembunyikan oleh rata-rata tingkat-organisasi 67,5%, dan yang seharusnya langsung menginformasikan apakah suatu layanan tertentu dapat dengan aman ditawarkan hanya-digital untuk populasi ini.

## Sumber Data dan Catatan Penting

Data konektivitas dan kepemilikan perangkat biasanya berasal dari kombinasi laporan mandiri pasien (melalui survei atau kuesioner penerimaan), data pemetaan ketersediaan broadband nasional Federal Communications Commission (FCC) atau setara untuk area geografis pasien, dan data aktivasi portal dari sistem organisasi sendiri. Ketersediaan broadband pada tingkat area (apakah penyedia menawarkan layanan di kode pos tertentu) adalah proksi yang lebih lemah daripada konektivitas tingkat rumah tangga, karena data ketersediaan tingkat area tidak mengatakan apa pun tentang apakah seorang pasien tertentu benar-benar mampu membayar atau telah memilih untuk berlangganan layanan tersebut — tingkat akses tingkat area dan tingkat rumah tangga tidak boleh dicampuradukkan. Akses perangkat dan konektivitas juga dapat dibagikan dalam rumah tangga (misalnya, satu smartphone digunakan oleh beberapa anggota keluarga), yang ditangkap lebih baik oleh data survei tingkat rumah tangga daripada data login portal tingkat individu saja.

## Jebakan Umum

- **Melaporkan hanya rata-rata tingkat-organisasi**: ini secara andal menyembunyikan kesenjangan akses besar untuk segmen pasien yang lebih tua, berpendapatan lebih rendah, pedesaan, atau terpinggirkan secara digital lainnya; selalu pisahkan berdasarkan segmen demografis dan geografis.
- **Mencampuradukkan ketersediaan broadband tingkat area dengan akses rumah tangga sebenarnya**: sebuah kode pos yang "dilayani" oleh penyedia broadband tidak berarti setiap rumah tangga di dalamnya berlangganan atau mampu membayar layanan tersebut.
- **Memperlakukan kepemilikan perangkat sebagai fakta statis satu kali**: akses perangkat dapat bersifat sementara (perangkat yang menua, telepon yang hilang atau rusak, perangkat keluarga bersama yang dialihkan), sehingga tingkat akses harus diukur secara berulang, bukan diasumsikan stabil setelah dinilai sekali.
- **Merancang jalur hanya-digital sebelum menetapkan tingkat akses untuk populasi yang terdampak**: mengalihkan layanan ke hanya-digital tanpa terlebih dahulu mengonfirmasi tingkat akses digital sebenarnya populasi target berisiko diam-diam mengecualikan justru pasien yang paling tidak mampu menjangkau saluran alternatif.

## Sumber

- HIMSS, Digital Health Equity Measurement Framework (DHEMF)
- Federal Communications Commission (FCC), data ketersediaan broadband nasional dan ekuitas digital
- Pew Research Center, penelitian tentang internet, broadband, dan akses perangkat serta tren kesenjangan digital di seluruh kelompok demografis

Lihat juga: [tingkat literasi digital](../tingkat-literasi-digital/), metrik terkait erat tentang apakah pasien yang memiliki akses dapat menggunakannya secara efektif.
