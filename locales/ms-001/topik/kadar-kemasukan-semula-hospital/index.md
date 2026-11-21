# Kadar Kemasukan Semula Hospital

Kadar kemasukan semula hospital ialah bahagian pesakit yang dilepaskan yang dimasukkan semula ke hospital, tanpa dirancang, dalam tetingkap yang ditakrifkan selepas pelepasan, selalunya 30 hari. Bagi kesihatan digital, ia ialah metrik yang paling langsung berkait dengan ekonomi pembayar dan kontrak penjagaan berasaskan nilai: program pemantauan jarak jauh, susulan lepas pelepasan atau peralihan penjagaan digital yang tidak dapat menunjukkan kesan yang boleh dipercayai ke atas kemasukan semula tidak mungkin memperoleh sokongan bayaran balik yang berterusan, sebaik mana pun angka penglibatannya kelihatan.

## Mengapa ia penting

Kemasukan semula yang tidak dirancang adalah mahal, mengganggu pesakit, dan dalam banyak sistem kesihatan kini dihukum secara langsung: skim seperti Hospital Readmissions Reduction Program Amerika Syarikat mengurangkan bayaran kepada hospital yang kadar kemasukan semulanya lebih tinggi daripada yang dijangka bagi keadaan tertentu, dan inilah sebabnya hospital secara aktif mengomisen program lepas pelepasan digital dan pemantauan jarak jauh yang bertujuan mengurangkannya. Sebahagian besar kemasukan semula dianggap berpotensi boleh dicegah, didorong oleh arahan pelepasan yang tidak mencukupi, temu janji susulan yang terlepas, salah faham ubat atau kemerosotan gejala yang tidak ditangani yang dapat dikesan lebih awal oleh titik sentuh digital yang direka dengan baik, dan itulah tepat jurang yang disasarkan oleh alat penjagaan peralihan digital. Kadar kemasukan semula harus sentiasa dibaca bersama campuran kes: program yang melayani populasi yang lebih sakit dan lebih kompleks akan mempunyai kadar garis dasar yang secara struktur lebih tinggi daripada yang melayani populasi yang lebih sihat, bebas daripada kualiti program.

## Cara pengiraannya

```
Kadar kemasukan semula 30 hari = kemasukan semula tidak dirancang dalam
                                  30 hari selepas pelepasan / jumlah
                                  pelepasan indeks × 100

Kecualikan daripada pengangka: kemasukan semula yang dirancang (cth.
prosedur susulan yang dijadualkan), dan pemindahan yang merupakan
kesinambungan episod rawatan yang sama dan bukan kemasukan baharu.

Laraskan risiko di mana boleh, menggunakan indeks campuran kes atau
komorbiditi yang diterima, sebelum membandingkan kadar merentas
populasi pesakit atau tempoh masa yang berbeza.
```

## Contoh kerja

Sebuah hospital melepaskan 1,200 pesakit kegagalan jantung dalam satu suku tahun. Daripada jumlah ini, 210 dimasukkan semula dalam 30 hari, yang mana 15 ialah kemasukan semula yang dirancang bagi prosedur berjadual dan dikecualikan. Kadar kemasukan semula 30 hari yang tidak dirancang ialah (210 − 15) / 1,200 × 100 = 16.25%. Program pemantauan jarak jauh diperkenalkan bagi subset 400 pesakit ini (dipilih mengikut risiko klinikal, bukan secara rawak), dan kadar kemasukan semula tidak dirancang mereka ialah 14%, berbanding 18% bagi 800 pesakit yang tidak didaftarkan. Oleh sebab pendaftaran berdasarkan risiko klinikal dan bukannya tugasan rawak, perbezaan ini ialah bukti yang mencadangkan dan bukan yang muktamad tentang kesan program, dan harus ditafsir bersama analisis pelarasan risiko dan bukannya diterima bulat-bulat.

## Sumber data dan kaveat

Data kemasukan semula lazimnya diambil daripada suapan kemasukan-pelepasan-pemindahan (ADT) hospital sendiri bagi kemasukan semula ke kemudahan yang sama, tetapi pesakit yang dimasukkan semula ke hospital lain tidak akan muncul dalam suapan itu langsung, jadi penjejakan kemasukan semula hospital tunggal secara sistematik mengurang-kira kadar kemasukan semula sebenar melainkan dilengkapi dengan data pertukaran maklumat kesihatan serantau, data tuntutan pembayar, atau pangkalan data semua pembayar peringkat negeri. Pengaitan kepada program digital memerlukan berhati-hati: pesakit yang memilih menyertai program pemantauan jarak jauh sukarela jarang merupakan sampel rawak populasi yang dilepaskan, jadi perbandingan naif kadar kemasukan semula antara yang berdaftar dengan yang tidak berdaftar akan cenderung dikelirukan oleh tepat kesan pemilihan yang menjadikan sesetengah pesakit lebih berkemungkinan mendaftar sejak awal.

## Perangkap

- **Membandingkan kadar mentah yang tidak dilaraskan risiko merentas populasi**: program yang melayani populasi yang lebih sakit akan menunjukkan kadar kemasukan semula mentah yang lebih tinggi daripada yang melayani populasi yang lebih sihat walaupun program itu sendiri lebih berkesan; sentiasa laraskan risiko sebelum membandingkan.
- **Mengurang-kira kemasukan semula ke kemudahan lain**: bergantung hanya pada data ADT satu hospital akan terlepas kemasukan semula di tempat lain, sekali gus mengurang-kira kadar sebenar, terutamanya di kawasan yang mempunyai beberapa sistem hospital yang bersaing.
- **Bias pemilihan dalam pendaftaran program sukarela**: pesakit yang memilih mendaftar dalam program susulan digital sering berbeza secara sistematik (dalam literasi kesihatan, sokongan sosial atau motivasi) daripada yang tidak, mengelirukan sebarang perbandingan naif sebelum/selepas atau berdaftar/tidak berdaftar.
- **Mengira setiap kepulangan ke kemudahan yang sama sebagai kemasukan semula**: kemasukan semula yang dijadualkan dan dirancang (misalnya prosedur peringkat kedua yang dirancang) bukan isyarat pelepasan yang gagal dan harus dikecualikan daripada pengangka, bukan digabungkan dengan kepulangan yang benar-benar tidak dirancang.

## Sumber

- Centers for Medicare & Medicaid Services (CMS), spesifikasi ukuran Hospital Readmissions Reduction Program dan Hospital-Wide Readmission
- Institute for Healthcare Improvement (IHI), panduan tentang mengurangkan kemasukan semula yang boleh dielakkan
- Literatur yang dikaji sejawat tentang intervensi pemantauan jarak jauh digital dan penjagaan peralihan bagi pengurangan kemasukan semula, contohnya kajian yang diterbitkan dalam JAMA Network Open dan npj Digital Medicine

Lihat juga: [ketepatan penghalaan triaj](../ketepatan-penghalaan-triaj/), kerana penghalaan awal yang tidak sesuai itu sendiri boleh menjadi pendorong hiliran bagi kemasukan yang boleh dielakkan.
