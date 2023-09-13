<template>
  <div class="mt-4" v-if="data.length > 4">
    <div class="container-lg">
      <div class="row list-img">
        <div class="col-6 pl-1">
          <div class="row h-100">
            <div class="col-12 p-0">
              <div class="h-100 pb-1">
                <img
                  :src="`http://localhost:3000/${data[0]}`"
                  class="rounded-start w-100 h-100"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="col-6 pl-1">
          <div class="row h-100">
            <div class="col-6 p-0 pb-1 px-1">
              <img
                :src="`http://localhost:3000/${data[1]}`"
                class="w-100 h-100"
              />
            </div>
            <div class="col-6 p-0 pb-1">
              <img
                :src="`http://localhost:3000/${data[2]}`"
                class="rounded-end w-100 h-100"
              />
            </div>
            <div class="col-6 p-0 pb-1 px-1">
              <img
                :src="`http://localhost:3000/${data[3]}`"
                class="w-100 h-100"
              />
            </div>
            <div class="col-6 p-0 pb-1 position-relative">
              <img
                :src="`http://localhost:3000/${data[4]}`"
                class="rounded-end w-100 h-100"
              />
              <div
                class="position-absolute show-list-img"
                @click="dialogTableVisible = true"
              >
                <i class="fa-solid fa-up-right-and-down-left-from-center"></i>
                HIỂN THỊ TẤT CẢ ẢNH
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <el-dialog v-model="dialogTableVisible" title="Tất cả ảnh căn hộ">
      <div v-for="(i, k) in dataImg" :key="k" class="all-img">
        <img :src="`http://localhost:3000/${i}`" />
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { ref, defineComponent } from "vue";
export default {
  props: ["data"],
  setup(props, emit) {
    const dialogTableVisible = ref(false);
    const dataImg = ref(props.data);
    return {
      dataImg,
      dialogTableVisible,
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
.all-img {
  width: 100%;
  margin-top: 15px;
  img {
    width: 100%;
  }
}
</style>
