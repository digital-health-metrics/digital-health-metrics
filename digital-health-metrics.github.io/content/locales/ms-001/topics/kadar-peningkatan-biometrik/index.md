# Kadar Peningkatan Biometrik

Kadar peningkatan biometrik ialah bahagian pesakit berdaftar dalam program kesihatan digital yang mencapai peningkatan yang bermakna secara klinikal dalam biometrik yang dijejaki, selalunya hemoglobin terglikasi (HbA1c) dalam program diabetes dan kardiometabolik, atau indeks jisim badan (BMI) dalam program pengurusan berat badan, sepanjang tempoh pendaftaran yang ditakrifkan. Ia ialah metrik hasil yang akhirnya mewajarkan tuntutan klinikal sesuatu produk kesihatan digital: angka penglibatan dan penerimaan menggambarkan bagaimana produk digunakan, tetapi peningkatan biometrik lebih hampir kepada bukti bahawa ia berkesan.

## Mengapa ia penting

Program kesihatan digital kerap dijual dan diperoleh melalui komisen atas janji hasil kesihatan yang lebih baik, dan kadar peningkatan biometrik ialah cara yang paling langsung dan boleh dikuantitikan untuk menguji janji itu berdasarkan ambang tertentu yang diiktiraf secara klinikal dan bukannya dakwaan kabur tentang "kesihatan yang lebih baik". Pembayar, majikan dan sistem kesihatan semakin mengaitkan bayaran balik atau pembaharuan kontrak dengan perubahan biometrik yang ditunjukkan, jadi program yang tidak dapat melaporkan kadar ini dengan boleh dipercayai berada dalam kedudukan kurang menguntungkan dari segi komersial dan juga klinikal. Metrik ini juga merupakan semakan disiplin terhadap reka bentuk program: jauh lebih mudah melaporkan penglibatan (log masuk, mesej dihantar) daripada hasil, dan sesebuah pasukan wajar curiga terhadap mana-mana program yang melaporkan yang pertama dengan penuh semangat sementara kabur tentang yang kedua.

## Cara pengiraannya

```
Kadar peningkatan biometrik = pesakit yang mencapai peningkatan bermakna
                              secara klinikal yang ditakrifkan / pesakit
                              yang mempunyai ukuran garis dasar dan
                              susulan yang sah × 100

Ambang bermakna secara klinikal yang lazim:
  HbA1c   — pengurangan ≥ 0.5 mata peratusan, atau mencapai sasaran
            yang ditakrifkan (cth. < 7.0%) daripada garis dasar
            yang di luar julat
  BMI     — pengurangan ≥ 5% daripada berat badan garis dasar,
            dikekalkan sehingga titik ukuran susulan

Laporkan secara berasingan bagi setiap biometrik yang dijejaki; jangan
sekali-kali menggabungkan peningkatan HbA1c dan BMI menjadi satu
peratusan "peningkatan" gabungan.
```

## Contoh kerja

Sebuah program kesihatan digital kardiometabolik mendaftarkan 800 pesakit yang HbA1c garis dasarnya di luar julat. Daripada jumlah ini, 620 mempunyai ukuran garis dasar yang sah dan ukuran susulan pada 6 bulan (180 hilang daripada susulan dan dikecualikan daripada penyebut, bukan dikira sebagai kegagalan). Daripada 620 yang mempunyai ukuran berpasangan, 340 mencapai pengurangan sekurang-kurangnya 0.5 mata peratusan. Kadar peningkatan biometrik ialah 340 / 620 × 100 = 55%. Melaporkannya berbanding semua 800 yang berdaftar (340 / 800 = 42.5%) akan mencampuradukkan kehilangan daripada susulan dengan kegagalan rawatan, sekali gus mengurang-kurangkan kadar bagi pesakit yang benar-benar melengkapkan pengukuran.

## Sumber data dan kaveat

Nilai biometrik garis dasar dan susulan lazimnya datang daripada peranti bersambung (glukometer Bluetooth atau penimbang pintar), keputusan makmal yang diimport daripada rekod kesihatan elektronik, atau nilai yang dilaporkan sendiri dan dimasukkan oleh pesakit, dan ketiga-tiga sumber ini mempunyai kebolehpercayaan yang sangat berbeza, jadi sumber harus dilaporkan bersama kadar itu. Kehilangan daripada susulan jarang berlaku secara rawak: pesakit yang berhenti melibatkan diri dengan program sering juga yang paling kecil kemungkinannya telah bertambah baik, jadi kadar peningkatan yang tinggi yang dikira hanya ke atas pesakit yang melengkapkan susulan boleh melebih-lebihkan kesan sebenar program pada peringkat populasi. Kesan bermusim dan regresi ke arah min adalah nyata bagi HbA1c dan berat badan, jadi program harus membandingkan dengan kumpulan kawalan serentak atau sejarah jika boleh dan bukannya menganggap sebarang peningkatan sebagai bukti kesan program.

## Perangkap

- **Mengecualikan, dan bukannya melaporkan, kehilangan daripada susulan**: menggugurkan pesakit tanpa ukuran susulan daripada penyebut secara senyap boleh menggelembungkan kadar peningkatan yang ketara dengan banyak; sentiasa laporkan kadar penyiapan ukuran susulan bersama kadar peningkatan itu sendiri.
- **Mencampurkan ukuran yang dilaporkan sendiri dengan ukuran daripada peranti tanpa melabelkannya**: berat badan yang dilaporkan sendiri secara sistematik kurang boleh dipercayai berbanding bacaan penimbang pintar bersambung, dan menggabungkan kedua-dua sumber menyembunyikan berapa banyak peningkatan yang ketara itu sebenarnya hingar pengukuran.
- **Tiada kawalan atau kontrafaktual**: banyak ukuran biometrik kronik turun naik atau kembali ke arah min dengan sendirinya; kadar peningkatan satu lengan tanpa sebarang kumpulan perbandingan ialah bukti yang mencadangkan, bukan yang muktamad, tentang kesan program.
- **Menganggap anjakan purata yang sederhana sebagai bukti peningkatan yang meluas**: peningkatan purata yang kecil pada peringkat populasi boleh didorong oleh beberapa penindak balas yang besar sementara kebanyakan pesakit tidak melihat sebarang perubahan; laporkan taburan (cth. bahagian yang melepasi ambang bermakna secara klinikal), bukan hanya anjakan min.

## Sumber

- American Diabetes Association (ADA), Standards of Care in Diabetes, panduan sasaran HbA1c dan perubahan bermakna secara klinikal
- Centers for Disease Control and Prevention (CDC), Division of Diabetes Translation, panduan penilaian program
- Literatur yang dikaji sejawat tentang hasil program diabetes digital dan pengurusan berat badan, contohnya kajian yang diterbitkan dalam npj Digital Medicine dan Diabetes Care

Lihat juga: [kadar pematuhan ubat](../kadar-pematuhan-ubat/), pendorong huluan yang kerap bagi peningkatan biometrik dalam program keadaan kronik.
