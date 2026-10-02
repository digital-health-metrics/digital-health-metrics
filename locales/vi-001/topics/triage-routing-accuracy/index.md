# Độ Chính Xác Định Hướng Phân Loại

Độ chính xác định hướng phân loại là tỷ lệ các lần tiếp xúc bệnh nhân mà một công cụ phân loại tự động hoặc hỗ trợ AI định hướng chính xác một bệnh nhân đến đúng cấp độ và địa điểm chăm sóc — ví dụ như tự chăm sóc, chăm sóc ban đầu, chăm sóc khẩn cấp, hoặc chăm sóc cấp cứu — được đánh giá dựa trên một tiêu chuẩn tham chiếu đã được xác nhận lâm sàng. Đây là chỉ số an toàn và hiệu quả cho bất kỳ cổng kỹ thuật số, công cụ kiểm tra triệu chứng, hoặc hệ thống phân loại AI nào: toàn bộ đề xuất giá trị của công cụ phụ thuộc vào việc định hướng bệnh nhân một cách chính xác, nhanh chóng, và nhất quán.

## Tại sao điều này quan trọng

Một công cụ phân loại không chính xác gây hại theo cả hai hướng: phân loại thấp (định hướng một bệnh nhân đến cấp độ chăm sóc thấp hơn mức họ cần) có thể trì hoãn điều trị cho một trường hợp cấp cứu thực sự, trong khi phân loại cao (định hướng một bệnh nhân đến cấp độ chăm sóc cao hơn mức họ cần) lãng phí năng lực cấp cứu và khẩn cấp khan hiếm và làm tăng chi phí cũng như sự lo lắng của bệnh nhân mà không có lợi ích lâm sàng nào. Vì hai chế độ thất bại này có hậu quả rất khác nhau, độ chính xác định hướng phân loại nên luôn được báo cáo cùng với hướng của các sai sót, không phải như một con số chính xác tổng hợp duy nhất che giấu việc liệu công cụ có đang sai sót một cách an toàn hay nguy hiểm. Các cơ quan quản lý và hệ thống y tế đánh giá một công cụ phân loại AI để triển khai ngày càng yêu cầu loại báo cáo độ chính xác phân tầng này như một điều kiện để được chấp thuận lâm sàng, đặc biệt đối với các công cụ hoạt động với một mức độ tự chủ nào đó từ bác sĩ lâm sàng.

## Cách tính

```
Độ chính xác định hướng phân loại = số lần tiếp xúc được định
                                    hướng chính xác / tổng số lần
                                    tiếp xúc được phân loại × 100

Báo cáo riêng phân loại thấp và phân loại cao:
  Tỷ lệ phân loại thấp = số lần tiếp xúc được định hướng đến mức
                        độ khẩn cấp thấp hơn tiêu chuẩn tham chiếu
                        / tổng số lần tiếp xúc được phân loại ×
                        100
  Tỷ lệ phân loại cao  = số lần tiếp xúc được định hướng đến mức
                        độ khẩn cấp cao hơn tiêu chuẩn tham chiếu
                        / tổng số lần tiếp xúc được phân loại ×
                        100

Tiêu chuẩn tham chiếu thường là đánh giá hồi cứu của bác sĩ lâm
sàng đối với cùng một trường hợp, được che giấu kết quả của công
cụ khi có thể.
```

## Ví dụ tính toán

Một công cụ kiểm tra triệu chứng AI phân loại 5.000 lần tiếp xúc bệnh nhân trong một tháng. Một đánh giá mù của bác sĩ lâm sàng trên một mẫu ngẫu nhiên gồm 500 lần tiếp xúc này cho thấy 430 trường hợp được định hướng đến đúng mức độ khẩn cấp (độ chính xác 86%), 45 trường hợp bị phân loại thấp (9%), và 25 trường hợp bị phân loại cao (5%). Tỷ lệ phân loại thấp 9% là con số cần được điều tra khẩn cấp nhất, vì nó đại diện cho các lần tiếp xúc mà bệnh nhân có thể đã được định hướng đến chăm sóc ít khẩn cấp hơn mức họ thực sự cần; tỷ lệ phân loại cao 5% là một mối quan ngại về năng lực và chi phí nhưng không phải là vấn đề an toàn trực tiếp.

