# Biyometrik Stabilizasyon Oranı

Biyometrik stabilizasyon oranı, kayıtlı hastalar arasında, bağlantılı bir izleme cihazı kullanılarak, tek bir zaman noktasında değil sürdürülen bir dönem boyunca bir biyometrik ölçüm için klinik olarak tanımlanmış hedef aralığa ulaşan ve bu aralığı koruyan hastaların payıdır — en yaygın örneği, kan basıncının 130/80 mmHg gibi bir eşiğin altında olmasıdır. Bu oran, biyometrik iyileşme oranından (bkz. ilgili konu) farklıdır: iyileşme, başlangıç değerine göre değişimin büyüklüğünü ölçerken, stabilizasyon, tedavi veya izleme başladıktan sonra bir hastanın güvenli bir aralıkta güvenilir biçimde tutulup tutulmadığını ölçer; bu, hedefe zaten yakın olan veya halihazırda tedavi gören hastalar için en önemli sonuçtur.

## Neden önemlidir

Kronik hastalık programlarındaki hastaların büyük bir bölümü için — özellikle kılavuz kan basıncı hedeflerinin iyi belirlenmiş olduğu ve kardiyovasküler riskle doğrudan ilişkilendirildiği hipertansiyonda — klinik amaç tek seferlik bir iyileşme değil, sürdürülen kontroldür; hedef aralığın içine ve dışına salınım gösteren bir hasta, bir kez iyileşip bu düzeyde kalan hastadan önemli ölçüde farklı bir risk taşır. Bağlantılı cihazlar (hücresel ağ üzerinden bağlanan tansiyon manşetleri, sürekli glikoz monitörleri), stabilizasyonu yalnızca klinik ziyaretlerde değil sürekli olarak ölçmeyi mümkün kılar; böylece klinikteki ölçümleri kontrollü görünen ancak evdeki ölçümleri kararsız olan hastalar ortaya çıkar — bu örüntü, yalnızca periyodik yüz yüze ölçümle tespit edilemeyen maskeli hipertansiyon olarak bilinir. Yalnızca tek bir "hedefte" anlık görüntüsü yerine stabilizasyon oranını raporlamak, bir programı hastaları aralık içinde ne sıklıkla değil, ne kadar tutarlı biçimde tuttuğuyla yüzleşmeye zorlar.

## Nasıl hesaplanır

```
Biyometrik stabilizasyon oranı = ölçüm dönemi boyunca okumalarının
                                  ≥ %80'i hedef aralıkta olan hastalar /
                                  o dönemde asgari sayıda geçerli
                                  okuması bulunan hastalar × 100

Örnek eşikler:
  Kan basıncı — hedef < 130/80 mmHg (veya hastanın risk profiline
                uygun klinik kılavuz eşiği)
  Glikoz      — sürekli glikoz izleme kılavuzuna göre hedef aralık,
                "aralıkta geçen süre" olarak raporlanır

Seyrek ölçüm yapan hastaların yapay biçimde stabil görünmesini
önlemek için, bir hastanın paydaya dahil edilmesinden önce asgari bir
okuma sıklığı eşiği (örneğin haftada en az 3 okuma) belirlenmelidir.
```

## Çalışılmış örnek

Bir hipertansiyon uzaktan izleme programı, her biri haftada en az 3 okuma yapması beklenen, hücresel ağ bağlantılı tansiyon manşetleri olan 600 hastayı kaydeder. Bunlardan 540'ı 3 aylık ölçüm döneminde asgari okuma sıklığı eşiğini karşılar ve paydaya dahil edilir. Bu 540 hastanın 350'sinin okumalarının en az %80'i 130/80 mmHg'nin altındadır; bu da biyometrik stabilizasyon oranını 350 / 540 × 100 = %65 yapar. Yetersiz okuma nedeniyle dışarıda bırakılan 60 hasta, ne paya ne de "stabilize olmayan" gruba katılır, bunun yerine ayrı bir veri bütünlüğü açığı olarak raporlanır; çünkü gerçek kontrol durumları kötü değil, gerçekten bilinmemektedir.

## Veri kaynakları ve uyarılar

Okumalar doğrudan bağlantılı cihazın kendi veri akışından gelir; bu, klinik içi ölçümden daha nesnel ve çok daha sık olmakla birlikte, cihaz yerleşimi ve teknik hataları (yanlış boyutta veya yanlış konumlandırılmış bir tansiyon manşeti) tek bir klinik içi doğrulama okumasının mutlaka yakalayamayacağı sistematik yanlılık oluşturabilir. Hedef aralığın seçimi, tek bir evrensel eşik yerine hastanın özgül risk profiline ve eşlik eden hastalıklarına uygun güncel klinik kılavuzu izlemelidir; çünkü kılavuz hedefleri hastanın yaşına, böbrek fonksiyonuna ve kardiyovasküler riskine göre farklılık gösterir. Okuma sıklığı düşük bir hasta, varsayılan olarak sessizce "stabil" sayılmamalıdır; onu paydadan, dışlamayı şeffaf biçimde raporlayarak çıkarmak, çok az veriye dayanarak kontrollü veya kontrolsüz saymaktan daha dürüsttür.

## Tuzaklar

- **Aralık içindeki tek bir okumayı stabilizasyon olarak değerlendirmek**: stabilizasyon, anlık bir görüntüyü değil, tanımlı bir dönem boyunca sürdürülen kontrolü ifade eder; tek bir uygun ölçüm yerine her zaman o dönemde aralık içindeki okumaların asgari bir oranını şart koşun.
- **Seyrek ölçüm yapan hastaları raporlamadan sessizce dışlamak**: nadiren okuma yapan hastalar otomatik olarak ne stabil ne de stabil olmayan sayılır; onları paydadan şeffaf biçimde çıkarın ve dışlanma oranını ayrı bir veri bütünlüğü metriği olarak raporlayın.
- **Cihaz kalibrasyonunu ve teknik hatayı göz ardı etmek**: kötü oturan bir manşet veya kalibre edilmemiş bir cihaz okumaları sistematik olarak tek yönde saptırabilir; ham cihaz verilerinden naif biçimde hesaplanan bir stabilizasyon oranı, periyodik doğrulama olmadan bunu yakalayamaz.
- **Tüm hastalar için tek bir evrensel hedef aralığı kullanmak**: klinik kılavuz hedefleri hastanın risk profiline ve eşlik eden hastalıklarına göre değişir; klinik açıdan heterojen bir popülasyona tek bir genel eşik uygulamak, bazı hastaları kendi bireyselleştirilmiş hedeflerine göre yanlış olarak stabilize olmuş veya olmamış şeklinde sınıflandıracaktır.

## Kaynaklar

- American Heart Association (AHA) / American College of Cardiology (ACC), kan basıncı kılavuz hedefleri ve evde kan basıncı izleme kılavuzu
- International Diabetes Federation ve American Diabetes Association (ADA), sürekli glikoz izleme "aralıkta geçen süre" uzlaşı kılavuzu
- Uzaktan biyometrik izleme ve sürdürülen hastalık kontrolü üzerine hakemli literatür, örneğin npj Digital Medicine'da yayımlanan çalışmalar

Ayrıca bakınız: [biyometrik iyileşme oranı](../biyometrik-iyileşme-oranı/), bir hedefe ulaşıldıktan sonraki sürdürülen kontrolden ayrı olarak, başlangıç değerine göre değişimin büyüklüğünü ölçen ilgili metrik.
