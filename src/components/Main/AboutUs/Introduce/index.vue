<template>
  <div>
    <div
      class="text-about-us"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-once="true"
    >
      <h2>Giới thiệu về {{ dataRoom.name }}</h2>
    </div>
    <div class="container">
      <!-- Giới thiệu -->
      <div class="about-us-content mt-5">
        <div class="row">
          <div
            class="col-lg-6 col-md-6 col-12 p-0 element"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-mirror="false"
            data-aos-once="true"
            data-aos-duration="1000"
          >
            <div class="welcome">
              <h2>
                Chào mừng đến
                {{ dataRoom.name }}
              </h2>
            </div>
            <div>
              <p>
                {{ dataRoom.description }}
              </p>
            </div>
          </div>
          <div
            class="col-lg-6 col-md-6 col-12"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-mirror="false"
            data-aos-once="true"
            data-aos-duration="1000"
          >
            <div class="row">
              <div class="col-lg-6 col-md-6 col-12 py-3">
                <div>
                  <div class="row">
                    <div
                      class="col-4 d-flex align-items-center justify-content-center"
                    >
                      <div class="icon-ab-us">
                        <i class="fa-solid fa-bed"></i>
                      </div>
                    </div>
                    <div class="col-8 text-ab-us">
                      <b>Phòng đẩy đủ tiện nghi</b>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-12 py-3">
                <div>
                  <div class="row">
                    <div
                      class="col-4 d-flex align-items-center justify-content-center"
                    >
                      <div class="icon-ab-us">
                        <i class="fa-solid fa-money-bill"></i>
                      </div>
                    </div>
                    <div class="col-8 text-ab-us">
                      <b>Dịch vụ thân thiện và giá cả hợp lý</b>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-12 py-3">
                <div>
                  <div class="row">
                    <div
                      class="col-4 d-flex align-items-center justify-content-center"
                    >
                      <div class="icon-ab-us">
                        <i class="fa-solid fa-shield"></i>
                      </div>
                    </div>
                    <div class="col-8 text-ab-us">
                      <b>Anh ninh 24/7</b>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-12 py-3">
                <div>
                  <div class="row">
                    <div
                      class="col-4 d-flex align-items-center justify-content-center"
                    >
                      <div class="icon-ab-us">
                        <i class="fa-solid fa-square-parking"></i>
                      </div>
                    </div>
                    <div class="col-8 text-ab-us">
                      <b>Thuận tiện đi lại</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Tiện ích -->
      <div>
        <div
          class="utilities"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <div>
            <h4>Tiện ích tốt nhất , giá tốt nhất</h4>
          </div>
          <div>
            <h6>
              Những gì chúng tôi cung cấp tại
              {{ dataRoom.name }}
            </h6>
          </div>
          <div class="row"></div>
        </div>
        <div class="mt-5">
          <div class="row">
            <div
              class="col-lg-6 col-md-6 col-12 view"
              data-aos="zoom-in-right"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <img style="width: 100%" src="../../../../assets/aboutus.jpg" />
            </div>
            <div class="col-lg-6 col-md-6 col-12">
              <div
                v-for="(item, index) in dataRoom.utilities"
                :key="index"
                class="text-tt"
              >
                - {{ item }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- list phòng -->
      <div class="py-5">
        <div class="text-option py-5">
          Danh sách phòng tại
          {{
            route.name == "about-us-homestay"
              ? "Homestay Ocean park"
              : "Chung cư mini"
          }}
        </div>
        <div class="row">
          <div
            class="col-lg-4 col-md-4 col-sm-6 col-6"
            v-for="(i, n) in dataRoom.departments"
            :key="n"
          >
            <div>
              <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-once="true"
                class="hero-text xyz-nested"
              >
                <div class="box-image" v-if="i.images">
                  <img :src="`http://localhost:3000/${i.images[0]}`" />
                </div>
                <div class="box-text-product">
                  <div class="title-wrapper">
                    <p class="m-0">{{ i.name }}</p>
                  </div>
                  <div class="price-wrapper">
                    <span class="amount"
                      >{{ i.price ? i.price : "Liên hệ" }}
                      <u style="font-size: 0.7em; padding-bottom: 2px"
                        >đ</u
                      ></span
                    >
                    <span class="wceb-price-format"
                      >/
                      {{
                        i.type == "DAY"
                          ? "Ngày"
                          : i.type == "MONTH"
                          ? "Tháng"
                          : "Năm"
                      }}</span
                    >
                  </div>
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
import { ref, defineComponent, onBeforeMount, watch } from "vue";
import { useRouter } from "vue-router";
import { useRoute } from "vue-router";
import axios from "axios";
export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const id = ref(route.query.id);
    const list = ref(["wiffi", "đồ ăn", "nước uônhs"]);
    const dataRoom = ref([]);
    const contentItem = ref(false);
    checkRoute();
    function checkRoute() {
      axios
        .get(`http://localhost:3000/api/v1/area/${route.query.id}`)
        .then((res) => {
          if (res) {
            console.log("res", res);
            dataRoom.value = res.data;
          }
        });
    }
    watch(
      () => route.query.id,
      (id) => {
        axios.get(`http://localhost:3000/api/v1/area/${id}`).then((res) => {
          if (res) {
            dataRoom.value = res.data;
          }
        });
      }
    );

    function handlePush(i) {
      "checklk";
      if (i) {
        router.push({
          name: "home-first",
        });
      }
    }
    return { handlePush, route, dataRoom, contentItem, list };
  },
};
</script>

<style lang="scss" scope>
.text-about-us {
  padding-top: 40px;
  text-align: center;
  color: #3a5134;
}
.about-us-content {
  padding: 30px 30px;
  img {
    width: 100%;
  }
  .about-us-section {
    padding: 100px 20px 0 20px;
    .about-us-section-title {
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
      .element-widget-container {
        margin: 0 0 30px;
        padding: 0 50px 30px;
        // border-style: solid;
        // border-width: 0 1px 0 0;
        // border-color: #e5e5e5;
        text-align: center;
        .elemetor-widget-img {
          padding-bottom: 20px;
        }
        img {
          width: 100px;
          height: 95px;
        }
        h6 {
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
          h6 {
            color: #cf9d6c;
          }
        }
      }
    }
  }
}
.view {
  img {
    max-height: 350px;
  }
}
.element {
  padding: 0 100px 20px 20px;
  h2 {
    text-transform: uppercase;
    font-size: 1.3rem;
    color: #cf9d6c;
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
    margin: 0px 0 20px 0;
  }
}
.element-icon {
  .element-icon-box {
    display: flex;
    align-items: center;
    i {
      font-size: 3.5rem;
    }
  }
  .element-icon-box-content {
    display: flex;
    align-items: center;
    color: #000;
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
.box-image {
  border-radius: 15px;
  position: relative;
  max-height: 287px;
  margin: 0 auto;
  overflow: hidden;
  img {
    max-width: 100%;
    width: 100%;
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
.title-wrapper {
  p {
    color: #3a5134;
  }
  &:hover {
    p {
      color: #cf9d6c;
    }
  }
}
.utilities {
  text-align: center;
  h4 {
    text-transform: uppercase;
  }
  h6 {
    color: #cf9d6c;
  }
}
.text-tt {
  font-size: 17px;
}
.text-option {
  text-transform: uppercase;
  font-size: 20px;
  text-align: center;
  color: #3a5134;
}
.icon-ab-us {
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #dddcdc;
  border-radius: 50%;
  i {
    color: #cf9d6c;
  }
}
.text-ab-us {
  display: flex;
  color: #3a5134;
  align-items: center;
  font-size: 14px;
}
</style>
