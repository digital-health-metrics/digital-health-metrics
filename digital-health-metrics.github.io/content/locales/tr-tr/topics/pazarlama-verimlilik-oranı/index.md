# Pazarlama Verimlilik Oranı

Pazarlama verimlilik oranı (MER), tanımlı bir dönem için toplam gelirin tüm kanallardaki toplam pazarlama harcamasına bölünmesiyle elde edilir. Platform tarafından raporlanan, her kanalın gelire kendi iddia ettiği katkıyı ölçen ve yapısal olarak kendisine fazla pay yazmaya eğilimli olan reklam harcaması getirisi (ROAS) için kasıtlı olarak bağımsız bir gerçeklik kontrolü olarak var olur; MER ise toplam geliri toplam harcamayla karşılaştırır ve bu rakamı hiçbir tekil reklam platformu çarpıtamaz.

## Neden önemlidir

Reklam platformlarının her biri ROAS'ı kendi atıf modeliyle raporlar ve çoğu kuruluş aynı anda birkaç kanal yürüttüğünden, dönüşüm sağlayan aynı müşteri sıklıkla birden fazla platform tarafından kendisine atfedilir; bu nedenle her platformun kendi raporladığı ROAS'ların toplamı, gerçek toplam gelirle karşılaştırıldığında toplam pazarlama katkısını düzenli olarak olduğundan fazla gösterir. MER, bu sorunu tamamen bertaraf eder: toplam geliri kuruluş düzeyinde toplam harcamayla karşılaştırarak atıf manipülasyonu veya platform lehine raporlama yoluyla çarpıtılmasını çok daha zorlaştırır ve finans ile yönetici ekiplerinin bunu giderek, tekil platform rakamlarının kendisine göre kalibre edildiği güvenilir üst düzey verimlilik kontrolü olarak görmesinin nedeni tam olarak budur. Her bir kanalda güçlü ROAS bildirirken genel MER'i düşen bir pazarlama ekibi, yalnızca kanal düzeyindeki raporlamanın ortaya çıkarmayacağı gerçek bir verimlilik veya atıf örtüşmesi sorunu yaşıyordur.

## Nasıl hesaplanır

```
MER = toplam gelir / toplam pazarlama harcaması (tüm kanallar, aynı dönem)

ROAS'ın aksine MER kanal bazında hesaplanmaz; tam da değeri herhangi bir
platformun atıf iddialarından bağımsız olmasından geldiği için kuruluş
genelinde tek bir rakamdır.

Harcama sabit veya artarken MER'in zaman içinde yükselmesi, genel pazarlama
verimliliğinin iyileştiğini gösterir; gelir artarken MER'in sabit kalması,
büyümenin pazarlamadan kaynaklanmayan kaynaklardan (ör. tavsiyeler, organik
arama, ağızdan ağıza) geldiğini gösterebilir.
```

## Uygulamalı örnek

Bir dijital sağlık şirketi bir çeyrekte 2.400.000 $ gelir elde eder; tüm ücretli kanallardaki toplam pazarlama harcaması 480.000 $'dır. MER = 2.400.000 $ / 480.000 $ = 5,0'dır. Tek tek bakıldığında, ücretli arama platformu 6,0, ücretli sosyal platform 5,5 ve programatik görüntülü reklam platformu 4,0 ROAS raporlar; bunlar toplam gelir katkısı üzerinde bir iddia olarak basitçe toplansaydı, şirketin gerçekte ürettiğinden daha fazla toplam atfedilen gelir anlamına gelirdi; çünkü dönüşüm sağlayan müşterilerin anlamlı bir kısmı birden fazla kanala maruz kalmıştır ve iki ya da üç kez sayılmaktadır. Kuruluş genelindeki 5,0'lık MER bunu uzlaştıran rakamdır: platform düzeyindeki ROAS rakamlarının yapısal olarak yapabildiği biçimde atıf örtüşmesiyle şişirilemez.

## Veri kaynakları ve uyarılar

Toplam gelir kuruluşun kendi finans veya faturalama sisteminden, toplam pazarlama harcaması ise tüm kanallardaki gerçekte faturalanmış ve ödenmiş pazarlama maliyetlerinden gelir; ikisi de herhangi bir reklam platformunun kendi panosundan bağımsız olarak temin edilmelidir. İyi bir MER iş modeline, marj yapısına ve büyüme aşamasına göre çok büyük farklılık gösterdiğinden, MER tek bir evrensel kıyaslama değerine göre değerlendirilmek yerine zaman içinde bir eğilim olarak izlenmelidir: büyümeye yoğun yatırım yapan erken aşamadaki bir şirket, kârlılık için optimizasyon yapan olgun bir şirketten kasıtlı olarak daha düşük bir MER'i kabul edebilir. MER, verimlilikteki bir değişiklikten hangi kanalın sorumlu olduğunu teşhis etmez; bu teşhis çalışması hâlâ kanal düzeyinde analiz gerektirir ve ideal olarak yalnızca platform tarafından raporlanan atıf yerine artımsallık testleriyle (hiçbir pazarlama maruziyeti almayan dışlanmış gruplar) desteklenmelidir.

## Tuzaklar

- **Platform tarafından raporlanan ROAS'ı kanallar arasında toplanabilir saymak**: her platformun kendi raporladığı ROAS'ı toplamak, bir müşteri birden fazla kanala maruz kaldığında ve bunlar tarafından kendisine atfedildiğinde (ki bu yaygındır) toplam pazarlama katkısını olduğundan fazla gösterir; MER bunu tasarımı gereği önler.
- **MER'i sabit bir evrensel kıyaslama değeriyle karşılaştırmak**: uygun bir MER iş modeline, marja ve büyüme aşamasına göre değişir; sabit bir geçti/kaldı eşiği olarak değil, tek bir kuruluşun zaman içindeki eğilimi olarak kullanın.
- **MER'i kanal düzeyinde bir teşhis aracı olarak kullanmak**: MER kasıtlı olarak kuruluş genelinde bir rakamdır ve tek başına bir verimlilik değişikliğini hangi kanalın yönlendirdiğini belirleyemez; bu amaç için kanal düzeyinde analiz ve artımsallık testleriyle birlikte kullanın.
- **Pazarlama dışı gelir etkenlerini göz ardı etmek**: gelir artarken sabit veya iyileşen bir MER, pazarlama verimliliğinden ziyade organik büyümeyi (tavsiyeler, ağızdan ağıza, kazanılmış medya) yansıtıyor olabilir; pazarlamaya fazla pay yazmaktan kaçınmak için mümkün olduğunda geliri edinim kaynağına göre ayrıştırın.

## Kaynaklar

- Association of National Advertisers (ANA), pazarlama ölçümü, atıf ve medya şeffaflığına ilişkin kılavuz
- Marketing Accountability Standards Board (MASB), pazarlama ölçütü tanımları ve ölçüm standartlarına ilişkin kılavuz
- Platform tarafından raporlanan atfı tamamlayıcı olarak pazarlama karması modellemesi ve artımsallık testlerine ilişkin hakemli ve sektörel literatür

Ayrıca bakınız: [gerçek müşteri edinme maliyeti](../gerçek-müşteri-edinme-maliyeti/) ve [LTV/CAC oranı](../ltv-cac-oranı/); bu oranın tipik olarak birlikte raporlandığı diğer iki temel büyüme ekonomisi ölçütü.
