# Kullanıcı Elde Tutma Oranı

Kullanıcı elde tutma oranı, başlangıç dönemindeki aktif kullanıcılardan sonraki bir dönemde de aktif kalanların payıdır; tersi olan kayıp (churn) ya da bırakma oranı ise ürünü tamamen kullanmayı bırakanların payıdır. Hasta portalı benimseme oranı (bkz. ilgili konu) bir hastanın dijital bir sağlık ürününü hiç anlamlı biçimde etkinleştirip etkinleştirmediğini ölçerken, elde tutma kullanmaya devam edip etmediğini ölçer. Abonelik tarzı ya da süregelen bakıma yönelik herhangi bir dijital sağlık ürünü için elde tutma, genellikle hem klinik etki hem de ticari sürdürülebilirlikle en sıkı bağlantılı tek ölçüttür.

## Neden önemlidir

Kullanıcıları elde tutamayan bir dijital sağlık ürünü, ilk benimseme veya etkinleştirme rakamları ne kadar güçlü olursa olsun sürdürülebilir klinik fayda sağlayamaz: iki hafta kullanılıp bırakılan bir kronik hastalık yönetim aracının, aylarca süren sürdürülmüş davranış değişikliğine bağlı bir biyometrik sonucu değiştirmesi olası değildir. Elde tutma, bir dijital sağlık şirketinin yatırımcılara ve ödeyicilere raporladığı ticari açıdan en sonuç doğurucu ölçütlerden biridir; çünkü elde tutma eğrileri (yalnızca tek bir elde tutma yüzdesi değil, zaman içindeki düşüşün biçimi), ürünün gerçekten sürdürülebilir bir kullanım örüntüsü bulup bulmadığını ya da yalnızca öngörülebilir biçimde sönümlenen yenilik kaynaklı ilk ilgiyi yakalayıp yakalamadığını ortaya koyar. İlk düşüşten sonra düzleşen bir elde tutma eğrisi (ilk ayı geçen hastalar kalmaya eğilimlidir), taban olmaksızın istikrarlı biçimde düşmeye devam eden bir eğriden çok farklı ve çok daha sağlıklı bir sinyaldir.

## Nasıl hesaplanır

```
Elde tutma oranı (N. dönem) = N. dönemde aktif olan ve başlangıç
                               kohort döneminde de aktif olan
                               kullanıcılar / başlangıç kohort
                               dönemindeki kullanıcılar × 100

Kayıp oranı = 1 − elde tutma oranı (aynı dönem için)

Tek bir anlık değer olarak değil, kohort elde tutma eğrisi olarak
(1., 2., 3. gün/hafta/ayda elde tutma…) raporlayın; çünkü tek bir anlık
görüntü, yakın zamanda katılmış (henüz kayıp yaşama şansı olmamış)
kullanıcıları uzun süredir kullananlarla birbirine karıştırır.
```

## Çözümlü örnek

Bir dijital sağlık uygulaması Ocak ayında 1.000 yeni kullanıcıdan oluşan bir kohortu kaydeder. 1. ayın sonunda bu ilk 1.000 kullanıcıdan 640'ı hâlâ aktiftir (1. ay elde tutma oranı %64). 3. ayın sonunda 410'u aktif kalır (3. ay elde tutma oranı %41). 6. aya gelindiğinde 380'i aktif kalır (6. ay elde tutma oranı %38). Bu eğrinin biçimi, yani dik bir ilk düşüşü 3. ve 6. aylar arasındaki düzleşmenin izlemesi, ürünün kullanıcılar ilk benimseme eşiğini geçtikten sonra istikrarlı bir çekirdek kullanıcı kitlesini elde tuttuğunu düşündürür. Bu, 3. aydan 6. aya düşüşün 1. aydan 3. aya olan oranda devam etmiş olmasına kıyasla önemli ölçüde farklı ve daha cesaret verici bir sinyaldir.

## Veri kaynakları ve uyarılar

Elde tutma, ürünün kendi oturum açma veya etkinlik olay günlüklerinden hesaplanır ve "aktif" tanımı, karşılaştırılan tüm kohortlarda tutarlı biçimde (örneğin dönem içinde en az bir nitelikli oturum) yapılır. Kohortlar eşdeğer koşullarda karşılaştırılmalıdır: aynı başlangıç "aktif" tanımı, aynı gözlem penceresi uzunluğu. Çünkü küçük tanım farkları bile (30 günlük ile 28 günlük aylar ya da daha katı ile daha gevşek bir "aktif" eşiği), kullanıcı davranışında gerçek bir fark olmaksızın raporlanan elde tutma yüzdesini birkaç puan kaydırabilir. Yılbaşı kararlarına ya da belirli sağlık farkındalık dönemlerine bağlı sağlık uygulamalarında mevsimsel etkiler yaygındır; bu nedenle yıldan yıla kohort karşılaştırması, yılın farklı zamanlarındaki bitişik kohortları karşılaştırmaktan genellikle daha bilgilendiricidir.

## Tuzaklar

- **Eğri yerine tek bir elde tutma anlık görüntüsü raporlamak**: zaman içindeki düşüşün biçimi olmadan verilen tek bir "kullanıcıların %X'i hâlâ aktif" rakamı, plato yapan (sağlıklı) bir ürünü sürekli düşüşteki (sağlıksız) bir üründen ayırt edemez.
- **"Aktif" tanımını raporlama dönemleri arasında değiştirmek**: aktif kullanıcı tanımını gevşetmek (örneğin tamamlanmış bir eylem yerine pasif bir uygulama açılışını saymak), gerçek kullanım hiç değişmemişken elde tutmanın iyileşmiş gibi görünmesine yol açabilir.
- **Kohort mevsimselliğini göz ardı etmek**: bir Ocak kohortunun elde tutmasını (ortalamada daha az motive bir kohortu getiren yılbaşı kararı kayıtlarıyla çoğunlukla şişirilmiş), yılın farklı bir zamanında edinilen bir kohortla karşılaştırmak yanıltıcı eğilim sonuçları üretebilir.
- **Organik ve ücretli edinim kohortlarını harmanlamak**: farklı kanallardan edinilen kullanıcılar çoğunlukla çok farklı elde tutulur; bunları tek bir toplu elde tutma rakamında harmanlamak kanala özgü bir elde tutma sorununu gizleyebilir.

## Kaynaklar

- Dijital sağlık uygulaması katılımı ve terk oranına ilişkin hakemli yazın, örneğin Journal of Medical Internet Research'te (JMIR mHealth and uHealth) yayımlanan çalışmalar
- Digital Therapeutics Alliance, dijital terapötikler için katılım ve elde tutma ölçümüne ilişkin en iyi uygulama rehberliği
- Analitik platformlarından ve dijital sağlık pazar araştırma kuruluşlarından, mobil sağlık uygulaması elde tutmasına ilişkin sektörel kıyaslama raporları

Ayrıca bakınız: [hasta katılım tutarlılığı oranı](../hasta-etkileşim-tutarlılığı-oranı/); bu ölçüt, kullanıcıların kayıtlı kalıp kalmadığından ayrı olarak, elde tutulan kullanıcılar arasındaki katılımın kalitesini ölçer.
