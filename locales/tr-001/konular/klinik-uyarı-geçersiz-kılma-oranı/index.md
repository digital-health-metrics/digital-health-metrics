# Klinik Uyarı Geçersiz Kılma Oranı

Klinik uyarı geçersiz kılma oranı, bilgisayarlı hekim istem girişi (CPOE) sisteminin ürettiği ilaç-ilaç etkileşimi uyarıları, alerji uyarıları ve doz aralığı kontrolleri gibi klinik karar destek (CDS) uyarılarının, bir klinisyenin üzerinde işlem yapmak yerine kapattığı veya geçersiz kıldığı payı ölçer. Bu oran, "uyarı yorgunluğunu" saptamak ve yönetmek için kullanılan standart nicel göstergedir: düşük değerli uyarıların hacmi bunaltıcı hale geldiğinde klinisyenlerin uyarılara karşı duyarsızlaşma eğilimi iyi belgelenmiş bir olgudur.

## Neden önemlidir

İlaç etkileşimi uyarıları için yayımlanan geçersiz kılma oranları genellikle yaklaşık yüzde ellinin altından yüzde doksanın üzerine kadar uzanır ve yüksek bir oran kendiliğinden bir güvenlik başarısızlığı değildir: kesintiye neden olan uyarıların çoğu, bağlamında klinik olarak anlamsız etkileşimler için tetiklenir ya da klinisyenin aynı istem setinde daha önce işlem yaptığı bir uyarıyı tekrarlar; bu nedenle iyi ayarlanmış bir sistem, geçersiz kılma oranını sıfıra indirmeye çalışmak yerine bilinçli olarak daha az sayıda ve daha yüksek değerli uyarı verir. Güvenlik açısından gerçekten önemli olan, zaman içindeki eğilim, önem düzeyleri arasındaki dağılım ve klinisyenlerin yüksek önem düzeyli bir uyarıyı geçersiz kıldıklarında gerekçe belgelendirip belgelendirmediğidir; tüm uyarılar genelinde ortalama sabit görünse bile, yüksek önem düzeyli ve kanıta dayalı etkileşimlerde geçersiz kılma oranının artması gerçek bir yönetişim sorunudur.

## Nasıl hesaplanır

```
Geçersiz kılma oranı = geçersiz kılınan uyarılar / tetiklenen toplam uyarılar × 100

Şuna göre ayrıştırın:
  - önem düzeyi (ör. kontrendike, majör, orta)
  - uyarı türü (ilaç-ilaç etkileşimi, alerji, mükerrer tedavi, doz aralığı)
  - geçersiz kılma gerekçesinin belgelenip belgelenmediği

"Belgelenmiş geçersiz kılma oranı", kayıtlı bir gerekçe taşıyan geçersiz
kılmaların payını izler ve başlı başına bir yönetişim ölçütüdür.
```

## Uygulamalı örnek

Bir hastanenin CPOE sistemi bir ayda 10.000 ilaç-ilaç etkileşimi uyarısı tetikler ve bunların 8.700'ü geçersiz kılınır; bu da %87'lik genel bir geçersiz kılma oranı verir. Önem düzeyine göre ayrıştırıldığında, 500 "kontrendike" uyarının 60'ı geçersiz kılınmıştır (%12); 6.000 "orta" düzey uyarının ise 5.700'ü geçersiz kılınmıştır (%95). Orta düzey rakamı yayımlanmış kıyaslama değerleriyle genel olarak uyumludur ve tek başına bir kaygı nedeni değildir; kontrendike düzey rakamı ise tek tek vaka incelemesini gerektirir ve bu düzeydeki geçersiz kılmalardan yalnızca 340'ının (500 üzerinden) belgelenmiş bir gerekçe taşıması, daha fazla eyleme dönüştürülebilir yönetişim bulgusudur.

## Veri kaynakları ve uyarılar

Elektronik sağlık kaydının denetim günlüğü veya CDS satıcısının kendi uyarı modülü, klinisyenin serbest metin ya da yapılandırılmış gerekçe girip girmediği dahil olmak üzere her uyarı tetiklenme ve uyarıya yanıt olayını kaydeder. Kuruluşlar arasında, hatta aynı kuruluştaki bölümler arasında geçersiz kılma oranlarını karşılaştırmak, altta yatan uyarı kural setlerinin ve önem düzeyi sınıflandırmasının aynı olduğunun doğrulanmasını gerektirir; kuralları agresif biçimde ayarlanmış bir hastane, klinisyen davranışıyla hiçbir ilgisi olmayan nedenlerle daha düşük bir geçersiz kılma oranı gösterecektir.

## Tuzaklar

- **Ham geçersiz kılma oranını tek bir güvenlik puanı olarak görmek**: düşük değerli uyarıların haklı gerekçelerle geçersiz kılınmasını, gerçekten tehlikeli etkileşimlerin güvensiz biçimde geçersiz kılınmasıyla birbirine karıştırır; her zaman önem düzeyine göre ayrıştırın.
- **Geçersiz kılma gerekçesinin kaydedilmemesi**: belgelenmiş bir gerekçe olmadan, "bu uyarı yanlıştı" ile "bu uyarı doğruydu ve klinisyen güvensiz bir karar verdi" arasında ayrım yapmak imkânsızdır; hasta güvenliği açısından asıl önemli olan ayrım budur.
- **Zaman içinde uyarı kurallarının şişmesi**: "güvenli olmak" için düşük değerli olanları ayıklamadan daha fazla uyarı eklemek, artan geçersiz kılma oranlarının ve uyarı yorgunluğunun doğrudan nedenidir; uyarı yönetişimi yalnızca izlemeyi değil, düşük performanslı kuralların düzenli olarak gözden geçirilmesini ve emekliye ayrılmasını da içermelidir.
- **Farklı kesinti tasarımına sahip sistemler arasında oranları karşılaştırmak**: kesintiye neden olan, durdurucu bir uyarı, pasif ve engellemeyen bir uyarıdan farklı bir geçersiz kılma davranışı üretir; bu nedenle ikisi doğrudan karşılaştırılabilir ölçütler değildir.

## Kaynaklar

- JAMIA ve npj Digital Medicine gibi dergilerde geniş biçimde yayımlanan, klinik karar destek uyarı yorgunluğuna ilişkin hakemli literatür
- ONC / HealthIT.gov, klinik karar desteğine ilişkin sağlık bilişimi güvenliği kılavuzu
- Institute for Safe Medication Practices (ISMP), CDS uyarı tasarımı ve yönetişimine ilişkin kılavuz
