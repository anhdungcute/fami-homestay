<template>
  <div>
    <!-- <div class="contact">
      <div>
        <img src="../../../assets/contact.jpg" />
      </div>
      <div class="text-contact" data-aos="zoom-in-up" data-aos-duration="1000">
        <div>
          <h1>Liện hệ</h1>
          <p>FAMI HOMESTAY</p>
        </div>
      </div>
    </div> -->
    <div class="contact-content">
      <div class="contact-content-tilte">
        <div class="ct-me">
          <h2 data-aos="zoom-in-up" data-aos-once="true">
            Liên hệ với Fami Homestay
          </h2>
          <div class="row">
            <div
              class="col-lg-4 col-md-12 col-12 mb-5"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-once="true"
            >
              <div class="contact-content-element">
                <div class="contact-content-element-icon">
                  <div class="icon">
                    <i class="fa-solid fa-location-arrow"></i>
                  </div>
                </div>
                <div class="contact-conetent-element-title">Vị trí</div>
                <div class="contact-content-element-described">
                  Số 3, Ngõ 25 Đường Quang Tiến, Phường Đại Mỗ, Quận Nam Từ
                  Liêm, Hà Nội
                </div>
              </div>
            </div>
            <div
              class="col-lg-4 col-md-12 col-12 mb-5"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              data-aos-once="true"
            >
              <div class="contact-content-element">
                <div class="contact-content-element-icon">
                  <div class="icon">
                    <i class="fa-solid fa-phone"></i>
                  </div>
                </div>
                <div class="contact-conetent-element-title">Số điện thoại</div>
                <div class="contact-content-element-described">
                  0979.533.786
                </div>
              </div>
            </div>
            <div
              class="col-lg-4 col-md-12 col-12 mb-5"
              data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="1000"
              data-aos-duration="2000"
              data-aos-once="true"
            >
              <div class="contact-content-element">
                <div class="contact-content-element-icon">
                  <div class="icon">
                    <i class="fa-solid fa-envelope"></i>
                  </div>
                </div>
                <div class="contact-conetent-element-title">Email</div>
                <div class="contact-content-element-described">
                  giangphongltd@gmail.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14899.140307588894!2d105.79381834999998!3d21.001250700000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1681875649951!5m2!1svi!2s"
          width="100%"
          height="400"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
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
.contact {
  position: relative;
  img {
    width: 100%;
    height: 500px;
  }
  .text-contact {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    h1 {
      font-size: 2rem;
      text-transform: uppercase;
    }
  }
}
.contact-content {
  padding: 50px 0 50px 0;
  .contact-content-tilte {
    .ct-me {
      padding: 0 30px;
      text-align: center;
      h2 {
        text-transform: uppercase;
        padding-bottom: 30px;
        color: #3a5134;
      }
    }
  }
  .contact-map {
    padding-top: 20px;
  }
}
.contact-content-element {
  border: 5px solid #f3f3f3;
  background-color: #fff;
  text-align: center;
  padding: 50px 0;
  .contact-content-element-icon {
    display: flex;
    justify-content: center;
    padding: 15px 0;
    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 70px;
      height: 70px;
      border: 1px solid #f3f3f3;
      border-radius: 50%;
      font-size: 1.8rem;
      i {
        color: #cf9d6c;
      }
    }
  }
  .contact-conetent-element-title {
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: 700;
    color: #3a5134;
  }
  &:hover {
    .icon {
      background-color: #cf9d6c;
      i {
        color: #fff;
      }
    }
    .contact-conetent-element-title {
      color: #cf9d6c;
    }
  }
}
</style>
