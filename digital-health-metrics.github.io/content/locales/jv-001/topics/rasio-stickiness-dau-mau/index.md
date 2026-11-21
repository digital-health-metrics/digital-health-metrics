# Rasio Stickiness DAU/MAU

Rasio stickiness DAU/MAU mbandhingake pangguna aktif saben dina (daily active users, DAU) karo pangguna aktif saben sasi (monthly active users, MAU) — ukuran dhasar sing padha digunakake kanggo pangguna aktif saben minggu (WAU) marang MAU — kanggo nyatakake bagean saka basis pangguna produk sing luwih amba sing sesambungan karo produk ing dina apa wae. Iki ukuran product-analytics baku kanggo intensitas keterlibatan, beda karo apa pangguna kasimpen babar pisan (deleng tingkat retensi pengguna) utawa sepira konsisten siji pasien tartamtu sing kadhaptar sesambungan saka wektu menyang wektu (deleng tingkat konsistensi keterlibatan pasien): stickiness nggambarake ritme panggunaan tingkat populasi, dudu pola siji individu.

## Kenapa penting

Rong produk kesehatan digital bisa nglaporake jumlah pangguna aktif saben sasi sing padha nanging duwe intensitas keterlibatan sing beda banget: sing siji nalika umume pangguna mbukak aplikasi meh saben dina, lan liyane nalika umume mbukak sepisan sasi persis sadurunge bakal dietung ora aktif. Rasio stickiness DAU/MAU mbedakake kalorone kahanan sing beda banget iki nganggo siji angka tolok ukur sing prasaja lan wis dimangerteni sing bisa dilacak tim produk lan klinis saka wektu menyang wektu lan dibandhingake karo kisaran industri sing dikenal — rasio kira-kira 20% minangka tolok ukur sing wajar sing kerep dikutip kanggo akeh aplikasi konsumen, déné produk kebiasaan saben dina (buku harian panganan utawa gejala sing dikarepake dienggo pasien saben dina) kudu dinilai marang standar sing luwih dhuwur sacara bermakna. Amarga stickiness sensitif marang carane "aktif" ditetepake, iki paling migunani minangka tren kanggo siji produk saka wektu menyang wektu, lan minangka perbandhingan karo produk sing dibangun kanggo pola panggunaan sing padha, tinimbang minangka tolok ukur absolut lintas-industri.

## Carane ngetung

```
Rasio stickiness DAU/MAU = rata-rata pangguna aktif saben dina ing
                            periode / pangguna aktif saben sasi ing
                            periode padha × 100

Rasio WAU/MAU (saben minggu, prinsip padha) minangka varian sing luwih
alus, luwih cocog kanggo produk sing dikarepake dienggo sawetara kali
saben minggu, dudu saben dina.

"Aktif" kudu ditetepake kanthi tepat lan konsisten (umpamane tumindak
mumpuni sing rampung, dudu mung mbukak aplikasi pasif) ing pembilang
lan penyebut.
```

## Conto petungan

Aplikasi manajemen diabetes digital duwe 10.000 pangguna aktif saben sasi ing sasi tartamtu, ditetepake minangka pangguna apa wae sing ngrampungake paling ora siji tumindak mumpuni (log glukosa, log panganan, utawa centhang obat) ing sasi kuwi. Ngrata-ratakake jumlah pangguna aktif saben dina sajrone 30 dina ing sasi kuwi menehi rata-rata DAU 2.200. Rasio stickiness DAU/MAU yaiku 2.200 / 10.000 × 100 = 22%, nuduhake yen ing dina biasa, kira-kira 22% basis pangguna sasi aplikasi sesambungan karo aplikasi — angka sing wajar kanggo piranti kebiasaan saben dina kanggo kondisi kronis, sanajan tim produk bakal pengin ndeleng munggah saka wektu menyang wektu nalika prilaku ideal (nyathet saben dina) dadi luwih kebiasaan kanggo pasien sing kadhaptar.

## Sumber data lan pangati-ati

DAU, WAU, lan MAU kabeh diétung saka log kejadian sing padha, nganggo siji definisi konsisten saka kejadian "aktif mumpuni" ing saben jendela; ngowahi definisi kuwi antarane petungan pembilang lan penyebut (umpamane ngitung mbukak aplikasi apa wae kanggo DAU nanging mung tumindak sing rampung kanggo MAU) bakal ngasilake rasio sing mlenceng sing ora nggambarake intensitas keterlibatan sing nyata. Tolok ukur sing cocog kanggo stickiness gumantung banget marang pola panggunaan sing dikarepake saka produk: piranti sing dimaksudake dienggo sepisan saben minggu (check-in gejala mingguan) bakal lan kudu duwe rasio DAU/MAU luwih murah tinimbang piranti sing dimaksudake dienggo saben dina (aplikasi pendamping monitor glukosa terus-terusan), mula stickiness kudu tansah ditafsirake marang irama panggunaan sing dikarepake produk dhewe, dudu siji target universal.

## Kesalahan umum

- **Mbandhingake rasio stickiness antarane produk kanthi frekuensi panggunaan sing dikarepake beda**: piranti sing dienggo saben minggu sacara struktural bakal nuduhake rasio DAU/MAU luwih murah tinimbang piranti saben dina sanajan kalorone kerja persis kaya sing dikarepake kanggo kasus panggunaane dhewe-dhewe; tolok ukur marang irama sing dikarepake produk dhewe, dudu siji target universal.
- **Nggunakake definisi aktivitas sing ora konsisten ing pembilang lan penyebut**: iki bisa ngasilake rasio stickiness sing ora nggambarake intensitas keterlibatan sing sejati lan ora bisa dibandhingake kanthi bermakna saka wektu menyang wektu utawa karo produk liyane.
- **Nganggep rasio stickiness sing munggah pasti apik tanpa mriksa tren MAU sakabehe**: rasio munggah sing didorong dening basis pangguna inti sing nyusut lan luwih kebiasaan nalika MAU sakabehe mudhun iku kahanan sing beda banget — lan luwih nyengkuyung — tinimbang sing didorong dening keterlibatan saben dina sing sejatine nambah ing basis pangguna sing stabil utawa tuwuh.
- **Ora nggatekake efek dina-ing-minggu lan musiman ing DAU**: DAU bisa beda substansial miturut dina ing minggu (dina kerja versus akhir minggu) utawa mangsa kanggo akeh produk kesehatan; gunakake rata-rata DAU ing periode sing nangkep siklus alami lengkap tinimbang jendela cendhak sing bisa mlenceng.

## Sumber

- Literatur peer-reviewed lan industri babagan metrik keterlibatan produk seluler lan digital, kerangka benchmarking sing akeh digunakake saka platform analitik seluler
- Digital Therapeutics Alliance, pandhuan praktik terbaik babagan pangukuran keterlibatan kanggo terapi digital
- Literatur peer-reviewed babagan pangukuran keterlibatan kesehatan digital, umpamane studi sing diterbitake ing Journal of Medical Internet Research (JMIR mHealth and uHealth)

Deleng uga: [tingkat retensi pengguna](../tingkat-retensi-pengguna/) lan [tingkat konsistensi keterlibatan pasien](../tingkat-konsistensi-keterlibatan-pasien/), rong metrik keterlibatan sing gandheng sing paling kerep kacampur karo rasio iki.
