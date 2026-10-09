# Hasta Portalı Benimseme Oranı

Hasta portalı benimseme oranı, kayıtlarını görüntülemek, randevu almak veya bakım ekibine mesaj göndermek için çevrimiçi bir hasta portalına (örneğin NHS App, Patient Access veya MyChart gibi EHR'ye bağlı bir portal) kaydolan ve bunu etkin biçimde kullanan uygun hastaların payını ölçer. Dijital katılımın giriş düzeyi göstergesidir: hesabını hiç etkinleştirmemiş bir hasta, portalın üzerine kurulu hiçbir alt akım dijital hizmetten yararlanamaz.

## Neden önemlidir

Bir portal yalnızca hasta onu kullandığında değer yaratır; bu nedenle kuruluşlar benimsemeyi tek bir sayı yerine bir huni olarak izlemelidir: kayıt, etkinleştirme (ilk anlamlı eylem) ve etkin kullanım (geriye dönük bir pencere içinde kullanım) çoğu zaman birbirine karıştırılan üç farklı orandır. Dijital hizmet ekipleri sıklıkla tek ve olumlu bir başlık rakamı raporlama baskısı altındadır ve daha zor, daha dürüst dökümde ısrar etmek disiplin gerektirir. Düşük veya eşitsiz dağılan benimseme aynı zamanda bir eşitlik sinyalidir: yaşlı olan, dijital okuryazarlığı düşük olan, çoğunluk dilini konuşmayan veya güvenilir bir geniş banda ya da akıllı telefona sahip olmayan hastaların paya dahil edilme olasılığı sistematik olarak daha düşüktür; dolayısıyla artan bir ortalama benimseme oranı, hizmetlerle teması çoğu zaman en çok gereken hastalar için genişleyen bir açığı gizleyebilir.

## Nasıl hesaplanır

Yalnızca kaydı değil üç aşamanın tümünü raporlayın ve paydayı daima açıkça belirtin:

```
Kayıt oranı         = portal hesabı oluşturulmuş hastalar / uygun hasta popülasyonu × 100
Etkinleştirme oranı = ilk anlamlı eylemi tamamlayan hastalar (bir sonucu görüntüleme,
                       bir randevu alma, bir mesaj gönderme) / hesabı olan hastalar × 100
Etkin kullanım oranı = son 12 ayda en az bir kez giriş yapan hastalar /
                       uygun hasta popülasyonu × 100
```

Uygun hasta popülasyonu genellikle, tanımlı bir geriye dönük dönemde (yaygın olarak 24 ay) kuruluşla en az bir karşılaşması olan ve kendi hesabına sahip olmasına izin verilen yaşta ve onam durumunda bulunan hastalar olarak tanımlanır.

## Çözümlü örnek

Bir birinci basamak ağı, uygunluk tanımını karşılayan 50.000 hastaya hizmet vermektedir. Bunlardan 32.000'i portala kaydolmuştur (kayıt oranı %64). 32.000 kayıttan 27.000'i bir test sonucunu görüntülemek gibi en az bir anlamlı eylemi tamamlamıştır (kayıtlıların %84'ü etkinleştirme oranı). Son 12 ayda, ilk 50.000 uygun hastanın 21.000'i en az bir kez giriş yapmıştır (etkin kullanım oranı %42). Yalnızca %64'lük kayıt rakamını raporlamak gerçek katılımı hayli olduğundan yüksek gösterir; portal programı için kaynak kararlarını yönlendirmesi gereken sayı %42'lik etkin kullanım rakamıdır.

## Veri kaynakları ve uyarılar

Portal analitiği genellikle satıcı platformunun kendisinden (giriş olayları, özellik kullanımı) veya temeldeki elektronik sağlık kaydının denetim günlüğünden gelir; kuruluşlar yalnızca kayıt sayılarını gösteren satıcı panolarına şüpheyle yaklaşmalıdır. Vekil erişim (bir ebeveynin veya bakıcının hasta adına bir hesabı yönetmesi) "kullanıcının" gerçekte kim olduğunu değiştirdiği için etiketlenmeli ve ayrı raporlanmalıdır. Payda seçimi son derece önemlidir: toplam kayıtlı hasta listesine göre saymak, gerçekten uygun ve ulaşılabilir bir popülasyona göre saymaya kıyasla benimsemeyi her zaman olduğundan düşük gösterir; yalnızca etkin biçimde davet edilen hastalara göre saymak ise her zaman olduğundan yüksek gösterir; bu nedenle uygunluk tanımı sabitlenmeli ve raporlanan her oranla birlikte yayımlanmalıdır.

## Tuzaklar

- **Kaydın benimseme sayılması**: oluşturulmuş ancak hiç kullanılmamış bir hesabın değeri sıfıra yakındır; etkinleştirme ve etkin kullanımı kaydın yerine değil, onunla birlikte raporlayın.
- **Dijital dışlanmanın göz ardı edilmesi**: en çok ve en az dijital olarak dahil edilen gruplar arasındaki açık genişlerken toplam benimseme rakamları artabilir; veri yönetişimi izin verdiğinde daima yaş, yoksunluk, dil ve engelliliğe göre segmentlere ayırın.
- **Farklı uygunluk tanımlarına sahip kuruluşların karşılaştırılması**: yalnızca kayıtlı e-posta adresi olan hastaları davet eden bir portal programı, tüm kayıtlı listeye göre ölçen bir programdan, performansta gerçek bir fark olmaksızın daha yüksek bir oran raporlar.
- **Tek seferlik bir girişin süregelen katılım sayılması**: 12 aylık geriye dönük pencere yaygındır, ancak daha kısa bir pencere (örneğin 90 gün) azalan kullanım için daha erken bir uyarı sağlar.

## Kaynaklar

- NHS England, NHS App kullanım ve kayıt istatistikleri (nhs.uk / digital.nhs.uk yayınları)
- ONC / HealthIT.gov, Görüntüle, İndir, İlet (VDT) hasta erişimi ölçümleri dahil Promoting Interoperability Program ölçümleri
- Hasta portalı benimseme ve dijital sağlık eşitsizliklerine ilişkin hakemli literatür, örneğin Journal of the American Medical Informatics Association (JAMIA) dergisinde yayımlanan çalışmalar

Ayrıca bkz.: [randevuya gelmeme oranı](../randevuya-gelmeme-oranı/), portal tabanlı kendi kendine randevu alma ve hatırlatmaların doğrudan etkilediği metrik.
