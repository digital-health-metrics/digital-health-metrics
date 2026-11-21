# Kadar Konsistensi Penglibatan Pesakit

Kadar konsistensi penglibatan pesakit mengukur seberapa kerap pesakit berdaftar berinteraksi dengan produk kesihatan digital dari semasa ke semasa, misalnya mencatat makanan atau gejala, merekodkan aktiviti fizikal atau melihat data kesihatan, dan bukannya sekadar sama ada mereka pernah menggunakannya. Ia ialah metrik membujur, berbeza daripada kiraan penggunaan aktif pada satu titik masa: dua pesakit boleh mempunyai status "menggunakan aplikasi bulan ini" yang sama, sementara seorang mencatat secara konsisten setiap hari dan seorang lagi mencatat sekali lalu hilang selama tiga minggu, dan hanya metrik konsistensi yang membezakan mereka.

## Mengapa ia penting

Interaksi yang berterusan dan tetap dengan alat kesihatan digital ialah salah satu penunjuk awal manfaat klinikal yang lebih boleh dipercayai, terutamanya bagi keadaan yang bergantung pada tingkah laku seperti diabetes, pengurusan berat badan dan kesihatan mental, di mana nilai alat itu datang daripada tabiat yang disokongnya dan bukan mana-mana satu sesi. Produk boleh melaporkan bilangan pengguna aktif bulanan yang sihat sambil sebenarnya melayani populasi yang log masuk sekali lalu menghilang, kerana penggunaan aktif bulanan ialah paras rendah yang tidak menyatakan apa-apa tentang corak penggunaan dalam bulan itu; metrik konsistensi menangkap ini dengan cara yang tidak dapat dilakukan oleh kiraan aktiviti mudah. Oleh sebab konsistensi juga salah satu perkara yang lebih sukar dikekalkan sepanjang bulan dan bukan minggu, ia ialah isyarat yang lebih jujur tentang kualiti produk dan kesesuaian klinikal berbanding angka penglibatan tetingkap pendek, yang cenderung kepada kesan kebaharuan sebaik sahaja selepas orientasi.

## Cara pengiraannya

```
Kadar konsistensi penglibatan = minggu dengan sekurang-kurangnya satu
                                 interaksi layak / jumlah minggu
                                 berdaftar × 100

"Interaksi layak" harus ditakrifkan secara jelas dan konsisten (cth.
entri log makanan, daftar masuk gejala atau penyegerakan aktiviti yang
selesai); jangan sekali-kali peristiwa pasif seperti bukaan aplikasi
tanpa tindakan yang dilog.

Laporkan sebagai taburan, bukan hanya min populasi:
  cth. bahagian pesakit dengan konsistensi mingguan ≥ 80%,
       bahagian dengan 50-79%, bahagian dengan < 50%
```

## Contoh kerja

Sebuah aplikasi bimbingan pemakanan mendaftarkan seorang pesakit selama 12 minggu. Pesakit itu melog sekurang-kurangnya satu entri makanan yang layak dalam 9 daripada 12 minggu itu, memberikan kadar konsistensi penglibatan individu 9 / 12 × 100 = 75%. Merentas keseluruhan kohort aplikasi seramai 2,000 pesakit yang berdaftar sekurang-kurangnya 12 minggu, 600 pesakit (30%) mengekalkan konsistensi mingguan ≥ 80%, 900 (45%) berada dalam jalur 50-79%, dan 500 (25%) berada di bawah 50%. Melaporkan hanya purata kohort (yang mungkin sekitar 65%) akan menyembunyikan bahawa satu perempat penuh pesakit hampir tidak melibatkan diri langsung, iaitu segmen yang wajar disiasat secara berasingan dan bukannya dicairkan ke dalam min keseluruhan.

## Sumber data dan kaveat

Data konsistensi datang daripada log peristiwa produk sendiri (entri makanan, penyegerakan aktiviti, daftar masuk), dan takrifan "interaksi layak" mempunyai kesan yang sangat besar terhadap kadar yang terhasil: takrifan longgar (sebarang bukaan aplikasi) sentiasa kelihatan lebih baik daripada takrifan ketat (entri log yang lengkap dan bermakna), jadi takrifan yang digunakan mesti dinyatakan dengan jelas bersama sebarang angka yang dilaporkan. Data yang disegerakkan secara automatik (contohnya penjejak kecergasan bersambung yang menyegerakkan aktiviti di latar belakang) harus dilaporkan secara berasingan daripada data yang dilog secara manual, kerana penyegerakan automatik boleh menggelembungkan konsistensi ketara tanpa mencerminkan sebarang usaha aktif pesakit atau penglibatan dengan panduan produk.

## Perangkap

- **Mencampuradukkan bukaan aplikasi dengan penglibatan bermakna**: bukaan aplikasi yang pasif (contohnya dicetuskan oleh pemberitahuan tolak) tidak sama dengan entri makanan yang dilog atau daftar masuk yang selesai; takrif dan laporkan interaksi layak sahaja.
- **Melaporkan hanya purata populasi**: purata kadar konsistensi yang kelihatan sihat boleh menyembunyikan populasi bimodal pesakit yang sangat terlibat dan hampir sepenuhnya tidak terlibat; laporkan taburan merentas jalur konsistensi, bukan hanya min.
- **Mengabaikan penyebut tempoh pendaftaran**: membandingkan kadar konsistensi antara pesakit yang berdaftar untuk tempoh yang sangat berbeza tanpa mengambil kira tempoh pendaftaran akan membiaskan ke arah kumpulan yang mempunyai tetingkap pengukuran yang lebih pendek dan lebih mudah dikekalkan.
- **Penyegerakan latar belakang automatik menggelembungkan kadar**: aliran data boleh pakai yang disegerakkan secara pasif boleh menjadikan pesakit yang tidak terlibat kelihatan aktif secara konsisten tanpa sebarang perubahan tingkah laku sebenar atau penglibatan dengan produk di pihaknya.

## Sumber

- Literatur yang dikaji sejawat tentang corak penglibatan kesihatan digital dan hubungannya dengan hasil klinikal, contohnya kajian yang diterbitkan dalam Journal of Medical Internet Research (JMIR)
- American Medical Informatics Association (AMIA), panduan tentang kualiti data kesihatan yang dijana pesakit dan pengukuran penglibatan
- Digital Therapeutics Alliance, panduan amalan terbaik tentang pengukuran penglibatan dan hasil bagi terapeutik digital

Lihat juga: [kadar pengekalan pengguna](../kadar-pengekalan-pengguna/), metrik berkait rapat tentang sama ada pesakit kekal berdaftar langsung, berbeza daripada seberapa konsisten mereka melibatkan diri semasa berdaftar.
