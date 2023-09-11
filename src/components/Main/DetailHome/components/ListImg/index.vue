<template>
  <div class="mt-4">
    <div class="container-lg">
      <div class="row list-img">
        <div class="col-6 pl-1">
          <div class="row h-100">
            <div class="col-12 p-0">
              <div class="h-100 pb-1">
                <img :src="dataImg[0].img" class="rounded-start w-100 h-100" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-6 pl-1">
          <div class="row h-100">
            <div class="col-6 p-0 pb-1 px-1">
              <img :src="dataImg[0].img" class="w-100 h-100" />
            </div>
            <div class="col-6 p-0 pb-1">
              <img :src="dataImg[0].img" class="rounded-end w-100 h-100" />
            </div>
            <div class="col-6 p-0 pb-1 px-1">
              <img :src="dataImg[0].img" class="w-100 h-100" />
            </div>
            <div class="col-6 p-0 pb-1 position-relative">
              <img :src="dataImg[0].img" class="rounded-end w-100 h-100" />
              <div class="position-absolute show-list-img">
                <i class="fa-solid fa-up-right-and-down-left-from-center"></i>
                HIỂN THỊ TẤT CẢ ẢNH
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, defineComponent } from "vue";
export default {
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

    return {
      dataImg,
    };
  },
};
</script>

<style lang="scss" scope>
.show-list-img {
  color: #706d6d;
  bottom: 10px;
  right: 10px;
  font-size: 0.75em;
  padding: 5px 15px;
  background: #fff;
  border-radius: 5px;
  cursor: pointer;
}
.list-img {
  img {
    cursor: pointer;
  }
}
</style>
