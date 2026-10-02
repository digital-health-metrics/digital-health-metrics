# Tỷ Lệ Tuân Thủ Dùng Thuốc

Tỷ lệ tuân thủ dùng thuốc đo lường mức độ mà một bệnh nhân dùng thuốc theo chỉ định, phổ biến nhất được thể hiện như tỷ lệ số ngày trong một khoảng thời gian xác định mà bệnh nhân có quyền tiếp cận thuốc của họ theo đúng đơn kê. Đây là một trong những chỉ số sức khỏe kỹ thuật số quan trọng nhất vì sự không tuân thủ là phổ biến, phần lớn có thể phòng ngừa được với sự hỗ trợ phù hợp, và liên quan trực tiếp đến kết quả lâm sàng tồi tệ hơn và chi phí hạ lưu cao hơn — đây chính xác là khoảng cách mà các ứng dụng nhắc nhở dùng thuốc, lọ thuốc thông minh, và thông báo nạp lại thuốc từ nhà thuốc được xây dựng để lấp đầy.

## Tại sao điều này quan trọng

Sự không tuân thủ đối với thuốc điều trị bệnh mãn tính được các cơ quan y tế công cộng ước tính lên đến 50% đối với một số bệnh lý, và đây là một nguyên nhân chính có thể phòng ngừa được của việc nhập viện có thể tránh được, tiến triển bệnh, và thất bại điều trị bị quy sai cho chính loại thuốc thay vì cho việc sử dụng không nhất quán. Các công cụ tuân thủ kỹ thuật số tồn tại đặc biệt để lấp đầy khoảng cách này, vì vậy đối với bất kỳ chương trình nào có thành phần dùng thuốc, tỷ lệ tuân thủ thường là chỉ số liên quan nhất đến quyết định duy nhất: nó nằm ở thượng nguồn nhân quả của sự cải thiện chỉ số sinh học, tái nhập viện, và hầu hết các chỉ số kết quả lâm sàng khác mà một chương trình có thể báo cáo. Một chương trình cải thiện sự tham gia hoặc sự hài lòng mà không làm thay đổi sự tuân thủ có lẽ chưa chứng minh được một cơ chế hợp lý cho lợi ích lâm sàng.

## Cách tính

```
Proportion of Days Covered (PDC) = số ngày trong khoảng thời gian
                                   có sẵn thuốc trong tay (dựa
                                   trên số ngày cung cấp từ việc
                                   nạp thuốc) / số ngày trong
                                   khoảng thời gian đo lường × 100

Medication Possession Ratio (MPR) = tổng số ngày cung cấp có được
                                   trong khoảng thời gian / số
                                   ngày trong khoảng thời gian ×
                                   100 (có thể vượt quá 100% với
                                   việc nạp lại sớm; vì lý do này
                                   PDC thường được ưu tiên hơn)

Một bệnh nhân thường được phân loại là "tuân thủ" ở ngưỡng PDC ≥
80%, theo quy ước thước đo chất lượng được sử dụng rộng rãi.
```

## Ví dụ tính toán

Một bệnh nhân được kê đơn một loại thuốc mãn tính hàng ngày trong khoảng thời gian đo lường 90 ngày. Hồ sơ nạp thuốc từ nhà thuốc cho thấy bệnh nhân có đủ thuốc để bao phủ 76 trong số 90 ngày đó, với hai khoảng trống: một khoảng trống 9 ngày sau khi hết thuốc trước khi nạp lại, và một khoảng trống 5 ngày xung quanh một lần nhập viện. PDC là 76 / 90 × 100 = 84%, vượt qua ngưỡng tuân thủ thông thường 80%. Nếu cùng những khoảng trống đó được đo lường bằng MPR dựa trên số ngày cung cấp được phân phát thay vì số ngày thực sự được bao phủ, một lần nạp lại sớm ở đâu đó khác trong khoảng thời gian có thể đẩy tỷ lệ lên trên 100%, minh họa tại sao PDC là thước đo bảo thủ hơn và thường được ưu tiên hơn.

## Nguồn dữ liệu và lưu ý

