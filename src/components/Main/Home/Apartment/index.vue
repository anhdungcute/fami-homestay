<template>
  <div>
    <div class="text-center title pt-3" v-for="(i, n) in dataRoom" :key="n">
      <h2
        data-aos="zoom-in"
        data-aos-duration="1000"
        class="hero-text xyz-nested mb-3"
        v-if="i.departments.length > 0"
      >
        <el-divider content-position="left"
          ><div @click="handlePushLocation()">
            {{ i.name }}
          </div></el-divider
        >
      </h2>
      <swiper
        :slidesPerView="isMobile"
        :spaceBetween="30"
        :navigation="true"
        :modules="modules"
        class="mySwiper pt-3"
        v-if="i.departments.length > 0"
      >
        <swiper-slide
          v-for="(item, index) in i.departments"
          :key="index"
          @click="pushRouter(item)"
        >
          <div>
            <div class="content-home-item square" v-if="contentItem">
              <div class="box-image" v-if="item.images">
                <img :src="`http://localhost:3000/${item.images[0]}`" />
              </div>
              <div class="box-text-product">
                <div class="title-wrapper">
                  <p class="m-0">{{ item.name }}</p>
                </div>
                <div class="price-wrapper" v-if="item.price">
                  <span class="amount"
                    >{{ item.price ? item.price : "Liên hệ" }}
                    <u style="font-size: 0.7em; padding-bottom: 2px">đ</u></span
                  >
                  <span class="wceb-price-format">/ {{item.type=='DAY' ? 'Ngày' : item.type=='MONTH' ?'Tháng' :'Năm'}}</span>
                </div>
              </div>
            </div>
          </div></swiper-slide
        >
      </swiper>
      <div class="row"></div>
      <div></div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { ref, defineComponent, onBeforeMount } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css/pagination";
import axios from "axios";
import { Autoplay, EffectCube, Pagination, Navigation } from "swiper";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  mounted() {},
  setup(props) {
    const dataRoom = ref([]);
    const contentItem = ref(false);
    const title = ref(false);
    const isMobile = ref(4);
    const router = useRouter();
    onBeforeMount(() => {
      checkisMobile();
      function checkisMobile() {
        if (screen.width <= 584) {
          return (isMobile.value = 2);
        } else {
          return (isMobile.value = 4);
        }
      }
    });
    created();
    function created() {
      setTimeout(() => {
        title.value = !title.value;
      }, 0);
      setTimeout(() => {
        contentItem.value = !contentItem.value;
      }, 0);
    }
    getListArea();
    function getListArea() {
      axios
        .get(`http://localhost:3000/api/v1/area?page=1&perPage=10`)
        .then((res) => {
          dataRoom.value = res.data.result;
        });
    }
    function pushRouter(val) {
      router.push({
        name: "detail-home",
        query: { id: val._id },
      });
    }
    return {
      dataRoom,
      title,
      contentItem,
      pushRouter,
      isMobile,
      modules: [Autoplay, Navigation],
    };
  },
};
</script>

<style lang="scss" scope>
.el-divider__text {
  font-size: 20px !important;
  color: #3A5134 !important;
}
.title {
  h2 {
    letter-spacing: 0.05em;
    color: #3A5134;
    font-size: 1.6em;
  }
}
.box-image {
  border-radius: 15px;
  position: relative;
  max-height: 287px;
  margin: 0 auto;
  overflow: hidden;
  img {
    width: 100%;
    height: 287px;
    margin: 0 auto;
    cursor: pointer;
  }
}
.box-text-product {
  padding: 10px;
  font-size: 0.8em;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
}
.amount {
  white-space: nowrap;
  color: #3A5134;
  font-weight: bold;
  position: relative;
  margin-right: 5px;
  u {
    font-size: 0.7em;
    padding-bottom: 2px;
    position: absolute;
    top: 2px;
    right: -5px;
  }
}
.wceb-price-format {
  font-weight: 0;
  color: #6c757da6;
}
.title-wrapper {
  p {
    color: #3A5134;
  }
  &:hover {
    p {
      color: #cf9d6c;
    }
  }
}
.swiper-button-next {
  background: #bbc1c157 !important;
}
.swiper-button-next:after,
.swiper-button-prev:after {
  font-size: 30px !important;
  text-transform: none !important;
  letter-spacing: 0;
  font-variant: initial;
  line-height: 1;
  color: #fff !important;
}
.swiper-button-next,
.swiper-button-prev {
  top: 40% !important;
}
</style>
