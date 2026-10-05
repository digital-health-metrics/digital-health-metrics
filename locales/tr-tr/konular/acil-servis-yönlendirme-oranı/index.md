# Acil Servis Yönlendirme Oranı

Acil servis (AS) yönlendirme oranı, dijital bir triyaj ya da sanal bakım aracı tarafından ele alınan hasta temaslarından, bu müdahale olmasaydı büyük olasılıkla bir acil servis ziyaretiyle sonuçlanacak olup bunun yerine daha düşük aciliyetli bir yol (kendi kendine bakım önerisi, birinci basamak randevusu veya planlı bir acil bakım ziyareti) aracılığıyla güvenli biçimde yönetilenlerin payını ölçer. Bu ölçüt, triyaj yönlendirme doğruluğunun (bkz. ilgili konu) tamamen önlenen acil servis kullanımına odaklanan, özel ve yüksek değerli bir alt kümesidir; önlenen acil servis kullanımı ise hem sağlık harcamalarıyla hem de acil servis kapasitesinin rahatlatılmasıyla en doğrudan ilişkili sonuçtur.

## Neden önemlidir

Acil servisler, ziyaret başına en pahalı bakım ortamları arasındadır ve sıklıkla başka yerde güvenle yönetilebilecek sorunlar için kullanılır. Bu nedenle bir dijital triyaj aracının uygun vakaları acil servisten güvenle başka yöne yönlendirme yeteneği, ticari ve operasyonel açıdan en değerli yeteneklerinden biridir ve aracın yatırım getirisini değerlendiren bir ödeyiciye ya da sağlık sistemine iletilmesi en kolay olanlarından biridir. Ancak yönlendirmenin değeri yalnızca güvenli olması hâlinde vardır: gerçek acil durumları kaçırma pahasına hastaları agresif biçimde acil servisten uzaklaştıran bir araç, dengenin yanlış tarafını tamamen optimize etmiştir. Bu nedenle AS yönlendirme oranı, saf bir verimlilik başarısı olarak tek başına raporlanmamalı, her zaman yönlendirilen hastalar arasında kaçırılan ya da geciken acil başvuruları izleyen bir güvenlik ölçütüyle birlikte raporlanmalıdır.

## Nasıl hesaplanır

```
AS yönlendirme oranı = acil servisten uygun bir düşük aciliyetli yola
                        güvenle yönlendirilen hasta temasları / acil
                        servise gidebileceği değerlendirilen toplam
                        hasta teması × 100

"Güvenle yönlendirilmiş" olmak, takip ya da bağlantılı sağlık kaydı
verileri aracılığıyla, hastanın durumunun tanımlanmış bir takip
penceresi (örn. 72 saat) içinde aslında acil bakım gerektirmediğinin
doğrulanmasını gerektirir; hasta sonrasında hemen acil servise
gitmedi diye bir yönlendirme kararı güvenli olarak doğrulanmış olmaz.

Şunlarla birlikte raporlayın:
  Kaçırılan acil durum oranı = takip penceresi içinde acil bakım
                                gerektiren yönlendirilmiş hastalar /
                                toplam yönlendirilmiş hasta × 100
```

## Çözümlü örnek

Bir dijital triyaj hizmeti, klinik algoritmasının müdahale olmaksızın acil servise gidebileceğini değerlendirdiği bir ayda 3.000 hasta temasını değerlendirir. Bunlardan 1.800'ü daha düşük aciliyetli bir yola yönlendirilir (%60 yönlendirme oranı). Yönlendirilen kohortun bağlantılı sağlık kaydı verileriyle 72. saatteki takibi, 1.800 yönlendirilen hastadan 45'inin bu pencere içinde sonradan bir acil servise başvurduğunu ortaya koyar (kaçırılan acil durum oranı 45 / 1.800 × 100 = %2,5). %60'lık yönlendirme rakamını %2,5'lik kaçırılan acil durum oranı olmadan raporlamak, aracın yönlendirme davranışının uygun biçimde kalibre edilip edilmediğini asıl belirleyen güvenlik-verimlilik dengesinin yalnızca yarısını sunmak olacaktır.

