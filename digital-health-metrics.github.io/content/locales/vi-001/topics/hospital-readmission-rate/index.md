# Tỷ Lệ Tái Nhập Viện

Tỷ lệ tái nhập viện là tỷ lệ bệnh nhân đã xuất viện được tái nhập viện một cách không có kế hoạch trong một khoảng thời gian xác định sau khi xuất viện — phổ biến nhất là 30 ngày. Đối với sức khỏe kỹ thuật số, đây là chỉ số gắn kết trực tiếp nhất với kinh tế của người chi trả và các hợp đồng chăm sóc dựa trên giá trị: một chương trình giám sát từ xa, theo dõi sau xuất viện, hoặc chuyển tiếp chăm sóc kỹ thuật số không thể cho thấy một hiệu quả đáng tin cậy đối với việc tái nhập viện sẽ khó có khả năng nhận được sự hỗ trợ hoàn trả liên tục, bất kể các con số tham gia của nó trông tốt đến đâu.

## Tại sao điều này quan trọng

Một lần tái nhập viện không có kế hoạch tốn kém, gây gián đoạn cho bệnh nhân, và ở nhiều hệ thống y tế hiện nay bị phạt trực tiếp: các chương trình như Hospital Readmissions Reduction Program của Hoa Kỳ giảm thanh toán cho các bệnh viện có tỷ lệ tái nhập viện cao hơn dự kiến đối với các bệnh lý cụ thể, đó là lý do tại sao các bệnh viện tích cực ủy quyền các chương trình sau xuất viện kỹ thuật số và giám sát từ xa nhằm giảm chúng. Một tỷ lệ đáng kể các lần tái nhập viện được coi là có khả năng phòng ngừa được — được thúc đẩy bởi hướng dẫn xuất viện không đầy đủ, các cuộc hẹn theo dõi bị bỏ lỡ, hiểu lầm về thuốc, hoặc sự xấu đi của triệu chứng không được giải quyết mà một điểm tiếp xúc kỹ thuật số được thiết kế tốt có thể phát hiện sớm hơn — đây chính xác là khoảng cách mà các công cụ chăm sóc chuyển tiếp kỹ thuật số nhắm đến. Tỷ lệ tái nhập viện nên luôn được đọc cùng với sự pha trộn ca bệnh: một chương trình phục vụ một dân số bệnh nặng hơn, phức tạp hơn sẽ có một tỷ lệ cơ sở cao hơn về mặt cấu trúc so với một chương trình phục vụ một dân số khỏe mạnh hơn, độc lập với chất lượng chương trình.

## Cách tính

```
Tỷ lệ tái nhập viện 30 ngày = số lần tái nhập viện không có kế
                              hoạch trong vòng 30 ngày kể từ khi
                              xuất viện / tổng số lần xuất viện
                              chỉ số × 100

Loại trừ khỏi tử số: các lần tái nhập viện có kế hoạch (ví dụ: một
thủ thuật theo dõi đã được lên lịch), và các lần chuyển viện là sự
tiếp nối của cùng một đợt chăm sóc thay vì một lần nhập viện mới.

Điều chỉnh rủi ro khi có thể, sử dụng một chỉ số pha trộn ca bệnh
hoặc bệnh đồng mắc được chấp nhận, trước khi so sánh tỷ lệ giữa
các dân số bệnh nhân hoặc khoảng thời gian khác nhau.
```

## Ví dụ tính toán

Một bệnh viện cho xuất viện 1.200 bệnh nhân suy tim trong một quý. Trong số này, 210 người được tái nhập viện trong vòng 30 ngày, trong đó 15 người là tái nhập viện có kế hoạch cho một thủ thuật đã được lên lịch và bị loại trừ. Tỷ lệ tái nhập viện 30 ngày không có kế hoạch là (210 − 15) / 1.200 × 100 = 16,25%. Một chương trình giám sát từ xa được giới thiệu cho một nhóm con gồm 400 bệnh nhân trong số này (được chọn dựa trên rủi ro lâm sàng, không phải ngẫu nhiên), và tỷ lệ tái nhập viện không có kế hoạch của họ là 14%, so với 18% đối với 800 bệnh nhân không đăng ký. Vì việc đăng ký dựa trên rủi ro lâm sàng thay vì phân công ngẫu nhiên, sự khác biệt này chỉ mang tính gợi ý chứ không phải bằng chứng kết luận về hiệu quả của chương trình, và nên được diễn giải cùng với một phân tích điều chỉnh rủi ro thay vì được chấp nhận theo nghĩa đen.

