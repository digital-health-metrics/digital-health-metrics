# Tingkat Adopsi Portal Pasien

Tingkat adopsi portal pasien mengukur proporsi pasien yang memenuhi syarat yang telah mendaftar untuk, dan secara aktif menggunakan, portal pasien daring (misalnya NHS App, Patient Access, atau portal yang terhubung dengan EHR seperti MyChart) untuk melihat catatan medis, memesan janji temu, atau mengirim pesan kepada tim perawatan mereka. Ini adalah indikator tingkat pemula dari keterlibatan digital: pasien yang belum pernah mengaktifkan akun tidak dapat memperoleh manfaat dari layanan digital lanjutan apa pun yang dibangun di atas portal tersebut.

## Mengapa ini penting

Portal hanya menciptakan nilai setelah pasien menggunakannya, sehingga organisasi harus melacak adopsi sebagai sebuah corong (funnel) dan bukan angka tunggal: registrasi, aktivasi (tindakan bermakna pertama), dan penggunaan aktif (penggunaan dalam jangka waktu tertentu) adalah tiga tingkat berbeda yang terlalu sering disamakan. Tim layanan digital sering kali berada di bawah tekanan untuk melaporkan satu angka utama yang menguntungkan, dan diperlukan disiplin untuk bersikeras pada rincian yang lebih sulit namun lebih jujur. Adopsi yang rendah atau terdistribusi secara tidak merata juga merupakan sinyal kesetaraan: pasien yang lebih tua, memiliki literasi digital rendah, tidak berbicara bahasa mayoritas, atau tidak memiliki akses internet yang andal atau ponsel pintar cenderung secara sistematis kurang terhitung dalam pembilang, sehingga tingkat adopsi rata-rata yang meningkat dapat menutupi kesenjangan yang semakin melebar bagi pasien yang sering kali paling membutuhkan kontak dengan layanan.

## Cara menghitungnya

Laporkan ketiga tahap, bukan hanya registrasi, dan selalu nyatakan penyebut secara eksplisit:

```
Tingkat registrasi  = pasien dengan akun portal dibuat / populasi pasien yang memenuhi syarat × 100
Tingkat aktivasi     = pasien yang menyelesaikan tindakan bermakna pertama (melihat hasil,
                        memesan slot, mengirim pesan) / pasien dengan akun × 100
Tingkat penggunaan aktif = pasien yang masuk setidaknya sekali dalam 12 bulan terakhir /
                        populasi pasien yang memenuhi syarat × 100
```

Populasi pasien yang memenuhi syarat biasanya didefinisikan sebagai pasien dengan setidaknya satu kunjungan ke organisasi dalam periode retrospektif tertentu (umumnya 24 bulan), yang usia dan status persetujuannya memungkinkan mereka memiliki akun sendiri.

## Contoh penerapan

Sebuah jaringan perawatan primer melayani 50.000 pasien yang memenuhi definisi kelayakan. Dari jumlah tersebut, 32.000 telah mendaftar untuk portal (tingkat registrasi 64%). Dari 32.000 registrasi tersebut, 27.000 telah menyelesaikan setidaknya satu tindakan bermakna seperti melihat hasil tes (tingkat aktivasi 84% dari yang terdaftar). Selama 12 bulan terakhir, 21.000 dari 50.000 pasien yang memenuhi syarat masuk setidaknya sekali (tingkat penggunaan aktif 42%). Melaporkan hanya angka registrasi 64% akan sangat melebih-lebihkan keterlibatan yang sebenarnya; angka penggunaan aktif 42% adalah angka yang seharusnya mendorong keputusan alokasi sumber daya untuk program portal tersebut.

## Sumber data dan peringatan

Analitik portal biasanya berasal dari platform vendor itu sendiri (peristiwa masuk, penggunaan fitur) atau dari log audit rekam medis elektronik yang mendasarinya, dan organisasi harus bersikap skeptis terhadap dasbor vendor yang hanya menampilkan jumlah registrasi. Akses proksi (orang tua atau pengasuh yang mengelola akun atas nama pasien) harus ditandai dan dilaporkan secara terpisah, karena ini mengubah siapa yang sebenarnya menjadi "pengguna". Pemilihan penyebut sangat berpengaruh: menghitung terhadap seluruh daftar pasien terdaftar daripada populasi yang benar-benar memenuhi syarat dan dapat dihubungi akan selalu meremehkan adopsi, sementara menghitung hanya terhadap pasien yang secara aktif diundang akan selalu melebih-lebihkannya, sehingga definisi kelayakan harus ditetapkan dan dipublikasikan bersama setiap tingkat yang dilaporkan.

## Kesalahan umum

- **Registrasi dihitung sebagai adopsi**: akun yang dibuat namun tidak pernah digunakan memiliki nilai yang hampir nol; laporkan aktivasi dan penggunaan aktif bersama registrasi, bukan sebagai penggantinya.
- **Mengabaikan eksklusi digital**: angka adopsi agregat dapat meningkat sementara kesenjangan antara kelompok yang paling dan paling tidak terlibat secara digital semakin melebar; selalu segmentasikan berdasarkan usia, kemiskinan, bahasa, dan disabilitas jika tata kelola data mengizinkannya.
- **Membandingkan organisasi dengan definisi kelayakan yang berbeda**: sebuah program portal yang hanya mengundang pasien dengan alamat email tercatat akan melaporkan tingkat yang lebih tinggi daripada program yang mengukur terhadap seluruh daftar terdaftar, tanpa perbedaan kinerja yang nyata.
- **Memperlakukan satu kali masuk sebagai keterlibatan berkelanjutan**: periode retrospektif 12 bulan adalah hal yang umum, tetapi jendela waktu yang lebih pendek (misalnya 90 hari) memberikan peringatan lebih dini tentang penurunan penggunaan.

## Sumber

- NHS England, statistik penggunaan dan registrasi NHS App (publikasi nhs.uk / digital.nhs.uk)
- ONC / HealthIT.gov, ukuran Program Promosi Interoperabilitas, termasuk ukuran akses pasien View, Download, Transmit (VDT)
- Literatur yang ditinjau sejawat mengenai adopsi portal pasien dan kesenjangan kesehatan digital, misalnya studi yang diterbitkan dalam Journal of the American Medical Informatics Association (JAMIA)

Lihat juga: [tingkat ketidakhadiran janji temu](../tingkat-ketidakhadiran-janji-temu/), yang secara langsung dipengaruhi oleh penjadwalan mandiri dan pengingat berbasis portal.
