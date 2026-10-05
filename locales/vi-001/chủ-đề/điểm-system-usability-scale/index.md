# Điểm System Usability Scale

Điểm System Usability Scale (SUS) là một bảng câu hỏi 10 mục được tiêu chuẩn hóa, được sử dụng để định lượng mức độ dễ sử dụng của một phần mềm, tạo ra một điểm số duy nhất từ 0 đến 100 có thể được so chuẩn với các tiêu chuẩn ngành đã được thiết lập tốt. Khác với Net Promoter Score, đo lường sự sẵn lòng giới thiệu, hoặc các thước đo kết quả do bệnh nhân báo cáo, đo lường tình trạng lâm sàng hoặc chức năng, SUS đo lường một điều cụ thể: bản thân phần mềm dễ học và dễ sử dụng đến mức nào, dù là đối với bệnh nhân hay nhân viên lâm sàng.

## Tại sao điều này quan trọng

Một công cụ sức khỏe kỹ thuật số có thể có bằng chứng lâm sàng mạnh mẽ và một trường hợp kinh doanh thuyết phục trong khi vẫn thất bại trong thực tế vì bệnh nhân hoặc bác sĩ lâm sàng thấy giao diện khó hiểu, chậm chạp, hoặc gây khó chịu khi sử dụng — và vì SUS là một công cụ đã được xác nhận, được sử dụng rộng rãi với hàng thập kỷ dữ liệu so chuẩn đã công bố trên các ngành, nó cho phép một đội ngũ sức khỏe kỹ thuật số so sánh tính dễ sử dụng của sản phẩm của chính họ với một phân bố đã biết thay vì dựa vào ấn tượng không chính thức hoặc các khiếu nại giai thoại. SUS được cố ý thiết kế để không phụ thuộc vào công nghệ và nhanh chóng để thực hiện (thường dưới năm phút), điều này làm cho nó thực tế để chạy lặp đi lặp lại qua các lần lặp thiết kế, khác với một nghiên cứu tính dễ sử dụng đầy đủ hoặc một thử nghiệm lâm sàng chính thức. Vì các thất bại về tính dễ sử dụng đối với bác sĩ lâm sàng là một yếu tố đóng góp đã được ghi nhận đối với sự kiệt sức (xem tỷ lệ kiệt sức của bác sĩ) và các thất bại về tính dễ sử dụng đối với bệnh nhân là một yếu tố đóng góp đã được ghi nhận đối với việc từ bỏ và kết quả hiểu biết kỹ thuật số kém (xem tỷ lệ hiểu biết kỹ thuật số), SUS hoạt động như một tín hiệu tính dễ sử dụng cảnh báo sớm, chi phí thấp có thể phát hiện ra một vấn đề thiết kế trước khi nó xuất hiện trong những chỉ số hạ lưu có hậu quả lớn hơn đó.

## Cách tính

```
Điểm SUS = ((tổng điểm các mục số lẻ − 5) + (25 − tổng điểm các
           mục số chẵn)) × 2,5

Kết quả là một điểm số duy nhất từ 0 đến 100 (không phải một tỷ
lệ phần trăm, mặc dù có thang điểm, vì nó không đại diện cho
"phần trăm đúng" hay tương tự).

Diễn giải chuẩn mực đã công bố (Bangor et al.):
  Trên 80   — tính dễ sử dụng xuất sắc
  68        — trung bình, dựa trên chuẩn mực ngành rộng rãi
  Dưới 51   — tính dễ sử dụng kém, cần điều tra
```

## Ví dụ tính toán

Một nền tảng khám từ xa thực hiện bảng câu hỏi SUS 10 mục tiêu chuẩn cho 150 bệnh nhân sau lần khám video đầu tiên của họ. Điểm SUS trung bình được tính trên tất cả người trả lời là 74. Được so chuẩn với mức trung bình ngành được trích dẫn rộng rãi là 68, điều này cho thấy tính dễ sử dụng trên mức trung bình đối với dân số bệnh nhân và trường hợp sử dụng cụ thể này, mặc dù vẫn thấp hơn có ý nghĩa so với ngưỡng "xuất sắc" là 80, điều này sẽ gợi ý có ít rào cản tính dễ sử dụng còn lại. Phân khúc cùng 150 phản hồi đó theo độ tuổi cho thấy điểm trung bình là 81 đối với bệnh nhân dưới 50 tuổi và 62 đối với bệnh nhân từ 65 tuổi trở lên — một khoảng cách chỉ ra một vấn đề tính dễ sử dụng cụ thể, có thể giải quyết được đối với bệnh nhân lớn tuổi thay vì một vấn đề tính dễ sử dụng sản phẩm tổng quát, và là một điều mà một mức trung bình gộp duy nhất sẽ che giấu.

