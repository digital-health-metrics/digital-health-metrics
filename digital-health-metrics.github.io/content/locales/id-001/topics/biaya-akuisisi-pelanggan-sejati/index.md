# Biaya Akuisisi Pelanggan Sejati

Biaya akuisisi pelanggan sejati (true CAC) adalah biaya penuh yang dibebankan untuk memperoleh satu pelanggan pembayar baru atau pasien terdaftar, mencakup tidak hanya belanja iklan berbayar tetapi setiap biaya lain yang secara material berkontribusi pada akuisisi tersebut: biaya agensi dan kreatif, infrastruktur teknologi pemasaran dan analitik, dan — khusus untuk kesehatan digital — biaya tenaga kerja klinis atau operasional untuk penerimaan, verifikasi kelayakan, dan onboarding. Ini ada sebagai metrik terpisah karena angka biaya akuisisi yang dilaporkan platform iklan secara rutin dan substansial meremehkan biaya sebenarnya organisasi per pelanggan yang diperoleh.

## Mengapa Ini Penting

Organisasi kesehatan digital yang mengelola pertumbuhan hanya menggunakan angka biaya-per-akuisisi yang dilaporkan platform iklan secara rutin membuat keputusan alokasi sumber daya berdasarkan angka yang menghilangkan 30-50% dari biaya akuisisi sebenarnya, karena angka platform tersebut hanya menangkap belanja media dan mengecualikan biaya agensi, lisensi teknologi pemasaran, dan — sangat penting untuk layanan kesehatan — pekerjaan penerimaan dan verifikasi kelayakan yang padat tenaga kerja yang dilakukan tim klinis atau operasional untuk setiap pasien baru sebelum mereka dapat dihitung sebagai diperoleh. Celah ini lebih penting dalam kesehatan digital daripada di sebagian besar sektor lain justru karena tenaga kerja penerimaan klinis mahal dan wajib, tidak seperti di e-commerce, di mana "penjualan" pada dasarnya tidak memerlukan tenaga kerja back-office yang sebanding. Sebuah tim yang mengoptimalkan belanja pemasaran terhadap angka CAC yang secara artifisial rendah akan secara sistematis terlalu banyak berinvestasi pada saluran yang terlihat murah di dasbor platform tetapi mahal setelah true CAC dihitung.

## Cara Menghitungnya

```
True CAC = (belanja media berbayar + biaya agensi dan kreatif + biaya
           teknologi pemasaran dan analitik + biaya tenaga kerja
           penerimaan klinis/operasional) / pelanggan atau pasien baru
           yang diperoleh dalam periode

Biaya tenaga kerja penerimaan klinis/operasional harus diperkirakan
dari biaya tenaga kerja penuh (gaji, tunjangan, overhead) × rata-rata
jam yang dihabiskan per pasien yang diperoleh untuk penerimaan,
verifikasi kelayakan, dan onboarding.
```

## Contoh Perhitungan

Sebuah perusahaan kesehatan digital memperoleh 500 pasien baru dalam sebulan. Dasbor platform iklan melaporkan biaya-per-akuisisi gabungan sebesar $120, berdasarkan belanja media berbayar $60.000. Menambahkan biaya agensi $9.000, biaya teknologi pemasaran $6.000, dan perkiraan biaya tenaga kerja penerimaan 45 menit per pasien dengan biaya staf penuh $40/jam (500 × 0,75 × $40 = $15.000) membawa total biaya akuisisi menjadi $60.000 + $9.000 + $6.000 + $15.000 = $90.000. True CAC adalah $90.000 / 500 = $180 — 50% lebih tinggi dari angka $120 yang dilaporkan platform iklan saja, dan angka yang sebenarnya harus menginformasikan alokasi anggaran saluran dan keputusan ekonomi unit.

## Sumber Data dan Catatan Penting

Belanja media berbayar dan biaya-per-akuisisi yang dilaporkan platform berasal langsung dari platform periklanan itu sendiri (pencarian, sosial, programatik); biaya agensi dan teknologi pemasaran berasal dari catatan keuangan atau hutang usaha; biaya tenaga kerja penerimaan adalah komponen paling sulit untuk diperoleh secara akurat dan biasanya memerlukan baik studi waktu-dan-gerak atau perkiraan yang wajar yang disepakati dengan kepemimpinan operasional, karena sebagian besar organisasi tidak melacak waktu staf per akuisisi secara native. True CAC harus dihitung per saluran akuisisi di mana volume memungkinkan, karena biaya tenaga kerja penerimaan per pasien sering serupa di seluruh saluran sementara biaya media sangat bervariasi, yang berarti celah antara CAC yang dilaporkan platform dan true CAC secara proporsional terbesar untuk saluran yang terlihat paling murah.

## Jebakan Umum

- **Hanya mengandalkan dasbor platform iklan**: biaya-per-akuisisi yang dilaporkan platform secara struktural mengecualikan biaya agensi, biaya teknologi pemasaran, dan tenaga kerja penerimaan, dan bukan pengganti perhitungan true CAC yang sebenarnya.
- **Menghilangkan tenaga kerja penerimaan klinis atau operasional**: ini secara konsisten merupakan komponen biaya yang paling sering terlewat dalam kesehatan digital secara khusus, dan sering menjadi kontributor tunggal terbesar celah antara biaya yang dilaporkan platform dan true CAC.
- **Merata-ratakan true CAC di seluruh saluran**: angka true CAC gabungan dapat menyembunyikan bahwa satu saluran secara dramatis lebih mahal setelah biaya penuh dimasukkan, meskipun terlihat paling murah di platform iklan saja.
- **Tidak memperbarui perkiraan biaya tenaga kerja seiring perubahan proses penerimaan**: desain ulang proses penerimaan (misalnya, mengotomatisasi verifikasi kelayakan) dapat secara material mengubah true CAC, dan perkiraan tenaga kerja yang usang akan salah menyatakan angka saat ini.

## Sumber

- Association of National Advertisers (ANA), panduan tentang pengukuran biaya pemasaran dan transparansi media
- Literatur yang ditinjau sejawat dan industri tentang ekonomi unit kesehatan digital dan struktur biaya go-to-market, misalnya analisis yang diterbitkan oleh Rock Health dan organisasi riset kesehatan digital serupa
- Healthcare Financial Management Association (HFMA), panduan tentang akuntansi biaya penuh dalam operasi layanan kesehatan

Lihat juga: [rasio LTV terhadap CAC](../rasio-ltv-terhadap-cac/), yang mana true CAC adalah salah satu dari dua inputnya.
