# Kadar Pengabaian Amaran Klinikal

Kadar pengabaian amaran klinikal mengukur bahagian amaran sokongan keputusan klinikal (CDS), seperti amaran interaksi ubat-ubat, amaran alahan dan semakan julat dos yang dijana oleh sistem kemasukan pesanan pembekal berkomputer (CPOE), yang ditolak atau diabaikan oleh klinisien dan bukannya ditindaki. Ia ialah isyarat kuantitatif piawai yang digunakan untuk mengesan dan menguruskan "keletihan amaran": kecenderungan klinisien yang didokumenkan dengan baik untuk menjadi tidak peka terhadap amaran apabila jumlah amaran bernilai rendah menjadi terlalu banyak.

## Mengapa ia penting

Kadar pengabaian yang diterbitkan bagi amaran interaksi ubat lazimnya berjulat daripada kira-kira separuh hingga lebih sembilan puluh peratus, dan kadar yang tinggi bukan secara automatik kegagalan keselamatan: banyak amaran mengganggu dicetuskan untuk interaksi yang tidak penting secara klinikal dalam konteksnya, atau mengulangi amaran yang telah ditindaki oleh klinisien lebih awal dalam set pesanan yang sama, jadi sistem yang ditala dengan baik sengaja mencetuskan amaran yang lebih sedikit tetapi lebih bernilai dan bukannya cuba memacu kadar pengabaian kepada sifar. Apa yang benar-benar penting bagi keselamatan ialah arah aliran dari semasa ke semasa, taburan merentas peringkat keterukan, dan sama ada klinisien mendokumenkan sebab apabila mengabaikan amaran berketerukan tinggi; kadar pengabaian yang meningkat pada interaksi berketerukan tinggi yang buktinya kukuh ialah kebimbangan tadbir urus yang sebenar walaupun purata merentas semua amaran kelihatan stabil.

## Cara pengiraannya

```
Kadar pengabaian = amaran yang diabaikan / jumlah amaran yang dicetuskan × 100

Segmen mengikut:
  - peringkat keterukan (cth. dikontraindikasikan, major, sederhana)
  - jenis amaran (interaksi ubat-ubat, alahan, terapi pendua, julat dos)
  - sama ada sebab pengabaian didokumenkan

"Kadar pengabaian yang didokumenkan" menjejaki bahagian pengabaian yang
disertakan justifikasi yang direkodkan, yang merupakan ukuran tadbir
urus tersendiri.
```

## Contoh kerja

Sistem CPOE sebuah hospital mencetuskan 10,000 amaran interaksi ubat-ubat dalam sebulan, dan 8,700 daripadanya diabaikan, memberikan kadar pengabaian keseluruhan 87%. Segmentasi mengikut keterukan menunjukkan bahawa daripada 500 amaran "dikontraindikasikan", 60 diabaikan (12%), manakala daripada 6,000 amaran "sederhana", 5,700 diabaikan (95%). Angka peringkat sederhana itu secara amnya selaras dengan penanda aras yang diterbitkan dan tidak, dengan sendirinya, menjadi punca kebimbangan; angka peringkat dikontraindikasikan memerlukan semakan kes secara individu, dan hakikat bahawa hanya 340 daripada 500 pengabaian pada peringkat itu disertakan sebab yang didokumenkan ialah penemuan tadbir urus yang lebih boleh ditindaki.

## Sumber data dan kaveat

Log audit rekod kesihatan elektronik, atau modul amaran vendor CDS sendiri, merekodkan setiap peristiwa amaran dicetuskan dan tindak balas amaran, termasuk sama ada klinisien memasukkan justifikasi teks bebas atau berstruktur. Membandingkan kadar pengabaian antara organisasi, atau malah antara jabatan dalam organisasi yang sama, memerlukan pemeriksaan bahawa set peraturan amaran dan pelapisan keterukan yang mendasarinya adalah sama; hospital yang set peraturannya ditala secara agresif akan menunjukkan kadar pengabaian yang lebih rendah atas sebab yang tiada kaitan dengan tingkah laku klinisien.

## Perangkap

- **Menganggap kadar pengabaian mentah sebagai satu skor keselamatan**: ia mencampuradukkan pengabaian yang wajar terhadap amaran bernilai rendah dengan pengabaian yang tidak selamat terhadap interaksi yang benar-benar berbahaya; sentiasa segmen mengikut keterukan.
- **Tiada rakaman sebab pengabaian**: tanpa sebab yang didokumenkan, mustahil untuk membezakan "amaran ini salah" daripada "amaran ini betul dan klinisien membuat keputusan yang tidak selamat", iaitu perbezaan sebenar yang penting bagi keselamatan pesakit.
- **Inflasi peraturan amaran dari semasa ke semasa**: menambah lebih banyak amaran untuk "berjaga-jaga" tanpa memangkas yang bernilai rendah ialah punca langsung kadar pengabaian yang meningkat dan keletihan amaran; tadbir urus amaran harus merangkumi semakan dan persaraan berkala bagi peraturan yang berprestasi lemah, bukan hanya pemantauan.
- **Membandingkan kadar merentas sistem yang reka bentuk gangguannya berbeza**: amaran yang mengganggu dan berhenti paksa menghasilkan tingkah laku pengabaian yang berbeza daripada amaran pasif yang tidak menyekat, jadi kedua-duanya bukan metrik yang boleh dibandingkan secara langsung.

## Sumber

- Literatur yang dikaji sejawat tentang keletihan amaran sokongan keputusan klinikal, diterbitkan secara meluas dalam jurnal termasuk JAMIA dan npj Digital Medicine
- ONC / HealthIT.gov, panduan keselamatan IT kesihatan tentang sokongan keputusan klinikal
- Institute for Safe Medication Practices (ISMP), panduan tentang reka bentuk dan tadbir urus amaran CDS
