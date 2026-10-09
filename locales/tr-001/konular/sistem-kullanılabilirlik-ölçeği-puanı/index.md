# Sistem Kullanılabilirlik Ölçeği Puanı

Sistem Kullanılabilirlik Ölçeği (SUS) puanı, bir yazılımın ne kadar kullanılabilir olduğunu nicelleştirmek için kullanılan, standartlaştırılmış, 10 maddelik bir ankettir; köklü sektör normlarına göre kıyaslanabilen, 0 ile 100 arasında tek bir puan üretir. Tavsiye etme istekliliğini ölçen Net Tavsiye Skorundan veya klinik ya da işlevsel durumu ölçen hasta bildirimli sonuç ölçütlerinden farklı olarak SUS, belirli bir şeyi ölçer: yazılımın kendisinin, hastalar veya klinik personel için öğrenilmesinin ve kullanılmasının ne kadar kolay olduğunu.

## Neden önemlidir

Bir dijital sağlık aracı güçlü klinik kanıta ve ikna edici bir iş gerekçesine sahip olabilir, buna rağmen hastalar veya klinisyenler arayüzü kafa karıştırıcı, yavaş ya da kullanması sinir bozucu bulduğu için pratikte başarısız olabilir. SUS, çeşitli sektörlerde onlarca yıllık yayımlanmış kıyaslama verisine sahip, geçerliliği kanıtlanmış ve yaygın olarak kullanılan bir araç olduğundan, bir dijital sağlık ekibinin kendi ürününün kullanılabilirliğini, gayri resmi izlenimlere veya anekdotsal şikâyetlere güvenmek yerine bilinen bir dağılımla karşılaştırmasına olanak tanır. SUS kasıtlı olarak teknolojiden bağımsızdır ve uygulanması hızlıdır (tipik olarak beş dakikadan az); bu da tam bir kullanılabilirlik çalışmasından veya resmi bir klinik araştırmadan farklı olarak, tasarım yinelemeleri boyunca tekrar tekrar uygulanmasını pratik kılar. Klinisyene yönelik kullanılabilirlik başarısızlıkları tükenmişliğe (bkz. hekim tükenmişlik oranı), hastaya yönelik kullanılabilirlik başarısızlıkları ise terk etmeye ve zayıf dijital okuryazarlık sonuçlarına (bkz. dijital okuryazarlık oranı) belgelenmiş katkıda bulunduğundan, SUS, bir tasarım sorununu bu daha sonuç doğurucu aşağı akış ölçütlerinde ortaya çıkmadan önce yakalayabilen, düşük maliyetli bir erken uyarı kullanılabilirlik sinyali işlevi görür.

## Nasıl hesaplanır

```
SUS puanı = ((tek numaralı madde puanlarının toplamı − 5) +
             (25 − çift numaralı madde puanlarının toplamı)) × 2,5

Sonuç, 0 ile 100 arasında tek bir puandır (ölçeğe rağmen yüzde değildir;
çünkü "doğru yüzdesi" veya benzeri bir şeyi temsil etmez).

Yayımlanmış kıyaslama yorumu (Bangor ve ark.):
  80 üzeri  — mükemmel kullanılabilirlik
  68        — ortalama, geniş sektör normuna dayalı
  51 altı   — zayıf kullanılabilirlik, inceleme gerektirir
```

## Çalışılmış örnek

Bir telesağlık platformu, ilk video ziyaretlerinin ardından 150 hastaya standart 10 maddelik SUS anketini uygular. Tüm yanıtlayıcılar için hesaplanan ortalama SUS puanı 74'tür. Yaygın olarak anılan 68'lik sektör ortalamasına göre kıyaslandığında bu, bu belirli hasta popülasyonu ve kullanım senaryosu için ortalamanın üzerinde bir kullanılabilirliğe işaret eder; yine de geriye az sayıda kullanılabilirlik engeli kaldığını düşündürecek 80'lik "mükemmel" eşiğin anlamlı ölçüde altındadır. Aynı 150 yanıtı yaşa göre bölümlendirmek, 50 yaş altı hastalar için ortalama 81, 65 yaş ve üstü hastalar için 62 puan gösterir; bu fark, genel bir ürün kullanılabilirliği sorununa değil, yaşlı hastalar için belirli, giderilebilir bir kullanılabilirlik sorununa işaret eder ve tek bir birleşik ortalama bunu gizlemiş olurdu.

