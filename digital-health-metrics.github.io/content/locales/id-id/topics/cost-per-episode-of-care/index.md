# Biaya per Episode Perawatan

Biaya per episode perawatan adalah total biaya yang dikeluarkan dalam merawat episode klinis tertentu — misalnya penggantian pinggul dan pemulihan terkaitnya, atau periode manajemen diabetes — dibandingkan dengan kohort dasar historis yang dirawat tanpa intervensi digital yang sedang dievaluasi. Ini adalah unit standar perbandingan finansial dalam perawatan berbasis nilai, karena menangkap gambaran ekonomi lengkap suatu episode daripada satu item biaya yang terisolasi, dan ini adalah metrik yang paling sering diminta pembayar dan sistem kesehatan sebelum setuju untuk mendanai program kesehatan digital dalam skala besar.

## Mengapa Ini Penting

Kontrak perawatan berbasis nilai semakin membayar untuk hasil dan episode daripada layanan individual, yang berarti kasus finansial program kesehatan digital harus dibuat dalam mata uang yang sama: total biaya per episode, dibandingkan dengan apa yang dulunya dikenakan untuk jenis episode yang sama sebelum intervensi tersebut ada. Sebuah program yang mengurangi satu kategori biaya (misalnya, lebih sedikit kunjungan tindak lanjut tatap muka) sambil meningkatkan yang lain (lebih banyak biaya perangkat, lebih banyak waktu staf pemantauan klinis) belum tentu mengurangi total biaya per episode, dan hanya penetapan biaya tingkat-episode penuh yang menangkap pertukaran ini; melihat satu item biaya mana pun secara terisolasi berisiko menghasilkan kesimpulan yang menyesatkan dalam kedua arah. Karena definisi episode dan periode dasar dapat dikonstruksi dengan cara yang menguntungkan kesimpulan tertentu, metrik ini memerlukan transparansi metodologis lebih dari kebanyakan metrik lain dalam buku ini agar dapat dipercaya oleh pembayar atau tim keuangan yang skeptis.

## Cara Menghitungnya

```
Biaya per episode perawatan = total biaya semua perawatan yang
                               diberikan dalam jendela episode yang
                               ditentukan (semua tempat perawatan,
                               semua kategori biaya) / jumlah episode

Bandingkan dengan biaya per episode kohort dasar historis untuk jenis
episode yang didefinisikan secara klinis yang sama, disesuaikan untuk
campuran kasus (usia, komorbiditas, keparahan) antara kedua kohort.

Sertakan, bukan hanya biaya klinis langsung: biaya platform teknologi
dan perangkat, waktu staf klinis tambahan, dan perawatan apa pun yang
berpindah tempat (misalnya dari rawat inap ke rumah) daripada
menghilang sepenuhnya.
```

## Contoh Perhitungan

Biaya dasar historis sebuah sistem kesehatan untuk episode penggantian pinggul total (bedah hingga pemulihan 90 hari) adalah $28.000 per episode, berdasarkan 200 episode historis. Sebuah program pemantauan pasca-bedah digital baru diperkenalkan, dan 150 episode baru yang menggunakan program tersebut menunjukkan biaya rata-rata $24.500 per episode — pengurangan $3.500 per episode, didorong terutama oleh lebih sedikit kunjungan unit gawat darurat selama pemulihan dan rata-rata lama rawat inap yang lebih singkat. Setelah menyesuaikan risiko untuk campuran kasus yang sedikit lebih muda dan komorbiditas lebih rendah dalam kohort yang dipantau secara digital dibandingkan dengan dasar historis, penghematan yang disesuaikan menyempit menjadi $2.100 per episode — masih perbaikan nyata, tetapi secara material lebih kecil dari yang disarankan perbandingan mentah yang tidak disesuaikan.

## Sumber Data dan Catatan Penting

Total biaya episode biasanya dirakit dari sistem akuntansi biaya atau keuangan sistem kesehatan itu sendiri, menggabungkan data klaim, alokasi biaya internal, dan, di mana platform digital terlibat, biaya lisensi dan perangkat kerasnya — merakit angka ini secara akurat biasanya merupakan bagian tersulit dan paling intensif sumber daya dari analisis nilai kesehatan digital mana pun, karena biaya sering dicatat dalam sistem terpisah yang tidak pernah dirancang untuk digabungkan pada tingkat episode. Penyesuaian campuran kasus sangat penting kapan pun kohort yang dikelola secara digital dan kohort dasar historis tidak ditugaskan melalui randomisasi sejati, karena program digital sering ditawarkan terlebih dahulu kepada pasien yang lebih terlibat, umumnya lebih sehat, atau lebih termotivasi, yang dapat menghasilkan penghematan biaya yang tampak yang sebenarnya merupakan efek seleksi daripada efek program sejati.

## Jebakan Umum

- **Membandingkan biaya yang tidak disesuaikan di seluruh kohort dengan campuran kasus berbeda**: kohort yang dikelola secara digital yang kebetulan lebih sehat atau berisiko lebih rendah daripada dasar historis akan menunjukkan biaya per episode yang lebih rendah karena alasan yang tidak terkait dengan intervensi digital itu sendiri; selalu sesuaikan risiko sebelum membandingkan.
- **Menghilangkan biaya teknologi dan staf dari sisi "digital" perbandingan**: analisis biaya yang hanya melacak pengurangan pemanfaatan klinis sambil mengabaikan biaya platform, perangkat, dan staf untuk menjalankan program digital akan melebih-lebihkan penghematan bersih.
- **Mendefinisikan jendela episode secara tidak konsisten antar kohort**: membandingkan jendela episode 90 hari untuk satu kohort dengan jendela 60 hari untuk yang lain akan menghasilkan perbandingan biaya yang sebenarnya tidak mengukur hal yang sama.
- **Memperlakukan pergeseran biaya sebagai pengurangan biaya**: biaya yang berpindah dari satu tempat perawatan ke yang lain (misalnya dari rawat inap ke tempat rumah yang dipantau) adalah temuan yang nyata dan berharga, tetapi secara analitis berbeda dari biaya yang sepenuhnya dihilangkan, dan keduanya harus dilaporkan secara terpisah.

## Sumber

- Centers for Medicare & Medicaid Services (CMS), panduan Bundled Payments for Care Improvement (BPCI) dan model pembayaran berbasis episode
- Healthcare Financial Management Association (HFMA), panduan tentang metodologi penetapan biaya episode-perawatan
- Literatur yang ditinjau sejawat tentang analisis biaya perawatan berbasis nilai kesehatan digital, misalnya studi yang diterbitkan di Health Affairs dan American Journal of Managed Care

Lihat juga: [return on investment (ROI) dan value on investment (VOI)](../roi-and-voi/), yang menggunakan biaya per episode perawatan sebagai salah satu input utamanya.
