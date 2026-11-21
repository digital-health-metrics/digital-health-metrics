# Biaya Akuisisi Pelanggan Sejati

Biaya akuisisi pelanggan sejati (true CAC) yaiku biaya lengkap kanggo entuk siji pelanggan mbayar anyar utawa pasien sing kadhaptar, kalebu ora mung belanja iklan berbayar nanging uga saben biaya liyane sing nyumbang sacara materi marang akuisisi kuwi: biaya agensi lan kreatif, infrastruktur teknologi pemasaran lan analitik, lan — khusus kanggo kesehatan digital — biaya tenaga kerja klinis utawa operasional kanggo intake, verifikasi kelayakan, lan onboarding. Metrik iki ana minangka metrik kapisah amarga angka biaya akuisisi sing dilaporake platform iklan rutin lan substansial nyatakake biaya sejati organisasi saben pelanggan sing dienggo kurang saka sing sejatine.

## Kenapa penting

Organisasi kesehatan digital sing ngatur pertumbuhan mung nganggo angka biaya-saben-akuisisi sing dilaporake platform iklan rutin nggawe keputusan alokasi sumber daya adhedhasar angka sing ngilangi 30-50% biaya akuisisi sing nyata, amarga angka platform kuwi mung nangkep belanja media lan ora kalebu biaya agensi, lisensi teknologi pemasaran, lan — sing kritis kanggo kesehatan — pagaweyan intake lan verifikasi kelayakan sing padhet tenaga kerja sing ditindakake tim klinis utawa operasional kanggo saben pasien anyar sadurunge bisa diitung minangka wis dienggo. Kesenjangan iki luwih penting ing kesehatan digital tinimbang ing sektor liyane amarga tenaga kerja intake klinis iku larang lan wajib, beda karo e-commerce, ing ngendi "dodolan" meh ora mbutuhake tenaga kerja back-office sing sebanding. Tim sing ngoptimalake belanja pemasaran marang angka CAC sing murah sacara artifisial bakal sistematis kakehan investasi ing saluran sing katon murah ing dashboard platform nanging larang yen true CAC wis diétung.

## Carane ngetung

```
True CAC = (belanja media berbayar + biaya agensi lan kreatif + biaya
            teknologi pemasaran lan analitik + biaya tenaga kerja
            intake klinis/operasional) / pelanggan utawa pasien anyar
            sing dienggo ing periode

Biaya tenaga kerja intake klinis/operasional kudu diprakirakake saka
biaya tenaga kerja lengkap (gaji, tunjangan, overhead) × rata-rata jam
sing dienggo saben pasien sing dienggo kanggo intake, verifikasi
kelayakan, lan onboarding.
```

## Conto petungan

Perusahaan kesehatan digital entuk 500 pasien anyar ing sasi. Dashboard platform iklan nglaporake biaya-saben-akuisisi gabungan $120, adhedhasar belanja media berbayar $60.000. Yen ditambahi biaya agensi $9.000, biaya teknologi pemasaran $6.000, lan prakiraan biaya tenaga kerja intake 45 menit saben pasien kanthi biaya staf lengkap $40/jam (500 × 0,75 × $40 = $15.000), total biaya akuisisi dadi $60.000 + $9.000 + $6.000 + $15.000 = $90.000. True CAC yaiku $90.000 / 500 = $180 — 50% luwih dhuwur tinimbang angka $120 sing dilaporake platform iklan wae, lan angka iki sing sejatine kudu dadi dhasar alokasi anggaran saluran lan keputusan unit economics.

## Sumber data lan pangati-ati

Belanja media berbayar lan biaya-saben-akuisisi sing dilaporake platform asale langsung saka platform iklan dhewe (telusur, sosial, programmatic); biaya agensi lan biaya teknologi pemasaran asale saka cathetan keuangan utawa utang usaha; biaya tenaga kerja intake minangka komponen sing paling angel dipikolehi kanthi akurat lan biasane mbutuhake studi wektu-lan-gerak utawa prakiraan wajar sing disepakati karo pimpinan operasional, amarga umume organisasi ora nglacak wektu staf saben akuisisi sacara asli. True CAC kudu diétung saben saluran akuisisi yen volume ngidini, amarga biaya tenaga kerja intake saben pasien asring padha ing kabeh saluran déné biaya media beda banget, tegese kesenjangan antarane CAC sing dilaporake platform lan true CAC paling gedhe sacara proporsional kanggo saluran sing katon paling murah.

## Kesalahan umum

- **Mung ngandelake dashboard platform iklan**: biaya-saben-akuisisi sing dilaporake platform sacara struktural ora kalebu biaya agensi, biaya teknologi pemasaran, lan tenaga kerja intake, lan dudu pengganti petungan true CAC.
- **Ngilangi tenaga kerja intake klinis utawa operasional**: iki komponen biaya sing paling kerep kecelup khusus ing kesehatan digital, lan asring dadi panyumbang paling gedhe kanggo kesenjangan antarane biaya sing dilaporake platform lan true CAC.
- **Nggawe rata-rata true CAC ing kabeh saluran**: angka true CAC gabungan bisa nutupi yen siji saluran luwih larang banget yen biaya lengkap kalebu, sanajan katon paling murah ing platform iklan wae.
- **Ora nganyari prakiraan biaya tenaga kerja nalika proses intake owah**: desain ulang proses intake (umpamane ngotomatisasi verifikasi kelayakan) bisa ngowahi true CAC sacara materi, lan prakiraan tenaga kerja sing wis lawas bakal salah nyatakake angka saiki.

## Sumber

- Association of National Advertisers (ANA), pandhuan babagan pangukuran biaya pemasaran lan transparansi media
- Literatur peer-reviewed lan industri babagan unit economics kesehatan digital lan struktur biaya go-to-market, umpamane analisis sing diterbitake dening Rock Health lan organisasi riset kesehatan digital sing padha
- Healthcare Financial Management Association (HFMA), pandhuan babagan akuntansi biaya lengkap ing operasional kesehatan

Deleng uga: [rasio LTV kanggo CAC](../rasio-ltv-kanggo-cac/), sing true CAC dadi salah siji saka loro input-e.
