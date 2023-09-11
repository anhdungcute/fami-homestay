<template>
  <div class="container-lg mt-3">
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
        <swiper-slide v-for="(item, index) in dataImg" :key="index">
          <img :src="item.img" />
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
</template>
<script>
import { ref } from "vue";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const dataImg = ref([
      {
        img: "https://zhomestay.vn/wp-content/uploads/2023/02/GTD_7230-copy-1199x800.jpg.webp",
      },
      {
        img: "https://zhomestay.vn/wp-content/uploads/2023/02/GTD_7231-copy-534x800.jpg.webp",
      },
      {
        img: "https://zhomestay.vn/wp-content/uploads/2023/02/GTD_7234-copy-1199x800.jpg.webp",
      },
      {
        img: "https://zhomestay.vn/wp-content/uploads/2023/02/GTD_7235-copy-1199x800.jpg.webp",
      },
      {
        img: "https://zhomestay.vn/wp-content/uploads/2023/02/GTD_7243-copy.jpg.webp",
      },
    ]);
    const progressCircle = ref(null);
    const progressContent = ref(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.value.style.setProperty("--progress", 1 - progress);
      progressContent.value.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return {
      dataImg,
      onAutoplayTimeLeft,
      progressCircle,
      progressContent,
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};
</script>
<style lang="scss" scoped>
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
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
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
.slide-detail {
  position: relative;
  height: 500px;
}
@media screen and (max-width: 584px) {
  .slide-detail {
    position: relative;
    height: 300px !important;
  }
}
</style>
