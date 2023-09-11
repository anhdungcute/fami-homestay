<template>
  <div>
    <!-- <div class="about-us">
      <div>
        <img src="../../../assets/aboutus.jpg" />
      </div>
      <div class="text-about-us" data-aos="zoom-in-up">
        <h1>Giới thiệu về  Fami HomeStay</h1>
      </div>
    </div> -->
    <div class="text-about-us">
      <h1>Giới thiệu về Fami HomeStay</h1>
    </div>
    <div class="about-us-content">
      <div class="row">
        <div
          class="col-lg-6 col-md-12 elementor"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-mirror="false"
          data-aos-once="true"
          data-aos-duration="1000"
        >
          <div class="welcome">
            <h2>Chào mừng đến Fami homeStay</h2>
          </div>
          <div class="mb-4">
            <b>Fami HomeStay có vị trí đặc địa , hòa mình vào thiên nhiên.</b>
          </div>
          <div>
            <p>
              Thoát khỏi sự hối hả và rắc rối của cuộc sống hàng ngày và đến với
              FHomestay, nơi một thế giới thanh bình đang chờ đón bạn. Hãy vứt
              bỏ mọi lo lắng của bạn và hòa mình vào bầu không khí thư thái,
              tuyệt đẹp và được nuông chiều và trẻ hóa..
            </p>
          </div>
          <div class="elementor-icon row mt-5">
            <div class="elementor-icon-box col-2">
              <i class="fa-regular fa-star"></i>
            </div>
            <div class="elementor-icon-box-content col-10">
              Mức độ hài của của khách hàng luôn được đánh giá cao
            </div>
          </div>
          <div class="elementor-icon row mt-5">
            <div class="elementor-icon-box col-2">
              <i class="fa-solid fa-house"></i>
            </div>
            <div class="elementor-icon-box-content col-10">
              Nơi đem đến sự bình yên như ngôi nhà thứ hai của bạn
            </div>
          </div>
        </div>
        <div
          class="col-lg-6 col-md-12"
          data-aos="fade-l"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-mirror="false"
          data-aos-once="true"
          data-aos-duration="1000"
        >
          <img
            src="https://demo2.themelexus.com/amihomestay/wp-content/uploads/2019/08/aboutus01.jpg "
          />
        </div>
      </div>
      <div class="about-us-section">
        <div
          class="about-us-section-title"
          data-aos="fade-down"
          data-aos-once="true"
        >
          <h1>Vì sao nên chọn chúng tôi?</h1>
          <div>
            <p>Lý do hàng đầu để chọn homestay của chúng tôi</p>
          </div>
        </div>
        <div class="about-us-section-content">
          <div class="row">
            <div
              class="col-lg-4 col-md-12"
              data-aos="fade-down-right"
              data-aos-once="true"
              data-aos-duration="2000"
            >
              <div class="elementor-widget-container">
                <div class="elemetor-widget-img">
                  <img src="../../../assets/i1.jpg" />
                </div>
                <h5>Sống giữa thiên nhiên</h5>
                <p>
                  Hãy cảm nhận và trải nghiệm thiên nhiên trong vẻ huy hoàng
                  nhất của nó để làm mới bản thân.
                </p>
              </div>
            </div>
            <div
              class="col-lg-4 col-md-12"
              data-aos="flip-up"
              data-aos-once="true"
              data-aos-duration="2000"
            >
              <div class="elementor-widget-container">
                <div class="elemetor-widget-img">
                  <img src="../../../assets/i2.jpg" />
                </div>
                <h5>Đầy đủ tiện nghi</h5>
                <p>
                  Netflix,cafe, nước và trà,tủ quần áo, phòng tắm khép kín, điều
                  hòa, wifi, bếp nồi, bát đũa, ấm siêu tốc, nước nóng lạnh, dầu
                  gội sữa tắm, nước rửa tay…
                </p>
              </div>
            </div>
            <div
              class="col-lg-4 col-md-12"
              data-aos="fade-down-left"
              data-aos-once="true"
              data-aos-duration="2000"
            >
              <div class="elementor-widget-container">
                <div class="elemetor-widget-img">
                  <img src="../../../assets/i3.jpg" />
                </div>
                <h5>Gia đình thân thiện</h5>
                <p>
                  Môi trường yên tĩnh và thoải mái sẽ làm cho gia đình bạn cảm
                  thấy như ở nhà.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        align="center"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="2000"
      >
        <el-button size="large" color="#3a5134" @click="handlePush"
          ><span style="font-size: 1.2rem; color: #fff"
            >Đặt phòng ngay bây giờ</span
          ></el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { useRoute } from "vue-router";
import { ref, defineComponent, onBeforeMount, watch } from "vue";
export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const id = ref(route.query.id);
    checkRoute();
    function checkRoute() {
      console.log("route", route.query);
    }
    watch(
      () => route.query.id,
      (id) => {
        console.log(`đã thyta dsa`);
      }
    );
    function handlePush(i) {
      if (i) {
        router.push({
          name: "home-first",
        });
      }
    }
    return { handlePush };
  },
};
</script>

<style lang="scss" scope>
// .about-us {
//   position: relative;
//   img {
//     width: 100%;
//     height: 500px;
//   }
// }
.text-about-us {
  padding-top: 40px;
  text-align: center;
  h1 {
    font-size: 2.5rem;
    color: #3a5134;
    text-transform: uppercase;
  }
}
.about-us-content {
  padding: 50px 30px;
  img {
    width: 100%;
  }
  .about-us-section {
    padding: 100px 20px 0 20px;
    .about-us-section-title {
      color: #3a5134;
      text-align: center;
      h1 {
        font-family: cursive;
      }
      p {
        color: #cf9d6c;
        text-transform: capitalize;
        font-size: 1.1rem;
      }
    }
    .about-us-section-content {
      padding-top: 50px;
      .elementor-widget-container {
        margin: 0 0 30px;
        padding: 0 50px 30px;
        color: #3a5134;
        text-align: center;
        .elemetor-widget-img {
          padding-bottom: 20px;
        }
        img {
          width: 100px;
          height: 95px;
        }
        h5 {
          font-weight: 700;
          text-transform: uppercase;
        }
        p {
          margin: 0;
          padding-top: 30px;
          color: #6b6460;
          font-size: 1.1rem;
        }
        &:hover {
          h5 {
            color: #cf9d6c;
          }
        }
      }
    }
  }
}
.elementor {
  padding: 0 100px 20px 20px;
  color: #3a5134;
  h2 {
    text-transform: uppercase;
    font-size: 2rem;
  }
  b {
    font-size: 1.2rem;
  }
  p {
    color: #6b6460;
    font-size: 1.2rem;
    line-height: 30px;
  }
  .welcome {
    margin: 40px 0;
  }
}
.elementor-icon {
  .elementor-icon-box {
    display: flex;
    align-items: center;
    i {
      font-size: 3.5rem;
    }
  }
  .elementor-icon-box-content {
    display: flex;
    align-items: center;
    color: #3a5134;
    font-family: cursive !important;
    font-size: 0.95rem;
    font-weight: 700;
  }
  &:hover {
    i {
      color: #cf9d6c;
    }
  }
}
@media screen and (max-width: 750px) {
  .text-about-us {
    h1 {
      font-size: 1.7rem !important;
    }
  }
}
@media screen and (max-width: 560px) {
  .about-us {
    img {
      height: 300px !important;
    }
  }
  .about-us-content {
    padding: 60px 30px;
  }
  .text-about-us {
    h1 {
      font-size: 1.5rem !important;
    }
  }
}
</style>
