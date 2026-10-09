# Dijital Sevk Dönüş Süresi

Dijital sevk dönüş süresi, sevk eden klinisyen tarafından bir elektronik sevkin gönderilmesinden, bu sevkin alıcı hizmet tarafından önceliklendirilip kabul edilmesine, reddedilmesine veya randevuya bağlanmasına kadar geçen süredir. Toplam hasta bekleme süresinden ayrı, bir süreç (akış) ölçütüdür ve dijital bir sistem değişikliğinin (yapılandırılmış e-sevk, görüntü tabanlı triyaj, standartlaştırılmış sevk formları) yalnızca bir memnuniyet puanını değil, operasyonel bir sayıyı da değiştirdiğinin gösterilebildiği en net yerlerden biridir.

## Neden önemlidir

Yavaş veya büyük ölçüde değişken bir triyaj adımı, hasta daha klinik bekleme listesine katılmadan önce gecikme ekler; bu gecikme herhangi bir klinik bakım başlamadan önce yaşandığı için, dijital araçların ortadan kaldırmaya elverişli olduğu saf bir süreç israfıdır. Eksik bilgi nedeniyle "sevk edene geri gönderme" döngüsünü zorunlu kılan sevk sistemleri, dönüş süresi yalnızca ilk seferde sorunsuz geçen sevkler üzerinden ölçüldüğünde gözden kaçması kolay yeniden iş döngüleri oluşturur. Bir hizmetin yapılandırılmış dijital sevk formları, zorunlu alanlar veya görüntü tabanlı triyaj (örneğin teledermatolojide) getirdiği durumlarda, dönüş süresi genellikle faydayı göstermek için tek başına en ikna edici ölçüttür; çünkü değişiklikten önce ve sonra aynı enstrümantasyonla ölçülebilir.

## Nasıl hesaplanır

```
Dönüş süresi = zaman damgası(triyaj kararı) − zaman damgası(sevk gönderimi)

Yalnızca ortalamayı değil, medyanı ve yüksek bir yüzdelik dilimi (genellikle
90.) raporlayın; çünkü dağılım, geri gönderilen veya karmaşık sevkler
nedeniyle belirgin biçimde sağa çarpıktır.

Sistemin yakaladığı yerlerde alt aşama sürelerini göz önünde bulundurun:
  Gönderim → hizmet tarafından alınma
  Alınma → triyaj kararı
  Triyaj kararı → randevuya bağlanma (ilgili olduğunda)
```

## Uygulamalı örnek

Bir e-sevk sisteminin denetim izi, tüm uzmanlık alanlarında gönderimden triyaj kararına kadar medyan sürenin 1,8 gün, 90. yüzdelik sürenin ise 6 gün olduğunu gösterir; bunun başlıca nedeni eksik klinik bilgi nedeniyle sevk edene geri gönderilen sevklerdir. Aynı platformda görüntü tabanlı triyaj kullanan bir teledermatoloji yolu, 4 saatlik bir medyan dönüş süresine ve 1 günlük bir 90. yüzdelik değere ulaşır; çünkü bir fotoğraf ve yapılandırılmış öykü, triyaj kararı için hemen her zaman ek yazışma gerektirmeden yeterlidir.

## Veri kaynakları ve uyarılar

Birincil kaynak, gönderim ve karar zaman damgalarını kullanan e-sevk veya sevk yönetim sisteminin kendi denetim izidir; kuruluşlar, bir sevk daha fazla bilgi için geri gönderilirken "saatin" durup durmadığını veya kesintisiz işleyip işlemediğini doğrulamalıdır; çünkü bu iki tanım, aynı altta yatan süreç için önemli ölçüde farklı rakamlar üretir. Dönüş süresi, hafta sonu ve tatil etkileri farklı çalışma düzenlerine sahip hizmetler arasındaki karşılaştırmaları aksi halde bozabileceğinden, tutarlı biçimde takvim süresi veya mesai saati süresi üzerinden raporlanmalıdır.

## Tuzaklar

- **Yalnızca "temiz" sevkleri ölçmek**: reddedilen veya geri gönderilen sevkleri hesaplamanın dışında bırakmak, dijital araçların çoğunlukla özellikle azaltmayı amaçladığı yeniden iş yükünü gizler.
- **Medyan ve yüzdelikler yerine ortalamayı raporlamak**: uzun süren, geri gönderilmiş az sayıda sevk, ortalamayı tipik hastanın gerçek deneyiminin çok üzerine çeker.
- **Dönüş süresini toplam bekleme süresiyle karıştırmak**: dönüş süresi yalnızca triyaj adımını kapsar; hastanın toplam deneyimi, ayrı kapasite kısıtlarına tabi ayrı bir ölçüt olan sonraki klinik bekleme listesini de içerir.
- **Alt aşamaları ayırt etmemek**: yalnızca uçtan uca süreyi ölçen bir hizmet, yavaş bir rakamın sevk edenlerin eksik bilgi göndermesinden mi, alıcı hizmetin triyaj kapasitesinden mi, yoksa her ikisinden mi kaynaklandığını anlayamaz.

## Kaynaklar

- NHS England, e-Sevk Hizmeti (e-RS) istatistikleri ve hizmet şartnameleri
- Teledermatoloji dahil, elektronik sevk yönetim sistemleri ve dijital triyaj yollarına ilişkin hakemli literatür
- ONC / HealthIT.gov, birlikte çalışabilirlik ve sevk koordinasyonu kılavuzu
