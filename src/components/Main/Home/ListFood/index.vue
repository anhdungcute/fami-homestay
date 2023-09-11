<template>
  <div id="menu-list">
    <div class="fill section-bg bg-loaded bg-fill"></div>
    <div class="position-relative">
      <div
        data-aos="fade-left"
        data-aos-duration="1000"
        class="title-list-menu text-center"
      >
        <h2>MENU FAMI HOMESTAY</h2>
      </div>
      <div class="container-lg mt-3">
        <div class="row">
          <div
            data-aos="zoom-out-up"
            data-aos-duration="1000"
            class="col-12 col-sm-4 col-md-4 col-lg-4"
            v-for="(item, index) in dataMenu"
            :key="index"
          >
            <div class="inner box-shadow">
              <div class="slider-wrapper">
                <swiper
                  :effect="'cube'"
                  :grabCursor="true"
                  :autoplay="{
                    delay: 2500,
                    disableOnInteraction: false,
                  }"
                  :rewind="true"
                  :cubeEffect="{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                  }"
                  :pagination="true"
                  :modules="modules"
                  class="mySwiper"
                >
                  <swiper-slide v-for="(i, k) in item.img" :key="k"
                    ><img style="width: 100%; max-height: 270px" :src="i"
                  /></swiper-slide>
                </swiper>
              </div>
              <div class="text-menu text-center mt-2">
                <p>
                  <em>
                    {{ item.title }}
                  </em>
                </p>
              </div>
              <div class="text-center mb-3">
                <div class="bt-contact">
                  <span>Liên hệ ngay : 0973361293</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, EffectCube, Pagination, Navigation } from "swiper";
import { ref, defineComponent } from "vue";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const dataMenu = ref([
      {
        title: "Set Đồ Ăn Sáng đầy đủ dinh dưỡng; Phục vụ tận phòng",
        img: [
          "https://zhomestay.vn/wp-content/uploads/2022/12/6-1067x800.jpg",
          "https://zhomestay.vn/wp-content/uploads/2022/12/01d99a5776a1affff6b0-1067x800.jpg",
          "https://zhomestay.vn/wp-content/uploads/2022/12/1280x960-4-1067x800.jpg",
          "https://zhomestay.vn/wp-content/uploads/2022/12/1280x960-5-1067x800.jpg",
        ],
      },
      {
        title: "Set dành cho cặp đôi, sinh nhật, hẹn hò lãng mạn, cầu hôn",
        img: [
          "https://zhomestay.vn/wp-content/uploads/2022/12/1280x960-4-1067x800.jpg",
          "https://zhomestay.vn/wp-content/uploads/2022/12/1280x960-5-1067x800.jpg",
          "https://zhomestay.vn/wp-content/uploads/2022/12/6-1067x800.jpg",
          "https://zhomestay.vn/wp-content/uploads/2022/12/01d99a5776a1affff6b0-1067x800.jpg",
        ],
      },
      {
        title: "Set đồ nướng, barbecue hoặc Set nguyên liệu tự nấu",
        img: [
          "https://zhomestay.vn/wp-content/uploads/2022/12/3a2f09dbb7b86ee637a9-1067x800.jpg",
          "https://zhomestay.vn/wp-content/uploads/2022/12/3a2f09dbb7b86ee637a9-1067x800.jpg",
          "https://zhomestay.vn/wp-content/uploads/2022/12/6-1067x800.jpg",
          "https://zhomestay.vn/wp-content/uploads/2022/12/01d99a5776a1affff6b0-1067x800.jpg",
        ],
      },
    ]);

    return {
      dataMenu,
      modules: [Autoplay, EffectCube, Pagination],
    };
  },
};
</script>

<style lang="scss" scope>
#menu-list {
  position: relative;
  padding: 30px 0 70px 0;
}
.swiper-cube-shadow {
  display: none !important;
}
.title-list-menu {
  h2 {
    letter-spacing: 0.05em;
    color: #555;
    font-size: 1.6em;
  }
}
.section-bg {
  background-image: url(https://zhomestay.vn/wp-content/uploads/2020/02/bg_price_room.png);
}
.bg-loaded {
  opacity: 1;
}
.bg-fill {
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-position: 50% 50%;
}
.fill {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  right: 0;
  bottom: 0;
  padding: 0 !important;
  margin: 0 !important;
}
.inner {
  padding: 20px 20px 20px 20px;
}
.box-shadow {
  webkit-box-shadow: 0px 30px 40px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 30px 40px 0px rgba(0, 0, 0, 0.2);
}
.text-menu {
  color: #7a9c59;
  em {
    font-style: italic;
    font-size: 1.1em;
    font-weight: 600;
  }
}
.bt-contact {
  width: 70%;
  margin: 0 auto;
  padding: 10px 10px;
  background-color: #f24c5b;
  color: #fff;
  border-radius: 10px;
  cursor: pointer;
  span {
    font-size: 0.9em;
    font-weight: 600;
  }
}
</style>
