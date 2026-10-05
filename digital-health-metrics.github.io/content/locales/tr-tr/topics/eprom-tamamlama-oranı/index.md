# ePROM Tamamlama Oranı

ePROM tamamlama oranı, planlanmış elektronik Hasta Bildirimli Sonuç Ölçütlerinin (ePROM) (bir hastanın kendi semptomlarına, işlevine veya yaşam kalitesine ilişkin kendi anlatımını yakalayan, kâğıt yerine dijital olarak sunulan standartlaştırılmış, geçerliliği kanıtlanmış anketler) gerçekte tamamlanan kısmını ölçer. Bir etkileşim ölçütü olduğu kadar bir veri kalitesi ölçütüdür de: bir PROM programının klinik ve araştırma değeri, toplanan yanıtların yalnızca en çok etkileşimde bulunan veya en az semptomlu alt kümeyi değil, kayıtlı tüm popülasyonu temsil edecek kadar yüksek bir tamamlama oranına sahip olmasına tamamen bağlıdır.

## Neden önemlidir

Hasta bildirimli sonuçlar, klinisyen tarafından kaydedilen veya cihazla ölçülen verilerin doğrudan, hastanın kendisinin doğruladığı tamamlayıcısıdır; sağlığın bir dosya incelemesinin veya biyometrik bir ölçümün yakalayamayacağı boyutlarını (ağrı, işlev, yaşam kalitesi) yakalar. PROM toplamanın dijitalleştirilmesi, bu verilerin kâğıt tabanlı uygulamanın hiçbir zaman izin vermediği ölçüde daha ucuz ve büyük ölçekte toplanmasını kolaylaştırmak için vardır. Ancak tamamlama oranı düşük bir PROM programı belirli ve ciddi bir yanlılık riski taşır: kendini daha kötü hisseden hastaların uzun bir anketi tamamlama olasılığı çoğu zaman daha düşüktür; bu nedenle düşen bir tamamlama oranı kendi başına popülasyon sağlığının kötüleştiğine dair erken bir uyarı işareti olabilir ve düşük bir genel tamamlama oranı, en çok semptomlu hastalar tamamlananlar içinde yeterince temsil edilmediği için toplanan yanıtların gerçek popülasyonun deneyiminden daha iyi görünmesine yol açabilir. Bu nedenle tamamlama oranı her zaman PROM puanlarının kendisiyle birlikte raporlanmalı, ikincil bir operasyonel ayrıntı olarak ele alınmamalıdır.

## Nasıl hesaplanır

```
ePROM tamamlama oranı = tam olarak tamamlanan ePROM'lar /
                         gönderilen veya planlanan ePROM'lar × 100

Ayrı ayrı raporlayın:
  İlk tamamlama oranı        (bir izleme dizisindeki ilk anket)
  Boylamsal tamamlama oranı  (süregelen bir izleme dizisindeki sonraki
                              anketler; bu oran tipik olarak zaman içinde
                              düşer ve tek bir rakam olarak değil, bir
                              eğilim olarak izlenmelidir)

"Kısmen tamamlanmış" bir anket, hem "tam olarak tamamlanmış" hem de
"başlanmamış" durumlarından ayrı olarak tanımlanmalı ve raporlanmalıdır.
```

## Çalışılmış örnek

Bir onkoloji kliniği, her aylık kontrol ziyaretinden önce 400 hastaya geçerliliği kanıtlanmış bir semptom yükü ePROM'u gönderir. İlk ayda 340 hasta anketi tam olarak tamamlar (tamamlama oranı %85), 30'u kısmen tamamlar ve 30'u hiç başlamaz. Aynı izleme dizisinin altıncı ayında, aynı 400 kişilik kohorttan tam yanıtlar 260'a (%65) düşer; yalnızca ilk ayın %85'lik rakamı sabit bir genel ölçüt olarak raporlansaydı, bu anlamlı boylamsal düşüş tamamen gözden kaçardı. Hangi hastaların bıraktığını (semptom şiddetine, hastalık evresine veya yaşa göre) araştırmak, düşüşün anket yorgunluğunu mu, anketi tamamlamayı zorlaştıran kötüleşen semptomları mı yoksa teknik bir erişim engelini mi yansıttığını ortaya çıkarabilir.

