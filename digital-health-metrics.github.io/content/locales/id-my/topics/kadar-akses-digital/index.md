# Kadar Akses Digital

Kadar akses digital mengukur proporsi populasi pesakit yang memenuhi syarat yang memiliki sarana praktis untuk menggunakan produk kesihatan digital sama sekali: koneksi broadband atau data seluler yang andal, perangkat yang mampu internet, dan akun aktif pada portal atau aplikasi pesakit yang relevan. Ini adalah metrik prasyarat untuk setiap ukuran kesihatan digital lainnya dalam buku ini — sebuah populasi tidak dapat mendaftar, terlibat dengan, atau mendapat manfaat dari produk kesihatan digital mana pun yang secara struktural tidak dapat dijangkaunya, betapapun baiknya produk tersebut dirancang.

## Mengapa Ini Penting

Metrik adopsi dan keterlibatan kesihatan digital secara implisit mengasumsikan populasi yang sudah memiliki akses digital, dan melaporkan kadar adopsi atau keterlibatan tanpa terlebih dahulu menetapkan kadar akses yang mendasarinya berisiko diam-diam mengecualikan pesakit yang paling kecil kemungkinannya memiliki akses tersebut — yang sering juga merupakan pesakit dengan kebutuhan kesihatan terbesar. HIMSS Digital Health Equity Measurement Framework (DHEMF) dan kerangka kerja serupa memperlakukan akses digital sebagai metrik ekuitas dasar dan kadar pertama justru kerana intervensi yang dibangun tanpa memperhitungkan kesenjangan akses cenderung memperkuat, bukan menutup, disparitas kesihatan yang ada: strategi telehealth-pertama dapat secara tidak sengaja mengurangi akses ke perawatan bagi pesakit tanpa koneksi atau perangkat yang andal, bahkan sambil secara terukur meningkatkan pengalaman bagi pesakit yang sudah memiliki keduanya. Kadar akses digital harus dilacak dan dilaporkan berdasarkan segmen demografis dan geografis, kerana rata-rata nasional atau kadar-organisasi secara rutin menyembunyikan kesenjangan besar untuk populasi tertentu.

## Cara Menghitungnya

```
Kadar akses digital = pesakit dengan konektivitas broadband/seluler
                         DAN perangkat yang mampu internet DAN akun
                         portal atau aplikasi pesakit yang aktif /
                         total populasi pesakit yang memenuhi syarat
                         × 100

Laporkan setiap sub-komponen secara terpisah serta kadar gabungan:
  Kadar konektivitas    = pesakit dengan koneksi internet yang andal
                            / populasi yang memenuhi syarat × 100
  Kadar kepemilikan perangkat = pesakit dengan perangkat yang mampu
                            internet / populasi yang memenuhi syarat
                            × 100
  Kadar aktivasi portal = pesakit dengan akun portal/aplikasi aktif
                            / populasi yang memenuhi syarat × 100
                            (lihat kadar adopsi portal pesakit untuk
                            corong adopsi yang lebih lengkap)
```

## Contoh Perhitungan

Sebuah sistem kesihatan melayani populasi yang memenuhi syarat sebanyak 40.000 pesakit. Survei pesakit dan data infrastruktur menunjukkan 34.000 (85%) memiliki konektivitas broadband atau seluler yang andal, 33.000 (82,5%) memiliki perangkat yang mampu internet, dan dari pesakit yang memenuhi kedua kondisi tersebut, 27.000 (67,5% dari total populasi yang memenuhi syarat) memiliki akun portal pesakit yang aktif. Memisahkan berdasarkan usia menunjukkan pesakit berusia 65+ memiliki kadar akses digital gabungan hanya 48%, dibandingkan dengan 78% untuk pesakit di bawah 65 — kesenjangan yang sepenuhnya disembunyikan oleh rata-rata kadar-organisasi 67,5%, dan yang seharusnya langsung menginformasikan apakah suatu layanan tertentu dapat dengan aman ditawarkan hanya-digital untuk populasi ini.

## Sumber Data dan Catatan Penting

Data konektivitas dan kepemilikan perangkat biasanya berasal dari kombinasi laporan mandiri pesakit (melalui survei atau kuesioner penerimaan), data pemetaan ketersediaan broadband nasional Federal Communications Commission (FCC) atau setara untuk area geografis pesakit, dan data aktivasi portal dari sistem organisasi sendiri. Ketersediaan broadband pada kadar area (apakah penyedia menawarkan layanan di kode pos tertentu) adalah proksi yang lebih lemah daripada konektivitas kadar rumah tangga, kerana data ketersediaan kadar area tidak mengatakan apa pun tentang apakah seorang pesakit tertentu benar-benar mampu membayar atau telah memilih untuk berlangganan layanan tersebut — kadar akses kadar area dan kadar rumah tangga tidak boleh dicampuradukkan. Akses perangkat dan konektivitas juga dapat dibagikan dalam rumah tangga (misalnya, satu smartphone digunakan oleh beberapa anggota keluarga), yang ditangkap lebih baik oleh data survei kadar rumah tangga daripada data login portal kadar individu saja.

## Jebakan Umum

- **Melaporkan hanya rata-rata kadar-organisasi**: ini secara andal menyembunyikan kesenjangan akses besar untuk segmen pesakit yang lebih tua, berpendapatan lebih rendah, pedesaan, atau terpinggirkan secara digital lainnya; selalu pisahkan berdasarkan segmen demografis dan geografis.
- **Mencampuradukkan ketersediaan broadband kadar area dengan akses rumah tangga sebenarnya**: sebuah kode pos yang "dilayani" oleh penyedia broadband tidak berarti setiap rumah tangga di dalamnya berlangganan atau mampu membayar layanan tersebut.
- **Memperlakukan kepemilikan perangkat sebagai fakta statis satu kali**: akses perangkat dapat bersifat sementara (perangkat yang menua, telepon yang hilang atau rusak, perangkat keluarga bersama yang dialihkan), sehingga kadar akses harus diukur secara berulang, bukan diasumsikan stabil setelah dinilai sekali.
- **Merancang jalur hanya-digital sebelum menetapkan kadar akses untuk populasi yang terdampak**: mengalihkan layanan ke hanya-digital tanpa terlebih dahulu mengonfirmasi kadar akses digital sebenarnya populasi target berisiko diam-diam mengecualikan justru pesakit yang paling tidak mampu menjangkau saluran alternatif.

## Sumber

- HIMSS, Digital Health Equity Measurement Framework (DHEMF)
- Federal Communications Commission (FCC), data ketersediaan broadband nasional dan ekuitas digital
- Pew Research Center, penelitian tentang internet, broadband, dan akses perangkat serta tren kesenjangan digital di seluruh kelompok demografis

Lihat juga: [kadar literasi digital](../kadar-literasi-digital/), metrik terkait erat tentang apakah pesakit yang memiliki akses dapat menggunakannya secara efektif.
