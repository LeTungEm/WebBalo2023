<template>
  <header class="sticky top-0 bg-gray-100 z-50">
    <div class="flex justify-between items-center py-4 px-3 lg:px-8 border-b shadown-lg">
      <button class="border rounded-lg p-1" @click="$emit('toggleSidebar')">
        <span aria-hidden="true">
          <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16">
            </path>
          </svg>
        </span>
      </button>
      <div class="flex items-center">
        <p class="block font-semibold px-4 py-2 ">{{ userInfo.email }}</p>
        <div class="relative">
          <button class="inline-block relative mx-3" @click="notify = !notify">
            <i class="fa fa-bell" aria-hidden="true"></i>
            <span
              class="animate-ping absolute top-1 right-0.5 block h-1 w-1 rounded-full ring-2 ring-green-400 bg-green-600"></span>
          </button>
          <div class="absolute z-30 right-2 shadown-lg top-6" :class="{ hidden: !notify }">
            <div class="bg-white rounded-lg shadow-lg py-2 w-48">
              <p class="block font-semibold px-4 py-2 cursor-pointer">Get Nofify</p>
            </div>
          </div>
        </div>

        <div class="relative">
          <button class="mx-3" @click="this.account = !this.account">
            <i class="fa fa-user" aria-hidden="true"></i>
          </button>
          <div class="absolute z-30 right-0 shadown-lg top-6" :class="{ hidden: !account }">
            <div class="bg-white rounded-lg shadow-lg py-2 w-48">
              <p class="block font-semibold px-4 py-2 | hover:bg-gray-50 cursor-pointer border-b-2">{{ userInfo.first_name
              }} {{ userInfo.last_name }}</p>
              <a href="#" class="block font-semibold px-4 py-2 | hover:bg-gray-50 cursor-pointer">Your profile</a>
              <a href="#" class="block font-semibold px-4 py-2 | hover:bg-gray-50 cursor-pointer">Settings</a>
              <button @click="logout"
                class="block font-semibold px-4 py-2 | hover:bg-gray-50 cursor-pointer w-full text-left">Sign out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import AccountService from '@/service/AccountService';

export default {
  name: "HeaderPage",
  data() {
    return {
      account: false,
      userInfo: [],
      notify: false,
    }
  },
  methods: {
    logout() {
      sessionStorage.removeItem('accountId');
      sessionStorage.removeItem('roleID');
      this.$cookies.remove("accountId");
      this.$cookies.remove("roleId");
      // Điều hướng đến trang đăng nhập
      this.hidden = true
      this.$router.push('/login');
    },
    getAllInfoByAccountId() {
      if (sessionStorage.getItem('accountId') != null) {
        AccountService.getByID(sessionStorage.getItem('accountId')).then(
          (res) => {
            this.userInfo = res.data
          }
        )
      }
      else {
        AccountService.getByID(this.$cookies.get('accountId')).then(
          (res) => {
            this.userInfo = res.data
          }
        )
      }
    },
    // Láy item
    getItemFromsessionStorage() {
      if (sessionStorage.getItem('accountId') != undefined) {
        this.hidden = false
        this.hideLogout = true
      } else {
        this.hidden = true
        this.hideLogout = false
      }
    }
  },
  props: {
    isSidebarVisible: Boolean
  },
  created() {
    this.getItemFromsessionStorage()
    this.getAllInfoByAccountId()
  },
};
</script>

<style></style>