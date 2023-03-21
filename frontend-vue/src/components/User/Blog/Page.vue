<template>
    <div class="">
        <Header />
        <Banner :bannerName="'categories'" :shopName="'PALDNE'" :menu="'Blog'" />

        <div class="mx-auto my-24 w-9/12">

            <div class="flex">
                <div class="w-full mr-5">
                    <div class="flex justify-between items-center mb-8">
                        <router-link to="/">Home</router-link>
                        <p>Thứ tư, 15/3/2023, 22:14 (GMT+7)</p>
                    </div>
                    <h1 class="font-bold text-6xl mb-5">Nga tìm mảnh vỡ UAV Mỹ ở Biển Đen</h1>
                    <p class="leading-loose text-justify">
                        Nga thông báo sẽ cố thu thập các mảnh vỡ chiếc máy bay không người lái MQ-9 Reaper của Mỹ bị rơi
                        ở
                        Biển
                        Đen.

                        "Tôi không chắc liệu chúng tôi có thu thập thành công các mảnh vỡ của chiếc UAV đó hay không,
                        nhưng
                        công
                        việc đó phải được tiến hành. Chắc chắn chúng tôi sẽ làm và tất nhiên tôi hy vọng làm được", Thư
                        ký
                        Hội
                        đồng An ninh Điện Kremlin Nikolai Patrushev nói với kênh truyền hình Nga Rossiya-1 hôm nay.

                        Biển Đen nằm giữa châu Âu và châu Á, giáp với một số quốc gia, trong đó có Ukraine. Ông
                        Patrushev
                        nói
                        thêm Mỹ liên tục khẳng định họ không tham gia vào các hoạt động quân sự trong xung đột Ukraine,
                        song
                        vụ
                        rơi UAV MQ-9 Reaper là bằng chứng cho thấy Washington đang trực tiếp tham gia các hoạt động này.

                        Thư ký Hội đồng An ninh Nga Nikolai Patrushev tại Moskva hồi tháng 12/2022. Ảnh: Reuters.
                        Thư ký Hội đồng An ninh Nga Nikolai Patrushev tại Moskva hồi tháng 12/2022. Ảnh: Reuters.

                        Người phát ngôn Nhà Trắng John Kirby trước đó nói rằng có thể không bao giờ thu hồi được mảnh vỡ
                        từ
                        chiếc UAV bị rơi, song chính quyền Mỹ đã thực hiện các biện pháp phòng ngừa để đảm bảo hạn chế
                        khả
                        năng
                        Nga có thể thu thập tin tình báo từ chiếc UAV.

                        Mỹ ngày 14/3 cáo buộc hai tiêm kích Su-27 Nga tiếp cận, bay cắt mặt và xả dầu vào UAV MQ-9
                        Reaper
                        trên
                        vùng biển quốc tế, trước khi một chiếc Su-27 va vào cánh quạt UAV và buộc không quân Mỹ điều
                        khiển
                        nó
                        lao xuống biển.

                        Giới chức Nga phủ nhận cáo buộc, cho rằng phi cơ Mỹ cơ động ngoặt gấp và tự rơi sau khi mất lái.
                        Đại
                        sứ
                        Nga tại Mỹ Anatoly Antonov sau đó cáo buộc UAV Mỹ thu thập dữ liệu mục tiêu giúp Ukraine trước
                        khi
                        rơi.

                        UAV MQ-9 Reaper trong cuộc diễn tập hồi tháng 7/2022. Ảnh: Reuters.
                        UAV MQ-9 Reaper trong cuộc diễn tập hồi tháng 7/2022. Ảnh: Reuters.

                        Bộ trưởng Quốc phòng Mỹ Lloyd Austin hôm nay kêu gọi Nga vận hành tiêm kích một cách "an toàn và
                        chuyên
                        nghiệp", thêm rằng vụ UAV Mỹ bị rơi là một phần trong các hành động "gây hấn và kém an toàn" của
                        các
                        phi
                        công Nga trong không phận quốc tế.

                        "Mỹ vẫn bay và hoạt động ở bất cứ nơi nào luật pháp quốc tế cho phép", ông Austin nói.

                        Trong cuộc họp báo hôm nay, người phát ngôn Điện Kremlin Dmitry Peskov cho biết Moskva không có
                        liên
                        hệ
                        cấp cao với Washington về sự việc. Ông nói thêm rằng quan hệ song phương "đang ở mức thấp nhất"
                        nhưng
                        Nga "chưa bao giờ từ chối đối thoại mang tính xây dựng".
                    </p>
                </div>
                <div class="ml-5">
                    <h4 class="underline font-bold text-3xl mb-5">See more</h4>
                    <div class="flex items-center border-b pb-5">
                        <img class="w-1/3 mr-4"
                            src="https://i1-vnexpress.vnecdn.net/2023/03/13/33a34mz-preview-1678700320-7816-1678700941.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=492sSp5C2SNBFqa1kGWPWg"
                            alt="">
                        <p>Nông dân Indonesia cầm mã tấu giữ đất trước cơn sốt niken </p>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from '../Layout/Header.vue';
import Footer from '../Layout/Footer.vue';
import Banner from '../Layout/Banner.vue';

export default {

    name: "PageDetail",
    components: {
        Header,
        Footer,
        Banner,
    },
    data() {
        return {
            pages: [],
        };
    },
}
</script>

<style></style>