# LTV/CAC Oranı

LTV/CAC oranı, bir müşterinin yaşam boyu değerini (LTV) — bir kuruluşun bir hastadan veya müşteriden ürünle olan ilişkisinin tamamı boyunca elde etmeyi beklediği toplam gelir veya marj — o müşteriyi edinmenin gerçek maliyetiyle (bkz. gerçek müşteri edinme maliyeti) karşılaştırır. Bir dijital sağlık kuruluşunun büyümesinin finansal olarak sürdürülebilir olup olmadığını değerlendirmek için en önemli birim ekonomisi metriğidir; çünkü zararına edinilen büyüyen bir müşteri tabanı, büyüme eğrisi ne kadar olumlu görünürse görünsün, sağlıklı olduğunun işareti değildir.

## Neden önemlidir

Bir dijital sağlık kuruluşu, edinme maliyeti yaşam boyu değeri aşıyorsa, her yeni müşteride sessizce değer yok ederken kullanıcı tabanını istikrarlı biçimde büyütebilir; LTV/CAC oranı, bunu büyüme hızı veya ham müşteri sayısının tek başına gösteremeyeceği biçimde görünür kılan metriktir. 3:1'lik bir oran (yaşam boyu değerin edinme maliyetinin en az üç katı olması), sürdürülebilir bir abonelik veya yinelenen gelir işletmesi için yaygın olarak anılan temel kıyaslama ölçütüdür; edinmenin ötesindeki işletme maliyetlerini karşılamaya ve yine de getiri sağlamaya yetecek marjı sunar. 1:1'in altındaki bir oran, kuruluşun edindiği her müşteride para kaybettiği anlamına gelir; 3:1'in çok üzerindeki bir oran (örneğin 10:1 veya daha yüksek) ise aslında büyümeye yetersiz yatırım yapıldığını gösterebilir, çünkü kuruluşun şu anda edindiğinden daha fazla müşteriyi kârlı biçimde edinebileceğini düşündürür. Bir dijital sağlık şirketinin finansal sürdürülebilirliğini değerlendiren yatırımcılar, yönetim kurulları ve ödeyiciler bu oranı ilk sordukları sayılardan biri olarak ele alır.

## Nasıl hesaplanır

```
LTV = müşteri başına dönemlik ortalama gelir (veya marj) × aynı dönem
      biriminde ortalama müşteri ömrü

LTV/CAC oranı = LTV / gerçek CAC

3:1'lik bir oran, yaygın olarak anılan sürdürülebilir temel ölçüttür;
1:1'in altı, kuruluşun edinmede para kaybettiğini gösterir; 3:1'in çok
üzerindeki oranlar (örneğin 10:1+) büyümeye yetersiz yatırım
yapıldığını gösterebilir.
```

## Çalışılmış örnek

Bir dijital sağlık abonelik hizmeti hasta başına aylık ortalama 40 dolar gelir sağlar ve ortalama bir hasta 18 ay abone kalır; bu da 40 × 18 = 720 dolarlık bir LTV verir. Bu hizmet için gerçek CAC (bu konunun çalışılmış örnek yaklaşımına bakın) edinilen hasta başına 180 dolar olarak hesaplanır. LTV/CAC oranı 720 / 180 = 4:1'dir ve 3:1'lik sürdürülebilirlik ölçütünün rahatça üzerindedir. Gerçek CAC yalnızca reklam platformunun raporladığı maliyetle (ajans ücretleri ve kabul işgücü yüklenmeden önce 120 dolar) hesaplanmış olsaydı, oran 6:1 gibi görünürdü — gerçek 4:1 rakamından önemli ölçüde daha olumlu ve yanıltıcı bir birim ekonomisi tablosu.

## Veri kaynakları ve uyarılar

LTV, kuruluşun kendi elde tutma veya müşteri kaybı verilerinden (bkz. kullanıcı elde tutma oranı) türetilen ortalama müşteri ömrü varsayımına dayanır — yüksek müşteri kaybı olan bir işletmenin etkin ortalama ömrü daha kısadır ve bu nedenle müşteri başına dönemlik geliri sağlıklı görünse bile LTV'si daha düşüktür. LTV, gözlemlenmiş bir geçmiş olgu değil ileriye dönük bir tahmin olduğundan, elde tutma verileri biriktikçe düzenli olarak yeniden hesaplanmalı ve müşteri kaybı varsayımları yanlış çıkarsa revize edilmeli, bir kez belirlenip eskimeye bırakılmamalıdır. Bu oranda gerçek CAC yerine platformun raporladığı CAC'nin kullanılması, bir kuruluşun birim ekonomisinin gerçekte olduğundan daha sağlıklı olduğuna kendini ikna etmesinin en yaygın yollarından biridir; çünkü eksik gösterilen CAC oranı mekanik olarak şişirir.

## Tuzaklar

- **Gerçek CAC yerine platformun raporladığı CAC'yi kullanmak**: bu, oranı mekanik olarak şişirir ve sürdürülemez bir edinme stratejisini sürdürülebilir gösterebilir; her zaman tüm maliyetleri yüklenmiş gerçek CAC rakamını kullanın.
- **Eskimiş veya iyimser bir ortalama müşteri ömrü varsayımı kullanmak**: güncelliğini yitirmiş bir elde tutma eğrisinden hesaplanan LTV, özellikle elde tutmayı değiştiren bir ürün, fiyatlandırma veya pazar değişikliğinden sonra, mevcut müşteri kaybı davranışını yansıtmaz.
- **Çok yüksek bir oranı kayıtsız şartsız iyi saymak**: 3:1'in çok üzerindeki bir oran, olağanüstü verimlilikten çok büyümeye yetersiz yatırımın işareti olabilir; çünkü kuruluşun şu anda edindiğinden muhtemelen daha fazla müşteriyi kârlı biçimde edinebileceğini ima eder.
- **Çok farklı müşteri segmentleri için tek bir birleşik oran hesaplamak**: yüksek gelirli ve düşük müşteri kaybı olan bir segment, birim ekonomisi zayıf olan başka bir segmenti gizleyebilir; hacim elverdiği ölçüde oranı anlamlı her segment için (örneğin edinme kanalına veya ürün hattına göre) ayrı hesaplayın.

## Kaynaklar

- Abonelik ve yinelenen gelir birim ekonomisi üzerine hakemli ve sektör literatürü; girişim sermayesi ve SaaS metrikleri araştırma kuruluşlarının yaygın olarak kullanılan kıyaslama çerçeveleri
- Healthcare Financial Management Association (HFMA), dijital sağlık kuruluşları için finansal sürdürülebilirlik metrikleri kılavuzu
- Rock Health ve benzeri dijital sağlık pazar araştırması kuruluşları, dijital sağlık birim ekonomisi üzerine sektör kıyaslamaları

Ayrıca bakınız: [gerçek müşteri edinme maliyeti](../gerçek-müşteri-edinme-maliyeti/) ve [pazarlama verimliliği oranı](../pazarlama-verimlilik-oranı/), bu oranla genellikle birlikte raporlanan diğer iki temel büyüme ekonomisi metriği.
