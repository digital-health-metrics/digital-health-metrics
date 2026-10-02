# Tingkat Burnout Dokter

Tingkat burnout dokter mengukur proporsi klinisi yang melaporkan gejala burnout signifikan — umumnya dinilai sebagai kelelahan emosional, depersonalisasi, atau rasa pencapaian pribadi yang rendah melalui instrumen survei yang tervalidasi — dan, khusus untuk kesehatan digital, dilacak bersama ukuran beban alat digital yang dihadapi klinisi seperti waktu yang dihabiskan untuk pekerjaan administratif atau dokumentasi rekam kesehatan elektronik (EHR). Ini ada dalam kerangka metrik kesehatan digital karena perangkat lunak klinis yang dirancang buruk adalah kontributor yang terdokumentasi dengan baik dan terukur terhadap burnout, dan keberhasilan alat kesehatan digital tidak boleh pernah dinilai murni berdasarkan metrik yang dihadapi pasien sambil mengabaikan efeknya pada klinisi yang harus mengoperasikannya.

## Mengapa Ini Penting

Alat kesehatan digital sering diperkenalkan dengan tujuan eksplisit mengurangi beban administratif klinisi, tetapi alur kerja rekam kesehatan elektronik yang dirancang buruk, volume berlebihan peringatan klinis bernilai rendah (lihat tingkat pengabaian peringatan klinis), atau antarmuka telehealth yang kikuk dapat dengan mudah meningkatkan burnout sama seperti menguranginya — dan alat yang meningkatkan metrik keterlibatan yang dihadapi pasien sambil diam-diam meningkatkan beban dokumentasi klinisi belum memberikan hasil bersih yang positif bagi sistem perawatan secara keseluruhan. Burnout sangat terkait dalam literatur klinis dengan kesalahan medis, pergantian klinisi, dan kualitas perawatan yang berkurang, sehingga ia berfungsi sebagai indikator utama masalah keselamatan dan keberlanjutan tenaga kerja hilir, bukan sekadar kebaikan kepuasan tempat kerja. Program kesehatan digital mana pun yang mengklaim mengurangi beban klinis harus dapat menunjukkan klaim ini terhadap dasar yang terukur, daripada menegaskannya sebagai niat desain.

## Cara Menghitungnya

```
Tingkat burnout dokter = klinisi yang mencetak di atas ambang batas
                          burnout instrumen tervalidasi / total
                          klinisi yang disurvei × 100

Instrumen tervalidasi umum: Maslach Burnout Inventory (MBI),
Professional Fulfillment Index, atau pertanyaan skrining burnout
item-tunggal yang divalidasi terhadap instrumen yang lebih lengkap.

Laporkan bersama proksi beban-digital jika tersedia:
  Waktu-dalam-sistem EHR per kunjungan pasien
  Waktu dokumentasi yang terjadi di luar jam klinis terjadwal
  ("waktu piyama")
```

## Contoh Perhitungan

Sebuah sistem rumah sakit mensurvei 300 dokter menggunakan Maslach Burnout Inventory sebelum memperkenalkan alat dokumentasi klinis ambien yang dimaksudkan untuk mengurangi waktu penulisan catatan. Pada awal, 135 dokter (45%) mencetak di atas ambang batas burnout, dan data log audit EHR menunjukkan rata-rata 58 menit waktu dokumentasi per dokter yang terjadi di luar jam klinis terjadwal per hari. Enam bulan setelah peluncuran alat tersebut, survei ulang terhadap dokter yang sama menemukan 108 (36%) di atas ambang batas burnout, bersama penurunan waktu dokumentasi setelah jam kerja menjadi 34 menit per hari. Pergerakan yang berkorelasi baik dalam tingkat burnout maupun proksi objektif yang diturunkan dari EHR memperkuat argumen bahwa alat tersebut berkontribusi pada perbaikan, meskipun perbandingan formal sebelum/sesudah harus tetap memperhitungkan perubahan beban kerja bersamaan lainnya selama periode yang sama.

## Sumber Data dan Catatan Penting

Data survei burnout berasal dari instrumen tervalidasi yang diberikan secara berulang (tahunan atau lebih sering), dan tingkat respons penting: tingkat respons rendah berisiko mengalami bias non-respons, di mana klinisi yang paling burnout (dengan kapasitas paling kecil untuk menyelesaikan survei tambahan) secara sistematis kurang terwakili, meremehkan tingkat sebenarnya. Proksi yang diturunkan dari EHR untuk beban digital — waktu-dalam-sistem, waktu dokumentasi setelah jam kerja, jumlah klik per kunjungan — berguna sebagai pelengkap objektif dan tersedia secara terus-menerus untuk data survei berkala, tetapi harus divalidasi terhadap burnout yang dilaporkan survei untuk organisasi tertentu sebelum diperlakukan sebagai indikator burnout mandiri yang andal, karena hubungan antara waktu-dalam-sistem dan burnout sebenarnya dapat bervariasi menurut spesialisasi dan gaya kerja individu.

## Jebakan Umum

- **Hanya mengandalkan proksi yang diturunkan dari EHR**: waktu-dalam-sistem dan jumlah klik berkorelasi dengan burnout secara agregat tetapi bukan hal yang sama dengan burnout itu sendiri, dan dapat menyesatkan untuk klinisi atau spesialisasi individu dengan kebutuhan dokumentasi yang benar-benar berbeda.
- **Tingkat respons survei rendah menyembunyikan tingkat sebenarnya**: klinisi yang paling terdampak burnout sering paling kecil kemungkinannya memiliki kapasitas untuk merespons survei sukarela, membiaskan hasil tingkat-respons-rendah ke arah angka yang tampak lebih sehat secara artifisial.
- **Mengaitkan perubahan burnout dengan satu alat tanpa memperhitungkan faktor pengganggu**: burnout dipengaruhi oleh banyak faktor bersamaan (tingkat staf, volume pasien, perubahan organisasi); perbandingan sebelum/sesudah di sekitar peluncuran satu alat harus mengontrol ini jika memungkinkan daripada mengasumsikan satu penyebab.
- **Memperlakukan burnout murni sebagai masalah ketahanan individu**: penelitian burnout secara konsisten menemukan beban kerja, desain sistem, dan faktor organisasi sebagai pendorong utama; membingkainya sebagai masalah klinisi individu semata mengalihkan intervensi dari alat digital dan alur kerja yang sering menjadi akar penyebab sebenarnya.

## Sumber

- Maslach Burnout Inventory (MBI), instrumen survei tervalidasi dan panduan penilaian
- American Medical Association (AMA), penelitian burnout dokter dan program peningkatan praktik STEPS Forward
- Literatur yang ditinjau sejawat tentang kegunaan EHR, beban dokumentasi, dan burnout klinisi, misalnya studi yang diterbitkan di JAMIA dan Annals of Internal Medicine

Lihat juga: [tingkat pengabaian peringatan klinis](../clinical-alert-override-rate/), kelelahan peringatan menjadi salah satu kontributor yang lebih spesifik dan terukur terhadap burnout klinisi yang dapat secara langsung diatasi oleh alat digital.
