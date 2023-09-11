<template>
  <div class="pt-4">
    <div class="container">
      <div class="row">
        <div class="col-12  entry-content">
          <div>
            <h5 class="uppercase">THÔNG TIN PHÒNG</h5>
          </div>
          <div class="mt-5">
            <h1>
              <em>Kính gửi quý khách hàng Căn hộ dịch vụ Fhomestay!</em>
            </h1>
            <p>
              Căn hộ studio đầy đủ tiện nghi Homestay Hà Nội. Được thiết kế dành
              cho khách hàng có kế hoạch đi du lịch. Hoặc có chuyến công tác tại
              Hà Nội, nơi tuyệt vời cho các cặp đôi, bạn bè, gia đình có con nhỏ
              thư giãn vui chơi cuối tuần. Vinhomes Smart City là sự kết hợp
              giữa không gian sống sang trọng. Khu vực đẳng cấp với đầy đủ tiện
              ích, nơi bạn có thể tận hưởng tối đa.<br />
              Căn hộ dịch vụ cho cặp đôi Zhomestay Homestay Hà Nội rất vinh dự
              chào đón bạn đến với căn hộ nhỏ ấm cúng của chúng tôi. Với diện
              tích trung bình khoảng 38m2. Tọa lạc tại Vinhomes Smart City. Đây
              là những khu phức hợp hiện đại nhất Hà Nội. Nơi này thật tuyệt vời
              cho những người phiêu lưu một mình. Một số cặp đôi, cặp đôi khách
              du lịch và gia đình. Căn hộ có nhà bếp, phòng tắm đầy đủ, Wifi
              miễn phí và các tiện nghi khác.<br />
              Vinhomes Smart City được xây dựng bởi Tập đoàn VinGroup.
            </p>
            <p>
              <em
                ><strong
                  >Vị trí Căn hộ dịch vụ Homestay Hà Nội mất 7-10 phút tới Sân
                  vận động Mỹ Đình, tòa nhà Keang Nam, trung tâm Hội
                  nghị.</strong
                ></em
              ><br />
              Tòa nhà này có khu vực hồ 10,6 ha. Khu vực có hơn 100 tiện nghi.
              Như bể bơi ngoài trời, phòng tập thể dục, nhiều khu vui chơi, BBQ
              ngoài trời, an ninh 24/7, khu vực đỗ xe đặc biệt, cà phê piano,
              Vinmart+, K Market, cửa hàng dược phẩm…..<br />
              Tòa nhà này được bảo vệ bởi an ninh 4 tầng, là một nơi rất an
              toàn.<br />
              Vinhomes Smart City cũng có trung tâm Vincom và một công viên vườn
              Nhật lớn.<br />
              Căn hộ rất gần Aeon Mall.<br />
              Căn hộ có tầm nhìn thoáng, đẹp.
            </p>
            <h2>
              <em>Tiện nghi khách có quyền sử dụng</em>
            </h2>
            <p>
              Bạn sẽ có toàn bộ căn hộ cho riêng mình trong thời gian lưu
              trú.<br />
              Căn hộ riêng tư với đầy đủ tiện nghi. Bao gồm giường cỡ queen,
              phòng tắm riêng, điều hòa không khí, TV internet, Wifi miễn phí,
              tủ lạnh, đồ vệ sinh cá nhân, máy sấy tóc, lược, bàn chải đánh
              răng, xà phòng rửa tay.<br />
              Bạn có thể tận hưởng bể bơi ngoài trời hiện đại, bể bơi trong nhà,
              tập thể dục trong phòng tập thể dục được trang bị đầy đủ tiện
              nghi. Phí cho người không phải là cư dân là 200.000 VND/người/lần.
            </p>
            <p>
              Khách có thể đỗ xe ô tô/xe máy trong căn hộ với mức phí 5.000
              đồng/lượt vào; qua đêm 35.000đ/ lượt; ô tô là 15.000đ/giờ.<br />
              Highlands Coffee, rau tươi, Winmart +. Các cửa hàng trái cây, và
              một nhà thuốc cũng nằm trong khu phức hợp với chưa đầy 5 phút đi
              bộ.
            </p>
            <p>
              Quý khách tham khảo thêm
              <a @click="pushHome">tại đây</a>.
            </p>
          </div>
          <!-- <el-divider />
          <Evaluate />
          <el-divider /> -->
        </div>
        <!-- <div class="col-lg-4 col-md-5 col-12">
          <div class="is-sticky-column__inner " >
            <div class="col-inner">
              <div class="price">
                <b>{{ addCommas(priceRoom) }}đ</b>/đêm
              </div>
              <div class="mt-4">
                <div class="book">
                  <div class="mb-2"><b>Thời gian đặt phòng</b></div>
                  <div>
                    <el-date-picker
                      v-model="dateBook"
                      class="w-100"
                      type="daterange"
                      range-separator="-"
                      start-placeholder="Ngày nhận phòng"
                      end-placeholder="Ngày trả phòng"
                      @change="changeDay"
                    />
                  </div>
                  <div class="mt-4">
                    <span>Số lượng phòng</span>
                    <el-input-number
                      v-model="numRoom"
                      :min="1"
                      :max="10"
                      @change="changeNumRoom"
                    />
                  </div>
                  <div
                    class="mt-4 d-flex justify-content-between"
                    v-if="priceBook"
                  >
                    <div><span> Giá phòng:</span>{{ priceBook }}</div>
                    <div>
                      <el-button size="small" type="primary" @click="cancelBook"
                        >Hủy tùy chọn</el-button
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-center mt-4">
                <el-button type="danger" size="medium" class="w-100"
                  >Đặt phòng</el-button
                >
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { useRoute } from "vue-router";
import { ref, defineComponent } from "vue";
import Evaluate from "../Evaluate/index.vue";
import ListImg from '../ListImg/index.vue'
import axios from 'axios'
export default {
  components: { Evaluate,ListImg },
  setup() {
    const visible = ref(true);
    const priceRoom = ref("555000");
    const router = useRouter();
    const route = useRoute();
    const dateBook = ref([]);
    const priceBook = ref("");
    const numRoom = ref(1);
    getData()
    function getData(){
        axios.get(`http://localhost:3000/api/v1/department/${route.query.id}`)
        .then(res =>{
          console.log('res',res)
        })
    }
    function pushHome() {
      router.push({
        name: "home-first",
      });
    }
    function changeDay(e) {
      if (priceRoom.value && numRoom.value && e) {
        calculate();
      }
    }
    function changeNumRoom() {
      if (dateBook.value.length > 0 && priceRoom.value) {
        calculate();
      }
    }
    function calculate() {
      const start = new Date(dateBook.value[0]);
      const end = new Date(dateBook.value[1]);
      var millisBetween = start.getTime() - end.getTime();
      var days = millisBetween / (1000 * 3600 * 24);
      const price =
        parseInt(priceRoom.value, 10) * (Math.round(Math.abs(days)) + 1);
      priceBook.value = addCommas(price * numRoom.value);
    }
    const addCommas = (value) => {
      const stringFormat = `${value}`;
      const x = stringFormat.split(".");
      let x1 = x[0];
      const x2 = x.length > 1 ? `.${x[1]}` : "";
      const regex = /(\d+)(\d{3})/;
      while (regex.test(x1)) {
        x1 = x1.replace(regex, "$1,$2");
      }
      return x1 + x2;
    };
    function cancelBook() {
      dateBook.value = [];
      numRoom.value = 1;
      priceBook.value = "";
    }
    return {
      visible,
      priceRoom,
      priceBook,
      numRoom,
      dateBook,
      pushHome,
      changeDay,
      addCommas,
      changeNumRoom,
      cancelBook,
    };
  },
};
</script>

<style lang="scss" scope>
.is-sticky-column__inner {
  position: sticky;
  top: 50px;
}
.entry-content {
  h5 {
    font-size: 1em;
  }
  h1 {
    font-size: 1.6em;
    color: #555555;
  }
  h2 {
    font-size: 1.6em;
    color: #555555;
  }
  p {
    color: #818181;
    word-break: break-word;
    em {
      color: #555555;
    }
    a {
      color: #007aff !important;
      text-decoration: none;
      cursor: pointer;
    }
  }
}
.col-inner {
  border: 1px solid rgb(221, 221, 221);
  border-radius: 12px;
  padding: 24px;
  box-shadow: rgb(0 0 0 / 12%) 0px 6px 16px;
}
.book {
  b {
    font-size: 0.9em;
  }
  span {
    font-size: 0.9em;
    padding-right: 10px;
  }
}
</style>
