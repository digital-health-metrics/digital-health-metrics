# Skor Net Promoter Pasien

Skor Net Promoter Pasien (NPS) mengukur kesediaan pasien untuk merekomendasikan produk kesehatan digital atau layanan telehealth kepada orang lain, berdasarkan satu pertanyaan survei — "Seberapa besar kemungkinan Anda merekomendasikan layanan ini kepada teman atau kolega?" — dinilai 0 hingga 10. Responden yang mencetak 9-10 adalah "promotor", 7-8 adalah "pasif", dan 0-6 adalah "pencela"; NPS adalah persentase promotor dikurangi persentase pencela. Ini adalah metrik kepuasan pasien yang paling banyak digunakan, dan paling banyak dikritik, dalam kesehatan digital, dihargai karena kesederhanaannya tetapi terbatas dalam apa yang dapat didiagnosisnya sendiri.

## Mengapa Ini Penting

NPS memberi tim kesehatan digital sinyal kepuasan yang sederhana, terstandarisasi, dan dapat dibandingkan lintas yang murah untuk dikumpulkan dan mudah ditafsirkan sekilas oleh pemangku kepentingan non-spesialis (eksekutif, dewan, komisioner), itulah sebabnya ia tetap populer meskipun ada keterbatasan metodologis yang terdokumentasi dengan baik. Untuk produk telehealth dan pintu depan digital secara khusus, NPS sering menjadi indikator utama apakah pasien akan terus memilih saluran digital daripada alternatif tatap muka ketika keduanya tersedia, yang memiliki implikasi langsung untuk perencanaan bauran saluran dan kapasitas. Namun, NPS adalah satu angka ringkasan tingkat tinggi: NPS yang menurun memberi tahu tim bahwa ada yang salah tetapi tidak apa, sehingga harus selalu dipasangkan dengan umpan balik verbatim teks terbuka atau instrumen kegunaan yang lebih terperinci agar dapat ditindaklanjuti, bukan sekadar angka skor.

## Cara Menghitungnya

```
NPS = % promotor (skor 9-10) − % pencela (skor 0-6)

Hasilnya adalah angka dari −100 hingga +100, bukan persentase,
meskipun diturunkan dari persentase — jangan pernah menambahkan tanda
"%" pada angka NPS.

Laporkan bersama:
  tingkat respons (% pasien yang disurvei yang merespons)
  ukuran sampel
  kata-kata pertanyaan yang tepat digunakan
```

## Contoh Perhitungan

Sebuah platform telehealth mensurvei 1.000 pasien setelah konsultasi video dan menerima 400 respons (tingkat respons 40%). Dari 400 responden ini, 220 mencetak 9-10 (promotor, 55%), 100 mencetak 7-8 (pasif, 25%), dan 80 mencetak 0-6 (pencela, 20%). NPS adalah 55 − 20 = 35. Angka ini hanya berarti sesuatu dalam konteks: NPS 35 mungkin merupakan hasil yang kuat dibandingkan dengan industri telehealth yang lebih luas, atau penurunan yang mengkhawatirkan dibandingkan dengan skor platform yang sama sendiri sebesar 48 pada kuartal sebelumnya — NPS jauh lebih berguna sebagai tren seiring waktu untuk satu produk daripada sebagai tolok ukur absolut satu kali terhadap produk yang berbeda.

## Sumber Data dan Catatan Penting

NPS dikumpulkan melalui survei pasca-interaksi, biasanya dipicu segera setelah kunjungan video, sesi aplikasi, atau episode perawatan, dan tingkat respons sangat penting: tingkat respons rendah (jauh di bawah ~40% yang terlihat dalam contoh perhitungan) berisiko mengalami bias non-respons, di mana hanya pasien yang sangat puas atau sangat tidak puas yang repot-repot merespons, menarik skor ke arah ekstrem dan menjauh dari sentimen populasi sebenarnya. Membandingkan NPS di seluruh organisasi atau bahkan di seluruh saluran berbeda organisasi tunggal (misalnya telehealth versus tatap muka) hanya valid jika kata-kata pertanyaan, waktu, dan populasi survei benar-benar sebanding; perubahan kata-kata kecil diketahui menggeser skor secara terukur. NPS harus diperlakukan sebagai hasil yang perlu dijelaskan, bukan tujuan itu sendiri — komentar teks terbuka yang biasanya menyertai survei NPS biasanya lebih dapat ditindaklanjuti daripada skornya.

## Jebakan Umum

- **Membandingkan angka NPS yang dikumpulkan dengan kata-kata pertanyaan atau waktu yang berbeda**: bahkan perbedaan desain survei kecil dapat menggeser skor beberapa poin, membuat tolok ukur NPS lintas organisasi jauh lebih tidak dapat diandalkan daripada yang terlihat.
- **Mengabaikan tingkat respons**: NPS utama yang dihitung dari tingkat respons 10% jauh lebih tidak dapat dipercaya daripada yang dihitung dari tingkat respons 60%, karena tingkat respons rendah rentan terhadap bias non-respons ke arah pendapat paling ekstrem.
- **Memperlakukan NPS sebagai alat diagnostik daripada metrik ringkasan**: NPS yang turun mengatakan ada yang salah tetapi tidak pernah mengatakan apa; ini harus selalu dipasangkan dengan umpan balik kualitatif atau instrumen kepuasan atau kegunaan yang lebih terperinci untuk mengidentifikasi penyebabnya.
- **Mengejar NPS sebagai target itu sendiri**: mengoptimalkan secara sempit untuk angka NPS (misalnya hanya mensurvei pasien setelah interaksi yang sangat positif) dapat meningkatkan skor yang dilaporkan sambil membuat pengalaman pasien yang mendasarinya tidak lebih baik, atau secara aktif lebih buruk.

## Sumber

- Bain & Company, metodologi Net Promoter System asli dan panduan tolok ukur
- Agency for Healthcare Research and Quality (AHRQ), program survei pengalaman pasien CAHPS (Consumer Assessment of Healthcare Providers and Systems), sebagai alternatif pelengkap yang lebih terperinci
- Literatur yang ditinjau sejawat tentang penggunaan dan keterbatasan Net Promoter Score dalam pengaturan layanan kesehatan, misalnya studi yang diterbitkan di Journal of Medical Internet Research (JMIR)

Lihat juga: [tingkat retensi pengguna](../user-retention-rate/), karena kepuasan yang dilaporkan pasien dan penggunaan produk yang sebenarnya terus berlanjut sering berbeda dan layak dilacak sebagai sinyal terpisah.