## Veri kaynakları ve uyarılar

SUS verileri doğrudan standartlaştırılmış 10 maddelik anketi dolduran hastalardan veya klinisyenlerden gelir ve elde edilen puanın yayımlanmış kıyaslamalarla karşılaştırılabilir olması için aracın tam olarak geçerliliği kanıtlandığı şekilde (aynı 10 madde, aynı 5 puanlık katılım ölçeği, aynı puanlama formülü) uygulanması gerekir; anketin değiştirilmiş veya kısaltılmış bir sürümü, ne kadar iyi niyetli olursa olsun, standart kıyaslama dağılımına göre güvenilir biçimde yorumlanamayan bir puan üretir. SUS, nesnel görev tamamlama başarısıyla ilişkili ancak onunla aynı olmayan algılanan kullanılabilirliği ölçer (görev tamamlamaya dayalı bir ölçü için bkz. dijital okuryazarlık oranı); bir ürün, daha karmaşık özellikleri denemeyen hastalardan iyi bir SUS puanı alabilir, bu nedenle SUS'u nesnel görev tamamlama verileriyle eşleştirmek, ikisinden herhangi biri tek başına verdiğinden daha eksiksiz bir tablo sunar. Yanıt zamanlaması önemlidir: SUS'u sinir bozucu belirli bir olayın (başarısız bir bağlantı, kafa karıştırıcı bir adım) hemen ardından uygulamak ile sorunsuz bir oturumdan sonra uygulamak, ürünün genel kullanılabilirliğinden bağımsız olarak puanları kaydırabilir.

## Tuzaklar

- **Standart anket maddelerini veya puanlamayı değiştirmek**: küçük ifade veya ölçek değişiklikleri bile köklü yayımlanmış kıyaslama dağılımına göre karşılaştırmayı geçersiz kılar; standart 10 maddelik aracı tam olarak geçerliliği kanıtlandığı şekilde kullanın.
- **Yalnızca ortalama puanı bölümlendirme yapmadan raporlamak**: kullanılabilirlik çoğu zaman kullanıcı yaşına, dijital okuryazarlığına veya rolüne (hasta ile klinisyen) göre önemli ölçüde değişir; tek bir ortalamanın gizlediği belirli, giderilebilir kullanılabilirlik açıklarını bulmak için bölümlendirilmiş raporlama yapın.
- **SUS'u klinik etkinliğin bir ölçüsü olarak görmek**: SUS, klinik sonucu veya bakımdan memnuniyeti değil, özellikle kullanılabilirliği ölçer; yüksek derecede kullanılabilir bir araç yine de klinik sonuçları iyileştirmekte başarısız olabilir ve bunlar hiçbir zaman karıştırılmamalı veya birbirinin yerine konmamalıdır.
- **Anketi yalnızca alışılmadık derecede sorunsuz veya alışılmadık derecede sinir bozucu oturumlardan sonra uygulamak**: uygulamanın zamanlaması ve bağlamı puanı yanlı hale getirebilir; yalnızca kolay erişilebilen veya seçici olarak seçilmiş oturumlarda değil, gerçek dünyadaki oturumların temsili bir örneğinde tutarlı biçimde uygulayın.

## Kaynaklar

- Brooke, J., "SUS: A Quick and Dirty Usability Scale", özgün yayımlanmış araç
- Bangor, Kortum ve Miller, yaygın olarak anılan puan yorumlama bantlarını oluşturan yayımlanmış SUS kıyaslama araştırması
- Dijital sağlık ve telesağlık kullanılabilirlik değerlendirmesinde SUS kullanımına dair hakemli literatür, örneğin JMIR Human Factors dergisinde yayımlanan çalışmalar

Ayrıca bkz. [hasta net tavsiye skoru](../hasta-net-tavsiye-skoru/), özellikle yazılım kullanılabilirliğini değil, memnuniyeti ve bağlılığı ölçen, ilişkili ancak ayrı bir hasta bildirimli ölçüt.
