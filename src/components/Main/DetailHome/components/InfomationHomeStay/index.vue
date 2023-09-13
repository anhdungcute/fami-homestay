<template>
  <div class="pt-4">
    <div class="container">
      <div class="text-tt">
        <h2>THÔNG TIN PHÒNG</h2>
      </div>
      <div v-if="!isMobile && detailRooom.images">
        <Img :data="detailRooom.images" />
      </div>
      <div v-if="isMobile">
        <div class="container-lg mt-3" v-if="detailRooom.images">
          <div class="slide-detail">
            <swiper
              :spaceBetween="30"
              :centeredSlides="false"
              :autoplay="{
                delay: 2500,
                disableOnInteraction: false,
              }"
              :navigation="true"
              :modules="modules"
              class="mySwiper"
            >
              <swiper-slide
                v-for="(item, index) in detailRooom.images"
                :key="index"
              >
                <img :src="`http://localhost:3000/${item}`" />
              </swiper-slide>
              <template #container-end>
                <div class="autoplay-progress">
                  <svg viewBox="0 0 48 48" ref="progressCircle">
                    <circle cx="24" cy="24" r="20"></circle>
                  </svg>
                  <span ref="progressContent"></span>
                </div>
              </template>
            </swiper>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8 col-md-8 col-12 entry-content">
          <div class="mt-5">
            <h1 class="mb-3">
              <em>Kính gửi quý khách hàng về dịch vụ {{ detailRooom.name }}</em>
            </h1>
            <p>
              {{ detailRooom.introduce }}
            </p>
            <div v-if="detailRooom.description">
              <h5>Mô tả về {{ detailRooom.name }}</h5>
              <p>{{ detailRooom.description }}</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-5 col-12">
          <div class="mt-5">
            <div class="col-inner">
              <div class="price" v-if="detailRooom.type">
                <b>Giá của {{ detailRooom.name }} : {{ format(detailRooom.price) }}đ</b
                >/
                {{
                  detailRooom.type == "DAY"
                    ? "Ngày"
                    : item.type == "MONTH"
                    ? "Tháng"
                    : "Năm"
                }}
              </div>
              <div class="mt-4 text-center">
                <a href="https://zalo.me/0979.533.786">
                  <el-button size="large" color="#3a5134"
                    ><span style="font-size: 1rem; color: #fff"
                      >Đặt phòng ngay bây giờ</span
                    ></el-button
                  ></a
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="book-room mt-5"></div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { useRoute } from "vue-router";
import { ref, onBeforeMount } from "vue";
import Evaluate from "../Evaluate/index.vue";
import BaseRuequest from "../../../../../core/BaseRequest.js";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import Img from "../ListImg/index.vue";
export default {
  components: { Evaluate, Swiper, SwiperSlide, Img },
  setup() {
    const visible = ref(true);
    const isMobile = ref(false);
    const priceRoom = ref("555000");
    const router = useRouter();
    const route = useRoute();
    const dateBook = ref([]);
    const priceBook = ref("");
    const numRoom = ref(1);
    const detailRooom = ref({});
    onBeforeMount(() => {
      checkisMobile();
      function checkisMobile() {
        if (screen.width <= 767) {
          return (isMobile.value = true);
        } else {
          return (isMobile.value = false);
        }
      }
    });
    getData();
    function getData() {
      BaseRuequest.get(`department/${route.query.id}`).then((res) => {
        detailRooom.value = res.data;
      });
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
    const progressCircle = ref(null);
    const progressContent = ref(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.value.style.setProperty("--progress", 1 - progress);
      progressContent.value.textContent = `${Math.ceil(time / 1000)}s`;
    };
    const format = (num) => {
      const n = String(num),
        p = n.indexOf(".");
      return n.replace(/\d(?=(?:\d{3})+(?:\.|$))/g, (m, i) =>
        p < 0 || i < p ? `${m},` : m
      );
    };
    return {
      visible,
      isMobile,
      priceRoom,
      priceBook,
      numRoom,
      dateBook,
      detailRooom,
      pushHome,
      changeDay,
      addCommas,
      changeNumRoom,
      cancelBook,
      onAutoplayTimeLeft,
      format,
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};
</script>

<style lang="scss" scope>
.text-tt {
  text-align: center;
  padding-top: 40px;
  color: #3a5134;
}
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
  h5 {
    text-align: center;
    color: #cf9d6c;
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
.book-room {
  text-align: center;
}
// css slider
.slide-detail {
  position: relative;
  height: 350px;
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 10px;
    }
  }

  .autoplay-progress {
    position: absolute;
    right: 16px;
    bottom: 16px;
    z-index: 10;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: #fff;
  }

  .autoplay-progress svg {
    --progress: 0;
    position: absolute;
    left: 0;
    top: 0px;
    z-index: 10;
    width: 100%;
    height: 100%;
    stroke-width: 4px;
    stroke: var(--swiper-theme-color);
    fill: none;
    stroke-dashoffset: calc(125.6 * (1 - var(--progress)));
    stroke-dasharray: 125.6;
    transform: rotate(-90deg);
  }
}
@media screen and (max-width: 584px) {
  .slide-detail {
    position: relative;
    height: 300px !important;
  }
}
</style>
