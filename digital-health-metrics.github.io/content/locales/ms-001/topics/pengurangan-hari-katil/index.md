# Pengurangan Hari Katil

Pengurangan hari katil mengukur jumlah hari katil pesakit dalam hospital yang dapat dielakkan dengan mengalihkan sesuatu episod rawatan yang ditakrifkan, selalunya pemulihan lepas pembedahan atau pengurusan keadaan akut, daripada penginapan pesakit dalam yang tradisional kepada alternatif yang disokong secara digital seperti wad maya atau program hospital di rumah. Ia ialah metrik kapasiti utama bagi inisiatif wad maya dan hospital di rumah, yang menterjemahkan perubahan model penjagaan klinikal secara terus kepada mata wang (kapasiti katil) yang diurus oleh operasi hospital dan perancang sistem.

## Mengapa ia penting

Kapasiti katil pesakit dalam ialah salah satu sumber yang paling terhad dan paling mahal dalam mana-mana sistem hospital, dan proposisi nilai utama program wad maya atau hospital di rumah ialah ia dapat menyampaikan tahap penjagaan klinikal tertentu dengan selamat tanpa menduduki katil fizikal, lalu membebaskan kapasiti itu untuk pesakit yang tidak dapat diurus dengan cara lain. Pengurangan hari katil menukar dakwaan yang sering abstrak ("program ini memperbaik penjagaan") kepada angka operasi yang konkrit, yang boleh terus digunakan oleh perancang kapasiti hospital, pasukan kewangan dan pihak pengomisen: ia boleh digunakan untuk memodelkan sama ada pelaburan dalam program pemantauan menampung kosnya melalui kos katil yang dielakkan, dan sebanyak mana. Oleh sebab pengurangan hari katil hanya bernilai jika keselamatan pesakit dikekalkan, ia harus sentiasa dilaporkan bersama, dan bukan sebagai pengganti, metrik hasil keselamatan (seperti kadar kemasukan semula atau kadar peningkatan kepada penjagaan pesakit dalam) bagi populasi yang sama.

## Cara pengiraannya

```
Pengurangan hari katil = hari katil dijangka di bawah penjagaan pesakit dalam
                         piawai (berdasarkan data sejarah tempoh penginapan
                         bagi kohort pesakit yang dipadankan) − hari katil
                         sebenar yang digunakan oleh pesakit pada laluan
                         maya/digital

Laporkan bagi setiap laluan klinikal (cth. pemulihan lepas pembedahan,
pencetusan semula penyakit pernafasan akut), kerana tempoh penginapan
yang dijangka sangat berbeza mengikut keadaan dan angka gabungan merentas
laluan yang tidak berkaitan tidak bermakna.
```

## Contoh kerja

Data sejarah sebuah hospital menunjukkan bahawa pesakit yang pulih daripada sesuatu prosedur pembedahan elektif tertentu mempunyai purata tempoh penginapan pesakit dalam selama 4 hari. Satu program wad maya mendaftarkan 150 pesakit yang pulih daripada prosedur yang sama, dan melepaskan mereka selepas purata 1.5 hari pesakit dalam, manakala baki pemulihan dipantau dari jauh. Pengurangan hari katil ialah (4 − 1.5) × 150 = 375 hari katil sepanjang tempoh pengukuran. Angka ini harus dilaporkan bersama kadar peningkatan kepada penjagaan pesakit dalam dalam tempoh 30 hari dan kadar kemasukan semula bagi kohort wad maya yang sama (150 pesakit), kerana penjimatan hari katil yang dibayar dengan kadar peningkatan atau kemasukan semula yang jauh lebih tinggi bukanlah kejayaan klinikal seperti yang disarankan oleh angka utama itu.

## Sumber data dan kaveat

Hari katil yang dijangka memerlukan garis dasar sejarah yang boleh dipercayai, sebaik-baiknya daripada kohort pesakit yang dipadankan dan dirawat di bawah penjagaan pesakit dalam piawai dengan ciri klinikal (umur, komorbiditi, jenis prosedur, keterukan) yang serupa dengan populasi wad maya, kerana perbandingan dengan purata sejarah yang tidak dipadankan berisiko melebih-lebihkan atau mengurang-kurangkan pengurangan sebenar jika kohort yang diurus secara digital sistematik lebih sihat atau lebih sakit daripada kumpulan perbandingan sejarah. Hari katil sebenar yang digunakan pada laluan digital datang daripada sistem kemasukan-pelepasan-pemindahan (ADT) hospital sendiri; sebarang peningkatan kembali kepada penjagaan pesakit dalam semasa tempoh pemulihan yang dipantau harus dikira secara jujur terhadap program (sebagai hari katil yang digunakan, bukan dikecualikan), kerana mengecualikan peningkatan daripada pengiraan akan menggelembungkan pengurangan yang ketara secara buatan.

## Perangkap

- **Melaporkan pengurangan hari katil tanpa perbandingan keselamatan yang dipadankan**: wad maya yang menjimatkan hari katil tetapi mempunyai kadar peningkatan atau kemasukan semula yang jauh lebih buruk daripada penjagaan piawai belum menunjukkan peningkatan yang tulen; laporkan kedua-duanya bersama.
- **Menggunakan garis dasar sejarah yang tidak dipadankan atau sudah lapuk**: perbandingan dengan kohort sejarah yang campuran kesnya, beban komorbiditinya atau zaman amalan klinikalnya berbeza boleh melebih-lebihkan atau mengurang-kurangkan penjimatan hari katil yang sebenar dengan ketara.
- **Mengecualikan peningkatan kembali kepada penjagaan pesakit dalam daripada pengiraan**: pesakit yang dipantau secara maya tetapi kemudian ditingkatkan ke katil pesakit dalam pada pertengahan pemulihan harus mempunyai hari katil tersebut dikira terhadap program, bukan digugurkan secara senyap daripada analisis.
- **Menggabungkan laluan yang tempoh penginapan dijangkanya sangat berbeza**: mengagregatkan pengurangan hari katil merentas laluan yang tidak berkaitan secara klinikal (misalnya menggabungkan pemulihan lepas pembedahan dan pengurusan penyakit pernafasan kronik) ke dalam satu angka menyembunyikan laluan tertentu yang sebenarnya mendorong penjimatan itu.

## Sumber

- NHS England, panduan program wad maya dan hospital di rumah serta piawaian pelaporan kesan hari katil
- Literatur yang dikaji sejawat tentang model hospital di rumah dan wad maya, contohnya kajian yang diterbitkan dalam JAMA Internal Medicine dan npj Digital Medicine
- Institute for Healthcare Improvement (IHI), panduan tentang pengurusan kapasiti dan model penjagaan alternatif

Lihat juga: [kadar kemasukan semula hospital](../kadar-kemasukan-semula-hospital/), metrik keselamatan yang harus sentiasa dilaporkan bersama sebarang dakwaan pengurangan hari katil bagi populasi pesakit yang sama.
