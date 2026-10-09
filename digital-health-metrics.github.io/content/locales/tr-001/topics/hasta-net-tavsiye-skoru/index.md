# Hasta Net Tavsiye Skoru

Hasta Net Tavsiye Skoru (NPS), hastaların bir dijital sağlık ürününü veya tele-sağlık hizmetini başkalarına tavsiye etme istekliliğini, 0 ile 10 arasında puanlanan tek bir anket sorusuna — "Bu hizmeti bir arkadaşınıza veya meslektaşınıza tavsiye etme olasılığınız nedir?" — dayanarak ölçer. 9-10 puan veren yanıtlayanlar "destekleyiciler", 7-8 puan verenler "pasifler" ve 0-6 puan verenler "eleştirenler"dir; NPS, destekleyicilerin yüzdesi eksi eleştirenlerin yüzdesidir. Dijital sağlıkta en yaygın kullanılan ve en çok eleştirilen hasta memnuniyeti metriğidir; basitliği nedeniyle değerlidir ancak tek başına neyi teşhis edebileceği bakımından sınırlıdır.

## Neden önemlidir

NPS, dijital sağlık ekiplerine toplaması ucuz ve uzman olmayan paydaşların (yöneticiler, kurullar, komisyonlar) bir bakışta yorumlaması kolay, basit, standartlaştırılmış ve çapraz karşılaştırılabilir bir memnuniyet sinyali sunar; belgelenmiş metodolojik sınırlamalarına rağmen popülerliğini koruması bu yüzdendir. Özellikle tele-sağlık ve dijital ön kapı ürünleri için NPS, her ikisi de mevcutken hastaların yüz yüze bir alternatif yerine dijital kanalı seçmeye devam edip etmeyeceğinin çoğu zaman öncü göstergesidir; bunun kanal karması planlaması ve kapasite açısından doğrudan sonuçları vardır. Ancak NPS tek, üst düzey bir özet sayıdır: düşen bir NPS ekibe bir şeylerin ters gittiğini söyler ancak neyin ters gittiğini söylemez; bu nedenle yalnızca bir skor kartı sayısı olmaktan çıkıp eyleme dönüştürülebilir olması için her zaman açık uçlu birebir geri bildirimle veya daha ayrıntılı bir kullanılabilirlik aracıyla eşleştirilmelidir.

## Nasıl hesaplanır

```
NPS = % destekleyiciler (puan 9-10) − % eleştirenler (puan 0-6)

Sonuç, yüzdelerden türetilmesine rağmen yüzde değil, −100 ile +100
arasında bir sayıdır — bir NPS rakamına asla "%" işareti eklemeyin.

Şunlarla birlikte raporlayın:
  yanıt oranı (anket yapılan hastaların yanıt veren yüzdesi)
  örneklem büyüklüğü
  kullanılan sorunun tam ifadesi
```

## Çalışılmış örnek

Bir tele-sağlık platformu, bir video muayenesinden sonra 1.000 hastaya anket uygular ve 400 yanıt alır (yanıt oranı %40). Bu 400 yanıtlayandan 220'si 9-10 puan verir (destekleyiciler, %55), 100'ü 7-8 puan verir (pasifler, %25) ve 80'i 0-6 puan verir (eleştirenler, %20). NPS 55 − 20 = 35'tir. Bu rakam yalnızca bağlam içinde anlam taşır: 35'lik bir NPS, daha geniş tele-sağlık sektörüyle karşılaştırıldığında güçlü bir sonuç olabilir veya aynı platformun önceki çeyrekteki 48'lik kendi skoruna kıyasla endişe verici bir düşüş olabilir — NPS, tek seferlik mutlak bir kıyaslamadan çok, tek bir ürün için zaman içindeki bir eğilim olarak çok daha yararlıdır.

## Veri kaynakları ve uyarılar

NPS, genellikle bir video vizitinden, uygulama oturumundan veya bakım döneminden hemen sonra tetiklenen bir etkileşim sonrası anket aracılığıyla toplanır ve yanıt oranı son derece önemlidir: düşük bir yanıt oranı (çalışılmış örnekte görülen yaklaşık %40'ın çok altında), yalnızca çok memnun veya çok memnuniyetsiz hastaların yanıt vermeye zahmet ettiği yanıtsızlık yanlılığı riski taşır; bu da skoru uçlara doğru çeker ve gerçek popülasyon duygusundan uzaklaştırır. NPS'yi kuruluşlar arasında ve hatta tek bir kuruluşun farklı kanalları arasında (örneğin tele-sağlık ile yüz yüze) karşılaştırmak, ancak soru ifadesi, zamanlaması ve anket popülasyonu gerçekten karşılaştırılabilirse geçerlidir; küçük ifade değişikliklerinin skorları ölçülebilir biçimde kaydırdığı bilinmektedir. NPS, başlı başına bir amaç değil, açıklanması gereken bir sonuç olarak ele alınmalıdır — bir NPS anketine genellikle eşlik eden açık uçlu yorumlar çoğunlukla skordan daha eyleme dönüştürülebilirdir.

## Tuzaklar

- **Farklı soru ifadesi veya zamanlamasıyla toplanan NPS rakamlarını karşılaştırmak**: küçük anket tasarımı farklılıkları bile skorları birkaç puan kaydırabilir ve bu da kuruluşlar arası NPS kıyaslamasını göründüğünden çok daha az güvenilir kılar.
- **Yanıt oranını göz ardı etmek**: %10'luk bir yanıt oranından hesaplanan ana NPS rakamı, %60'lık bir yanıt oranından hesaplanana göre çok daha az güvenilirdir; çünkü düşük yanıt oranları en uç görüşlere doğru yanıtsızlık yanlılığına yatkındır.
- **NPS'yi bir özet metrik yerine teşhis aracı olarak görmek**: düşen bir NPS bir şeylerin ters gittiğini söyler ama neyin ters gittiğini asla söylemez; nedeni belirlemek için her zaman nitel geri bildirimle veya daha ayrıntılı bir memnuniyet ya da kullanılabilirlik aracıyla eşleştirilmelidir.
- **NPS'nin peşinden başlı başına bir hedef olarak koşmak**: NPS sayısı için dar bir şekilde optimizasyon yapmak (örneğin hastalara yalnızca alışılmadık derecede olumlu etkileşimlerden sonra anket uygulayarak), temeldeki hasta deneyimini daha iyi hale getirmeden, hatta aktif olarak kötüleştirirken raporlanan skoru iyileştirebilir.

## Kaynaklar

- Bain & Company, özgün Net Promoter System metodolojisi ve kıyaslama rehberliği
- Agency for Healthcare Research and Quality (AHRQ), tamamlayıcı ve daha ayrıntılı bir alternatif olarak CAHPS (Consumer Assessment of Healthcare Providers and Systems) hasta deneyimi anket programı
- Net Promoter Score'un sağlık hizmeti ortamlarında kullanımı ve sınırlamaları hakkında hakemli literatür, örneğin Journal of Medical Internet Research (JMIR)'de yayımlanan çalışmalar

Ayrıca bakınız: [kullanıcı elde tutma oranı](../kullanıcı-elde-tutma-oranı/), çünkü hastanın bildirdiği memnuniyet ile bir ürünün fiilen kullanılmaya devam etmesi çoğu zaman birbirinden ayrışır ve ayrı sinyaller olarak izlenmeye değerdir.
