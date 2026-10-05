# Dijital Okuryazarlık Oranı

Dijital okuryazarlık oranı, bir hasta popülasyonunun, başka bir kişiden yardım gerektirmeden bir dijital sağlık platformunda yaygın görevleri — oturum açma, randevu planlama, görüntülü görüşmeye katılma veya bir test sonucunu okuma — bağımsız ve başarılı biçimde tamamlayabilen kısmının payını ölçer. Bu oran, dijital erişim oranından farklıdır ve her zaman ondan ayrı ölçülmelidir: bir hastanın akıllı telefonu ve geniş bant bağlantısı olabilir ve yine de bir tele sağlık platformunda yardımsız gezinemeyebilir; bu iki metriği birbirine karıştırmak, bu metriğin tam olarak ortaya çıkarmak için var olduğu popülasyonu gizler.

## Neden önemlidir

Dijital erişim tek başına bir hastanın dijital sağlık hizmetini etkili biçimde kullanabileceğini garanti etmez: sağlık okuryazarlığı düşük, genel olarak teknoloji deneyimi sınırlı, bilişsel veya görsel bozukluğu olan ya da platformun arayüzüyle dil engeli yaşayan hastalar tam teknik erişime sahip olsalar da bir görevi bağımsız olarak tamamlayamayabilir; bu boşluk, zaten başka sağlık eşitsizlikleriyle karşı karşıya olan aynı demografik gruplarla sistematik olarak ilişkilidir. HIMSS Dijital Sağlık Eşitliği Ölçüm Çerçevesi (Digital Health Equity Measurement Framework), tam da bu nedenle dijital okuryazarlığı erişimden ayrı bir sütun olarak ele alır: bir erişim açığını kapatırken okuryazarlık açığını da gidermemek, bir popülasyonu teknik olarak bağlı ancak işlevsel olarak yararlanamaz halde bırakabilir. Yaygın platform işlemleri için görev tamamlama ve tamamlanma süresini dil ve sosyoekonomik göstergelere göre ayrıştırarak ölçen kuruluşlar, okuryazarlık engellerini belirleyebilir ve desteği (sadeleştirilmiş arayüzler, destekli ilk kullanım süreci, alternatif dilde içerik) yalnızca erişim metriklerine veya genel memnuniyet puanlarına dayanan kuruluşlardan çok daha isabetli biçimde hedefleyebilir.

## Nasıl hesaplanır

```
Dijital okuryazarlık oranı = tanımlı bir görevi yardım almadan bağımsız
                              olarak tamamlayan hastalar / o görevi
                              deneyen hastalar × 100

Ölçülen yaygın görevler: hesaba giriş, randevu planlama, görüntülü
görüşmeye katılma, test sonucunu görüntüleme, kabul formunu
doldurma.

Tek bir birleşik puan olarak değil, görev bazında raporlayın; çünkü
basit görevler (oturum açma) ile karmaşık görevler (çok adımlı bir
kabul formunu doldurma) için okuryazarlık önemli ölçüde farklılık
gösterir ve bunları birleştirmek belirli engelin nerede olduğunu
gizler.
```

## Çalışılmış örnek

Bir sağlık sistemi, bir ay içinde 5.000 planlı tele sağlık randevusu boyunca görüntülü görüşmeye katılmayı tanımlı bir görev olarak izler. Bunların 4.100'ünde hastalar herhangi bir destek araması veya görüşme sırasında teknik yardım olmadan başarıyla katılır (bu görev için dijital okuryazarlık oranı: %82). Ana dile göre ayrıştırma, İngilizce konuşan hastalar için %89, ana dili platformun varsayılan arayüz dilinden farklı olan hastalar için ise %61 oranını gösterir — yalnızca birleşik %82 rakamı raporlansaydı görünmez kalacak olan 28 puanlık bir fark; bu fark, belirsiz ve genel bir okuryazarlık sorunundan ziyade belirli ve ele alınabilir bir müdahaleye (çevrilmiş arayüz ve talimatlar) doğrudan işaret eder.

## Veri kaynakları ve uyarılar

Görev tamamlama verileri tipik olarak platformun kendi olay günlüklerinden (hasta görüntülü görüşmeye ulaştı mı, randevu planlama akışı terk edilmeden tamamlandı mı) elde edilir ve yalnızca hasta yol boyunca canlı yardım aldığı için teknik olarak "tamamlanmış" sayılan görevleri belirlemek üzere destek araması veya yardım masası iletişim verileriyle desteklenir. Yalnızca sistem günlüklerine dayanarak "tamamlanmış" sayılan bir görev, hastanın oraya ulaşmak için bir aile üyesinden veya destek personelinden telefon yardımı aldığını gizleyebilir — platformun ikisini ayırt edebildiği her yerde, gerçekten okuryazarlıktan bağımsız bir tamamlama, yardımlı olandan ayrı olarak tanımlanmalı ve izlenmelidir. Dijital okuryazarlık, sağlık okuryazarlığı ve genel okuryazarlıkla ilişkilidir ancak analitik olarak bunlardan farklıdır; resmi bir değerlendirmenin gerektiği her yerde, yalnızca yaşa veya demografiye dayalı gayriresmî bir varsayım yerine geçerliliği kanıtlanmış bir ölçüm aracı kullanılmalıdır.

## Tuzaklar

- **Dijital okuryazarlığı dijital erişimle karıştırmak**: tam teknik erişimi olan bir hastanın bunu etkili biçimde kullanacak okuryazarlığı yine de olmayabilir; bunlar ayrı müdahaleler gerektiren ayrı metriklerdir ve hiçbir zaman tek bir birleşik rakam olarak raporlanmamalıdır.
- **Yardımlı tamamlamaları yardımsız başarı olarak saymak**: bir hasta bir görevi yalnızca bir destek araması veya bir aile üyesinin yardımıyla tamamlıyorsa, bu platformun çözmediği, üzerini örttüğü bir okuryazarlık açığıdır; veriler elverdiği ölçüde yardımlı ve yardımsız tamamlamayı birbirinden ayırın.
- **Tek bir birleşik görev tamamlama puanı raporlamak**: basit bir görev (oturum açma) ile karmaşık bir görev (ayrıntılı bir kabul formunu doldurma) için okuryazarlık önemli ölçüde farklılık gösterir; engelin tam olarak nerede olduğunu belirlemek için görev bazında raporlayın.
- **Yaşın tek başına dijital okuryazarlığı öngördüğünü varsaymak**: yaş toplamda daha düşük dijital okuryazarlıkla ilişkili olsa da, platformun arayüz dilindeki dil yeterliliği ve genel teknoloji aşinalığı çoğu zaman bireysel düzeyde daha güçlü belirleyicilerdir ve yaştan çıkarım yapmak yerine doğrudan ölçülmelidir.

## Kaynaklar

- HIMSS, Dijital Sağlık Eşitliği Ölçüm Çerçevesi (Digital Health Equity Measurement Framework, DHEMF)
- Office of the National Coordinator for Health Information Technology (ONC), sağlık bilgi teknolojisi kullanılabilirliği ve dijital sağlık okuryazarlığı üzerine araştırmalar
- Dijital sağlık okuryazarlığı ölçümü ve müdahalesi üzerine hakemli literatür, örneğin Journal of Medical Internet Research (JMIR) dergisinde yayımlanan çalışmalar

Ayrıca bakınız: [dijital erişim oranı](../dijital-erişim-oranı/), bu metriğin en sık ve çoğunlukla yanlış biçimde karıştırıldığı ön koşul metriği.
