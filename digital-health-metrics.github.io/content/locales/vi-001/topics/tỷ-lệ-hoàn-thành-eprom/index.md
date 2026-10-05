# Tỷ Lệ Hoàn Thành ePROM

Tỷ lệ hoàn thành ePROM đo lường tỷ lệ các Thước đo Kết quả do Bệnh nhân Báo cáo điện tử (ePROM) đã được lên lịch — các bảng câu hỏi được tiêu chuẩn hóa, đã được xác nhận ghi lại tường thuật của chính bệnh nhân về triệu chứng, chức năng, hoặc chất lượng cuộc sống của họ, được cung cấp dưới dạng kỹ thuật số thay vì trên giấy — thực sự được hoàn thành. Đây vừa là một chỉ số chất lượng dữ liệu vừa là một chỉ số tham gia: giá trị lâm sàng và nghiên cứu của một chương trình PROM hoàn toàn phụ thuộc vào việc có một tỷ lệ hoàn thành đủ cao để các phản hồi được thu thập đại diện cho toàn bộ dân số đã đăng ký, không chỉ nhóm con tích cực nhất hoặc ít triệu chứng nhất.

## Tại sao điều này quan trọng

Các kết quả do bệnh nhân báo cáo là sự bổ sung trực tiếp, được bệnh nhân xác nhận cho dữ liệu được bác sĩ lâm sàng ghi lại hoặc được thiết bị đo lường, nắm bắt các khía cạnh của sức khỏe — đau đớn, chức năng, chất lượng cuộc sống — mà một đánh giá hồ sơ bệnh án hay một phép đo chỉ số sinh học không thể làm được; việc số hóa thu thập PROM tồn tại đặc biệt để làm cho dữ liệu này rẻ hơn và dễ thu thập hơn ở quy mô lớn so với bất kỳ phương pháp quản lý trên giấy nào từng cho phép. Nhưng một chương trình PROM có tỷ lệ hoàn thành thấp có nguy cơ gặp phải một thiên lệch cụ thể và nghiêm trọng: những bệnh nhân cảm thấy tồi tệ hơn thường ít có khả năng hoàn thành một bảng câu hỏi dài, vì vậy tỷ lệ hoàn thành đang giảm tự nó có thể là một dấu hiệu cảnh báo sớm về sức khỏe dân số đang xấu đi, và một tỷ lệ hoàn thành tổng thể thấp có thể làm cho các phản hồi được thu thập trông tốt hơn so với trải nghiệm thực sự của dân số chỉ vì những bệnh nhân có triệu chứng nặng nhất ít được đại diện trong những gì được hoàn thành. Đây là lý do tại sao tỷ lệ hoàn thành nên luôn được báo cáo cùng với chính điểm số PROM, không được coi là một chi tiết vận hành thứ cấp.

## Cách tính

```
Tỷ lệ hoàn thành ePROM = số ePROM được hoàn thành đầy đủ / số
                         ePROM được gửi hoặc lên lịch × 100

Báo cáo riêng cho:
  Tỷ lệ hoàn thành ban đầu     (bảng câu hỏi đầu tiên trong một
                               chuỗi giám sát)
  Tỷ lệ hoàn thành theo chiều dọc (các bảng câu hỏi tiếp theo
                               trong một chuỗi giám sát đang diễn
                               ra, thường giảm theo thời gian và
                               nên được theo dõi như một xu hướng,
                               không phải một con số duy nhất)

Một bảng câu hỏi "hoàn thành một phần" nên được định nghĩa và báo
cáo riêng biệt với cả "hoàn thành đầy đủ" và "chưa bắt đầu".
```

## Ví dụ tính toán

Một phòng khám ung bướu gửi một ePROM gánh nặng triệu chứng đã được xác nhận đến 400 bệnh nhân trước mỗi lần khám theo dõi hàng tháng. Trong tháng đầu tiên, 340 bệnh nhân hoàn thành đầy đủ bảng câu hỏi (tỷ lệ hoàn thành 85%), 30 người hoàn thành một phần, và 30 người không bắt đầu. Đến tháng thứ sáu của cùng chuỗi giám sát đó, các phản hồi hoàn chỉnh đã giảm xuống còn 260 trong cùng một nhóm 400 bệnh nhân (65%), một sự suy giảm theo chiều dọc có ý nghĩa mà sẽ hoàn toàn bị bỏ sót nếu chỉ con số 85% của tháng đầu tiên được báo cáo như một chỉ số tổng thể tĩnh. Việc điều tra xem bệnh nhân nào bỏ cuộc (theo mức độ nghiêm trọng của triệu chứng, giai đoạn bệnh, hoặc độ tuổi) có thể tiết lộ liệu sự suy giảm đó phản ánh sự mệt mỏi khảo sát, triệu chứng xấu đi khiến bảng câu hỏi khó hoàn thành hơn, hay một rào cản tiếp cận kỹ thuật.

