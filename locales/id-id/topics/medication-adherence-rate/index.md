# Tingkat Kepatuhan Pengobatan

Tingkat kepatuhan pengobatan mengukur sejauh mana seorang pasien mengonsumsi obat yang diresepkan sesuai petunjuk, paling umum dinyatakan sebagai proporsi hari dalam periode tertentu di mana pasien memiliki akses ke obat mereka sesuai resep. Ini adalah salah satu metrik kesehatan digital yang paling konsekuensial karena ketidakpatuhan umum terjadi, sebagian besar dapat dicegah dengan dukungan yang tepat, dan terkait langsung dengan hasil klinis yang lebih buruk serta biaya hilir yang lebih tinggi — yang merupakan celah yang justru dibangun untuk ditutup oleh aplikasi pengingat obat, botol pil pintar, dan pengingat isi ulang apotek.

## Mengapa Ini Penting

Ketidakpatuhan terhadap pengobatan penyakit kronis diperkirakan oleh badan kesehatan masyarakat mencapai setinggi 50% untuk beberapa kondisi, dan ini adalah penyebab utama yang dapat dicegah dari rawat inap yang dapat dihindari, perkembangan penyakit, dan kegagalan pengobatan yang salah dikaitkan dengan obat itu sendiri, bukan dengan penggunaan yang tidak konsisten. Alat kepatuhan digital ada secara khusus untuk menutup celah ini, sehingga untuk setiap program yang mencakup komponen pengobatan, tingkat kepatuhan biasanya merupakan satu-satunya metrik paling relevan untuk keputusan: ia berada secara kausal di hulu perbaikan biometrik, penerimaan kembali, dan sebagian besar metrik hasil klinis lainnya yang mungkin dilaporkan sebuah program. Sebuah program yang meningkatkan keterlibatan atau kepuasan tanpa menggerakkan kepatuhan mungkin belum menunjukkan mekanisme yang masuk akal untuk manfaat klinis.

## Cara Menghitungnya

```
Proportion of Days Covered (PDC) = hari dalam periode dengan obat di
                                    tangan (berdasarkan hari pasokan dari
                                    pengisian) / hari dalam periode
                                    pengukuran × 100

Medication Possession Ratio (MPR) = total hari pasokan yang diperoleh
                                    selama periode / hari dalam periode
                                    × 100 (dapat melebihi 100% dengan
                                    pengisian ulang dini; PDC umumnya
                                    lebih disukai karena alasan ini)

Seorang pasien biasanya diklasifikasikan "patuh" pada ambang batas PDC
≥ 80%, mengikuti konvensi ukuran mutu yang banyak digunakan.
```

## Contoh Perhitungan

Seorang pasien diresepkan obat kronis harian selama periode pengukuran 90 hari. Catatan pengisian apotek menunjukkan pasien memperoleh cukup obat untuk menutupi 76 dari 90 hari tersebut, dengan dua celah: celah 9 hari setelah kehabisan sebelum pengisian ulang, dan celah 5 hari di sekitar masuk rumah sakit. PDC adalah 76 / 90 × 100 = 84%, yang melewati ambang batas kepatuhan konvensional 80%. Jika celah yang sama diukur menggunakan MPR berdasarkan hari pasokan yang dikeluarkan daripada hari yang sebenarnya ditutupi, pengisian ulang dini di bagian lain periode tersebut dapat mendorong rasio di atas 100%, menggambarkan mengapa PDC adalah ukuran yang lebih konservatif dan umumnya lebih disukai.

## Sumber Data dan Catatan Penting

Data klaim atau pengisian apotek (baik dari pengelola manfaat farmasi atau sistem apotek yang terhubung) adalah sumber standar, karena mencerminkan apa yang sebenarnya diperoleh pasien, bukan apa yang diresepkan kepada mereka; data resep saja melebih-lebihkan kepatuhan karena tidak mengonfirmasi apakah pasien pernah mengambil obat tersebut. Alat kepatuhan digital — botol pil pintar, sensor yang dapat dicerna, inhaler pintar yang terhubung yang mencatat setiap aktuasi untuk kondisi pernapasan seperti asma dan PPOK, dan check-in berbasis aplikasi — menawarkan data resolusi lebih tinggi tentang apakah dosis sebenarnya diminum, bukan hanya diperoleh, tetapi digunakan oleh sebagian kecil pasien yang berpotensi tidak representatif, sehingga mencampur kepatuhan yang dikonfirmasi perangkat dengan PDC berbasis klaim di seluruh populasi memerlukan kehati-hatian dalam interpretasi. Kepatuhan harus diukur selama periode yang cukup lama untuk meratakan dosis yang terlewat satu kali tetapi cukup pendek untuk mendeteksi penurunan yang bermakna sebelum menyebabkan bahaya klinis — jendela bergulir 90 hari umum digunakan untuk obat kronis.

## Jebakan Umum

- **Menggunakan MPR tanpa mengungkapkan bahwa ia dapat melebihi 100%**: rasio yang tidak dijelaskan di atas 100% dari pengisian ulang dini atau penimbunan membuat perbandingan antar-pasien dan antar-periode tidak dapat diandalkan kecuali PDC digunakan atau rasio dibatasi secara eksplisit.
- **Memperlakukan data resep atau pesanan sebagai bukti kepatuhan**: resep yang ditulis atau dikirim ke apotek tidak mengatakan apa pun tentang apakah pasien mengambil atau meminum obat tersebut; hanya data pengisian atau perangkat yang menutup celah itu.
- **Menerapkan satu ambang batas kepatuhan di semua kondisi tanpa pandang bulu**: konsekuensi klinis dari melewatkan 20% dosis sangat bervariasi menurut kelas obat (misalnya antikoagulan versus statin), sehingga ambang batas tunggal 80% yang digunakan secara universal dapat merendahkan atau melebih-lebihkan risiko klinis untuk beberapa obat.
- **Mengabaikan pergantian dan penghentian pengobatan**: seorang pasien yang secara klinis dan tepat dipindahkan ke obat yang berbeda dapat tampak sebagai penurunan kepatuhan besar pada obat asli jika pergantian tersebut tidak diperhitungkan dalam perhitungan.

## Sumber

- Pharmacy Quality Alliance (PQA), spesifikasi ukuran Proportion of Days Covered
- Centers for Medicare & Medicaid Services (CMS), ukuran kepatuhan pengobatan Star Ratings
- Literatur yang ditinjau sejawat tentang pengukuran kepatuhan pengobatan dan intervensi kepatuhan digital, misalnya studi yang diterbitkan di Journal of Managed Care & Specialty Pharmacy

Lihat juga: [tingkat perbaikan biometrik](../biometric-improvement-rate/), yang didorong utamanya oleh kepatuhan terhadap pengobatan penyakit kronis.
