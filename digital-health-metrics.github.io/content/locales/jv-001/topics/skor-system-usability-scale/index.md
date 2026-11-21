# Skor System Usability Scale

Skor System Usability Scale (SUS) yaiku kuesioner baku 10 item sing digunakake kanggo ngukur sepira bisa digunakake sawijining piranti lunak, ngasilake siji skor saka 0 nganti 100 sing bisa dibandhingake karo norma industri sing wis mapan. Beda karo Net Promoter Score, sing ngukur kekarepan nyaranake, utawa ukuran asil sing dilaporake pasien, sing ngukur status klinis utawa fungsional, SUS ngukur siji bab tartamtu: sepira gampang piranti lunak dhewe dipelajari lan digunakake, kanggo pasien utawa staf klinis.

## Kenapa penting

Piranti kesehatan digital bisa duwe bukti klinis sing kuwat lan alesan bisnis sing nyengkuyung nanging isih gagal ing praktik amarga pasien utawa klinisi nemokake antarmuka mbingungake, alon, utawa nggawe frustrasi — lan amarga SUS minangka instrumen sing wis divalidasi lan akeh digunakake kanthi data benchmarking sing diterbitake pirang-pirang dasawarsa ing macem-macem industri, tim kesehatan digital bisa mbandhingake kegunaan produke dhewe karo distribusi sing dikenal tinimbang ngandelake kesan informal utawa keluhan anekdotal. SUS sengaja netral teknologi lan cepet dilakokake (biasane kurang saka limang menit), sing nggawe praktis dilakokake bola-bali ing sajrone iterasi desain, beda karo studi kegunaan lengkap utawa uji klinis formal. Amarga kegagalan kegunaan sing madhep klinisi minangka panyumbang burnout sing wis didokumentasi (deleng tingkat burnout dokter) lan kegagalan kegunaan sing madhep pasien minangka panyumbang ditinggalake lan asil literasi digital sing elek sing wis didokumentasi (deleng tingkat literasi digital), SUS dadi sinyal kegunaan peringatan dini sing murah sing bisa nangkep masalah desain sadurunge katon ing metrik hilir sing luwih akibat kasebut.

## Carane ngetung

```
Skor SUS = ((jumlah skor item nomer ganjil − 5) +
            (25 − jumlah skor item nomer genap)) × 2,5

Asile siji skor saka 0 nganti 100 (dudu persentase, sanajan skalane,
amarga ora makili "persen bener" utawa sing padha).

Interpretasi tolok ukur sing diterbitake (Bangor et al.):
  Ing ndhuwur 80  — kegunaan apik banget
  68              — rata-rata, adhedhasar norma industri sing amba
  Ing ngisor 51   — kegunaan elek, pantes diselidiki
```

## Conto petungan

Platform telehealth nglakokake kuesioner SUS 10 item baku marang 150 pasien sawise kunjungan video pisanan. Rata-rata skor SUS sing diétung ing kabeh responden yaiku 74. Dibandhingake karo rata-rata industri 68 sing akeh dikutip, iki nuduhake kegunaan ing ndhuwur rata-rata kanggo populasi pasien lan kasus panggunaan iki, sanajan isih luwih murah sacara bermakna tinimbang ambang "apik banget" 80 sing bakal nuduhake sawetara alangan kegunaan sing isih ana. Nyegmentasi 150 respon sing padha miturut umur nuduhake skor rata-rata 81 kanggo pasien ing ngisor 50 lan 62 kanggo pasien 65 lan luwih — kesenjangan sing nuding menyang masalah kegunaan tartamtu sing bisa ditangani kanggo pasien sing luwih tuwa, dudu masalah kegunaan produk umum, lan sing bakal ditutupi dening rata-rata gabungan siji.

## Sumber data lan pangati-ati

Data SUS asale langsung saka pasien utawa klinisi sing ngrampungake kuesioner 10 item baku, lan instrumen kudu dilakokake persis kaya sing divalidasi (10 item padha, skala persetujuan 5 poin padha, rumus skoring padha) supaya skor sing diasilake bisa dibandhingake karo tolok ukur sing diterbitake; versi kuesioner sing diowahi utawa dipersingkat, sepira apik wae maksude, ngasilake skor sing ora bisa ditafsirake kanthi dipercaya marang distribusi tolok ukur baku. SUS ngukur kegunaan sing dirasakake, sing ana hubungane nanging ora padha karo sukses ngrampungake tugas objektif (deleng tingkat literasi digital kanggo ukuran adhedhasar penyelesaian tugas); produk bisa duwe skor SUS apik saka pasien sing ora nyoba fitur sing luwih rumit, mula nyandhingake SUS karo data penyelesaian tugas objektif menehi gambaran luwih lengkap tinimbang salah siji piyambak. Wektu respon uga penting: nglakokake SUS sanalika sawise kedadeyan frustrasi tartamtu (sambungan gagal, langkah sing mbingungake) versus sawise sesi sing lancar bisa ngowahi skor ora gumantung marang kegunaan produk sakabehe.

## Kesalahan umum

- **Ngowahi item kuesioner baku utawa skoring**: malah owah-owahan tembung utawa skala cilik ngilangi validitas perbandhingan karo distribusi tolok ukur sing diterbitake lan wis mapan; gunakake instrumen 10 item baku persis kaya sing divalidasi.
- **Nglaporake mung skor rata-rata tanpa segmentasi**: kegunaan asring beda substansial miturut umur pangguna, literasi digital, utawa peran (pasien versus klinisi); segmentasi laporan kanggo nemokake kesenjangan kegunaan tartamtu sing bisa ditangani sing ditutupi rata-rata siji.
- **Nganggep SUS minangka ukuran efektivitas klinis**: SUS ngukur kegunaan khusus, dudu asil klinis utawa kepuasan marang perawatan; piranti sing gampang banget digunakake isih bisa gagal nambah asil klinis, lan iki ora kena dicampur utawa diganti siji karo liyane.
- **Nglakokake survei mung sawise sesi sing luar biasa lancar utawa luar biasa nggawe frustrasi**: wektu lan konteks pelaksanaan bisa mbias skor; lakokake kanthi konsisten ing sampel sesi donya nyata sing representatif, dudu mung sing gampang utawa dipilih sacara selektif.

## Sumber

- Brooke, J., "SUS: A Quick and Dirty Usability Scale", instrumen asli sing diterbitake
- Bangor, Kortum, lan Miller, riset benchmarking SUS sing diterbitake sing netepake pita interpretasi skor sing akeh dikutip
- Literatur peer-reviewed babagan panggunaan SUS ing evaluasi kegunaan kesehatan digital lan telehealth, umpamane studi sing diterbitake ing JMIR Human Factors

Deleng uga: [Net Promoter Score pasien](../skor-net-promoter-pasien/), metrik sing dilaporake pasien sing gandheng nanging beda sing ngukur kepuasan lan kasetyan, dudu kegunaan piranti lunak khusus.
