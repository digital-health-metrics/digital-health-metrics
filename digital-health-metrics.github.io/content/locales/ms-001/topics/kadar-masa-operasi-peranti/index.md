# Kadar Masa Operasi Peranti

Kadar masa operasi peranti mengukur bahagian masa pemantauan berjadual apabila peranti kesihatan bersambung, iaitu penderia pemantauan pesakit jarak jauh, peranti boleh pakai atau unit telekesihatan rumah, benar-benar dalam talian, menghantar data dan berfungsi dengan betul, dan bukannya luar talian, terputus atau tidak berfungsi. Ia ialah metrik infrastruktur asas di bawah setiap program pemantauan jarak jauh atau peranti bersambung: amaran klinikal, arah aliran biometrik atau angka penglibatan yang dikira daripada peranti yang kerap luar talian hanya boleh dipercayai setakat kesambungan di sebaliknya.

## Mengapa ia penting

Keseluruhan proposisi nilai klinikal program pemantauan pesakit jarak jauh bergantung pada penangkapan data yang berterusan atau hampir berterusan; peranti dengan masa operasi yang lemah mewujudkan jurang senyap dalam gambaran klinikal pesakit yang boleh disalah anggap sebagai kestabilan (tiada amaran kerana tiada data, bukan kerana tiada perubahan) dan bukannya dikenal pasti dengan betul sebagai kegagalan pemantauan. Masa operasi peranti juga ialah penunjuk awal kos program dan pengalaman pesakit: peranti yang kerap terputus sambungan menjana panggilan sokongan, kekecewaan pesakit, dan jangkauan klinikal yang mungkin tidak perlu untuk menyemak sama ada jurang data mencerminkan peristiwa klinikal sebenar atau hanya kerosakan teknikal. Oleh sebab kegagalan masa operasi peranti sering boleh dikaitkan dengan infrastruktur yang dikawal oleh organisasi (get laluan selular yang dikonfigurasi dengan buruk, liputan Wi-Fi yang lemah di rumah pesakit, armada peranti yang kurang diselenggara) dan bukannya pesakit, metrik ini tergolong sepenuhnya dalam bidang vendor dan pasukan operasi teknikal, dan tidak harus digabungkan sewenang-wenangnya ke dalam metrik penglibatan pesakit.

## Cara pengiraannya

```
Kadar masa operasi peranti = masa peranti dalam talian dan menghantar
                              data yang sah / jumlah masa pemantauan
                              berjadual × 100

Segmen punca akar masa henti jika data membenarkan:
  Kegagalan sebelah peranti  (bateri, kerosakan perkakasan, ranap perisian tegar)
  Kegagalan kesambungan      (putus sambungan selular/Wi-Fi/VPN)
  Faktor sebelah pesakit     (peranti dimatikan, dialihkan di luar julat)

Parameter teknikal sokongan untuk dijejaki bersama masa operasi:
  Purata penggunaan CPU, penggunaan memori dan tahap bateri bagi setiap peranti
  Min masa antara kegagalan kesambungan
  Min masa untuk menyambung semula selepas putus sambungan
```

## Contoh kerja

Sebuah program pemantauan jantung jarak jauh menempatkan 1,000 peranti bersambung, setiap satu dijangka menghantar secara berterusan. Sepanjang bulan 30 hari (720 jam pemantauan berjadual bagi setiap peranti), armada itu mencatatkan gabungan 705,600 jam dalam talian sebenar berbanding 720,000 jam berjadual, memberikan kadar masa operasi peranti seluruh armada 705,600 / 720,000 × 100 = 98%. Analisis punca akar bagi 14,400 jam masa henti menunjukkan 60% dikaitkan dengan putus sambungan selular yang tertumpu di sesuatu wilayah perkhidmatan luar bandar tertentu, 25% dengan peranti yang bateri menuanya ditanda untuk penggantian, dan 15% dengan pesakit yang mematikan peranti mereka buat sementara waktu. Pecahan ini menunjuk kepada dua intervensi yang jelas dan berbeza, iaitu pembaikan kesambungan bagi wilayah yang terjejas dan program penggantian bateri secara proaktif, yang tidak akan dibezakan oleh satu angka masa operasi agregat.

## Sumber data dan kaveat

Data masa operasi datang daripada sistem pengurusan peranti dan telemetri pengilang peranti atau vendor platform sendiri, yang melog peristiwa sambungan dan degupan bagi setiap peranti; organisasi harus mengesahkan dengan tepat apa yang dikira vendor sebagai "dalam talian" (peranti boleh melaporkan dirinya bersambung ke rangkaian sedangkan gagal menghantar data klinikal yang sah, yang harus dikira sebagai masa henti bagi tujuan klinikal walaupun papan pemuka vendor sendiri melaporkannya sebagai bersambung). Masa operasi harus dilaporkan bagi setiap kohort peranti atau geografi jika isi padu membenarkan, kerana kualiti kesambungan sering berkelompok secara geografi (liputan selular luar bandar, Wi-Fi bangunan lama) dan bukannya tersebar sama rata merentas populasi pesakit, dan angka seluruh armada yang agregat boleh menyembunyikan masalah serantau yang teruk tetapi boleh ditangani.

## Perangkap

- **Mencampuradukkan sambungan rangkaian dengan penghantaran data yang sah**: peranti boleh kelihatan "bersambung" pada papan pemuka vendor sedangkan gagal menghantar data klinikal yang boleh digunakan; takrif dan ukur masa operasi berdasarkan penerimaan data sah yang sebenar, bukan hanya kesambungan rangkaian mentah.
- **Melaporkan hanya purata seluruh armada**: ini boleh menyembunyikan masalah masa henti yang teruk dan khusus kepada geografi atau kohort peranti yang akan didedahkan oleh purata yang disasarkan dan yang mempunyai pembaikan khusus yang boleh ditangani.
- **Tidak membezakan punca akar masa henti**: masa henti sebelah peranti, kesambungan dan sebelah pesakit masing-masing memerlukan intervensi yang sama sekali berbeza; satu peratusan masa henti tanpa segmentasi punca akar tidak dapat ditindaki.
- **Menganggap jurang data sebagai kestabilan klinikal secara lalai**: aliran data yang hilang daripada peranti luar talian harus mencetuskan semakan kesambungan teknikal, bukan ditafsir secara senyap sebagai "tiada berita ialah berita baik" bagi status klinikal pesakit.

## Sumber

- Continua Design Guidelines / Personal Connected Health Alliance, piawaian saling kendali teknikal bagi peranti kesihatan bersambung
- ONC / HealthIT.gov, panduan tentang pelaksanaan program pemantauan pesakit jarak jauh dan keperluan teknikal
- Literatur yang dikaji sejawat tentang kebolehpercayaan peranti pemantauan pesakit jarak jauh dan kelengkapan data, contohnya kajian yang diterbitkan dalam npj Digital Medicine

Lihat juga: [ketepatan penghalaan triaj](../ketepatan-penghalaan-triaj/), yang bergantung pada penerimaan data peranti yang lengkap dan boleh dipercayai untuk membuat keputusan triaj yang betul sejak awal lagi.
