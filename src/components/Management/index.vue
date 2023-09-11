<template>
  <div class="row p-4">
    <div class="col-2">
      <h5 class="mb-2">Quản lý</h5>
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-menu-item index="1" @click="changeManagement(1)">
          <span>Quản lý khu vực</span>
        </el-menu-item>
        <el-menu-item index="2" @click="changeManagement(2)">
          <span>Quản lý căn hộ</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="col-10">
      <div v-if="checkManager == 1">
        <Area />
      </div>
      <div v-if="checkManager == 2">
        <Apartment />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import Area from "./Management Area/index.vue";
import Apartment from "./Management Apartment/index.vue";
export default {
  components: { Area, Apartment },
  setup() {
    const checkManager = ref(1);
    function changeManagement(i) {
      checkManager.value = i;
    }
    return { checkManager, changeManagement };
  },
};
</script>

<style></style>
