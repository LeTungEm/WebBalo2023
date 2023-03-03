<template>
    <div class="">
        <Banner 
            :bannerName="'categories'" 
            :shopName="'SHION HOUSE'" 
            :menu="'Login'"/>
        <div class="flex items-center justify-center my-12">
            <div class="lg:w-1/2">
                <h1 class="text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-6">
                    Login
                </h1>
                <div class="realtive border p-4 bg-gray-50 py-5">
                    <div class="">
                        <input type="text" class="border px-4 py-2 my-2 w-full bg-white" placeholder="Email*">
                        <div class="flex items-center w-full">
                            <div class="w-full">
                                <input v-if="showPassword" type="text" class="border px-4 py-2 my-2 w-full bg-white"
                                    v-model="password" placeholder="Password*" />
                                <input v-else type="password" class="border px-4 py-2 my-2 w-full bg-white" v-model="password"
                                    placeholder="Password*" />
                            </div>
                            <div class="border py-2 px-3">
                                <button class="" @click="toggleShow">
                                    <span class="icon is-small is-right">
                                        <i class="fas" :class="{
                                            'fa fa-eye': showPassword,
                                            'fa fa-eye-slash': !showPassword
                                        }"></i>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="my-4 flex justify-between items-center">
                        <div class="flex">
                            <input type="checkbox" class="mr-2" name="" id="">
                            <label for="">Remember me</label>
                        </div>
                        <router-link class='group text-pink-500 transition-all duration-300 ease-in-out' to='#'>
                            <span
                                class='pb-2 bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                                Lost your password?
                            </span>
                        </router-link>
                    </div>
                    <button class="w-full py-3 bg-black hover:bg-gray-800 duration-500 text-white border my-2 uppercase">sign in </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Banner from '../Layout/Banner.vue';

export default {
    name: "LoginForm",
    components:{
        Banner,
    },
    data() {
        return {
            showPassword: false,
            password: null,
            Repeat_password: null,
            showRePassword: false,

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
    }
}
</script>

<style></style>