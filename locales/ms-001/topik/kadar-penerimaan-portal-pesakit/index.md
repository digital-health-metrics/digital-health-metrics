# Kadar Penerimaan Portal Pesakit

Kadar penerimaan portal pesakit mengukur bahagian pesakit layak yang telah mendaftar untuk, dan aktif menggunakan, portal pesakit dalam talian (contohnya NHS App, Patient Access atau portal yang dipaut EHR seperti MyChart) untuk melihat rekod, menempah temu janji atau menghantar mesej kepada pasukan penjagaan mereka. Ia ialah penunjuk tahap permulaan bagi penglibatan digital: pesakit yang tidak pernah mengaktifkan akaun tidak dapat mendapat manfaat daripada sebarang perkhidmatan digital hiliran yang dibina di atas portal.

## Mengapa ia penting

Portal hanya mencipta nilai apabila pesakit menggunakannya, jadi organisasi harus menjejaki penerimaan sebagai corong dan bukan satu angka: pendaftaran, pengaktifan (tindakan bermakna pertama) dan penggunaan aktif (penggunaan dalam tetingkap menyusul) ialah tiga kadar berbeza yang terlalu kerap dicampuradukkan. Pasukan perkhidmatan digital kerap berada di bawah tekanan untuk melaporkan satu angka utama yang menguntungkan, dan ia memerlukan disiplin untuk menegaskan pecahan yang lebih sukar dan lebih jujur. Penerimaan yang rendah atau tidak sekata taburannya juga ialah isyarat ekuiti: pesakit yang lebih tua, mempunyai literasi digital lebih rendah, tidak bertutur dalam bahasa majoriti, atau kekurangan jalur lebar yang boleh dipercayai atau telefon pintar secara sistematik kurang berkemungkinan dikira dalam pengangka, jadi purata kadar penerimaan yang meningkat boleh menyembunyikan jurang yang melebar bagi pesakit yang sering paling memerlukan hubungan dengan perkhidmatan.

## Cara pengiraannya

Laporkan ketiga-tiga peringkat, bukan hanya pendaftaran, dan sentiasa nyatakan penyebut secara jelas:

```
Kadar pendaftaran = pesakit dengan akaun portal yang dicipta / populasi pesakit layak × 100
Kadar pengaktifan = pesakit yang menyelesaikan tindakan bermakna pertama (melihat keputusan,
                    menempah slot, menghantar mesej) / pesakit dengan akaun × 100
Kadar penggunaan aktif = pesakit yang log masuk sekurang-kurangnya sekali dalam 12 bulan
                    menyusul / populasi pesakit layak × 100
```

Populasi pesakit layak lazimnya ditakrifkan sebagai pesakit yang mempunyai sekurang-kurangnya satu pertemuan dengan organisasi dalam tempoh lihat ke belakang yang ditakrifkan (lazimnya 24 bulan), yang berumur dan berstatus persetujuan yang dibenarkan untuk memegang akaun sendiri.

## Contoh kerja

Sebuah rangkaian penjagaan primer melayani 50,000 pesakit yang memenuhi takrifan kelayakan. Daripada jumlah ini, 32,000 telah mendaftar untuk portal (kadar pendaftaran 64%). Daripada 32,000 pendaftaran itu, 27,000 telah menyelesaikan sekurang-kurangnya satu tindakan bermakna seperti melihat keputusan ujian (kadar pengaktifan 84% daripada pendaftar). Sepanjang 12 bulan lepas, 21,000 daripada 50,000 pesakit layak asal log masuk sekurang-kurangnya sekali (kadar penggunaan aktif 42%). Melaporkan hanya angka pendaftaran 64% akan melebih-lebihkan penglibatan sebenar dengan ketara; angka penggunaan aktif 42% ialah angka yang harus mendorong keputusan peruntukan sumber bagi program portal.

## Sumber data dan kaveat

Analitik portal lazimnya datang daripada platform vendor itu sendiri (peristiwa log masuk, penggunaan ciri) atau daripada log audit rekod kesihatan elektronik yang mendasarinya, dan organisasi harus bersikap skeptikal terhadap papan pemuka vendor yang hanya mempamerkan kiraan pendaftaran. Akses proksi (ibu bapa atau penjaga yang menguruskan akaun bagi pihak pesakit) harus ditanda dan dilaporkan secara berasingan, kerana ia mengubah siapa "pengguna" yang sebenarnya. Pilihan penyebut sangat penting: mengira berbanding jumlah senarai pesakit berdaftar dan bukannya populasi yang benar-benar layak dan boleh dihubungi akan sentiasa mengurang-nyatakan penerimaan, manakala mengira berbanding hanya pesakit yang dijemput secara aktif akan sentiasa melebih-nyatakannya, jadi takrifan kelayakan harus ditetapkan dan diterbitkan bersama setiap kadar yang dilaporkan.

## Perangkap

- **Pendaftaran dikira sebagai penerimaan**: akaun yang dicipta tetapi tidak pernah digunakan bernilai hampir sifar; laporkan pengaktifan dan penggunaan aktif bersama pendaftaran, bukan sebagai gantinya.
- **Mengabaikan pengecualian digital**: angka penerimaan agregat boleh meningkat sementara jurang antara kumpulan yang paling dan paling kurang terangkum secara digital melebar; sentiasa segmen mengikut umur, kekurangan sosioekonomi, bahasa dan kecacatan di mana tadbir urus data membenarkan.
- **Membandingkan organisasi dengan takrifan kelayakan yang berbeza**: program portal yang hanya menjemput pesakit yang mempunyai alamat e-mel yang direkodkan akan melaporkan kadar yang lebih tinggi daripada yang mengukur berbanding keseluruhan senarai berdaftar, tanpa perbezaan prestasi yang sebenar.
- **Menganggap log masuk sekali sahaja sebagai penglibatan berterusan**: lihat ke belakang 12 bulan adalah lazim, tetapi tetingkap yang lebih pendek (contohnya 90 hari) memberi amaran awal yang lebih baik tentang penggunaan yang menurun.

## Sumber

- NHS England, statistik penggunaan dan pendaftaran NHS App (penerbitan nhs.uk / digital.nhs.uk)
- ONC / HealthIT.gov, ukuran Promoting Interoperability Program, termasuk ukuran akses pesakit View, Download, Transmit (VDT)
- Literatur yang dikaji sejawat tentang penerimaan portal pesakit dan ketidaksamaan kesihatan digital, contohnya kajian yang diterbitkan dalam Journal of the American Medical Informatics Association (JAMIA)

Lihat juga: [kadar ketidakhadiran temu janji](../kadar-ketidakhadiran-temu-janji/), yang dipengaruhi secara langsung oleh penjadualan layan diri dan peringatan berasaskan portal.
