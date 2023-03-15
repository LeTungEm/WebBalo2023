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
          {{ contactId == 0 ? "Create" : "Update" }}
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
              {{ contactId == 0 ? "Create" : "Update" }}
            </h1>
            <div class="flex">
              <div
                class="cursor-pointer block border px-8 py-3 shadown-lg rounded-md my-5 uppercase bg-red-500 text-white hover:bg-red-600 mx-4"
              >
                Discard
              </div>
              <button
                v-on:click="submitForm"
                class="cursor-pointer border px-8 py-3 shadown-lg rounded-md my-5 uppercase bg-blue-500 text-white hover:bg-blue-600 mx-4"
              >
                Create
              </button>
            </div>
          </div>
          <div class="">
            <div
              class="lg:mr-4 bg-white p-4 shadow-lg rounded-md border-2 my-4"
            >
              <div class="relative z-0 w-full mb-6 group">
                <h4 class="font-bold mb-2 text-md">Title</h4>
                <input
                  required
                  type="text"
                  class="w-full rounded-md px-3 py-2 border-2"
                  v-model="contactName"
                  placeholder="Add a products..."
                />
              </div>
              <div class="relative z-0 w-full mb-6 group">
                <h4 class="font-bold mb-2 text-md">email</h4>
                <input
                  required
                  type="email"
                  class="w-full rounded-md px-3 py-2 border-2"
                  v-model="email"
                  placeholder="Add a products..."
                />
              </div>
              <div class="relative z-0 w-full mb-6 group">
                <h4 class="font-bold mb-2 text-md">Author</h4>
                <input
                  required
                  type="text"
                  class="w-full rounded-md px-3 py-2 border-2"
                  v-model="author"
                  placeholder="Add a products..."
                />
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
import ContactService from "@/service/ContactService";

export default {
  name: "CreateContact",

  data() {
    return {
      account: false,
      isSidebarVisible: true,
      contactId: this.$route.params.contactId,
      contactName: "",
      email: "",
      author: "",
      message: "",
      errMessage: "",
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarVisible = !this.isSidebarVisible;
    },

    getContact() {
      ContactService.getByID(this.contactId).then((res) => {
        if (res.data) {
          (this.contactName = res.data.contactName),
          (this.email = res.data.email),
          (this.author = res.data.author);
        }
      });
    },

    submitForm() {
      if (this.contactId == 0) {
        ContactService.insertContact(this.contactName, this.email, this.author)
          .then((res) => {
            if (res.data) {
              this.message = "Đã thêm " + this.contactName;
            } else {
              this.errMessage = "Thêm thất bại !!!";
            }
          })
          .catch(function () {
            console.log("FAILURE!!");
          });
      } else {
        console.log("update");
      }
    },
  },
  components: {
    Sidebar,
    Header,
  },
  created(){
    this.getContact();
  }
};
</script>
  