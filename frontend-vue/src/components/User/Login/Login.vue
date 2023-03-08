<template>
  <div class="">
    <Header />

    <Banner :bannerName="'categories'" :shopName="'PALDNE'" :menu="'Login'" />
    <div class="flex items-center justify-center my-12">
      <div class="lg:w-1/2">
        <h1 class="text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-6">
          <u>Login</u> <span><router-link to="/register">| Register</router-link></span>
        </h1>
        <form @submit.prevent="validate()" method="post">
          <div class="realtive border p-4 bg-gray-50 py-5">
            <div class="">
              <input required type="email" v-model="account.email" class="border px-4 py-2 my-2 w-full bg-white"
                placeholder="Email*" />
              <div class="flex items-center w-full">
                <div class="w-full">
                  <input required v-bind:type="showPassword ? 'text' : 'password'"
                    class="border px-4 py-2 my-2 w-full bg-white" v-model="account.password" placeholder="Password*" />
                </div>
                <div class="border py-2 px-3">
                  <button class="" @click="toggleShow">
                    <span class="icon is-small is-right">
                      <i class="fas" :class="{
                        'fa fa-eye': showPassword,
                        'fa fa-eye-slash': !showPassword,
                      }"></i>
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div class="my-4 flex justify-between items-center">
              <div class="flex">
                <input 
                  v-model="remember" 
                  type="checkbox" 
                  class="mr-2"/>
                <label for="">Remember me</label>
              </div>
              <router-link class="group text-pink-500 transition-all duration-300 ease-in-out" to="#">
                <span
                  class="pb-2 bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  Lost your password?
                </span>
              </router-link>
            </div>
            <button type="submit"
              class="w-full py-3 bg-black hover:bg-gray-800 duration-500 text-white border my-2 uppercase">
              sign in
            </button>
          </div>
        </form>
      </div>
    </div>
    <Notification @modelToggle="modelToggle = false" :content="notification" :status="modelToggle" />

    <Footer />
  </div>
</template>

<script>
import Header from "../Layout/Header.vue";
import Footer from "../Layout/Footer.vue";
import Banner from "../Layout/Banner.vue";
import AccountService from "@/service/AccountService.js";
import Notification from "./Notification.vue";
import AdminService from '@/service/AdminService.js';


export default {
  name: "LoginForm",
  components: {
    Banner,
    Notification,
    Header,
    Footer
  },
  data() {
    return {
      showPassword: false,
      remember: false,
      account: {
        password: "",
        email: "",
      },
      Repeat_password: null,
      showRePassword: false,
      modelToggle: false,
      notification: '',
    };
  },
  computed: {
    buttonLabel() {
      return this.showPassword ? "Hide" : "Show";
    },
  },
  methods: {
    toggleShow() {
      this.showPassword = !this.showPassword;
    },
    toggleShowRepwd() {
      this.showRePassword = !this.showRePassword;
    },
    validate() {
      if (!this.account.email || !this.account.password) {
        this.notification = "Không để trống các trường có dấu * !!!"
        this.modelToggle = true;
        return false;
      }
      this.getCheckLogin();
    },

    getCheckLogin() {
      AccountService.checkLogin(this.account.email, this.account.password).then(
        (res) => {
          // localStorage.setItem('accountId', res.data.accountId);
          // console.log(res.data);
          AccountService.getByID(res.data.accountId).then(res => {console.log(res.data)});

          this.saveData(res.data);
          if(this.isUser(res.data)){
            if(this.remember){
              this.setCookies();
            }
            this.$router.push("/");
          }else{
            AdminService.checkLogin(this.account.email, this.account.password).then(res => {
              if(this.isAdmin(res.data)){
                this.$router.push("/admin");
              }else{
                this.notification = "Sai tên đăng nhập hoặc mật khẩu!!!"
                this.modelToggle = true;
                return false;
              }
            })
          }
        }
      );
    },

    isUser(data) {
      if (data != null) {
        return true;
      }
      return false;
    },

    isAdmin(data){
      if(data != null){
        return true;
      }
      return false;
    },

    setCookies(accountId){
      this.$cookies.set('userId', accountId, 30);
    }
  },
};
</script>

