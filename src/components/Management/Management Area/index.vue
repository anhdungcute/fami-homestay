<template>
  <div class="container my-5">
    <div class="d-flex justify-content-between mb-3">
      <h5>Danh sách khu vực</h5>
      <div>
        <el-button type="primary" @click="showFormArea(true)"
          >Thêm khu vực
        </el-button>
      </div>
    </div>
    <div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="Tên khu vực" prop="name" />
        <el-table-column label="Địa chỉ" prop="address" />
        <el-table-column label="Giới thiệu" prop="description" />
        <el-table-column align="right">
          <!-- <template #header>
            <el-input
              v-model="search"
              size="small"
              placeholder="Type to search"
            />
          </template> -->
          <template #default="scope">
            <el-button size="small" @click="handleEdit(scope)">Sửa</el-button>
            <el-popconfirm
              width="220"
              confirm-button-text="Dồng ý"
              cancel-button-text="Hủy"
              title="Bạn muốn xóa khu vực này ?"
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
          :model="formArea"
        >
          <el-form-item label="Tên khu vực">
            <el-input
              v-model="formArea.name"
              placeholder="Nhập tên khu vực..."
            />
          </el-form-item>
          <el-form-item label="Địa chỉ">
            <el-input
              v-model="formArea.address"
              placeholder="Nhập địa chỉ..."
            />
          </el-form-item>
          <el-form-item label="Giới thiệu">
            <el-input
              v-model="formArea.description"
              :rows="2"
              type="textarea"
              placeholder="Nhập giới thiệu..."
            />
          </el-form-item>
          <el-form-item label="Tiện ích">
            <div
              v-for="(item, index) in utilitiesClone"
              :key="index"
              style="width: 100%"
            >
              <div class="row">
                <div class="col-11">
                  <el-input
                    v-model="item.text"
                    :rows="1"
                    type="textarea"
                    class="mt-2"
                    placeholder="Nhập tiện ích..."
                  />
                </div>
                <div class="col-1">
                  <el-button
                    class="mt-2"
                    type="danger"
                    :icon="Delete"
                    circle
                    @click="hanleDeleteTn(item)"
                  />
                </div>
              </div>
            </div>
            <div class="mt-2">
              <el-button type="primary" size="small" @click="addUtilitiesClone"
                >Thêm tiện ích</el-button
              >
            </div>
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
import { ref, computed } from "vue";
import { Delete } from "@element-plus/icons-vue";
import BaseRequest from "../../../core/BaseRequest.js";
import { ElNotification } from "element-plus";
import { v4 as uuidv4 } from "uuid";
export default {
  setup() {
    const dialogTableVisible = ref(false);
    const isCheck = ref(false);
    const utilitiesClone = ref([]);
    const formArea = ref({
      name: "",
      address: "",
      description: "",
      utilities: [],
    });
    const tableData = ref([]);
    const search = ref("");
    // Hàm gọi list khu vực
    getListArea();
    function getListArea() {
      BaseRequest.get(`area?page=1&perPage=10`).then((res) => {
        tableData.value = res.data.result;
      });
    }
    // Hàm thêm mới khu vực
    function handlerCreate() {
      BaseRequest.post("area", formArea.value).then((res) => {
        if (res) {
          utilitiesClone.value = [{ text: "" }];
          formArea.value = {
            name: "",
            address: "",
            description: "",
            utilities: [],
          };
          getListArea();
          dialogTableVisible.value = false;
          ElNotification({
            title: "Thành công",
            message: "Thêm khu vực thành công",
            type: "success",
          });
        }
      });
    }
    // Hàm sửa khu vực
    function handlerEdit(id) {
      BaseRequest.put(`area/${id}`, formArea.value).then((res) => {
        if (res) {
          getListArea();
          dialogTableVisible.value = false;
          ElNotification({
            title: "Thành công",
            message: "Chỉnh sửa khu vực thành công",
            type: "success",
          });
        }
      });
    }
    function addUtilitiesClone() {
      utilitiesClone.value.push({ text: "", id: uuidv4() });
    }
    function hanleDeleteTn(val) {
      utilitiesClone.value = utilitiesClone.value.filter(
        (el) => el.id != val.id
      );
    }
    const handleEdit = (scope) => {
      utilitiesClone.value = [];
      scope.row.utilities.forEach((e) => {
        {
          utilitiesClone.value.push({ text: e });
        }
      });
      formArea.value = scope.row;
      isCheck.value = false;
      dialogTableVisible.value = true;
    };
    const handleDelete = (scope) => {
      BaseRequest.delete(`area/${scope.row._id}`).then((res) => {
        if (res) {
          getListArea();
          ElNotification({
            title: "Thành công",
            message: "Xóa khu vực thành công",
            type: "success",
          });
        }
      });
    };

    function showFormArea(check) {
      utilitiesClone.value.push({ text: "", id: uuidv4() });
      formArea.value = {
        name: "",
        address: "",
        description: "",
        utilities: [],
      };
      isCheck.value = check;
      dialogTableVisible.value = true;
    }
    function handleACtion() {
      formArea.value.utilities = [];
      if (utilitiesClone.value[0].text != "") {
        utilitiesClone.value.forEach((e) => {
          formArea.value.utilities.push(e.text);
        });
      }
      if (isCheck.value) {
        handlerCreate();
      } else {
        handlerEdit(formArea.value._id);
      }
    }
    return {
      utilitiesClone,
      dialogTableVisible,
      isCheck,
      formArea,
      tableData,
      Delete,
      search,
      handleEdit,
      handleDelete,
      showFormArea,
      handleACtion,
      addUtilitiesClone,
      handlerCreate,
      hanleDeleteTn,
    };
  },
};
</script>

<style></style>
