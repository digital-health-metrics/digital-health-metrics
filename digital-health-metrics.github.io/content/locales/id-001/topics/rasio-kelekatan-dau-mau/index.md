# Rasio Kelekatan DAU/MAU

Rasio kelekatan DAU/MAU membandingkan pengguna aktif harian (DAU) dengan pengguna aktif bulanan (MAU) — ukuran dasar yang sama digunakan untuk pengguna aktif mingguan (WAU) terhadap MAU — untuk menyatakan proporsi basis pengguna produk yang lebih luas yang terlibat dengannya pada hari tertentu. Ini adalah ukuran analitik produk standar untuk intensitas keterlibatan, berbeda dari apakah seorang pengguna dipertahankan sama sekali (lihat tingkat retensi pengguna) atau seberapa konsisten satu pasien terdaftar tertentu terlibat seiring waktu (lihat tingkat konsistensi keterlibatan pasien): kelekatan menggambarkan ritme penggunaan tingkat populasi, bukan pola individu mana pun.

## Mengapa Ini Penting

Dua produk kesehatan digital dapat melaporkan jumlah pengguna aktif bulanan yang identik sementara memiliki intensitas keterlibatan dasar yang sangat berbeda: satu di mana sebagian besar pengguna tersebut membuka aplikasi hampir setiap hari, dan yang lain di mana sebagian besar membukanya sekali sebulan tepat sebelum dihitung tidak aktif. Rasio kelekatan DAU/MAU membedakan dua situasi yang sangat berbeda ini dengan satu angka tolok ukur yang sederhana dan dipahami dengan baik yang dapat dilacak tim produk dan klinis seiring waktu dan dibandingkan dengan rentang industri yang dikenal — rasio sekitar 20% adalah tolok ukur yang wajar dan umum dikutip untuk banyak aplikasi konsumen, sementara produk kebiasaan harian (buku harian makanan atau gejala yang diharapkan digunakan pasien setiap hari) harus dinilai terhadap standar yang jauh lebih tinggi. Karena kelekatan sensitif terhadap bagaimana "aktif" didefinisikan, ini paling berguna sebagai tren untuk satu produk seiring waktu, dan sebagai perbandingan terhadap produk yang dibangun untuk pola penggunaan serupa, bukan sebagai tolok ukur lintas-industri absolut.

## Cara Menghitungnya

```
Rasio kelekatan DAU/MAU = rata-rata pengguna aktif harian dalam
                           periode / pengguna aktif bulanan dalam
                           periode yang sama × 100

Rasio WAU/MAU (mingguan, prinsip yang sama) adalah varian yang lebih
lunak, lebih cocok untuk produk yang diharapkan digunakan beberapa
kali seminggu daripada harian.

"Aktif" harus didefinisikan secara tepat dan konsisten (misalnya
tindakan yang memenuhi syarat yang selesai, bukan pembukaan aplikasi
pasif) di seluruh pembilang dan penyebut.
```

## Contoh Perhitungan

Sebuah aplikasi manajemen diabetes digital memiliki 10.000 pengguna aktif bulanan dalam bulan tertentu, didefinisikan sebagai pengguna mana pun yang menyelesaikan setidaknya satu tindakan yang memenuhi syarat (catatan glukosa, catatan makanan, atau centang pengobatan) dalam bulan tersebut. Merata-ratakan jumlah pengguna aktif harian di 30 hari bulan tersebut memberikan rata-rata DAU 2.200. Rasio kelekatan DAU/MAU adalah 2.200 / 10.000 × 100 = 22%, menunjukkan bahwa pada hari biasa, sekitar 22% basis pengguna bulanan aplikasi tersebut terlibat dengannya — angka yang wajar untuk alat kondisi kronis kebiasaan harian, meskipun tim produk ingin melihatnya meningkat seiring waktu seiring perilaku ideal (pencatatan harian) menjadi lebih kebiasaan bagi pasien terdaftar.

## Sumber Data dan Catatan Penting

DAU, WAU, dan MAU semuanya dihitung dari log peristiwa dasar yang sama, menggunakan satu definisi konsisten dari peristiwa "aktif yang memenuhi syarat" di seluruh jendela; mengubah definisi tersebut antara perhitungan pembilang dan penyebut (misalnya, menghitung pembukaan aplikasi apa pun untuk DAU tetapi hanya tindakan yang selesai untuk MAU) akan menghasilkan rasio yang terdistorsi yang tidak mencerminkan intensitas keterlibatan nyata. Tolok ukur yang sesuai untuk kelekatan sangat bergantung pada pola penggunaan yang dimaksudkan produk: alat yang dimaksudkan digunakan sekali seminggu (check-in gejala mingguan) akan dan harus memiliki rasio DAU/MAU yang lebih rendah daripada alat yang dimaksudkan digunakan setiap hari (aplikasi pendamping monitor glukosa kontinu), sehingga kelekatan harus selalu ditafsirkan terhadap ritme penggunaan yang dimaksudkan produk itu sendiri, bukan target universal tunggal.

## Jebakan Umum

- **Membandingkan rasio kelekatan di seluruh produk dengan frekuensi penggunaan yang dimaksudkan berbeda**: alat penggunaan mingguan secara struktural akan menunjukkan rasio DAU/MAU yang lebih rendah daripada alat penggunaan harian bahkan jika keduanya berkinerja persis seperti yang dimaksudkan untuk kasus penggunaan masing-masing; bandingkan terhadap ritme yang dimaksudkan produk itu sendiri, bukan target universal tunggal.
- **Menggunakan definisi aktivitas yang tidak konsisten di seluruh pembilang dan penyebut**: ini dapat menghasilkan rasio kelekatan yang tidak mencerminkan intensitas keterlibatan sejati dan tidak dapat dibandingkan secara bermakna seiring waktu atau dengan produk lain.
- **Memperlakukan rasio kelekatan yang meningkat sebagai positif tanpa ambiguitas tanpa memeriksa tren MAU keseluruhan**: rasio yang meningkat yang didorong oleh basis pengguna inti yang menyusut dan lebih berkebiasaan sementara MAU keseluruhan menurun adalah situasi yang sangat berbeda — dan lebih mengkhawatirkan — daripada yang didorong oleh peningkatan keterlibatan harian yang sejati di seluruh basis pengguna yang stabil atau berkembang.
- **Mengabaikan efek hari-dalam-minggu dan musiman pada DAU**: DAU dapat bervariasi secara substansial menurut hari dalam minggu (hari kerja versus akhir pekan) atau musim untuk banyak produk kesehatan; rata-ratakan DAU selama periode yang mencakup siklus alami penuh daripada jendela pendek yang bisa condong.

## Sumber

- Literatur yang ditinjau sejawat dan industri tentang metrik keterlibatan produk seluler dan digital, kerangka tolok ukur yang banyak digunakan dari platform analitik seluler
- Digital Therapeutics Alliance, panduan praktik terbaik tentang pengukuran keterlibatan untuk terapeutik digital
- Literatur yang ditinjau sejawat tentang pengukuran keterlibatan kesehatan digital, misalnya studi yang diterbitkan di Journal of Medical Internet Research (JMIR mHealth and uHealth)

Lihat juga: [tingkat retensi pengguna](../tingkat-retensi-pengguna/) dan [tingkat konsistensi keterlibatan pasien](../tingkat-konsistensi-keterlibatan-pasien/), dua metrik keterlibatan terkait yang paling sering tertukar dengan rasio ini.
