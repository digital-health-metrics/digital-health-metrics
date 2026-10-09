# Hasta Etkileşim Tutarlılığı Oranı

Hasta etkileşim tutarlılığı oranı, kayıtlı bir hastanın bir dijital sağlık ürünüyle zaman içinde ne kadar düzenli etkileşime girdiğini (örneğin yiyecek veya semptom kaydı tutma, fiziksel aktivite kaydetme ya da sağlık verilerini görüntüleme) ölçer; ürünü hiç kullanıp kullanmadığına bakmaz. Boylamsal bir ölçüttür ve belirli bir andaki aktif kullanım sayısından farklıdır: iki hasta aynı "bu ay uygulamayı kullandı" durumuna sahip olabilir; biri her gün düzenli kayıt tutarken diğeri bir kez kayıt girip üç hafta kaybolabilir ve yalnızca tutarlılık ölçütü bu ikisini ayırt eder.

## Neden önemlidir

Bir dijital sağlık aracıyla sürdürülen, düzenli etkileşim, klinik yararın daha güvenilir öncü göstergelerinden biridir; özellikle diyabet, kilo yönetimi ve ruh sağlığı gibi davranışa bağlı durumlarda, aracın değeri tek bir oturumdan değil, desteklediği alışkanlıktan gelir. Bir ürün sağlıklı bir aylık aktif kullanıcı sayısı bildirirken, aslında bir kez oturum açıp uzaklaşan bir popülasyona hizmet ediyor olabilir; çünkü aylık aktif kullanım, ay içindeki kullanım örüntüsü hakkında hiçbir şey söylemeyen düşük bir eşiktir. Tutarlılık ölçütleri bunu basit etkinlik sayımlarının yapamayacağı şekilde yakalar. Tutarlılık ayrıca haftalar yerine aylar boyunca sürdürülmesi daha zor şeylerden biri olduğundan, kullanıma alıştırmanın hemen sonrasındaki yenilik etkilerine yatkın kısa pencereli etkileşim rakamlarına göre ürün kalitesinin ve klinik uygunluğun daha dürüst bir göstergesidir.

## Nasıl hesaplanır

```
Etkileşim tutarlılığı oranı = en az bir nitelikli etkileşim olan haftalar
                               / kayıtlı olunan toplam hafta × 100

Bir "nitelikli etkileşim" açıkça ve tutarlı biçimde tanımlanmalıdır
(örneğin bir yiyecek kaydı girişi, bir semptom kontrolü veya tamamlanmış
bir aktivite eşitlemesi) — hiçbir zaman kayıtlı bir eylemi olmayan bir
uygulama açılışı gibi pasif bir olay değil.

Yalnızca popülasyon ortalaması olarak değil, dağılım olarak raporlayın:
  örneğin haftalık tutarlılığı ≥ %80 olan hastaların payı,
          %50-79 olanların payı, < %50 olanların payı
```

## Çalışılmış örnek

Bir beslenme koçluğu uygulaması bir hastayı 12 hafta boyunca kaydeder. Hasta bu 12 haftanın 9'unda en az bir nitelikli yiyecek girişi kaydeder ve bu da bireysel etkileşim tutarlılığı oranını 9 / 12 × 100 = %75 yapar. Uygulamanın en az 12 hafta kayıtlı olan 2.000 hastalık tüm kohortunda, 600 hasta (%30) haftalık ≥ %80 tutarlılığı korur, 900'ü (%45) %50-79 bandına düşer ve 500'ü (%25) %50'nin altında kalır. Yalnızca kohort ortalamasını raporlamak (bu yaklaşık %65 olabilir), hastaların tam dörtte birinin neredeyse hiç etkileşimde bulunmadığını gizlerdi; bu, genel bir ortalamada seyreltilmek yerine ayrıca incelenmeye değer bir kesimdir.

## Veri kaynakları ve uyarılar

Tutarlılık verileri ürünün kendi olay günlüklerinden (yiyecek girişleri, aktivite eşitlemeleri, kontroller) gelir ve bir "nitelikli etkileşim" tanımı ortaya çıkan oran üzerinde çok büyük bir etkiye sahiptir; esnek bir tanım (herhangi bir uygulama açılışı) her zaman katı bir tanımdan (tamamlanmış, anlamlı bir kayıt girişi) daha iyi görünecektir, bu nedenle kullanılan tanım, raporlanan her rakamla birlikte açıkça belirtilmelidir. Otomatik olarak eşitlenen veriler (örneğin arka planda aktivite eşitleyen bağlı bir fitness takip cihazı), manuel olarak kaydedilen verilerden ayrı raporlanmalıdır; çünkü otomatik eşitleme, hastanın ürünün yönlendirmesiyle herhangi bir aktif çabasını veya etkileşimini yansıtmadan görünür tutarlılığı şişirebilir.

## Tuzaklar

- **Uygulama açılışlarını anlamlı etkileşimle karıştırmak**: pasif bir uygulama açılışı (örneğin bir anlık bildirimle tetiklenen), kaydedilmiş bir yiyecek girişi veya tamamlanmış bir kontrolle aynı şey değildir; yalnızca nitelikli etkileşimleri tanımlayın ve raporlayın.
- **Yalnızca popülasyon ortalamasını raporlamak**: sağlıklı görünen bir ortalama tutarlılık oranı, yüksek düzeyde etkileşimde bulunan ve neredeyse tamamen etkileşimden kopmuş hastalardan oluşan iki tepeli bir popülasyonu gizleyebilir; yalnızca ortalamayı değil, tutarlılık bantlarına göre dağılımı raporlayın.
- **Kayıt süresi paydasını göz ardı etmek**: kayıt süreleri çok farklı olan hastalar arasında tutarlılık oranlarını kayıt süresini hesaba katmadan karşılaştırmak, daha kısa ve sürdürülmesi daha kolay bir ölçüm penceresine sahip olan gruba doğru yanlılık yaratır.
- **Otomatik arka plan eşitlemesinin oranı şişirmesi**: pasif olarak eşitlenen bir giyilebilir cihaz veri akışı, etkileşimden kopmuş bir hastanın gerçek bir davranış değişikliği veya ürünle etkileşimi olmadan tutarlı biçimde aktif görünmesine yol açabilir.

## Kaynaklar

- Dijital sağlık etkileşim örüntülerine ve bunların klinik sonuçlarla ilişkisine dair hakemli literatür, örneğin Journal of Medical Internet Research (JMIR) dergisinde yayımlanan çalışmalar
- American Medical Informatics Association (AMIA), hasta tarafından üretilen sağlık verisi kalitesi ve etkileşim ölçümüne ilişkin kılavuz
- Digital Therapeutics Alliance, dijital terapötikler için etkileşim ve sonuç ölçümüne ilişkin en iyi uygulama kılavuzları

Ayrıca bkz. [kullanıcı elde tutma oranı](../kullanıcı-elde-tutma-oranı/), bir hastanın kayıtlıyken ne kadar tutarlı etkileşimde bulunduğundan ayrı olarak, hastanın hiç kayıtlı kalıp kalmadığına dair yakından ilişkili ölçüt.
