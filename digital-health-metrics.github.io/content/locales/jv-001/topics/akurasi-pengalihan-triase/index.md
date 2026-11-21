# Akurasi Pengalihan Triase

Akurasi pengalihan triase yaiku persentase kontak pasien nalika piranti triase otomatis utawa sing dibantu AI bener anggone ngarahake pasien menyang tingkat lan panggonan perawatan sing cocog — umpamane perawatan mandiri, perawatan primer, perawatan urgen, utawa perawatan darurat — kaya sing dinilai miturut standar rujukan sing wis divalidasi sacara klinis. Iki metrik keamanan lan efektivitas kanggo saben digital front door, symptom checker, utawa sistem triase AI: kabeh nilai piranti kuwi gumantung marang kemampuane ngarahake pasien kanthi bener, cepet, lan konsisten.

## Kenapa penting

Piranti triase sing ora akurat bisa nyebabake cilaka ing loro arah: under-triage (pasien diarahake menyang tingkat perawatan sing luwih ngisor tinimbang sing dibutuhake) bisa nundha penanganan darurat sing sejati, déné over-triage (pasien diarahake menyang tingkat perawatan sing luwih dhuwur tinimbang sing dibutuhake) mbuwang kapasitas darurat lan urgen sing winates lan nambah biaya lan kuatir pasien tanpa manfaat klinis. Amarga kalorone jinis kesalahan iki duwe akibat sing beda banget, akurasi pengalihan triase kudu tansah dilaporake bareng arah kesalahane, dudu minangka siji angka akurasi gabungan sing nutupi apa piranti kuwi salah kanthi aman utawa mbebayani. Regulator lan sistem kesehatan sing ngevaluasi piranti triase AI kanggo disebarake saya kerep mbutuhake laporan akurasi bertingkat kaya ngene minangka syarat persetujuan klinis, utamane kanggo piranti sing makarya kanthi sawetara derajat otonomi saka klinisi.

## Carane ngetung

```
Akurasi pengalihan triase = kontak sing dialihake kanthi bener / total kontak sing ditriase × 100

Laporake under-triage lan over-triage kanthi kapisah:
  Tingkat under-triage = kontak sing dialihake menyang tingkat akuitas
                          sing luwih ngisor tinimbang standar rujukan /
                          total kontak sing ditriase × 100
  Tingkat over-triage  = kontak sing dialihake menyang tingkat akuitas
                          sing luwih dhuwur tinimbang standar rujukan /
                          total kontak sing ditriase × 100

Standar rujukan biasane yaiku tinjauan retrospektif dening klinisi
babagan kasus sing padha, kanthi buta marang output piranti yen bisa.
```

## Conto petungan

Piranti symptom checker AI nriase 5.000 kontak pasien ing sasi. Tinjauan klinisi sing buta marang sampel acak 500 kontak kasebut nemokake 430 dialihake menyang tingkat akuitas sing bener (akurasi 86%), 45 under-triage (9%), lan 25 over-triage (5%). Tingkat under-triage 9% minangka angka sing paling urgen kudu diselidiki, amarga nggambarake kontak nalika pasien bisa wae diarahake menyang perawatan sing kurang urgen tinimbang sing sejatine dibutuhake; tingkat over-triage 5% minangka masalah kapasitas lan biaya, nanging dudu masalah keamanan langsung.

## Sumber data lan pangati-ati

Standar rujukan kanggo ngukur akurasi triase penting banget: tinjauan dening siji klinisi nggawa variabilitas penilaian klinisi kuwi dhewe, mula angka akurasi sing bisa dipercaya biasane mbutuhake pirang-pirang peninjau independen kanthi kesepakatan antar-penilai sing didokumentasi, utawa dibandhingake karo asil klinis sing dikonfirmasi sabanjure (perawatan apa sing sejatine dibutuhake pasien, ditetepake sawise kedadeyan). Pengambilan sampel uga penting: yen mung nyinaoni sampel sing gampang dijupuk, utawa mung kontak sing ditandhani ora lumrah, angka sing diasilake ora bisa digeneralisasi marang kinerja piranti sakabehe. Angka akurasi kudu dilaporake kapisah miturut kategori gejala utawa keluhan sing diwenehake yen volume kasus sing ndasari ngidini, amarga piranti triase arang kerja kanthi sarupa ing kabeh kondisi.

## Kesalahan umum

- **Nglaporake mung siji angka akurasi gabungan**: nggabungake under-triage lan over-triage dadi siji angka nutupi apa kesalahan piranti cenderung menyang mode kegagalan sing luwih mbebayani; tansah laporake kanthi kapisah.
- **Nggunakake siji peninjau sing ora buta minangka standar rujukan**: iki bisa meneng-meneng nggawe angka akurasi bias marang apa sing bakal ditindakake peninjau kuwi dhewe, dudu standar klinis sing independen.
- **Validasi mung ing data retrospektif sing gampang**: akurasi pengalihan piranti ing donya nyata kanthi input pasien sing langsung lan ambigu asring beda banget saka akurasine ing set validasi pilihan sing disusun nalika pangembangan.
- **Ora nggatekake drift kinerja sawise penyebaran**: akurasi model triase AI bisa mudhun saka wektu menyang wektu amarga populasi pasien, gejala sing diwenehake, utawa ketersediaan jalur perawatan owah; akurasi kudu diukur maneh kanthi rutin, dudu divalidasi sepisan lan dianggep stabil.

## Sumber

- ONC / HealthIT.gov, pandhuan babagan keamanan lan jaminan kualitas dhukungan keputusan klinis lan piranti basis AI
- Literatur peer-reviewed babagan akurasi symptom checker lan piranti triase AI, umpamane studi sing diterbitake ing JAMIA, npj Digital Medicine, lan BMJ Health & Care Informatics
- NHS England, pandhuan babagan keamanan klinis piranti triase digital lan konsultasi jarak jauh (standar manajemen risiko klinis DCB0129/DCB0160)

Deleng uga: [wektu tanggap rujukan digital](../wektu-tanggap-rujukan-digital/), metrik proses sing paling langsung ana ing hilir keputusan triase.
