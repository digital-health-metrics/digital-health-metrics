# Bakım Epizodu Başına Maliyet

Bakım epizodu başına maliyet, tanımlanmış bir klinik epizodun (örneğin kalça protezi ameliyatı ve buna bağlı iyileşme süreci ya da bir diyabet yönetimi dönemi) tedavisinde ortaya çıkan toplam maliyettir ve değerlendirilen dijital müdahale olmadan tedavi edilen tarihsel bir referans kohortunun maliyetiyle karşılaştırılır. Herhangi bir tekil maliyet kalemini ayrı ayrı ele almak yerine bir epizodun tüm ekonomik tablosunu yakaladığı için değer temelli bakımda standart finansal karşılaştırma birimidir; ödeyiciler ve sağlık sistemleri de bir dijital sağlık programını ölçekli olarak fonlamayı kabul etmeden önce çoğunlukla bu ölçütü talep eder.

## Neden önemlidir

Değer temelli bakım sözleşmeleri giderek tekil hizmetler yerine sonuçlar ve epizotlar için ödeme yapmaktadır. Bu nedenle bir dijital sağlık programının finansal gerekçesi de aynı para biriminde ortaya konmalıdır: epizot başına toplam maliyet, aynı tür epizodun müdahale var olmadan önceki maliyetiyle karşılaştırılır. Bir maliyet kategorisini azaltırken (örneğin daha az yüz yüze kontrol ziyareti) bir diğerini artıran (daha fazla cihaz maliyeti, daha fazla klinik izleme personeli zamanı) bir program, epizot başına toplam maliyeti mutlaka azaltmış değildir; bu dengeyi yalnızca tam epizot düzeyinde bir maliyetlendirme yakalayabilir. Herhangi bir tekil maliyet kalemine ayrı ayrı bakmak, her iki yönde de yanıltıcı bir sonuca varma riski taşır. Epizot tanımları ve referans dönemleri belirli bir sonucu kayıracak biçimlerde kurgulanabildiğinden, bu ölçüt şüpheci bir ödeyici ya da finans ekibi için güvenilir olabilmek adına bu kitaptaki çoğu ölçütten daha fazla metodolojik şeffaflık gerektirir.

## Nasıl hesaplanır

```
Bakım epizodu başına maliyet = tanımlanmış bir epizot penceresi
                                içinde sunulan tüm bakımın (tüm bakım
                                ortamları, tüm maliyet kategorileri)
                                toplam maliyeti / epizot sayısı

Aynı klinik olarak tanımlanmış epizot türü için tarihsel referans
kohortun epizot başına maliyetiyle karşılaştırın; iki kohort arasındaki
vaka karışımı (yaş, komorbidite, ağırlık) için düzeltme yapın.

Yalnızca doğrudan klinik maliyetleri değil, şunları da dahil edin:
teknoloji platformu ve cihaz maliyetleri, ek klinik personel zamanı
ve tamamen ortadan kalkmak yerine ortam değiştiren her türlü bakım
(örn. yatan hasta bakımından eve kayma).
```

## Çözümlü örnek

Bir sağlık sisteminin total kalça protezi epizodu (ameliyattan 90 günlük iyileşmeye kadar) için tarihsel referans maliyeti, 200 tarihsel epizoda dayanarak epizot başına 28.000 dolardır. Yeni bir dijital ameliyat sonrası izleme programı devreye alınır ve programı kullanan 150 yeni epizot, epizot başına ortalama 24.500 dolar maliyet gösterir; bu, epizot başına 3.500 dolarlık bir azalmadır ve esas olarak iyileşme sürecindeki daha az acil servis ziyaretinden ve daha kısa ortalama yatış süresinden kaynaklanır. Dijital olarak izlenen kohortta tarihsel referansa kıyasla biraz daha genç ve daha düşük komorbiditeli bir vaka karışımı olduğu için risk düzeltmesi yapıldığında, düzeltilmiş tasarruf epizot başına 2.100 dolara düşer; bu hâlâ gerçek bir iyileşmedir, ancak ham, düzeltilmemiş karşılaştırmanın önerdiğinden önemli ölçüde daha küçüktür.

## Veri kaynakları ve uyarılar

Toplam epizot maliyeti tipik olarak sağlık sisteminin kendi maliyet muhasebesi ya da finans sisteminden derlenir; bu süreçte talep (claims) verileri, dahili maliyet dağılımı ve dijital bir platform söz konusuysa lisanslama ve donanım maliyetleri birleştirilir. Maliyetler çoğu zaman epizot düzeyinde birleştirilmek üzere tasarlanmamış ayrı sistemlerde kaydedildiğinden, bu rakamı doğru biçimde bir araya getirmek genellikle herhangi bir dijital sağlık değer analizinin en zor ve en kaynak yoğun kısmıdır. Dijital olarak yönetilen kohort ile tarihsel referans kohort gerçek bir randomizasyonla atanmadığında vaka karışımı düzeltmesi şarttır; çünkü dijital programlar sıklıkla daha ilgili, genel olarak daha sağlıklı ya da daha motive hastalara ilk olarak sunulur ve bu durum, gerçek bir program etkisi değil bir seçilim etkisi olan görünür bir maliyet tasarrufu üretebilir.

## Tuzaklar

- **Vaka karışımı farklı kohortlar arasında düzeltilmemiş maliyetleri karşılaştırmak**: tarihsel referanstan daha sağlıklı ya da daha düşük riskli olan dijital olarak yönetilen bir kohort, dijital müdahalenin kendisiyle ilgisi olmayan nedenlerle daha düşük bir epizot başına maliyet gösterecektir; karşılaştırmadan önce her zaman risk düzeltmesi yapın.
- **Karşılaştırmanın "dijital" tarafında teknoloji ve personel maliyetlerini dışarıda bırakmak**: yalnızca azalan klinik kullanımı izleyip dijital programı işletmenin platform, cihaz ve personel maliyetlerini göz ardı eden bir maliyet analizi, net tasarrufu olduğundan fazla gösterecektir.
- **Epizot penceresini kohortlar arasında tutarsız tanımlamak**: bir kohort için 90 günlük epizot penceresini diğeri için 60 günlük pencereyle karşılaştırmak, gerçekte aynı şeyi ölçmeyen bir maliyet karşılaştırması üretecektir.
- **Maliyet kaymasını maliyet azalması olarak değerlendirmek**: maliyetin bir bakım ortamından diğerine (örneğin yatan hasta bakımından izlenen bir ev ortamına) taşınması gerçek ve değerli bir bulgudur, ancak analitik olarak maliyetin tamamen ortadan kaldırılmasından farklıdır ve ikisi ayrı ayrı raporlanmalıdır.

## Kaynaklar

- Centers for Medicare & Medicaid Services (CMS), Bundled Payments for Care Improvement (BPCI) ve epizot temelli ödeme modeli rehberliği
- Healthcare Financial Management Association (HFMA), bakım epizodu maliyetlendirme metodolojisine ilişkin rehberlik
- Dijital sağlık değer temelli bakım maliyet analizine ilişkin hakemli yazın, örneğin Health Affairs ve American Journal of Managed Care'de yayımlanan çalışmalar

Ayrıca bakınız: [yatırım getirisi (ROI) ve yatırım değeri (VOI)](../yatırım-getirisi-roi-ve-yatırım-değeri-voi/); bu ölçüt, bakım epizodu başına maliyeti temel girdilerinden biri olarak kullanır.
