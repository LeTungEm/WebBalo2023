<template>
  <div class="flex relative">
    <!-- Sidebar -->
    <Sidebar :isSidebarVisible="isSidebarVisible" />
    <div class="w-full h-screen overflow-scroll">
      <!-- Header -->
      <Header
        :isSidebarVisible="isSidebarVisible"
        @toggleSidebar="toggleSidebar"
      />
      <div class="mx-5 mb-12">
        <div
          @click="this.$router.push('/admin')"
          class="flex my-5 cursor-pointer"
        >
          <span aria-hidden="true">
            <svg
              class="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              ></path>
            </svg>
          </span>
          <span class="mx-2">/</span>
          {{ productId == 0 ? "Create" : "Update" }}
        </div>
        <!-- Thông báo -->
        <h1
          v-if="message"
          class="text-center bg-blue-300 text-white text-lg py-3"
        >
          {{ message }}
        </h1>
        <!-- Thông báo lỗi -->
        <h1
          v-if="errMessage"
          class="text-center bg-red-300 text-white text-lg py-3"
        >
          {{ errMessage }}
        </h1>
        <div class="">
          <div class="flex justify-between items-center">
            <h1 class="text-3xl font-bold">
              {{ productId == 0 ? "Create" : "Update" }}
            </h1>
            <div class="">
              <button
                class="border px-8 py-3 shadown-lg rounded-md my-5 uppercase bg-red-500 text-white hover:bg-red-600 mx-4"
              >
                Discard
              </button>
              <button
                v-on:click="submitForm"
                class="border px-8 py-3 shadown-lg rounded-md my-5 uppercase bg-blue-500 text-white hover:bg-blue-600 mx-4"
              >
                Create
              </button>
            </div>
          </div>
          <div class="lg:flex">
            <div
              class="lg:w-2/3 lg:mr-4 bg-white p-4 shadow-lg rounded-md border-2 my-4"
            >
              <div class="relative z-0 w-full mb-6 group">
                <h4 class="font-bold mb-2 text-md">Product Title</h4>
                <input
                  required
                  type="text"
                  class="w-full rounded-md px-3 py-2 border-2"
                  v-model="productName"
                  placeholder="Add a products..."
                />
              </div>
              <div class="relative z-0 w-full mb-6 group">
                <h4 class="font-bold mb-2 text-md">
                  Product Short Description
                </h4>
                <textarea
                  type="text"
                  name="shortDesc"
                  id="shortDesc"
                  class="rounded-md p-3 border-2 w-full"
                  v-model="shortDescription"
                  placeholder="Short Description..."
                ></textarea>
              </div>
              <div class="relative z-0 w-full mb-6 group">
                <h4 class="font-bold mb-2 text-md">Product Description</h4>
                <editor
                  v-model="description"
                  class="w-full"
                  api-key="yjaj2vzf11w5iyzfwroudo6smnvj72djze7vsfl7y23n9q1e"
                  :init="{
                    menubar: false,
                    plugins:
                      'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker permanentpen powerpaste advtable advcode editimage tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss',
                    toolbar:
                      'blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent',
                  }"
                />
              </div>
              <div class="relative z-0 w-full mb-6 group">
                <h4 class="font-bold mb-2 text-md">Display images</h4>
                <h4 class="mb-2 text-md text-gray-500">Hãy chọn 4 bức ảnh</h4>
                <input
                  v-on:change="onChangeFileUpload"
                  multiple
                  accept="image/*"
                  type="file"
                  class="mb-5"
                />
                <div class="h-50 w-full flex" v-if="blobURL[0]">
                  <img
                    class="object-cover w-1/4 p-1"
                    v-for="url in blobURL"
                    :key="url"
                    :src="url"
                    alt=""
                  />
                </div>
                <div v-else class="h-50 w-full flex">
                  <img
                    v-for="name in fileName"
                    :src="'https://data.webbalo.online/images/balo/' + name"
                    class="object-cover w-1/4 p-1"
                    :key="name"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div
              class="lg:w-1/3 lg:ml-4 bg-white p-4 shadow-lg rounded-md border-2 h-fit my-4"
            >
              <div class="relative z-0 w-full mb-6 group">
                <h4 class="font-bold mb-2 text-md">Date</h4>
                <input
                  required
                  type="date"
                  class="w-full rounded-md px-3 py-2 border-2"
                  v-model="createDate"
                />
              </div>
              <div class="relative z-0 w-full mb-6 group">
                <h4 class="font-bold mb-2 text-md">Date Change</h4>
                <input
                  required
                  type="date"
                  class="w-full rounded-md px-3 py-2 border-2"
                  v-model="dateChange"
                />
              </div>
              <div class="relative z-0 w-full mb-3">
                <h4 class="font-bold mb-2 text-md">Price</h4>
                <input
                  required
                  type="number"
                  class="w-full rounded-md px-3 py-2 border-2"
                  v-model="price"
                  placeholder="50.000, 60.000,..."
                />
              </div>
              <div class="relative z-0 w-full mb-3">
                <h4 class="font-bold mb-2 text-md">Amount</h4>
                <input
                  required
                  type="number"
                  class="w-full rounded-md px-3 py-2 border-2"
                  v-model="amount"
                  placeholder="1000, 200,..."
                />
              </div>
              <div class="mb-3">
                <div class="flex justify-between">
                  <h4 class="font-bold mb-2 text-md">Category</h4>
                </div>
                <select
                  v-model="catId"
                  class="w-full rounded-md px-3 py-2 border-2"
                >
                  <option
                    v-for="cat in cats"
                    :key="cat.catId"
                    :value="cat.catId"
                  >
                    {{ cat.catName }}
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Loading :status="loading" />
  </div>
