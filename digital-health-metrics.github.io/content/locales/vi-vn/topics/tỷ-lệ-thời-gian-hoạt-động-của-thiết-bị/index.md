# Tỷ Lệ Thời Gian Hoạt Động Của Thiết Bị

Tỷ lệ thời gian hoạt động của thiết bị đo lường tỷ lệ thời gian giám sát đã lên lịch mà một thiết bị sức khỏe kết nối — một cảm biến giám sát bệnh nhân từ xa, một thiết bị đeo, hoặc một đơn vị khám từ xa tại nhà — thực sự trực tuyến, truyền dữ liệu, và hoạt động chính xác, thay vì ngoại tuyến, bị ngắt kết nối, hoặc trục trặc. Đây là chỉ số hạ tầng nền tảng bên dưới mọi chương trình giám sát từ xa hoặc thiết bị kết nối: một cảnh báo lâm sàng, một xu hướng chỉ số sinh học, hoặc một con số tham gia được tính từ một thiết bị thường xuyên ngoại tuyến chỉ đáng tin cậy bằng với kết nối đằng sau nó.

## Tại sao điều này quan trọng

Toàn bộ đề xuất giá trị lâm sàng của một chương trình giám sát bệnh nhân từ xa phụ thuộc vào việc thu thập dữ liệu liên tục hoặc gần như liên tục; một thiết bị có thời gian hoạt động kém tạo ra những khoảng trống âm thầm trong bức tranh lâm sàng của bệnh nhân có thể bị nhầm lẫn với sự ổn định (không có cảnh báo vì không có dữ liệu, không phải vì không có gì thay đổi) thay vì được xác định chính xác là một thất bại giám sát. Thời gian hoạt động của thiết bị cũng là một chỉ số dẫn đường về chi phí chương trình và trải nghiệm bệnh nhân: một thiết bị thường xuyên mất kết nối tạo ra các cuộc gọi hỗ trợ, sự thất vọng của bệnh nhân, và tiềm năng tiếp cận lâm sàng không cần thiết để kiểm tra liệu một khoảng trống dữ liệu có phản ánh một sự kiện lâm sàng thực sự hay chỉ đơn giản là một lỗi kỹ thuật. Vì các thất bại về thời gian hoạt động của thiết bị thường có thể được quy cho hạ tầng mà tổ chức kiểm soát (một cổng di động được cấu hình kém, vùng phủ sóng Wi-Fi yếu tại nhà bệnh nhân, một đội thiết bị được bảo trì không đầy đủ) thay vì bệnh nhân, chỉ số này hoàn toàn thuộc về đội ngũ nhà cung cấp và vận hành kỹ thuật, không nên bị gộp một cách bừa bãi vào các chỉ số tham gia của bệnh nhân.

## Cách tính

```
Tỷ lệ thời gian hoạt động của thiết bị = thời gian thiết bị trực
                                         tuyến và truyền dữ liệu
                                         hợp lệ / tổng thời gian
                                         giám sát đã lên lịch ×
                                         100

Phân khúc nguyên nhân gốc của thời gian ngừng hoạt động khi dữ
liệu cho phép:
  Lỗi phía thiết bị      (pin, lỗi phần cứng, sự cố firmware)
  Lỗi kết nối            (mất kết nối di động/Wi-Fi/VPN)
  Yếu tố phía bệnh nhân  (thiết bị tắt nguồn, di chuyển ra ngoài
                         phạm vi)

Các tham số kỹ thuật hỗ trợ cần theo dõi cùng với thời gian hoạt
động:
  Mức sử dụng CPU trung bình, sử dụng bộ nhớ, và mức pin mỗi
  thiết bị
  Thời gian trung bình giữa các lỗi kết nối
  Thời gian trung bình để kết nối lại sau khi mất kết nối
```

## Ví dụ tính toán

