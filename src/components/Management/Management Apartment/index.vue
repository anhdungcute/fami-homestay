<template>
  <div class="container my-5">
    <div class="d-flex justify-content-between mb-3">
      <h5>Danh sách căn hộ</h5>
      <div>
        <el-button type="primary" @click="showFormDepartment(true)"
          >Thêm căn hộ
        </el-button>
      </div>
    </div>
    <div v-if="listArea.length > 0">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="Tên căn hộ" prop="name" />
        <el-table-column label="Khu vực" prop="area">
          <template #default="scope">
            {{ scope.row.area.name }}
          </template>
        </el-table-column>
        <el-table-column label="Giới thiệu" prop="description" />
        <el-table-column align="right">
          <template #default="scope">
            <el-button size="small" @click="handleEdit(scope)">Sửa</el-button>
            <el-popconfirm
              width="220"
              confirm-button-text="Dồng ý"
              cancel-button-text="Hủy"
              title="Bạn muốn xóa căn hộ này ?"
              @confirm="handleDelete(scope)"
            >
              <template #reference>
                <el-button size="small" type="danger">Xóa</el-button>
              </template>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- Form thêm sửa khu vực -->
    <div>
      <el-dialog
        v-model="dialogTableVisible"
        :title="isCheck ? 'Thêm khu vực' : 'Chỉnh sửa khu vực'"
      >
        <el-form
          :label-position="labelPosition"
          label-width="100px"
          :model="formDepartment"
        >
          <el-form-item label="Tên phòng">
            <div class="row">
              <div class="col-6">
                <el-input
                  v-model="formDepartment.name"
                  placeholder="Nhập tên phòng..."
                />
              </div>
              <div class="col-6">
                <el-select
                  v-model="formDepartment.area"
                  placeholder="Chọn khu vực"
                >
                  <el-option
                    class="w-100"
                    v-for="item in listArea"
                    :key="item.value"
                    :label="item.name"
                    :value="item._id"
                  />
                </el-select>
              </div>
            </div>
          </el-form-item>
          <el-form-item label="Giá">
            <div class="row">
              <div class="col-6">
                <el-input
                  v-model="formDepartment.price"
                  placeholder="Nhập giá phòng..."
                />
              </div>
              <div class="col-6">
                <el-select
                  v-model="formDepartment.type"
                  placeholder="Chọn thời gian"
                >
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </div>
            </div>
          </el-form-item>
          <el-form-item label="Giới thiệu">
            <el-input
              :rows="2"
              type="textarea"
              v-model="formDepartment.introduce"
              placeholder="Nhập giới thiệu..."
            />
          </el-form-item>
          <el-form-item label="Mô tả">
            <el-input
              :rows="2"
              type="textarea"
              v-model="formDepartment.description"
              placeholder="Nhập giới thiệu..."
            />
          </el-form-item>
          <el-form-item label="Tải ảnh">
            <el-upload
              v-model:file-list="fileList"
              list-type="picture-card"
              :auto-upload="false"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove"
              :on-change="UploadFile"
            >
              <i class="fa-solid fa-plus"></i>
            </el-upload>
          </el-form-item>
        </el-form>
        <div class="mt-5" align="right">
          <el-button type="danger" @click="dialogTableVisible = false"
            >Hủy</el-button
          >
          <el-button type="primary" @click="handleACtion">{{
            isCheck ? "Thêm khu vực" : "Chỉnh sửa khu vực"
          }}</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { ElNotification } from "element-plus";
