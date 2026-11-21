# Kos Setiap Episod Rawatan

Kos setiap episod rawatan ialah jumlah kos yang ditanggung untuk merawat sesuatu episod klinikal yang ditakrifkan, misalnya penggantian pinggul dan pemulihan yang berkaitan, atau tempoh pengurusan diabetes, berbanding garis dasar kohort sejarah yang dirawat tanpa intervensi digital yang sedang dinilai. Ia ialah unit perbandingan kewangan piawai dalam penjagaan berasaskan nilai, kerana ia menangkap gambaran ekonomi penuh bagi sesuatu episod dan bukan sebarang satu item kos secara berasingan, dan ia merupakan metrik yang paling kerap dikehendaki oleh pembayar dan sistem kesihatan sebelum bersetuju membiayai program kesihatan digital pada skala besar.

## Mengapa ia penting

Kontrak penjagaan berasaskan nilai semakin membayar untuk hasil dan episod dan bukannya perkhidmatan individu, yang bermakna kes kewangan sesuatu program kesihatan digital mesti dibuat dalam mata wang yang sama: jumlah kos setiap episod, berbanding kos episod jenis yang sama sebelum intervensi wujud. Program yang mengurangkan satu kategori kos (misalnya lebih sedikit lawatan susulan secara bersemuka) sambil menambah yang lain (lebih banyak kos peranti, lebih banyak masa kakitangan pemantauan klinikal) belum tentu mengurangkan jumlah kos setiap episod, dan hanya pengekosan peringkat episod yang penuh menangkap pertukaran ini; melihat mana-mana satu baris kos secara berasingan berisiko membawa kepada kesimpulan yang mengelirukan ke mana-mana arah. Oleh sebab takrifan episod dan tempoh garis dasar boleh dibina dengan cara yang memihak kepada sesuatu kesimpulan, metrik ini memerlukan ketelusan metodologi yang lebih tinggi daripada kebanyakan metrik lain dalam buku ini supaya dipercayai oleh pembayar atau pasukan kewangan yang skeptikal.

## Cara pengiraannya

```
Kos setiap episod rawatan = jumlah kos semua penjagaan yang disampaikan
                             dalam tetingkap episod yang ditakrifkan
                             (semua tetapan penjagaan, semua kategori
                             kos) / bilangan episod

Bandingkan dengan kos setiap episod kohort garis dasar sejarah bagi
jenis episod yang sama dan ditakrifkan secara klinikal, diselaraskan
untuk campuran kes (umur, komorbiditi, keterukan) antara kedua-dua
kohort.

Sertakan, bukan hanya kos klinikal langsung: kos platform teknologi
dan peranti, masa kakitangan klinikal tambahan, dan sebarang penjagaan
yang beralih tetapan (cth. daripada pesakit dalam ke rumah) dan bukan
hilang sepenuhnya.
```

## Contoh kerja

Kos garis dasar sejarah sebuah sistem kesihatan bagi satu episod penggantian pinggul total (pembedahan hingga pemulihan 90 hari) ialah $28,000 setiap episod, berdasarkan 200 episod sejarah. Satu program pemantauan lepas pembedahan digital yang baharu diperkenalkan, dan 150 episod baharu yang menggunakan program itu menunjukkan purata kos $24,500 setiap episod, iaitu pengurangan $3,500 setiap episod, terutamanya disebabkan oleh lebih sedikit lawatan jabatan kecemasan semasa pemulihan dan purata penginapan pesakit dalam yang lebih pendek. Selepas pelarasan risiko untuk campuran kes yang sedikit lebih muda dan berkomorbiditi lebih rendah dalam kohort yang dipantau secara digital berbanding garis dasar sejarah, penjimatan yang diselaraskan mengecil kepada $2,100 setiap episod, iaitu masih peningkatan yang tulen tetapi jauh lebih kecil daripada yang disarankan oleh perbandingan mentah yang tidak diselaraskan.

## Sumber data dan kaveat

Jumlah kos episod lazimnya dihimpun daripada sistem perakaunan kos atau kewangan sistem kesihatan itu sendiri, menggabungkan data tuntutan, peruntukan kos dalaman dan, jika platform digital terlibat, kos pelesenan dan perkakasannya; menghimpun angka ini dengan tepat biasanya bahagian yang paling sukar dan paling memerlukan sumber dalam sebarang analisis nilai kesihatan digital, kerana kos kerap direkodkan dalam sistem berasingan yang tidak pernah direka untuk digabungkan pada peringkat episod. Pelarasan campuran kes adalah penting apabila kohort yang diurus secara digital dan kohort garis dasar sejarah tidak ditetapkan melalui rawak yang sebenar, kerana program digital kerap ditawarkan dahulu kepada pesakit yang lebih terlibat, umumnya lebih sihat, atau lebih bermotivasi, yang boleh menghasilkan penjimatan kos yang ketara tetapi sebenarnya kesan pemilihan dan bukan kesan program yang tulen.

## Perangkap

- **Membandingkan kos tanpa pelarasan merentas kohort dengan campuran kes yang berbeza**: kohort yang diurus secara digital yang kebetulan lebih sihat atau berisiko lebih rendah daripada garis dasar sejarah akan menunjukkan kos setiap episod yang lebih rendah atas sebab yang tidak berkaitan dengan intervensi digital itu sendiri; sentiasa laraskan risiko sebelum membandingkan.
- **Meninggalkan kos teknologi dan kakitangan daripada bahagian "digital" dalam perbandingan**: analisis kos yang hanya menjejaki penggunaan klinikal yang berkurangan sambil mengabaikan kos platform, peranti dan kakitangan untuk menjalankan program digital akan melebih-lebihkan penjimatan bersih.
- **Mentakrifkan tetingkap episod secara tidak konsisten antara kohort**: membandingkan tetingkap episod 90 hari bagi satu kohort dengan tetingkap 60 hari bagi kohort lain akan menghasilkan perbandingan kos yang sebenarnya tidak mengukur perkara yang sama.
- **Menganggap peralihan kos sebagai pengurangan kos**: kos yang dialihkan daripada satu tetapan penjagaan ke tetapan lain (misalnya daripada pesakit dalam ke tetapan rumah yang dipantau) ialah penemuan yang tulen dan bernilai, tetapi berbeza secara analitik daripada kos yang dihapuskan sepenuhnya, dan kedua-duanya harus dilaporkan secara berasingan.

## Sumber

- Centers for Medicare & Medicaid Services (CMS), Bundled Payments for Care Improvement (BPCI) dan panduan model pembayaran berasaskan episod
- Healthcare Financial Management Association (HFMA), panduan tentang metodologi pengekosan episod rawatan
- Literatur yang dikaji sejawat tentang analisis kos penjagaan berasaskan nilai kesihatan digital, contohnya kajian yang diterbitkan dalam Health Affairs dan American Journal of Managed Care

Lihat juga: [pulangan atas pelaburan (ROI) dan nilai atas pelaburan (VOI)](../roi-dan-voi/), yang menggunakan kos setiap episod rawatan sebagai salah satu input utamanya.
