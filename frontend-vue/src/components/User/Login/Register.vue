<template>
    <div class="">
        <Banner 
            :bannerName="'categories'" 
            :shopName="'SHION HOUSE'" 
            :menu="'Register'"/>
        <div class="flex items-center justify-center my-12">
            <div class="lg:w-1/2">
                <h1 
                    class="text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-6">
                    <span><router-link to="/login">Login | </router-link></span><u>Register</u>
                </h1>
                <form @submit.prevent="validate()" action="" method="post" class="realtive border p-4 bg-gray-50 py-5">
                    <div class="">
                        <div class="flex">
                            <input 
                                required
                                type="text" 
                                v-model="account.firstName"
                                class="border px-4 py-2 my-2 w-full mr-2 bg-white" 
                                placeholder="First name*">
                            <input 
                                required
                                type="text" 
                                v-model="account.lastName"
                                class="border px-4 py-2 my-2 w-full ml-2 bg-white" 
                                placeholder="Last name*">
                        </div>
                        <input 
                            required
                            type="email" 
                            v-model="account.email"
                            class="border px-4 py-2 my-2 w-full" 
                            placeholder="Email*">
                        <div class="flex items-center w-full">
                            <div class="w-full">
                                <input
                                    required
                                    v-bind:type="showPassword ? 'text' : 'password'"
                                    class="border px-4 py-2 my-2 w-full bg-white"
                                    v-model="account.password"
                                    placeholder="Password*"
                                    />
                            </div>
                            <div class="border py-2 px-3">
                                <button class="button" @click="toggleShow">
                                    <span class="icon is-small is-right">
                                        <i class="fas" :class="{
                                            'fa fa-eye': showPassword,
                                            'fa fa-eye-slash': !showPassword
                                        }"></i>
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div class="flex items-center w-full">
                            <div class="w-full">
                                <input
                                    required
                                    v-bind:type="showRePassword ? 'text' : 'password'"
                                    class="border px-4 py-2 my-2 w-full bg-white"
                                    v-model="account.Repeat_password"
                                    placeholder="Password*"
                                    />
                            </div>
                            <div class="border py-2 px-3">
                                <button class="button" @click="toggleShowRepwd">
                                    <span class="icon is-small is-right">
                                        <i class="fas" :class="{
                                            'fa fa-eye': showRePassword,
                                            'fa fa-eye-slash': !showRePassword
                                        }"></i>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <button type="submit" class="w-full py-3  bg-black hover:bg-gray-800 duration-500 text-white  border my-2 uppercase">create an account</button>
                </form>
            </div>
        </div>
        <Notification :content="notification" :status="modelToggle" @modelToggle="modelToggle = false" />
    </div>
</template>

<script>
import Banner from '../Layout/Banner.vue';
import Notification from "./Notification.vue";
import AccountService from "../../../service/AccountService.js";

export default {
    name: "LoginForm",
    components:{
        Banner,
        Notification,
    },
    data() {
        return {
            showPassword: false,
            showRePassword: false,
            account: {
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                Repeat_password: "",
            },
            modelToggle: false,
            notification: '',
        };
    },
    computed: {
        buttonLabel() {
            return this.showPassword ? "Hide" : "Show";
        }
    },
    methods: {
        toggleShow() {
            this.showPassword = !this.showPassword;
        },
        toggleShowRepwd() {
            this.showRePassword = !this.showRePassword;
        },
        validate() {
            if(this.account.password !== this.account.Repeat_password){
                this.notification = "check your repeate password !!!"
                this.modelToggle = true;
                return false;
            }else if(this.account.password.length < 8){
                this.notification = "Your password is too short !!!"
                this.modelToggle = true;
                return false;
            }
            this.checkRegister();
        },
        checkRegister() {
            AccountService.checkEmailExisted(this.account.email).then(
                (res) => {
                    this.saveData(res.data);
                }
            );
        },
        saveData(data) {
            if(data){
                this.notification = "your email is existed !!!"
                this.modelToggle = true;
            }else{
                AccountService.registerAccount(this.account.firstName, this.account.lastName, this.account.email, this.account.password).then(res => console.log("result: "+res.data));
            }
        },
    }
}
</script>

<style></style>
