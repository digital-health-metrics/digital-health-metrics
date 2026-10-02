# Giảm Số Ngày Nằm Giường

Giảm số ngày nằm giường đo lường tổng số ngày giường bệnh viện nội trú được tránh được bằng cách chuyển một đợt chăm sóc xác định — phổ biến nhất là hồi phục sau phẫu thuật hoặc quản lý bệnh cấp tính — từ một kỳ lưu trú nội trú truyền thống sang một giải pháp thay thế được hỗ trợ kỹ thuật số như một bệnh viện ảo hoặc chương trình nhập viện tại nhà. Đây là chỉ số năng lực chính cho các sáng kiến bệnh viện ảo và nhập viện tại nhà, chuyển đổi trực tiếp một thay đổi mô hình chăm sóc lâm sàng thành đơn vị tiền tệ (năng lực giường) mà hoạt động bệnh viện và các nhà hoạch định hệ thống thực sự quản lý.

## Tại sao điều này quan trọng

Năng lực giường nội trú là một trong những nguồn lực bị hạn chế và tốn kém nhất trong bất kỳ hệ thống bệnh viện nào, và đề xuất giá trị trung tâm của một chương trình bệnh viện ảo hoặc nhập viện tại nhà là nó có thể cung cấp một cách an toàn một mức độ chăm sóc lâm sàng xác định mà không chiếm dụng một giường bệnh vật lý, giải phóng năng lực đó cho những bệnh nhân không thể được quản lý theo bất kỳ cách nào khác. Giảm số ngày nằm giường thường chuyển đổi một tuyên bố trừu tượng ("chương trình này cải thiện chăm sóc") thành một con số vận hành cụ thể mà các nhà hoạch định năng lực bệnh viện, đội ngũ tài chính, và các ủy viên có thể hành động trực tiếp: nó có thể được sử dụng để mô hình hóa liệu một khoản đầu tư vào một chương trình giám sát có tự chi trả được trong chi phí giường đã tránh được hay không, và chi trả được bao nhiêu. Vì giảm số ngày nằm giường chỉ có giá trị nếu an toàn bệnh nhân được duy trì, nó nên luôn được báo cáo cùng với, không bao giờ thay thế cho, một chỉ số kết quả an toàn (như tỷ lệ tái nhập viện hoặc tỷ lệ chuyển lên chăm sóc nội trú) cho cùng dân số đó.

## Cách tính

```
Giảm số ngày nằm giường = số ngày giường dự kiến dưới chăm sóc nội
                          trú tiêu chuẩn (dựa trên dữ liệu thời
                          gian lưu trú lịch sử cho một nhóm bệnh
                          nhân phù hợp) − số ngày giường thực tế
                          được sử dụng bởi bệnh nhân trên lộ trình
                          ảo/kỹ thuật số

Báo cáo theo từng lộ trình lâm sàng (ví dụ: hồi phục sau phẫu
thuật, đợt kịch phát hô hấp cấp tính), vì thời gian lưu trú dự
kiến thay đổi rất nhiều tùy theo bệnh lý và một con số gộp trên
các lộ trình không liên quan sẽ không có ý nghĩa.
```

## Ví dụ tính toán

Dữ liệu lịch sử của một bệnh viện cho thấy bệnh nhân hồi phục từ một thủ thuật phẫu thuật tự chọn cụ thể có thời gian lưu trú nội trú trung bình là 4 ngày. Một chương trình bệnh viện ảo đăng ký 150 bệnh nhân hồi phục từ cùng thủ thuật đó, cho xuất viện sau trung bình 1,5 ngày nội trú với phần còn lại của quá trình hồi phục được giám sát từ xa. Mức giảm số ngày nằm giường là (4 − 1,5) × 150 = 375 ngày giường trong khoảng thời gian đo lường. Con số này nên được báo cáo cùng với tỷ lệ chuyển lên chăm sóc nội trú 30 ngày và tỷ lệ tái nhập viện của nhóm bệnh viện ảo cho cùng 150 bệnh nhân đó, vì một khoản tiết kiệm ngày giường đến với cái giá là một tỷ lệ chuyển lên hoặc tái nhập viện cao hơn đáng kể về mặt vật chất không phải là chiến thắng lâm sàng mà con số đầu đề nếu không sẽ gợi ý.

