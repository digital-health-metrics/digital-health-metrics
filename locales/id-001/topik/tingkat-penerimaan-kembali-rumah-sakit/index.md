# Tingkat Penerimaan Kembali Rumah Sakit

Tingkat penerimaan kembali rumah sakit adalah proporsi pasien yang dipulangkan yang diterima kembali ke rumah sakit secara tidak terencana dalam jangka waktu tertentu setelah pemulangan — paling umum 30 hari. Untuk kesehatan digital, ini adalah metrik yang paling langsung terkait dengan ekonomi pembayar dan kontrak perawatan berbasis nilai: sebuah program pemantauan jarak jauh, tindak lanjut pasca-pemulangan, atau transisi perawatan digital yang tidak dapat menunjukkan efek yang kredibel pada penerimaan kembali kemungkinan besar tidak akan mendapatkan dukungan penggantian biaya berkelanjutan, betapapun baiknya angka keterlibatannya.

## Mengapa Ini Penting

Penerimaan kembali yang tidak terencana mahal, mengganggu pasien, dan di banyak sistem kesehatan kini dikenakan sanksi langsung: skema seperti US Hospital Readmissions Reduction Program mengurangi pembayaran kepada rumah sakit dengan tingkat penerimaan kembali yang lebih tinggi dari yang diharapkan untuk kondisi tertentu, itulah sebabnya rumah sakit secara aktif mengontrak program pasca-pemulangan digital dan pemantauan jarak jauh yang bertujuan menguranginya. Sebagian besar penerimaan kembali dianggap berpotensi dapat dicegah — didorong oleh instruksi pemulangan yang tidak memadai, janji tindak lanjut yang terlewat, kesalahpahaman pengobatan, atau perburukan gejala yang tidak tertangani yang dapat ditangkap lebih awal oleh titik kontak digital yang dirancang dengan baik — yang merupakan celah yang justru menjadi sasaran alat perawatan transisi digital. Tingkat penerimaan kembali harus selalu dibaca bersama campuran kasus: sebuah program yang melayani populasi yang lebih sakit dan lebih kompleks akan memiliki tingkat dasar yang secara struktural lebih tinggi daripada yang melayani populasi yang lebih sehat, terlepas dari kualitas program.

## Cara Menghitungnya

```
Tingkat penerimaan kembali 30 hari = penerimaan kembali tidak terencana
                                      dalam 30 hari setelah pemulangan /
                                      total pemulangan indeks × 100

Keluarkan dari pembilang: penerimaan kembali terencana (misalnya
prosedur tindak lanjut terjadwal), dan transfer yang merupakan
kelanjutan dari episode perawatan yang sama, bukan penerimaan baru.

Lakukan penyesuaian risiko jika memungkinkan, menggunakan indeks
campuran kasus atau komorbiditas yang diterima, sebelum membandingkan
tingkat di berbagai populasi pasien atau periode waktu.
```

## Contoh Perhitungan

Sebuah rumah sakit memulangkan 1.200 pasien dengan gagal jantung dalam satu kuartal. Dari jumlah tersebut, 210 diterima kembali dalam 30 hari, di mana 15 adalah penerimaan kembali terencana untuk prosedur terjadwal dan dikeluarkan. Tingkat penerimaan kembali 30 hari yang tidak terencana adalah (210 − 15) / 1.200 × 100 = 16,25%. Sebuah program pemantauan jarak jauh diperkenalkan untuk sebagian dari 400 pasien ini (dipilih berdasarkan risiko klinis, bukan secara acak), dan tingkat penerimaan kembali tidak terencana mereka adalah 14%, dibandingkan dengan 18% untuk 800 pasien yang tidak terdaftar. Karena pendaftaran didasarkan pada risiko klinis bukan penugasan acak, perbedaan ini bersifat sugestif, bukan bukti konklusif, dari efek program, dan harus ditafsirkan bersama analisis penyesuaian risiko, bukan diterima begitu saja.

## Sumber Data dan Catatan Penting

Data penerimaan kembali biasanya diambil dari umpan admission-discharge-transfer (ADT) rumah sakit sendiri untuk penerimaan kembali ke fasilitas yang sama, tetapi seorang pasien yang diterima kembali ke rumah sakit yang berbeda tidak akan muncul sama sekali dalam umpan tersebut, sehingga pelacakan penerimaan kembali satu rumah sakit secara sistematis meremehkan tingkat penerimaan kembali sebenarnya kecuali dilengkapi dengan data pertukaran informasi kesehatan regional, data klaim pembayar, atau basis data semua-pembayar tingkat negara bagian. Atribusi ke program digital memerlukan kehati-hatian: pasien yang memilih untuk mengikuti program pemantauan jarak jauh sukarela jarang merupakan sampel acak dari populasi yang dipulangkan, sehingga perbandingan naif antara tingkat penerimaan kembali yang terdaftar versus tidak terdaftar cenderung dikacaukan oleh efek seleksi yang justru membuat beberapa pasien lebih mungkin mendaftar sejak awal.

## Jebakan Umum

- **Membandingkan tingkat mentah yang tidak disesuaikan risiko di berbagai populasi**: sebuah program yang melayani populasi yang lebih sakit akan menunjukkan tingkat penerimaan kembali mentah yang lebih tinggi daripada yang melayani populasi yang lebih sehat bahkan jika program itu sendiri lebih efektif; selalu lakukan penyesuaian risiko sebelum membandingkan.
- **Kurang menghitung penerimaan kembali ke fasilitas lain**: hanya mengandalkan data ADT satu rumah sakit sendiri akan melewatkan penerimaan kembali di tempat lain, meremehkan tingkat sebenarnya, khususnya di area dengan banyak sistem rumah sakit yang bersaing.
- **Bias seleksi dalam pendaftaran program sukarela**: pasien yang memilih untuk mendaftar dalam program tindak lanjut digital sering berbeda secara sistematis (dalam literasi kesehatan, dukungan sosial, atau motivasi) dari mereka yang tidak, mengacaukan perbandingan sebelum/sesudah atau terdaftar/tidak terdaftar yang naif.
- **Menghitung setiap kembalinya ke fasilitas yang sama sebagai penerimaan kembali**: penerimaan kembali yang terjadwal dan terencana (misalnya prosedur tahap kedua yang direncanakan) bukan sinyal pemulangan yang gagal dan harus dikeluarkan dari pembilang, bukan dicampur dengan kembalinya yang benar-benar tidak terencana.

## Sumber

- Centers for Medicare & Medicaid Services (CMS), spesifikasi ukuran Hospital Readmissions Reduction Program dan Hospital-Wide Readmission
- Institute for Healthcare Improvement (IHI), panduan tentang mengurangi penerimaan kembali yang dapat dihindari
- Literatur yang ditinjau sejawat tentang intervensi pemantauan jarak jauh digital dan perawatan transisi untuk pengurangan penerimaan kembali, misalnya studi yang diterbitkan di JAMA Network Open dan npj Digital Medicine

Lihat juga: [akurasi perutean triase](../akurasi-perutean-triase/), karena perutean awal yang tidak tepat dapat menjadi pendorong hilir dari penerimaan yang dapat dihindari itu sendiri.