import BaseRequest from "../../../core/BaseRequest.js";
export default {
  setup() {
    const dialogTableVisible = ref(false);
    const isCheck = ref(false);
    const options = ref([
      {
        value: "DAY",
        label: "Ngày",
      },
      {
        value: "MONTH",
        label: "Tháng",
      },
      {
        value: "YEAR",
        label: "Năm",
      },
    ]);
    const formDepartment = ref({
      name: "",
      introduce: "",
      description: "",
      images: [],
      area: "",
      price: "",
      type: "All",
    });
    const tableData = ref([]);
    const listArea = ref([]);
    const fileList = ref([]);
    const search = ref("");
    // Hàm gọi list căn hô
    getListDeprtment();
    function getListDeprtment() {
      console.log("test", BaseRequest);
      BaseRequest.get("department?page=1&perPage=10").then((res) => {
        tableData.value = res.data.result;
      });
    }
    // Hàm gọi list khu vực
    getListArea();
    function getListArea() {
      BaseRequest.get(`area?page=1&perPage=10`).then((res) => {
        listArea.value = res.data.result;
      });
    }
    // Hàm thêm mới khu vực
    function handlerCreate() {
      BaseRequest.post("department", formDepartment.value).then((res) => {
        if (res) {
          formDepartment.value = {
            name: "",
            description: "",
            images: [],
            area: "",
            price: "",
            type: "",
          };
          getListDeprtment();
          dialogTableVisible.value = false;
          ElNotification({
            title: "Thành công",
            message: "Thêm căn hộ thành công",
            type: "success",
          });
        }
      });
    }
    // Hàm sửa khu vực
    function handlerEdit(id) {
      delete formDepartment.value.area;
      BaseRequest.put(`department/${id}`, formDepartment.value).then((res) => {
        if (res) {
          getListDeprtment();
          dialogTableVisible.value = false;
          ElNotification({
            title: "Thành công",
            message: "Chỉnh sửa khu vực thành công",
            type: "success",
          });
        }
      });
    }
    const handleEdit = (scope) => {
      BaseRequest.get(`department/${scope.row._id}`).then((res) => {
        if (res) {
          fileList.value = [];
          dataUpload.value = [];
          formDepartment.value = res.data;
          formDepartment.value.area = res.data.area._id;
          if (res.data?.images) {
            res.data.images.forEach((el) => {
              fileList.value.push({
                uid: el,
                name: el,
                url: `http://localhost:3000/${el}`,
              });
              dataUpload.value.push({ uid: el, url: el });
            });
          }

          isCheck.value = false;
          dialogTableVisible.value = true;
        }
      });
    };
    const handleDelete = (scope) => {
      BaseRequest.delete(`department/${scope.row._id}`).then((res) => {
        if (res) {
          getListDeprtment();
          ElNotification({
            title: "Thành công",
            message: "Xóa khu vực thành công",
            type: "success",
          });
        }
      });
    };

    function showFormDepartment(check) {
      fileList.value = [];
      formDepartment.value = {
        name: "",
        description: "",
        images: [],
        area: "",
        price: "",
        type: "",
      };
      isCheck.value = check;
      dialogTableVisible.value = true;
    }
    function handleACtion() {
      formDepartment.value.images = [];
      formDepartment.value.price = Number(formDepartment.value.price);
      if (dataUpload.value.length > 0) {
        dataUpload.value.forEach((el) => {
          formDepartment.value.images.push(el.url);
        });
      }
      if (isCheck.value) {
        handlerCreate();
      } else {
        handlerEdit(formDepartment.value._id);
      }
    }
    const dataUpload = ref([]);
    function UploadFile(e) {
      const fd = new FormData();
      fd.append("file", e.raw);
      BaseRequest.post("upload/single", fd).then((res) => {
        dataUpload.value.push({ uid: e.uid, url: res.data });
      });
    }
    function handleRemove(e) {
      dataUpload.value = dataUpload.value.filter((el) => el.uid != e.uid);
    }
    return {
      options,
      dialogTableVisible,
      isCheck,
      formDepartment,
      tableData,
      search,
      handleEdit,
      handleDelete,
      showFormDepartment,
      handleACtion,
      handlerCreate,
      UploadFile,
      handleRemove,
      listArea,
      fileList,
    };
  },
};
</script>

<style></style>