## Veri kaynakları ve uyarılar

Tamamlama verileri, ePROM platformunun kendi gönderim ve yanıt günlüklerinden gelir; bu günlükler "başlanmamış", "kısmen tamamlanmış" ve "tam olarak tamamlanmış" durumlarını ayırt edebilir. Bu ayrım her zaman korunmalı ve raporlanmalı, ikili bir tamamlandı/tamamlanmadı rakamına indirgenmemelidir; çünkü kısmi tamamlama çoğu zaman hastaların anketin belirli bir noktasında zorlandığını veya ilgisini kaybettiğini gösterir. Tamamlama oranı, anketin nasıl sunulduğuyla (bir kısa mesaj bağlantısı, bir uygulama bildirimi veya bir portal girişi gerektiren bir sunum yöntemi) birlikte yorumlanmalıdır; çünkü sunum sürtünmesi, anketin içeriğinden veya hastanın altta yatan durumundan bağımsız olarak tamamlamayı etkiler. PROM'un kendisi için her zaman geçerliliği kanıtlanmış bir araç (rastgele hazırlanmış bir soru kümesi yerine) kullanılmalıdır; çünkü geçerliliği kanıtlanmamış bir araç için tamamlama oranı, tamamlama yüksek olsa bile elde edilen verilerin klinik yararlılığı hakkında güvenilir hiçbir şey söylemez.

## Tuzaklar

- **Düşen bir tamamlama oranını yalnızca bir sunum sorunu olarak görmek**: tamamlamadaki boylamsal bir düşüş, anket yorgunluğu veya teknik bir sorun yerine gerçekten kötüleşen hasta semptomlarını (anketi tamamlayamayacak kadar hasta olan hastalar) yansıtabilir ve bu ayrım klinik yorum açısından son derece önemlidir.
- **Kısmi ve tam tamamlamayı tek bir kategoride birleştirmek**: kısmen tamamlanmış bir anket, tam olarak tamamlanmış bir ankete göre anlamlı ölçüde farklı bir veri kalitesidir; bunları ayrı raporlayın ve hastaların anket akışında genellikle nerede bıraktığını araştırın.
- **Tamamlama oranını yanıt yanlılığı riskini raporlamadan raporlamak**: orta düzeyde bir tamamlama oranı, yanıt verenlerin yanıt vermeyenlerden sistematik olarak (semptom şiddeti, yaş, dijital okuryazarlık bakımından) farklı olup olmadığının araştırılmasını gerektirmelidir; çünkü yalnızca yanıt verenlerden hesaplanan PROM puanları tüm popülasyonu yanlış temsil edebilir.
- **Geçerliliği kanıtlanmamış veya kurum içinde hazırlanmış bir anket kullanmak**: tamamlanan araç ölçülen durum ve popülasyon için klinik olarak doğrulanmamışsa, tamamlama oranı bir veri kalitesi göstergesi olarak anlamsızdır.

## Kaynaklar

- International Consortium for Health Outcomes Measurement (ICHOM), standart set geliştirme ve PROM uygulama kılavuzları
- U.S. Food and Drug Administration (FDA), klinik çalışmalarda ve düzenleyici başvurularda hasta bildirimli sonuç ölçütlerine ilişkin kılavuz
- Elektronik PROM uygulamasına ve tamamlama oranlarına ilişkin hakemli literatür, örneğin Quality of Life Research ve Journal of Medical Internet Research (JMIR) dergilerinde yayımlanan çalışmalar

Ayrıca bkz. [hasta net tavsiye skoru](../hasta-net-tavsiye-skoru/), klinik sonuç yerine memnuniyeti ölçen, ilişkili ancak ayrı bir hasta bildirimli ölçüt.
