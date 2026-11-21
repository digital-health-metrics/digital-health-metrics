# Kadar Penyiapan ePROM

Kadar penyiapan ePROM mengukur bahagian Ukuran Hasil Dilaporkan Pesakit elektronik (ePROM) berjadual, iaitu soal selidik piawai dan disahkan yang menangkap laporan pesakit sendiri tentang gejala, fungsi atau kualiti hidupnya, yang disampaikan secara digital dan bukan di atas kertas, yang benar-benar disiapkan. Ia ialah metrik kualiti data sama seperti metrik penglibatan: nilai klinikal dan penyelidikan program PROM bergantung sepenuhnya pada kadar penyiapan yang cukup tinggi supaya respons yang dikumpul mewakili seluruh populasi berdaftar, bukan hanya subset yang paling terlibat atau paling kurang bergejala.

## Mengapa ia penting

Hasil dilaporkan pesakit ialah pelengkap langsung, yang diakui pesakit, bagi data yang direkodkan klinisien atau diukur peranti, menangkap dimensi kesihatan, iaitu kesakitan, fungsi, kualiti hidup, yang tidak dapat ditangkap oleh semakan carta atau bacaan biometrik; pendigitalan pengumpulan PROM wujud khusus untuk menjadikan data ini lebih murah dan lebih mudah dikumpul pada skala besar daripada yang pernah dibenarkan oleh pentadbiran berasaskan kertas. Tetapi program PROM dengan kadar penyiapan yang rendah berisiko mengalami bias yang khusus dan serius: pesakit yang berasa lebih teruk sering kurang berkemungkinan melengkapkan soal selidik yang panjang, jadi kadar penyiapan yang menurun boleh menjadi tanda amaran awal kesihatan populasi yang semakin merosot, dan kadar penyiapan keseluruhan yang rendah boleh menjadikan respons yang dikumpul kelihatan lebih baik daripada pengalaman populasi sebenar semata-mata kerana pesakit yang paling bergejala kurang terwakili dalam apa yang disiapkan. Inilah sebabnya kadar penyiapan harus sentiasa dilaporkan bersama skor PROM itu sendiri, dan bukan dianggap sebagai butiran operasi sekunder.

## Cara pengiraannya

```
Kadar penyiapan ePROM = ePROM yang disiapkan sepenuhnya / ePROM yang
                         dihantar atau dijadualkan × 100

Laporkan secara berasingan bagi:
  Kadar penyiapan awal        (soal selidik pertama dalam urutan
                               pemantauan)
  Kadar penyiapan membujur    (soal selidik berikutnya dalam urutan
                               pemantauan yang berterusan, yang lazimnya
                               menurun dari semasa ke semasa dan harus
                               dijejaki sebagai arah aliran, bukan satu
                               angka)

Soal selidik yang "disiapkan sebahagian" harus ditakrif dan dilaporkan
secara berasingan daripada "disiapkan sepenuhnya" dan "belum dimulakan".
```

## Contoh kerja

Sebuah klinik onkologi menghantar ePROM beban gejala yang disahkan kepada 400 pesakit sebelum setiap lawatan susulan bulanan. Pada bulan pertama, 340 pesakit melengkapkan soal selidik sepenuhnya (kadar penyiapan 85%), 30 menyiapkannya sebahagian, dan 30 tidak memulakannya. Menjelang bulan keenam urutan pemantauan yang sama, respons lengkap telah jatuh kepada 260 daripada kohort 400 pesakit yang sama (65%), iaitu penurunan membujur yang bermakna yang akan terlepas sepenuhnya jika hanya angka 85% bulan pertama dilaporkan sebagai metrik keseluruhan yang statik. Menyiasat pesakit mana yang berhenti (mengikut keterukan gejala, peringkat penyakit atau umur) boleh mendedahkan sama ada penurunan itu mencerminkan keletihan tinjauan, gejala yang semakin teruk menyukarkan soal selidik disiapkan, atau halangan akses teknikal.

## Sumber data dan kaveat

Data penyiapan datang daripada log penghantaran dan respons platform ePROM sendiri, yang dapat membezakan keadaan "belum dimulakan", "disiapkan sebahagian" dan "disiapkan sepenuhnya", iaitu perbezaan yang harus sentiasa dikekalkan dan dilaporkan dan bukannya dirumuskan kepada angka binari siap/belum siap, kerana penyiapan separa sering menunjukkan titik khusus dalam soal selidik di mana pesakit bergelut atau berhenti melibatkan diri. Kadar penyiapan harus ditafsir bersama cara soal selidik disampaikan (pautan mesej teks, pemberitahuan aplikasi atau kaedah penyampaian yang memerlukan log masuk portal), kerana geseran penyampaian itu sendiri menjejaskan penyiapan, bebas daripada kandungan soal selidik atau keadaan asas pesakit. Instrumen yang disahkan (dan bukan set soalan ad hoc) harus sentiasa digunakan untuk PROM itu sendiri, kerana kadar penyiapan bagi instrumen yang tidak disahkan tidak menyatakan apa-apa yang boleh dipercayai tentang kegunaan klinikal data yang terhasil walaupun penyiapannya tinggi.

## Perangkap

- **Menganggap kadar penyiapan yang menurun sebagai masalah penyampaian semata-mata**: penurunan membujur dalam penyiapan boleh mencerminkan gejala pesakit yang benar-benar semakin teruk (pesakit terlalu tidak sihat untuk melengkapkan tinjauan) dan bukannya keletihan tinjauan atau isu teknikal, dan perbezaan ini sangat penting bagi tafsiran klinikal.
- **Merumuskan penyiapan separa dan penuh ke dalam satu kategori**: soal selidik yang disiapkan sebahagian ialah kualiti data yang berbeza dengan bermakna daripada yang disiapkan sepenuhnya; laporkan secara berasingan, dan siasat di mana dalam aliran soal selidik pesakit cenderung meninggalkannya.
- **Melaporkan kadar penyiapan tanpa melaporkan risiko bias respons**: kadar penyiapan sederhana harus mendorong siasatan sama ada responden berbeza secara sistematik (dalam keterukan gejala, umur, literasi digital) daripada bukan responden, kerana skor PROM yang dikira hanya daripada responden boleh menyalahwakili seluruh populasi.
- **Menggunakan soal selidik yang tidak disahkan atau dibuat sendiri**: kadar penyiapan tidak bermakna sebagai isyarat kualiti data jika instrumen yang disiapkan itu sendiri belum disahkan secara klinikal bagi keadaan dan populasi yang diukur.

## Sumber

- International Consortium for Health Outcomes Measurement (ICHOM), pembangunan set piawai dan panduan pelaksanaan PROM
- U.S. Food and Drug Administration (FDA), panduan tentang ukuran hasil dilaporkan pesakit dalam ujian klinikal dan penyerahan kawal selia
- Literatur yang dikaji sejawat tentang pelaksanaan dan kadar penyiapan PROM elektronik, contohnya kajian yang diterbitkan dalam Quality of Life Research dan Journal of Medical Internet Research (JMIR)

Lihat juga: [skor penggalak bersih pesakit](../skor-penggalak-bersih-pesakit/), metrik dilaporkan pesakit yang berkaitan tetapi berbeza yang mengukur kepuasan dan bukannya hasil klinikal.