## Veri kaynakları ve uyarılar

Yönlendirilen bir hastanın sonradan acil bakım gerektirmediğini doğrulamak, bağlantılı verilere bağlıdır: aynı sağlık sisteminin kendi acil servis kayıtları, bölgesel bir sağlık bilgi değişimi ya da yapılandırılmış bir hasta takip araması veya anketi. Bu veri kaynaklarından hiçbiri olmadan işleyen bir yönlendirme programı kendi güvenliğini gerçekten doğrulayamaz; yalnızca bir şikâyet olmamasına dayanarak varsayabilir. Uygun yönlendirme oranı ve kabul edilebilir kaçırılan acil durum oranı yalnızca istatistiksel değil, klinik politika kararlarıdır; bir triyaj algoritmasının varsayılan olarak kullandığı eşiğin yan etkisi olarak ortaya çıkmasına izin verilmek yerine klinik liderlik tarafından bilinçli olarak belirlenmelidir. Uygun yönlendirme oranları duruma göre büyük farklılık gösterdiğinden (küçük bir kesik ile göğüs ağrısı çok farklı yönlendirme eşikleri gerektirir), yönlendirme oranı başvuru semptomu ya da şikâyet kategorisine göre raporlanmalıdır.

## Tuzaklar

- **Yönlendirme oranını bağlantılı bir kaçırılan acil durum güvenlik ölçütü olmadan raporlamak**: gerçek acil durumların eksik triyaj edilmesiyle elde edilen yüksek bir yönlendirme oranı bir başarı değildir; iki ölçüt her zaman birlikte raporlanmalıdır.
- **Acil servis ziyareti olmamasının yönlendirmenin güvenli olduğu anlamına geldiğini varsaymak**: hasta farklı, bağlantısız bir hastane sisteminin acil servisine başvurabilir ya da hiçbir acil servise başvurmadan gerçekten zararlı bir sonuç yaşayabilir; güvenliği yalnızca aynı sistemde bir acil servis ziyareti bulunmamasıyla değil, bağlantılı veriler veya yapılandırılmış takip yoluyla doğrulayın.
- **Yönlendirme eşiğini salt yönlendirme oranını en üst düzeye çıkarmak için belirlemek**: eşleşen bir güvenlik kısıtı olmadan yönlendirmeyi en üst düzeye çıkaracak biçimde ayarlanmış bir algoritma ya da politika, daha iyi görünen bir verimlilik rakamı karşılığında hasta güvenliğinden ödün verecektir.
- **Yönlendirme oranını tüm şikâyet türleri üzerinden harmanlamak**: uygun yönlendirme oranları başvuru şikâyetine göre çok büyük farklılık gösterir; tek bir harmanlanmış oran, aracın klinik olarak en önemli durumlar için güvenli ve etkili çalışıp çalışmadığını gösteremez.

## Kaynaklar

- Agency for Healthcare Research and Quality (AHRQ), acil servis kullanımı ve uygun bakım ortamına yönlendirme üzerine araştırmalar
- NHS England, NHS 111 ve dijital acil bakım triyajının güvenliği ve etkililiği standartlarına ilişkin rehberlik
- Dijital triyaj ve sanal bakım AS yönlendirme sonuçlarına ilişkin hakemli yazın, örneğin Annals of Emergency Medicine ve npj Digital Medicine'de yayımlanan çalışmalar

Ayrıca bakınız: [triyaj yönlendirme doğruluğu](../triyaj-yönlendirme-doğruluğu/); bu ölçüt, söz konusu daha geniş doğruluk ölçütünün özel ve güvenlik açısından kritik bir alt kümesidir.