Dữ liệu yêu cầu bồi thường hoặc nạp thuốc từ nhà thuốc (hoặc từ một nhà quản lý phúc lợi dược phẩm hoặc một hệ thống nhà thuốc kết nối) là nguồn tiêu chuẩn, vì nó phản ánh những gì bệnh nhân thực sự nhận được thay vì những gì họ được kê đơn; chỉ riêng dữ liệu đơn thuốc đã phóng đại sự tuân thủ vì nó không xác nhận liệu bệnh nhân có bao giờ nhận thuốc hay không. Các công cụ tuân thủ kỹ thuật số — lọ thuốc thông minh, cảm biến có thể nuốt, ống hít thông minh kết nối ghi lại mỗi lần kích hoạt cho các bệnh lý hô hấp như hen suyễn và COPD, và check-in dựa trên ứng dụng — cung cấp dữ liệu có độ phân giải cao hơn về việc liệu một liều có thực sự được dùng hay không, không chỉ là có được nhận hay không, nhưng chỉ được sử dụng bởi một số ít bệnh nhân tiềm năng không đại diện, vì vậy việc trộn lẫn sự tuân thủ được xác nhận bởi thiết bị với PDC dựa trên yêu cầu bồi thường trên toàn bộ dân số đòi hỏi sự cẩn trọng trong việc diễn giải. Sự tuân thủ nên được đo lường trong một khoảng thời gian đủ dài để làm mượt các liều bị bỏ lỡ đơn lẻ nhưng đủ ngắn để phát hiện một sự suy giảm có ý nghĩa trước khi nó gây ra tác hại lâm sàng — cửa sổ cuộn 90 ngày là phổ biến đối với thuốc mãn tính.

## Những cạm bẫy

- **Sử dụng MPR mà không tiết lộ rằng nó có thể vượt quá 100%**: các tỷ lệ không được giải thích trên 100% từ việc nạp lại sớm hoặc tích trữ làm cho việc so sánh giữa các bệnh nhân và giữa các khoảng thời gian không đáng tin cậy trừ khi sử dụng PDC hoặc tỷ lệ được giới hạn rõ ràng.
- **Coi dữ liệu đơn thuốc hoặc đặt hàng là bằng chứng của sự tuân thủ**: một đơn thuốc được viết hoặc gửi đến nhà thuốc không nói lên điều gì về việc liệu bệnh nhân có nhận hoặc dùng thuốc hay không; chỉ có dữ liệu nạp thuốc hoặc thiết bị mới lấp đầy khoảng cách đó.
- **Áp dụng một ngưỡng tuân thủ duy nhất cho tất cả các bệnh lý một cách bừa bãi**: hậu quả lâm sàng của việc bỏ lỡ 20% liều thay đổi rất nhiều tùy theo nhóm thuốc (ví dụ: thuốc chống đông máu so với statin), vì vậy một ngưỡng 80% duy nhất được sử dụng phổ biến có thể đánh giá thấp hoặc quá cao rủi ro lâm sàng đối với một số loại thuốc.
- **Bỏ qua việc chuyển đổi và ngừng thuốc**: một bệnh nhân được chuyển đổi một cách phù hợp và hợp lý về mặt lâm sàng sang một loại thuốc khác có thể xuất hiện như một sự sụt giảm tuân thủ lớn đối với thuốc ban đầu nếu việc chuyển đổi đó không được tính đến trong phép tính.

## Nguồn

- Pharmacy Quality Alliance (PQA), đặc tả thước đo Proportion of Days Covered
- Centers for Medicare & Medicaid Services (CMS), các thước đo tuân thủ dùng thuốc Star Ratings
- Tài liệu được bình duyệt về đo lường tuân thủ dùng thuốc và các can thiệp tuân thủ kỹ thuật số, ví dụ các nghiên cứu được công bố trên Journal of Managed Care & Specialty Pharmacy

Xem thêm: [tỷ lệ cải thiện chỉ số sinh học](../biometric-improvement-rate/), mà sự tuân thủ đối với thuốc điều trị bệnh mãn tính là một yếu tố thúc đẩy chính.
