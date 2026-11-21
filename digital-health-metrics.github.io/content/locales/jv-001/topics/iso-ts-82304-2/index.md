# ISO/TS 82304-2

ISO/TS 82304-2 yaiku spesifikasi teknis internasional, diterbitake ing sangisore ISO Technical Committee 215 (Health Informatics), sing nemtokake metode terstruktur kanggo netepake kualitas aplikasi kesehatan lan kebugaran — nyakup kegunaan, kekokohan lan keandalan teknis, interoperabilitas, kualitas isi, lan keamanan lan privasi data — kanggo produk sing ora kalebu ing ruang lingkup regulasi piranti medis lengkap nanging isih sacara materi mengaruhi keputusan utawa prilaku kesehatan pangguna. Spesifikasi iki ana kanggo ngisi kesenjangan tartamtu: mayoritas gedhe aplikasi kesehatan lan kebugaran kanggo konsumen (pelacak kebugaran, buku harian gejala, aplikasi pembinaan kesehatan) ora diatur minangka piranti medis, nanging sadurunge durung ana cara umum lan terstruktur kanggo netepake utawa mbandhingake kualitas lan keamanan dhasar kasebut.

## Kenapa penting

App store nampung atusan ewu aplikasi kesehatan lan kebugaran kanthi kualitas sing beda banget, lan sadurunge ana spesifikasi teknis umum, pasien, klinisi, utawa sistem kesehatan ora duwe cara terstruktur lan bisa dibandhingake kanggo nilai kualitas lan keamanan dhasar siji aplikasi marang liyane saliyane rating bintang lan klaim pemasaran — kesenjangan sing penting amarga aplikasi kesehatan sing dirancang elek isih bisa nyebabake cilaka nyata (isi sing ora akurat, keamanan data sing kurang, klaim sing nyasarake) sanajan ora nyukupi ambang regulasi piranti medis. ISO/TS 82304-2 sengaja disusun ngubengi domain sing bisa dinilai kanthi konsisten dening peninjau non-spesialis, sing ndadekake iki dhasar teknis kanggo sawetara layanan label kualitas lan kurasi aplikasi kesehatan nasional lan komersial, menehi sistem kesehatan lan perpustakaan aplikasi cara standar sing bisa dipertanggungjawabake kanggo nglebokake utawa ngilangi aplikasi saka dhaptar rekomendasi tinimbang ngandelake penilaian ad hoc.

## Carane ditrapake

```
Penilaian disusun ngubengi domain kualitas sing wis ditetepake,
dievaluasi liwat tinjauan terstruktur, dudu siji rumus numerik:

Kegunaan                         — kajelasan, aksesibilitas, lan
                                    gampang digunakake kanggo
                                    klompok pangguna sing dituju
Kekokohan/keandalan teknis       — stabilitas, kinerja, lan bebas
                                    saka cacat teknis
Interoperabilitas                — kemampuan ijol-ijolan data karo
                                    sistem liyane yen relevan kanggo
                                    fungsi aplikasi
Kualitas lan keamanan isi        — akurasi, kekinian, lan ora ana
                                    klaim kesehatan sing mbebayani
                                    utawa nyasarake
Keamanan lan privasi             — praktik pangayoman data lan
                                    transparansi babagan panggunaan
                                    data

Saben domain dinilai liwat kriteria tinjauan terstruktur lan
digabung dadi penilaian kualitas sakabehe, sing digunakake sawetara
skema label kualitas aplikasi kesehatan minangka dhasar teknis kanggo
label kualitas publik utawa keputusan nglebokake ing perpustakaan
kurasi.
```

## Conto petungan

