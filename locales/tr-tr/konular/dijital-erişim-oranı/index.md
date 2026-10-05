# Dijital Erişim Oranı

Dijital erişim oranı, uygun hasta popülasyonunun bir dijital sağlık ürününü kullanmaya yönelik pratik olanaklara sahip olanlarının payını ölçer: geniş bant veya güvenilir bir mobil veri bağlantısı, internete bağlanabilen bir cihaz ve ilgili hasta portalında ya da uygulamasında etkin bir hesap. Bu kitaptaki diğer tüm dijital sağlık ölçümleri için ön koşul metriğidir: bir popülasyon, yapısal olarak ulaşamadığı hiçbir dijital sağlık ürününe, ürün ne kadar iyi tasarlanmış olursa olsun, kaydolamaz, onunla etkileşime giremez veya ondan yarar sağlayamaz.

## Neden önemlidir

Dijital sağlığı benimseme ve katılım metrikleri örtük olarak zaten dijital erişimi olan bir popülasyonu varsayar; önce temel erişim oranını belirlemeden benimseme veya katılım oranlarını raporlamak, bu erişime sahip olma olasılığı en düşük olan hastaları sessizce dışarıda bırakma riski taşır; bu hastalar sıklıkla sağlık ihtiyacı en büyük olan hastalardır. HIMSS Dijital Sağlık Eşitliği Ölçüm Çerçevesi (DHEMF) ve benzeri çerçeveler, erişim açıklarını dikkate almadan kurulan müdahalelerin mevcut sağlık eşitsizliklerini kapatmak yerine pekiştirme eğiliminde olması nedeniyle dijital erişimi temel, birinci dereceden bir eşitlik metriği olarak ele alır: önce-telesağlık stratejisi, güvenilir bir bağlantısı veya cihazı olmayan hastaların bakıma erişimini istemeden azaltabilirken, ikisine de zaten sahip olan hastaların deneyimini ölçülebilir biçimde iyileştirebilir. Ulusal veya kurum genelindeki ortalamalar belirli popülasyonlar için büyük açıkları düzenli olarak gizlediğinden, dijital erişim oranı demografik ve coğrafi segmentlere göre izlenmeli ve raporlanmalıdır.

## Nasıl hesaplanır

```
Dijital erişim oranı = geniş bant/mobil bağlantısı VE internete bağlanabilen
                        bir cihazı VE etkin bir hasta portalı veya uygulama
                        hesabı olan hastalar / toplam uygun hasta popülasyonu
                        × 100

Birleşik oranın yanı sıra her alt bileşeni de ayrı ayrı raporlayın:
  Bağlantı oranı        = güvenilir internet bağlantısı olan hastalar /
                           uygun popülasyon × 100
  Cihaz sahipliği oranı = internete bağlanabilen cihazı olan hastalar /
                           uygun popülasyon × 100
  Portal etkinleştirme oranı = etkin portal/uygulama hesabı olan hastalar /
                           uygun popülasyon × 100 (daha kapsamlı benimseme
                           hunisi için bkz. hasta portalı benimseme oranı)
```

## Çözümlü örnek

Bir sağlık sistemi 40.000 hastalık uygun bir popülasyona hizmet vermektedir. Bir hasta anketi ve altyapı verileri, 34.000'inin (%85) güvenilir geniş bant veya mobil bağlantısı, 33.000'inin (%82,5) internete bağlanabilen bir cihazı olduğunu ve her iki koşulu da karşılayan hastalardan 27.000'inin (uygun popülasyonun tamamının %67,5'i) etkin bir hasta portalı hesabı bulunduğunu göstermektedir. Yaşa göre ayrıştırma, 65 yaş ve üzeri hastaların birleşik dijital erişim oranının yalnızca %48 olduğunu, 65 yaş altı hastalar için ise %78 olduğunu ortaya koyar; kurum genelindeki %67,5'lik ortalama bu açığı tamamen gizler ve bu açık, belirli bir hizmetin bu popülasyon için yalnızca dijital olarak güvenle sunulup sunulamayacağını doğrudan belirlemelidir.

## Veri kaynakları ve uyarılar

Bağlantı ve cihaz sahipliği verileri genellikle hasta öz bildirimi (anket veya kabul formu aracılığıyla), hastanın coğrafi bölgesi için Federal Communications Commission (FCC) veya eşdeğer ulusal geniş bant kullanılabilirlik haritalama verileri ve kurumun kendi sistemlerinden portal etkinleştirme verilerinin bir birleşiminden gelir. Alan düzeyindeki geniş bant kullanılabilirliği (bir sağlayıcının belirli bir posta kodunda hizmet sunup sunmadığı), hane düzeyindeki bağlantıya kıyasla daha zayıf bir göstergedir; çünkü alan düzeyindeki kullanılabilirlik verileri belirli bir hastanın bu hizmete gerçekten gücünün yetip yetmediği veya abone olmayı seçip seçmediği hakkında hiçbir şey söylemez; alan düzeyindeki ve hane düzeyindeki erişim oranları birbirine karıştırılmamalıdır. Cihaz ve bağlantı erişimi bir hane içinde de paylaşılabilir (örneğin birden çok aile üyesinin kullandığı tek bir akıllı telefon); hane düzeyindeki anket verileri bunu yalnızca bireysel düzeydeki portal giriş verilerinden daha iyi yakalar.

## Tuzaklar

- **Yalnızca kurum genelindeki ortalamayı raporlamak**: bu, yaşlı, düşük gelirli, kırsal veya başka şekilde dijital olarak ötekileştirilmiş hasta segmentleri için büyük erişim açıklarını güvenilir biçimde gizler; daima demografik ve coğrafi segmente göre ayrıştırın.
- **Alan düzeyindeki geniş bant kullanılabilirliğini gerçek hane erişimiyle karıştırmak**: bir posta kodunun bir geniş bant sağlayıcısı tarafından "hizmet alması", içindeki her hanenin bu hizmete abone olduğu veya bunu karşılayabildiği anlamına gelmez.
- **Cihaz sahipliğini tek seferlik, durağan bir olgu saymak**: cihaz erişimi geçici olabilir (eskiyen bir cihaz, kaybolan veya hasar gören bir telefon, yeniden atanan ortak bir aile cihazı); bu nedenle erişim oranı bir kez değerlendirildikten sonra sabit varsayılmamalı, düzenli aralıklarla ölçülmelidir.
- **Etkilenen popülasyonun erişim oranını belirlemeden yalnızca dijital bir yol tasarlamak**: hedef popülasyonun gerçek dijital erişim oranını önce doğrulamadan bir hizmeti yalnızca dijitale kaydırmak, tam da alternatif bir kanala ulaşma olanağı en az olan hastaları sessizce dışarıda bırakma riski taşır.

## Kaynaklar

- HIMSS, Digital Health Equity Measurement Framework (DHEMF)
- Federal Communications Commission (FCC), ulusal geniş bant kullanılabilirliği ve dijital eşitlik verileri
- Pew Research Center, internet, geniş bant ve cihaz erişimi ile demografik gruplar arasındaki sayısal uçurum eğilimlerine ilişkin araştırmalar

Ayrıca bkz.: [dijital okuryazarlık oranı](../dijital-okuryazarlık-oranı/), erişimi olan hastaların bu erişimi etkin biçimde kullanıp kullanamadığını ölçen yakından ilişkili metrik.
