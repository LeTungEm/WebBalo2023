<template>
  <div class="flex">
    <!-- Sidebar -->
    <Sidebar :isSidebarVisible="isSidebarVisible" />
    <div class="w-full h-screen overflow-scroll">
      <!-- Header -->
      <Header
        :isSidebarVisible="isSidebarVisible"
        @toggleSidebar="toggleSidebar"
      />
      <router-link
        to="/createProduct/0"
        class="m-5 inline-block border px-8 py-3 shadown-lg rounded-md my-5 uppercase hover:bg-gray-100"
        >Create</router-link
      >
      <h1
        v-if="message"
        class="text-center bg-blue-300 text-white text-lg py-3"
      >
        {{ message }}
      </h1>
      <!-- Main content -->
      <Table
        @removeID="changeRemoveID"
        @deleteItem="deleteProduct"
        :data="listProduct"
        :from-type="'/createProduct/'"
      />
    </div>
    <Loading :status="loading" />
  </div>
</template>
  
<script>
import Sidebar from "@/components/Admin/Layout/Sidebar.vue";
import Header from "@/components/Admin/Layout/Header.vue";
import Table from "@/components/Admin/Table/Table.vue";
import ProductsService from "@/service/ProductsService";
import UploadImageService from "@/service/UploadImageService";
import Loading from "../Layout/Loading.vue";

export default {
  name: "ProductAdmin",

  data() {
    return {
      account: false,
      isSidebarVisible: true,
      listProduct: [],
      removeID: "",
      message: "",
      countDeleteFile: 0,
      loading: false,
    };
  },
  watch:{
    countDeleteFile:function(){
      if(this.countDeleteFile == 4){
        this.countDeleteFile = 0;
        this.loading = false;
      }
    }
  },
  methods: {
    toggleSidebar() {
      this.isSidebarVisible = !this.isSidebarVisible;
    },
    getAllProduct() {
      ProductsService.getAll().then((res) => {
        res.data.map((data) => {
          this.listProduct.push({
            id: data.productID,
            header: data.productName,
            title: data.createDate,
            description: data.amount,
            image: data.image_1 ? "balo/" + data.image_1 : "default.jpg",
            image2: data.image_1 ? "balo/" + data.image_2 : "default.jpg",
            image3: data.image_1 ? "balo/" + data.image_3 : "default.jpg",
            image4: data.image_1 ? "balo/" + data.image_4 : "default.jpg",
          });
        });
      });
    },
    changeRemoveID(value) {
      this.removeID = value;
      this.message = "";
    },

    deleteProduct() {
      ProductsService.deleteProduct(this.removeID).then((res) => {
        if (res.data) {
          console.log(res.data + this.removeID);
          // Tìm item đã xóa
          this.message =
            "Đã xóa " +
            this.listProduct.find((product) => {
              if (product.id == this.removeID) {
                // Xóa ảnh khỏi api
                this.deleteImage(product);
                return product;
              }
            }).header;

          // Xoá item khỏi danh sách local
          this.listProduct = this.listProduct.filter((product) => {
            if (product.id != this.removeID) {
              return product;
            }
          });
        } else {
          this.message = "Xóa không thành công";
        }
      });
    },

    deleteImage(product) {
      this.loading = true;
      var arrImageName = [
        product.image,
        product.image2,
        product.image3,
        product.image4,
      ];
      arrImageName.forEach((element) => {
        let formData = new FormData();
        formData.append("action", "delete");
        formData.append("path", "../images/" + element);
        this.deleteOnImage(formData);
        
      });
    },

    async deleteOnImage(dataDelete){
      var status = await UploadImageService.uploadImage(dataDelete)
          .then(function (data) {
            console.log("delete image: " + data.data);
            return true;
          })

          .catch(function () {
            console.log("FAILURE!!");
            return true;
          });
          if(status){
            this.countDeleteFile++;
          }
    }
  },
  components: {
    Sidebar,
    Header,
    Table,
    Loading,
  },
  created() {
    this.getAllProduct();
  },
};
</script>
  