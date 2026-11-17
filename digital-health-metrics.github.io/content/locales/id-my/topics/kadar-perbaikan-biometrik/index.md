# Kadar Perbaikan Biometrik

Kadar perbaikan biometrik adalah proporsi pesakit terdaftar dalam program kesihatan digital yang mencapai perbaikan bermakna secara klinis pada biometrik yang dipantau — paling umum hemoglobin terglikasi (HbA1c) pada program diabetes dan kardiometabolik, atau indeks massa tubuh (BMI) pada program manajemen berat badan — selama periode pendaftaran yang ditentukan. Ini adalah metrik hasil yang pada akhirnya membenarkan klaim klinis sebuah produk kesihatan digital: angka keterlibatan dan adopsi menggambarkan bagaimana sebuah produk digunakan, tetapi perbaikan biometrik lebih dekat pada bukti bahwa produk tersebut benar-benar bekerja.

## Mengapa Ini Penting

Program kesihatan digital sering dijual dan dikontrak berdasarkan janji hasil kesihatan yang lebih baik, dan kadar perbaikan biometrik adalah cara paling langsung dan terukur untuk menguji janji tersebut terhadap ambang batas klinis tertentu, bukan klaim samar "kesihatan lebih baik". Pembayar, pemberi kerja, dan sistem kesihatan semakin mengaitkan penggantian biaya atau perpanjangan kontrak dengan perubahan biometrik yang terbukti, sehingga sebuah program yang tidak dapat melaporkan kadar ini secara kredibel berada pada posisi yang tidak menguntungkan baik secara komersial maupun klinis. Metrik ini juga merupakan pemeriksaan disiplin terhadap desain program: jauh lebih mudah untuk melaporkan keterlibatan (login, pesan terkirim) daripada hasil, dan sebuah tim harus curiga terhadap program apa pun yang melaporkan yang pertama dengan antusias sementara samar-samar tentang yang kedua.

## Cara Menghitungnya

```
Kadar perbaikan biometrik = pesakit yang mencapai perbaikan bermakna
                               secara klinis yang ditentukan / pesakit
                               dengan pengukuran dasar dan lanjutan
                               yang valid × 100

Ambang batas bermakna secara klinis yang umum:
  HbA1c — penurunan ≥ 0.5 poin peratusan, atau mencapai target yang
          ditentukan (misalnya < 7.0%) dari garis dasar di luar rentang
  BMI   — penurunan ≥ 5% dari berat badan awal, dipertahankan hingga
          titik pengukuran lanjutan

Laporkan secara terpisah untuk setiap biometrik yang dipantau; jangan
pernah mencampur perbaikan HbA1c dan BMI menjadi satu peratusan
"perbaikan" gabungan.
```

## Contoh Perhitungan

Sebuah program kesihatan digital kardiometabolik mendaftarkan 800 pesakit dengan HbA1c awal di luar rentang. Dari jumlah tersebut, 620 memiliki pengukuran dasar dan lanjutan yang valid pada 6 bulan (180 hilang dari pemantauan lanjutan dan dikeluarkan dari penyebut, tidak dihitung sebagai kegagalan). Dari 620 dengan pengukuran berpasangan, 340 mencapai penurunan setidaknya 0.5 poin peratusan. Kadar perbaikan biometrik adalah 340 / 620 × 100 = 55%. Melaporkan ini terhadap total 800 yang terdaftar (340 / 800 = 42.5%) akan mencampuradukkan kehilangan pemantauan lanjutan dengan kegagalan pengubatan, merendahkan kadar untuk pesakit yang sebenarnya menyelesaikan pengukuran.

## Sumber Data dan Catatan Penting

Nilai biometrik dasar dan lanjutan biasanya berasal dari perangkat yang terhubung (glukometer Bluetooth atau timbangan pintar), hasil laboratorium yang diimpor dari rekam kesihatan elektronik, atau nilai yang dilaporkan sendiri oleh pesakit — dan ketiga sumber ini memiliki keandalan yang sangat berbeda, sehingga sumbernya harus dilaporkan bersama dengan kadarnya. Kehilangan pemantauan lanjutan jarang bersifat acak: pesakit yang berhenti terlibat dengan sebuah program sering kali juga adalah mereka yang paling kecil kemungkinannya untuk membaik, sehingga kadar perbaikan yang tinggi yang dihitung hanya pada pesakit yang menyelesaikan pemantauan lanjutan dapat melebih-lebihkan efek sebenarnya pada kadar populasi program tersebut. Efek musiman dan regresi menuju rata-rata nyata adanya baik untuk HbA1c maupun berat badan, sehingga sebuah program harus membandingkan dengan kelompok kontrol bersamaan atau historis jika memungkinkan, bukan memperlakukan setiap perbaikan sebagai bukti efek program.

## Jebakan Umum

- **Mengeluarkan, bukan melaporkan, kehilangan pemantauan lanjutan**: diam-diam menghapus pesakit tanpa pengukuran lanjutan dari penyebut dapat secara substansial meningkatkan kadar perbaikan yang tampak; selalu laporkan kadar penyelesaian untuk pengukuran lanjutan bersama dengan kadar perbaikan itu sendiri.
- **Mencampur pengukuran yang dilaporkan sendiri dan yang bersumber dari perangkat tanpa memberi label**: berat badan yang dilaporkan sendiri secara sistematis kurang andal dibandingkan pembacaan timbangan pintar yang terhubung, dan mencampur kedua sumber tersebut mengaburkan seberapa besar perbaikan yang tampak merupakan kebisingan pengukuran.
- **Tidak ada kontrol atau kontrafaktual**: banyak ukuran biometrik kronis berfluktuasi atau beregresi menuju rata-rata dengan sendirinya; kadar perbaikan lengan tunggal tanpa kelompok pembanding apa pun bersifat sugestif, bukan bukti konklusif, dari efek program.
- **Memperlakukan pergeseran rata-rata sederhana sebagai bukti perbaikan luas**: perbaikan rata-rata kecil pada kadar populasi dapat didorong oleh beberapa responden besar sementara sebagian besar pesakit tidak melihat perubahan; laporkan distribusinya (misalnya proporsi yang melewati ambang batas bermakna secara klinis), bukan hanya pergeseran rata-rata.

## Sumber

- American Diabetes Association (ADA), Standards of Care in Diabetes, panduan target HbA1c dan perubahan bermakna secara klinis
- Centers for Disease Control and Prevention (CDC), Division of Diabetes Translation, panduan evaluasi program
- Literatur yang ditinjau sejawat tentang hasil program diabetes digital dan manajemen berat badan, misalnya studi yang diterbitkan di npj Digital Medicine dan Diabetes Care

Lihat juga: [kadar kepatuhan pengubatan](../kadar-kepatuhan-pengubatan/), pendorong hulu yang sering menyebabkan perbaikan biometrik dalam program penyakit kronis.
