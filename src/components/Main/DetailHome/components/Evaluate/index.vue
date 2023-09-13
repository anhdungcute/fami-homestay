<template>
  <div>
    <div>
      <h5>ĐÁNH GIÁ (0)</h5>
    </div>
    <div class="px-4">
      <div class="mb-3">
        <b>
          Đánh giá Studio 1 Ngủ Vinhomes Smartcity – Căn hộ dịch vụ Homestay
          Xanh Lá (Z07)</b
        >
      </div>
      <div>
        <div
          class="p-3 row"
          style="border: 1px solid #c5c5c5; border-radius: 20px"
        >
          <div class="col-md-8 col-lg-9 col-xl-10">
            <div class="row assess">
              <div class="col-md-12" v-for="(item, index) in 5" :key="index">
                <div class="row align-items-center">
                  <div class="col-md-2 col-xl-1 col-sm-2 col-2 p-0 text-center">
                    <span style="padding-right: 5px"> {{ index + 1 }}</span
                    ><i class="fa-solid fa-star" style="color: #f7ba2a"></i>
                  </div>
                  <div class="col-md-10 col-xl-11 col-sm-10 col-10 p-0">
                    <div class="row align-items-center">
                      <div class="col-md-7 col-xl-9 col-sm-7 col-5 text-end">
                        <el-progress
                          :percentage="percentage"
                          :color="customColor"
                          :stroke-width="12"
                        />
                      </div>
                      <div class="col-md-5 col-xl-2 col-sm-5 col-7 p-0">
                        | 0 đánh giá
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-md-4 col-lg-3 col-xl-2 d-flex justify-content-center align-items-center"
          >
            <el-button type="primary" @click="modalOpen = true"
              >Đánh giá ngay</el-button
            >
          </div>
        </div>
      </div>
    </div>
    <el-dialog
      v-model="modalOpen"
      title="Đánh giá Studio 1 Ngủ Vinhomes Smartcity – Căn hộ dịch vụ Homestay Xanh Vip (Z11) "
      width="550"
      :show-close="false"
    >
      <template #header="{ close, titleId, titleClass }">
        <div class="my-header">
          <h4 :id="titleId" :class="titleClass">
            Đánh giá Studio 1 Ngủ Vinhomes Smartcity – Căn hộ dịch vụ Homestay
            Xanh Vip (Z11)
          </h4>
          <el-button type="danger" @click="close" :icon="CloseBold" circle>
          </el-button>
        </div>
      </template>
      <div>
        <el-input
          v-model="textarea"
          placeholder="Mời bạn chia sẻ thêm một số cảm nhận..."
          :autosize="{ minRows: 4, maxRows: 10 }"
          type="textarea"
        />
        <div class="m-2 text-primary fw-semibold" id="upload-dg">
          <span class="fs-7 text">Gửi ảnh chụp thực tế</span>
          <el-upload
            action="#"
            list-type="picture-card"
            :auto-upload="false"
            v-model:file-list="fileList"
          >
            <i class="fa-solid fa-camera me-2 fs-3 text"></i>

            <template #file="{ file }">
              <div>
                <img
                  class="el-upload-list__item-thumbnail"
                  :src="file.url"
                  alt=""
                />
                <span class="el-upload-list__item-actions">
                  <span
                    v-if="!disabled"
                    class="el-upload-list__item-delete"
                    @click="handleRemove(file)"
                  >
                    <el-icon><Delete /></el-icon>
                  </span>
                </span>
              </div>
            </template>
          </el-upload>
        </div>
        <div class="row mt-2">
          <div class="col-4">
            <b>Bạn cảm thấy Phòng như thế nào?(chọn sao nhé)</b>
          </div>
          <div class="col-8">
            <el-rate
              v-model="value"
              :texts="['Rất tệ', 'Tệ', 'Bình thường', 'Tốt', 'Rất tốt']"
              show-text
            />
          </div>
        </div>
        <div class="d-flex mt-3">
          <div>
            <el-input placeholder="Họ tên..." />
          </div>
          <div class="mx-2">
            <el-input placeholder="Số điện thoại..." />
          </div>
          <div>
            <el-input placeholder="Email..." />
          </div>
        </div>
        <div class="mt-3">
          <el-checkbox class="me-1"></el-checkbox
          ><b
            >Lưu tên của tôi, email, và trang web trong trình duyệt này cho lần
            bình luận kế tiếp của tôi.</b
          >
        </div>
      </div>
      <template #footer>
        <div class="dialog-footer text-center">
          <el-button type="primary" @click="dialogVisible = false"
            >Đánh giá ngay</el-button
          >
        </div>
      </template>
    </el-dialog>
    <!-- <div class="col-lg-4 col-md-5 col-12">
          <div class="is-sticky-column__inner " >
            <div class="col-inner">
              <div class="price">
                <b>{{ addCommas(priceRoom) }}đ</b>/đêm
              </div>
              <div class="mt-4">
                <div class="book">
                  <div class="mb-2"><b>Thời gian đặt phòng</b></div>
                  <div>
                    <el-date-picker
                      v-model="dateBook"
                      class="w-100"
                      type="daterange"
                      range-separator="-"
                      start-placeholder="Ngày nhận phòng"
                      end-placeholder="Ngày trả phòng"
                      @change="changeDay"
                    />
                  </div>
                  <div class="mt-4">
                    <span>Số lượng phòng</span>
                    <el-input-number
                      v-model="numRoom"
                      :min="1"
                      :max="10"
                      @change="changeNumRoom"
                    />
                  </div>
                  <div
                    class="mt-4 d-flex justify-content-between"
                    v-if="priceBook"
                  >
                    <div><span> Giá phòng:</span>{{ priceBook }}</div>
                    <div>
                      <el-button size="small" type="primary" @click="cancelBook"
                        >Hủy tùy chọn</el-button
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-center mt-4">
                <el-button type="danger" size="medium" class="w-100"
                  >Đặt phòng</el-button
                >
              </div>
            </div>
          </div>
        </div> -->
  </div>
</template>

<script>
import { ref, defineComponent } from "vue";
import { CloseBold } from "@element-plus/icons-vue";
import { Delete } from "@element-plus/icons-vue";
export default {
  components: { Delete },
  setup() {
    const modalOpen = ref(false);
    const value = ref(null);
    const fileList = ref([]);
    const handleRemove = (file) => {
      fileList.value = fileList.value.filter((el) => el.uid != file.uid);
    };
    return { modalOpen, value, CloseBold, fileList, handleRemove };
  },
};
</script>

<style lang="scss" scope>
.percentage-value {
  display: block;
  margin-top: 10px;
  font-size: 28px;
}
.percentage-label {
  display: block;
  margin-top: 10px;
  font-size: 12px;
}
.demo-progress .el-progress--line {
  margin-bottom: 15px;
  width: 350px;
}
.demo-progress .el-progress--circle {
  margin-right: 15px;
}
.my-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.el-dialog__header {
  margin: 0 !important;
  padding: 10px !important;
}
.el-rate__icon {
  font-size: 2.5rem !important;
}
.el-rate__text {
  padding-left: 15px;
  padding-top: 10px;
  font-size: 1em;
}
#upload-dg {
  .el-upload--picture-card {
    width: 100px !important;
    height: 100px !important;
  }
  .el-upload-list__item {
    width: 100px !important;
    height: 100px !important;
  }
}
</style>