## Nguồn dữ liệu và lưu ý

Số ngày giường dự kiến đòi hỏi một cơ sở lịch sử đáng tin cậy, lý tưởng là từ một nhóm bệnh nhân phù hợp được điều trị dưới chăm sóc nội trú tiêu chuẩn với các đặc điểm lâm sàng tương tự (độ tuổi, bệnh đồng mắc, loại thủ thuật, mức độ nghiêm trọng) với dân số bệnh viện ảo, vì so sánh với một mức trung bình lịch sử không phù hợp có nguy cơ đánh giá quá cao hoặc quá thấp mức giảm thực sự nếu nhóm được quản lý kỹ thuật số có tính hệ thống khỏe mạnh hơn hoặc ốm yếu hơn so với nhóm so sánh lịch sử. Số ngày giường thực tế được sử dụng trên lộ trình kỹ thuật số đến từ chính hệ thống nhập viện-xuất viện-chuyển viện (ADT) của bệnh viện; bất kỳ sự chuyển lên chăm sóc nội trú nào trong thời gian hồi phục được giám sát nên được tính một cách trung thực đối với chương trình (như số ngày giường đã sử dụng, không bị loại trừ), vì việc loại trừ các lần chuyển lên khỏi phép tính sẽ làm tăng một cách giả tạo mức giảm rõ ràng.

## Những cạm bẫy

- **Báo cáo mức giảm số ngày nằm giường mà không có so sánh an toàn phù hợp**: một bệnh viện ảo tiết kiệm được ngày giường nhưng có tỷ lệ chuyển lên hoặc tái nhập viện tệ hơn đáng kể so với chăm sóc tiêu chuẩn chưa chứng minh được một sự cải thiện thực sự; luôn báo cáo cả hai cùng nhau.
- **Sử dụng một cơ sở lịch sử không phù hợp hoặc lỗi thời**: so sánh với một nhóm lịch sử có sự pha trộn ca bệnh, gánh nặng bệnh đồng mắc, hoặc thời đại thực hành lâm sàng khác nhau có thể đánh giá quá cao hoặc quá thấp đáng kể mức tiết kiệm ngày giường thực sự.
- **Loại trừ các lần chuyển lên chăm sóc nội trú khỏi phép tính**: một bệnh nhân được giám sát ảo nhưng sau đó được chuyển lên một giường nội trú giữa chừng quá trình hồi phục nên có số ngày giường đó được tính đối với chương trình, không âm thầm bị loại khỏi phân tích.
- **Gộp các lộ trình có thời gian lưu trú dự kiến rất khác nhau**: gộp mức giảm số ngày nằm giường trên các lộ trình không liên quan về mặt lâm sàng (ví dụ, kết hợp hồi phục sau phẫu thuật và quản lý hô hấp mãn tính) thành một con số làm mờ đi lộ trình cụ thể nào thực sự đang thúc đẩy mức tiết kiệm.

## Nguồn

- NHS England, hướng dẫn chương trình bệnh viện ảo và nhập viện tại nhà và các tiêu chuẩn báo cáo tác động ngày giường
- Tài liệu được bình duyệt về các mô hình nhập viện tại nhà và bệnh viện ảo, ví dụ các nghiên cứu được công bố trên JAMA Internal Medicine và npj Digital Medicine
- Institute for Healthcare Improvement (IHI), hướng dẫn về quản lý năng lực và các mô hình chăm sóc thay thế

Xem thêm: [tỷ lệ tái nhập viện](../hospital-readmission-rate/), chỉ số an toàn nên luôn được báo cáo cùng với bất kỳ tuyên bố giảm số ngày nằm giường nào cho cùng dân số bệnh nhân.
