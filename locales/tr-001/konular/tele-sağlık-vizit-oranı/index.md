# Tele-Sağlık Vizit Oranı

Tele-sağlık vizit oranı, bir hizmetin toplam karşılaşmalarının yüz yüze yerine uzaktan, video veya telefonla sunulan payıdır. Bir faaliyet metriği değil, sunum kanalı karması metriğidir: bakımın nasıl sunulduğunu söyler; bu, kapasite planlaması, erişim ve klinik uygunluk açısından önemlidir ve toplamda ne kadar bakım sunulduğundan tamamen ayrıdır.

## Neden önemlidir

COVID-19 pandemisi sırasında sanal muayenelerin hızla yaygınlaşmasının ardından uzaktan sunulan bakım oranı birçok hizmetin işletim modelini değiştirmiştir; kuruluşların bu kaymanın sürdürülüp sürdürülmediğini, pandemi öncesi normlara doğru geri kayıp kaymadığını veya politikayla aktif olarak yönlendirilip yönlendirilmediğini izlemek için istikrarlı bir yönteme ihtiyacı vardır. Tele-sağlık, yüz yüze bir vizitin tekdüze bir ikamesi değildir: uygunluk uzmanlık alanına, muayene türüne (bir ilaç gözden geçirmesi, fizik muayeneden çok farklı davranır) ve hasta tercihine göre değişir; dolayısıyla "doğru" oran, azamiye çıkarılacak bir hedef değil, klinik ve operasyonel bir yargıdır. Fon sağlayıcılar ve düzenleyiciler de bu oranı sonuç ve güvenlik ölçütleriyle birlikte, geri ödeme politikasına karar vermek ve uzaktan bakımın yüz yüze görülmesi gereken vakalara basitçe ikame edilmediğini kontrol etmek için kullanır.

## Nasıl hesaplanır

```
Tele-sağlık vizit oranı = tele-sağlık karşılaşmaları / (tele-sağlık karşılaşmaları + yüz yüze karşılaşmalar) × 100

Mümkün olduğunda modaliteye göre ayrı raporlayın:
  Video oranı   = video karşılaşmaları / toplam karşılaşmalar × 100
  Telefon oranı = yalnızca telefon karşılaşmaları / toplam karşılaşmalar × 100

Payda, tanımlı bir hizmet, uzmanlık alanı ve zaman dilimi için yalnızca
tamamlanmış karşılaşmaları saymalıdır (bkz. tuzaklar).
```

## Çalışılmış örnek

Bir toplum ruh sağlığı hizmeti bir çeyrekte 4.000 tamamlanmış ayakta tedavi teması kaydeder: 1.200'ü yüz yüze, 1.600'ü video ile ve 1.200'ü telefonla. Tele-sağlık vizit oranı (1.600 + 1.200) / 4.000 × 100 = %70'tir; video oranı %40 ve yalnızca telefon oranı %30'dur. Yalnızca birleşik %70'lik rakamı raporlamak, buradaki "tele-sağlık" payının büyük bölümünün yalnızca sesli olduğunu gizler; bu ise genellikle videodan farklı bir klinik risk profili ve hasta deneyimi taşır.

## Veri kaynakları ve uyarılar

Karşılaşma türü genellikle ya elektronik sağlık kaydında yapılandırılmış bir alan olarak (vizit türü veya konumu) kaydedilir ya da bir talepteki hizmet yeri kodu veya tele-sağlık değiştiricisi gibi faturalandırma kodlarından çıkarılır. Kodlama uygulaması kuruluşlar arasında ve hatta aynı kuruluştaki klinisyenler arasında önemli ölçüde farklılık gösterir; bu nedenle merkezler arası bir oran karşılaştırması, önce "tele-sağlık"ın her birinde aynı şekilde kodlanıp kodlanmadığını doğrulamalıdır. Video olarak başlayıp teknik bir sorun nedeniyle telefona düşen bir vizit tutarlı biçimde kodlanmalıdır (genellikle klinik içeriğin çoğunu taşıyan modalite olarak) ve bu kural bireysel yargıya bırakılmak yerine belgelenmelidir.

## Tuzaklar

- **Tamamlanmış yerine denenmiş vizitleri saymak**: bağlantı kurulamayan ve yeniden planlanan bir tele-sağlık randevusu, tele-sağlık paydasını iki kez şişirmemelidir.
- **Video ile telefonu birbirinin yerine geçebilir saymak**: bunların klinik ve hakkaniyet açısından farklı sonuçları vardır (telefon görsel değerlendirmeyi dışarıda bırakır ancak akıllı telefonu, güvenilir verisi veya video için özel bir alanı olmayan hastalar için daha erişilebilirdir); mümkün olduğunda her zaman ayrı raporlayın.
- **Randevuya gelmeme ilişkisini göz ardı etmek**: randevuya gelmeme davranışı çoğu zaman modaliteye göre farklılık gösterir; yalnızca artan bir tele-sağlık oranından "iyileşen erişim" sonucunu çıkarmadan önce [randevuya gelmeme oranı](../randevuya-gelmeme-oranı/) konusuna bakın.
- **Yüksek bir oranı kendiliğinden iyi saymak**: bazı durumlar ve muayene türleri için uygun bir tele-sağlık oranı, dijital olgunluk başarısızlığından değil, klinik tasarım gereği düşüktür.

## Kaynaklar

- Centers for Medicare & Medicaid Services (CMS), Medicare tele-sağlık kullanım verileri ve politika yayınları
- NHS England, sanal/uzaktan katılım dökümleri dahil ayakta tedavi ve toplum hizmetleri faaliyet istatistikleri
- Tele-sağlık kullanım eğilimleri ve modaliteye özgü sonuçlar hakkında hakemli literatür