## Nguồn dữ liệu và lưu ý

Dữ liệu tái nhập viện thường được lấy từ luồng dữ liệu nhập viện-xuất viện-chuyển viện (ADT) của chính bệnh viện đối với các lần tái nhập viện vào cùng một cơ sở, nhưng một bệnh nhân được tái nhập viện vào một bệnh viện khác sẽ hoàn toàn không xuất hiện trong luồng dữ liệu đó, vì vậy việc theo dõi tái nhập viện ở một bệnh viện duy nhất sẽ đánh giá thấp một cách có hệ thống tỷ lệ tái nhập viện thực sự trừ khi được bổ sung bằng dữ liệu trao đổi thông tin y tế khu vực, dữ liệu yêu cầu bồi thường của người chi trả, hoặc cơ sở dữ liệu tất cả người chi trả cấp tiểu bang. Việc quy kết cho một chương trình kỹ thuật số đòi hỏi sự cẩn trọng: những bệnh nhân tự nguyện tham gia một chương trình giám sát từ xa hiếm khi là một mẫu ngẫu nhiên của dân số đã xuất viện, vì vậy một so sánh ngây thơ giữa tỷ lệ tái nhập viện của người đăng ký và người không đăng ký sẽ có xu hướng bị nhiễu bởi chính các hiệu ứng lựa chọn đã khiến một số bệnh nhân có khả năng đăng ký cao hơn ngay từ đầu.

## Những cạm bẫy

- **So sánh tỷ lệ thô, chưa điều chỉnh rủi ro giữa các dân số**: một chương trình phục vụ một dân số bệnh nặng hơn sẽ hiển thị một tỷ lệ tái nhập viện thô cao hơn so với một chương trình phục vụ một dân số khỏe mạnh hơn ngay cả khi bản thân chương trình đó hiệu quả hơn; luôn điều chỉnh rủi ro trước khi so sánh.
- **Đánh giá thấp các lần tái nhập viện vào các cơ sở khác**: chỉ dựa vào dữ liệu ADT của một bệnh viện duy nhất sẽ bỏ lỡ các lần tái nhập viện ở nơi khác, đánh giá thấp tỷ lệ thực sự, đặc biệt ở những khu vực có nhiều hệ thống bệnh viện cạnh tranh.
- **Thiên lệch lựa chọn trong việc đăng ký chương trình tự nguyện**: những bệnh nhân chọn đăng ký vào một chương trình theo dõi kỹ thuật số thường khác biệt một cách có hệ thống (về hiểu biết sức khỏe, hỗ trợ xã hội, hoặc động lực) so với những người không đăng ký, gây nhiễu cho bất kỳ so sánh trước/sau hoặc đã đăng ký/chưa đăng ký ngây thơ nào.
- **Tính mọi lần trở lại cùng một cơ sở là tái nhập viện**: một lần tái nhập viện đã được lên lịch, có kế hoạch (ví dụ: một thủ thuật giai đoạn hai đã được lên kế hoạch) không phải là tín hiệu của một lần xuất viện thất bại và nên được loại trừ khỏi tử số, không được trộn lẫn với những lần trở lại thực sự không có kế hoạch.

## Nguồn

- Centers for Medicare & Medicaid Services (CMS), đặc tả thước đo Hospital Readmissions Reduction Program và Hospital-Wide Readmission
- Institute for Healthcare Improvement (IHI), hướng dẫn về giảm thiểu các lần tái nhập viện có thể tránh được
- Tài liệu được bình duyệt về các can thiệp giám sát từ xa kỹ thuật số và chăm sóc chuyển tiếp để giảm tái nhập viện, ví dụ các nghiên cứu được công bố trên JAMA Network Open và npj Digital Medicine

Xem thêm: [độ chính xác định hướng phân loại](../triage-routing-accuracy/), vì việc định hướng ban đầu không phù hợp tự nó có thể là một yếu tố thúc đẩy hạ lưu của các lần nhập viện có thể tránh được.
