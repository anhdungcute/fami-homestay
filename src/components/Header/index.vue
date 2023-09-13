<template>
  <div id="header-wrapper">
    <!-- <div class="bg-menu">
      <img src="../../assets/bgmenu1.jpg" alt="" />
      <div class="fill-bg"></div>
      <div class="welcome-fami">
        <h1>Chào mừng bạn đến với Fami Homestay</h1>
      </div>
    </div> -->

    <div class="container-menu" style="padding: 10px 0">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-2 col-10 cus-logo">
            <div id="logo">
              <img
                @click="handlePush('home-first')"
                src="../../assets/logonew.png"
              />
            </div>
          </div>
          <div class="d-md-flex d-none col-6">
            <div class="d-md-flex d-none">
              <div class="container">
                <div class="mt-1">
                  <div id="nav">
                    <ul class="d-flex align-items-center m-0 p-0">
                      <li class="menu-item" @click="handlePush('home-first')">
                        <a>Trang chủ</a>
                      </li>
                      <li class="menu-item">
                        <a
                          >Giới thiệu
                          <i
                            class="fa-solid fa-chevron-down"
                            style="padding-left: 3px"
                          ></i
                        ></a>
                        <ul class="sub-menu">
                          <li
                            @click="handlePush('about-us', '6324786723794326')"
                          >
                            Giới thiệu chung
                          </li>
                          <li
                            v-for="(i, k) in listArea"
                            :key="k"
                            @click="handlePush('about-us-homestay', i._id)"
                          >
                            {{ i.name }}
                          </li>
                        </ul>
                      </li>
                      <li class="menu-item" @click="handlePush('management')">
                        <a>Quản lý</a>
                      </li>
                      <!-- <li class="menu-item"><a>Airbnb</a></li> -->
                      <li class="menu-item">
                        <a href="#contact">liên hệ</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-2 col-2 d-md-none d-flex">
            <div
              class="header-button d-flex justify-content-center align-items-center"
              @click="showMenu"
            >
              <i class="fa-solid fa-list"></i
              ><span class="d-sm-flex d-none">Menu</span>
            </div>
          </div>
          <div
            class="col-lg-4 p-0 col-md-4 d-md-flex d-none justify-content-center"
          >
            <div class="number-phone">
              <!-- <h5>(+84) 369 525 971</h5> -->

              <a href="tel:84369525971">
                <el-button color="#f24c5b" round
                  ><div class="text">hotline:0979.533.786</div></el-button
                ></a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="res-mobile">
      <el-drawer
        v-model="drawer"
        size="80%"
        direction="ltr"
        :with-header="true"
      >
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-menu-item @click="handlePush('home-first')">
            <span>Trang chủ</span>
          </el-menu-item>
          <el-sub-menu>
            <template #title>
              <span>Giới thiệu</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1" @click="handlePush('about-us')"
                >Giới thiệu chung</el-menu-item
              >
              <el-menu-item
                v-for="(i, k) in listArea"
                :key="k"
                @click="handlePush('about-us-homestay', i._id)"
                >{{ i.name }}</el-menu-item
              >
            </el-menu-item-group>
          </el-sub-menu>
          <el-menu-item @click="handlePush('contact')">
            <span>Liên hệ</span>
          </el-menu-item>
        </el-menu>
        <!-- <ul class="m-0 p-0 menu-mobile">
          <li class="menu-mobile-item" @click="handlePush('home-first')">
            <a>Trang chủ</a>
          </li>
          <li class="menu-mobile-item" @click="handlePush('about-us')">
            <a>Giới thiệu</a>
          </li>
          <li class="menu-mobile-item" @click="handlePush('contact')">
            <a>liên hệ</a>
          </li>
        </ul> -->
      </el-drawer>
    </div>
  </div>
</template>

<script>
import { ref, defineComponent } from "vue";
import BaseRequest from "../../core/BaseRequest.js";
import { useRouter } from "vue-router";
export default {
  setup() {
    const drawer = ref(false);
    const router = useRouter();
    const listArea = ref([]);
    function handlePush(name, id) {
      if (name) {
        router.push({
          name: name,
          query: { id: id },
        });
        drawer.value = false;
      }
    }
    getListArea();
    function getListArea() {
      BaseRequest.get(`area?page=1&perPage=10`).then((res) => {
        listArea.value = res.data.result;
      });
    }
    function showMenu() {
      drawer.value = true;
    }
    return { drawer, listArea, handlePush, showMenu };
  },
};
</script>

