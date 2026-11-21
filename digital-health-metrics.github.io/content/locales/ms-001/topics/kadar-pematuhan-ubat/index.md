# Kadar Pematuhan Ubat

Kadar pematuhan ubat mengukur sejauh mana pesakit mengambil ubat yang ditetapkan mengikut arahan, yang paling lazim dinyatakan sebagai perkadaran hari dalam tempoh yang ditakrifkan apabila pesakit mempunyai akses kepada ubatnya seperti yang ditetapkan. Ia ialah salah satu metrik kesihatan digital yang paling berimpak kerana ketidakpatuhan adalah lazim, sebahagian besarnya boleh dicegah dengan sokongan yang betul, dan berkait terus dengan hasil klinikal yang lebih buruk serta kos hiliran yang lebih tinggi, iaitu tepat jurang yang dibina untuk ditutup oleh aplikasi peringatan ubat, botol pil pintar dan dorongan isi semula farmasi.

## Mengapa ia penting

Ketidakpatuhan terhadap ubat penyakit kronik dianggarkan oleh badan kesihatan awam mencapai setinggi 50% bagi sesetengah keadaan, dan ia merupakan punca utama yang boleh dicegah bagi kemasukan hospital yang boleh dielakkan, perkembangan penyakit dan kegagalan rawatan yang disalah atribusikan kepada ubat itu sendiri dan bukannya penggunaan yang tidak konsisten. Alat pematuhan digital wujud khusus untuk menutup jurang ini, jadi bagi mana-mana program yang merangkumi komponen ubat, kadar pematuhan lazimnya metrik tunggal yang paling relevan dengan keputusan: ia berada secara kausal di hulu peningkatan biometrik, kemasukan semula dan kebanyakan metrik hasil klinikal lain yang mungkin dilaporkan oleh program. Program yang memperbaik penglibatan atau kepuasan tanpa menggerakkan pematuhan berkemungkinan belum menunjukkan mekanisme yang munasabah bagi manfaat klinikal.

## Cara pengiraannya

```
Perkadaran Hari Dilindungi (PDC) = hari dalam tempoh dengan ubat di tangan
                                    (berdasarkan bekalan hari daripada isi
                                    semula) / hari dalam tempoh pengukuran
                                    × 100

Nisbah Pemilikan Ubat (MPR) = jumlah bekalan hari yang diperoleh dalam
                              tempoh / hari dalam tempoh × 100 (boleh
                              melebihi 100% dengan isi semula awal; PDC
                              umumnya lebih diutamakan atas sebab ini)

Pesakit lazimnya dikelaskan "patuh" pada ambang PDC ≥ 80%, mengikut
konvensyen ukuran kualiti yang digunakan secara meluas.
```

## Contoh kerja

Seorang pesakit ditetapkan ubat kronik harian sepanjang tempoh pengukuran 90 hari. Rekod isi semula farmasi menunjukkan pesakit memperoleh ubat yang mencukupi untuk menampung 76 daripada 90 hari itu, dengan dua jurang: jurang 9 hari selepas kehabisan sebelum isi semula, dan jurang 5 hari sekitar kemasukan ke hospital. PDC ialah 76 / 90 × 100 = 84%, yang melepasi ambang pematuhan konvensional 80%. Jika jurang yang sama diukur menggunakan MPR berdasarkan bekalan hari yang dibekalkan dan bukannya hari yang benar-benar dilindungi, isi semula awal di tempat lain dalam tempoh itu boleh menolak nisbah melebihi 100%, yang menggambarkan mengapa PDC ialah ukuran yang lebih konservatif dan umumnya lebih diutamakan.

## Sumber data dan kaveat

Data tuntutan atau isi semula farmasi (sama ada daripada pengurus faedah farmasi atau sistem farmasi bersambung) ialah sumber piawai, kerana ia mencerminkan apa yang sebenarnya diperoleh pesakit dan bukan apa yang ditetapkan; data preskripsi semata-mata melebih-lebihkan pematuhan kerana ia tidak mengesahkan bahawa pesakit pernah mengambil ubat itu. Alat pematuhan digital (botol pil pintar, penderia yang boleh ditelan, penyedut pintar bersambung yang melog setiap penggunaan bagi keadaan pernafasan seperti asma dan COPD, dan daftar masuk berasaskan aplikasi) menawarkan data resolusi lebih tinggi tentang sama ada dos benar-benar diambil, bukan hanya diperoleh, tetapi digunakan oleh minoriti pesakit yang kecil dan mungkin tidak mewakili, jadi menggabungkan pematuhan yang disahkan peranti dengan PDC berasaskan tuntutan merentas populasi memerlukan kehati-hatian dalam tafsiran. Pematuhan harus diukur sepanjang tempoh yang cukup panjang untuk melicinkan dos tunggal yang terlepas tetapi cukup pendek untuk mengesan penurunan bermakna sebelum ia menyebabkan kemudaratan klinikal; tetingkap bergolek 90 hari adalah lazim bagi ubat kronik.

## Perangkap

- **Menggunakan MPR tanpa mendedahkan bahawa ia boleh melebihi 100%**: nisbah melebihi 100% yang tidak dijelaskan daripada isi semula awal atau penimbunan menjadikan perbandingan merentas pesakit dan merentas tempoh tidak boleh dipercayai melainkan PDC digunakan atau nisbah itu dihadkan secara jelas.
- **Menganggap data preskripsi atau pesanan sebagai bukti pematuhan**: preskripsi yang ditulis atau dihantar ke farmasi tidak menyatakan apa-apa tentang sama ada pesakit mengambil atau menelan ubat itu; hanya data isi semula atau peranti yang menutup jurang itu.
- **Menggunakan satu ambang pematuhan merentas semua keadaan tanpa pilih**: akibat klinikal terlepas 20% dos sangat berbeza mengikut kelas ubat (cth. antikoagulan berbanding statin), jadi satu ambang 80% yang digunakan secara universal boleh mengurang- atau melebih-nyatakan risiko klinikal bagi sesetengah ubat.
- **Mengabaikan pertukaran dan penghentian ubat**: pesakit yang ditukar secara klinikal dan wajar kepada ubat lain boleh kelihatan sebagai penurunan pematuhan yang besar pada ubat asal jika pertukaran itu tidak diambil kira dalam pengiraan.

## Sumber

- Pharmacy Quality Alliance (PQA), spesifikasi ukuran Proportion of Days Covered
- Centers for Medicare & Medicaid Services (CMS), ukuran pematuhan ubat Star Ratings
- Literatur yang dikaji sejawat tentang pengukuran pematuhan ubat dan intervensi pematuhan digital, contohnya kajian yang diterbitkan dalam Journal of Managed Care & Specialty Pharmacy

Lihat juga: [kadar peningkatan biometrik](../kadar-peningkatan-biometrik/), yang pematuhan terhadap ubat penyakit kronik merupakan pendorong utamanya.
