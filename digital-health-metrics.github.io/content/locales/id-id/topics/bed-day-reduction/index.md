# Pengurangan Hari-Tempat Tidur

Pengurangan hari-tempat tidur mengukur jumlah total hari tempat tidur rumah sakit rawat inap yang dihindari dengan mengalihkan episode perawatan tertentu — paling umum pemulihan pasca-bedah atau manajemen kondisi akut — dari rawat inap tradisional ke alternatif yang didukung digital seperti bangsal virtual atau program rumah sakit-di-rumah. Ini adalah metrik kapasitas utama untuk inisiatif bangsal virtual dan rumah sakit-di-rumah, menerjemahkan perubahan model perawatan klinis secara langsung ke dalam mata uang (kapasitas tempat tidur) yang benar-benar dikelola oleh operasi rumah sakit dan perencana sistem.

## Mengapa Ini Penting

Kapasitas tempat tidur rawat inap adalah salah satu sumber daya yang paling terbatas dan mahal dalam sistem rumah sakit mana pun, dan proposisi nilai utama program bangsal virtual atau rumah sakit-di-rumah adalah bahwa ia dapat dengan aman memberikan tingkat perawatan klinis tertentu tanpa menempati tempat tidur fisik, membebaskan kapasitas tersebut untuk pasien yang tidak dapat dikelola dengan cara lain. Pengurangan hari-tempat tidur mengubah klaim yang sering abstrak ("program ini meningkatkan perawatan") menjadi angka operasional konkret yang dapat langsung ditindaklanjuti oleh perencana kapasitas rumah sakit, tim keuangan, dan komisioner: ini dapat digunakan untuk memodelkan apakah investasi dalam program pemantauan terbayar sendiri dalam biaya tempat tidur yang dihindari, dan seberapa besar. Karena pengurangan hari-tempat tidur hanya bernilai jika keselamatan pasien terjaga, ini harus selalu dilaporkan bersama, tidak pernah menggantikan, metrik hasil keselamatan (seperti penerimaan kembali atau tingkat eskalasi-ke-perawatan-rawat-inap) untuk populasi yang sama.

## Cara Menghitungnya

```
Pengurangan hari-tempat tidur = hari tempat tidur yang diharapkan di
                                 bawah perawatan rawat inap standar
                                 (berdasarkan data lama rawat historis
                                 untuk kohort pasien yang dicocokkan) −
                                 hari tempat tidur aktual yang digunakan
                                 oleh pasien pada jalur virtual/digital

Laporkan per jalur klinis (misalnya pemulihan pasca-bedah, eksaserbasi
pernapasan akut), karena lama rawat yang diharapkan sangat bervariasi
menurut kondisi dan angka gabungan di seluruh jalur yang tidak
terkait tidak bermakna.
```

## Contoh Perhitungan

Data historis sebuah rumah sakit menunjukkan bahwa pasien yang pulih dari prosedur bedah elektif tertentu memiliki rata-rata lama rawat inap 4 hari. Sebuah program bangsal virtual mendaftarkan 150 pasien yang pulih dari prosedur yang sama, memulangkan mereka setelah rata-rata 1,5 hari rawat inap dengan sisa pemulihan dipantau dari jarak jauh. Pengurangan hari-tempat tidur adalah (4 − 1,5) × 150 = 375 hari tempat tidur selama periode pengukuran. Angka ini harus dilaporkan bersama tingkat eskalasi-ke-perawatan-rawat-inap 30 hari dan tingkat penerimaan kembali kohort bangsal virtual untuk 150 pasien yang sama, karena penghematan hari-tempat tidur yang datang dengan biaya tingkat eskalasi atau penerimaan kembali yang secara material lebih tinggi bukanlah kemenangan klinis yang disarankan angka utama tersebut.

## Sumber Data dan Catatan Penting

Hari tempat tidur yang diharapkan memerlukan dasar historis yang kredibel, idealnya dari kohort pasien yang dicocokkan yang dirawat di bawah perawatan rawat inap standar dengan karakteristik klinis yang serupa (usia, komorbiditas, jenis prosedur, keparahan) dengan populasi bangsal virtual, karena membandingkan dengan rata-rata historis yang tidak dicocokkan berisiko melebih-lebihkan atau meremehkan pengurangan sebenarnya jika kohort yang dikelola secara digital secara sistematis lebih sehat atau lebih sakit daripada kelompok pembanding historis. Hari tempat tidur aktual yang digunakan pada jalur digital berasal dari sistem admission-discharge-transfer (ADT) rumah sakit sendiri; eskalasi apa pun kembali ke perawatan rawat inap selama periode pemulihan yang dipantau harus dihitung dengan jujur terhadap program (sebagai hari tempat tidur yang digunakan, tidak dikecualikan), karena mengecualikan eskalasi dari perhitungan akan secara artifisial meningkatkan pengurangan yang tampak.

## Jebakan Umum

- **Melaporkan pengurangan hari-tempat tidur tanpa perbandingan keselamatan yang dicocokkan**: bangsal virtual yang menghemat hari-tempat tidur tetapi memiliki tingkat eskalasi atau penerimaan kembali yang secara material lebih buruk daripada perawatan standar belum menunjukkan perbaikan sejati; selalu laporkan keduanya bersama.
- **Menggunakan dasar historis yang tidak dicocokkan atau usang**: membandingkan dengan kohort historis dengan campuran kasus, beban komorbiditas, atau era praktik klinis yang berbeda dapat secara signifikan melebih-lebihkan atau meremehkan penghematan hari-tempat tidur sebenarnya.
- **Mengecualikan eskalasi kembali ke perawatan rawat inap dari perhitungan**: seorang pasien yang dipantau secara virtual tetapi kemudian dieskalasi ke tempat tidur rawat inap di tengah pemulihan harus memiliki hari tempat tidur tersebut dihitung terhadap program, tidak diam-diam dijatuhkan dari analisis.
- **Mencampur jalur dengan lama rawat yang diharapkan sangat berbeda**: menggabungkan pengurangan hari-tempat tidur di seluruh jalur yang tidak terkait secara klinis (misalnya menggabungkan pemulihan pasca-bedah dan manajemen pernapasan kronis) menjadi satu angka mengaburkan jalur spesifik mana yang sebenarnya mendorong penghematan.

## Sumber

- NHS England, panduan program bangsal virtual dan rumah sakit-di-rumah dan standar pelaporan dampak hari-tempat tidur
- Literatur yang ditinjau sejawat tentang model rumah sakit-di-rumah dan bangsal virtual, misalnya studi yang diterbitkan di JAMA Internal Medicine dan npj Digital Medicine
- Institute for Healthcare Improvement (IHI), panduan tentang manajemen kapasitas dan model perawatan alternatif

Lihat juga: [tingkat penerimaan kembali rumah sakit](../hospital-readmission-rate/), metrik keselamatan yang harus selalu dilaporkan bersama klaim pengurangan hari-tempat tidur mana pun untuk populasi pasien yang sama.
