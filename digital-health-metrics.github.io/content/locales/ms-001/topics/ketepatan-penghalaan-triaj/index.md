# Ketepatan Penghalaan Triaj

Ketepatan penghalaan triaj ialah bahagian pertemuan pesakit di mana alat triaj automatik atau berbantukan AI menghalakan pesakit dengan betul ke tahap dan tetapan penjagaan yang sesuai, misalnya penjagaan kendiri, penjagaan primer, penjagaan segera atau penjagaan kecemasan, sebagaimana dinilai berbanding piawaian rujukan yang disahkan secara klinikal. Ia ialah metrik keselamatan dan keberkesanan bagi mana-mana pintu depan digital, penyemak gejala atau sistem triaj AI: seluruh proposisi nilai alat itu bergantung pada penghalaan pesakit dengan betul, pantas dan konsisten.

## Mengapa ia penting

Alat triaj yang tidak tepat menyebabkan kemudaratan ke kedua-dua arah: kurang triaj (menghalakan pesakit ke tahap penjagaan yang lebih rendah daripada yang diperlukan) boleh menangguhkan rawatan bagi kecemasan sebenar, manakala lebih triaj (menghalakan pesakit ke tahap penjagaan yang lebih tinggi daripada yang diperlukan) membazirkan kapasiti penjagaan kecemasan dan segera yang terhad serta menambah kos dan kebimbangan pesakit tanpa manfaat klinikal. Oleh sebab kedua-dua mod kegagalan ini mempunyai akibat yang sangat berbeza, ketepatan penghalaan triaj harus sentiasa dilaporkan bersama arah kesilapan, dan bukan sebagai satu angka ketepatan agregat yang menyembunyikan sama ada alat itu tersilap dengan selamat atau secara berbahaya. Pengawal selia dan sistem kesihatan yang menilai alat triaj AI untuk penempatan semakin memerlukan pelaporan ketepatan berstrata seperti ini sebagai syarat kelulusan klinikal, terutamanya bagi alat yang beroperasi dengan sebarang tahap autonomi daripada klinisien.

## Cara pengiraannya

```
Ketepatan penghalaan triaj = pertemuan yang dihalakan dengan betul / jumlah pertemuan yang ditriaj × 100

Laporkan kurang triaj dan lebih triaj secara berasingan:
  Kadar kurang triaj = pertemuan yang dihalakan ke tahap akuiti lebih
                        rendah daripada piawaian rujukan / jumlah
                        pertemuan yang ditriaj × 100
  Kadar lebih triaj  = pertemuan yang dihalakan ke tahap akuiti lebih
                        tinggi daripada piawaian rujukan / jumlah
                        pertemuan yang ditriaj × 100

Piawaian rujukan lazimnya semakan klinisien secara retrospektif ke atas
kes yang sama, dibutakan terhadap output alat jika boleh.
```

## Contoh kerja

Alat penyemak gejala AI mentriaj 5,000 pertemuan pesakit dalam sebulan. Semakan klinisien secara buta ke atas sampel rawak 500 pertemuan ini mendapati 430 dihalakan ke tahap akuiti yang betul (ketepatan 86%), 45 kurang ditriaj (9%), dan 25 lebih ditriaj (5%). Kadar kurang triaj 9% ialah angka yang paling segera memerlukan siasatan, kerana ia mewakili pertemuan di mana pesakit mungkin telah diarahkan ke penjagaan yang kurang segera daripada yang sebenarnya diperlukan; kadar lebih triaj 5% ialah kebimbangan kapasiti dan kos tetapi bukan kebimbangan keselamatan secara langsung.

## Sumber data dan kaveat

Piawaian rujukan yang digunakan untuk mengukur ketepatan triaj sangat penting: semakan oleh seorang klinisien memperkenalkan kebolehubahan pertimbangan klinisien itu sendiri, jadi angka ketepatan yang boleh dipercayai lazimnya memerlukan sama ada beberapa penyemak bebas dengan persetujuan antara penilai yang didokumenkan, atau perbandingan dengan hasil klinikal yang disahkan kemudian (penjagaan yang sebenarnya diperlukan pesakit, ditetapkan selepas kejadian). Persampelan juga penting: menyemak hanya sampel mudah pertemuan, atau hanya yang ditandai luar biasa, tidak akan menghasilkan angka yang boleh digeneralisasikan kepada prestasi keseluruhan alat. Angka ketepatan harus dilaporkan secara berasingan mengikut gejala atau kategori aduan yang dikemukakan di mana isi padu kes asas membenarkan, kerana alat triaj jarang berprestasi seragam merentas semua keadaan.

## Perangkap

- **Melaporkan satu angka ketepatan gabungan**: merumuskan kurang triaj dan lebih triaj ke dalam satu angka menyembunyikan sama ada kesilapan alat condong ke arah mod kegagalan yang lebih berbahaya; sentiasa laporkan secara berasingan.
- **Menggunakan seorang penyemak tunggal yang tidak dibutakan sebagai piawaian rujukan**: ini boleh membiaskan angka ketepatan secara senyap ke arah apa jua yang akan dilakukan oleh penyemak itu sendiri, dan bukannya piawaian klinikal yang bebas.
- **Mengesahkan hanya pada data retrospektif yang mudah**: ketepatan penghalaan sebenar alat di bawah input pesakit yang langsung dan samar-samar sering berbeza dengan ketara daripada ketepatannya pada set pengesahan terkurasi yang dihimpun semasa pembangunan.
- **Mengabaikan hanyutan prestasi selepas penempatan**: ketepatan model triaj AI boleh merosot dari semasa ke semasa apabila populasi pesakit, gejala yang dikemukakan atau ketersediaan laluan penjagaan berubah; ketepatan harus diukur semula secara berulang, bukan disahkan sekali dan dianggap stabil.

## Sumber

- ONC / HealthIT.gov, panduan tentang keselamatan dan jaminan kualiti sokongan keputusan klinikal dan alat berkeupayaan AI
- Literatur yang dikaji sejawat tentang ketepatan penyemak gejala dan alat triaj AI, contohnya kajian yang diterbitkan dalam JAMIA, npj Digital Medicine dan BMJ Health & Care Informatics
- NHS England, panduan tentang keselamatan klinikal alat triaj digital dan konsultasi jarak jauh (piawaian pengurusan risiko klinikal DCB0129/DCB0160)

Lihat juga: [masa pusing ganti rujukan digital](../masa-pusing-ganti-rujukan-digital/), metrik proses yang paling langsung berada di hiliran keputusan triaj.