## Nguồn dữ liệu và lưu ý

Tiêu chuẩn tham chiếu mà độ chính xác phân loại được đo lường dựa trên đó có ý nghĩa vô cùng quan trọng: một đánh giá bởi một bác sĩ lâm sàng duy nhất đưa vào sự biến thiên phán đoán của chính bác sĩ đó, vì vậy một con số độ chính xác đáng tin cậy thường đòi hỏi hoặc là nhiều người đánh giá độc lập với một sự đồng thuận giữa các người đánh giá được ghi nhận, hoặc so sánh với một kết quả lâm sàng được xác nhận sau đó (bệnh nhân thực sự cần loại chăm sóc nào, được xác định sau sự việc). Việc lấy mẫu cũng quan trọng: chỉ xem xét một mẫu thuận tiện của các lần tiếp xúc, hoặc chỉ những trường hợp được đánh dấu là bất thường, sẽ không tạo ra một con số có thể khái quát hóa cho hiệu suất tổng thể của công cụ. Các con số độ chính xác nên được báo cáo riêng theo loại triệu chứng hoặc khiếu nại được trình bày khi khối lượng ca bệnh cơ bản cho phép, vì các công cụ phân loại hiếm khi hoạt động đồng đều trên tất cả các bệnh lý.

## Những cạm bẫy

- **Báo cáo một con số độ chính xác tổng hợp duy nhất**: gộp phân loại thấp và phân loại cao thành một con số che giấu việc liệu sai sót của công cụ có nghiêng về chế độ thất bại nguy hiểm hơn hay không; luôn báo cáo riêng.
- **Sử dụng một người đánh giá duy nhất không được che giấu kết quả làm tiêu chuẩn tham chiếu**: điều này có thể âm thầm làm sai lệch con số độ chính xác theo hướng bất kỳ điều gì người đánh giá đó sẽ tự làm, thay vì một tiêu chuẩn lâm sàng độc lập.
- **Chỉ xác nhận trên dữ liệu hồi cứu, thuận tiện**: độ chính xác định hướng trong thế giới thực của công cụ dưới đầu vào bệnh nhân trực tiếp, mơ hồ thường khác biệt đáng kể so với độ chính xác của nó trên một tập xác nhận được tuyển chọn được lắp ráp trong quá trình phát triển.
- **Bỏ qua sự trôi dạt hiệu suất sau khi triển khai**: độ chính xác của một mô hình phân loại AI có thể suy giảm theo thời gian khi dân số bệnh nhân, các triệu chứng được trình bày, hoặc tính sẵn có của lộ trình chăm sóc thay đổi; độ chính xác nên được đo lại định kỳ, không phải xác nhận một lần rồi giả định là ổn định.

## Nguồn

- ONC / HealthIT.gov, hướng dẫn về an toàn và đảm bảo chất lượng của hỗ trợ quyết định lâm sàng và các công cụ được hỗ trợ bởi AI
- Tài liệu được bình duyệt về độ chính xác của công cụ kiểm tra triệu chứng và phân loại AI, ví dụ các nghiên cứu được công bố trên JAMIA, npj Digital Medicine, và BMJ Health & Care Informatics
- NHS England, hướng dẫn về an toàn lâm sàng của các công cụ phân loại kỹ thuật số và tư vấn từ xa (tiêu chuẩn quản lý rủi ro lâm sàng DCB0129/DCB0160)

Xem thêm: [thời gian xử lý chuyển tuyến kỹ thuật số](../digital-referral-turnaround-time/), chỉ số quy trình nằm trực tiếp ở hạ lưu của một quyết định phân loại.