<style lang="scss" scope>
.container-menu {
  // position: absolute;
  width: 100%;
  top: 0;
}
.bg-menu {
  position: relative;
  img {
    width: 100%;
    max-height: 500px;
  }
  .fill-bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
  }
  .welcome-fami {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    text-align: center;
    margin: 0px auto;
    h1 {
      font-size: 2rem;
      text-transform: uppercase;
      color: #ffffff78;
    }
  }
}
@media screen and (max-width: 764px) {
  .bg-menu {
    display: none;
  }
  .container-menu {
    position: relative;
  }
}
#header-wrapper {
  position: relative;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.15);
}
#logo img {
  max-width: 100px;
  max-height: auto;
  padding-left: 10px;
  cursor: pointer;
}
#menu {
  background-color: #423a36;
}
.menu-item {
  list-style: none;
  margin: 0 10px;
  font-size: 0.9em;
  text-transform: uppercase;
  font-weight: 700;
  font-family: inherit;
  color: #fff;
  cursor: pointer;
  position: relative;
}
.menu-item {
  ul {
    padding: 0;
    background-color: rgb(243 239 239);
    box-shadow: #c2c6ca;
    z-index: 999;
    li {
      padding: 5px;
      font-size: 0.85em;
      color: #3a5134;
    }
    li:hover {
      color: #cf9d6c;
    }
  }
  .sub-menu {
    position: absolute;
    display: none;
    width: 200px;
    border-radius: 5px;
  }
}
.menu-item:hover {
  .sub-menu {
    display: block;
  }
}
.header-button {
  color: #c2c6ca;
  cursor: pointer;
  border: 1px solid;
  padding: 5px 10px;
  border-radius: 5px;
  i {
    font-size: 0.75em;
    padding-top: 2px;
  }
  span {
    padding-left: 5px;
    text-transform: uppercase;
    font-size: 0.85em;
  }
}
#nav ul {
  li {
    list-style: none;
    a {
      position: relative;
      display: block;
      text-transform: uppercase;
      margin: 10px 0;
      padding: 5px 5px;
      text-decoration: none;
      color: #3a5134;
      font-family: inherit;
      // font-size: 0.9em;
      font-weight: 700;
      transition: 0.5s;
      z-index: 1;
      &:hover {
        color: #cf9d6c;
        &:before {
          transform: scaleY(1);
          opacity: 1;
        }
        &:after {
          transform: scaleY(1);
          opacity: 1;
        }
      }
    }
  }
}
.custom-background {
  padding: 10px 0;
  margin: 0 25px;
}
.custom-icon-header {
  width: 35px;
  height: 35px;
  border: 1px solid #cf9d6c;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  i {
    color: #cf9d6c;
  }
}
.text-contact-header {
  font-size: 14px;
}
.number-phone {
  color: #cf9d6c;
  .text {
    font-weight: 700;
    text-transform: uppercase;
  }
}
.booking {
  padding: 8px 20px;
  color: #fff;
  background: #cf9d6c;
  border-radius: 5px;
  cursor: pointer;
}
.res-mobile {
  .el-drawer__body {
    padding: 0 !important;
  }
}
.menu-mobile {
  .menu-mobile-item {
    list-style: none;
    padding: 10px 15px;
    box-shadow: inset 0 -1px #ebebeb;
    text-align: center;
    font-size: 1em;
    text-transform: uppercase;
    font-weight: 700;
    font-family: inherit;
    color: #7f7f7f;
    cursor: pointer;
    &:hover {
      a {
        color: #cf9d6c;
      }
    }
  }
}
.search-home {
  align-items: center;
  padding: 10px 0;
  cursor: pointer;
  .search-home-img {
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    img {
      width: 35px;
      height: 35px;
      border-radius: 50%;
    }
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
}

@media screen and (min-width: 900px) {
  .cus-logo {
    display: flex;
    justify-content: center;
  }
}
@media screen and (max-width: 560px) {
  #logo {
    img {
      max-width: 80px;
      max-height: auto;
      cursor: pointer;
    }
  }
}
</style>
