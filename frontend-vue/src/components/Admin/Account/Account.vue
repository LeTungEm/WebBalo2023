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
          {{ (accountId == 0)?"Create":"Update" }}
        </div>
        <!-- Thông báo -->
        <h1 v-if="message" class="text-center bg-blue-300 text-white text-lg py-3">{{message}}</h1>
        <div class="">
          <div class="flex justify-between items-center">
            <h1 class="text-3xl font-bold">{{ (accountId == 0)?"Create":"Update" }}</h1>
            <div class="flex">
              <div
                class="cursor-pointer block border px-8 py-3 shadown-lg rounded-md my-5 uppercase bg-red-500 text-white hover:bg-red-600 mx-4"
              >
                Discard
              </div>
              <button
                v-on:click="submitForm"
                class="cursor-pointer border px-8 py-3 shadown-lg rounded-md my-5 uppercase bg-blue-500 text-white hover:bg-blue-600 mx-4">
                Create
              </button>
            </div>
          </div>
          <div class="lg:mr-4 bg-white p-4 shadow-lg rounded-md border-2 my-4">
            <div class="flex">
              <div class="relative z-0 w-full mb-6 group">
                <h4 class="font-bold mb-2 text-md">First name</h4>
                <input
                  required
                  type="text"
                  class="w-full rounded-md px-3 py-2 border-2"
                  v-model="first_name"
                  placeholder="*First name"
                />
              </div>
              <div class="relative z-0 w-full mb-6 group mx-4">
                <h4 class="font-bold mb-2 text-md">Last name</h4>
                <input
                  required
                  type="text"
                  class="w-full rounded-md px-3 py-2 border-2"
                  v-model="last_name"
                  placeholder="*Last name"
                />
              </div>
              <div class="relative z-0 w-full mb-6 group mr-4">
                <h4 class="font-bold mb-2 text-md">email</h4>
                <input
                  required
                  type="text"
                  class="w-full rounded-md px-3 py-2 border-2"
                  v-model="email"
                  placeholder="*email"
                />
              </div>
              <div class="relative z-0 w-full mb-6 group">
                <h4 class="font-bold mb-2 text-md">password</h4>
                <input
                  required
                  type="password"
                  class="w-full rounded-md px-3 py-2 border-2"
                  v-model="password"
                  placeholder="*password"
                />
              </div>
            </div>
            <div class="flex justify-center py-2">
                <img v-if="blobURL" :src="blobURL" alt="">
                <div v-else>
                    <img v-if="fileName" :src="'https://webbalo2023.000webhostapp.com/images/user/'+fileName" alt="">
                </div>
            </div>
            <div class="flex">
              <div class="relative z-0 w-full mb-6 group">
                <h4 class="font-bold mb-2 text-md">Day of birth</h4>
                <input
                  required
                  type="date"
                  class="w-full rounded-md px-3 py-2 border-2"
                  v-model="Birthday"
                  placeholder="*First name"
                />
              </div>
              <div class="relative z-0 w-full mb-6 group mx-4">
                <h4 class="font-bold mb-2 text-md">gender</h4>
                <select
                  class="w-full rounded-md px-3 py-2 border-2"
                  v-model="gender"
                >
                  <option
                    v-for="gender in genders"
                    :key="gender"
                    :value="gender.value"
                  >
                    {{ gender.name }}
                  </option>
                </select>
              </div>
              <div class="relative z-0 w-full mb-6 group mr-4">
                <h4 class="font-bold mb-2 text-md">Phone</h4>
                <input
                  required
                  type="number"
                  class="w-full rounded-md px-3 py-2 border-2"
                  v-model="phone"
                  placeholder="*0123 456 123"
                />
              </div>
              <div class="relative z-0 w-full mb-6 group">
                <h4 class="font-bold mb-2 text-md">Avatar</h4>
                <label
                  for="file"
                  class="inline-block px-5 py-2 text-white bg-blue-500 rounded font-bold border"
                  >Upload Image</label
                >
                <input id="file" hidden v-on:change="onChangeFileUpload" type="file" class="mb-5" />
              </div>
            </div>
            <div class="flex">
              <div class="relative z-0 w-full mb-6 group mx-4">
                <h4 class="font-bold mb-2 text-md">Address</h4>
                <input
                  required
                  type="text"
                  class="w-full rounded-md px-3 py-2 border-2"
                  v-model="address"
                  placeholder="*Address"
                />
              </div>
              <div class="relative z-0 w-full mb-6 group">
                <h4 class="font-bold mb-2 text-md">Role</h4>
                <select
                  class="w-full rounded-md px-3 py-2 border-2"
                  v-model="role"
                >
                  <option v-for="role in roles" :key="role.roleID" :value="role.roleID">
                    {{ role.roleName }}
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import Sidebar from "@/components/Admin/Layout/Sidebar.vue";
import Header from "@/components/Admin/Layout/Header.vue";
import AccountService from "@/service/AccountService";
import UploadImageService from "@/service/UploadImageService";
import RoleService from "@/service/RoleService";

export default {
  name: "AboutPage",

  data() {
    return {
      account: false,
      isSidebarVisible: true,
      description: "",
      blobURL: "",
      roles: [],
      genders: [
        { value: 0, name: "Male" },
        { value: 1, name: "Female" },
      ],
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      phone: "",
      fileName: "",
      Birthday: "2000-02-02",
      gender: 1,
      address: "",
      role: 3,
      file:[],
      accountId: this.$route.params.accountId,
      message:"",
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarVisible = !this.isSidebarVisible;
    },

    getRole(){
        RoleService.getAll().then(res =>{
            this.roles = res.data;
        })
    },

    getAccount(){
        AccountService.getByID(this.accountId).then(res =>{
            if(res.data != null){
                this.first_name = res.data.first_name,
                this.last_name = res.data.last_name,
                this.email = res.data.email,
                this.password = res.data.password,
                this.fileName = res.data.fileName,
                this.gender = res.data.gender,
                this.phone = res.data.phone,
                this.address = res.data.address,
                this.Birthday = res.data.Birthday,
                this.role = res.data.roleID,
                this.fileName = res.data.avatar
            }
        })
    },

    submitForm() {
      // upload file
      if (this.file && this.file.size > 0) {
        let formData = new FormData();
        formData.append("file", this.file);
        formData.append("action", "upload");
        formData.append("targetFolder", "user");
        formData.append("fileName", this.fileName);

        UploadImageService.uploadImage(formData)
          .then(function (data) {
            console.log("upload image: " + data.data);
          })

          .catch(function () {
            console.log("FAILURE!!");
          });
      }

      if (this.accountId == 0) {
        AccountService.registerAccountFullInfo(
            this.first_name,
            this.last_name,
            this.email,
            this.password,
            this.fileName,
            this.gender,
            this.phone,
            this.address,
            this.Birthday,
            this.role
        ).then((res) => {
          if (res.data) {
            this.message = "Đã thêm account" + this.first_name+" "+this.last_name;
          }
          console.log(res.data);
        });
      } else {
        console.log("update");
      }
    },

    onChangeFileUpload(e) {
        this.file = e.target.files[0];
        this.blobURL = URL.createObjectURL(this.file);
        var number = Math.floor(Math.random() * 10000000000);
        this.fileName = number + this.file.name;
    },
  },
  components: {
    Sidebar,
    Header,
  },
  created(){
    this.getAccount();
    this.getRole();
  }
};
</script>
  