</template>
  
<script>
import Sidebar from "@/components/Admin/Layout/Sidebar.vue";
import Header from "@/components/Admin/Layout/Header.vue";
import Editor from "@tinymce/tinymce-vue";
import ProductsService from "@/service/ProductsService";
import UploadImageService from "@/service/UploadImageService";
import CategoriesService from "@/service/CategoriesService";
import Loading from "../Layout/Loading.vue";

export default {
  name: "AboutPage",

  data() {
    return {
      account: false,
      isSidebarVisible: true,
      productId: this.$route.params.productId,
      productName: "",
      shortDescription: "",
      description: "",
      createDate: "",
      dateChange: "",
      price: 0,
      amount: 0,
      catId: 1,
      rate: "",
      cats: [],
      file: [],
      fileName: [],
      blobURL: [],
      message: "",
      errMessage: "",
      countLoadedFile: 0,
      loading: false,
    };
  },
  watch: {
    countLoadedFile: function () {
      if (this.countLoadedFile == 4) {
        this.loading = false;
        this.countLoadedFile = 0;
      }
    },
  },
  methods: {
    getProduct() {
      ProductsService.getByID(this.productId).then((res) => {
        this.productName = res.data.productName;
        this.description = res.data.description;
        this.createDate = res.data.createDate;
        this.price = res.data.price;
        this.shortDescription = res.data.shortDescription;
        this.fileName[0] = res.data.image_1;
        this.fileName[1] = res.data.image_2;
        this.fileName[2] = res.data.image_3;
        this.fileName[3] = res.data.image_4;
        this.amount = res.data.amount;
        this.dateChange = res.data.dateChange;
        this.catId = res.data.catId;
      });
    },

    toggleSidebar() {
      this.isSidebarVisible = !this.isSidebarVisible;
    },

    getCategories() {
      CategoriesService.getAll().then((res) => {
        this.cats = res.data;
      });
    },

    getDate() {
      var today = new Date();
      var month =
        today.getMonth() + 1 < 10
          ? "0" + (today.getMonth() + 1)
          : today.getMonth() + 1;
      this.createDate =
        today.getFullYear() + "-" + month + "-" + today.getDate();
      this.dateChange = this.createDate;
    },

    submitForm() {
      // upload file
      if (this.file.length == 4) {
        this.loading = true;
        for (let index = 0; index < 4; index++) {
          this.upLoadFile(this.file[index], this.fileName[index]);
        }

        if (this.productId == 0) {
          ProductsService.insertProduct(
            this.productName,
            this.description,
            this.createDate,
            this.price,
            this.shortDescription,
            this.fileName[0],
            this.fileName[1],
            this.fileName[2],
            this.fileName[3],
            this.amount,
            this.dateChange,
            this.catId
          ).then((res) => {
            if (res.data) {
              this.message = "Đã thêm " + this.productName;
              this.file = [];
              this.fileName = [];
              this.blobURL = [];
            } else {
              this.errMessage = "Thêm thất bại !!!";
            }
          });
        } else {
          console.log("update");
        }
      } else {
        this.errMessage = "Vui lòng chọn đủ 4 bức ảnh";
      }
    },

    onChangeFileUpload(e) {
      this.errMessage = "";
      this.file = e.target.files;
      if (this.file.length < 4) {
        this.errMessage = "Vui lòng chọn đủ 4 bức ảnh";
      } else {
        this.blobURL = [];
        this.fileName = [];
        for (let index = 0; index < 4; index++) {
          this.blobURL.push(URL.createObjectURL(this.file[index]));
          var number = Math.floor(Math.random() * 10000000000);
          this.fileName.push(number + this.file[index].name);
        }
      }
    },

    async upLoadFile(file, fileName) {
      let formData = new FormData();
      formData.append("file", file);
      formData.append("action", "upload");
      formData.append("targetFolder", "balo");
      formData.append("fileName", fileName);

      var status = await UploadImageService.uploadImage(formData)
        .then(function (data) {
          console.log("upload image: " + data.data);
          return true;
        })

        .catch(function () {
          console.log("FAILURE!!");
          return true;
        });
      if (status) {
        this.countLoadedFile++;
      }
    },
  },
  components: {
    Sidebar,
    Header,
    Editor,
    Loading,
  },
  created() {
    this.getCategories();
    this.getDate();
    this.getProduct();
  },
};
</script>
  