Một chương trình giám sát tim mạch từ xa triển khai 1.000 thiết bị kết nối, mỗi thiết bị được kỳ vọng truyền liên tục. Trong một tháng 30 ngày (720 giờ giám sát đã lên lịch mỗi thiết bị), toàn bộ đội thiết bị ghi nhận tổng cộng 705.600 giờ trực tuyến thực tế so với 720.000 giờ đã lên lịch, cho một tỷ lệ thời gian hoạt động của thiết bị trên toàn đội là 705.600 / 720.000 × 100 = 98%. Phân tích nguyên nhân gốc của 14.400 giờ ngừng hoạt động cho thấy 60% có thể quy cho các lần mất kết nối di động tập trung tại một khu vực dịch vụ nông thôn cụ thể, 25% cho các thiết bị có pin cũ được đánh dấu để thay thế, và 15% cho bệnh nhân tạm thời tắt nguồn thiết bị của họ. Sự phân tích này chỉ ra hai can thiệp rõ ràng, khác nhau — một giải pháp kết nối cho khu vực bị ảnh hưởng và một chương trình thay thế pin chủ động — mà một con số thời gian hoạt động tổng hợp duy nhất sẽ không phân biệt được.

## Nguồn dữ liệu và lưu ý

Dữ liệu thời gian hoạt động đến từ chính hệ thống quản lý thiết bị và đo từ xa của nhà sản xuất thiết bị hoặc nhà cung cấp nền tảng, ghi lại các sự kiện kết nối và nhịp tim mỗi thiết bị; tổ chức nên xác nhận chính xác những gì nhà cung cấp tính là "trực tuyến" (một thiết bị có thể tự báo cáo là đã kết nối với mạng trong khi không truyền được dữ liệu lâm sàng hợp lệ, điều này nên được tính là thời gian ngừng hoạt động cho mục đích lâm sàng ngay cả khi bảng điều khiển riêng của nhà cung cấp báo cáo nó là đã kết nối). Thời gian hoạt động nên được báo cáo theo nhóm thiết bị hoặc địa lý khi khối lượng cho phép, vì chất lượng kết nối thường tập trung theo địa lý (vùng phủ sóng di động nông thôn, Wi-Fi tòa nhà cũ) thay vì được phân bố đồng đều trên dân số bệnh nhân, và một con số tổng hợp trên toàn đội thiết bị có thể che giấu một vấn đề khu vực nghiêm trọng, có thể giải quyết được.

## Những cạm bẫy

- **Nhầm lẫn kết nối mạng với truyền dữ liệu hợp lệ**: một thiết bị có thể trông "đã kết nối" trên bảng điều khiển của nhà cung cấp trong khi không truyền được dữ liệu lâm sàng có thể sử dụng được; định nghĩa và đo lường thời gian hoạt động dựa trên việc nhận dữ liệu hợp lệ thực tế, không chỉ riêng kết nối mạng thô.
- **Chỉ báo cáo một mức trung bình trên toàn đội thiết bị**: điều này có thể che giấu một vấn đề thời gian ngừng hoạt động nghiêm trọng, đặc thù theo địa lý hoặc nhóm thiết bị mà một mức trung bình có mục tiêu sẽ tiết lộ và có một giải pháp cụ thể, có thể giải quyết được.
- **Không phân biệt nguyên nhân gốc của thời gian ngừng hoạt động**: thời gian ngừng hoạt động phía thiết bị, kết nối, và phía bệnh nhân mỗi loại đều đòi hỏi một can thiệp hoàn toàn khác nhau; một tỷ lệ phần trăm thời gian ngừng hoạt động duy nhất không có phân khúc nguyên nhân gốc không thể được hành động theo.
- **Coi một khoảng trống dữ liệu là sự ổn định lâm sàng theo mặc định**: một luồng dữ liệu bị thiếu từ một thiết bị ngoại tuyến nên kích hoạt một kiểm tra kết nối-kỹ-thuật, không nên âm thầm được diễn giải là "không có tin tức là tin tốt" đối với tình trạng lâm sàng của bệnh nhân.

## Nguồn

- Continua Design Guidelines / Personal Connected Health Alliance, các tiêu chuẩn khả năng tương tác kỹ thuật cho các thiết bị sức khỏe kết nối
- ONC / HealthIT.gov, hướng dẫn về triển khai chương trình giám sát bệnh nhân từ xa và các yêu cầu kỹ thuật
- Tài liệu được bình duyệt về độ tin cậy của thiết bị giám sát bệnh nhân từ xa và tính đầy đủ của dữ liệu, ví dụ các nghiên cứu được công bố trên npj Digital Medicine

Xem thêm: [độ chính xác định hướng phân loại](../độ-chính-xác-định-hướng-phân-loại/), vì nó phụ thuộc vào việc nhận dữ liệu thiết bị đầy đủ, đáng tin cậy để đưa ra một quyết định phân loại chính xác ngay từ đầu.