## Nguồn dữ liệu và lưu ý

Dữ liệu SUS đến trực tiếp từ bệnh nhân hoặc bác sĩ lâm sàng hoàn thành bảng câu hỏi 10 mục tiêu chuẩn, và công cụ phải được thực hiện chính xác như đã được xác nhận (cùng 10 mục, cùng thang đồng ý 5 điểm, cùng công thức tính điểm) để điểm số kết quả có thể so sánh được với các chuẩn mực đã công bố; một phiên bản đã sửa đổi hoặc rút gọn của bảng câu hỏi, dù có thiện ý đến đâu, cũng tạo ra một điểm số không thể được diễn giải một cách đáng tin cậy so với phân bố chuẩn mực tiêu chuẩn. SUS đo lường tính dễ sử dụng được cảm nhận, tương quan với nhưng không giống hệt với thành công hoàn thành nhiệm vụ khách quan (xem tỷ lệ hiểu biết kỹ thuật số cho một phép đo dựa trên hoàn thành nhiệm vụ); một sản phẩm có thể có một điểm SUS tốt từ những bệnh nhân chưa thử các tính năng phức tạp hơn, vì vậy việc kết hợp SUS với dữ liệu hoàn thành nhiệm vụ khách quan cho một bức tranh đầy đủ hơn so với chỉ một trong hai. Thời điểm phản hồi rất quan trọng: thực hiện SUS ngay sau một sự cố cụ thể gây khó chịu (một kết nối thất bại, một bước gây nhầm lẫn) so với sau một phiên làm việc suôn sẻ có thể làm thay đổi điểm số độc lập với tính dễ sử dụng tổng thể của sản phẩm.

## Những cạm bẫy

- **Sửa đổi các mục hoặc cách tính điểm của bảng câu hỏi tiêu chuẩn**: ngay cả những thay đổi nhỏ về cách diễn đạt hoặc thang điểm cũng vô hiệu hóa việc so sánh với phân bố chuẩn mực đã công bố được thiết lập tốt; sử dụng công cụ 10 mục tiêu chuẩn chính xác như đã được xác nhận.
- **Chỉ báo cáo điểm trung bình mà không phân khúc**: tính dễ sử dụng thường thay đổi đáng kể theo độ tuổi người dùng, hiểu biết kỹ thuật số, hoặc vai trò (bệnh nhân so với bác sĩ lâm sàng); phân khúc báo cáo để tìm ra những khoảng trống tính dễ sử dụng cụ thể, có thể giải quyết được mà một mức trung bình duy nhất che giấu.
- **Coi SUS là một thước đo hiệu quả lâm sàng**: SUS cụ thể đo lường tính dễ sử dụng, không phải kết quả lâm sàng hoặc sự hài lòng với việc chăm sóc; một công cụ rất dễ sử dụng vẫn có thể thất bại trong việc cải thiện kết quả lâm sàng, và những điều này không bao giờ nên bị gộp lại hoặc thay thế cho nhau.
- **Chỉ thực hiện khảo sát sau các phiên làm việc đặc biệt suôn sẻ hoặc đặc biệt gây khó chịu**: thời điểm và bối cảnh thực hiện có thể làm sai lệch điểm số; thực hiện một cách nhất quán trên một mẫu đại diện của các phiên làm việc trong thế giới thực, không chỉ những phiên thuận tiện hoặc được chọn lọc.

## Nguồn

- Brooke, J., "SUS: A Quick and Dirty Usability Scale", công cụ gốc đã được công bố
- Bangor, Kortum, và Miller, nghiên cứu so chuẩn SUS đã công bố thiết lập các dải diễn giải điểm số được trích dẫn rộng rãi
- Tài liệu được bình duyệt về việc sử dụng SUS trong đánh giá tính dễ sử dụng sức khỏe kỹ thuật số và khám từ xa, ví dụ các nghiên cứu được công bố trên JMIR Human Factors

Xem thêm: [điểm Net Promoter của bệnh nhân](../điểm-net-promoter-của-bệnh-nhân/), một chỉ số do bệnh nhân báo cáo liên quan nhưng khác biệt, đo lường sự hài lòng và lòng trung thành thay vì tính dễ sử dụng của phần mềm cụ thể.
