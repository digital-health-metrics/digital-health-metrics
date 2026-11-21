# Kadar Pengekalan Pengguna

Kadar pengekalan pengguna ialah bahagian pengguna yang aktif dalam tempoh permulaan yang kekal aktif dalam tempoh kemudian, dan songsangannya, kadar churn (atau keciciran), ialah bahagian yang berhenti menggunakan produk sama sekali. Jika kadar penerimaan portal pesakit (lihat topik tersebut) mengukur sama ada pesakit pernah mengaktifkan produk kesihatan digital dengan bermakna, pengekalan mengukur sama ada mereka terus menggunakannya, dan bagi mana-mana produk kesihatan digital gaya langganan atau penjagaan berterusan, pengekalan lazimnya metrik tunggal yang paling rapat dikaitkan dengan kesan klinikal dan kemampanan komersial.

## Mengapa ia penting

Produk kesihatan digital yang tidak dapat mengekalkan pengguna tidak dapat menyampaikan manfaat klinikal yang berterusan, sekukuh mana pun angka penerimaan atau pengaktifan awalnya: alat pengurusan keadaan kronik yang digunakan selama dua minggu kemudian ditinggalkan tidak mungkin menggerakkan hasil biometrik yang bergantung pada perubahan tingkah laku yang berterusan selama berbulan-bulan. Pengekalan juga salah satu metrik yang paling berimpak dari segi komersial yang dilaporkan syarikat kesihatan digital kepada pelabur dan pembayar, kerana lengkung pengekalan (bentuk penurunan dari semasa ke semasa, bukan hanya satu peratusan pengekalan) mendedahkan sama ada produk telah menemui corak penggunaan yang benar-benar mampan atau sekadar menangkap minat awal yang didorong kebaharuan yang pudar secara boleh diramal. Lengkung pengekalan yang mendatar selepas penurunan awal (pesakit yang melepasi bulan pertama cenderung kekal) ialah isyarat yang sangat berbeza, dan jauh lebih sihat, daripada yang terus menurun secara stabil tanpa dasar.

## Cara pengiraannya

```
Kadar pengekalan (tempoh N) = pengguna aktif dalam tempoh N yang juga
                               aktif dalam tempoh kohort permulaan /
                               pengguna dalam tempoh kohort permulaan
                               × 100

Kadar churn = 1 − kadar pengekalan (bagi tempoh yang sama)

Laporkan sebagai lengkung pengekalan kohort (pengekalan pada hari/minggu/
bulan 1, 2, 3…), bukan angka pada satu titik masa, kerana satu gambaran
seketika mencampuradukkan pengguna yang baru menyertai (yang belum
berpeluang churn) dengan yang telah lama berkhidmat.
```

## Contoh kerja

Sebuah aplikasi kesihatan digital mendaftarkan kohort 1,000 pengguna baharu pada bulan Januari. Menjelang akhir bulan 1, 640 daripada 1,000 asal itu masih aktif (pengekalan bulan-1 64%). Menjelang akhir bulan 3, 410 kekal aktif (pengekalan bulan-3 41%). Menjelang bulan 6, 380 kekal aktif (pengekalan bulan-6 38%). Bentuk lengkung ini, penurunan awal yang curam diikuti pendataran antara bulan 3 dan 6, menunjukkan bahawa produk mengekalkan teras pengguna yang stabil sebaik sahaja mereka melepasi halangan penerimaan awal, iaitu isyarat yang berbeza dengan ketara dan lebih menggalakkan berbanding jika penurunan dari bulan 3 ke bulan 6 berterusan pada kadar yang sama seperti bulan 1 hingga 3.

## Sumber data dan kaveat

Pengekalan dikira daripada log peristiwa log masuk atau aktiviti produk sendiri, dengan "aktif" ditakrifkan secara konsisten (contohnya sekurang-kurangnya satu sesi layak dalam tempoh itu) merentas setiap kohort yang dibandingkan. Kohort harus dibandingkan secara setara, dengan takrifan permulaan "aktif" yang sama dan tempoh tetingkap pemerhatian yang sama, kerana perbezaan takrifan yang kecil pun (bulan 30 hari berbanding 28 hari, atau ambang "aktif" yang lebih ketat berbanding lebih longgar) boleh mengubah peratusan pengekalan yang dilaporkan beberapa mata tanpa sebarang perbezaan sebenar dalam tingkah laku pengguna. Kesan bermusim adalah lazim dalam aplikasi kesihatan yang dikaitkan dengan azam Tahun Baharu atau tempoh kesedaran kesihatan tertentu, jadi perbandingan kohort tahun ke tahun lazimnya lebih bermaklumat daripada membandingkan kohort bersebelahan daripada masa yang berbeza dalam tahun.

## Perangkap

- **Melaporkan satu gambaran pengekalan dan bukan lengkung**: angka "X% pengguna masih aktif" tanpa bentuk penurunan dari semasa ke semasa tidak dapat membezakan produk yang mendatar (sihat) daripada yang dalam penurunan berterusan (tidak sihat).
- **Mengubah takrifan "aktif" antara tempoh pelaporan**: melonggarkan takrifan pengguna aktif (contohnya mengira bukaan aplikasi pasif dan bukannya tindakan yang selesai) boleh menjadikan pengekalan kelihatan bertambah baik sedangkan penggunaan sebenar tidak berubah langsung.
- **Mengabaikan kemusiman kohort**: membandingkan pengekalan kohort Januari (yang sering digelembungkan oleh pendaftaran azam Tahun Baharu, yang membawa masuk kohort yang kurang bermotivasi secara purata) dengan kohort yang diperoleh pada masa lain dalam tahun boleh menghasilkan kesimpulan arah aliran yang mengelirukan.
- **Menggabungkan kohort organik dan pemerolehan berbayar**: pengguna yang diperoleh melalui saluran berbeza sering dikekalkan dengan sangat berbeza; menggabungkannya menjadi satu angka pengekalan agregat boleh menyembunyikan masalah pengekalan khusus saluran.

## Sumber

- Literatur yang dikaji sejawat tentang penglibatan dan atrisi aplikasi kesihatan digital, contohnya kajian yang diterbitkan dalam Journal of Medical Internet Research (JMIR mHealth and uHealth)
- Digital Therapeutics Alliance, panduan amalan terbaik tentang pengukuran penglibatan dan pengekalan bagi terapeutik digital
- Laporan penandaarasan industri tentang pengekalan aplikasi kesihatan mudah alih, daripada platform analitik dan organisasi penyelidikan pasaran kesihatan digital

Lihat juga: [kadar konsistensi penglibatan pesakit](../kadar-konsistensi-penglibatan-pesakit/), yang mengukur kualiti penglibatan dalam kalangan pengguna yang dikekalkan, berbeza daripada sama ada mereka kekal berdaftar langsung.