## Nguồn dữ liệu và lưu ý

Dữ liệu hoàn thành đến từ nhật ký phân phối và phản hồi của chính nền tảng ePROM, có thể phân biệt các trạng thái "chưa bắt đầu", "hoàn thành một phần", và "hoàn thành đầy đủ" — một sự phân biệt nên luôn được giữ lại và báo cáo thay vì bị gộp thành một con số nhị phân hoàn thành/chưa hoàn thành, vì sự hoàn thành một phần thường chỉ ra một điểm cụ thể trong bảng câu hỏi nơi bệnh nhân gặp khó khăn hoặc bỏ cuộc. Tỷ lệ hoàn thành nên được diễn giải cùng với cách bảng câu hỏi được phân phối (một liên kết tin nhắn văn bản, một thông báo ứng dụng, hoặc một phương thức phân phối yêu cầu đăng nhập cổng thông tin), vì ma sát phân phối tự nó ảnh hưởng đến sự hoàn thành độc lập với nội dung bảng câu hỏi hoặc tình trạng cơ bản của bệnh nhân. Một công cụ đã được xác nhận (thay vì một bộ câu hỏi tự chế) nên luôn được sử dụng cho chính PROM, vì tỷ lệ hoàn thành đối với một công cụ chưa được xác nhận không nói lên điều gì đáng tin cậy về tính hữu ích lâm sàng của dữ liệu thu được ngay cả khi tỷ lệ hoàn thành cao.

## Những cạm bẫy

- **Coi tỷ lệ hoàn thành đang giảm chỉ là một vấn đề về phân phối**: một sự sụt giảm theo chiều dọc trong sự hoàn thành có thể phản ánh các triệu chứng của bệnh nhân thực sự đang xấu đi (bệnh nhân quá ốm để hoàn thành khảo sát) thay vì mệt mỏi khảo sát hoặc một vấn đề kỹ thuật, và sự phân biệt này vô cùng quan trọng đối với việc diễn giải lâm sàng.
- **Gộp sự hoàn thành một phần và đầy đủ vào một danh mục**: một bảng câu hỏi hoàn thành một phần có chất lượng dữ liệu khác biệt có ý nghĩa so với một bảng hoàn thành đầy đủ; báo cáo riêng, và điều tra xem ở đâu trong luồng bảng câu hỏi bệnh nhân có xu hướng từ bỏ.
- **Báo cáo tỷ lệ hoàn thành mà không báo cáo rủi ro thiên lệch phản hồi**: một tỷ lệ hoàn thành trung bình nên thúc đẩy việc điều tra xem liệu những người phản hồi có khác biệt một cách có hệ thống (về mức độ nghiêm trọng của triệu chứng, độ tuổi, hiểu biết kỹ thuật số) so với những người không phản hồi hay không, vì điểm số PROM chỉ được tính từ những người phản hồi có thể trình bày sai lệch toàn bộ dân số.
- **Sử dụng một bảng câu hỏi chưa được xác nhận hoặc tự chế**: tỷ lệ hoàn thành vô nghĩa như một tín hiệu chất lượng dữ liệu nếu bản thân công cụ được hoàn thành chưa được xác nhận lâm sàng cho bệnh lý và dân số đang được đo lường.

## Nguồn

- International Consortium for Health Outcomes Measurement (ICHOM), hướng dẫn phát triển bộ tiêu chuẩn và triển khai PROM
- U.S. Food and Drug Administration (FDA), hướng dẫn về các thước đo kết quả do bệnh nhân báo cáo trong thử nghiệm lâm sàng và nộp hồ sơ quy định
- Tài liệu được bình duyệt về triển khai PROM điện tử và tỷ lệ hoàn thành, ví dụ các nghiên cứu được công bố trên Quality of Life Research và Journal of Medical Internet Research (JMIR)

Xem thêm: [điểm Net Promoter của bệnh nhân](../điểm-net-promoter-của-bệnh-nhân/), một chỉ số do bệnh nhân báo cáo liên quan nhưng khác biệt, đo lường sự hài lòng thay vì kết quả lâm sàng.
