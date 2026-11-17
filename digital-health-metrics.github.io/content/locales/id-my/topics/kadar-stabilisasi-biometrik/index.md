# Kadar Stabilisasi Biometrik

Kadar stabilisasi biometrik adalah proporsi pesakit terdaftar yang mencapai dan mempertahankan rentang target yang ditentukan secara klinis untuk suatu ukuran biometrik — paling umum tekanan darah di bawah ambang batas seperti 130/80 mmHg — menggunakan perangkat pemantauan yang terhubung, selama periode berkelanjutan, bukan pada satu titik waktu. Ini berbeda dari kadar perbaikan biometrik (lihat topik tersebut): perbaikan mengukur besarnya perubahan dari garis dasar, sementara stabilisasi mengukur apakah seorang pesakit dijaga secara andal dalam rentang aman setelah pengubatan atau pemantauan dimulai, yang merupakan hasil paling penting bagi pesakit yang sudah mendekati target atau sudah dalam pengubatan.

## Mengapa Ini Penting

Untuk sebagian besar pesakit dalam program penyakit kronis — khususnya hipertensi, di mana target tekanan darah pedoman sudah mapan dan terkait langsung dengan risiko kardiovaskular — tujuan klinisnya bukan perbaikan satu kali tetapi kontrol berkelanjutan, dan seorang pesakit yang berosilasi masuk-keluar rentang target menimbulkan risiko yang secara material berbeda dari yang membaik sekali dan tetap di sana. Perangkat yang terhubung (manset tekanan darah seluler, monitor glukosa kontinu) memungkinkan pengukuran stabilisasi secara berkelanjutan, bukan hanya pada kunjungan klinik, mengungkap pesakit yang pembacaan di kliniknya terlihat terkontrol tetapi pembacaan di rumahnya tidak stabil — pola yang dikenal sebagai hipertensi tersembunyi yang tidak dapat dideteksi hanya dengan pengukuran berkala secara langsung. Melaporkan kadar stabilisasi, bukan hanya satu cuplikan "di target", memaksa sebuah program menghadapi seberapa konsisten, bukan hanya seberapa sering, ia menjaga pesakit dalam rentang.

## Cara Menghitungnya

```
Kadar stabilisasi biometrik = pesakit dengan ≥ 80% pembacaan dalam
                                 rentang target selama periode
                                 pengukuran / pesakit dengan jumlah
                                 minimum pembacaan valid dalam periode
                                 tersebut × 100

Contoh ambang batas:
  Tekanan darah — target < 130/80 mmHg (atau ambang batas pedoman
                  klinis yang berlaku untuk profil risiko pesakit)
  Glukosa       — rentang target sesuai panduan pemantauan glukosa
                  kontinu, dilaporkan sebagai "waktu dalam rentang"

Ambang batas frekuensi pembacaan minimum (misalnya setidaknya 3
pembacaan per minggu) harus ditetapkan sebelum seorang pesakit
dimasukkan dalam penyebut, untuk menghindari pembaca jarang tampak
stabil secara artifisial.
```

## Contoh Perhitungan

Sebuah program pemantauan jarak jauh hipertensi mendaftarkan 600 pesakit dengan manset tekanan darah seluler, masing-masing diharapkan melakukan setidaknya 3 pembacaan per minggu. Dari jumlah tersebut, 540 memenuhi ambang batas frekuensi pembacaan minimum selama periode pengukuran 3 bulan dan dimasukkan dalam penyebut. Dari 540 tersebut, 350 memiliki setidaknya 80% pembacaan di bawah 130/80 mmHg, memberikan kadar stabilisasi biometrik 350 / 540 × 100 = 65%. 60 pesakit yang dikeluarkan kerana pembacaan tidak cukup dilaporkan secara terpisah sebagai celah kelengkapan data, tidak dilipat ke dalam pembilang maupun kelompok "tidak stabil", kerana status kontrol sebenarnya benar-benar tidak diketahui, bukan buruk.

## Sumber Data dan Catatan Penting

Pembacaan berasal langsung dari aliran data perangkat yang terhubung, yang lebih objektif dan jauh lebih sering daripada pengukuran di klinik, tetapi penempatan perangkat dan kesalahan teknik (manset tekanan darah yang ukurannya atau posisinya salah) dapat memperkenalkan bias sistematis yang tidak selalu akan tertangkap oleh satu pembacaan validasi di klinik. Pilihan rentang target harus mengikuti pedoman klinis yang berlaku saat ini untuk profil risiko dan komorbiditas spesifik pesakit, bukan satu ambang batas universal, kerana target pedoman berbeda menurut usia pesakit, fungsi ginjal, dan risiko kardiovaskular. Seorang pesakit dengan frekuensi pembacaan rendah tidak boleh diam-diam dihitung sebagai "stabil" secara default; mengeluarkan mereka dari penyebut dengan pelaporan pengecualian yang transparan lebih jujur daripada menghitung mereka sebagai terkontrol atau tidak terkontrol berdasarkan data yang terlalu sedikit.

## Jebakan Umum

- **Memperlakukan satu pembacaan dalam rentang sebagai stabilisasi**: stabilisasi adalah tentang kontrol berkelanjutan selama periode tertentu, bukan cuplikan; selalu wajibkan proporsi minimum pembacaan dalam rentang selama periode tersebut, bukan satu pengukuran yang memenuhi syarat.
- **Diam-diam mengeluarkan pembaca jarang tanpa melaporkannya**: pesakit yang jarang melakukan pembacaan tidak secara otomatis stabil atau tidak stabil; keluarkan mereka secara transparan dari penyebut dan laporkan kadar pengecualian sebagai metrik kelengkapan data terpisah.
- **Mengabaikan kalibrasi perangkat dan kesalahan teknik**: manset yang pas kurang baik atau perangkat yang tidak dikalibrasi dapat secara sistematis membiaskan pembacaan ke satu arah, yang tidak akan tertangkap oleh kadar stabilisasi yang dihitung secara naif dari data perangkat mentah tanpa validasi berkala.
- **Menggunakan satu rentang target universal untuk semua pesakit**: target pedoman klinis bervariasi menurut profil risiko pesakit dan komorbiditas; menerapkan satu ambang batas umum pada populasi yang heterogen secara klinis akan salah mengklasifikasikan beberapa pesakit sebagai stabil atau tidak stabil relatif terhadap target individual sebenarnya.

## Sumber

- American Heart Association (AHA) / American College of Cardiology (ACC), target pedoman tekanan darah dan panduan pemantauan tekanan darah di rumah
- International Diabetes Federation dan American Diabetes Association (ADA), panduan konsensus "waktu dalam rentang" pemantauan glukosa kontinu
- Literatur yang ditinjau sejawat tentang pemantauan biometrik jarak jauh dan kontrol kondisi berkelanjutan, misalnya studi yang diterbitkan di npj Digital Medicine

Lihat juga: [kadar perbaikan biometrik](../kadar-perbaikan-biometrik/), metrik terkait tentang besarnya perubahan dari garis dasar, berbeda dari kontrol berkelanjutan setelah target tercapai.
