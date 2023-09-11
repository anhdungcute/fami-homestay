<template>
  <div style="position: relative">
    <div id="header">
      <Header />
    </div>
    <div id="main">
      <router-view></router-view>
    </div>
    <div id="button-contact-vr">
      <div class="gom-all-in-one">
        <div class="contact-vr">
          <div class="contact-vr-content">
            <div class="contact-vr-circle-fill"></div>
            <div class="contact-vr-img-circle">
              <a href="https://zalo.me/0369525971">
                <img
                  src="https://zhomestay.vn/wp-content/plugins/button-contact-vr/img/zalo.png"
                />
              </a>
            </div>
          </div>
        </div>
        <div id="phone-vr" class="button-contact">
          <div class="phone-vr">
            <div class="phone-vr-circle-fill"></div>
            <div class="phone-vr-img-circle">
              <a href="tel:84369525971">
                <img
                  alt="Phone"
                  src="https://zhomestay.vn/wp-content/plugins/button-contact-vr/img/phone.png"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div id="footer">
      <Footer />
    </div> -->
  </div>
</template>

<script>
import Header from "../components/Header/index.vue";
import Footer from "../components/Footer/index.vue";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss" scope>
#button-contact-vr {
  z-index: 9999999999;
  position: fixed;
  bottom: 10%;
  .gom-all-in-one {
    .contact-vr {
      position: relative;
      visibility: visible;
      background-color: transparent;
      width: 60px;
      height: 60px;
      cursor: pointer;
      z-index: 11;
      -webkit-backface-visibility: hidden;
      -webkit-transform: translateZ(0);
      transition: visibility 0.5s;
      left: 0;
      bottom: 0;
      display: block;
      .contact-vr-circle-fill {
        opacity: 0.7;
        box-shadow: 0 0 0 0 #1e73be;
        background-color: #1e73be;
        width: 50px;
        height: 50px;
        top: 12px;
        left: 12px;
        position: absolute;
        border-radius: 50%;
        border: 2px solid transparent;
        -webkit-animation: contact-vr-circle-fill 2.3s infinite ease-in-out;
        animation: contact-vr-circle-fill 2.3s infinite ease-in-out;
        transition: all 0.5s;
        transform-origin: 50% 50%;
        animation: zoom 1.3s infinite;
      }
      .contact-vr-img-circle {
        background-color: #1e73be;
        width: 30px;
        height: 30px;
        line-height: 30px;
        top: 22px;
        left: 22px;
        position: absolute;
        border-radius: 50%;
        overflow: hidden;
        display: flex;
        justify-content: center;
        -webkit-animation: phonering-alo-circle-img-anim 1s infinite ease-in-out;
        animation: contact-vr-circle-fill 1s infinite ease-in-out;
        a {
          display: block;
          line-height: 37px;
          img {
            max-height: 25px;
            max-width: 20px;
            position: absolute;
            top: 5px;
            left: 5px;
          }
        }
      }
    }
    .phone-vr {
      position: relative;
      visibility: visible;
      background-color: transparent;
      width: 60px;
      height: 60px;
      cursor: pointer;
      z-index: 11;
      -webkit-backface-visibility: hidden;
      -webkit-transform: translateZ(0);
      transition: visibility 0.5s;
      left: 0;
      bottom: 0;
      display: block;
      .phone-vr-circle-fill {
        opacity: 0.7;
        box-shadow: 0 0 0 0 #269041;
        background-color: #269041;
        width: 50px;
        height: 50px;
        top: 12px;
        left: 12px;
        position: absolute;
        border-radius: 50%;
        border: 2px solid transparent;
        -webkit-animation: contact-vr-circle-fill 2.3s infinite ease-in-out;
        animation: contact-vr-circle-fill 2.3s infinite ease-in-out;
        transition: all 0.5s;
        transform-origin: 50% 50%;
        animation: zoom 1.3s infinite;
      }
      .phone-vr-img-circle {
        background-color: #269041;
        width: 30px;
        height: 30px;
        line-height: 30px;
        top: 22px;
        left: 22px;
        position: absolute;
        border-radius: 50%;
        overflow: hidden;
        display: flex;
        justify-content: center;
        -webkit-animation: phonering-alo-circle-img-anim 1s infinite ease-in-out;
        animation: contact-vr-circle-fill 1s infinite ease-in-out;
        a {
          display: block;
          line-height: 37px;
          img {
            max-height: 25px;
            max-width: 20px;
            position: absolute;
            top: 5px;
            left: 5px;
          }
        }
      }
    }
  }
}
@keyframes zoom {
  0% {
    transform: scale(0.9);
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 15px transparent;
  }
  100% {
    transform: scale(0.9);
    box-shadow: 0 0 0 0 transparent;
  }
}
@keyframes contact-vr-circle-fill {
  0% {
    -webkit-transform: rotate(0) scale(1) skew(1deg);
  }

  10% {
    -webkit-transform: rotate(-25deg) scale(1) skew(1deg);
  }
  20% {
    -webkit-transform: rotate(25deg) scale(1) skew(1deg);
  }
  30% {
    -webkit-transform: rotate(-25deg) scale(1) skew(1deg);
  }
  40% {
    -webkit-transform: rotate(25deg) scale(1) skew(1deg);
  }
  50% {
    -webkit-transform: rotate(0) scale(1) skew(1deg);
  }
  100% {
    -webkit-transform: rotate(0) scale(1) skew(1deg);
  }
}
</style>
