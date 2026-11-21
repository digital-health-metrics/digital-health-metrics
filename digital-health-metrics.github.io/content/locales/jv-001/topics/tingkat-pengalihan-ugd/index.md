# Tingkat Pengalihan UGD

Tingkat pengalihan unit gawat darurat (UGD) ngukur persentase kontak pasien sing ditangani piranti triase digital utawa perawatan virtual sing bisa uga bakal nyebabake kunjungan UGD tanpa intervensi kasebut, nanging malah ditangani kanthi aman liwat jalur akuitas luwih murah — saran perawatan mandiri, janjian perawatan primer, utawa kunjungan perawatan urgen sing dijadwalake. Iki subset tartamtu lan aji dhuwur saka akurasi pengalihan triase (deleng topik kuwi) sing fokus babar pisan ing pemanfaatan UGD sing dihindari, asil sing paling langsung gandheng karo biaya kesehatan lan pangurangan beban kapasitas UGD.

## Kenapa penting

Unit gawat darurat kalebu panggonan perawatan paling larang saben kontak lan asring digunakake kanggo masalah sing bisa ditangani kanthi aman ing panggon liya, mula kemampuan piranti triase digital kanggo kanthi aman ngalihake kasus sing cocog saka UGD minangka salah siji kemampuan sing paling aji sacara komersial lan operasional — lan salah siji sing paling gampang dikomunikasikake marang pembayar utawa sistem kesehatan sing ngevaluasi return on investment piranti kuwi. Nanging pengalihan mung duwe nilai yen aman: piranti sing kanthi agresif ngalihake pasien saka UGD kanthi biaya kaliwat darurat sejati wis ngoptimalake sisih sing salah saka trade-off babar pisan, mula tingkat pengalihan UGD kudu tansah dilaporake bareng metrik keamanan sing nglacak presentasi darurat sing kaliwat utawa telat ing antarane pasien sing dialihake, dudu dilaporake piyambak minangka kemenangan efisiensi murni.

## Carane ngetung

```
Tingkat pengalihan UGD = kontak pasien sing kanthi aman dialihake saka
                          UGD menyang jalur akuitas luwih murah sing
                          cocog / total kontak pasien sing dinilai
                          potensial menyang UGD × 100

"Kanthi aman dialihake" mbutuhake konfirmasi, liwat tindak lanjut utawa
data cathetan kesehatan sing disambungake, yen kondisi pasien sejatine
ora mbutuhake perawatan darurat ing jendela tindak lanjut sing wis
ditetepake (umpamane 72 jam) — keputusan pengalihan ora divalidasi aman
mung amarga pasien ora langsung menyang UGD sawise kuwi.

Laporake bareng:
  Tingkat darurat kaliwat = pasien sing dialihake sing mbutuhake
                             perawatan darurat ing jendela tindak lanjut
                             / total pasien sing dialihake × 100
```

## Conto petungan

Layanan triase digital nilai 3.000 kontak pasien ing sasi sing dianggep algoritma klinise potensial menyang UGD tanpa intervensi. Saka kuwi, 1.800 dialihake menyang jalur akuitas luwih murah (tingkat pengalihan 60%). Tindak lanjut marang kohort sing dialihake ing 72 jam nganggo data cathetan kesehatan sing disambungake nemokake 45 saka 1.800 pasien sing dialihake banjur mlebu UGD ing jendela kuwi (tingkat darurat kaliwat 45 / 1.800 × 100 = 2,5%). Nglaporake angka pengalihan 60% tanpa tingkat darurat kaliwat 2,5% bakal nampilake mung setengah saka trade-off keamanan-efisiensi sing sejatine nemtokake apa prilaku pengalihan piranti dikalibrasi kanthi cocog.

## Sumber data lan pangati-ati

Ngonfirmasi yen pasien sing dialihake ora banjur mbutuhake perawatan darurat gumantung marang data sing disambungake — cathetan UGD sistem kesehatan sing padha, pertukaran informasi kesehatan regional, utawa telpon utawa survei tindak lanjut pasien sing terstruktur — lan program pengalihan sing makarya tanpa salah siji sumber data iki ora bisa sejatine ngvalidasi keamanane dhewe, mung nganggep adhedhasar ora ana keluhan. Tingkat pengalihan sing cocog lan tingkat darurat kaliwat sing bisa ditampa minangka keputusan kebijakan klinis, dudu mung statistik, lan kudu ditetepake kanthi sengaja dening pimpinan klinis tinimbang dibiarake muncul minangka efek sampingan saka ambang apa wae sing digunakake algoritma triase sacara baku. Tingkat pengalihan kudu dilaporake miturut kategori gejala utawa keluhan sing diwenehake, amarga tingkat pengalihan sing cocog beda banget miturut kondisi (laserasi cilik versus nyeri dada mbutuhake ambang pengalihan sing beda banget).

## Kesalahan umum

- **Nglaporake tingkat pengalihan tanpa metrik keamanan darurat kaliwat sing disambungake**: tingkat pengalihan dhuwur sing dicapai kanthi under-triage darurat sejati dudu sukses; kalorone metrik kudu tansah dilaporake bareng.
- **Nganggep ora ana kunjungan UGD tegese pengalihan aman**: pasien bisa mlebu UGD sistem rumah sakit liyane sing ora disambungake, utawa bisa duwe asil sing sejatine mbebayani tanpa tau mlebu UGD apa wae; validasi keamanan liwat data sing disambungake utawa tindak lanjut terstruktur, dudu mung ora ana kunjungan UGD sistem sing padha.
- **Nyetel ambang pengalihan mung kanggo nggedhekake tingkat pengalihan**: algoritma utawa kebijakan sing disetel kanggo nggedhekake pengalihan tanpa watesan keamanan sing cocog bakal ngijolake keamanan pasien kanggo angka efisiensi sing katon luwih apik.
- **Nggabungake tingkat pengalihan ing kabeh jinis keluhan**: tingkat pengalihan sing cocog beda banget miturut keluhan sing diwenehake; siji tingkat gabungan ora bisa nuduhake apa piranti makarya kanthi aman lan efektif kanggo kondisi tartamtu sing paling penting sacara klinis.

## Sumber

- Agency for Healthcare Research and Quality (AHRQ), riset babagan pemanfaatan unit gawat darurat lan pengalihan panggonan perawatan sing cocog
- NHS England, pandhuan babagan NHS 111 lan standar keamanan lan efektivitas triase perawatan urgen digital
- Literatur peer-reviewed babagan asil pengalihan UGD triase digital lan perawatan virtual, umpamane studi sing diterbitake ing Annals of Emergency Medicine lan npj Digital Medicine

Deleng uga: [akurasi pengalihan triase](../akurasi-pengalihan-triase/), metrik akurasi sing luwih amba sing iki subset tartamtu lan kritis keamanan.