Program perpustakaan aplikasi digital sistem kesehatan pengin nyusun dhaptar rekomendasi aplikasi kebugaran kanggo pasien tinimbang ninggalake pilihan aplikasi mung marang telusuran app store. Saben aplikasi kandidat dinilai marang domain ISO/TS 82304-2: aplikasi pelacak turu entuk skor apik ing kegunaan lan kekokohan teknis, cukup ing kualitas isi, nanging ditandhani nalika tinjauan keamanan lan privasi amarga nuduhake data pangguna karo pengiklan pihak katelu tanpa pambukaan sing jelas — temuan sing cukup penting kanggo ngilangi aplikasi saka dhaptar rekomendasi sanajan skor kegunaane sacara umum kuwat. Asil domain-ing-domain iki luwih bisa ditindakake kanggo tim kurasi lan, yen dibagi, pangembang aplikasi dhewe tinimbang siji skor kualitas gabungan, amarga nunjukake kanthi tepat aspek endi sing kudu didandani sadurunge aplikasi bisa dipertimbangake maneh.

## Sumber data lan pangati-ati

Penilaian marang ISO/TS 82304-2 biasane ditindakake dening peninjau sing dilatih utawa layanan penilaian terakreditasi, nututi kriteria tinjauan terstruktur spesifikasi kanggo saben domain, lan sawetara inisiatif nasional lan komersial (organisasi label kualitas lan kurasi aplikasi kesehatan, sawetara sing makarya ing sangisore endorsement resmi sistem kesehatan nasional) nggunakake standar iki minangka dhasar teknis kanggo label kualitas aplikasi kanggo umum — tegese status "bersertifikat" utawa "berlabel" aplikasi ing praktik asring nggambarake implementasi standar dening skema pelabelan tartamtu, ora mesthi proses sing padha ing saben skema, mula organisasi penilai lan metodologine kudu dipriksa lan diungkapake bareng label kualitas apa wae sing dikutip. Spesifikasi iki nilai karakteristik kualitas lan keamanan dhasar aplikasi minangka piranti lunak; dudu pengganti persetujuan regulasi piranti medis yen klaim utawa fungsi aplikasi sejatine nyukupi ambang piranti medis, lan nggunakake minangka pengganti bakal dadi kesalahan kategori.

## Kesalahan umum

- **Nganggep label kualitas minangka persetujuan regulasi**: aplikasi sing dinilai lan diwenehi label miturut ISO/TS 82304-2 ora kanthi mangkono entuk persetujuan regulasi piranti medis; kalorone nduweni tujuan sing beda lan ora kena dicampur ing carane aplikasi dijlentrehake utawa dipasarake.
- **Nganggep kabeh skema pelabelan adhedhasar standar iki padha**: organisasi sing beda nglakokake penilaian adhedhasar ISO/TS 82304-2 kanthi proses tinjauan lan ketelitian dhewe-dhewe; priksa organisasi endi sing nindakake penilaian lan kepriye, tinimbang nganggep label "adhedhasar ISO/TS 82304-2" apa wae bisa ditukar karo liyane.
- **Mung nilai kegunaan nalika ngelalekake keamanan lan privasi**: masalah kegunaan paling katon dening pangguna pungkasan lan paling gampang dinilai sacara informal, sing bisa nuntun peninjau kurang menehi bobot marang domain keamanan lan privasi sing kurang katon nanging bisa luwih akeh akibate.
- **Nganggep penilaian minangka sertifikasi permanen sepisan**: isi aplikasi, praktik keamanan, lan pangaturan nuduhake data karo pihak katelu kabeh bisa owah sawise penilaian awal; program pelabelan kualitas sing bisa dipercaya nilai maneh kanthi periodik, ora nganggep lulus awal minangka permanen.

## Sumber

- International Organization for Standardization, ISO/TS 82304-2:2021, "Health software — Part 2: Health and wellness apps — Quality and reliability"
- ISO Technical Committee 215 (Health Informatics), informasi publikasi lan kelompok kerja
- Organisasi label kualitas lan kurasi aplikasi kesehatan nasional lan komersial sing nerbitake metodologi penilaian adhedhasar standar iki

Deleng uga: [skor System Usability Scale](../skor-system-usability-scale/), instrumen pelengkap sing luwih sempit lan khusus kanggo kegunaan, asring digunakake bareng penilaian kualitas ISO/TS 82304-2 sing luwih amba.
