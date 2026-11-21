# Masa ke Intervensi

Masa ke intervensi ialah masa berlalu daripada amaran kesihatan automatik dijana, misalnya peranti pemantauan jarak jauh yang mengesan tanda vital di luar julat atau alat triaj digital yang menandakan pesakit yang merosot keadaannya, sehingga ahli pasukan klinikal benar-benar memulakan tindak balas. Ia ialah metrik proses yang menentukan sama ada sistem amaran automatik menyampaikan janji terasnya: mengesan masalah lebih awal daripada model tradisional daftar masuk berjadual atau panggilan telefon yang dimulakan pesakit.

## Mengapa ia penting

Sistem amaran yang menjana amaran yang betul secara klinikal tetapi tidak diikuti dengan tindak balas tepat pada masanya belum benar-benar memperbaik keselamatan pesakit; seluruh proposisi nilai pemantauan jarak jauh dan amaran automatik bergantung pada penutupan gelung dengan lebih pantas daripada laluan alternatif yang tidak dipantau. Oleh sebab keterukan amaran yang berbeza memerlukan keutamaan tindak balas yang berbeza, masa ke intervensi harus sentiasa dilaporkan bagi setiap peringkat keterukan dan bukannya sebagai satu purata, kerana purata yang pantas merentas semua amaran boleh menyembunyikan tindak balas yang sangat perlahan secara berbahaya bagi sebilangan kecil amaran yang paling teruk. Metrik ini juga salah satu cara paling jelas dan paling meyakinkan untuk menunjukkan nilai program pemantauan automatik kepada kepimpinan klinikal dan pembayar, kerana ia boleh dibandingkan secara langsung dengan masa tindak balas terdahulu organisasi yang sama yang tidak automatik bagi senario klinikal yang serupa.

## Cara pengiraannya

```
Masa ke intervensi = cap masa(tindak balas klinikal dimulakan) −
                      cap masa(amaran dijana)

Laporkan median dan persentil tinggi (cth. ke-90), disegmen mengikut
peringkat keterukan amaran, bukan sebagai satu purata gabungan.

"Tindak balas klinikal dimulakan" harus ditakrifkan dengan tepat dan
konsisten, cth. klinisien membuka rekod pesakit dan bertindak, atau
percubaan hubungan keluar yang didokumenkan, bukan sekadar amaran
dilihat atau diakui tanpa sebarang tindakan diambil.
```

## Contoh kerja

Sistem amaran program pemantauan jantung jarak jauh menandakan 200 amaran aritmia berketerukan tinggi dalam sebulan. Median masa daripada amaran dijana hingga klinisien memulakan hubungan keluar ialah 12 minit, dengan masa persentil ke-90 sebanyak 38 minit. Data sejarah daripada laluan terdahulu populasi yang sama yang tidak dipantau (di mana peristiwa serupa lazimnya hanya muncul pada lawatan klinik berjadual seterusnya atau kemunculan di hospital) menunjukkan median masa kepada sebarang tindak balas klinikal yang diukur dalam hari, bukan minit. Perbandingan ini, bukan angka 12 minit secara berasingan, yang menunjukkan nilai klinikal program pemantauan; angka persentil ke-90 sama pentingnya, kerana ia mengenal pasti hujung amaran yang mengambil masa lebih setengah jam untuk ditindaki dan memerlukan semakan punca akarnya sendiri.

## Sumber data dan kaveat

Cap masa penjanaan amaran datang daripada log peristiwa platform pemantauan sendiri; cap masa tindak balas klinikal lazimnya datang daripada jejak audit rekod kesihatan elektronik atau sistem aliran kerja atau pengurusan tugas pasukan penjagaan sendiri, dan kedua-dua sistem ini mesti disegerakkan masa dengan tepat supaya selang yang dikira boleh dipercayai. "Tindak balas dimulakan" memerlukan takrifan yang ketat dan didokumenkan, kerana klinisien yang sekadar melihat atau menolak amaran tanpa tindakan lanjut ialah peristiwa yang asasnya berbeza, dan jauh kurang menenangkan, berbanding yang mencetuskan hubungan keluar atau intervensi sebenar; mencampuradukkan kedua-duanya akan menjadikan masa tindak balas kelihatan lebih baik daripada realiti klinikal. Tahap kakitangan pada waktu malam dan hujung minggu lazimnya menjejaskan masa ke intervensi dengan ketara, jadi metrik ini harus dilaporkan mengikut segmen masa dalam hari dan hari dalam minggu di mana isi padu amaran membenarkan, dan bukan hanya sebagai purata gabungan 24/7 yang boleh menyembunyikan jurang tindak balas selepas waktu bekerja yang serius.

## Perangkap

- **Mengira pengakuan amaran sebagai tindak balas**: klinisien yang melihat atau menolak amaran tidak sama dengan memulakan tindak balas klinikal; takrifkan tindak balas dengan ketat sebagai tindakan yang didokumenkan, bukan pengakuan pasif.
- **Melaporkan satu masa gabungan merentas semua keterukan**: purata yang pantas merentas amaran berketerukan rendah dan tinggi yang digabungkan boleh menyembunyikan masa tindak balas yang perlahan secara berbahaya khusus bagi amaran berketerukan tertinggi, yang paling penting.
- **Mengabaikan kesan corak kakitangan**: masa tindak balas sering berbeza dengan ketara mengikut masa dalam hari dan hari dalam minggu disebabkan tahap kakitangan; satu purata keseluruhan boleh menyembunyikan jurang tindak balas selepas waktu bekerja atau hujung minggu yang sistematik.
- **Membandingkan masa ke intervensi merentas organisasi dengan ambang amaran yang berbeza**: organisasi dengan ambang amaran yang lebih konservatif (lebih sensitif) akan menjana lebih banyak amaran akuiti rendah, yang boleh mencairkan purata masa tindak balasnya berbanding organisasi yang menggunakan ambang yang lebih ketat, bebas daripada responsif klinikal yang sebenar.

## Sumber

- NHS England, panduan tentang pemantauan jarak jauh dan piawaian tindak balas klinikal wad maya
- ONC / HealthIT.gov, panduan tentang reka bentuk dan keselamatan sistem amaran klinikal
- Literatur yang dikaji sejawat tentang masa tindak balas amaran pemantauan pesakit jarak jauh dan hasil klinikal, contohnya kajian yang diterbitkan dalam npj Digital Medicine

Lihat juga: [kadar masa operasi peranti](../kadar-masa-operasi-peranti/), kerana angka masa ke intervensi yang boleh dipercayai bergantung pada peranti pemantauan yang mendasari benar-benar berada dalam talian untuk menjana amaran sejak awal lagi.
